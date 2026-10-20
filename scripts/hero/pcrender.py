"""Small GPU point-cloud renderer for the site's hero clip: perspective camera,
z-buffered round splats, eye-dome lighting for depth, distance fog."""
import json
import math

import numpy as np
import torch

DEV = "cuda"
BG = torch.tensor([11, 15, 18], dtype=torch.float32, device=DEV) / 255.0  # #0b0f12, the panel colour


def palette(data_json, key="21c"):
    pal = {c["id"]: c["color"] for c in json.load(open(data_json))["palettes"][key]}
    return torch.tensor([pal[i] for i in range(len(pal))], dtype=torch.float32, device=DEV) / 255.0


def load(npz, lut, label="label21"):
    z = np.load(npz)
    p = torch.from_numpy(z["xyz"].astype(np.float32)).to(DEV)
    c = lut[torch.from_numpy(z[label].astype(np.int64)).to(DEV)]
    return p, c, z


def look_at(eye, target, up=(0.0, 0.0, 1.0)):
    eye = np.asarray(eye, np.float64); target = np.asarray(target, np.float64)
    f = target - eye; f /= np.linalg.norm(f)
    r = np.cross(f, up); r /= np.linalg.norm(r)
    u = np.cross(r, f)
    return eye, np.stack([r, -u, f])  # rows: camera x (right), y (down), z (forward)


@torch.no_grad()
def render(p, c, eye, target, W=1280, H=536, ss=2, fov=55.0, size=0.035, rmax=3,
           edl=6.0, fog=(35.0, 90.0)):
    Ws, Hs = W * ss, H * ss
    eye, R = look_at(eye, target)
    Rt = torch.tensor(R, dtype=torch.float32, device=DEV)
    q = (p - torch.tensor(eye, dtype=torch.float32, device=DEV)) @ Rt.T
    z = q[:, 2]
    keep = z > 0.3
    q, z, col = q[keep], z[keep], c[keep]
    f = Ws / (2 * math.tan(math.radians(fov) / 2))
    u = f * q[:, 0] / z + Ws / 2
    v = f * q[:, 1] / z + Hs / 2
    rad = (size * f / z).clamp(1.0, rmax)
    ui, vi = u.round().long(), v.round().long()
    idx = torch.arange(len(z), device=DEV)
    key0 = ((z * 1000).long() << 21) | idx
    buf = torch.full((Hs * Ws,), torch.iinfo(torch.int64).max, dtype=torch.int64, device=DEV)
    for dy in range(-rmax, rmax + 1):
        for dx in range(-rmax, rmax + 1):
            d2 = dx * dx + dy * dy
            m = rad * rad >= d2
            x = ui + dx; y = vi + dy
            m &= (x >= 0) & (x < Ws) & (y >= 0) & (y < Hs)
            if m.any():
                buf.scatter_reduce_(0, (y[m] * Ws + x[m]), key0[m], reduce="amin")
    hit = buf != torch.iinfo(torch.int64).max
    pid = (buf & ((1 << 21) - 1))[hit]
    img = BG.repeat(Hs * Ws, 1)
    depth = torch.full((Hs * Ws,), float("inf"), device=DEV)
    depth[hit] = z[pid]
    img[hit] = col[pid]
    img = img.view(Hs, Ws, 3); depth = depth.view(Hs, Ws)

    # Eye-dome lighting: darken a pixel when its neighbours are nearer.
    if edl > 0:
        ld = torch.log2(depth.clamp(min=1e-3))
        ld = torch.where(torch.isinf(depth), torch.full_like(ld, 1e3), ld)
        resp = torch.zeros_like(ld)
        k = ss + 1
        for oy, ox in ((k, 0), (-k, 0), (0, k), (0, -k), (k, k), (-k, -k), (k, -k), (-k, k)):
            n = torch.roll(ld, shifts=(oy, ox), dims=(0, 1))
            resp += (ld - n).clamp(min=0)
        shade = torch.exp(-edl * resp / 8).clamp(0.25, 1)
        shade = torch.where(torch.isinf(depth), torch.ones_like(shade), shade)
        img = img * shade[..., None]

    # Fog: far points fade into the background.
    if fog:
        t = ((depth - fog[0]) / (fog[1] - fog[0])).clamp(0, 1)
        t = torch.where(torch.isinf(depth), torch.ones_like(t), t)
        img = img * (1 - t[..., None]) + BG * t[..., None]

    img = img.permute(2, 0, 1)[None]
    img = torch.nn.functional.avg_pool2d(img, ss)[0].permute(1, 2, 0)
    return (img.clamp(0, 1) * 255 + 0.5).byte().cpu().numpy()


def read_ply(path):
    """Binary little-endian PLY with one vertex element -> structured numpy array."""
    types = {"float": "<f4", "uchar": "u1", "int": "<i4", "uint": "<u4", "double": "<f8", "short": "<i2", "ushort": "<u2"}
    with open(path, "rb") as fh:
        fields, n = [], 0
        while True:
            line = fh.readline().decode().strip()
            if line.startswith("element vertex"):
                n = int(line.split()[-1])
            elif line.startswith("property"):
                _, t, name = line.split()
                fields.append((name, types[t]))
            elif line == "end_header":
                break
        return np.fromfile(fh, dtype=np.dtype(fields), count=n)


def load_ply(path, lut, label="label68"):
    v = read_ply(path)
    xyz = np.stack([v["x"], v["y"], v["z"]], 1).astype(np.float32)
    p = torch.from_numpy(xyz).to(DEV)
    c = lut[torch.from_numpy(v[label].astype(np.int64)).to(DEV)]
    return p, c, v
