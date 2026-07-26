import { Activity } from "lucide-react";
import type { Lesson, TrainingBlock, TrainingModule } from "../types";

/* ============================================================
   MODULE 6 — MÉTHODES DE MAINTENANCE ET DIAGNOSTIC AVANCÉ
   Parcours progressif, organisé par blocs de maîtrise (même modèle
   que les modules 3, 4 et 5).

   Module transverse et AVANCÉ : il prolonge le module 1 (qui pose
   les bases : rôle de la maintenance, 3 types, sécurité EPI /
   consignation). On n'y redéfinit donc PAS les familles de
   maintenance : on apprend à les mettre en œuvre — bâtir un plan
   préventif, surveiller l'état des machines, diagnostiquer avec
   méthode, mesurer et améliorer, tracer et exploiter la GMAO.
   ============================================================ */

const block1Lessons: Lesson[] = [
  {
    id: "6-1",
    title: "Du besoin au plan de maintenance préventive",
    durationMinutes: 28,
    objectifs: [
      "Comprendre ce qu'est un plan de maintenance préventive.",
      "Identifier les sources qui servent à le construire.",
    ],
    simple:
      "Un plan de maintenance préventive est la liste organisée des opérations à réaliser sur chaque équipement, avec leur périodicité. On le construit à partir de plusieurs sources : les préconisations du constructeur, la criticité de l'équipement, et l'historique des pannes. Le plan transforme des intentions en actions planifiées et suivies.",
    vocab: [
      ["Plan de maintenance", "Ensemble organisé des opérations préventives et de leurs périodicités."],
      ["Préconisations constructeur", "Opérations et fréquences conseillées par le fabricant."],
      ["Criticité", "Importance de l'impact d'une panne (production, sécurité, coût)."],
      ["Historique", "Enregistrement des pannes et interventions passées."],
      ["Équipement", "La machine ou l'installation concernée par le plan."],
    ],
    example:
      "Pour un compresseur, on part du carnet constructeur (vidange, filtres, contrôles à telles heures), on tient compte de sa criticité (il alimente toute la production) et de son historique (pannes déjà vues), puis on écrit un plan : quelles opérations, à quelle fréquence, par qui.",
    schema: "maintenance-types",
    ascii: "PLAN PREVENTIF = QUOI (operations) + QUAND (periodicite) + QUI\nsources : CONSTRUCTEUR + CRITICITE + HISTORIQUE des pannes\nintentions → actions PLANIFIEES et SUIVIES",
    retenir: [
      "Le plan préventif liste les opérations et leurs périodicités, équipement par équipement.",
      "Trois sources : préconisations constructeur, criticité, historique des pannes.",
      "Le plan sert à planifier et à suivre, pas seulement à intentionner.",
      "Il s'ajuste dans le temps grâce au retour d'expérience.",
    ],
    erreurs: [
      "Copier le carnet constructeur sans tenir compte de la criticité et du vécu.",
      "Faire un plan et ne jamais le suivre ni le mettre à jour.",
      "Traiter tous les équipements de la même façon quelle que soit leur criticité.",
    ],
    astucesPro: [
      "On priorise les équipements critiques quand on bâtit un plan.",
      "L'historique des pannes révèle où renforcer (ou alléger) le préventif.",
      "Un plan vivant se corrige : on n'écrit pas un plan « une fois pour toutes ».",
    ],
    diagnostic: [
      "Vérifier que chaque équipement critique est couvert par le plan.",
      "Comparer les pannes réelles au plan pour repérer les manques.",
      "Contrôler que les périodicités sont réalistes et tenues.",
    ],
    depannage: [
      "Compléter le plan pour un équipement critique non couvert.",
      "Renforcer le préventif là où l'historique montre des pannes répétées.",
      "Alléger une opération inutilement fréquente révélée par le vécu.",
    ],
    securite: [
      "Le plan intègre les opérations de sécurité (contrôle des protecteurs, des arrêts d'urgence) prévues par le constructeur.",
      "La réalisation des opérations suit la consignation et les procédures de l'entreprise.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "On vous demande de bâtir le plan préventif d'un nouvel équipement critique.",
      mission: ["Citer les sources à consulter.", "Dire ce que doit contenir le plan.", "Expliquer pourquoi le plan doit évoluer."],
      correction:
        "Pour bâtir le plan, on consulte trois sources : les préconisations du constructeur (opérations et fréquences conseillées), la criticité de l'équipement (impact d'une panne, ici fort puisqu'il est critique) et l'historique des pannes (sur cet équipement ou des équipements semblables). Le plan doit contenir, pour chaque opération, ce qu'il faut faire, à quelle périodicité et par qui, en incluant les contrôles de sécurité prévus. Le plan doit évoluer car le retour d'expérience (pannes constatées, opérations inutiles) permet de renforcer le préventif là où c'est nécessaire et de l'alléger ailleurs : un bon plan est vivant, pas figé.",
    },
    memo: ["Plan = quoi + quand + qui", "Sources : constructeur · criticité · historique", "Un plan vivant, pas figé"],
    resume:
      "Le plan de maintenance préventive organise les opérations et leurs périodicités par équipement ; il se construit à partir du constructeur, de la criticité et de l'historique, et s'ajuste grâce au retour d'expérience.",
    quizIds: ["mnt1", "mnt2", "mnt3", "mnt4", "mnt5"],
    verification: {
      question: "Sur quelles sources s'appuie-t-on pour bâtir un plan de maintenance préventive ?",
      options: ["La couleur des machines", "Les préconisations constructeur, la criticité et l'historique des pannes", "Le hasard", "Uniquement le prix des pièces"],
      correct: 1,
      explanation: "Le plan se construit à partir des préconisations du constructeur, de la criticité de l'équipement et de l'historique des pannes." ,
    },
    exercice: {
      enonce:
        "Expliquez ce qu'est un plan de maintenance préventive et comment on le construit.",
      consignes: [
        "Définis le plan (contenu).",
        "Cite les trois sources.",
        "Explique pourquoi il doit évoluer.",
      ],
      criteres: [
        "J'ai défini le plan (opérations + périodicités).",
        "J'ai cité constructeur, criticité, historique.",
        "J'ai expliqué l'ajustement par le retour d'expérience.",
      ],
      correction:
        "Un plan de maintenance préventive est la liste organisée des opérations à réaliser sur chaque équipement, avec leur périodicité et le responsable de leur réalisation. On le construit à partir de trois sources : les préconisations du constructeur (opérations et fréquences conseillées), la criticité de l'équipement (pour prioriser ceux dont la panne a le plus d'impact) et l'historique des pannes (pour renforcer là où l'on a déjà eu des défaillances). Le plan doit évoluer : le retour d'expérience montre où le préventif est insuffisant ou au contraire excessif, et permet d'ajuster les opérations et les périodicités. Un bon plan est donc vivant, suivi et corrigé.",
    },
  },
  {
    id: "6-2",
    title: "Gammes opératoires et périodicités",
    durationMinutes: 30,
    objectifs: [
      "Rédiger une gamme opératoire de maintenance.",
      "Choisir une périodicité adaptée (temps, compteur, criticité).",
    ],
    simple:
      "Une gamme opératoire décrit précisément une opération de maintenance : les étapes, les points à contrôler, l'outillage, les consignes de sécurité. La périodicité, elle, fixe la fréquence : basée sur le temps (tous les 3 mois), sur un compteur (toutes les 500 h ou X cycles), ou déclenchée par l'état pour les équipements surveillés. On choisit selon la criticité et le type d'usure.",
    vocab: [
      ["Gamme opératoire", "Description ordonnée d'une opération : étapes, contrôles, outillage, sécurité."],
      ["Périodicité", "Fréquence d'une opération (temps, compteur, ou selon l'état)."],
      ["Compteur", "Grandeur d'usage (heures, cycles, kilomètres) qui déclenche l'opération."],
      ["Point de contrôle", "Élément précis à vérifier lors de l'opération."],
      ["Standardisation", "Rédiger des gammes claires et réutilisables pour fiabiliser les interventions."],
    ],
    example:
      "Gamme « graissage d'un roulement » : consigner, nettoyer le graisseur, injecter la quantité prescrite de la graisse indiquée, essuyer, tracer. Périodicité : toutes les 500 heures de fonctionnement (compteur) plutôt qu'un délai calendaire, car l'usure dépend de l'usage.",
    schema: "maintenance-types",
    illustrations: ["maintenance-strategy"],
    ascii: "GAMME = etapes + points de controle + outillage + securite\nPERIODICITE : TEMPS (tous les 3 mois) · COMPTEUR (500 h/cycles) · ETAT (surveille)\nchoix selon CRITICITE et type d'USURE",
    retenir: [
      "Une gamme opératoire décrit précisément l'opération (étapes, contrôles, outillage, sécurité).",
      "La périodicité peut être basée sur le temps, un compteur, ou l'état réel.",
      "On choisit la base de périodicité selon le type d'usure (usage vs temps).",
      "Des gammes standardisées fiabilisent et accélèrent les interventions.",
    ],
    erreurs: [
      "Utiliser une périodicité calendaire alors que l'usure dépend de l'usage (ou l'inverse).",
      "Rédiger une gamme floue : chacun fait alors différemment.",
      "Oublier les consignes de sécurité dans la gamme.",
    ],
    astucesPro: [
      "Pour une usure liée à l'usage, on préfère un compteur (heures, cycles) au calendrier.",
      "Une gamme claire réduit les erreurs et le temps d'intervention.",
      "On réutilise les gammes standard d'un équipement à l'autre quand c'est possible.",
    ],
    diagnostic: [
      "Vérifier que la base de périodicité (temps/compteur/état) correspond au type d'usure.",
      "Contrôler que la gamme couvre les points de contrôle essentiels.",
      "S'assurer que les consignes de sécurité figurent dans la gamme.",
    ],
    depannage: [
      "Corriger une périodicité inadaptée révélée par des pannes ou de la sur-maintenance.",
      "Compléter une gamme incomplète (point de contrôle manquant).",
      "Standardiser des gammes disparates pour un même type d'opération.",
    ],
    securite: [
      "Chaque gamme intègre les consignes de sécurité : consignation, EPI, vérification d'absence d'énergie.",
      "On ne réalise pas une opération sans la gamme et les consignes associées si l'équipement l'exige.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un roulement critique s'use selon les heures de fonctionnement, mais son graissage est planifié « tous les mois » quelle que soit l'utilisation.",
      mission: ["Dire si la périodicité est adaptée.", "Proposer une meilleure base.", "Citer un élément à ajouter à la gamme."],
      correction:
        "La périodicité calendaire (« tous les mois ») n'est pas adaptée : l'usure du roulement dépend des heures de fonctionnement, pas du calendrier. Un mois de forte production use bien plus qu'un mois d'arrêt. Une meilleure base est le compteur : par exemple un graissage toutes les 500 heures de fonctionnement, ce qui suit l'usage réel. On peut renforcer par de la surveillance si l'équipement est très critique. Élément à ajouter à la gamme : les consignes de sécurité (consignation, EPI) et la quantité/type de graisse prescrite, pour que l'opération soit faite correctement et de la même façon par tous.",
    },
    memo: ["Gamme = comment · Périodicité = quand", "Usage → compteur ; temps → calendrier", "Sécurité dans la gamme"],
    resume:
      "La gamme opératoire décrit précisément une opération (étapes, contrôles, outillage, sécurité) ; la périodicité fixe sa fréquence selon le temps, un compteur ou l'état, choisie d'après la criticité et le type d'usure.",
    quizIds: ["mnt6", "mnt7", "mnt8", "mnt9", "mnt10"],
    verification: {
      question: "Pour un équipement dont l'usure dépend de son utilisation, quelle base de périodicité est la plus adaptée ?",
      options: ["Le calendrier (tous les mois)", "Un compteur (heures ou cycles de fonctionnement)", "La couleur de la machine", "Le hasard"],
      correct: 1,
      explanation: "Quand l'usure dépend de l'usage, on base la périodicité sur un compteur (heures, cycles) plutôt que sur le calendrier." ,
    },
    exercice: {
      enonce:
        "Expliquez la différence entre une gamme opératoire et une périodicité, et comment choisir la base de périodicité.",
      consignes: [
        "Définis la gamme opératoire.",
        "Définis la périodicité et ses bases possibles.",
        "Explique comment choisir la base.",
      ],
      criteres: [
        "J'ai défini la gamme (comment faire l'opération).",
        "J'ai cité les bases de périodicité (temps, compteur, état).",
        "J'ai relié le choix au type d'usure.",
      ],
      correction:
        "Une gamme opératoire décrit comment réaliser une opération : les étapes dans l'ordre, les points de contrôle, l'outillage nécessaire et les consignes de sécurité ; elle permet à chacun de faire l'opération de la même façon, correctement. La périodicité fixe quand réaliser l'opération : elle peut être basée sur le temps (par exemple tous les 3 mois), sur un compteur d'usage (toutes les 500 heures ou X cycles) ou déclenchée par l'état réel pour les équipements surveillés. On choisit la base selon le type d'usure : si l'usure dépend de l'utilisation, on prend un compteur ; si elle dépend du temps (vieillissement, corrosion), on prend le calendrier ; et l'on renforce par la surveillance pour les équipements critiques.",
    },
  },
  {
    id: "6-3",
    title: "La lubrification et le plan de graissage",
    durationMinutes: 28,
    objectifs: [
      "Comprendre le rôle de la lubrification en maintenance.",
      "Respecter les règles d'un bon graissage (bon produit, bonne quantité).",
    ],
    simple:
      "La lubrification réduit le frottement et l'usure entre pièces en mouvement, évacue une partie de la chaleur et protège de la corrosion. Un bon graissage respecte quatre « bons » : le bon lubrifiant, au bon endroit, en bonne quantité, à la bonne fréquence. Trop ou pas assez de graisse est nuisible : la lubrification se planifie comme le reste.",
    vocab: [
      ["Lubrification", "Interposition d'un lubrifiant (huile, graisse) pour réduire frottement et usure."],
      ["Huile / graisse", "Lubrifiants ; l'huile s'écoule, la graisse reste en place (huile + épaississant)."],
      ["Viscosité", "Résistance d'un lubrifiant à l'écoulement ; doit correspondre à l'usage."],
      ["Point de graissage", "Endroit précis à lubrifier (graisseur, carter…)."],
      ["Plan de graissage", "Liste des points, produits, quantités et fréquences de lubrification."],
    ],
    example:
      "Un roulement graissé avec la bonne graisse, en quantité prescrite, dure longtemps. Trop de graisse fait chauffer le roulement (barattage) ; pas assez le laisse frotter à sec. Le plan de graissage indique, pour chaque point, quel produit, combien et à quelle fréquence.",
    schema: "maintenance-types",
    ascii: "LUBRIFIER = reduire frottement/usure + evacuer chaleur + proteger corrosion\nles 4 BONS : bon LUBRIFIANT · bon ENDROIT · bonne QUANTITE · bonne FREQUENCE\ntrop de graisse (barattage/chauffe) = aussi nuisible que pas assez",
    retenir: [
      "La lubrification réduit frottement et usure, évacue de la chaleur, protège de la corrosion.",
      "Les quatre « bons » : bon lubrifiant, bon endroit, bonne quantité, bonne fréquence.",
      "Trop de graisse est nuisible (échauffement) autant que pas assez (frottement à sec).",
      "La lubrification se planifie : c'est le plan de graissage.",
    ],
    erreurs: [
      "Mélanger des lubrifiants incompatibles.",
      "Sur-graisser en pensant « bien faire » (échauffement, fuites).",
      "Utiliser une huile/graisse de viscosité inadaptée à l'usage.",
    ],
    astucesPro: [
      "On respecte le produit prescrit : un lubrifiant n'en vaut pas un autre.",
      "On nettoie le graisseur avant d'injecter pour ne pas introduire d'impuretés.",
      "Un point de graissage oublié ou noyé se repère dans le plan et l'historique.",
    ],
    diagnostic: [
      "Vérifier que le lubrifiant utilisé est bien celui prescrit.",
      "Contrôler la quantité (ni excès ni manque) et l'état (propreté, niveau).",
      "Relier un échauffement ou une usure anormale à un défaut de lubrification.",
    ],
    depannage: [
      "Corriger un sur- ou sous-graissage selon les préconisations.",
      "Remplacer un lubrifiant inadapté ou contaminé.",
      "Compléter le plan de graissage si un point est oublié.",
    ],
    securite: [
      "Le graissage sur organes en mouvement se fait à l'arrêt et après consignation, sauf dispositif prévu pour le faire en sécurité.",
      "On manipule les lubrifiants avec les EPI adaptés et on gère les déchets (huiles usagées).",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un opérateur graisse « généreusement » un roulement à chaque passage, pensant bien faire ; le roulement chauffe et finit par se dégrader.",
      mission: ["Expliquer le problème.", "Rappeler la bonne pratique.", "Citer une règle de sécurité."],
      correction:
        "Le problème est le sur-graissage : trop de graisse dans un roulement provoque un barattage (la graisse est malaxée en excès), ce qui fait chauffer le roulement et accélère sa dégradation. Contrairement à l'intuition, « plus de graisse » n'est pas mieux. La bonne pratique respecte les quatre « bons » : le bon lubrifiant prescrit, au bon endroit, en bonne quantité (celle indiquée, pas plus) et à la bonne fréquence, en suivant le plan de graissage. Règle de sécurité : le graissage d'organes en mouvement se fait à l'arrêt et après consignation, sauf dispositif conçu pour le faire en sécurité, avec les EPI adaptés et une gestion correcte des huiles usagées.",
    },
    memo: ["Les 4 bons : lubrifiant · endroit · quantité · fréquence", "Trop de graisse = échauffement", "La lubrification se planifie"],
    resume:
      "La lubrification réduit frottement, usure et corrosion ; un bon graissage respecte les quatre « bons » (lubrifiant, endroit, quantité, fréquence) et se planifie dans un plan de graissage, l'excès étant aussi nuisible que le manque.",
    quizIds: ["mnt11", "mnt12", "mnt13", "mnt14", "mnt15"],
    verification: {
      question: "Que provoque un excès de graisse dans un roulement ?",
      options: ["Rien, c'est toujours mieux", "Un échauffement (barattage) qui dégrade le roulement", "Un refroidissement bénéfique", "Une meilleure étanchéité garantie"],
      correct: 1,
      explanation: "Trop de graisse provoque un barattage qui fait chauffer le roulement : l'excès est aussi nuisible que le manque." ,
    },
    exercice: {
      enonce:
        "Expliquez le rôle de la lubrification et les règles d'un bon graissage.",
      consignes: [
        "Cite les rôles de la lubrification.",
        "Énonce les quatre « bons ».",
        "Explique pourquoi trop de graisse est nuisible.",
      ],
      criteres: [
        "J'ai cité réduire frottement/usure, évacuer la chaleur, protéger de la corrosion.",
        "J'ai énoncé les quatre « bons ».",
        "J'ai expliqué le risque de sur-graissage.",
      ],
      correction:
        "La lubrification interpose un lubrifiant (huile ou graisse) entre les pièces en mouvement : elle réduit le frottement et l'usure, évacue une partie de la chaleur produite et protège de la corrosion. Un bon graissage respecte les quatre « bons » : le bon lubrifiant (celui prescrit, de viscosité adaptée), au bon endroit (le point de graissage), en bonne quantité (celle indiquée) et à la bonne fréquence (selon le plan de graissage). Trop de graisse est nuisible : dans un roulement, l'excès provoque un barattage qui fait chauffer et dégrade l'organe ; pas assez laisse frotter à sec. La lubrification se planifie donc comme une opération à part entière.",
    },
  },
];

