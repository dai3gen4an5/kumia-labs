# KUMIA WORK RESEARCH TEMPLATE V3
## Combination Discovery + Trivia Editorial

**Status:** Standard template for new Kumia Labs articles  
**Primary owner:** ChatGPT Work  
**Implementation handoff:** Claude Code  
**Supersedes:** V2 as the default template  
**V2 role:** Keep V2 available for narrow, compatibility-heavy articles where the main value is precise MATCH / PARTIAL / NO MATCH coverage.

---

# KUMIA CORE EDITORIAL PRINCIPLE

> **"Compatibility is the entry point, not the article."**

This is the top-level rule of V3. It outranks every other section below.

A Kumia Labs article must not exist only to answer “A works / does not work with B.”

Use the combination of things as the doorway, then dig into:

- surprising history
- design philosophy
- why a specification survived or changed
- connections across generations
- cultural background
- strange or weird exceptions
- unexpected combinations of past and present
- trivia a reader would want to tell someone else

Compatibility, fitment, checkers, and product data come **second**.
They give the reader a practical answer *after* the story has made them care.

---

# 0. Core Editorial Goal

Kumia Labs investigates:

> **What happens when you combine one real thing with another?**

The article must do more than answer a compatibility question.

Prefer topics that make a reader think:

- “I didn’t know those could be combined.”
- “Why does that work?”
- “That’s a weird bit of history.”
- “What other combinations can I try?”
- “Which combination is best for me?”

The best Kumia article combines **practical value + discovery + trivia + reader choice**.

Avoid turning Kumia Labs into a narrow parts-compatibility database.

---

# 1. Default Editorial Priorities

Rank candidate value in this order:

1. **Mainstream recognition**
   - Prefer well-known products, brands, games, household items, hobbies, or platforms.
   - Broad consumer familiarity is a major positive signal.

2. **Combination surprise**
   - The combination itself should be interesting.
   - Cross-generation, cross-brand, unexpected reuse, hidden interoperability, unusual synergy, and “third item makes it work” are strong hooks.

3. **Story / trivia depth**
   - Look for history, design decisions, origin stories, long-lived standards, cultural context, manufacturer strategy, accidents, quirks, or unexpected reasons the combination exists.

4. **Reader choice**
   - Prefer topics with at least 10–20 meaningful combinations.
   - Ideally offer dozens of choices, variants, pairings, or build paths.

5. **Practical usefulness**
   - The reader should be able to decide what to try, reuse, buy, combine, avoid, or build.

6. **Source quality**
   - Strong preference for first-party sources, official specifications, manuals, support pages, official tournament data, public decklists, standards documentation, or direct manufacturer statements.

7. **Monetization**
   - Favor natural purchase paths, but do not distort editorial conclusions for affiliate potential.

---

# 1A. Slug Rule

The slug is **optional** input.

- If the user specifies a slug, use exactly that slug.
- If not, Work generates one from the article theme and the final article content.

Slug requirements:

- lowercase
- words separated by hyphens
- natural as a URL
- not too generic
- avoid unnecessary articles and overly long phrases
- do not redundantly repeat the category name
- check for duplicates against existing routes (`src/app/` and `src/data/finds.ts`)

Once decided, the slug **must not change** between Draft → FINAL → implementation → publish.

Every Work Package (Draft and FINAL) must begin with:

```
SLUG:
<slug>
```

Save paths use the same slug:

- Draft: `docs/research/<slug>-work-package-draft.md`
- FINAL: `docs/research/<slug>-work-package-final.md`

---

# 2. Article Modes

At the start of every project, choose one **primary mode**. Secondary modes may be combined.

## MODE A — Story-First Combination

Use when the main appeal is:

- “These two things unexpectedly work together.”
- “This old product still works with this new one.”
- “These rival brands share a hidden compatibility.”
- “This combination exists because of a strange design/history decision.”

The story is the lead.  
A checker or comparison tool is optional.

## MODE B — Compatibility Checker

Use when readers genuinely need to know whether A works with B.

Possible outputs:

