import { ArrowLeft, CheckCircle2, ChevronRight, ClipboardCheck, Construction, Lock, ShieldCheck } from "lucide-react";
import { ProgressBar } from "../../components/ui";
import type { Lesson, Progress, TrainingBlock, TrainingModule } from "../../types";

interface ModuleViewProps {
  mod: TrainingModule;
  progress: Progress;
  dark: boolean;
  onOpenLesson: (lesson: Lesson) => void;
  onOpenBlockExam: (block: TrainingBlock) => void;
  onBack: () => void;
}

function isBlockPassed(block: TrainingBlock, progress: Progress) {
  const score = progress.blockExamScores[block.id];
  return !!score && !!block.exam && (score.correctCount / score.total) * 100 >= block.exam.passPercent;
}

function LessonRow({ lesson, index, done, locked, dark, onOpen }: { lesson: Lesson; index: number; done: boolean; locked: boolean; dark: boolean; onOpen: () => void }) {
  return (
    <button
      type="button"
      disabled={locked}
      onClick={onOpen}
      className={`w-full text-left rounded-xl border p-4 flex items-center gap-3 ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} ${locked ? "opacity-50" : "hover:border-amber-400"}`}
    >
      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-emerald-500" : locked ? "bg-slate-600" : "bg-amber-400"}`}>
        {done ? <CheckCircle2 size={18} className="text-white" /> : locked ? <Lock size={16} className="text-slate-300" /> : <span className="font-bold text-slate-900">{index + 1}</span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{lesson.title}</div>
        <div className="text-xs text-slate-400">{lesson.durationMinutes} min · {lesson.quizIds.length} questions · exercice pratique</div>
      </div>
      {!locked && <ChevronRight size={18} className="text-slate-400 shrink-0" />}
    </button>
  );
}

export function ModuleView({ mod, progress, dark, onOpenLesson, onOpenBlockExam, onBack }: ModuleViewProps) {
  const doneCount = mod.lessons.filter((lesson) => progress.lessonsDone[lesson.id]).length;

  function renderLessons(lessons: Lesson[]) {
    return lessons.map((lesson, index) => {
      const globalIndex = mod.lessons.findIndex((item) => item.id === lesson.id);
      const previousLesson = globalIndex > 0 ? mod.lessons[globalIndex - 1] : null;
      const done = !!progress.lessonsDone[lesson.id];
      const locked = !!previousLesson && !progress.lessonsDone[previousLesson.id];
      return <LessonRow key={lesson.id} lesson={lesson} index={index} done={done} locked={locked} dark={dark} onOpen={() => onOpenLesson(lesson)} />;
    });
  }

  return (
    <div className="space-y-4 pb-24">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au programme
      </button>
      <div>
        <div className="text-xs text-slate-400 font-mono">{mod.source}</div>
        <h2 className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>{mod.title}</h2>
        <div className="mt-2"><ProgressBar value={doneCount} max={mod.lessons.length} tone={mod.color === "amber" ? "amber" : mod.color === "sky" ? "sky" : "violet"} /></div>
        {mod.blocks && <p className="mt-2 text-sm text-slate-400">{mod.blocks.length} blocs · {mod.blocks.reduce((total, block) => total + block.chapterCount, 0)} chapitres prévus · progression par maîtrise</p>}
      </div>

      {!mod.blocks && <div className="space-y-3">{renderLessons(mod.lessons)}</div>}

      {mod.blocks && (
        <div className="space-y-4">
          {mod.blocks.map((block, blockIndex) => {
            const previousBlock = blockIndex > 0 ? mod.blocks![blockIndex - 1] : null;
            const previousPassed = !previousBlock || isBlockPassed(previousBlock, progress);
            const lessons = block.lessonIds.map((id) => mod.lessons.find((lesson) => lesson.id === id)).filter((lesson): lesson is Lesson => !!lesson);
            const complete = lessons.length > 0 && lessons.every((lesson) => progress.lessonsDone[lesson.id]);
            const passed = isBlockPassed(block, progress);
            const result = progress.blockExamScores[block.id];
            const planned = block.status === "planned";
            const locked = planned || !previousPassed;

            return (
              <section key={block.id} className={`overflow-hidden rounded-2xl border ${passed ? "border-emerald-500/50" : dark ? "border-slate-700" : "border-slate-200"}`}>
                <header className={`p-4 ${dark ? "bg-slate-800/70" : "bg-white"}`}>
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${passed ? "bg-emerald-500 text-white" : locked ? "bg-slate-700 text-slate-400" : "bg-amber-400 text-slate-950"}`}>
                      {passed ? <ShieldCheck size={20} /> : locked ? <Lock size={18} /> : block.num}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Bloc {block.num} · {block.chapterCount} chapitres</div>
                      <h3 className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>{block.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">{block.objective}</p>
                    </div>
                  </div>
                  {planned && <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500"><Construction size={15} /> Contenu prévu dans une prochaine livraison</div>}
                  {!planned && <div className="mt-3"><ProgressBar value={lessons.filter((lesson) => progress.lessonsDone[lesson.id]).length} max={lessons.length} tone={passed ? "emerald" : "amber"} /></div>}
                </header>

                {!locked && (
                  <div className={`space-y-3 border-t p-3 ${dark ? "border-slate-700 bg-slate-950/30" : "border-slate-200 bg-slate-50"}`}>
                    {renderLessons(lessons)}
                    {block.exam && (
                      <button
                        type="button"
                        disabled={!complete}
                        onClick={() => onOpenBlockExam(block)}
                        className={`flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left ${complete ? passed ? "border-emerald-500 bg-emerald-500/10" : "border-amber-400 bg-amber-400/10" : "border-slate-700 opacity-50"}`}
                      >
                        <ClipboardCheck className={passed ? "text-emerald-500" : "text-amber-400"} size={24} />
                        <div className="flex-1">
                          <div className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>Examen du bloc</div>
                          <div className="text-xs text-slate-400">
                            {!complete ? "Termine les 8 chapitres pour le débloquer" : result ? `Meilleur résultat : ${result.correctCount}/${result.total} · seuil ${block.exam.passPercent} %` : `${block.exam.questionIds.length} questions · seuil ${block.exam.passPercent} %`}
                          </div>
                        </div>
                        {passed ? <CheckCircle2 className="text-emerald-500" size={20} /> : complete ? <ChevronRight className="text-slate-400" size={20} /> : <Lock className="text-slate-500" size={18} />}
                      </button>
                    )}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
