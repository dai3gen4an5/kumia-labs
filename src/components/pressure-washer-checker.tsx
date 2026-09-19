"use client";

import { useId, useState } from "react";
import {
  M22_UNKNOWN_ID,
  evaluateJunction,
  junctions,
  nozzleOrificeNotice,
  optionsFor,
  secondStageNotice,
  type Junction,
  type Verdict,
} from "@/data/pressure-washer-checker";
import styles from "./pressure-washer-checker.module.css";

type Helper = { size: "" | "14" | "15" | "unspecified" | "help"; gender: "" | "male" | "female" | "unsure" };
const emptyHelper: Helper = { size: "", gender: "" };

const verdictStyle: Record<Verdict, { cls: string; icon: string }> = {
  "DIRECT MATCH": { cls: styles.match, icon: "✓" },
  "ADAPTER NEEDED": { cls: styles.adapter, icon: "⇄" },
  "NO MATCH": { cls: styles.nomatch, icon: "✕" },
  "CHECK FIRST": { cls: styles.check, icon: "?" },
};

/** An "M22, size unknown" choice becomes a concrete option only when the reader supplies both size and end. */
function resolveId(id: string, helper: Helper) {
  if (id === M22_UNKNOWN_ID && (helper.size === "14" || helper.size === "15") && (helper.gender === "male" || helper.gender === "female")) {
    return `m22-${helper.size}-${helper.gender}`;
  }
  return id;
}

function M22Helper({ name, helper, onChange }: { name: string; helper: Helper; onChange: (h: Helper) => void }) {
  const sizeOptions: [Helper["size"], string][] = [
    ["14", "14 mm"],
    ["15", "15 mm"],
    ["unspecified", "It only says “M22”"],
    ["help", "I need help measuring"],
  ];
  const genderOptions: [Helper["gender"], string][] = [
    ["male", "Male (external thread)"],
    ["female", "Female (internal thread)"],
    ["unsure", "Not sure"],
  ];
  return (
    <div className={styles.helper}>
      <fieldset>
        <legend>Do you know whether the sealing stem or bore is 14 mm or 15 mm?</legend>
        {sizeOptions.map(([value, label]) => (
          <label key={value} className={styles.choice}>
            <input type="radio" name={`${name}-size`} checked={helper.size === value} onChange={() => onChange({ ...helper, size: value })} />
            {label}
          </label>
        ))}
      </fieldset>
      {(helper.size === "14" || helper.size === "15") && (
        <fieldset>
          <legend>Which end is it?</legend>
          {genderOptions.map(([value, label]) => (
            <label key={value} className={styles.choice}>
              <input type="radio" name={`${name}-gender`} checked={helper.gender === value} onChange={() => onChange({ ...helper, gender: value })} />
              {label}
            </label>
          ))}
        </fieldset>
      )}
      {helper.size === "help" && (
        <div className={styles.measure}>
          <strong>Measuring safely</strong>
          Switch the machine off, close the water supply, and squeeze the gun trigger to release stored pressure before disconnecting anything. Then measure the internal stem or bore with calipers.
          <ul>
            <li>Check the exact product documentation first. It is usually faster than measuring.</li>
            <li>Until you know the size, the result stays CHECK FIRST.</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export function PressureWasherChecker() {
  const uid = useId();
  const [junction, setJunction] = useState<Junction | null>(null);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [helperA, setHelperA] = useState<Helper>(emptyHelper);
  const [helperB, setHelperB] = useState<Helper>(emptyHelper);

  const config = junction ? junctions.find((j) => j.id === junction)! : null;
  const opts = junction ? optionsFor[junction] : null;

  const choose = (j: Junction) => {
    setJunction(j);
    setA("");
    setB("");
    setHelperA(emptyHelper);
    setHelperB(emptyHelper);
  };

  const ready = junction && a && b;
  const result = ready ? evaluateJunction(junction, resolveId(a, helperA), resolveId(b, helperB)) : null;
  const style = result ? verdictStyle[result.verdict] : null;

  return (
    <div className={styles.checker}>
      <p className={styles.intro}>
        Check one connection at a time. This checker evaluates whether the two interfaces should physically connect and seal. It does not certify the complete pressure-washer system.
      </p>

      <div className={styles.step}>
        <p className={styles.label}>Step 1</p>
        <p className={styles.question} id={`${uid}-q`}>What are you connecting?</p>
        <div className={styles.junctions} role="group" aria-labelledby={`${uid}-q`}>
          {junctions.map((j) => (
            <button key={j.id} type="button" aria-pressed={junction === j.id} onClick={() => choose(j.id)}>
              {j.label}
            </button>
          ))}
        </div>
        {config && <p className={styles.hint}>{config.hint}</p>}
      </div>

      {config && opts && (
        <div className={styles.step}>
          <p className={styles.label}>Step 2</p>
          <p className={styles.question}>Select each side’s connector</p>
          <div className={styles.sides}>
            <div className={styles.field}>
              <label htmlFor={`${uid}-a`}>{config.sideA}</label>
              <select
                id={`${uid}-a`}
                value={a}
                onChange={(e) => {
                  setA(e.target.value);
                  setHelperA(emptyHelper);
                }}
              >
                <option value="">Choose…</option>
                {opts.a.map((o) => (
                  <option key={o.id} value={o.id}>{o.label}</option>
                ))}
              </select>
              {a === M22_UNKNOWN_ID && <M22Helper name={`${uid}-ha`} helper={helperA} onChange={setHelperA} />}
            </div>
            <div className={styles.field}>
              <label htmlFor={`${uid}-b`}>{config.sideB}</label>
              <select
                id={`${uid}-b`}
                value={b}
                onChange={(e) => {
                  setB(e.target.value);
                  setHelperB(emptyHelper);
                }}
              >
                <option value="">Choose…</option>
                {opts.b.map((o) => (
                  <option key={o.id} value={o.id}>{o.label}</option>
                ))}
              </select>
              {b === M22_UNKNOWN_ID && <M22Helper name={`${uid}-hb`} helper={helperB} onChange={setHelperB} />}
            </div>
          </div>
        </div>
      )}

      {config && (
        <div className={styles.step} aria-live="polite">
          {!result || !style ? (
            <p className={styles.prompt}>Choose both ends to see the result for this connection.</p>
          ) : (
            <div className={`${styles.result} ${style.cls}`}>
              <header>
                <span className={styles.icon} aria-hidden="true">{style.icon}</span>
                <p className={styles.verdict}>{result.verdict}</p>
              </header>
              <h4>{result.headline}</h4>
              <p>{result.explanation}</p>
              {result.adapterId === "ar-blue-clean-pw554-b" && (
                <div className={styles.product}>
                  <p className={styles.eyebrow}>Documented adapter for this case</p>
                  <h5>AR Blue Clean PW554-B M22 Swivel Transfer Adapter</h5>
                  <p>M22-15 inlet to M22-14 outlet. Works in this direction only. The product page states no PSI, flow, or temperature ratings, so verify the hose’s rating against your machine before connecting.</p>
                  <a href="https://arblueclean.com/22mm-fitting-m15qc-x-m14-adapter-pw554-b/" target="_blank" rel="noopener noreferrer">View at the manufacturer →</a>
                </div>
              )}
              <div className={styles.notice}>
                <p className={styles.must}>{secondStageNotice}</p>
                <p>{result.junctionNote}</p>
                {junction === "lance-nozzle" && <p>{nozzleOrificeNotice}</p>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