export const MAINTENANCE_BLOCKS: TrainingBlock[] = [
  {
    id: "m6-b1",
    num: 1,
    title: "La maintenance préventive en pratique",
    objective: "Bâtir et suivre un plan de maintenance préventive (gammes, périodicités, lubrification, inspection).",
    lessonIds: block1Lessons.map((lesson) => lesson.id),
    chapterCount: 6,
    status: "in_progress",
  },
  { id: "m6-b2", num: 2, title: "La surveillance conditionnelle", objective: "Surveiller l'état des équipements (vibrations, thermographie, analyse d'huile, ultrasons).", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m6-b3", num: 3, title: "La méthodologie de diagnostic", objective: "Mener un diagnostic structuré multi-technologies et remonter aux causes.", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m6-b4", num: 4, title: "Indicateurs et amélioration continue", objective: "Utiliser les indicateurs (MTBF, MTTR, disponibilité, TRS) et les outils d'analyse (AMDEC, Pareto).", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m6-b5", num: 5, title: "Documentation, GMAO et traçabilité", objective: "Exploiter la documentation technique, la GMAO et rédiger un rapport d'intervention.", lessonIds: [], chapterCount: 6, status: "planned" },
];

export const MAINTENANCE_MODULE: TrainingModule = {
  id: "m6",
  num: 6,
  title: "Méthodes de maintenance et diagnostic avancé",
  icon: Activity,
  color: "violet",
  source: "[TMI] Parcours avancé · prolonge le module 1 · plan préventif, surveillance conditionnelle, diagnostic, indicateurs et GMAO",
  lessons: [...block1Lessons],
  blocks: MAINTENANCE_BLOCKS,
};
