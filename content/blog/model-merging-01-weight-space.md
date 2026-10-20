---
title: "Model Merging from Scratch · Lesson 01: A Model Is a Point"
date: "2026-09-15"
excerpt: "Checkpoints as points in weight space, fine-tuning as a displacement, and the one-basin condition that decides whether averaging weights gives you a model or garbage."
tags: ["model-merging", "weight-space", "loss-landscape", "pytorch", "model-merging-from-scratch"]
---

Model merging is arithmetic on weights. Before trusting that arithmetic we
need a picture of what a set of weights *is*. This lesson builds that picture
one definition at a time, and ends with a tiny experiment you can run in
seconds that shows when averaging weights works and when it fails.


This is the chain we are about to walk. Each box is one definition below,
and the label on each arrow is the relation that leads to the next one:

![Concept chain of lesson 01](/blog/model-merging/01_weight_space/fig/concept_chain.svg)

## From parameters to a point

### Parameter

A **parameter** (or weight) is one learnable number inside a network.
Training never changes the architecture, the wiring; it only changes these
numbers.

**Why it matters:** merging has to combine what several models learned, and
all of that learning is stored in these numbers and nowhere else. So
"combine models" can only ever mean "combine numbers".

A single linear layer `y = W·x + b` with 2 inputs and 3 outputs has a 3×2
matrix `W` (6 numbers) and a bias vector `b` (3 numbers), so 9 parameters:

![A linear layer with 2 inputs and 3 neurons has 6 weights and 3 biases](/blog/model-merging/01_weight_space/fig/layer_params.svg)

Reading one output off the picture: `y₁ = 0.2·x₁ + (−0.1)·x₂ + 0.1`.

### Neuron and layer

A **neuron** is one computing unit: it takes a weighted sum of its inputs,
adds its own bias, and passes the result through a squashing function. Its
parameters are the weights on its incoming connections plus its bias. A
**layer** is a row of neurons side by side, and a deep network stacks layers
so that each one feeds the next.

**Why it matters:** it exposes the central danger early. The neurons in a
layer can be listed in any order: swap y₁ and y₂ (with their weight rows and
biases) and the layer computes exactly the same function, yet the list of
numbers is now completely different. This **permutation freedom** means the
same knowledge can sit at different positions in two separately trained
networks. Keep it in mind; it is the reason for everything in the second
half of this lesson.

### Checkpoint

A **checkpoint** is those numbers saved to disk, organised as a dictionary from
tensor names to tensors. PyTorch calls it a `state_dict`. Nothing else about
the model is in it.

**Why it matters:** raw data often cannot leave where it was collected, but
this file can. The checkpoint is the only object that crosses the wall, so
merging must be arithmetic on checkpoints: offline, and with no training data
in sight.

```python
ckpt = torch.load("model.pth", map_location="cpu")
sd = ckpt.get("state_dict", ckpt)   # name -> tensor
```

Two models with the same architecture have the same names and the same shapes
in their checkpoints. Only the numbers differ.

### Flattening

**Flattening** reads out every entry of every tensor, in one fixed name order,
into a single long vector. Nothing is lost: with the same order you can
rebuild the `state_dict` exactly.

**Why it matters:** to compare and combine whole models, each model must be
*one* object rather than hundreds of loose tensors. The fixed order guarantees
that coordinate number *k* is the same physical weight in every model, and
that alignment is what makes subtracting two models meaningful.

The 9-parameter layer above, with `W = [[0.2, −0.1], [0.0, 0.5], [0.3, 0.3]]`
and `b = [0.1, 0.0, −0.2]`, flattens to:

```text
θ = [0.2, −0.1, 0.0, 0.5, 0.3, 0.3, 0.1, 0.0, −0.2]
```

```python
def flatten(sd, keys):
    """One model -> one vector. Use the same `keys` for every model."""
    return torch.cat([sd[k].reshape(-1).float() for k in keys])

keys = sorted(sd)
theta = flatten(sd, keys)
```

### Weight space

**Weight space** is the space of all possible flattened vectors, with one axis
per parameter. A trained model is **a single point** in it.

**Why it matters:** it turns vague questions into geometry. "How much did
fine-tuning change the model?" becomes a length. "Did two fine-tunes learn
similar things?" becomes an angle (lesson 02). "Is the merged model sane?"
becomes a question about where it sits relative to known good points.

A real encoder has a very large number of axes, impossible to picture. But
every operation in this series (subtract, average, trim) is done coordinate by
coordinate, so intuition from two or three dimensions carries over unchanged.

On a real point-transformer checkpoint the same hierarchy is visible in the
tensor names, from the whole network down to one number:

