// Pressure Washer Connector Checker rules.
// Source of truth: docs/research/kumia-pressure-washer-work-package-revised.md
// (SIMPLIFIED CONNECTOR CHECKER SPEC + FINAL VERDICT DEFINITIONS).
// The checker evaluates ONE connector junction. It never certifies the whole system.

export type Junction = "machine-hose" | "hose-gun" | "gun-lance" | "lance-nozzle";
export type Verdict = "DIRECT MATCH" | "ADAPTER NEEDED" | "NO MATCH" | "CHECK FIRST";

type Family = "m22" | "qc38" | "qc14" | "npt14" | "karcher" | "mfr" | "bayonet" | "thread" | "integrated" | "other" | "unsure";
type Role = "male" | "female" | "plug" | "socket";

export type ConnectorOption = {
  id: string;
  label: string;
  family: Family;
  role?: Role;
  size?: "14" | "15";
};

export const junctions: { id: Junction; label: string; sideA: string; sideB: string; hint: string }[] = [
  { id: "machine-hose", label: "Machine → Hose", sideA: "Machine outlet", sideB: "Hose inlet", hint: "The pressure washer's outlet and the hose end that attaches to it." },
  { id: "hose-gun", label: "Hose → Gun", sideA: "Hose end", sideB: "Gun inlet", hint: "The far end of the hose and the inlet of the spray gun." },
  { id: "gun-lance", label: "Gun → Lance", sideA: "Gun outlet", sideB: "Lance inlet", hint: "Where the wand or lance attaches to the gun." },
  { id: "lance-nozzle", label: "Lance → Nozzle", sideA: "Lance end", sideB: "Nozzle end", hint: "The tip of the lance and the nozzle that attaches to it." },
];

const opt = (id: string, label: string, family: Family, role?: Role, size?: "14" | "15"): ConnectorOption => ({ id, label, family, role, size });

const m22 = {
  m14m: opt("m22-14-male", "M22-14 male", "m22", "male", "14"),
  m15m: opt("m22-15-male", "M22-15 male", "m22", "male", "15"),
  m14f: opt("m22-14-female", "M22-14 female", "m22", "female", "14"),
  m15f: opt("m22-15-female", "M22-15 female", "m22", "female", "15"),
  unknown: opt("m22-unknown", "M22, size unknown", "m22"),
};
const qc38 = { socket: opt("qc38-socket", "⅜-inch QC socket", "qc38", "socket"), plug: opt("qc38-plug", "⅜-inch QC plug", "qc38", "plug") };
const qc14 = { socket: opt("qc14-socket", "¼-inch QC socket", "qc14", "socket"), plug: opt("qc14-plug", "¼-inch QC plug", "qc14", "plug") };
const other = opt("other", "Other proprietary connector", "other");
const notSure = opt("not-sure", "Not sure", "unsure");

const hoseGunOptions: ConnectorOption[] = [
  m22.m14m, m22.m14f, m22.m15m, m22.m15f, m22.unknown,
  qc38.plug, qc38.socket,
  opt("mfr-plug", "Manufacturer-specific plug", "mfr", "plug"),
  opt("mfr-socket", "Manufacturer-specific socket", "mfr", "socket"),
  other, notSure,
];

const gunLanceOptions: ConnectorOption[] = [
  m22.m14m, m22.m14f, m22.m15m, m22.m15f, m22.unknown,
  qc14.plug, qc14.socket,
  opt("npt14-male", "Threaded ¼-inch NPT, male", "npt14", "male"),
  opt("npt14-female", "Threaded ¼-inch NPT, female", "npt14", "female"),
  opt("bayonet", "Manufacturer bayonet", "bayonet"),
  other, notSure,
];

const lanceNozzleOptions: ConnectorOption[] = [
  qc14.socket, qc14.plug,
  opt("thread", "Threaded connection", "thread"),
  opt("bayonet", "Manufacturer bayonet", "bayonet"),
  opt("integrated", "Integrated / non-removable nozzle", "integrated"),
  other, notSure,
];

