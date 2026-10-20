"""Render the home-page clip (public/images/bhopalmls_street.mp4 + poster) from the
BhopalMLS viewer's Bhopal_7 point cloud.

A turntable like the viewer's auto-rotate: the camera makes one full turn around the
scene at a constant height and speed, so the last frame meets the first. It sits
higher and further back than the viewer's start view so the street stays in sight
over the rooftops from every side. Points are coloured with the viewer's 68-class
palette.

Needs a CUDA GPU, PyTorch, NumPy, Pillow and ffmpeg:
    python3 scripts/hero/render_hero.py
"""
import argparse
import json
import subprocess
from pathlib import Path

import numpy as np
import torch
from PIL import Image

import pcrender as pr

PROJECT = "/DATA/pyare/Accessibility/docs/paper/bhopal-mls/project-page"
SITE = Path(__file__).resolve().parents[2]

ap = argparse.ArgumentParser()
ap.add_argument("--project", default=PROJECT, help="BhopalMLS project-page folder")
ap.add_argument("--scene", default="bhopal_width")    # the viewer's Bhopal_7 corridor
ap.add_argument("--seconds", type=float, default=12.0)  # one full turn
ap.add_argument("--fps", type=int, default=30)
ap.add_argument("--elev", type=float, default=50.0)
ap.add_argument("--dist", type=float, default=2.4)    # camera distance, in scene radii (the viewer uses 1.35)
ap.add_argument("--az0", type=float, default=45.0)    # starting azimuth, as in the viewer
ap.add_argument("--fov", type=float, default=40.0)
ap.add_argument("--width", type=int, default=960)  # encoded width; at this size it keeps more detail than 1280
ap.add_argument("--crf", type=int, default=33)
a = ap.parse_args()

pal = json.load(open(f"{a.project}/deploy/current/assets/bhopal_project_data.json"))["palettes"]["68c"]
lut = torch.tensor([e["color"] for e in sorted(pal, key=lambda e: e["id"])], dtype=torch.float32, device=pr.DEV) / 255
p, c, v = pr.load_ply(f"{a.project}/deploy/current/assets/clouds/{a.scene}.ply", lut)

# Frame the scene the way the viewer does: median centre, radius from the 5-95% extent.
xyz = np.stack([v["x"], v["y"], v["z"]], 1).astype(np.float64)
ctr = np.median(xyz, 0)
lo, hi = np.percentile(xyz, 5, 0), np.percentile(xyz, 95, 0)
d = max(0.5 * np.hypot(*(hi - lo)[:2]), 5) * a.dist

W, H = 1280, 536  # rendered size; the clip and poster are scaled to --width
style = dict(W=W, H=H, ss=3, fov=a.fov, size=0.04, rmax=5, edl=14, fog=(d * 0.9, d * 2.2))
el = np.radians(a.elev)


def camera(t):
    az = np.radians(a.az0) + 2 * np.pi * t
    return ctr + np.r_[np.sin(az) * np.cos(el), -np.cos(az) * np.cos(el), np.sin(el)] * d


out = SITE / "public/images/bhopalmls_street.mp4"
enc = subprocess.Popen(
    ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(a.fps), "-i", "-",
     "-an", "-vf", f"scale={a.width}:-2:flags=lanczos", "-c:v", "libx264", "-crf", str(a.crf), "-preset", "veryslow",
     "-profile:v", "high", "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(out)],
    stdin=subprocess.PIPE)
n = int(round(a.seconds * a.fps))
for i in range(n):  # t covers [0, 1): the frame after the last is the first, so the loop is seamless
    frame = pr.render(p, c, camera(i / n), ctr, **style)
    if i == 0:
        Image.fromarray(frame).resize((a.width, round(H * a.width / W)), Image.LANCZOS).save(
            SITE / "public/images/bhopalmls_street_poster.webp", quality=70, method=6)
    enc.stdin.write(frame.tobytes())
enc.stdin.close()
if enc.wait():
    raise SystemExit("ffmpeg failed")
print(f"wrote {out} ({n} frames, {out.stat().st_size / 1e6:.2f} MB) and poster")
