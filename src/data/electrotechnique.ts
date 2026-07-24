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
  {
    id: "3-6",
    title: "Les EPI et l'outillage isolant en électricité",
    durationMinutes: 28,
    objectifs: [
      "Associer chaque équipement de protection au risque électrique qu'il réduit.",
      "Contrôler l'état d'un EPI et d'un outil isolant avant utilisation.",
    ],
    simple:
      "Même en travaillant avec méthode, on garde des protections adaptées au risque électrique. Les équipements de protection individuelle (EPI) et l'outillage isolant sont une barrière supplémentaire : ils ne remplacent pas la consignation, ils s'y ajoutent.",
    vocab: [
      ["EPI", "Équipement de Protection Individuelle : ce que porte la personne (gants, écran, chaussures…)."],
      ["Gants isolants", "Gants classés pour une tension donnée, qui protègent contre le contact électrique."],
      ["Écran facial", "Protection du visage contre l'arc électrique et les projections de matière."],
      ["Tapis / tabouret isolant", "Support isolant qui limite le passage du courant vers la terre à travers le corps."],
      ["Outils isolés", "Outils dont le manche est isolé et testé pour limiter le risque près de pièces sous tension."],
      ["VAT", "Vérificateur d'Absence de Tension : ce n'est pas un EPI, mais un instrument de contrôle indispensable."],
    ],
    example:
      "Pour une intervention BT autorisée, l'électricien porte des gants isolants adaptés à la tension, un écran facial, se tient sur un tapis isolant et utilise un tournevis à manche isolé. Avant de commencer, il gonfle ses gants pour vérifier qu'ils ne sont pas percés.",
    schema: "electrical-ppe",
    ascii: "RISQUE                 PROTECTION\ncontact / choc     →   gants isolants\narc / projection   →   écran facial\nfuite vers la terre →  tapis isolant\ncontact via l'outil →  outils isolés",
    retenir: [
      "Les EPI et l'outillage isolant complètent la consignation, ils ne la remplacent jamais.",
      "Les gants isolants et les outils sont classés pour une tension : il faut choisir la bonne classe.",
      "Un EPI se contrôle avant chaque usage : gant percé, écran fissuré, manche fendu = rebut.",
      "Le VAT est un instrument de contrôle, pas un EPI, mais il fait partie de la panoplie de sécurité.",
    ],
    erreurs: [
      "Utiliser des gants isolants percés, humides ou d'une classe de tension inadaptée.",
      "Croire que les EPI dispensent de consigner : ils sont une protection complémentaire.",
      "Ranger un écran facial rayé au point de gêner la vision et continuer à l'utiliser.",
    ],
    astucesPro: [
      "On teste l'étanchéité des gants isolants (test de gonflage) avant chaque intervention.",
      "On range les EPI à l'abri de la lumière, de la chaleur et des produits agressifs pour préserver l'isolation.",
    ],
    diagnostic: [
      "Identifier le risque dominant (contact, arc, fuite) pour choisir les EPI adaptés.",
      "Vérifier la classe de tension marquée sur les gants et les outils.",
      "Contrôler visuellement l'état de chaque équipement avant usage.",
    ],
    depannage: [
      "Écarter immédiatement tout EPI douteux et le remplacer.",
      "Refuser une intervention si les protections adaptées ne sont pas disponibles.",
      "Signaler un EPI détérioré pour qu'il soit remplacé et non réutilisé.",
    ],
    securite: [
      "Les EPI ne remplacent ni la consignation ni la vérification d'absence de tension.",
      "La classe des gants et des outils doit correspondre à la tension de travail.",
      "Cette application est pédagogique : le choix réel des EPI suit la procédure de l'entreprise et la réglementation.",
    ],
    etudeDeCas: {
      situation: "Un technicien s'apprête à intervenir avec des gants isolants qu'il trouve « un peu collants et raides ».",
      mission: ["Dire s'il peut les utiliser.", "Indiquer le contrôle à faire.", "Proposer la bonne conduite."],
      correction:
        "Des gants raides ou collants peuvent avoir perdu leurs propriétés isolantes. Il ne doit pas les utiliser sans contrôle : il faut vérifier leur état (test de gonflage, absence de fissure) et leur date de vérification. En cas de doute, on les met au rebut et on utilise une paire conforme. La sécurité prime sur la disponibilité de l'équipement.",
    },
    memo: ["EPI = barrière complémentaire", "Bonne classe de tension", "Contrôle avant chaque usage", "Doute = rebut"],
    resume:
      "Les EPI et l'outillage isolant réduisent le risque électrique mais ne remplacent pas la consignation ; leur classe et leur état doivent être vérifiés avant chaque usage.",
    quizIds: ["els11", "els12", "els13", "els14", "els15"],
    verification: {
      question: "Que doit-on faire d'un gant isolant présentant une petite déchirure ?",
      options: ["L'utiliser quand même si l'intervention est courte", "Le réparer avec du ruban adhésif", "Le mettre au rebut et en prendre un conforme", "L'utiliser en doublant avec un second gant percé"],
      correct: 2,
      explanation: "Un gant isolant endommagé ne protège plus : il doit être écarté et remplacé par un équipement conforme.",
    },
    exercice: {
      enonce:
        "Associez chaque risque à la protection adaptée : (1) contact avec une pièce sous tension, (2) arc électrique et projections, (3) contact via l'outil utilisé.",
      consignes: [
        "Associe chaque risque à un EPI ou un équipement.",
        "Justifie brièvement chaque association.",
        "Rappelle ce que les EPI ne remplacent pas.",
      ],
      criteres: [
        "(1) gants isolants, (2) écran facial, (3) outils isolés.",
        "J'ai justifié chaque association par le risque concerné.",
        "J'ai rappelé que les EPI ne remplacent pas la consignation.",
      ],
      correction:
        "(1) gants isolants contre le contact électrique, (2) écran facial contre l'arc et les projections, (3) outils isolés contre le contact par l'outil. Ces protections s'ajoutent à la consignation et à la vérification d'absence de tension : elles ne les remplacent pas.",
    },
  },
  {
    id: "3-7",
    title: "Les habilitations électriques (NF C 18-510)",
    durationMinutes: 30,
    objectifs: [
      "Expliquer ce qu'est une habilitation électrique et qui la délivre.",
      "Décoder un symbole d'habilitation caractère par caractère.",
    ],
    simple:
      "Toutes les opérations électriques ne sont pas permises à tout le monde. L'habilitation est une reconnaissance, donnée par l'employeur après formation, du fait qu'une personne sait réaliser certaines opérations en sécurité. Chaque symbole se lit comme un petit code.",
    vocab: [
      ["Habilitation", "Reconnaissance par l'employeur qu'une personne est formée pour des opérations électriques précises."],
      ["NF C 18-510", "Norme française qui encadre les opérations sur les ouvrages électriques et les habilitations."],
      ["Domaine de tension", "Première lettre : B pour basse tension, H pour haute tension."],
      ["Indice de rôle", "Chiffre : 0 non-électricien, 1 exécutant électricien, 2 chargé de travaux."],
      ["Attribut", "Lettre complémentaire : R (intervention générale), C (consignation), V (voisinage)…"],
      ["Chargé de consignation (BC)", "Personne habilitée à réaliser la consignation d'un ouvrage."],
    ],
    example:
      "Un « B1V » se décode ainsi : B (basse tension), 1 (exécutant électricien), V (autorisé à travailler au voisinage de pièces sous tension). Un « BC » est le chargé de consignation : c'est lui qui réalise la consignation étudiée au chapitre précédent.",
    schema: "control-circuit",
    illustrations: ["habilitation-decoder"],
    ascii: "B      1      V\n│      │      └─ attribut : voisinage\n│      └──────── rôle : exécutant\n└─────────────── domaine : basse tension",
    retenir: [
      "L'habilitation est délivrée par l'employeur après formation, pas par un diplôme seul.",
      "1re lettre = domaine (B basse tension, H haute tension).",
      "Chiffre = rôle (0 non-électricien, 1 exécutant, 2 chargé de travaux).",
      "Lettres = attributs (R intervention générale, C consignation, V voisinage).",
    ],
    erreurs: [
      "Intervenir sur un ouvrage électrique sans posséder l'habilitation correspondante.",
      "Confondre BR (intervention/dépannage) et BC (consignation) : ce ne sont pas les mêmes prérogatives.",
      "Croire qu'une habilitation est acquise à vie : elle est révisée et renouvelée périodiquement.",
    ],
    astucesPro: [
      "Avant une intervention, on vérifie que son habilitation couvre bien l'opération et le domaine de tension.",
      "Le titre d'habilitation précise aussi les limites : on ne va pas au-delà de ce qui est écrit.",
    ],
    diagnostic: [
      "Identifier le domaine de tension de l'ouvrage (BT ou HT).",
      "Déterminer le rôle attendu (exécuter, diriger, consigner, dépanner).",
      "Vérifier que le symbole d'habilitation correspond à l'opération prévue.",
    ],
    depannage: [
      "En l'absence d'habilitation adaptée, ne pas intervenir et faire appel à une personne habilitée.",
      "Demander la consignation à un chargé de consignation (BC) quand elle est requise.",
      "Signaler tout écart entre l'opération demandée et son niveau d'habilitation.",
    ],
    securite: [
      "Aucune opération électrique ne se fait sans l'habilitation correspondante.",
      "L'habilitation fixe des limites : on ne les dépasse jamais, même sous pression.",
      "Cette application est pédagogique : elle ne délivre aucune habilitation et ne remplace pas la formation réglementaire.",
    ],
    etudeDeCas: {
      situation: "On demande à un « B1 » de réaliser seul la consignation d'une armoire avant une intervention.",
      mission: ["Dire si c'est conforme.", "Identifier qui doit consigner.", "Proposer la bonne organisation."],
      correction:
        "Ce n'est pas conforme : la consignation relève d'un chargé de consignation (BC), pas d'un simple exécutant B1. Il faut faire réaliser la consignation par une personne habilitée BC, puis l'exécutant B1 (ou B1V si voisinage) peut travailler dans le cadre défini par le chargé de travaux. Chacun agit dans les limites de son habilitation.",
    },
    memo: ["B/H = domaine", "0/1/2 = rôle", "R/C/V = attributs", "BC = consignation", "Jamais au-delà de son titre"],
    resume:
      "Une habilitation, délivrée par l'employeur, autorise des opérations précises ; elle se lit domaine + rôle + attributs et fixe des limites à respecter.",
    quizIds: ["els16", "els17", "els18", "els19", "els20"],
    verification: {
      question: "Dans le symbole « BR », que signifie la lettre R ?",
      options: ["Réparation interdite", "Intervention BT générale (dépannage, mesurage)", "Réseau haute tension", "Rôle de non-électricien"],
      correct: 1,
      explanation: "BR = chargé d'intervention BT générale : dépannage, mesurage, essais, raccordement, dans les limites fixées par la norme et l'employeur.",
    },
    exercice: {
      enonce:
        "Décodez et expliquez les symboles suivants : (a) B0, (b) B2, (c) BC.",
      consignes: [
        "Donne la signification de chaque caractère.",
        "Explique ce que la personne est autorisée à faire, en une phrase.",
        "Précise qui, parmi eux, réalise la consignation.",
      ],
      criteres: [
        "J'ai décodé le domaine, le rôle et les attributs de chaque symbole.",
        "J'ai relié chaque symbole à une autorisation concrète.",
        "J'ai identifié BC comme le chargé de consignation.",
      ],
      correction:
        "(a) B0 = basse tension, travaux d'ordre non électrique : personne non-électricienne travaillant près d'installations BT. (b) B2 = basse tension, chargé de travaux : il dirige et réalise des travaux électriques. (c) BC = basse tension, chargé de consignation : c'est lui qui réalise la consignation. La consignation est donc du ressort du BC.",
    },
  },
  {
    id: "3-8",
    title: "Mesurer en sécurité",
    durationMinutes: 28,
    objectifs: [
      "Appliquer les précautions avant, pendant et après une mesure électrique.",
      "Éviter les erreurs de mesure dangereuses pour la personne et l'appareil.",
    ],
    simple:
      "Mesurer est utile pour diagnostiquer, mais une mesure mal préparée peut être dangereuse. On choisit le bon appareil, le bon calibre, on vérifie l'état des cordons et on distingue ce qui se mesure hors tension de ce qui se mesure sous tension.",
    vocab: [
      ["Catégorie de mesure (CAT)", "Classement (CAT II, III, IV) indiquant l'environnement électrique où l'appareil peut être utilisé en sécurité."],
      ["Calibre", "Plage de mesure choisie sur l'appareil (tension, intensité, résistance)."],
      ["Cordons de mesure", "Fils reliant l'appareil au circuit ; ils doivent être en bon état et adaptés (parfois à fusible)."],
      ["Continuité", "Test qui vérifie qu'un circuit n'est pas coupé : se fait hors tension."],
      ["Pince ampèremétrique", "Mesure l'intensité sans ouvrir le circuit, plus sûre pour ce contrôle."],
    ],
    example:
      "Pour vérifier la présence des 3 phases sur un moteur, on utilise une pince ampèremétrique adaptée. Pour tester la continuité d'un enroulement, on consigne d'abord, puis on mesure hors tension au multimètre : jamais l'inverse.",
    schema: "measurement-safety",
    ascii: "AVANT   → appareil + cordons en bon etat, bonne categorie\nCHOISIR → fonction et calibre corrects\nMESURER → tension : sous tension autorisee | R et continuite : hors tension",
    retenir: [
      "La catégorie (CAT) de l'appareil doit correspondre à l'installation mesurée.",
      "On choisit la fonction et le calibre AVANT de connecter, jamais pendant.",
      "Résistance et continuité se mesurent hors tension ; tension et intensité peuvent se mesurer sous tension avec les précautions adaptées.",
      "La pince ampèremétrique évite d'ouvrir le circuit pour mesurer l'intensité.",
    ],
    erreurs: [
      "Mesurer une résistance ou une continuité sur un circuit encore sous tension.",
      "Laisser l'appareil en position ampèremètre et l'utiliser comme voltmètre (risque de court-circuit).",
      "Utiliser des cordons abîmés ou une catégorie de mesure inadaptée à l'installation.",
    ],
    astucesPro: [
      "On vérifie le bon fonctionnement de l'appareil sur une valeur connue avant une mesure importante.",
      "On garde une main éloignée des parties actives : on ne s'appuie pas sur le circuit pendant la mesure.",
    ],
    diagnostic: [
      "Déterminer la grandeur à mesurer et donc l'appareil et la fonction adaptés.",
      "Vérifier la catégorie de mesure et l'état des cordons.",
      "Décider si la mesure se fait sous tension (tension, intensité) ou hors tension (résistance, continuité).",
    ],
    depannage: [
      "Consigner avant toute mesure de résistance, de continuité ou d'isolement.",
      "Contrôler l'absence de tension avant les mesures qui l'exigent.",
      "Interpréter la mesure en la comparant à une valeur attendue, pas dans l'absolu.",
    ],
    securite: [
      "Certaines mesures se font hors tension : elles imposent une consignation préalable.",
      "Les mesures sous tension ne sont réalisées que par une personne habilitée, avec le matériel adapté.",
      "Cette application est pédagogique et ne remplace pas la formation à l'usage des appareils de mesure.",
    ],
    etudeDeCas: {
      situation: "Un technicien veut mesurer la continuité d'un contact, mais l'armoire est toujours sous tension.",
      mission: ["Dire si la mesure est possible en l'état.", "Indiquer la préparation nécessaire.", "Préciser le bon réglage de l'appareil."],
      correction:
        "La mesure de continuité ne se fait pas sous tension : c'est dangereux et cela peut détruire l'appareil. Il faut d'abord consigner l'installation et vérifier l'absence de tension, puis régler le multimètre sur la fonction continuité (ou ohmmètre) et mesurer entre les bornes du contact. Une continuité inattendue révèle par exemple un contact collé.",
    },
    memo: ["Bonne catégorie CAT", "Calibre choisi avant", "R et continuité = hors tension", "Comparer à une valeur attendue"],
    resume:
      "Mesurer en sécurité, c'est choisir le bon appareil et le bon calibre, contrôler son état, et distinguer les mesures sous tension des mesures hors tension.",
    quizIds: ["els21", "els22", "els23", "els24", "els25"],
    verification: {
      question: "Dans quel état doit être le circuit pour mesurer une résistance ou une continuité ?",
      options: ["Sous tension", "Hors tension et consigné", "En surcharge", "Peu importe"],
      correct: 1,
      explanation: "Les mesures de résistance et de continuité se font toujours hors tension, après consignation : sinon on risque d'endommager l'appareil et de se mettre en danger.",
    },
    exercice: {
      enonce:
        "Classez ces mesures en « sous tension possible » ou « hors tension obligatoire » : (a) tension d'alimentation, (b) continuité d'un fusible, (c) intensité sur une phase, (d) résistance d'un enroulement.",
      consignes: [
        "Classe chaque mesure dans la bonne catégorie.",
        "Justifie brièvement chaque classement.",
        "Rappelle la précaution commune à toutes les mesures.",
      ],
      criteres: [
        "(a) et (c) sous tension possible ; (b) et (d) hors tension obligatoire.",
        "J'ai justifié chaque classement.",
        "J'ai rappelé le contrôle de l'état de l'appareil et des cordons.",
      ],
      correction:
        "(a) tension : sous tension (c'est le but). (c) intensité : sous tension, idéalement à la pince. (b) continuité et (d) résistance : hors tension obligatoire, après consignation. Dans tous les cas, on vérifie l'état de l'appareil, la catégorie de mesure et les cordons avant de commencer.",
    },
  },
  {
    id: "3-9",
    title: "Conduite à tenir face à un accident électrique",
    durationMinutes: 26,
    objectifs: [
      "Réagir dans le bon ordre face à une victime d'origine électrique.",
      "Connaître les gestes qui protègent sans se mettre soi-même en danger.",
    ],
    simple:
      "Face à un accident électrique, la précipitation est dangereuse. Il existe un ordre simple : protéger d'abord (couper le courant), alerter les secours, puis secourir selon sa formation. Se jeter sur la victime encore en contact avec le courant, c'est risquer une seconde victime.",
    vocab: [
      ["Électrisation", "Passage d'un courant électrique dans le corps."],
      ["Coupure d'urgence", "Action de couper l'alimentation (arrêt d'urgence, disjoncteur) pour supprimer le danger."],
      ["Dégagement d'urgence", "Écarter la victime de la source avec un objet isolant si l'on ne peut pas couper le courant."],
      ["Alerter", "Prévenir les secours : 112 (Europe), 15 (SAMU), 18 (pompiers)."],
      ["SST", "Sauveteur Secouriste du Travail : personne formée aux gestes de premiers secours en entreprise."],
    ],
    example:
      "Un opérateur reste « collé » à une machine. Le premier réflexe n'est pas de le tirer à mains nues, mais de couper l'alimentation (arrêt d'urgence, disjoncteur). Une fois le danger supprimé, on alerte les secours et on applique les gestes de premiers secours selon sa formation.",
    schema: "electrical-first-aid",
    ascii: "PROTEGER → couper le courant / degager avec un isolant\nALERTER  → 112 / 15 / 18\nSECOURIR → gestes selon sa formation (SST)",
    retenir: [
      "Ordre : protéger, alerter, secourir.",
      "Ne jamais toucher une victime encore en contact avec le courant à mains nues.",
      "On coupe l'alimentation ou, à défaut, on dégage la victime avec un objet isolant et sec.",
      "Un feu d'origine électrique ne s'éteint pas à l'eau : couper l'alimentation et utiliser un extincteur adapté (CO2 ou poudre).",
    ],
    erreurs: [
      "Se précipiter et toucher la victime sans avoir coupé le courant.",
      "Utiliser de l'eau sur un feu d'origine électrique encore sous tension.",
      "Oublier d'alerter les secours ou donner une adresse imprécise.",
    ],
    astucesPro: [
      "On repère à l'avance l'emplacement des arrêts d'urgence et des coupures générales de sa zone.",
      "On connaît le numéro interne d'alerte de l'entreprise en plus des numéros publics.",
    ],
    diagnostic: [
      "Évaluer si la victime est encore en contact avec la source.",
      "Identifier le moyen de coupure le plus rapide et le plus sûr.",
      "Repérer les dangers persistants (autres pièces sous tension, feu).",
    ],
    depannage: [
      "Supprimer le danger avant tout contact (couper ou dégager avec un isolant).",
      "Alerter les secours avec un message clair (lieu, nature, état de la victime).",
      "Appliquer les gestes de premiers secours dans la limite de sa formation.",
    ],
    securite: [
      "La priorité absolue est de ne pas devenir soi-même une victime.",
      "Les gestes de secours doivent être réalisés selon une formation reconnue (SST).",
      "Cette application est pédagogique : elle ne remplace pas une formation aux premiers secours.",
    ],
    etudeDeCas: {
      situation: "Un collègue s'effondre près d'une armoire ouverte ; sa main touche encore un conducteur.",
      mission: ["Donner le tout premier geste.", "Indiquer l'ordre complet des actions.", "Préciser l'erreur à ne surtout pas commettre."],
      correction:
        "Premier geste : couper l'alimentation (arrêt d'urgence ou disjoncteur) ou, si impossible, dégager la victime avec un objet isolant sec — jamais à mains nues. Ensuite : alerter les secours (112/15/18) avec un message précis, puis secourir selon sa formation SST. Erreur à ne pas commettre : toucher la victime encore sous tension, ce qui créerait une deuxième victime.",
    },
    memo: ["Protéger", "Alerter", "Secourir", "Jamais à mains nues", "Feu électrique : pas d'eau"],
    resume:
      "Face à un accident électrique, on protège en coupant le courant, on alerte les secours, puis on secourt selon sa formation, sans jamais se mettre en danger.",
    quizIds: ["els26", "els27", "els28", "els29", "els30"],
    verification: {
      question: "Que faut-il faire en premier face à une personne encore en contact avec un conducteur sous tension ?",
      options: ["La tirer par le bras immédiatement", "Couper l'alimentation ou la dégager avec un isolant", "Lui donner à boire", "Attendre les secours sans rien faire"],
      correct: 1,
      explanation: "On supprime d'abord le danger : couper le courant, ou dégager la victime avec un objet isolant sec. Toucher la victime sous tension à mains nues ferait une seconde victime.",
    },
    exercice: {
      enonce:
        "Un feu se déclare dans une armoire électrique encore sous tension. Décrivez la conduite à tenir.",
      consignes: [
        "Indique la première action sur l'alimentation.",
        "Précise le type d'extincteur adapté.",
        "Rappelle l'alerte et ce qu'il ne faut pas faire.",
      ],
      criteres: [
        "J'ai indiqué de couper l'alimentation si possible.",
        "J'ai choisi un extincteur CO2 ou poudre, pas d'eau.",
        "J'ai prévu l'alerte des secours.",
      ],
      correction:
        "On coupe l'alimentation si c'est possible sans risque, on attaque le feu avec un extincteur adapté (CO2 ou poudre) — jamais d'eau tant que l'installation peut être sous tension — et on alerte les secours (112/18). On n'ouvre pas inutilement l'armoire et on n'expose personne à l'arc ou aux fumées.",
    },
  },
  {
    id: "3-10",
    title: "Synthèse sécurité et mise en situation",
    durationMinutes: 30,
    objectifs: [
      "Relier les notions du bloc dans une démarche d'intervention sûre.",
      "Conduire une mise en situation complète, de la préparation à la traçabilité.",
    ],
    simple:
      "Ce chapitre rassemble tout le bloc : comprendre le risque, consigner, se protéger, connaître ses limites d'habilitation, mesurer en sécurité et réagir en cas d'accident. La sécurité n'est pas une étape isolée, c'est un fil conducteur du début à la fin de l'intervention.",
    vocab: [
      ["Préparation", "Analyser le travail, les risques et les moyens avant d'agir."],
      ["Consignation", "Mettre et maintenir l'ouvrage hors tension (chapitre 3-5)."],
      ["Habilitation", "Cadre de ce que l'on a le droit de faire (chapitre 3-7)."],
      ["Traçabilité", "Garder une trace écrite de l'intervention et de son résultat."],
      ["Analyse de risque", "Identifier les dangers et définir les mesures de prévention avant l'intervention."],
    ],
    example:
      "Avant de remplacer un contacteur : on analyse le travail, on fait consigner par un BC, on vérifie l'absence de tension, on porte les EPI adaptés, on intervient dans les limites de son habilitation, on mesure hors tension quand il le faut, puis on rend compte et on trace l'intervention.",
    schema: "consignation-steps",
    ascii: "PREPARER → CONSIGNER → SE PROTEGER → INTERVENIR → CONTROLER → TRACER\n analyse    hors tension   EPI          dans ses    remise en   compte rendu\n des risques + VAT         adaptes      limites     service",
    retenir: [
      "La sécurité est un fil conducteur, pas une case à cocher au début.",
      "Consignation (3-5), EPI (3-6), habilitation (3-7) et mesures (3-8) se combinent dans une même intervention.",
      "On agit toujours dans les limites de son habilitation et on demande la consignation à un BC quand elle est requise.",
      "Une intervention se termine par une remise en service maîtrisée et une trace écrite.",
    ],
    erreurs: [
      "Traiter la sécurité comme une formalité de départ et l'oublier ensuite.",
      "Enchaîner les étapes sans vérifier l'absence de tension avant le travail.",
      "Ne laisser aucune trace de l'intervention et de ses contrôles.",
    ],
    astucesPro: [
      "Avant de commencer, on se pose trois questions : suis-je habilité, est-ce consigné, ai-je les bons EPI ?",
      "Un bon compte rendu fait gagner du temps à la prochaine intervention.",
    ],
    diagnostic: [
      "Reprendre la chaîne : risque, consignation, protection, habilitation, mesure, secours.",
      "Repérer l'étape la plus risquée de l'intervention prévue.",
      "Vérifier que rien n'a été sauté avant tout contact.",
    ],
    depannage: [
      "En cas de doute sur une étape de sécurité, s'arrêter et reprendre depuis la consignation.",
      "Ne remettre sous tension qu'après contrôle et information des personnes concernées.",
      "Renseigner le compte rendu : ce qui a été fait, mesuré et vérifié.",
    ],
    securite: [
      "Toutes les règles des chapitres 3-4 à 3-9 s'appliquent en même temps sur le terrain.",
      "La sécurité prime toujours sur la vitesse ou la disponibilité de l'équipement.",
      "Cette application est pédagogique : elle prépare à la formation, elle ne la remplace pas.",
    ],
    etudeDeCas: {
      situation: "Un moteur de convoyeur est en panne. On vous demande d'intervenir « vite fait » sans consignation ni EPI, car « la ligne doit repartir ».",
      mission: ["Lister les manquements de sécurité.", "Proposer l'ordre correct de l'intervention.", "Indiquer ce que l'on trace à la fin."],
      correction:
        "Manquements : pas de consignation, pas de VAT, pas d'EPI, pression sur la vitesse au détriment de la sécurité, et éventuellement une opération hors habilitation. Ordre correct : analyser le travail et les risques, faire consigner par un BC, vérifier l'absence de tension, porter les EPI adaptés, intervenir dans ses limites d'habilitation, mesurer hors tension si nécessaire, remettre en service de façon maîtrisée, puis tracer l'intervention (cause, actions, contrôles). La pression de production ne justifie jamais de sauter la sécurité.",
    },
    memo: ["Préparer", "Consigner + VAT", "EPI", "Rester dans ses limites", "Contrôler", "Tracer"],
    resume:
      "Une intervention électrique sûre enchaîne préparation, consignation, protection, respect de l'habilitation, mesures adaptées et traçabilité : la sécurité relie toutes ces étapes.",
    quizIds: ["els31", "els32", "els33", "els34", "els35"],
    verification: {
      question: "Sous la pression « la ligne doit repartir vite », que fait un technicien responsable ?",
      options: ["Il saute la consignation pour gagner du temps", "Il respecte la démarche de sécurité, qui prime sur la vitesse", "Il intervient sans EPI mais rapidement", "Il ignore son niveau d'habilitation"],
      correct: 1,
      explanation: "La sécurité prime toujours : consignation, VAT, EPI et habilitation ne se négocient pas contre du temps de production.",
    },
    exercice: {
      enonce:
        "Décrivez, dans l'ordre, les étapes d'une intervention électrique sûre sur un départ moteur, en citant pour chacune la notion du bloc concernée.",
      consignes: [
        "Donne les étapes de la préparation à la traçabilité.",
        "Relie chaque étape à un chapitre du bloc (risque, consignation, EPI, habilitation, mesure).",
        "Termine par la remise en service et le compte rendu.",
      ],
      criteres: [
        "Les étapes sont dans l'ordre et complètes.",
        "Chaque étape est reliée à une notion du bloc.",
        "J'ai prévu la remise en service et la traçabilité.",
      ],
      correction:
        "Préparer et analyser les risques (3-4), faire consigner et vérifier l'absence de tension (3-5), porter les EPI adaptés (3-6), agir dans les limites de son habilitation (3-7), réaliser les mesures utiles en sécurité (3-8), savoir réagir en cas d'incident (3-9), puis remettre en service de façon maîtrisée et tracer l'intervention. La sécurité relie l'ensemble de la démarche.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 3 — RÉSEAUX, DISTRIBUTION ET RÉGIMES DE NEUTRE
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block3Lessons: Lesson[] = [
  {
    id: "3-11",
    title: "Du réseau à la machine : la distribution électrique",
    durationMinutes: 28,
    objectifs: [
      "Situer les niveaux de distribution entre l'arrivée du réseau et la machine.",
      "Suivre le chemin de l'énergie électrique dans une installation industrielle.",
    ],
    simple:
      "L'électricité n'arrive pas directement sur chaque machine : elle passe par une succession de tableaux qui répartissent et protègent l'énergie. Comprendre ce chemin aide à localiser une coupure et à savoir où intervenir.",
    vocab: [
      ["TGBT", "Tableau Général Basse Tension : le tableau principal qui reçoit l'arrivée et distribue l'énergie."],
      ["Tableau divisionnaire", "Tableau secondaire qui alimente une zone ou un atelier à partir du TGBT."],
      ["Départ", "Circuit protégé qui alimente une machine ou un groupe de machines."],
      ["Jeu de barres", "Barres conductrices qui répartissent le courant dans un tableau."],
      ["Protection de tête", "Protection placée en amont d'un tableau, qui protège l'ensemble situé en aval."],
    ],
    example:
      "Dans une usine, l'arrivée alimente le TGBT. De là partent plusieurs tableaux divisionnaires (un par atelier). Chaque tableau divisionnaire distribue des départs qui alimentent les machines. Si un atelier entier est éteint, on regarde d'abord son tableau divisionnaire, pas chaque machine.",
    schema: "power-distribution",
    ascii: "RESEAU → TGBT → TABLEAUX DIVISIONNAIRES → DEPARTS → MACHINES\n arrivee  general   par zone/atelier        protege   utilisation",
    retenir: [
      "L'énergie descend du réseau vers les machines en passant par des tableaux successifs.",
      "TGBT = tableau principal ; tableaux divisionnaires = répartition par zone ; départs = vers les machines.",
      "Une protection de tête protège tout ce qui est en aval.",
      "Pour localiser une coupure, on remonte du plus près de la machine vers l'amont.",
    ],
    erreurs: [
      "Chercher une panne sur la machine alors qu'un tableau amont a déclenché.",
      "Confondre le tableau général (TGBT) et un tableau divisionnaire de zone.",
      "Oublier qu'une protection de tête peut couper plusieurs départs à la fois.",
    ],
    astucesPro: [
      "On lit le repérage des départs sur les tableaux pour aller directement au bon circuit.",
      "Un plan de l'installation (schéma unifilaire) fait gagner beaucoup de temps en recherche de panne.",
    ],
    diagnostic: [
      "Déterminer l'étendue de la coupure (une machine, une zone, tout le site).",
      "Remonter vers le tableau qui couvre exactement cette étendue.",
      "Contrôler l'état des protections de ce tableau.",
    ],
    depannage: [
      "Repérer le départ concerné à partir du repérage du tableau.",
      "Vérifier la protection correspondante avant d'accuser la machine.",
      "Respecter la consignation avant tout accès aux parties actives du tableau.",
    ],
    securite: [
      "Un tableau électrique reste un ouvrage à risque : accès et interventions selon habilitation et consignation.",
      "On ne réarme pas une protection sans avoir cherché la cause du déclenchement.",
      "Cette application est pédagogique et ne remplace pas les procédures de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Tout un atelier est hors service, mais le reste de l'usine fonctionne normalement.",
      mission: ["Situer l'étendue de la coupure.", "Indiquer où regarder en priorité.", "Donner l'ordre de recherche."],
      correction:
        "La coupure touche une zone entière mais pas tout le site : cela oriente vers le tableau divisionnaire de cet atelier, pas vers une machine ni vers le TGBT (qui couperait tout le site). On contrôle donc la protection de tête de ce tableau divisionnaire, puis on remonte ou descend selon le résultat, en respectant la consignation.",
    },
    memo: ["Réseau → TGBT → divisionnaires → départs", "Coupure de zone = tableau de zone", "Remonter du plus près vers l'amont"],
    resume:
      "La distribution répartit l'énergie du réseau vers les machines par des tableaux successifs ; l'étendue d'une coupure indique à quel niveau chercher.",
    quizIds: ["els36", "els37", "els38", "els39", "els40"],
    verification: {
      question: "Un seul atelier est éteint, le reste de l'usine fonctionne. Où regarde-t-on en priorité ?",
      options: ["Chaque machine une par une", "Le tableau divisionnaire de cet atelier", "L'arrivée générale du site", "Le compteur du fournisseur"],
      correct: 1,
      explanation: "Une coupure limitée à une zone oriente vers le tableau divisionnaire qui alimente cette zone, pas vers le TGBT (tout le site) ni vers chaque machine.",
    },
    exercice: {
      enonce:
        "Décrivez le chemin de l'énergie électrique, de l'arrivée du réseau jusqu'à un moteur d'atelier, en nommant chaque niveau.",
      consignes: [
        "Place les niveaux dans l'ordre.",
        "Associe un rôle à chaque niveau.",
        "Indique où tu regarderais si le moteur seul ne démarre pas.",
      ],
      criteres: [
        "L'ordre réseau → TGBT → divisionnaire → départ → moteur est respecté.",
        "Chaque niveau a un rôle.",
        "J'ai ciblé le départ du moteur en cas de panne isolée.",
      ],
      correction:
        "Réseau (arrivée) → TGBT (tableau général) → tableau divisionnaire (zone/atelier) → départ protégé → moteur. Si seul le moteur ne démarre pas, on contrôle d'abord son départ (protection, commande), pas tout le tableau, après avoir sécurisé l'intervention.",
    },
  },
  {
    id: "3-12",
    title: "Monophasé et triphasé approfondis",
    durationMinutes: 30,
    objectifs: [
      "Distinguer tension simple (phase-neutre) et tension composée (phase-phase).",
      "Expliquer l'intérêt du triphasé et l'importance de l'équilibrage des phases.",
    ],
    simple:
      "Le chapitre 3-1 a présenté le monophasé et le triphasé. On va plus loin ici : d'où viennent les 230 V et les 400 V, pourquoi le triphasé est partout en industrie, et pourquoi on cherche à répartir la charge sur les trois phases.",
    vocab: [
      ["Tension simple", "Tension entre une phase et le neutre, environ 230 V en France."],
      ["Tension composée", "Tension entre deux phases, environ 400 V en France."],
      ["Phase", "Conducteur actif porteur de la tension alternative."],
      ["Neutre", "Conducteur de référence, souvent proche du potentiel de la terre."],
      ["Équilibrage des phases", "Répartir les charges sur les 3 phases pour qu'elles consomment des courants proches."],
    ],
    example:
      "Une prise domestique utilise une phase et le neutre : 230 V (tension simple). Un moteur d'atelier utilise les trois phases : 400 V entre phases (tension composée). Le rapport entre les deux est √3, soit environ 1,732 : 230 × 1,732 ≈ 400.",
    schema: "three-phase-voltages",
    ascii: "phase–neutre  = 230 V (tension simple)\nphase–phase   = 400 V (tension composee)\nrapport ≈ √3 (1,732) : 230 × 1,732 ≈ 400",
    retenir: [
      "Tension simple = phase-neutre (≈ 230 V). Tension composée = phase-phase (≈ 400 V).",
      "Les deux tensions sont liées par le rapport √3 (≈ 1,732).",
      "Le triphasé fournit un champ tournant naturel : idéal pour les moteurs.",
      "On équilibre les charges sur les 3 phases pour éviter de surcharger l'une d'elles.",
    ],
    erreurs: [
      "Croire que 230 V et 400 V sont deux réseaux séparés : ce sont deux tensions du même réseau triphasé.",
      "Brancher trop de charges sur une seule phase et déséquilibrer l'installation.",
      "Confondre neutre et terre : ils ont des rôles différents.",
    ],
    astucesPro: [
      "Sur une installation déséquilibrée, le courant dans le neutre augmente : c'est un signe à surveiller.",
      "On répartit les circuits monophasés sur les trois phases dès la conception du tableau.",
    ],
    diagnostic: [
      "Identifier si un récepteur est monophasé (phase + neutre) ou triphasé (3 phases).",
      "Vérifier la présence des trois phases pour un moteur triphasé.",
      "Repérer un déséquilibre en comparant les courants de chaque phase.",
    ],
    depannage: [
      "Contrôler la présence et l'équilibre des phases à la pince ampèremétrique.",
      "Rechercher une phase manquante en cas de fonctionnement anormal d'un moteur.",
      "Rééquilibrer la répartition des charges si une phase est surchargée.",
    ],
    securite: [
      "Les mesures sous tension sur du triphasé se font avec habilitation et matériel adaptés.",
      "Une phase manquante peut endommager un moteur : on coupe avant d'intervenir.",
      "Cette application est pédagogique et ne remplace pas la formation pratique.",
    ],
    etudeDeCas: {
      situation: "Un moteur triphasé chauffe, vibre et manque de puissance ; un bruit anormal est audible.",
      mission: ["Formuler une hypothèse liée aux phases.", "Indiquer le contrôle à faire.", "Préciser la précaution avant intervention."],
      correction:
        "Ces symptômes évoquent une marche sur deux phases (une phase manquante), qui déséquilibre le moteur. On contrôle la présence des trois phases et l'équilibre des courants à la pince ampèremétrique. Avant toute intervention nécessitant un accès, on consigne et on vérifie l'absence de tension ; la mesure sous tension éventuelle se fait avec l'habilitation adaptée.",
    },
    memo: ["230 V = phase-neutre", "400 V = phase-phase", "×√3 entre les deux", "Équilibrer les 3 phases"],
    resume:
      "Le réseau triphasé fournit deux tensions liées par √3 (230 V simple, 400 V composée) ; l'équilibrage des phases préserve l'installation.",
    quizIds: ["els41", "els42", "els43", "els44", "els45"],
    verification: {
      question: "Quelle est la tension entre deux phases d'un réseau triphasé standard français ?",
      options: ["12 V", "230 V", "400 V", "1000 V"],
      correct: 2,
      explanation: "La tension composée (phase-phase) est d'environ 400 V ; la tension simple (phase-neutre) est d'environ 230 V. Les deux sont liées par √3.",
    },
    exercice: {
      enonce:
        "Expliquez la différence entre 230 V et 400 V sur un réseau triphasé, et vérifiez par le calcul que 230 × √3 ≈ 400.",
      consignes: [
        "Définis tension simple et tension composée.",
        "Effectue le calcul 230 × 1,732.",
        "Conclus sur le lien entre les deux tensions.",
      ],
      criteres: [
        "J'ai défini phase-neutre et phase-phase.",
        "Mon calcul donne environ 398 V.",
        "J'ai conclu que les deux tensions sont liées par √3.",
      ],
      correction:
        "230 V est la tension simple (entre une phase et le neutre) ; 400 V est la tension composée (entre deux phases). Calcul : 230 × 1,732 ≈ 398 V, soit environ 400 V. Les deux tensions appartiennent au même réseau triphasé et sont liées par le facteur √3.",
    },
  },
  {
    id: "3-13",
    title: "La terre et les régimes de neutre (TT, TN, IT)",
    durationMinutes: 34,
    objectifs: [
      "Expliquer le rôle de la mise à la terre dans la protection des personnes.",
      "Distinguer les régimes TT, TN et IT par leur comportement en cas de défaut.",
    ],
    simple:
      "La liaison à la terre protège les personnes en cas de défaut d'isolement. La façon dont le neutre de la source et les masses sont reliés à la terre s'appelle le régime de neutre. Selon le régime, un défaut est coupé par un dispositif différent.",
    vocab: [
      ["Régime de neutre", "Façon dont le neutre de la source et les masses sont reliés à la terre (TT, TN, IT)."],
      ["Prise de terre", "Liaison conductrice entre une masse et la terre, qui évacue un courant de défaut."],
      ["Conducteur de protection (PE)", "Conducteur qui relie les masses à la terre ou au neutre selon le régime."],
      ["Différentiel (DDR)", "Dispositif qui coupe dès qu'un courant de fuite vers la terre est détecté."],
      ["CPI", "Contrôleur Permanent d'Isolement : surveille l'isolement en régime IT et signale le premier défaut."],
    ],
    example:
      "En régime TT (le plus courant en France pour le domestique et beaucoup d'installations), un défaut d'isolement crée un courant de fuite vers la terre, coupé par le différentiel. En régime IT, souvent utilisé là où la continuité est vitale (hôpitaux, certains procédés), le premier défaut ne coupe pas mais est signalé.",
    schema: "three-phase-voltages",
    illustrations: ["neutral-regimes"],
    ascii: "TT → defaut = fuite terre  → coupe par le DIFFERENTIEL\nTN → defaut = court-circuit → coupe par la SURINTENSITE (disjoncteur)\nIT → 1er defaut signale (CPI), continuite ; 2e defaut a traiter",
    retenir: [
      "La liaison à la terre protège les personnes contre les contacts indirects.",
      "TT : masses à une terre séparée ; le différentiel (DDR) coupe le défaut.",
      "TN : masses reliées au neutre (PE) ; la protection contre les surintensités coupe le défaut.",
      "IT : neutre isolé ; le premier défaut est signalé (CPI) sans couper, le second doit être traité.",
    ],
    erreurs: [
      "Confondre le rôle du différentiel (fuite à la terre) et celui du disjoncteur (surintensité).",
      "Croire qu'en IT on peut ignorer le premier défaut : il doit être recherché et réparé.",
      "Négliger la qualité des prises de terre, essentielles à la protection.",
    ],
    astucesPro: [
      "En IT, un premier défaut signalé doit être localisé et corrigé avant qu'un second n'apparaisse.",
      "Une bonne prise de terre se contrôle : une terre défaillante compromet toute la protection.",
    ],
    diagnostic: [
      "Identifier le régime de neutre de l'installation avant de raisonner sur un défaut.",
      "Déterminer quel dispositif est censé couper (différentiel ou surintensité).",
      "En IT, tenir compte de la signalisation du CPI.",
    ],
    depannage: [
      "Vérifier la continuité et la qualité des liaisons à la terre.",
      "Contrôler le dispositif de protection adapté au régime (DDR en TT, protections en TN).",
      "Rechercher et réparer le défaut avant remise en service, en respectant la consignation.",
    ],
    securite: [
      "La protection des personnes dépend d'une mise à la terre correcte : on ne la neutralise jamais.",
      "Le choix et la vérification du régime de neutre relèvent d'un électricien qualifié.",
      "Cette application est pédagogique : elle explique le principe, elle ne remplace pas la norme ni la formation.",
    ],
    etudeDeCas: {
      situation: "Sur une installation, un défaut d'isolement apparaît mais aucune coupure ne se produit ; un voyant de défaut s'allume au tableau.",
      mission: ["Identifier le régime de neutre probable.", "Expliquer pourquoi il n'y a pas de coupure.", "Indiquer la conduite à tenir."],
      correction:
        "L'absence de coupure au premier défaut, avec une signalisation, est caractéristique du régime IT et de son contrôleur permanent d'isolement (CPI). Le premier défaut ne coupe pas afin de préserver la continuité de service, mais il doit être localisé et réparé rapidement : si un second défaut survient, il se comporte comme un court-circuit dangereux. On fait donc intervenir une personne habilitée pour rechercher et éliminer le défaut.",
    },
    memo: ["Terre = protection des personnes", "TT → différentiel", "TN → surintensité", "IT → 1er défaut signalé (CPI)"],
    resume:
      "Le régime de neutre (TT, TN, IT) définit comment neutre et masses sont reliés à la terre et quel dispositif coupe un défaut ; la qualité de la terre est essentielle.",
    quizIds: ["els46", "els47", "els48", "els49", "els50"],
    verification: {
      question: "En régime TT, quel dispositif assure la coupure lors d'un défaut d'isolement ?",
      options: ["Le contacteur", "Le dispositif différentiel (DDR)", "Le variateur", "Le bouton d'arrêt"],
      correct: 1,
      explanation: "En TT, un défaut crée un courant de fuite vers la terre : c'est le différentiel (DDR) qui le détecte et coupe l'alimentation.",
    },
    exercice: {
      enonce:
        "Pour chaque régime, indiquez ce qui coupe un défaut d'isolement : (a) TT, (b) TN, (c) IT au premier défaut.",
      consignes: [
        "Associe chaque régime à son dispositif de protection.",
        "Explique le comportement du régime IT au premier défaut.",
        "Rappelle le rôle général de la mise à la terre.",
      ],
      criteres: [
        "(a) différentiel, (b) protection contre les surintensités, (c) pas de coupure mais signalisation.",
        "J'ai expliqué la continuité de service en IT au premier défaut.",
        "J'ai rappelé que la terre protège les personnes.",
      ],
      correction:
        "(a) TT : le différentiel (DDR) coupe le courant de fuite vers la terre. (b) TN : le défaut devient un court-circuit phase-PE, coupé par la protection contre les surintensités (disjoncteur, fusible). (c) IT : le premier défaut ne coupe pas et est signalé par le CPI, ce qui préserve la continuité ; il doit être réparé avant l'apparition d'un second défaut. Dans tous les cas, la mise à la terre protège les personnes contre les contacts indirects.",
    },
  },
  {
    id: "3-14",
    title: "La protection différentielle et la protection des personnes",
    durationMinutes: 28,
    objectifs: [
      "Expliquer le principe de fonctionnement d'un dispositif différentiel.",
      "Distinguer la protection des personnes (différentiel) de la protection des circuits (surintensité).",
    ],
    simple:
      "Le dispositif différentiel (DDR) compare le courant qui part et celui qui revient. En fonctionnement normal, ils sont égaux. Si une partie du courant s'échappe vers la terre (fuite), le différentiel le détecte et coupe : c'est ainsi qu'il protège les personnes.",
    vocab: [
      ["Différentiel (DDR)", "Dispositif qui coupe le circuit quand le courant aller et le courant retour ne sont plus égaux."],
      ["Courant de fuite", "Partie du courant qui s'échappe du circuit normal, par exemple vers la terre à travers un corps."],
      ["Sensibilité", "Valeur de fuite à partir de laquelle le différentiel coupe, exprimée en mA (ex : 30 mA)."],
      ["Bouton test", "Bouton qui simule un défaut pour vérifier que le différentiel fonctionne."],
      ["Protection des personnes", "Rôle du différentiel : éviter l'électrisation en cas de défaut."],
    ],
    example:
      "Un différentiel de 30 mA protège les personnes sur les circuits de prises : si un courant de plus de 30 mA fuit vers la terre (par exemple à travers un corps), il coupe en une fraction de seconde. Le bouton test doit être vérifié régulièrement.",
    schema: "control-circuit",
    ascii: "courant aller = courant retour  → normal, pas de coupure\ncourant aller ≠ courant retour  → fuite → le DIFFERENTIEL coupe\n30 mA = protection des personnes",
    retenir: [
      "Le différentiel compare courant aller et courant retour ; une différence = fuite = coupure.",
      "Un différentiel de 30 mA protège les personnes contre l'électrisation.",
      "Le différentiel ne protège PAS contre la surcharge ou le court-circuit : c'est le rôle du disjoncteur.",
      "Le bouton test permet de vérifier que le différentiel fonctionne.",
    ],
    erreurs: [
      "Croire qu'un différentiel protège contre les surcharges : il protège contre les fuites à la terre.",
      "Ne jamais tester un différentiel et supposer qu'il fonctionne.",
      "Réarmer un différentiel qui déclenche sans rechercher la fuite.",
    ],
    astucesPro: [
      "Un différentiel qui déclenche signale un vrai défaut d'isolement à localiser, pas un caprice.",
      "On teste le différentiel avec son bouton test périodiquement, selon les consignes.",
    ],
    diagnostic: [
      "Vérifier si le déclenchement vient d'une fuite (différentiel) ou d'une surintensité (disjoncteur).",
      "Isoler les circuits pour localiser celui qui provoque la fuite.",
      "Contrôler l'état d'isolement des récepteurs suspectés.",
    ],
    depannage: [
      "Rechercher le défaut d'isolement avant de réarmer.",
      "Débrancher les récepteurs un à un pour identifier la fuite.",
      "Respecter la consignation avant tout contrôle nécessitant un accès.",
    ],
    securite: [
      "Le différentiel est une protection des personnes : on ne le neutralise jamais.",
      "Un différentiel qui déclenche à répétition doit conduire à rechercher la cause.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un différentiel de 30 mA déclenche dès qu'on branche une machine précise.",
      mission: ["Formuler l'hypothèse la plus probable.", "Proposer la méthode de recherche.", "Indiquer la précaution avant intervention."],
      correction:
        "Le déclenchement lié à une machine précise évoque un défaut d'isolement de cette machine (fuite vers la terre). On confirme en débranchant les récepteurs un à un : si le différentiel tient sans cette machine, le défaut vient d'elle. On consigne ensuite pour contrôler l'isolement de la machine (hors tension) avant réparation. On ne neutralise jamais le différentiel pour « faire marcher » la machine.",
    },
    memo: ["Aller = retour → OK", "Fuite → coupe", "30 mA = personnes", "≠ protection surcharge"],
    resume:
      "Le différentiel protège les personnes en coupant dès qu'un courant de fuite vers la terre apparaît ; il ne remplace pas la protection contre les surintensités.",
    quizIds: ["els51", "els52", "els53", "els54", "els55"],
    verification: {
      question: "Que détecte un dispositif différentiel pour couper le circuit ?",
      options: ["Une surcharge du moteur", "Une différence entre courant aller et courant retour (fuite)", "Une baisse de tension", "Une hausse de température ambiante"],
      correct: 1,
      explanation: "Le différentiel coupe quand le courant aller et le courant retour ne sont plus égaux, signe d'une fuite vers la terre : il protège les personnes.",
    },
    exercice: {
      enonce:
        "Expliquez la différence de rôle entre un différentiel (DDR) et un disjoncteur de surintensité, avec un exemple pour chacun.",
      consignes: [
        "Décris ce que protège chaque dispositif.",
        "Donne un exemple de situation traitée par chacun.",
        "Conclus sur leur complémentarité.",
      ],
      criteres: [
        "J'ai relié le différentiel à la protection des personnes (fuite).",
        "J'ai relié le disjoncteur à la protection des circuits (surcharge, court-circuit).",
        "J'ai conclu qu'ils sont complémentaires.",
      ],
      correction:
        "Le différentiel protège les personnes : il coupe en cas de fuite vers la terre (ex : défaut d'isolement d'une machine touchée par un opérateur). Le disjoncteur protège les circuits : il coupe en cas de surcharge ou de court-circuit (ex : trop de récepteurs ou un court-circuit). Les deux sont complémentaires : l'un veille sur les personnes, l'autre sur les conducteurs et le matériel.",
    },
  },
  {
    id: "3-15",
    title: "Protéger les circuits : disjoncteurs, calibres et sélectivité",
    durationMinutes: 30,
    objectifs: [
      "Relier le calibre d'une protection à la section du câble à protéger.",
      "Expliquer la sélectivité entre une protection amont et une protection aval.",
    ],
    simple:
      "Chaque circuit est protégé contre deux dangers : la surcharge (trop de courant longtemps) et le court-circuit (courant très élevé d'un coup). Bien choisir la protection et l'organiser pour que seule la partie en défaut soit coupée, c'est le rôle du calibre et de la sélectivité.",
    vocab: [
      ["Calibre", "Courant nominal d'une protection : il doit être adapté au câble et aux récepteurs."],
      ["Surcharge", "Courant un peu trop élevé pendant un certain temps (déclenchement thermique)."],
      ["Court-circuit", "Courant très élevé et brutal (déclenchement magnétique)."],
      ["Courbe (B, C, D)", "Comportement du disjoncteur face aux pointes de courant (ex : C pour usage général)."],
      ["Sélectivité", "Organisation des protections pour que seule la protection la plus proche du défaut coupe."],
    ],
    example:
      "Un défaut sur une seule machine ne doit pas éteindre tout l'atelier. Si la protection du départ de la machine coupe avant celle du tableau (sélectivité), seule la machine est isolée et le reste continue de fonctionner.",
    schema: "power-distribution",
    ascii: "SURCHARGE  → declenchement thermique (lent)\nCOURT-CIRCUIT → declenchement magnetique (rapide)\nSELECTIVITE : la protection la plus PROCHE du defaut coupe en premier",
    retenir: [
      "Une protection agit contre la surcharge (thermique) et le court-circuit (magnétique).",
      "Le calibre doit être adapté au câble : trop élevé, le câble n'est pas protégé.",
      "La courbe (B, C, D) est choisie selon les pointes de courant du récepteur.",
      "La sélectivité assure que seule la protection la plus proche du défaut coupe.",
    ],
    erreurs: [
      "Remplacer une protection par un calibre supérieur pour « qu'elle ne déclenche plus » : le câble n'est alors plus protégé.",
      "Confondre déclenchement thermique (surcharge) et magnétique (court-circuit).",
      "Négliger la sélectivité : un défaut local coupe alors toute l'installation.",
    ],
    astucesPro: [
      "On ne monte jamais en calibre pour masquer un défaut : on cherche la cause du déclenchement.",
      "La sélectivité se vérifie sur le schéma : la protection amont doit être plus « lente » ou plus élevée que l'aval.",
    ],
    diagnostic: [
      "Déterminer si le déclenchement vient d'une surcharge (lente) ou d'un court-circuit (brutal).",
      "Vérifier que le calibre correspond au câble et aux récepteurs.",
      "Contrôler la cohérence amont/aval pour la sélectivité.",
    ],
    depannage: [
      "Rechercher la cause d'une surcharge (récepteur, réglage) avant de réarmer.",
      "En cas de court-circuit, localiser et réparer le défaut avant remise en service.",
      "Ne jamais augmenter un calibre pour contourner un déclenchement.",
    ],
    securite: [
      "Un calibre inadapté peut laisser un câble surchauffer : risque d'incendie.",
      "Le choix des protections relève d'une étude par une personne qualifiée.",
      "Cette application est pédagogique et ne remplace pas la conception normalisée.",
    ],
    etudeDeCas: {
      situation: "Un court-circuit sur une machine coupe tout l'atelier au lieu de la seule machine.",
      mission: ["Nommer le principe non respecté.", "Expliquer le comportement attendu.", "Proposer la piste de correction."],
      correction:
        "Le principe non respecté est la sélectivité : idéalement, la protection du départ de la machine aurait dû couper avant celle du tableau, isolant la seule machine. Le comportement attendu est que la protection la plus proche du défaut agisse en premier. La piste de correction est de revoir la coordination des protections (calibres, courbes, temporisations) avec une personne qualifiée, pour rétablir la sélectivité.",
    },
    memo: ["Calibre adapté au câble", "Thermique = surcharge", "Magnétique = court-circuit", "Sélectivité : le plus proche coupe"],
    resume:
      "Protéger un circuit, c'est choisir un calibre adapté au câble et organiser la sélectivité pour n'isoler que la partie réellement en défaut.",
    quizIds: ["els56", "els57", "els58", "els59", "els60"],
    verification: {
      question: "Que garantit la sélectivité des protections ?",
      options: ["Que toute l'installation coupe à chaque défaut", "Que seule la protection la plus proche du défaut coupe", "Que les câbles chauffent moins", "Que la tension augmente"],
      correct: 1,
      explanation: "La sélectivité fait en sorte que seule la protection la plus proche du défaut agisse, pour n'isoler que la partie concernée et préserver le reste de l'installation.",
    },
    exercice: {
      enonce:
        "Un technicien remplace un disjoncteur qui « déclenche trop souvent » par un modèle de calibre nettement supérieur. Expliquez le danger.",
      consignes: [
        "Explique ce que protège le calibre.",
        "Décris le risque créé par un calibre trop élevé.",
        "Propose la bonne démarche.",
      ],
      criteres: [
        "J'ai relié le calibre à la protection du câble.",
        "J'ai identifié le risque de surchauffe/incendie.",
        "J'ai proposé de chercher la cause du déclenchement.",
      ],
      correction:
        "Le calibre protège le câble contre les surcharges. En montant fortement le calibre, le câble peut désormais être parcouru par un courant qu'il ne supporte pas sans la protection agir : risque de surchauffe et d'incendie. La bonne démarche est de rechercher la cause des déclenchements (surcharge réelle, récepteur défectueux) et de dimensionner la protection selon le câble, avec une personne qualifiée.",
    },
  },
  {
    id: "3-16",
    title: "Puissances en triphasé : active, réactive, apparente",
    durationMinutes: 30,
    objectifs: [
      "Distinguer puissance active, réactive et apparente.",
      "Expliquer le facteur de puissance (cos φ) et l'intérêt de le corriger.",
    ],
    simple:
      "Toute la puissance fournie à une machine ne se transforme pas en travail utile. La puissance active fait le travail, la puissance réactive sert à magnétiser les moteurs, et la puissance apparente est la combinaison des deux. Le facteur de puissance mesure la part réellement utile.",
    vocab: [
      ["Puissance active (P)", "Puissance qui produit le travail utile, en watts (W) ou kilowatts (kW)."],
      ["Puissance réactive (Q)", "Puissance nécessaire pour magnétiser les moteurs et transformateurs, en var."],
      ["Puissance apparente (S)", "Combinaison de l'active et de la réactive, en voltampères (VA)."],
      ["Facteur de puissance (cos φ)", "Rapport P/S : part de la puissance réellement utile."],
      ["Compensation", "Ajout de condensateurs pour réduire la puissance réactive appelée."],
    ],
    example:
      "Un moteur consomme de la puissance active pour entraîner sa charge, mais aussi de la puissance réactive pour créer son champ magnétique. Si le cos φ est faible, l'installation appelle plus de courant pour le même travail : on installe des condensateurs pour compenser.",
    schema: "energy-flow",
    ascii: "        S (apparente, VA)\n       /|\n      / | Q (reactive, var)\n     /  |\n    /___|\n     P (active, W)      cos φ = P / S",
    retenir: [
      "P (active, W) fait le travail ; Q (réactive, var) magnétise ; S (apparente, VA) combine les deux.",
      "Facteur de puissance cos φ = P / S : plus il est proche de 1, mieux c'est.",
      "Un cos φ faible fait appeler plus de courant pour le même travail utile.",
      "La compensation par condensateurs réduit la puissance réactive appelée au réseau.",
    ],
    erreurs: [
      "Confondre puissance active (utile) et puissance apparente (totale appelée).",
      "Croire qu'un cos φ faible n'a pas de conséquence : il augmente le courant et les pertes.",
      "Oublier que les moteurs sont une source importante de puissance réactive.",
    ],
    astucesPro: [
      "Un cos φ qui se dégrade peut signaler une installation mal compensée ou des moteurs peu chargés.",
      "La compensation se dimensionne selon la charge : trop ou trop peu n'est pas optimal.",
    ],
    diagnostic: [
      "Comparer la puissance appelée (S) à la puissance utile (P) pour estimer le cos φ.",
      "Repérer les gros consommateurs de réactif (moteurs peu chargés).",
      "Vérifier l'état d'une éventuelle batterie de condensateurs.",
    ],
    depannage: [
      "Signaler un cos φ dégradé aux personnes en charge de l'installation.",
      "Contrôler la batterie de condensateurs de compensation si elle existe.",
      "Éviter de faire tourner à vide des moteurs qui appellent du réactif inutilement.",
    ],
    securite: [
      "Les condensateurs peuvent rester chargés : ils se manipulent hors tension et après décharge.",
      "Les interventions sur la compensation relèvent d'une personne habilitée.",
      "Cette application est pédagogique et ne remplace pas la formation.",
    ],
    etudeDeCas: {
      situation: "Une installation appelle beaucoup de courant alors que le travail utile fourni reste modéré.",
      mission: ["Nommer la grandeur qui explique l'écart.", "Proposer une cause fréquente.", "Indiquer une solution courante."],
      correction:
        "L'écart entre le courant appelé et le travail utile s'explique par un facteur de puissance (cos φ) faible : l'installation appelle beaucoup de puissance apparente (S) pour une puissance active (P) modérée. Une cause fréquente est la présence de moteurs peu chargés qui consomment du réactif. La solution courante est la compensation par condensateurs, dimensionnée par une personne qualifiée, qui réduit la puissance réactive appelée au réseau.",
    },
    memo: ["P = utile (W)", "Q = magnétisation (var)", "S = total (VA)", "cos φ = P/S", "Compenser avec des condensateurs"],
    resume:
      "La puissance appelée se décompose en active (utile), réactive (magnétisation) et apparente (total) ; améliorer le cos φ réduit le courant et les pertes.",
    quizIds: ["els61", "els62", "els63", "els64", "els65"],
    verification: {
      question: "Que représente le facteur de puissance cos φ ?",
      options: ["La fréquence du réseau", "Le rapport entre puissance active et puissance apparente", "La tension entre phases", "La température du moteur"],
      correct: 1,
      explanation: "cos φ = P / S : il mesure la part de puissance réellement utile par rapport à la puissance apparente totale appelée.",
    },
    exercice: {
      enonce:
        "Expliquez pourquoi un faible cos φ est pénalisant pour une installation, et citez la solution courante.",
      consignes: [
        "Rappelle le lien entre cos φ, courant et travail utile.",
        "Décris une conséquence concrète d'un cos φ faible.",
        "Cite la solution de compensation.",
      ],
      criteres: [
        "J'ai relié un cos φ faible à un courant appelé plus élevé.",
        "J'ai cité une conséquence (pertes, surdimensionnement).",
        "J'ai cité la compensation par condensateurs.",
      ],
      correction:
        "Un faible cos φ signifie que l'installation appelle beaucoup de puissance apparente (et donc de courant) pour une puissance active utile modérée. Conséquences : pertes plus importantes dans les câbles, besoin de conducteurs et de protections plus gros, et parfois pénalités du fournisseur. La solution courante est la compensation par condensateurs, qui réduit la puissance réactive appelée et rapproche le cos φ de 1.",
    },
  },
  {
    id: "3-17",
    title: "Synthèse distribution et mise en situation",
    durationMinutes: 30,
    objectifs: [
      "Relier distribution, tensions, régime de neutre et protections dans une même installation.",
      "Conduire un raisonnement complet face à un défaut sur une installation.",
    ],
    simple:
      "Ce chapitre rassemble le bloc : comment l'énergie est distribuée, quelles tensions on rencontre, comment la terre et le régime de neutre protègent, comment les protections isolent un défaut, et ce que représente la puissance appelée. Face à une panne, on mobilise toutes ces notions.",
    vocab: [
      ["Schéma unifilaire", "Représentation simplifiée de l'installation, du réseau aux départs."],
      ["Sélectivité", "Coordination des protections pour n'isoler que la partie en défaut (chapitre 3-15)."],
      ["Régime de neutre", "Manière dont neutre et masses sont reliés à la terre (chapitre 3-13)."],
      ["Facteur de puissance", "Part de puissance utile appelée par l'installation (chapitre 3-16)."],
      ["Traçabilité", "Trace écrite des constats, mesures et actions réalisés."],
    ],
    example:
      "Une machine ne démarre plus et sa protection a déclenché. On situe le départ sur le schéma (3-11), on vérifie les phases (3-12), on tient compte du régime de neutre et du différentiel (3-13, 3-14), on distingue surcharge et court-circuit (3-15), le tout après consignation, puis on trace l'intervention.",
    schema: "power-distribution",
    ascii: "SITUER le depart (3-11) → CONTROLER phases (3-12) → TERRE/regime (3-13)\n→ DIFFERENTIEL vs SURINTENSITE (3-14/3-15) → apres CONSIGNATION → TRACER",
    retenir: [
      "Une installation se lit du réseau vers la machine ; le schéma unifilaire est la carte.",
      "Le type de déclenchement (différentiel ou surintensité) oriente le diagnostic.",
      "Le régime de neutre conditionne le comportement d'un défaut.",
      "La sécurité (consignation, VAT, habilitation) s'applique du début à la fin.",
    ],
    erreurs: [
      "Raisonner sur un défaut sans connaître le régime de neutre ni le type de protection.",
      "Oublier la consignation avant les contrôles nécessitant un accès.",
      "Ne laisser aucune trace du diagnostic et des mesures.",
    ],
    astucesPro: [
      "On commence toujours par lire le schéma et le repérage avant de démonter.",
      "On note les valeurs mesurées : elles servent de référence pour la prochaine fois.",
    ],
    diagnostic: [
      "Situer le circuit en défaut sur le schéma de distribution.",
      "Identifier le type de protection qui a agi (différentiel ou surintensité).",
      "Tenir compte du régime de neutre pour interpréter le défaut.",
    ],
    depannage: [
      "Consigner avant tout contrôle nécessitant un accès aux parties actives.",
      "Rechercher la cause (fuite, surcharge, court-circuit) avant de réarmer.",
      "Remettre en service de façon maîtrisée et tracer l'intervention.",
    ],
    securite: [
      "Toutes les règles de sécurité du bloc 2 restent valables sur une installation de distribution.",
      "Les mesures et interventions se font dans le cadre de son habilitation.",
      "Cette application est pédagogique : elle prépare à la formation, elle ne la remplace pas.",
    ],
    etudeDeCas: {
      situation: "Sur une ligne, une machine s'arrête et sa protection a déclenché ; le reste de la ligne fonctionne.",
      mission: ["Décrire la démarche de diagnostic.", "Citer les notions du bloc mobilisées.", "Indiquer ce que l'on trace à la fin."],
      correction:
        "Démarche : situer le départ de la machine sur le schéma (3-11), vérifier la présence des phases (3-12), tenir compte du régime de neutre (3-13), déterminer si le déclenchement vient du différentiel (fuite, 3-14) ou d'une protection de surintensité (surcharge/court-circuit, 3-15), le tout après consignation. On recherche la cause avant de réarmer, on remet en service de façon maîtrisée, puis on trace le constat, les mesures et l'action réalisée. La sélectivité explique que seule la machine ait été isolée.",
    },
    memo: ["Lire le schéma", "Type de déclenchement = piste", "Régime de neutre en tête", "Consigner puis tracer"],
    resume:
      "Diagnostiquer une installation, c'est combiner distribution, tensions, régime de neutre et protections, dans le respect de la sécurité et de la traçabilité.",
    quizIds: ["els66", "els67", "els68", "els69", "els70"],
    verification: {
      question: "Face à un défaut, quelle information oriente fortement le diagnostic ?",
      options: ["La couleur de la machine", "Le type de protection qui a déclenché (différentiel ou surintensité)", "La marque du tableau", "L'heure de la journée"],
      correct: 1,
      explanation: "Savoir si c'est le différentiel (fuite à la terre) ou une protection de surintensité (surcharge/court-circuit) qui a agi oriente directement la recherche de la cause.",
    },
    exercice: {
      enonce:
        "Décrivez, dans l'ordre, la démarche pour diagnostiquer une machine dont la protection a déclenché, en citant les notions du bloc.",
      consignes: [
        "Donne les étapes de la localisation à la traçabilité.",
        "Relie chaque étape à un chapitre du bloc.",
        "Rappelle la place de la sécurité.",
      ],
      criteres: [
        "Les étapes sont ordonnées et complètes.",
        "Chaque étape est reliée à une notion (3-11 à 3-16).",
        "J'ai rappelé la consignation et la traçabilité.",
      ],
      correction:
        "Situer le départ sur le schéma (3-11), vérifier les phases (3-12), tenir compte de la terre et du régime de neutre (3-13), déterminer le type de protection ayant agi — différentiel (3-14) ou surintensité et sélectivité (3-15) —, éventuellement estimer la charge/puissance (3-16), le tout après consignation et vérification d'absence de tension. On recherche la cause, on remet en service de façon maîtrisée et on trace l'intervention. La sécurité encadre toute la démarche.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 4 — APPAREILLAGE DE COMMANDE ET DE PROTECTION APPROFONDI
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block4Lessons: Lesson[] = [
  {
    id: "3-18",
    title: "Les fonctions d'un départ moteur",
    durationMinutes: 28,
    objectifs: [
      "Identifier les quatre grandes fonctions d'un départ moteur.",
      "Associer chaque fonction à l'appareil qui la réalise.",
    ],
    simple:
      "Pour faire fonctionner un moteur en sécurité, une armoire réunit plusieurs appareils qui se répartissent le travail : isoler, protéger contre le court-circuit, commander la marche, protéger contre la surcharge. Comprendre ces fonctions permet de savoir quel appareil regarder selon le problème.",
    vocab: [
      ["Départ moteur", "Ensemble des appareils qui alimentent et protègent un moteur."],
      ["Sectionnement", "Fonction d'isolement : séparer le circuit de sa source pour intervenir."],
      ["Commande", "Fonction de mise en marche et d'arrêt du moteur, souvent à distance."],
      ["Protection court-circuit", "Fonction assurée par le disjoncteur ou les fusibles."],
      ["Protection surcharge", "Fonction assurée par le relais thermique."],
    ],
    example:
      "Sur un départ moteur classique : le sectionneur isole, le disjoncteur (ou les fusibles) protège contre le court-circuit, le contacteur commande la marche/arrêt, et le relais thermique protège contre la surcharge. Chaque appareil a un rôle précis.",
    schema: "control-circuit",
    ascii: "SECTIONNER → PROTEGER (court-circuit) → COMMANDER → PROTEGER (surcharge) → MOTEUR\nsectionneur     disjoncteur/fusibles      contacteur     relais thermique",
    retenir: [
      "Quatre fonctions : sectionner, protéger contre le court-circuit, commander, protéger contre la surcharge.",
      "Sectionneur = isoler ; disjoncteur/fusibles = court-circuit ; contacteur = commander ; relais thermique = surcharge.",
      "Le contacteur commande mais ne protège pas ; les protections coupent mais ne commandent pas.",
      "Savoir quelle fonction est en cause oriente directement le diagnostic.",
    ],
    erreurs: [
      "Attendre d'un contacteur qu'il protège le moteur : il commande seulement.",
      "Confondre protection contre le court-circuit (disjoncteur/fusibles) et contre la surcharge (relais thermique).",
      "Oublier la fonction de sectionnement, indispensable pour intervenir en sécurité.",
    ],
    astucesPro: [
      "Devant un départ moteur, on identifie mentalement chaque fonction avant de diagnostiquer.",
      "Le repérage des appareils (KM, F, Q) sur l'armoire aide à relier fonction et composant.",
    ],
    diagnostic: [
      "Déterminer quelle fonction est défaillante (isolement, court-circuit, commande, surcharge).",
      "Associer la fonction à l'appareil correspondant.",
      "Contrôler cet appareil en priorité, après sécurisation.",
    ],
    depannage: [
      "Vérifier la commande si le moteur ne démarre pas et qu'aucune protection n'a agi.",
      "Contrôler le relais thermique en cas d'arrêt après quelques minutes.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Le sectionnement et la consignation restent le préalable à toute intervention.",
      "On n'intervient sur un départ moteur qu'avec l'habilitation adaptée.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur ne démarre pas ; aucune protection n'a visiblement déclenché.",
      mission: ["Nommer la fonction à contrôler en priorité.", "Citer l'appareil concerné.", "Indiquer la précaution avant contrôle."],
      correction:
        "Si aucune protection n'a agi, la fonction la plus probablement en cause est la commande : on contrôle donc le contacteur et son circuit de commande (bobine, bouton, auto-maintien). Avant tout contrôle nécessitant un accès aux parties actives, on consigne l'installation et on vérifie l'absence de tension, dans le cadre de son habilitation.",
    },
    memo: ["Sectionner", "Court-circuit → disjoncteur", "Commander → contacteur", "Surcharge → relais thermique"],
    resume:
      "Un départ moteur réunit quatre fonctions — sectionner, protéger du court-circuit, commander, protéger de la surcharge — chacune portée par un appareil précis.",
    quizIds: ["els71", "els72", "els73", "els74", "els75"],
    verification: {
      question: "Quel appareil assure la fonction de commande (marche/arrêt) d'un moteur ?",
      options: ["Le sectionneur", "Le contacteur", "Le relais thermique", "Le fusible"],
      correct: 1,
      explanation: "Le contacteur commande la marche et l'arrêt du moteur. Le sectionneur isole, le relais thermique et le disjoncteur/fusibles protègent.",
    },
    exercice: {
      enonce:
        "Associez chaque fonction à son appareil : (1) isoler pour intervenir, (2) protéger contre le court-circuit, (3) commander la marche, (4) protéger contre la surcharge.",
      consignes: [
        "Associe chaque fonction à un appareil.",
        "Justifie brièvement chaque association.",
        "Rappelle quel appareil ne protège pas.",
      ],
      criteres: [
        "(1) sectionneur, (2) disjoncteur/fusibles, (3) contacteur, (4) relais thermique.",
        "J'ai justifié chaque association.",
        "J'ai rappelé que le contacteur commande mais ne protège pas.",
      ],
      correction:
        "(1) sectionneur pour isoler, (2) disjoncteur ou fusibles contre le court-circuit, (3) contacteur pour commander la marche/arrêt, (4) relais thermique contre la surcharge. Le contacteur commande mais n'assure aucune protection : ce sont les protections dédiées qui coupent en cas de défaut.",
    },
  },
  {
    id: "3-19",
    title: "Le sectionneur et l'isolement de sécurité",
    durationMinutes: 28,
    objectifs: [
      "Expliquer le rôle d'isolement du sectionneur et sa manœuvre.",
      "Distinguer sectionneur, interrupteur et disjoncteur.",
    ],
    simple:
      "Le sectionneur sert à isoler un circuit de sa source pour intervenir en sécurité. Attention : un sectionneur simple se manœuvre hors charge, il n'est pas fait pour couper un courant en fonctionnement. C'est aussi lui qu'on condamne lors d'une consignation.",
    vocab: [
      ["Sectionneur", "Appareil d'isolement qui sépare un circuit de sa source ; se manœuvre hors charge."],
      ["Pouvoir de coupure", "Capacité d'un appareil à couper un courant en charge sans se détériorer."],
      ["Interrupteur-sectionneur", "Appareil qui isole ET peut couper en charge (il a un pouvoir de coupure)."],
      ["Disjoncteur", "Appareil qui coupe automatiquement en cas de défaut et peut couper en charge, réarmable."],
      ["Condamnation", "Verrouillage du sectionneur en position ouverte (cadenas) lors d'une consignation."],
    ],
    example:
      "Lors d'une consignation, on ouvre le sectionneur (séparation) puis on le cadenasse (condamnation). Un sectionneur simple ne doit pas être ouvert alors que le moteur tourne : on arrête d'abord par le contacteur, puis on isole avec le sectionneur.",
    schema: "consignation-steps",
    ascii: "SECTIONNEUR simple → isole HORS CHARGE (pas de pouvoir de coupure)\nINTERRUPTEUR-SECTIONNEUR → isole ET coupe en charge\nDISJONCTEUR → coupe en charge + protege (automatique)",
    retenir: [
      "Le sectionneur assure l'isolement : il sépare le circuit de sa source.",
      "Un sectionneur simple se manœuvre hors charge (pas de pouvoir de coupure).",
      "L'interrupteur-sectionneur et le disjoncteur peuvent, eux, couper en charge.",
      "Le sectionneur est l'organe que l'on condamne lors d'une consignation.",
    ],
    erreurs: [
      "Ouvrir un sectionneur simple alors que le moteur tourne : risque d'arc électrique.",
      "Confondre sectionneur (isole) et disjoncteur (isole, coupe en charge et protège).",
      "Croire qu'un sectionneur protège : il n'assure que l'isolement.",
    ],
    astucesPro: [
      "On arrête le moteur par le contacteur avant d'ouvrir un sectionneur simple.",
      "La présence d'un dispositif de condamnation sur le sectionneur facilite la consignation.",
    ],
    diagnostic: [
      "Vérifier la position réelle du sectionneur (ouvert/fermé) avant de conclure.",
      "Distinguer un simple isolement d'une coupure de protection.",
      "S'assurer que l'isolement couvre toutes les sources d'alimentation.",
    ],
    depannage: [
      "Isoler avec le sectionneur après avoir arrêté la charge.",
      "Condamner le sectionneur avant toute intervention.",
      "Vérifier l'absence de tension en aval avant de travailler.",
    ],
    securite: [
      "Un sectionneur simple ne se manœuvre jamais en charge.",
      "La condamnation du sectionneur fait partie de la consignation, réalisée par une personne habilitée.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un opérateur s'apprête à ouvrir le sectionneur d'un moteur en pleine marche pour « aller plus vite ».",
      mission: ["Dire si c'est correct.", "Expliquer le risque.", "Donner la bonne séquence."],
      correction:
        "Ce n'est pas correct : un sectionneur simple n'a pas de pouvoir de coupure, l'ouvrir en charge peut provoquer un arc électrique dangereux et détériorer l'appareil. La bonne séquence est d'arrêter d'abord le moteur par le contacteur (commande), puis d'ouvrir le sectionneur pour isoler, et enfin de le condamner avant d'intervenir.",
    },
    memo: ["Sectionneur = isoler", "Hors charge", "On condamne le sectionneur", "Disjoncteur = coupe + protège"],
    resume:
      "Le sectionneur isole le circuit de sa source et se manœuvre hors charge ; c'est l'organe que l'on condamne lors d'une consignation.",
    quizIds: ["els76", "els77", "els78", "els79", "els80"],
    verification: {
      question: "Comment se manœuvre un sectionneur simple ?",
      options: ["En charge, moteur en marche", "Hors charge, après arrêt du moteur", "Uniquement sous surcharge", "Peu importe l'état"],
      correct: 1,
      explanation: "Un sectionneur simple n'a pas de pouvoir de coupure : on l'ouvre hors charge, après avoir arrêté le moteur par le contacteur.",
    },
    exercice: {
      enonce:
        "Expliquez la différence entre un sectionneur simple, un interrupteur-sectionneur et un disjoncteur, du point de vue de la coupure en charge.",
      consignes: [
        "Indique lequel peut couper en charge.",
        "Précise lequel protège en plus d'isoler.",
        "Relie le sectionneur à la consignation.",
      ],
      criteres: [
        "J'ai indiqué que le sectionneur simple ne coupe pas en charge.",
        "J'ai identifié le disjoncteur comme coupant en charge ET protégeant.",
        "J'ai relié le sectionneur à la condamnation.",
      ],
      correction:
        "Le sectionneur simple isole mais ne coupe pas en charge (pas de pouvoir de coupure). L'interrupteur-sectionneur isole ET peut couper en charge. Le disjoncteur coupe en charge, protège automatiquement contre les défauts et se réarme. Le sectionneur est l'organe que l'on condamne lors de la consignation pour garantir l'isolement.",
    },
  },
  {
    id: "3-20",
    title: "Le contacteur : commander le moteur à distance",
    durationMinutes: 30,
    objectifs: [
      "Décrire le fonctionnement d'un contacteur (bobine, contacts).",
      "Distinguer contacts principaux (puissance) et contacts auxiliaires (commande).",
    ],
    simple:
      "Le contacteur est un interrupteur commandé à distance par un électro-aimant. Quand sa bobine est alimentée, elle attire une pièce mobile qui ferme les contacts et laisse passer le courant vers le moteur. Dès que la bobine n'est plus alimentée, les contacts s'ouvrent.",
    vocab: [
      ["Bobine", "Électro-aimant du contacteur : alimentée, elle ferme les contacts."],
      ["Contacts principaux", "Contacts de puissance qui alimentent le moteur (fort courant)."],
      ["Contacts auxiliaires", "Contacts de faible courant utilisés dans le circuit de commande (auto-maintien, signalisation)."],
      ["Pôle", "Chaque voie de courant du contacteur (souvent 3 pôles en triphasé)."],
      ["Contact NO / NF", "Normalement Ouvert / Normalement Fermé au repos de la bobine."],
    ],
    example:
      "Quand on appuie sur « marche », la bobine du contacteur KM1 est alimentée : elle ferme les trois contacts principaux et le moteur démarre. Un contact auxiliaire se ferme aussi pour maintenir l'alimentation de la bobine (auto-maintien) même après avoir relâché le bouton.",
    schema: "control-circuit",
    illustrations: ["contactor-thermal"],
    ascii: "bobine alimentée → contacts principaux FERMES → moteur alimenté\nbobine coupée     → contacts principaux OUVERTS → moteur arrêté\nauxiliaire NO → auto-maintien de la commande",
    retenir: [
      "Le contacteur est commandé par sa bobine (électro-aimant).",
      "Bobine alimentée = contacts fermés ; bobine coupée = contacts ouverts.",
      "Les contacts principaux alimentent le moteur ; les auxiliaires servent à la commande.",
      "Un contact NO est ouvert au repos, un contact NF est fermé au repos.",
    ],
    erreurs: [
      "Confondre contacts principaux (puissance) et auxiliaires (commande).",
      "Croire qu'un contacteur protège le moteur : il ne fait que commander.",
      "Oublier que la coupure de la bobine ouvre immédiatement les contacts.",
    ],
    astucesPro: [
      "Un contacteur qui « colle » (contacts restés fermés) est dangereux : le moteur ne s'arrête plus par la commande.",
      "Le bruit et l'état de la bobine renseignent : un ronflement peut signaler un problème d'alimentation de commande.",
    ],
    diagnostic: [
      "Vérifier si la bobine est bien alimentée quand on commande la marche.",
      "Contrôler l'état des contacts principaux (collés, usés).",
      "Distinguer un défaut de commande (bobine, bouton) d'un défaut de puissance (contacts).",
    ],
    depannage: [
      "Contrôler la tension de commande aux bornes de la bobine (avec habilitation et précautions).",
      "Vérifier les contacts principaux hors tension après consignation.",
      "Remplacer un contacteur dont les contacts sont collés ou très usés.",
    ],
    securite: [
      "Un contacteur collé empêche l'arrêt par la commande : on isole par le sectionneur et on consigne.",
      "Les contrôles sous tension du circuit de commande relèvent d'une personne habilitée.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur ne s'arrête plus quand on appuie sur « arrêt » ; le contacteur semble rester fermé.",
      mission: ["Nommer le défaut probable.", "Indiquer le risque.", "Donner la conduite à tenir."],
      correction:
        "Le défaut probable est un contacteur « collé » : ses contacts principaux restent fermés et le moteur reste alimenté malgré la commande d'arrêt. Le risque est de ne plus pouvoir arrêter le moteur par la commande normale. Conduite à tenir : arrêter par un moyen sûr (sectionnement après procédure), consigner l'installation, puis contrôler et remplacer le contacteur hors tension. On ne laisse pas fonctionner un départ dont la commande d'arrêt est inopérante.",
    },
    memo: ["Bobine = commande", "Principaux = puissance", "Auxiliaires = commande", "NO ouvert / NF fermé au repos"],
    resume:
      "Le contacteur commande le moteur à distance par sa bobine ; ses contacts principaux alimentent la puissance, ses contacts auxiliaires servent au circuit de commande.",
    quizIds: ["els81", "els82", "els83", "els84", "els85"],
    verification: {
      question: "Que se passe-t-il quand la bobine d'un contacteur n'est plus alimentée ?",
      options: ["Les contacts principaux se ferment", "Les contacts principaux s'ouvrent et le moteur s'arrête", "Le moteur accélère", "Rien ne change"],
      correct: 1,
      explanation: "Sans alimentation de la bobine, l'électro-aimant relâche : les contacts principaux s'ouvrent et le moteur s'arrête.",
    },
    exercice: {
      enonce:
        "Expliquez le rôle de la bobine et la différence entre contacts principaux et contacts auxiliaires d'un contacteur.",
      consignes: [
        "Décris ce que fait la bobine quand elle est alimentée.",
        "Distingue contacts principaux et auxiliaires.",
        "Donne un exemple d'usage d'un contact auxiliaire.",
      ],
      criteres: [
        "J'ai indiqué que la bobine ferme les contacts.",
        "J'ai distingué puissance (principaux) et commande (auxiliaires).",
        "J'ai cité l'auto-maintien comme usage d'un contact auxiliaire.",
      ],
      correction:
        "Alimentée, la bobine attire la partie mobile et ferme les contacts. Les contacts principaux, prévus pour un fort courant, alimentent le moteur ; les contacts auxiliaires, de faible courant, servent au circuit de commande (par exemple l'auto-maintien qui garde la bobine alimentée après le relâchement du bouton marche, ou la signalisation).",
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
    chapterCount: block2Lessons.length,
    status: "available",
    exam: {
      questionIds: ["els1", "els5", "els6", "els9", "els11", "els13", "els17", "els19", "els21", "els23", "els26", "els28", "els31", "els33"],
      passPercent: 80,
    },
  },
  {
    id: "m3-b3",
    num: 3,
    title: "Réseaux, distribution et régimes de neutre",
    objective: "Distinguer monophasé et triphasé, comprendre la distribution et les régimes de neutre.",
    lessonIds: block3Lessons.map((lesson) => lesson.id),
    chapterCount: block3Lessons.length,
    status: "available",
    exam: {
      questionIds: ["els36", "els38", "els41", "els43", "els47", "els49", "els51", "els53", "els56", "els58", "els61", "els63", "els66", "els68"],
      passPercent: 80,
    },
  },
  {
    id: "m3-b4",
    num: 4,
    title: "Appareillage de commande et de protection approfondi",
    objective: "Maîtriser sectionneurs, contacteurs, relais et dispositifs de protection.",
    lessonIds: block4Lessons.map((lesson) => lesson.id),
    chapterCount: 7,
    status: "in_progress",
  },
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
  lessons: [...block1Lessons, ...block2Lessons, ...block3Lessons, ...block4Lessons],
  blocks: ELECTRO_BLOCKS,
};
