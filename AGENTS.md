<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Kumia Labs article production

Kumia Labsの新規記事制作では、
`docs/workflows/KUMIA_ARTICLE_PIPELINE_V2.md`
を標準Workflowとして使用する。

記事実装時は:
`.claude/skills/new-kumia-article/SKILL.md`

公開時は:
`.claude/skills/publish-kumia-article/SKILL.md`

を使用する。

FINAL Work Package:
`docs/research/<slug>-work-package-final.md`

が存在しない状態では、
Claude側で記事調査・記事本文作成を開始しない。

詳細ルールはここに複製せず、上記のWorkflow / Skillファイル
(および `docs/workflows/KUMIA_WORK_RESEARCH_TEMPLATE_V2.md`、
`docs/workflows/KUMIA_CHATGPT_EDITORIAL_CHECKLIST_V2.md`)
をsource of truthとする。
