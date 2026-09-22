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

## 画像の基本原則

> **AI generates the scene. Code generates the Kumia brand layer.**

画像制作の詳細ルール（Hero背景・safe area・Body枚数・Technical Visualとの切り分け・Card・asset reuse・packaging・QA・accessibility）のsource of truthは
`docs/workflows/KUMIA_IMAGE_STANDARD_V1.md`
とする。ここでは重複させず、このPipelineに固有の分業・実行順序だけを記載する。

**このImage Standardは、Research Template V3 / V2のどちらを使う記事かに関係なく、今後作るすべての新規Kumia Labs記事画像に適用する。** 例外はChatGPT Editorial Reviewで明示的に承認された記事固有のものだけ。

要点だけ再掲:
- **画像生成AI（ChatGPT）:** 写真・背景・記事固有の物体だけを生成する。ブランド要素（logo / category label / accent line / title / supporting copy / icon row）は描かせない。
- **Kumia brand layer（コード）:** `scripts/generate-kumia-hero.py` で固定テンプレートとして合成する。
- Body Editorial ImageとCard Thumbnailは画像生成AIで作る。Body枚数は0〜Nで、記事内容次第（固定枚数ではない）。

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
- Heroコピー候補（category label / title / supporting copy / icon labelの候補）
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
- Hero背景シーンの設計・生成（ブランド要素は生成しない）
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
- Hero brand layerの合成（scripts/generate-kumia-hero.py）
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
編集方針: **Broad curiosity, deep verification.**
（選ぶときは広く・浅く＝普通の人が面白いと思う身近な題材。検証は深く。文章は易しく。）

- テーマは、ownerでない一般の好奇心のある読者が面白がれるかで選ぶ。
- 「Compatibility is one source of the story, not the product.」互換性は記事の素材の一つであり、記事そのものではない。
- Primary Candidate Gate（V3 section 3.1の5問）と Specialist Trap（3.2）はWorkが判定し、Draftの冒頭に記録する。
  Specialist Trapに該当し、より広い入口が見つからない場合は、無理にStory-Firstにせず、V2（Checker中心）へ切り替えるか、テーマを見送る（切り替えは理由を記録する）。
- 「Make people interested in the product before asking them to buy it.」商品リンクは関心を作った後に自然に置く。
- **Zero-Knowledge Entry**（V3の必須ルール）: 「読者は2つの対象のどちらも知らない」と仮定する。
  驚きの接続を明かす前に、一般の読者が Object A / Object B が何か、それぞれ通常何に使うか、話に必要な基本ラインナップ・バリエーション、専門用語の意味を理解できる状態にする。
  Workは Zero-Knowledge Entry Gate（V3 section 3.4の5問）を判定し、Draftに記録する。1〜3がNOなら、先へ進まず入口を作り直す（REVISE THE ENTRY）。愛好家コミュニティで常識だからという理由で、前提知識を黙って仮定しない。

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
デフォルト使用テンプレート:
`docs/workflows/KUMIA_WORK_RESEARCH_TEMPLATE_V3.md`

例外使用テンプレート:
`docs/workflows/KUMIA_WORK_RESEARCH_TEMPLATE_V2.md`

V3を原則とし、V2は純粋な技術互換性・fitment重視の記事に限る。
V3の編集方針は「Broad curiosity, deep verification」。Draftには、Primary Candidate Gateの回答、Specialist Trap判定、Zero-Knowledge Entry Gateの回答（orientation案を含む）、5案以上のtitle candidates（数値採点なし）を含める。
V3の標準の読者フローは ORIENT → EXPLAIN → SURPRISE → ENTERTAIN → CREATE CURIOSITY → TRY / EXPLORE → PRODUCT INTEREST → COMMERCE。
記事冒頭に、必要に応じて短いorientation（通常2〜4段落、百科事典にしない）を置く。
V3/V2の選択条件とResearch成果物の要件は、各Research Templateを
source of truthとする。

