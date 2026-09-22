---
name: new-kumia-article
description: Kumia Labsの記事を実装するSkill（Template v2）。FINAL Work Package（docs/research/<slug>-work-package-final.md）を source of truth として、MODE A implement（実装→CHATGPT REVIEW PACKAGEで停止）と MODE B finalize（ChatGPT承認済み画像の統合→最終QAで停止）を行う。「/new-kumia-article <slug>」「/new-kumia-article <slug> finalize」「記事を実装して」「画像を統合して」で使う。FINAL Work Packageが無ければ調査せず停止する。commit/push/deployはしない。
---

# new-kumia-article

Kumia Labsの記事実装用Skill。

## 呼び出し
`/new-kumia-article <slug>`

または:
`/new-kumia-article <slug> finalize`

# KUMIA COMMON RULES（MODE A / MODE B 共通）

## KUMIA REPOSITORY INTEGRATION
新規記事では必要に応じて必ず確認・更新する:
- src/data/finds.ts
- src/app/sitemap.ts
- src/components/search-overlay.tsx
- article page / metadata / JSON-LD

既存Kumia Labsの記事構造を確認し、
既存のshared component / CSS / layout patternを優先して再利用する。

同じUIを記事ごとに不必要に再実装しない。

## IMAGE ASSET CONVENTION
画像制作ルールのsource of truthは
`docs/workflows/KUMIA_IMAGE_STANDARD_V1.md`
とする。詳細（safe area、Body枚数、Technical Visualとの切り分け、asset reuse禁止、QA等）はここに複製せず、そちらを参照する。
このImage Standardは、FINAL Work PackageがV3/V2のどちらであっても、新規記事画像に等しく適用する。

要点:
- 画像は用途ごとに別assetとして扱う（Hero / Body Editorial Image 0〜N / Card Thumbnail）。Body枚数は固定ではない。
- HeroをCardへ流用しない。BodyをHeroへ流用しない。
- **AI generates the scene. Code generates the Kumia brand layer.**
  画像生成AIが作るのは背景画像だけ（textなし、logoなし、iconなし、category labelなし、technical labelなし）。
  Kumia brand layer（logo / category label / accent line / title / supporting copy / icon row）は `scripts/generate-kumia-hero.py` で合成する。ロゴは公式asset `public/brand/kumia-labs-logo.png` をそのまま使い、描き直さない。
- 文字やロゴ入りで納品されたHeroは、そのまま統合しない（二重表示・欠けたロゴのため）。背景の再生成をユーザーに依頼するか、確認する。

filename（標準はKUMIA_IMAGE_STANDARD_V1.mdの FILENAMES を参照）:

```
public/images/kumia-<slug>-hero-bg.png
public/images/kumia-<slug>-hero.png
public/images/kumia-<slug>-body-01.png
public/images/kumia-<slug>-body-02.png
...
public/images/kumia-<slug>-card-16x9.png
```

Work PackageまたはChatGPT Reviewで別名が指定された場合は、
承認済み名称を優先する。

## FACTUAL SAFETY
以下を推測しない:
- compatibility
- fitment
- connector subtype
- product revision
- pressure / voltage / temperature / dimensions
- product URL
- price
- discount
- availability
- manufacturer support

根拠不足の場合は、
Work Packageの方針に従ってCHECK FIRSTまたは弱い表現を使用する。

「資料内で確認できない」
と
「存在しない / 互換性がない」
を混同しない。

新しいtechnical claimを実装都合で追加しない。

## RESEARCH FILES
Claude側で別のresearch documentを再生成しない。

source of truthは:
`docs/research/<slug>-work-package-final.md`
とする。

Work Packageの重複コピーや独自research summaryを作らない。

# MODE A — implement

## 1. FINAL Work Package確認
最初に:
`docs/research/<slug>-work-package-final.md`
を探す。

存在しない場合:
- Researchしない
- Draftを書かない
- 互換性を推測しない
- 実装しない

返して停止:
FINAL Work Packageがありません。
ChatGPT Workで調査・編集工程を完了し、
docs/research/<slug>-work-package-final.md
を用意してください。

STATUS: WAITING_FOR_WORK_PACKAGE

### 1A. V3 Zero-Knowledge Entry確認
FINAL Work PackageがV3（`Template: KUMIA_WORK_RESEARCH_TEMPLATE_V3.md`）で、
Zero-Knowledge Entryルール導入（2026-09-21）以降に作成されたものだけが対象。
詳細ルールは V3 template の「KUMIA ZERO-KNOWLEDGE ENTRY」「3.4」「16」を参照し、ここには複製しない。

実装前に確認:
- `# ZERO-KNOWLEDGE ENTRY` セクションがある
- Gate結果（PASS / REVISE）が記載されている

セクションが無い、不完全、またはGate結果がREVISEの場合:
- 実装せず、Work / editorial reviewへ差し戻す
- orientation文を自分で作らない

返して停止:
FINAL Work Packageの ZERO-KNOWLEDGE ENTRY が未完成です。
Work / editorial reviewで補ってください。

STATUS: WAITING_FOR_WORK_PACKAGE

対象外:
- 公開済みの既存記事（遡及して適用しない）
- 2026-09-21より前に作成されたFINAL（日付はFINALのヘッダで確認する。日付が読み取れず、セクションも無い場合は、実装せずユーザーに確認する）
- V2 Research Templateの記事（V2の挙動は変えない）

