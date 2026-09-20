// What Survived? KitchenAid Combination Explorer: rules and sources.
// Source of truth: docs/research/kitchenaid-attachments-bowls-work-package-final.md
// (COMPATIBILITY MODEL + INTERACTIVE TOOL SPEC + VERIFIED SOURCE TABLE).
// Only the verified version 1 dataset is implemented. Anything the sources do not settle returns VERIFY MODEL.

export const VERIFIED_DATE = "2026-09-19";

export type SourceId =
  | "S1" | "S2" | "S3" | "S4" | "S5" | "S6" | "S7" | "S8" | "S9" | "S10" | "S11" | "S12"
  | "S13" | "S14" | "S15" | "S16" | "S17" | "S18" | "S19" | "S20" | "S21" | "S22" | "S23";

export const SOURCES: Record<SourceId, { label: string; short: string; url: string; claim: string }> = {
  S1: { label: "KitchenAid UK: Artisan By You 5KSM193", short: "KitchenAid UK", url: "https://www.kitchenaid.co.uk/mixers/medium/859711690030/mixer-tilt-head-4-7l-artisan-by-you-5ksm193-cast-iron-black", claim: "All power-hub attachments fit every KitchenAid stand mixer model made since 1919." },
  S2: { label: "KitchenAid US: Attachment Doesn't Fit or Stay in Hub", short: "KitchenAid support", url: "https://producthelp.kitchenaid.com/Countertop_Appliances/Stand_Mixers/Bowl_Lift_Mixer/Operation/Attachment_Doesn't_Fit_or_Stay_in_Hub_-_Stand_Mixer", claim: "Hub fit regardless of age, the Artisan Mini and carafe exception, and an acceptable gap of up to 1/8 inch." },
  S3: { label: "KitchenAid US: Old vs. New Stand Mixers", short: "Old vs. New guide", url: "https://www.kitchenaid.com/countertop-appliances/pinch-of-help/old-vs-new-kitchenaid-mixer", claim: "H-5, Model K, and K-45 examples, hub fit regardless of age, and bowls and tools that vary by design." },
  S4: { label: "KitchenAid: 100 Year History", short: "KitchenAid history", url: "https://www.kitchenaid.com/100year/history.html", claim: "1919 H-5 slicing and straining, the 1937 Model K interlocking bowl and iconic form, 1955 colors, and the 1969 K-45." },
  S5: { label: "KitchenAid: Brand History", short: "Brand history", url: "https://www.kitchenaid.com/countertop-appliances/about-kitchenaid/brand-history", claim: "Egmont Arens's contribution, the Model K lineage, and early household-mixer history." },
  S6: { label: "Museum of Modern Art: exhibition checklist (PDF)", short: "MoMA checklist", url: "https://assets.moma.org/documents/moma_master-checklist_332972.pdf", claim: "A KitchenAid electric mixer credited to Egmont Arens and Hobart." },
  S7: { label: "KitchenAid: Attachment Buying Guide", short: "Attachment guide", url: "https://www.kitchenaid.com/pinch-of-help/stand-mixers/attachment-buying-guide.html.html", claim: "Genuine hub-attachment fit and the current attachment categories and dependencies." },
  S8: { label: "KitchenAid: How to Use a Stand Mixer", short: "How to use", url: "https://www.kitchenaid.com/countertop-appliances/pinch-of-help/how-to-use-a-stand-mixer", claim: "Attachment shaft, square socket, and the front-hub installation process." },
  S9: { label: "KitchenAid: Are Mixer Bowls Interchangeable?", short: "Bowl guide", url: "https://www.kitchenaid.com/countertop-appliances/pinch-of-help/are-kitchenaid-mixer-bowls-interchangeable", claim: "Mini tilt-head, full-size tilt-head, and bowl-lift bowls are separate, and bowls are not interchangeable across types." },
  S10: { label: "KitchenAid: Stand Mixer Buying Guide", short: "Mixer buying guide", url: "https://www.kitchenaid.com/content/kitchenaid/en_us/countertop-appliances/stand-mixer-buying-guide.html", claim: "Tilt-head and bowl-lift architecture and function overview." },
  S11: { label: "KitchenAid: Beater Attachments", short: "Beater guide", url: "https://www.kitchenaid.com/countertop-appliances/pinch-of-help/beater-attachments", claim: "Beaters are not interchangeable across mixer and bowl sizes." },
  S12: { label: "KitchenAid: Bread Bowl KSM2CB5BGS", short: "Bread Bowl", url: "https://www.kitchenaid.com/countertop-appliances/stand-mixers/accessories/p.bread-bowl-with-baking-lid.KSM2CB5BGS.html", claim: "Full-size tilt-head support, the product workflow, and a 500°F product limit." },
  S13: { label: "KitchenAid Product Help: Bread Bowl adjustment", short: "Bread Bowl help", url: "https://producthelp.kitchenaid.com/Countertop_Appliances/Stand_Mixer_Attachments/Bread_Bowl/Assembly_and_Usage/Adjusting_the_Stand_Mixer_for_Bread_Bowl_Use", claim: "KN15E1X exclusion and possible beater-clearance adjustment." },
  S14: { label: "KitchenAid: Ice Cream Maker KSMICM", short: "KSMICM", url: "https://www.kitchenaid.com/attachments/p.ice-cream-maker-attachment.KSMICM.html", claim: "Current product contents, supported families, and the Mini and named-model exclusions." },
  S15: { label: "KitchenAid: How to Use the Ice Cream Attachment", short: "Ice cream how-to", url: "https://www.kitchenaid.com/countertop-appliances/pinch-of-help/how-to-use-the-kitchenaid-ice-cream-attachment", claim: "Drive-assembly orientation, start sequence, and a legacy-model exception." },
  S16: { label: "KitchenAid printable attachment guide (PDF)", short: "Printable guide", url: "https://www.kitchenaid.com/content/dam/kitchenaid/en_us/attachments/KitchenAid%20Attachment%20Guide-new.pdf", claim: "Mini, tilt-head, and bowl-lift overview and additional legacy Ice Cream Maker exclusions." },
  S17: { label: "KitchenAid Product Help: Sifter + Scale", short: "Sifter + Scale", url: "https://producthelp.kitchenaid.com/Countertop_Appliances/Stand_Mixer_Attachments/Pasta_and_Grains/Stand_Mixer_Sifter___Scale/How_to_Use_Sifter_Scale_Attachment_in_Multiple_Ways", claim: "Ordinary bowl materials are supported, and Precise Heat, Ice Cream Maker, and Pouring Shield configurations are excluded." },
  S18: { label: "KitchenAid: KSMPB7W Pastry Beater", short: "KSMPB7W", url: "https://www.kitchenaid.com/countertop-appliances/stand-mixers/accessories/p.pastry-beater-for-kitchenaid-bowl-lift-stand-mixers.KSMPB7W.html", claim: "Supported bowl-lift models and the stainless-steel-bowl condition." },
  S19: { label: "KitchenAid accessory guide W11501523 (PDF, 2021)", short: "Accessory guide", url: "https://www.kitchenaid.com/content/dam/global/documents/202106/accessory-guide-w11501523-reva.pdf", claim: "KSMPB5 and KSMPB7 approval and exclusions." },
  S20: { label: "KitchenAid: KSMB60 6-Quart Bowl", short: "KSMB60", url: "https://www.kitchenaid.com/countertop-appliances/stand-mixers/attachments/p.6-quart-polished-stainless-steel-bowl-for-select-kitchenaid-bowl-lift-stand-mixers.KSMB60.html", claim: "The current KSM55, KSM60, KSM70, and KSM75-prefix family." },
  S21: { label: "KitchenAid: KN2B6PEH 6-Quart Bowl", short: "KN2B6PEH", url: "https://www.kitchenaid.com/countertop-appliances/stand-mixers/accessories/p.6-qt.-bowl-lift-polished-stainless-steel-bowl-with-comfort-handle.kn2b6peh.html", claim: "A separate legacy and select-model fit list." },
  S22: { label: "KitchenAid: KB3SS 3-Quart Bowl", short: "KB3SS", url: "https://www.kitchenaid.com/countertop-appliances/stand-mixers/bowls/stainless-steel/p.3-quart-polished-stainless-steel-bowl.KB3SS.html", claim: "Supported full-size tilt-head models." },
  S23: { label: "KitchenAid: KN3CW Bowl and Combi-Whip", short: "KN3CW", url: "https://www.kitchenaid.com/p.KN3CW.html", claim: "A paired three-quart bowl and Combi-Whip system, with model lists." },
};

