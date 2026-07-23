import { Zap } from "lucide-react";
import type { Lesson, TrainingBlock, TrainingModule } from "../types";

/* ============================================================
   MODULE 3 — ÉLECTROTECHNIQUE INDUSTRIELLE
   Parcours progressif débutant → opérationnel, organisé par blocs
   de maîtrise sur le modèle du module 4 (mécanique).

   Bloc 1 = fondamentaux déjà rédigés (leçons 3-1, 3-2, 3-3),
   conservés à l'identique. Les blocs 2 à 7 sont développés et
   validés un par un.
   ============================================================ */

const block1Lessons: Lesson[] = [
  {
    id: "3-1",
    title: "Tension, intensité, résistance, loi d'Ohm",
    durationMinutes: 25,
    objectifs: [
      "Identifier tension, intensité et résistance avec leur unité.",
      "Choisir et appliquer la bonne forme de la loi d'Ohm.",
    ],
    simple:
      "L'électricité, c'est un peu comme l'eau dans un tuyau : la tension pousse, l'intensité est le débit de courant, et la résistance freine ce courant. La loi d'Ohm relie ces trois grandeurs.",
    vocab: [
      ["Tension (U)", "Différence de potentiel électrique, en Volts (V)."],
      ["Intensité (I)", "Quantité de courant qui circule, en Ampères (A)."],
      ["Résistance (R)", "Ce qui s'oppose au passage du courant, en Ohms (Ω)."],
      ["Loi d'Ohm", "U = R × I."],
      ["Courant continu (DC)", "Le courant circule toujours dans le même sens (ex : batterie)."],
      ["Courant alternatif (AC)", "Le courant change de sens périodiquement (ex : réseau EDF, 50 Hz)."],
      ["Monophasé", "Réseau alternatif à une seule phase, souvent 230 V (usage domestique)."],
      ["Triphasé", "Réseau alternatif à 3 phases, souvent 400 V (usage industriel, moteurs)."],
    ],
    example:
      "Un radiateur de résistance 50 Ω branché sur du 230 V consomme un courant I = U / R = 230 / 50 = 4,6 A.",
    schema: "ohm-triangle",
    retenir: [
      "Triangle U-R-I : U = R × I, I = U / R, R = U / I.",
      "Le triphasé alimente les moteurs industriels car il fournit un champ tournant naturel.",
      "230 V entre phase et neutre, environ 400 V entre deux phases en triphasé standard français.",
    ],
    erreurs: [
      "Confondre 230 V (monophasé) et 400 V (entre phases en triphasé) : ce ne sont pas deux tensions différentes par hasard, elles sont liées par √3.",
      "Oublier que la loi d'Ohm ne s'applique telle quelle qu'en courant continu ou en résistance pure.",
    ],
    quizIds: ["q33", "q34", "q35", "q36", "q37", "q38"],
    verification: {
      question: "Un récepteur de 50 Ω est alimenté sous 230 V. Quelle intensité circule ?",
      options: ["0,22 A", "4,6 A", "50 A", "11 500 A"],
      correct: 1,
      explanation: "I = U / R = 230 / 50 = 4,6 A.",
    },
    exercice: {
      enonce:
        "Un moteur monophasé absorbe un courant de 8 A sous une tension de 230 V. Sa résistance interne équivalente est-elle proche de 29 Ω ? Vérifiez le calcul.",
      consignes: [
        "Repère les deux grandeurs connues et leurs unités.",
        "Choisis la forme adaptée de la loi d'Ohm.",
        "Effectue le calcul puis interprète l'arrondi proposé.",
      ],
      criteres: [
        "J'ai utilisé R = U / I.",
        "Mon calcul est 230 / 8 = 28,75 Ω.",
        "J'ai conclu que 29 Ω est un arrondi cohérent tout en rappelant la limite du modèle.",
      ],
      correction:
        "R = U / I = 230 / 8 = 28,75 Ω, soit environ 29 Ω. Le calcul est correct (à noter : un vrai moteur n'est pas une résistance pure, mais l'exercice reste valable pour s'entraîner à la loi d'Ohm).",
    },
  },
  {
    id: "3-2",
    title: "Appareillage électrique industriel",
    durationMinutes: 25,
    objectifs: [
      "Distinguer les fonctions de commande et de protection d'un départ moteur.",
      "Suivre la chaîne disjoncteur, contacteur, relais thermique et moteur lors d'un diagnostic.",
    ],
    simple:
      "Dans une armoire électrique, plusieurs composants protègent et pilotent les moteurs : les fusibles et disjoncteurs coupent en cas de défaut, les contacteurs pilotent la mise en route, les relais thermiques protègent contre la surcharge.",
    vocab: [
      ["Fusible", "Coupe le circuit en fondant si le courant dépasse une valeur : protection non réarmable."],
      ["Disjoncteur", "Coupe le circuit automatiquement en cas de surcharge ou court-circuit, réarmable."],
      ["Contacteur", "Interrupteur commandé électriquement pour piloter un moteur à distance."],
      ["Relais thermique", "Protège le moteur contre une surcharge prolongée en coupant l'alimentation."],
      ["Moteur asynchrone", "Type de moteur électrique le plus courant en industrie, alimenté en triphasé."],
      ["Variateur de vitesse", "Appareil qui fait varier la vitesse d'un moteur en modifiant fréquence et tension."],
    ],
    example:
      "Sur un convoyeur, le contacteur ferme le circuit pour démarrer le moteur quand on appuie sur « marche ». Si le moteur force trop (colis coincé), le relais thermique détecte la surcharge et coupe l'alimentation avant que le moteur ne grille.",
    schema: "control-circuit",
    retenir: [
      "Fusible = protection non réarmable contre le court-circuit. Disjoncteur = protection réarmable.",
      "Relais thermique = protection spécifique contre la surcharge du moteur, pas contre le court-circuit.",
      "Un contacteur ne protège rien : il commande. C'est le relais thermique et le disjoncteur qui protègent.",
    ],
    erreurs: [
      "Confondre contacteur (qui commande) et disjoncteur (qui protège).",
      "Réarmer un relais thermique plusieurs fois sans chercher la cause de la surcharge.",
    ],
    quizIds: ["q39", "q40", "q41", "q42", "q43", "q44"],
    verification: {
      question: "Quel composant protège principalement un moteur contre une surcharge prolongée ?",
      options: ["Le contacteur", "Le relais thermique", "Le bouton-poussoir", "Le voyant"],
      correct: 1,
      explanation: "Le relais thermique détecte une surcharge durable. Le contacteur commande le moteur, mais n'assure pas cette protection.",
    },
    exercice: {
      enonce:
        "Un moteur s'arrête tout seul après 10 minutes de marche, sans bruit anormal ni fumée. Quel composant a probablement agi, et pourquoi ?",
      consignes: [
        "Identifie le composant susceptible de provoquer cet arrêt temporisé.",
        "Propose les causes électriques ou mécaniques à contrôler.",
        "Explique pourquoi il ne faut pas réarmer immédiatement.",
      ],
      criteres: [
        "J'ai identifié le relais thermique comme cause probable de la coupure.",
        "J'ai prévu le contrôle de la charge mécanique et du courant moteur.",
        "J'ai recherché la cause avant d'autoriser un nouvel essai.",
      ],
      correction:
        "Le relais thermique a probablement coupé le circuit car le moteur consommait un courant trop élevé pendant trop longtemps (surcharge). Il faut vérifier la charge mécanique entraînée avant de réarmer.",
    },
  },
  {
    id: "3-3",
    title: "Appareils de mesure et diagnostic de premier niveau",
    durationMinutes: 25,
    objectifs: [
      "Choisir entre VAT, multimètre et pince ampèremétrique selon le contrôle.",
      "Réaliser une mesure de premier niveau sans créer de situation dangereuse.",
    ],
    simple:
      "Pour diagnostiquer une panne électrique, il faut savoir choisir et utiliser le bon outil de mesure, toujours en respectant la sécurité.",
    vocab: [
      ["Multimètre", "Mesure tension, intensité, résistance et continuité."],
      ["Pince ampèremétrique", "Mesure l'intensité sans ouvrir le circuit, en entourant le câble."],
      ["VAT", "Vérificateur d'Absence de Tension, utilisé juste avant de toucher un circuit consigné."],
      ["Continuité", "Test qui vérifie qu'un circuit ou un composant n'est pas coupé."],
    ],
    example:
      "Pour savoir si un moteur triphasé est bien alimenté sur ses 3 phases sans démonter l'armoire, on utilise une pince ampèremétrique sur chaque fil d'alimentation.",
    schema: "measurement-tools",
    retenir: [
      "Toujours vérifier l'absence de tension avec un VAT avant de toucher un circuit, même consigné.",
      "La pince ampèremétrique mesure sans contact direct avec le conducteur nu : plus sûr pour l'intensité.",
      "Le multimètre en mode continuité doit toujours être utilisé hors tension.",
    ],
    erreurs: [
      "Mesurer une résistance ou une continuité sur un circuit encore sous tension : risque d'endommager l'appareil et danger pour l'utilisateur.",
      "Utiliser un multimètre en position ampèremètre en série sans précaution : cela peut créer un court-circuit si mal branché.",
    ],
    quizIds: ["q45", "q46", "q47", "q48", "q49", "q50"],
    verification: {
      question: "Dans quel état doit être un circuit pour mesurer sa continuité ?",
      options: ["Sous tension", "Hors tension et sécurisé", "En marche à vide", "En surcharge"],
      correct: 1,
      explanation: "Une mesure de continuité ou de résistance se réalise hors tension, après mise en sécurité du circuit.",
    },
    exercice: {
      enonce:
        "Vous devez vérifier si un contacteur a un contact collé (fermé alors qu'il ne devrait pas l'être). Quel appareil utilisez-vous, et dans quel état doit être le circuit ?",
      consignes: [
        "Choisis l'appareil et sa fonction de mesure.",
        "Précise l'état énergétique obligatoire du circuit.",
        "Explique comment interpréter le résultat obtenu sur le contact.",
      ],
      criteres: [
        "J'ai choisi le multimètre en mode continuité ou ohmmètre.",
        "J'ai exigé un circuit hors tension et consigné.",
        "J'ai expliqué qu'une continuité inattendue indique un contact collé.",
      ],
      correction:
        "On utilise un multimètre en mode continuité (ou ohmmètre), et le circuit doit être hors tension et consigné avant la mesure. On mesure entre les bornes du contact : si continuité alors qu'il devrait être ouvert, le contact est collé.",
    },
  },
];

