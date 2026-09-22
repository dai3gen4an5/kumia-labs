# KUMIA WORK RESEARCH TEMPLATE V3
## Combination Discovery + Trivia Editorial

**Status:** Standard template for new Kumia Labs articles  
**Primary owner:** ChatGPT Work  
**Implementation handoff:** Claude Code  
**Supersedes:** V2 as the default template  
**V2 role:** Keep V2 available for narrow, compatibility-heavy articles where the main value is precise MATCH / PARTIAL / NO MATCH coverage.
**Editorial philosophy:** Broad curiosity, deep verification. Zero-Knowledge Entry: assume the reader knows neither object.

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

# KUMIA EDITORIAL PHILOSOPHY — Broad curiosity, deep verification

> **Wide and shallow to choose. Deep to verify. Simple to read.**
> **"Compatibility is one source of the story, not the product."**
> **"Make people interested in the product before asking them to buy it."**

This block sharpens the principle above. Where the two ever differ, this block wins.

## Core Editorial Shift — WIDE AND SHALLOW, NOT NARROW AND DEEP

Kumia Labs does **not** win by being the deepest source on one narrow specialty.
Kumia Labs wins by being the site a **curious ordinary person** enjoys, because it finds the surprising, strange, or delightful thing inside everyday objects and hobbies.

- Choose topics for **breadth of curiosity**: many people, familiar objects, a “huh, really?” at the centre.
- Verify claims with **depth**: first-party sources, dated evidence, explicit uncertainty.
- Write for a reader who owns **none** of the specialist knowledge.

This is a shift in *what Kumia picks and how it sounds*. It is **not** a relaxation of accuracy.

## RESEARCH DEPTH ≠ READER COMPLEXITY

- Research may be as deep as the claims require.
- The article must not be as complex as the research.
- Depth is spent on **being right**, not on **being exhaustive**.
- Every fact that survives into the article must earn its place by being interesting, useful, or needed for safety. Verified but boring facts stay in the Work Package or go to Sources.

## The reader

The default Kumia reader is:

- curious, but not a specialist
- possibly an owner, possibly not
- reading for enjoyment first, for a decision second
- does not know the community jargon, part numbers, model codes, or standard names
- will leave at the first paragraph that reads like a manual

Do not write for the forum expert. The expert can still be served by Sources, a precise table, or a checker further down the page, but never in the opening.

## Curiosity ladder — (ORIENT →) EXPLAIN → SURPRISE → ENTERTAIN → CREATE CURIOSITY

The full default flow, including ORIENT at the start and TRY / EXPLORE → PRODUCT INTEREST → COMMERCE at the end, is defined in “KUMIA ZERO-KNOWLEDGE ENTRY”. Once the reader has been oriented, each article does four jobs, in this order of priority:

1. **Explain** — the everyday reader understands why the combination exists and why anyone cares (the objects themselves have already been introduced by the orientation).
2. **Surprise** — at least one fact makes them say “really?”.
3. **Entertain** — the article is enjoyable to read even if they never buy anything.
4. **Create curiosity** — they finish wanting to look at the next object, or another combination, differently.

Usefulness (fit, buy, avoid) follows after these. Usefulness without the first four is a manual, not a Kumia article.

## Title philosophy

For every article, Work must propose **at least 5 title candidates** in the Draft package, covering different approaches:

- a **curiosity** title (makes the reader want to know)
- a **clarity** title (a non-expert instantly knows the subject)
- a **one-sentence surprise** title (the surprising fact, stated plainly)
- at least two further variants (e.g. question, contrast, quiet understatement)

Rules:

- No numeric scoring of titles. Give a short qualitative reason for each, then recommend one.
- Do not use jargon, part numbers, or model codes in the recommended title unless the general public already uses them.
- Do not use clickbait that the article cannot pay off. The title promise must be fulfilled in the first screen or two.
- The recommended title is the one carried into the FINAL package (see 16, FINAL TITLE). Alternatives may be kept in the Draft only.

