---
title: "Model Merging from Scratch · Lesson 00: Three Cities, One Constraint"
date: "2026-09-15"
excerpt: "Why merge LiDAR segmentation models instead of pooling their data, what a fine-tuned checkpoint actually contains, and what a merged model has to compete against."
tags: ["model-merging", "lidar", "point-clouds", "pytorch", "model-merging-from-scratch"]
---

*Model Merging from Scratch* is a lesson-by-lesson series on combining
neural networks in weight space. Every idea is defined before it is used,
and every idea is tied to code. The running example is point-transformer
encoders fine-tuned for semantic segmentation of mobile-LiDAR point clouds
from three Indian cities, called **City B**, **City K** and **City C**.

Lesson 00 sets the stage: why merging, which models, and what a merged
model has to compete against.


## One model per city does not scale

A city-scale perception pipeline needs a segmentation model for every city
it covers. The obvious route is one fine-tuned model per city. Three cities,
three models. Now picture twenty.

The obvious fix is to pool all the data and train once. That is blocked three times over:

| Blocker | What it looks like here | Why it hurts pooling |
|---|---|---|
| **Environments differ** | City B: unplanned dense core · City K: vegetated corridors · City C: planned grid | Pooling averages the conflict instead of removing it |
| **Sensors differ** | Handheld scanners and vehicle-mounted scanners | Every new city means retraining on everything |
| **Data cannot move** | India's Geospatial Policy restricts sharing raw geospatial data | The point clouds cannot sit in one directory, for legal reasons |

> **The pivot.** The constraint is not compute, it is **custody**. Each city
> trains behind its own wall and ships a set of *weights*. We combine the
> weights, and nobody's raw data ever leaves the building. That is model merging.

Where one group legally holds every city's data, a pooled model can still be
trained, and it makes a useful reference point: "what if custody were no
object?" Between institutions that model cannot be built at all. Lesson 08
sets the two side by side.

## Model merging in one formula

Let **θ₀** be the shared pretrained encoder and **θᵢ** the encoder
fine-tuned on city *i*. What city *i* taught the model is its **task vector**,
the difference between the two:

```text
τᵢ = θᵢ − θ₀                           (one task vector per city)
θ* = θ₀ + merge(τ_B, τ_K, τ_C)          (one merged encoder)
```

Everything interesting lives inside `merge(·)`: Task Arithmetic, TIES,
DARE, DELLA, magnitude-aware weighting. Each gets its own lesson.

We merge **the encoder only**, then re-attach each city's own decoder and
classification head. The encoder learns transferable geometry (what a wall,
a wire or a tree looks like as points). The head encodes each city's
taxonomy and label statistics. So sharing knowledge means merging
encoders, and respecting each city's task means keeping its own head.

![The model-merging pipeline used throughout the series](/blog/model-merging/00_setup/fig/pipeline.svg)

*The whole series in one picture. City fine-tunes become task vectors
against the shared base, get merged in weight space (encoder only), and
each city's head is re-attached before evaluating on every city.
Lessons 02–06 zoom into the MERGE box, 07 covers attachment, 08 evaluation.*

## The cast: three pretrained encoders

The series uses three point-transformer encoders, each pretrained by its
authors on large point-cloud collections and then fully fine-tuned per city:

- **Utonia**, the main character: most lessons run on it.
- **Sonata** and **Concerto**, used to check whether a lesson's finding is a
  property of merging or just a property of one architecture.

Every point carries geometry (XYZ), color (RGB) and surface normals. Color is
not equally available everywhere: some campaigns captured it, others did not.
Remember that whenever knowledge transfers better in one direction than the other.

Per architecture there is one pretrained base and one fine-tune per city.
That base-plus-fine-tunes family is the unit of merging.

> **The one non-negotiable prerequisite.** All city fine-tunes must descend
> from the **same** θ₀. An early setup accidentally mixed fine-tunes that
> started from *different* pretrained bases, and the merged model collapsed:
> the task vectors mostly measured the gap between the two bases, not what
> each city taught. Lesson 05 dissects that failure. Until then:
> *a task vector only means something against its own base.*

## What a merged model competes against

A merged encoder wearing city *i*'s head, tested on city *i*, competes
against **that city's own fully fine-tuned specialist**. The specialist saw
only its city's data and spent its whole capacity on it, so it is the natural
bar. Merging wins if one shared encoder comes close to every specialist at
once, while no city ever hands over its data.

Two other reference points frame the result from below and above:

- **Transfer (the floor):** one city's specialist applied, unchanged, to
  another city. Merging should beat it, or combining weights added nothing.
- **Pooled training (the ceiling):** one model trained on every city's data at
  once, possible only where custody allows. Merging approaches it without
  ever moving the data.

Cities also differ in difficulty: a planned grid is easier to segment than a
dense, unplanned core. Always compare a merged model with the same city's
specialist, never with an average across cities.

## Hands-on: what is inside a checkpoint?

Merging manipulates `state_dict`s, so before any math we open two files: a
pretrained base and a city fine-tune. Training frameworks such as Pointcept
save a wrapper dict; released weights are often a bare state dict. One
helper handles both:

