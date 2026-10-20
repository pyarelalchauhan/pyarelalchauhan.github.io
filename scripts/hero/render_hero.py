"""Render the home-page clip (public/images/bhopalmls_street.mp4 + poster) from the
BhopalMLS viewer's Bhopal_7 point cloud.

The camera circles a small ellipse above one end of the street, looking along it,
so the motion never stops or jumps and the last frame meets the first. Points are
coloured with the viewer's 68-class palette.

Needs a CUDA GPU, PyTorch, NumPy, Pillow and ffmpeg:
    python3 scripts/hero/render_hero.py
"""
import argparse
import json
import subprocess
from pathlib import Path

import numpy as np
import torch

import pcrender as pr

PROJECT = "/DATA/pyare/Accessibility/docs/paper/bhopal-mls/project-page"
SITE = Path(__file__).resolve().parents[2]

ap = argparse.ArgumentParser()
ap.add_argument("--project", default=PROJECT, help="BhopalMLS project-page folder")
ap.add_argument("--scene", default="bhopal_width")    # the viewer's Bhopal_7 corridor
ap.add_argument("--seconds", type=float, default=6.0)
ap.add_argument("--fps", type=int, default=30)
ap.add_argument("--end", type=float, default=-1)      # which end of the street the camera sits at (+1/-1)
ap.add_argument("--swing", type=float, default=14.0)  # side-to-side half-angle (deg)
ap.add_argument("--elev", type=float, default=17.0)
ap.add_argument("--bob", type=float, default=4.0)     # up-down half-angle (deg)
ap.add_argument("--dist", type=float, default=62.0)
ap.add_argument("--look", type=float, default=14.0)   # move the look point down the street (m)
ap.add_argument("--fov", type=float, default=55.0)
ap.add_argument("--crf", type=int, default=34)
a = ap.parse_args()

pal = json.load(open(f"{a.project}/deploy/current/assets/bhopal_project_data.json"))["palettes"]["68c"]
lut = torch.tensor([e["color"] for e in sorted(pal, key=lambda e: e["id"])], dtype=torch.float32, device=pr.DEV) / 255
p, c, v = pr.load_ply(f"{a.project}/deploy/current/assets/clouds/{a.scene}.ply", lut)

# Street frame from the road and ground points: centre, direction, ground height.
xyz = np.stack([v["x"], v["y"], v["z"]], 1)
ground = {e["id"] for e in pal if e["name"] in ("Road", "Ground", "Flat Ground")}
r = xyz[np.isin(v["label68"], list(ground))]
cxy = r[:, :2].mean(0)
_, vec = np.linalg.eigh(np.cov((r[:, :2] - cxy).T))
axis = vec[:, -1] * a.end  # from the centre towards the camera's end of the street
ctr = np.r_[cxy - axis * a.look, np.percentile(r[:, 2], 30) + 2.0]
base_az = np.arctan2(axis[1], axis[0])

W, H = 1280, 536
style = dict(W=W, H=H, ss=3, fov=a.fov, size=0.04, rmax=5, edl=14, fog=(45, 120))


def camera(t):
    ph = 2 * np.pi * t
    az = base_az + np.radians(a.swing) * np.sin(ph)
    el = np.radians(a.elev + a.bob * np.cos(ph))
    return ctr + np.r_[np.cos(az) * np.cos(el), np.sin(az) * np.cos(el), np.sin(el)] * a.dist


out = SITE / "public/images/bhopalmls_street.mp4"
enc = subprocess.Popen(
    ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(a.fps), "-i", "-",
     "-an", "-c:v", "libx264", "-crf", str(a.crf), "-preset", "veryslow", "-profile:v", "high", "-pix_fmt", "yuv420p",
     "-movflags", "+faststart", str(out)],
    stdin=subprocess.PIPE)
n = int(round(a.seconds * a.fps))
for i in range(n):  # t covers [0, 1): the frame after the last is the first, so the loop is seamless
    enc.stdin.write(pr.render(p, c, camera(i / n), ctr, **style).tobytes())
enc.stdin.close()
if enc.wait():
    raise SystemExit("ffmpeg failed")
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(out), "-frames:v", "1", "-c:v", "libwebp", "-quality", "82",
                str(SITE / "public/images/bhopalmls_street_poster.webp")], check=True)
print(f"wrote {out} ({n} frames, {out.stat().st_size / 1e6:.2f} MB) and poster")
