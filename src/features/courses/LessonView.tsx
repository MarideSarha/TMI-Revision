import { useState } from "react";
import { AlertTriangle, ArrowLeft, CheckCircle2, ClipboardList, PenTool } from "lucide-react";
import type { Lesson, LessonStage, Progress, QuizResult, TrainingModule } from "../../types";
import { QuizRunner } from "../quiz/QuizRunner";
import { LessonSchema } from "./LessonSchema";

/* ---------------------------- LESSON VIEW ---------------------------- */

interface LessonViewProps {
  lesson: Lesson;
  mod: TrainingModule;
  dark: boolean;
  onBack: () => void;
  onDone: (lessonId: string, result: QuizResult) => void;
  progress: Progress;
}

export function LessonView({ lesson, mod, dark, onBack, onDone, progress }: LessonViewProps) {
  const [stage, setStage] = useState<LessonStage>("read"); // read -> quiz -> exercice -> done
  const done = !!progress.lessonsDone[lesson.id];

  return (
    <div className="space-y-5 pb-24">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au module
      </button>

      <div>
        <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">{mod.title}</div>
        <h2 className={`text-2xl font-bold mt-1 ${dark ? "text-white" : "text-slate-900"}`}>{lesson.title}</h2>
      </div>

      {stage === "read" && (
        <div className="space-y-5">
          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Explication simple</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} leading-relaxed`}>{lesson.simple}</p>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Mots techniques</h3>
            <dl className="space-y-2">
              {lesson.vocab.map(([term, def], i) => (
                <div key={i} className="text-sm">
                  <dt className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{term}</dt>
                  <dd className={`${dark ? "text-slate-400" : "text-slate-600"}`}>{def}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Exemple concret</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} leading-relaxed text-sm`}>{lesson.example}</p>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Schéma</h3>
            <LessonSchema type={lesson.schema} dark={dark} />
          </section>

          <section className={`rounded-xl p-4 border-2 border-amber-400/50 ${dark ? "bg-amber-400/5" : "bg-amber-50"}`}>
            <h3 className="font-semibold text-amber-500 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <ClipboardList size={14} /> À retenir
            </h3>
            <ul className="space-y-1.5">
              {lesson.retenir.map((r, i) => (
                <li key={i} className={`text-sm flex gap-2 ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-amber-400">▸</span>{r}
                </li>
              ))}
            </ul>
          </section>

          <section className={`rounded-xl p-4 border-2 border-red-400/40 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
            <h3 className="font-semibold text-red-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <AlertTriangle size={14} /> Erreurs fréquentes
            </h3>
            <ul className="space-y-1.5">
              {lesson.erreurs.map((r, i) => (
                <li key={i} className={`text-sm flex gap-2 ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-red-400">✕</span>{r}
                </li>
              ))}
            </ul>
          </section>

          <button onClick={() => setStage("quiz")} className="w-full py-3 rounded-lg bg-amber-400 text-slate-900 font-bold">
            Faire le mini-quiz ({lesson.quizIds.length} questions)
          </button>
        </div>
      )}

      {stage === "quiz" && (
        <QuizRunner
          questionIds={lesson.quizIds}
          dark={dark}
          title="Mini-quiz de la leçon"
          onFinish={(res) => {
            onDone(lesson.id, res);
            setStage("exercice");
          }}
        />
      )}

      {stage === "exercice" && (
        <div className="space-y-4">
          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <PenTool size={14} /> Exercice pratique
            </h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} text-sm mb-3`}>{lesson.exercice.enonce}</p>
            <details className="text-sm">
              <summary className="cursor-pointer font-semibold text-amber-400">Voir la correction détaillée</summary>
              <p className={`mt-2 ${dark ? "text-slate-300" : "text-slate-600"}`}>{lesson.exercice.correction}</p>
            </details>
          </section>
          <button onClick={() => setStage("done")} className="w-full py-3 rounded-lg bg-emerald-500 text-white font-bold flex items-center justify-center gap-2">
            <CheckCircle2 size={18} /> Terminer la leçon
          </button>
        </div>
      )}

      {stage === "done" && (
        <div className="text-center py-10 space-y-3">
          <CheckCircle2 size={48} className="mx-auto text-emerald-500" />
          <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>Leçon terminée !</h3>
          <p className="text-slate-400 text-sm">+20 XP ajoutés à votre progression.</p>
          <button onClick={onBack} className="px-6 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-semibold">
            Retour au module
          </button>
        </div>
      )}
    </div>
  );
}