- MATCH
- PARTIAL
- NO MATCH
- UNKNOWN / NOT VERIFIED

PARTIAL must explain the condition:
- adapter required
- limited features
- only some generations
- software/firmware requirement
- size/fit restriction
- game-specific restriction
- performance limitation
- other explicit caveat

## MODE C — Combination Ranking

Use when several pairings can be compared using objective or reproducible evidence.

Possible ranking dimensions:
- performance
- tournament results
- win/use rate
- cost
- ease of use
- feature completeness
- synergy
- reliability
- availability
- learning curve

Do not create a subjective “best” ranking without a documented method.

## MODE D — Build / Deck

Use when a useful result comes from 3+ physical components.

Examples:
- core card × partner package × support cards
- console × controller × game/accessory
- hub × device × accessory
- tool × attachment × adapter
- product × add-on × replacement part

Offer multiple complete builds by:
- budget
- goal
- playstyle
- simplicity
- performance
- legacy reuse
- beginner/advanced use

---

# 3. Candidate Gate — Do This Before Deep Research

Before spending significant research time, score the proposed topic from 1–5 on:

| Criterion | Score |
|---|---:|
| Mainstream recognition | /5 |
| Combination surprise | /5 |
| Trivia / story depth | /5 |
| Number of meaningful combinations | /5 |
| Reader choice value | /5 |
| Search / confusion evidence | /5 |
| First-party verifiability | /5 |
| Interactive potential | /5 |
| Monetization potential | /5 |
| Update burden | /5, where 5 = low burden |

### Recommended threshold

Proceed as a full Kumia article only if the topic has:

- at least **4/5 in combination surprise or trivia depth**
- at least **3/5 in mainstream recognition**
- enough combination depth to support meaningful reader choice
- credible sources for the central claims

Reject or deprioritize topics that are only:
- obscure part-number matching
- specialist standards with little broad appeal
- single A × B compatibility answers
- simple calculators
- generic “best products” listicles
- workflow × product
- routine × product
- use-case × product without genuine combinational behavior

Camera-body / lens / teleconverter / mount-adapter / camera-battery topics remain excluded by default.

---

# 3A. Trivia Depth Gate — Before the Draft Work Package

Before writing the Draft Work Package, confirm all five:

1. Would the article still be worth reading if the Checker were **deleted completely**?
2. Is there at least one fact that is interesting to a **non-owner**?
3. Are there at least **3 “huh, really?” facts** backed by primary sources?
4. Is there history, design philosophy, or an evolution story behind the combination?
5. Does the article go beyond a spec comparison or a compatibility table?

If “what attaches to this product” is the *only* center of the article's value, it is **not sufficient as a Story-First article**.

In that case, do one of the following:

- research deeper until the gate passes, or
- explicitly choose the **V2 technical compatibility mode** (see section 18) and record why.

Record the result of this gate in the Draft package.

---

# 4. Research Questions — Mandatory

Every Work research package must answer all sections below.

## 4.1 The Hook

Find the strongest surprising fact first.

Write:

**One-sentence hook:**  
> [A concise fact that makes a normal reader curious.]

Then provide:
- why it is surprising
- whether it is officially documented
- whether it applies broadly or only to certain versions
- the strongest source proving it

The hook should be understandable without specialist knowledge.

---

## 4.2 Combination Map

Define the objects being combined.

### Object A
List meaningful options.

### Object B
List meaningful options.

### Object C, if needed
List adapters, intermediaries, support pieces, engines, accessories, third-party components, etc.

Estimate:
- number of A choices
- number of B choices
- number of C choices
- realistic meaningful combination count

Do not inflate the count with meaningless Cartesian-product combinations.

---

## 4.3 Outcome Logic

For compatibility topics, define exact rules for:

- MATCH
- PARTIAL
- NO MATCH
- UNKNOWN / NOT VERIFIED

For ranking topics, define:
- metrics
- weights if any
- data window
- evidence source
- tie handling
- freshness date

For build/deck topics, define:
- core component
- optional packages
- constraints
- tradeoffs
- intended user type

