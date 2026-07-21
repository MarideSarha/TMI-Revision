import { Award, BookOpen, CheckCircle2, Flame, TrendingUp } from "lucide-react";
import { StatTile } from "../../components/ui";
import { BADGE_DEFS, MODULES } from "../../data";
import { levelFromXp, xpForNextLevel } from "../../lib/progress";
import type { Progress } from "../../types";

/* ---------------------------- PROGRESSION VIEW ---------------------------- */

interface ProgressionViewProps {
  progress: Progress;
  dark: boolean;
}

export function ProgressionView({ progress, dark }: ProgressionViewProps) {
  const lvl = levelFromXp(progress.xp);
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = Object.keys(progress.lessonsDone).length;
  const totalCorrect = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
  const totalAnswered = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.length, 0);

  // weak points: lessons with < 60% success
  const weak: Array<{ title: string; rate: number }> = [];
  MODULES.forEach((m) => m.lessons.forEach((l) => {
    const arr = progress.quizAnswers[l.id];
    if (arr && arr.length) {
      const rate = arr.filter(Boolean).length / arr.length;
      if (rate < 0.6) weak.push({ title: l.title, rate });
    }
  }));

  return (
    <div className="space-y-5 pb-24">
      <h2 className={`text-2xl font-bold flex items-center gap-2 ${dark ? "text-white" : "text-slate-900"}`}>
        <TrendingUp className="text-amber-400" /> Ma progression
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <StatTile icon={Award} label="Niveau" value={lvl} sub={`${progress.xp} / ${xpForNextLevel(progress.xp)} XP`} dark={dark} />
        <StatTile icon={Flame} label="Série" value={`${progress.streak} j`} dark={dark} />
        <StatTile icon={BookOpen} label="Leçons" value={`${doneLessons}/${totalLessons}`} dark={dark} />
        <StatTile icon={CheckCircle2} label="Bonnes réponses" value={totalAnswered ? `${totalCorrect}/${totalAnswered}` : "0"} dark={dark} />
      </div>

      <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
        <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-3">Points faibles à retravailler</h3>
        {weak.length === 0 ? (
          <p className="text-sm text-slate-400">Aucun point faible détecté pour le moment — continuez comme ça !</p>
        ) : (
          <ul className="space-y-2">
            {weak.map((w, i) => (
              <li key={i} className="flex items-center justify-between text-sm">
                <span className={dark ? "text-slate-200" : "text-slate-700"}>{w.title}</span>
                <span className="text-red-400 font-mono">{Math.round(w.rate * 100)}%</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
        <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-3">Badges</h3>
        <div className="grid grid-cols-3 gap-3">
          {BADGE_DEFS.map((b) => {
            const earned = progress.badges.includes(b.id);
            const Icon = b.icon;
            return (
              <div key={b.id} className={`rounded-lg p-2 flex flex-col items-center text-center gap-1 border ${earned ? "border-amber-400 bg-amber-400/10" : dark ? "border-slate-700 opacity-40" : "border-slate-200 opacity-40"}`}>
                <Icon size={20} className={earned ? "text-amber-400" : "text-slate-400"} />
                <span className={`text-[10px] font-semibold leading-tight ${dark ? "text-white" : "text-slate-900"}`}>{b.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
        <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-3">Historique récent</h3>
        {progress.history.length === 0 ? (
          <p className="text-sm text-slate-400">Aucune activité enregistrée pour l'instant.</p>
        ) : (
          <ul className="space-y-1.5 max-h-48 overflow-y-auto">
            {progress.history.slice().reverse().slice(0, 12).map((h, i) => (
              <li key={i} className="text-xs text-slate-400 flex justify-between">
                <span>{h.label}</span>
                <span className="font-mono">{h.date}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