export type Outcome = "FITS DIRECTLY" | "FITS WITH CONDITIONS" | "DOES NOT FIT" | "VERIFY MODEL";
export type MixerFamily = "mini" | "full-tilt" | "bowl-lift" | "vintage";
export type ItemType = "hub" | "bowl" | "beater" | "icecream" | "breadbowl" | "sifter" | "smallbatch";
export type Need = "listed" | "companion" | "material";
export type Material = "stainless" | "glass" | "other";

export const MIXER_FAMILIES: { id: MixerFamily; label: string }[] = [
  { id: "mini", label: "Artisan Mini / 3.5-quart Mini" },
  { id: "full-tilt", label: "Full-size 4.5/5-quart tilt-head" },
  { id: "bowl-lift", label: "Current residential bowl-lift" },
  { id: "vintage", label: "Vintage or legacy, exact number unknown" },
];

export type SubChoice = { id: string; label: string; needs?: Need[] };
export type ItemConfig = { id: ItemType; label: string; subLabel?: string; subs: SubChoice[]; interface: string };

export const ITEMS: ItemConfig[] = [
  {
    id: "hub",
    label: "Front power-hub attachment",
    subLabel: "Which one?",
    interface: "POWER HUB",
    subs: [
      { id: "genuine", label: "A genuine KitchenAid attachment (pasta roller, grinder, slicer, mill…)" },
      { id: "juice-sauce", label: "Juice and Sauce attachment" },
      { id: "sausage", label: "Sausage Stuffer", needs: ["companion"] },
      { id: "strainer", label: "Fruit/Vegetable Strainer", needs: ["companion"] },
      { id: "third-party", label: "A third-party hub attachment" },
    ],
  },
  {
    id: "bowl",
    label: "Mixing bowl",
    subLabel: "Which bowl?",
    interface: "BOWL MOUNT",
    subs: [
      { id: "capacity", label: "A bowl I'm choosing only by quart size" },
      { id: "tilt-full-bowl", label: "A bowl made for full-size tilt-head mixers", needs: ["listed"] },
      { id: "lift-bowl", label: "A bowl made for bowl-lift mixers", needs: ["listed"] },
      { id: "mini-bowl", label: "A bowl made for Mini tilt-head mixers", needs: ["listed"] },
      { id: "ksmb60", label: "KSMB60 six-quart stainless bowl" },
      { id: "kn2b6peh", label: "KN2B6PEH six-quart bowl" },
    ],
  },
  {
    id: "beater",
    label: "Beater, whip, dough hook, or pastry beater",
    subLabel: "Which one?",
    interface: "BEATER SHAFT",
    subs: [
      { id: "capacity", label: "A beater or hook I'm choosing only by quart size" },
      { id: "ksmpb7", label: "KSMPB7 / KSMPB7W pastry beater", needs: ["listed", "material"] },
    ],
  },
  { id: "icecream", label: "Ice Cream Maker (KSMICM)", subs: [], interface: "BOWL-DEPENDENT SYSTEM" },
  { id: "breadbowl", label: "Bread Bowl (KSM2CB5BGS)", subs: [], interface: "BOWL MOUNT" },
  {
    id: "sifter",
    label: "Sifter + Scale with a bowl",
    subLabel: "What will catch the flour?",
    interface: "POWER HUB + RECEIVING BOWL",
    subs: [
      { id: "ordinary", label: "An accessory stainless-steel, glass, or ceramic bowl" },
      { id: "precise-heat", label: "The Precise Heat Mixing Bowl" },
      { id: "icecream", label: "The Ice Cream Maker" },
      { id: "pouring-shield", label: "A Pouring Shield setup" },
    ],
  },
  {
    id: "smallbatch",
    label: "Small-batch bowl set",
    subLabel: "Which set?",
    interface: "BOWL MOUNT",
    subs: [
      { id: "kb3ss", label: "KB3SS three-quart bowl" },
      { id: "kn3cw", label: "KN3CW three-quart bowl with Combi-Whip" },
    ],
  },
];

