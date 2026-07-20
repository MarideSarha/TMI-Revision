import { useState, useEffect, useRef, useCallback } from "react";
import {
  Wrench, Cog, Zap, Shield, Gauge, BookOpen, AlertTriangle, CheckCircle2, XCircle,
  Award, Flame, MessageCircle, Send, Moon, Sun, ChevronRight, ChevronLeft, Home,
  GraduationCap, ListChecks, Activity, HardHat, Wind, Droplet, Cpu, ClipboardList,
  Target, TrendingUp, Lock, RotateCcw, Loader2, Sparkles, Calendar, ArrowLeft,
  Settings2, Timer, PenTool, BarChart3, ShieldAlert, PlugZap, Waves
} from "lucide-react";
import {
  levelFromXp,
  loadProgress,
  saveProgress,
  todayStr,
  xpForNextLevel,
} from "./lib/progress";
import { HazardStripe, ModulePlate, ProgressBar, StatTile } from "./components/ui";
import { BADGE_DEFS, MODULES, PANNES, QUESTIONS } from "./data";

/* ============================================================
   TMI RÉVISION — plateforme de préparation au Titre Pro TMI
   Contenu marqué [AFORP] = issu directement du programme officiel
   Contenu marqué [+] = complément pédagogique ajouté pour réviser
   ============================================================ */

/* ---------------------------- SVG SCHEMAS ---------------------------- */

