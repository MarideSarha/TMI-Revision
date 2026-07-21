import { BookOpenCheck, RefreshCw, Target, XCircle } from "lucide-react";
import { QUESTIONS } from "../../data";
import type { QuizResult } from "../../types";

interface LessonRemediationProps {
  result: QuizResult;
  dark: boolean;
  passPercent: number;
  onRetry: () => void;
}

export function LessonRemediation({ result, dark, passPercent, onRetry }: LessonRemediationProps) {
  const percent = Math.round((result.correctCount / result.total) * 100);
  const missedQuestionIds = Object.entries(result.answers)
    .filter(([, correct]) => !correct)
    .map(([questionId]) => questionId);

  return (
    <div className="space-y-4">
      <section className={`rounded-2xl border-2 p-5 text-center ${dark ? "border-amber-400/50 bg-amber-400/5" : "border-amber-300 bg-amber-50"}`}>
        <Target className="mx-auto text-amber-400" size={44} />
        <h3 className={`mt-3 text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>On consolide avant de continuer</h3>
        <p className="mt-1 font-mono text-3xl font-bold text-amber-400">{percent} %</p>
        <p className="mt-2 text-sm text-slate-400">
          Il faut atteindre {passPercent} % pour débloquer la mise en pratique. Ce n'est pas un échec : tes erreurs indiquent exactement quoi retravailler.
        </p>
      </section>

      <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-400">
          <BookOpenCheck size={17} /> Correction ciblée
        </h3>
        <div className="space-y-3">
          {missedQuestionIds.map((questionId) => {
            const question = QUESTIONS[questionId];
            if (!question) return null;
            return (
              <article key={questionId} className={`rounded-lg border p-3 ${dark ? "border-slate-700 bg-slate-900/50" : "border-slate-200 bg-slate-50"}`}>
                <div className="flex items-start gap-2">
                  <XCircle className="mt-0.5 shrink-0 text-red-400" size={17} />
                  <div>
                    <p className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{question.q}</p>
                    <p className="mt-2 text-sm text-emerald-500"><span className="font-semibold">Réponse correcte :</span> {question.options[question.correct]}</p>
                    <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{question.exp}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`rounded-xl border p-4 text-sm ${dark ? "border-sky-500/30 bg-sky-500/5 text-slate-200" : "border-sky-200 bg-sky-50 text-slate-700"}`}>
        <p className="font-semibold text-sky-400">Avant de réessayer</p>
        <p className="mt-1">Explique avec tes propres mots pourquoi chaque réponse corrigée est juste. Si tu peux l'expliquer simplement, tu es prêt à refaire le quiz.</p>
      </section>

      <button type="button" onClick={onRetry} className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 py-3 font-bold text-slate-950">
        <RefreshCw size={18} /> Refaire le mini-quiz
      </button>
    </div>
  );
}