成果物:
`docs/research/<slug>-work-package-draft.md`
（冒頭に `SLUG:` を記載。`<slug>` はPHASE 0で決定したslug）

終了:
`STATUS: READY_FOR_CHATGPT_EDITORIAL_REVIEW`

ここで停止し、ChatGPTのEditorial Review前にClaude Code実装へ進まない。

## PHASE 2 — ChatGPT 編集レビュー
確定項目:
- FINAL ARTICLE ANGLE
- FINAL ARTICLE STRUCTURE
- FINAL ZERO-KNOWLEDGE ENTRY（両対象を知らない読者が冒頭を理解できるか）
- FINAL CHECKER SCOPE
- FINAL VERDICT DEFINITIONS
- FINAL TITLE
- FINAL SUPPORTING COPY
- FINAL CATEGORY LABEL
- FINAL IMAGE PLACEMENT PLAN
- FINAL HERO CONCEPT
- FINAL BODY IMAGE 1..N（0〜N。枚数は記事内容次第、固定枚数ではない）
- FINAL TECHNICAL VISUALS
- FINAL CARD THUMBNAIL CONCEPT

標準目安（`KUMIA_IMAGE_STANDARD_V1.md`参照。枚数はquotaではない）:
- Hero: 1
- Body Editorial Images: 0〜N
- Technical Visuals: 0〜N
- Card Thumbnail: 1

## PHASE 3 — Work 最終改稿
成果物:
`docs/research/<slug>-work-package-final.md`
（冒頭の `SLUG:` はDraftから変更しない）

これをClaude Codeのsource of truthとする。
FINALには `# ZERO-KNOWLEDGE ENTRY` セクション（Object A/Bの平易な説明、通常の用途、必須のバリエーション、説明が必要な用語、orientation案、Gate結果）が必須。このセクションが無い、またはGate結果がREVISEのFINALは未完成として扱う（V3 section 16）。

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
1. Hero background（`kumia-<slug>-hero-bg.png`）
2. Body Image 1..N（FINAL IMAGE PLACEMENT PLANの枚数。0〜Nで固定枚数ではない）
3. Card Thumbnail

同じ用途の画像を一度に複数生成しない。

Hero背景・Body・Card・Technical Visualの詳細ルール（条件・禁止事項・left safe area等）は
`docs/workflows/KUMIA_IMAGE_STANDARD_V1.md`
を参照する（ここでは重複させない）。

**最終Hero**（`public/images/kumia-<slug>-hero.png`）は、背景にbrand layerを合成して作る:

```
python scripts/generate-kumia-hero.py \
  --background public/images/kumia-<slug>-hero-bg.png \
  --output public/images/kumia-<slug>-hero.png \
  --category "<FINAL CATEGORY LABEL>" \
  --title "<FINAL TITLE>" \
  --supporting "<FINAL SUPPORTING COPY>" \
  --icons "Label:icon,Label:icon,..."
```

- 出力は1672×941 PNG。同じ入力なら常に同じ画像になる。
- ロゴ、フォント、位置、サイズ、余白などの固定値はscript内の `BRAND` にあり、記事ごとに変更しない。
- 詳細は `scripts/README.md`。
- コード実行ができる側（ChatGPTまたはClaude Code）がこのscriptを実行する。どちらでも同じ結果になる。

### 画像のpackage
画像が揃ったら、次でまとめる:

```
python scripts/package-kumia-assets.py --slug <slug>
```

Hero / Body / Cardを `kumia-<slug>-assets.zip` にまとめる（最終ファイル名のまま）。`public/images/` へそのまま展開すればよく、個別のリネーム・移動は不要。`-hero-bg.png` は含めない。

## PHASE 6 — Claude Code finalize
実行:
`/new-kumia-article <slug> finalize`

担当:
- ChatGPT承認済み画像統合
- Hero合成（`-hero-bg.png` があり `-hero.png` が未作成なら scripts/generate-kumia-hero.py を実行）
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
