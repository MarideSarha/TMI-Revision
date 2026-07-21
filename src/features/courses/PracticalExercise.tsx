import { CheckCircle2, ClipboardCheck, Eye, PenTool } from "lucide-react";
import { useState } from "react";
import type { LessonExercise } from "../../types";

interface PracticalExerciseProps {
  exercise: LessonExercise;
  dark: boolean;
  onComplete: () => void;
}

export function PracticalExercise({ exercise, dark, onComplete }: PracticalExerciseProps) {
  const [answer, setAnswer] = useState("");
  const [showCorrection, setShowCorrection] = useState(false);
  const [checkedCriteria, setCheckedCriteria] = useState<string[]>([]);
  const canCompare = answer.trim().length >= 10;
  const canComplete = showCorrection && checkedCriteria.length === exercise.criteres.length;

  function toggleCriterion(criterion: string) {
    setCheckedCriteria((current) => current.includes(criterion) ? current.filter((item) => item !== criterion) : [...current, criterion]);
  }

  return (
    <div className="space-y-4">
      <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
        <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-400">
          <PenTool size={16} /> Mise en pratique
        </h3>
        <p className={`text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{exercise.enonce}</p>
        <ol className="mt-4 space-y-2">
          {exercise.consignes.map((consigne, index) => (
            <li key={consigne} className={`flex gap-2 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-[11px] font-bold text-amber-400">{index + 1}</span>
              {consigne}
            </li>
          ))}
        </ol>
      </section>

      <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
        <label htmlFor="lesson-answer" className={`mb-2 block text-sm font-semibold ${dark ? "text-white" : "text-slate-900"}`}>
          Ma réponse de technicien
        </label>
        <textarea
          id="lesson-answer"
          rows={5}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="Décris ton raisonnement, les contrôles et les règles de sécurité…"
          className={`w-full resize-y rounded-lg border p-3 text-sm outline-none transition focus:border-amber-400 ${dark ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-600" : "border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400"}`}
        />
        <p className="mt-1 text-xs text-slate-500">Écris au moins une phrase avant de comparer.</p>
        {!showCorrection && (
          <button type="button" disabled={!canCompare} onClick={() => setShowCorrection(true)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 py-2.5 font-bold text-slate-950 disabled:opacity-40">
            <Eye size={17} /> Comparer avec la correction
          </button>
        )}
      </section>

      {showCorrection && (
        <section className={`rounded-xl border-2 p-4 ${dark ? "border-emerald-500/40 bg-emerald-500/5" : "border-emerald-300 bg-emerald-50"}`}>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            <ClipboardCheck size={16} /> Correction et auto-évaluation
          </h3>
          <p className={`text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{exercise.correction}</p>
          <p className={`mb-2 mt-4 text-sm font-semibold ${dark ? "text-white" : "text-slate-900"}`}>Je vérifie que ma réponse contient :</p>
          <div className="space-y-2">
            {exercise.criteres.map((criterion) => {
              const checked = checkedCriteria.includes(criterion);
              return (
                <button key={criterion} type="button" onClick={() => toggleCriterion(criterion)} className={`flex w-full items-start gap-2 rounded-lg border p-2.5 text-left text-sm ${checked ? "border-emerald-500 bg-emerald-500/10" : dark ? "border-slate-700" : "border-slate-300"}`}>
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${checked ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-500"}`}>
                    {checked && <CheckCircle2 size={14} />}
                  </span>
                  {criterion}
                </button>
              );
            })}
          </div>
        </section>
      )}

      <button type="button" disabled={!canComplete} onClick={onComplete} className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 font-bold text-white disabled:opacity-40">
        <CheckCircle2 size={18} /> Valider la leçon
      </button>
      {!canComplete && showCorrection && <p className="text-center text-xs text-slate-500">Coche chaque critère après avoir comparé ta réponse.</p>}
    </div>
  );
}
