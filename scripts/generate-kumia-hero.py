#!/usr/bin/env python3
"""Kumia Labs Hero composer.

AI generates the scene. Code generates the Kumia brand layer.

Takes a text-free background photo and composes the fixed Kumia brand layer on top:
official logo, category label + blue accent line, title, supporting copy, and icon row.
Nothing in the brand layer is ever drawn by an image model.

Only the inputs below change per article. Every layout constant lives in BRAND, once.

  python scripts/generate-kumia-hero.py \\
    --background public/images/kumia-<slug>-hero-bg.png \\
    --output public/images/kumia-<slug>-hero.png \\
    --category "DESIGN THAT SURVIVED" \\
    --title "The KitchenAid Connection That Reaches Back to 1919" \\
    --supporting "KitchenAid says today's power-hub attachments fit stand mixers made since 1919." \\
    --icons "1919:calendar,Power hub:gear,Attachments:link,Bowls:bowl,Exceptions:alert"

Requires only Pillow. Run with --list-icons to see the built-in icon set.

See docs/workflows/KUMIA_IMAGE_STANDARD_V1.md for editorial image rules.
"""
from __future__ import annotations

import argparse
import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageStat

HERE = Path(__file__).resolve().parent
REPO = HERE.parent

# ---------------------------------------------------------------------------
# BRAND CONSTANTS. Change these only when the Kumia Labs Hero design itself changes.
# ---------------------------------------------------------------------------
BRAND = {
    # canvas
    "width": 1672,
    "height": 941,
    # assets (single source of truth for the logo: the official site asset)
    "logo_path": REPO / "public" / "brand" / "kumia-labs-logo.png",
    "font_path": HERE / "assets" / "fonts" / "Geist-Variable.ttf",
    # margins / safe area
    "margin_left": 80,
    "margin_right": 78,
    "margin_bottom": 56,
    # logo (top-left)
    "logo_top": 46,
    "logo_width": 412,
    # category label (top-right) and its blue accent line
    "category_size": 22,
    "category_weight": 650,
    "category_tracking_em": 0.16,
    "category_center_y": 82,
    "accent_line_length": 56,
    "accent_line_thickness": 2,
    "accent_line_gap": 18,
    # category label readability guarantee: the label sits outside the left-side
    # veil (below), so on a background that is dark there too, a soft local
    # backing (the same white as the veil) is added behind it automatically.
    # No-op on the bright corner this zone normally has. Not a per-article knob.
    "category_contrast_luma_min": 150,
    "category_backing_pad_x": 14,
    "category_backing_pad_y": 10,
    "category_backing_radius": 10,
    # title
    "title_top": 176,
    "title_weight": 800,
    "title_max_size": 104,
    "title_min_size": 64,
    "title_line_height": 0.96,
    "title_tracking_em": -0.045,
    "title_max_width": 800,
    "title_preferred_lines": 3,
    # supporting copy
    "support_gap": 40,
    "support_size": 44,
    "support_weight": 500,
    "support_line_height": 1.24,
    "support_max_width": 700,
    # icon row
    "icons_gap": 42,
    "icon_circle": 80,
    "icon_gap_max": 64,        # widest gap between neighbouring icon items (label-aware)
    "icon_gap_min": 24,        # minimum visual gap between neighbouring labels
    "icon_label_min_size": 19, # labels shrink only if the row cannot fit at the normal size
    "icon_glyph_ratio": 0.66,
    "icon_label_size": 24,
    "icon_label_weight": 550,
    "icon_label_gap": 14,
    "icon_row_max_width": 860,
    # left-side readability gradient (white veil, opaque on the left)
    "veil_opaque_until": 0.30,
    "veil_clear_at": 0.64,
    "veil_max_alpha": 0.94,
    # colors
    "ink": (8, 19, 46),
    "supporting_ink": (61, 74, 107),
    "blue": (7, 105, 237),
    "icon_fill": (231, 238, 250),
}