```text
enc.enc0                          a stage of the encoder
enc.enc0.block0                   a transformer block inside that stage
enc.enc0.block0.attn.qkv.weight   a named tensor: one matrix in that block
qkv_weight[0, 1]                  one entry of that matrix: one parameter
```

Flattening lines every such entry up, and the whole encoder becomes one point.

## Measuring in weight space

### Norm and distance

The **norm** `‖v‖` of a vector is its length: square every coordinate, add
them up, take the square root. The **distance** between two models is the norm
of their difference, `‖θ_X − θ_Y‖`.

```text
‖[0.1, −0.2, 0.0]‖ = √(0.01 + 0.04 + 0) = √0.05 ≈ 0.224
```

**Why it matters:** it measures updates. How far did fine-tuning move a model?
Are two fine-tunes near each other or far apart? When one city ends up
drowning the others in a merge (lesson 06), the cause is unequal norms.

```python
length = theta.norm()
distance = (theta_x - theta_y).norm()
```

### Task vector

The **task vector** of city *i* is the coordinate-wise difference between its
fine-tune and the shared base:

```text
τᵢ = θᵢ − θ₀
```

It records what fine-tuning on that city changed, parameter by parameter.
Adding it back gives the fine-tune exactly (`θ₀ + τᵢ = θᵢ`). Geometrically it
is **the arrow from the base point to the fine-tuned point**: fine-tuning is a
displacement, and τᵢ is that displacement.

**Why it matters:** it separates what a city taught from the foundation it
started on. θ_B mixes generic pretrained knowledge with City B's adaptation;
subtracting θ₀ strips the shared part and leaves an object you can scale,
add, trim or drop. Every method in this series manipulates task vectors.

```text
θ₀  = [1.0, 2.0, 3.0]
θ_B = [1.1, 1.8, 3.0]              after fine-tuning on City B
τ_B = θ_B − θ₀ = [+0.1, −0.2, 0.0]  parameter 1 grew, 2 shrank, 3 untouched
```

### Merging: the base formula

**Merging** builds one model from several task vectors: start at the base and
add a weighted sum of the arrows.

```text
θ* = θ₀ + λ · Σᵢ wᵢ τᵢ

θ₀  shared base          θᵢ  fine-tune of city i     τᵢ  its task vector
wᵢ  how much city i counts                           λ   overall merge strength
```

A worked example with two cities, equal weights `w = ½` and `λ = 1`:

```text
θ₀  = [ 1.0,  2.0,  3.0]
τ_B = [+0.1, −0.2,  0.0]
τ_K = [−0.1,  0.0, +0.4]
θ*  = θ₀ + ½·τ_B + ½·τ_K = [1.0, 1.9, 3.2]
```

Look at parameter 1: City B pushed it up, City K pushed it down, and the two
cancelled. That is a first glimpse of **interference**, the whole topic of
lesson 03. Every method in lessons 02 to 06 is this formula with a smarter
recipe for the τ's or the w's.

In code, with vectors, it is one line:

```python
theta_star = theta_0 + lam * sum(w[c] * tau[c] for c in cities)
```

Put together, the picture looks like this:

![Task vectors as arrows from a shared base inside one basin, and a model from another base behind a ridge](/blog/model-merging/01_weight_space/fig/basin_arrows.svg)

*Each city moves the shared base a different distance in a different
direction; merging steps from θ₀ along the combined direction to θ\*. A model
trained from a different start lives in another basin, behind a ridge.*

Measured on real point-transformer encoders, this picture is not just a
metaphor, and two properties stand out:

- **The displacements are small** compared with the size of the base itself,
  so all the action happens in a thin shell around θ₀.
- **The fine-tunes are farther from each other than from the base.** They are
  not a tight cluster: they are arrows fanning out of one point in different
  directions, with different lengths. How different the directions are is
  lesson 02's question.

## Why can you average weights at all?

Averaging the weights of two networks sounds like it should not work. Because
of permutation freedom, two separately trained networks can compute the same
function with their neurons in a completely different order, and
coordinate-wise averaging then mixes unrelated neurons. **And in general, it
does not work.** To say *when* it works we need three more ideas.

### Loss

The **loss** is one number that measures how wrong a model is on its data.
Lower is better, and training is nothing but pushing it down.

**Why it matters:** we need a score that can judge *any* weight vector,
including averaged ones that were never trained. The loss lets us ask "is the
midpoint a working model?" without any retraining.

```python
loss = torch.nn.functional.cross_entropy(model(X), y)
```

### Loss landscape

Attach to every point of weight space the loss that model gets: that function
is the **loss landscape**. Picture weight space as the ground and loss as
altitude, a terrain of hills (bad weights) and valleys (good weights).
Training is walking downhill from wherever you start.

