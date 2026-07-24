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
