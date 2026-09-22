# KUMIA IMAGE STANDARD V1

**Status:** Standard image-production rules for Kumia Labs articles.

**Scope:** All new Kumia Labs article imagery, regardless of whether the article uses Research Template V3 or V2, unless an article-specific exception is explicitly approved during ChatGPT Editorial Review.

**Primary rule:**

> **AI generates the scene. Code generates the Kumia brand layer.**

This file is the source of truth for Kumia Labs image production.

Where this file conflicts with another workflow, template, Skill, or an older article's instructions, **this file wins**, unless an explicit article-specific exception has been approved in a ChatGPT Editorial Review.

This document does not change the behavior of the existing Hero pipeline (`scripts/generate-kumia-hero.py`, `scripts/package-kumia-assets.py`). It consolidates rules that were previously spread across `KUMIA_WORK_RESEARCH_TEMPLATE_V3.md`, `KUMIA_ARTICLE_PIPELINE_V2.md`, the `new-kumia-article` Skill, `scripts/README.md`, and individual Work Packages.

`KUMIA_WORK_RESEARCH_TEMPLATE_V2.md` itself is not modified by this document and remains its own historical/editorial template. Its image-related passages are legacy and frozen; this Standard's image rules still apply to any new article produced under V2, exactly as they do under V3.

---

## GLOBAL

Division of responsibility:

**ChatGPT image generation:**

- Hero photographic/editorial background
- Body Editorial Images, as needed
- Card Thumbnail

**Claude / deterministic code:**

- final Hero composition
- official Kumia Labs logo
- category label
- blue accent line
- title typography
- supporting-copy typography
- Hero icon row / icon labels
- HTML/CSS/SVG Technical Visuals
- Interactive UI
- repo integration
- QA
- packaging

Never ask an image model to generate:

- the Kumia Labs logo
- the article title
- the supporting copy
- the category label
- the category accent line
- Hero icons
- icon labels
- fixed Kumia typography/layout

Principle:

> Photography/editorial scenery may vary. Kumia's design system does not.
> Generate the scene. Compose the brand. Use only as many images as the story earns.

---

## HERO BACKGROUND

Intermediate asset: `kumia-<slug>-hero-bg.png`
Final asset: `kumia-<slug>-hero.png`

Hero background requirements:

- 16:9, standard output 1672×941
- no text
- no logo
- no icons
- no category label
- no technical labels
- no arrows or measurements
- no fake UI or fake branding

### Left safe area

Reserve the left 45–50% of the Hero background as the Kumia brand safe area. That side must be:

- relatively bright
- quiet
- low-detail
- free of the primary subject
- free of faces
- free of important hands/objects
- free of strong shadow
- free of high-contrast edges
- free of important product detail
- free of clutter (rails, cables, handles, and similar)

A readability veil does not excuse a bad background composition.

Main subject: placed center to right. The composition must keep the main subject visible on mobile as well.

---

## REAL PRODUCTS

For articles about real products, prefer, in order:

1. rights-cleared official/press imagery where appropriate
2. appropriately licensed real photography
3. clearly conceptual editorial imagery

Do not generate an AI image that closely mimics a real product and present it as if it were the real thing.

Also prohibited:

- fake official logos
- fake packaging
- fake UI
- fake attraction hardware
- recreations of copyrighted characters
- fake archival/documentary imagery

Visual claims must never be stronger than the article's researched claims.

---

## HERO BRAND LAYER

The final Hero is generated with `scripts/generate-kumia-hero.py`.

Fixed (do not change per article):

- official logo
- Geist typography
- title typography system
- supporting-copy style
- category styling
- blue accent
- icon style
- spacing
- readability veil
- overall layout

Changeable per article:

- background
- category text
- title
- supporting copy
- approved icon labels/types

Do not change the `BRAND` constants in the script for one article's convenience.

If the copy does not fit:

- improve or shorten the title/supporting copy
- reduce the number of icons
- use an intentional title line break (`|`)

Never weaken the design system to make copy fit.

**Logo:** `public/brand/kumia-labs-logo.png` only. Never redrawn.
**Font:** `scripts/assets/fonts/Geist-Variable.ttf`.
**Icons:** check the built-in set with `python scripts/generate-kumia-hero.py --list-icons` and use only those.

---

## BODY EDITORIAL IMAGES

Body image count is not fixed.

**The rule is 0–N.** Two to three images are a typical example, not a quota.

- **0 images:** acceptable when a Technical Visual, an Explorer, or sourced imagery already carries the story.
- **1 image:** acceptable when only one major story beat needs an image.
- **Several images:** only when each one independently earns its place.

Body principles:

- 16:9
- no text
- no logo
- no category label
- one image, one message
- understandable even at 360px
- no horizontal scroll required
- a composition separate from the Hero
- no decorative filler

Each Body brief should include, where relevant:

