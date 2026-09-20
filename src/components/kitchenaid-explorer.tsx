"use client";

import { useId, useState } from "react";
import {
  ITEMS,
  MIXER_FAMILIES,
  SOURCES,
  VERIFIED_DATE,
  evaluateExplorer,
  microcopy,
  needsFor,
  type ItemType,
  type Material,
  type MixerFamily,
  type Outcome,
} from "@/data/kitchenaid-explorer";
import styles from "./kitchenaid-explorer.module.css";

const outcomeStyle: Record<Outcome, { cls: string; icon: string }> = {
  "FITS DIRECTLY": { cls: styles.fits, icon: "✓" },
  "FITS WITH CONDITIONS": { cls: styles.conditions, icon: "!" },
  "DOES NOT FIT": { cls: styles.no, icon: "✕" },
  "VERIFY MODEL": { cls: styles.verify, icon: "?" },
};

const materials: { id: Material; label: string }[] = [
  { id: "stainless", label: "Stainless steel" },
  { id: "glass", label: "Glass" },
  { id: "other", label: "Ceramic or something else" },
];

export function KitchenAidExplorer() {
  const uid = useId();
  const [family, setFamily] = useState<MixerFamily | "">("");
  const [model, setModel] = useState("");
  const [item, setItem] = useState<ItemType | "">("");
  const [sub, setSub] = useState("");
  const [listed, setListed] = useState(false);
  const [companion, setCompanion] = useState(false);
  const [material, setMaterial] = useState<Material | "">("");

  const cfg = item ? ITEMS.find((i) => i.id === item)! : null;
  const needs = item ? needsFor(item, sub) : [];
  const subsOk = !cfg || cfg.subs.length === 0 || sub !== "";
  const ready = !!family && !!cfg && subsOk && (!needs.includes("material") || material !== "");
  const result = ready && family && item
    ? evaluateExplorer({ family, model, item, sub, listed, companion, material: material || "stainless" })
    : null;
  const style = result ? outcomeStyle[result.outcome] : null;

  const pickItem = (id: ItemType) => {
    setItem(id);
    setSub("");
    setListed(false);
    setCompanion(false);
    setMaterial("");
  };
  const pickSub = (id: string) => {
    setSub(id);
    setListed(false);
    setCompanion(false);
    setMaterial("");
  };

  return (
    <div className={styles.explorer}>
      <p className={styles.intro}>
        Answer up to three questions. The explorer only knows the combinations in Kumia’s verified dataset, and it says <strong>VERIFY MODEL</strong> whenever KitchenAid’s sources don’t settle it.
      </p>

      <fieldset className={styles.step}>
        <legend>
          <span className={styles.label}>Step 1</span>
          <span className={styles.question}>Which mixer?</span>
        </legend>
        <div className={styles.options} role="radiogroup" aria-label="Mixer family">
          {MIXER_FAMILIES.map((f) => (
            <label key={f.id} className={`${styles.option} ${family === f.id ? styles.selected : ""}`}>
              <input type="radio" name={`${uid}-family`} checked={family === f.id} onChange={() => setFamily(f.id)} />
              <span>{f.label}</span>
            </label>
          ))}
        </div>
        <div className={styles.field}>
          <label htmlFor={`${uid}-model`}>Exact model number (optional)</label>
          <input id={`${uid}-model`} type="text" value={model} onChange={(e) => setModel(e.target.value)} autoComplete="off" placeholder="e.g. printed on the label under the base" />
          <p className={styles.hint}>Helps with the six-quart bowls, the Ice Cream Maker, and the Bread Bowl. KitchenAid says to check the identification label on the bottom of the base.</p>
        </div>
      </fieldset>

      {family && (
        <fieldset className={styles.step}>
          <legend>
            <span className={styles.label}>Step 2</span>
            <span className={styles.question}>What kind of item?</span>
          </legend>
          <div className={styles.options} role="radiogroup" aria-label="Item type">
            {ITEMS.map((i) => (
              <label key={i.id} className={`${styles.option} ${item === i.id ? styles.selected : ""}`}>
                <input type="radio" name={`${uid}-item`} checked={item === i.id} onChange={() => pickItem(i.id)} />
                <span>{i.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {family && cfg && cfg.subs.length > 0 && (
        <div className={styles.step}>
          <span className={styles.label}>Step 3</span>
          <div className={styles.field}>
            <label htmlFor={`${uid}-sub`} className={styles.question}>{cfg.subLabel ?? "Which one?"}</label>
            <select id={`${uid}-sub`} value={sub} onChange={(e) => pickSub(e.target.value)}>
              <option value="">Choose…</option>
              {cfg.subs.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>

          {sub && needs.includes("companion") && (
            <label className={styles.check}>
              <input type="checkbox" checked={companion} onChange={(e) => setCompanion(e.target.checked)} />
              <span>I have the companion attachment KitchenAid requires for it (for the Sausage Stuffer, the Food Grinder)</span>
            </label>
          )}
          {sub && needs.includes("listed") && (
            <label className={styles.check}>
              <input type="checkbox" checked={listed} onChange={(e) => setListed(e.target.checked)} />
              <span>I checked KitchenAid’s product page and my exact mixer model is listed for this item</span>
            </label>
          )}
          {sub && needs.includes("material") && (
            <fieldset className={styles.materials}>
              <legend>What is your bowl made of?</legend>
              {materials.map((m) => (
                <label key={m.id} className={styles.choice}>
                  <input type="radio" name={`${uid}-material`} checked={material === m.id} onChange={() => setMaterial(m.id)} />
                  {m.label}
                </label>
              ))}
            </fieldset>
          )}
        </div>
      )}

      <div className={styles.step} aria-live="polite">
        {!result || !style ? (
          <p className={styles.prompt}>{family ? "Finish the questions above to see the result." : "Start with your mixer to see a result."}</p>
        ) : (
          <div className={`${styles.result} ${style.cls}`}>
            <header>
              <span className={styles.icon} aria-hidden="true">{style.icon}</span>
              <div>
                <p className={styles.verdict}>{result.outcome}</p>
                <p className={styles.iface}>Interface: {result.interface}</p>
              </div>
            </header>
            <p>{result.reason}</p>
            {result.condition && (
              <p className={styles.cond}>
                <strong>Condition:</strong> {result.condition}
              </p>
            )}
            {result.aside && <p className={styles.aside}>{result.aside}</p>}
            {result.note && <p className={styles.microcopy}>{microcopy[result.note]}</p>}
            {result.alternative && (
              <p className={styles.alt}>
                <strong>Safe next step:</strong> {result.alternative}
              </p>
            )}
            <p className={styles.sources}>
              <span>Sources (checked {VERIFIED_DATE}):</span>{" "}
              {result.sources.map((id) => (
                <a key={id} href={SOURCES[id].url} target="_blank" rel="noopener noreferrer">
                  {SOURCES[id].short} ↗
                </a>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
