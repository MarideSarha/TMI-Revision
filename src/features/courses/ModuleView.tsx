import { ArrowLeft, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { ProgressBar } from "../../components/ui";

/* ---------------------------- MODULE VIEW ---------------------------- */

export function ModuleView({ mod, progress, dark, onOpenLesson, onBack }) {
  const doneCount = mod.lessons.filter((l) => progress.lessonsDone[l.id]).length;
  return (
    <div className="space-y-4 pb-24">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au programme
      </button>
      <div>
        <div className="text-xs text-slate-400 font-mono">{mod.source}</div>
        <h2 className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>{mod.title}</h2>
        <div className="mt-2"><ProgressBar value={doneCount} max={mod.lessons.length} tone={mod.color === "amber" ? "amber" : mod.color === "sky" ? "sky" : "violet"} /></div>
      </div>
      <div className="space-y-3">
        {mod.lessons.map((lesson, i) => {
          const done = !!progress.lessonsDone[lesson.id];
          const locked = i > 0 && !progress.lessonsDone[mod.lessons[i - 1].id];
          return (
            <button
              key={lesson.id}
              disabled={locked}
              onClick={() => onOpenLesson(lesson)}
              className={`w-full text-left rounded-xl border p-4 flex items-center gap-3 ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} ${locked ? "opacity-50" : "hover:border-amber-400"}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-emerald-500" : locked ? "bg-slate-600" : "bg-amber-400"}`}>
                {done ? <CheckCircle2 size={18} className="text-white" /> : locked ? <Lock size={16} className="text-slate-300" /> : <span className="font-bold text-slate-900">{i + 1}</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{lesson.title}</div>
                <div className="text-xs text-slate-400">{lesson.quizIds.length} questions · exercice pratique</div>
              </div>
              {!locked && <ChevronRight size={18} className="text-slate-400 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