export const ELECTRO_BLOCKS: TrainingBlock[] = [
  {
    id: "m3-b1",
    num: 1,
    title: "Fondamentaux électriques : grandeurs, appareillage et mesure",
    objective: "Comprendre les grandeurs de base, reconnaître l'appareillage d'un départ moteur et réaliser une mesure de premier niveau en sécurité.",
    lessonIds: block1Lessons.map((lesson) => lesson.id),
    chapterCount: block1Lessons.length,
    status: "available",
    exam: {
      questionIds: ["q33", "q34", "q37", "q38", "q39", "q40", "q42", "q44", "q45", "q46", "q47", "q48"],
      passPercent: 80,
    },
  },
  { id: "m3-b2", num: 2, title: "Sécurité électrique, consignation et habilitations", objective: "Appliquer une démarche de consignation et situer les habilitations avant toute intervention électrique.", lessonIds: [], chapterCount: 7, status: "planned" },
  { id: "m3-b3", num: 3, title: "Réseaux, distribution et régimes de neutre", objective: "Distinguer monophasé et triphasé, comprendre la distribution et les régimes de neutre.", lessonIds: [], chapterCount: 7, status: "planned" },
  { id: "m3-b4", num: 4, title: "Appareillage de commande et de protection approfondi", objective: "Maîtriser sectionneurs, contacteurs, relais et dispositifs de protection.", lessonIds: [], chapterCount: 7, status: "planned" },
  { id: "m3-b5", num: 5, title: "Moteurs asynchrones et variation de vitesse", objective: "Comprendre le démarrage, le sens de rotation et la variation de vitesse d'un moteur triphasé.", lessonIds: [], chapterCount: 8, status: "planned" },
  { id: "m3-b6", num: 6, title: "Lecture de schémas électriques industriels", objective: "Lire un schéma unifilaire ou développé pour localiser un organe ou une panne.", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m3-b7", num: 7, title: "Méthode de diagnostic électrique et synthèse", objective: "Structurer une recherche de panne électrique méthodique et tracée.", lessonIds: [], chapterCount: 6, status: "planned" },
];

export const ELECTRO_MODULE: TrainingModule = {
  id: "m3",
  num: 3,
  title: "Électrotechnique industrielle",
  icon: Zap,
  color: "violet",
  source: "[AFORP] Module 3 · parcours progressif débutant → opérationnel · références NF C 18-510 et constructeurs",
  lessons: [...block1Lessons],
  blocks: ELECTRO_BLOCKS,
};
