import type { LessonSchemaType } from "../../types";

/* ---------------------------- SVG SCHEMAS ---------------------------- */

interface LessonSchemaProps {
  type: LessonSchemaType;
  dark: boolean;
}

export function LessonSchema({ type, dark }: LessonSchemaProps) {
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
