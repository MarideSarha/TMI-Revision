import { useState } from "react";
import { Calendar, ChevronRight, ListChecks, Timer, Zap } from "lucide-react";
import { QUESTIONS } from "../../data";
import type { ExamModeId, QuizResult } from "../../types";
import { QuizRunner } from "./QuizRunner";

/* ---------------------------- EXAM MODE ---------------------------- */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface ExamModeProps {
  dark: boolean;
  onFinish: (result: QuizResult) => void;
}

export function ExamMode({ dark, onFinish }: ExamModeProps) {
  const [mode, setMode] = useState<ExamModeId | null>(null);
  const allIds = Object.keys(QUESTIONS);

  if (mode === "quick") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 5)} dark={dark} title="Quiz rapide — 5 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }
  if (mode === "daily") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 10)} dark={dark} title="Quiz quotidien — 10 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }
  if (mode === "exam") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 20)} dark={dark} title="Examen blanc — 20 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }

  const options = [
    { id: "quick", label: "Quiz rapide", desc: "5 questions aléatoires", icon: Zap, time: "2 min" },
    { id: "daily", label: "Quiz quotidien", desc: "10 questions aléatoires", icon: Calendar, time: "5 min" },
    { id: "exam", label: "Examen blanc chronométré", desc: "20 questions, tous modules", icon: Timer, time: "15 min" },
  ] as const;

  return (
    <div className="space-y-4 pb-24">
      <h2 className={`text-2xl font-bold flex items-center gap-2 ${dark ? "text-white" : "text-slate-900"}`}>
        <ListChecks className="text-amber-400" /> Quiz & examens blancs
      </h2>
      <div className="grid gap-3">
        {options.map((o) => {
          const Icon = o.icon;
          return (
            <button key={o.id} onClick={() => setMode(o.id)} className={`rounded-xl border p-4 flex items-center gap-3 text-left ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} hover:border-amber-400`}>
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{o.label}</div>
                <div className="text-xs text-slate-400">{o.desc} · ~{o.time}</div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          );
        })}
      </div>
      <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} text-sm text-slate-400`}>
        Chaque module dispose aussi de son propre mini-quiz, accessible depuis chaque leçon.
      </div>
    </div>
  );
}
