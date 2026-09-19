"use client";

import { useState } from "react";
import { brandLabels, checkBatteryCompat, type Brand } from "@/data/battery-compat";
import styles from "./battery-compat-checker.module.css";

const brands: Brand[] = ["dewalt", "bauer"];

function Picker({ label, value, onChange }: { label: string; value: Brand; onChange: (b: Brand) => void }) {
  return (
    <div className={styles.group} role="group" aria-label={label}>
      <p>{label}</p>
      <div>
        {brands.map((b) => (
          <button key={b} type="button" aria-pressed={value === b} onClick={() => onChange(b)}>
            {brandLabels[b]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function BatteryCompatChecker() {
  const [battery, setBattery] = useState<Brand>("dewalt");
  const [tool, setTool] = useState<Brand>("bauer");
  const result = checkBatteryCompat(battery, tool);
  return (
    <div className={styles.checker}>
      <div className={styles.pickers}>
        <Picker label="Battery you have" value={battery} onChange={setBattery} />
        <Picker label="Tool you want to run" value={tool} onChange={setTool} />
      </div>
      <div className={`${styles.result} ${result.verdict === "MATCH" ? styles.match : styles.noMatch}`} aria-live="polite">
        <strong>{result.verdict}</strong>
        <div>
          <h3>{result.headline}</h3>
          <p>{result.reason}</p>
          <ul>
            {result.conditions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