## Audience language

- Use everyday words first. Introduce a specialist term only when the reader needs it, and explain it in the same sentence.
- Prefer “the part that clicks onto the handle” over an unexplained part name; give the official name once, afterwards.
- Model numbers, standards, and connector names belong in Sources, tables, checkers, and captions — not in the hook.
- Do not assume the reader owns the product, has used the brand, or knows why the community cares.
- Keep verdict wording (MATCH / PARTIAL / NO MATCH / CHECK FIRST etc.) exactly as the existing rules define; plain language wraps it, it does not replace it.

---

---

# KUMIA ZERO-KNOWLEDGE ENTRY

> **"Assume the reader knows neither object."**

This principle works together with “Compatibility is the entry point, not the article.” and “Broad curiosity, deep verification.” It does not replace either of them.

Before revealing or explaining the surprising connection, make sure a general reader understands:

1. what **Object A** is;
2. what **Object B** is;
3. what each is **normally used for**;
4. any **basic lineup, variants, or categories** required to understand the story;
5. any **specialist term**, before it is used as assumed knowledge.

Only after that orientation does the article reveal why the combination is surprising.

## The failure mode this prevents

- Experts already know the headline fact.
- Beginners cannot understand the headline fact.
- Therefore neither audience gets enough value.

Do not silently assume familiarity because the topic is common inside an enthusiast community. Enthusiast-common is not reader-common.

## Default V3 reader flow

**ORIENT → EXPLAIN → SURPRISE → ENTERTAIN → CREATE CURIOSITY → TRY / EXPLORE → PRODUCT INTEREST → COMMERCE**

| Stage | Job |
|---|---|
| ORIENT | A newcomer learns what A and B are, what each is normally for, and any basic lineup the story needs. |
| EXPLAIN | The reader understands why the combination exists and why anyone cares. |
| SURPRISE | The simple, repeatable “I didn’t know that” fact lands. |
| ENTERTAIN | The article is enjoyable even if the reader never buys anything. |
| CREATE CURIOSITY | The reader ends up looking at the next object, or another combination, differently. |
| TRY / EXPLORE | Optional Explorer / checker / reuse ideas (support, never the reason the article exists). |
| PRODUCT INTEREST | The reader has become interested in the objects themselves. |
| COMMERCE | Natural, reuse-first options, after interest exists. |

This is the single default flow. The “curiosity ladder” below, the Story-First order in section 11, and the commerce philosophy in section 13 all follow it.

## Basic information rule

**Basic information is not filler when it is necessary to make the surprise understandable.**

Useful early context includes:

- what the product actually does;
- where people normally encounter it;
- how many major variants exist;
- what the variants represent;
- whether the object is hardware, software, an accessory, a collectible, a service, a wearable, and so on;
- what a specialist term means in ordinary language.

Do not bury this information in a late FAQ if the reader needs it to understand the article.

Orientation must **not** become an encyclopedia introduction. Usually **2–4 short paragraphs** are enough. The test is:

> **Does a newcomer now understand enough to appreciate why the connection is surprising?**

Once the answer is YES, move on.

## Expert / beginner balance

A strong Kumia article provides three layers:

- **Layer 1 — ORIENTATION.** Enough context for a complete beginner.
- **Layer 2 — SURPRISE.** The simple, repeatable “I didn’t know that” fact.
- **Layer 3 — DEPTH.** History, exceptions, design decisions, unusual behavior, or lesser-known facts that still reward readers who already knew the headline connection.

Avoid the dead zone: **“Too obvious for enthusiasts, too unexplained for everyone else.”**

## Relationship to the Primary Candidate Gate

The Primary Candidate Gate (section 3.1) stays exactly as it is. The Zero-Knowledge Entry Gate (section 3.4) is an **additional required gate**, not a replacement.

