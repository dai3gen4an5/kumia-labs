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
画像は用途ごとに別assetとして扱う。
- Hero
- Body Editorial Image 1
- Body Editorial Image 2
- Body Editorial Image 3（必要な場合）
- Card Thumbnail

HeroをCardへ流用しない。
BodyをHeroへ流用しない。

推奨filename:

Hero:
`public/images/kumia-<slug>-hero.png`

Body:
`public/images/kumia-<slug>-body-01.png`
`public/images/kumia-<slug>-body-02.png`
`public/images/kumia-<slug>-body-03.png`

Card:
`public/images/kumia-<slug>-card-16x9.png`

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

## 2. Source of truth
FINAL Work Packageをsource of truthとして使用。

優先:
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
- Hero
- Body Editorial Image 1
- Body Editorial Image 2
- Body Editorial Image 3
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