export type ExplorerInput = {
  family: MixerFamily;
  model: string;
  item: ItemType;
  sub: string;
  listed: boolean;
  companion: boolean;
  material: Material;
};

export type ExplorerResult = {
  outcome: Outcome;
  interface: string;
  reason: string;
  condition?: string;
  aside?: string;
  sources: SourceId[];
  alternative?: string;
  /** Which required microcopy applies. */
  note?: "hub" | "bowl" | "legacy";
};

export const microcopy = {
  hub: "This is the long-running connection. KitchenAid says genuine power-hub attachments fit stand mixer models made since 1919.",
  bowl: "This item uses or depends on the bowl system, not only the universal power hub. Mixer family and exact model now matter.",
  legacy: "KitchenAid’s current official sources do not give one consistent answer for this legacy model. Verify the exact mixer and accessory SKU with KitchenAid before buying or using it.",
} as const;

const GENERIC_ALTERNATIVE =
  "Find the identification label on the bottom of the base for your exact model number, then check the accessory’s KitchenAid product page for a fit list.";

const normalize = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");
const startsWithAny = (m: string, prefixes: string[]) => prefixes.some((p) => m.startsWith(p));

// Model groups stated in the verified dataset.
const KSMB60_PREFIXES = ["KSM55", "KSM60", "KSM70", "KSM75"];
const KN2B6PEH_MODELS = ["KD2661", "KL26M", "KP26M1", "KP26M8", "KP26N9", "KV25G", "KV25M"];
const MINI_MODELS = ["KSM3316", "KSM3317"];
const ICECREAM_EXCLUDED = ["K5SS", "KSM50", "KSM500", "KSM450"];
const isIceCreamLegacyVerify = (m: string) => m.startsWith("KPM5") || /^KSM5(?!\d)/.test(m);