An article may have a strong surprising fact and still **fail V3** if a newcomer cannot understand the two objects being combined.

## Illustrative example (not research)

The example below shows the shape of an orientation. It is **not** a draft and its facts are **not** verified research; never reuse them as article claims without sourcing.

**Bad entry:** “Power-Up Bands also work as amiibo.”
The problem: a newcomer may not know what either term means.

**Better sequence:**

1. SUPER NINTENDO WORLD is Nintendo’s themed area inside Universal theme parks.
2. Visitors can buy a Power-Up Band, a character-themed wristband used for interactive park activities.
3. amiibo are Nintendo NFC figures, cards, and items that can be tapped to compatible Nintendo hardware for in-game features.
4. **Then** reveal: the same Power-Up Band can act as that character’s amiibo.

Basic lineup can be editorially important too. If there are several character bands, and that choice changes team identity or amiibo identity, introduce the lineup early, before the reveal.

---

# KUMIA IMAGE PRINCIPLE

> **"AI generates the scene. Code generates the Kumia brand layer."**

The Hero's brand elements are never left to an image model.

- **AI (ChatGPT image generation)** produces only the photograph, background, and article-specific objects.
- **Code** composes the fixed Kumia brand layer with `scripts/generate-kumia-hero.py`:
  the official Kumia Labs logo, the category label and its blue accent line, the title and supporting-copy typography, and the icon row with its labels.

Never ask an image model to draw the logo, title, supporting copy, category label, accent line, icon row, or icon labels.
Body Editorial Images and the Card Thumbnail are still produced by image generation.

**`docs/workflows/KUMIA_IMAGE_STANDARD_V1.md` is the source of truth for image production.** The full rules (Hero background, safe area, Body image count, Technical Visual boundary, Card, asset reuse, packaging, QA, accessibility) live there and are not duplicated in full here. This template adds only what Work must produce:

- Work always produces an **IMAGE PLACEMENT PLAN** (format and columns: see the standard).
- A **Hero background brief is required**, and it must call out the left 45–50% safe area.
- A **Card brief is required**.
- **Body briefs are 0–N.** The number of Body images depends on the article; it is not fixed at two or three.
- Work distinguishes **Technical Visual candidates from AI-image candidates**: anything precision-sensitive (connector geometry, dimensions, fitment, and similar) is a Technical Visual candidate for Claude, never an AI-image brief.
- Work adds a **Visual Avoid List** when the article needs one.
- When real product imagery is used, Work records its **source and rights basis**.

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

## 3.1 Primary Candidate Gate (the five questions)

Before any deep research, answer these five questions for the proposed topic. They apply to **any** domain (kitchen appliances, tools, toys, games, audio, cars, outdoor gear, software, stationery, …).

1. **Would an ordinary person be curious about this?** Someone who does not own it and has never searched for it.
2. **Can the reader understand it without prior knowledge?** No specialist vocabulary needed for the hook.
3. **Is there a surprising, strange, or delightful fact?** Something a reader would repeat to a friend.
4. **Would the article still be worth reading if the product / checker / tool disappeared?** This must be **YES**.
5. **Can the surprising claim be verified with credible sources?** First-party or otherwise strong.

Rules:

- Questions **1, 4, and 5 must be YES**. Questions 2 and 3 should be YES; a NO on either requires a written plan to fix it.
- A topic that fails question 4 is not a Story-First article. Either deepen the story until it passes, or reclassify it (see 3.2 and section 18).
- Record the five answers, each with one line of reasoning, at the top of the Draft package.
- Passing this gate is **not enough** on its own: the Zero-Knowledge Entry Gate (3.4) must also pass.

## 3.2 SPECIALIST TRAP

A topic is in the **Specialist Trap** when it is *technically correct, well-sourced, and useful, but only interesting to people who already own or research the product*.

Warning signs:

