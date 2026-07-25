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
  {
    id: "6-4",
    title: "La maintenance conditionnelle et prévisionnelle",
    durationMinutes: 30,
    objectifs: [
      "Définir la maintenance conditionnelle basée sur l'état réel.",
      "Distinguer conditionnelle et prévisionnelle.",
    ],
    simple:
      "La maintenance conditionnelle intervient selon l'état réel de l'équipement : on surveille des paramètres (vibrations, température, huile…) et on agit quand un seuil d'alerte est atteint, ni trop tôt ni trop tard. La maintenance prévisionnelle va plus loin : à partir de l'évolution mesurée, on prévoit quand la panne surviendra et on planifie l'intervention avant.",
    vocab: [
      ["Maintenance conditionnelle", "Intervention déclenchée par l'état réel mesuré (dépassement d'un seuil)."],
      ["Maintenance prévisionnelle", "Prévision de la date de défaillance à partir de l'évolution mesurée."],
      ["Paramètre surveillé", "Grandeur mesurée qui renseigne sur l'état (vibration, température…)."],
      ["Seuil d'alerte", "Valeur au-delà de laquelle on décide d'intervenir."],
      ["Tendance", "Évolution d'un paramètre dans le temps, qui annonce une dégradation."],
    ],
    example:
      "On mesure régulièrement les vibrations d'un moteur. Tant qu'elles restent basses, on n'intervient pas ; dès qu'elles franchissent le seuil d'alerte, on planifie le remplacement du roulement. En suivant la tendance, on peut même estimer dans combien de temps le seuil sera atteint : c'est le prévisionnel.",
    schema: "maintenance-types",
    ascii: "CONDITIONNELLE = selon l'ETAT REEL mesure → agir au SEUIL d'alerte\nPREVISIONNELLE = suivre la TENDANCE → PREVOIR la date de panne\nsurveiller : vibrations, temperature, analyse d'huile, ultrasons",
    retenir: [
      "Conditionnelle : on intervient selon l'état réel mesuré (au seuil d'alerte).",
      "Prévisionnelle : on prévoit la date de panne à partir de la tendance.",
      "On n'intervient ni trop tôt (gaspillage) ni trop tard (panne).",
      "Elle repose sur la surveillance de paramètres (vibrations, température, huile…).",
    ],
    erreurs: [
      "Confondre conditionnelle (état réel) et systématique (échéancier fixe).",
      "Réagir à une seule mesure sans regarder la tendance.",
      "Fixer un seuil au hasard, sans référence.",
    ],
    astucesPro: [
      "Une mesure isolée dit peu ; c'est la tendance qui alerte.",
      "On compare toujours à une référence (mesure à l'état sain).",
      "La conditionnelle évite les démontages inutiles de la systématique.",
    ],
    diagnostic: [
      "Comparer la mesure à la référence et au seuil d'alerte.",
      "Analyser la tendance pour anticiper l'échéance.",
      "Confirmer une alerte par une seconde mesure avant de conclure.",
    ],
    depannage: [
      "Planifier l'intervention dès que la tendance approche du seuil.",
      "Éviter d'intervenir sur une simple mesure isolée non confirmée.",
      "Tracer les mesures pour affiner les seuils dans le temps.",
    ],
    securite: [
      "La prise de mesures se fait dans le respect des consignes (accès, EPI) et sans exposer aux parties actives.",
      "Toute intervention consécutive suit la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur un moteur critique, les vibrations mesurées chaque semaine augmentent lentement et approchent du seuil d'alerte.",
      mission: ["Nommer la stratégie utilisée.", "Dire quand intervenir.", "Expliquer l'apport du prévisionnel."],
      correction:
        "La stratégie est la maintenance conditionnelle : on surveille un paramètre (les vibrations) et on décide selon l'état réel. On intervient lorsque la mesure atteint le seuil d'alerte, pas avant (ce serait du gaspillage) ni après (ce serait la panne). L'apport du prévisionnel : en suivant la tendance (l'augmentation régulière), on estime dans combien de temps le seuil sera franchi, ce qui permet de planifier le remplacement du roulement au meilleur moment, sur un arrêt choisi. On confirme l'alerte par une seconde mesure et on trace les relevés pour affiner les seuils.",
    },
    memo: ["Conditionnelle = état réel + seuil", "Prévisionnelle = tendance + prévision", "Ni trop tôt, ni trop tard"],
    resume:
      "La maintenance conditionnelle déclenche l'intervention selon l'état réel mesuré (seuil d'alerte) ; la prévisionnelle prévoit la date de défaillance à partir de la tendance, pour intervenir au meilleur moment.",
    quizIds: ["mnt16", "mnt17", "mnt18", "mnt19", "mnt20"],
    verification: {
      question: "Sur quoi repose la maintenance conditionnelle ?",
      options: ["Sur un échéancier fixe", "Sur l'état réel mesuré (intervention au seuil d'alerte)", "Sur l'attente de la panne", "Sur le hasard"],
      correct: 1,
      explanation: "La conditionnelle se base sur l'état réel mesuré : on intervient quand un paramètre franchit son seuil d'alerte." ,
    },
    exercice: {
      enonce:
        "Distinguez maintenance conditionnelle et prévisionnelle, et expliquez pourquoi elles évitent le gaspillage.",
      consignes: [
        "Définis la conditionnelle.",
        "Définis la prévisionnelle.",
        "Explique l'avantage sur la systématique.",
      ],
      criteres: [
        "J'ai défini la conditionnelle (état réel, seuil).",
        "J'ai défini la prévisionnelle (tendance, prévision).",
        "J'ai expliqué l'évitement des démontages inutiles.",
      ],
      correction:
        "La maintenance conditionnelle déclenche l'intervention à partir de l'état réel de l'équipement : on surveille un paramètre (vibrations, température, analyse d'huile…) et on agit lorsqu'il dépasse un seuil d'alerte. La maintenance prévisionnelle va plus loin : en analysant la tendance d'évolution du paramètre, elle prévoit approximativement la date de la défaillance, ce qui permet de planifier l'intervention juste avant. Toutes deux évitent le gaspillage de la systématique : au lieu de démonter à échéance fixe (parfois inutilement), on n'intervient que lorsque l'état réel le justifie, ni trop tôt ni trop tard.",
    },
  },
  {
    id: "6-5",
    title: "Choisir la bonne stratégie selon la criticité",
    durationMinutes: 30,
    objectifs: [
      "Utiliser la criticité pour orienter le choix d'une stratégie.",
      "Comprendre qu'on combine les stratégies selon les équipements.",
    ],
    simple:
      "Il n'existe pas une seule bonne maintenance : on choisit selon la criticité de l'équipement (impact d'une panne) et selon qu'on peut surveiller son état. Un équipement peu critique peut rester en correctif ; un équipement critique se protège par du préventif systématique (si l'usure est prévisible) ou du conditionnel (si l'on peut mesurer son état). On combine les stratégies sur un même site.",
    vocab: [
      ["Criticité", "Importance de l'impact d'une panne (production, sécurité, coût)."],
      ["Équipement critique", "Équipement dont la panne a un impact fort ; à protéger en priorité."],
      ["Plan de maintenance", "Répartition des stratégies sur les équipements d'un site."],
      ["Coût de possession", "Coût total : maintenance + arrêts + conséquences."],
      ["Arbitrage", "Choix raisonné entre coût de maintenance et risque de panne."],
    ],
    example:
      "Une ampoule d'éclairage secondaire : correctif (on remplace quand elle grille). Un moteur d'entraînement principal : conditionnel (surveillance vibratoire) car sa panne arrête la ligne. Un filtre à usure régulière : systématique. Sur un même atelier, les trois stratégies coexistent selon la criticité.",
    schema: "maintenance-types",
    illustrations: ["maintenance-strategy"],
    ascii: "CHOIX = f(CRITICITE, possibilite de SURVEILLER)\npeu critique → CORRECTIF\ncritique + usure previsible → PREVENTIF SYSTEMATIQUE\ncritique + etat mesurable → CONDITIONNEL\non COMBINE les strategies selon les equipements",
    retenir: [
      "Le choix dépend de la criticité et de la possibilité de surveiller l'état.",
      "Peu critique → correctif ; critique + usure prévisible → systématique ; critique + mesurable → conditionnel.",
      "On combine les stratégies sur un même site, équipement par équipement.",
      "L'objectif est le meilleur compromis coût / risque (coût de possession).",
    ],
    erreurs: [
      "Vouloir appliquer une seule stratégie à tout le site.",
      "Mettre du préventif lourd sur un équipement peu critique (gaspillage).",
      "Laisser en correctif un équipement critique (risque d'arrêt majeur).",
    ],
    astucesPro: [
      "On classe d'abord les équipements par criticité, puis on choisit la stratégie.",
      "On réserve la surveillance conditionnelle (coûteuse) aux équipements critiques.",
      "Le bon choix minimise le coût total (maintenance + conséquences des pannes).",
    ],
    diagnostic: [
      "Évaluer la criticité de l'équipement (impact production, sécurité, coût).",
      "Vérifier si l'état peut être surveillé par une mesure.",
      "Vérifier si l'usure est prévisible dans le temps ou les cycles.",
    ],
    depannage: [
      "Revoir la stratégie d'un équipement qui tombe souvent en panne malgré le plan.",
      "Passer au conditionnel un équipement critique surveillable resté en correctif.",
      "Alléger le systématique d'un équipement peu critique sur-maintenu.",
    ],
    securite: [
      "La criticité intègre toujours la sécurité : un équipement dont la panne est dangereuse est critique, quel que soit son coût.",
      "Le choix de stratégie ne dispense jamais des consignations et procédures d'intervention.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un atelier comporte : un éclairage d'appoint, un compresseur central alimentant toute la production, et un ventilateur avec filtre à usure régulière.",
      mission: ["Proposer une stratégie pour chacun.", "Justifier par la criticité.", "Conclure sur la combinaison."],
      correction:
        "Éclairage d'appoint : peu critique, on reste en correctif (on remplace quand il grille). Compresseur central : très critique (sa panne arrête toute la production) et souvent surveillable (pression, température, vibrations, analyse d'huile) → maintenance conditionnelle, éventuellement prévisionnelle. Ventilateur avec filtre à usure régulière : critique modéré mais usure prévisible → préventif systématique (remplacement du filtre à échéance fixe). Conclusion : sur un même atelier, on combine les stratégies équipement par équipement, en fonction de la criticité et de la possibilité de surveiller l'état, pour obtenir le meilleur compromis coût/risque.",
    },
    memo: ["Criticité + surveillance → stratégie", "Peu critique : correctif", "On combine selon les équipements"],
    resume:
      "On choisit la stratégie de maintenance selon la criticité de l'équipement et la possibilité de surveiller son état ; on combine correctif, systématique et conditionnel sur un site pour le meilleur compromis coût/risque.",
    quizIds: ["mnt21", "mnt22", "mnt23", "mnt24", "mnt25"],
    verification: {
      question: "De quoi dépend d'abord le choix d'une stratégie de maintenance ?",
      options: ["De la couleur de la machine", "De la criticité de l'équipement et de la possibilité de surveiller son état", "Du jour de la semaine", "De la marque du fournisseur"],
      correct: 1,
      explanation: "Le choix dépend de la criticité (impact d'une panne) et de la possibilité de surveiller l'état de l'équipement." ,
    },
    exercice: {
      enonce:
        "Expliquez comment la criticité oriente le choix d'une stratégie, avec un exemple par stratégie.",
      consignes: [
        "Explique le rôle de la criticité.",
        "Donne un exemple de correctif, de systématique et de conditionnel.",
        "Conclus sur la combinaison des stratégies.",
      ],
      criteres: [
        "J'ai relié la criticité au choix.",
        "J'ai donné un exemple par stratégie.",
        "J'ai conclu qu'on combine selon les équipements.",
      ],
      correction:
        "La criticité — l'impact d'une panne sur la production, la sécurité et les coûts — oriente le choix : plus un équipement est critique, plus on cherche à éviter sa panne. Exemples : un éclairage d'appoint (peu critique) reste en correctif ; un filtre à usure régulière (usure prévisible) relève du préventif systématique ; un moteur d'entraînement critique et surveillable (vibrations) relève du conditionnel. On combine donc les stratégies sur un même site, équipement par équipement, pour protéger en priorité les équipements critiques tout en évitant de sur-maintenir les équipements secondaires — c'est le meilleur compromis coût/risque.",
    },
  },
  {
    id: "6-6",
    title: "Le déroulement d'une intervention en sécurité (synthèse)",
    durationMinutes: 30,
    objectifs: [
      "Décrire les grandes étapes d'une intervention de maintenance.",
      "Replacer la sécurité au cœur de chaque étape.",
    ],
    simple:
      "Une intervention de maintenance suit des étapes : préparer (comprendre le besoin, la documentation, les pièces), sécuriser (consignation des énergies, vérification d'absence de tension/pression), intervenir (diagnostic puis action), remettre en service (essais, contrôle des sécurités) et tracer (rapport). La sécurité n'est pas une étape isolée : elle est présente du début à la fin.",
    vocab: [
      ["Préparation", "Rassembler informations, documentation, pièces et outils avant d'intervenir."],
      ["Consignation", "Mettre et maintenir l'installation hors énergie de façon sûre."],
      ["Remise en service", "Redémarrage après essais et vérification des sécurités."],
      ["Traçabilité", "Enregistrement de l'intervention (rapport)."],
      ["Retour d'expérience", "Analyse a posteriori pour améliorer la prévention."],
    ],
    example:
      "Pour remplacer un roulement : on prépare (pièce, outillage, doc), on consigne les énergies et on vérifie l'absence de tension/pression, on remplace le roulement, on effectue les essais et on contrôle les sécurités, puis on rédige le rapport (cause, pièces, temps). Chaque étape intègre la sécurité.",
    schema: "consignation-steps",
    ascii: "PREPARER → SECURISER (consignation + VAT/pression) → INTERVENIR (diagnostic + action)\n→ REMETTRE EN SERVICE (essais + securites) → TRACER (rapport)\nla SECURITE est presente a CHAQUE etape",
    retenir: [
      "Étapes : préparer, sécuriser, intervenir, remettre en service, tracer.",
      "La consignation et la vérification d'absence d'énergie précèdent l'intervention.",
      "La remise en service inclut des essais et le contrôle des sécurités.",
      "La traçabilité (rapport) nourrit le retour d'expérience et la prévention.",
    ],
    erreurs: [
      "Intervenir sans préparer (mauvaise pièce, temps perdu).",
      "Sauter ou bâcler la consignation (danger).",
      "Oublier le rapport, donc perdre l'historique utile à la prévention.",
    ],
    astucesPro: [
      "Une bonne préparation réduit fortement le temps d'immobilisation.",
      "On ne remet jamais en service sans avoir vérifié les sécurités.",
      "Le rapport bien renseigné aujourd'hui accélère le diagnostic de demain.",
    ],
    diagnostic: [
      "Vérifier que la préparation couvre la documentation et les pièces nécessaires.",
      "S'assurer que la consignation est faite avant tout accès aux parties actives.",
      "Contrôler les sécurités avant la remise en service.",
    ],
    depannage: [
      "Reprendre une étape négligée (préparation, consignation) plutôt que de foncer.",
      "Confirmer par des essais que la fonction est bien rétablie.",
      "Compléter le rapport avec la cause identifiée et les actions menées.",
    ],
    securite: [
      "La consignation des énergies et la vérification d'absence de tension/pression sont indispensables avant d'intervenir.",
      "On ne remet jamais en service sans avoir contrôlé les organes de sécurité ; on ne neutralise aucune sécurité.",
      "Cette application est pédagogique et ne remplace ni la formation, ni les habilitations, ni les procédures de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Un technicien pressé veut remplacer une pièce sans préparer ni tracer, pour aller vite.",
      mission: ["Rappeler les étapes d'une intervention.", "Expliquer les risques de sauter la préparation et le rapport.", "Rappeler la place de la sécurité."],
      correction:
        "Une intervention suit les étapes : préparer (documentation, pièces, outillage), sécuriser (consignation des énergies et vérification d'absence de tension/pression), intervenir (diagnostic puis action), remettre en service (essais et contrôle des sécurités) et tracer (rapport). Sauter la préparation expose à prendre la mauvaise pièce, à perdre du temps et à improviser dangereusement ; oublier le rapport fait perdre l'historique utile pour prévenir la récidive et diagnostiquer plus vite la prochaine fois. La sécurité n'est pas une étape à part : la consignation précède l'intervention, le contrôle des sécurités précède la remise en service, et l'on ne neutralise jamais une sécurité. Aller « vite » en sautant ces étapes coûte finalement plus cher et plus dangereux.",
    },
    memo: ["Préparer · sécuriser · intervenir · remettre · tracer", "Consignation avant d'intervenir", "Sécurité à chaque étape"],
    resume:
      "Une intervention de maintenance se déroule en étapes — préparer, sécuriser, intervenir, remettre en service, tracer — avec la sécurité (consignation, contrôle des sécurités) présente du début à la fin.",
    quizIds: ["mnt26", "mnt27", "mnt28", "mnt29", "mnt30"],
    verification: {
      question: "À quel moment la sécurité intervient-elle dans une intervention de maintenance ?",
      options: ["Seulement à la fin", "Seulement au début", "À chaque étape (préparation à remise en service)", "Jamais"],
      correct: 2,
      explanation: "La sécurité est présente à chaque étape : consignation avant d'intervenir, contrôle des sécurités avant la remise en service." ,
    },
    exercice: {
      enonce:
        "Décrivez les étapes d'une intervention de maintenance et montrez que la sécurité est présente partout.",
      consignes: [
        "Cite les étapes dans l'ordre.",
        "Précise l'étape de sécurisation.",
        "Explique la place de la traçabilité.",
      ],
      criteres: [
        "J'ai cité préparer, sécuriser, intervenir, remettre en service, tracer.",
        "J'ai décrit la consignation avant intervention.",
        "J'ai expliqué l'intérêt du rapport.",
      ],
      correction:
        "Les étapes d'une intervention sont : préparer (comprendre le besoin, réunir documentation, pièces et outillage), sécuriser (consigner les énergies et vérifier l'absence de tension/pression), intervenir (diagnostiquer puis agir), remettre en service (réaliser les essais et contrôler les sécurités) et tracer (rédiger le rapport : cause, pièces, temps). La sécurité est présente partout : la consignation précède tout accès aux parties actives, et le contrôle des organes de sécurité précède la remise en service, sans jamais neutraliser une sécurité. La traçabilité conserve l'historique, ce qui nourrit le retour d'expérience, améliore la prévention et accélère les diagnostics futurs.",
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
    status: "available",
    exam: {
      questionIds: ["mnt1", "mnt4", "mnt6", "mnt7", "mnt11", "mnt13", "mnt16", "mnt19", "mnt21", "mnt24", "mnt26", "mnt29"],
      passPercent: 80,
    },
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
  // (bloc 1 complet : 6 chapitres ; blocs 2 à 6 à venir)
  blocks: MAINTENANCE_BLOCKS,
};
