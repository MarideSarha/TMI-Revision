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
  {
    id: "3-21",
    title: "Le relais thermique et la protection contre les surcharges",
    durationMinutes: 30,
    objectifs: [
      "Expliquer comment le relais thermique protège le moteur contre la surcharge.",
      "Comprendre le réglage au courant nominal et la conduite après un déclenchement.",
    ],
    simple:
      "Le relais thermique surveille le courant absorbé par le moteur. Si ce courant reste trop élevé trop longtemps (surcharge), un mécanisme sensible à la chaleur (bilames) finit par couper le circuit de commande, ce qui arrête le moteur avant qu'il ne s'abîme.",
    vocab: [
      ["Relais thermique", "Protection contre la surcharge : il coupe si le courant reste trop élevé trop longtemps."],
      ["Bilame", "Lame sensible à la chaleur qui se déforme sous l'effet du courant et provoque le déclenchement."],
      ["Courant nominal (In)", "Courant normal du moteur, sur lequel on règle le relais thermique."],
      ["Classe de déclenchement", "Indique le temps que met le relais à couper pour une surcharge donnée (ex : classe 10)."],
      ["Réarmement", "Remise en service du relais après déclenchement, une fois la cause traitée."],
    ],
    example:
      "Un relais thermique réglé sur le courant nominal du moteur laisse passer le fonctionnement normal. Si le moteur force (mécanisme bloqué, roulement grippé), le courant augmente : après un certain temps, le relais déclenche et coupe la commande. On cherche la cause de la surcharge avant de réarmer.",
    schema: "control-circuit",
    ascii: "courant normal  → pas de declenchement\nsurcharge (courant eleve, duree) → bilames chauffent → COUPURE\nreglage sur le courant nominal (In) du moteur",
    retenir: [
      "Le relais thermique protège contre la surcharge, pas contre le court-circuit.",
      "On le règle sur le courant nominal (In) du moteur.",
      "Le déclenchement dépend de l'intensité ET de la durée (classe de déclenchement).",
      "On recherche la cause de la surcharge avant de réarmer.",
    ],
    erreurs: [
      "Régler le relais bien au-dessus du courant nominal pour « qu'il ne déclenche plus » : le moteur n'est plus protégé.",
      "Réarmer à répétition sans chercher la cause de la surcharge.",
      "Confondre relais thermique (surcharge) et disjoncteur magnétique (court-circuit).",
    ],
    astucesPro: [
      "Un déclenchement répété signale souvent un problème mécanique (charge, grippage) à traiter.",
      "On vérifie que le réglage correspond bien à la plaque signalétique du moteur.",
    ],
    diagnostic: [
      "Vérifier le réglage du relais par rapport au courant nominal du moteur.",
      "Mesurer le courant absorbé (à la pince) pour confirmer une surcharge.",
      "Rechercher une cause mécanique (charge excessive, frottement).",
    ],
    depannage: [
      "Traiter la cause de la surcharge avant de réarmer.",
      "Contrôler l'entraînement mécanique et l'état du moteur.",
      "Respecter la consignation pour les contrôles nécessitant un accès.",
    ],
    securite: [
      "Ne jamais dérégler un relais thermique pour contourner un déclenchement.",
      "Les mesures sous tension se font avec habilitation et matériel adaptés.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur déclenche son relais thermique chaque jour, toujours après quelques minutes de marche.",
      mission: ["Formuler l'hypothèse la plus probable.", "Proposer les contrôles.", "Indiquer l'erreur à éviter."],
      correction:
        "Le déclenchement répété après quelques minutes évoque une surcharge : le moteur absorbe un courant trop élevé durablement. On contrôle le réglage du relais par rapport au courant nominal, on mesure le courant absorbé à la pince, et on recherche une cause mécanique (charge excessive, roulement grippé, entraînement dur). L'erreur à éviter est de dérégler le relais vers le haut pour masquer le problème : cela supprimerait la protection et risquerait de détruire le moteur.",
    },
    memo: ["Surcharge, pas court-circuit", "Réglé sur In", "Intensité + durée", "Cause avant réarmement"],
    resume:
      "Le relais thermique protège le moteur contre la surcharge en fonction de l'intensité et de la durée ; il se règle sur le courant nominal et impose de chercher la cause avant de réarmer.",
    quizIds: ["els86", "els87", "els88", "els89", "els90"],
    verification: {
      question: "Sur quelle valeur règle-t-on un relais thermique ?",
      options: ["Sur le courant nominal du moteur", "Sur la tension du réseau", "Sur la fréquence", "Au hasard"],
      correct: 0,
      explanation: "Le relais thermique se règle sur le courant nominal (In) du moteur, indiqué sur sa plaque signalétique, pour protéger sans déclencher en fonctionnement normal.",
    },
    exercice: {
      enonce:
        "Expliquez pourquoi dérégler un relais thermique au-dessus du courant nominal est dangereux, et donnez la bonne démarche face à des déclenchements répétés.",
      consignes: [
        "Explique le rôle du réglage sur In.",
        "Décris le risque d'un réglage trop élevé.",
        "Donne la démarche correcte.",
      ],
      criteres: [
        "J'ai relié le réglage au courant nominal.",
        "J'ai indiqué que le moteur n'est plus protégé si le réglage est trop élevé.",
        "J'ai proposé de chercher la cause de la surcharge.",
      ],
      correction:
        "Le relais est réglé sur le courant nominal pour couper si le moteur consomme durablement plus que prévu. En le réglant bien au-dessus, il ne déclenche plus même en cas de surcharge réelle : le moteur peut alors surchauffer et se détruire. Face à des déclenchements répétés, la bonne démarche est de mesurer le courant, de vérifier le réglage et de rechercher la cause (souvent mécanique), pas de dérégler la protection.",
    },
  },
  {
    id: "3-22",
    title: "Circuit de commande et circuit de puissance",
    durationMinutes: 30,
    objectifs: [
      "Distinguer le circuit de commande du circuit de puissance.",
      "Comprendre le principe marche/arrêt avec auto-maintien.",
    ],
    simple:
      "Dans un départ moteur, on sépare deux circuits : le circuit de puissance, qui transporte le fort courant vers le moteur, et le circuit de commande, à faible courant, qui pilote la bobine du contacteur. Le bouton marche démarre, le bouton arrêt coupe, et l'auto-maintien garde le moteur en marche.",
    vocab: [
      ["Circuit de puissance", "Circuit à fort courant qui alimente le moteur à travers les contacts principaux."],
      ["Circuit de commande", "Circuit à faible courant qui pilote la bobine du contacteur."],
      ["Bouton marche", "Bouton (normalement ouvert) qui alimente la bobine quand on appuie."],
      ["Bouton arrêt", "Bouton (normalement fermé) qui coupe la bobine quand on appuie."],
      ["Auto-maintien", "Contact auxiliaire qui maintient la bobine alimentée après le relâchement du bouton marche."],
    ],
    example:
      "On appuie sur marche : la bobine est alimentée, les contacts principaux se ferment (le moteur démarre) et un contact auxiliaire se ferme pour maintenir la bobine. On relâche marche : le moteur continue grâce à l'auto-maintien. On appuie sur arrêt : la bobine est coupée, tout s'ouvre, le moteur s'arrête.",
    schema: "command-power-circuit",
    ascii: "COMMANDE (faible courant) : marche → bobine → auto-maintien ; arret → coupe\nPUISSANCE (fort courant) : contacts principaux → relais thermique → moteur",
    retenir: [
      "Le circuit de puissance alimente le moteur ; le circuit de commande pilote la bobine.",
      "Le bouton marche (NO) alimente la bobine ; le bouton arrêt (NF) la coupe.",
      "L'auto-maintien garde la bobine alimentée après le relâchement du bouton marche.",
      "Couper la commande (arrêt, défaut) ouvre les contacts et arrête le moteur.",
    ],
    erreurs: [
      "Confondre les deux circuits : la commande est à faible courant, la puissance à fort courant.",
      "Oublier l'auto-maintien et s'étonner que le moteur s'arrête au relâchement du bouton.",
      "Chercher un défaut de puissance alors que le problème vient de la commande.",
    ],
    astucesPro: [
      "Pour un moteur qui démarre puis s'arrête au relâchement du bouton, on suspecte l'auto-maintien.",
      "On distingue toujours un défaut de commande d'un défaut de puissance avant de démonter.",
    ],
    diagnostic: [
      "Déterminer si le défaut est dans la commande (bobine, boutons, auto-maintien) ou la puissance (contacts, moteur).",
      "Vérifier la continuité du circuit de commande (hors tension après consignation).",
      "Contrôler l'alimentation de la bobine lors d'une commande de marche.",
    ],
    depannage: [
      "Contrôler les boutons et le contact d'auto-maintien.",
      "Vérifier l'alimentation de la bobine.",
      "Séparer clairement les contrôles commande et puissance.",
    ],
    securite: [
      "Le circuit de commande peut rester sous tension : on respecte la consignation avant tout contact.",
      "Les contrôles sous tension relèvent d'une personne habilitée.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur démarre quand on maintient le bouton marche, mais s'arrête dès qu'on le relâche.",
      mission: ["Nommer la fonction défaillante.", "Indiquer le contrôle à faire.", "Préciser la précaution."],
      correction:
        "La fonction défaillante est l'auto-maintien : le moteur ne « tient » pas après le relâchement du bouton marche, ce qui indique que le contact auxiliaire d'auto-maintien ne ferme pas (contact défectueux, câblage). On contrôle ce contact et le câblage du circuit de commande, hors tension après consignation, avant de conclure. On distingue bien ce défaut de commande d'un éventuel défaut de puissance.",
    },
    memo: ["Puissance = fort courant", "Commande = faible courant", "Marche NO / Arrêt NF", "Auto-maintien tient la bobine"],
    resume:
      "Un départ moteur sépare puissance (moteur) et commande (bobine) ; le principe marche/arrêt avec auto-maintien pilote le contacteur.",
    quizIds: ["els91", "els92", "els93", "els94", "els95"],
    verification: {
      question: "À quoi sert l'auto-maintien dans un circuit de commande ?",
      options: ["À protéger le moteur", "À garder la bobine alimentée après le relâchement du bouton marche", "À mesurer le courant", "À couper le circuit de puissance"],
      correct: 1,
      explanation: "L'auto-maintien est un contact auxiliaire qui maintient la bobine alimentée après le relâchement du bouton marche, pour que le moteur continue de tourner.",
    },
    exercice: {
      enonce:
        "Décrivez le fonctionnement marche/arrêt d'un départ moteur, en distinguant circuit de commande et circuit de puissance et en expliquant l'auto-maintien.",
      consignes: [
        "Décris ce qui se passe quand on appuie sur marche.",
        "Explique le rôle de l'auto-maintien.",
        "Décris ce qui se passe quand on appuie sur arrêt.",
      ],
      criteres: [
        "J'ai distingué commande (bobine) et puissance (moteur).",
        "J'ai expliqué l'auto-maintien.",
        "J'ai décrit l'arrêt (coupure de la bobine).",
      ],
      correction:
        "Appui sur marche : le circuit de commande alimente la bobine, les contacts principaux (puissance) se ferment et le moteur démarre ; un contact auxiliaire d'auto-maintien se ferme pour garder la bobine alimentée après le relâchement du bouton. Appui sur arrêt : le bouton (NF) coupe le circuit de commande, la bobine n'est plus alimentée, les contacts s'ouvrent et le moteur s'arrête.",
    },
  },
  {
    id: "3-23",
    title: "Temporisateurs et relais auxiliaires",
    durationMinutes: 28,
    objectifs: [
      "Expliquer le rôle d'un temporisateur dans un circuit de commande.",
      "Distinguer temporisation au travail et au repos, et le rôle des relais auxiliaires.",
    ],
    simple:
      "Certaines actions doivent se produire avec un décalage dans le temps : c'est le rôle des temporisateurs. Les relais auxiliaires, eux, multiplient et relaient des ordres dans le circuit de commande. Ensemble, ils permettent d'automatiser des séquences simples.",
    vocab: [
      ["Temporisateur", "Appareil qui retarde une action d'un temps réglable."],
      ["Temporisation au travail", "Le contact change d'état un certain temps APRÈS l'alimentation."],
      ["Temporisation au repos", "Le contact revient à son état un certain temps APRÈS la coupure."],
      ["Relais auxiliaire", "Relais de commande à faible courant qui relaie ou multiplie des ordres."],
      ["Séquence", "Enchaînement d'actions automatisé grâce aux temporisateurs et relais."],
    ],
    example:
      "Dans un démarrage étoile-triangle, un temporisateur maintient le couplage étoile pendant quelques secondes, puis commande le passage en triangle. Le décalage de temps est réglé sur le temporisateur.",
    schema: "command-power-circuit",
    ascii: "TEMPO au travail : ordre → (delai) → action\nTEMPO au repos  : coupure → (delai) → retour\nRELAIS AUX. : relaie/multiplie des ordres de commande",
    retenir: [
      "Le temporisateur retarde une action d'un temps réglable.",
      "Temporisation au travail = action après l'alimentation ; au repos = retour après la coupure.",
      "Les relais auxiliaires relaient et multiplient des ordres dans la commande.",
      "Temporisateurs et relais permettent d'automatiser des séquences simples.",
    ],
    erreurs: [
      "Confondre temporisation au travail et au repos.",
      "Régler un temps inadapté (trop court ou trop long) pour une séquence.",
      "Confondre relais auxiliaire (commande) et contacteur de puissance.",
    ],
    astucesPro: [
      "On lit le type de temporisation et le temps réglé sur l'appareil avant de diagnostiquer une séquence.",
      "Un temps de temporisation dérivé peut expliquer une séquence qui « part trop tôt » ou « trop tard ».",
    ],
    diagnostic: [
      "Identifier le type de temporisation utilisé dans la séquence.",
      "Vérifier le temps réglé par rapport au fonctionnement attendu.",
      "Contrôler les relais auxiliaires impliqués dans la commande.",
    ],
    depannage: [
      "Ajuster ou remplacer un temporisateur défaillant.",
      "Vérifier le câblage des relais auxiliaires.",
      "Respecter la consignation pour les contrôles nécessitant un accès.",
    ],
    securite: [
      "Une séquence automatisée peut redémarrer seule : on consigne avant d'intervenir.",
      "Les contrôles sous tension relèvent d'une personne habilitée.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur un démarrage étoile-triangle, le passage en triangle se fait beaucoup trop tôt.",
      mission: ["Nommer l'appareil en cause.", "Indiquer le réglage à vérifier.", "Préciser la précaution."],
      correction:
        "L'appareil en cause est le temporisateur qui gère la durée du couplage étoile : un passage trop précoce en triangle indique un temps réglé trop court ou un temporisateur défaillant. On vérifie le temps réglé par rapport au besoin, puis l'état du temporisateur. Avant tout contrôle nécessitant un accès, on consigne, car une séquence automatisée peut se relancer.",
    },
    memo: ["Tempo au travail / au repos", "Temps réglable", "Relais aux. relaie la commande", "Séquences automatisées"],
    resume:
      "Les temporisateurs retardent des actions (au travail ou au repos) et les relais auxiliaires relaient des ordres, ce qui permet d'automatiser des séquences simples comme l'étoile-triangle.",
    quizIds: ["els96", "els97", "els98", "els99", "els100"],
    verification: {
      question: "Que fait un temporisateur dans un circuit de commande ?",
      options: ["Il protège contre le court-circuit", "Il retarde une action d'un temps réglable", "Il mesure la tension", "Il isole le circuit"],
      correct: 1,
      explanation: "Le temporisateur retarde une action d'un temps réglable ; il permet d'enchaîner des étapes dans une séquence (ex : étoile-triangle).",
    },
    exercice: {
      enonce:
        "Expliquez la différence entre une temporisation au travail et une temporisation au repos, avec un exemple simple.",
      consignes: [
        "Définis la temporisation au travail.",
        "Définis la temporisation au repos.",
        "Donne un exemple d'usage.",
      ],
      criteres: [
        "J'ai défini la temporisation au travail (action après alimentation).",
        "J'ai défini la temporisation au repos (retour après coupure).",
        "J'ai donné un exemple (ex : étoile-triangle).",
      ],
      correction:
        "La temporisation au travail fait changer le contact d'état un certain temps après l'alimentation du temporisateur (l'action arrive avec retard). La temporisation au repos fait revenir le contact à son état un certain temps après la coupure (le retour est retardé). Exemple : dans un démarrage étoile-triangle, une temporisation au travail maintient le couplage étoile quelques secondes avant de commander le passage en triangle.",
    },
  },
  {
    id: "3-24",
    title: "Synthèse appareillage et mise en situation",
    durationMinutes: 30,
    objectifs: [
      "Relier les appareils de commande et de protection dans un départ moteur complet.",
      "Conduire un diagnostic méthodique face à un départ moteur défaillant.",
    ],
    simple:
      "Ce chapitre rassemble le bloc : sectionner, protéger, commander et temporiser. Face à un départ moteur qui ne fonctionne pas, on raisonne fonction par fonction pour trouver l'appareil en cause, en restant méthodique et en sécurité.",
    vocab: [
      ["Départ moteur", "Ensemble sectionneur, protection, contacteur, relais thermique (chapitres 3-18 à 3-21)."],
      ["Circuit de commande", "Partie qui pilote la bobine (chapitre 3-22)."],
      ["Séquence", "Enchaînement automatisé par temporisateurs et relais (chapitre 3-23)."],
      ["Diagnostic méthodique", "Recherche de panne fonction par fonction, du plus simple au plus probable."],
      ["Traçabilité", "Trace écrite des constats, mesures et actions."],
    ],
    example:
      "Un moteur ne démarre pas : on vérifie l'isolement et la présence de tension (3-19), l'état du contacteur et de sa bobine (3-20), le circuit de commande et l'auto-maintien (3-22), le relais thermique (3-21) et, si séquence, le temporisateur (3-23), le tout après consignation quand un accès est nécessaire.",
    schema: "control-circuit",
    ascii: "ISOLEMENT (3-19) → PROTECTIONS (3-18/3-21) → COMMANDE (3-20/3-22) → SEQUENCE (3-23)\ndiagnostic fonction par fonction, apres consignation, puis tracer",
    retenir: [
      "Un départ moteur se diagnostique fonction par fonction.",
      "On distingue toujours défaut de commande et défaut de puissance.",
      "Le type de déclenchement (thermique, magnétique, différentiel) oriente la recherche.",
      "La sécurité (consignation, VAT, habilitation) encadre toute l'intervention.",
    ],
    erreurs: [
      "Démonter au hasard sans raisonner par fonction.",
      "Oublier la consignation avant les contrôles nécessitant un accès.",
      "Ne pas tracer les constats et les mesures.",
    ],
    astucesPro: [
      "On part du symptôme et on remonte la chaîne des fonctions dans un ordre logique.",
      "On note les valeurs mesurées : elles servent de référence pour la suite.",
    ],
    diagnostic: [
      "Situer la fonction défaillante (isolement, protection, commande, séquence).",
      "Contrôler l'appareil correspondant, du plus probable au moins probable.",
      "Confirmer par la mesure avant de remplacer une pièce.",
    ],
    depannage: [
      "Consigner avant tout contrôle nécessitant un accès aux parties actives.",
      "Rechercher la cause avant de réarmer une protection.",
      "Remettre en service de façon maîtrisée et tracer l'intervention.",
    ],
    securite: [
      "Les règles de sécurité des blocs précédents restent valables sur un départ moteur.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique : elle prépare à la formation, elle ne la remplace pas.",
    ],
    etudeDeCas: {
      situation: "Un moteur s'arrête tout seul après quelques minutes ; en réarmant, il repart puis s'arrête à nouveau.",
      mission: ["Nommer l'appareil probablement en cause.", "Décrire la démarche de diagnostic.", "Indiquer ce que l'on trace."],
      correction:
        "L'arrêt temporisé et récurrent après réarmement évoque le relais thermique qui déclenche sur une surcharge (chapitre 3-21). Démarche : mesurer le courant absorbé (pince), vérifier le réglage du relais par rapport au courant nominal, rechercher une cause mécanique (charge, grippage), le tout après consignation pour les contrôles nécessitant un accès. On recherche la cause avant de réarmer, on remet en service de façon maîtrisée et on trace le constat, les mesures et l'action réalisée.",
    },
    memo: ["Fonction par fonction", "Commande vs puissance", "Cause avant réarmement", "Consigner puis tracer"],
    resume:
      "Diagnostiquer un départ moteur, c'est raisonner fonction par fonction — isoler, protéger, commander, temporiser — en sécurité et avec traçabilité.",
    quizIds: ["els101", "els102", "els103", "els104", "els105"],
    verification: {
      question: "Un moteur s'arrête seul après quelques minutes, de façon répétée. Quel appareil suspecter en premier ?",
      options: ["Le sectionneur", "Le relais thermique (surcharge)", "Le bouton marche", "Le voyant"],
      correct: 1,
      explanation: "Un arrêt temporisé et répété évoque le relais thermique qui déclenche sur une surcharge : on mesure le courant et on recherche la cause avant de réarmer.",
    },
    exercice: {
      enonce:
        "Décrivez, dans l'ordre, la démarche pour diagnostiquer un départ moteur qui ne démarre pas, en citant les appareils et fonctions du bloc.",
      consignes: [
        "Donne les étapes de contrôle, de l'isolement à la séquence.",
        "Relie chaque étape à un appareil ou une fonction (3-18 à 3-23).",
        "Rappelle la place de la sécurité et de la traçabilité.",
      ],
      criteres: [
        "Les étapes sont ordonnées et complètes.",
        "Chaque étape est reliée à un appareil/fonction.",
        "J'ai rappelé la consignation et la traçabilité.",
      ],
      correction:
        "Vérifier l'isolement et la présence de tension au sectionneur (3-19), contrôler les protections (disjoncteur/fusibles et relais thermique, 3-18/3-21), vérifier la commande — bobine du contacteur, boutons, auto-maintien (3-20/3-22) —, puis, en cas de séquence, le temporisateur (3-23). On distingue défaut de commande et défaut de puissance, on confirme par la mesure, le tout après consignation. On recherche la cause avant de réarmer, on remet en service de façon maîtrisée et on trace l'intervention.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 5 — MOTEURS ASYNCHRONES ET VARIATION DE VITESSE
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block5Lessons: Lesson[] = [
  {
    id: "3-25",
    title: "Le moteur asynchrone triphasé : constitution et principe",
    durationMinutes: 30,
    objectifs: [
      "Identifier les parties principales d'un moteur asynchrone (stator, rotor).",
      "Expliquer le champ tournant et la notion de glissement.",
    ],
    simple:
      "Le moteur asynchrone est le moteur le plus répandu en industrie. Il est robuste et simple. Ses bobinages fixes créent un champ magnétique qui tourne ; ce champ entraîne le rotor, qui tourne un peu moins vite que lui — d'où le nom « asynchrone ».",
    vocab: [
      ["Stator", "Partie fixe du moteur, portant les bobinages qui créent le champ tournant."],
      ["Rotor", "Partie mobile qui tourne, entraînée par le champ magnétique."],
      ["Champ tournant", "Champ magnétique créé par les bobinages triphasés, qui tourne dans le stator."],
      ["Vitesse de synchronisme", "Vitesse de rotation du champ tournant, liée à la fréquence et au nombre de pôles."],
      ["Glissement", "Petit écart entre la vitesse du rotor et celle du champ tournant."],
    ],
    example:
      "Sur un convoyeur, un moteur asynchrone triphasé entraîne le tambour. Les bobinages du stator, alimentés en triphasé, créent un champ tournant ; le rotor suit ce champ avec un léger retard (glissement) et fournit le couple qui met la bande en mouvement.",
    schema: "asynchronous-motor",
    ascii: "STATOR (fixe) → bobinages triphases → CHAMP TOURNANT\n         ↓ entraine\nROTOR (mobile) tourne un peu moins vite (GLISSEMENT) → asynchrone",
    retenir: [
      "Le moteur asynchrone comprend un stator fixe et un rotor mobile.",
      "Les bobinages triphasés du stator créent un champ magnétique tournant.",
      "Le rotor tourne un peu moins vite que le champ : c'est le glissement.",
      "La vitesse du champ (synchronisme) dépend de la fréquence et du nombre de pôles.",
    ],
    erreurs: [
      "Croire que le rotor tourne exactement à la vitesse du champ : il y a toujours un glissement en charge.",
      "Confondre stator (fixe) et rotor (mobile).",
      "Penser qu'un moteur asynchrone n'a pas besoin de triphasé pour créer le champ tournant.",
    ],
    astucesPro: [
      "Un glissement anormalement élevé peut signaler une surcharge ou un défaut d'alimentation.",
      "La plaque signalétique donne la vitesse nominale, légèrement inférieure au synchronisme.",
    ],
    diagnostic: [
      "Vérifier la présence des trois phases pour obtenir un champ tournant correct.",
      "Comparer la vitesse observée à la vitesse nominale de la plaque.",
      "Repérer un échauffement ou un bruit anormal du moteur.",
    ],
    depannage: [
      "Contrôler l'alimentation triphasée (présence et équilibre des phases).",
      "Vérifier la charge entraînée en cas de vitesse basse ou de surchauffe.",
      "Respecter la consignation pour tout contrôle nécessitant un accès.",
    ],
    securite: [
      "Un moteur peut démarrer à distance : on consigne avant toute intervention mécanique ou électrique.",
      "Les surfaces d'un moteur en marche peuvent être chaudes.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur asynchrone tourne nettement moins vite que d'habitude et chauffe.",
      mission: ["Formuler deux hypothèses.", "Indiquer les contrôles.", "Préciser la précaution."],
      correction:
        "Deux hypothèses : une surcharge mécanique (glissement qui augmente, échauffement) ou un défaut d'alimentation (phase manquante, déséquilibre). Contrôles : présence et équilibre des trois phases à la pince, état de la charge entraînée, comparaison à la vitesse nominale. Avant tout contrôle nécessitant un accès, on consigne l'installation ; les mesures sous tension se font avec l'habilitation adaptée.",
    },
    memo: ["Stator fixe / rotor mobile", "Champ tournant triphasé", "Glissement = écart de vitesse", "Robuste et répandu"],
    resume:
      "Le moteur asynchrone triphasé crée un champ tournant dans son stator qui entraîne le rotor avec un léger glissement ; c'est le moteur industriel de référence.",
    quizIds: ["els106", "els107", "els108", "els109", "els110"],
    verification: {
      question: "Pourquoi le moteur « asynchrone » porte-t-il ce nom ?",
      options: ["Le rotor tourne plus vite que le champ", "Le rotor tourne un peu moins vite que le champ tournant (glissement)", "Il n'a pas de rotor", "Il fonctionne en continu"],
      correct: 1,
      explanation: "Le rotor tourne un peu moins vite que le champ tournant : cet écart, le glissement, fait que la rotation n'est pas synchrone.",
    },
    exercice: {
      enonce:
        "Expliquez le principe du moteur asynchrone en reliant stator, champ tournant, rotor et glissement.",
      consignes: [
        "Décris le rôle du stator.",
        "Explique comment le rotor est entraîné.",
        "Définis le glissement.",
      ],
      criteres: [
        "J'ai indiqué que le stator crée le champ tournant.",
        "J'ai expliqué que le champ entraîne le rotor.",
        "J'ai défini le glissement comme l'écart de vitesse.",
      ],
      correction:
        "Les bobinages triphasés du stator (fixe) créent un champ magnétique tournant. Ce champ entraîne le rotor (mobile) par induction. Le rotor tourne un peu moins vite que le champ : cet écart de vitesse s'appelle le glissement, et c'est lui qui permet au moteur de fournir un couple.",
    },
  },
  {
    id: "3-26",
    title: "Plaque signalétique et couplage étoile / triangle",
    durationMinutes: 30,
    objectifs: [
      "Lire les informations essentielles d'une plaque signalétique moteur.",
      "Choisir le couplage étoile ou triangle selon la tension du réseau.",
    ],
    simple:
      "La plaque signalétique d'un moteur indique ses caractéristiques, dont deux tensions. Selon la tension du réseau, on relie les enroulements en étoile ou en triangle, pour que chaque enroulement reçoive la tension pour laquelle il est prévu.",
    vocab: [
      ["Plaque signalétique", "Étiquette du moteur indiquant tensions, puissance, courant, vitesse, cos φ."],
      ["Couplage étoile (Y)", "Les enroulements sont reliés par un point commun ; chaque enroulement reçoit la tension simple."],
      ["Couplage triangle (Δ)", "Les enroulements sont reliés en boucle ; chaque enroulement reçoit la tension composée."],
      ["Tension d'enroulement", "Tension que doit recevoir chaque enroulement (la plus basse des deux valeurs de la plaque)."],
      ["Plaque à bornes", "Bornier du moteur où l'on place les barrettes pour réaliser le couplage."],
    ],
    example:
      "Un moteur marqué « 230 V / 400 V » a des enroulements prévus pour 230 V. Sur un réseau triphasé 400 V (entre phases), on le couple en étoile : chaque enroulement reçoit alors 400 / √3 ≈ 230 V, la tension pour laquelle il est prévu.",
    schema: "star-delta-coupling",
    ascii: "Plaque 230 V / 400 V  → enroulements prevus pour 230 V\nReseau 400 V (entre phases) → COUPLAGE ETOILE (Y)\nchaque enroulement recoit 400/√3 ≈ 230 V",
    retenir: [
      "La plaque signalétique donne deux tensions : la plus basse est la tension d'un enroulement.",
      "En étoile (Y), chaque enroulement reçoit la tension simple (phase-neutre).",
      "En triangle (Δ), chaque enroulement reçoit la tension composée (phase-phase).",
      "Un moteur 230/400 V se couple en étoile sur un réseau 400 V.",
    ],
    erreurs: [
      "Coupler en triangle un moteur 230/400 V sur un réseau 400 V : chaque enroulement recevrait 400 V et grillerait.",
      "Ignorer la plaque signalétique et coupler au hasard.",
      "Confondre tension d'enroulement et tension du réseau.",
    ],
    astucesPro: [
      "On vérifie toujours la plaque et la position des barrettes avant de mettre sous tension.",
      "Un mauvais couplage se paie cash : surchauffe immédiate ou couple insuffisant.",
    ],
    diagnostic: [
      "Lire la plaque signalétique et la tension du réseau.",
      "Déterminer le couplage correct (étoile ou triangle).",
      "Vérifier la position des barrettes sur la plaque à bornes.",
    ],
    depannage: [
      "Corriger le couplage si le moteur chauffe ou manque de couple.",
      "Contrôler le serrage et la position des barrettes, hors tension.",
      "Respecter la consignation avant d'ouvrir la boîte à bornes.",
    ],
    securite: [
      "L'ouverture de la boîte à bornes se fait hors tension, après consignation.",
      "Un mauvais couplage peut détruire le moteur et créer un danger.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur 230 V / 400 V a été couplé en triangle sur un réseau 400 V ; il chauffe très vite.",
      mission: ["Expliquer l'erreur.", "Indiquer le couplage correct.", "Préciser la conduite à tenir."],
      correction:
        "L'erreur est le couplage : en triangle sur un réseau 400 V, chaque enroulement reçoit 400 V au lieu des 230 V prévus, d'où une surchauffe rapide et un risque de destruction. Le couplage correct est l'étoile, qui applique 400/√3 ≈ 230 V à chaque enroulement. Conduite à tenir : couper et consigner, ouvrir la boîte à bornes hors tension, replacer les barrettes en étoile, puis contrôler avant remise en service.",
    },
    memo: ["Plaque = 2 tensions", "Étoile → tension simple", "Triangle → tension composée", "230/400 sur 400 V → étoile"],
    resume:
      "La plaque signalétique guide le couplage : étoile ou triangle selon la tension du réseau, pour que chaque enroulement reçoive sa tension nominale.",
    quizIds: ["els111", "els112", "els113", "els114", "els115"],
    verification: {
      question: "Un moteur 230 V / 400 V est raccordé à un réseau triphasé 400 V. Quel couplage choisir ?",
      options: ["Triangle", "Étoile", "Peu importe", "Aucun couplage"],
      correct: 1,
      explanation: "En étoile, chaque enroulement reçoit 400 / √3 ≈ 230 V, la tension pour laquelle il est prévu. En triangle, il recevrait 400 V et grillerait.",
    },
    exercice: {
      enonce:
        "Expliquez comment choisir entre couplage étoile et triangle à partir de la plaque signalétique et de la tension du réseau.",
      consignes: [
        "Explique ce que représente la tension la plus basse de la plaque.",
        "Donne la règle de choix du couplage.",
        "Illustre avec un moteur 230/400 V sur réseau 400 V.",
      ],
      criteres: [
        "J'ai identifié la tension d'enroulement.",
        "J'ai donné la règle étoile/triangle selon le réseau.",
        "J'ai conclu au couplage étoile dans l'exemple.",
      ],
      correction:
        "La tension la plus basse de la plaque est celle que doit recevoir chaque enroulement. On choisit le couplage pour que l'enroulement reçoive cette tension : étoile quand la tension composée du réseau vaut la valeur haute de la plaque, triangle quand elle vaut la valeur basse. Exemple : moteur 230/400 V sur réseau 400 V → couplage étoile, car chaque enroulement reçoit alors 400/√3 ≈ 230 V.",
    },
  },
  {
    id: "3-27",
    title: "Le démarrage direct",
    durationMinutes: 26,
    objectifs: [
      "Décrire le démarrage direct et ses caractéristiques.",
      "Identifier ses avantages, ses limites et ses cas d'usage.",
    ],
    simple:
      "Le démarrage direct consiste à appliquer d'un coup la pleine tension au moteur. C'est la méthode la plus simple, mais elle provoque une forte pointe de courant au démarrage et un à-coup mécanique, ce qui la réserve plutôt aux moteurs de faible puissance.",
    vocab: [
      ["Démarrage direct", "Mise sous pleine tension du moteur en une seule fois."],
      ["Courant de démarrage", "Pointe de courant à l'instant du démarrage, bien plus élevée que le courant nominal."],
      ["Couple de démarrage", "Effort de rotation fourni au démarrage."],
      ["À-coup", "Secousse mécanique brutale au démarrage."],
      ["Chute de tension", "Baisse momentanée de la tension du réseau due à la pointe de courant."],
    ],
    example:
      "Un petit ventilateur est démarré en direct : on ferme le contacteur et le moteur reçoit d'emblée la pleine tension. Le courant de démarrage atteint plusieurs fois le courant nominal pendant un court instant, puis retombe une fois la vitesse atteinte.",
    schema: "command-power-circuit",
    ascii: "DEMARRAGE DIRECT : pleine tension d'un coup\n+ simple, peu de materiel\n- forte pointe de courant, a-coup mecanique → plutot petits moteurs",
    retenir: [
      "Le démarrage direct applique la pleine tension en une seule fois.",
      "Il provoque une forte pointe de courant (plusieurs fois le courant nominal).",
      "Il est simple et économique, mais crée un à-coup mécanique et une chute de tension.",
      "On le réserve souvent aux moteurs de faible puissance.",
    ],
    erreurs: [
      "Démarrer en direct un gros moteur là où le réseau ou la mécanique ne le supportent pas.",
      "Négliger la pointe de courant lors du dimensionnement des protections.",
      "Confondre courant de démarrage (bref) et courant nominal (permanent).",
    ],
    astucesPro: [
      "Si des à-coups gênent la mécanique ou si la pointe de courant fait chuter le réseau, on envisage un démarrage réduit (étoile-triangle, démarreur, variateur).",
      "La pointe de courant est brève : les protections en tiennent compte (courbe, temporisation).",
    ],
    diagnostic: [
      "Vérifier si la méthode de démarrage est adaptée à la puissance du moteur.",
      "Observer les à-coups mécaniques et les chutes de tension au démarrage.",
      "Contrôler le comportement des protections au démarrage.",
    ],
    depannage: [
      "Envisager un démarrage réduit si la pointe de courant ou l'à-coup posent problème.",
      "Vérifier le réglage et la courbe des protections.",
      "Respecter la consignation pour tout contrôle nécessitant un accès.",
    ],
    securite: [
      "Un à-coup au démarrage peut être dangereux pour la mécanique et les personnes : on reste à distance.",
      "Les interventions se font après consignation et avec l'habilitation adaptée.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur assez puissant, démarré en direct, fait vaciller l'éclairage de l'atelier à chaque démarrage.",
      mission: ["Expliquer le phénomène.", "Proposer une solution.", "Indiquer un critère de choix."],
      correction:
        "Le vacillement de l'éclairage vient de la forte pointe de courant au démarrage direct, qui provoque une chute de tension momentanée sur le réseau. Une solution est d'adopter un démarrage à tension réduite (étoile-triangle, démarreur progressif ou variateur), qui limite la pointe de courant. Le choix dépend de la puissance du moteur, des contraintes du réseau et de la mécanique entraînée.",
    },
    memo: ["Pleine tension d'un coup", "Forte pointe de courant", "À-coup mécanique", "Plutôt petits moteurs"],
    resume:
      "Le démarrage direct est simple mais génère une forte pointe de courant et un à-coup ; on le réserve souvent aux moteurs de faible puissance.",
    quizIds: ["els116", "els117", "els118", "els119", "els120"],
    verification: {
      question: "Quel est l'inconvénient principal du démarrage direct ?",
      options: ["Il est très compliqué", "Il provoque une forte pointe de courant et un à-coup", "Il ne démarre jamais le moteur", "Il nécessite un variateur"],
      correct: 1,
      explanation: "Le démarrage direct applique la pleine tension d'un coup : la pointe de courant et l'à-coup mécanique sont ses principaux inconvénients, d'où son usage plutôt sur des petits moteurs.",
    },
    exercice: {
      enonce:
        "Expliquez pourquoi le démarrage direct est réservé plutôt aux moteurs de faible puissance, et ce qu'on peut faire pour les moteurs plus puissants.",
      consignes: [
        "Rappelle la caractéristique du démarrage direct.",
        "Explique la conséquence sur le réseau et la mécanique.",
        "Cite une alternative pour les gros moteurs.",
      ],
      criteres: [
        "J'ai indiqué la forte pointe de courant.",
        "J'ai relié cela aux à-coups et chutes de tension.",
        "J'ai cité un démarrage réduit (étoile-triangle, démarreur, variateur).",
      ],
      correction:
        "Le démarrage direct applique la pleine tension d'un coup, ce qui provoque une pointe de courant de plusieurs fois le courant nominal et un à-coup mécanique. Sur un gros moteur, cela peut faire chuter la tension du réseau et malmener la mécanique. Pour les moteurs plus puissants, on utilise un démarrage à tension réduite : étoile-triangle, démarreur progressif ou variateur de vitesse.",
    },
  },
  {
    id: "3-28",
    title: "Le démarrage étoile-triangle",
    durationMinutes: 30,
    objectifs: [
      "Expliquer le principe du démarrage étoile-triangle.",
      "Identifier ce qu'il apporte et ses conditions d'emploi.",
    ],
    simple:
      "Le démarrage étoile-triangle réduit la pointe de courant au démarrage. On démarre le moteur en couplage étoile (tension réduite sur chaque enroulement), puis, une fois lancé, on bascule en triangle pour le fonctionnement normal. Le passage est géré par des contacteurs et un temporisateur.",
    vocab: [
      ["Démarrage étoile-triangle", "Démarrage en deux temps : étoile pour démarrer, triangle pour la marche."],
      ["Phase étoile (démarrage)", "Chaque enroulement reçoit une tension réduite : courant et couple réduits (environ un tiers)."],
      ["Phase triangle (marche)", "Chaque enroulement reçoit la pleine tension composée : fonctionnement nominal."],
      ["Temporisation", "Réglage du temps passé en étoile avant le passage en triangle."],
      ["Contacteurs", "Trois contacteurs pilotent le couplage étoile puis triangle."],
    ],
    example:
      "Un moteur de pompe démarre en étoile : la pointe de courant est réduite à environ un tiers de celle d'un démarrage direct. Après quelques secondes (temporisation), le circuit bascule en triangle et le moteur atteint son régime normal.",
    schema: "star-delta-coupling",
    ascii: "1) ETOILE  → tension reduite → courant et couple ~1/3 (demarrage doux)\n2) (temporisation)\n3) TRIANGLE → pleine tension → marche normale",
    retenir: [
      "On démarre en étoile (tension réduite) puis on passe en triangle (marche normale).",
      "L'étoile réduit la pointe de courant à environ un tiers du démarrage direct.",
      "Le couple de démarrage est aussi réduit : le moteur doit pouvoir démarrer peu chargé.",
      "Le passage étoile → triangle est géré par des contacteurs et un temporisateur.",
    ],
    erreurs: [
      "Utiliser l'étoile-triangle sur un moteur qui doit démarrer en pleine charge (couple insuffisant).",
      "Régler une temporisation inadaptée (passage en triangle trop tôt ou trop tard).",
      "Oublier que le moteur doit être prévu pour fonctionner en triangle sur le réseau utilisé.",
    ],
    astucesPro: [
      "Un passage en triangle trop précoce recrée une pointe de courant : on règle la temporisation sur la montée en vitesse.",
      "L'étoile-triangle convient aux démarrages peu chargés (pompes, ventilateurs).",
    ],
    diagnostic: [
      "Vérifier la séquence étoile puis triangle et la temporisation.",
      "Contrôler les contacteurs impliqués dans le couplage.",
      "S'assurer que la charge permet un démarrage à couple réduit.",
    ],
    depannage: [
      "Ajuster la temporisation si le passage en triangle est mal placé.",
      "Contrôler les contacteurs de couplage, hors tension après consignation.",
      "Vérifier l'adéquation entre la charge et un démarrage à couple réduit.",
    ],
    securite: [
      "Les interventions sur le circuit de couplage se font hors tension, après consignation.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur démarré en étoile-triangle « peine » et n'atteint pas sa vitesse avant le passage en triangle.",
      mission: ["Formuler une hypothèse.", "Indiquer les vérifications.", "Préciser une condition d'emploi."],
      correction:
        "Le moteur peine probablement parce qu'il démarre trop chargé pour un couple d'étoile réduit, ou parce que la temporisation fait passer en triangle avant qu'il ait pris assez de vitesse. On vérifie la charge entraînée, le réglage de la temporisation et la séquence des contacteurs. Condition d'emploi : l'étoile-triangle convient surtout aux démarrages peu chargés, car le couple de démarrage y est réduit.",
    },
    memo: ["Étoile = démarrer", "Triangle = marche", "Courant ~1/3", "Couple réduit → charge faible"],
    resume:
      "Le démarrage étoile-triangle réduit la pointe de courant en démarrant à tension réduite, avant de passer en triangle ; il convient aux démarrages peu chargés.",
    quizIds: ["els121", "els122", "els123", "els124", "els125"],
    verification: {
      question: "Que permet principalement le démarrage étoile-triangle ?",
      options: ["Augmenter la pointe de courant", "Réduire la pointe de courant au démarrage", "Supprimer le rotor", "Inverser le sens"],
      correct: 1,
      explanation: "En démarrant en étoile (tension réduite), on réduit la pointe de courant à environ un tiers de celle d'un démarrage direct, avant de passer en triangle.",
    },
    exercice: {
      enonce:
        "Expliquez les deux temps d'un démarrage étoile-triangle et pourquoi le couple de démarrage y est réduit.",
      consignes: [
        "Décris la phase étoile.",
        "Décris la phase triangle.",
        "Explique la conséquence sur le couple.",
      ],
      criteres: [
        "J'ai décrit l'étoile comme phase de démarrage à tension réduite.",
        "J'ai décrit le triangle comme phase de marche à pleine tension.",
        "J'ai relié la tension réduite au couple réduit.",
      ],
      correction:
        "En phase étoile, chaque enroulement reçoit une tension réduite : la pointe de courant et le couple de démarrage sont réduits (environ un tiers). Après une temporisation, on passe en triangle : chaque enroulement reçoit la pleine tension composée et le moteur fonctionne normalement. Comme la tension d'étoile est réduite, le couple de démarrage l'est aussi, d'où l'emploi sur des démarrages peu chargés.",
    },
  },
  {
    id: "3-29",
    title: "Le sens de rotation et son inversion",
    durationMinutes: 26,
    objectifs: [
      "Expliquer comment inverser le sens de rotation d'un moteur triphasé.",
      "Comprendre le rôle de l'inverseur et de son verrouillage.",
    ],
    simple:
      "Le sens de rotation d'un moteur asynchrone dépend de l'ordre des phases. Pour l'inverser, il suffit de croiser deux des trois phases : le champ tournant change de sens, donc le moteur aussi. En pratique, on utilise un inverseur à deux contacteurs, avec un verrouillage pour éviter tout court-circuit.",
    vocab: [
      ["Sens de rotation", "Sens dans lequel tourne l'arbre du moteur."],
      ["Inversion", "Changement du sens de rotation, obtenu en croisant deux phases."],
      ["Inverseur", "Dispositif à deux contacteurs qui permet de choisir le sens de rotation."],
      ["Verrouillage", "Sécurité empêchant les deux contacteurs d'être fermés en même temps (risque de court-circuit)."],
      ["Ordre des phases", "Succession des phases (L1, L2, L3) qui détermine le sens du champ tournant."],
    ],
    example:
      "Sur un convoyeur réversible, deux contacteurs permettent de choisir le sens : l'un branche les phases dans l'ordre L1-L2-L3, l'autre croise deux phases (par exemple L2 et L3). Un verrouillage empêche les deux de se fermer ensemble.",
    schema: "asynchronous-motor",
    illustrations: ["rotation-direction"],
    ascii: "L1-L2-L3 → sens 1\ncroiser 2 phases (ex : L2 et L3) → sens 2\nverrouillage : jamais les 2 contacteurs fermes ensemble",
    retenir: [
      "Le sens de rotation dépend de l'ordre des phases.",
      "Croiser deux des trois phases inverse le sens de rotation.",
      "On ne croise que deux phases : croiser les trois ne changerait rien.",
      "Un verrouillage empêche les deux contacteurs de l'inverseur de se fermer ensemble.",
    ],
    erreurs: [
      "Croiser les trois phases en pensant inverser le sens : cela ne change pas le sens.",
      "Fermer les deux contacteurs de l'inverseur en même temps : court-circuit entre phases.",
      "Inverser le sens sous tension sans précaution.",
    ],
    astucesPro: [
      "Avant de brancher un moteur, on vérifie le sens de rotation attendu par la machine entraînée.",
      "Le verrouillage (mécanique et/ou électrique) est indispensable sur un inverseur.",
    ],
    diagnostic: [
      "Vérifier l'ordre des phases si le moteur tourne dans le mauvais sens.",
      "Contrôler le verrouillage de l'inverseur.",
      "S'assurer qu'aucun court-circuit n'est possible entre les deux contacteurs.",
    ],
    depannage: [
      "Croiser deux phases (hors tension, après consignation) pour corriger un sens inversé.",
      "Vérifier le câblage et le verrouillage de l'inverseur.",
      "Contrôler le sens après remise en service.",
    ],
    securite: [
      "Le changement de câblage des phases se fait hors tension, après consignation.",
      "Le verrouillage protège contre un court-circuit dangereux entre phases.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur entraîne une pompe dans le mauvais sens après un remplacement.",
      mission: ["Nommer la cause probable.", "Indiquer la correction.", "Préciser la précaution."],
      correction:
        "La cause probable est un ordre des phases inversé lors du rebranchement. La correction consiste à croiser deux des trois phases (par exemple L2 et L3) pour rétablir le bon sens. La manœuvre se fait hors tension, après consignation, puis on vérifie le sens de rotation à la remise en service. On ne croise que deux phases, jamais les trois.",
    },
    memo: ["Sens = ordre des phases", "Croiser 2 phases", "Pas les 3", "Inverseur verrouillé"],
    resume:
      "Inverser le sens de rotation d'un moteur triphasé se fait en croisant deux phases ; l'inverseur à deux contacteurs doit être verrouillé pour éviter tout court-circuit.",
    quizIds: ["els126", "els127", "els128", "els129", "els130"],
    verification: {
      question: "Comment inverse-t-on le sens de rotation d'un moteur triphasé ?",
      options: ["En croisant les trois phases", "En croisant deux des trois phases", "En coupant le neutre", "En changeant la fréquence uniquement"],
      correct: 1,
      explanation: "Croiser deux des trois phases inverse le sens du champ tournant, donc du moteur. Croiser les trois ne changerait rien.",
    },
    exercice: {
      enonce:
        "Expliquez comment inverser le sens d'un moteur triphasé et pourquoi un inverseur doit être verrouillé.",
      consignes: [
        "Décris la manœuvre d'inversion.",
        "Explique le rôle du verrouillage.",
        "Rappelle la précaution de sécurité.",
      ],
      criteres: [
        "J'ai indiqué qu'on croise deux phases.",
        "J'ai expliqué que le verrouillage évite un court-circuit entre contacteurs.",
        "J'ai rappelé le travail hors tension après consignation.",
      ],
      correction:
        "Pour inverser le sens, on croise deux des trois phases (par exemple L2 et L3) : le champ tournant, et donc le moteur, change de sens. Un inverseur utilise deux contacteurs (un par sens) ; le verrouillage empêche qu'ils soient fermés en même temps, ce qui créerait un court-circuit entre phases. Toute modification du câblage se fait hors tension, après consignation.",
    },
  },
  {
    id: "3-30",
    title: "Le variateur de vitesse",
    durationMinutes: 30,
    objectifs: [
      "Expliquer le principe d'un variateur de fréquence.",
      "Identifier les avantages de la variation de vitesse.",
    ],
    simple:
      "Le variateur de vitesse fait varier la vitesse d'un moteur asynchrone en modifiant la fréquence de son alimentation. Il transforme d'abord le courant alternatif du réseau en courant continu, puis le reconvertit en alternatif à la fréquence voulue. En changeant la fréquence, on change la vitesse.",
    vocab: [
      ["Variateur de fréquence", "Appareil qui règle la vitesse du moteur en modifiant la fréquence (et la tension)."],
      ["Fréquence", "Nombre de cycles par seconde (Hz) ; elle fixe la vitesse du champ tournant."],
      ["Redresseur", "Étage qui transforme l'alternatif du réseau en continu."],
      ["Onduleur", "Étage qui reconstruit un alternatif à la fréquence voulue."],
      ["Rampe", "Réglage du temps d'accélération et de décélération du moteur."],
    ],
    example:
      "Sur un convoyeur à vitesse réglable, un variateur alimente le moteur à une fréquence ajustable. En baissant la fréquence, la bande ralentit ; en l'augmentant, elle accélère. Le variateur gère aussi une accélération progressive (rampe), ce qui supprime l'à-coup de démarrage.",
    schema: "vfd-blockdiagram",
    ascii: "RESEAU (AC) → REDRESSEUR → BUS CONTINU (DC) → ONDULEUR → MOTEUR\n                                     frequence reglable → vitesse reglable",
    retenir: [
      "Le variateur règle la vitesse en modifiant la fréquence d'alimentation du moteur.",
      "Il redresse l'alternatif en continu, puis reconstruit un alternatif à la fréquence voulue.",
      "Il permet un démarrage progressif (rampe) sans pointe de courant ni à-coup.",
      "Il offre une vitesse réglable et souvent des économies d'énergie.",
    ],
    erreurs: [
      "Croire qu'un variateur ne sert qu'à démarrer : il règle la vitesse en continu.",
      "Négliger les réglages de rampes (accélération/décélération).",
      "Oublier que le variateur contient des composants pouvant rester sous tension après coupure.",
    ],
    astucesPro: [
      "Les rampes se règlent selon la mécanique : trop rapides, elles provoquent des à-coups ou des défauts.",
      "Un variateur permet souvent d'économiser de l'énergie sur les pompes et ventilateurs à charge variable.",
    ],
    diagnostic: [
      "Vérifier les paramètres du variateur (fréquence, rampes) face à un comportement anormal.",
      "Consulter les codes de défaut affichés par le variateur.",
      "Distinguer un défaut moteur d'un défaut de paramétrage.",
    ],
    depannage: [
      "Relever et interpréter le code de défaut du variateur.",
      "Vérifier les rampes et les limites de fréquence.",
      "Respecter les temps de décharge et la consignation avant d'intervenir.",
    ],
    securite: [
      "Un variateur peut conserver une tension dangereuse après coupure : on respecte les temps de décharge indiqués.",
      "Les interventions relèvent d'une personne habilitée, après consignation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un convoyeur piloté par variateur démarre par à-coups et déclenche parfois en défaut.",
      mission: ["Formuler une hypothèse de paramétrage.", "Indiquer les vérifications.", "Préciser la précaution avant intervention."],
      correction:
        "Les à-coups et déclenchements évoquent une rampe d'accélération trop rapide ou des paramètres inadaptés à la charge. On consulte le code de défaut du variateur, on vérifie les rampes et les limites de fréquence, et on ajuste selon la mécanique. Avant toute intervention interne, on respecte le temps de décharge du variateur et la consignation, car des tensions dangereuses peuvent persister après la coupure.",
    },
    memo: ["Variateur = fréquence → vitesse", "Redresseur + onduleur", "Rampes réglables", "Décharge avant intervention"],
    resume:
      "Le variateur de vitesse règle la vitesse d'un moteur en modifiant la fréquence ; il permet un démarrage progressif et une vitesse ajustable, mais impose des précautions de décharge.",
    quizIds: ["els131", "els132", "els133", "els134", "els135"],
    verification: {
      question: "Sur quoi agit principalement un variateur pour régler la vitesse d'un moteur asynchrone ?",
      options: ["Sur la couleur des câbles", "Sur la fréquence de l'alimentation", "Sur la mise à la terre", "Sur le nombre de phases"],
      correct: 1,
      explanation: "Le variateur modifie la fréquence (et la tension) d'alimentation du moteur : la fréquence fixe la vitesse du champ tournant, donc la vitesse du moteur.",
    },
    exercice: {
      enonce:
        "Expliquez le principe d'un variateur de fréquence et citez deux avantages par rapport à un démarrage direct.",
      consignes: [
        "Décris les étapes redresseur → continu → onduleur.",
        "Explique le lien fréquence-vitesse.",
        "Cite deux avantages.",
      ],
      criteres: [
        "J'ai décrit la conversion AC → DC → AC.",
        "J'ai relié la fréquence à la vitesse.",
        "J'ai cité deux avantages (démarrage progressif, vitesse réglable, économies).",
      ],
      correction:
        "Le variateur redresse l'alternatif du réseau en continu (bus continu), puis un onduleur reconstruit un alternatif à la fréquence voulue. Comme la fréquence fixe la vitesse du champ tournant, régler la fréquence règle la vitesse. Avantages par rapport au démarrage direct : démarrage progressif sans pointe de courant ni à-coup, vitesse réglable en continu, et souvent des économies d'énergie sur les charges variables.",
    },
  },
  {
    id: "3-31",
    title: "Synthèse moteurs et mise en situation",
    durationMinutes: 30,
    objectifs: [
      "Relier constitution, couplage, démarrage, sens et variation de vitesse d'un moteur.",
      "Conduire un diagnostic méthodique face à un moteur défaillant.",
    ],
    simple:
      "Ce chapitre rassemble le bloc : comprendre le moteur asynchrone, le coupler correctement, choisir son mode de démarrage, régler son sens et, si besoin, faire varier sa vitesse. Face à un problème moteur, on raisonne à partir de ces notions.",
    vocab: [
      ["Couplage", "Étoile ou triangle selon la tension du réseau (chapitre 3-26)."],
      ["Mode de démarrage", "Direct, étoile-triangle ou variateur, selon la puissance et la charge."],
      ["Sens de rotation", "Réglé par l'ordre des phases (chapitre 3-29)."],
      ["Variation de vitesse", "Assurée par un variateur de fréquence (chapitre 3-30)."],
      ["Diagnostic méthodique", "Recherche de panne fonction par fonction, du plus probable au moins probable."],
    ],
    example:
      "Un moteur chauffe et manque de puissance : on vérifie le couplage (3-26), la présence des trois phases (3-12), la charge entraînée, et éventuellement les paramètres du variateur (3-30), le tout après consignation quand un accès est nécessaire.",
    schema: "asynchronous-motor",
    ascii: "COMPRENDRE (3-25) → COUPLER (3-26) → DEMARRER (3-27/3-28) → SENS (3-29) → VITESSE (3-30)\ndiagnostic fonction par fonction, apres consignation, puis tracer",
    retenir: [
      "Un moteur se comprend par sa constitution, son couplage, son démarrage, son sens et sa vitesse.",
      "Un mauvais couplage ou une phase manquante expliquent beaucoup d'échauffements.",
      "Le mode de démarrage se choisit selon la puissance et la charge.",
      "La sécurité (consignation, VAT, habilitation) encadre toute l'intervention.",
    ],
    erreurs: [
      "Diagnostiquer un moteur sans vérifier le couplage ni les phases.",
      "Oublier la consignation avant les contrôles nécessitant un accès.",
      "Ne pas tracer les constats et les mesures.",
    ],
    astucesPro: [
      "On part du symptôme (chauffe, bruit, sens, vitesse) et on remonte aux causes probables dans l'ordre.",
      "La plaque signalétique et les valeurs mesurées sont les premières références.",
    ],
    diagnostic: [
      "Situer la fonction concernée (couplage, alimentation, démarrage, sens, vitesse).",
      "Contrôler l'élément correspondant, du plus probable au moins probable.",
      "Confirmer par la mesure avant de conclure.",
    ],
    depannage: [
      "Consigner avant tout contrôle nécessitant un accès aux parties actives.",
      "Corriger la cause (couplage, phase, charge, paramètre) avant remise en service.",
      "Remettre en service de façon maîtrisée et tracer l'intervention.",
    ],
    securite: [
      "Les règles de sécurité des blocs précédents restent valables sur un moteur.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique : elle prépare à la formation, elle ne la remplace pas.",
    ],
    etudeDeCas: {
      situation: "Un moteur neuf, fraîchement installé, chauffe très vite et manque de couple.",
      mission: ["Formuler l'hypothèse la plus probable.", "Décrire la vérification.", "Indiquer la conduite à tenir."],
      correction:
        "Sur un moteur fraîchement installé, une chauffe rapide avec manque de couple évoque en premier lieu une erreur de couplage (étoile/triangle inadapté à la tension du réseau) ou une phase manquante. On vérifie la plaque signalétique et la position des barrettes, puis la présence et l'équilibre des trois phases. Conduite à tenir : couper et consigner, ouvrir la boîte à bornes hors tension pour contrôler et corriger le couplage, vérifier les phases, puis contrôler avant remise en service et tracer l'intervention.",
    },
    memo: ["Comprendre → coupler → démarrer → sens → vitesse", "Couplage et phases d'abord", "Consigner puis tracer"],
    resume:
      "Diagnostiquer un moteur, c'est mobiliser sa constitution, son couplage, son démarrage, son sens et sa vitesse, en sécurité et avec traçabilité.",
    quizIds: ["els136", "els137", "els138", "els139", "els140"],
    verification: {
      question: "Sur un moteur neuf qui chauffe vite et manque de couple, que vérifie-t-on en priorité ?",
      options: ["La couleur du carter", "Le couplage (étoile/triangle) et la présence des phases", "La marque du variateur", "L'heure d'installation"],
      correct: 1,
      explanation: "Une chauffe rapide avec manque de couple sur un moteur récemment installé oriente d'abord vers une erreur de couplage ou une phase manquante.",
    },
    exercice: {
      enonce:
        "Décrivez la démarche pour diagnostiquer un moteur qui chauffe et manque de puissance, en citant les notions du bloc.",
      consignes: [
        "Donne les vérifications dans l'ordre.",
        "Relie chaque vérification à un chapitre (3-25 à 3-30).",
        "Rappelle la sécurité et la traçabilité.",
      ],
      criteres: [
        "Les vérifications sont ordonnées.",
        "Chaque vérification est reliée à une notion.",
        "J'ai rappelé la consignation et la traçabilité.",
      ],
      correction:
        "Vérifier le couplage étoile/triangle par rapport à la tension du réseau (3-26), la présence et l'équilibre des trois phases (3-12/3-25), la charge entraînée, le sens de rotation (3-29) et, si le moteur est piloté par variateur, ses paramètres (3-30). On distingue la cause (couplage, phase, charge, paramètre), on confirme par la mesure, le tout après consignation pour les contrôles nécessitant un accès. On corrige la cause, on remet en service de façon maîtrisée et on trace l'intervention.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 6 — LECTURE DE SCHÉMAS ÉLECTRIQUES INDUSTRIELS
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block6Lessons: Lesson[] = [
  {
    id: "3-32",
    title: "Lire un schéma électrique : à quoi ça sert",
    durationMinutes: 26,
    objectifs: [
      "Expliquer l'utilité d'un schéma électrique en maintenance.",
      "Citer les grands types de schémas et leur usage.",
    ],
    simple:
      "Un schéma électrique est le plan de l'installation. Il permet de comprendre comment les composants sont reliés, de retrouver un élément dans l'armoire et de suivre le chemin du courant, sans tout démonter. C'est un outil de diagnostic essentiel.",
    vocab: [
      ["Schéma électrique", "Représentation graphique des composants et de leurs liaisons."],
      ["Schéma unifilaire", "Vue simplifiée où plusieurs conducteurs sont représentés par une seule ligne."],
      ["Schéma développé", "Vue détaillée séparant clairement puissance et commande."],
      ["Légende", "Liste qui explique les symboles et repères utilisés dans le schéma."],
      ["Dossier électrique", "Ensemble des schémas et documents d'une installation."],
    ],
    example:
      "Face à une armoire complexe, le technicien ouvre d'abord le schéma : il y repère le départ concerné, suit le chemin du courant et identifie les composants à contrôler. Il gagne un temps précieux par rapport à une recherche « à l'aveugle ».",
    schema: "control-circuit",
    ascii: "SCHEMA = plan de l'installation\n→ comprendre les liaisons\n→ retrouver un composant\n→ suivre le chemin du courant",
    retenir: [
      "Le schéma est le plan de l'installation : il montre les composants et leurs liaisons.",
      "Il permet de localiser un composant et de suivre le chemin du courant sans tout démonter.",
      "Il existe plusieurs types de schémas (unifilaire, développé) selon le niveau de détail.",
      "Une légende accompagne toujours un schéma pour expliquer symboles et repères.",
    ],
    erreurs: [
      "Chercher une panne dans l'armoire sans consulter le schéma.",
      "Ignorer la légende et interpréter les symboles au hasard.",
      "Confondre les différents types de schémas et leur usage.",
    ],
    astucesPro: [
      "On commence toujours un diagnostic par la lecture du schéma et du repérage.",
      "Un dossier électrique à jour fait gagner un temps considérable en intervention.",
    ],
    diagnostic: [
      "Identifier le schéma correspondant à l'installation à dépanner.",
      "Repérer le départ ou le circuit concerné sur le schéma.",
      "Suivre le chemin du courant pour cibler les composants à contrôler.",
    ],
    depannage: [
      "Utiliser le schéma pour localiser précisément le composant suspect.",
      "Comparer le schéma à l'installation réelle.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Le schéma aide à intervenir en sécurité en identifiant les circuits avant d'agir.",
      "La lecture du schéma ne dispense pas de la consignation ni de l'habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un technicien débutant démonte plusieurs composants au hasard pour trouver une panne, sans succès.",
      mission: ["Identifier l'erreur de méthode.", "Proposer la bonne démarche.", "Indiquer l'outil à utiliser d'abord."],
      correction:
        "L'erreur est d'intervenir sans méthode, à l'aveugle, ce qui fait perdre du temps et augmente les risques. La bonne démarche consiste à ouvrir d'abord le schéma électrique, à repérer le circuit concerné et à suivre le chemin du courant pour cibler les composants à contrôler. Le schéma (et le repérage de l'armoire) est le premier outil à utiliser, avant tout démontage, et toujours après avoir sécurisé l'intervention.",
    },
    memo: ["Schéma = plan", "Localiser + suivre le courant", "Toujours une légende", "Lire avant de démonter"],
    resume:
      "Le schéma électrique est le plan qui permet de comprendre l'installation, de localiser les composants et de suivre le courant : c'est le point de départ d'un diagnostic méthodique.",
    quizIds: ["els141", "els142", "els143", "els144", "els145"],
    verification: {
      question: "Par quoi commence-t-on idéalement un diagnostic dans une armoire complexe ?",
      options: ["Par démonter au hasard", "Par lire le schéma et le repérage", "Par remplacer le moteur", "Par couper tout le site"],
      correct: 1,
      explanation: "On lit d'abord le schéma et le repérage pour localiser le circuit et suivre le courant, avant tout démontage et après sécurisation.",
    },
    exercice: {
      enonce:
        "Expliquez trois usages concrets d'un schéma électrique pour un technicien de maintenance.",
      consignes: [
        "Cite un usage lié à la compréhension de l'installation.",
        "Cite un usage lié à la localisation d'un composant.",
        "Cite un usage lié au diagnostic.",
      ],
      criteres: [
        "J'ai cité la compréhension des liaisons.",
        "J'ai cité la localisation d'un composant.",
        "J'ai cité le suivi du courant pour diagnostiquer.",
      ],
      correction:
        "Un schéma permet : (1) de comprendre comment les composants sont reliés entre eux, (2) de retrouver un composant précis dans l'armoire grâce au repérage, et (3) de suivre le chemin du courant pour cibler les éléments à contrôler lors d'un diagnostic. Il évite les démontages inutiles et fait gagner du temps.",
    },
  },
  {
    id: "3-33",
    title: "Symboles et repérage normalisés",
    durationMinutes: 30,
    objectifs: [
      "Reconnaître les principaux symboles et lettres-repères d'un schéma.",
      "Relier un repère du schéma au composant réel de l'armoire.",
    ],
    simple:
      "Sur un schéma, chaque composant est représenté par un symbole et désigné par une lettre-repère suivie d'un numéro (par exemple KM1). Ces repères sont normalisés : ils permettent de relier le schéma au composant réel, quelle que soit la langue.",
    vocab: [
      ["Symbole", "Dessin normalisé représentant un composant (contact, bobine, moteur…)."],
      ["Lettre-repère", "Lettre normalisée désignant la famille du composant (Q, KM, F, S, M…)."],
      ["Repère", "Lettre + numéro identifiant un composant précis (ex : KM1, F2)."],
      ["Bornier", "Ensemble des bornes où sont raccordés les conducteurs, souvent repérées."],
      ["Repérage des conducteurs", "Marquage des fils pour les identifier sur le schéma et dans l'armoire."],
    ],
    example:
      "Sur le schéma, « KM1 » désigne le contacteur principal, « Q1 » le disjoncteur, « F2 » le relais thermique et « S1 » le bouton marche. En retrouvant ces repères sur l'armoire, le technicien identifie chaque composant réel.",
    schema: "control-circuit",
    illustrations: ["symbol-decoder"],
    ascii: "Q = sectionnement/protection   KM = contacteur\nF = protection (fusible/thermique) S = commande (bouton)\nM = moteur   H = signalisation   T = transformateur   K = relais",
    retenir: [
      "Chaque composant a un symbole et une lettre-repère normalisés.",
      "Le repère (lettre + numéro) identifie un composant précis, par exemple KM1.",
      "Les repères se retrouvent à l'identique sur le schéma et sur l'armoire.",
      "Le repérage des conducteurs aide à suivre les liaisons.",
    ],
    erreurs: [
      "Confondre des repères proches (Q, KM, F…) sans se référer à la légende.",
      "Ignorer le repérage des bornes et des conducteurs.",
      "Croire que les repères changent d'une installation à l'autre sans logique.",
    ],
    astucesPro: [
      "On utilise la légende du schéma pour lever tout doute sur un repère.",
      "Le même repère sur le schéma et sur l'armoire relie directement plan et réalité.",
    ],
    diagnostic: [
      "Identifier le repère du composant suspect sur le schéma.",
      "Retrouver ce repère sur l'armoire pour localiser le composant réel.",
      "Suivre les conducteurs repérés pour vérifier les liaisons.",
    ],
    depannage: [
      "Se servir des repères pour aller directement au bon composant.",
      "Vérifier les raccordements au bornier repéré.",
      "Respecter la consignation avant tout contact.",
    ],
    securite: [
      "Un repérage clair réduit les erreurs et donc les risques.",
      "La lecture des repères ne dispense pas de la consignation ni de l'habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Le schéma indique un défaut probable sur « F2 », mais le technicien ne sait pas ce que c'est.",
      mission: ["Décoder le repère F2.", "Indiquer où le retrouver.", "Préciser la précaution avant contrôle."],
      correction:
        "Le repère « F » désigne une protection ; dans un départ moteur, « F2 » correspond typiquement au relais thermique. On le retrouve sur l'armoire grâce à son repère « F2 » identique à celui du schéma. Avant tout contrôle nécessitant un accès, on consigne l'installation et on vérifie l'absence de tension, dans le cadre de son habilitation. En cas de doute sur un repère, on se réfère à la légende du schéma.",
    },
    memo: ["Symbole + repère normalisés", "KM = contacteur, F = protection", "Même repère plan/armoire", "Légende en cas de doute"],
    resume:
      "Les symboles et lettres-repères normalisés relient le schéma au composant réel ; les connaître permet de localiser rapidement un élément dans l'armoire.",
    quizIds: ["els146", "els147", "els148", "els149", "els150"],
    verification: {
      question: "Sur un schéma, que désigne le plus souvent le repère « KM » ?",
      options: ["Un moteur", "Un contacteur", "Un fusible", "Un bouton"],
      correct: 1,
      explanation: "« KM » désigne un contacteur (ex : KM1). « M » désigne le moteur, « F » une protection, « S » un organe de commande.",
    },
    exercice: {
      enonce:
        "Décodez les repères suivants d'un départ moteur : Q1, KM1, F2, S1, M1.",
      consignes: [
        "Donne la famille de chaque repère.",
        "Précise le composant réel correspondant.",
        "Rappelle comment lever un doute sur un repère.",
      ],
      criteres: [
        "J'ai décodé chaque lettre-repère.",
        "J'ai associé chaque repère à un composant.",
        "J'ai cité la légende comme référence en cas de doute.",
      ],
      correction:
        "Q1 = sectionnement/protection (disjoncteur ou sectionneur), KM1 = contacteur principal, F2 = protection (relais thermique), S1 = organe de commande (bouton marche), M1 = moteur. En cas de doute sur un repère, on se réfère toujours à la légende du schéma, qui explique les symboles et repères utilisés.",
    },
  },
  {
    id: "3-34",
    title: "Schéma unifilaire et schéma développé",
    durationMinutes: 28,
    objectifs: [
      "Distinguer un schéma unifilaire d'un schéma développé.",
      "Choisir le type de schéma adapté au besoin.",
    ],
    simple:
      "Le schéma unifilaire donne une vue d'ensemble simplifiée : plusieurs conducteurs sont représentés par une seule ligne. Le schéma développé, lui, détaille précisément chaque liaison et sépare souvent la puissance et la commande. On passe de l'un à l'autre selon ce qu'on cherche.",
    vocab: [
      ["Schéma unifilaire", "Vue simplifiée : une ligne représente plusieurs conducteurs (ex : les 3 phases)."],
      ["Schéma développé", "Vue détaillée : chaque conducteur et contact est représenté séparément."],
      ["Circuit de puissance", "Partie qui alimente le moteur (fort courant)."],
      ["Circuit de commande", "Partie qui pilote la bobine (faible courant), souvent détaillée dans le développé."],
      ["Vue d'ensemble", "Représentation globale utile pour comprendre l'architecture."],
    ],
    example:
      "Pour comprendre l'architecture générale d'une installation, on utilise le schéma unifilaire. Pour dépanner précisément un circuit de commande (bouton, bobine, auto-maintien), on utilise le schéma développé, qui montre chaque contact.",
    schema: "schematic-comparison",
    ascii: "UNIFILAIRE : 1 ligne = plusieurs conducteurs → vue d'ensemble\nDEVELOPPE  : chaque fil/contact detaille → depannage precis\n(souvent puissance et commande separees)",
    retenir: [
      "Le schéma unifilaire simplifie : une ligne pour plusieurs conducteurs.",
      "Le schéma développé détaille chaque liaison et chaque contact.",
      "L'unifilaire sert à la vue d'ensemble ; le développé au dépannage précis.",
      "Le développé sépare souvent clairement puissance et commande.",
    ],
    erreurs: [
      "Vouloir dépanner un circuit de commande fin avec un simple unifilaire.",
      "Se perdre dans un développé sans avoir d'abord la vue d'ensemble.",
      "Confondre les deux représentations d'une même installation.",
    ],
    astucesPro: [
      "On part de l'unifilaire pour situer, puis on passe au développé pour le détail.",
      "Le développé est l'outil privilégié pour suivre pas à pas un circuit de commande.",
    ],
    diagnostic: [
      "Choisir l'unifilaire pour comprendre l'architecture générale.",
      "Passer au développé pour analyser un circuit précis.",
      "Faire le lien entre les deux vues d'une même installation.",
    ],
    depannage: [
      "Utiliser le développé pour suivre un circuit de commande contact par contact.",
      "Revenir à l'unifilaire pour resituer un circuit dans l'ensemble.",
      "Respecter la consignation avant tout contrôle nécessitant un accès.",
    ],
    securite: [
      "Bien lire le bon schéma évite les erreurs d'intervention.",
      "La lecture des schémas ne dispense pas de la consignation ni de l'habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un technicien doit comprendre pourquoi une bobine n'est pas alimentée, mais il n'a que le schéma unifilaire.",
      mission: ["Dire si l'unifilaire suffit.", "Indiquer le schéma adapté.", "Expliquer pourquoi."],
      correction:
        "L'unifilaire ne suffit pas ici : il donne la vue d'ensemble mais ne détaille pas le circuit de commande contact par contact. Le schéma adapté est le schéma développé, qui montre chaque contact du circuit de commande (bouton, auto-maintien, contact du relais thermique) et permet de suivre pas à pas pourquoi la bobine n'est pas alimentée. On utilise donc le développé pour ce type de diagnostic fin.",
    },
    memo: ["Unifilaire = vue d'ensemble", "Développé = détail", "Situer puis détailler", "Développé pour la commande"],
    resume:
      "L'unifilaire donne la vue d'ensemble, le développé le détail ; on combine les deux : situer avec l'unifilaire, dépanner avec le développé.",
    quizIds: ["els151", "els152", "els153", "els154", "els155"],
    verification: {
      question: "Quel schéma est le plus adapté pour dépanner précisément un circuit de commande ?",
      options: ["Le schéma unifilaire", "Le schéma développé", "Aucun", "La plaque signalétique"],
      correct: 1,
      explanation: "Le schéma développé détaille chaque contact du circuit de commande, ce qui permet de suivre pas à pas et de dépanner précisément.",
    },
    exercice: {
      enonce:
        "Expliquez la différence entre schéma unifilaire et schéma développé, et dites quand utiliser chacun.",
      consignes: [
        "Décris ce que simplifie l'unifilaire.",
        "Décris ce que détaille le développé.",
        "Indique l'usage de chacun.",
      ],
      criteres: [
        "J'ai indiqué que l'unifilaire représente plusieurs conducteurs par une ligne.",
        "J'ai indiqué que le développé détaille chaque liaison et contact.",
        "J'ai associé unifilaire = vue d'ensemble et développé = dépannage précis.",
      ],
      correction:
        "Le schéma unifilaire simplifie en représentant plusieurs conducteurs (par exemple les trois phases) par une seule ligne : il donne une vue d'ensemble de l'architecture. Le schéma développé détaille chaque conducteur et chaque contact, en séparant souvent puissance et commande : il sert au dépannage précis. On utilise l'unifilaire pour situer et comprendre l'ensemble, puis le développé pour analyser finement un circuit.",
    },
  },
  {
    id: "3-35",
    title: "Folios, renvois et organisation d'un dossier",
    durationMinutes: 26,
    objectifs: [
      "Se repérer dans un dossier de schémas grâce aux folios et aux renvois.",
      "Comprendre l'organisation d'un dossier électrique.",
    ],
    simple:
      "Un schéma d'installation tient rarement sur une seule page : il est découpé en folios (pages) numérotés. Des renvois permettent de suivre un fil ou un circuit d'une page à l'autre. Savoir naviguer dans ce dossier est indispensable pour ne pas se perdre.",
    vocab: [
      ["Folio", "Page numérotée d'un dossier de schémas."],
      ["Renvoi", "Indication qui pointe vers un autre folio où le circuit continue."],
      ["Dossier électrique", "Ensemble organisé des folios et documents d'une installation."],
      ["Bornier", "Ensemble de bornes repérées où sont raccordés les conducteurs entre folios ou équipements."],
      ["Cartouche", "Encadré du folio indiquant le repère de la page, l'installation, la date, etc."],
    ],
    example:
      "Un circuit de commande démarre sur le folio 3 et se poursuit sur le folio 5 : un renvoi indique « voir folio 5 ». En suivant ce renvoi, le technicien continue à lire le circuit sans se perdre dans le dossier.",
    schema: "power-distribution",
    ascii: "DOSSIER = folios numerotes (pages)\nRENVOI : « voir folio 5 » → suivre le circuit d'une page a l'autre\nCARTOUCHE : repere du folio, installation, date",
    retenir: [
      "Un dossier de schémas est découpé en folios (pages) numérotés.",
      "Les renvois permettent de suivre un circuit d'un folio à l'autre.",
      "Les borniers repérés relient les circuits entre folios et équipements.",
      "Le cartouche identifie chaque folio (repère, installation, date).",
    ],
    erreurs: [
      "Perdre le fil d'un circuit en ignorant les renvois entre folios.",
      "Confondre deux folios sans regarder leur cartouche.",
      "Négliger le repérage des borniers entre pages.",
    ],
    astucesPro: [
      "On note le folio et le repère de départ pour retrouver rapidement un circuit.",
      "Les renvois se lisent dans les deux sens : d'où vient et où va le circuit.",
    ],
    diagnostic: [
      "Identifier le folio contenant le circuit concerné.",
      "Suivre les renvois pour reconstituer le circuit complet.",
      "Utiliser les borniers repérés pour relier les folios entre eux.",
    ],
    depannage: [
      "Se repérer dans le dossier avant d'intervenir.",
      "Suivre le circuit de folio en folio grâce aux renvois.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Un dossier bien lu réduit les erreurs et donc les risques.",
      "La lecture du dossier ne dispense pas de la consignation ni de l'habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un circuit de commande semble s'interrompre en bas d'un folio, sans suite visible.",
      mission: ["Expliquer où continuer la lecture.", "Nommer l'élément à repérer.", "Indiquer la méthode."],
      correction:
        "Le circuit ne s'interrompt pas : il continue sur un autre folio. Il faut repérer le renvoi (par exemple « voir folio 5 ») en bas ou en marge du folio, puis poursuivre la lecture sur le folio indiqué. La méthode consiste à suivre systématiquement les renvois et le repérage des borniers pour reconstituer le circuit complet, sans se perdre dans le dossier.",
    },
    memo: ["Folio = page", "Renvoi = suite ailleurs", "Bornier relie les folios", "Cartouche identifie la page"],
    resume:
      "Un dossier électrique se lit en naviguant entre folios grâce aux renvois et aux borniers repérés ; le cartouche identifie chaque page.",
    quizIds: ["els156", "els157", "els158", "els159", "els160"],
    verification: {
      question: "À quoi sert un renvoi sur un schéma ?",
      options: ["À décorer la page", "À indiquer sur quel autre folio le circuit continue", "À couper le circuit", "À mesurer la tension"],
      correct: 1,
      explanation: "Un renvoi pointe vers l'autre folio où le circuit se poursuit, ce qui permet de le suivre d'une page à l'autre.",
    },
    exercice: {
      enonce:
        "Expliquez comment suivre un circuit qui s'étend sur plusieurs folios d'un dossier électrique.",
      consignes: [
        "Explique le rôle des folios.",
        "Explique le rôle des renvois.",
        "Cite l'élément qui relie les circuits entre folios.",
      ],
      criteres: [
        "J'ai défini le folio comme une page numérotée.",
        "J'ai expliqué que les renvois indiquent la suite du circuit.",
        "J'ai cité les borniers repérés.",
      ],
      correction:
        "Un dossier est découpé en folios (pages numérotées). Pour suivre un circuit qui s'étend sur plusieurs pages, on utilise les renvois, qui indiquent sur quel folio le circuit continue. Les borniers repérés relient physiquement les circuits d'un folio ou d'un équipement à l'autre. En suivant renvois et borniers, on reconstitue le circuit complet.",
    },
  },
  {
    id: "3-36",
    title: "Suivre un schéma pour localiser une panne",
    durationMinutes: 30,
    objectifs: [
      "Utiliser un schéma pour cibler l'origine d'une panne.",
      "Relier le symptôme au circuit concerné et aux points de contrôle.",
    ],
    simple:
      "Le schéma devient un outil de diagnostic quand on l'utilise pour suivre le chemin du courant à partir d'un symptôme. On repère le circuit concerné, on suit les contacts un à un, et on identifie les points où mesurer pour trouver où le courant s'arrête.",
    vocab: [
      ["Point de contrôle", "Endroit du circuit où l'on mesure pour vérifier la présence du signal ou de la tension."],
      ["Chemin du courant", "Trajet suivi par le courant à travers les composants d'un circuit."],
      ["Symptôme", "Manifestation de la panne (moteur qui ne démarre pas, voyant éteint…)."],
      ["Circuit concerné", "Partie du schéma correspondant au symptôme observé."],
      ["Contact", "Élément qui laisse passer ou coupe le courant (bouton, auxiliaire, relais)."],
    ],
    example:
      "Un moteur ne démarre pas : sur le schéma développé du circuit de commande, on suit le chemin depuis l'alimentation, à travers le bouton marche, le contact d'auto-maintien et le contact du relais thermique, jusqu'à la bobine. On mesure aux points de contrôle pour trouver où le courant s'interrompt.",
    schema: "control-circuit",
    ascii: "SYMPTOME → repérer le CIRCUIT concerne sur le schema\n→ suivre le CHEMIN du courant, contact par contact\n→ mesurer aux POINTS DE CONTROLE pour trouver l'interruption",
    retenir: [
      "On part du symptôme pour repérer le circuit concerné sur le schéma.",
      "On suit le chemin du courant contact par contact.",
      "On mesure aux points de contrôle pour localiser l'interruption.",
      "Le schéma développé est particulièrement adapté à cette recherche.",
    ],
    erreurs: [
      "Mesurer au hasard sans suivre le chemin du courant.",
      "Oublier un contact (auto-maintien, contact du relais thermique) dans le circuit.",
      "Intervenir sans consigner quand un accès est nécessaire.",
    ],
    astucesPro: [
      "On avance dans le sens du courant et on note le dernier point où il est présent et le premier où il disparaît.",
      "Un contact du relais thermique resté ouvert coupe la commande : on le vérifie tôt.",
    ],
    diagnostic: [
      "Traduire le symptôme en circuit concerné sur le schéma.",
      "Suivre le chemin du courant à travers chaque contact.",
      "Mesurer aux points de contrôle pour situer l'interruption.",
    ],
    depannage: [
      "Localiser le composant ou le contact défaillant à l'aide du schéma.",
      "Confirmer par la mesure avant de remplacer.",
      "Respecter la consignation pour les contrôles nécessitant un accès.",
    ],
    securite: [
      "Les mesures sous tension se font avec habilitation et matériel adaptés.",
      "Les contrôles hors tension imposent une consignation préalable.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur ne démarre pas ; le bouton marche fonctionne, mais la bobine n'est jamais alimentée.",
      mission: ["Décrire la lecture du schéma.", "Citer les contacts à suivre.", "Indiquer la précaution de mesure."],
      correction:
        "Sur le schéma développé du circuit de commande, on suit le chemin du courant depuis l'alimentation : bouton arrêt (fermé), bouton marche, contact d'auto-maintien, contact du relais thermique, jusqu'à la bobine. On vérifie chaque contact dans l'ordre en mesurant aux points de contrôle pour trouver où le courant s'arrête (par exemple un contact du relais thermique resté ouvert). Les mesures se font selon l'habilitation et les précautions adaptées ; les contrôles hors tension imposent une consignation.",
    },
    memo: ["Symptôme → circuit", "Suivre le courant", "Mesurer aux points de contrôle", "Développé = idéal"],
    resume:
      "Suivre un schéma pour localiser une panne, c'est traduire le symptôme en circuit, suivre le chemin du courant et mesurer aux points de contrôle pour trouver l'interruption.",
    quizIds: ["els161", "els162", "els163", "els164", "els165"],
    verification: {
      question: "Comment utilise-t-on un schéma pour localiser une panne ?",
      options: ["En mesurant au hasard", "En suivant le chemin du courant depuis le symptôme jusqu'à l'interruption", "En remplaçant tous les composants", "En ignorant les contacts"],
      correct: 1,
      explanation: "On part du symptôme, on repère le circuit, on suit le chemin du courant contact par contact et on mesure aux points de contrôle pour situer l'interruption.",
    },
    exercice: {
      enonce:
        "Décrivez la méthode pour localiser, à l'aide d'un schéma, la panne d'un moteur qui ne démarre pas.",
      consignes: [
        "Explique comment repérer le circuit concerné.",
        "Décris le suivi du chemin du courant.",
        "Indique où et comment mesurer.",
      ],
      criteres: [
        "J'ai relié le symptôme au circuit de commande.",
        "J'ai décrit le suivi des contacts dans le sens du courant.",
        "J'ai indiqué la mesure aux points de contrôle, en sécurité.",
      ],
      correction:
        "On traduit le symptôme (moteur qui ne démarre pas) en circuit concerné (le circuit de commande) sur le schéma développé. On suit ensuite le chemin du courant contact par contact : bouton arrêt, bouton marche, auto-maintien, contact du relais thermique, jusqu'à la bobine. On mesure aux points de contrôle pour repérer où le courant s'interrompt, en respectant l'habilitation pour les mesures sous tension et la consignation pour les contrôles hors tension.",
    },
  },
  {
    id: "3-37",
    title: "Synthèse lecture de schémas et mise en situation",
    durationMinutes: 28,
    objectifs: [
      "Mobiliser symboles, repères, folios et types de schémas dans une lecture complète.",
      "Conduire un diagnostic en s'appuyant sur le schéma.",
    ],
    simple:
      "Ce chapitre rassemble le bloc : comprendre l'utilité d'un schéma, lire ses symboles et repères, distinguer unifilaire et développé, naviguer entre folios et suivre le courant pour localiser une panne. Le schéma devient un véritable outil de diagnostic.",
    vocab: [
      ["Repère", "Lettre + numéro identifiant un composant (chapitre 3-33)."],
      ["Unifilaire / développé", "Vue d'ensemble / vue détaillée (chapitre 3-34)."],
      ["Folio et renvoi", "Page du dossier et lien vers la suite du circuit (chapitre 3-35)."],
      ["Point de contrôle", "Endroit où mesurer pour localiser une interruption (chapitre 3-36)."],
      ["Diagnostic", "Recherche méthodique de la cause d'une panne."],
    ],
    example:
      "Face à une panne, on situe le circuit sur l'unifilaire, on passe au développé pour le détail, on décode les repères (KM1, F2…), on suit les renvois entre folios et on mesure aux points de contrôle pour trouver l'origine, le tout après consignation.",
    schema: "schematic-comparison",
    ascii: "COMPRENDRE (3-32) → REPERES (3-33) → UNIFILAIRE/DEVELOPPE (3-34)\n→ FOLIOS/RENVOIS (3-35) → SUIVRE LE COURANT (3-36) → localiser la panne",
    retenir: [
      "Le schéma est un outil de diagnostic à part entière.",
      "On combine décodage des repères, bon type de schéma et navigation entre folios.",
      "On suit le chemin du courant et on mesure aux points de contrôle.",
      "La sécurité (consignation, VAT, habilitation) encadre toute l'intervention.",
    ],
    erreurs: [
      "Lire un schéma sans en décoder la légende et les repères.",
      "Rester sur l'unifilaire pour un diagnostic fin de commande.",
      "Oublier la consignation avant les contrôles nécessitant un accès.",
    ],
    astucesPro: [
      "On situe d'abord avec l'unifilaire, puis on détaille avec le développé.",
      "On note les repères et les points mesurés pour tracer le diagnostic.",
    ],
    diagnostic: [
      "Situer le circuit sur l'unifilaire, puis détailler sur le développé.",
      "Décoder les repères pour relier schéma et armoire.",
      "Suivre les folios et le chemin du courant jusqu'à l'interruption.",
    ],
    depannage: [
      "Localiser le composant défaillant à l'aide du schéma et des repères.",
      "Confirmer par la mesure avant de remplacer.",
      "Consigner, corriger la cause, remettre en service et tracer.",
    ],
    securite: [
      "Les règles de sécurité des blocs précédents restent valables lors de la lecture et du diagnostic.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique : elle prépare à la formation, elle ne la remplace pas.",
    ],
    etudeDeCas: {
      situation: "Une machine est en panne ; on dispose du dossier de schémas complet.",
      mission: ["Décrire la démarche de lecture.", "Citer les notions du bloc mobilisées.", "Indiquer ce que l'on trace."],
      correction:
        "Démarche : situer le circuit concerné sur l'unifilaire (3-34), passer au développé pour le détail, décoder les repères pour relier schéma et armoire (3-33), suivre les renvois entre folios (3-35), puis suivre le chemin du courant et mesurer aux points de contrôle pour localiser l'interruption (3-36), le tout après consignation. On corrige la cause, on remet en service de façon maîtrisée et on trace le diagnostic (repères contrôlés, mesures, action). Le schéma est le fil conducteur de toute la recherche.",
    },
    memo: ["Comprendre → repères → type → folios → courant", "Situer puis détailler", "Consigner puis tracer"],
    resume:
      "Lire un schéma pour diagnostiquer, c'est combiner décodage des repères, choix du bon schéma, navigation entre folios et suivi du courant, en sécurité et avec traçabilité.",
    quizIds: ["els166", "els167", "els168", "els169", "els170"],
    verification: {
      question: "Dans un diagnostic appuyé sur le schéma, par quelle vue commence-t-on souvent ?",
      options: ["Le développé, tout de suite", "L'unifilaire pour situer, puis le développé pour détailler", "La plaque signalétique", "Le carnet de commandes"],
      correct: 1,
      explanation: "On situe d'abord le circuit avec l'unifilaire (vue d'ensemble), puis on passe au développé pour l'analyse fine.",
    },
    exercice: {
      enonce:
        "Décrivez, dans l'ordre, comment utiliser un dossier de schémas pour diagnostiquer une machine en panne, en citant les notions du bloc.",
      consignes: [
        "Donne les étapes de la lecture, de la vue d'ensemble à la mesure.",
        "Relie chaque étape à un chapitre (3-32 à 3-36).",
        "Rappelle la sécurité et la traçabilité.",
      ],
      criteres: [
        "Les étapes sont ordonnées et complètes.",
        "Chaque étape est reliée à une notion.",
        "J'ai rappelé la consignation et la traçabilité.",
      ],
      correction:
        "Comprendre le rôle du schéma (3-32), situer le circuit sur l'unifilaire puis détailler sur le développé (3-34), décoder les repères pour relier schéma et armoire (3-33), suivre les renvois entre folios (3-35), puis suivre le chemin du courant et mesurer aux points de contrôle pour localiser l'interruption (3-36). Le tout après consignation ; on corrige la cause, on remet en service de façon maîtrisée et on trace le diagnostic.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 7 — MÉTHODE DE DIAGNOSTIC ÉLECTRIQUE ET SYNTHÈSE
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block7Lessons: Lesson[] = [
  {
    id: "3-38",
    title: "La démarche de diagnostic structurée",
    durationMinutes: 30,
    objectifs: [
      "Décrire les étapes d'une démarche de diagnostic structurée.",
      "Comprendre pourquoi la méthode fait gagner du temps et de la sécurité.",
    ],
    simple:
      "Diagnostiquer une panne au hasard fait perdre du temps et augmente les risques. Une démarche structurée suit toujours les mêmes étapes : constater, sécuriser, analyser, localiser, réparer, contrôler et tracer. Cette méthode est la même quel que soit l'équipement.",
    vocab: [
      ["Diagnostic", "Recherche méthodique de la cause d'une panne."],
      ["Constater", "Décrire précisément le symptôme et les conditions d'apparition."],
      ["Localiser", "Réduire la recherche jusqu'à l'élément défaillant."],
      ["Contrôler", "Vérifier que la réparation a résolu le problème sans en créer un autre."],
      ["Tracer", "Consigner par écrit le constat, les mesures et l'action réalisée."],
    ],
    example:
      "Face à un moteur qui ne démarre pas, le technicien ne démonte pas au hasard : il constate le symptôme, sécurise (consignation), analyse le circuit sur le schéma, localise l'élément en cause, répare, contrôle le bon fonctionnement, puis trace l'intervention.",
    schema: "diagnostic-flow",
    ascii: "CONSTATER → SECURISER → ANALYSER → LOCALISER → REPARER → CONTROLER → TRACER\n  symptome   consignation  hypotheses  element    action   verifier   compte rendu",
    retenir: [
      "La démarche : constater, sécuriser, analyser, localiser, réparer, contrôler, tracer.",
      "La sécurité (consignation) intervient très tôt, avant tout contact.",
      "On localise en réduisant progressivement la zone de recherche.",
      "On termine toujours par un contrôle et une trace écrite.",
    ],
    erreurs: [
      "Se précipiter sur une réparation sans avoir constaté ni analysé.",
      "Oublier de sécuriser avant d'intervenir.",
      "Ne pas contrôler le résultat ni tracer l'intervention.",
    ],
    astucesPro: [
      "Une méthode suivie systématiquement évite d'oublier une étape sous la pression.",
      "La trace écrite fait gagner du temps lors de la prochaine panne similaire.",
    ],
    diagnostic: [
      "Constater précisément le symptôme et les conditions.",
      "Analyser à l'aide du schéma pour formuler des hypothèses.",
      "Localiser l'élément défaillant en réduisant la zone de recherche.",
    ],
    depannage: [
      "Sécuriser avant tout contrôle nécessitant un accès.",
      "Réparer la cause, pas seulement le symptôme.",
      "Contrôler le bon fonctionnement puis tracer l'intervention.",
    ],
    securite: [
      "La sécurisation (consignation, VAT) fait partie intégrante de la démarche.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un technicien répare une panne, mais ne vérifie pas le résultat et ne note rien ; la panne réapparaît le lendemain.",
      mission: ["Identifier les étapes négligées.", "Expliquer les conséquences.", "Rappeler la démarche complète."],
      correction:
        "Les étapes négligées sont le contrôle du résultat et la traçabilité. Conséquences : rien ne garantit que la cause a été traitée (peut-être seulement le symptôme), et l'absence de trace empêche de capitaliser sur l'intervention. La démarche complète est : constater, sécuriser, analyser, localiser, réparer, contrôler puis tracer. Le contrôle vérifie que la panne est réellement résolue ; la trace documente le constat, les mesures et l'action.",
    },
    memo: ["Constater → Sécuriser → Analyser → Localiser → Réparer → Contrôler → Tracer", "Sécuriser tôt", "Contrôler et tracer à la fin"],
    resume:
      "Une démarche de diagnostic structurée suit des étapes fixes — constater, sécuriser, analyser, localiser, réparer, contrôler, tracer — pour gagner du temps et de la sécurité.",
    quizIds: ["els171", "els172", "els173", "els174", "els175"],
    verification: {
      question: "À quel moment intervient la sécurisation (consignation) dans la démarche de diagnostic ?",
      options: ["À la toute fin", "Très tôt, avant tout contact avec les parties actives", "Jamais", "Uniquement si la panne est grave"],
      correct: 1,
      explanation: "La sécurisation intervient très tôt : dès qu'un contact avec des parties pouvant être sous tension est nécessaire, on consigne et on vérifie l'absence de tension.",
    },
    exercice: {
      enonce:
        "Énoncez, dans l'ordre, les étapes d'une démarche de diagnostic structurée et expliquez le rôle de chacune.",
      consignes: [
        "Donne les étapes dans l'ordre.",
        "Explique brièvement chaque étape.",
        "Insiste sur la place de la sécurité et de la traçabilité.",
      ],
      criteres: [
        "L'ordre constater → sécuriser → analyser → localiser → réparer → contrôler → tracer est respecté.",
        "Chaque étape a un rôle expliqué.",
        "J'ai souligné la sécurité tôt et la trace à la fin.",
      ],
      correction:
        "Constater (décrire le symptôme), sécuriser (consigner avant tout contact), analyser (formuler des hypothèses à l'aide du schéma), localiser (réduire la zone jusqu'à l'élément défaillant), réparer (traiter la cause), contrôler (vérifier que la panne est résolue sans effet secondaire) et tracer (consigner constat, mesures et action). La sécurité intervient tôt et la traçabilité clôt l'intervention.",
    },
  },
  {
    id: "3-39",
    title: "Du symptôme aux hypothèses",
    durationMinutes: 28,
    objectifs: [
      "Recueillir les informations utiles à partir d'un symptôme.",
      "Formuler des hypothèses sans conclure trop vite.",
    ],
    simple:
      "Un bon diagnostic commence par bien comprendre le symptôme : ce qui se passe, depuis quand, dans quelles conditions. À partir de ces informations et de l'historique, on formule plusieurs hypothèses, qu'on vérifiera ensuite. On évite de conclure sur la première idée.",
    vocab: [
      ["Symptôme", "Ce que l'on observe : moteur qui ne démarre pas, bruit, odeur, arrêt intempestif…"],
      ["Historique", "Ce qui s'est passé avant : interventions récentes, pannes précédentes."],
      ["Hypothèse", "Cause possible, à confirmer ou infirmer par un contrôle."],
      ["Observation", "Recueil des indices sans démonter, depuis une zone sûre."],
      ["Recueil d'informations", "Questions à l'opérateur, lecture des consignes et de l'historique."],
    ],
    example:
      "Un moteur s'arrête après quelques minutes : on demande à l'opérateur depuis quand, si c'est régulier, s'il y a eu une intervention récente. Avec l'historique (déclenchements répétés du relais thermique), on formule l'hypothèse d'une surcharge, à confirmer par la mesure.",
    schema: "control-circuit",
    ascii: "SYMPTOME + CONDITIONS + HISTORIQUE → plusieurs HYPOTHESES\n→ a confirmer par des controles (ne pas conclure trop vite)",
    retenir: [
      "On décrit précisément le symptôme et ses conditions d'apparition.",
      "L'historique et les questions à l'opérateur orientent la recherche.",
      "On formule plusieurs hypothèses avant de vérifier.",
      "On ne conclut pas sur la première idée : une hypothèse se confirme.",
    ],
    erreurs: [
      "Conclure immédiatement sans recueillir d'informations.",
      "Négliger l'historique et les interventions récentes.",
      "Ne retenir qu'une seule hypothèse et s'y enfermer.",
    ],
    astucesPro: [
      "Les questions à l'opérateur (depuis quand, dans quelles conditions) font gagner un temps précieux.",
      "Un symptôme intermittent demande de recueillir les conditions exactes d'apparition.",
    ],
    diagnostic: [
      "Décrire le symptôme et ses conditions.",
      "Consulter l'historique et interroger l'opérateur.",
      "Lister plusieurs hypothèses hiérarchisées par probabilité.",
    ],
    depannage: [
      "Vérifier les hypothèses de la plus probable à la moins probable.",
      "Observer d'abord depuis une zone sûre avant tout accès.",
      "Consigner avant les contrôles nécessitant un contact.",
    ],
    securite: [
      "L'observation en fonctionnement se fait à distance, carters fermés.",
      "Tout contrôle nécessitant un accès impose une consignation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un opérateur signale « la machine s'arrête toute seule », sans autre précision.",
      mission: ["Citer trois questions utiles.", "Expliquer l'intérêt de l'historique.", "Formuler deux hypothèses."],
      correction:
        "Trois questions utiles : depuis quand cela arrive-t-il ? Est-ce régulier ou aléatoire ? Y a-t-il eu une intervention ou un changement récent ? L'historique aide à repérer une cause récurrente (déclenchements répétés, réparation récente). Deux hypothèses possibles : une surcharge qui fait déclencher le relais thermique, ou un défaut de commande intermittent. Ces hypothèses seront confirmées par des contrôles, sans conclure trop vite.",
    },
    memo: ["Symptôme + conditions + historique", "Plusieurs hypothèses", "Confirmer avant de conclure"],
    resume:
      "Passer du symptôme aux hypothèses, c'est recueillir les informations et l'historique, puis lister plusieurs causes possibles à vérifier, sans conclure trop vite.",
    quizIds: ["els176", "els177", "els178", "els179", "els180"],
    verification: {
      question: "Après avoir recueilli le symptôme et l'historique, que fait-on ?",
      options: ["On conclut immédiatement", "On formule plusieurs hypothèses à vérifier", "On remplace le moteur", "On ignore l'historique"],
      correct: 1,
      explanation: "On formule plusieurs hypothèses hiérarchisées, que l'on confirmera ou infirmera par des contrôles, plutôt que de conclure sur la première idée.",
    },
    exercice: {
      enonce:
        "Expliquez pourquoi il ne faut pas conclure sur la première hypothèse, et comment bien recueillir les informations d'un symptôme.",
      consignes: [
        "Explique le risque de conclure trop vite.",
        "Cite les sources d'information utiles.",
        "Indique comment formuler les hypothèses.",
      ],
      criteres: [
        "J'ai expliqué le risque de se tromper de cause.",
        "J'ai cité l'opérateur et l'historique.",
        "J'ai indiqué de lister plusieurs hypothèses hiérarchisées.",
      ],
      correction:
        "Conclure sur la première hypothèse risque de traiter le mauvais élément et de laisser la vraie cause en place. Pour bien recueillir les informations, on interroge l'opérateur (depuis quand, dans quelles conditions), on consulte l'historique et on observe depuis une zone sûre. On formule alors plusieurs hypothèses, hiérarchisées par probabilité, que l'on vérifie ensuite une à une.",
    },
  },
  {
    id: "3-40",
    title: "L'organigramme de recherche de panne",
    durationMinutes: 30,
    objectifs: [
      "Utiliser un organigramme (arbre de décision) pour rechercher une panne.",
      "Enchaîner des tests « oui / non » pour converger vers la cause.",
    ],
    simple:
      "Un organigramme de recherche de panne est un arbre de décision : à chaque étape, on fait un test simple dont la réponse (oui ou non) oriente vers l'étape suivante. En suivant les branches, on réduit progressivement les possibilités jusqu'à la cause.",
    vocab: [
      ["Organigramme", "Schéma logique enchaînant des tests et des décisions."],
      ["Arbre de décision", "Enchaînement de questions oui/non menant à une conclusion."],
      ["Test", "Contrôle simple dont le résultat oriente la suite (ex : la bobine est-elle alimentée ?)."],
      ["Branche", "Chemin suivi selon la réponse à un test."],
      ["Convergence", "Réduction progressive des possibilités jusqu'à la cause."],
    ],
    example:
      "Pour un moteur qui ne démarre pas : « Une protection a-t-elle déclenché ? » Si oui, on regarde laquelle ; si non, « la bobine est-elle alimentée ? », et ainsi de suite. Chaque réponse élimine des possibilités et guide vers la cause.",
    schema: "diagnostic-flow",
    illustrations: ["diagnostic-tree"],
    ascii: "TEST 1 (oui/non) → TEST 2 (oui/non) → ... → CAUSE\nchaque reponse elimine des possibilites et oriente la branche suivante",
    retenir: [
      "L'organigramme enchaîne des tests simples oui/non.",
      "Chaque réponse oriente vers la branche suivante.",
      "On converge progressivement vers la cause en éliminant des possibilités.",
      "La méthode reste valable après consignation et dans les limites de l'habilitation.",
    ],
    erreurs: [
      "Sauter des tests ou en inverser l'ordre logique.",
      "Interpréter un test sans mesure fiable.",
      "Suivre l'organigramme sans respecter la sécurité.",
    ],
    astucesPro: [
      "Un bon organigramme part des tests les plus simples et les plus discriminants.",
      "On note le résultat de chaque test pour ne pas repartir de zéro.",
    ],
    diagnostic: [
      "Choisir le premier test le plus discriminant.",
      "Suivre la branche correspondant au résultat.",
      "Continuer jusqu'à converger vers la cause.",
    ],
    depannage: [
      "Confirmer chaque test par une mesure fiable.",
      "Respecter la consignation pour les tests nécessitant un accès.",
      "Corriger la cause identifiée, puis contrôler.",
    ],
    securite: [
      "Suivre un organigramme ne dispense pas de sécuriser avant tout contact.",
      "Les mesures sous tension se font avec l'habilitation adaptée.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur ne démarre pas ; on dispose d'un organigramme de recherche de panne.",
      mission: ["Donner un premier test pertinent.", "Expliquer comment la réponse oriente la suite.", "Rappeler la précaution."],
      correction:
        "Un premier test pertinent et discriminant est : « Une protection a-t-elle déclenché ? ». Si oui, on identifie laquelle (relais thermique, disjoncteur, différentiel) pour orienter vers une surcharge, un court-circuit ou une fuite. Si non, on teste la commande : « la bobine est-elle alimentée ? », ce qui sépare un défaut de commande d'un défaut de puissance. Chaque réponse élimine des possibilités. Les tests nécessitant un accès se font après consignation, avec l'habilitation adaptée.",
    },
    memo: ["Tests oui/non", "Suivre les branches", "Éliminer et converger", "Sécuriser avant de tester"],
    resume:
      "L'organigramme de recherche de panne enchaîne des tests oui/non qui, branche après branche, réduisent les possibilités jusqu'à la cause.",
    quizIds: ["els181", "els182", "els183", "els184", "els185"],
    verification: {
      question: "Comment fonctionne un organigramme de recherche de panne ?",
      options: ["On remplace les composants au hasard", "On enchaîne des tests oui/non qui orientent vers la cause", "On lit la plaque signalétique seulement", "On attend que la panne disparaisse"],
      correct: 1,
      explanation: "L'organigramme enchaîne des tests simples dont la réponse (oui/non) oriente la branche suivante, jusqu'à converger vers la cause.",
    },
    exercice: {
      enonce:
        "Construisez le début d'un organigramme pour un moteur qui ne démarre pas (au moins deux tests successifs).",
      consignes: [
        "Donne un premier test discriminant.",
        "Indique les deux branches (oui / non).",
        "Propose un deuxième test pour l'une des branches.",
      ],
      criteres: [
        "Le premier test est pertinent et discriminant.",
        "Les deux branches sont précisées.",
        "Un deuxième test logique est proposé.",
      ],
      correction:
        "Test 1 : « Une protection a-t-elle déclenché ? ». Branche « oui » → identifier la protection (relais thermique = surcharge, disjoncteur = surintensité, différentiel = fuite). Branche « non » → Test 2 : « La bobine du contacteur est-elle alimentée quand on commande la marche ? ». Si oui, on oriente vers un défaut de puissance ; si non, vers un défaut du circuit de commande. Chaque test se fait en sécurité, après consignation si un accès est nécessaire.",
    },
  },
  {
    id: "3-41",
    title: "Mesures et tests de confirmation",
    durationMinutes: 28,
    objectifs: [
      "Choisir la mesure adaptée pour confirmer ou infirmer une hypothèse.",
      "Interpréter un résultat en le comparant à une valeur attendue.",
    ],
    simple:
      "Une hypothèse ne devient une certitude qu'après vérification. La mesure sert à confirmer ou infirmer : on choisit la bonne grandeur à mesurer (tension, intensité, continuité), on réalise la mesure en sécurité, puis on compare le résultat à ce qu'on attend.",
    vocab: [
      ["Mesure de confirmation", "Mesure réalisée pour vérifier une hypothèse précise."],
      ["Valeur attendue", "Valeur normale à laquelle on compare la mesure (plaque, référence, calcul)."],
      ["Continuité", "Test qui vérifie qu'un circuit n'est pas coupé (hors tension)."],
      ["Présence de tension", "Mesure qui vérifie qu'un point est alimenté (sous tension, avec précautions)."],
      ["Interprétation", "Conclusion tirée de la comparaison entre mesure et valeur attendue."],
    ],
    example:
      "Hypothèse : le contact du relais thermique est ouvert. On mesure la continuité de ce contact hors tension : s'il est ouvert alors qu'il devrait être fermé, l'hypothèse est confirmée. On compare toujours le résultat à ce qui est attendu.",
    schema: "measurement-safety",
    ascii: "HYPOTHESE → choisir la mesure adaptee (tension / intensite / continuite)\n→ mesurer EN SECURITE → comparer a la VALEUR ATTENDUE → confirmer / infirmer",
    retenir: [
      "La mesure confirme ou infirme une hypothèse précise.",
      "On choisit la grandeur adaptée : tension, intensité ou continuité.",
      "Continuité et résistance se mesurent hors tension ; présence de tension sous tension avec précautions.",
      "On interprète en comparant à une valeur attendue, pas dans l'absolu.",
    ],
    erreurs: [
      "Mesurer sans hypothèse claire : on ne sait pas quoi conclure.",
      "Mesurer une continuité sous tension (danger et appareil endommagé).",
      "Interpréter une mesure sans valeur de référence.",
    ],
    astucesPro: [
      "On formule d'abord l'hypothèse, puis on choisit la mesure qui la teste directement.",
      "La plaque signalétique et les valeurs de référence servent de comparaison.",
    ],
    diagnostic: [
      "Traduire l'hypothèse en mesure à réaliser.",
      "Choisir la grandeur et l'appareil adaptés.",
      "Comparer le résultat à la valeur attendue pour conclure.",
    ],
    depannage: [
      "Confirmer la cause par la mesure avant de remplacer.",
      "Réaliser les mesures hors tension après consignation quand c'est requis.",
      "Documenter les valeurs mesurées.",
    ],
    securite: [
      "Les mesures de continuité et de résistance se font hors tension, après consignation.",
      "Les mesures sous tension se font avec l'habilitation et le matériel adaptés.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "On suppose qu'une phase est manquante sur un moteur qui vibre et manque de puissance.",
      mission: ["Choisir la mesure de confirmation.", "Indiquer l'état du circuit pour la mesure.", "Expliquer l'interprétation."],
      correction:
        "Pour confirmer une phase manquante, on mesure l'intensité sur chacune des trois phases à la pince ampèremétrique (mesure sous tension, avec habilitation et précautions) : une phase à courant nul ou très différent des deux autres confirme l'hypothèse. On peut aussi contrôler la présence de tension sur chaque phase. On interprète en comparant les trois phases entre elles et à la valeur attendue ; toute mesure hors tension (continuité d'un enroulement) impose une consignation préalable.",
    },
    memo: ["Hypothèse → mesure ciblée", "Bonne grandeur, en sécurité", "Comparer à l'attendu", "Confirmer avant de remplacer"],
    resume:
      "La mesure de confirmation teste une hypothèse précise : on choisit la bonne grandeur, on mesure en sécurité et on compare à une valeur attendue pour conclure.",
    quizIds: ["els186", "els187", "els188", "els189", "els190"],
    verification: {
      question: "À quoi sert une mesure de confirmation dans un diagnostic ?",
      options: ["À décorer le rapport", "À confirmer ou infirmer une hypothèse précise", "À remplacer la consignation", "À augmenter la tension"],
      correct: 1,
      explanation: "La mesure de confirmation teste une hypothèse : on compare le résultat à la valeur attendue pour la confirmer ou l'infirmer.",
    },
    exercice: {
      enonce:
        "Expliquez comment choisir et interpréter une mesure pour confirmer une hypothèse de panne.",
      consignes: [
        "Explique le lien entre hypothèse et grandeur à mesurer.",
        "Rappelle la sécurité selon le type de mesure.",
        "Explique l'interprétation par comparaison.",
      ],
      criteres: [
        "J'ai relié l'hypothèse à une mesure ciblée.",
        "J'ai distingué mesures sous tension et hors tension.",
        "J'ai expliqué la comparaison à une valeur attendue.",
      ],
      correction:
        "On part de l'hypothèse pour choisir la grandeur qui la teste directement : présence de tension pour vérifier une alimentation, intensité pour une charge ou une phase, continuité pour un contact ou un enroulement. Continuité et résistance se mesurent hors tension (après consignation) ; les mesures sous tension se font avec l'habilitation adaptée. On interprète en comparant le résultat à la valeur attendue (plaque, référence) : l'écart confirme ou infirme l'hypothèse.",
    },
  },
  {
    id: "3-42",
    title: "Étude de cas transversale",
    durationMinutes: 32,
    objectifs: [
      "Mener un diagnostic complet en mobilisant plusieurs notions du module.",
      "Enchaîner méthode, sécurité, mesure et traçabilité sur un cas réel.",
    ],
    simple:
      "Ce chapitre met tout en pratique sur un cas complet : un départ moteur en panne. On applique la démarche structurée, on lit le schéma, on suit un organigramme, on mesure pour confirmer, et on trace l'intervention — en respectant la sécurité du début à la fin.",
    vocab: [
      ["Cas transversal", "Situation qui mobilise plusieurs notions à la fois."],
      ["Départ moteur", "Ensemble sectionnement, protection, commande, moteur."],
      ["Hypothèse", "Cause possible à confirmer par la mesure."],
      ["Confirmation", "Vérification de l'hypothèse par un contrôle."],
      ["Traçabilité", "Trace écrite de la démarche et du résultat."],
    ],
    example:
      "Cas : un moteur de convoyeur s'arrête après quelques minutes et ne repart pas. Symptôme + historique orientent vers une surcharge (relais thermique). On confirme par la mesure du courant, on traite la cause mécanique, on contrôle et on trace.",
    schema: "control-circuit",
    ascii: "CAS : moteur qui s'arrete apres quelques minutes\nMETHODE + SCHEMA + ORGANIGRAMME + MESURE + TRACABILITE → cause traitee",
    retenir: [
      "Un cas réel se traite avec la même méthode structurée que la théorie.",
      "On combine schéma, organigramme et mesures de confirmation.",
      "On traite la cause, pas seulement le symptôme.",
      "La sécurité et la traçabilité encadrent tout le cas.",
    ],
    erreurs: [
      "Réagir au symptôme sans appliquer la méthode.",
      "Sauter la confirmation par la mesure.",
      "Réarmer sans traiter la cause de fond.",
    ],
    astucesPro: [
      "On garde la même rigueur sur un cas simple que sur un cas complexe.",
      "Les notes prises pendant le cas servent de référence pour les suivants.",
    ],
    diagnostic: [
      "Appliquer la démarche : constater, sécuriser, analyser, localiser.",
      "S'appuyer sur le schéma et un organigramme pour cibler.",
      "Confirmer par la mesure avant d'agir.",
    ],
    depannage: [
      "Traiter la cause identifiée (mécanique, électrique).",
      "Contrôler le bon fonctionnement après réparation.",
      "Tracer le constat, les mesures et l'action.",
    ],
    securite: [
      "La consignation et la vérification d'absence de tension s'appliquent dès qu'un accès est requis.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur de convoyeur s'arrête après 5 minutes de marche ; en réarmant le relais thermique, il repart puis s'arrête à nouveau au bout de quelques minutes.",
      mission: ["Appliquer la démarche complète.", "Citer la mesure de confirmation.", "Indiquer la cause probable et la traçabilité."],
      correction:
        "Démarche : constater (arrêt temporisé et répété), sécuriser (consignation quand un accès est nécessaire), analyser (le déclenchement du relais thermique oriente vers une surcharge), localiser à l'aide du schéma et de l'organigramme. Mesure de confirmation : mesurer le courant absorbé à la pince et le comparer au courant nominal ; un courant trop élevé confirme la surcharge. Cause probable : une charge mécanique excessive ou un point dur (roulement, entraînement). On traite la cause mécanique, on contrôle le bon fonctionnement, puis on trace le constat, les mesures (courant relevé) et l'action. On ne se contente pas de réarmer.",
    },
    memo: ["Même méthode que la théorie", "Schéma + organigramme + mesure", "Traiter la cause", "Sécuriser et tracer"],
    resume:
      "Une étude de cas transversale applique la démarche complète — méthode, schéma, organigramme, mesure, sécurité, traçabilité — pour traiter réellement la cause d'une panne.",
    quizIds: ["els191", "els192", "els193", "els194", "els195"],
    verification: {
      question: "Sur un moteur qui déclenche son relais thermique de façon répétée, que fait-on plutôt que de simplement réarmer ?",
      options: ["On monte le calibre", "On mesure le courant et on traite la cause de la surcharge", "On neutralise le relais", "On ignore le problème"],
      correct: 1,
      explanation: "On confirme la surcharge par la mesure du courant et on traite la cause (souvent mécanique) avant de réarmer, sans jamais dérégler ou neutraliser la protection.",
    },
    exercice: {
      enonce:
        "Traitez le cas suivant en appliquant la démarche complète : un moteur ne démarre pas et aucune protection n'a déclenché.",
      consignes: [
        "Applique les étapes de la démarche.",
        "Utilise l'organigramme (protection ? bobine ?).",
        "Indique la mesure de confirmation et la traçabilité.",
      ],
      criteres: [
        "J'ai appliqué constater/sécuriser/analyser/localiser.",
        "J'ai utilisé la logique de l'organigramme.",
        "J'ai cité une mesure de confirmation et la trace.",
      ],
      correction:
        "Constater (moteur ne démarre pas, aucune protection déclenchée) ; sécuriser avant tout accès. Analyser avec l'organigramme : pas de protection déclenchée → tester la commande : « la bobine est-elle alimentée ? ». Si non, suivre le circuit de commande (bouton, auto-maintien, contact du relais thermique) et confirmer par une mesure de continuité (hors tension, après consignation) ou de présence de tension (sous tension, avec habilitation) pour localiser l'interruption. Si oui, orienter vers un défaut de puissance (contacts, phases, moteur). On traite la cause, on contrôle le démarrage, puis on trace constat, mesures et action.",
    },
  },
  {
    id: "3-43",
    title: "Synthèse du module 3 et passerelle vers l'automatisme",
    durationMinutes: 28,
    objectifs: [
      "Relier les grandes notions du module d'électrotechnique.",
      "Situer la frontière entre puissance (énergie) et commande (information) vers l'automatisme.",
    ],
    simple:
      "Ce chapitre clôt le module : des grandeurs de base à la sécurité, la distribution, l'appareillage, les moteurs, les schémas et le diagnostic. Il ouvre aussi sur la suite : l'automatisme, où des capteurs et des automates (API) pilotent la partie puissance que tu connais maintenant.",
    vocab: [
      ["Chaîne d'énergie", "Partie puissance : elle alimente et fait agir (moteur, actionneur)."],
      ["Chaîne d'information", "Partie commande : capteurs et automate qui décident et pilotent."],
      ["Capteur", "Élément qui détecte une grandeur (présence, position, niveau) et informe la commande."],
      ["Automate (API)", "Automate Programmable Industriel : il traite les informations et commande les actionneurs."],
      ["Actionneur", "Élément qui agit (moteur, vérin) sous l'ordre de la commande."],
    ],
    example:
      "Sur un convoyeur automatisé, un capteur détecte le colis (information), l'automate décide de démarrer (traitement), et le moteur entraîne la bande (énergie). L'électrotechnique de ce module correspond surtout à la chaîne d'énergie ; l'automatisme complète la chaîne d'information.",
    schema: "diagnostic-flow",
    ascii: "CHAINE D'INFORMATION : capteur → automate (API) → ordre\n                                   ↓ commande\nCHAINE D'ENERGIE     : alimentation → appareillage → moteur → action",
    retenir: [
      "Le module couvre : grandeurs, sécurité, distribution, appareillage, moteurs, schémas, diagnostic.",
      "La chaîne d'énergie alimente et fait agir ; la chaîne d'information décide et pilote.",
      "Capteurs et automate (API) forment la commande ; moteurs et actionneurs la puissance.",
      "La sécurité et la méthode de diagnostic restent valables quel que soit le niveau.",
    ],
    erreurs: [
      "Croire que l'automatisme remplace l'électrotechnique : il s'ajoute à elle.",
      "Confondre capteur (informe) et actionneur (agit).",
      "Oublier que la sécurité s'applique aussi aux installations automatisées.",
    ],
    astucesPro: [
      "Sur une machine automatisée, on distingue toujours la partie commande de la partie puissance.",
      "Une bonne base d'électrotechnique facilite l'apprentissage de l'automatisme.",
    ],
    diagnostic: [
      "Situer un problème dans la chaîne d'énergie ou la chaîne d'information.",
      "Vérifier la puissance (appareillage, moteur) avec les acquis du module.",
      "Repérer le rôle éventuel d'un capteur ou d'un automate dans le symptôme.",
    ],
    depannage: [
      "Appliquer la démarche de diagnostic apprise, quel que soit l'équipement.",
      "Sécuriser avant tout contrôle nécessitant un accès.",
      "Passer la main sur la partie automate si elle sort de son périmètre et de son habilitation.",
    ],
    securite: [
      "Une installation automatisée peut redémarrer seule : la consignation reste indispensable.",
      "On agit dans les limites de son habilitation, y compris sur les systèmes automatisés.",
      "Cette application est pédagogique : elle prépare à la formation, elle ne la remplace pas.",
    ],
    etudeDeCas: {
      situation: "Sur un convoyeur automatisé, la bande ne démarre pas alors que l'automate semble donner l'ordre de marche.",
      mission: ["Distinguer les deux chaînes concernées.", "Situer où chercher avec les acquis du module.", "Indiquer la limite d'intervention."],
      correction:
        "Deux chaînes sont en jeu : la chaîne d'information (capteur → automate → ordre) et la chaîne d'énergie (appareillage → moteur → bande). Si l'automate donne l'ordre de marche, on vérifie d'abord la chaîne d'énergie avec les acquis du module : présence de l'ordre au contacteur, état du contacteur et du relais thermique, alimentation et couplage du moteur, après consignation. Si le problème vient de la partie automate ou des capteurs (chaîne d'information), on passe la main à une personne compétente et habilitée pour cette partie : on n'intervient pas au-delà de son périmètre et de son habilitation.",
    },
    memo: ["Énergie = puissance", "Information = commande", "Capteur informe / actionneur agit", "Sécurité même en automatisé"],
    resume:
      "Le module d'électrotechnique couvre la chaîne d'énergie et sa commande de base ; l'automatisme prolongera la chaîne d'information avec capteurs et automates, en gardant la même exigence de méthode et de sécurité.",
    quizIds: ["els196", "els197", "els198", "els199", "els200"],
    verification: {
      question: "Dans un système automatisé, que forme l'ensemble capteur + automate (API) ?",
      options: ["La chaîne d'énergie", "La chaîne d'information (commande)", "Le circuit de puissance", "Le moteur"],
      correct: 1,
      explanation: "Les capteurs et l'automate forment la chaîne d'information : ils détectent et décident. Les moteurs et actionneurs forment la chaîne d'énergie.",
    },
    exercice: {
      enonce:
        "Expliquez la différence entre chaîne d'énergie et chaîne d'information, et situez ce que couvre ce module.",
      consignes: [
        "Définis la chaîne d'énergie.",
        "Définis la chaîne d'information.",
        "Situe le module et sa suite (automatisme).",
      ],
      criteres: [
        "J'ai défini la chaîne d'énergie (puissance).",
        "J'ai défini la chaîne d'information (commande).",
        "J'ai situé le module côté énergie et l'automatisme côté information.",
      ],
      correction:
        "La chaîne d'énergie alimente et fait agir : alimentation, appareillage, moteur, actionneur. La chaîne d'information décide et pilote : capteurs qui détectent, automate (API) qui traite et commande. Ce module d'électrotechnique couvre surtout la chaîne d'énergie et sa commande de base (appareillage, départ moteur) ; l'automatisme, étape suivante, développe la chaîne d'information avec les capteurs et les automates, en conservant la même méthode de diagnostic et les mêmes exigences de sécurité.",
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
    chapterCount: block4Lessons.length,
    status: "available",
    exam: {
      questionIds: ["els71", "els73", "els76", "els79", "els81", "els82", "els86", "els88", "els91", "els93", "els96", "els98", "els101", "els103"],
      passPercent: 80,
    },
  },
  {
    id: "m3-b5",
    num: 5,
    title: "Moteurs asynchrones et variation de vitesse",
    objective: "Comprendre le démarrage, le sens de rotation et la variation de vitesse d'un moteur triphasé.",
    lessonIds: block5Lessons.map((lesson) => lesson.id),
    chapterCount: block5Lessons.length,
    status: "available",
    exam: {
      questionIds: ["els106", "els108", "els111", "els113", "els116", "els117", "els121", "els123", "els126", "els128", "els131", "els133", "els136", "els138"],
      passPercent: 80,
    },
  },
  {
    id: "m3-b6",
    num: 6,
    title: "Lecture de schémas électriques industriels",
    objective: "Lire un schéma unifilaire ou développé pour localiser un organe ou une panne.",
    lessonIds: block6Lessons.map((lesson) => lesson.id),
    chapterCount: block6Lessons.length,
    status: "available",
    exam: {
      questionIds: ["els141", "els142", "els146", "els148", "els151", "els153", "els156", "els158", "els161", "els163", "els166", "els168"],
      passPercent: 80,
    },
  },
  {
    id: "m3-b7",
    num: 7,
    title: "Méthode de diagnostic électrique et synthèse",
    objective: "Structurer une recherche de panne électrique méthodique et tracée.",
    lessonIds: block7Lessons.map((lesson) => lesson.id),
    chapterCount: block7Lessons.length,
    status: "available",
    exam: {
      questionIds: ["els171", "els172", "els176", "els178", "els181", "els182", "els186", "els188", "els191", "els193", "els196", "els198"],
      passPercent: 80,
    },
  },
];

export const ELECTRO_MODULE: TrainingModule = {
  id: "m3",
  num: 3,
  title: "Électrotechnique industrielle",
  icon: Zap,
  color: "violet",
  source: "[AFORP] Module 3 · parcours progressif débutant → opérationnel · références NF C 18-510 et constructeurs",
  lessons: [...block1Lessons, ...block2Lessons, ...block3Lessons, ...block4Lessons, ...block5Lessons, ...block6Lessons, ...block7Lessons],
  blocks: ELECTRO_BLOCKS,
};
