import { useState } from "react";
import { ArrowLeft, ArrowRight, Lightbulb, Pause, Play, RotateCcw, ShieldCheck, TriangleAlert, Zap } from "lucide-react";
import type { InteractiveSchemaType } from "../../types";

/* ============================================================
   SCHÉMAS PÉDAGOGIQUES INTERACTIFS / ANIMÉS (SVG + CSS + état React)
   Chaque schéma :
   - a un titre, une légende et une explication écrite ;
   - reste compréhensible sans mouvement (repli statique) ;
   - respecte « prefers-reduced-motion » (géré au niveau CSS dans index.css) ;
   - ne transmet jamais une information par la seule couleur (texte + icônes) ;
   - est lisible sur téléphone.
   ============================================================ */

interface FigureProps {
  title: string;
  legend: string;
  explanation: string;
  dark: boolean;
  children: React.ReactNode;
  controls?: React.ReactNode;
}

/** Cadre commun : titre + zone SVG + contrôles + légende + explication. */
function Figure({ title, legend, explanation, dark, children, controls }: FigureProps) {
  return (
    <figure className={`m-0 rounded-xl border-2 p-4 ${dark ? "border-sky-500/35 bg-sky-500/5" : "border-sky-200 bg-sky-50"}`}>
      <figcaption className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-sky-500">
        <Zap size={16} /> {title}
      </figcaption>
      <div className={`rounded-lg border p-2 ${dark ? "border-slate-700 bg-slate-950/50" : "border-slate-200 bg-white"}`}>{children}</div>
      {controls && <div className="mt-3">{controls}</div>}
      <p className={`mt-3 text-xs italic ${dark ? "text-slate-400" : "text-slate-500"}`}>Légende : {legend}</p>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{explanation}</p>
    </figure>
  );
}

/* ---------------------------------------------------------------
   PROTOTYPE 1 — CONSIGNATION ÉLECTRIQUE ÉTAPE PAR ÉTAPE
   4 étapes NF C 18-510 (BT) : séparer, condamner, identifier, VAT.
   --------------------------------------------------------------- */

interface ConsignationStep {
  title: string;
  action: string;
  why: string;
}

const CONSIGNATION_STEPS: ConsignationStep[] = [
  { title: "Séparer", action: "Ouvrir le sectionneur ou le disjoncteur pour couper toutes les sources d'alimentation.", why: "Isoler l'équipement du réseau électrique." },
  { title: "Condamner", action: "Verrouiller l'organe de coupure en position ouverte (cadenas) et poser une pancarte d'interdiction de manœuvre.", why: "Empêcher toute remise sous tension par une autre personne." },
  { title: "Identifier", action: "Repérer précisément l'équipement consigné à l'aide des schémas, des repères et des étiquettes.", why: "Être certain d'intervenir sur le bon ouvrage, pas sur un voisin." },
  { title: "Vérifier l'absence de tension (VAT)", action: "Contrôler l'absence de tension au plus près du point de travail, avec un VAT testé juste avant et juste après la mesure.", why: "Confirmer que l'installation est réellement hors tension avant tout contact." },
];

function ConsignationInteractive({ dark }: { dark: boolean }) {
  // stage 0 = installation encore sous tension ; 1..4 = étape réalisée
  const [stage, setStage] = useState(0);
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const verified = stage >= 4;
  const currentStep = stage >= 1 ? CONSIGNATION_STEPS[stage - 1] : null;

  const statusLabel = verified
    ? "Hors tension vérifiée — intervention autorisée"
    : stage === 0
      ? "Installation sous tension — danger"
      : "Consignation en cours — ne pas intervenir tant que la VAT n'est pas faite";

  return (
    <Figure
      dark={dark}
      title="Consignation : les 4 étapes dans l'ordre"
      legend="Levier = organe de coupure · cadenas = condamnation · étiquette = identification · VAT = vérificateur d'absence de tension."
      explanation="La consignation isole l'équipement de ses sources d'énergie avant intervention. L'ordre est essentiel : tant que la vérification d'absence de tension (VAT) n'a pas confirmé l'absence de tension, l'installation doit être considérée comme dangereuse. En haute tension, une étape supplémentaire de mise à la terre et en court-circuit s'ajoute. Cette animation est pédagogique : la consignation réelle est réalisée selon la procédure de l'entreprise par une personne habilitée."
      controls={
        <div>
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span>Étape {Math.min(stage, 4)}/4</span>
            <span className={verified ? "text-emerald-500" : stage === 0 ? "text-red-400" : "text-amber-400"}>{verified ? "Sécurisé" : stage === 0 ? "Sous tension" : "En cours"}</span>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setStage((s) => Math.max(0, s - 1))}
              disabled={stage === 0}
              className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold disabled:opacity-40 ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}
            >
              <ArrowLeft size={16} /> Précédente
            </button>
            {stage < 4 ? (
              <button type="button" onClick={() => setStage((s) => Math.min(4, s + 1))} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950">
                {stage === 0 ? "Démarrer la consignation" : "Étape suivante"} <ArrowRight size={16} />
              </button>
            ) : (
              <button type="button" onClick={() => setStage(0)} className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
                <RotateCcw size={16} /> Recommencer
              </button>
            )}
          </div>
        </div>
      }
    >
      <svg viewBox="0 0 320 190" className="h-auto w-full" role="img" aria-label={`Étape ${stage} sur 4 de la consignation : ${statusLabel}`}>
        {/* Armoire */}
        <rect x="90" y="18" width="140" height="120" rx="8" fill={box} stroke={stroke} strokeWidth="1.5" />
        <text x="160" y="34" textAnchor="middle" fontSize="9" fill={stroke}>Armoire électrique</text>

        {/* Organe de coupure (levier) : haut = fermé (sous tension), bas = ouvert */}
        <line x1="130" y1="70" x2="130" y2="100" stroke={stroke} strokeWidth="2" />
        <circle cx="130" cy="100" r="4" fill={stroke} />
        <line x1="130" y1="100" x2={stage >= 1 ? "112" : "130"} y2={stage >= 1 ? "112" : "68"} stroke={stage >= 1 ? "#10b981" : "#ef4444"} strokeWidth="4" strokeLinecap="round" />
        <text x="130" y="126" textAnchor="middle" fontSize="8" fill={stroke}>{stage >= 1 ? "Coupé" : "Fermé"}</text>

        {/* Cadenas (condamnation) apparaît à l'étape 2 */}
        {stage >= 2 && (
          <g transform="translate(150,86)">
            <rect x="0" y="6" width="16" height="12" rx="2" fill="#f5b400" stroke={stroke} />
            <path d="M3 6 V3 a5 5 0 0 1 10 0 V6" fill="none" stroke={stroke} strokeWidth="1.5" />
          </g>
        )}

        {/* Étiquette (identification) apparaît à l'étape 3 */}
        {stage >= 3 && (
          <g transform="translate(178,70)">
            <rect x="0" y="0" width="34" height="16" rx="2" fill="#38bdf8" stroke={stroke} />
            <text x="17" y="11" textAnchor="middle" fontSize="7" fill="#0f172a">REPÈRE</text>
          </g>
        )}

        {/* Zone de travail + VAT (étape 4) */}
        <line x1="160" y1="138" x2="160" y2="152" stroke={stroke} strokeWidth="1.5" />
        {stage >= 4 ? (
          <g>
            <rect x="120" y="152" width="80" height="26" rx="4" fill="#10b981" />
            <text x="160" y="169" textAnchor="middle" fontSize="9" fill="#052e16" fontWeight="bold">VAT : 0 V ✓</text>
          </g>
        ) : (
          <g>
            <rect x="120" y="152" width="80" height="26" rx="4" fill="none" stroke={stroke} strokeDasharray="3 3" />
            <text x="160" y="169" textAnchor="middle" fontSize="8" fill={stroke}>VAT à réaliser</text>
          </g>
        )}

        {/* Indicateur d'état énergétique (icône + texte, pas seulement la couleur) */}
        <g transform="translate(238,20)">
          {verified ? (
            <>
              <circle cx="12" cy="12" r="12" fill="#10b981" />
              <path d="M6 12 l4 4 l8 -9" fill="none" stroke="#052e16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r="12" fill={stage === 0 ? "#ef4444" : "#f5b400"} />
              <path d="M13 4 l-6 10 h5 l-2 6 l7 -10 h-5 z" fill="#1f1300" />
            </>
          )}
        </g>
      </svg>

      {/* Détail texte de l'étape courante (accessible, non dépendant de la couleur) */}
      <div className={`mt-1 rounded-b-lg px-2 pb-1 pt-2 text-center text-xs font-semibold ${verified ? "text-emerald-500" : stage === 0 ? "text-red-400" : "text-amber-500"}`} role="status">
        {statusLabel}
      </div>
      {currentStep && (
        <div className={`mt-2 rounded-lg border p-3 text-sm ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
          <p className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>{stage}. {currentStep.title}</p>
          <p className={`mt-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>{currentStep.action}</p>
          <p className={`mt-1 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>Pourquoi : {currentStep.why}</p>
        </div>
      )}
    </Figure>
  );
}

/* ---------------------------------------------------------------
   PROTOTYPE 2 — CIRCUIT OUVERT / FERMÉ / COURT-CIRCUIT
   Animation CSS légère du sens conventionnel du courant.
   --------------------------------------------------------------- */

type CircuitState = "ouvert" | "ferme" | "court-circuit";

const CIRCUIT_INFO: Record<CircuitState, { label: string; lamp: string; status: string; flowColor: string; icon: "off" | "on" | "warn" }> = {
  ouvert: {
    label: "Circuit ouvert",
    lamp: "éteinte",
    status: "L'interrupteur est ouvert : le circuit est coupé, aucun courant ne circule, la lampe reste éteinte.",
    flowColor: "#94a3b8",
    icon: "off",
  },
  ferme: {
    label: "Circuit fermé",
    lamp: "allumée",
    status: "L'interrupteur est fermé : le courant circule dans toute la boucle et traverse la lampe, qui s'allume. C'est le fonctionnement normal.",
    flowColor: "#10b981",
    icon: "on",
  },
  "court-circuit": {
    label: "Court-circuit",
    lamp: "éteinte (contournée)",
    status: "Un contact accidentel relie les deux fils avant la lampe : le courant emprunte ce chemin de très faible résistance et contourne la lampe. L'intensité devient très élevée, ce qui provoque échauffement et danger. C'est précisément ce que le disjoncteur ou le fusible doit couper.",
    flowColor: "#ef4444",
    icon: "warn",
  },
};

function CircuitStates({ dark }: { dark: boolean }) {
  const [state, setState] = useState<CircuitState>("ferme");
  const [paused, setPaused] = useState(false);
  const stroke = dark ? "#94a3b8" : "#475569";
  const wire = dark ? "#64748b" : "#94a3b8";
  const info = CIRCUIT_INFO[state];
  const flowing = state !== "ouvert";

  // Chemins du courant : boucle complète (normal) ou boucle courte (court-circuit).
  const normalLoop = "M40 55 L280 55 L280 135 L40 135 Z";
  const shortLoop = "M40 55 L215 55 L215 135 L40 135 Z";
  const flowPath = state === "court-circuit" ? shortLoop : normalLoop;

  return (
    <Figure
      dark={dark}
      title="Ouvert, fermé, court-circuit : ce qui change"
      legend="Trait animé = sens conventionnel du courant · symbole ⊗ = lampe (récepteur) · coupure sur le fil du bas = interrupteur."
      explanation="Ces trois états expliquent l'essentiel d'un circuit. Ouvert : le chemin est coupé, rien ne circule. Fermé : le courant fait le tour complet et alimente la lampe. Court-circuit : un chemin direct et de très faible résistance court-circuite la lampe, l'intensité s'emballe — c'est un défaut dangereux que les protections doivent couper."
      controls={
        <div className="space-y-2">
          <div role="group" aria-label="Choisir l'état du circuit" className="grid grid-cols-3 gap-2">
            {(Object.keys(CIRCUIT_INFO) as CircuitState[]).map((key) => {
              const active = state === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setState(key)}
                  className={`rounded-lg border-2 px-2 py-2 text-xs font-bold transition ${active ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}
                >
                  {CIRCUIT_INFO[key].label}
                </button>
              );
            })}
          </div>
          {flowing && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}
            >
              {paused ? <><Play size={15} /> Lecture de l'animation</> : <><Pause size={15} /> Mettre en pause</>}
            </button>
          )}
        </div>
      }
    >
      <svg viewBox="0 0 320 175" className="h-auto w-full" role="img" aria-label={`${info.label} : lampe ${info.lamp}.`}>
        <defs>
          <marker id="tmi-flow-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={info.flowColor} />
          </marker>
        </defs>

        {/* Fils de base (toujours visibles) */}
        <path d={normalLoop} fill="none" stroke={wire} strokeWidth="2" />

        {/* Source */}
        <rect x="28" y="78" width="24" height="34" rx="3" fill={dark ? "#1e293b" : "#f1f5f9"} stroke={stroke} strokeWidth="1.5" />
        <line x1="40" y1="82" x2="40" y2="90" stroke={stroke} strokeWidth="3" />
        <line x1="34" y1="100" x2="46" y2="100" stroke={stroke} strokeWidth="1.5" />
        <text x="40" y="126" textAnchor="middle" fontSize="8" fill={stroke}>Source</text>

        {/* Lampe (récepteur) sur le fil de droite */}
        <circle cx="280" cy="95" r="15" fill={state === "ferme" ? "#f5b400" : "none"} stroke={stroke} strokeWidth="1.5" />
        <line x1="270" y1="85" x2="290" y2="105" stroke={stroke} strokeWidth="1.5" />
        <line x1="290" y1="85" x2="270" y2="105" stroke={stroke} strokeWidth="1.5" />
        {state === "ferme" && [0, 45, 90, 135].map((a) => {
          const r = (a * Math.PI) / 180;
          return <line key={a} x1={280 + Math.cos(r) * 20} y1={95 + Math.sin(r) * 20} x2={280 + Math.cos(r) * 26} y2={95 + Math.sin(r) * 26} stroke="#f5b400" strokeWidth="2" />;
        })}
        <text x="280" y="130" textAnchor="middle" fontSize="8" fill={stroke}>Lampe {info.lamp}</text>

        {/* Interrupteur sur le fil du bas (x≈150) */}
        <circle cx="140" cy="135" r="3" fill={stroke} />
        <circle cx="164" cy="135" r="3" fill={stroke} />
        <line x1="140" y1="135" x2={state === "ouvert" ? "162" : "164"} y2={state === "ouvert" ? "120" : "135"} stroke={state === "ouvert" ? "#ef4444" : stroke} strokeWidth="2.5" strokeLinecap="round" />
        <text x="152" y="152" textAnchor="middle" fontSize="8" fill={stroke}>Interrupteur {state === "ouvert" ? "ouvert" : "fermé"}</text>

        {/* Pont de court-circuit (défaut) : uniquement dans l'état court-circuit */}
        {state === "court-circuit" && (
          <g>
            <line x1="215" y1="55" x2="215" y2="135" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 3" />
            <circle cx="215" cy="95" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
            <path d="M216 86 l-5 10 h4 l-2 7 l6 -11 h-4 z" fill="#ef4444" />
            <text x="215" y="150" textAnchor="middle" fontSize="7" fill="#ef4444">contact accidentel</text>
          </g>
        )}

        {/* Courant animé (uniquement si ça circule) */}
        {flowing && (
          <path
            d={flowPath}
            fill="none"
            stroke={info.flowColor}
            strokeWidth="3"
            strokeLinecap="round"
            className={`tmi-current-flow${paused ? " is-paused" : ""}`}
            markerStart="url(#tmi-flow-arrow)"
          />
        )}
      </svg>

      {/* État courant : icône + texte (jamais la couleur seule) */}
      <div className="mt-1 flex items-center justify-center gap-2 pb-1 text-center text-xs font-semibold" role="status">
        {info.icon === "on" && <Lightbulb size={15} className="text-amber-400" />}
        {info.icon === "off" && <Lightbulb size={15} className="text-slate-400" />}
        {info.icon === "warn" && <TriangleAlert size={15} className="text-red-400" />}
        <span className={info.icon === "warn" ? "text-red-400" : info.icon === "on" ? "text-emerald-500" : "text-slate-400"}>
          {info.label} — lampe {info.lamp}
        </span>
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 3 — DÉCODEUR D'HABILITATION ÉLECTRIQUE (NF C 18-510)
   Tape un symbole pour comprendre chacun de ses caractères.
   --------------------------------------------------------------- */