SS = 4  # supersampling factor for icon shapes


# ---------------------------------------------------------------------------
# Fonts and text
# ---------------------------------------------------------------------------
def load_font(size: int, weight: int) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(BRAND["font_path"]), size)
    font.set_variation_by_axes([weight])
    return font


def tracked_width(text: str, font: ImageFont.FreeTypeFont, tracking: float) -> float:
    return font.getlength(text) + tracking * max(len(text) - 1, 0)


def draw_tracked(draw: ImageDraw.ImageDraw, xy, text: str, font, fill, tracking: float) -> None:
    """Draw text with fixed tracking while keeping the font's kerning."""
    x, y = xy
    for i, ch in enumerate(text):
        if ch != " ":
            draw.text((x + font.getlength(text[:i]) + tracking * i, y), ch, font=font, fill=fill)


def wrap(text: str, font, tracking: float, max_width: float) -> list[str]:
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if cur and tracked_width(trial, font, tracking) > max_width:
            lines.append(cur)
            cur = w
        else:
            cur = trial
    if cur:
        lines.append(cur)
    return lines


def balanced_wrap(text: str, font, tracking: float, max_width: float) -> list[str]:
    """Greedy wrap, then narrow the measure as far as possible without adding a line (no lonely last word)."""
    lines = wrap(text, font, tracking, max_width)
    n = len(lines)
    lo = max(tracked_width(w, font, tracking) for w in text.split())
    hi = max_width
    best = lines
    for _ in range(24):
        mid = (lo + hi) / 2
        trial = wrap(text, font, tracking, mid)
        if len(trial) <= n:
            best, hi = trial, mid
        else:
            lo = mid
    return best


# ---------------------------------------------------------------------------
# Icons: simple, bold, deterministic shapes drawn on a 100x100 grid.
# ---------------------------------------------------------------------------
def _pt(cx, cy, r, deg):
    a = math.radians(deg)
    return (cx + r * math.cos(a), cy + r * math.sin(a))


def icon_calendar(d, s, ink, bg):
    d.rounded_rectangle([18 * s, 24 * s, 82 * s, 82 * s], 8 * s, outline=ink, width=int(6 * s))
    d.rectangle([18 * s, 24 * s, 82 * s, 40 * s], fill=ink)
    for x in (34, 66):
        d.rounded_rectangle([(x - 3) * s, 14 * s, (x + 3) * s, 32 * s], 3 * s, fill=ink)
    for r in range(2):
        for c in range(3):
            d.rectangle([(28 + c * 16) * s, (50 + r * 14) * s, (36 + c * 16) * s, (58 + r * 14) * s], fill=ink)


def icon_clock(d, s, ink, bg):
    d.ellipse([16 * s, 16 * s, 84 * s, 84 * s], outline=ink, width=int(7 * s))
    d.line([50 * s, 50 * s, 50 * s, 28 * s], fill=ink, width=int(7 * s))
    d.line([50 * s, 50 * s, 66 * s, 58 * s], fill=ink, width=int(7 * s))
    d.ellipse([45 * s, 45 * s, 55 * s, 55 * s], fill=ink)


def icon_gear(d, s, ink, bg):
    cx = cy = 50
    d.ellipse([(cx - 27) * s, (cy - 27) * s, (cx + 27) * s, (cy + 27) * s], fill=ink)
    for k in range(8):
        deg = k * 45
        p1 = _pt(cx, cy, 24, deg - 11), _pt(cx, cy, 38, deg - 8), _pt(cx, cy, 38, deg + 8), _pt(cx, cy, 24, deg + 11)
        d.polygon([(x * s, y * s) for x, y in p1], fill=ink)
    d.ellipse([(cx - 11) * s, (cy - 11) * s, (cx + 11) * s, (cy + 11) * s], fill=bg)


def icon_link(d, s, ink, bg):
    w = int(8 * s)
    d.rounded_rectangle([12 * s, 34 * s, 58 * s, 66 * s], 16 * s, outline=ink, width=w)
    d.rounded_rectangle([42 * s, 34 * s, 88 * s, 66 * s], 16 * s, outline=ink, width=w)