Every outcome must be explainable.

---

## 4.4 Why Does It Work?

Research the technical or design reason.

Examples:
- unchanged interface
- shared standard
- backward compatibility
- licensing
- common protocol
- same physical geometry
- electrical compatibility
- game support layer
- shared manufacturing lineage
- deliberate ecosystem strategy

Explain this in plain language first, then provide deeper technical detail.

---

## 4.5 The Story Behind It

This section is now mandatory unless no credible story exists.

Search for:
- when the interface / system / format originated
- why the company chose it
- why it was preserved or changed
- historical predecessor
- unexpected original use
- famous product generation that popularized it
- cross-company relationship
- licensing or standards story
- community workaround that became mainstream
- notable design constraint
- cultural impact
- collector / enthusiast significance
- discontinued products that still matter
- unusual corporate or engineering decision

Separate:
- confirmed fact
- manufacturer explanation
- community interpretation
- speculation

Never present folklore as fact.

---

## 4.5A Historical Claim Safety

A brand having a long history is **not** the same as a specific standard, interface, or compatibility lasting that long.

Example: a brand that has existed for over 100 years does not justify “compatible for 100 years.”

Verify and label each of these separately:

- **brand age**
- **product family age**
- **interface / design concept age**
- **documented compatibility period**

Use only the strongest wording that primary sources support.
When the sources cover only part of the timeline, state the covered period and stop there.

---

## 4.6 “Other Combinations You Can Try”

The article must give the reader multiple next paths.

Examples:
- If A + B works, what else works?
- What older item can be reused?
- What alternative partner gives a different result?
- What adapter unlocks another path?
- Which combinations are cheaper?
- Which are easiest?
- Which preserve the most features?
- Which are historically interesting?

Aim for at least 5 meaningful alternative combinations in the article itself, even if the interactive tool contains many more.

---

# 5. Evidence Rules

Use sources in this priority order:

1. Manufacturer / official product pages
2. Official support / manuals / compatibility guides
3. Standards bodies / official technical documentation
4. Official tournament results / official decklists
5. Major retailers only when the manufacturer does not document the needed compatibility detail
6. High-quality specialist publications
7. Community sources / Reddit / forums for:
   - real-world confusion
   - edge cases
   - demand evidence
   - user-discovered combinations
   - failure modes

Community evidence must never override explicit first-party incompatibility or safety guidance.

For every important claim record:
- source URL
- source title
- source type
- publication/update date if visible
- exact claim supported
- confidence
- whether the source is primary or secondary

---

# 6. Safety and Uncertainty

Never infer physical/electrical/safety compatibility from:
- matching connector appearance
- matching dimensions alone
- Reddit consensus alone
- marketplace seller claims alone

Use **UNKNOWN / NOT VERIFIED** when reliable evidence is insufficient.

For topics involving:
- mains electricity
- batteries
- power supplies
- pressure
- heat
- food safety
- structural loads
- vehicles
- protective equipment

require stronger first-party verification before giving MATCH.

---

# 7. Search-Demand Evidence

Do not invent search volume.

Collect qualitative evidence such as:
- recurring Reddit questions
- manufacturer FAQ existence
- support pages dedicated to compatibility
- repeated forum confusion
- autocomplete/query wording when available
- active replacement/adapter market
- recent product launches reviving old compatibility questions
- repeated “does X work with Y?” questions
- tournament/deck adoption for card-game topics

State clearly when demand is inferred rather than measured.

---

# 8. Competition Check

Research whether a strong existing solution already answers the same user need.

Look for:
- official compatibility checker
- manufacturer selector
- specialist database
- affiliate site
- community spreadsheet
- dedicated app
- large SEO article

Classify competition:

- LOW
- MEDIUM
- HIGH

Then explain Kumia’s differentiation.

Good differentiators:
- cross-brand coverage
- cross-generation coverage
- history/trivia layer
- reverse lookup
- adapter path
- feature-level compatibility
- multiple-build comparison
- source transparency
- “why it works”
- visual combination map

