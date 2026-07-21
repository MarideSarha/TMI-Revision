import { Check } from "lucide-react";
import type { LessonStage } from "../../types";

const STEPS = [
  { id: "read", label: "Comprendre" },
  { id: "checkpoint", label: "Vérifier" },
  { id: "quiz", label: "Quiz" },
  { id: "exercice", label: "Pratiquer" },
] as const;

interface LessonStepperProps {
  stage: LessonStage;
  dark: boolean;
}

export function LessonStepper({ stage, dark }: LessonStepperProps) {
  const currentIndex = stage === "done" ? STEPS.length : STEPS.findIndex((step) => step.id === stage);

  return (
    <ol aria-label="Étapes de la leçon" className="grid grid-cols-4 gap-1">
      {STEPS.map((step, index) => {
        const complete = index < currentIndex || stage === "done";
        const active = index === currentIndex;

        return (
          <li key={step.id} className="min-w-0 text-center">
            <div className="flex items-center" aria-current={active ? "step" : undefined}>
              <span className={`h-px flex-1 ${index === 0 ? "bg-transparent" : complete || active ? "bg-amber-400" : dark ? "bg-slate-700" : "bg-slate-300"}`} />
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${complete ? "border-emerald-500 bg-emerald-500 text-white" : active ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-700 text-slate-500" : "border-slate-300 text-slate-400"}`}>
                {complete ? <Check size={14} /> : index + 1}
              </span>
              <span className={`h-px flex-1 ${index === STEPS.length - 1 ? "bg-transparent" : complete ? "bg-amber-400" : dark ? "bg-slate-700" : "bg-slate-300"}`} />
            </div>
            <span className={`mt-1 block truncate text-[10px] font-semibold ${active ? "text-amber-400" : complete ? "text-emerald-500" : "text-slate-500"}`}>
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
