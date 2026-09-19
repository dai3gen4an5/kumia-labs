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

STATUS: PUBLISHED
