import { CheckCircle2, ChevronRight, RotateCcw, XCircle } from "lucide-react";
import { useState } from "react";
import type { LessonQuickCheck } from "../../types";

interface QuickCheckProps {
  check: LessonQuickCheck;
  dark: boolean;
  onContinue: () => void;
}

export function QuickCheck({ check, dark, onContinue }: QuickCheckProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const isCorrect = selected === check.correct;

  function retry() {
    setSelected(null);
    setRevealed(false);
  }

  return (
    <div className="space-y-4">
      <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Vérification rapide</p>
        <h3 className={`mb-4 font-bold ${dark ? "text-white" : "text-slate-900"}`}>{check.question}</h3>

        <div className="space-y-2">
          {check.options.map((option, index) => {
            const selectedOption = selected === index;
            const correctOption = revealed && index === check.correct;
            const wrongOption = revealed && selectedOption && !isCorrect;
            let colors = dark ? "border-slate-600 hover:border-slate-400" : "border-slate-300 hover:border-slate-500";
            if (!revealed && selectedOption) colors = "border-amber-400 bg-amber-400/10";
            if (correctOption) colors = "border-emerald-500 bg-emerald-500/10";
            if (wrongOption) colors = "border-red-500 bg-red-500/10";

            return (
              <button
                key={option}
                type="button"
                disabled={revealed}
                onClick={() => setSelected(index)}
                className={`flex w-full items-center gap-2 rounded-lg border-2 px-3 py-3 text-left text-sm transition-colors ${colors}`}
              >
                {correctOption && <CheckCircle2 size={17} className="shrink-0 text-emerald-500" />}
                {wrongOption && <XCircle size={17} className="shrink-0 text-red-500" />}
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className={`mt-4 rounded-lg p-3 text-sm ${isCorrect ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-400"}`} role="status">
            <p className="font-bold">{isCorrect ? "Bonne réponse" : "Pas encore"}</p>
            <p className={`mt-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>{check.explanation}</p>
          </div>
        )}
      </section>

      {!revealed ? (
        <button type="button" disabled={selected === null} onClick={() => setRevealed(true)} className="w-full rounded-lg bg-amber-400 py-3 font-bold text-slate-950 disabled:opacity-40">
          Vérifier ma réponse
        </button>
      ) : isCorrect ? (
        <button type="button" onClick={onContinue} className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 py-3 font-bold text-slate-950">
          Passer au mini-quiz <ChevronRight size={18} />
        </button>
      ) : (
        <button type="button" onClick={retry} className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-700 py-3 font-bold text-white">
          <RotateCcw size={17} /> Réessayer
        </button>
      )}
    </div>
  );
}