def icon_bowl(d, s, ink, bg):
    d.pieslice([14 * s, 16 * s, 86 * s, 96 * s], 0, 180, fill=ink)
    d.rounded_rectangle([10 * s, 44 * s, 90 * s, 54 * s], 5 * s, fill=ink)
    d.rounded_rectangle([34 * s, 82 * s, 66 * s, 90 * s], 4 * s, fill=ink)


def icon_alert(d, s, ink, bg):
    d.ellipse([12 * s, 12 * s, 88 * s, 88 * s], fill=ink)
    d.rounded_rectangle([45 * s, 26 * s, 55 * s, 56 * s], 4 * s, fill=bg)
    d.ellipse([44 * s, 63 * s, 56 * s, 75 * s], fill=bg)


def icon_check(d, s, ink, bg):
    d.ellipse([12 * s, 12 * s, 88 * s, 88 * s], fill=ink)
    d.line([30 * s, 52 * s, 44 * s, 66 * s, 70 * s, 36 * s], fill=bg, width=int(9 * s), joint="curve")


def icon_battery(d, s, ink, bg):
    d.rounded_rectangle([12 * s, 30 * s, 80 * s, 70 * s], 8 * s, outline=ink, width=int(7 * s))
    d.rounded_rectangle([82 * s, 42 * s, 90 * s, 58 * s], 3 * s, fill=ink)
    d.rounded_rectangle([22 * s, 40 * s, 58 * s, 60 * s], 3 * s, fill=ink)


def icon_plug(d, s, ink, bg):
    d.rounded_rectangle([26 * s, 40 * s, 74 * s, 70 * s], 10 * s, fill=ink)
    d.rectangle([34 * s, 16 * s, 42 * s, 42 * s], fill=ink)
    d.rectangle([58 * s, 16 * s, 66 * s, 42 * s], fill=ink)
    d.rectangle([45 * s, 68 * s, 55 * s, 88 * s], fill=ink)


def icon_drop(d, s, ink, bg):
    d.polygon([(50 * s, 10 * s), (24 * s, 52 * s), (76 * s, 52 * s)], fill=ink)
    d.ellipse([22 * s, 34 * s, 78 * s, 90 * s], fill=ink)


def icon_thermometer(d, s, ink, bg):
    d.rounded_rectangle([42 * s, 10 * s, 58 * s, 62 * s], 8 * s, outline=ink, width=int(6 * s))
    d.ellipse([32 * s, 54 * s, 68 * s, 90 * s], fill=ink)
    d.rounded_rectangle([46 * s, 32 * s, 54 * s, 70 * s], 4 * s, fill=ink)


def icon_gauge(d, s, ink, bg):
    d.arc([12 * s, 20 * s, 88 * s, 96 * s], 180, 360, fill=ink, width=int(8 * s))
    d.line([50 * s, 58 * s, 68 * s, 34 * s], fill=ink, width=int(7 * s))
    d.ellipse([43 * s, 51 * s, 57 * s, 65 * s], fill=ink)
    d.rounded_rectangle([20 * s, 76 * s, 80 * s, 84 * s], 4 * s, fill=ink)


def icon_swap(d, s, ink, bg):
    w = int(8 * s)
    d.line([16 * s, 34 * s, 78 * s, 34 * s], fill=ink, width=w)
    d.polygon([(90 * s, 34 * s), (70 * s, 18 * s), (70 * s, 50 * s)], fill=ink)
    d.line([84 * s, 66 * s, 22 * s, 66 * s], fill=ink, width=w)
    d.polygon([(10 * s, 66 * s), (30 * s, 50 * s), (30 * s, 82 * s)], fill=ink)


def icon_star(d, s, ink, bg):
    pts = []
    for k in range(10):
        r = 40 if k % 2 == 0 else 17
        pts.append(_pt(50, 54, r, -90 + k * 36))
    d.polygon([(x * s, y * s) for x, y in pts], fill=ink)