function LessonSchema({ type, dark }) {
  const stroke = dark ? "#94a3b8" : "#475569";
  const accent = "#f5b400";
  const box = dark ? "#1e293b" : "#f1f5f9";

  if (type === "orgchart") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-32">
        <rect x="110" y="6" width="100" height="28" rx="4" fill={box} stroke={stroke} />
        <text x="160" y="24" textAnchor="middle" fontSize="10" fill={stroke}>Direction</text>
        <line x1="160" y1="34" x2="160" y2="55" stroke={stroke} />
        <line x1="45" y1="55" x2="275" y2="55" stroke={stroke} />
        {[
          [45, "Production"],
          [160, "Maintenance"],
          [275, "Qualité"],
        ].map(([x, label], i) => (
          <g key={i}>
            <line x1={x} y1="55" x2={x} y2="70" stroke={stroke} />
            <rect x={x - 48} y="70" width="96" height="28" rx="4" fill={label === "Maintenance" ? accent : box} stroke={stroke} />
            <text x={x} y="88" textAnchor="middle" fontSize="10" fill={label === "Maintenance" ? "#14151a" : stroke} fontWeight={label === "Maintenance" ? "bold" : "normal"}>{label}</text>
          </g>
        ))}
      </svg>
    );
  }
  if (type === "maintenance-types") {
    return (
      <svg viewBox="0 0 320 110" className="w-full h-28">
        {["Corrective", "Préventive sys.", "Préventive cond.", "Améliorative"].map((t, i) => (
          <g key={i}>
            <rect x={10 + i * 78} y="30" width="68" height="50" rx="6" fill={box} stroke={i === 3 ? accent : stroke} strokeWidth={i === 3 ? 2 : 1} />
            <text x={10 + i * 78 + 34} y="58" textAnchor="middle" fontSize="9" fill={stroke}>{t}</text>
          </g>
        ))}
        <line x1="10" y1="20" x2="310" y2="20" stroke={stroke} markerEnd="url(#arrow)" />
        <text x="160" y="12" textAnchor="middle" fontSize="9" fill={stroke}>Panne présente → absente</text>
      </svg>
    );
  }
  if (type === "consignation-steps") {
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        {["Séparer", "Condamner", "Identifier", "Vérifier (VAT)"].map((t, i) => (
          <g key={i}>
            <circle cx={45 + i * 80} cy="35" r="24" fill={i === 3 ? accent : box} stroke={stroke} />
            <text x={45 + i * 80} y="39" textAnchor="middle" fontSize="8" fill={i === 3 ? "#14151a" : stroke}>{i + 1}</text>
            <text x={45 + i * 80} y="72" textAnchor="middle" fontSize="9" fill={stroke}>{t}</text>
            {i < 3 && <line x1={45 + i * 80 + 26} y1="35" x2={45 + (i + 1) * 80 - 26} y2="35" stroke={stroke} />}
          </g>
        ))}
      </svg>
    );
  }
  if (type === "percentage-bar") {
    return (
      <svg viewBox="0 0 320 60" className="w-full h-16">
        <rect x="10" y="20" width="300" height="20" rx="4" fill={box} stroke={stroke} />
        <rect x="10" y="20" width="225" height="20" rx="4" fill={accent} />
        <text x="160" y="15" textAnchor="middle" fontSize="9" fill={stroke}>Disponibilité machine : 75 %</text>
      </svg>
    );
  }
  if (type === "energy-flow") {
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        <rect x="10" y="30" width="90" height="30" rx="4" fill={box} stroke={stroke} />
        <text x="55" y="49" textAnchor="middle" fontSize="9" fill={stroke}>Puissance fournie</text>
        <line x1="100" y1="45" x2="150" y2="45" stroke={stroke} markerEnd="url(#arrow)" />
        <rect x="150" y="15" width="80" height="60" rx="6" fill={accent} />
        <text x="190" y="49" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">Moteur η</text>
        <line x1="230" y1="35" x2="280" y2="35" stroke={stroke} markerEnd="url(#arrow)" />
        <text x="300" y="32" textAnchor="middle" fontSize="8" fill={stroke}>utile</text>
        <line x1="230" y1="60" x2="280" y2="75" stroke={stroke} strokeDasharray="3,2" />
        <text x="298" y="80" textAnchor="middle" fontSize="8" fill={stroke}>pertes</text>
      </svg>
    );
  }
  if (type === "torque-diagram") {
    return (
      <svg viewBox="0 0 320 100" className="w-full h-28">
        <circle cx="160" cy="55" r="6" fill={stroke} />
        <line x1="160" y1="55" x2="260" y2="55" stroke={stroke} strokeWidth="3" />
        <text x="210" y="45" textAnchor="middle" fontSize="9" fill={stroke}>distance d</text>
        <line x1="260" y1="55" x2="260" y2="20" stroke={accent} strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="272" y="35" fontSize="9" fill={accent}>Force F</text>
        <text x="160" y="85" textAnchor="middle" fontSize="9" fill={stroke}>C = F × d</text>
      </svg>
    );
  }
  if (type === "ohm-triangle") {
    return (
      <svg viewBox="0 0 200 130" className="w-full h-32">
        <polygon points="100,15 20,110 180,110" fill={box} stroke={stroke} strokeWidth="2" />
        <line x1="20" y1="80" x2="180" y2="80" stroke={stroke} />
        <line x1="72" y1="80" x2="72" y2="110" stroke={stroke} />
        <text x="100" y="55" textAnchor="middle" fontSize="16" fill={accent} fontWeight="bold">U</text>
        <text x="46" y="100" textAnchor="middle" fontSize="14" fill={stroke}>R</text>
        <text x="126" y="100" textAnchor="middle" fontSize="14" fill={stroke}>I</text>
      </svg>
    );
  }
  if (type === "control-circuit") {
    return (
      <svg viewBox="0 0 320 100" className="w-full h-28">
        {["Disjoncteur", "Contacteur", "Relais th.", "Moteur"].map((t, i) => (
          <g key={i}>
            <rect x={10 + i * 78} y="30" width="66" height="40" rx="4" fill={i === 3 ? accent : box} stroke={stroke} />
            <text x={10 + i * 78 + 33} y="53" textAnchor="middle" fontSize="8" fill={i === 3 ? "#14151a" : stroke}>{t}</text>
            {i < 3 && <line x1={10 + i * 78 + 66} y1="50" x2={10 + (i + 1) * 78} y2="50" stroke={stroke} markerEnd="url(#arrow)" />}
          </g>
        ))}
      </svg>
    );
  }
  if (type === "measurement-tools") {
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        {["Multimètre", "Pince ampère.", "VAT"].map((t, i) => (
          <g key={i}>
            <rect x={20 + i * 100} y="20" width="80" height="45" rx="6" fill={box} stroke={accent} strokeWidth="2" />
            <text x={60 + i * 100} y="47" textAnchor="middle" fontSize="9" fill={stroke}>{t}</text>
          </g>
        ))}
      </svg>
    );
  }
  return null;
}