interface Habilitation {
  code: string;
  role: string;
  parts: Array<[string, string]>;
}

const HABILITATIONS: Habilitation[] = [
  { code: "B0", role: "Personne non-électricienne qui travaille près d'installations basse tension (ex : peintre, maçon).", parts: [["B", "Basse tension"], ["0", "Travaux d'ordre non électrique"]] },
  { code: "H0", role: "Personne non-électricienne travaillant près d'installations haute tension.", parts: [["H", "Haute tension"], ["0", "Travaux d'ordre non électrique"]] },
  { code: "B1", role: "Exécutant électricien en basse tension, qui travaille sous la conduite d'un chargé de travaux.", parts: [["B", "Basse tension"], ["1", "Exécutant électricien"]] },
  { code: "B1V", role: "Exécutant électricien BT autorisé à travailler au voisinage de pièces sous tension.", parts: [["B", "Basse tension"], ["1", "Exécutant électricien"], ["V", "Travail au voisinage"]] },
  { code: "B2", role: "Chargé de travaux électriques en basse tension : il dirige et réalise des travaux.", parts: [["B", "Basse tension"], ["2", "Chargé de travaux"]] },
  { code: "BR", role: "Chargé d'intervention BT générale : dépannage, mesurage, essais, raccordement.", parts: [["B", "Basse tension"], ["R", "Intervention générale (dépannage, mesures)"]] },
  { code: "BC", role: "Chargé de consignation en basse tension : c'est lui qui réalise la consignation.", parts: [["B", "Basse tension"], ["C", "Chargé de consignation"]] },
];