Do not proceed merely because Kumia can reproduce an official checker.

---

# 9. Interactive Experience Spec

Only build an interactive feature when it improves the article.

Choose one:

## Checker
Input:
- A
- B
- optional C

Output:
- MATCH / PARTIAL / NO MATCH / UNKNOWN
- concise reason
- limitations
- source-backed detail
- alternate compatible choices

## Combination Explorer
Input:
- one owned item

Output:
- unexpected compatible partners
- historical combinations
- modern alternatives
- cross-brand possibilities

## Ranking
Input:
- priority / budget / goal

Output:
- ordered combinations
- metrics
- tradeoffs
- evidence

## Builder / Deck Builder
Input:
- core item
- budget / goal / playstyle

Output:
- complete combinations
- why parts work together
- alternative packages
- required adapters/components
- evidence/freshness date

Do not force a checker into a story that works better as editorial content.

---

# 10. Card Game Research Rules

For Pokémon TCG, Magic: The Gathering, Yu-Gi-Oh!, One Piece Card Game, etc.:

Prefer:
- core card × partner
- archetype × engine
- package × package
- budget build variants
- tournament-proven variants
- historical evolution of a combo

Use:
- official tournament results
- official or public decklists
- large event results
- usage/win data where credible
- dated community discussion

Record:
- format
- legality
- event/date
- sample size
- relevant set/release
- rotation/ban-list risk
- update burden

Avoid generic “Top 10 decks” unless Kumia has a distinctive combination-focused angle.

---

# 11. Article Structure — Default V3

## Story-First Combination order (MODE A default)

For Story-First Combination articles, prefer this flow:

1. **Surprising hook**
2. **Why this combination is interesting**
3. **Story / history / design reason**
4. **Strange or unexpected examples**
5. **The twist, limitation, or exception**
6. **Practical compatibility or choices**
7. **Checker / Explorer / Builder** (only when useful)
8. **Buying / reuse options**
9. **Closing takeaway**

Do **not** default to:

> Specifications → Compatibility table → Checker → Product cards

## General structure (other modes, or as a starting point)

Use this structure unless the topic strongly benefits from another order.

## Hero / opening
Lead with the surprising combination.

The first screen should answer:
- what combines
- whether it works
- why the reader should care

## Quick Verdict
2–4 concise sentences.

## The surprising part
Explain the non-obvious result.

## Why this works
Plain-language explanation of the underlying design/standard/history.

## The story behind the combination
History, origin, design decision, cultural context, or trivia.

## Try the combinations
Interactive Checker / Explorer / Ranking / Builder.

## Combination examples
Show several meaningful examples with tradeoffs.

## What does NOT work
Important NO MATCH / limitations.

## Buying / reuse guidance
Help readers reuse what they own before buying new items.

## Final takeaway
Return to the original surprise and summarize what the reader can now do.

FAQ is optional, not mandatory.  
Do not add FAQ merely for SEO padding.

---

# 12. Visual Direction

Kumia articles should visually emphasize the objects being combined.

Prefer:
- real product photography where licensing/source allows
- clear object pairings
- visual A + B relationships
- simple combination diagrams
- product cards only when useful
- interactive selector UI

Avoid:
- generic AI-looking diagrams
- unnecessary decorative charts
- dense technical schematics for mainstream readers
- stock imagery unrelated to the actual combination

The visual should make the combination understandable before the reader reads deeply.

## Visual Storytelling

Story-First articles must not become “a Hero image plus text.”

Standard target:

- Hero: 1
- Body Editorial Images: 2–3
- Technical Visuals: 1–2
- Card Thumbnail: 1

Body images are not decoration. Each one shows a **story beat** of the article, for example:

- old vs new
- before vs after
- one design surviving generations
- an unexpected combination
- different design families
- a weird historical example

Precise fitment, dimensions, connector geometry, and technical labels must **not** come from AI images.
Use Claude's HTML/CSS/SVG implementation or primary-source imagery for those.

## Roles of Hero, Body, and Card

These are three **separate assets**. Never reuse one for another role.

