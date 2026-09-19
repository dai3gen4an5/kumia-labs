# Kumia Labs 記事制作パイプライン v2

## 目的
Kumia Labs の記事制作を、以下の分業で安定して回す。

1. テーマ決定
2. ChatGPT Work: 調査・初稿・画像配置計画
3. ChatGPT: 編集レビュー
4. ChatGPT Work: 最終改稿
5. Claude Code: 実装
6. ChatGPT: Visual Review・画像制作
7. Claude Code: 画像統合・最終QA
8. ChatGPT: 最終承認
9. Claude Code: commit / push / Production QA

## 基本責任分担

### ChatGPT Work
担当:
- Web調査
- 一次情報確認
- 互換性モデル
- 記事初稿
- Interactive Tool仕様
- Commerce候補
- タイトル候補
- Heroコピー候補
- IMAGE PLACEMENT PLAN
- Body Editorial Imageの必要性判断
- Technical Visual候補
- Card Thumbnail案

担当しない:
- コード実装
- 最終画像生成
- commit / push / deploy

### ChatGPT
担当:
- 編集長
- 記事の方向性決定
- 冗長部分の削除
- Checker範囲の最終判断
- Verdictの最終判断
- タイトル確定
- Supporting Copy確定
- IMAGE PLACEMENT PLAN最終決定
- Hero設計
- Body Editorial Image設計・生成
- Card Thumbnail設計・生成
- 最終Visual Review
- 公開前最終承認

画像生成前に必ず以下を確定:
- FINAL TITLE
- FINAL SUPPORTING COPY
- FINAL CATEGORY LABEL
- FINAL IMAGE PLACEMENT PLAN
- FINAL HERO CONCEPT
- FINAL BODY IMAGE PLAN
- FINAL CARD CONCEPT

### Claude Code
担当:
- FINAL Work Packageを読む
- 記事ページ実装
- Interactive Tool実装
- HTML/CSS/SVG Technical Visual
- Product Card
- Kumia UI
- metadata / JSON-LD / sitemap / search
- 画像placeholder配置
- 最終画像統合
- Desktop / Mobile QA
- build
- 承認後のcommit / push / Production QA

担当しない:
- 記事調査のやり直し
- 記事本文の全面書き直し
- 最終Editorial Image生成
- 未承認deploy

## PHASE 0 — テーマ決定
基本入力（テーマだけで開始できる）:
```text
Kumia Labs新規記事

テーマ:
Pressure Washer × Hose × Gun × Adapter
```

slugはOPTIONAL。

- 指定がない場合: Workが記事テーマと最終的な記事内容から、短く自然な英語slugを自動生成する
  例: `pressure-washer-hose-and-gun-fit`
- 指定したい場合だけ、以下を追加する:
```text
slug:
<slug>
```

slugの基本ルール:
- lowercase、ハイフン区切り
- URLとして自然で、記事内容を正しく表す
- 不要な冠詞や長すぎる語句、genericすぎる語を避ける
- 既存routeと重複しない
- category名をslug内に無理に重複させない

決定したslugは、Work Packageの冒頭に `SLUG:` として必ず記載する。
以降のDraft / Final / 実装 / 公開では、そのslugを変更しない。

## PHASE 1 — Work 初稿
使用テンプレート:
`docs/workflows/KUMIA_WORK_RESEARCH_TEMPLATE_V2.md`

成果物:
`docs/research/<slug>-work-package-draft.md`
（冒頭に `SLUG:` を記載。`<slug>` はPHASE 0で決定したslug）

終了:
`STATUS: READY_FOR_CHATGPT_EDITORIAL_REVIEW`

## PHASE 2 — ChatGPT 編集レビュー
確定項目:
- FINAL ARTICLE ANGLE
- FINAL ARTICLE STRUCTURE
- FINAL CHECKER SCOPE
- FINAL VERDICT DEFINITIONS
- FINAL TITLE
- FINAL SUPPORTING COPY
- FINAL CATEGORY LABEL
- FINAL IMAGE PLACEMENT PLAN
- FINAL HERO CONCEPT
- FINAL BODY IMAGE 1
- FINAL BODY IMAGE 2
- FINAL BODY IMAGE 3（必要な場合のみ）
- FINAL TECHNICAL VISUALS
- FINAL CARD THUMBNAIL CONCEPT

標準目安:
- Hero: 1
- Body Editorial Images: 2〜3
- Technical Visuals: 1〜2
- Card Thumbnail: 1

## PHASE 3 — Work 最終改稿
成果物:
`docs/research/<slug>-work-package-final.md`
（冒頭の `SLUG:` はDraftから変更しない）

これをClaude Codeのsource of truthとする。

終了:
`STATUS: READY_FOR_FINAL_CHATGPT_EDITORIAL_REVIEW`

## PHASE 4 — Claude Code 実装
実行:
`/new-kumia-article <slug>`

Claudeは最初に:
`docs/research/<slug>-work-package-final.md`
を確認する。

存在しない場合は停止。

禁止:
- commit
- push
- deploy

終了:
`STATUS: WAITING_FOR_CHATGPT_REVIEW`

## PHASE 5 — ChatGPT Visual Review / 画像制作
最初に FINAL IMAGE ASSET LIST を確定。

生成順:
1. Hero
2. Body Image 1
3. Body Image 2
4. Body Image 3（必要なら）
5. Card Thumbnail

同じ用途の画像を一度に複数生成しない。

### Hero固定ルール
- 16:9
- 推奨 1672×941
- Kumia Labs logo
- short category label
- short blue line
- FINAL TITLE
- FINAL SUPPORTING COPY
- 必要なら少数のicon
- realistic/editorial visual

禁止:
- 勝手なtagline
- 不要なmascot
- 不要なcharacter
- generic product collage
- fake technical drawing
- 未承認コピー
- Cardとの兼用

### Body Editorial Image固定ルール
- 標準 2〜3枚
- 必要なら4枚
- 原則文字なし
- Kumia Labs logoなし
- titleなし
- category labelなし
- 1画像1メッセージ
- 360pxでも意味が分かる
- Heroとは別構図
- exact technical geometryをAIで作らない
- horizontal scroll前提にしない

### Technical Visual固定ルール
以下はClaude実装優先:
- connector geometry
- pinout
- terminal
- thread
- dimension
- seal location
- rail
- fitment measurement
- electrical contact

方法:
- HTML
- CSS
- SVG
- Interactive UI
- verified manufacturer imagery

### Card Thumbnail固定ルール
- 16:9
- text 0
- logo 0
- title 0
- category label 0
- Heroとは別構図
- 小さくても意味が分かる
- 1 visual idea
- clutterを避ける

## PHASE 6 — Claude Code finalize
実行:
`/new-kumia-article <slug> finalize`

担当:
- ChatGPT承認済み画像統合
- alt
- metadata
- OG
- JSON-LD image
- finds.ts image
- responsive QA
- final build

禁止:
- commit
- push
- deploy

終了:
`STATUS: READY_FOR_FINAL_APPROVAL`

## PHASE 7 — 公開
ChatGPTのFINAL APPROVED後のみ:
`/publish-kumia-article <slug>`

担当:
- git status
- 必要ファイルだけstage
- git diff --cached
- commit
- normal push
- Vercel Production確認
- Production QA
- sitemap
- canonical
- metadata
- OG
- JSON-LD
- Search
- 1440 / 390 / 360
- overflow

除外:
- docs/research/
- screenshots/
- .claude/
- unrelated untracked files

終了:
`STATUS: PUBLISHED`
