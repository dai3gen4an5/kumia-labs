"use client";

import { useMemo, useState } from "react";
import { toolCombinations } from "@/data/tool-combinations";

const questions = [
  { id: "project", title: "What are you planning to do?", options: [["Home repairs", "home"], ["Furniture & woodworking", "woodworking"], ["Renovation", "renovation"], ["Automotive & garage", "automotive"], ["A bit of everything", "everything"]] },
  { id: "priority", title: "What matters most?", options: [["Lower cost", "budget"], ["Compact & light", "compact"], ["More power", "power"], ["A platform I can expand", "expansion"]] },
  { id: "purchase", title: "How much do you want to buy now?", options: [["Drill + impact only", "twoTool"], ["A few core tools", "core"], ["Most of the basics at once", "basics"]] },
  { id: "frequency", title: "How often will you use them?", options: [["Occasionally", "occasional"], ["Regular DIY", "regular"], ["Frequent or demanding work", "frequent"]] },
] as const;

export function ToolCombinationFinder() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const result = useMemo(() => {
    if (Object.keys(answers).length !== questions.length) return null;
    const keys = Object.values(answers);
    return [...toolCombinations].sort((a, b) => {
      const scoreA = keys.reduce((sum, key) => sum + (a.scores[key] ?? 0), 0);
      const scoreB = keys.reduce((sum, key) => sum + (b.scores[key] ?? 0), 0);
      return scoreB - scoreA || a.rank - b.rank;
    })[0];
  }, [answers]);

  return (
    <div className="tool-finder">
      <div className="finder-progress" aria-live="polite">{Object.keys(answers).length} of {questions.length} answered</div>
      {questions.map((question, index) => (
        <fieldset key={question.id}>
          <legend><span>0{index + 1}</span>{question.title}</legend>
          <div className="finder-options">
            {question.options.map(([label, value]) => <button key={value} type="button" aria-pressed={answers[question.id] === value} onClick={() => setAnswers((current) => ({ ...current, [question.id]: value }))}>{label}</button>)}
          </div>
        </fieldset>
      ))}
      <div className={`finder-answer${result ? " is-ready" : ""}`} aria-live="polite">
        {result ? <><p>KUMIA’S PICK FOR YOUR SETUP</p><h3>{result.title}</h3><strong>{result.bestFor}</strong><span>{result.why}</span><a href={`#combination-${result.rank}`}>See combination #{result.rank} ↓</a></> : <p>Answer all four questions to see your recommended combination.</p>}
      </div>
    </div>
  );
}