## 2. Source of truth
FINAL Work Packageをsource of truthとして使用。

優先:
- ZERO-KNOWLEDGE ENTRY（V3の新規FINALのみ。orientationはCOMPLETE ARTICLE DRAFTに含まれ、削らない）
- COMPLETE ARTICLE DRAFT
- COMPATIBILITY MODEL
- INTERACTIVE TOOL SPEC
- COMMERCE OPPORTUNITIES
- VERIFIED SOURCE TABLE
- IMPLEMENTATION NOTES
- IMAGE PLACEMENT PLAN
- TECHNICAL VISUAL OPPORTUNITIES

記事をゼロから再調査・全面リライトしない。

## 3. 実装
必要に応じて:
- article page
- styles
- checker
- pure rule functions
- HTML/CSS/SVG diagrams
- Product Cards
- Kumia bubbles
- metadata
- JSON-LD
- finds.ts
- sitemap.ts
- search overlay
- Sources

## 4. IMAGE PLACEMENT PLAN
各visualを:
CHATGPT ASSET
CLAUDE IMPLEMENTATION
に分類。

CHATGPT ASSET:
- Hero（背景シーンのみ。brand layerはコード合成 = CLAUDE IMPLEMENTATION）
- Body Editorial Image 0〜N（枚数はFINAL Work Package次第。固定枚数ではない）
- Card Thumbnail

最終画像は作らない。placeholderを配置。

CLAUDE IMPLEMENTATION:
- HTML/CSS/SVG Technical Diagram
- Interactive UI
- Decision Tree
- Compatibility Matrix
- Product Card

## 5. Body Placeholder
禁止:
- fixed-width overflow
- horizontal-scroll image
- mobileはみ出し

原則responsive。

## 6. Technical Visual
正確さが必要なものはHTML/CSS/SVG/Interactive UI。
AI technical artwork禁止。
必要ならConceptual / not to scaleを明記。

## 7. Kumia
Speech bubbleには必ずKumia character image。
characterなしbubbleはQA failure。

## 8. Commerce
FINAL Packageで確認されたものだけ。
price / discount / stock hard-code禁止。
best ranking禁止。
CHECK FIRSTで未確認商品を推奨しない。

## 9. QA
実行:
- npx tsc --noEmit
- npm run lint
- npm run build

確認:
- 1440
- 390
- 360
- no horizontal overflow
- checker
- diagrams
- placeholders
- Kumia
- Product Cards
- Sources

## 10. STOP
commit / push / deploy 禁止。

出力:
CHATGPT REVIEW PACKAGE

1. Route / slug
2. Changed files
3. Article structure
4. Checker implementation
5. Complete checker rules
6. Technical diagrams
7. Product / commerce implementation
8. Source handling
9. IMAGE PLACEMENT MAP
10. Hero placeholder
11. Body image placeholders
12. Card thumbnail location
13. Desktop QA
14. Mobile 390 QA
15. Mobile 360 QA
16. Validation
17. Proposed filenames
18. Proposed aspect ratios
19. Remaining issues

STATUS: WAITING_FOR_CHATGPT_REVIEW

# MODE B — finalize

## 1. 前提
ChatGPT承認済み画像がrepoにあること。
FINAL Work PackageのIMAGE PLACEMENT PLANを読む。

## 2. 統合
- Hero
- Body Editorial Images
- Card Thumbnail

Heroの合成:
- `kumia-<slug>-hero-bg.png` があり `kumia-<slug>-hero.png` が未作成なら、FINAL Work Packageの FINAL CATEGORY LABEL / FINAL TITLE / FINAL SUPPORTING COPY / HERO CONCEPTのicon conceptsを入力に `scripts/generate-kumia-hero.py` を実行して最終Heroを作る（1672×941、同じ入力なら常に同じ画像）。
- 背景が条件（text/logo/iconなし、左45〜50%が静か）を満たしているか確認する。満たさない場合は統合せずユーザーに報告する。
- 最終Heroは通常のHero patternで表示する（画像がタイトルを持つため、H1はsr-only）。

画像の受け渡し:
- `scripts/package-kumia-assets.py --slug <slug>` で Hero / Body / Card を `kumia-<slug>-assets.zip` にまとめられる。`public/images/` へそのまま展開でき、個別のリネーム・移動は不要。

必要に応じて:
- alt
- metadata image
- OG image
- JSON-LD image
- finds.ts image

Hero / Body / Cardは別asset。

## 3. Visual QA
確認:
- Hero crop
- Hero readability
- Body image spacing
- 本文とVisualのリズム
- Card
- Checker
- Technical diagrams
- Kumia
- Product Cards
- Sources
- no horizontal overflow

幅:
- 1440
- 390
- 360

## 4. Validation
- npx tsc --noEmit
- npm run lint
- npm run build

## 5. STOP
commit / push / deploy 禁止。

出力:
FINAL VISUAL QA REPORT

1. Hero
2. Body Images
3. Card Thumbnail
4. Checker
5. Technical Diagrams
6. Kumia
7. Desktop QA
8. Mobile 390 QA
9. Mobile 360 QA
10. Overflow
11. TypeScript
12. Lint
13. Build
14. Remaining issues

STATUS: READY_FOR_FINAL_APPROVAL