**HERO**
- article cover
- may carry the title, supporting copy, and category label
- expresses the article's central story in one image

**BODY (Body Editorial Images)**
- visualize one story beat each
- by default, do **not** embed a headline, logo, or long text
- never a shrunken version of the Hero

**CARD (Home Card Thumbnail)**
- a separate asset from the Hero
- no text, no logo, no title
- small-size readability comes first

## IMAGE PLACEMENT PLAN — Required Format

Every Work Package includes an **IMAGE PLACEMENT PLAN**. Standard target (a guideline, not a quota; adjust to the article):

- Hero: 1
- Body Editorial Images: 2–3
- Technical Visuals: 1–2
- Card Thumbnail: 1

For **each** visual, record:

| Field | What to write |
|---|---|
| Visual ID | e.g. HERO, BODY-1, BODY-2, TECH-1, CARD |
| Placement | which section / position in the article |
| Purpose | why this visual exists |
| Visual type | Editorial photo / AI visual / HTML-CSS-SVG diagram / Interactive UI / Product card / Manufacturer image / Comparison visual |
| Content | what is shown |
| What it explains | the one thing the reader understands from it |
| Produced by | **CHATGPT ASSET** (AI-generated) or **CLAUDE IMPLEMENTATION** (HTML/CSS/SVG/UI) |
| Precision risk | LOW / MEDIUM / HIGH, and why |
| Source requirement | primary source needed for accuracy, if any |
| Mobile consideration | how it reads at 360px; no horizontal scroll |

Rules:

- Precise fitment, dimensions, connector geometry, and technical labels are **CLAUDE IMPLEMENTATION** or use primary-source imagery, never AI-generated.
- One visual carries one message.
- Explanations belong in HTML text, not inside the image.

---

# 13. Monetization Rules

Affiliate opportunities are secondary to editorial truth.

For each article, identify:
- items the reader may already own
- items required to complete a working combination
- optional upgrade items
- adapters / accessories
- cheaper alternatives
- replacement consumables if relevant

Prefer monetization moments that naturally follow a verified decision.

Example:

> Your existing A works with B directly. No purchase needed.

or:

> A + B is NO MATCH, but verified adapter C creates a supported path.

Never manufacture a purchase recommendation when reuse is the better answer.

---

# 14. Work Deliverables

Work must create two packages.

## Draft package

Save the complete draft to:

`D:\kumia-labs\docs\research\<slug>-work-package-draft.md`

It must begin with:

```
SLUG:
<slug>
```

It must contain:

1. Article mode
2. Candidate-gate scores
3. Hook
4. Audience / intent
5. Combination map
6. Outcome logic
7. Primary findings
8. Why it works
9. Story / trivia research
10. Alternative combinations
11. Demand evidence
12. Competition analysis
13. Interactive feature spec
14. Monetization opportunities
15. Safety / uncertainty notes
16. Source ledger
17. Proposed article structure
18. Draft article copy
19. Open questions / weak evidence
20. Recommended next research

The Draft package must also record the **Trivia Depth Gate** result (section 3A) and the **Historical Claim Safety** checks (section 4.5A).

## 14A. Draft → ChatGPT Editorial Review handoff material

The Draft must give ChatGPT enough material to decide the following. **Do not finalize any of them at Draft time.**

- final title candidates
- supporting copy candidates
- category label candidates
- Hero direction
- Body image direction
- Card direction
- interactive tool scope
- unresolved factual questions

The Draft should also include a draft **IMAGE PLACEMENT PLAN** (section 12) so the review can decide visuals together with the article.

After the ChatGPT Editorial Review, Work folds the decisions into the FINAL package and saves FINAL TITLE, FINAL SUPPORTING COPY, FINAL CATEGORY LABEL, IMAGE PLACEMENT PLAN, and the related items in a **confirmed** state (section 16).

Do not hand off to Claude Code yet.

---

# 15. ChatGPT Editorial Review Gate

After the Work draft is complete, ChatGPT reviews it before implementation.

Review for:

