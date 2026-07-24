import { useState } from "react";
import { ArrowLeft, ArrowRight, Lightbulb, Pause, Play, RotateCcw, TriangleAlert, Zap } from "lucide-react";
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
   Aiguillage
   --------------------------------------------------------------- */

export function InteractiveSchema({ type, dark }: { type: InteractiveSchemaType; dark: boolean }) {
  if (type === "consignation-interactive") return <ConsignationInteractive dark={dark} />;
  if (type === "circuit-states") return <CircuitStates dark={dark} />;
  if (type === "habilitation-decoder") return <HabilitationDecoder dark={dark} />;
  if (type === "neutral-regimes") return <NeutralRegimes dark={dark} />;
  if (type === "contactor-thermal") return <ContactorThermal dark={dark} />;
  return null;
}
