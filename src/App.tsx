import { useCallback, useEffect, useState } from "react";
import { BookOpen, Home, ListChecks, Loader2, MessageCircle, Moon, ShieldAlert, Sun, Wrench } from "lucide-react";
import { HazardStripe, ModulePlate } from "./components/ui";
import { MODULES } from "./data";
import { CoachTMI, Dashboard, ExamMode, LessonView, ModuleView, PanneSimulator, ProgressionView } from "./features";
import { loadProgress, saveProgress, todayStr } from "./lib/progress";

/* ============================================================
   TMI RÉVISION — plateforme de préparation au Titre Pro TMI
   Contenu marqué [AFORP] = issu directement du programme officiel
   Contenu marqué [+] = complément pédagogique ajouté pour réviser
   ============================================================ */

/* ---------------------------- APP SHELL ---------------------------- */

const NAV_ITEMS = [
  { id: "dashboard", label: "Accueil", icon: Home },
  { id: "modules", label: "Modules", icon: BookOpen },
  { id: "pannes", label: "Pannes", icon: ShieldAlert },
  { id: "exam", label: "Quiz", icon: ListChecks },
  { id: "coach", label: "Coach", icon: MessageCircle },
];

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [view, setView] = useState("dashboard");
  const [viewData, setViewData] = useState({});
  const [progress, setProgress] = useState(null);
  const [ready, setReady] = useState(false);

  const dark = theme === "dark";

  useEffect(() => {
    (async () => {
      const p = await loadProgress();
      const today = todayStr();
      if (p.lastVisit !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        p.streak = p.lastVisit === yesterday ? p.streak + 1 : p.lastVisit ? 1 : 1;
        p.lastVisit = today;
      }
      setProgress(p);
      setReady(true);
    })();
  }, []);

  const persist = useCallback((next) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  function addHistory(p, label) {
    p.history = [...p.history, { label, date: new Date().toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) }];
  }

  function checkBadges(p) {
    const badges = new Set(p.badges);
    if (Object.keys(p.lessonsDone).length >= 1) badges.add("first_lesson");
    MODULES.forEach((m, i) => {
      if (m.lessons.every((l) => p.lessonsDone[l.id])) badges.add(["module_1", "module_2", "module_3"][i]);
    });
    const panneCount = Object.keys(p.panneScores).length;
    if (panneCount >= 5) badges.add("detective_5");
    if (panneCount >= 10) badges.add("detective_10");
    if (p.streak >= 3) badges.add("streak_3");
    if (p.streak >= 7) badges.add("streak_7");
    const totalCorrect = Object.values(p.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
    if (totalCorrect >= 50) badges.add("fifty_correct");
    p.badges = Array.from(badges);
  }

  function handleLessonDone(lessonId, res) {
    const next = { ...progress, lessonsDone: { ...progress.lessonsDone }, quizAnswers: { ...progress.quizAnswers } };
    next.lessonsDone[lessonId] = true;
    next.quizAnswers[lessonId] = Object.keys(res.answers).map((k) => res.answers[k]);
    next.xp += 20 + res.correctCount * 10;
    addHistory(next, `Leçon terminée (${res.correctCount}/${res.total})`);
    checkBadges(next);
    persist(next);
  }

  function handlePanneScore(panneId, score, total) {
    const next = { ...progress, panneScores: { ...progress.panneScores } };
    next.panneScores[panneId] = { score, total };
    next.xp += 15 + score * 5;
    addHistory(next, `Panne résolue : ${score}/${total}`);
    checkBadges(next);
    persist(next);
  }

  function handleExamFinish(res) {
    const next = { ...progress };
    next.xp += res.correctCount * 8;
    addHistory(next, `Quiz terminé (${res.correctCount}/${res.total})`);
    checkBadges(next);
    persist(next);
  }

  function navigate(nextView, data = {}) {
    setView(nextView);
    setViewData(data);
  }

  if (!ready || !progress) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader2 className="animate-spin text-amber-400" size={32} />
      </div>
    );
  }

  const bg = dark ? "bg-slate-950" : "bg-slate-50";
  const text = dark ? "text-slate-100" : "text-slate-900";

  return (
    <div className={`min-h-screen ${bg} ${text} font-sans`}>
      <header className={`sticky top-0 z-20 border-b ${dark ? "bg-slate-950/95 border-slate-800" : "bg-slate-50/95 border-slate-200"} backdrop-blur`}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center">
              <Wrench size={18} className="text-slate-900" />
            </div>
            <div>
              <div className="font-bold leading-tight tracking-tight">TMI RÉVISION</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Titre Pro Maintenance Industrielle</div>
            </div>
          </div>
          <button
            onClick={() => setTheme(dark ? "light" : "dark")}
            className={`w-9 h-9 rounded-lg flex items-center justify-center border ${dark ? "border-slate-700 text-amber-400" : "border-slate-300 text-slate-600"}`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <HazardStripe />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5">
        {view === "dashboard" && <Dashboard progress={progress} dark={dark} onNavigate={navigate} />}

        {view === "modules" && (
          <div className="space-y-3 pb-24">
            <h2 className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>Programme de révision</h2>
            <p className="text-xs text-slate-400 -mt-2">Contenu basé sur le programme officiel AFORP, complété pour la révision (voir mention sous chaque module).</p>
            {MODULES.map((m) => (
              <ModulePlate key={m.id} mod={m} dark={dark} completed={m.lessons.filter((l) => progress.lessonsDone[l.id]).length} total={m.lessons.length} onClick={() => navigate("module", { mod: m })} />
            ))}
          </div>
        )}

        {view === "module" && viewData.mod && (
          <ModuleView mod={viewData.mod} progress={progress} dark={dark} onBack={() => navigate("modules")} onOpenLesson={(lesson) => navigate("lesson", { lesson, mod: viewData.mod })} />
        )}

        {view === "lesson" && viewData.lesson && (
          <LessonView
            lesson={viewData.lesson}
            mod={viewData.mod}
            dark={dark}
            progress={progress}
            onBack={() => navigate("module", { mod: viewData.mod })}
            onDone={handleLessonDone}
          />
        )}

        {view === "pannes" && <PanneSimulator progress={progress} dark={dark} onScore={handlePanneScore} />}

        {view === "exam" && <ExamMode dark={dark} onFinish={handleExamFinish} />}

        {view === "progression" && <ProgressionView progress={progress} dark={dark} />}

        {view === "coach" && <CoachTMI dark={dark} />}
      </main>

      <nav className={`fixed bottom-0 left-0 right-0 z-20 border-t ${dark ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-slate-200"} backdrop-blur`}>
        <div className="max-w-2xl mx-auto grid grid-cols-5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = view === item.id || (item.id === "modules" && (view === "module" || view === "lesson"));
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-semibold ${active ? "text-amber-400" : "text-slate-400"}`}
              >
                <Icon size={20} />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
