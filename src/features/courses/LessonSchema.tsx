import { useId } from "react";
import type { LessonSchemaType } from "../../types";

/* ---------------------------- SVG SCHEMAS ---------------------------- */

interface LessonSchemaProps {
  type: LessonSchemaType;
  dark: boolean;
}

export function LessonSchema({ type, dark }: LessonSchemaProps) {
  const arrowId = `lesson-schema-arrow-${useId().replace(/:/g, "")}`;
  const arrowUrl = `url(#${arrowId})`;
  const stroke = dark ? "#94a3b8" : "#475569";
  const accent = "#f5b400";
  const box = dark ? "#1e293b" : "#f1f5f9";
  const arrowDefinition = (
    <defs>
      <marker id={arrowId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
      </marker>
    </defs>
  );

  if (type === "orgchart") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-32">
        <rect x="110" y="6" width="100" height="28" rx="4" fill={box} stroke={stroke} />
        <text x="160" y="24" textAnchor="middle" fontSize="10" fill={stroke}>Direction</text>
        <line x1="160" y1="34" x2="160" y2="55" stroke={stroke} />
        <line x1="45" y1="55" x2="275" y2="55" stroke={stroke} />
        {([
          [45, "Production"],
          [160, "Maintenance"],
          [275, "Qualité"],
        ] as Array<[number, string]>).map(([x, label], i) => (
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
        {arrowDefinition}
        {["Corrective", "Préventive sys.", "Préventive cond.", "Améliorative"].map((t, i) => (
          <g key={i}>
            <rect x={10 + i * 78} y="30" width="68" height="50" rx="6" fill={box} stroke={i === 3 ? accent : stroke} strokeWidth={i === 3 ? 2 : 1} />
            <text x={10 + i * 78 + 34} y="58" textAnchor="middle" fontSize="9" fill={stroke}>{t}</text>
          </g>
        ))}
        <line x1="10" y1="20" x2="310" y2="20" stroke={stroke} markerEnd={arrowUrl} />
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
        {arrowDefinition}
        <rect x="10" y="30" width="90" height="30" rx="4" fill={box} stroke={stroke} />
        <text x="55" y="49" textAnchor="middle" fontSize="9" fill={stroke}>Puissance fournie</text>
        <line x1="100" y1="45" x2="150" y2="45" stroke={stroke} markerEnd={arrowUrl} />
        <rect x="150" y="15" width="80" height="60" rx="6" fill={accent} />
        <text x="190" y="49" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">Moteur η</text>
        <line x1="230" y1="35" x2="280" y2="35" stroke={stroke} markerEnd={arrowUrl} />
        <text x="300" y="32" textAnchor="middle" fontSize="8" fill={stroke}>utile</text>
        <line x1="230" y1="60" x2="280" y2="75" stroke={stroke} strokeDasharray="3,2" />
        <text x="298" y="80" textAnchor="middle" fontSize="8" fill={stroke}>pertes</text>
      </svg>
    );
  }
  if (type === "torque-diagram") {
    return (
      <svg viewBox="0 0 320 100" className="w-full h-28">
        {arrowDefinition}
        <circle cx="160" cy="55" r="6" fill={stroke} />
        <line x1="160" y1="55" x2="260" y2="55" stroke={stroke} strokeWidth="3" />
        <text x="210" y="45" textAnchor="middle" fontSize="9" fill={stroke}>distance d</text>
        <line x1="260" y1="55" x2="260" y2="20" stroke={accent} strokeWidth="3" markerEnd={arrowUrl} />
        <text x="272" y="35" fontSize="9" fill={accent}>Force F</text>
        <text x="160" y="85" textAnchor="middle" fontSize="9" fill={stroke}>C = F × d</text>
      </svg>
    );
  }
  if (type === "measurement-process") {
    return (
      <svg viewBox="0 0 360 110" className="h-28 w-full" role="img" aria-label="Méthode de mesure fiable en cinq étapes">
        {[
          ["1", "Définir"],
          ["2", "Estimer"],
          ["3", "Mesurer"],
          ["4", "Noter"],
          ["5", "Comparer"],
        ].map(([number, label], index) => (
          <g key={label}>
            <circle cx={36 + index * 72} cy="42" r="22" fill={index === 2 ? accent : box} stroke={stroke} strokeWidth={index === 2 ? 2 : 1} />
            <text x={36 + index * 72} y="47" textAnchor="middle" fontSize="13" fill={index === 2 ? "#14151a" : stroke} fontWeight="bold">{number}</text>
            <text x={36 + index * 72} y="82" textAnchor="middle" fontSize="9" fill={stroke}>{label}</text>
            {index < 4 && <line x1={59 + index * 72} y1="42" x2={85 + index * 72} y2="42" stroke={stroke} />}
          </g>
        ))}
      </svg>
    );
  }
  if (type === "unit-scale") {
    return (
      <svg viewBox="0 0 360 120" className="h-28 w-full" role="img" aria-label="Échelle de conversion des unités de longueur">
        <text x="180" y="18" textAnchor="middle" fontSize="10" fill={stroke}>Longueur : chaque pas vaut × 1 000 ou ÷ 1 000</text>
        {[
          ["m", "mètre"],
          ["mm", "millimètre"],
          ["µm", "micromètre"],
        ].map(([symbol, label], index) => (
          <g key={symbol}>
            <rect x={25 + index * 120} y="42" width="70" height="36" rx="7" fill={index === 1 ? accent : box} stroke={stroke} />
            <text x={60 + index * 120} y="65" textAnchor="middle" fontSize="13" fill={index === 1 ? "#14151a" : stroke} fontWeight="bold">{symbol}</text>
            <text x={60 + index * 120} y="96" textAnchor="middle" fontSize="8" fill={stroke}>{label}</text>
            {index < 2 && (
              <g>
                <line x1={96 + index * 120} y1="55" x2={142 + index * 120} y2="55" stroke={stroke} />
                <text x={119 + index * 120} y="49" textAnchor="middle" fontSize="8" fill={accent}>× 1000</text>
                <text x={119 + index * 120} y="75" textAnchor="middle" fontSize="8" fill={stroke}>÷ 1000</text>
              </g>
            )}
          </g>
        ))}
      </svg>
    );
  }
  if (type === "force-diagram") {
    return (
      <svg viewBox="0 0 360 150" className="h-36 w-full" role="img" aria-label="Différence entre masse, poids et forces appliquées à une charge">
        <rect x="135" y="52" width="90" height="48" rx="6" fill={box} stroke={stroke} strokeWidth="2" />
        <text x="180" y="72" textAnchor="middle" fontSize="10" fill={stroke}>charge</text>
        <text x="180" y="88" textAnchor="middle" fontSize="10" fill={accent} fontWeight="bold">m = 20 kg</text>
        <line x1="180" y1="100" x2="180" y2="137" stroke={accent} strokeWidth="3" />
        <polygon points="180,144 174,134 186,134" fill={accent} />
        <text x="194" y="132" fontSize="9" fill={accent}>P = m × g</text>
        <line x1="135" y1="76" x2="88" y2="76" stroke={stroke} strokeWidth="3" />
        <polygon points="80,76 91,70 91,82" fill={stroke} />
        <text x="55" y="68" textAnchor="middle" fontSize="9" fill={stroke}>force F</text>
        <line x1="225" y1="76" x2="272" y2="76" stroke={stroke} strokeWidth="3" />
        <polygon points="280,76 269,70 269,82" fill={stroke} />
        <text x="305" y="68" textAnchor="middle" fontSize="9" fill={stroke}>réaction</text>
        <text x="180" y="25" textAnchor="middle" fontSize="10" fill={stroke}>La masse s’exprime en kg · les forces en N</text>
      </svg>
    );
  }
  if (type === "speed-relationship") {
    return (
      <svg viewBox="0 0 360 135" className="h-32 w-full" role="img" aria-label="Relation entre vitesse de rotation d’un tambour et vitesse linéaire d’une bande">
        <circle cx="92" cy="68" r="38" fill={box} stroke={accent} strokeWidth="3" />
        <circle cx="92" cy="68" r="4" fill={stroke} />
        <path d="M 68 45 A 34 34 0 0 1 116 45" fill="none" stroke={accent} strokeWidth="2" />
        <polygon points="119,48 110,47 115,39" fill={accent} />
        <text x="92" y="20" textAnchor="middle" fontSize="10" fill={stroke}>rotation n (tr/min)</text>
        <line x1="92" y1="106" x2="92" y2="122" stroke={stroke} />
        <text x="92" y="132" textAnchor="middle" fontSize="9" fill={stroke}>diamètre D</text>
        <line x1="130" y1="52" x2="325" y2="52" stroke={stroke} strokeWidth="5" />
        <line x1="130" y1="84" x2="325" y2="84" stroke={stroke} strokeWidth="5" />
        <line x1="186" y1="38" x2="275" y2="38" stroke={accent} strokeWidth="3" />
        <polygon points="284,38 272,31 272,45" fill={accent} />
        <text x="230" y="26" textAnchor="middle" fontSize="10" fill={accent}>vitesse v (m/s)</text>
        <text x="230" y="112" textAnchor="middle" fontSize="10" fill={stroke}>v = π × D × n / 60</text>
      </svg>
    );
  }
  if (type === "power-torque") {
    return (
      <svg viewBox="0 0 360 145" className="h-36 w-full" role="img" aria-label="Relation entre puissance, couple et vitesse de rotation">
        <circle cx="92" cy="72" r="40" fill={box} stroke={accent} strokeWidth="3" />
        <circle cx="92" cy="72" r="7" fill={stroke} />
        <path d="M 62 50 A 38 38 0 0 1 121 52" fill="none" stroke={accent} strokeWidth="3" />
        <polygon points="126,55 115,53 121,44" fill={accent} />
        <text x="92" y="20" textAnchor="middle" fontSize="10" fill={stroke}>rotation n</text>
        <line x1="132" y1="72" x2="195" y2="72" stroke={stroke} strokeWidth="5" />
        <polygon points="202,72 191,65 191,79" fill={stroke} />
        <text x="165" y="60" textAnchor="middle" fontSize="9" fill={stroke}>couple C</text>
        <rect x="215" y="44" width="120" height="56" rx="8" fill={box} stroke={stroke} />
        <text x="275" y="66" textAnchor="middle" fontSize="10" fill={stroke}>Puissance mécanique</text>
        <text x="275" y="84" textAnchor="middle" fontSize="12" fill={accent} fontWeight="bold">P = C × ω</text>
        <text x="180" y="130" textAnchor="middle" fontSize="10" fill={stroke}>P(kW) ≈ C(N·m) × n(tr/min) / 9 550</text>
      </svg>
    );
  }
  if (type === "bolted-joint") {
    return (
      <svg viewBox="0 0 360 150" className="h-36 w-full" role="img" aria-label="Principe d’un assemblage boulonné serré au couple">
        <rect x="58" y="50" width="244" height="22" rx="3" fill={box} stroke={stroke} />
        <rect x="58" y="78" width="244" height="22" rx="3" fill={box} stroke={stroke} />
        <rect x="166" y="25" width="28" height="100" rx="5" fill={accent} stroke={stroke} strokeWidth="2" />
        <polygon points="150,25 210,25 200,10 160,10" fill={box} stroke={stroke} />
        <polygon points="150,125 210,125 200,140 160,140" fill={box} stroke={stroke} />
        <line x1="145" y1="45" x2="145" y2="12" stroke={accent} strokeWidth="3" />
        <polygon points="145,7 139,18 151,18" fill={accent} />
        <line x1="215" y1="105" x2="215" y2="138" stroke={accent} strokeWidth="3" />
        <polygon points="215,143 209,132 221,132" fill={accent} />
        <text x="88" y="37" fontSize="9" fill={stroke}>précharge</text>
        <text x="236" y="121" fontSize="9" fill={stroke}>traction vis</text>
        <text x="180" y="117" textAnchor="middle" fontSize="9" fill={stroke}>pièces comprimées</text>
      </svg>
    );
  }
  if (type === "transmission-ratio") {
    return (
      <svg viewBox="0 0 360 150" className="h-36 w-full" role="img" aria-label="Rapport de transmission entre une roue menante et une roue menée">
        <circle cx="100" cy="70" r="35" fill={box} stroke={accent} strokeWidth="3" />
        <circle cx="260" cy="70" r="58" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="100" cy="70" r="5" fill={stroke} />
        <circle cx="260" cy="70" r="5" fill={stroke} />
        <line x1="100" y1="35" x2="260" y2="12" stroke={accent} strokeWidth="3" />
        <line x1="100" y1="105" x2="260" y2="128" stroke={accent} strokeWidth="3" />
        <text x="100" y="73" textAnchor="middle" fontSize="10" fill={stroke}>Z₁ = 20</text>
        <text x="260" y="73" textAnchor="middle" fontSize="10" fill={stroke}>Z₂ = 60</text>
        <text x="100" y="140" textAnchor="middle" fontSize="9" fill={stroke}>menante n₁</text>
        <text x="260" y="145" textAnchor="middle" fontSize="9" fill={stroke}>menée n₂</text>
        <text x="180" y="20" textAnchor="middle" fontSize="10" fill={accent}>i = n₁ / n₂ = Z₂ / Z₁</text>
      </svg>
    );
  }
  if (type === "tool-selection") {
    return (
      <svg viewBox="0 0 360 145" className="h-36 w-full" role="img" aria-label="Choix d'un outil adapté à la fixation et à l'effort">
        <rect x="18" y="52" width="82" height="42" rx="7" fill={box} stroke={stroke} />
        <text x="59" y="69" textAnchor="middle" fontSize="9" fill={stroke}>Fixation</text>
        <text x="59" y="84" textAnchor="middle" fontSize="10" fill={accent} fontWeight="bold">forme + taille</text>
        <line x1="100" y1="73" x2="137" y2="73" stroke={stroke} strokeWidth="2" />
        <polygon points="144,73 133,67 133,79" fill={stroke} />
        <rect x="144" y="36" width="92" height="74" rx="8" fill={accent} stroke={stroke} strokeWidth="2" />
        <text x="190" y="61" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">OUTIL</text>
        <text x="190" y="78" textAnchor="middle" fontSize="9" fill="#14151a">bon profil</text>
        <text x="190" y="94" textAnchor="middle" fontSize="9" fill="#14151a">bon état</text>
        <line x1="236" y1="73" x2="273" y2="73" stroke={stroke} strokeWidth="2" />
        <polygon points="280,73 269,67 269,79" fill={stroke} />
        <rect x="280" y="52" width="62" height="42" rx="7" fill={box} stroke={stroke} />
        <text x="311" y="69" textAnchor="middle" fontSize="9" fill={stroke}>Effort</text>
        <text x="311" y="84" textAnchor="middle" fontSize="9" fill={accent}>contrôlé</text>
        <text x="180" y="20" textAnchor="middle" fontSize="10" fill={stroke}>Observer → choisir → contrôler → engager → agir</text>
        <text x="180" y="132" textAnchor="middle" fontSize="9" fill={stroke}>Si ça glisse ou se déforme : arrêter et réévaluer</text>
      </svg>
    );
  }
  if (type === "force-path") {
    return (
      <svg viewBox="0 0 360 155" className="h-36 w-full" role="img" aria-label="Chemin correct de l'effort lors du montage d'un roulement sur un arbre">
        <line x1="28" y1="82" x2="332" y2="82" stroke={stroke} strokeWidth="18" />
        <circle cx="190" cy="82" r="48" fill={box} stroke={stroke} strokeWidth="12" />
        <circle cx="190" cy="82" r="27" fill="none" stroke={accent} strokeWidth="10" />
        <rect x="90" y="44" width="44" height="76" rx="4" fill={box} stroke={accent} strokeWidth="3" />
        <line x1="47" y1="82" x2="86" y2="82" stroke={accent} strokeWidth="5" />
        <polygon points="91,82 80,75 80,89" fill={accent} />
        <line x1="134" y1="82" x2="158" y2="82" stroke={accent} strokeWidth="5" />
        <polygon points="163,82 152,75 152,89" fill={accent} />
        <text x="68" y="65" textAnchor="middle" fontSize="9" fill={accent}>effort</text>
        <text x="112" y="135" textAnchor="middle" fontSize="9" fill={stroke}>tube sur bague intérieure</text>
        <text x="190" y="20" textAnchor="middle" fontSize="10" fill={stroke}>Emmanchement sur arbre : effort vers la bague serrée</text>
        <text x="282" y="125" textAnchor="middle" fontSize="9" fill={stroke}>pas par les éléments roulants</text>
      </svg>
    );
  }
  if (type === "measurement-chain") {
    return (
      <svg viewBox="0 0 380 135" className="h-32 w-full" role="img" aria-label="Chaîne qui transforme une question technique en décision grâce à une mesure traçable">
        {[["Besoin", "quoi ?"], ["Moyen", "adapté ?"], ["Mesure", "répétée"], ["Référence", "tolérance"], ["Décision", "tracée"]].map(([title, subtitle], index) => (
          <g key={title}>
            <rect x={6 + index * 75} y="42" width="64" height="48" rx="7" fill={index === 2 ? accent : box} stroke={stroke} />
            <text x={38 + index * 75} y="62" textAnchor="middle" fontSize="9" fill={index === 2 ? "#14151a" : stroke} fontWeight="bold">{title}</text>
            <text x={38 + index * 75} y="78" textAnchor="middle" fontSize="8" fill={index === 2 ? "#14151a" : stroke}>{subtitle}</text>
            {index < 4 && <line x1={70 + index * 75} y1="66" x2={81 + index * 75} y2="66" stroke={stroke} strokeWidth="2" />}
          </g>
        ))}
        <text x="190" y="20" textAnchor="middle" fontSize="10" fill={stroke}>Une valeur seule n'est pas encore une décision</text>
        <text x="190" y="116" textAnchor="middle" fontSize="9" fill={accent}>Nettoyer · vérifier le zéro · maîtriser le contact · noter les conditions</text>
      </svg>
    );
  }
  if (type === "caliper-reading") {
    return (
      <svg viewBox="0 0 380 150" className="h-36 w-full" role="img" aria-label="Pied à coulisse mesurant le diamètre extérieur d'un arbre">
        <line x1="35" y1="72" x2="345" y2="72" stroke={stroke} strokeWidth="9" />
        <rect x="55" y="50" width="88" height="44" rx="6" fill={box} stroke={accent} strokeWidth="2" />
        <rect x="247" y="50" width="78" height="44" rx="6" fill={accent} stroke={stroke} strokeWidth="2" />
        <line x1="143" y1="28" x2="143" y2="120" stroke={stroke} strokeWidth="5" />
        <line x1="247" y1="28" x2="247" y2="120" stroke={stroke} strokeWidth="5" />
        <circle cx="195" cy="74" r="47" fill={box} stroke={stroke} strokeWidth="3" />
        <line x1="148" y1="124" x2="242" y2="124" stroke={accent} strokeWidth="3" />
        <polygon points="143,124 154,118 154,130" fill={accent} />
        <polygon points="247,124 236,118 236,130" fill={accent} />
        <text x="195" y="144" textAnchor="middle" fontSize="9" fill={accent}>diamètre extérieur</text>
        <text x="99" y="67" textAnchor="middle" fontSize="9" fill={stroke}>coulisseau</text>
        <text x="286" y="68" textAnchor="middle" fontSize="9" fill="#14151a" fontWeight="bold">24,36 mm</text>
        <text x="190" y="16" textAnchor="middle" fontSize="10" fill={stroke}>Faces propres · becs parallèles · effort léger</text>
      </svg>
    );
  }
  if (type === "micrometer-reading") {
    return (
      <svg viewBox="0 0 380 150" className="h-36 w-full" role="img" aria-label="Lecture d'un micromètre extérieur avec manchon, tambour et limiteur d'effort">
        <path d="M 55 112 C 20 112 20 38 55 38 L 115 38 L 115 62 L 72 62 C 61 62 61 88 72 88 L 115 88 L 115 112 Z" fill={box} stroke={stroke} strokeWidth="4" />
        <line x1="115" y1="75" x2="178" y2="75" stroke={accent} strokeWidth="9" />
        <rect x="178" y="52" width="92" height="46" rx="5" fill={box} stroke={stroke} strokeWidth="2" />
        <rect x="270" y="46" width="64" height="58" rx="8" fill={accent} stroke={stroke} strokeWidth="2" />
        <rect x="334" y="57" width="30" height="36" rx="7" fill={box} stroke={stroke} />
        {[190, 210, 230, 250].map((x) => <line key={x} x1={x} y1="60" x2={x} y2="72" stroke={stroke} />)}
        {[282, 294, 306, 318].map((x) => <line key={x} x1={x} y1="48" x2={x} y2="62" stroke="#14151a" />)}
        <text x="224" y="119" textAnchor="middle" fontSize="9" fill={stroke}>manchon : millimètres + demi-millimètre</text>
        <text x="301" y="126" textAnchor="middle" fontSize="9" fill={accent}>tambour : centièmes</text>
        <text x="349" y="45" textAnchor="middle" fontSize="8" fill={stroke}>limiteur</text>
        <text x="190" y="18" textAnchor="middle" fontSize="10" fill={stroke}>Lire le manchon, puis ajouter le tambour</text>
      </svg>
    );
  }
  if (type === "dial-indicator") {
    return (
      <svg viewBox="0 0 380 155" className="h-36 w-full" role="img" aria-label="Comparateur contrôlant le faux-rond d'un arbre tourné manuellement">
        <rect x="20" y="122" width="340" height="16" rx="4" fill={box} stroke={stroke} />
        <line x1="105" y1="122" x2="105" y2="42" stroke={stroke} strokeWidth="7" />
        <line x1="105" y1="52" x2="180" y2="52" stroke={stroke} strokeWidth="6" />
        <circle cx="216" cy="52" r="38" fill={box} stroke={accent} strokeWidth="3" />
        <line x1="216" y1="52" x2="237" y2="31" stroke={accent} strokeWidth="3" />
        <circle cx="216" cy="52" r="4" fill={stroke} />
        <line x1="216" y1="90" x2="216" y2="108" stroke={stroke} strokeWidth="4" />
        <circle cx="216" cy="112" r="5" fill={accent} />
        <ellipse cx="270" cy="115" rx="62" ry="20" fill={box} stroke={stroke} strokeWidth="3" />
        <line x1="208" y1="115" x2="332" y2="115" stroke={stroke} strokeWidth="5" />
        <text x="216" y="56" textAnchor="middle" fontSize="8" fill={stroke}>0,08 mm</text>
        <text x="270" y="150" textAnchor="middle" fontSize="9" fill={stroke}>tourner à la main, machine consignée</text>
        <text x="190" y="16" textAnchor="middle" fontSize="10" fill={stroke}>Support rigide · touche préchargée · axe correct</text>
      </svg>
    );
  }
  if (type === "measurement-report") {
    return (
      <svg viewBox="0 0 380 150" className="h-36 w-full" role="img" aria-label="Fiche de contrôle reliant identification, relevés, référence et décision">
        <rect x="58" y="10" width="264" height="130" rx="8" fill={box} stroke={stroke} strokeWidth="2" />
        <rect x="75" y="24" width="230" height="22" rx="4" fill={accent} />
        <text x="190" y="39" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">FICHE DE CONTRÔLE DIMENSIONNEL</text>
        {[
          ["Équipement / point", "Arbre M2 · portée A"],
          ["Moyen / identifiant", "Micromètre MIC-07"],
          ["Valeurs", "29,98 · 29,99 · 29,98 mm"],
          ["Référence", "30,00 ± 0,03 mm"],
          ["Décision / action", "Conforme · surveiller"],
        ].map(([label, value], index) => (
          <g key={label}>
            <text x="78" y={62 + index * 16} fontSize="8" fill={stroke}>{label}</text>
            <text x="190" y={62 + index * 16} fontSize="8" fill={index === 4 ? accent : stroke} fontWeight={index === 4 ? "bold" : "normal"}>{value}</text>
          </g>
        ))}
        <text x="190" y="132" textAnchor="middle" fontSize="8" fill={stroke}>date · opérateur · conditions · validation</text>
      </svg>
    );
  }
  if (type === "blueprint-document") {
    return (
      <svg viewBox="0 0 380 170" className="h-40 w-full" role="img" aria-label="Organisation d'un plan mécanique avec zone graphique, cartouche et indice">
        <rect x="20" y="12" width="340" height="146" fill={box} stroke={stroke} strokeWidth="2" />
        <rect x="225" y="112" width="135" height="46" fill="none" stroke={accent} strokeWidth="2" />
        <line x1="225" y1="132" x2="360" y2="132" stroke={stroke} />
        <line x1="285" y1="112" x2="285" y2="158" stroke={stroke} />
        <line x1="330" y1="112" x2="330" y2="158" stroke={stroke} />
        <rect x="74" y="42" width="108" height="48" rx="4" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="128" cy="66" r="14" fill="none" stroke={accent} strokeWidth="3" />
        <text x="128" y="105" textAnchor="middle" fontSize="9" fill={stroke}>zone graphique</text>
        <text x="255" y="126" textAnchor="middle" fontSize="8" fill={stroke}>DÉSIGNATION</text>
        <text x="307" y="126" textAnchor="middle" fontSize="8" fill={stroke}>ÉCHELLE</text>
        <text x="345" y="126" textAnchor="middle" fontSize="8" fill={stroke}>IND.</text>
        <text x="255" y="148" textAnchor="middle" fontSize="8" fill={accent}>PALIER</text>
        <text x="307" y="148" textAnchor="middle" fontSize="9" fill={accent}>1:2</text>
        <text x="345" y="148" textAnchor="middle" fontSize="10" fill={accent}>C</text>
        <text x="190" y="166" textAnchor="middle" fontSize="9" fill={stroke}>Le cartouche identifie la bonne définition avant toute mesure</text>
      </svg>
    );
  }
  if (type === "orthographic-views") {
    return (
      <svg viewBox="0 0 380 170" className="h-40 w-full" role="img" aria-label="Trois vues orthogonales d'une pièce mécanique">
        <g fill="none" stroke={stroke} strokeWidth="2">
          <rect x="35" y="35" width="95" height="62" />
          <path d="M 35 68 H 70 V 48 H 100 V 68 H 130" />
          <rect x="180" y="35" width="62" height="62" />
          <circle cx="211" cy="66" r="15" stroke={accent} strokeWidth="3" />
          <rect x="35" y="120" width="95" height="34" />
          <line x1="70" y1="120" x2="70" y2="154" strokeDasharray="5,4" />
          <line x1="100" y1="120" x2="100" y2="154" strokeDasharray="5,4" />
        </g>
        <line x1="145" y1="35" x2="145" y2="154" stroke={accent} strokeDasharray="3,3" />
        <text x="82" y="25" textAnchor="middle" fontSize="10" fill={accent}>FACE</text>
        <text x="211" y="25" textAnchor="middle" fontSize="10" fill={stroke}>PROFIL</text>
        <text x="82" y="115" textAnchor="middle" fontSize="10" fill={stroke}>DESSUS</text>
        <text x="285" y="54" fontSize="9" fill={stroke}>Même pièce</text>
        <text x="285" y="72" fontSize="9" fill={stroke}>3 directions</text>
        <text x="285" y="90" fontSize="9" fill={accent}>alignées</text>
        <text x="190" y="166" textAnchor="middle" fontSize="9" fill={stroke}>Une arête se retrouve à la même position dans les vues liées</text>
      </svg>
    );
  }
  if (type === "section-view") {
    return (
      <svg viewBox="0 0 380 170" className="h-40 w-full" role="img" aria-label="Principe d'une coupe mécanique avec plan de coupe et hachures">
        <g fill="none" stroke={stroke} strokeWidth="2">
          <rect x="30" y="38" width="120" height="82" />
          <circle cx="90" cy="79" r="22" />
          <line x1="90" y1="22" x2="90" y2="137" stroke={accent} strokeWidth="3" strokeDasharray="10,4,2,4" />
          <polygon points="84,27 96,27 90,16" fill={accent} stroke="none" />
          <polygon points="84,132 96,132 90,143" fill={accent} stroke="none" />
          <rect x="215" y="38" width="120" height="82" />
          <rect x="258" y="38" width="34" height="82" fill={dark ? "#020617" : "#ffffff"} />
        </g>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <g key={index} stroke={accent} strokeWidth="1.5">
            <line x1={218 + index * 18} y1="116" x2={238 + index * 18} y2="42" />
          </g>
        ))}
        <text x="90" y="154" textAnchor="middle" fontSize="9" fill={stroke}>plan A—A</text>
        <text x="275" y="28" textAnchor="middle" fontSize="10" fill={accent}>COUPE A—A</text>
        <text x="275" y="136" textAnchor="middle" fontSize="9" fill={stroke}>hachures = matière coupée</text>
        <text x="190" y="166" textAnchor="middle" fontSize="9" fill={stroke}>Le vide intérieur reste sans hachures</text>
      </svg>
    );
  }
  if (type === "functional-dimensioning") {
    return (
      <svg viewBox="0 0 380 170" className="h-40 w-full" role="img" aria-label="Cotation fonctionnelle d'une pièce depuis une surface de référence">
        <rect x="60" y="52" width="250" height="60" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="245" cy="82" r="18" fill="none" stroke={accent} strokeWidth="3" />
        <line x1="60" y1="38" x2="60" y2="134" stroke={accent} strokeWidth="4" />
        <text x="48" y="30" textAnchor="middle" fontSize="10" fill={accent}>A</text>
        <line x1="60" y1="132" x2="245" y2="132" stroke={stroke} />
        <line x1="60" y1="122" x2="60" y2="142" stroke={stroke} />
        <line x1="245" y1="122" x2="245" y2="142" stroke={stroke} />
        <polygon points="68,132 80,126 80,138" fill={stroke} />
        <polygon points="237,132 225,126 225,138" fill={stroke} />
        <text x="152" y="126" textAnchor="middle" fontSize="11" fill={accent} fontWeight="bold">120 ± 0,10</text>
        <line x1="245" y1="48" x2="245" y2="20" stroke={stroke} />
        <text x="245" y="16" textAnchor="middle" fontSize="10" fill={stroke}>⌀ 24 H7</text>
        <text x="190" y="160" textAnchor="middle" fontSize="9" fill={stroke}>Mesurer la fonction depuis la référence indiquée, pas depuis une arête quelconque</text>
      </svg>
    );
  }
  if (type === "tolerance-zone") {
    return (
      <svg viewBox="0 0 380 170" className="h-40 w-full" role="img" aria-label="Zone de tolérance autour d'une cote nominale">
        <line x1="40" y1="88" x2="340" y2="88" stroke={stroke} strokeWidth="3" />
        <rect x="130" y="55" width="120" height="66" rx="7" fill={box} stroke={accent} strokeWidth="3" />
        <line x1="190" y1="38" x2="190" y2="138" stroke={stroke} strokeDasharray="5,4" />
        <text x="190" y="28" textAnchor="middle" fontSize="10" fill={stroke}>nominal 40,00 mm</text>
        <text x="130" y="145" textAnchor="middle" fontSize="10" fill={accent}>39,98</text>
        <text x="250" y="145" textAnchor="middle" fontSize="10" fill={accent}>40,02</text>
        <text x="190" y="80" textAnchor="middle" fontSize="10" fill={accent} fontWeight="bold">ZONE CONFORME</text>
        <circle cx="228" cy="88" r="6" fill="#22c55e" />
        <text x="228" y="105" textAnchor="middle" fontSize="8" fill={stroke}>40,015</text>
        <circle cx="278" cy="88" r="6" fill="#ef4444" />
        <text x="278" y="105" textAnchor="middle" fontSize="8" fill={stroke}>40,03</text>
        <text x="190" y="162" textAnchor="middle" fontSize="9" fill={stroke}>Conforme seulement entre les deux limites incluses</text>
      </svg>
    );
  }
  if (type === "fit-clearance") {
    return (
      <svg viewBox="0 0 380 170" className="h-40 w-full" role="img" aria-label="Comparaison d'un ajustement avec jeu et d'un ajustement serré">
        <text x="95" y="24" textAnchor="middle" fontSize="10" fill={accent}>AVEC JEU</text>
        <circle cx="95" cy="82" r="52" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="95" cy="82" r="38" fill={dark ? "#020617" : "#ffffff"} stroke={accent} strokeWidth="3" />
        <line x1="40" y1="145" x2="150" y2="145" stroke={stroke} />
        <text x="95" y="160" textAnchor="middle" fontSize="9" fill={stroke}>alésage &gt; arbre</text>
        <text x="285" y="24" textAnchor="middle" fontSize="10" fill={accent}>SERRÉ</text>
        <circle cx="285" cy="82" r="48" fill={box} stroke={accent} strokeWidth="6" />
        <circle cx="285" cy="82" r="46" fill={stroke} opacity="0.25" />
        <line x1="230" y1="145" x2="340" y2="145" stroke={stroke} />
        <text x="285" y="160" textAnchor="middle" fontSize="9" fill={stroke}>arbre ≥ alésage</text>
        <text x="190" y="90" textAnchor="middle" fontSize="16" fill={stroke}>≠</text>
      </svg>
    );
  }
  if (type === "material-selection") {
    return (
      <svg viewBox="0 0 380 170" className="h-40 w-full" role="img" aria-label="Choix d'un matériau selon les fonctions et l'environnement">
        <circle cx="190" cy="82" r="43" fill={accent} stroke={stroke} strokeWidth="2" />
        <text x="190" y="78" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">MATÉRIAU</text>
        <text x="190" y="94" textAnchor="middle" fontSize="9" fill="#14151a">adapté</text>
        {[["Efforts", 190, 16], ["Usure", 305, 55], ["Corrosion", 300, 130], ["Masse", 80, 130], ["Température", 70, 55]].map(([label, x, y]) => (
          <g key={String(label)}>
            <rect x={Number(x) - 38} y={Number(y) - 12} width="76" height="24" rx="5" fill={box} stroke={stroke} />
            <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fontSize="8" fill={stroke}>{label}</text>
            <line x1={190 + (Number(x) - 190) * 0.42} y1={82 + (Number(y) - 82) * 0.42} x2={190 + (Number(x) - 190) * 0.67} y2={82 + (Number(y) - 82) * 0.67} stroke={stroke} />
          </g>
        ))}
        <text x="190" y="166" textAnchor="middle" fontSize="9" fill={stroke}>On choisit une combinaison de propriétés, pas une couleur ou un poids seul</text>
      </svg>
    );
  }
  if (type === "manufacturing-process") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Chaîne de fabrication d'une pièce mécanique et traces observables">
        {[["Brut", "forge / fonte"], ["Forme", "tour / fraise"], ["Surface", "rectifie"], ["Protection", "traite / revêt"]].map(([title, subtitle], index) => (
          <g key={title}>
            <rect x={8 + index * 98} y="52" width="82" height="58" rx="7" fill={index === 2 ? accent : box} stroke={stroke} />
            <text x={49 + index * 98} y="75" textAnchor="middle" fontSize="9" fill={index === 2 ? "#14151a" : stroke} fontWeight="bold">{title}</text>
            <text x={49 + index * 98} y="94" textAnchor="middle" fontSize="8" fill={index === 2 ? "#14151a" : stroke}>{subtitle}</text>
            {index < 3 && <line x1={90 + index * 98} y1="81" x2={105 + index * 98} y2="81" stroke={stroke} strokeWidth="2" />}
          </g>
        ))}
        <text x="200" y="25" textAnchor="middle" fontSize="10" fill={stroke}>Chaque procédé laisse une géométrie, un état de surface et des contraintes</text>
        <text x="200" y="139" textAnchor="middle" fontSize="9" fill={accent}>Une retouche peut supprimer une couche traitée ou une cote fonctionnelle</text>
        <text x="200" y="158" textAnchor="middle" fontSize="9" fill={stroke}>Observer → identifier → mesurer → faire valider avant modification</text>
      </svg>
    );
  }
  if (type === "thread-profile") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Profil simplifié d'un filetage métrique avec diamètre et pas">
        <line x1="35" y1="55" x2="365" y2="55" stroke={stroke} strokeDasharray="5,4" />
        <path d="M35 95 L60 65 L85 95 L110 65 L135 95 L160 65 L185 95 L210 65 L235 95 L260 65 L285 95 L310 65 L335 95 L365 65" fill="none" stroke={accent} strokeWidth="4" />
        <line x1="60" y1="120" x2="110" y2="120" stroke={stroke} strokeWidth="2" />
        <polygon points="60,120 70,114 70,126" fill={stroke} />
        <polygon points="110,120 100,114 100,126" fill={stroke} />
        <text x="85" y="139" textAnchor="middle" fontSize="10" fill={accent}>pas P</text>
        <line x1="325" y1="55" x2="325" y2="95" stroke={stroke} />
        <text x="337" y="79" fontSize="9" fill={stroke}>⌀ nominal</text>
        <text x="200" y="22" textAnchor="middle" fontSize="11" fill={stroke}>M12 × 1,75</text>
        <text x="200" y="156" textAnchor="middle" fontSize="9" fill={stroke}>Même diamètre ne signifie pas même pas ni même fonction</text>
      </svg>
    );
  }
  if (type === "bolt-grade") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Tête de vis marquée 8.8 et chaîne de serrage contrôlé">
        <polygon points="45,48 95,20 145,48 145,102 95,130 45,102" fill={box} stroke={accent} strokeWidth="4" />
        <text x="95" y="82" textAnchor="middle" fontSize="24" fill={accent} fontWeight="bold">8.8</text>
        <text x="95" y="151" textAnchor="middle" fontSize="9" fill={stroke}>classe de propriété</text>
        {[['Préparer', 180], ['Approcher', 250], ['Serrer', 320]].map(([label, x], index) => (
          <g key={String(label)}>
            <circle cx={Number(x)} cy="75" r="27" fill={index === 2 ? accent : box} stroke={stroke} />
            <text x={Number(x)} y="79" textAnchor="middle" fontSize="8" fill={index === 2 ? "#14151a" : stroke}>{label}</text>
            {index < 2 && <line x1={Number(x) + 28} y1="75" x2={Number(x) + 41} y2="75" stroke={stroke} />}
          </g>
        ))}
        <text x="250" y="126" textAnchor="middle" fontSize="9" fill={stroke}>ordre + méthode + valeur prescrite</text>
        <text x="250" y="145" textAnchor="middle" fontSize="9" fill={accent}>la classe ne donne pas à elle seule le couple</text>
      </svg>
    );
  }
  if (type === "locking-methods") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Familles de dispositifs de freinage des assemblages filetés">
        {[['Friction', 'écrou frein'], ['Forme', 'goupille'], ['Chimique', 'frein-filet'], ['Sécurité', 'fil / tôle']].map(([title, subtitle], index) => (
          <g key={title}>
            <rect x={8 + index * 98} y="45" width="84" height="70" rx="8" fill={index === 1 ? accent : box} stroke={stroke} />
            <text x={50 + index * 98} y="70" textAnchor="middle" fontSize="9" fill={index === 1 ? "#14151a" : stroke} fontWeight="bold">{title}</text>
            <text x={50 + index * 98} y="91" textAnchor="middle" fontSize="8" fill={index === 1 ? "#14151a" : stroke}>{subtitle}</text>
          </g>
        ))}
        <text x="200" y="22" textAnchor="middle" fontSize="10" fill={stroke}>Empêcher la rotation ou conserver la précharge selon le risque</text>
        <text x="200" y="140" textAnchor="middle" fontSize="9" fill={accent}>Identifier le dispositif avant démontage</text>
        <text x="200" y="158" textAnchor="middle" fontSize="9" fill={stroke}>Remplacer les éléments à usage unique selon la documentation</text>
      </svg>
    );
  }
  if (type === "seized-fastener") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Escalade progressive pour traiter une fixation grippée">
        {[['1', 'Observer'], ['2', 'Nettoyer'], ['3', 'Outiller'], ['4', 'Débloquer'], ['5', 'Escalader']].map(([number, label], index) => (
          <g key={number}>
            <circle cx={40 + index * 80} cy="72" r="25" fill={index === 4 ? accent : box} stroke={stroke} strokeWidth="2" />
            <text x={40 + index * 80} y="68" textAnchor="middle" fontSize="11" fill={index === 4 ? "#14151a" : accent} fontWeight="bold">{number}</text>
            <text x={40 + index * 80} y="86" textAnchor="middle" fontSize="7" fill={index === 4 ? "#14151a" : stroke}>{label}</text>
            {index < 4 && <line x1={66 + index * 80} y1="72" x2={94 + index * 80} y2="72" stroke={stroke} />}
          </g>
        ))}
        <text x="200" y="25" textAnchor="middle" fontSize="10" fill={stroke}>L'effort augmente seulement si le contact et le risque restent maîtrisés</text>
        <text x="200" y="128" textAnchor="middle" fontSize="9" fill={accent}>Glissement · torsion · fissure · échauffement anormal = ARRÊT</text>
        <text x="200" y="150" textAnchor="middle" fontSize="9" fill={stroke}>Préserver la pièce vaut mieux que gagner une minute</text>
      </svg>
    );
  }
  if (type === "static-sealing") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Compression correcte et incorrecte d'un joint torique dans sa gorge">
        <text x="105" y="24" textAnchor="middle" fontSize="10" fill={stroke}>COMPRESSION CORRECTE</text>
        <rect x="20" y="45" width="170" height="25" rx="3" fill={box} stroke={stroke} />
        <path d="M55 95 H78 V76 H132 V95 H155" fill="none" stroke={stroke} strokeWidth="3" />
        <ellipse cx="105" cy="76" rx="22" ry="15" fill="none" stroke={accent} strokeWidth="6" />
        <text x="105" y="124" textAnchor="middle" fontSize="9" fill={accent}>joint centré · gorge propre</text>
        <text x="295" y="24" textAnchor="middle" fontSize="10" fill={stroke}>JOINT PINCÉ</text>
        <rect x="210" y="45" width="170" height="25" rx="3" fill={box} stroke={stroke} />
        <path d="M245 95 H268 V76 H322 V95 H345" fill="none" stroke={stroke} strokeWidth="3" />
        <path d="M275 76 C278 55 315 55 327 85 C312 78 294 92 275 76" fill="none" stroke="#ef4444" strokeWidth="6" />
        <text x="295" y="124" textAnchor="middle" fontSize="9" fill="#ef4444">torsion · coupure · fuite</text>
        <text x="200" y="154" textAnchor="middle" fontSize="9" fill={stroke}>Référence + matière + surfaces + compression = étanchéité fiable</text>
      </svg>
    );
  }
  if (type === "flange-tightening") {
    const bolts = [
      [200, 28, "1"], [200, 140, "2"], [120, 84, "3"], [280, 84, "4"],
      [143, 44, "5"], [257, 124, "6"], [257, 44, "7"], [143, 124, "8"],
    ] as const;
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Exemple pédagogique d'ordre de serrage croisé d'une bride à huit boulons">
        <circle cx="200" cy="84" r="70" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="200" cy="84" r="38" fill="none" stroke={accent} strokeWidth="5" />
        <path d="M200 28 L200 140 M120 84 L280 84 M143 44 L257 124 M257 44 L143 124" stroke={accent} strokeDasharray="4,4" opacity="0.7" />
        {bolts.map(([cx, cy, number]) => (
          <g key={number}>
            <circle cx={cx} cy={cy} r="13" fill={number === "1" ? accent : box} stroke={stroke} strokeWidth="2" />
            <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontWeight="bold" fill={number === "1" ? "#14151a" : stroke}>{number}</text>
          </g>
        ))}
        <text x="55" y="45" textAnchor="middle" fontSize="9" fill={stroke}>Approche</text>
        <text x="55" y="65" textAnchor="middle" fontSize="9" fill={stroke}>Passes croisées</text>
        <text x="55" y="85" textAnchor="middle" fontSize="9" fill={accent}>Contrôle final</text>
        <text x="342" y="148" textAnchor="middle" fontSize="8" fill={stroke}>La gamme fait foi</text>
      </svg>
    );
  }
  if (type === "dynamic-sealing") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Joint à lèvre monté autour d'un arbre tournant avec orientation vers l'huile">
        <rect x="35" y="38" width="330" height="95" rx="8" fill={box} stroke={stroke} strokeWidth="2" />
        <rect x="20" y="76" width="360" height="24" rx="12" fill="none" stroke={accent} strokeWidth="4" />
        <text x="200" y="92" textAnchor="middle" fontSize="9" fill={stroke}>ARBRE TOURNANT</text>
        <path d="M235 42 L235 72 L262 84 L235 104 L235 129" fill="none" stroke={accent} strokeWidth="7" />
        <line x1="262" y1="84" x2="300" y2="60" stroke={stroke} strokeWidth="2" />
        <text x="320" y="58" textAnchor="middle" fontSize="9" fill={stroke}>lèvre vers</text>
        <text x="320" y="71" textAnchor="middle" fontSize="9" fill={accent}>le fluide</text>
        <text x="78" y="61" textAnchor="middle" fontSize="10" fill={stroke}>AIR / POUSSIÈRE</text>
        <text x="315" y="116" textAnchor="middle" fontSize="10" fill={accent}>HUILE</text>
        <path d="M75 110 C55 129 95 137 75 153" fill="none" stroke={stroke} strokeWidth="2" />
        <text x="160" y="153" textAnchor="middle" fontSize="9" fill={stroke}>portée lisse · jeu et faux-rond contrôlés</text>
      </svg>
    );
  }
  if (type === "leak-diagnosis") {
    const steps = [["1", "Sécuriser"], ["2", "Observer"], ["3", "Localiser"], ["4", "Réparer"], ["5", "Valider"]] as const;
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Méthode progressive de diagnostic et de validation d'une fuite">
        {steps.map(([number, label], index) => (
          <g key={number}>
            <circle cx={40 + index * 80} cy="68" r="25" fill={index === 4 ? accent : box} stroke={stroke} strokeWidth="2" />
            <text x={40 + index * 80} y="65" textAnchor="middle" fontSize="11" fill={index === 4 ? "#14151a" : accent} fontWeight="bold">{number}</text>
            <text x={40 + index * 80} y="80" textAnchor="middle" fontSize="7" fill={index === 4 ? "#14151a" : stroke}>{label}</text>
            {index < 4 && <line x1={66 + index * 80} y1="68" x2={94 + index * 80} y2="68" stroke={stroke} />}
          </g>
        ))}
        <rect x="54" y="115" width="292" height="35" rx="7" fill="none" stroke="#ef4444" strokeWidth="2" />
        <text x="200" y="130" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="bold">HAUTE PRESSION : JAMAIS LA MAIN</text>
        <text x="200" y="144" textAnchor="middle" fontSize="8" fill={stroke}>distance + écran + méthode autorisée</text>
      </svg>
    );
  }
  if (type === "shaft-inspection") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Arbre mécanique avec portées, épaulements, congés et rainure de clavette">
        <path d="M25 92 H80 V67 H145 Q157 67 157 55 V48 H250 V67 Q250 78 262 78 H325 V92 H375" fill="none" stroke={accent} strokeWidth="18" strokeLinejoin="round" />
        <line x1="25" y1="92" x2="375" y2="92" stroke={stroke} strokeDasharray="5,4" />
        <rect x="183" y="37" width="42" height="18" fill={box} stroke={stroke} strokeWidth="2" />
        <text x="204" y="28" textAnchor="middle" fontSize="9" fill={stroke}>rainure de clavette</text>
        <text x="112" y="128" textAnchor="middle" fontSize="9" fill={stroke}>portée roulement</text>
        <text x="266" y="128" textAnchor="middle" fontSize="9" fill={stroke}>portée joint</text>
        <line x1="155" y1="65" x2="135" y2="145" stroke={stroke} />
        <text x="110" y="158" textAnchor="middle" fontSize="8" fill={accent}>congé : zone critique</text>
        <text x="325" y="22" textAnchor="middle" fontSize="9" fill={stroke}>rotation + couple →</text>
      </svg>
    );
  }
  if (type === "keyed-joint") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Coupe simplifiée d'une liaison entre arbre, clavette et moyeu">
        <circle cx="200" cy="84" r="70" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="200" cy="84" r="40" fill="none" stroke={accent} strokeWidth="8" />
        <rect x="178" y="34" width="44" height="36" fill={accent} stroke={stroke} strokeWidth="2" />
        <line x1="178" y1="36" x2="178" y2="70" stroke="#ef4444" strokeWidth="4" />
        <line x1="222" y1="36" x2="222" y2="70" stroke="#ef4444" strokeWidth="4" />
        <text x="200" y="56" textAnchor="middle" fontSize="9" fill="#14151a" fontWeight="bold">CLAVETTE</text>
        <text x="200" y="88" textAnchor="middle" fontSize="10" fill={stroke}>ARBRE</text>
        <text x="200" y="150" textAnchor="middle" fontSize="10" fill={stroke}>MOYEU</text>
        <text x="55" y="45" textAnchor="middle" fontSize="9" fill="#ef4444">flancs</text>
        <text x="55" y="60" textAnchor="middle" fontSize="9" fill={stroke}>transmettent</text>
        <text x="55" y="75" textAnchor="middle" fontSize="9" fill={stroke}>le couple</text>
        <line x1="85" y1="60" x2="175" y2="52" stroke={stroke} />
      </svg>
    );
  }
  if (type === "coupling-selection") {
    return (
      <svg viewBox="0 0 400 170" className="h-40 w-full" role="img" aria-label="Accouplement flexible reliant un moteur à une machine">
        <rect x="18" y="54" width="90" height="58" rx="8" fill={box} stroke={stroke} strokeWidth="2" />
        <text x="63" y="87" textAnchor="middle" fontSize="11" fill={stroke}>MOTEUR</text>
        <line x1="108" y1="83" x2="145" y2="83" stroke={accent} strokeWidth="8" />
        <rect x="145" y="52" width="36" height="62" rx="6" fill={box} stroke={accent} strokeWidth="3" />
        <path d="M181 61 L199 52 L217 61 L199 114 L181 105 Z" fill={accent} stroke={stroke} />
        <rect x="217" y="52" width="36" height="62" rx="6" fill={box} stroke={accent} strokeWidth="3" />
        <line x1="253" y1="83" x2="290" y2="83" stroke={accent} strokeWidth="8" />
        <rect x="290" y="54" width="92" height="58" rx="8" fill={box} stroke={stroke} strokeWidth="2" />
        <text x="336" y="87" textAnchor="middle" fontSize="11" fill={stroke}>MACHINE</text>
        <text x="199" y="27" textAnchor="middle" fontSize="9" fill={stroke}>moyeux + élément flexible + entrefer</text>
        <text x="200" y="144" textAnchor="middle" fontSize="9" fill={accent}>Flexible ≠ désalignement illimité</text>
      </svg>
    );
  }
  if (type === "alignment-basics") {
    return (
      <svg viewBox="0 0 400 175" className="h-40 w-full" role="img" aria-label="Comparaison d'axes alignés, décalés parallèlement et désalignés angulairement">
        <text x="22" y="37" fontSize="9" fill={stroke}>ALIGNÉ</text>
        <line x1="90" y1="34" x2="370" y2="34" stroke={accent} strokeWidth="4" />
        <text x="22" y="88" fontSize="9" fill={stroke}>PARALLÈLE</text>
        <line x1="90" y1="74" x2="220" y2="74" stroke={accent} strokeWidth="4" />
        <line x1="230" y1="94" x2="370" y2="94" stroke={stroke} strokeWidth="4" />
        <line x1="300" y1="74" x2="300" y2="94" stroke="#ef4444" strokeDasharray="3,2" />
        <text x="22" y="142" fontSize="9" fill={stroke}>ANGULAIRE</text>
        <line x1="90" y1="132" x2="220" y2="132" stroke={accent} strokeWidth="4" />
        <line x1="230" y1="120" x2="370" y2="151" stroke={stroke} strokeWidth="4" />
        <path d="M230 132 A30 30 0 0 1 255 126" fill="none" stroke="#ef4444" strokeWidth="2" />
        <text x="200" y="169" textAnchor="middle" fontSize="9" fill={stroke}>Contrôler vertical + horizontal · serrer puis remesurer</text>
      </svg>
    );
  }
  if (type === "shaft-runout") {
    return (
      <svg viewBox="0 0 400 175" className="h-40 w-full" role="img" aria-label="Mesure du faux-rond radial d'un arbre avec un comparateur">
        <rect x="28" y="75" width="300" height="42" rx="21" fill={box} stroke={accent} strokeWidth="4" />
        <line x1="28" y1="96" x2="328" y2="96" stroke={stroke} strokeDasharray="5,4" />
        <circle cx="230" cy="38" r="28" fill={box} stroke={stroke} strokeWidth="3" />
        <line x1="230" y1="38" x2="247" y2="23" stroke={accent} strokeWidth="3" />
        <line x1="230" y1="66" x2="230" y2="75" stroke={stroke} strokeWidth="4" />
        <text x="230" y="42" textAnchor="middle" fontSize="8" fill={stroke}>COMPARATEUR</text>
        <path d="M82 66 A30 30 0 0 1 126 63" fill="none" stroke={accent} strokeWidth="3" />
        <polygon points="131,66 120,63 127,55" fill={accent} />
        <text x="105" y="45" textAnchor="middle" fontSize="9" fill={stroke}>rotation lente</text>
        <text x="200" y="148" textAnchor="middle" fontSize="10" fill={accent}>Lecture totale = maxi − mini</text>
        <text x="200" y="166" textAnchor="middle" fontSize="8" fill={stroke}>support rigide · surface propre · mesure répétée</text>
      </svg>
    );
  }
  if (type === "dial-alignment") {
    return (
      <svg viewBox="0 0 400 175" className="h-40 w-full" role="img" aria-label="Relevés d'alignement au comparateur aux positions douze, trois, six et neuf heures">
        <circle cx="200" cy="82" r="55" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="200" cy="82" r="11" fill={accent} />
        {[['12 h',200,15],['3 h',330,86],['6 h',200,160],['9 h',70,86]].map(([label,x,y]) => (
          <text key={String(label)} x={Number(x)} y={Number(y)} textAnchor="middle" fontSize="10" fill={stroke}>{label}</text>
        ))}
        <line x1="200" y1="27" x2="200" y2="137" stroke={accent} strokeDasharray="4,3" />
        <line x1="145" y1="82" x2="255" y2="82" stroke={accent} strokeDasharray="4,3" />
        <rect x="273" y="30" width="42" height="40" rx="6" fill={box} stroke={accent} strokeWidth="2" />
        <line x1="273" y1="60" x2="250" y2="72" stroke={stroke} strokeWidth="3" />
        <text x="294" y="54" textAnchor="middle" fontSize="7" fill={stroke}>CADRAN</text>
        <text x="35" y="145" fontSize="8" fill={accent}>vertical</text>
        <text x="315" y="145" fontSize="8" fill={accent}>horizontal</text>
      </svg>
    );
  }
  if (type === "laser-alignment") {
    return (
      <svg viewBox="0 0 400 175" className="h-40 w-full" role="img" aria-label="Alignement laser avec cible à froid et position alignée à chaud">
        <rect x="20" y="58" width="108" height="55" rx="8" fill={box} stroke={stroke} strokeWidth="2" />
        <rect x="272" y="48" width="108" height="65" rx="8" fill={box} stroke={stroke} strokeWidth="2" />
        <text x="74" y="89" textAnchor="middle" fontSize="10" fill={stroke}>MOTEUR</text>
        <text x="326" y="84" textAnchor="middle" fontSize="10" fill={stroke}>POMPE</text>
        <circle cx="150" cy="84" r="21" fill={accent} stroke={stroke} />
        <circle cx="250" cy="78" r="21" fill={accent} stroke={stroke} />
        <line x1="171" y1="84" x2="229" y2="79" stroke="#22c55e" strokeWidth="3" strokeDasharray="5,3" />
        <text x="200" y="62" textAnchor="middle" fontSize="8" fill="#22c55e">faisceau</text>
        <line x1="326" y1="48" x2="326" y2="26" stroke="#ef4444" strokeWidth="3" />
        <polygon points="326,20 320,31 332,31" fill="#ef4444" />
        <text x="326" y="13" textAnchor="middle" fontSize="8" fill={stroke}>croissance thermique</text>
        <text x="200" y="143" textAnchor="middle" fontSize="9" fill={accent}>Cible à froid → axes corrects en service</text>
        <text x="200" y="162" textAnchor="middle" fontSize="8" fill={stroke}>vérifier dimensions · cible · tolérance · rapport final</text>
      </svg>
    );
  }
  if (type === "balance-vibration") {
    return (
      <svg viewBox="0 0 400 175" className="h-40 w-full" role="img" aria-label="Comparaison d'un rotor équilibré et d'un rotor avec balourd">
        <circle cx="110" cy="78" r="52" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="110" cy="78" r="6" fill={accent} />
        <circle cx="290" cy="78" r="52" fill={box} stroke={stroke} strokeWidth="3" />
        <circle cx="290" cy="78" r="6" fill={accent} />
        <circle cx="323" cy="49" r="12" fill="#ef4444" />
        <line x1="300" y1="69" x2="336" y2="36" stroke="#ef4444" strokeWidth="3" />
        <polygon points="342,30 330,35 338,43" fill="#ef4444" />
        <text x="110" y="151" textAnchor="middle" fontSize="10" fill={stroke}>masse répartie</text>
        <text x="290" y="151" textAnchor="middle" fontSize="10" fill="#ef4444">balourd → force tournante</text>
        <text x="200" y="18" textAnchor="middle" fontSize="9" fill={accent}>La force augmente avec le carré de la vitesse</text>
        <path d="M55 78 C65 58 75 98 85 78 C95 58 105 98 115 78" fill="none" stroke="#22c55e" strokeWidth="2" />
        <path d="M235 78 C245 38 255 118 265 78 C275 38 285 118 295 78" fill="none" stroke="#ef4444" strokeWidth="3" />
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
        {arrowDefinition}
        {["Disjoncteur", "Contacteur", "Relais th.", "Moteur"].map((t, i) => (
          <g key={i}>
            <rect x={10 + i * 78} y="30" width="66" height="40" rx="4" fill={i === 3 ? accent : box} stroke={stroke} />
            <text x={10 + i * 78 + 33} y="53" textAnchor="middle" fontSize="8" fill={i === 3 ? "#14151a" : stroke}>{t}</text>
            {i < 3 && <line x1={10 + i * 78 + 66} y1="50" x2={10 + (i + 1) * 78} y2="50" stroke={stroke} markerEnd={arrowUrl} />}
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
  if (type === "electrical-ppe") {
    const items: Array<[string, string]> = [
      ["Gants", "isolants"],
      ["Écran", "facial"],
      ["Chaussures", "de sécurité"],
      ["Tapis", "isolant"],
      ["Outils", "isolés"],
    ];
    return (
      <svg viewBox="0 0 320 110" className="w-full h-28">
        {items.map(([l1, l2], i) => {
          const x = 18 + i * 60;
          return (
            <g key={l1}>
              <rect x={x} y="18" width="46" height="46" rx="8" fill={box} stroke={accent} strokeWidth="2" />
              <text x={x + 23} y="44" textAnchor="middle" fontSize="14" fill={stroke}>{i + 1}</text>
              <text x={x + 23} y="80" textAnchor="middle" fontSize="8" fill={stroke}>{l1}</text>
              <text x={x + 23} y="92" textAnchor="middle" fontSize="8" fill={stroke}>{l2}</text>
            </g>
          );
        })}
      </svg>
    );
  }
  if (type === "measurement-safety") {
    return (
      <svg viewBox="0 0 320 130" className="w-full h-32">
        {/* Multimètre */}
        <rect x="30" y="20" width="110" height="90" rx="10" fill={box} stroke={stroke} strokeWidth="1.5" />
        <rect x="44" y="30" width="82" height="24" rx="3" fill={dark ? "#0f172a" : "#e2e8f0"} stroke={stroke} />
        <text x="85" y="47" textAnchor="middle" fontSize="11" fill={accent} fontFamily="monospace">0.0 V</text>
        <circle cx="85" cy="80" r="18" fill="none" stroke={stroke} strokeWidth="1.5" />
        <line x1="85" y1="80" x2="85" y2="66" stroke={accent} strokeWidth="2.5" />
        <text x="85" y="103" textAnchor="middle" fontSize="7" fill={stroke}>sélecteur de calibre</text>
        {/* Cordons */}
        <circle cx="60" cy="110" r="3" fill={stroke} />
        <circle cx="110" cy="110" r="3" fill={stroke} />
        <text x="60" y="124" textAnchor="middle" fontSize="7" fill={stroke}>COM</text>
        <text x="110" y="124" textAnchor="middle" fontSize="7" fill={stroke}>V/Ω</text>
        {/* Règles de sécurité */}
        <g>
          <rect x="160" y="24" width="150" height="24" rx="4" fill="none" stroke={stroke} />
          <text x="235" y="39" textAnchor="middle" fontSize="8" fill={stroke}>Catégorie adaptée (CAT II/III/IV)</text>
          <rect x="160" y="54" width="150" height="24" rx="4" fill="none" stroke={stroke} />
          <text x="235" y="69" textAnchor="middle" fontSize="8" fill={stroke}>Bon calibre avant de mesurer</text>
          <rect x="160" y="84" width="150" height="24" rx="4" fill="none" stroke={accent} strokeWidth="2" />
          <text x="235" y="99" textAnchor="middle" fontSize="8" fill={stroke}>R et continuité : hors tension</text>
        </g>
      </svg>
    );
  }
  if (type === "electrical-first-aid") {
    const steps: Array<[string, string]> = [
      ["1", "Protéger : couper ou dégager avec un isolant"],
      ["2", "Alerter : 112 / 15 / 18"],
      ["3", "Secourir selon sa formation (SST)"],
    ];
    return (
      <svg viewBox="0 0 320 120" className="w-full h-28">
        {steps.map(([n, label], i) => {
          const y = 22 + i * 34;
          return (
            <g key={n}>
              <circle cx="30" cy={y} r="13" fill={i === 0 ? "#ef4444" : accent} />
              <text x="30" y={y + 4} textAnchor="middle" fontSize="11" fill="#1f1300" fontWeight="bold">{n}</text>
              <text x="52" y={y + 4} fontSize="10" fill={stroke}>{label}</text>
              {i < steps.length - 1 && <line x1="30" y1={y + 13} x2="30" y2={y + 21} stroke={stroke} />}
            </g>
          );
        })}
      </svg>
    );
  }
  if (type === "power-distribution") {
    const stages: Array<[string, string]> = [
      ["Réseau", "arrivée"],
      ["TGBT", "tableau général"],
      ["Tableaux", "divisionnaires"],
      ["Départs", "machines"],
    ];
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        {stages.map(([l1, l2], i) => {
          const x = 8 + i * 78;
          return (
            <g key={l1}>
              <rect x={x} y="26" width="64" height="38" rx="5" fill={i === 3 ? accent : box} stroke={stroke} strokeWidth="1.5" />
              <text x={x + 32} y="45" textAnchor="middle" fontSize="9" fill={i === 3 ? "#14151a" : stroke} fontWeight="bold">{l1}</text>
              <text x={x + 32} y="57" textAnchor="middle" fontSize="7" fill={i === 3 ? "#14151a" : stroke}>{l2}</text>
              {i < 3 && <line x1={x + 64} y1="45" x2={x + 78} y2="45" stroke={stroke} strokeWidth="1.5" />}
            </g>
          );
        })}
      </svg>
    );
  }
  if (type === "three-phase-voltages") {
    const phases: Array<[string, string]> = [
      ["L1", "phase 1"],
      ["L2", "phase 2"],
      ["L3", "phase 3"],
      ["N", "neutre"],
    ];
    return (
      <svg viewBox="0 0 320 110" className="w-full h-28">
        {phases.map(([l1, l2], i) => {
          const x = 26 + i * 72;
          const isNeutral = l1 === "N";
          return (
            <g key={l1}>
              <line x1={x} y1="20" x2={x} y2="70" stroke={isNeutral ? stroke : accent} strokeWidth="3" />
              <circle cx={x} cy="70" r="4" fill={isNeutral ? stroke : accent} />
              <text x={x} y="86" textAnchor="middle" fontSize="10" fill={stroke} fontWeight="bold">{l1}</text>
              <text x={x} y="98" textAnchor="middle" fontSize="7" fill={stroke}>{l2}</text>
            </g>
          );
        })}
        {/* Tension simple (phase-neutre) et composée (phase-phase) */}
        <text x="230" y="34" textAnchor="middle" fontSize="8" fill={stroke}>230 V</text>
        <text x="230" y="16" textAnchor="middle" fontSize="7" fill={stroke}>phase–neutre</text>
        <line x1="98" y1="46" x2="170" y2="46" stroke={stroke} strokeDasharray="3 2" />
        <text x="134" y="42" textAnchor="middle" fontSize="8" fill={stroke}>400 V (phase–phase)</text>
      </svg>
    );
  }
  if (type === "command-power-circuit") {
    return (
      <svg viewBox="0 0 320 130" className="w-full h-32">
        {/* Circuit de commande */}
        <text x="80" y="16" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">Circuit de commande</text>
        <rect x="20" y="24" width="120" height="90" rx="6" fill="none" stroke={stroke} strokeDasharray="4 3" />
        <circle cx="50" cy="45" r="4" fill="none" stroke={stroke} />
        <text x="50" y="66" textAnchor="middle" fontSize="7" fill={stroke}>bouton</text>
        <line x1="54" y1="45" x2="90" y2="45" stroke={stroke} />
        <circle cx="110" cy="80" r="12" fill={box} stroke={accent} strokeWidth="2" />
        <text x="110" y="83" textAnchor="middle" fontSize="8" fill={stroke}>KM1</text>
        <text x="110" y="104" textAnchor="middle" fontSize="7" fill={stroke}>bobine</text>
        {/* Circuit de puissance */}
        <text x="240" y="16" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">Circuit de puissance</text>
        <rect x="180" y="24" width="120" height="90" rx="6" fill="none" stroke={stroke} />
        <line x1="240" y1="30" x2="240" y2="52" stroke={stroke} strokeWidth="2" />
        <line x1="240" y1="52" x2="255" y2="40" stroke={accent} strokeWidth="3" />
        <text x="278" y="52" textAnchor="middle" fontSize="7" fill={stroke}>contacts</text>
        <line x1="240" y1="52" x2="240" y2="74" stroke={stroke} strokeWidth="2" />
        <circle cx="240" cy="90" r="14" fill={accent} />
        <text x="240" y="94" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">M</text>
        {/* Lien commande → puissance */}
        <text x="160" y="122" textAnchor="middle" fontSize="7" fill={stroke}>la bobine ferme les contacts de puissance →</text>
      </svg>
    );
  }
  if (type === "asynchronous-motor") {
    return (
      <svg viewBox="0 0 320 130" className="w-full h-32">
        {/* Stator */}
        <circle cx="120" cy="70" r="52" fill="none" stroke={stroke} strokeWidth="2" />
        <text x="120" y="18" textAnchor="middle" fontSize="9" fill={stroke}>Stator (fixe)</text>
        {/* Bobinages (3 paires) */}
        {[0, 60, 120].map((a) => {
          const r = (a * Math.PI) / 180;
          return <line key={a} x1={120 + Math.cos(r) * 40} y1={70 + Math.sin(r) * 40} x2={120 - Math.cos(r) * 40} y2={70 - Math.sin(r) * 40} stroke={accent} strokeWidth="3" />;
        })}
        {/* Rotor */}
        <circle cx="120" cy="70" r="20" fill={box} stroke={stroke} strokeWidth="1.5" />
        <text x="120" y="73" textAnchor="middle" fontSize="8" fill={stroke}>Rotor</text>
        {/* Légende champ tournant */}
        <text x="245" y="55" textAnchor="middle" fontSize="9" fill={stroke}>Champ</text>
        <text x="245" y="68" textAnchor="middle" fontSize="9" fill={stroke}>tournant</text>
        <path d="M225 80 a18 18 0 1 1 12 6" fill="none" stroke={accent} strokeWidth="2" markerEnd="url(#am-arrow)" />
        <defs>
          <marker id="am-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={accent} />
          </marker>
        </defs>
      </svg>
    );
  }
  if (type === "star-delta-coupling") {
    return (
      <svg viewBox="0 0 320 130" className="w-full h-32">
        {/* Étoile (Y) */}
        <text x="80" y="18" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">Étoile (Y)</text>
        {[90, 210, 330].map((a, i) => {
          const r = (a * Math.PI) / 180;
          return <line key={i} x1="80" y1="70" x2={80 + Math.cos(r) * 34} y2={70 + Math.sin(r) * 34} stroke={accent} strokeWidth="3" />;
        })}
        <circle cx="80" cy="70" r="4" fill={stroke} />
        <text x="80" y="118" textAnchor="middle" fontSize="7" fill={stroke}>point commun (neutre)</text>
        {/* Triangle (Δ) */}
        <text x="240" y="18" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">Triangle (Δ)</text>
        <polygon points="240,44 214,88 266,88" fill="none" stroke={accent} strokeWidth="3" />
        <text x="240" y="108" textAnchor="middle" fontSize="7" fill={stroke}>enroulements en boucle</text>
      </svg>
    );
  }
  if (type === "vfd-blockdiagram") {
    const stages: Array<[string, string]> = [
      ["Réseau", "AC ~"],
      ["Redresseur", "AC → DC"],
      ["Bus continu", "DC ="],
      ["Onduleur", "DC → AC"],
      ["Moteur", "vitesse réglable"],
    ];
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        {stages.map(([l1, l2], i) => {
          const x = 6 + i * 63;
          return (
            <g key={l1}>
              <rect x={x} y="26" width="52" height="40" rx="5" fill={i === 4 ? accent : box} stroke={stroke} strokeWidth="1.5" />
              <text x={x + 26} y="44" textAnchor="middle" fontSize="7.5" fill={i === 4 ? "#14151a" : stroke} fontWeight="bold">{l1}</text>
              <text x={x + 26} y="55" textAnchor="middle" fontSize="6.5" fill={i === 4 ? "#14151a" : stroke}>{l2}</text>
              {i < 4 && <line x1={x + 52} y1="46" x2={x + 63} y2="46" stroke={stroke} strokeWidth="1.5" />}
            </g>
          );
        })}
      </svg>
    );
  }
  if (type === "schematic-comparison") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-36">
        {/* Unifilaire : une seule ligne pour les 3 phases */}
        <text x="80" y="16" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">Unifilaire</text>
        <line x1="80" y1="24" x2="80" y2="118" stroke={stroke} strokeWidth="2" />
        <text x="96" y="40" fontSize="7" fill={stroke}>3</text>
        <line x1="72" y1="36" x2="88" y2="30" stroke={stroke} strokeWidth="1" />
        <rect x="66" y="52" width="28" height="16" rx="2" fill={box} stroke={stroke} />
        <text x="80" y="63" textAnchor="middle" fontSize="7" fill={stroke}>Q</text>
        <rect x="66" y="80" width="28" height="16" rx="2" fill={box} stroke={stroke} />
        <text x="80" y="91" textAnchor="middle" fontSize="7" fill={stroke}>KM</text>
        <circle cx="80" cy="112" r="8" fill={accent} />
        <text x="80" y="115" textAnchor="middle" fontSize="7" fill="#14151a">M</text>
        <text x="80" y="132" textAnchor="middle" fontSize="6.5" fill={stroke}>vue simplifiée</text>
        {/* Développé : détaillé, commande séparée */}
        <text x="230" y="16" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">Développé</text>
        {[190, 210, 230].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="24" x2={x} y2="70" stroke={accent} strokeWidth="1.5" />
          </g>
        ))}
        <text x="210" y="40" textAnchor="middle" fontSize="6.5" fill={stroke}>puissance (3 fils)</text>
        <rect x="186" y="70" width="48" height="14" rx="2" fill={box} stroke={stroke} />
        <text x="210" y="80" textAnchor="middle" fontSize="6.5" fill={stroke}>moteur</text>
        <line x1="270" y1="24" x2="270" y2="96" stroke={stroke} strokeWidth="1.5" />
        <circle cx="270" cy="50" r="3" fill="none" stroke={stroke} />
        <text x="286" y="53" fontSize="6.5" fill={stroke}>S (bouton)</text>
        <circle cx="270" cy="78" r="6" fill={box} stroke={accent} />
        <text x="286" y="81" fontSize="6.5" fill={stroke}>KM (bobine)</text>
        <text x="230" y="118" textAnchor="middle" fontSize="6.5" fill={stroke}>puissance + commande</text>
        <text x="230" y="130" textAnchor="middle" fontSize="6.5" fill={stroke}>détaillées séparément</text>
      </svg>
    );
  }
  if (type === "diagnostic-flow") {
    const steps = ["Constater", "Sécuriser", "Analyser", "Localiser", "Réparer", "Contrôler", "Tracer"];
    return (
      <svg viewBox="0 0 320 140" className="w-full h-36">
        {steps.map((label, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const x = 12 + col * 78;
          const y = 20 + row * 60;
          const last = i === steps.length - 1;
          return (
            <g key={label}>
              <rect x={x} y={y} width="66" height="30" rx="6" fill={i === 1 ? "#ef4444" : last ? accent : box} stroke={stroke} strokeWidth="1.5" />
              <text x={x + 33} y={y + 19} textAnchor="middle" fontSize="8.5" fill={i === 1 ? "#fff" : last ? "#14151a" : stroke} fontWeight="bold">{label}</text>
              {/* flèche horizontale */}
              {col < 3 && i < steps.length - 1 && <line x1={x + 66} y1={y + 15} x2={x + 78} y2={y + 15} stroke={stroke} strokeWidth="1.5" markerEnd="url(#df-arrow)" />}
              {/* passage à la ligne (après la 4e case) */}
              {i === 3 && <line x1={x + 33} y1={y + 30} x2={12 + 33} y2={y + 60} stroke={stroke} strokeWidth="1.5" markerEnd="url(#df-arrow)" />}
            </g>
          );
        })}
        <defs>
          <marker id="df-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
          </marker>
        </defs>
      </svg>
    );
  }
  if (type === "po-pc-structure") {
    return (
      <svg viewBox="0 0 320 150" className="w-full h-40">
        <defs>
          <marker id="popc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
          </marker>
        </defs>
        {/* Partie commande */}
        <rect x="90" y="14" width="140" height="40" rx="8" fill={accent} stroke={stroke} strokeWidth="1.5" />
        <text x="160" y="32" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">Partie commande (PC)</text>
        <text x="160" y="46" textAnchor="middle" fontSize="8" fill="#14151a">décide, traite, pilote</text>
        {/* Partie opérative */}
        <rect x="90" y="96" width="140" height="40" rx="8" fill={box} stroke={stroke} strokeWidth="1.5" />
        <text x="160" y="114" textAnchor="middle" fontSize="10" fill={stroke} fontWeight="bold">Partie opérative (PO)</text>
        <text x="160" y="128" textAnchor="middle" fontSize="8" fill={stroke}>agit : moteurs, vérins…</text>
        {/* Ordres (PC → PO) */}
        <line x1="130" y1="54" x2="130" y2="96" stroke={stroke} strokeWidth="1.5" markerEnd="url(#popc-arrow)" />
        <text x="104" y="78" textAnchor="middle" fontSize="7.5" fill={stroke}>ordres</text>
        {/* Comptes rendus (PO → PC) */}
        <line x1="190" y1="96" x2="190" y2="54" stroke={stroke} strokeWidth="1.5" markerEnd="url(#popc-arrow)" />
        <text x="214" y="78" textAnchor="middle" fontSize="7.5" fill={stroke}>comptes rendus</text>
      </svg>
    );
  }
  if (type === "energy-info-chains") {
    return (
      <svg viewBox="0 0 320 150" className="w-full h-40">
        <defs>
          <marker id="eic-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
          </marker>
        </defs>
        {/* Chaîne d'information */}
        <text x="10" y="20" fontSize="9" fill={stroke} fontWeight="bold">Chaîne d'information</text>
        {["Acquérir", "Traiter", "Communiquer"].map((l, i) => {
          const x = 12 + i * 100;
          return (
            <g key={l}>
              <rect x={x} y="28" width="82" height="26" rx="5" fill={box} stroke="#38bdf8" strokeWidth="1.5" />
              <text x={x + 41} y="45" textAnchor="middle" fontSize="8.5" fill={stroke}>{l}</text>
              {i < 2 && <line x1={x + 82} y1="41" x2={x + 100} y2="41" stroke={stroke} strokeWidth="1.5" markerEnd="url(#eic-arrow)" />}
            </g>
          );
        })}
        {/* Chaîne d'énergie */}
        <text x="10" y="88" fontSize="9" fill={stroke} fontWeight="bold">Chaîne d'énergie</text>
        {["Alimenter", "Distribuer", "Convertir", "Agir"].map((l, i) => {
          const x = 8 + i * 76;
          return (
            <g key={l}>
              <rect x={x} y="96" width="60" height="26" rx="5" fill={i === 3 ? accent : box} stroke={stroke} strokeWidth="1.5" />
              <text x={x + 30} y="113" textAnchor="middle" fontSize="8" fill={i === 3 ? "#14151a" : stroke}>{l}</text>
              {i < 3 && <line x1={x + 60} y1="109" x2={x + 76} y2="109" stroke={stroke} strokeWidth="1.5" markerEnd="url(#eic-arrow)" />}
            </g>
          );
        })}
        <text x="160" y="140" textAnchor="middle" fontSize="7.5" fill={stroke}>l'information commande l'énergie</text>
      </svg>
    );
  }
  if (type === "sensor-types-compare") {
    const sensors: Array<[string, string]> = [
      ["Inductif", "objets métalliques"],
      ["Capacitif", "presque tous matériaux"],
      ["Photoélectrique", "objets qui coupent la lumière"],
    ];
    return (
      <svg viewBox="0 0 320 120" className="w-full h-28">
        {sensors.map(([name, detects], i) => {
          const x = 10 + i * 103;
          return (
            <g key={name}>
              <rect x={x} y="20" width="92" height="34" rx="6" fill={box} stroke={accent} strokeWidth="2" />
              <text x={x + 46} y="41" textAnchor="middle" fontSize="9" fill={stroke} fontWeight="bold">{name}</text>
              {/* zone de détection */}
              <path d={`M${x + 46} 54 q 0 14 -14 18 M${x + 46} 54 q 0 14 14 18`} fill="none" stroke={stroke} strokeDasharray="2 2" />
              <text x={x + 46} y="92" textAnchor="middle" fontSize="7" fill={stroke}>détecte :</text>
              <text x={x + 46} y="103" textAnchor="middle" fontSize="6.8" fill={stroke}>{detects}</text>
            </g>
          );
        })}
      </svg>
    );
  }
  if (type === "pneumatic-symbols") {
    return (
      <svg viewBox="0 0 320 130" className="w-full h-32">
        {/* Vérin simple effet */}
        <text x="80" y="16" textAnchor="middle" fontSize="8.5" fill={stroke} fontWeight="bold">Vérin simple effet</text>
        <rect x="24" y="26" width="80" height="26" rx="2" fill={box} stroke={stroke} strokeWidth="1.5" />
        <line x1="52" y1="26" x2="52" y2="52" stroke={stroke} strokeWidth="2.5" />
        <line x1="104" y1="39" x2="128" y2="39" stroke={stroke} strokeWidth="2.5" />
        <path d="M28 52 l6 -6 m-6 0 l6 6" stroke={accent} strokeWidth="1.5" />
        <text x="80" y="66" textAnchor="middle" fontSize="6.8" fill={stroke}>1 entrée d'air + ressort de rappel</text>
        {/* Vérin double effet */}
        <text x="80" y="86" textAnchor="middle" fontSize="8.5" fill={stroke} fontWeight="bold">Vérin double effet</text>
        <rect x="24" y="94" width="80" height="24" rx="2" fill={box} stroke={stroke} strokeWidth="1.5" />
        <line x1="60" y1="94" x2="60" y2="118" stroke={stroke} strokeWidth="2.5" />
        <line x1="104" y1="106" x2="128" y2="106" stroke={stroke} strokeWidth="2.5" />
        <line x1="34" y1="118" x2="34" y2="124" stroke={accent} strokeWidth="1.5" />
        <line x1="86" y1="118" x2="86" y2="124" stroke={accent} strokeWidth="1.5" />
        <text x="70" y="128" textAnchor="middle" fontSize="6.5" fill={stroke}>air des 2 côtés</text>
        {/* Distributeur 5/2 (2 cases) */}
        <text x="230" y="16" textAnchor="middle" fontSize="8.5" fill={stroke} fontWeight="bold">Distributeur 5/2</text>
        <rect x="176" y="30" width="52" height="34" rx="2" fill={box} stroke={stroke} strokeWidth="1.5" />
        <rect x="228" y="30" width="52" height="34" rx="2" fill={box} stroke={stroke} strokeWidth="1.5" />
        <path d="M186 56 l14 -18 M214 56 l-14 -18" stroke={accent} strokeWidth="1.5" fill="none" />
        <path d="M240 47 h28 M240 47 l6 -4 M240 47 l6 4" stroke={accent} strokeWidth="1.5" fill="none" />
        <text x="230" y="80" textAnchor="middle" fontSize="6.8" fill={stroke}>5 orifices · 2 positions</text>
        <text x="230" y="92" textAnchor="middle" fontSize="6.8" fill={stroke}>pilote le vérin double effet</text>
      </svg>
    );
  }
  if (type === "plc-structure") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-36">
        <defs>
          <marker id="plc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
          </marker>
        </defs>
        {/* Automate (cadre) */}
        <rect x="70" y="30" width="180" height="70" rx="8" fill="none" stroke={stroke} strokeDasharray="4 3" />
        <text x="160" y="26" textAnchor="middle" fontSize="8" fill={stroke}>Automate (API)</text>
        {/* Module entrées */}
        <rect x="78" y="52" width="44" height="30" rx="4" fill={box} stroke="#38bdf8" strokeWidth="1.5" />
        <text x="100" y="66" textAnchor="middle" fontSize="7.5" fill={stroke}>Entrées</text>
        <text x="100" y="76" textAnchor="middle" fontSize="6.5" fill={stroke}>(E)</text>
        {/* CPU + mémoire */}
        <rect x="134" y="46" width="52" height="42" rx="4" fill={accent} stroke={stroke} strokeWidth="1.5" />
        <text x="160" y="62" textAnchor="middle" fontSize="7.5" fill="#14151a" fontWeight="bold">Processeur</text>
        <text x="160" y="74" textAnchor="middle" fontSize="6.5" fill="#14151a">+ mémoire</text>
        {/* Module sorties */}
        <rect x="198" y="52" width="44" height="30" rx="4" fill={box} stroke="#10b981" strokeWidth="1.5" />
        <text x="220" y="66" textAnchor="middle" fontSize="7.5" fill={stroke}>Sorties</text>
        <text x="220" y="76" textAnchor="middle" fontSize="6.5" fill={stroke}>(S)</text>
        {/* Liaisons internes */}
        <line x1="122" y1="67" x2="134" y2="67" stroke={stroke} strokeWidth="1.2" markerEnd="url(#plc-arrow)" />
        <line x1="186" y1="67" x2="198" y2="67" stroke={stroke} strokeWidth="1.2" markerEnd="url(#plc-arrow)" />
        {/* Alimentation */}
        <rect x="134" y="104" width="52" height="16" rx="3" fill={box} stroke={stroke} strokeWidth="1.2" />
        <text x="160" y="115" textAnchor="middle" fontSize="6.8" fill={stroke}>Alimentation</text>
        <line x1="160" y1="88" x2="160" y2="104" stroke={stroke} strokeWidth="1" />
        {/* Capteurs / préactionneurs */}
        <text x="30" y="60" textAnchor="middle" fontSize="7" fill={stroke}>Capteurs</text>
        <line x1="52" y1="67" x2="78" y2="67" stroke={stroke} strokeWidth="1.5" markerEnd="url(#plc-arrow)" />
        <text x="290" y="60" textAnchor="middle" fontSize="7" fill={stroke}>Préact.</text>
        <line x1="242" y1="67" x2="268" y2="67" stroke={stroke} strokeWidth="1.5" markerEnd="url(#plc-arrow)" />
      </svg>
    );
  }
  if (type === "air-treatment-frl") {
    return (
      <svg viewBox="0 0 320 130" className="w-full h-32">
        <defs>
          <marker id="frl-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#38bdf8" />
          </marker>
        </defs>
        <text x="160" y="14" textAnchor="middle" fontSize="8.5" fill={stroke} fontWeight="bold">Unité de conditionnement de l'air (FRL)</text>
        {/* Arrivée réseau */}
        <text x="20" y="60" textAnchor="middle" fontSize="7" fill={stroke}>Réseau</text>
        <line x1="20" y1="64" x2="52" y2="64" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#frl-arrow)" />
        {/* Filtre */}
        <rect x="52" y="42" width="60" height="44" rx="3" fill={box} stroke={stroke} strokeWidth="1.5" />
        <path d="M62 52 h40 M62 62 h40 M72 66 l10 12 l10 -12 z" stroke={stroke} strokeWidth="1.2" fill="none" />
        <text x="82" y="98" textAnchor="middle" fontSize="7.5" fill={stroke} fontWeight="bold">Filtre</text>
        <text x="82" y="108" textAnchor="middle" fontSize="6.3" fill={stroke}>retient eau</text>
        <text x="82" y="116" textAnchor="middle" fontSize="6.3" fill={stroke}>et impuretés</text>
        <line x1="112" y1="64" x2="124" y2="64" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#frl-arrow)" />
        {/* Régulateur */}
        <rect x="124" y="42" width="60" height="44" rx="3" fill={box} stroke={stroke} strokeWidth="1.5" />
        <circle cx="154" cy="60" r="11" fill="none" stroke={stroke} strokeWidth="1.2" />
        <line x1="154" y1="60" x2="161" y2="53" stroke={accent} strokeWidth="1.5" />
        <line x1="154" y1="70" x2="154" y2="78" stroke={stroke} strokeWidth="1.2" />
        <text x="154" y="98" textAnchor="middle" fontSize="7.5" fill={stroke} fontWeight="bold">Régulateur</text>
        <text x="154" y="108" textAnchor="middle" fontSize="6.3" fill={stroke}>fixe et stabilise</text>
        <text x="154" y="116" textAnchor="middle" fontSize="6.3" fill={stroke}>la pression</text>
        <line x1="184" y1="64" x2="196" y2="64" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#frl-arrow)" />
        {/* Lubrificateur */}
        <rect x="196" y="42" width="60" height="44" rx="3" fill={box} stroke={stroke} strokeWidth="1.5" />
        <circle cx="226" cy="54" r="2.2" fill="#38bdf8" />
        <path d="M226 58 v10" stroke="#38bdf8" strokeWidth="1.2" />
        <path d="M218 74 q8 -6 16 0" stroke={stroke} strokeWidth="1.2" fill="none" />
        <text x="226" y="98" textAnchor="middle" fontSize="7.5" fill={stroke} fontWeight="bold">Lubrificateur</text>
        <text x="226" y="108" textAnchor="middle" fontSize="6.3" fill={stroke}>ajoute un peu</text>
        <text x="226" y="116" textAnchor="middle" fontSize="6.3" fill={stroke}>d'huile (option)</text>
        {/* Sortie vers machine */}
        <line x1="256" y1="64" x2="292" y2="64" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#frl-arrow)" />
        <text x="300" y="60" textAnchor="middle" fontSize="7" fill={stroke}>Machine</text>
      </svg>
    );
  }
  if (type === "grafcet-structure") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-36">
        <text x="160" y="12" textAnchor="middle" fontSize="8.5" fill={stroke} fontWeight="bold">Les éléments d'un GRAFCET</text>
        {/* Étape initiale (double carré) */}
        <rect x="40" y="24" width="30" height="30" rx="2" fill="none" stroke={stroke} strokeWidth="1.2" />
        <rect x="44" y="28" width="22" height="22" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.4" />
        <text x="55" y="43" textAnchor="middle" fontSize="11" fontWeight="bold" fill={stroke}>0</text>
        <text x="55" y="66" textAnchor="middle" fontSize="6.6" fill={stroke}>étape initiale</text>
        {/* Liaison + transition */}
        <line x1="55" y1="54" x2="55" y2="78" stroke={stroke} strokeWidth="1.4" />
        <line x1="43" y1="72" x2="67" y2="72" stroke={accent} strokeWidth="2.4" />
        <text x="72" y="75" fontSize="7.5" fill={stroke}>réceptivité (condition)</text>
        {/* Étape 1 + action */}
        <rect x="44" y="86" width="22" height="22" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.4" />
        <text x="55" y="101" textAnchor="middle" fontSize="11" fontWeight="bold" fill={stroke}>1</text>
        <line x1="66" y1="97" x2="96" y2="97" stroke={stroke} strokeWidth="1.2" />
        <rect x="96" y="88" width="120" height="18" rx="3" fill={box} stroke={stroke} strokeWidth="1.2" />
        <text x="102" y="100" fontSize="7.6" fill={stroke}>action associée à l'étape</text>
        {/* Légende */}
        <line x1="240" y1="30" x2="256" y2="30" stroke={stroke} strokeWidth="1.4" />
        <text x="262" y="33" fontSize="7" fill={stroke}>liaison orientée</text>
        <line x1="240" y1="46" x2="256" y2="46" stroke={accent} strokeWidth="2.4" />
        <text x="262" y="49" fontSize="7" fill={stroke}>transition</text>
        <rect x="240" y="58" width="16" height="12" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.2" />
        <text x="262" y="67" fontSize="7" fill={stroke}>étape</text>
      </svg>
    );
  }
  if (type === "grafcet-structures") {
    return (
      <svg viewBox="0 0 320 150" className="w-full h-40">
        <text x="160" y="11" textAnchor="middle" fontSize="8.5" fill={stroke} fontWeight="bold">Structures de base du GRAFCET</text>
        {/* Séquence */}
        <text x="55" y="26" textAnchor="middle" fontSize="7.5" fill={stroke} fontWeight="bold">Séquence</text>
        <rect x="46" y="32" width="18" height="16" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <line x1="55" y1="48" x2="55" y2="66" stroke={stroke} strokeWidth="1.3" />
        <line x1="47" y1="57" x2="63" y2="57" stroke={accent} strokeWidth="2.2" />
        <rect x="46" y="66" width="18" height="16" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <text x="55" y="98" textAnchor="middle" fontSize="6.4" fill={stroke}>une étape</text>
        <text x="55" y="107" textAnchor="middle" fontSize="6.4" fill={stroke}>après l'autre</text>
        {/* Divergence OU (sélection) */}
        <text x="160" y="26" textAnchor="middle" fontSize="7.5" fill={stroke} fontWeight="bold">Sélection (OU)</text>
        <rect x="151" y="32" width="18" height="16" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <line x1="130" y1="54" x2="190" y2="54" stroke={stroke} strokeWidth="1.3" />
        <line x1="160" y1="48" x2="160" y2="54" stroke={stroke} strokeWidth="1.3" />
        <line x1="122" y1="62" x2="138" y2="62" stroke={accent} strokeWidth="2.2" />
        <line x1="182" y1="62" x2="198" y2="62" stroke={accent} strokeWidth="2.2" />
        <line x1="130" y1="54" x2="130" y2="62" stroke={stroke} strokeWidth="1.3" />
        <line x1="190" y1="54" x2="190" y2="62" stroke={stroke} strokeWidth="1.3" />
        <rect x="121" y="66" width="18" height="16" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <rect x="181" y="66" width="18" height="16" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <text x="160" y="98" textAnchor="middle" fontSize="6.4" fill={stroke}>1 seul chemin</text>
        <text x="160" y="107" textAnchor="middle" fontSize="6.4" fill={stroke}>choisi (1 trait)</text>
        {/* Divergence ET (parallélisme) */}
        <text x="265" y="26" textAnchor="middle" fontSize="7.5" fill={stroke} fontWeight="bold">Parallèle (ET)</text>
        <rect x="256" y="30" width="18" height="15" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <line x1="265" y1="45" x2="265" y2="56" stroke={stroke} strokeWidth="1.3" />
        <line x1="257" y1="50" x2="273" y2="50" stroke={accent} strokeWidth="2.2" />
        <line x1="235" y1="55" x2="295" y2="55" stroke={stroke} strokeWidth="1.6" />
        <line x1="235" y1="58" x2="295" y2="58" stroke={stroke} strokeWidth="1.6" />
        <line x1="235" y1="58" x2="235" y2="66" stroke={stroke} strokeWidth="1.3" />
        <line x1="295" y1="58" x2="295" y2="66" stroke={stroke} strokeWidth="1.3" />
        <rect x="226" y="66" width="18" height="16" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <rect x="286" y="66" width="18" height="16" rx="1.5" fill={box} stroke={stroke} strokeWidth="1.3" />
        <text x="265" y="98" textAnchor="middle" fontSize="6.4" fill={stroke}>chemins actifs</text>
        <text x="265" y="107" textAnchor="middle" fontSize="6.4" fill={stroke}>en même temps</text>
        <text x="160" y="128" textAnchor="middle" fontSize="6.8" fill={stroke}>OU = double trait de sélection (1 chemin) · ET = double barre de synchronisation (chemins simultanés)</text>
      </svg>
    );
  }
  return null;
}