type Bf = "mini" | "full-tilt" | "bowl-lift";
const bowlFamilyOf: Record<string, Bf> = { "tilt-full-bowl": "full-tilt", "lift-bowl": "bowl-lift", "mini-bowl": "mini" };
const familyName: Record<Bf, string> = { mini: "Mini tilt-head", "full-tilt": "full-size tilt-head", "bowl-lift": "bowl-lift" };

export function evaluateExplorer(input: ExplorerInput): ExplorerResult {
  const { family, item, sub, listed, companion, material } = input;
  const m = normalize(input.model);
  const cfg = ITEMS.find((i) => i.id === item);
  if (!cfg) throw new Error(`Unknown item ${item}`);
  const iface = cfg.interface;
  const base = (outcome: Outcome, reason: string, extra: Partial<ExplorerResult> = {}): ExplorerResult => ({
    outcome,
    interface: iface,
    reason,
    sources: [],
    ...extra,
  });
  const verify = (reason: string, extra: Partial<ExplorerResult> = {}) =>
    base("VERIFY MODEL", reason, { alternative: GENERIC_ALTERNATIVE, ...extra });

  // A typed Artisan Mini model number with a different family selected is a contradiction, not a guess.
  // The Ice Cream Maker is the exception: KSM3316 and KSM3317 are named exclusions, so the model number decides.
  if (m && startsWithAny(m, MINI_MODELS) && family !== "mini" && item !== "icecream") {
    return verify("The model number you entered looks like an Artisan Mini (KSM3316 or KSM3317), but you selected a different mixer family. Fix one of them and check again.", { sources: ["S9"], ...(item === "hub" || item === "sifter" ? {} : { note: "bowl" as const }) });
  }

  // ---------- POWER HUB ----------
  if (item === "hub") {
    const hubNote = { note: "hub" as const, sources: ["S1", "S2"] as SourceId[] };
    const gap = "A gap of up to 1/8 inch between the attachment housing and the mixer can be acceptable when the attachment is correctly inserted, secured, and unable to move.";
    if (sub === "third-party") {
      return verify("KitchenAid’s fit statement covers KitchenAid’s own power-hub attachments. It does not establish another maker’s fit, loading, safety, or warranty status.", {
        sources: ["S1", "S2"],
        alternative: "Use a genuine KitchenAid power-hub attachment, or check the other maker’s own documentation for your exact mixer model.",
      });
    }
    if (sub === "juice-sauce" && family === "mini") {
      return base("FITS WITH CONDITIONS", "The attachment fits the Artisan Mini’s power hub, but the supplied carafe is too tall for this model.", {
        ...hubNote,
        condition: "Collect the juice in any suitable shorter container.",
        aside: gap,
      });
    }
    if ((sub === "sausage" || sub === "strainer") && !companion) {
      return base("FITS WITH CONDITIONS", sub === "sausage" ? "The Sausage Stuffer needs the Food Grinder attachment." : "The Fruit/Vegetable Strainer needs the companion hardware KitchenAid specifies.", {
        sources: ["S7", "S1"],
        condition: sub === "sausage" ? "Have the Food Grinder attachment on hand." : "Follow KitchenAid’s current grinder and attachment configuration.",
        note: "hub",
      });
    }
    return base("FITS DIRECTLY", family === "vintage" ? "KitchenAid says power-hub attachments fit its stand mixers regardless of age." : "KitchenAid currently says its power-hub attachments fit every stand mixer model made since 1919.", {
      ...hubNote,
      aside: gap,
    });
  }

  // ---------- SIFTER + SCALE ----------
  if (item === "sifter") {
    if (sub === "ordinary") {
      return base("FITS DIRECTLY", "KitchenAid explicitly supports accessory stainless-steel, glass, and ceramic bowls with the Sifter + Scale.", { sources: ["S17"], note: "hub" });
    }
    return base("DOES NOT FIT", "KitchenAid explicitly excludes this receiving setup from Sifter + Scale use.", {
      sources: ["S17"],
      condition: "The exclusion applies to the Precise Heat Mixing Bowl, the Ice Cream Maker, and Pouring Shield configurations. Use an ordinary accessory bowl instead.",
      alternative: "Catch the flour in an accessory stainless-steel, glass, or ceramic bowl.",
    });
  }

  // ---------- Everything below depends on bowl / base / tool geometry ----------
  const bowlNote = { note: "bowl" as const };

  if (item === "bowl") {
    if (sub === "capacity") {
      return verify("Capacity does not establish support-pin, latch, height, or tool-path compatibility.", { ...bowlNote, sources: ["S9", "S10"], alternative: "Find your exact model number, then choose a bowl whose KitchenAid page lists that model." });
    }
    if (sub === "ksmb60" || sub === "kn2b6peh") {
      const isKsmb60 = sub === "ksmb60";
      const src: SourceId = isKsmb60 ? "S20" : "S21";
      if (family !== "bowl-lift" && family !== "vintage") {
        return base("DOES NOT FIT", "This is a bowl-lift bowl, and KitchenAid says bowls are not interchangeable across Mini tilt-head, full-size tilt-head, and bowl-lift mixers.", { ...bowlNote, sources: [src, "S9"], alternative: "Choose a bowl made for your mixer family, then confirm your model on its KitchenAid page." });
      }
      if (family === "vintage" && !m) {
        return verify("Enter the exact model number. This bowl’s fit list is model-specific.", { ...bowlNote, sources: [src] });
      }
      if (!m) return verify("Enter your exact model number. This bowl has a model-specific fit list, and capacity alone does not settle it.", { ...bowlNote, sources: [src] });
      const ok = isKsmb60 ? startsWithAny(m, KSMB60_PREFIXES) : startsWithAny(m, KN2B6PEH_MODELS);
      return ok
        ? base("FITS DIRECTLY", isKsmb60 ? "KitchenAid’s current product page groups the KSM55, KSM60, KSM70, and KSM75-prefix residential bowl-lift mixers with this bowl." : "KitchenAid’s product page lists this legacy or select model for the KN2B6PEH.", { ...bowlNote, sources: [src] })
        : verify(`Your model isn’t in the group ${isKsmb60 ? "KitchenAid’s KSMB60 page names" : "KitchenAid’s KN2B6PEH page lists"}. That isn’t a confirmed exclusion, so this result stays unverified. Both six-quart bowls are bowl-lift bowls, but their official model lists differ.`, { ...bowlNote, sources: [src, isKsmb60 ? "S21" : "S20"] });
    }
    const bf = bowlFamilyOf[sub];
    if (bf) {
      if (family === "vintage") return verify("With a vintage or legacy mixer of unknown model, a bowl’s family alone doesn’t settle the fit.", { ...bowlNote, sources: ["S9"] });
      if (bf !== (family as Bf)) {
        const reasonSpecific =
          bf === "full-tilt" && family === "bowl-lift" ? "KitchenAid separates the tilt-head and bowl-lift mounting systems."
          : bf === "full-tilt" && family === "mini" ? "The Mini is a separate bowl family."
          : `A ${familyName[bf]} bowl belongs to a different bowl family than your ${familyName[family as Bf]} mixer.`;
        return base("DOES NOT FIT", `KitchenAid says bowls are not interchangeable across Mini tilt-head, full-size tilt-head, and bowl-lift mixers. ${reasonSpecific}`, { ...bowlNote, sources: ["S9", "S10"], alternative: "Choose a bowl made for your mixer family, then confirm your model on its KitchenAid page." });
      }
      return listed
        ? base("FITS DIRECTLY", bf === "full-tilt" ? "The bowl twists into the matching base and clamping plate, and your model is listed for it." : "Your exact model is listed for this bowl on KitchenAid’s product page.", { ...bowlNote, sources: ["S9", "S10"] })
        : verify("Same family isn’t enough. Confirm that your exact mixer model is listed on this bowl’s KitchenAid product page.", { ...bowlNote, sources: ["S9"] });
    }
  }

  if (item === "smallbatch") {
    const isKb = sub === "kb3ss";
    const need: Bf = isKb ? "full-tilt" : "bowl-lift";
    const src: SourceId = isKb ? "S22" : "S23";
    const iface2 = isKb ? "BOWL MOUNT" : "BOWL MOUNT + BEATER SHAFT";
    if (family === "vintage") return verify("With a vintage or legacy mixer of unknown model, check this set’s model list before assuming it fits.", { ...bowlNote, interface: iface2, sources: [src] });
    if (family !== need) {
      return base("DOES NOT FIT", `KitchenAid documents this ${isKb ? "three-quart bowl for full-size tilt-head" : "bowl-and-whip set for bowl-lift"} models. Bowls and beater tools are not interchangeable across mixer types.`, { ...bowlNote, interface: iface2, sources: [src, "S9"], alternative: "Look for the small-batch bowl KitchenAid lists for your mixer family." });
    }
    // KitchenAid's own product pages expose different model lists in different sections, so no single list is treated as definitive.
    return verify("KitchenAid’s page for this item lists supported models, and the lists on that page differ between sections. Check every list on the page for your exact model before assuming it fits.", { ...bowlNote, interface: iface2, sources: [src], condition: isKb ? undefined : "The bowl and Combi-Whip are one paired small-batch system." });
  }

  if (item === "beater") {
    if (sub === "capacity") {
      return verify("KitchenAid says beater tools are not interchangeable between mixer and bowl sizes, so quart size alone doesn’t settle it.", { ...bowlNote, sources: ["S11"], alternative: "Match the beater to your exact mixer model, then confirm on the beater’s KitchenAid page." });
    }
    // KSMPB7 / KSMPB7W
    if (family === "vintage") return verify("With a vintage or legacy mixer of unknown model, check the pastry beater’s model list first.", { ...bowlNote, sources: ["S18", "S19"] });
    if (family !== "bowl-lift") {
      return verify("KSMPB7 is documented for listed bowl-lift models. Full-size tilt-head and bowl-lift mixers use different pastry-beater families, so look for the one listed for your model.", { ...bowlNote, sources: ["S18", "S19"] });
    }
    if (material !== "stainless") {
      return base("DOES NOT FIT", "KitchenAid approves this pastry beater only with stainless-steel bowl-lift bowls. A listed mixer using a glass or other bowl isn’t the approved combination.", { ...bowlNote, sources: ["S18", "S19"], condition: "Use it in a stainless-steel bowl-lift bowl.", alternative: "Use a stainless-steel bowl-lift bowl for the pastry beater." });
    }
    return listed
      ? base("FITS DIRECTLY", "Your bowl-lift model is listed for the pastry beater, and the bowl is stainless steel as KitchenAid requires.", { ...bowlNote, sources: ["S18", "S19"], condition: "Stainless-steel bowl-lift bowl only.", interface: "BEATER SHAFT + BOWL MATERIAL" })
      : verify("Confirm that your exact bowl-lift model appears on the KSMPB7W page before assuming it fits.", { ...bowlNote, sources: ["S18"], interface: "BEATER SHAFT + BOWL MATERIAL" });
  }

  if (item === "breadbowl") {
    if (family === "vintage") return verify("With a vintage or legacy mixer of unknown model, check the Bread Bowl’s supported models first.", { ...bowlNote, sources: ["S12", "S13"] });
    if (family !== "full-tilt") {
      return base("DOES NOT FIT", "The Bread Bowl is documented for supported 4.5/5-quart full-size tilt-head mixers, not for the Mini or bowl-lift models.", { ...bowlNote, sources: ["S12", "S9"], alternative: "Use a bowl made for your mixer family." });
    }
    if (m.startsWith("KN15E1X")) {
      return base("DOES NOT FIT", "KitchenAid excludes the KN15E1X from Bread Bowl use.", { ...bowlNote, sources: ["S13", "S12"], alternative: "Use a bowl and accessory that KitchenAid lists for the KN15E1X." });
    }
    return base("FITS WITH CONDITIONS", "The Bread Bowl is documented for supported 4.5/5-quart full-size tilt-head mixers.", {
      ...bowlNote,
      sources: ["S12", "S13"],
      condition: "The KN15E1X is excluded, and the beater clearance may need adjusting before use.",
    });
  }

  // ---------- ICE CREAM MAKER ----------
  // KitchenAid's current product page: fits all tilt-head stand mixers except the Artisan Mini KSM3316 and KSM3317,
  // and all bowl-lift stand mixers except K5SS, KSM50, KSM500 and KSM450. Nothing beyond that is inferred.
  if (item === "icecream") {
    const s: SourceId[] = ["S14", "S15", "S16"];
    const positioning = "KitchenAid documents different drive-assembly positioning for tilt-head and bowl-lift mixers. Follow its how-to for yours.";
    if (m && startsWithAny(m, ICECREAM_EXCLUDED)) {
      return base("DOES NOT FIT", "KitchenAid’s current product page says the Ice Cream Maker fits all bowl-lift stand mixers except the K5SS, KSM50, KSM500, and KSM450.", { ...bowlNote, sources: s, alternative: GENERIC_ALTERNATIVE });
    }
    if ((m && startsWithAny(m, MINI_MODELS)) || (family === "mini" && !m)) {
      return base("DOES NOT FIT", "KitchenAid’s current product page says the Ice Cream Maker fits all tilt-head stand mixers except the Artisan Mini KSM3316 and KSM3317.", { ...bowlNote, sources: s, alternative: GENERIC_ALTERNATIVE });
    }
    if (family === "mini") {
      return verify("KitchenAid excludes the Artisan Mini KSM3316 and KSM3317. The model you entered isn’t one of those, but it isn’t clearly covered by the current wording either, so it stays unverified.", { ...bowlNote, sources: s });
    }
    if (m && isIceCreamLegacyVerify(m)) {
      return verify("This legacy model appears inconsistently across KitchenAid’s product page, how-to, manual, and printable guide.", { ...bowlNote, sources: s, note: "legacy" });
    }
    if (family === "vintage") {
      return verify("A vintage or unidentified mixer isn’t clearly covered by the current product-page wording, and KitchenAid’s lists for older models differ across sources.", { ...bowlNote, sources: s, note: "legacy" });
    }
    if (family === "full-tilt") {
      return base("FITS DIRECTLY", "KitchenAid’s current product page says the Ice Cream Maker fits all tilt-head stand mixers except the Artisan Mini KSM3316 and KSM3317.", { ...bowlNote, sources: s, condition: positioning });
    }
    return base("FITS DIRECTLY", "KitchenAid’s current product page says the Ice Cream Maker fits all bowl-lift stand mixers except the K5SS, KSM50, KSM500, and KSM450.", { ...bowlNote, sources: s, condition: positioning });
  }

  throw new Error(`Unhandled combination: ${item}/${sub}/${family}`);
}

/** Which extra questions Step 3 needs for this item and sub-choice. */
export function needsFor(item: ItemType, sub: string): Need[] {
  const cfg = ITEMS.find((i) => i.id === item);
  return cfg?.subs.find((s) => s.id === sub)?.needs ?? [];
}

export function defaultSub(item: ItemType): string {
  return ITEMS.find((i) => i.id === item)?.subs[0]?.id ?? "";
}