- the hook needs a model number, part number, standard name, or community term
- the audience is “people who already have X and are wondering about Y”
- the value is a MATCH / NO MATCH table, and the story is decoration
- search demand exists only because owners are confused, not because anyone is curious
- the best sentence in the article is a spec

Response, in order:

1. **Find the wider door.** Ask what a non-owner would find interesting about the same objects (their history, an odd design decision, a surprising reason it exists, a cross-domain link) and lead with that.
2. **Widen the topic** from “X fits Y” to the family, the design idea, or the everyday habit behind it.
3. If no wider door exists, **do not force a Story-First article.** Downgrade to a Checker-led article under the V2 rule (section 18), or drop the topic.

Verification depth is never reduced to escape the trap. Only the *framing and topic breadth* change.

Camera-body / lens / teleconverter / mount-adapter / camera-battery topics remain excluded by default.

## Note on the scoring table

The scoring table below is a **secondary** check. It does not override the Primary Candidate Gate: a topic that scores well but fails questions 1, 4, or 5 above does not proceed.

---

## 3.3 Scoring Gate (secondary)

After the Primary Candidate Gate passes, score the proposed topic from 1–5 on:

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

## 3.4 Zero-Knowledge Entry Gate (required)

This gate is **in addition to** the Primary Candidate Gate (3.1), not instead of it. See “KUMIA ZERO-KNOWLEDGE ENTRY” near the top of this template.

Before approving the article concept, answer:

1. Can a reader who has never heard of **Object A** understand what it is?
2. Can a reader who has never heard of **Object B** understand what it is?
3. Does the reader understand **each object’s normal role** before the surprising connection is revealed?
4. If basic **variants, lineup, or generations** matter to the story, are they introduced early enough?
5. Are **specialist terms** explained before the article relies on them?

Requirements:

- Questions **1–3 MUST be YES**.
- Question **4 MUST be YES** when variants materially affect the story.
- Question **5 MUST be YES** whenever specialist terminology is present.

If 1–3 fail: **REVISE THE ENTRY before proceeding.** Do not carry a failing entry into deeper research or the Draft.

Do **not** silently assume familiarity because the topic is common inside an enthusiast community.

Record the five answers, each with one line of reasoning, in the Draft package, and carry the result into the FINAL package’s **ZERO-KNOWLEDGE ENTRY** section (section 16, item 18).

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

## Position of the interactive tool

The Checker / Explorer / Ranking / Builder is an **optional companion**, not the reason the article exists.

- The article's value must stand **without** the tool. Test: if the tool were deleted, is the article still worth reading? **YES is required** (Primary Candidate Gate, question 4).
- Place the tool **after** the story has made the reader care, never as the opening.
- Build a tool only when it lets the reader do something the prose cannot (look up their own model, compare several options).
- Tool conclusions keep the existing safety rules: absence of evidence is not NO MATCH; unverified cases return CHECK FIRST / VERIFY MODEL.
- Tool copy uses plain language; model numbers and part names appear as inputs and results, not as the pitch.

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

## Story-First recommended order — 11 steps (MODE A default)

Story-First articles follow the default reader flow (Orient → Explain → Surprise → Entertain → Create curiosity), then become practical:

1. **Curiosity hook** — one surprising, plain-language sentence or scene; no jargon.
2. **Zero-knowledge orientation** — what A is, what B is, what each is normally used for, and any basic lineup or variants the story needs; specialist terms explained in ordinary language. Short (see below).
3. **The surprising connection** — the “really?” fact, stated clearly and sourced.
4. **Why it works / why it exists** — the design decision, history, or accident behind it.
5. **History / design / trivia** — the enjoyable middle: people, generations, odd exceptions.
6. **Limits / exceptions** — the twist, and where the neat story stops working.
7. **What this means for you** — the practical takeaway in everyday terms.
8. **Checker / Explorer / Builder** — optional, only when it adds real value (see 9).
9. **Natural choices / products** — reuse first, then verified purchase paths (see 13).
10. **Takeaway** — return to the opening surprise.
11. **Sources** — verified source table; precise names, model numbers, and links live here.