**Why it matters:** "can I average these two models?" becomes "is the ground
between them low?", which we can measure. We can never draw the landscape of a
large network, but we can *probe* it: pick two points, walk the straight line
between them, and record the altitude at every step.

### Basin

A **basin** is one connected valley of the landscape: a region where the loss
stays low everywhere, walled off from other valleys by ridges of high loss.
A deep network's landscape has many separate basins, partly because of
permutation freedom: the same solution reappears as a different point, in a
different valley, for every reordering of the neurons.

**Why it decides everything:** two models in the **same** basin can be joined
by a straight line that never leaves the valley, so every point on it,
including their average, is a working model. Two models in **different**
basins can only be joined by climbing over a ridge, and their average sits on
high ground.

### Linear mode connectivity

Walk the straight segment between two trained models,

```text
θ(t) = (1 − t)·θ_X + t·θ_Y,   t from 0 to 1
```

and evaluate the loss at every *t*. If it stays low the whole way, the two
models are **linearly mode connected**: they share a basin, their coordinates
mean the same thing, and any blend of them (including the plain average) is
itself a working model. If a **loss barrier** rises in the middle, averaging
fails.

```python
def blend(state_x, state_y, t):
    """The point at fraction t along the straight line from θ_X to θ_Y."""
    return {k: (1 - t) * state_x[k] + t * state_y[k] for k in state_x}
```

This is what makes merging possible in our setting: every city model is
fine-tuned from the **same pretrained base**. Fine-tuning moves the point only
a little, so the children stay in the parent's basin and stay aligned with
each other, coordinate by coordinate.

## The experiment: one basin versus two

A miniature of the real pipeline, small enough to see everything:

- **θ₀**, the shared base: a small MLP trained on 2-D two-moons data.
- **θ₁ and θ₂**, its two "fine-tunes": continue training θ₀, identical in every
  way except the order the minibatches arrive in.
- **θ_ind**, a model with no shared base: the same architecture trained from
  its own random start.

All of them solve the task. The question is not how good they are, but where
they sit relative to each other. So walk the line between two of them and
record the loss:

```python
@torch.no_grad()
def loss_along_line(model_x, model_y, ts):
    sx, sy = model_x.state_dict(), model_y.state_dict()
    probe = mlp(seed=0)  # any instance works: the weights are overwritten
    losses = []
    for t in ts:
        probe.load_state_dict(blend(sx, sy, t))
        losses.append(torch.nn.functional.cross_entropy(probe(X), y).item())
    return losses
```

![Loss along the straight line: flat between the two fine-tunes of one base, a large barrier towards the independent model](/blog/model-merging/01_weight_space/fig/toy_interp_loss.png)

Between the two children of θ₀ the line is **flat**: every blend works. Between
θ₁ and the independent model a **barrier** rises, and the middle of the line
is a broken model. Here is what those models actually do:

![Decision boundaries at the ends and midpoint of each line](/blog/model-merging/01_weight_space/fig/toy_interp_boundaries.png)

*Top row: θ₁, the average of θ₁ and θ₂, and θ₂. The average is
indistinguishable from its parents. Bottom row: averaging θ₁ with θ_ind gives a
boundary that ignores the moons entirely.*

The whole experiment is one script, [toy_basin.py](https://github.com/pyarelalchauhan/model-merging-from-scratch/blob/main/lessons/01_weight_space/toy_basin.py). It runs on a
CPU in under a minute, prints the loss barrier and the accuracy of each
average, and redraws both figures.

> **The load-bearing assumption.** Same base, same basin, comparable weights.
> Every method in this series stands on it. The bottom row is what happens
> when it breaks, and lesson 05 shows the same collapse on real encoders, when
> fine-tunes that started from different pretrained bases were merged by mistake.

## Where in the network does the point move?

Grouping the displacement by encoder stage, relative to each stage's own size,
tells a consistent story on real encoders:

- **The tiny input embedding moves the most, relative to its size.** It adapts
  hardest to each city's input statistics, for example whether colour was
  captured at all.
- **The deep stages hold most of the absolute change,** simply because that is
  where most of the parameters live.

This per-stage view comes back twice: lesson 03 trims task vectors entry by
entry, and lesson 05 uses exactly this lens to diagnose a merge that collapsed.

## What this lesson established

- A checkpoint is a **point** in weight space, and fine-tuning is a small
  **displacement**, the task vector.
- Merging is **adding weighted task vectors** to the shared base.
- Averaging weights works **only when the models share a basin**, and sharing
  the pretrained base is what puts them there.
- Real city fine-tunes are arrows of **different lengths pointing in different
  directions**. Lengths return in lesson 06, directions in lesson 02.

**Next: Lesson 02 · Task vectors**: how to compare the
directions of those arrows, and what the angles between cities reveal.
