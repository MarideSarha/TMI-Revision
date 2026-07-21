/* ---------------------------- SVG SCHEMAS ---------------------------- */

export function LessonSchema({ type, dark }) {
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
