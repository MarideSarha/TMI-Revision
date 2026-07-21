import { CheckCircle2, RotateCcw, Wrench, XCircle } from "lucide-react";
import { useState } from "react";
import type { LessonCalculationActivity, LessonConversionActivity, LessonInteractiveActivity, LessonSequenceActivity } from "../../types";

interface LessonInteractiveActivityProps {
  activity: LessonInteractiveActivity;
  dark: boolean;
}

function SequenceWorkshop({ activity, dark }: { activity: LessonSequenceActivity; dark: boolean }) {
  const [selection, setSelection] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const isCorrect = activity.correctOrder.every((item, index) => selection[index] === item);

  function reset() {
    setSelection([]);
    setChecked(false);
  }

  return (
    <div className="space-y-3">
      <ol className="space-y-2" aria-label="Séquence construite">
        {selection.map((itemIndex, index) => (
          <li key={itemIndex} className={`flex items-center gap-3 rounded-lg border p-3 text-sm ${dark ? "border-slate-600 bg-slate-900/60" : "border-slate-300 bg-white"}`}>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-950">{index + 1}</span>
            <span className="flex-1">{activity.items[itemIndex]}</span>
          </li>
        ))}
      </ol>

      {!checked && (
        <div className="grid gap-2 sm:grid-cols-2">
          {activity.items.map((item, index) => {
            const selected = selection.includes(index);
            return (
              <button
                key={item}
                type="button"
                disabled={selected}
                onClick={() => setSelection((current) => [...current, index])}
                className={`rounded-lg border-2 p-3 text-left text-sm transition ${selected ? "border-slate-700 opacity-35" : dark ? "border-slate-600 hover:border-amber-400" : "border-slate-300 hover:border-amber-500"}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      {checked && (
        <div role="status" className={`rounded-lg p-3 text-sm ${isCorrect ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-400"}`}>
          <div className="flex items-center gap-2 font-bold">{isCorrect ? <CheckCircle2 size={17} /> : <XCircle size={17} />}{isCorrect ? "Ordre correct" : "Pas encore dans le bon ordre"}</div>
          <p className={`mt-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>{isCorrect ? activity.success : "Repars de la grandeur à connaître, puis termine par la comparaison et la traçabilité."}</p>
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row">
        {!checked && (
          <button type="button" disabled={selection.length !== activity.items.length} onClick={() => setChecked(true)} className="flex-1 rounded-lg bg-amber-400 px-4 py-2.5 font-bold text-slate-950 disabled:opacity-40">
            Vérifier la séquence
          </button>
        )}
        {(selection.length > 0 || checked) && (
          <button type="button" onClick={reset} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Recommencer
          </button>
        )}
      </div>
    </div>
  );
}

function NumericWorkshop({ activity, dark }: { activity: LessonConversionActivity | LessonCalculationActivity; dark: boolean }) {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [solved, setSolved] = useState(0);
  const challenge = activity.challenges[challengeIndex];
  const numericAnswer = Number(answer.replace(",", "."));
  const isCorrect = Number.isFinite(numericAnswer) && Math.abs(numericAnswer - challenge.answer) <= challenge.tolerance;
  const isLast = challengeIndex === activity.challenges.length - 1;
  const isConversion = activity.type === "conversion";

  function validate() {
    setChecked(true);
    if (isCorrect) setSolved((current) => Math.max(current, challengeIndex + 1));
  }

  function next() {
    setChallengeIndex((current) => current + 1);
    setAnswer("");
    setChecked(false);
  }

  function restart() {
    setChallengeIndex(0);
    setAnswer("");
    setChecked(false);
    setSolved(0);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-slate-400">
        <span>Défi {challengeIndex + 1}/{activity.challenges.length}</span>
        <span>{solved}/{activity.challenges.length} réussi(s)</span>
      </div>
      <div className={`rounded-xl border p-4 ${dark ? "border-slate-600 bg-slate-900/60" : "border-slate-300 bg-white"}`}>
        <p className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{challenge.prompt}</p>
        <label htmlFor="conversion-answer" className="mt-4 block text-xs font-semibold uppercase tracking-wide text-slate-400">Ta réponse</label>
        <div className="mt-1 flex items-center gap-2">
          <input
            id="conversion-answer"
            inputMode="decimal"
            value={answer}
            disabled={checked}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Ex. 1250"
            className={`min-w-0 flex-1 rounded-lg border p-3 text-base outline-none focus:border-amber-400 ${dark ? "border-slate-600 bg-slate-950 text-white" : "border-slate-300 bg-slate-50 text-slate-900"}`}
          />
          <span className="min-w-12 font-mono font-bold text-amber-400">{challenge.unit}</span>
        </div>
      </div>

      {checked && (
        <div role="status" className={`rounded-lg p-3 text-sm ${isCorrect ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-400"}`}>
          <div className="flex items-center gap-2 font-bold">{isCorrect ? <CheckCircle2 size={17} /> : <XCircle size={17} />}{isCorrect ? (isConversion ? "Conversion correcte" : "Calcul correct") : (isConversion ? "Conversion à revoir" : "Calcul à revoir")}</div>
          <p className={`mt-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>{challenge.explanation}</p>
        </div>
      )}

      {!checked && <button type="button" disabled={answer.trim() === ""} onClick={validate} className="w-full rounded-lg bg-amber-400 py-2.5 font-bold text-slate-950 disabled:opacity-40">Vérifier le calcul</button>}
      {checked && !isCorrect && <button type="button" onClick={() => { setAnswer(""); setChecked(false); }} className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-700 py-2.5 font-bold text-white"><RotateCcw size={16} /> Réessayer ce défi</button>}
      {checked && isCorrect && !isLast && <button type="button" onClick={next} className="w-full rounded-lg bg-emerald-500 py-2.5 font-bold text-white">Défi suivant</button>}
      {checked && isCorrect && isLast && (
        <div className="space-y-3 text-center">
          <p className="font-bold text-emerald-500">{isConversion ? "Atelier terminé : les quatre familles d’unités sont maîtrisées." : "Atelier terminé : les calculs et leurs unités sont maîtrisés."}</p>
          <button type="button" onClick={restart} className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold ${dark ? "border-slate-600" : "border-slate-300"}`}><RotateCcw size={16} /> Refaire l’atelier</button>
        </div>
      )}
    </div>
  );
}

export function LessonInteractiveActivity({ activity, dark }: LessonInteractiveActivityProps) {
  return (
    <section className={`rounded-xl border-2 p-4 ${dark ? "border-cyan-500/35 bg-cyan-500/5" : "border-cyan-200 bg-cyan-50"}`}>
      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cyan-500"><Wrench size={16} /> {activity.title}</h3>
      <p className={`mb-4 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>{activity.instruction}</p>
      {activity.type === "sequence" ? <SequenceWorkshop activity={activity} dark={dark} /> : <NumericWorkshop activity={activity} dark={dark} />}
    </section>
  );
}