Do **not** default to:

> Specifications → Compatibility table → Checker → Product cards

The hook and steps 2–5 must be readable, and enjoyable, by someone who has never owned the product.

### Orientation (step 2)

- Include it whenever the Zero-Knowledge Entry Gate (3.4) shows a newcomer would not already know either object, the basic lineup, or a term the story relies on.
- Keep it to a short section, usually **2–4 short paragraphs**. It must not become an encyclopedia introduction.
- The test: *does a newcomer now understand enough to appreciate why the connection is surprising?* When YES, move on.
- Basic information is not filler when it is needed to make the surprise understandable. Do not bury it in a late FAQ.
- Orientation must not reveal the surprise itself; it prepares the reader for it.

## Story-First Combination order — legacy 9-step form (MODE A)

The 11-step order above is the default. Use this shorter form only when the article is deliberately short. Even in this form, the short zero-knowledge orientation comes right after the hook (before step 2) whenever the Zero-Knowledge Entry Gate requires it.

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

If a newcomer may not know the objects, keep this opening plain and follow it directly with the short zero-knowledge orientation before the surprising part.

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

Story-First articles must not become “a Hero image plus text,” but this does not mean every article needs several Body images.

Default counts (see `KUMIA_IMAGE_STANDARD_V1.md`):

- Hero: 1
- Body Editorial Images: **0–N** (article-dependent; two or three is a typical example, not a quota)
- Technical Visuals: 0–N, editorially justified
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
- two layers: an **AI-generated, text-free background scene** (`kumia-<slug>-hero-bg.png`) plus the **code-composed Kumia brand layer** (logo, category label with blue accent line, title, supporting copy, icon row)
- the final file is `kumia-<slug>-hero.png`, 1672x941, made by `scripts/generate-kumia-hero.py`; it is never generated as a finished image by a model
- the background scene expresses the article's central story in one image: left 45 to 50% relatively quiet and bright, main subject center to right, 16:9
- no text, logo, icons, category label, or technical labels in the background

**BODY (Body Editorial Images)**
- visualize one story beat each
- by default, do **not** embed a headline, logo, or long text
- never a shrunken version of the Hero

**CARD (Home Card Thumbnail)**
- a separate asset from the Hero
- no text, no logo, no title
- small-size readability comes first

## IMAGE PLACEMENT PLAN — Required Format

Every Work Package includes an **IMAGE PLACEMENT PLAN**. Default counts, from `KUMIA_IMAGE_STANDARD_V1.md` (a guideline, not a quota; adjust to the article):

- Hero: 1
- Body Editorial Images: **0–N**
- Technical Visuals: 0–N, editorially justified
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
| Produced by | **CHATGPT ASSET** (AI-generated; for the HERO, the background scene only) or **CLAUDE IMPLEMENTATION** (HTML/CSS/SVG/UI, and the code-composed Hero brand layer) |
| Precision risk | LOW / MEDIUM / HIGH, and why |
| Source requirement | primary source needed for accuracy, if any |
| Mobile consideration | how it reads at 360px; no horizontal scroll |

Rules:

- Precise fitment, dimensions, connector geometry, and technical labels are **CLAUDE IMPLEMENTATION** or use primary-source imagery, never AI-generated.
- One visual carries one message.
- Explanations belong in HTML text, not inside the image.

---

# 13. Monetization Rules

> **"Make people interested in the product before asking them to buy it."**

## Commerce philosophy

