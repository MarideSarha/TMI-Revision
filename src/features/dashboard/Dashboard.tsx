import { AlertTriangle, Award, BookOpen, ChevronRight, Flame, GraduationCap, ListChecks, ShieldAlert, Target, TrendingUp } from "lucide-react";
import { ModulePlate, ProgressBar, StatTile } from "../../components/ui";
import { MODULES, PANNES, QUESTIONS } from "../../data";
import { levelFromXp } from "../../lib/progress";
import type { Lesson, Navigate, Progress, TrainingModule } from "../../types";

/* ---------------------------- DASHBOARD ---------------------------- */

interface DashboardProps {
  progress: Progress;
  dark: boolean;
  onNavigate: Navigate;
}

export function Dashboard({ progress, dark, onNavigate }: DashboardProps) {
  const lvl = levelFromXp(progress.xp);
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = Object.keys(progress.lessonsDone).length;
  const totalCorrect = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
  const totalAnswered = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.length, 0);
  const successRate = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : null;

  const weak: string[] = [];
  MODULES.forEach((m) => m.lessons.forEach((l) => {
    const arr = progress.quizAnswers[l.id];
    if (arr && arr.length) {
      const rate = arr.filter(Boolean).length / arr.length;
      if (rate < 0.6) weak.push(l.title);
    }
  }));

  const start = new Date();
  const target = new Date("2026-09-02T00:00:00");
  const daysLeft = Math.max(0, Math.ceil((target.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));

  // find next lesson to continue
  let nextLesson: Lesson | null = null;
  let nextMod: TrainingModule | null = null;
  for (const m of MODULES) {
    for (const l of m.lessons) {
      if (!progress.lessonsDone[l.id]) { nextLesson = l; nextMod = m; break; }
    }
    if (nextLesson) break;
  }

  const dashboardActions = [
    {
      id: "modules",
      label: "Cours",
      description: `${totalLessons} leçons progressives`,
      icon: BookOpen,
      tone: "text-sky-400",
      surface: dark ? "hover:border-sky-400/60" : "hover:border-sky-400",
    },
    {
      id: "exam",
      label: "Quiz",
      description: `${Object.keys(QUESTIONS).length} questions et examens`,
      icon: ListChecks,
      tone: "text-violet-400",
      surface: dark ? "hover:border-violet-400/60" : "hover:border-violet-400",
    },
    {
      id: "pannes",
      label: "Simulateur",
      description: `${PANNES.length} diagnostics de panne`,
      icon: ShieldAlert,
      tone: "text-red-400",
      surface: dark ? "hover:border-red-400/60" : "hover:border-red-400",
    },
    {
      id: "progression",
      label: "Progression",
      description: "Résultats, XP et badges",
      icon: TrendingUp,
      tone: "text-emerald-400",
      surface: dark ? "hover:border-emerald-400/60" : "hover:border-emerald-400",
    },
  ] as const;

  return (
    <div className="space-y-5 pb-24">
      <div>
        <p className="text-sm text-slate-400">Objectif rentrée</p>
        <div className={`flex items-baseline gap-2`}>
          <h1 className={`text-3xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>J-{daysLeft}</h1>
          <span className="text-sm text-slate-400">avant le 2 septembre 2026</span>
        </div>
        <ProgressBar value={100 - daysLeft > 0 ? 100 - daysLeft : 2} max={100} tone="amber" />
      </div>

      <button onClick={() => onNavigate("progression")} className="grid grid-cols-2 gap-3 text-left w-full">
        <StatTile icon={Award} label="Niveau" value={lvl} sub={`${progress.xp} XP`} dark={dark} />
        <StatTile icon={Flame} label="Série de révision" value={`${progress.streak} j`} dark={dark} />
        <StatTile icon={BookOpen} label="Cours terminés" value={`${doneLessons}/${totalLessons}`} dark={dark} />
        <StatTile icon={Target} label="Résultat quiz" value={successRate !== null ? `${successRate}%` : "—"} dark={dark} />
      </button>

      {weak.length > 0 && (
        <div className={`rounded-xl p-4 border-2 border-red-400/40 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
          <h3 className="font-semibold text-red-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
            <AlertTriangle size={14} /> Points faibles
          </h3>
          <ul className="text-sm space-y-1">
            {weak.slice(0, 3).map((w, i) => (
              <li key={i} className={dark ? "text-slate-200" : "text-slate-700"}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => (nextLesson ? onNavigate("lesson", { lesson: nextLesson, mod: nextMod }) : onNavigate("modules"))}
        className="w-full rounded-xl bg-amber-400 text-slate-900 p-4 flex items-center justify-between font-bold shadow-lg shadow-amber-400/20"
      >
        <span className="flex items-center gap-2">
          <GraduationCap size={20} />
          {nextLesson ? `Continuer : ${nextLesson.title}` : "Voir le programme complet"}
        </span>
        <ChevronRight size={20} />
      </button>

      <section aria-labelledby="quick-access-title">
        <div className="mb-2 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">Espace de travail</p>
            <h2 id="quick-access-title" className={`text-lg font-bold ${dark ? "text-white" : "text-slate-900"}`}>
              Que veux-tu travailler ?
            </h2>
          </div>
          <span className="text-xs text-slate-400">4 activités</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {dashboardActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onNavigate(action.id)}
                className={`group min-h-32 rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${action.surface} ${dark ? "border-slate-700 bg-slate-800/70 hover:bg-slate-800" : "border-slate-200 bg-white hover:bg-slate-50"}`}
              >
                <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-slate-900" : "bg-slate-100"}`}>
                  <Icon className={action.tone} size={21} />
                </span>
                <span className={`block text-sm font-bold ${dark ? "text-white" : "text-slate-900"}`}>{action.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-slate-400">{action.description}</span>
                <ChevronRight className="mt-3 text-slate-500 transition-transform group-hover:translate-x-1" size={16} />
              </button>
            );
          })}
        </div>
      </section>

      <div>
        <h3 className={`text-sm uppercase tracking-wide font-semibold text-slate-400 mb-2`}>Programme de révision</h3>
        <div className="space-y-3">
          {MODULES.map((m) => (
            <ModulePlate
              key={m.id}
              mod={m}
              dark={dark}
              completed={m.lessons.filter((l) => progress.lessonsDone[l.id]).length}
              total={m.lessons.length}
              onClick={() => onNavigate("module", { mod: m })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