export const optionsFor: Record<Junction, { a: ConnectorOption[]; b: ConnectorOption[] }> = {
  "machine-hose": {
    a: [m22.m14m, m22.m15m, qc38.socket, qc38.plug, opt("karcher-qc", "Kärcher Quick Connect", "karcher"), other, m22.unknown, notSure],
    b: [m22.m14f, m22.m15f, qc38.plug, qc38.socket, opt("karcher-hose", "Matching Kärcher hose end (listed for my model)", "karcher"), other, m22.unknown, notSure],
  },
  "hose-gun": { a: hoseGunOptions, b: hoseGunOptions },
  "gun-lance": { a: gunLanceOptions, b: gunLanceOptions },
  "lance-nozzle": { a: lanceNozzleOptions, b: lanceNozzleOptions },
};

export const M22_UNKNOWN_ID = m22.unknown.id;

export type CheckerResult = {
  verdict: Verdict;
  headline: string;
  explanation: string;
  /** Extra junction-specific reminder shown after the interface result. */
  junctionNote: string;
  /** Set only when one specific, documented adapter applies (the only ADAPTER NEEDED case). */
  adapterId?: "ar-blue-clean-pw554-b";
};

export const secondStageNotice =
  "This result covers the selected connector junction only. Before use, verify that every hose, gun, lance, nozzle, coupler, and adapter meets the pressure washer’s PSI, GPM/flow, and temperature requirements.";
export const nozzleOrificeNotice = "A nozzle can attach and still have the wrong orifice for the machine’s PSI and GPM.";

const junctionNotes: Record<Junction, string> = {
  "machine-hose": "Confirm whether a hose reel requires a special hose.",
  "hose-gun": "Confirm the gun’s flow and temperature ratings.",
  "gun-lance": "Confirm lance length and pressure rating.",
  "lance-nozzle": "Confirm the nozzle orifice, not only connector size and spray angle.",
};

const complement: Record<Role, Role> = { male: "female", female: "male", plug: "socket", socket: "plug" };
const complementary = (a: ConnectorOption, b: ConnectorOption) => !!a.role && !!b.role && complement[a.role] === b.role;

// Every known option by id, so a helper-resolved M22 choice (e.g. a female outlet) can always be evaluated.
const allOptions = new Map<string, ConnectorOption>();
for (const j of Object.values(optionsFor)) for (const o of [...j.a, ...j.b]) allOptions.set(o.id, o);
for (const o of Object.values(m22)) allOptions.set(o.id, o);

