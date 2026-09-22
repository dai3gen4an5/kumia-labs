#!/usr/bin/env python3
"""Package a Kumia article's finished images into one zip.

The zip holds the final Hero, the Body images, and the Card thumbnail under their final
filenames, so nothing has to be renamed or moved by hand. Unzip it straight into public/images/.

  python scripts/package-kumia-assets.py --slug kitchenaid-attachments-bowls

Expected files in --source-dir (default: public/images):
  kumia-<slug>-hero.png          required   1672x941 (composed by generate-kumia-hero.py)
  kumia-<slug>-body-NN.png ...   optional   zero or more, numbered from 01, no gaps
  kumia-<slug>-card-16x9.png     required   16:9

Body images are optional: zero is a normal, valid case (e.g. when a Technical Visual or
an Explorer already carries the story), not an error condition. See
docs/workflows/KUMIA_IMAGE_STANDARD_V1.md for the full editorial image rules.

The intermediate kumia-<slug>-hero-bg.png is deliberately NOT packaged.
Requires only Pillow.
"""
from __future__ import annotations

import argparse
import re
import sys
import zipfile
from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parent.parent
HERO_SIZE = (1672, 941)

README = """Kumia Labs article assets: {slug}

Unzip this file directly into:
  <repo>/public/images/

Files are already named for the article, so no renaming or moving is needed:
{files}

Hero brand layer (logo, category, title, supporting copy, icons) is code-composed.
Do not regenerate it with an image model.
"""


def check_size(path: Path, expect: tuple[int, int] | None, ratio: tuple[int, int] | None, problems: list[str]) -> None:
    with Image.open(path) as im:
        size = im.size
    if expect and size != expect:
        problems.append(f"{path.name}: size {size[0]}x{size[1]}, expected {expect[0]}x{expect[1]}")
    if ratio and abs(size[0] / size[1] - ratio[0] / ratio[1]) > 0.01:
        problems.append(f"{path.name}: aspect {size[0]}x{size[1]} is not {ratio[0]}:{ratio[1]}")


def main() -> None:
    ap = argparse.ArgumentParser(description="Bundle final Kumia article images into kumia-<slug>-assets.zip")
    ap.add_argument("--slug", required=True)
    ap.add_argument("--source-dir", default=str(REPO / "public" / "images"))
    ap.add_argument("--out-dir", default=str(REPO))
    ap.add_argument("--allow-missing-card", action="store_true", help="Package without a Card (not recommended).")
    args = ap.parse_args()

    src, slug = Path(args.source_dir), args.slug
    hero = src / f"kumia-{slug}-hero.png"
    card = src / f"kumia-{slug}-card-16x9.png"
    bodies = sorted(src.glob(f"kumia-{slug}-body-[0-9][0-9].png"))

    problems: list[str] = []
    if not hero.exists():
        problems.append(f"missing Hero: {hero.name}")
    if not card.exists() and not args.allow_missing_card:
        problems.append(f"missing Card: {card.name}")
    numbers = [int(re.search(r"body-(\d\d)\.png$", b.name).group(1)) for b in bodies]
    if numbers and numbers != list(range(1, len(numbers) + 1)):
        problems.append(f"Body images must be numbered 01.. without gaps, found {numbers}")
    if hero.exists():
        check_size(hero, HERO_SIZE, None, problems)
    if card.exists():
        check_size(card, None, (16, 9), problems)
    for b in bodies:
        check_size(b, None, (16, 9), problems)
    if problems:
        sys.exit("Cannot package:\n  - " + "\n  - ".join(problems))

    files = [hero, *bodies] + ([card] if card.exists() else [])
    out = Path(args.out_dir) / f"kumia-{slug}-assets.zip"
    out.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(out, "w", zipfile.ZIP_STORED) as z:  # PNGs are already compressed
        for f in files:
            z.write(f, f.name)
        z.writestr("README.txt", README.format(slug=slug, files="\n".join(f"  - {f.name}" for f in files)))
    print(f"wrote {out}")
    for f in files:
        print(f"  {f.name}  ({f.stat().st_size / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