- **Interest first, purchase second.** The reader should want to know more about the object before any product link appears.
- Commerce follows the story. It never leads it, and it never explains why the article exists.
- **Natural fit only.** A link appears where the reader has just reached a decision, and only for items that decision actually needs.
- **Reuse before buy.** If what the reader already owns is the better answer, say so.
- No pressure language, urgency, fake scarcity, or “best” claims without a documented method.
- Editorial conclusions are never bent for affiliate potential.
- Commerce is not the goal of topic selection. Do not choose or drop a topic mainly for affiliate value. The article must be worth publishing with no links at all.
- Keep all existing safety rules: only FINAL-verified products, no invented URLs/prices/discounts/availability, CHECK FIRST items are not recommended.

## Commerce mechanics

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
2. Primary Candidate Gate answers (five questions, section 3.1), Specialist Trap check (3.2), and candidate-gate scores (3.3)
   - at least 5 title candidates with a short qualitative reason each and one recommendation (Title philosophy)
   - Zero-Knowledge Entry Gate answers (section 3.4), with the proposed orientation outline
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
- Hero direction (the background scene, safe area, and icon concepts, not a finished Hero)
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
- Could a reader who knows neither object understand the opening? (Zero-Knowledge Entry Gate)
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
15. **HERO CONCEPT** (the background scene, **not** the finished Hero; see "Hero concept contents" below)
16. **CARD THUMBNAIL CONCEPT**
17. **VISUAL AVOID LIST**
18. **ZERO-KNOWLEDGE ENTRY** (mandatory; see “ZERO-KNOWLEDGE ENTRY section” below)

### ZERO-KNOWLEDGE ENTRY section (mandatory in every FINAL package)

Every FINAL Work Package must contain a section headed exactly:

```
# ZERO-KNOWLEDGE ENTRY
```

It must contain:

- **Object A in plain English**
- **Object B in plain English**
- **Normal use of A**
- **Normal use of B**
- **Essential variants / lineup** (or an explicit statement that variants do not affect the story)
- **Terms that require explanation** (each with its ordinary-language meaning)
- **Proposed orientation copy or outline** (usually 2–4 short paragraphs; it must also appear in the COMPLETE ARTICLE DRAFT, before the surprising connection is revealed)
- **Gate result** (the five answers from section 3.4 and PASS / REVISE)

**A FINAL package is not ready if this section is missing**, or if its gate result is REVISE. This rule applies to every FINAL package started after it was added; already-published articles are not reopened by it.

### V3 editorial sections that are kept in the FINAL package

These stay in FINAL (they are not removed by the contract above):

- Candidate Gate scores (section 3) and the Zero-Knowledge Entry Gate result (section 3.4)
- Trivia Depth Gate result (section 3A)
- Final story + trivia facts, including Story Behind It (4.5)
- Historical Claim Safety checks (4.5A)
- Search-demand evidence summary (section 7)
- Competition check summary (section 8)
- SEO metadata suggestions
- Freshness / update notes
- Final Quality Test answers (section 19)

### Hero concept contents

Because the Hero brand layer is composed by code, **HERO CONCEPT describes the background scene, not the final Hero.** It specifies:

- **background scene concept**: what the photograph shows, in one sentence
- **left-side safe area**: the left 45 to 50% stays relatively quiet and bright, because the brand layer sits there
- **subject placement**: main subject center to right
- **photographic mood**: light, materials, environment
- **icon concepts**: the icon labels and, for each, an icon type from the built-in set (`python scripts/generate-kumia-hero.py --list-icons`)

It must not describe or request any text, logo, icons, category label, accent line, or technical labels inside the image.
The FINAL TITLE, FINAL SUPPORTING COPY, and FINAL CATEGORY LABEL (items 2 to 4) are the exact strings passed to the composer.

Filenames: background `kumia-<slug>-hero-bg.png`, final Hero `kumia-<slug>-hero.png`.

### Mapping from the earlier FINAL item list

