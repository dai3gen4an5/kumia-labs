// What Connects? LEGO x DUPLO pairing explorer: rules and sources.
// Source of truth: docs/research/lego-duplo-hidden-connection-work-package-final.md
// (COMPATIBILITY MODEL + INTERACTIVE TOOL SPEC + VERIFIED SOURCE TABLE).
// Only the seven official/example pairings are encoded. No formula is derived from them, and any
// other pairing is NOT VERIFIED. LEGO Help's "even number of studs" phrase is deliberately not generalized.

export const VERIFIED_DATE = "2026-09-20";

export type SourceId = "S1" | "S2" | "S3" | "S4" | "S5" | "S6" | "S7" | "S8" | "S9" | "S10" | "S11" | "S12" | "S13";

export const SOURCES: Record<SourceId, { label: string; short: string; url: string; claim: string }> = {
  S1: { label: "LEGO Help: Building with LEGO and DUPLO bricks", short: "LEGO Help", url: "https://www.lego.com/en-us/service/help-topics/article/building-with-lego-and-duplo-bricks", claim: "2×2 and 2×4 regular bricks as fitting examples, 1×2 and 2×3 as non-fitting examples, the hollow-stud condition, and the figure limits." },
  S2: { label: "LEGO City FAQ", short: "LEGO City FAQ", url: "https://www.lego.com/en-us/themes/city/faq", claim: "A classic 2×2 brick and one DUPLO stud." },
  S3: { label: "LEGO History: LEGO DUPLO", short: "DUPLO history", url: "https://www.lego.com/en-us/history/articles/e-lego-duplo", claim: "Mid-1960s scale trials, hollow studs, the 1967 patent, 1968 Sweden tests, the 1969 launch, 1977 figures, and the 2002–2004 Explore episode." },
  S4: { label: "LEGO newsroom: 50 years young (2019)", short: "50 years young", url: "https://www.lego.com/en-us/aboutus/news/2019/january/50-years-young", claim: "Twice the size in every dimension, the 3:1 and 4:1 trials, and the attributed dream anecdote." },
  S5: { label: "LEGO Help: Comparing LEGO bricks, plates, and DUPLO bricks", short: "Comparing bricks", url: "https://www.lego.com/en-us/service/help-topics/article/comparing-lego-bricks-plates-and-duplo-bricks", claim: "DUPLO is twice the standard size and suited to younger builders." },
  S6: { label: "LEGO History: LEGO System in Play", short: "System in Play", url: "https://www.lego.com/en-us/history/articles/lego-system-in-play", claim: "The 1955 System in Play concept and its continuity principle." },
  S7: { label: "LEGO History: The stud and tube principle", short: "Stud and tube", url: "https://www.lego.com/en-us/history/articles/d-the-stud-and-tube-principle", claim: "The January 28, 1958 patent application and the stud-and-tube clutch principle." },
  S8: { label: "LEGO newsroom: Brick by Brick (2022)", short: "Brick by Brick", url: "https://www.lego.com/en-us/aboutus/news/2022/may/brick-by-brick-building-lego-love-for-90-years", claim: "The 1958 brick design and the DUPLO global launch." },
  S9: { label: "LEGO DUPLO: Our Promise", short: "DUPLO promise", url: "https://www.lego.com/en-nl/themes/duplo/about/our-promise", claim: "The toddler problem, the 2:1 scale, sibling play, and the transition to smaller bricks." },
  S10: { label: "LEGO newsroom: From big bricks to bigger imaginations (2026)", short: "Bigger imaginations", url: "https://www.lego.com/en-us/aboutus/news/2026/march/from-big-bricks-to-bigger-imaginations-building-skills-stories-and-smiles", claim: "DUPLO is designed for little hands at a 2:1 scale." },
  S11: { label: "LEGO US: Medium Creative Brick Box 10696", short: "Set 10696", url: "https://www.lego.com/en-us/product/lego-medium-creative-brick-box-10696", claim: "Open-ended standard-brick box: 484 pieces, ages 4–99, with a small-parts warning." },
  S12: { label: "LEGO US: Large Creative Brick Box 10698", short: "Set 10698", url: "https://www.lego.com/en-us/product/lego-large-creative-brick-box-10698", claim: "Larger standard-brick box: 790 pieces, ages 4–99." },
  S13: { label: "LEGO US: DUPLO Brick Box 10913", short: "Set 10913", url: "https://www.lego.com/en-us/product/brick-box-10913", claim: "Open-ended DUPLO box: 65 pieces, ages 1½+." },
};

export type Outcome = "CONNECTS" | "CONNECTS WITH A CONDITION" | "DOESN’T CONNECT" | "NOT VERIFIED";

export type Pairing = {
  id: string;
  label: string;
  outcome: Outcome;
  reason: string;
  condition?: string;
  tryInstead?: string;
  sources: SourceId[];
};

const TRY = "A regular 2×2 or 2×4 brick with hollow DUPLO studs.";

export const PAIRINGS: Pairing[] = [
  {
    id: "2x2-one-stud",
    label: "2×2 brick + 1 hollow DUPLO stud",
    outcome: "CONNECTS",
    reason: "LEGO says a classic 2×2 brick fits onto one DUPLO stud, and that regular bricks fit when the DUPLO studs on top are hollow.",
    sources: ["S1", "S2"],
  },
  {
    id: "2x4-studs",
    label: "2×4 brick + hollow DUPLO studs",
    outcome: "CONNECTS WITH A CONDITION",
    reason: "LEGO Help names a 2×4 brick as a fitting example.",
    condition: "The DUPLO studs it sits on must be hollow.",
    sources: ["S1"],
  },
  {
    id: "1x2",
    label: "1×2 brick + DUPLO",
    outcome: "DOESN’T CONNECT",
    reason: "LEGO Help lists a 1×2 brick as an example that does not fit.",
    tryInstead: TRY,
    sources: ["S1"],
  },
  {
    id: "2x3",
    label: "2×3 brick + DUPLO",
    outcome: "DOESN’T CONNECT",
    reason: "LEGO Help lists a 2×3 brick as an example that does not fit.",
    tryInstead: TRY,
    sources: ["S1"],
  },
  {
    id: "non-hollow",
    label: "Regular LEGO brick + non-hollow DUPLO stud",
    outcome: "DOESN’T CONNECT",
    reason: "LEGO’s documented cross-scale connection for a regular brick requires hollow DUPLO studs on top. This is about that documented condition, not a claim about every non-hollow DUPLO element ever made.",
    tryInstead: TRY,
    sources: ["S1", "S3"],
  },
  {
    id: "minifig",
    label: "Minifigure + DUPLO brick",
    outcome: "DOESN’T CONNECT",
    reason: "LEGO says LEGO minifigures won’t fit on DUPLO bricks.",
    tryInstead: "Keep each figure on a brick from its own system.",
    sources: ["S1"],
  },
  {
    id: "duplo-figure",
    label: "DUPLO figure + regular LEGO brick",
    outcome: "DOESN’T CONNECT",
    reason: "LEGO says DUPLO figures aren’t compatible with regular LEGO bricks.",
    tryInstead: "Keep each figure on a brick from its own system.",
    sources: ["S1"],
  },
];

export const PAIRING_COUNT_NOTE = "Official examples, not a complete element database.";
export const NOT_VERIFIED_TEXT =
  "Any other pairing is NOT VERIFIED. Nothing here is a formula, so don’t infer one. Check LEGO Help for the exact pieces.";