- Visual ID
- Placement
- Purpose
- Story beat
- Composition
- Mood
- What it explains
- Precision risk
- Source requirement
- Mobile consideration
- Avoid list

---

## TECHNICAL VISUAL

Do not use an AI editorial image for a precision-sensitive visual.

Examples that must not be AI-generated:

- connector geometry
- thread
- pinout
- terminal
- electrical contact
- dimensions
- seal location
- fitment measurement
- rail
- mating surface
- technical cutaway

Claude implements these with, in order of preference:

- HTML
- CSS
- SVG
- Interactive UI
- verified manufacturer imagery

When a visual is conceptual, label it explicitly, e.g. **"Conceptual — not to scale."**

Keep technical wording in live HTML/SVG wherever possible; do not bake it into a raster image.

---

## CARD THUMBNAIL

Asset: `kumia-<slug>-card-16x9.png`

One card, in principle.

- 16:9
- no text
- no logo
- no title
- no category label
- a composition separate from the Hero
- never a Hero crop
- one visual idea
- readable at small size
- low clutter
- no tiny technical detail

Keep a safe crop near the center in mind.

---

## ASSET REUSE

Hero, Body, and Card are separate assets.

Prohibited:

- reusing the Hero as the Card
- cropping the Hero into the Card
- reusing a Body image as the Hero
- forcing one asset to serve multiple roles

---

## IMAGE PLACEMENT PLAN

Every FINAL Work Package includes an IMAGE PLACEMENT PLAN.

Recommended columns:

- Visual ID
- Placement
- Purpose
- Visual type
- Content
- What it explains
- Produced by
- Precision risk
- Source requirement
- Mobile consideration
- Avoid

**Produced by:**

- **CHATGPT ASSET:** Hero background, Body Editorial Images, Card Thumbnail
- **CLAUDE IMPLEMENTATION:** final Hero composition, Technical Visual, Interactive UI, Matrix, Decision Tree, Product Card

Claude does not replace this with its own ad hoc image-generation workflow.

---

## VISUAL AVOID LIST

Every FINAL Work Package includes an article-specific Visual Avoid List, as needed. Examples:

- fake geometry
- wrong connector
- misleading compatibility
- unsafe usage
- incorrect scale
- fake packaging
- fake UI
- fake archival photo
- recreation of a licensed character
- unverified product variant
- technical labels baked into a raster image
- Hero reuse

---

## WORKFLOW

Image process:

1. **Work** — research / Draft / image briefs
2. **ChatGPT Editorial Review** — final article + image plan confirmed
3. **Work FINAL**
4. **Claude implement** — article + placeholders, Technical Visual / Interactive UI implementation, then STOP
5. **ChatGPT** — Visual Review, generate the Hero background, generate the needed number of Body images, generate the Card
6. **Claude finalize** — `generate-kumia-hero.py`, image integration, `package-kumia-assets.py`, Visual QA
7. **ChatGPT** — final approval
8. **Claude** — commit / push / Production QA

Important: images are produced against the approved asset list, but this does not normally mean checking in with the user after every single image ("How's the Hero?" / "Should I make the Body image?" / "Move on?"). Proceed through the sequence unless there is a material problem. Do not mass-generate alternatives for the same role without a reason.

---

## FILENAMES

```
kumia-<slug>-hero-bg.png
kumia-<slug>-hero.png
kumia-<slug>-body-01.png
kumia-<slug>-body-02.png
...
kumia-<slug>-card-16x9.png
```

Body images are numbered from 01, sequentially, with no gaps.

---

## PACKAGING

```
python scripts/package-kumia-assets.py --slug <slug>
```

Output: `kumia-<slug>-assets.zip`, containing:

- the final Hero
- Body images 0–N
- the Card
- a README

`hero-bg.png` is intermediate and is not included in the zip.

---

## QA

Visual QA is required in addition to a successful script run / build.

At minimum, check at:

- 1440
- 390
- 360

Verify:

- Hero readability
- the left safe area
- crop / scaling
- main subject visibility
- the correct official logo
- typography
- category label
- icon row
- icon spacing
- Body relevance
- Body spacing
- Card readability at small size
- Technical Visual mobile stacking
- no clipping
- no horizontal overflow
- no stretched image
- no misleading/fake imagery
- that no visual claim exceeds the article's evidence

---

## ACCESSIBILITY

Every meaningful image has alt text.

Alt text describes:

- the scene
- the editorial relationship
- the story beat

Do not write alt text that implies the image itself proves technical compatibility. Technical meaning stays in the HTML body text. Status is never communicated by color alone.

---

## KUMIA CHARACTER

When a Kumia speech bubble is used, follow the existing site component pattern and always include the Kumia character image.

A bubble without the character is a QA failure.

---

## DEFAULT COUNTS

- Hero background: 1
- Final Hero: 1
- Body Editorial Images: 0–N
- Technical Visuals: 0–N
- Card: 1
- Interactive Visual: only when editorially justified

Do not add images to hit a count quota.