function HabilitationDecoder({ dark }: { dark: boolean }) {
  const [index, setIndex] = useState(5); // BR par défaut
  const current = HABILITATIONS[index];

  return (
    <Figure
      dark={dark}
      title="Décoder un symbole d'habilitation"
      legend="1re lettre = domaine de tension (B basse / H haute) · chiffre = rôle (0 non-électricien, 1 exécutant, 2 chargé de travaux) · lettres = attributs (R intervention générale, C consignation, V voisinage)."
      explanation="Une habilitation électrique se lit caractère par caractère. Elle est délivrée par l'employeur après formation et précise ce qu'une personne a le droit de faire. Les libellés ci-dessous sont simplifiés pour un premier repérage : les prérogatives exactes sont définies par la norme NF C 18-510 et par l'entreprise."
      controls={
        <div role="group" aria-label="Choisir un symbole d'habilitation" className="flex flex-wrap gap-2">
          {HABILITATIONS.map((habilitation, i) => {
            const active = i === index;
            return (
              <button
                key={habilitation.code}
                type="button"
                aria-pressed={active}
                onClick={() => setIndex(i)}
                className={`rounded-lg border-2 px-3 py-1.5 font-mono text-sm font-bold transition ${active ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}
              >
                {habilitation.code}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="p-2">
        {/* Décomposition caractère par caractère */}
        <div className="flex flex-wrap items-stretch justify-center gap-2" aria-hidden="true">
          {current.parts.map(([char], i) => (
            <div key={i} className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 font-mono text-2xl font-bold ${dark ? "border-sky-500/50 bg-slate-900 text-sky-300" : "border-sky-300 bg-white text-sky-700"}`}>
              {char}
            </div>
          ))}
        </div>
        {/* Signification (texte, jamais la couleur seule) */}
        <dl className="mt-3 space-y-2">
          {current.parts.map(([char, meaning], i) => (
            <div key={i} className={`flex items-baseline gap-3 rounded-lg border p-2 text-sm ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
              <dt className={`font-mono text-base font-bold ${dark ? "text-sky-300" : "text-sky-700"}`}>{char}</dt>
              <dd className={dark ? "text-slate-200" : "text-slate-700"}>{meaning}</dd>
            </div>
          ))}
        </dl>
        <p className={`mt-3 rounded-lg p-3 text-sm ${dark ? "bg-amber-400/10 text-slate-200" : "bg-amber-50 text-slate-700"}`}>
          <span className="font-semibold">Ce que ça désigne : </span>{current.role}
        </p>
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 4 — RÉGIMES DE NEUTRE (TT / TN / IT)
   Montre comment le neutre et les masses sont reliés à la terre,
   et ce qui coupe un défaut selon le régime.
   --------------------------------------------------------------- */

type Regime = "TT" | "TN" | "IT";

const REGIMES: Record<Regime, { neutral: string; masses: string; fault: string; protection: string }> = {
  TT: {
    neutral: "Neutre relié à la terre au niveau de la source.",
    masses: "Masses reliées à une prise de terre séparée.",
    fault: "Un défaut d'isolement crée un courant de fuite vers la terre.",
    protection: "Coupure assurée par le dispositif différentiel (DDR), obligatoire.",
  },
  TN: {
    neutral: "Neutre relié à la terre au niveau de la source.",
    masses: "Masses reliées au neutre par un conducteur de protection (PE).",
    fault: "Un défaut d'isolement devient un court-circuit phase–PE.",
    protection: "Coupure assurée par la protection contre les surintensités (disjoncteur, fusible).",
  },
  IT: {
    neutral: "Neutre isolé de la terre (ou relié par une impédance).",
    masses: "Masses reliées à la terre.",
    fault: "Le premier défaut ne coupe pas : la continuité de service est préservée.",
    protection: "Premier défaut signalé par un contrôleur permanent d'isolement (CPI) ; le second défaut doit être traité.",
  },
};

function Ground({ x, y, stroke }: { x: number; y: number; stroke: string }) {
  return (
    <g stroke={stroke} strokeWidth="1.5">
      <line x1={x} y1={y} x2={x} y2={y + 8} />
      <line x1={x - 9} y1={y + 8} x2={x + 9} y2={y + 8} />
      <line x1={x - 6} y1={y + 12} x2={x + 6} y2={y + 12} />
      <line x1={x - 3} y1={y + 16} x2={x + 3} y2={y + 16} />
    </g>
  );
}

function NeutralRegimes({ dark }: { dark: boolean }) {
  const [regime, setRegime] = useState<Regime>("TT");
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const info = REGIMES[regime];

  return (
    <Figure
      dark={dark}
      title="Régimes de neutre : TT, TN, IT"
      legend="Le symbole de terre = liaison à la terre · « N » = point neutre de la source · « PE » = conducteur de protection reliant les masses."
      explanation="Le régime de neutre définit comment le neutre de la source et les masses des équipements sont reliés à la terre. Ce choix détermine ce qui se passe lors d'un défaut d'isolement et quel dispositif assure la protection des personnes. Les libellés sont simplifiés pour comprendre le principe ; la conception réelle relève d'un électricien qualifié et de la norme."
      controls={
        <div role="group" aria-label="Choisir le régime de neutre" className="grid grid-cols-3 gap-2">
          {(Object.keys(REGIMES) as Regime[]).map((key) => {
            const active = regime === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active}
                onClick={() => setRegime(key)}
                className={`rounded-lg border-2 px-2 py-2 font-mono text-sm font-bold transition ${active ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}
              >
                {key}
              </button>
            );
          })}
        </div>
      }
    >
      <svg viewBox="0 0 320 175" className="h-auto w-full" role="img" aria-label={`Régime ${regime} : ${info.neutral} ${info.masses}`}>
        {/* Source */}
        <rect x="18" y="38" width="74" height="56" rx="6" fill={box} stroke={stroke} strokeWidth="1.5" />
        <text x="55" y="60" textAnchor="middle" fontSize="9" fill={stroke}>Source</text>
        <text x="55" y="74" textAnchor="middle" fontSize="8" fill={stroke}>(neutre N)</text>

        {/* Machine */}
        <rect x="228" y="38" width="74" height="56" rx="6" fill={box} stroke={stroke} strokeWidth="1.5" />
        <text x="265" y="60" textAnchor="middle" fontSize="9" fill={stroke}>Machine</text>
        <text x="265" y="74" textAnchor="middle" fontSize="8" fill={stroke}>(masse)</text>

        {/* Phases */}
        <line x1="92" y1="52" x2="228" y2="52" stroke="#f5b400" strokeWidth="2.5" />
        <text x="160" y="46" textAnchor="middle" fontSize="8" fill={stroke}>L (phases)</text>

        {/* Neutre de la source vers la terre */}
        <line x1="55" y1="94" x2="55" y2="132" stroke={stroke} strokeWidth="1.5" strokeDasharray={regime === "IT" ? "4 3" : "0"} />
        {regime === "IT" && <text x="55" y="118" textAnchor="middle" fontSize="7" fill={stroke}>isolé / impédance</text>}
        <Ground x={55} y={132} stroke={stroke} />

        {/* Masses de la machine */}
        {regime === "TN" ? (
          <g>
            {/* PE : masse reliée au neutre de la source */}
            <line x1="265" y1="94" x2="265" y2="114" stroke={stroke} strokeWidth="1.5" />
            <line x1="265" y1="114" x2="55" y2="114" stroke={stroke} strokeWidth="1.5" />
            <text x="160" y="110" textAnchor="middle" fontSize="8" fill={stroke}>PE (masses reliées au neutre)</text>
          </g>
        ) : (
          <g>
            <line x1="265" y1="94" x2="265" y2="132" stroke={stroke} strokeWidth="1.5" />
            <Ground x={265} y={132} stroke={stroke} />
          </g>
        )}

        {/* Etiquette du régime */}
        <rect x="140" y="150" width="40" height="20" rx="4" fill="#f5b400" />
        <text x="160" y="164" textAnchor="middle" fontSize="11" fill="#14151a" fontWeight="bold">{regime}</text>
      </svg>

      {/* Détail texte (le cœur pédagogique, indépendant de la couleur) */}
      <dl className="mt-2 space-y-2 text-sm">
        {([["Neutre", info.neutral], ["Masses", info.masses], ["1er défaut", info.fault], ["Protection", info.protection]] as Array<[string, string]>).map(([term, value]) => (
          <div key={term} className={`rounded-lg border p-2 ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
            <dt className={`text-xs font-semibold uppercase tracking-wide ${dark ? "text-sky-300" : "text-sky-700"}`}>{term}</dt>
            <dd className={dark ? "text-slate-200" : "text-slate-700"}>{value}</dd>
          </div>
        ))}
      </dl>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 5 — CONTACTEUR + RELAIS THERMIQUE EN ACTION
   Repos → marche → déclenchement sur surcharge.
   --------------------------------------------------------------- */

type ContactorState = "repos" | "marche" | "declenche";

const CONTACTOR_INFO: Record<ContactorState, { label: string; coil: string; contacts: string; thermal: string; motor: string; text: string }> = {
  repos: {
    label: "Repos",
    coil: "non alimentée",
    contacts: "ouverts",
    thermal: "au repos",
    motor: "arrêté",
    text: "Au repos, la bobine du contacteur n'est pas alimentée : les contacts principaux restent ouverts et le moteur est à l'arrêt.",
  },
  marche: {
    label: "Marche",
    coil: "alimentée",
    contacts: "fermés",
    thermal: "surveille le courant",
    motor: "en marche",
    text: "En marche, la bobine est alimentée : elle attire les contacts principaux, qui se ferment et alimentent le moteur. Le relais thermique surveille le courant absorbé.",
  },
  declenche: {
    label: "Surcharge",
    coil: "coupée par le relais thermique",
    contacts: "ouverts",
    thermal: "déclenché (surcharge)",
    motor: "arrêté (protégé)",
    text: "En cas de surcharge prolongée, le relais thermique se déclenche : il ouvre le circuit de commande, la bobine n'est plus alimentée, les contacts s'ouvrent et le moteur s'arrête. On recherche la cause avant de réarmer.",
  },
};

function ContactorThermal({ dark }: { dark: boolean }) {
  const [state, setState] = useState<ContactorState>("repos");
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const info = CONTACTOR_INFO[state];
  const closed = state === "marche";
  const tripped = state === "declenche";

  return (
    <Figure
      dark={dark}
      title="Contacteur et relais thermique en action"
      legend="Bobine = électro-aimant qui ferme les contacts · contacts principaux = interrupteurs de puissance · relais thermique = protection contre la surcharge · M = moteur."
      explanation="Le contacteur commande le moteur : quand sa bobine est alimentée, elle ferme les contacts principaux et le moteur tourne. Le relais thermique, placé en série, surveille le courant ; en cas de surcharge prolongée, il ouvre le circuit de commande, ce qui coupe la bobine et arrête le moteur. Le contacteur commande, le relais thermique protège."
      controls={
        <div role="group" aria-label="Choisir l'état du contacteur" className="grid grid-cols-3 gap-2">
          {(Object.keys(CONTACTOR_INFO) as ContactorState[]).map((key) => {
            const active = state === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active}
                onClick={() => setState(key)}
                className={`rounded-lg border-2 px-2 py-2 text-xs font-bold transition ${active ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}
              >
                {CONTACTOR_INFO[key].label}
              </button>
            );
          })}
        </div>
      }
    >
      <svg viewBox="0 0 320 190" className="h-auto w-full" role="img" aria-label={`${info.label} : contacts ${info.contacts}, moteur ${info.motor}.`}>
        {/* Source */}
        <text x="80" y="18" textAnchor="middle" fontSize="8" fill={stroke}>Source 3~</text>
        <line x1="80" y1="22" x2="80" y2="48" stroke={stroke} strokeWidth="2" />

        {/* Contacts principaux (contacteur) */}
        <circle cx="80" cy="52" r="3" fill={stroke} />
        <circle cx="80" cy="86" r="3" fill={stroke} />
        <line x1="80" y1="52" x2={closed ? "80" : "98"} y2={closed ? "86" : "60"} stroke={closed ? "#10b981" : stroke} strokeWidth="3" strokeLinecap="round" />
        <text x="52" y="72" textAnchor="middle" fontSize="8" fill={stroke}>KM1</text>
        <text x="52" y="82" textAnchor="middle" fontSize="7" fill={stroke}>{info.contacts}</text>

        {/* Liaison mécanique bobine → contacts */}
        <line x1="88" y1="69" x2="176" y2="69" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />

        {/* Bobine */}
        <rect x="176" y="52" width="48" height="34" rx="5" fill={state === "repos" || tripped ? box : "#f5b400"} stroke={stroke} strokeWidth="1.5" />
        <text x="200" y="66" textAnchor="middle" fontSize="8" fill={state === "marche" ? "#14151a" : stroke} fontWeight="bold">Bobine</text>
        <text x="200" y="78" textAnchor="middle" fontSize="7" fill={state === "marche" ? "#14151a" : stroke}>{state === "marche" ? "alimentée" : "hors tension"}</text>

        {/* Relais thermique */}
        <line x1="80" y1="86" x2="80" y2="104" stroke={stroke} strokeWidth="2" />
        <rect x="60" y="104" width="40" height="26" rx="3" fill={tripped ? "#ef4444" : box} stroke={stroke} strokeWidth="1.5" />
        <text x="80" y="118" textAnchor="middle" fontSize="8" fill={tripped ? "#fff" : stroke} fontWeight="bold">F2</text>
        <text x="126" y="114" textAnchor="middle" fontSize="7" fill={stroke}>relais</text>
        <text x="126" y="123" textAnchor="middle" fontSize="7" fill={stroke}>thermique</text>

        {/* Moteur */}
        <line x1="80" y1="130" x2="80" y2="146" stroke={stroke} strokeWidth="2" />
        <circle cx="80" cy="162" r="16" fill={closed ? "#10b981" : box} stroke={stroke} strokeWidth="1.5" />
        <text x="80" y="166" textAnchor="middle" fontSize="10" fill={closed ? "#fff" : stroke} fontWeight="bold">M</text>
        <text x="128" y="160" textAnchor="middle" fontSize="8" fill={stroke}>moteur</text>
        <text x="128" y="170" textAnchor="middle" fontSize="7" fill={stroke}>{info.motor}</text>

        {/* Indicateur de déclenchement */}
        {tripped && (
          <g transform="translate(230,150)">
            <circle cx="12" cy="12" r="12" fill="#ef4444" />
            <path d="M13 4 l-6 10 h5 l-2 6 l7 -10 h-5 z" fill="#fff" />
          </g>
        )}
      </svg>

      {/* État détaillé (texte + icône, jamais la couleur seule) */}
      <div className="mt-1 flex items-center justify-center gap-2 pb-1 text-center text-xs font-semibold" role="status">
        {tripped ? <TriangleAlert size={15} className="text-red-400" /> : closed ? <Zap size={15} className="text-emerald-500" /> : <Zap size={15} className="text-slate-400" />}
        <span className={tripped ? "text-red-400" : closed ? "text-emerald-500" : "text-slate-400"}>
          Bobine {info.coil} · contacts {info.contacts} · moteur {info.motor}
        </span>
      </div>
      <p className={`mt-2 rounded-lg border p-3 text-sm ${dark ? "border-slate-700 bg-slate-900/60 text-slate-200" : "border-slate-200 bg-white text-slate-700"}`}>{info.text}</p>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 6 — SENS DE ROTATION D'UN MOTEUR TRIPHASÉ
   Inverser deux phases inverse le sens de rotation.
   --------------------------------------------------------------- */

function RotationDirection({ dark }: { dark: boolean }) {
  const [inverted, setInverted] = useState(false);
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";

  // Correspondance phase réseau → borne moteur.
  const mapping = inverted
    ? [["L1", "U", 45], ["L2", "W", 115], ["L3", "V", 80]]
    : [["L1", "U", 45], ["L2", "V", 80], ["L3", "W", 115]];

  // Flèche de sens : horaire (normal) / anti-horaire (inversé).
  const arrow = inverted
    ? { d: "M240 54 A26 26 0 1 0 266 80", label: "sens anti-horaire" }
    : { d: "M240 54 A26 26 0 1 1 214 80", label: "sens horaire" };

  return (
    <Figure
      dark={dark}
      title="Inverser le sens de rotation"
      legend="L1/L2/L3 = phases du réseau · U/V/W = bornes du moteur · la flèche indique le sens de rotation."
      explanation="Pour inverser le sens de rotation d'un moteur asynchrone triphasé, il suffit de croiser deux des trois phases (par exemple L2 et L3). Le champ tournant change de sens, donc le moteur tourne dans l'autre sens. On ne touche jamais aux trois phases à la fois : croiser deux phases suffit. La manœuvre se fait hors tension, après consignation."
      controls={
        <button
          type="button"
          aria-pressed={inverted}
          onClick={() => setInverted((v) => !v)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950"
        >
          <RotateCcw size={16} /> {inverted ? "Revenir au branchement normal (L1-L2-L3)" : "Croiser L2 et L3 (inverser)"}
        </button>
      }
    >
      <svg viewBox="0 0 320 165" className="h-auto w-full" role="img" aria-label={`Moteur en ${arrow.label}. Branchement : ${mapping.map(([l, b]) => `${l} vers ${b}`).join(", ")}.`}>
        {/* Phases réseau */}
        {(["L1", "L2", "L3"] as const).map((l, i) => (
          <g key={l}>
            <text x="24" y={49 + i * 35} textAnchor="middle" fontSize="10" fill={stroke} fontWeight="bold">{l}</text>
            <circle cx="44" cy={45 + i * 35} r="3" fill={stroke} />
          </g>
        ))}

        {/* Liaisons vers les bornes moteur (croisées si inversé) */}
        {mapping.map(([l, , y]) => {
          const startY = l === "L1" ? 45 : l === "L2" ? 80 : 115;
          return <line key={l} x1="44" y1={startY} x2="150" y2={y as number} stroke={l === "L2" || l === "L3" ? (inverted ? "#f5b400" : stroke) : stroke} strokeWidth="2" />;
        })}

        {/* Bornes moteur U V W */}
        {[["U", 45], ["V", 80], ["W", 115]].map(([b, y]) => (
          <g key={b as string}>
            <circle cx="150" cy={y as number} r="3" fill={stroke} />
            <text x="164" y={(y as number) + 4} textAnchor="middle" fontSize="9" fill={stroke}>{b}</text>
          </g>
        ))}

        {/* Moteur + flèche de sens */}
        <line x1="176" y1="80" x2="212" y2="80" stroke={stroke} strokeWidth="2" />
        <circle cx="240" cy="80" r="26" fill={box} stroke={stroke} strokeWidth="1.5" />
        <text x="240" y="84" textAnchor="middle" fontSize="13" fill={stroke} fontWeight="bold">M</text>
        <path d={arrow.d} fill="none" stroke="#f5b400" strokeWidth="3" markerEnd="url(#rot-arrow)" />
        <defs>
          <marker id="rot-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#f5b400" />
          </marker>
        </defs>
        <text x="240" y="140" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">{arrow.label}</text>
      </svg>

      <div className="mt-1 flex items-center justify-center gap-2 pb-1 text-center text-xs font-semibold text-amber-500" role="status">
        <RotateCcw size={14} /> {inverted ? "L2 et L3 croisées → rotation inversée" : "Branchement normal L1-L2-L3"}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 7 — DÉCODEUR DE REPÈRES DE SCHÉMA ÉLECTRIQUE
   Tape une lettre-repère pour savoir quel composant elle désigne.
   --------------------------------------------------------------- */

interface SymbolRef {
  code: string;
  name: string;
  role: string;
}

const SYMBOL_REFS: SymbolRef[] = [
  { code: "Q", name: "Sectionnement / protection", role: "Sectionneur, interrupteur-sectionneur, disjoncteur (ex : Q1)." },
  { code: "KM", name: "Contacteur", role: "Contacteur de puissance qui commande le moteur (ex : KM1)." },
  { code: "F", name: "Protection", role: "Fusible ou relais thermique (ex : F2 pour le relais thermique)." },
  { code: "S", name: "Commande (organe manuel)", role: "Bouton-poussoir, interrupteur de commande (ex : S1 marche, S2 arrêt)." },
  { code: "M", name: "Moteur", role: "Moteur électrique, souvent asynchrone triphasé (ex : M1)." },
  { code: "H", name: "Signalisation", role: "Voyant, lampe ou avertisseur (ex : H1 voyant marche)." },
  { code: "T", name: "Transformateur", role: "Transformateur, par exemple pour le circuit de commande (ex : T1)." },
  { code: "K", name: "Relais", role: "Relais de commande ou auxiliaire, temporisateur (ex : KA1, KT1)." },
];

function SymbolDecoder({ dark }: { dark: boolean }) {
  const [index, setIndex] = useState(1); // KM par défaut
  const current = SYMBOL_REFS[index];

  return (
    <Figure
      dark={dark}
      title="Décoder les repères d'un schéma"
      legend="Sur un schéma, chaque composant porte une lettre-repère normalisée suivie d'un numéro (ex : KM1, Q1, F2)."
      explanation="Les schémas électriques utilisent des lettres-repères pour désigner les composants, quelle que soit la langue. Savoir les lire permet de relier un symbole du schéma au composant réel dans l'armoire. Les repères ci-dessous sont les plus courants pour un départ moteur ; un schéma complet en donne toujours la légende."
      controls={
        <div role="group" aria-label="Choisir un repère" className="flex flex-wrap gap-2">
          {SYMBOL_REFS.map((symbol, i) => {
            const active = i === index;
            return (
              <button
                key={symbol.code}
                type="button"
                aria-pressed={active}
                onClick={() => setIndex(i)}
                className={`rounded-lg border-2 px-3 py-1.5 font-mono text-sm font-bold transition ${active ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}
              >
                {symbol.code}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="p-2 text-center">
        <div className={`mx-auto flex h-16 w-20 items-center justify-center rounded-xl border-2 font-mono text-3xl font-bold ${dark ? "border-sky-500/50 bg-slate-900 text-sky-300" : "border-sky-300 bg-white text-sky-700"}`}>
          {current.code}
        </div>
        <p className={`mt-3 text-base font-bold ${dark ? "text-white" : "text-slate-900"}`}>{current.name}</p>
      </div>
      <p className={`mt-1 rounded-lg p-3 text-sm ${dark ? "bg-amber-400/10 text-slate-200" : "bg-amber-50 text-slate-700"}`}>
        <span className="font-semibold">Ce que ça désigne : </span>{current.role}
      </p>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 8 — ASSISTANT DE DIAGNOSTIC (ARBRE DE DÉCISION GUIDÉ)
   Guide la démarche « moteur ne démarre pas ». Non noté : il montre
   la méthode, il complète le simulateur de pannes (scénarios notés).
   --------------------------------------------------------------- */

interface DiagOption {
  label: string;
  next?: string;
  conclusion?: string;
}

interface DiagNode {
  prompt: string;
  options: DiagOption[];
}

const DIAG_NODES: Record<string, DiagNode> = {
  start: {
    prompt: "Le moteur ne démarre pas. Une protection a-t-elle déclenché ?",
    options: [
      { label: "Oui, une protection a déclenché", next: "protection" },
      { label: "Non, aucune protection n'a déclenché", next: "commande" },
    ],
  },
  protection: {
    prompt: "Quelle protection a déclenché ?",
    options: [
      { label: "Le relais thermique", conclusion: "Surcharge probable. Mesurer le courant absorbé, vérifier le réglage (courant nominal) et la charge mécanique. Rechercher la cause AVANT de réarmer ; ne jamais dérégler le relais." },
      { label: "Le disjoncteur", conclusion: "Surintensité (surcharge ou court-circuit). Localiser le défaut avant de réarmer. Ne pas augmenter le calibre pour masquer le déclenchement." },
      { label: "Le différentiel (DDR)", conclusion: "Fuite à la terre (défaut d'isolement). Isoler les circuits pour trouver le récepteur en défaut, contrôler l'isolement hors tension. Ne jamais neutraliser le différentiel." },
    ],
  },
  commande: {
    prompt: "En commandant la marche, la bobine du contacteur est-elle alimentée ?",
    options: [
      { label: "Oui, la bobine est alimentée", next: "puissance" },
      { label: "Non, la bobine n'est pas alimentée", next: "commandeDetail" },
    ],
  },
  puissance: {
    prompt: "Le contacteur se ferme mais le moteur ne tourne pas. Quelle piste suivre ?",
    options: [
      { label: "Vérifier la puissance (contacts, phases, moteur)", conclusion: "Défaut de puissance : contrôler les contacts principaux (collés ou usés), la présence des trois phases, le couplage et le moteur — après consignation et vérification d'absence de tension." },
    ],
  },
  commandeDetail: {
    prompt: "En suivant le circuit de commande, où le courant s'arrête-t-il ?",
    options: [
      { label: "À un contact ouvert (bouton, auto-maintien, thermique)", conclusion: "Défaut dans le circuit de commande : contrôler les boutons (marche/arrêt), le contact d'auto-maintien et le contact du relais thermique, ainsi que le câblage." },
      { label: "Le circuit est continu mais la bobine reste inerte", conclusion: "Vérifier l'alimentation de commande (tension, transformateur de commande) et la bobine elle-même. Les mesures sous tension se font avec l'habilitation adaptée." },
    ],
  },
};

function DiagnosticTree({ dark }: { dark: boolean }) {
  const [nodeId, setNodeId] = useState<string>("start");
  const [conclusion, setConclusion] = useState<string | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const node = DIAG_NODES[nodeId];

  function choose(option: DiagOption) {
    setPath((p) => [...p, option.label]);
    if (option.conclusion) {
      setConclusion(option.conclusion);
    } else if (option.next) {
      setNodeId(option.next);
    }
  }

  function restart() {
    setNodeId("start");
    setConclusion(null);
    setPath([]);
  }

  return (
    <Figure
      dark={dark}
      title="Assistant de diagnostic : moteur qui ne démarre pas"
      legend="Choisis l'observation qui correspond ; l'assistant guide la démarche jusqu'à une piste. Outil pédagogique, non noté."
      explanation="Cet assistant illustre une démarche de diagnostic structurée : on part du symptôme, on observe, puis on oriente la recherche étape par étape jusqu'à une piste probable. Il ne remplace pas le raisonnement ni la sécurité : toute intervention se fait après consignation et dans les limites de son habilitation. Pour t'entraîner sur des scénarios notés, utilise aussi la section « Pannes »."
      controls={
        conclusion !== null || path.length > 0 ? (
          <button type="button" onClick={restart} className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Recommencer le diagnostic
          </button>
        ) : undefined
      }
    >
      <div className="p-1">
        {/* Chemin parcouru */}
        {path.length > 0 && (
          <ol className="mb-3 space-y-1">
            {path.map((step, i) => (
              <li key={i} className={`flex gap-2 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
                <span className="font-mono font-bold text-amber-400">{i + 1}.</span>{step}
              </li>
            ))}
          </ol>
        )}

        {conclusion === null ? (
          <div className={`rounded-lg border p-3 ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
            <p className={`mb-3 font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{node.prompt}</p>
            <div className="space-y-2">
              {node.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => choose(option)}
                  className={`flex w-full items-center gap-2 rounded-lg border-2 p-3 text-left text-sm transition ${dark ? "border-slate-600 hover:border-amber-400 text-slate-200" : "border-slate-300 hover:border-amber-500 text-slate-700"}`}
                >
                  <ArrowRight size={15} className="shrink-0 text-amber-400" /> {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-emerald-500/40 bg-emerald-500/5 p-3">
            <p className="mb-1 flex items-center gap-2 text-sm font-bold text-emerald-500">
              <ShieldCheck size={16} /> Piste de diagnostic
            </p>
            <p className={`text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{conclusion}</p>
          </div>
        )}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   ASSISTANT DE DIAGNOSTIC — SYSTÈME AUTOMATISÉ
   Démarche adaptée à l'automatisme : on part du symptôme « l'action
   attendue ne se produit pas » et on remonte la chaîne capteur → entrée
   → programme → sortie → préactionneur → actionneur à l'aide des voyants.
   --------------------------------------------------------------- */

const AUTO_DIAG_NODES: Record<string, DiagNode> = {
  start: {
    prompt: "L'action attendue ne se produit pas. Le voyant de la sortie concernée (sur l'automate ou le préactionneur) est-il allumé ?",
    options: [
      { label: "Oui, le voyant de la sortie est allumé", conclusion: "L'ordre part bien de l'automate : le défaut est EN AVAL de la sortie. Contrôler la chaîne d'action — préactionneur (distributeur, contacteur), présence de l'énergie de puissance (air comprimé, tension moteur), câblage sortie → préactionneur, puis l'actionneur lui-même (vérin, moteur). Toute intervention se fait après consignation des différentes énergies et vérification d'absence de tension/pression." },
      { label: "Non, le voyant de la sortie est éteint", next: "entrees" },
    ],
  },
  entrees: {
    prompt: "L'automate ne commande pas la sortie. Les entrées nécessaires à cette action sont-elles toutes à l'état attendu (voyants d'entrée) ?",
    options: [
      { label: "Oui, toutes les entrées attendues sont présentes", conclusion: "L'automate reçoit les bonnes informations mais ne commande pas la sortie : la condition du programme n'est pas remplie (une autre condition manque, une sécurité est active, le mode n'est pas le bon) ou l'automate/la carte de sortie est en défaut. Vérifier les conditions du cycle et l'état des sécurités. Ne JAMAIS contourner une sécurité pour « forcer » la sortie ; toute modification de programme relève d'une personne compétente." },
      { label: "Non, une entrée attendue est absente (voyant éteint)", next: "capteur" },
    ],
  },
  capteur: {
    prompt: "Une information manque à l'entrée. En plaçant la cible devant le capteur concerné, son propre voyant s'allume-t-il ?",
    options: [
      { label: "Oui, le capteur détecte mais l'entrée reste éteinte", conclusion: "Défaut entre le capteur et l'automate : le capteur fonctionne mais l'information n'arrive pas à l'entrée. Contrôler la liaison capteur ↔ entrée — borne desserrée, fil coupé, fusible ou alimentation de l'entrée, voire la carte d'entrée. Les contrôles se font dans le respect des habilitations et, si besoin, après consignation." },
      { label: "Non, le capteur ne détecte pas (son voyant reste éteint)", conclusion: "Défaut de détection au niveau du capteur : cible absente ou hors de portée, capteur mal positionné ou déréglé, réglage de sensibilité inadapté, ou capteur (ou son alimentation) en panne. Vérifier la présence de la cible, la position et le réglage du capteur, la distance de détection, puis son alimentation. Remplacer le capteur seulement après avoir écarté un simple défaut de réglage ou de position." },
    ],
  },
};

function AutoDiagnosticTree({ dark }: { dark: boolean }) {
  const [nodeId, setNodeId] = useState<string>("start");
  const [conclusion, setConclusion] = useState<string | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const node = AUTO_DIAG_NODES[nodeId];

  function choose(option: DiagOption) {
    setPath((p) => [...p, option.label]);
    if (option.conclusion) {
      setConclusion(option.conclusion);
    } else if (option.next) {
      setNodeId(option.next);
    }
  }

  function restart() {
    setNodeId("start");
    setConclusion(null);
    setPath([]);
  }

  return (
    <Figure
      dark={dark}
      title="Assistant de diagnostic : une action automatisée ne se produit pas"
      legend="Remonte la chaîne capteur → entrée → automate → sortie → préactionneur → actionneur en t'appuyant sur les voyants. Outil pédagogique, non noté."
      explanation="Sur un système automatisé, les voyants (entrées, sorties, capteurs) sont les premiers outils de diagnostic : ils permettent de situer une panne sans démonter. La démarche va du symptôme vers la cause en suivant le sens de l'information et de l'énergie. Cet assistant illustre ce raisonnement mais ne remplace ni la lecture des schémas, ni la sécurité : on consigne les différentes énergies (électrique, pneumatique, hydraulique) avant toute intervention, et une modification de programme relève d'une personne compétente. Pour t'entraîner sur des scénarios notés, utilise aussi la section « Pannes »."
      controls={
        conclusion !== null || path.length > 0 ? (
          <button type="button" onClick={restart} className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Recommencer le diagnostic
          </button>
        ) : undefined
      }
    >
      <div className="p-1">
        {path.length > 0 && (
          <ol className="mb-3 space-y-1">
            {path.map((step, i) => (
              <li key={i} className={`flex gap-2 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
                <span className="font-mono font-bold text-sky-400">{i + 1}.</span>{step}
              </li>
            ))}
          </ol>
        )}

        {conclusion === null ? (
          <div className={`rounded-lg border p-3 ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
            <p className={`mb-3 font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{node.prompt}</p>
            <div className="space-y-2">
              {node.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => choose(option)}
                  className={`flex w-full items-center gap-2 rounded-lg border-2 p-3 text-left text-sm transition ${dark ? "border-slate-600 hover:border-sky-400 text-slate-200" : "border-slate-300 hover:border-sky-500 text-slate-700"}`}
                >
                  <ArrowRight size={15} className="shrink-0 text-sky-400" /> {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-emerald-500/40 bg-emerald-500/5 p-3">
            <p className="mb-1 flex items-center gap-2 text-sm font-bold text-emerald-500">
              <ShieldCheck size={16} /> Piste de diagnostic
            </p>
            <p className={`text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{conclusion}</p>
          </div>
        )}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   ASSISTANT — CHOISIR UNE STRATÉGIE DE MAINTENANCE
   Arbre de décision : selon la criticité et la possibilité de
   surveiller l'état, on oriente vers corrective, préventive
   systématique, conditionnelle ou une démarche d'amélioration.
   --------------------------------------------------------------- */

const MAINT_STRATEGY_NODES: Record<string, DiagNode> = {
  start: {
    prompt: "L'équipement est-il critique (sa panne arrête la production ou crée un risque important) ?",
    options: [
      { label: "Non, il est peu critique", conclusion: "Maintenance corrective acceptable : on répare après la panne. L'impact d'un arrêt étant faible, on limite les coûts d'entretien et on accepte l'arrêt subi. On garde tout de même une traçabilité des pannes." },
      { label: "Oui, il est critique", next: "surveillance" },
    ],
  },
  surveillance: {
    prompt: "Peut-on surveiller son état par une mesure (vibrations, température, analyse d'huile, ultrasons) ?",
    options: [
      { label: "Oui, on peut mesurer une dégradation", conclusion: "Maintenance conditionnelle (voire prévisionnelle) : on surveille l'état et on intervient lorsqu'un seuil d'alerte est atteint. On évite la panne sans démonter inutilement, et on planifie l'intervention au bon moment." },
      { label: "Non, pas de mesure exploitable", next: "usure" },
    ],
  },
  usure: {
    prompt: "La dégradation est-elle liée au temps ou au nombre de cycles de façon prévisible ?",
    options: [
      { label: "Oui, l'usure est régulière/prévisible", conclusion: "Maintenance préventive systématique : on planifie des interventions à échéance fixe (temps ou cycles) avant la panne, en cherchant la bonne périodicité (ni sous- ni sur-maintenance)." },
      { label: "Non, la panne est aléatoire", conclusion: "Approfondir l'analyse : pour une panne critique, aléatoire et non surveillable, on cherche à fiabiliser (AMDEC, amélioration de conception) ou à réduire la criticité (redondance, réduction de l'impact) plutôt que de subir." },
    ],
  },
};

function MaintenanceStrategy({ dark }: { dark: boolean }) {
  const [nodeId, setNodeId] = useState<string>("start");
  const [conclusion, setConclusion] = useState<string | null>(null);
  const [path, setPath] = useState<string[]>([]);
  const node = MAINT_STRATEGY_NODES[nodeId];

  function choose(option: DiagOption) {
    setPath((p) => [...p, option.label]);
    if (option.conclusion) setConclusion(option.conclusion);
    else if (option.next) setNodeId(option.next);
  }

  function restart() {
    setNodeId("start");
    setConclusion(null);
    setPath([]);
  }

  return (
    <Figure
      dark={dark}
      title="Quelle stratégie de maintenance choisir ?"
      legend="Réponds selon la criticité de l'équipement et la possibilité de surveiller son état ; l'assistant oriente vers une stratégie adaptée. Outil pédagogique."
      explanation="Il n'existe pas une seule bonne maintenance : le choix dépend de la criticité de l'équipement et des moyens de surveillance. Un équipement peu critique peut rester en correctif ; un équipement critique se protège par de la préventive systématique (si l'usure est prévisible) ou de la conditionnelle (si l'on peut mesurer son état). Quand la panne est critique, aléatoire et non mesurable, on cherche plutôt à fiabiliser ou à réduire la criticité. Cet assistant illustre ce raisonnement ; les vrais choix intègrent aussi les coûts et les contraintes de l'entreprise."
      controls={
        conclusion !== null || path.length > 0 ? (
          <button type="button" onClick={restart} className={`flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Recommencer
          </button>
        ) : undefined
      }
    >
      <div className="p-1">
        {path.length > 0 && (
          <ol className="mb-3 space-y-1">
            {path.map((step, i) => (
              <li key={i} className={`flex gap-2 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
                <span className="font-mono font-bold text-violet-400">{i + 1}.</span>{step}
              </li>
            ))}
          </ol>
        )}

        {conclusion === null ? (
          <div className={`rounded-lg border p-3 ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
            <p className={`mb-3 font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{node.prompt}</p>
            <div className="space-y-2">
              {node.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => choose(option)}
                  className={`flex w-full items-center gap-2 rounded-lg border-2 p-3 text-left text-sm transition ${dark ? "border-slate-600 hover:border-violet-400 text-slate-200" : "border-slate-300 hover:border-violet-500 text-slate-700"}`}
                >
                  <ArrowRight size={15} className="shrink-0 text-violet-400" /> {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-emerald-500/40 bg-emerald-500/5 p-3">
            <p className="mb-1 flex items-center gap-2 text-sm font-bold text-emerald-500">
              <ShieldCheck size={16} /> Stratégie conseillée
            </p>
            <p className={`text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{conclusion}</p>
          </div>
        )}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   DIAGRAMME DE PARETO — LA RÈGLE DES 20/80
   Les causes de pannes sont triées par ordre décroissant ; une courbe
   cumulée montre que quelques causes (les « 20 % vitaux ») concentrent
   l'essentiel des problèmes. Repli statique : barres et courbe restent
   lisibles sans interaction.
   --------------------------------------------------------------- */

const PARETO_CAUSES = [
  { label: "Roulements", value: 42 },
  { label: "Capteurs", value: 28 },
  { label: "Courroies", value: 15 },
  { label: "Câblage", value: 8 },
  { label: "Divers", value: 7 },
]; // arrêts (%) sur une période — total 100

function ParetoChart({ dark }: { dark: boolean }) {
  const [showVital, setShowVital] = useState(false);
  const stroke = dark ? "#94a3b8" : "#475569";
  const grid = dark ? "#334155" : "#e2e8f0";
  const bar = dark ? "#64748b" : "#94a3b8";
  const accent = "#8b5cf6";
  const alert = "#ef4444";

  const x0 = 34;
  const x1 = 288;
  const yTop = 18;
  const yBot = 128;
  const n = PARETO_CAUSES.length;
  const yAt = (pct: number) => yBot - (pct / 100) * (yBot - yTop);
  const slot = (x1 - x0) / n;
  const barW = slot * 0.56;
  const xCenter = (i: number) => x0 + (i + 0.5) * slot;

  let cum = 0;
  const cumPoints: Array<{ x: number; y: number; cum: number }> = [];
  let vitalIndex = n - 1;
  let firstFound = false;
  PARETO_CAUSES.forEach((c, i) => {
    cum += c.value;
    cumPoints.push({ x: xCenter(i), y: yAt(cum), cum });
    if (!firstFound && cum >= 80) {
      vitalIndex = i;
      firstFound = true;
    }
  });

  return (
    <Figure
      dark={dark}
      title="Diagramme de Pareto : cibler les 20 % de causes vitales"
      legend="Les causes sont triées par ordre décroissant ; la courbe cumulée montre que quelques causes concentrent l'essentiel des pannes. Exemple : arrêts (%) par cause."
      explanation="La loi de Pareto (règle des 20/80) observe qu'une petite part des causes (environ 20 %) produit l'essentiel des effets (environ 80 %). En maintenance, on classe les causes de pannes ou d'arrêts par ordre décroissant et on trace la courbe cumulée : on repère ainsi les « quelques causes vitales » sur lesquelles agir en priorité, plutôt que de se disperser. Les chiffres 20 et 80 sont indicatifs ; l'idée est de concentrer l'effort là où il rapporte le plus."
      controls={
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => setShowVital(true)} disabled={showVital} className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-bold disabled:opacity-40 ${dark ? "border-violet-400 bg-violet-400 text-slate-950" : "border-violet-500 bg-violet-500 text-white"}`}>
            <ArrowRight size={16} /> Cibler les 20 % vitaux
          </button>
          <button type="button" onClick={() => setShowVital(false)} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Réinitialiser
          </button>
        </div>
      }
    >
      <svg viewBox="0 0 300 150" className="h-auto w-full" role="img" aria-label={`Causes d'arrêts triées : ${PARETO_CAUSES.map((c) => `${c.label} ${c.value}%`).join(", ")}. Les ${vitalIndex + 1} premières cumulent ${cumPoints[vitalIndex].cum}%.`}>
        {/* Axes */}
        <line x1={x0} y1={yTop} x2={x0} y2={yBot} stroke={stroke} strokeWidth="1" />
        <line x1={x0} y1={yBot} x2={x1} y2={yBot} stroke={stroke} strokeWidth="1" />
        <text x={x0 - 4} y={yTop + 3} textAnchor="end" fontSize="7" fill={stroke}>%</text>
        {/* Grille + ligne 80 % */}
        {[20, 40, 60, 80].map((v) => (
          <line key={v} x1={x0} y1={yAt(v)} x2={x1} y2={yAt(v)} stroke={v === 80 && showVital ? alert : grid} strokeWidth={v === 80 && showVital ? 1.1 : 0.6} strokeDasharray={v === 80 && showVital ? "4 3" : undefined} />
        ))}
        {showVital && <text x={x1} y={yAt(80) - 3} textAnchor="end" fontSize="7.5" fill={alert} fontWeight="bold">80 %</text>}
        {/* Barres */}
        {PARETO_CAUSES.map((c, i) => {
          const isVital = showVital && i <= vitalIndex;
          return (
            <g key={c.label}>
              <rect x={xCenter(i) - barW / 2} y={yAt(c.value)} width={barW} height={yBot - yAt(c.value)} rx="1.5" fill={isVital ? accent : bar} />
              <text x={xCenter(i)} y={yBot + 9} textAnchor="middle" fontSize="6.6" fill={stroke}>{c.label}</text>
              <text x={xCenter(i)} y={yAt(c.value) - 2} textAnchor="middle" fontSize="6.6" fill={stroke}>{c.value}</text>
            </g>
          );
        })}
        {/* Courbe cumulée */}
        <polyline points={cumPoints.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke={dark ? "#e2e8f0" : "#1e293b"} strokeWidth="1.5" />
        {cumPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.4" fill={dark ? "#e2e8f0" : "#1e293b"} />
        ))}
      </svg>

      <div className={`mt-2 rounded-lg border-2 p-2.5 text-sm ${showVital ? "border-violet-500/40 bg-violet-500/5" : dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
        {showVital ? (
          <p className={dark ? "text-slate-200" : "text-slate-700"}>
            <span className="font-semibold" style={{ color: accent }}>{PARETO_CAUSES.slice(0, vitalIndex + 1).map((c) => c.label).join(" + ")}</span> = {cumPoints[vitalIndex].cum} % des arrêts. On agit d'abord sur ces {vitalIndex + 1} causes : c'est là que l'effort rapporte le plus.
          </p>
        ) : (
          <p className={dark ? "text-slate-300" : "text-slate-600"}>Clique « Cibler les 20 % vitaux » pour repérer les causes prioritaires.</p>
        )}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   MÉTHODE DES 5 POURQUOI — REMONTER À LA CAUSE RACINE
   On part d'un symptôme et on demande « pourquoi ? » à chaque
   réponse, jusqu'à la cause profonde ; l'action corrective agit
   sur cette cause racine, pas sur le symptôme. Repli statique : le
   problème et la consigne restent lisibles sans interaction.
   --------------------------------------------------------------- */

const FIVE_WHYS = {
  problem: "Le convoyeur s'est arrêté en production.",
  steps: [
    "Le moteur a déclenché sa protection thermique (surcharge).",
    "Le moteur a été surchargé : il forçait anormalement.",
    "Le rouleau entraîné tournait difficilement (frottement excessif).",
    "Le roulement du rouleau était grippé.",
    "Le roulement n'était plus lubrifié.",
  ],
  root: "Cause racine : un point de graissage non couvert par le plan de maintenance.",
  action: "Action durable : ajouter ce point au plan de graissage (et remplacer le roulement), plutôt que de seulement réarmer la protection.",
};

function FiveWhys({ dark }: { dark: boolean }) {
  const [depth, setDepth] = useState(0);
  const total = FIVE_WHYS.steps.length;
  const done = depth >= total;

  return (
    <Figure
      dark={dark}
      title="Les 5 pourquoi : du symptôme à la cause racine"
      legend="Clique « Pourquoi ? » pour remonter la chaîne des causes jusqu'à la cause racine. L'action durable agit sur la cause racine, pas sur le symptôme."
      explanation="La méthode des 5 pourquoi consiste à demander « pourquoi ? » à chaque réponse, jusqu'à atteindre une cause sur laquelle on peut agir durablement (la cause racine). Le nombre 5 est indicatif : parfois moins, parfois plus. L'intérêt est d'éviter de traiter seulement le symptôme (ici, réarmer la protection) : sans agir sur la cause racine (le point de graissage oublié), la panne reviendrait. On valide chaque « pourquoi » par des faits, pas par des suppositions."
      controls={
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => setDepth((d) => Math.min(total, d + 1))} disabled={done} className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-bold disabled:opacity-40 ${dark ? "border-violet-400 bg-violet-400 text-slate-950" : "border-violet-500 bg-violet-500 text-white"}`}>
            <ArrowRight size={16} /> Pourquoi ?
          </button>
          <button type="button" onClick={() => setDepth(0)} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Recommencer
          </button>
        </div>
      }
    >
      <div className="p-1">
        {/* Problème de départ */}
        <div className={`rounded-lg border-2 p-3 ${dark ? "border-amber-400/50 bg-amber-400/5" : "border-amber-500/50 bg-amber-500/5"}`}>
          <p className={`text-xs font-bold uppercase tracking-wide ${dark ? "text-amber-300" : "text-amber-600"}`}>Symptôme</p>
          <p className={`text-sm ${dark ? "text-slate-100" : "text-slate-800"}`}>{FIVE_WHYS.problem}</p>
        </div>

        {/* Chaîne des pourquoi */}
        <ol className="mt-2 space-y-1.5">
          {FIVE_WHYS.steps.slice(0, depth).map((step, i) => (
            <li key={i} className={`flex gap-2 rounded-lg border p-2.5 text-sm ${dark ? "border-slate-700 bg-slate-900/60 text-slate-200" : "border-slate-200 bg-white text-slate-700"}`}>
              <span className="shrink-0 font-mono text-xs font-bold text-violet-400">↳ {i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        {done ? (
          <div className="mt-2 space-y-2">
            <div className="rounded-lg border-2 border-emerald-500/40 bg-emerald-500/5 p-3">
              <p className="mb-1 flex items-center gap-2 text-sm font-bold text-emerald-500"><ShieldCheck size={16} /> {FIVE_WHYS.root}</p>
              <p className={`text-sm leading-relaxed ${dark ? "text-slate-200" : "text-slate-700"}`}>{FIVE_WHYS.action}</p>
            </div>
          </div>
        ) : (
          <p className={`mt-2 text-center text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
            {depth === 0 ? "Clique « Pourquoi ? » pour commencer à remonter les causes." : `Pourquoi ${depth}/${total} — continue jusqu'à la cause racine.`}
          </p>
        )}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SURVEILLANCE CONDITIONNELLE — TENDANCE ET SEUIL D'ALERTE
   On révèle les mesures une à une : la grandeur surveillée augmente
   et finit par franchir le seuil d'alerte, ce qui déclenche la
   décision d'intervenir. Repli statique : le seuil, les axes et la
   dernière courbe restent lisibles sans interaction.
   --------------------------------------------------------------- */

const TREND_MEASURES = [1.2, 1.4, 1.5, 1.9, 2.4, 3.1, 3.9]; // ex. vitesse vibratoire (mm/s)
const TREND_THRESHOLD = 3.5;
const TREND_MAX = 4.5;

function ConditionTrend({ dark }: { dark: boolean }) {
  const [shown, setShown] = useState(1);
  const stroke = dark ? "#94a3b8" : "#475569";
  const grid = dark ? "#334155" : "#e2e8f0";
  const line = "#38bdf8";
  const alert = "#ef4444";

  const x0 = 34;
  const x1 = 288;
  const yTop = 20;
  const yBot = 132;
  const n = TREND_MEASURES.length;
  const xAt = (i: number) => x0 + (i * (x1 - x0)) / (n - 1);
  const yAt = (v: number) => yBot - (v / TREND_MAX) * (yBot - yTop);
  const yThreshold = yAt(TREND_THRESHOLD);

  const latest = TREND_MEASURES[shown - 1];
  const crossed = latest >= TREND_THRESHOLD;
  const points = TREND_MEASURES.slice(0, shown).map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ");

  return (
    <Figure
      dark={dark}
      title="Surveillance conditionnelle : suivre la tendance vers le seuil"
      legend="Ajoute les mesures une à une : la grandeur surveillée monte et, au franchissement du seuil d'alerte, on décide d'intervenir. Exemple : vitesse vibratoire en mm/s."
      explanation="En maintenance conditionnelle, on ne regarde pas une mesure isolée mais son évolution dans le temps (la tendance), comparée à une référence saine et à un seuil d'alerte. Tant que la grandeur reste basse, on n'intervient pas ; dès qu'elle approche puis franchit le seuil, on planifie l'intervention — ni trop tôt (gaspillage) ni trop tard (panne). C'est le principe commun à l'analyse vibratoire, la thermographie ou l'analyse d'huile : mesurer, suivre la tendance, réagir au seuil."
      controls={
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => setShown((s) => Math.min(n, s + 1))} disabled={shown >= n} className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-bold disabled:opacity-40 ${dark ? "border-violet-400 bg-violet-400 text-slate-950" : "border-violet-500 bg-violet-500 text-white"}`}>
            <ArrowRight size={16} /> Mesure suivante
          </button>
          <button type="button" onClick={() => setShown(1)} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Recommencer
          </button>
        </div>
      }
    >
      <svg viewBox="0 0 300 152" className="h-auto w-full" role="img" aria-label={`Mesure ${shown} sur ${n} : ${latest.toFixed(1)} mm/s. Seuil d'alerte ${TREND_THRESHOLD} mm/s. ${crossed ? "Seuil dépassé." : "Sous le seuil."}`}>
        {/* Axes */}
        <line x1={x0} y1={yTop} x2={x0} y2={yBot} stroke={stroke} strokeWidth="1" />
        <line x1={x0} y1={yBot} x2={x1} y2={yBot} stroke={stroke} strokeWidth="1" />
        <text x={x0 - 4} y={yTop + 3} textAnchor="end" fontSize="7" fill={stroke}>mm/s</text>
        <text x={x1} y={yBot + 11} textAnchor="end" fontSize="7" fill={stroke}>temps →</text>
        {/* Ligne de seuil */}
        <line x1={x0} y1={yThreshold} x2={x1} y2={yThreshold} stroke={alert} strokeWidth="1.3" strokeDasharray="4 3" />
        <text x={x1} y={yThreshold - 3} textAnchor="end" fontSize="7.5" fill={alert} fontWeight="bold">seuil d'alerte ({TREND_THRESHOLD})</text>
        {/* Grille horizontale légère */}
        {[1, 2, 3, 4].map((v) => (
          <line key={v} x1={x0} y1={yAt(v)} x2={x1} y2={yAt(v)} stroke={grid} strokeWidth="0.6" />
        ))}
        {/* Courbe révélée */}
        {shown > 1 && <polyline points={points} fill="none" stroke={line} strokeWidth="2" />}
        {TREND_MEASURES.slice(0, shown).map((v, i) => {
          const over = v >= TREND_THRESHOLD;
          return <circle key={i} cx={xAt(i)} cy={yAt(v)} r={i === shown - 1 ? 4 : 2.6} fill={over ? alert : line} />;
        })}
      </svg>

      <div className={`mt-2 rounded-lg border-2 p-2.5 text-sm ${crossed ? "border-red-500/50 bg-red-500/5" : dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
        {crossed ? (
          <p className="flex items-center gap-2 font-semibold text-red-500">
            <TriangleAlert size={16} /> Seuil dépassé ({latest.toFixed(1)} mm/s) — planifier l'intervention avant la panne.
          </p>
        ) : (
          <p className={dark ? "text-slate-300" : "text-slate-600"}>
            Mesure {shown}/{n} : <span className="font-semibold" style={{ color: line }}>{latest.toFixed(1)} mm/s</span> — sous le seuil, la tendance monte : on continue de surveiller.
          </p>
        )}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   GRAFCET INTERACTIF — RÈGLES D'ÉVOLUTION
   Petit GRAFCET à 3 étapes (0 initiale, 1, 2) commandant un vérin.
   L'utilisateur franchit les transitions une à une : l'étape active
   se désactive et l'étape suivante s'active. Repli statique : même sans
   interaction, la structure (étapes, transitions, réceptivités,
   actions) reste lisible.
   --------------------------------------------------------------- */

const GRAFCET_STEPS: Array<{ id: number; initial: boolean; action: string; recept: string }> = [
  { id: 0, initial: true, action: "Attente — système prêt", recept: "Départ cycle (dcy)" },
  { id: 1, initial: false, action: "Sortir le vérin (V+)", recept: "Vérin sorti (b)" },
  { id: 2, initial: false, action: "Rentrer le vérin (V−)", recept: "Vérin rentré (a)" },
];

function GrafcetCycle({ dark }: { dark: boolean }) {
  const [active, setActive] = useState(0);
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const activeFill = "#f5b400";
  const cur = GRAFCET_STEPS[active];
  const nextStep = (active + 1) % GRAFCET_STEPS.length;

  const stepY = [20, 92, 164]; // haut de chaque carré d'étape
  const transY = [68, 140, 212]; // position de chaque barre de transition
  const cx = 62; // axe vertical de la chaîne

  return (
    <Figure
      dark={dark}
      title="GRAFCET interactif : franchir les transitions"
      legend="Franchis les transitions une à une : l'étape active se désactive et l'étape suivante s'active. La réceptivité est la condition à droite de chaque barre."
      explanation="Un GRAFCET décrit un fonctionnement séquentiel : des étapes (ce que fait la machine) reliées par des transitions (les conditions de passage, appelées réceptivités). Une transition se franchit lorsque son étape amont est active ET que sa réceptivité est vraie : l'étape amont se désactive alors et l'étape aval s'active. Ici, on suppose la réceptivité vraie quand tu cliques : cela met en évidence la règle d'évolution. À l'étape 1 le vérin sort, à l'étape 2 il rentre, puis on revient à l'étape initiale : le cycle recommence."
      controls={
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => setActive(nextStep)} className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-bold ${dark ? "border-amber-400 bg-amber-400 text-slate-950" : "border-amber-500 bg-amber-500 text-white"}`}>
            <ArrowRight size={16} /> Franchir la transition
          </button>
          <button type="button" onClick={() => setActive(0)} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <RotateCcw size={16} /> Étape initiale
          </button>
        </div>
      }
    >
      <svg viewBox="0 0 240 244" className="h-auto w-full" role="img" aria-label={`Étape active : étape ${cur.id} — ${cur.action}. Réceptivité pour avancer : ${cur.recept}.`}>
        {/* Liaisons verticales */}
        <line x1={cx} y1="48" x2={cx} y2="92" stroke={stroke} strokeWidth="1.5" />
        <line x1={cx} y1="120" x2={cx} y2="164" stroke={stroke} strokeWidth="1.5" />
        <line x1={cx} y1="192" x2={cx} y2="224" stroke={stroke} strokeWidth="1.5" />
        {/* Boucle de retour vers l'étape initiale */}
        <path d={`M${cx} 224 L18 224 L18 30 L${cx - 14} 30`} fill="none" stroke={stroke} strokeWidth="1.5" />
        <path d={`M${cx - 14} 30 l-6 -3 m6 3 l-6 3`} stroke={stroke} strokeWidth="1.5" fill="none" />

        {GRAFCET_STEPS.map((s, i) => {
          const isActive = i === active;
          const y = stepY[i];
          return (
            <g key={s.id}>
              {/* Carré d'étape (double bordure si initiale) */}
              {s.initial && <rect x={cx - 17} y={y - 3} width="34" height="34" rx="2" fill="none" stroke={isActive ? activeFill : stroke} strokeWidth="1.3" />}
              <rect x={cx - 14} y={y} width="28" height="28" rx="2" fill={isActive ? activeFill : box} stroke={isActive ? activeFill : stroke} strokeWidth="1.5" />
              <text x={cx} y={y + 19} textAnchor="middle" fontSize="14" fontWeight="bold" fill={isActive ? "#14151a" : stroke}>{s.id}</text>
              {/* Liaison vers la case action */}
              <line x1={cx + 14} y1={y + 14} x2="104" y2={y + 14} stroke={stroke} strokeWidth="1.2" />
              {/* Case action */}
              <rect x="104" y={y + 3} width="126" height="22" rx="3" fill={box} stroke={isActive ? activeFill : stroke} strokeWidth={isActive ? "1.8" : "1.2"} />
              <text x="110" y={y + 17} fontSize="8.2" fill={stroke}>{s.action}</text>
            </g>
          );
        })}

        {GRAFCET_STEPS.map((s, i) => {
          const ty = transY[i];
          const crossable = i === active;
          return (
            <g key={`t-${s.id}`}>
              {/* Barre de transition */}
              <line x1={cx - 12} y1={ty} x2={cx + 12} y2={ty} stroke={crossable ? activeFill : stroke} strokeWidth={crossable ? "3" : "2"} />
              {/* Réceptivité */}
              <text x={cx + 20} y={ty + 3.5} fontSize="8.5" fontWeight={crossable ? "bold" : "normal"} fill={crossable ? activeFill : stroke}>{s.recept}</text>
            </g>
          );
        })}
      </svg>

      <p className={`mt-2 text-center text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
        Étape active : <span className="font-bold" style={{ color: activeFill }}>étape {cur.id}</span> — pour avancer, réceptivité «&nbsp;{cur.recept}&nbsp;».
      </p>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 9 — LA BOUCLE D'UN SYSTÈME AUTOMATISÉ
   Capteur → partie commande → préactionneur → actionneur → effet.
   --------------------------------------------------------------- */

const SYSTEM_STEPS: Array<{ title: string; text: string }> = [
  { title: "Capteurs", text: "Les capteurs acquièrent l'information (présence, position, niveau…) et l'envoient à la partie commande." },
  { title: "Partie commande (API)", text: "La partie commande (souvent un automate) traite les informations reçues et décide des ordres à envoyer." },
  { title: "Préactionneurs", text: "Les préactionneurs (distributeurs, contacteurs) relaient l'ordre et distribuent l'énergie vers les actionneurs." },
  { title: "Actionneurs", text: "Les actionneurs (vérins, moteurs) agissent sur la matière ou le produit. L'effet obtenu est à nouveau détecté par les capteurs : la boucle recommence." },
];

function AutomatedSystem({ dark }: { dark: boolean }) {
  const [step, setStep] = useState(0);
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const active = "#f5b400";

  const boxes = [
    { x: 18, y: 18, label: "Capteurs" },
    { x: 192, y: 18, label: "Partie commande" },
    { x: 192, y: 112, label: "Préactionneurs" },
    { x: 18, y: 112, label: "Actionneurs" },
  ];

  return (
    <Figure
      dark={dark}
      title="La boucle d'un système automatisé"
      legend="Capteurs (information) → partie commande (décision) → préactionneurs → actionneurs (énergie/action) → l'effet est de nouveau détecté."
      explanation="Un système automatisé fonctionne en boucle : les capteurs informent, la partie commande décide, les préactionneurs distribuent l'énergie et les actionneurs agissent. L'effet produit est à son tour détecté, ce qui referme la boucle. Comprendre cet enchaînement aide à situer une panne : information (capteur, commande) ou énergie (préactionneur, actionneur)."
      controls={
        <div>
          <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">Étape {step + 1}/4</div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold disabled:opacity-40 ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
              <ArrowLeft size={16} /> Précédent
            </button>
            {step < 3 ? (
              <button type="button" onClick={() => setStep((s) => Math.min(3, s + 1))} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950">
                Étape suivante <ArrowRight size={16} />
              </button>
            ) : (
              <button type="button" onClick={() => setStep(0)} className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
                <RotateCcw size={16} /> Recommencer
              </button>
            )}
          </div>
        </div>
      }
    >
      <svg viewBox="0 0 320 170" className="h-auto w-full" role="img" aria-label={`Étape ${step + 1} : ${SYSTEM_STEPS[step].title}`}>
        <defs>
          <marker id="as-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
          </marker>
        </defs>
        {/* Flèches de la boucle (sens horaire) */}
        <line x1="128" y1="38" x2="192" y2="38" stroke={stroke} strokeWidth="1.5" markerEnd="url(#as-arrow)" />
        <line x1="247" y1="58" x2="247" y2="112" stroke={stroke} strokeWidth="1.5" markerEnd="url(#as-arrow)" />
        <line x1="192" y1="132" x2="128" y2="132" stroke={stroke} strokeWidth="1.5" markerEnd="url(#as-arrow)" />
        <line x1="73" y1="112" x2="73" y2="58" stroke={stroke} strokeWidth="1.5" markerEnd="url(#as-arrow)" />
        <text x="160" y="32" textAnchor="middle" fontSize="7" fill={stroke}>informe</text>
        <text x="160" y="146" textAnchor="middle" fontSize="7" fill={stroke}>agit</text>
        <text x="46" y="88" textAnchor="middle" fontSize="7" fill={stroke}>effet</text>
        {/* Boîtes */}
        {boxes.map((b, i) => {
          const on = i === step;
          return (
            <g key={b.label}>
              <rect x={b.x} y={b.y} width="110" height="40" rx="8" fill={on ? active : box} stroke={stroke} strokeWidth={on ? "2" : "1.5"} />
              <text x={b.x + 55} y={b.y + 24} textAnchor="middle" fontSize="9.5" fill={on ? "#14151a" : stroke} fontWeight="bold">{b.label}</text>
            </g>
          );
        })}
      </svg>
      <div className={`mt-2 rounded-lg border p-3 text-sm ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
        <p className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>{step + 1}. {SYSTEM_STEPS[step].title}</p>
        <p className={`mt-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>{SYSTEM_STEPS[step].text}</p>
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 10 — DÉTECTION SANS CONTACT (capteur de proximité)
   L'objet s'approche ; la sortie passe à 1 quand il entre dans la zone.
   --------------------------------------------------------------- */

function SensorDetection({ dark }: { dark: boolean }) {
  const [distance, setDistance] = useState(0); // 0 loin · 1 proche · 2 dans la zone
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const detected = distance === 2;

  const objectX = [250, 210, 150][distance];
  const stateLabel = ["Objet loin", "Objet proche", "Objet détecté"][distance];

  return (
    <Figure
      dark={dark}
      title="Détection sans contact : la sortie du capteur"
      legend="Zone en pointillés = portée du capteur · voyant = sortie du capteur (0 ou 1)."
      explanation="Un détecteur de proximité change l'état de sa sortie quand un objet entre dans sa zone de détection, sans contact physique. Tant que l'objet est hors de portée, la sortie vaut 0 ; dès qu'il entre dans la zone, elle passe à 1. C'est cette information binaire (0/1, dite « tout ou rien ») que reçoit l'automate."
      controls={
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => setDistance((d) => Math.max(0, d - 1))} disabled={distance === 0} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold disabled:opacity-40 ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            <ArrowRight size={16} className="rotate-180" /> Éloigner
          </button>
          <button type="button" onClick={() => setDistance((d) => Math.min(2, d + 1))} disabled={distance === 2} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 disabled:opacity-40">
            Rapprocher l'objet <ArrowLeft size={16} />
          </button>
        </div>
      }
    >
      <svg viewBox="0 0 320 120" className="h-auto w-full" role="img" aria-label={`${stateLabel}. Sortie du capteur : ${detected ? "1" : "0"}.`}>
        {/* Capteur */}
        <rect x="20" y="42" width="46" height="34" rx="4" fill={box} stroke={stroke} strokeWidth="1.5" />
        <text x="43" y="63" textAnchor="middle" fontSize="8" fill={stroke}>capteur</text>
        {/* Zone de détection */}
        <path d="M66 48 L120 34 L120 84 L66 70 Z" fill={detected ? "rgba(16,185,129,0.18)" : "rgba(148,163,184,0.12)"} stroke={detected ? "#10b981" : stroke} strokeDasharray="3 3" />
        <text x="96" y="98" textAnchor="middle" fontSize="7" fill={stroke}>zone</text>
        {/* Objet */}
        <rect x={objectX} y="48" width="26" height="22" rx="2" fill={detected ? "#10b981" : box} stroke={stroke} strokeWidth="1.5" />
        <text x={objectX + 13} y="63" textAnchor="middle" fontSize="7" fill={detected ? "#fff" : stroke}>objet</text>
        {/* Sortie (voyant) */}
        <circle cx="290" cy="30" r="11" fill={detected ? "#10b981" : box} stroke={stroke} strokeWidth="1.5" />
        <text x="290" y="34" textAnchor="middle" fontSize="10" fill={detected ? "#fff" : stroke} fontWeight="bold">{detected ? "1" : "0"}</text>
        <text x="290" y="54" textAnchor="middle" fontSize="7" fill={stroke}>sortie</text>
      </svg>
      <div className="mt-1 flex items-center justify-center gap-2 pb-1 text-center text-xs font-semibold" role="status">
        <span className={detected ? "text-emerald-500" : "text-slate-400"}>{stateLabel} — sortie {detected ? "1 (activée)" : "0 (au repos)"}</span>
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 11 — VÉRIN PNEUMATIQUE DOUBLE EFFET
   Le distributeur envoie l'air d'un côté : la tige sort ou rentre.
   --------------------------------------------------------------- */

function PneumaticCylinder({ dark }: { dark: boolean }) {
  const [out, setOut] = useState(false); // false = tige rentrée
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const air = "#38bdf8";

  const pistonX = out ? 168 : 92;
  const rodTip = pistonX + 118;

  return (
    <Figure
      dark={dark}
      title="Vérin double effet : sortir et rentrer la tige"
      legend="La chambre alimentée (air comprimé) pousse le piston ; l'autre chambre est à l'échappement. Inverser l'alimentation inverse le mouvement."
      explanation="Un vérin double effet reçoit l'air comprimé alternativement d'un côté puis de l'autre, via un distributeur. Quand l'air entre du côté gauche, il pousse le piston et la tige sort ; quand il entre du côté droit, la tige rentre. Le côté opposé est alors à l'échappement. C'est ce que commande le préactionneur (distributeur) sur ordre de la partie commande."
      controls={
        <div className="flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => setOut(false)} aria-pressed={!out} className={`flex-1 rounded-lg border-2 px-4 py-2.5 text-sm font-bold ${!out ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            Rentrer la tige
          </button>
          <button type="button" onClick={() => setOut(true)} aria-pressed={out} className={`flex-1 rounded-lg border-2 px-4 py-2.5 text-sm font-bold ${out ? "border-amber-400 bg-amber-400 text-slate-950" : dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
            Sortir la tige
          </button>
        </div>
      }
    >
      <svg viewBox="0 0 320 130" className="h-auto w-full" role="img" aria-label={`Tige ${out ? "sortie" : "rentrée"}.`}>
        {/* Corps du vérin */}
        <rect x="60" y="44" width="140" height="42" rx="4" fill={box} stroke={stroke} strokeWidth="1.5" />
        {/* Chambre gauche */}
        <rect x="61" y="45" width={pistonX - 61} height="40" fill={out ? "rgba(56,189,248,0.25)" : "rgba(148,163,184,0.1)"} />
        {/* Chambre droite */}
        <rect x={pistonX + 6} y="45" width={199 - (pistonX + 6)} height="40" fill={!out ? "rgba(56,189,248,0.25)" : "rgba(148,163,184,0.1)"} />
        {/* Piston */}
        <rect x={pistonX} y="46" width="6" height="38" fill={stroke} />
        {/* Tige */}
        <line x1={pistonX + 6} y1="65" x2={rodTip} y2="65" stroke={stroke} strokeWidth="4" />
        <circle cx={rodTip} cy="65" r="3" fill={stroke} />

        {/* Orifices / distributeur */}
        <line x1="80" y1="86" x2="80" y2="108" stroke={out ? air : stroke} strokeWidth={out ? "2.5" : "1.5"} />
        <line x1="180" y1="86" x2="180" y2="108" stroke={!out ? air : stroke} strokeWidth={!out ? "2.5" : "1.5"} />
        <rect x="70" y="108" width="120" height="16" rx="3" fill={box} stroke={stroke} strokeWidth="1.2" />
        <text x="130" y="119" textAnchor="middle" fontSize="7.5" fill={stroke}>distributeur</text>

        {/* Étiquettes des chambres */}
        <text x={80} y="40" textAnchor="middle" fontSize="7" fill={out ? air : stroke}>{out ? "air comprimé" : "échappement"}</text>
        <text x={180} y="40" textAnchor="middle" fontSize="7" fill={!out ? air : stroke}>{!out ? "air comprimé" : "échappement"}</text>
      </svg>
      <div className="mt-1 flex items-center justify-center gap-2 pb-1 text-center text-xs font-semibold text-amber-500" role="status">
        {out ? "Air à gauche → la tige sort" : "Air à droite → la tige rentre"}
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   SCHÉMA 12 — LE CYCLE DE SCRUTATION DE L'AUTOMATE
   Lire les entrées → traiter le programme → écrire les sorties (en boucle).
   --------------------------------------------------------------- */

const SCAN_STEPS: Array<{ title: string; text: string }> = [
  { title: "Lire les entrées", text: "L'automate lit l'état de toutes ses entrées (capteurs) et en fait une « image » figée pour le reste du cycle." },
  { title: "Traiter le programme", text: "L'automate exécute son programme à partir de l'image des entrées et décide de l'état des sorties." },
  { title: "Écrire les sorties", text: "L'automate met à jour ses sorties (préactionneurs) selon le résultat du programme, puis recommence : le cycle est très rapide (quelques millisecondes)." },
];

function PLCScanCycle({ dark }: { dark: boolean }) {
  const [step, setStep] = useState(0);
  const stroke = dark ? "#94a3b8" : "#475569";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const active = "#f5b400";

  const boxes = [
    { x: 12, y: 40, label: "Lire les entrées" },
    { x: 116, y: 40, label: "Traiter le programme" },
    { x: 224, y: 40, label: "Écrire les sorties" },
  ];

  return (
    <Figure
      dark={dark}
      title="Le cycle de scrutation de l'automate"
      legend="L'automate répète en boucle : lire les entrées, traiter le programme, écrire les sorties — en quelques millisecondes."
      explanation="L'automate ne réagit pas « en continu » : il travaille par cycles très rapides. À chaque cycle, il lit d'abord l'état de toutes ses entrées (une image figée), exécute son programme, puis met à jour ses sorties. Il recommence ensuite immédiatement. Comprendre ce cycle explique pourquoi l'automate réagit avec un très léger délai et pourquoi l'image des entrées est prise en début de cycle."
      controls={
        <div>
          <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">Étape {step + 1}/3</div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold disabled:opacity-40 ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
              <ArrowLeft size={16} /> Précédent
            </button>
            {step < 2 ? (
              <button type="button" onClick={() => setStep((s) => Math.min(2, s + 1))} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950">
                Étape suivante <ArrowRight size={16} />
              </button>
            ) : (
              <button type="button" onClick={() => setStep(0)} className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-slate-600 text-slate-200" : "border-slate-300 text-slate-700"}`}>
                <RotateCcw size={16} /> Recommencer le cycle
              </button>
            )}
          </div>
        </div>
      }
    >
      <svg viewBox="0 0 320 120" className="h-auto w-full" role="img" aria-label={`Étape ${step + 1} : ${SCAN_STEPS[step].title}`}>
        <defs>
          <marker id="scan-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
          </marker>
        </defs>
        {boxes.map((b, i) => {
          const on = i === step;
          return (
            <g key={b.label}>
              <rect x={b.x} y={b.y} width="84" height="40" rx="7" fill={on ? active : box} stroke={stroke} strokeWidth={on ? "2" : "1.5"} />
              <text x={b.x + 42} y={b.y + 18} textAnchor="middle" fontSize="8" fill={on ? "#14151a" : stroke} fontWeight="bold">{b.label.split(" ")[0]}</text>
              <text x={b.x + 42} y={b.y + 30} textAnchor="middle" fontSize="7" fill={on ? "#14151a" : stroke}>{b.label.split(" ").slice(1).join(" ")}</text>
              {i < 2 && <line x1={b.x + 84} y1={b.y + 20} x2={b.x + 116} y2={b.y + 20} stroke={stroke} strokeWidth="1.5" markerEnd="url(#scan-arrow)" />}
            </g>
          );
        })}
        {/* Flèche de bouclage */}
        <path d="M266 80 L266 100 L54 100 L54 80" fill="none" stroke={stroke} strokeWidth="1.5" markerEnd="url(#scan-arrow)" />
        <text x="160" y="114" textAnchor="middle" fontSize="7" fill={stroke}>puis on recommence (boucle)</text>
      </svg>
      <div className={`mt-2 rounded-lg border p-3 text-sm ${dark ? "border-slate-700 bg-slate-900/60" : "border-slate-200 bg-white"}`}>
        <p className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>{step + 1}. {SCAN_STEPS[step].title}</p>
        <p className={`mt-1 ${dark ? "text-slate-300" : "text-slate-700"}`}>{SCAN_STEPS[step].text}</p>
      </div>
    </Figure>
  );
}

/* ---------------------------------------------------------------
   Aiguillage
   --------------------------------------------------------------- */

export function InteractiveSchema({ type, dark }: { type: InteractiveSchemaType; dark: boolean }) {
  if (type === "consignation-interactive") return <ConsignationInteractive dark={dark} />;
  if (type === "circuit-states") return <CircuitStates dark={dark} />;
  if (type === "habilitation-decoder") return <HabilitationDecoder dark={dark} />;
  if (type === "neutral-regimes") return <NeutralRegimes dark={dark} />;
  if (type === "contactor-thermal") return <ContactorThermal dark={dark} />;
  if (type === "rotation-direction") return <RotationDirection dark={dark} />;
  if (type === "symbol-decoder") return <SymbolDecoder dark={dark} />;
  if (type === "diagnostic-tree") return <DiagnosticTree dark={dark} />;
  if (type === "automated-system") return <AutomatedSystem dark={dark} />;
  if (type === "sensor-detection") return <SensorDetection dark={dark} />;
  if (type === "pneumatic-cylinder") return <PneumaticCylinder dark={dark} />;
  if (type === "plc-scan-cycle") return <PLCScanCycle dark={dark} />;
  if (type === "auto-diagnostic-tree") return <AutoDiagnosticTree dark={dark} />;
  if (type === "grafcet-cycle") return <GrafcetCycle dark={dark} />;
  if (type === "maintenance-strategy") return <MaintenanceStrategy dark={dark} />;
  if (type === "condition-trend") return <ConditionTrend dark={dark} />;
  if (type === "five-whys") return <FiveWhys dark={dark} />;
  if (type === "pareto-chart") return <ParetoChart dark={dark} />;
  return null;
}