| Earlier item | Where it lives now |
|---|---|
| Final article mode, Approved hook, Final editorial thesis | 1. FINAL ARTICLE CONCEPT |
| Verified combination dataset; Outcome logic / ranking method / builder logic | 6. COMPATIBILITY MODEL |
| Final story + trivia facts | kept (see above) |
| Zero-Knowledge Entry (orientation of both objects) | 18. ZERO-KNOWLEDGE ENTRY |
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
| FINAL ZERO-KNOWLEDGE ENTRY | 18. ZERO-KNOWLEDGE ENTRY |

The final package should be self-contained enough that Claude Code does not need to redo the research.

---

# 17. Claude Code Handoff

Claude Code receives only the **FINAL Work Package** as the research authority.

**Prerequisite:** Claude Code begins only when `docs/research/<slug>-work-package-final.md` exists. If it does not, Claude does not research, draft, or implement; it stops and waits for the FINAL package (`STATUS: WAITING_FOR_WORK_PACKAGE`).

Claude Code treats the FINAL package as the source of truth and does not create a separate research document or a summary copy of it.

The orientation described in the ZERO-KNOWLEDGE ENTRY section is part of the COMPLETE ARTICLE DRAFT. Claude Code keeps it before the surprising connection and does not cut it for length. A FINAL package that lacks the ZERO-KNOWLEDGE ENTRY section is not ready; Claude Code returns it to Work instead of inventing orientation copy.

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

## Separation of roles

| | **V3 (default)** | **V2 (exception)** |
|---|---|---|
| Philosophy | Broad curiosity, deep verification | Precise compatibility reference |
| Reader | Curious ordinary person, non-owner welcome | Owner who needs an exact answer |
| Entry point | Surprise / story / everyday object | The fitment question itself |
| Checker | Optional companion | Usually the core value |
| Candidate test | Primary Candidate Gate + Specialist Trap check | Narrow compatibility demand |
| Chosen | By default | Only when **explicitly selected** and the reason is recorded |

- V3 is never silently downgraded to V2. If a topic falls in the Specialist Trap and no wider door exists, the switch to V2 (or dropping the topic) is a **recorded decision**, not a drift.
- V2 articles do not inherit V3's story-first requirement, and V3 articles do not inherit V2's table-first structure.
- The Zero-Knowledge Entry Gate and the ZERO-KNOWLEDGE ENTRY section are V3 requirements. A V2 reference article still names each product plainly, but the gate is not a V2 condition.
- The V2 Research Template file is a separate document and is not edited by V3 changes.


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

Before marking the Work package FINAL, check every item. A–K are gates; if any of them is NO, fix it or reconsider the topic.

**A. Curiosity** — Would an ordinary non-owner be curious about the headline?

**B. Plain language** — Can a reader with no prior knowledge follow the hook and the first half without a glossary?

**C. Surprise** — Is there at least one “really?” fact, and can it be repeated to a friend in one sentence?

**D. Independence from the tool** — If the checker / product cards / tool were removed, is the article still worth reading?

**E. Verification** — Is every central claim backed by credible sources, with uncertainty stated (absence of evidence is not NO MATCH)?

**F. Story over spec** — Does the article lead with story and discovery rather than specifications or a compatibility table?

**G. Natural commerce** — Do product links appear only after interest is built, only where a decision needs them, and would the article still be worth publishing without them?

**H. Title** — Are there at least 5 title candidates, and does the recommended title work for a non-expert and pay off its promise?

**I. Newcomer entry** — Could someone unfamiliar with **both** objects understand the first part of the article?

**J. Terms introduced** — Are all necessary terms and basic variants introduced before the article relies on them?

**K. Value after orientation** — Does the article still contain new value after the beginner orientation, for a reader who already knew the headline fact?

Supporting checks (answer YES to as many as possible):

- Can the reader choose among multiple combinations?
- Is there a clear reason the combinations work or fail?
- Is there a story behind the design?
- Does the article help someone avoid a mistake or discover a new possibility?
- Does any interactive element add real value?
- Is there enough material for a substantial article without padding?

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

