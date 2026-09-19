export type Brand = "dewalt" | "bauer";
export type Verdict = "MATCH" | "NO MATCH";

export const brandLabels: Record<Brand, string> = {
  dewalt: "DeWalt 20V MAX",
  bauer: "Bauer 20V",
};

export type BatteryCompatResult = {
  verdict: Verdict;
  headline: string;
  reason: string;
  conditions: string[];
};

export function checkBatteryCompat(battery: Brand, tool: Brand): BatteryCompatResult {
  if (battery === tool) {
    return {
      verdict: "MATCH",
      headline: `${brandLabels[battery]} battery on a ${brandLabels[tool]} tool`,
      reason:
        battery === "dewalt"
          ? "DeWalt lists its 20V MAX batteries as compatible with 20V MAX tools and chargers."
          : "Harbor Freight lists its Bauer 20V batteries as working with all Bauer cordless tools.",
      conditions: ["Same-brand pairing. Check the tool's own listing if it names a minimum battery size."],
    };
  }
  const adapterDirection =
    battery === "bauer" ? "Bauer battery → DeWalt tool" : "DeWalt battery → Bauer tool";
  return {
    verdict: "NO MATCH",
    headline: `${brandLabels[battery]} battery on a ${brandLabels[tool]} tool`,
    reason:
      "Neither brand lists the other as compatible, and the battery interfaces are reported to differ physically. The matching 20V label does not make them interchangeable.",
    conditions: [
      `Only a third-party adapter (${adapterDirection}) can bridge them. Neither DeWalt nor Harbor Freight supports this.`,
      "Adapters are reported as mechanical only; they do not make a battery chargeable on the other brand's charger.",
      "DeWalt's warranty excludes damage from accessories or parts it has not approved.",
    ],
  };
}
