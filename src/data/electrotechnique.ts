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

/* ---------------------------------------------------------------
   BLOC 2 — SÉCURITÉ ÉLECTRIQUE, CONSIGNATION ET HABILITATIONS
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block2Lessons: Lesson[] = [
  {
    id: "3-4",
    title: "Comprendre le risque électrique",
    durationMinutes: 30,
    objectifs: [
      "Distinguer un contact direct d'un contact indirect.",
      "Expliquer pourquoi un court-circuit est dangereux et ce qui doit le couper.",
      "Situer ce qui rend le courant dangereux pour le corps humain.",
    ],
    simple:
      "L'électricité ne se voit pas, ne s'entend pas et ne se sent pas avant qu'il ne soit trop tard. Comprendre comment on peut être en contact avec elle, et pourquoi un court-circuit est violent, est la base de toute intervention en sécurité.",
    vocab: [
      ["Contact direct", "Toucher une partie normalement sous tension (un conducteur actif, une borne)."],
      ["Contact indirect", "Toucher une masse métallique devenue sous tension à cause d'un défaut d'isolement."],
      ["Court-circuit", "Contact accidentel entre deux conducteurs, offrant un chemin de très faible résistance : l'intensité s'emballe."],
      ["Masse", "Partie métallique accessible d'un équipement, normalement hors tension, reliée à la terre."],
      ["Différentiel (DDR)", "Dispositif qui coupe le circuit dès qu'un courant de fuite vers la terre est détecté (protège contre le contact indirect)."],
      ["Électrisation", "Passage d'un courant dans le corps. Quand elle entraîne la mort, on parle d'électrocution."],
    ],
    example:
      "Sur une machine d'atelier, un fil dénudé touche la carcasse métallique. La carcasse est alors sous tension : un opérateur qui la touche subit un contact indirect. Si l'installation est correctement reliée à la terre et protégée par un différentiel, celui-ci coupe l'alimentation en une fraction de seconde.",
    schema: "control-circuit",
    illustrations: ["circuit-states"],
    ascii: [
      "CONTACT DIRECT        CONTACT INDIRECT",
      "  main → phase          main → carcasse (défaut)",
      "                              │",
      "                          terre + différentiel → coupe",
    ].join("\n"),
    retenir: [
      "Contact direct = pièce normalement sous tension. Contact indirect = masse mise sous tension par un défaut.",
      "Le danger pour le corps dépend surtout de l'intensité qui le traverse et de la durée.",
      "Un court-circuit fait grimper l'intensité : c'est le disjoncteur ou le fusible qui doit couper.",
      "La liaison à la terre + le différentiel protègent contre les contacts indirects.",
    ],
    erreurs: [
      "Croire qu'une basse tension est toujours sans danger : même 230 V peut être mortel.",
      "Toucher une carcasse métallique en supposant qu'elle est forcément hors tension.",
      "Confondre le rôle du différentiel (fuite à la terre) et celui du disjoncteur (surcharge, court-circuit).",
    ],
    astucesPro: [
      "Avant de toucher une machine suspecte, on ne se fie pas au hasard : on consigne et on vérifie l'absence de tension.",
      "Un différentiel qui déclenche « sans raison » signale souvent un vrai défaut d'isolement à rechercher, pas un caprice.",
    ],
    diagnostic: [
      "Identifier si le risque est un contact direct (pièce active accessible) ou indirect (masse).",
      "Vérifier la présence et l'état de la liaison à la terre et des protections.",
      "Rechercher un défaut d'isolement en cas de déclenchement répété du différentiel.",
    ],
    depannage: [
      "Sécuriser : consigner l'installation avant tout contrôle nécessitant un accès.",
      "Contrôler la continuité de la liaison à la terre (hors tension).",
      "Ne remettre sous tension qu'après avoir traité la cause du défaut.",
    ],
    securite: [
      "Toute intervention nécessitant un accès aux parties actives exige une consignation et une habilitation adaptée.",
      "La vérification d'absence de tension (VAT) se fait selon la procédure, juste avant tout contact.",
      "Cette application est pédagogique : elle ne remplace ni une formation pratique encadrée, ni les procédures de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Un opérateur signale qu'il « ressent des picotements » en touchant le capot d'une machine.",
      mission: ["Nommer le type de contact en cause.", "Citer la protection qui aurait dû agir.", "Indiquer la conduite immédiate à tenir."],
      correction:
        "Il s'agit d'un contact indirect : le capot (une masse) est probablement sous tension à cause d'un défaut d'isolement. La liaison à la terre associée à un différentiel aurait dû couper l'alimentation. Conduite immédiate : ne plus toucher la machine, la mettre hors service, la signaler et la faire consigner, puis rechercher le défaut avec une personne habilitée. Ne jamais continuer à l'utiliser.",
    },
    memo: ["Direct = pièce active", "Indirect = masse en défaut", "Terre + différentiel protègent", "Court-circuit → disjoncteur/fusible"],
    resume:
      "Le risque électrique se comprend par le type de contact (direct/indirect) et par le court-circuit ; la terre, le différentiel et les protections contre les surintensités en sont les garde-fous.",
    quizIds: ["els1", "els2", "els3", "els4", "els5"],
    verification: {
      question: "Toucher la carcasse métallique d'une machine mise sous tension par un défaut d'isolement, c'est un contact :",
      options: ["Direct", "Indirect", "Sans danger", "Volontaire"],
      correct: 1,
      explanation: "La carcasse est une masse : mise sous tension par un défaut, elle provoque un contact indirect. La terre et le différentiel servent à s'en protéger.",
    },
    exercice: {
      enonce:
        "Un collègue dit : « Ce n'est que du 230 V, ce n'est pas dangereux, je peux toucher sans consigner. » Que lui répondez-vous, et quelle démarche imposez-vous ?",
      consignes: [
        "Corrige l'idée fausse sur la « basse » tension.",
        "Explique ce qui rend le courant dangereux pour le corps.",
        "Rappelle la démarche de sécurité obligatoire avant contact.",
      ],
      criteres: [
        "J'ai indiqué que 230 V peut être mortel.",
        "J'ai relié le danger à l'intensité qui traverse le corps et à la durée.",
        "J'ai exigé une consignation et une vérification d'absence de tension par une personne habilitée.",
      ],
      correction:
        "230 V n'a rien d'anodin : c'est une tension qui provoque chaque année des accidents graves. Ce qui blesse, c'est l'intensité qui traverse le corps et la durée du passage. Avant tout contact avec des parties pouvant être sous tension, il faut consigner l'installation et vérifier l'absence de tension, en respectant les habilitations et la procédure de l'entreprise.",
    },
  },
  {
    id: "3-5",
    title: "La consignation électrique étape par étape",
    durationMinutes: 32,
    objectifs: [
      "Remettre dans l'ordre les quatre étapes d'une consignation électrique.",
      "Expliquer le rôle précis de chaque étape et la place de la vérification d'absence de tension.",
    ],
    simple:
      "Avant d'intervenir sur un équipement électrique, on doit être certain qu'il ne peut ni être sous tension, ni le redevenir pendant le travail. La consignation est la suite d'opérations qui garantit cela, dans un ordre précis qui ne s'improvise pas.",
    vocab: [
      ["Consignation", "Ensemble des opérations qui mettent et maintiennent un ouvrage hors tension pour intervenir en sécurité."],
      ["Séparation", "Couper toutes les sources d'alimentation à l'aide d'un organe de coupure (sectionneur, disjoncteur)."],
      ["Condamnation", "Verrouiller l'organe de coupure en position ouverte (cadenas) et signaler par une pancarte."],
      ["Identification", "Repérer avec certitude l'ouvrage sur lequel on va travailler."],
      ["VAT", "Vérification d'Absence de Tension, réalisée au plus près du point de travail avec un appareil testé avant et après."],
      ["Habilitation", "Reconnaissance, par l'employeur, qu'une personne est formée pour réaliser des opérations électriques données."],
    ],
    example:
      "Pour remplacer un contacteur dans une armoire, le technicien habilité ouvre le disjoncteur (séparer), le cadenasse et pose une pancarte (condamner), vérifie sur le schéma qu'il s'agit du bon départ (identifier), puis mesure l'absence de tension au VAT juste avant de toucher les bornes (VAT).",
    schema: "consignation-steps",
    illustrations: ["consignation-interactive"],
    ascii: "SÉPARER → CONDAMNER → IDENTIFIER → VÉRIFIER (VAT)\n couper     cadenas       repérer        0 V confirmé",
    retenir: [
      "L'ordre : séparer → condamner → identifier → vérifier l'absence de tension (VAT).",
      "Couper ne suffit pas : tant que la VAT n'a pas confirmé 0 V, l'ouvrage est considéré sous tension.",
      "La condamnation empêche une remise sous tension par un tiers, même bien intentionné.",
      "En haute tension, une mise à la terre et en court-circuit s'ajoute après la VAT.",
    ],
    erreurs: [
      "Sauter l'étape de VAT en supposant que « c'est coupé ».",
      "Ne pas condamner parce qu'on « reste à côté » : un tiers peut réarmer sans le savoir.",
      "Vérifier l'absence de tension avec un appareil dont on n'a pas contrôlé le bon fonctionnement.",
    ],
    astucesPro: [
      "On teste le VAT sur une source connue avant ET après la mesure : s'il ne fonctionne plus après, la mesure ne vaut rien.",
      "La pancarte et le cadenas portent souvent le nom de l'intervenant : la levée de consignation lui revient.",
    ],
    diagnostic: [
      "Vérifier que toutes les sources d'alimentation ont bien été séparées, pas seulement la principale.",
      "Contrôler que l'organe de coupure est condamné en position ouverte.",
      "S'assurer que le point de VAT correspond bien à la zone de travail.",
    ],
    depannage: [
      "Reprendre la consignation dans l'ordre si un doute existe sur une étape.",
      "En cas de sources multiples (secours, condensateurs), traiter chaque source avant d'intervenir.",
      "Ne lever la consignation qu'une fois le travail terminé et les personnes prévenues.",
    ],
    securite: [
      "La consignation électrique est réalisée par une personne habilitée, selon la procédure de l'entreprise.",
      "On ne shunte jamais un dispositif de sécurité pour aller plus vite.",
      "Cette application est pédagogique et ne remplace pas une formation pratique encadrée ni les procédures internes.",
    ],
    etudeDeCas: {
      situation: "Un intervenant a coupé le disjoncteur et commence à démonter, sans cadenas ni VAT.",
      mission: ["Repérer les deux étapes manquantes.", "Expliquer le risque concret créé.", "Donner l'ordre correct à respecter."],
      correction:
        "Il manque la condamnation (cadenas + pancarte) et la vérification d'absence de tension. Risque concret : un collègue peut réarmer le disjoncteur sans savoir qu'une intervention est en cours, et rien ne prouve que la zone de travail est réellement hors tension. Ordre correct : séparer, condamner, identifier, puis vérifier l'absence de tension avec un VAT testé avant et après. Aucun contact avant la VAT.",
    },
    memo: ["Séparer", "Condamner", "Identifier", "Vérifier (VAT)", "Pas de contact avant 0 V confirmé"],
    resume:
      "La consignation suit quatre étapes ordonnées ; la vérification d'absence de tension est le point de non-retour qui autorise l'intervention.",
    quizIds: ["els6", "els7", "els8", "els9", "els10"],
    verification: {
      question: "Dans une consignation, à quel moment peut-on considérer que l'on est autorisé à intervenir ?",
      options: ["Dès que le disjoncteur est ouvert", "Après avoir cadenassé", "Une fois la VAT réalisée et l'absence de tension confirmée", "Dès l'identification de l'ouvrage"],
      correct: 2,
      explanation: "La VAT est l'étape qui confirme réellement l'absence de tension. Avant elle, l'ouvrage reste considéré comme dangereux, même coupé et cadenassé.",
    },
    exercice: {
      enonce:
        "Remettez dans l'ordre et justifiez : (a) vérifier l'absence de tension, (b) cadenasser l'organe de coupure, (c) ouvrir le sectionneur, (d) repérer l'équipement concerné.",
      consignes: [
        "Donne l'ordre correct des quatre opérations.",
        "Justifie la place de chaque étape.",
        "Explique pourquoi la VAT est en dernier.",
      ],
      criteres: [
        "L'ordre proposé est c, b, d, a.",
        "J'ai justifié le rôle de la condamnation et de l'identification.",
        "J'ai expliqué que la VAT confirme l'absence réelle de tension avant tout contact.",
      ],
      correction:
        "Ordre correct : (c) ouvrir le sectionneur pour séparer, (b) cadenasser pour condamner, (d) repérer pour identifier, (a) vérifier l'absence de tension. La VAT vient en dernier car elle valide, au point de travail, que toutes les étapes précédentes ont bien mis l'ouvrage hors tension : c'est le contrôle qui autorise l'intervention.",
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
  {
    id: "m3-b2",
    num: 2,
    title: "Sécurité électrique, consignation et habilitations",
    objective: "Appliquer une démarche de consignation et situer les habilitations avant toute intervention électrique.",
    lessonIds: block2Lessons.map((lesson) => lesson.id),
    chapterCount: 7,
    status: "in_progress",
  },
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
  lessons: [...block1Lessons, ...block2Lessons],
  blocks: ELECTRO_BLOCKS,
};
