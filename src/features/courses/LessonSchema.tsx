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
