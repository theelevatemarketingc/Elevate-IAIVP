"""Remove neon-green chroma backgrounds and export transparent PNGs."""
from pathlib import Path
from PIL import Image
import numpy as np

ASSETS = Path(r"C:\Users\ibrah\.cursor\projects\c-Users-ibrah-Desktop-elevate-2\assets")
OUT = Path(r"c:\Users\ibrah\Desktop\elevate 2\elevate-landing\public\pipeline")
OUT.mkdir(parents=True, exist_ok=True)

jobs = [
    (
        "c__Users_ibrah_AppData_Roaming_Cursor_User_workspaceStorage_a4d88a171be66dca1b9b76d1ac6e4515_images_hf_20260712_062724_f5f956d6-7efb-402f-b5a7-5a86e504c64d-f4f26253-5d28-4bec-822f-298c8609488d.png",
        "step-01-pdf.png",
    ),
    (
        "c__Users_ibrah_AppData_Roaming_Cursor_User_workspaceStorage_a4d88a171be66dca1b9b76d1ac6e4515_images_hf_20260712_071628_0ecc3bfd-e9d2-4044-91b7-99b5854bb9ce-34a85de0-b970-4ee0-9ab9-08a5e63a560c.png",
        "step-02-analysis.png",
    ),
    (
        "c__Users_ibrah_AppData_Roaming_Cursor_User_workspaceStorage_a4d88a171be66dca1b9b76d1ac6e4515_images_Tablet_displaying_pumping_heart_2K_202607121326-610030e9-24a6-4c97-8bf7-285c31fc90ef.png",
        "step-03-heart.png",
    ),
]


def remove_green(img: Image.Image) -> Image.Image:
    rgba = img.convert("RGBA")
    arr = np.asarray(rgba).astype(np.float32)
    r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]

    # Neon green key: strong G relative to R/B
    greenness = g - np.maximum(r, b)
    # Also catch near-pure lime greens
    is_green = (g > 90) & (greenness > 28) & (g > r * 1.15) & (g > b * 1.15)

    # Soft edge: fade near the threshold
    soft = np.clip((greenness - 12) / 30.0, 0, 1)
    soft_mask = soft * ((g > 70).astype(np.float32))

    alpha = a.copy()
    alpha[is_green] = 0
    # Blend soft fringe
    fringe = (~is_green) & (soft_mask > 0.15)
    alpha[fringe] = alpha[fringe] * (1.0 - soft_mask[fringe])

    out = arr.copy()
    out[..., 3] = alpha

    # Decontaminate residual green on semi-transparent edges
    edge = (alpha > 0) & (alpha < 250) & (greenness > 8)
    out[edge, 1] = np.minimum(out[edge, 1], (out[edge, 0] + out[edge, 2]) / 2)

    result = Image.fromarray(out.astype(np.uint8), "RGBA")

    # Crop to opaque content with small padding
    bbox = result.getbbox()
    if bbox:
        pad = 12
        x0, y0, x1, y1 = bbox
        x0 = max(0, x0 - pad)
        y0 = max(0, y0 - pad)
        x1 = min(result.width, x1 + pad)
        y1 = min(result.height, y1 + pad)
        result = result.crop((x0, y0, x1, y1))

    return result


for src_name, out_name in jobs:
    src = ASSETS / src_name
    print(f"Processing {src_name[-40:]} -> {out_name}")
    cleaned = remove_green(Image.open(src))
    # Cap width for web
    max_w = 720
    if cleaned.width > max_w:
        ratio = max_w / cleaned.width
        cleaned = cleaned.resize(
            (max_w, int(cleaned.height * ratio)),
            Image.Resampling.LANCZOS,
        )
    dest = OUT / out_name
    cleaned.save(dest, "PNG", optimize=True)
    print(f"  saved {dest} ({cleaned.size[0]}x{cleaned.size[1]})")

print("done")
