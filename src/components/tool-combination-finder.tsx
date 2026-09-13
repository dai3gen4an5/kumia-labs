"use client";

import { useMemo, useState } from "react";
import { toolCombinations } from "@/data/tool-combinations";

const questions = [
  { id: "project", icon: "⌂", title: "What are you planning to do?", options: [["Home repairs", "home"], ["Furniture & woodworking", "woodworking"], ["Renovation", "renovation"], ["Automotive & garage", "automotive"], ["A bit of everything", "everything"]] },
  { id: "priority", icon: "◎", title: "What matters most?", options: [["Lower cost", "budget"], ["Compact & light", "compact"], ["More power", "power"], ["A platform I can expand", "expansion"]] },
  { id: "purchase", icon: "+", title: "How much do you want to buy now?", options: [["Drill + impact only", "twoTool"], ["A few core tools", "core"], ["Most of the basics at once", "basics"]] },
  { id: "frequency", icon: "↻", title: "How often will you use them?", options: [["Occasionally", "occasional"], ["Regular DIY", "regular"], ["Frequent or demanding work", "frequent"]] },
] as const;

function contextualBonus(id: string, answers: Record<string, string>) {
  const has = (...values: string[]) => values.every((value) => Object.values(answers).includes(value));
  if (id === "m18-fuel" && has("renovation", "power", "frequent")) return 5;
  if (id === "makita-lxt" && has("woodworking", "power", "frequent")) return 3;
  if (id === "makita-lxt" && has("home", "power", "occasional")) return 4;
  if (id === "ridgid-nuke" && has("everything", "compact", "occasional")) return 4;
  if (id === "ridgid-nuke" && has("renovation", "compact", "frequent")) return 4;
  if (id === "dewalt-atomic" && has("automotive", "expansion", "regular")) return 5;
  return 0;
}

export function ToolCombinationFinder() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const result = useMemo(() => {
    if (Object.keys(answers).length !== questions.length) return null;
    const keys = Object.values(answers);
    return [...toolCombinations].sort((a, b) => {
      const scoreA = keys.reduce((sum, key) => sum + (a.scores[key] ?? 0), 0) + contextualBonus(a.id, answers);
      const scoreB = keys.reduce((sum, key) => sum + (b.scores[key] ?? 0), 0) + contextualBonus(b.id, answers);
      return scoreB - scoreA || a.tieBreak - b.tieBreak;
    })[0];
  }, [answers]);

  return (
    <div className="tool-finder">
      <div className="finder-progress" aria-live="polite">{Object.keys(answers).length} of {questions.length} answered</div>
      {questions.map((question, index) => (
        <fieldset key={question.id}>
          <legend><span>0{index + 1}</span><i aria-hidden="true">{question.icon}</i>{question.title}</legend>
          <div className="finder-options">
            {question.options.map(([label, value]) => <button key={value} type="button" aria-pressed={answers[question.id] === value} onClick={() => setAnswers((current) => ({ ...current, [question.id]: value }))}>{label}</button>)}
          </div>
        </fieldset>
      ))}
      <div className={`finder-answer${result ? " is-ready" : ""}`} aria-live="polite">
        {result ? <><p>KUMIA’S PICK FOR YOUR SETUP</p><h3>{result.title}</h3><strong>{result.bestFor}</strong><span>{result.why}</span><em><b>Key trade-off:</b> {result.tradeOff}</em><a href={`#combination-${result.rank}`}>See combination #{result.rank} ↓</a></> : <p>Answer all four questions to see your recommended combination.</p>}
      </div>
    </div>
  );
}
