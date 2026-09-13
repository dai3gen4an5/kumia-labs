"use client";

import { useState } from "react";

const sizes = ["38mm", "40mm", "41mm", "42mm", "44mm", "45mm", "46mm", "49mm"] as const;
type Size = (typeof sizes)[number];

const results: Record<Size, { verdict: "MATCH" | "NO MATCH" | "CHECK FIRST"; reason: string }> = {
  "38mm": { verdict: "NO MATCH", reason: "This case belongs to Apple’s smaller band compatibility group." },
  "40mm": { verdict: "NO MATCH", reason: "This case belongs to Apple’s smaller band compatibility group." },
  "41mm": { verdict: "NO MATCH", reason: "This case belongs to Apple’s smaller band compatibility group." },
  "42mm": { verdict: "CHECK FIRST", reason: "Apple does not currently list 42mm as a destination size for 49mm bands. Confirm the exact watch generation and product listing before buying." },
  "44mm": { verdict: "MATCH", reason: "Apple officially lists 49mm bands as compatible with this case size." },
  "45mm": { verdict: "MATCH", reason: "Apple officially lists 49mm bands as compatible with this case size." },
  "46mm": { verdict: "MATCH", reason: "Apple officially lists 49mm bands as compatible with this case size." },
  "49mm": { verdict: "MATCH", reason: "This is the case family the 49mm Ultra band was designed for." },
};

export function AppleWatchFitChecker() {
  const [selected, setSelected] = useState<Size>("45mm");
  const result = results[selected];
  return <div className="fit-checker"><div className="fit-options" role="group" aria-label="Choose Apple Watch case size">{sizes.map(size => <button type="button" key={size} aria-pressed={selected === size} onClick={() => setSelected(size)}>{size}<span aria-hidden="true">{selected === size ? "Selected" : ""}</span></button>)}</div><div className={`fit-result fit-${result.verdict.toLowerCase().replace(" ", "-")}`} aria-live="polite"><strong>{result.verdict}</strong><p>{result.reason}</p></div></div>;
}