- Is the opening fact genuinely surprising?
- Is the topic mainstream enough?
- Is the article interesting without the checker?
- Is there enough trivia/story depth?
- Are there enough meaningful combinations?
- Are important claims first-party verified?
- Is the central conclusion overclaimed?
- Are MATCH/PARTIAL/NO MATCH rules defensible?
- Is the interactive feature actually useful?
- Does the article give readers choices rather than one recommendation?
- Is any section repetitive or SEO-padding?
- Are visuals essential and clearly specified?
- Is monetization natural rather than forced?

Possible decisions:

- APPROVE
- REVISE
- RESEARCH MORE
- KILL TOPIC

---

# 16. Final Work Package

After editorial revisions, Work saves:

`D:\kumia-labs\docs\research\<slug>-work-package-final.md`

## FINAL PACKAGE CONTRACT

The FINAL package begins with:

```
SLUG:
<slug>
```

It then contains the following **required sections, using these exact headings**. These names are the contract with Claude Code's `new-kumia-article` skill. In FINAL, every item is in a **confirmed** state, not a candidate list.

1. **FINAL ARTICLE CONCEPT** (article mode, approved hook, final editorial thesis)
2. **FINAL TITLE**
3. **FINAL SUPPORTING COPY**
4. **FINAL CATEGORY LABEL**
5. **COMPLETE ARTICLE DRAFT** (final copy and article structure)
6. **COMPATIBILITY MODEL** (verified combination dataset; outcome logic / ranking method / builder logic)
7. **INTERACTIVE TOOL SPEC** (or an explicit statement that no interactive tool is used)
8. **COMMERCE OPPORTUNITIES** (affiliate opportunities; problem-first, no invented URLs, prices, or stock)
9. **VERIFIED SOURCE TABLE** (= final source ledger)
10. **WEAK / UNVERIFIED CLAIMS** (includes the explicit do-not-claim list)
11. **IMPLEMENTATION NOTES FOR CLAUDE CODE** (= the "IMPLEMENTATION NOTES" that `new-kumia-article` reads)
12. **IMAGE PLACEMENT PLAN** (format in section 12; every visual marked CHATGPT ASSET or CLAUDE IMPLEMENTATION)
13. **BODY EDITORIAL IMAGE BRIEFS**
14. **TECHNICAL VISUAL OPPORTUNITIES**
15. **HERO CONCEPT**
16. **CARD THUMBNAIL CONCEPT**
17. **VISUAL AVOID LIST**

### V3 editorial sections that are kept in the FINAL package

These stay in FINAL (they are not removed by the contract above):

- Candidate Gate scores (section 3)
- Trivia Depth Gate result (section 3A)
- Final story + trivia facts, including Story Behind It (4.5)
- Historical Claim Safety checks (4.5A)
- Search-demand evidence summary (section 7)
- Competition check summary (section 8)
- SEO metadata suggestions
- Freshness / update notes
- Final Quality Test answers (section 19)

### Mapping from the earlier FINAL item list

| Earlier item | Where it lives now |
|---|---|
| Final article mode, Approved hook, Final editorial thesis | 1. FINAL ARTICLE CONCEPT |
| Verified combination dataset; Outcome logic / ranking method / builder logic | 6. COMPATIBILITY MODEL |
| Final story + trivia facts | kept (see above) |
| Final source ledger | 9. VERIFIED SOURCE TABLE |
| Interactive UI specification | 7. INTERACTIVE TOOL SPEC |
| Visual asset requirements | 12–17 (IMAGE PLACEMENT PLAN and the visual sections) |
| Article structure; Final copy | 5. COMPLETE ARTICLE DRAFT |
| SEO metadata suggestions | kept (see above) |
| Affiliate opportunities | 8. COMMERCE OPPORTUNITIES |
| Explicit do-not-claim list | 10. WEAK / UNVERIFIED CLAIMS |
| Freshness / update notes | kept (see above) |
| Claude Code implementation brief | 11. IMPLEMENTATION NOTES FOR CLAUDE CODE |