def icon_layers(d, s, ink, bg):
    for i, y in enumerate((30, 48, 66)):
        d.polygon([(50 * s, (y - 16) * s), (88 * s, y * s), (50 * s, (y + 16) * s), (12 * s, y * s)], fill=ink if i == 2 else bg, outline=ink, width=int(6 * s))


ICONS = {
    "calendar": icon_calendar, "clock": icon_clock, "gear": icon_gear, "link": icon_link,
    "bowl": icon_bowl, "alert": icon_alert, "check": icon_check, "battery": icon_battery,
    "plug": icon_plug, "drop": icon_drop, "thermometer": icon_thermometer, "gauge": icon_gauge,
    "swap": icon_swap, "star": icon_star, "layers": icon_layers,
}
DEFAULT_ICON_CYCLE = ["calendar", "gear", "link", "bowl", "alert", "check", "layers", "star"]


def render_icon_circle(name: str) -> Image.Image:
    size = BRAND["icon_circle"]
    big = size * SS
    img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    fill = BRAND["icon_fill"]
    d.ellipse([0, 0, big - 1, big - 1], fill=fill + (255,))
    glyph = int(big * BRAND["icon_glyph_ratio"] / 1)
    g = Image.new("RGBA", (glyph, glyph), (0, 0, 0, 0))
    gd = ImageDraw.Draw(g)
    ICONS[name](gd, glyph / 100.0, BRAND["ink"] + (255,), fill + (255,))
    img.alpha_composite(g, ((big - glyph) // 2, (big - glyph) // 2))
    return img.resize((size, size), Image.LANCZOS)


def parse_icons(spec: str) -> list[tuple[str, str]]:
    out: list[tuple[str, str]] = []
    for i, raw in enumerate([p.strip() for p in spec.split(",") if p.strip()]):
        if ":" in raw:
            label, icon = [x.strip() for x in raw.rsplit(":", 1)]
        else:
            label, icon = raw, DEFAULT_ICON_CYCLE[i % len(DEFAULT_ICON_CYCLE)]
        if icon not in ICONS:
            sys.exit(f"Unknown icon '{icon}'. Available: {', '.join(sorted(ICONS))}")
        out.append((label, icon))
    return out


# ---------------------------------------------------------------------------
# Composition
# ---------------------------------------------------------------------------
def cover(img: Image.Image, w: int, h: int, focus_x: float) -> Image.Image:
    img = img.convert("RGB")
    scale = max(w / img.width, h / img.height)
    nw, nh = round(img.width * scale), round(img.height * scale)
    img = img.resize((nw, nh), Image.LANCZOS)
    left = round((nw - w) * min(max(focus_x, 0), 1))
    top = (nh - h) // 2
    return img.crop((left, top, left + w, top + h))


def veil(w: int, h: int) -> Image.Image:
    a, b, m = BRAND["veil_opaque_until"], BRAND["veil_clear_at"], BRAND["veil_max_alpha"]
    ramp = Image.new("L", (w, 1))
    vals = []
    for x in range(w):
        t = x / (w - 1)
        alpha = m if t <= a else (0.0 if t >= b else m * (1 - (t - a) / (b - a)))
        # ease so the fade is soft
        alpha = m * ((alpha / m) ** 1.15) if m else 0
        vals.append(round(alpha * 255))
    ramp.putdata(vals)
    mask = ramp.resize((w, h))
    white = Image.new("RGB", (w, h), (255, 255, 255))
    return white, mask


def layout_title(title_text: str, forced_lines: list[str] | None):
    """Pick the largest title size that fits the width and leaves room for the rest of the layout."""
    B = BRAND
    tr_em = B["title_tracking_em"]
    right_limit = B["height"] - B["margin_bottom"]
    for size in range(B["title_max_size"], B["title_min_size"] - 1, -2):
        font = load_font(size, B["title_weight"])
        tracking = tr_em * size
        lines = forced_lines or wrap(title_text, font, tracking, B["title_max_width"])
        if max(tracked_width(l, font, tracking) for l in lines) > B["title_max_width"] + 1:
            continue
        if not forced_lines and len(lines) > B["title_preferred_lines"] and size > B["title_min_size"] + 8:
            continue
        pitch = size * B["title_line_height"]
        return size, font, tracking, lines, pitch
    sys.exit("Title does not fit; shorten it or split it with '|'.")


def compose(args) -> Image.Image:
    B = BRAND
    W, H = B["width"], B["height"]
    bg = Image.open(args.background)
    canvas = cover(bg, W, H, args.focus_x)
    white, mask = veil(W, H)
    canvas.paste(white, (0, 0), mask)
    canvas = canvas.convert("RGBA")
    draw = ImageDraw.Draw(canvas)

    # logo: the official asset, cropped to its visible bounds and scaled, never redrawn
    logo = Image.open(B["logo_path"]).convert("RGBA")
    bbox = logo.split()[3].point(lambda v: 255 if v > 64 else 0).getbbox()
    logo = logo.crop(bbox)
    lw = B["logo_width"]
    logo = logo.resize((lw, round(logo.height * lw / logo.width)), Image.LANCZOS)
    logo_y = B["logo_top"]
    canvas.alpha_composite(logo, (B["margin_left"], logo_y))

    # category label + accent line, right-aligned to the right margin
    cat_font = load_font(B["category_size"], B["category_weight"])
    cat_tr = B["category_tracking_em"] * B["category_size"]
    cat = args.category.upper()
    cat_w = tracked_width(cat, cat_font, cat_tr)
    line_end = W - B["margin_right"]
    line_start = line_end - B["accent_line_length"]
    text_x = line_start - B["accent_line_gap"] - cat_w
    asc, desc = cat_font.getmetrics()
    text_y = B["category_center_y"] - (asc + desc) / 2
    ly = B["category_center_y"]

    # Readability guarantee: this zone sits outside the left-side veil, so on a
    # background that is dark on the right too, add the same white backing the
    # veil already uses, sized to the label. Bright corners get no backing.
    px, py = B["category_backing_pad_x"], B["category_backing_pad_y"]
    probe_box = (
        max(0, round(text_x - px)),
        max(0, round(text_y - py)),
        min(W, round(line_end + px)),
        min(H, round(ly + B["accent_line_thickness"] + py)),
    )
    probe = canvas.convert("L").crop(probe_box)
    mean_luma = ImageStat.Stat(probe).mean[0]
    if mean_luma < B["category_contrast_luma_min"]:
        # Fully opaque, not the veil's softer alpha: this small badge still has to
        # read correctly after a browser's lossy re-encode (WebP/AVIF) of the
        # served image, which erodes soft, partially-transparent edges first.
        backing = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
        ImageDraw.Draw(backing).rounded_rectangle(
            probe_box, radius=B["category_backing_radius"], fill=(255, 255, 255, 255)
        )
        canvas.alpha_composite(backing)
        draw = ImageDraw.Draw(canvas)

    draw_tracked(draw, (text_x, text_y), cat, cat_font, B["ink"], cat_tr)
    draw.rectangle([line_start, ly - B["accent_line_thickness"] / 2, line_end, ly + B["accent_line_thickness"] / 2], fill=B["blue"])

    # title
    forced = [l.strip() for l in args.title.split("|")] if "|" in args.title else None
    size, font, tracking, lines, pitch = layout_title(args.title.replace("|", " "), forced)
    y = B["title_top"]
    asc, _ = font.getmetrics()
    for ln in lines:
        draw_tracked(draw, (B["margin_left"], y), ln, font, B["ink"], tracking)
        y += pitch
    title_bottom = y - (pitch - size * 0.78)  # visual bottom of the last line's caps

    # supporting copy
    s_font = load_font(B["support_size"], B["support_weight"])
    s_lines = balanced_wrap(args.supporting, s_font, 0, B["support_max_width"])
    sy = title_bottom + B["support_gap"]
    for ln in s_lines:
        draw.text((B["margin_left"], sy), ln, font=s_font, fill=B["supporting_ink"])
        sy += B["support_size"] * B["support_line_height"]

    # icon row
    icons = parse_icons(args.icons) if args.icons else []
    if icons:
        row_top = sy + B["icons_gap"] - (B["support_size"] * B["support_line_height"] - B["support_size"]) / 2
        # Measure each label's real ink box. An item is as wide as its circle or its label, whichever is larger.
        # Items are spread evenly over the row width with a visual gap of at least icon_gap_min.
        label_size = B["icon_label_size"]
        while True:
            l_font = load_font(label_size, B["icon_label_weight"])
            widths = []
            for label, _ in icons:
                x0, _, x1, _ = l_font.getbbox(label)
                widths.append(x1 - x0)
            extents = [max(B["icon_circle"], w) for w in widths]
            n = len(icons)
            free = B["icon_row_max_width"] - sum(extents)
            gap = min(B["icon_gap_max"], free / (n - 1)) if n > 1 else 0
            if n == 1 or gap >= B["icon_gap_min"]:
                break
            if label_size <= B["icon_label_min_size"]:
                sys.exit("Icon labels do not fit on one row with a 24px gap. Shorten the labels or use fewer icons.")
            label_size -= 1
        need = row_top + B["icon_circle"] + B["icon_label_gap"] + label_size * 1.3
        if need > H - B["margin_bottom"] + 1:
            sys.exit(f"Layout overflows the safe area by {need - (H - B['margin_bottom']):.0f}px. Shorten the title or supporting copy, or use fewer icons.")
        x = B["margin_left"]
        for (label, icon), ext, w in zip(icons, extents, widths):
            cx = x + ext / 2  # the circle and its label share one centre line
            canvas.alpha_composite(render_icon_circle(icon), (round(cx - B["icon_circle"] / 2), round(row_top)))
            x0 = l_font.getbbox(label)[0]
            draw.text((cx - w / 2 - x0, row_top + B["icon_circle"] + B["icon_label_gap"]), label, font=l_font, fill=B["ink"])
            x += ext + gap
    else:
        need = sy
        if need > H - B["margin_bottom"]:
            sys.exit("Layout overflows the safe area.")

    return canvas.convert("RGB")


def main() -> None:
    ap = argparse.ArgumentParser(description="Compose the Kumia Labs Hero: AI scene + code-drawn brand layer.")
    ap.add_argument("--background", help="Text-free background image (16:9 preferred).")
    ap.add_argument("--output", help="Output PNG path (1672x941).")
    ap.add_argument("--category", help="Category label, e.g. 'DESIGN THAT SURVIVED'.")
    ap.add_argument("--title", help="Title. Use '|' to force line breaks.")
    ap.add_argument("--supporting", help="Supporting copy.")
    ap.add_argument("--icons", default="", help="Comma list: 'Label' or 'Label:icon'. Icons cycle by default.")
    ap.add_argument("--focus-x", type=float, default=0.5, help="0..1 horizontal crop focus if the background is not 16:9.")
    ap.add_argument("--list-icons", action="store_true")
    args = ap.parse_args()

    if args.list_icons:
        print("\n".join(sorted(ICONS)))
        return
    for req in ("background", "output", "category", "title", "supporting"):
        if not getattr(args, req):
            ap.error(f"--{req} is required")
    for p, what in ((BRAND["logo_path"], "official logo"), (BRAND["font_path"], "font")):
        if not Path(p).exists():
            sys.exit(f"Missing {what}: {p}")
    out = compose(args)
    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    out.save(args.output, format="PNG", optimize=True)
    print(f"wrote {args.output} ({out.width}x{out.height})")


if __name__ == "__main__":
    main()