export function evaluateJunction(junction: Junction, aId: string, bId: string): CheckerResult {
  const a = allOptions.get(aId);
  const b = allOptions.get(bId);
  if (!a || !b) throw new Error(`Unknown connector option for ${junction}: ${aId} / ${bId}`);
  const note = junctionNotes[junction];
  const res = (verdict: Verdict, headline: string, explanation: string, extra: Partial<CheckerResult> = {}): CheckerResult => ({
    verdict,
    headline,
    explanation,
    junctionNote: note,
    ...extra,
  });

  // 1. Nothing to attach: the nozzle is part of the lance.
  if (a.family === "integrated" || b.family === "integrated") {
    return res("NO MATCH", "No separate nozzle connection", "An integrated, non-removable nozzle cannot be joined to another nozzle connector. To change spray patterns, the lance itself would have to be replaced with a supported model.");
  }

  // 2. Missing essential information is never converted into a guess.
  const missing: string[] = [];
  const unknownSide = (o: ConnectorOption) => o.id === M22_UNKNOWN_ID || o.family === "unsure" || o.family === "other";
  for (const o of [a, b]) {
    if (o.id === M22_UNKNOWN_ID) missing.push("a fitting labeled only “M22”, with no 14 mm or 15 mm seal size and no confirmed male or female end");
    else if (o.family === "unsure") missing.push("a connector that has not been identified");
    else if (o.family === "other") missing.push("a proprietary connector that has not been identified");
  }
  if (unknownSide(a) || unknownSide(b)) {
    return res("CHECK FIRST", "Essential connector information is missing", `This pairing includes ${missing.join(" and ")}. Guessing here is how the wrong part gets bought. Find the exact model documentation or measure the fitting, then check again.`);
  }

  // 3. Manufacturer-specific systems need model-level evidence.
  if (a.family === "karcher" && b.family === "karcher") {
    return res("DIRECT MATCH", "Supported manufacturer pairing", "You selected a Kärcher Quick Connect outlet and a hose end that Kärcher lists for your exact model. That is the only kind of Kärcher pairing this checker treats as a direct match. Hose-reel machines need the specific hose Kärcher lists for them.");
  }
  if (["karcher", "mfr", "bayonet"].includes(a.family) || ["karcher", "mfr", "bayonet"].includes(b.family)) {
    return res("CHECK FIRST", "Manufacturer-specific connector", "Plugs, sockets, bayonets, and Quick Connect systems are compatible only when the manufacturer lists the pairing for your exact model and revision. The brand name alone does not settle it. Check the manufacturer’s compatibility list.");
  }
  if (a.family === "npt14" || b.family === "npt14") {
    return res("CHECK FIRST", "¼-inch NPT is not verified here", "This checker’s verified sources do not cover NPT pairings, so it does not guess. Check the product documentation for the thread standard, size, gender, and sealing method of both parts.");
  }
  if (a.family === "thread" || b.family === "thread") {
    if (a.family === b.family) {
      return res("CHECK FIRST", "Thread type not identified", "“Threaded” alone does not identify the thread standard, size, or gender. Identify both threads from the product documentation before assuming they mate.");
    }
    return res("CHECK FIRST", "Thread type not identified", "A generic threaded connection has not been identified, so it cannot be matched to the other side. Find the thread standard and size from the product documentation.");
  }

  // 4. Same family.
  if (a.family === b.family) {
    if (a.family === "m22") {
      if (a.size === b.size) {
        return complementary(a, b)
          ? res("DIRECT MATCH", `M22-${a.size} meets M22-${a.size}`, `Same seal size, and one side is male while the other is female. The two interfaces should connect and seal without an adapter.`)
          : res("NO MATCH", "Both ends are the same gender", `Two ${a.role} M22 ends cannot connect to each other, even at the same ${a.size} mm seal size.`);
      }
      if (junction === "machine-hose" && a.id === "m22-15-male" && b.id === "m22-14-female") {
        return res(
          "ADAPTER NEEDED",
          "M22-15 machine outlet to M22-14 hose",
          "M22-14 and M22-15 do not seal directly. A documented adapter converts a 15 mm M22 outlet to a 14 mm M22 hose. It works in this direction only, and the hose must be rated for the machine.",
          { adapterId: "ar-blue-clean-pw554-b" },
        );
      }
      return res(
        "NO MATCH",
        "M22-14 and M22-15 do not seal together",
        "Same outer thread family, different internal seal size. Depending on which way round they are, the parts either will not fit or will thread together and leak. These two cannot be joined directly, and this checker has not confirmed an adapter for this direction at this junction.",
      );
    }
    // qc38 and qc14: complementary roles only.
    const familyName = a.family === "qc38" ? "⅜-inch quick-connect" : "¼-inch quick-connect";
    return complementary(a, b)
      ? res("DIRECT MATCH", `${familyName} ${a.role} meets ${b.role}`, `Same interface family, and the ends are complementary (${a.role} and ${b.role}). They should connect without an adapter.`)
      : res("NO MATCH", `Two ${a.role} ends`, `Two ${a.role} ends of the same ${familyName} family cannot connect to each other.`);
  }

  // 5. Different families.
  const isPair = (x: Family, y: Family) => (a.family === x && b.family === y) || (a.family === y && b.family === x);
  if (isPair("qc38", "qc14")) {
    return res("NO MATCH", "¼-inch and ⅜-inch quick connects are different interfaces", "These are different quick-connect sizes and cannot be joined directly. A nominal size alone does not tell you a fitting’s role, gender, or pressure rating.");
  }
  if (isPair("m22", "qc38")) {
    return res(
      "CHECK FIRST",
      "M22 and ⅜-inch quick connect: verify the conversion",
      "We found adapters for some M22 ↔ ⅜-inch QC conversions, but the exact direction, gender, M22 seal size, and adapter ratings must be verified for this setup.",
    );
  }
  // Anything else is unconfirmed, not disproven: absence of evidence is not NO MATCH.
  return res(
    "CHECK FIRST",
    "Compatibility not confirmed",
    "These fittings are not confirmed to connect, and this checker has no verified evidence about an adapter for this pairing either way. Check the manufacturer’s documentation for both parts before buying anything.",
  );
}
