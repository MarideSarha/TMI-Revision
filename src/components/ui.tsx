import { ChevronRight } from "lucide-react";

export function HazardStripe({ className = "" }) {
  return (
    <div
      className={`h-2 w-full ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #f5b400 0px, #f5b400 14px, #14151a 14px, #14151a 28px)",
      }}
    />
  );
}

export function ProgressBar({ value, max, tone = "amber" }) {
  const pct = Math.min(100, Math.round((value / Math.max(1, max)) * 100));
  const toneMap = {
    amber: "bg-amber-400",
    sky: "bg-sky-400",
    violet: "bg-violet-400",
    emerald: "bg-emerald-400",
  };

  return (
    <div className="w-full h-2.5 rounded-full bg-slate-700/60 overflow-hidden">
      <div
        className={`h-full ${toneMap[tone] || toneMap.amber} transition-all duration-500`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function StatTile({ icon: Icon, label, value, sub, dark }) {
  return (
    <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} flex flex-col gap-1`}>
      <div className="flex items-center gap-2 text-slate-400">
        <Icon size={16} />
        <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <div className={`text-2xl font-bold font-mono ${dark ? "text-white" : "text-slate-900"}`}>{value}</div>
      {sub && <div className="text-xs text-slate-400">{sub}</div>}
    </div>
  );
}

export function ModulePlate({ mod, dark, onClick, completed, total }) {
  const Icon = mod.icon;
  const colorMap = {
    amber: "text-amber-400 border-amber-400/40",
    sky: "text-sky-400 border-sky-400/40",
    violet: "text-violet-400 border-violet-400/40",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl border-2 ${colorMap[mod.color]} ${dark ? "bg-slate-800/60" : "bg-white"} p-4 flex items-center gap-4 hover:scale-[1.01] active:scale-[0.99] transition-transform`}
    >
      <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${dark ? "bg-slate-900" : "bg-slate-100"} border ${colorMap[mod.color]}`}>
        <Icon size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`font-mono text-xs px-1.5 py-0.5 rounded ${dark ? "bg-slate-900 text-slate-400" : "bg-slate-100 text-slate-500"}`}>
            PLAQUE {mod.num.toString().padStart(2, "0")}
          </span>
        </div>
        <div className={`font-bold ${dark ? "text-white" : "text-slate-900"} truncate`}>{mod.title}</div>
        <div className="mt-1">
          <ProgressBar value={completed} max={total} tone={mod.color === "amber" ? "amber" : mod.color === "sky" ? "sky" : "violet"} />
        </div>
        <div className="text-xs text-slate-400 mt-1">{completed}/{total} leçons terminées</div>
      </div>
      <ChevronRight className="text-slate-400 shrink-0" size={20} />
    </button>
  );
}
