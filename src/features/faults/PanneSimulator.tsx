import { useState } from "react";
import { ArrowLeft, ChevronRight, ShieldAlert } from "lucide-react";
import { PANNES } from "../../data";
import type { FaultScenario, Progress } from "../../types";

/* ---------------------------- PANNE SIMULATOR ---------------------------- */

interface PanneCardProps {
  panne: FaultScenario;
  dark: boolean;
  onFinish: (score: number, total: number) => void;
}

interface PanneSimulatorProps {
  progress: Progress;
  dark: boolean;
  onScore: (panneId: string, score: number, total: number) => void;
}

function PanneCard({ panne, dark, onFinish }: PanneCardProps) {
  const [answers, setAnswers] = useState<Array<number | null>>(Array(panne.steps.length).fill(null));
  const [revealed, setRevealed] = useState(false);

  function submit() {
    if (answers.some((a) => a === null)) return;
    setRevealed(true);
    const score = answers.filter((a, i) => a === panne.steps[i].correct).length;
    onFinish(score, panne.steps.length);
  }

  const Icon = panne.icon;

  return (
    <div className="space-y-4">
      <div className={`rounded-xl p-4 border-2 border-red-400/50 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
        <div className="flex items-center gap-2 mb-2">
          <Icon size={20} className="text-red-400" />
          <h3 className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>{panne.title}</h3>
        </div>
        <p className={`text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}>{panne.symptomes}</p>
      </div>

      {panne.steps.map((step, si) => (
        <div key={si} className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
          <p className={`text-sm font-semibold mb-2 ${dark ? "text-white" : "text-slate-900"}`}>{si + 1}. {step.label}</p>
          <div className="space-y-2">
            {step.options.map((opt, oi) => {
              let cls = dark ? "border-slate-600" : "border-slate-300";
              if (revealed) {
                if (oi === step.correct) cls = "border-emerald-500 bg-emerald-500/10";
                else if (oi === answers[si]) cls = "border-red-500 bg-red-500/10";
                else cls = "opacity-40 " + cls;
              } else if (answers[si] === oi) {
                cls = "border-amber-400 bg-amber-400/10";
              }
              return (
                <button
                  key={oi}
                  disabled={revealed}
                  onClick={() => {
                    const next = [...answers];
                    next[si] = oi;
                    setAnswers(next);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg border-2 text-sm transition-colors ${cls}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!revealed ? (
        <button
          onClick={submit}
          disabled={answers.some((a) => a === null)}
          className="w-full py-3 rounded-lg bg-amber-400 text-slate-900 font-bold disabled:opacity-40"
        >
          Voir la correction
        </button>
      ) : (
        <div className={`rounded-xl p-4 border-2 border-emerald-500/50 ${dark ? "bg-emerald-500/10" : "bg-emerald-50"}`}>
          <h4 className="font-semibold text-emerald-500 text-sm uppercase tracking-wide mb-2">Correction complète</h4>
          <p className={`text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}>{panne.correction}</p>
          <p className="text-sm mt-2 font-semibold text-slate-400">
            Score : {answers.filter((a, i) => a === panne.steps[i].correct).length} / {panne.steps.length}
          </p>
        </div>
      )}
    </div>
  );
}

export function PanneSimulator({ progress, dark, onScore }: PanneSimulatorProps) {
  const [current, setCurrent] = useState<string | null>(null);

  if (current) {
    const panne = PANNES.find((p) => p.id === current)!;
    return (
      <div className="space-y-4 pb-24">
        <button onClick={() => setCurrent(null)} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
          <ArrowLeft size={16} /> Retour aux scénarios
        </button>
        <PanneCard
          panne={panne}
          dark={dark}
          onFinish={(score, total) => onScore(panne.id, score, total)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-24">
      <div>
        <h2 className={`text-2xl font-bold flex items-center gap-2 ${dark ? "text-white" : "text-slate-900"}`}>
          <ShieldAlert className="text-red-400" /> Simulateur de pannes
        </h2>
        <p className="text-sm text-slate-400 mt-1">[+] Complément pédagogique — 10 scénarios réalistes. La sécurité passe toujours avant la réparation.</p>
      </div>
      <div className="grid gap-3">
        {PANNES.map((p) => {
          const done = progress.panneScores[p.id];
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              onClick={() => setCurrent(p.id)}
              className={`rounded-xl border p-4 flex items-center gap-3 text-left ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} hover:border-red-400`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${done ? "bg-emerald-500" : "bg-red-400/20"}`}>
                <Icon size={18} className={done ? "text-white" : "text-red-400"} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{p.title}</div>
                {done && <div className="text-xs text-emerald-500">Résolu : {done.score}/{done.total}</div>}
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
