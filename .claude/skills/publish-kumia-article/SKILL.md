---
name: publish-kumia-article
description: Kumia Labs記事の公開専用Skill（Template v2）。ChatGPTのFINAL APPROVED後だけ使う。記事に必要なファイルだけをstageしてcommit、mainへ通常push、Vercel Productionの確認、Production QA、sitemap確認まで行う。「/publish-kumia-article <slug>」「記事を公開して」で使う。force pushは禁止。
---

# publish-kumia-article

Kumia Labs記事の公開専用Skill。

## 呼び出し
`/publish-kumia-article <slug>`

ChatGPTからFINAL APPROVEDが出た後だけ使用。

## 1. Preflight
確認:
- current branch
- git status
- article files
- image files
- tracked changes
- untracked files

FINAL APPROVEDが確認できない場合は停止。

## 2. Stage
今回の記事に必要なファイルだけstage。

含める例:
- article page
- styles
- checker
- rules
- diagrams
- components
- Hero
- Body Images
- Card Thumbnail
- finds.ts
- sitemap.ts
- search-overlay.tsx
- articleに必要なその他tracked file

除外:
- docs/research/
- screenshots/
- .claude/
- unrelated images
- unrelated untracked files
- unrelated modified files

## 3. Stage確認
必ず:
- git status
- git diff --cached

意図したファイルだけであることを確認。

## 4. Validation
必要なら:
- npx tsc --noEmit
- npm run lint
- npm run build

失敗したらcommitしない。

## 5. Commit
通常commit。
force操作禁止。

## 6. Push
mainへ通常push。
force push禁止。

## 7. Vercel
Production deploymentを確認。
READY確認。
Production alias確認。

## 8. Production QA
最低限:
1. HTTP 200
2. Final title
3. Hero
4. Body Editorial Images
5. Card Thumbnail
6. Checker / interactive tool
7. Technical diagrams
8. Kumia intro / closing
9. Sources
10. Product Cards
11. no horizontal overflow
12. sitemap
13. canonical
14. metadata
15. OG
16. JSON-LD
17. search overlay

幅:
- 1440
- 390
- 360

### 8A. Affiliate QA
FINALの COMMERCE OPPORTUNITIES（AFFILIATE IMPLEMENTATION PLAN）と照合する。

READY商品:
- FINALで承認された商品だけが掲載されている
- リンク先のASIN / URLと商品名・バリエーションが一致
- 正しいTracking ID（`tag=kumialabs-20`）
- `rel="noopener noreferrer sponsored"` と `target="_blank"`
- 各CTA横の(paid link)
- AmazonDisclosure と サイトのAmazon Associate開示
- リンク切れ・誤誘導（別商品・amazon.co.jp等）がない
- メーカー公式Sourcesが残り、Amazonタグが付いていない
- 価格・在庫・評価などの表記がない
- Sources / methodologyの記述とアフィリエイトの有無が矛盾しない
- 検索リンク（`/s?k=`）はFINALで承認されたsearch-link opportunityだけで、検索語がFINALと一致し、CTAが検索だと分かる（商品詳細リンクに見せていない）
- 1440 / 390 / 360で表示崩れ・横スクロールがない

Amazon等のアクセス制限（CAPTCHA、地域リダイレクト等）で商品ページを確認できない場合は、
確認済みとしてPASSにせず「未確認」と報告する。

PENDING / NOT SUITABLE:
- その商品の商品詳細リンク・直接購入CTAが無いこと、その理由がFINALと一致することを確認する。
- 検索リンクがある場合は、FINALで別途READYとして承認されたものであることを確認する。

## 9. Final git status
確認:
- main == origin/main
- tracked changesなし
- unrelated untracked filesはそのまま
- docs/research等がcommitされていない

## 10. Final report
1. Commit hash
2. Push result
3. Vercel deployment ID
4. Production URL
5. Production status
6. Production QA
7. Sitemap
8. Final git status
9. 公開ファイル一覧
10. 除外ファイル一覧
11. Affiliate Assessment結果（Status、掲載商品・ASIN、未確認事項）

STATUS: PUBLISHED