### Correspondence with the Pipeline's PHASE 2 confirmations

The items ChatGPT confirms in the Editorial Review (`KUMIA_ARTICLE_PIPELINE_V2.md`, PHASE 2) land in these FINAL sections:

| PHASE 2 confirmation | FINAL section |
|---|---|
| FINAL ARTICLE ANGLE | 1. FINAL ARTICLE CONCEPT |
| FINAL ARTICLE STRUCTURE | 5. COMPLETE ARTICLE DRAFT |
| FINAL CHECKER SCOPE | 7. INTERACTIVE TOOL SPEC |
| FINAL VERDICT DEFINITIONS | 6. COMPATIBILITY MODEL |
| FINAL TITLE / SUPPORTING COPY / CATEGORY LABEL | 2 / 3 / 4 |
| FINAL IMAGE PLACEMENT PLAN | 12. IMAGE PLACEMENT PLAN |
| FINAL HERO CONCEPT | 15. HERO CONCEPT |
| FINAL BODY IMAGE 1 / 2 / 3 | 13. BODY EDITORIAL IMAGE BRIEFS |
| FINAL TECHNICAL VISUALS | 14. TECHNICAL VISUAL OPPORTUNITIES |
| FINAL CARD THUMBNAIL CONCEPT | 16. CARD THUMBNAIL CONCEPT |

The final package should be self-contained enough that Claude Code does not need to redo the research.

---

# 17. Claude Code Handoff

Claude Code receives only the **FINAL Work Package** as the research authority.

**Prerequisite:** Claude Code begins only when `docs/research/<slug>-work-package-final.md` exists. If it does not, Claude does not research, draft, or implement; it stops and waits for the FINAL package (`STATUS: WAITING_FOR_WORK_PACKAGE`).

Claude Code treats the FINAL package as the source of truth and does not create a separate research document or a summary copy of it.

Claude Code responsibilities:
- implement article page
- implement interactive Checker / Explorer / Ranking / Builder
- integrate approved visuals/assets
- preserve Kumia design system
- test responsive behavior
- run lint/typecheck/tests/build
- verify routes and metadata
- perform implementation QA
- stop for review before publishing unless the publish workflow explicitly authorizes publication

Claude Code must not:
- invent new compatibility facts
- replace sourced conclusions with assumptions
- silently change MATCH/PARTIAL/NO MATCH logic
- add unsupported product claims
- convert UNKNOWN into MATCH
- fabricate trivia
- add new affiliate claims without evidence

If implementation exposes a research gap, return it for research instead of guessing.

---

# 18. V2 vs V3 Selection Rule

**V3 is the default.**

Use V3 when:
- the story is interesting in its own right
- the products/brands are mainstream
- trivia/history/design background matters
- multiple combinations can be explored
- Ranking or Build/Deck is involved

Use V2 only when it is **explicitly selected** (including after the Trivia Depth Gate in section 3A fails and deeper research is not worthwhile), and:
- the topic is narrowly compatibility-driven
- precise fitment is the main user value
- story/trivia is minimal
- the article is effectively a technical compatibility reference

---

# 19. Final Quality Test

Before marking the Work package FINAL, answer YES to as many as possible:

- Would a non-owner still find the headline interesting?
- Is there at least one “I didn’t know that” fact?
- Can the reader choose among multiple combinations?
- Is there a clear reason the combinations work or fail?
- Is there a story behind the design?
- Can the core claims be verified?
- Does the article help someone avoid a mistake or discover a new possibility?
- Does the interactive element add real value?
- Is there enough material for a substantial article without padding?
- Would the article still be worth publishing without affiliate links?

If several answers are NO, reconsider the topic.

---

# 20. Standard Trigger

When the user says:

> **Kumia Labs新規記事**

use this V3 template by default unless the request clearly calls for V2.

Workflow:

1. Research
2. Write full draft package
3. Save draft package
4. ChatGPT editorial review
5. Revise/research as needed
6. Save final package
7. Hand final package to Claude Code
8. Claude implements + QA
9. Review
10. Publish only through the established publish workflow

