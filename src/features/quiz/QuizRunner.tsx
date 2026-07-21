import { useState } from "react";
import { CheckCircle2, ChevronRight, XCircle } from "lucide-react";
import { ProgressBar } from "../../components/ui";
import { QUESTIONS } from "../../data";
import type { QuizResult } from "../../types";

/* ---------------------------- QUIZ COMPONENT ---------------------------- */

interface QuizRunnerProps {
  questionIds: string[];
  onFinish: (result: QuizResult) => void;
  dark: boolean;
  title?: string;
}

export function QuizRunner({ questionIds, onFinish, dark, title }: QuizRunnerProps) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const qid = questionIds[idx];
  const question = QUESTIONS[qid];

  function submit() {
    if (selected === null) return;
    setRevealed(true);
    const isCorrect = selected === question.correct;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setAnswers((a) => ({ ...a, [qid]: isCorrect }));
  }

  function next() {
    if (idx + 1 < questionIds.length) {
      setIdx(idx + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      onFinish({ correctCount, total: questionIds.length, answers });
    }
  }

  return (
    <div className="space-y-4">
      {title && <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{title}</div>}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Question {idx + 1} / {questionIds.length}</span>
        <span className="font-mono">{correctCount} bonne(s) réponse(s)</span>
      </div>
      <ProgressBar value={idx + (revealed ? 1 : 0)} max={questionIds.length} tone="amber" />
      <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
        <p className="font-semibold mb-3">{question.q}</p>
        <div className="space-y-2">
          {question.options.map((opt, i) => {
            let cls = dark ? "border-slate-600 hover:border-slate-400" : "border-slate-300 hover:border-slate-500";
            if (revealed) {
              if (i === question.correct) cls = "border-emerald-500 bg-emerald-500/10";
              else if (i === selected) cls = "border-red-500 bg-red-500/10";
              else cls = dark ? "border-slate-700 opacity-50" : "border-slate-200 opacity-50";
            } else if (selected === i) {
              cls = "border-amber-400 bg-amber-400/10";
            }
            return (
              <button
                key={i}
                disabled={revealed}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-3 py-2.5 rounded-lg border-2 transition-colors flex items-center gap-2 ${cls}`}
              >
                {revealed && i === question.correct && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                {revealed && i === selected && i !== question.correct && <XCircle size={16} className="text-red-500 shrink-0" />}
                <span className="text-sm">{opt}</span>
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className={`mt-3 text-sm rounded-lg p-3 ${dark ? "bg-slate-900/60 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
            <span className="font-semibold">Explication : </span>{question.exp}
          </div>
        )}
      </div>
      <div className="flex justify-end">
        {!revealed ? (
          <button onClick={submit} disabled={selected === null} className="px-5 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-semibold disabled:opacity-40">
            Valider
          </button>
        ) : (
          <button onClick={next} className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold flex items-center gap-1">
            {idx + 1 < questionIds.length ? "Suivant" : "Terminer"} <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
