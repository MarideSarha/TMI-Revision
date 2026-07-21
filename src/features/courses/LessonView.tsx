import { useState } from "react";
import { AlertTriangle, ArrowLeft, CheckCircle2, ClipboardList, Clock3, Target } from "lucide-react";
import type { Lesson, LessonStage, Progress, QuizResult, TrainingModule } from "../../types";
import { QuizRunner } from "../quiz/QuizRunner";
import { LessonSchema } from "./LessonSchema";
import { LessonStepper } from "./LessonStepper";
import { PracticalExercise } from "./PracticalExercise";
import { QuickCheck } from "./QuickCheck";

interface LessonViewProps {
  lesson: Lesson;
  mod: TrainingModule;
  dark: boolean;
  onBack: () => void;
  onDone: (lessonId: string, result: QuizResult) => void;
  progress: Progress;
}

export function LessonView({ lesson, mod, dark, onBack, onDone, progress }: LessonViewProps) {
  const [stage, setStage] = useState<LessonStage>("read");
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [wasAlreadyDone] = useState(() => !!progress.lessonsDone[lesson.id]);
  const earnedXp = wasAlreadyDone ? 0 : 20 + (quizResult?.correctCount ?? 0) * 10;

  function finishLesson() {
    if (!quizResult) return;
    onDone(lesson.id, quizResult);
    setStage("done");
  }

  return (
    <div className="space-y-5 pb-24">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au module
      </button>

      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">{mod.title}</div>
        <h2 className={`mt-1 text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>{lesson.title}</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Clock3 size={14} /> {lesson.durationMinutes} min</span>
          {wasAlreadyDone && <span className="rounded-full bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-500">Déjà terminée · mode révision</span>}
        </div>
      </div>

      <LessonStepper stage={stage} dark={dark} />

      {stage === "read" && (
        <div className="space-y-5">
          <section className={`rounded-xl border-2 p-4 ${dark ? "border-amber-400/40 bg-amber-400/5" : "border-amber-300 bg-amber-50"}`}>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-500">
              <Target size={16} /> Objectifs de la leçon
            </h3>
            <p className={`mb-3 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>À la fin, tu seras capable de :</p>
            <ul className="space-y-2">
              {lesson.objectifs.map((objectif) => (
                <li key={objectif} className={`flex gap-2 text-sm ${dark ? "text-slate-100" : "text-slate-800"}`}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-amber-500" /> {objectif}
                </li>
              ))}
            </ul>
          </section>

          <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-400">Explication simple</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} leading-relaxed`}>{lesson.simple}</p>
          </section>

          <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-400">Mots techniques</h3>
            <dl className="space-y-2">
              {lesson.vocab.map(([term, definition]) => (
                <div key={term} className="text-sm">
                  <dt className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{term}</dt>
                  <dd className={dark ? "text-slate-400" : "text-slate-600"}>{definition}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-400">Exemple concret</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} text-sm leading-relaxed`}>{lesson.example}</p>
          </section>

          <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-400">Schéma</h3>
            <LessonSchema type={lesson.schema} dark={dark} />
            {lesson.ascii && (
              <pre className={`mt-3 overflow-x-auto rounded-lg border p-3 text-xs leading-relaxed ${dark ? "border-slate-700 bg-slate-950 text-sky-300" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
                {lesson.ascii}
              </pre>
            )}
          </section>

          {lesson.securite && (
            <section className={`rounded-xl border-2 border-red-400/40 p-4 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
              <h3 className="mb-2 flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-red-400"><AlertTriangle size={15} /> Sécurité avant intervention</h3>
              <ul className="space-y-2">
                {lesson.securite.map((item) => <li key={item} className={`flex gap-2 text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}><span className="text-red-400">■</span>{item}</li>)}
              </ul>
            </section>
          )}

          {lesson.astucesPro && (
            <section className={`rounded-xl border p-4 ${dark ? "border-sky-500/30 bg-sky-500/5" : "border-sky-200 bg-sky-50"}`}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-400">Astuces de professionnels</h3>
              <ul className="space-y-2">
                {lesson.astucesPro.map((item) => <li key={item} className={`flex gap-2 text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}><span className="text-sky-400">◆</span>{item}</li>)}
              </ul>
            </section>
          )}

          {(lesson.diagnostic || lesson.depannage) && (
            <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
              {lesson.diagnostic && (
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-400">Méthode de diagnostic</h3>
                  <ol className="space-y-2">{lesson.diagnostic.map((item, index) => <li key={item} className={`flex gap-2 text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}><span className="font-mono font-bold text-amber-400">{index + 1}.</span>{item}</li>)}</ol>
                </div>
              )}
              {lesson.depannage && (
                <div className={lesson.diagnostic ? "mt-5 border-t border-slate-700 pt-4" : ""}>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-500">Procédure de dépannage</h3>
                  <ol className="space-y-2">{lesson.depannage.map((item, index) => <li key={item} className={`flex gap-2 text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}><span className="font-mono font-bold text-emerald-500">{index + 1}.</span>{item}</li>)}</ol>
                </div>
              )}
            </section>
          )}

          {lesson.etudeDeCas && (
            <section className={`rounded-xl border-2 border-violet-400/40 p-4 ${dark ? "bg-violet-400/5" : "bg-violet-50"}`}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-violet-400">Étude de cas en usine</h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{lesson.etudeDeCas.situation}</p>
              <p className={`mb-2 mt-3 text-sm font-semibold ${dark ? "text-white" : "text-slate-900"}`}>Ta mission :</p>
              <ol className="space-y-1">{lesson.etudeDeCas.mission.map((item, index) => <li key={item} className={`text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>{index + 1}. {item}</li>)}</ol>
              <details className="mt-3 rounded-lg border border-violet-400/30 p-3">
                <summary className="cursor-pointer text-sm font-semibold text-violet-400">Voir la correction raisonnée</summary>
                <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{lesson.etudeDeCas.correction}</p>
              </details>
            </section>
          )}

          <section className={`rounded-xl border-2 border-amber-400/50 p-4 ${dark ? "bg-amber-400/5" : "bg-amber-50"}`}>
            <h3 className="mb-2 flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-amber-500">
              <ClipboardList size={14} /> À retenir
            </h3>
            <ul className="space-y-1.5">
              {lesson.retenir.map((item) => (
                <li key={item} className={`flex gap-2 text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-amber-400">▸</span>{item}
                </li>
              ))}
            </ul>
          </section>

          <section className={`rounded-xl border-2 border-red-400/40 p-4 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
            <h3 className="mb-2 flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-red-400">
              <AlertTriangle size={14} /> Erreurs fréquentes
            </h3>
            <ul className="space-y-1.5">
              {lesson.erreurs.map((item) => (
                <li key={item} className={`flex gap-2 text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-red-400">✕</span>{item}
                </li>
              ))}
            </ul>
          </section>

          {lesson.memo && (
            <section className={`rounded-xl border p-4 ${dark ? "border-emerald-500/30 bg-emerald-500/5" : "border-emerald-200 bg-emerald-50"}`}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-500">Fiche mémo</h3>
              <div className="flex flex-wrap gap-2">{lesson.memo.map((item) => <span key={item} className="rounded-full border border-emerald-500/30 px-3 py-1.5 text-xs font-semibold text-emerald-500">{item}</span>)}</div>
              {lesson.resume && <p className={`mt-3 border-t pt-3 text-sm font-semibold ${dark ? "border-slate-700 text-slate-200" : "border-emerald-200 text-slate-700"}`}>En résumé : {lesson.resume}</p>}
            </section>
          )}

          <button type="button" onClick={() => setStage("checkpoint")} className="w-full rounded-lg bg-amber-400 py-3 font-bold text-slate-950">
            Vérifier ma compréhension
          </button>
        </div>
      )}

      {stage === "checkpoint" && <QuickCheck check={lesson.verification} dark={dark} onContinue={() => setStage("quiz")} />}

      {stage === "quiz" && (
        <QuizRunner
          questionIds={lesson.quizIds}
          dark={dark}
          title="Évaluation progressive · mini-quiz"
          onFinish={(result) => {
            setQuizResult(result);
            setStage("exercice");
          }}
        />
      )}

      {stage === "exercice" && <PracticalExercise exercise={lesson.exercice} dark={dark} onComplete={finishLesson} />}

      {stage === "done" && quizResult && (
        <div className="space-y-4 py-8 text-center">
          <CheckCircle2 size={52} className="mx-auto text-emerald-500" />
          <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>Leçon terminée !</h3>
          <p className="text-sm text-slate-400">Résultat : {quizResult.correctCount}/{quizResult.total} au quiz.</p>
          <p className="font-semibold text-emerald-500">{wasAlreadyDone ? "Révision enregistrée · aucun XP supplémentaire" : `+${earnedXp} XP ajoutés à ta progression`}</p>
          <button type="button" onClick={onBack} className="rounded-lg bg-amber-400 px-6 py-2.5 font-semibold text-slate-950">
            Retour au module
          </button>
        </div>
      )}
    </div>
  );
}