```python
import torch

def load_ckpt(path):
    try:
        return torch.load(path, map_location="cpu", weights_only=True)
    except Exception:  # checkpoint also stores non-tensor objects (trusted file)
        return torch.load(path, map_location="cpu", weights_only=False)

def as_state_dict(ckpt):
    """Training checkpoints wrap the weights; released ones are bare."""
    if isinstance(ckpt, dict) and "state_dict" in ckpt:
        return ckpt["state_dict"]
    return ckpt

base_sd = as_state_dict(load_ckpt("base.pth"))         # pretrained θ₀
ft_sd = as_state_dict(load_ckpt("city_finetune.pth"))  # city fine-tune θᵢ
```

The fine-tuned state dict splits cleanly in two, by key prefix:

```python
ENCODER_PREFIXES = ("backbone.embedding", "backbone.enc.")   # what we merge
HEAD_PREFIXES = ("backbone.dec.", "seg_head.")               # what stays per city

enc_ft = {k: v for k, v in ft_sd.items() if k.startswith(ENCODER_PREFIXES)}
head_ft = {k: v for k, v in ft_sd.items() if k.startswith(HEAD_PREFIXES)}
leftover = ft_sd.keys() - enc_ft.keys() - head_ft.keys()

# base keys are unprefixed ('enc.*'): strip 'backbone.' to align
enc_ft = {k.removeprefix("backbone."): v for k, v in enc_ft.items()}
shared = enc_ft.keys() & base_sd.keys()
print("in neither split :", sorted(leftover))
print("base-only keys   :", sorted(base_sd.keys() - enc_ft.keys()))
print("fine-tune-only   :", sorted(enc_ft.keys() - base_sd.keys()))
same_shapes = all(enc_ft[k].shape == base_sd[k].shape for k in shared)
print("shapes all match :", same_shapes)
```

What it prints for Utonia:

```text
in neither split : []
base-only keys   : ['embedding.mask_token']
fine-tune-only   : []
shapes all match : True
```

Three facts to carry forward:

- **Nothing falls outside the split.** Every fine-tuned tensor is either
  encoder or head, so "merge the encoder, keep the head" covers the whole model.
- **Base and fine-tune share the encoder architecture exactly**: the same
  keys with the same shapes, once `backbone.` is stripped. That is what makes
  `θᵢ − θ₀` a valid subtraction, tensor by tensor.
- **The one extra base tensor**, `embedding.mask_token`, is a pretraining
  leftover the fine-tunes drop, so base-only keys have no task vector.

## How a merge experiment is produced and named

Every merge experiment ("cell") runs the same five steps:

1. encoder-only merge of the selected task vectors,
2. attach City B's decoder/head,
3. attach City K's decoder/head,
4. attach City C's decoder/head,
5. load-sanity check: attached key sets must match each city's fine-tune exactly.

```text
merged_checkpoints/<base>/<cities>_<method>_<hp>/
├── encoder.pth                        merged encoder (encoder-only state_dict)
├── attached_B.pth                     encoder + City B decoder/head
├── attached_K.pth                     encoder + City K decoder/head
├── attached_C.pth                     encoder + City C decoder/head
├── attached_<city>.attach_info.json   provenance for each attached checkpoint
└── merge_info.json                    method, weights, hyperparameters
```

Names decode as `<base>/<cities>_<method>_<hp>`: `<cities>` lists which
cities were merged (`BKC` = all three), `<method>` is the merge rule (`ta`,
`ties`, `dare`, …), and `<hp>` packs its hyperparameters. So
`utonia/BKC_ties_d05` reads "Utonia encoders of all three cities,
TIES-merged, density hyperparameter `d05`". Lesson 03 rebuilds that cell
from scratch and explains what density means.

The point of the ritual: every merged file carries its own receipt. Months
later you can still say exactly which fine-tunes, which rule and which
settings produced it.

## Where the series goes

| Lesson | Question it answers |
|---|---|
| **00 setup** | What is the problem, who is the cast, what is the bar? *(this post)* |
| [01 weight space](/blog/model-merging-01-weight-space) | What does it mean to treat a checkpoint as a point, and why can you interpolate at all? |
| 02 task vectors | What does a task vector look like: how long, and pointing where? |
| 03 TIES | Trim, elect sign, merge: built from scratch, then checked against a production merge. |
| 04 DARE / DELLA | Why does randomly dropping most of a task vector barely hurt? |
| 05 when merging breaks | Mismatched pretraining and magnitude asymmetry. |
| 06 magnitude weighting | How reweighting rescues the city that gets drowned. |
| 07 attach & deploy | Head attachment, and one universal model vs a per-city kit. |
| 08 evaluation | Merging vs transfer vs pooled training, class by class. |
| 09 extensions | Merging across regions and across tasks. |

**Next: [Lesson 01 · Weight space](/blog/model-merging-01-weight-space)**: what it means to
treat these state dicts as points, and why averaging two of them can work at all.
