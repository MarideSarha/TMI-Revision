import { ArrowLeft, CheckCircle2, RotateCcw, ShieldCheck, Target, XCircle } from "lucide-react";
import { useState } from "react";
import { QUESTIONS } from "../../data";
import type { Progress, QuizResult, TrainingBlock, TrainingModule } from "../../types";
import { QuizRunner } from "../quiz/QuizRunner";

interface BlockExamViewProps {
  block: TrainingBlock;
  mod: TrainingModule;
  progress: Progress;
  dark: boolean;
  onBack: () => void;
  onReviewLesson: (lessonId: string) => void;
  onFinish: (blockId: string, result: QuizResult, passPercent: number) => void;
}

export function BlockExamView({ block, mod, progress, dark, onBack, onReviewLesson, onFinish }: BlockExamViewProps) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const exam = block.exam;

  if (!exam) return null;

  function finish(nextResult: QuizResult) {
    setResult(nextResult);
    onFinish(block.id, nextResult, exam!.passPercent);
  }

  const percent = result ? Math.round((result.correctCount / result.total) * 100) : 0;
  const passed = percent >= exam.passPercent;
  const missedLessonIds = result
    ? Array.from(new Set(Object.entries(result.answers).filter(([, correct]) => !correct).map(([questionId]) => QUESTIONS[questionId]?.lesson).filter(Boolean)))
    : [];
  const previous = progress.blockExamScores[block.id];

  return (
    <div className="space-y-5 pb-24">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au bloc
      </button>

      <header>
        <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">Examen de maîtrise · bloc {block.num}</div>
        <h2 className={`mt-1 text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>{block.title}</h2>
        <p className="mt-2 text-sm text-slate-400">Seuil de réussite : {exam.passPercent} %. La sécurité reste prioritaire dans toutes les réponses.</p>
      </header>

      {!result && (
        <>
          {previous && (
            <div className={`rounded-xl border p-3 text-sm ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
              Meilleur résultat enregistré : {previous.correctCount}/{previous.total}.
            </div>
          )}
          <QuizRunner key={attempt} questionIds={exam.questionIds} dark={dark} title="Évaluation progressive" onFinish={finish} />
        </>
      )}

      {result && (
        <div className="space-y-4">
          <section className={`rounded-2xl border-2 p-5 text-center ${passed ? "border-emerald-500/50 bg-emerald-500/10" : "border-amber-400/50 bg-amber-400/10"}`}>
            {passed ? <CheckCircle2 className="mx-auto text-emerald-500" size={48} /> : <XCircle className="mx-auto text-amber-400" size={48} />}
            <h3 className={`mt-3 text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>{passed ? "Bloc maîtrisé" : "Connaissances à consolider"}</h3>
            <p className="mt-1 text-3xl font-bold font-mono">{percent} %</p>
            <p className="mt-2 text-sm text-slate-400">
              {passed ? "Le bloc suivant peut être débloqué dès que son contenu est disponible." : `Il faut atteindre ${exam.passPercent} %. Révise les chapitres ciblés puis recommence.`}
            </p>
          </section>

          {!passed && missedLessonIds.length > 0 && (
            <section className={`rounded-xl border p-4 ${dark ? "border-slate-700 bg-slate-800/60" : "border-slate-200 bg-white"}`}>
              <h3 className="flex items-center gap-2 font-semibold text-amber-400"><Target size={17} /> Révision personnalisée</h3>
              <p className="mt-1 text-sm text-slate-400">Ces chapitres correspondent à tes erreurs :</p>
              <div className="mt-3 space-y-2">
                {missedLessonIds.map((lessonId) => {
                  const lesson = mod.lessons.find((item) => item.id === lessonId);
                  if (!lesson) return null;
                  return (
                    <button key={lessonId} type="button" onClick={() => onReviewLesson(lessonId)} className={`w-full rounded-lg border p-3 text-left text-sm font-semibold ${dark ? "border-slate-700 hover:border-amber-400" : "border-slate-300 hover:border-amber-500"}`}>
                      Revoir : {lesson.title}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {passed && (
            <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-500">
              <ShieldCheck size={20} /> Maîtrise enregistrée · +100 XP lors de la première réussite.
            </div>
          )}

          <button type="button" onClick={() => { setResult(null); setAttempt((value) => value + 1); }} className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 py-3 font-bold text-slate-950">
            <RotateCcw size={17} /> {passed ? "Refaire l'examen" : "Réessayer après révision"}
          </button>
        </div>
      )}
    </div>
  );
}
