import { useState } from "react";
import { BookOpen, Home, ListChecks, Loader2, MessageCircle, Moon, ShieldAlert, Sun, Wrench } from "lucide-react";
import { HazardStripe, ModulePlate } from "./components/ui";
import { MODULES } from "./data";
import { BlockExamView, CoachTMI, Dashboard, ExamMode, LessonView, ModuleView, PanneSimulator, ProgressionView } from "./features";
import { useProgress } from "./hooks";
import type { AppView, Theme, ViewData } from "./types";

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
] as const;

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [view, setView] = useState<AppView>("dashboard");
  const [viewData, setViewData] = useState<ViewData>({});
  const { progress, ready, handleLessonDone, handlePanneScore, handleExamFinish, handleBlockExamFinish } = useProgress();

  const dark = theme === "dark";

  function navigate(nextView: AppView, data: ViewData = {}) {
    setView(nextView);
    setViewData(data);
    window.scrollTo({ top: 0, behavior: "auto" });
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
      <header className={`tmi-safe-top sticky top-0 z-20 border-b ${dark ? "bg-slate-950/95 border-slate-800" : "bg-slate-50/95 border-slate-200"} backdrop-blur`}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center">
              <Wrench size={18} className="text-slate-900" aria-hidden="true" />
            </div>
            <div>
              <div className="font-bold leading-tight tracking-tight">TMI RÉVISION</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Titre Pro Maintenance Industrielle</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setTheme(dark ? "light" : "dark")}
            aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
            title={dark ? "Activer le mode clair" : "Activer le mode sombre"}
            className={`w-11 h-11 shrink-0 rounded-lg flex items-center justify-center border ${dark ? "border-slate-700 text-amber-400" : "border-slate-300 text-slate-600"}`}
          >
            {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </div>
        <HazardStripe />
      </header>

      <main id="contenu-principal" className="max-w-2xl mx-auto px-4 py-5">
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
          <ModuleView
            mod={viewData.mod}
            progress={progress}
            dark={dark}
            onBack={() => navigate("modules")}
            onOpenLesson={(lesson) => navigate("lesson", { lesson, mod: viewData.mod })}
            onOpenBlockExam={(block) => navigate("blockExam", { block, mod: viewData.mod })}
          />
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

        {view === "blockExam" && viewData.block && viewData.mod && (
          <BlockExamView
            block={viewData.block}
            mod={viewData.mod}
            progress={progress}
            dark={dark}
            onBack={() => navigate("module", { mod: viewData.mod })}
            onReviewLesson={(lessonId) => {
              const lesson = viewData.mod?.lessons.find((item) => item.id === lessonId);
              if (lesson) navigate("lesson", { lesson, mod: viewData.mod });
            }}
            onFinish={handleBlockExamFinish}
          />
        )}

        {view === "pannes" && <PanneSimulator progress={progress} dark={dark} onScore={handlePanneScore} />}

        {view === "exam" && <ExamMode dark={dark} onFinish={handleExamFinish} />}

        {view === "progression" && <ProgressionView progress={progress} dark={dark} />}

        {view === "coach" && <CoachTMI dark={dark} />}
      </main>

      <nav aria-label="Navigation principale" className={`tmi-safe-bottom fixed bottom-0 left-0 right-0 z-20 border-t ${dark ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-slate-200"} backdrop-blur`}>
        <div className="max-w-2xl mx-auto grid grid-cols-5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = view === item.id || (item.id === "modules" && (view === "module" || view === "lesson" || view === "blockExam"));
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-semibold ${active ? "text-amber-400" : "text-slate-400"}`}
              >
                <Icon size={20} aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
