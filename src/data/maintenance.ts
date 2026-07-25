import { Activity } from "lucide-react";
import type { Lesson, TrainingBlock, TrainingModule } from "../types";

/* ============================================================
   MODULE 6 — MAINTENANCE PRÉVENTIVE ET DIAGNOSTIC AVANCÉ
   Parcours progressif débutant → opérationnel, organisé par blocs
   de maîtrise (même modèle que les modules 3, 4 et 5).

   Module transverse : il s'appuie sur les technologies déjà vues
   (électrotechnique, mécanique, automatisme) pour aborder les
   stratégies de maintenance, la surveillance conditionnelle, la
   méthodologie de diagnostic, les indicateurs et la documentation.
   ============================================================ */

const block1Lessons: Lesson[] = [
  {
    id: "6-1",
    title: "Qu'est-ce que la maintenance ? Rôle et enjeux",
    durationMinutes: 26,
    objectifs: [
      "Définir la maintenance et son rôle dans l'entreprise.",
      "Comprendre les enjeux : disponibilité, sécurité, coûts.",
    ],
    simple:
      "La maintenance regroupe toutes les actions qui permettent de maintenir ou de rétablir un équipement dans un état où il peut accomplir sa fonction. Son enjeu est triple : garder les machines disponibles (produire), assurer la sécurité des personnes et des biens, et maîtriser les coûts (éviter les arrêts subis, toujours plus chers).",
    vocab: [
      ["Maintenance", "Ensemble des actions pour maintenir ou rétablir un bien en état de fonctionner."],
      ["Disponibilité", "Aptitude d'un équipement à être en état de fonctionner quand on en a besoin."],
      ["Défaillance", "Perte de l'aptitude d'un bien à accomplir sa fonction."],
      ["Bien / équipement", "La machine ou l'installation dont on assure la maintenance."],
      ["Fonction requise", "Ce que l'équipement doit faire (sa mission)."],
    ],
    example:
      "Sur une ligne de production, un roulement qui casse à l'improviste arrête toute la ligne : perte de production, réparation en urgence, parfois risque pour l'opérateur. Une maintenance bien menée aurait détecté l'usure et remplacé le roulement au bon moment, sans arrêt subi.",
    schema: "maintenance-types",
    ascii: "MAINTENANCE = maintenir OU retablir un equipement en etat de fonctionner\nenjeux : DISPONIBILITE (produire) · SECURITE (personnes/biens) · COUTS\narret subi = souvent le plus cher",
    retenir: [
      "Maintenir ou rétablir un bien dans un état de fonctionnement : c'est la maintenance.",
      "Trois enjeux : disponibilité, sécurité, maîtrise des coûts.",
      "Un arrêt subi (panne imprévue) coûte généralement plus cher qu'un arrêt planifié.",
      "La maintenance sert la production ET la sécurité, pas seulement la réparation.",
    ],
    erreurs: [
      "Réduire la maintenance à « réparer quand c'est cassé ».",
      "Oublier la dimension sécurité (une panne peut être dangereuse).",
      "Négliger le coût caché des arrêts subis (production perdue).",
    ],
    astucesPro: [
      "On raisonne « disponibilité » : l'objectif est que la machine produise quand il faut.",
      "Un incident évité vaut mieux qu'un incident bien réparé.",
      "On garde une trace des interventions : elle sert à progresser.",
    ],
    diagnostic: [
      "Identifier la fonction requise de l'équipement pour juger d'une défaillance.",
      "Distinguer une défaillance totale d'une dégradation partielle.",
      "Évaluer l'impact d'un arrêt (production, sécurité) pour prioriser.",
    ],
    depannage: [
      "Rétablir la fonction requise en traitant la cause, pas seulement le symptôme.",
      "Prendre en compte la sécurité avant, pendant et après l'intervention.",
      "Tracer l'intervention pour nourrir l'analyse et la prévention.",
    ],
    securite: [
      "Toute intervention de maintenance suit la consignation des énergies et les procédures de l'entreprise.",
      "La maintenance a un rôle direct dans la sécurité : un équipement mal entretenu peut devenir dangereux.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un responsable considère la maintenance comme un simple coût et veut la réduire au minimum.",
      mission: ["Expliquer le rôle réel de la maintenance.", "Citer deux enjeux au-delà de la réparation.", "Donner un argument coût."],
      correction:
        "La maintenance n'est pas qu'un coût : elle maintient les machines disponibles pour produire et garantit la sécurité des personnes et des biens. Deux enjeux au-delà de la réparation : la disponibilité (une machine arrêtée ne produit pas) et la sécurité (un équipement mal entretenu peut blesser ou endommager). Argument coût : un arrêt subi (panne imprévue) coûte généralement plus cher qu'un arrêt planifié, car il ajoute la production perdue, l'urgence et parfois des dégâts en cascade. Réduire aveuglément la maintenance revient souvent à augmenter les coûts globaux.",
    },
    memo: ["Maintenir OU rétablir la fonction", "Disponibilité · sécurité · coûts", "Arrêt subi = le plus cher"],
    resume:
      "La maintenance maintient ou rétablit un équipement en état de fonctionner ; ses enjeux sont la disponibilité, la sécurité et la maîtrise des coûts, l'arrêt subi étant souvent le plus coûteux.",
    quizIds: ["mnt1", "mnt2", "mnt3", "mnt4", "mnt5"],
    verification: {
      question: "Que recouvre la maintenance ?",
      options: ["Uniquement réparer une machine cassée", "Maintenir ou rétablir un équipement en état d'accomplir sa fonction", "Uniquement nettoyer les machines", "Uniquement acheter des pièces"],
      correct: 1,
      explanation: "La maintenance regroupe toutes les actions qui maintiennent ou rétablissent un bien dans un état où il peut accomplir sa fonction." ,
    },
    exercice: {
      enonce:
        "Expliquez le rôle de la maintenance et ses trois enjeux principaux, avec un exemple.",
      consignes: [
        "Définis la maintenance.",
        "Cite les trois enjeux.",
        "Illustre par un exemple d'arrêt évité.",
      ],
      criteres: [
        "J'ai défini la maintenance (maintenir/rétablir la fonction).",
        "J'ai cité disponibilité, sécurité, coûts.",
        "J'ai donné un exemple pertinent.",
      ],
      correction:
        "La maintenance regroupe les actions qui maintiennent un équipement en bon état ou le rétablissent après une défaillance, afin qu'il accomplisse sa fonction. Ses trois enjeux principaux sont la disponibilité (garder les machines aptes à produire), la sécurité (protéger les personnes et les biens) et la maîtrise des coûts (éviter les arrêts subis, plus chers). Exemple : détecter l'usure d'un roulement par la surveillance et le remplacer lors d'un arrêt planifié évite une casse en pleine production, avec sa perte de production, sa réparation en urgence et son risque pour l'opérateur.",
    },
  },
  {
    id: "6-2",
    title: "La maintenance corrective",
    durationMinutes: 26,
    objectifs: [
      "Définir la maintenance corrective et ses deux formes.",
      "Situer ses avantages et ses limites.",
    ],
    simple:
      "La maintenance corrective intervient après la défaillance : on répare une fois la panne survenue. Elle a deux formes : le dépannage (palliatif), une remise en marche provisoire pour repartir vite, et la réparation (curatif), la remise en état définitive. Simple à comprendre, elle reste subie : la panne choisit son moment, souvent au mauvais.",
    vocab: [
      ["Maintenance corrective", "Intervention réalisée après la défaillance pour rétablir la fonction."],
      ["Dépannage (palliatif)", "Remise en marche provisoire, en attendant une réparation durable."],
      ["Réparation (curatif)", "Remise en état définitive de l'équipement."],
      ["Défaillance", "Panne : perte de l'aptitude à accomplir la fonction."],
      ["Arrêt subi", "Arrêt imprévu imposé par la panne."],
    ],
    example:
      "Un moteur tombe en panne en pleine production. On fait d'abord un dépannage (palliatif) pour redémarrer, par exemple en shuntant un composant secondaire, puis on planifie la réparation définitive (curatif) : remplacement propre de la pièce et remise en état.",
    schema: "maintenance-types",
    ascii: "CORRECTIVE = apres la panne\n  PALLIATIF (depannage) : remise en marche PROVISOIRE\n  CURATIF (reparation) : remise en etat DEFINITIVE\ninconvenient : arret SUBI (la panne choisit son moment)",
    retenir: [
      "La maintenance corrective intervient après la défaillance.",
      "Palliatif = dépannage provisoire ; curatif = réparation définitive.",
      "Avantage : simple, on n'intervient que si nécessaire.",
      "Limite : l'arrêt est subi, souvent coûteux et parfois dangereux.",
    ],
    erreurs: [
      "Confondre palliatif (provisoire) et curatif (définitif).",
      "Rester au dépannage sans planifier la réparation définitive.",
      "Croire que le tout-correctif est toujours la solution la moins chère.",
    ],
    astucesPro: [
      "Après un palliatif, on planifie toujours le curatif : sinon la panne revient.",
      "On note la cause de la défaillance pour éviter qu'elle se reproduise.",
      "Le tout-correctif convient surtout aux équipements peu critiques.",
    ],
    diagnostic: [
      "Confirmer la défaillance et identifier la fonction perdue.",
      "Décider entre remise en marche provisoire (palliatif) et réparation (curatif).",
      "Rechercher la cause pour éviter la répétition.",
    ],
    depannage: [
      "Assurer d'abord la sécurité, puis rétablir la fonction (palliatif si urgence).",
      "Planifier la réparation définitive après un dépannage provisoire.",
      "Tracer l'intervention et la cause identifiée.",
    ],
    securite: [
      "Un dépannage provisoire ne doit jamais neutraliser une sécurité ni créer un risque.",
      "Toute intervention corrective suit la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Une machine s'arrête sur panne. Le chef d'atelier veut la faire repartir tout de suite pour finir la commande.",
      mission: ["Nommer le type d'intervention immédiat.", "Dire ce qu'il faudra faire ensuite.", "Rappeler une limite de sécurité."],
      correction:
        "Faire repartir la machine tout de suite correspond à un dépannage (palliatif) : une remise en marche provisoire pour honorer la commande. Ensuite, il faudra planifier la réparation définitive (curatif) : remettre proprement l'équipement en état, sinon la panne reviendra. Limite de sécurité : un palliatif ne doit jamais contourner ou neutraliser une sécurité, ni créer un nouveau risque ; s'il n'est pas possible de dépanner en sécurité, on ne redémarre pas. L'intervention se fait après consignation et est tracée avec la cause identifiée.",
    },
    memo: ["Corrective = après la panne", "Palliatif provisoire · curatif définitif", "Toujours planifier le curatif"],
    resume:
      "La maintenance corrective intervient après la défaillance sous deux formes : le dépannage (palliatif, provisoire) et la réparation (curatif, définitive) ; simple mais subie, donc souvent coûteuse.",
    quizIds: ["mnt6", "mnt7", "mnt8", "mnt9", "mnt10"],
    verification: {
      question: "Quelle est la différence entre palliatif et curatif ?",
      options: ["Aucune", "Le palliatif est une remise en marche provisoire, le curatif une réparation définitive", "Le curatif est provisoire, le palliatif définitif", "Les deux sont préventifs"],
      correct: 1,
      explanation: "Le palliatif (dépannage) remet provisoirement en marche ; le curatif (réparation) rétablit définitivement la fonction." ,
    },
    exercice: {
      enonce:
        "Définissez la maintenance corrective, ses deux formes, et donnez un avantage et une limite.",
      consignes: [
        "Définis la maintenance corrective.",
        "Distingue palliatif et curatif.",
        "Donne un avantage et une limite.",
      ],
      criteres: [
        "J'ai défini la corrective (après la défaillance).",
        "J'ai distingué palliatif et curatif.",
        "J'ai donné un avantage et une limite.",
      ],
      correction:
        "La maintenance corrective intervient après la défaillance, pour rétablir la fonction perdue. Elle prend deux formes : le dépannage (palliatif), une remise en marche provisoire pour repartir vite, et la réparation (curatif), la remise en état définitive. Avantage : elle est simple et on n'intervient que lorsque c'est nécessaire, ce qui convient aux équipements peu critiques. Limite : l'arrêt est subi (la panne survient au moment qu'elle choisit), ce qui est souvent coûteux — production perdue, urgence — et parfois dangereux. Après un palliatif, on planifie toujours le curatif.",
    },
  },
  {
    id: "6-3",
    title: "La maintenance préventive systématique",
    durationMinutes: 28,
    objectifs: [
      "Définir la maintenance préventive et sa forme systématique.",
      "Comprendre l'intérêt d'intervenir avant la panne.",
    ],
    simple:
      "La maintenance préventive intervient avant la défaillance pour réduire le risque de panne. Sa forme systématique suit un échéancier fixe : on réalise des opérations à intervalles réguliers (temps ou nombre de cycles), qu'il y ait un signe d'usure ou non — comme la vidange d'une voiture tous les X kilomètres.",
    vocab: [
      ["Maintenance préventive", "Intervention avant la défaillance pour réduire le risque de panne."],
      ["Systématique", "Selon un échéancier fixe (temps ou nombre de cycles), sans attendre un signe."],
      ["Périodicité", "Intervalle entre deux opérations préventives."],
      ["Échéancier", "Calendrier des interventions préventives planifiées."],
      ["Gamme de maintenance", "Liste ordonnée des opérations à réaliser et de leur périodicité."],
    ],
    example:
      "On remplace systématiquement un filtre toutes les 500 heures de fonctionnement et on graisse un roulement tous les mois, sans attendre qu'ils soient dégradés. Ces opérations planifiées se font pendant des arrêts choisis, pas en urgence.",
    schema: "maintenance-types",
    ascii: "PREVENTIVE = avant la panne\n  SYSTEMATIQUE = echeancier FIXE (temps ou cycles), sans attendre un signe\nex : vidange tous les X km · filtre toutes les 500 h\navantage : arrets PLANIFIES, pas subis",
    retenir: [
      "La préventive intervient avant la défaillance.",
      "Systématique = échéancier fixe (temps ou cycles), qu'il y ait un signe ou non.",
      "Elle transforme des arrêts subis en arrêts planifiés.",
      "Elle suit une gamme de maintenance avec des périodicités définies.",
    ],
    erreurs: [
      "Confondre préventif (avant la panne) et correctif (après).",
      "Sur-maintenir : intervenir trop souvent coûte cher et peut introduire des défauts.",
      "Sous-maintenir : espacer trop les opérations laisse la panne survenir.",
    ],
    astucesPro: [
      "On respecte les périodicités du constructeur comme base, puis on ajuste selon le vécu.",
      "Un excès de maintenance (démontages inutiles) peut créer des pannes : on cherche le bon rythme.",
      "Les opérations préventives se planifient sur des arrêts choisis.",
    ],
    diagnostic: [
      "Vérifier que les opérations préventives sont réalisées aux bonnes périodicités.",
      "Repérer une périodicité inadaptée (trop courte ou trop longue).",
      "Comparer les pannes constatées au plan préventif en place.",
    ],
    depannage: [
      "Rattraper une opération préventive oubliée avant qu'elle ne cause une panne.",
      "Ajuster la périodicité si des pannes surviennent malgré le préventif.",
      "Tracer les opérations réalisées pour suivre l'historique.",
    ],
    securite: [
      "Les opérations préventives sur les parties actives se font après consignation et vérification d'absence d'énergie.",
      "On teste les organes de sécurité prévus par la gamme, sans jamais les neutraliser.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un roulement critique casse en moyenne tous les 8 mois, toujours en production, provoquant des arrêts subis coûteux.",
      mission: ["Proposer une stratégie préventive systématique.", "Expliquer l'intérêt.", "Citer un risque d'excès de maintenance."],
      correction:
        "On peut mettre en place une maintenance préventive systématique : remplacer le roulement à intervalle fixe, par exemple tous les 6 mois (avant l'échéance moyenne de 8 mois), lors d'un arrêt planifié. Intérêt : on transforme un arrêt subi coûteux en arrêt choisi, plus court et moins cher, et on évite les dégâts en cascade d'une casse en production. Risque d'excès : si l'on remplace trop souvent (par exemple tous les mois), on gaspille des pièces, on immobilise la machine inutilement et chaque démontage peut introduire un nouveau défaut. On cherche donc la bonne périodicité, entre sous- et sur-maintenance. Les opérations se font après consignation.",
    },
    memo: ["Préventif = avant la panne", "Systématique = échéancier fixe", "Ni sous- ni sur-maintenance"],
    resume:
      "La maintenance préventive intervient avant la défaillance ; sa forme systématique suit un échéancier fixe (temps ou cycles) et transforme les arrêts subis en arrêts planifiés, à condition de trouver la bonne périodicité.",
    quizIds: ["mnt11", "mnt12", "mnt13", "mnt14", "mnt15"],
    verification: {
      question: "Sur quoi repose la maintenance préventive systématique ?",
      options: ["Sur l'attente de la panne", "Sur un échéancier fixe (temps ou nombre de cycles)", "Sur une mesure de l'état réel", "Sur le hasard"],
      correct: 1,
      explanation: "La préventive systématique suit un échéancier fixe : on intervient à intervalles réguliers, sans attendre un signe d'usure." ,
    },
    exercice: {
      enonce:
        "Expliquez la maintenance préventive systématique, son intérêt et le risque de sur-maintenance.",
      consignes: [
        "Définis la préventive systématique.",
        "Explique son intérêt par rapport au correctif.",
        "Explique le risque d'en faire trop.",
      ],
      criteres: [
        "J'ai défini la systématique (échéancier fixe).",
        "J'ai expliqué l'intérêt (arrêts planifiés).",
        "J'ai expliqué le risque de sur-maintenance.",
      ],
      correction:
        "La maintenance préventive systématique consiste à réaliser des opérations à intervalles fixes, définis en temps ou en nombre de cycles (par exemple un filtre toutes les 500 heures), sans attendre un signe d'usure. Son intérêt par rapport au correctif est de transformer des arrêts subis, imprévus et coûteux, en arrêts planifiés et maîtrisés, tout en évitant les dégâts d'une casse en production. Le risque de sur-maintenance est d'intervenir trop souvent : on gaspille des pièces, on immobilise inutilement la machine, et chaque démontage peut introduire un nouveau défaut. Il faut donc trouver la bonne périodicité, entre sous- et sur-maintenance.",
    },
  },
];