/* ---------------------------- QUIZ COMPONENT ---------------------------- */

function QuizRunner({ questionIds, onFinish, dark, title }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState({});

  const qid = questionIds[idx];
  const question = QUESTIONS[qid];

  function submit() {
    if (selected === null) return;
    setRevealed(true);
    const isCorrect = selected === question.correct;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setAnswers((a) => ({ ...a, [qid]: isCorrect }));
  }

  function next() {
    if (idx + 1 < questionIds.length) {
      setIdx(idx + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      onFinish({ correctCount, total: questionIds.length, answers });
    }
  }

  return (
    <div className="space-y-4">
      {title && <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{title}</div>}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Question {idx + 1} / {questionIds.length}</span>
        <span className="font-mono">{correctCount} bonne(s) réponse(s)</span>
      </div>
      <ProgressBar value={idx + (revealed ? 1 : 0)} max={questionIds.length} tone="amber" />
      <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
        <p className="font-semibold mb-3">{question.q}</p>
        <div className="space-y-2">
          {question.options.map((opt, i) => {
            let cls = dark ? "border-slate-600 hover:border-slate-400" : "border-slate-300 hover:border-slate-500";
            if (revealed) {
              if (i === question.correct) cls = "border-emerald-500 bg-emerald-500/10";
              else if (i === selected) cls = "border-red-500 bg-red-500/10";
              else cls = dark ? "border-slate-700 opacity-50" : "border-slate-200 opacity-50";
            } else if (selected === i) {
              cls = "border-amber-400 bg-amber-400/10";
            }
            return (
              <button
                key={i}
                disabled={revealed}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-3 py-2.5 rounded-lg border-2 transition-colors flex items-center gap-2 ${cls}`}
              >
                {revealed && i === question.correct && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                {revealed && i === selected && i !== question.correct && <XCircle size={16} className="text-red-500 shrink-0" />}
                <span className="text-sm">{opt}</span>
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className={`mt-3 text-sm rounded-lg p-3 ${dark ? "bg-slate-900/60 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
            <span className="font-semibold">Explication : </span>{question.exp}
          </div>
        )}
      </div>
      <div className="flex justify-end">
        {!revealed ? (
          <button onClick={submit} disabled={selected === null} className="px-5 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-semibold disabled:opacity-40">
            Valider
          </button>
        ) : (
          <button onClick={next} className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold flex items-center gap-1">
            {idx + 1 < questionIds.length ? "Suivant" : "Terminer"} <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------------------- LESSON VIEW ---------------------------- */

function LessonView({ lesson, mod, dark, onBack, onDone, progress }) {
  const [stage, setStage] = useState("read"); // read -> quiz -> exercice -> done
  const done = !!progress.lessonsDone[lesson.id];

  return (
    <div className="space-y-5 pb-24">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au module
      </button>

      <div>
        <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">{mod.title}</div>
        <h2 className={`text-2xl font-bold mt-1 ${dark ? "text-white" : "text-slate-900"}`}>{lesson.title}</h2>
      </div>

      {stage === "read" && (
        <div className="space-y-5">
          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Explication simple</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} leading-relaxed`}>{lesson.simple}</p>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Mots techniques</h3>
            <dl className="space-y-2">
              {lesson.vocab.map(([term, def], i) => (
                <div key={i} className="text-sm">
                  <dt className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{term}</dt>
                  <dd className={`${dark ? "text-slate-400" : "text-slate-600"}`}>{def}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Exemple concret</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} leading-relaxed text-sm`}>{lesson.example}</p>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Schéma</h3>
            <LessonSchema type={lesson.schema} dark={dark} />
          </section>

          <section className={`rounded-xl p-4 border-2 border-amber-400/50 ${dark ? "bg-amber-400/5" : "bg-amber-50"}`}>
            <h3 className="font-semibold text-amber-500 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <ClipboardList size={14} /> À retenir
            </h3>
            <ul className="space-y-1.5">
              {lesson.retenir.map((r, i) => (
                <li key={i} className={`text-sm flex gap-2 ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-amber-400">▸</span>{r}
                </li>
              ))}
            </ul>
          </section>

          <section className={`rounded-xl p-4 border-2 border-red-400/40 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
            <h3 className="font-semibold text-red-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <AlertTriangle size={14} /> Erreurs fréquentes
            </h3>
            <ul className="space-y-1.5">
              {lesson.erreurs.map((r, i) => (
                <li key={i} className={`text-sm flex gap-2 ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-red-400">✕</span>{r}
                </li>
              ))}
            </ul>
          </section>

          <button onClick={() => setStage("quiz")} className="w-full py-3 rounded-lg bg-amber-400 text-slate-900 font-bold">
            Faire le mini-quiz ({lesson.quizIds.length} questions)
          </button>
        </div>
      )}

      {stage === "quiz" && (
        <QuizRunner
          questionIds={lesson.quizIds}
          dark={dark}
          title="Mini-quiz de la leçon"
          onFinish={(res) => {
            onDone(lesson.id, res);
            setStage("exercice");
          }}
        />
      )}

      {stage === "exercice" && (
        <div className="space-y-4">
          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <PenTool size={14} /> Exercice pratique
            </h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} text-sm mb-3`}>{lesson.exercice.enonce}</p>
            <details className="text-sm">
              <summary className="cursor-pointer font-semibold text-amber-400">Voir la correction détaillée</summary>
              <p className={`mt-2 ${dark ? "text-slate-300" : "text-slate-600"}`}>{lesson.exercice.correction}</p>
            </details>
          </section>
          <button onClick={() => setStage("done")} className="w-full py-3 rounded-lg bg-emerald-500 text-white font-bold flex items-center justify-center gap-2">
            <CheckCircle2 size={18} /> Terminer la leçon
          </button>
        </div>
      )}

      {stage === "done" && (
        <div className="text-center py-10 space-y-3">
          <CheckCircle2 size={48} className="mx-auto text-emerald-500" />
          <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>Leçon terminée !</h3>
          <p className="text-slate-400 text-sm">+20 XP ajoutés à votre progression.</p>
          <button onClick={onBack} className="px-6 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-semibold">
            Retour au module
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------------------- MODULE VIEW ---------------------------- */

function ModuleView({ mod, progress, dark, onOpenLesson, onBack }) {
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

/* ---------------------------- PANNE SIMULATOR ---------------------------- */

function PanneCard({ panne, dark, onFinish }) {
  const [answers, setAnswers] = useState(Array(panne.steps.length).fill(null));
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

function PanneSimulator({ progress, dark, onScore }) {
  const [current, setCurrent] = useState(null);

  if (current) {
    const panne = PANNES.find((p) => p.id === current);
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

/* ---------------------------- EXAM MODE ---------------------------- */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ExamMode({ dark, onFinish }) {
  const [mode, setMode] = useState(null);
  const allIds = Object.keys(QUESTIONS);

  if (mode === "quick") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 5)} dark={dark} title="Quiz rapide — 5 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }
  if (mode === "daily") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 10)} dark={dark} title="Quiz quotidien — 10 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }
  if (mode === "exam") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 20)} dark={dark} title="Examen blanc — 20 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }

  const options = [
    { id: "quick", label: "Quiz rapide", desc: "5 questions aléatoires", icon: Zap, time: "2 min" },
    { id: "daily", label: "Quiz quotidien", desc: "10 questions aléatoires", icon: Calendar, time: "5 min" },
    { id: "exam", label: "Examen blanc chronométré", desc: "20 questions, tous modules", icon: Timer, time: "15 min" },
  ];

  return (
    <div className="space-y-4 pb-24">
      <h2 className={`text-2xl font-bold flex items-center gap-2 ${dark ? "text-white" : "text-slate-900"}`}>
        <ListChecks className="text-amber-400" /> Quiz & examens blancs
      </h2>
      <div className="grid gap-3">
        {options.map((o) => {
          const Icon = o.icon;
          return (
            <button key={o.id} onClick={() => setMode(o.id)} className={`rounded-xl border p-4 flex items-center gap-3 text-left ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} hover:border-amber-400`}>
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{o.label}</div>
                <div className="text-xs text-slate-400">{o.desc} · ~{o.time}</div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          );
        })}
      </div>
      <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} text-sm text-slate-400`}>
        Chaque module dispose aussi de son propre mini-quiz, accessible depuis chaque leçon.
      </div>
    </div>
  );
}

/* ---------------------------- PROGRESSION VIEW ---------------------------- */

function ProgressionView({ progress, dark }) {
  const lvl = levelFromXp(progress.xp);
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = Object.keys(progress.lessonsDone).length;
  const totalCorrect = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
  const totalAnswered = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.length, 0);

  // weak points: lessons with < 60% success
  const weak = [];
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

/* ---------------------------- COACH TMI (chat via Claude API) ---------------------------- */

const COACH_SYSTEM_PROMPT = `Tu es "Coach TMI", un formateur virtuel patient, encourageant et exigeant, spécialisé dans la préparation au Titre Professionnel Technicien(ne) de Maintenance Industrielle (niveau 4, RNCP 35191, formation AFORP démarrant en septembre 2026).
Le programme couvre : environnement industriel, mathématiques appliquées, électrotechnique industrielle, mécanique industrielle, pneumatique/hydraulique, automatismes, maintenance corrective/préventive/améliorative, diagnostic de pannes, sécurité industrielle (NF C 18-510), GMAO et communication professionnelle.
Tu t'adresses à un débutant complet. Utilise un vocabulaire simple, des exemples concrets d'usine ou d'entrepôt logistique (convoyeurs, moteurs, capteurs), et explique toujours étape par étape.
Tu peux : répondre aux questions, reformuler un cours plus simplement, poser des questions pour vérifier la compréhension, créer des exercices ou des scénarios de panne personnalisés, analyser des erreurs, préparer une séance de révision minutée, faire réciter une leçon, jouer le rôle d'un responsable maintenance en entreprise pour des mises en situation.
Reste toujours bienveillant mais rigoureux sur la sécurité : rappelle systématiquement que la sécurité passe avant la réparation dès qu'un scénario technique est abordé.
Réponds en français, de façon concise et structurée, avec des listes courtes si utile.`;

function CoachTMI({ dark }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour ! Je suis Coach TMI 👷 Je suis là pour t'accompagner jusqu'à ta rentrée en septembre 2026. Tu peux me poser une question, me demander un exercice personnalisé, une nouvelle panne à diagnostiquer, ou une séance de révision minutée. Par quoi veux-tu commencer ?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  async function send(text) {
    const content = text ?? input;
    if (!content.trim() || loading) return;
    const newMessages = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const endpoint = import.meta.env.VITE_COACH_API_URL;
      let reply = "";
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ system: COACH_SYSTEM_PROMPT, messages: newMessages }),
        });
        if (!res.ok) throw new Error(`Coach API: ${res.status}`);
        const data = await res.json();
        reply = data.reply || data.text || "";
      } else {
        const lower = content.toLowerCase();
        if (lower.includes("ohm")) reply = "La loi d’Ohm relie la tension U, la résistance R et l’intensité I : U = R × I. Exemple : avec 24 V et 12 Ω, I = 24 / 12 = 2 A. À toi : avec 230 V et 50 Ω, quelle intensité obtiens-tu ?";
        else if (lower.includes("panne")) reply = "Mise en situation : un convoyeur ne démarre plus. Sécurité d’abord : sécurise la zone et vérifie l’arrêt d’urgence. Puis contrôle dans cet ordre : alimentation, protections, chaîne de sécurité, capteurs, contacteur, variateur et moteur. Donne-moi tes trois premières vérifications et je corrige ton raisonnement.";
        else if (lower.includes("20 minutes") || lower.includes("séance")) reply = "Séance de 20 minutes : 5 min de rappel sur la sécurité et la consignation, 7 min sur la loi d’Ohm, 5 min de diagnostic d’un convoyeur, puis 3 min de quiz et correction.";
        else reply = "Mode hors ligne actif. Je peux déjà t’aider sur la loi d’Ohm, la sécurité, les calculs et les diagnostics de convoyeur. Pour un coach IA complet, configure VITE_COACH_API_URL vers un serveur sécurisé : aucune clé API ne doit être placée dans le navigateur.";
      }
      setMessages((m) => [...m, { role: "assistant", content: reply || "Je n’ai pas reçu de réponse exploitable." }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "Une erreur est survenue lors de la connexion au Coach. Réessaie dans un instant." }]);
    } finally {
      setLoading(false);
    }
  }

  const quickActions = [
    "Explique-moi la dernière leçon plus simplement",
    "Crée-moi un exercice personnalisé sur l'électricité",
    "Donne-moi une nouvelle panne à diagnostiquer",
    "Prépare-moi une séance de révision de 20 minutes",
    "Fais-moi réciter la loi d'Ohm",
    "Joue le rôle d'un responsable maintenance qui m'accueille",
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      <h2 className={`text-xl font-bold flex items-center gap-2 mb-3 ${dark ? "text-white" : "text-slate-900"}`}>
        <MessageCircle className="text-amber-400" /> Coach TMI
      </h2>
      <div ref={scrollRef} className={`flex-1 overflow-y-auto space-y-3 rounded-xl p-3 border ${dark ? "bg-slate-800/40 border-slate-700" : "bg-white border-slate-200"}`}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-amber-400 text-slate-900" : dark ? "bg-slate-700 text-slate-100" : "bg-slate-100 text-slate-800"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className={`rounded-2xl px-3.5 py-2.5 text-sm flex items-center gap-2 ${dark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-600"}`}>
              <Loader2 size={14} className="animate-spin" /> Coach TMI réfléchit...
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 overflow-x-auto py-2 no-scrollbar">
        {quickActions.map((qa, i) => (
          <button key={i} onClick={() => send(qa)} className={`shrink-0 text-xs px-3 py-1.5 rounded-full border whitespace-nowrap ${dark ? "border-slate-600 text-slate-300 hover:border-amber-400" : "border-slate-300 text-slate-600 hover:border-amber-400"}`}>
            {qa}
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Pose ta question au Coach TMI..."
          className={`flex-1 rounded-lg px-3 py-2.5 text-sm border ${dark ? "bg-slate-800 border-slate-600 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900"}`}
        />
        <button onClick={() => send()} disabled={loading} className="w-11 h-11 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 disabled:opacity-40">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- DASHBOARD ---------------------------- */

function Dashboard({ progress, dark, onNavigate }) {
  const lvl = levelFromXp(progress.xp);
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = Object.keys(progress.lessonsDone).length;
  const totalCorrect = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
  const totalAnswered = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.length, 0);
  const successRate = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : null;

  const weak = [];
  MODULES.forEach((m) => m.lessons.forEach((l) => {
    const arr = progress.quizAnswers[l.id];
    if (arr && arr.length) {
      const rate = arr.filter(Boolean).length / arr.length;
      if (rate < 0.6) weak.push(l.title);
    }
  }));

  const start = new Date();
  const target = new Date("2026-09-02T00:00:00");
  const daysLeft = Math.max(0, Math.ceil((target - start) / (1000 * 60 * 60 * 24)));

  // find next lesson to continue
  let nextLesson = null, nextMod = null;
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
  ];

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