export const MAINTENANCE_BLOCKS: TrainingBlock[] = [
  {
    id: "m6-b1",
    num: 1,
    title: "Les stratégies de maintenance",
    objective: "Distinguer maintenance corrective, préventive, conditionnelle et prévisionnelle, et savoir laquelle choisir.",
    lessonIds: block1Lessons.map((lesson) => lesson.id),
    chapterCount: 6,
    status: "in_progress",
  },
  { id: "m6-b2", num: 2, title: "La maintenance préventive en pratique", objective: "Bâtir et suivre un plan de maintenance préventive (gammes, périodicités, lubrification).", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m6-b3", num: 3, title: "La surveillance conditionnelle", objective: "Surveiller l'état des équipements (vibrations, thermographie, analyse d'huile, ultrasons).", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m6-b4", num: 4, title: "La méthodologie de diagnostic", objective: "Mener un diagnostic structuré multi-technologies et remonter aux causes.", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m6-b5", num: 5, title: "Indicateurs et amélioration continue", objective: "Utiliser les indicateurs (MTBF, MTTR, TRS) et les outils d'analyse (AMDEC, Pareto).", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m6-b6", num: 6, title: "Documentation, GMAO et traçabilité", objective: "Exploiter la documentation technique, la GMAO et rédiger un rapport d'intervention.", lessonIds: [], chapterCount: 6, status: "planned" },
];

export const MAINTENANCE_MODULE: TrainingModule = {
  id: "m6",
  num: 6,
  title: "Maintenance préventive et diagnostic avancé",
  icon: Activity,
  color: "violet",
  source: "[TMI] Parcours progressif débutant → opérationnel · stratégies de maintenance, surveillance conditionnelle, diagnostic et méthodes · module transverse",
  lessons: [...block1Lessons],
  blocks: MAINTENANCE_BLOCKS,
};
