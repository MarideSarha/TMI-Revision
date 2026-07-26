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
  {
    id: "6-4",
    title: "L'inspection et la ronde de maintenance",
    durationMinutes: 28,
    objectifs: [
      "Comprendre le rôle des inspections et rondes préventives.",
      "Utiliser ses sens pour détecter les débuts de dégradation.",
    ],
    simple:
      "L'inspection est un contrôle régulier de l'état d'un équipement, souvent organisé en ronde (un parcours de points à vérifier). Elle s'appuie beaucoup sur l'inspection sensorielle : voir (fuites, jeu, corrosion), entendre (bruit anormal), sentir (odeur de brûlé), toucher avec prudence (échauffement, vibration). Une ronde bien faite détecte tôt, avant la panne.",
    vocab: [
      ["Inspection", "Contrôle régulier de l'état d'un équipement."],
      ["Ronde", "Parcours organisé de points de contrôle à vérifier périodiquement."],
      ["Inspection sensorielle", "Détection par les sens : vue, ouïe, odorat, toucher (avec prudence)."],
      ["Check-list", "Liste des points à vérifier lors de la ronde."],
      ["Signal faible", "Petit signe précoce (léger bruit, suintement) annonçant une dégradation."],
    ],
    example:
      "Lors d'une ronde, on repère un léger suintement d'huile sous un réducteur, un bruit de roulement qui « chante », et un moteur anormalement chaud au toucher (avec prudence). Aucun n'a encore arrêté la machine, mais ces signaux faibles annoncent des dégradations : on planifie l'intervention.",
    schema: "maintenance-types",
    ascii: "INSPECTION / RONDE = parcours de points a controler regulierement\nSENS : VOIR (fuite, jeu) · ENTENDRE (bruit) · SENTIR (brule) · TOUCHER (chaleur, avec prudence)\ndetecter les SIGNAUX FAIBLES → agir AVANT la panne",
    retenir: [
      "L'inspection contrôle régulièrement l'état ; la ronde en organise le parcours.",
      "L'inspection sensorielle mobilise la vue, l'ouïe, l'odorat et le toucher (prudent).",
      "On cherche les signaux faibles : ils annoncent la dégradation avant la panne.",
      "Une check-list garantit qu'aucun point n'est oublié.",
    ],
    erreurs: [
      "Faire une ronde « machinalement » sans vraiment observer.",
      "Négliger un signal faible parce que « ça marche encore ».",
      "Toucher des parties chaudes ou en mouvement sans précaution.",
    ],
    astucesPro: [
      "On compare toujours à l'état normal connu : un bruit ou une chaleur inhabituels alertent.",
      "On note et on trace les observations, même sans intervention immédiate.",
      "Une ronde régulière au même parcours rend les écarts plus visibles.",
    ],
    diagnostic: [
      "Comparer l'état observé à l'état normal de référence.",
      "Relier un signal faible (bruit, chaleur, fuite) à une dégradation possible.",
      "Prioriser selon la criticité et l'évolution du signe.",
    ],
    depannage: [
      "Planifier une intervention dès qu'un signal faible se confirme.",
      "Approfondir par une mesure (surveillance) si le signe persiste.",
      "Tracer l'observation pour suivre son évolution.",
    ],
    securite: [
      "Le toucher (chaleur, vibration) se fait avec prudence et jamais sur des parties actives ou en mouvement dangereuses.",
      "L'inspection se fait dans le respect des accès autorisés et des EPI.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Pendant une ronde, un technicien entend un roulement qui « chante » légèrement sur un ventilateur, sans autre symptôme.",
      mission: ["Dire ce que représente ce bruit.", "Indiquer la conduite à tenir.", "Rappeler une précaution."],
      correction:
        "Ce bruit léger est un signal faible : un roulement qui « chante » annonce souvent un début de dégradation, même si le ventilateur fonctionne encore normalement. Conduite à tenir : ne pas l'ignorer sous prétexte que « ça marche encore » ; noter et tracer l'observation, comparer à l'état normal, et selon la criticité, approfondir par une mesure (analyse vibratoire) puis planifier le remplacement avant la panne. Précaution : lors de l'inspection sensorielle, le toucher pour évaluer chaleur ou vibration se fait avec prudence, jamais sur des parties en mouvement ou actives dangereuses, et dans le respect des accès et EPI.",
    },
    memo: ["Ronde = parcours de contrôle", "Sens : voir/entendre/sentir/toucher (prudence)", "Signal faible = agir avant la panne"],
    resume:
      "L'inspection, souvent en ronde, contrôle régulièrement l'état des équipements par les sens ; en détectant les signaux faibles, elle permet d'agir avant la panne, en sécurité et en traçant les observations.",
    quizIds: ["mnt16", "mnt17", "mnt18", "mnt19", "mnt20"],
    verification: {
      question: "Qu'est-ce qu'un « signal faible » lors d'une inspection ?",
      options: ["Une panne totale", "Un petit signe précoce (léger bruit, suintement) annonçant une dégradation", "Un voyant éteint normal", "Un bruit de fonctionnement normal"],
      correct: 1,
      explanation: "Un signal faible est un petit signe précoce qui annonce une dégradation avant la panne : il ne faut pas l'ignorer." ,
    },
    exercice: {
      enonce:
        "Expliquez le rôle d'une ronde d'inspection et comment l'inspection sensorielle aide à détecter tôt.",
      consignes: [
        "Définis l'inspection et la ronde.",
        "Décris l'inspection sensorielle (les sens).",
        "Explique l'intérêt des signaux faibles et une précaution.",
      ],
      criteres: [
        "J'ai défini inspection et ronde.",
        "J'ai décrit l'usage des sens (avec prudence pour le toucher).",
        "J'ai expliqué la détection précoce et une précaution de sécurité.",
      ],
      correction:
        "L'inspection est un contrôle régulier de l'état d'un équipement ; la ronde en organise le parcours à travers une série de points à vérifier. L'inspection sensorielle mobilise les sens : la vue (fuites, jeu, corrosion), l'ouïe (bruits anormaux), l'odorat (odeur de brûlé) et le toucher, avec prudence (échauffement, vibration). Son intérêt est de détecter les signaux faibles — petits signes précoces — pour agir avant la panne : on note et on trace ces observations, on les compare à l'état normal, et on planifie une intervention si le signe se confirme. Précaution : le toucher se fait avec prudence, jamais sur des parties en mouvement ou actives dangereuses, et dans le respect des accès et EPI.",
    },
  },
  {
    id: "6-5",
    title: "Gérer les pièces de rechange et les consommables",
    durationMinutes: 28,
    objectifs: [
      "Comprendre l'enjeu de la gestion des pièces de rechange.",
      "Relier le stock à la criticité et au délai d'approvisionnement.",
    ],
    simple:
      "Avoir la bonne pièce au bon moment évite d'allonger un arrêt. La gestion des pièces de rechange consiste à décider quoi stocker, en quelle quantité, en fonction de la criticité de l'équipement et du délai pour se procurer la pièce. Une pièce critique à long délai se stocke ; une pièce courante et vite livrée peut ne pas l'être.",
    vocab: [
      ["Pièce de rechange", "Pièce tenue en réserve pour remplacer un composant défaillant."],
      ["Consommable", "Fourniture utilisée couramment (filtres, joints, graisse…)."],
      ["Stock de sécurité", "Quantité minimale conservée pour faire face aux aléas."],
      ["Délai d'approvisionnement", "Temps nécessaire pour obtenir la pièce."],
      ["Standardisation", "Réduire la diversité des pièces pour simplifier le stock."],
    ],
    example:
      "Une carte électronique spécifique, critique et livrée en 6 semaines, se stocke pour éviter 6 semaines d'arrêt. À l'inverse, des vis standard livrées le lendemain n'ont pas besoin d'un gros stock. On raisonne criticité × délai.",
    schema: "maintenance-types",
    ascii: "STOCKER ? = f(CRITICITE de l'equipement × DELAI d'appro de la piece)\ncritique + long delai → STOCKER (stock de securite)\ncourante + livree vite → stock reduit ou nul\nSTANDARDISER les pieces = stock plus simple",
    retenir: [
      "La bonne pièce au bon moment évite d'allonger l'arrêt.",
      "On décide de stocker selon la criticité de l'équipement et le délai d'approvisionnement.",
      "Une pièce critique à long délai se stocke (stock de sécurité).",
      "La standardisation des pièces simplifie et allège le stock.",
    ],
    erreurs: [
      "Sur-stocker (immobilise de l'argent, pièces qui vieillissent).",
      "Sous-stocker une pièce critique à long délai (arrêt prolongé).",
      "Multiplier les références différentes pour un même besoin.",
    ],
    astucesPro: [
      "On croise criticité de l'équipement et délai de la pièce pour décider du stock.",
      "On standardise quand c'est possible : moins de références, gestion plus simple.",
      "On surveille les consommables (filtres, joints) pour ne jamais être à court.",
    ],
    diagnostic: [
      "Vérifier que les pièces critiques à long délai sont bien en stock.",
      "Repérer les références multiples qui pourraient être standardisées.",
      "Contrôler les niveaux de consommables courants.",
    ],
    depannage: [
      "Constituer un stock de sécurité pour une pièce critique manquante.",
      "Réduire un stock excessif de pièces peu critiques.",
      "Remplacer plusieurs références par une pièce standard commune.",
    ],
    securite: [
      "On utilise des pièces conformes (référence, qualité) : une pièce inadaptée peut créer un risque.",
      "Le stockage respecte les conditions (produits, lubrifiants) et la gestion des déchets.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Deux pièces : (A) une carte spécifique d'un équipement critique, livrée en 6 semaines ; (B) un joint standard d'un équipement secondaire, livré le lendemain.",
      mission: ["Décider quoi stocker.", "Justifier par criticité et délai.", "Citer un risque de mauvaise gestion."],
      correction:
        "La pièce A (carte spécifique, équipement critique, délai 6 semaines) doit être en stock : sans elle, une panne entraînerait jusqu'à 6 semaines d'arrêt d'un équipement critique. La pièce B (joint standard, équipement secondaire, livré le lendemain) ne justifie pas un gros stock : on peut la commander à la demande, ou n'en garder que quelques-unes comme consommable courant. On raisonne donc criticité × délai. Risques d'une mauvaise gestion : sous-stocker A prolonge fortement l'arrêt ; sur-stocker des pièces peu critiques immobilise de l'argent et laisse vieillir des pièces. Enfin, on n'utilise que des pièces conformes, une pièce inadaptée pouvant créer un risque.",
    },
    memo: ["Stocker = criticité × délai", "Critique + long délai → stock de sécurité", "Standardiser allège le stock"],
    resume:
      "Gérer les pièces de rechange, c'est décider quoi stocker selon la criticité de l'équipement et le délai d'approvisionnement ; on stocke les pièces critiques à long délai et on standardise pour simplifier.",
    quizIds: ["mnt21", "mnt22", "mnt23", "mnt24", "mnt25"],
    verification: {
      question: "De quoi dépend la décision de stocker une pièce de rechange ?",
      options: ["De sa couleur", "De la criticité de l'équipement et du délai d'approvisionnement", "Du jour de la semaine", "De rien"],
      correct: 1,
      explanation: "On stocke selon la criticité de l'équipement et le délai pour obtenir la pièce : critique + long délai = à stocker." ,
    },
    exercice: {
      enonce:
        "Expliquez comment décider quelles pièces stocker et l'intérêt de la standardisation.",
      consignes: [
        "Explique le critère criticité × délai.",
        "Donne un exemple de pièce à stocker et une à ne pas stocker.",
        "Explique l'intérêt de standardiser.",
      ],
      criteres: [
        "J'ai relié le stock à criticité et délai.",
        "J'ai donné deux exemples opposés.",
        "J'ai expliqué l'intérêt de la standardisation.",
      ],
      correction:
        "On décide de stocker une pièce en croisant deux facteurs : la criticité de l'équipement (impact d'une panne) et le délai d'approvisionnement de la pièce. Une pièce critique à long délai (par exemple une carte spécifique livrée en 6 semaines) se stocke en stock de sécurité, car son absence prolongerait l'arrêt d'un équipement important ; une pièce courante et vite livrée (une vis ou un joint standard) ne nécessite pas un gros stock. La standardisation — réduire la diversité des références en utilisant des pièces communes — simplifie la gestion, diminue le nombre d'articles à stocker et facilite les remplacements. On veille aussi à n'utiliser que des pièces conformes.",
    },
  },
  {
    id: "6-6",
    title: "Bâtir et suivre son plan (synthèse)",
    durationMinutes: 30,
    objectifs: [
      "Assembler les éléments d'un plan de maintenance préventive.",
      "Suivre et ajuster le plan grâce au retour d'expérience.",
    ],
    simple:
      "Ce chapitre relie le bloc : on part des équipements et de leur criticité, on définit pour chacun des opérations (gammes) et des périodicités, on intègre lubrification, inspections/rondes et pièces de rechange, puis on planifie. Enfin, on suit le plan (est-il réalisé ?) et on l'ajuste avec le retour d'expérience : c'est une boucle d'amélioration.",
    vocab: [
      ["Plan de maintenance", "Ensemble organisé des opérations préventives et de leurs périodicités."],
      ["Planification", "Répartir les opérations dans le temps et entre les personnes."],
      ["Suivi", "Vérifier que les opérations prévues sont bien réalisées."],
      ["Retour d'expérience (REX)", "Analyse du vécu pour améliorer le plan."],
      ["Boucle d'amélioration", "Cycle planifier → réaliser → analyser → ajuster."],
    ],
    example:
      "Pour un atelier : on liste les équipements par criticité, on écrit les gammes (graissage, contrôles), on fixe les périodicités (compteurs pour l'usure, calendrier pour le reste), on prévoit les rondes et les pièces critiques, on planifie. Après quelques mois, l'historique montre où renforcer ou alléger : on ajuste.",
    schema: "maintenance-types",
    ascii: "BATIR : equipements+criticite → gammes → periodicites → lubrification/rondes/pieces → PLANIFIER\nSUIVRE : les operations sont-elles REALISEES ?\nAJUSTER : REX → renforcer/alleger (boucle : planifier→realiser→analyser→ajuster)",
    retenir: [
      "On bâtit le plan à partir des équipements et de leur criticité.",
      "On y intègre gammes, périodicités, lubrification, rondes et pièces de rechange.",
      "Le suivi vérifie que les opérations prévues sont réalisées.",
      "Le retour d'expérience ajuste le plan : c'est une boucle d'amélioration.",
    ],
    erreurs: [
      "Bâtir un plan et ne pas suivre sa réalisation.",
      "Ne jamais analyser le vécu ni ajuster le plan.",
      "Planifier sans tenir compte de la disponibilité des personnes et des arrêts.",
    ],
    astucesPro: [
      "Un plan non suivi ne sert à rien : le suivi est aussi important que le plan.",
      "L'analyse régulière du vécu révèle les vrais points à améliorer.",
      "On planifie les opérations sur des arrêts choisis, pas au hasard.",
    ],
    diagnostic: [
      "Vérifier le taux de réalisation des opérations planifiées.",
      "Comparer les pannes survenues au plan pour repérer les manques.",
      "Identifier les opérations inutiles ou trop fréquentes à alléger.",
    ],
    depannage: [
      "Corriger un plan non réalisé (charge, planification, moyens).",
      "Renforcer le préventif sur les points qui pannent malgré le plan.",
      "Alléger ou espacer les opérations sans valeur ajoutée.",
    ],
    securite: [
      "Le plan intègre et planifie les contrôles de sécurité (protecteurs, arrêts d'urgence).",
      "La réalisation des opérations suit toujours la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un plan préventif existe mais, en pratique, la moitié des opérations ne sont pas réalisées et les pannes continuent.",
      mission: ["Dire ce qui manque.", "Proposer une démarche.", "Expliquer la boucle d'amélioration."],
      correction:
        "Ce qui manque, c'est le suivi : un plan qui n'est pas réalisé ne protège pas des pannes. La démarche : d'abord vérifier pourquoi la moitié des opérations n'est pas faite (charge de travail, planification irréaliste, manque de moyens ou de pièces) et corriger la planification pour la rendre tenable ; ensuite comparer les pannes survenues au plan pour voir si le préventif est bien ciblé. La boucle d'amélioration relie quatre étapes : planifier (le plan), réaliser (les opérations), analyser (le suivi et le retour d'expérience) et ajuster (renforcer là où ça panne, alléger là où c'est inutile). Un plan vivant, suivi et ajusté, réduit progressivement les pannes ; un plan seulement écrit ne sert à rien.",
    },
    memo: ["Bâtir → planifier → suivre → ajuster", "Un plan non suivi ne sert à rien", "REX = boucle d'amélioration"],
    resume:
      "Bâtir un plan préventif, c'est partir des équipements et de leur criticité pour définir gammes et périodicités, intégrer lubrification, rondes et pièces, planifier, puis suivre et ajuster grâce au retour d'expérience.",
    quizIds: ["mnt26", "mnt27", "mnt28", "mnt29", "mnt30"],
    verification: {
      question: "Que faut-il faire en plus de bâtir un plan de maintenance ?",
      options: ["Rien de plus", "Le suivre (vérifier sa réalisation) et l'ajuster grâce au retour d'expérience", "Le ranger dans un tiroir", "Le recommencer chaque jour"],
      correct: 1,
      explanation: "Un plan doit être suivi (opérations réalisées ?) et ajusté avec le retour d'expérience : c'est une boucle d'amélioration." ,
    },
    exercice: {
      enonce:
        "Décrivez comment bâtir puis faire vivre un plan de maintenance préventive.",
      consignes: [
        "Décris les étapes pour bâtir le plan.",
        "Explique le rôle du suivi.",
        "Décris la boucle d'amélioration.",
      ],
      criteres: [
        "J'ai décrit la construction (criticité, gammes, périodicités, lubrification/rondes/pièces).",
        "J'ai expliqué le suivi de réalisation.",
        "J'ai décrit la boucle planifier/réaliser/analyser/ajuster.",
      ],
      correction:
        "Pour bâtir le plan, on part des équipements classés par criticité, on définit pour chacun les opérations (gammes) et leurs périodicités (temps, compteur ou état), en intégrant la lubrification, les inspections/rondes et les pièces de rechange nécessaires, puis on planifie les opérations dans le temps et entre les personnes. Le suivi vérifie ensuite que les opérations prévues sont réellement réalisées : un plan non suivi ne protège de rien. Enfin, la boucle d'amélioration relie quatre étapes — planifier, réaliser, analyser (retour d'expérience et pannes constatées) et ajuster (renforcer là où ça panne, alléger là où c'est inutile). Le plan devient ainsi vivant et réduit progressivement les pannes, la sécurité restant intégrée à chaque opération.",
    },
  },
];

const block2Lessons: Lesson[] = [
  {
    id: "6-7",
    title: "Le principe de la surveillance conditionnelle",
    durationMinutes: 30,
    objectifs: [
      "Comprendre comment on surveille l'état d'un équipement par la mesure.",
      "Utiliser référence, tendance et seuil d'alerte pour décider.",
    ],
    simple:
      "Surveiller l'état, c'est mesurer régulièrement une grandeur qui renseigne sur la santé d'une machine (vibration, température, particules dans l'huile…), la comparer à une référence saine, et suivre son évolution dans le temps (la tendance). On ne réagit pas à une mesure isolée : c'est la montée vers un seuil d'alerte qui déclenche la décision d'intervenir.",
    vocab: [
      ["Grandeur surveillée", "Paramètre mesuré qui renseigne sur l'état (vibration, température…)."],
      ["Référence", "Valeur mesurée à l'état sain, servant de point de comparaison."],
      ["Tendance", "Évolution de la mesure dans le temps (stable, en hausse…)."],
      ["Seuil d'alerte", "Valeur au-delà de laquelle on décide d'agir."],
      ["Périodicité de mesure", "Fréquence des relevés (assez rapprochés pour voir la tendance)."],
    ],
    example:
      "On mesure chaque semaine la vibration d'un moteur. À l'état sain, elle est basse (référence). Semaine après semaine, elle monte : la tendance est claire. Quand elle franchit le seuil d'alerte, on planifie le remplacement du roulement — avant la panne, pas après.",
    schema: "maintenance-types",
    illustrations: ["condition-trend"],
    ascii: "MESURER regulierement → COMPARER a la REFERENCE (etat sain) → suivre la TENDANCE\ndecision au SEUIL d'alerte (ni trop tot, ni trop tard)\nune mesure ISOLEE dit peu ; c'est la TENDANCE qui alerte",
    retenir: [
      "On mesure régulièrement une grandeur liée à l'état de la machine.",
      "On compare à une référence (état sain) et on suit la tendance.",
      "La décision se prend au seuil d'alerte, pas sur une mesure isolée.",
      "Les relevés doivent être assez fréquents pour voir la tendance.",
    ],
    erreurs: [
      "Réagir à une seule mesure sans regarder l'évolution.",
      "Ne pas disposer de référence (état sain) pour comparer.",
      "Espacer trop les mesures : on rate la montée.",
    ],
    astucesPro: [
      "On mesure toujours dans les mêmes conditions (régime, point) pour comparer.",
      "Une mesure surprenante se confirme avant de conclure.",
      "La tendance, même sous le seuil, annonce quand on devra intervenir.",
    ],
    diagnostic: [
      "Comparer la mesure à la référence et au seuil.",
      "Analyser la tendance pour anticiper le franchissement.",
      "Confirmer une alerte par une mesure supplémentaire.",
    ],
    depannage: [
      "Planifier l'intervention quand la tendance approche du seuil.",
      "Vérifier la répétabilité des mesures avant de décider.",
      "Tracer les relevés pour affiner les seuils dans le temps.",
    ],
    securite: [
      "La prise de mesures se fait dans le respect des accès et des EPI, sans exposition aux parties actives.",
      "Toute intervention consécutive suit la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "La vibration d'un moteur critique, mesurée chaque semaine, passe de 1,2 à 3,1 mm/s en six semaines ; le seuil d'alerte est 3,5 mm/s.",
      mission: ["Analyser la situation.", "Dire quand intervenir.", "Justifier de ne pas attendre la panne."],
      correction:
        "La tendance est clairement à la hausse : de 1,2 mm/s (proche de l'état sain) à 3,1 mm/s en six semaines, la vibration se rapproche du seuil de 3,5 mm/s. On n'intervient pas encore puisque le seuil n'est pas franchi, mais on resserre la surveillance et on prépare l'intervention : au prochain relevé qui franchira 3,5 mm/s, on planifie le remplacement du roulement lors d'un arrêt choisi. On ne conclut pas sur une mesure isolée, mais la tendance permet d'anticiper. Ne pas attendre la panne évite une casse en production (arrêt subi, coûts, risque) : c'est tout l'intérêt du conditionnel — intervenir au bon moment, ni trop tôt (gaspillage) ni trop tard.",
    },
    memo: ["Mesurer · comparer · suivre la tendance", "Décision au seuil, pas sur 1 mesure", "Même conditions de mesure"],
    resume:
      "La surveillance conditionnelle mesure régulièrement une grandeur liée à l'état, la compare à une référence et suit sa tendance ; la décision d'intervenir se prend au franchissement du seuil d'alerte.",
    quizIds: ["mnt31", "mnt32", "mnt33", "mnt34", "mnt35"],
    verification: {
      question: "Sur quoi se base la décision d'intervenir en surveillance conditionnelle ?",
      options: ["Une seule mesure isolée", "La tendance des mesures et le franchissement du seuil d'alerte", "La couleur de la machine", "Le calendrier fixe"],
      correct: 1,
      explanation: "On suit la tendance des mesures comparée à une référence ; la décision se prend au franchissement du seuil d'alerte." ,
    },
    exercice: {
      enonce:
        "Expliquez le principe de la surveillance conditionnelle avec les notions de référence, tendance et seuil.",
      consignes: [
        "Explique ce qu'on mesure et à quelle fréquence.",
        "Explique le rôle de la référence et de la tendance.",
        "Explique la décision au seuil.",
      ],
      criteres: [
        "J'ai décrit la mesure régulière d'une grandeur d'état.",
        "J'ai relié référence et tendance.",
        "J'ai situé la décision au seuil d'alerte.",
      ],
      correction:
        "La surveillance conditionnelle consiste à mesurer régulièrement une grandeur qui renseigne sur l'état de la machine (vibration, température, particules d'usure dans l'huile…), à une périodicité assez rapprochée pour voir l'évolution. On compare chaque mesure à une référence prise à l'état sain, et surtout on suit la tendance : une valeur qui monte régulièrement annonce une dégradation. On ne décide pas sur une mesure isolée : c'est le franchissement d'un seuil d'alerte, après une tendance à la hausse, qui déclenche la planification de l'intervention — avant la panne, ni trop tôt ni trop tard. Les mesures se prennent toujours dans les mêmes conditions pour être comparables.",
    },
  },
  {
    id: "6-8",
    title: "L'analyse vibratoire",
    durationMinutes: 32,
    objectifs: [
      "Comprendre ce que révèle la vibration d'une machine tournante.",
      "Associer des défauts courants à leur signature vibratoire.",
    ],
    simple:
      "Une machine tournante saine vibre peu ; une machine dégradée vibre plus, et surtout différemment. L'analyse vibratoire mesure ce niveau et, en regardant à quelle fréquence la machine vibre, permet de distinguer les défauts : un balourd (déséquilibre) vibre à la vitesse de rotation, un désalignement donne une signature particulière, un roulement usé génère des vibrations à hautes fréquences.",
    vocab: [
      ["Vibration", "Oscillation d'une machine ; son niveau et sa fréquence renseignent sur l'état."],
      ["Balourd", "Déséquilibre d'une pièce tournante ; vibre à la fréquence de rotation."],
      ["Désalignement", "Arbres mal alignés ; signature vibratoire caractéristique."],
      ["Défaut de roulement", "Écaillage/usure ; vibrations à hautes fréquences typiques."],
      ["Spectre", "Décomposition de la vibration par fréquence, qui aide à identifier le défaut."],
    ],
    example:
      "Un ventilateur vibre de plus en plus. L'analyse montre une forte vibration à la fréquence de rotation : c'est un balourd (une pale encrassée ou abîmée déséquilibre l'hélice). Un autre cas, avec des composantes à hautes fréquences, oriente vers un roulement en fin de vie.",
    schema: "balance-vibration",
    ascii: "machine SAINE vibre peu ; machine DEGRADEE vibre PLUS et AUTREMENT\nNIVEAU (combien) + FREQUENCE (a quelle vitesse) → identifier le defaut\nbalourd = f rotation · desalignement = signature · roulement = hautes frequences",
    retenir: [
      "Le niveau de vibration augmente avec la dégradation.",
      "La fréquence de la vibration aide à identifier le défaut.",
      "Balourd : vibration à la fréquence de rotation.",
      "Roulement usé : composantes à hautes fréquences.",
    ],
    erreurs: [
      "Ne regarder que le niveau global sans la fréquence (on perd l'identification).",
      "Mesurer dans des conditions différentes d'une fois à l'autre.",
      "Confondre balourd (rotation) et défaut de roulement (hautes fréquences).",
    ],
    astucesPro: [
      "On mesure toujours au même point et au même régime pour comparer.",
      "Une hausse du niveau global déclenche une analyse plus fine (spectre).",
      "Le suivi dans le temps (tendance) vaut mieux qu'une mesure ponctuelle.",
    ],
    diagnostic: [
      "Comparer le niveau vibratoire à la référence et au seuil.",
      "Regarder la fréquence dominante pour orienter vers un défaut.",
      "Confirmer par la tendance et, si besoin, une analyse spectrale.",
    ],
    depannage: [
      "Balourd : nettoyer/équilibrer la pièce tournante.",
      "Désalignement : contrôler et corriger l'alignement des arbres.",
      "Roulement : planifier son remplacement avant la panne.",
    ],
    securite: [
      "Les mesures sur machine en marche se font avec les EPI adaptés, sans approcher les parties tournantes.",
      "Toute intervention (équilibrage, remplacement) suit la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un ventilateur voit son niveau vibratoire grimper ; l'analyse montre une composante dominante exactement à la fréquence de rotation.",
      mission: ["Identifier le défaut probable.", "Expliquer le raisonnement.", "Proposer l'action."],
      correction:
        "Une vibration dominante à la fréquence de rotation est la signature typique d'un balourd (déséquilibre de la partie tournante) : ici, une pale encrassée ou légèrement abîmée déséquilibre l'hélice, ce qui produit une vibration à un tour par rotation. Le raisonnement s'appuie sur la fréquence, pas seulement sur le niveau : c'est elle qui distingue un balourd d'un désalignement ou d'un défaut de roulement (hautes fréquences). Action : contrôler et nettoyer l'hélice, puis rééquilibrer si nécessaire ; on planifie l'intervention avant que le niveau ne devienne dangereux. Les mesures et l'intervention se font en sécurité (EPI, pas d'approche des parties tournantes, consignation pour intervenir).",
    },
    memo: ["Niveau + fréquence = identification", "Balourd = fréquence de rotation", "Roulement = hautes fréquences"],
    resume:
      "L'analyse vibratoire mesure le niveau et la fréquence des vibrations d'une machine tournante : le niveau signale la dégradation, la fréquence identifie le défaut (balourd, désalignement, roulement).",
    quizIds: ["mnt36", "mnt37", "mnt38", "mnt39", "mnt40"],
    verification: {
      question: "Un défaut de balourd se traduit par une vibration principalement :",
      options: ["à hautes fréquences", "à la fréquence de rotation de la machine", "nulle", "sans lien avec la rotation"],
      correct: 1,
      explanation: "Le balourd (déséquilibre) génère une vibration à la fréquence de rotation ; les roulements donnent plutôt des hautes fréquences." ,
    },
    exercice: {
      enonce:
        "Expliquez ce que mesure l'analyse vibratoire et comment la fréquence aide à identifier un défaut.",
      consignes: [
        "Explique le rôle du niveau de vibration.",
        "Explique le rôle de la fréquence.",
        "Associe deux défauts à leur signature.",
      ],
      criteres: [
        "J'ai relié le niveau à la dégradation.",
        "J'ai expliqué que la fréquence identifie le défaut.",
        "J'ai associé balourd et roulement à leur signature.",
      ],
      correction:
        "L'analyse vibratoire mesure d'abord le niveau de vibration : plus une machine tournante est dégradée, plus elle vibre, donc une hausse du niveau signale un problème. Mais c'est la fréquence de la vibration qui permet d'identifier le défaut : en regardant à quelle fréquence la machine vibre (le spectre), on distingue les causes. Deux exemples : un balourd (déséquilibre de la partie tournante) génère une vibration à la fréquence de rotation, tandis qu'un défaut de roulement (écaillage, usure) produit des vibrations à hautes fréquences caractéristiques ; un désalignement a encore une autre signature. On mesure toujours au même point et au même régime, et on suit la tendance pour intervenir avant la panne.",
    },
  },
  {
    id: "6-9",
    title: "La thermographie infrarouge",
    durationMinutes: 30,
    objectifs: [
      "Comprendre comment la thermographie révèle des défauts.",
      "Interpréter un point chaud selon son contexte.",
    ],
    simple:
      "La thermographie infrarouge utilise une caméra qui « voit » la chaleur : elle transforme les températures en image. Un point anormalement chaud trahit souvent un défaut : une connexion électrique desserrée qui chauffe, un roulement qui s'échauffe, un frottement excessif. C'est une mesure sans contact, rapide, mais qui s'interprète toujours dans son contexte.",
    vocab: [
      ["Thermographie", "Mesure et visualisation des températures par caméra infrarouge."],
      ["Point chaud", "Zone anormalement chaude révélant souvent un défaut."],
      ["Sans contact", "La mesure se fait à distance, sans toucher l'objet."],
      ["Émissivité", "Aptitude d'une surface à émettre de l'infrarouge ; influe sur la mesure."],
      ["Comparaison", "On compare une zone à une zone équivalente saine pour juger."],
    ],
    example:
      "Sur un tableau électrique, la caméra montre une borne bien plus chaude que ses voisines identiques : c'est le signe d'une connexion desserrée ou oxydée qui résiste et chauffe. Repérée tôt, on la resserre avant qu'elle ne provoque une panne ou un échauffement dangereux.",
    schema: "maintenance-types",
    ascii: "CAMERA infrarouge = voir la CHALEUR (image thermique, SANS contact)\nPOINT CHAUD anormal → connexion desserree, roulement chaud, frottement\ninterpreter en COMPARANT a une zone equivalente SAINE (attention emissivite)",
    retenir: [
      "La thermographie visualise les températures sans contact.",
      "Un point chaud anormal révèle souvent un défaut (électrique ou mécanique).",
      "On interprète en comparant à une zone équivalente saine.",
      "L'émissivité et le contexte influencent la lecture : prudence.",
    ],
    erreurs: [
      "Conclure sur une température absolue sans comparer à une référence.",
      "Oublier l'influence de l'émissivité (surfaces brillantes trompeuses).",
      "Prendre un échauffement normal (charge élevée) pour un défaut.",
    ],
    astucesPro: [
      "On compare des éléments identiques (trois phases, roulements jumeaux) : l'écart parle.",
      "Un point chaud électrique se traite souvent par un simple resserrage… après consignation.",
      "On tient compte de la charge : plus de courant = plus de chaleur normale.",
    ],
    diagnostic: [
      "Comparer la zone suspecte à une zone équivalente saine.",
      "Tenir compte de la charge et de l'émissivité.",
      "Relier le point chaud à un défaut plausible (connexion, roulement, frottement).",
    ],
    depannage: [
      "Connexion chaude : resserrer/refaire la connexion après consignation.",
      "Roulement chaud : vérifier lubrification et usure, planifier si besoin.",
      "Confirmer par une autre méthode si le diagnostic est incertain.",
    ],
    securite: [
      "La thermographie électrique se fait à distance et sans contact ; l'ouverture d'un tableau sous tension relève d'une personne habilitée.",
      "Toute correction (resserrage) se fait après consignation et vérification d'absence de tension.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur un départ moteur triphasé, la thermographie montre une borne d'une phase nettement plus chaude que les deux autres, à charge équilibrée.",
      mission: ["Interpréter l'image.", "Donner la cause probable.", "Indiquer l'action en sécurité."],
      correction:
        "À charge équilibrée, les trois phases devraient chauffer de façon comparable. Une borne d'une phase nettement plus chaude que les deux autres, identiques, est un point chaud anormal : la comparaison entre éléments équivalents rend le défaut évident. Cause probable : une connexion desserrée ou oxydée sur cette phase, qui augmente la résistance de contact et donc l'échauffement. Action en sécurité : l'observation se fait sans contact à distance ; la correction (resserrage ou réfection de la connexion) se fait après consignation et vérification d'absence de tension, par une personne habilitée. Traiter tôt ce point chaud évite une panne, voire un risque d'incendie.",
    },
    memo: ["Caméra IR = voir la chaleur", "Point chaud = défaut probable", "Comparer à une zone saine · consigner"],
    resume:
      "La thermographie infrarouge visualise les températures sans contact ; un point chaud anormal, interprété en comparaison d'une zone saine, révèle souvent un défaut électrique ou mécanique à traiter en sécurité.",
    quizIds: ["mnt41", "mnt42", "mnt43", "mnt44", "mnt45"],
    verification: {
      question: "Que révèle souvent un point chaud anormal en thermographie sur un tableau électrique ?",
      options: ["Un fonctionnement parfait", "Une connexion desserrée ou oxydée qui chauffe", "Une machine trop froide", "Rien du tout"],
      correct: 1,
      explanation: "Un point chaud sur une connexion signale souvent un serrage défectueux ou une oxydation qui augmente la résistance et l'échauffement." ,
    },
    exercice: {
      enonce:
        "Expliquez le principe de la thermographie et comment on interprète un point chaud.",
      consignes: [
        "Explique ce que mesure la caméra infrarouge.",
        "Explique comment interpréter un point chaud.",
        "Cite une précaution de sécurité.",
      ],
      criteres: [
        "J'ai décrit la mesure de température sans contact.",
        "J'ai expliqué la comparaison à une zone saine (et l'émissivité/charge).",
        "J'ai cité une précaution (consignation avant correction).",
      ],
      correction:
        "La thermographie infrarouge utilise une caméra qui mesure le rayonnement infrarouge et le transforme en image thermique : elle visualise les températures sans contact, à distance. Pour interpréter un point chaud, on ne se fie pas à une température absolue mais on compare la zone suspecte à une zone équivalente saine (par exemple les trois phases d'un départ moteur) : un écart anormal révèle un défaut, comme une connexion desserrée qui chauffe. On tient compte de la charge (plus de courant = plus de chaleur normale) et de l'émissivité des surfaces. Précaution : l'observation est sans contact, mais toute correction (resserrage) se fait après consignation et vérification d'absence de tension, par une personne habilitée.",
    },
  },
  {
    id: "6-10",
    title: "L'analyse d'huile",
    durationMinutes: 30,
    objectifs: [
      "Comprendre ce que révèle l'analyse d'un lubrifiant.",
      "Distinguer usure, contamination et dégradation de l'huile.",
    ],
    simple:
      "L'huile qui circule dans une machine « ramasse » des informations sur son état. En analysant un échantillon, on détecte trois choses : des particules d'usure (métal arraché aux pièces), des contaminants (eau, poussières) et l'état de l'huile elle-même (vieillissement). L'analyse d'huile est un véritable « bilan sanguin » de la machine.",
    vocab: [
      ["Analyse d'huile", "Examen d'un échantillon de lubrifiant pour évaluer l'état de la machine."],
      ["Particules d'usure", "Fines particules métalliques arrachées aux pièces en mouvement."],
      ["Contamination", "Présence indésirable d'eau, de poussières ou d'autres impuretés."],
      ["Dégradation de l'huile", "Vieillissement du lubrifiant qui perd ses propriétés."],
      ["Échantillon", "Prélèvement d'huile pris dans de bonnes conditions pour l'analyse."],
    ],
    example:
      "Sur un réducteur, l'analyse d'huile révèle une hausse des particules de fer : des engrenages ou roulements s'usent anormalement. Un autre résultat montrant de l'eau signale une entrée d'humidité (joint défectueux) qui va dégrader la lubrification.",
    schema: "maintenance-types",
    ascii: "HUILE = « bilan sanguin » de la machine\n3 infos : PARTICULES d'usure (metal) · CONTAMINATION (eau, poussieres) · etat de l'HUILE (vieillissement)\nsuivre la TENDANCE des resultats dans le temps",
    retenir: [
      "L'analyse d'huile révèle l'usure (particules métalliques), la contamination et le vieillissement de l'huile.",
      "Une hausse des particules d'usure signale une dégradation interne.",
      "De l'eau ou des poussières dans l'huile est une contamination à traiter.",
      "On suit la tendance des résultats, pas une seule analyse.",
    ],
    erreurs: [
      "Prélever l'échantillon n'importe comment (résultat faussé).",
      "Juger sur une seule analyse sans suivre l'évolution.",
      "Confondre usure (métal) et contamination (eau, poussières).",
    ],
    astucesPro: [
      "On prélève toujours au même endroit et dans les mêmes conditions.",
      "La nature du métal trouvé oriente vers la pièce qui s'use.",
      "Une contamination par l'eau appelle à chercher une entrée d'humidité (joint).",
    ],
    diagnostic: [
      "Comparer les résultats à l'historique (tendance) et aux références.",
      "Relier le type de particules à la pièce en usure.",
      "Identifier une contamination (eau, poussières) et sa source.",
    ],
    depannage: [
      "Usure croissante : planifier l'inspection/le remplacement de l'organe concerné.",
      "Contamination : traiter la source (joint, filtration) et changer l'huile si besoin.",
      "Huile dégradée : remplacer le lubrifiant et revoir la périodicité.",
    ],
    securite: [
      "Le prélèvement se fait dans le respect des consignes (température, EPI) et la gestion des huiles usagées.",
      "Toute intervention consécutive suit la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur un réducteur critique, trois analyses d'huile successives montrent une teneur en fer qui augmente régulièrement.",
      mission: ["Interpréter la tendance.", "Dire ce que le fer indique.", "Proposer la conduite à tenir."],
      correction:
        "Trois analyses successives avec une teneur en fer croissante donnent une tendance claire : une usure interne progresse. Le fer indique que des pièces en acier — engrenages ou bagues de roulement du réducteur — s'usent anormalement et libèrent des particules métalliques dans l'huile. Ce n'est pas une valeur isolée mais l'évolution qui alerte. Conduite à tenir : resserrer la surveillance, éventuellement croiser avec l'analyse vibratoire, et planifier une inspection ou le remplacement de l'organe concerné avant la défaillance, sur un arrêt choisi. On vérifie aussi qu'il n'y a pas de contamination associée (eau) et on adapte l'huile/la périodicité. Prélèvements et intervention se font en sécurité, avec gestion des huiles usagées.",
    },
    memo: ["Huile = bilan sanguin", "Usure (métal) · contamination · vieillissement", "Suivre la tendance"],
    resume:
      "L'analyse d'huile est le « bilan sanguin » de la machine : elle révèle l'usure (particules métalliques), la contamination (eau, poussières) et le vieillissement du lubrifiant, à suivre en tendance.",
    quizIds: ["mnt46", "mnt47", "mnt48", "mnt49", "mnt50"],
    verification: {
      question: "Que révèle principalement l'analyse d'huile d'une machine ?",
      options: ["Sa couleur préférée", "L'usure (particules métalliques), la contamination et le vieillissement de l'huile", "Son prix", "Sa vitesse"],
      correct: 1,
      explanation: "L'analyse d'huile détecte les particules d'usure, les contaminants (eau, poussières) et l'état du lubrifiant." ,
    },
    exercice: {
      enonce:
        "Expliquez ce que révèle l'analyse d'huile et pourquoi on la qualifie de « bilan sanguin » de la machine.",
      consignes: [
        "Cite les trois types d'informations.",
        "Explique l'image du bilan sanguin.",
        "Explique l'importance de la tendance.",
      ],
      criteres: [
        "J'ai cité usure, contamination, vieillissement.",
        "J'ai expliqué l'analogie du bilan sanguin.",
        "J'ai souligné le suivi de tendance.",
      ],
      correction:
        "En circulant dans la machine, l'huile se charge d'informations sur son état. Son analyse révèle trois types d'informations : les particules d'usure (fines particules métalliques arrachées aux pièces, dont la nature indique quel organe s'use), la contamination (eau, poussières, autres impuretés indésirables) et l'état de l'huile elle-même (vieillissement, perte de propriétés). C'est pourquoi on parle de « bilan sanguin » : comme une prise de sang, l'échantillon d'huile renseigne sur la santé interne sans démonter. Comme pour les autres méthodes conditionnelles, on ne juge pas sur une seule analyse mais sur la tendance de plusieurs analyses dans le temps, en prélevant toujours dans les mêmes conditions.",
    },
  },
  {
    id: "6-11",
    title: "Les ultrasons et les autres contrôles",
    durationMinutes: 30,
    objectifs: [
      "Découvrir l'apport des ultrasons en surveillance.",
      "Situer les principaux contrôles non destructifs (CND).",
    ],
    simple:
      "Les ultrasons captent des sons trop aigus pour l'oreille humaine. En maintenance, ils détectent très tôt des phénomènes discrets : fuites d'air comprimé ou de gaz (qui sifflent en ultrasons), premiers défauts de roulement, ou décharges électriques. À côté, les contrôles non destructifs (CND) — ressuage, magnétoscopie, ultrasons de contrôle, radiographie — recherchent des fissures sans casser la pièce.",
    vocab: [
      ["Ultrasons", "Sons de fréquence trop élevée pour l'oreille, captés par un appareil dédié."],
      ["Fuite", "Échappement d'air/gaz sous pression, détectable en ultrasons."],
      ["Contrôle non destructif (CND)", "Recherche de défauts (fissures) sans détériorer la pièce."],
      ["Ressuage", "CND révélant les fissures débouchantes par un liquide pénétrant."],
      ["Magnétoscopie", "CND détectant les fissures sur pièces ferromagnétiques."],
    ],
    example:
      "Un détecteur d'ultrasons repère un sifflement inaudible sur un réseau d'air comprimé : une fuite qui gaspille de l'énergie. Sur une pièce mécanique sollicitée, un ressuage révèle une microfissure débouchante avant qu'elle ne casse.",
    schema: "maintenance-types",
    ascii: "ULTRASONS = sons inaudibles → detecter tot : FUITES (air/gaz), 1ers defauts roulement, decharges elec.\nCND (sans casser la piece) : RESSUAGE, MAGNETOSCOPIE, ULTRASONS de controle, RADIO → cherchent les FISSURES",
    retenir: [
      "Les ultrasons détectent tôt fuites, premiers défauts de roulement et décharges électriques.",
      "Une fuite d'air comprimé « siffle » en ultrasons : c'est aussi une perte d'énergie.",
      "Les CND recherchent des fissures sans détériorer la pièce.",
      "Chaque méthode a son domaine : on les combine selon le besoin.",
    ],
    erreurs: [
      "Croire qu'une seule méthode couvre tous les défauts.",
      "Ignorer les fuites d'air comprimé (perte d'énergie continue).",
      "Utiliser un CND inadapté au matériau (ex. magnétoscopie sur métal non magnétique).",
    ],
    astucesPro: [
      "La détection de fuites par ultrasons a un intérêt énergétique immédiat.",
      "On choisit le CND selon le matériau et le type de défaut recherché.",
      "Les ultrasons complètent l'analyse vibratoire pour les tout premiers défauts.",
    ],
    diagnostic: [
      "Choisir la méthode adaptée au phénomène recherché (fuite, fissure, échauffement).",
      "Croiser plusieurs méthodes pour confirmer un diagnostic.",
      "Localiser précisément la source (fuite, fissure) avant d'agir.",
    ],
    depannage: [
      "Fuite détectée : réparer le raccord/composant, après consignation si nécessaire.",
      "Fissure révélée par CND : décider du remplacement selon la criticité.",
      "Combiner les résultats pour un diagnostic fiable.",
    ],
    securite: [
      "Certains CND emploient des produits ou des rayonnements réglementés : ils relèvent de personnes formées et habilitées.",
      "Toute intervention consécutive suit la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un atelier constate une baisse de pression d'air et une consommation électrique élevée du compresseur, sans fuite visible.",
      mission: ["Proposer une méthode de détection.", "Expliquer l'intérêt.", "Citer un autre contrôle utile ailleurs."],
      correction:
        "Pour trouver des fuites d'air comprimé invisibles, la méthode adaptée est la détection par ultrasons : une fuite sous pression émet un sifflement à haute fréquence, inaudible pour l'oreille mais capté par un détecteur d'ultrasons, ce qui permet de localiser précisément les fuites sur le réseau. Intérêt : au-delà de la baisse de pression, les fuites d'air comprimé sont une perte d'énergie continue et coûteuse ; les traiter améliore la disponibilité et réduit la facture. Autre contrôle utile ailleurs : pour rechercher une fissure sur une pièce mécanique sollicitée, on emploie un contrôle non destructif comme le ressuage (fissures débouchantes) ou la magnétoscopie (pièces ferromagnétiques), selon le matériau. Les CND réglementés relèvent de personnes formées.",
    },
    memo: ["Ultrasons : fuites · 1ers défauts · décharges", "Fuite d'air = perte d'énergie", "CND = fissures sans casser"],
    resume:
      "Les ultrasons détectent très tôt fuites, premiers défauts de roulement et décharges ; les contrôles non destructifs (ressuage, magnétoscopie…) recherchent des fissures sans détériorer la pièce.",
    quizIds: ["mnt51", "mnt52", "mnt53", "mnt54", "mnt55"],
    verification: {
      question: "Que détectent particulièrement bien les ultrasons en maintenance ?",
      options: ["La couleur des câbles", "Les fuites d'air/gaz et les tout premiers défauts", "Le prix des pièces", "La vitesse de rotation exacte"],
      correct: 1,
      explanation: "Les ultrasons captent le sifflement des fuites sous pression et révèlent très tôt certains défauts (roulement, décharges)." ,
    },
    exercice: {
      enonce:
        "Expliquez l'apport des ultrasons et ce qu'est un contrôle non destructif, avec un exemple de chaque.",
      consignes: [
        "Explique ce que détectent les ultrasons.",
        "Définis le CND avec un exemple.",
        "Explique pourquoi on combine les méthodes.",
      ],
      criteres: [
        "J'ai cité fuites / premiers défauts pour les ultrasons.",
        "J'ai défini le CND avec un exemple (ressuage, magnétoscopie…).",
        "J'ai expliqué la complémentarité des méthodes.",
      ],
      correction:
        "Les ultrasons captent des sons trop aigus pour l'oreille : en maintenance, ils détectent très tôt des phénomènes discrets comme les fuites d'air comprimé ou de gaz (qui « sifflent » en ultrasons), les tout premiers défauts de roulement ou des décharges électriques. Détecter les fuites a en plus un intérêt énergétique direct. Un contrôle non destructif (CND) recherche des défauts, en particulier des fissures, sans détériorer la pièce : par exemple le ressuage révèle les fissures débouchantes à l'aide d'un liquide pénétrant, la magnétoscopie détecte les fissures sur les pièces ferromagnétiques. On combine les méthodes car chacune a son domaine : les ultrasons pour les fuites et premiers défauts, la vibratoire pour les machines tournantes, la thermographie pour les points chauds, les CND pour les fissures — le croisement fiabilise le diagnostic.",
    },
  },
  {
    id: "6-12",
    title: "Mettre en place la surveillance (synthèse)",
    durationMinutes: 30,
    objectifs: [
      "Choisir les méthodes de surveillance selon l'équipement.",
      "Organiser mesures, seuils et alarmes dans le temps.",
    ],
    simple:
      "Mettre en place la surveillance, c'est décider quoi surveiller, comment et à quelle fréquence. On choisit les méthodes selon l'équipement (vibratoire pour une machine tournante, thermographie pour l'électrique, huile pour un réducteur…), on définit des points de mesure, des références et des seuils, et on organise les relevés et les alarmes. La surveillance ne se justifie que sur les équipements assez critiques.",
    vocab: [
      ["Plan de surveillance", "Choix des méthodes, points, périodicités et seuils par équipement."],
      ["Point de mesure", "Endroit précis et répétable où l'on prend la mesure."],
      ["Seuil / alarme", "Valeurs déclenchant alerte puis action."],
      ["Périodicité de relevé", "Fréquence des mesures, adaptée à la vitesse de dégradation."],
      ["Retour sur investissement", "La surveillance a un coût : elle se justifie sur les équipements critiques."],
    ],
    example:
      "Pour un groupe motopompe critique : analyse vibratoire mensuelle sur les paliers, thermographie trimestrielle de l'armoire, analyse d'huile semestrielle. On fixe pour chacun une référence et un seuil, et on planifie les relevés. Un petit ventilateur secondaire, lui, ne justifie pas tout cela.",
    schema: "maintenance-types",
    ascii: "PLAN de SURVEILLANCE = QUOI surveiller + COMMENT (methode) + OU (points) + QUAND (periodicite) + SEUILS/alarmes\nchoisir la methode selon l'equipement · reserver aux equipements CRITIQUES\nla surveillance nourrit le PLAN preventif (bloc 1)",
    retenir: [
      "On choisit la méthode selon l'équipement (vibratoire, thermographie, huile, ultrasons).",
      "On définit points de mesure, références, seuils et périodicités.",
      "On organise relevés et alarmes dans le temps.",
      "La surveillance se réserve aux équipements assez critiques (elle a un coût).",
    ],
    erreurs: [
      "Vouloir tout surveiller, même les équipements peu critiques (coût injustifié).",
      "Choisir une méthode inadaptée à l'équipement.",
      "Fixer des seuils sans référence ni suivi de tendance.",
    ],
    astucesPro: [
      "On croise criticité et vitesse de dégradation pour fixer la périodicité des relevés.",
      "On combine les méthodes complémentaires sur un même équipement critique.",
      "Les résultats de surveillance alimentent et ajustent le plan préventif.",
    ],
    diagnostic: [
      "Vérifier que chaque équipement critique a une surveillance adaptée.",
      "Contrôler que les points, références et seuils sont définis.",
      "S'assurer que les relevés sont réellement effectués et exploités.",
    ],
    depannage: [
      "Ajouter une méthode manquante sur un équipement critique mal couvert.",
      "Corriger une périodicité de relevé inadaptée à la vitesse de dégradation.",
      "Alléger une surveillance excessive sur un équipement peu critique.",
    ],
    securite: [
      "Les relevés se font en sécurité (accès, EPI) sans exposition aux parties actives ou tournantes.",
      "Les interventions déclenchées par la surveillance suivent la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "On vous confie la mise en place de la surveillance d'un groupe motopompe critique et d'un petit ventilateur secondaire.",
      mission: ["Proposer une surveillance pour chacun.", "Justifier les choix.", "Relier au plan préventif."],
      correction:
        "Pour le groupe motopompe critique, on met en place une surveillance combinée : analyse vibratoire régulière sur les paliers (machine tournante), thermographie de l'armoire électrique associée, et analyse d'huile si un réducteur est présent ; pour chaque méthode, on définit points de mesure, référence, seuil et périodicité (par exemple vibratoire mensuelle). Ces choix se justifient par la criticité élevée : une panne arrêterait une fonction importante, donc l'investissement en surveillance est rentable. Pour le petit ventilateur secondaire, peu critique, une surveillance lourde n'est pas justifiée : une inspection sensorielle lors des rondes suffit, et on reste en correctif. Enfin, la surveillance nourrit le plan préventif du bloc 1 : les tendances mesurées déclenchent les interventions au bon moment et permettent d'ajuster les périodicités.",
    },
    memo: ["Quoi · comment · où · quand · seuils", "Méthode selon l'équipement", "Surveiller le critique · nourrir le plan"],
    resume:
      "Mettre en place la surveillance, c'est choisir les méthodes selon l'équipement, définir points, références, seuils et périodicités, et organiser relevés et alarmes — en la réservant aux équipements critiques et en nourrissant le plan préventif.",
    quizIds: ["mnt56", "mnt57", "mnt58", "mnt59", "mnt60"],
    verification: {
      question: "Sur quels équipements réserve-t-on en priorité une surveillance conditionnelle poussée ?",
      options: ["Tous, sans distinction", "Les équipements assez critiques (car elle a un coût)", "Les moins chers uniquement", "Aucun"],
      correct: 1,
      explanation: "La surveillance a un coût : on la réserve aux équipements assez critiques, là où elle est rentable." ,
    },
    exercice: {
      enonce:
        "Décrivez comment mettre en place la surveillance d'un équipement critique.",
      consignes: [
        "Explique le choix des méthodes selon l'équipement.",
        "Cite ce qu'on définit (points, seuils, périodicités).",
        "Relie la surveillance au plan préventif.",
      ],
      criteres: [
        "J'ai relié la méthode au type d'équipement.",
        "J'ai cité points, références, seuils et périodicités.",
        "J'ai relié la surveillance au plan et à sa mise à jour.",
      ],
      correction:
        "Mettre en place la surveillance d'un équipement critique commence par le choix des méthodes adaptées : l'analyse vibratoire pour une machine tournante, la thermographie pour les organes électriques, l'analyse d'huile pour un réducteur, les ultrasons pour les fuites et premiers défauts. On définit ensuite, pour chaque méthode, des points de mesure précis et répétables, une référence prise à l'état sain, des seuils d'alerte et d'action, et une périodicité de relevé adaptée à la vitesse de dégradation. On organise les relevés et les alarmes dans le temps, et on réserve cette surveillance aux équipements assez critiques pour qu'elle soit rentable. Enfin, la surveillance nourrit le plan de maintenance préventive : les tendances mesurées déclenchent les interventions au bon moment et permettent d'ajuster les périodicités du plan.",
    },
  },
];

const block3Lessons: Lesson[] = [
  {
    id: "6-13",
    title: "Adopter une démarche de diagnostic structurée",
    durationMinutes: 30,
    objectifs: [
      "Suivre une démarche de diagnostic ordonnée plutôt qu'au hasard.",
      "Enchaîner symptôme, observation, hypothèses, tests, cause et action.",
    ],
    simple:
      "Diagnostiquer avec méthode, c'est suivre un enchaînement : décrire le symptôme, observer et recueillir les faits, formuler des hypothèses, les tester une à une, identifier la cause, agir, puis contrôler que c'est résolu et tracer. Cette démarche évite de changer des pièces au hasard et fait gagner du temps.",
    vocab: [
      ["Symptôme", "Ce que l'on constate : l'effet anormal observé."],
      ["Hypothèse", "Cause possible que l'on va vérifier par un test ou une observation."],
      ["Test", "Vérification qui confirme ou écarte une hypothèse."],
      ["Cause", "Origine réelle du problème, à traiter pour résoudre durablement."],
      ["Contrôle", "Vérification finale que la fonction est bien rétablie."],
    ],
    example:
      "Une machine s'arrête. Au lieu de remplacer un composant au hasard, on décrit précisément le symptôme, on observe (voyants, bruits, mesures), on liste les causes possibles, on les teste dans un ordre logique, on trouve la cause, on la traite, puis on vérifie que la machine refonctionne et on trace l'intervention.",
    schema: "diagnostic-flow",
    ascii: "SYMPTOME → OBSERVER (faits) → HYPOTHESES → TESTER une a une → CAUSE → AGIR → CONTROLER → TRACER\ndemarche ORDONNEE (pas de changement de piece au hasard)",
    retenir: [
      "La démarche va du symptôme à la cause, par observation puis tests d'hypothèses.",
      "On teste les hypothèses une à une, dans un ordre logique.",
      "On agit sur la cause, puis on contrôle et on trace.",
      "Une méthode ordonnée bat le remplacement au hasard.",
    ],
    erreurs: [
      "Changer une pièce « pour voir » sans avoir identifié la cause.",
      "Sauter l'observation et conclure trop vite.",
      "Ne pas contrôler que le problème est réellement résolu.",
    ],
    astucesPro: [
      "On commence toujours par le plus simple et le plus probable.",
      "On ne teste qu'une chose à la fois pour savoir ce qui agit.",
      "On note ce qu'on observe : cela évite de tourner en rond.",
    ],
    diagnostic: [
      "Formuler le symptôme précisément avant de chercher.",
      "Recueillir les faits (voyants, mesures, historique) avant d'agir.",
      "Hiérarchiser les hypothèses (probable/simple d'abord).",
    ],
    depannage: [
      "Traiter la cause identifiée, pas seulement le symptôme.",
      "Contrôler par un essai que la fonction est rétablie.",
      "Tracer la cause et l'action pour la prévention.",
    ],
    securite: [
      "Les tests et interventions sur les parties actives se font après consignation et vérification d'absence d'énergie.",
      "On ne contourne jamais une sécurité pour tester plus vite.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Face à une panne, un technicien remplace successivement plusieurs pièces au hasard, sans succès et à grands frais.",
      mission: ["Expliquer le problème de sa méthode.", "Décrire la démarche structurée.", "Rappeler une précaution."],
      correction:
        "Le problème est l'absence de méthode : remplacer des pièces au hasard coûte cher, prend du temps et ne garantit pas de trouver la cause — on peut même en masquer une sans la traiter. La démarche structurée enchaîne : décrire précisément le symptôme, observer et recueillir les faits (voyants, bruits, mesures, historique), formuler des hypothèses hiérarchisées (le plus simple et probable d'abord), les tester une à une, identifier la cause réelle, agir sur elle, puis contrôler que la fonction est rétablie et tracer. Précaution : les tests et interventions sur les parties actives se font après consignation et vérification d'absence d'énergie, sans jamais contourner une sécurité.",
    },
    memo: ["Symptôme → observer → tester → cause → agir → contrôler", "Une hypothèse à la fois", "Pas de pièce au hasard"],
    resume:
      "Une démarche de diagnostic structurée enchaîne symptôme, observation, hypothèses, tests, cause, action, contrôle et traçabilité : elle évite le remplacement au hasard et fait gagner du temps.",
    quizIds: ["mnt61", "mnt62", "mnt63", "mnt64", "mnt65"],
    verification: {
      question: "Quelle est la bonne façon de tester des hypothèses en diagnostic ?",
      options: ["Toutes en même temps", "Une à une, dans un ordre logique", "Aucune, on remplace au hasard", "Seulement la plus improbable"],
      correct: 1,
      explanation: "On teste les hypothèses une à une pour savoir ce qui agit, en commençant par les plus simples et probables." ,
    },
    exercice: {
      enonce:
        "Décrivez, dans l'ordre, une démarche de diagnostic structurée.",
      consignes: [
        "Cite les étapes dans l'ordre.",
        "Explique pourquoi tester une hypothèse à la fois.",
        "Rappelle la sécurité.",
      ],
      criteres: [
        "J'ai cité symptôme → observation → hypothèses → tests → cause → action → contrôle → traçabilité.",
        "J'ai expliqué le test une à une.",
        "J'ai rappelé la consignation.",
      ],
      correction:
        "Une démarche de diagnostic structurée suit cet enchaînement : décrire précisément le symptôme ; observer et recueillir les faits (voyants, bruits, mesures, historique) ; formuler des hypothèses, hiérarchisées du plus simple et probable au plus complexe ; les tester une à une ; identifier la cause réelle ; agir sur cette cause ; contrôler par un essai que la fonction est rétablie ; puis tracer la cause et l'action. On teste une hypothèse à la fois pour savoir précisément ce qui agit : en changeant plusieurs choses simultanément, on ne sait plus quelle action a résolu (ou aggravé) le problème. Enfin, les tests et interventions sur les parties actives se font après consignation et vérification d'absence d'énergie, sans contourner de sécurité.",
    },
  },
  {
    id: "6-14",
    title: "Décrire précisément le problème",
    durationMinutes: 28,
    objectifs: [
      "Formuler un problème avec des faits, pas des interprétations.",
      "Utiliser un questionnement systématique (QQOQCP).",
    ],
    simple:
      "Un bon diagnostic commence par une bonne description du problème. On s'appuie sur des faits observables, pas sur des suppositions, et on répond à des questions simples : Quoi ? Qui ? Où ? Quand ? Comment ? Combien ? (QQOQCP). « La machine s'arrête toutes les deux heures depuis lundi » est une description utile ; « la machine est capricieuse » ne l'est pas.",
    vocab: [
      ["QQOQCP", "Quoi, Qui, Où, Quand, Comment, Combien : questionnement systématique."],
      ["Fait", "Observation objective, vérifiable (mesure, constat)."],
      ["Interprétation", "Explication supposée, non vérifiée : à distinguer du fait."],
      ["Contexte", "Circonstances de l'apparition (quand, dans quel mode…)."],
      ["Fréquence", "À quelle fréquence le problème survient (une fois, périodique…)."],
    ],
    example:
      "Description faible : « le moteur chauffe, il est sûrement fichu ». Description forte : « le moteur atteint 90 °C après 30 min de marche à pleine charge, depuis le changement de courroie de mardi ». La seconde donne des pistes ; la première contient déjà une conclusion non vérifiée.",
    schema: "diagnostic-flow",
    ascii: "DECRIRE avec des FAITS (mesures, constats), PAS des interpretations\nQQOQCP : QUOI · QUI · OU · QUAND · COMMENT · COMBIEN\n« capricieuse » = inutile ; « s'arrete toutes les 2 h depuis lundi » = utile",
    retenir: [
      "On décrit le problème avec des faits observables, pas des interprétations.",
      "Le QQOQCP structure la description (Quoi, Qui, Où, Quand, Comment, Combien).",
      "Le contexte et la fréquence orientent fortement le diagnostic.",
      "Une conclusion glissée dans la description biaise la recherche.",
    ],
    erreurs: [
      "Mélanger fait et interprétation (« il est fichu ») dès la description.",
      "Rester vague (« ça marche mal ») sans données.",
      "Oublier le contexte (depuis quand, dans quel mode).",
    ],
    astucesPro: [
      "On note quand le problème est apparu : un changement récent est souvent lié.",
      "On distingue toujours ce qu'on a vu de ce qu'on suppose.",
      "Des chiffres (température, fréquence) valent mieux que des adjectifs.",
    ],
    diagnostic: [
      "Répondre au QQOQCP pour cadrer le problème.",
      "Séparer les faits des interprétations.",
      "Repérer un changement récent corrélé à l'apparition.",
    ],
    depannage: [
      "Réunir les données manquantes avant de conclure.",
      "Relier l'apparition à un événement (intervention, changement).",
      "Reformuler le problème en faits avant de tester.",
    ],
    securite: [
      "La collecte d'informations se fait sans exposition aux parties actives ; les mesures suivent les habilitations.",
      "Toute intervention consécutive respecte la consignation et les procédures.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un opérateur signale : « la machine est capricieuse, elle fait n'importe quoi ».",
      mission: ["Dire pourquoi cette description est insuffisante.", "Proposer des questions à poser.", "Donner un exemple de bonne description."],
      correction:
        "Cette description est insuffisante car elle ne contient aucun fait exploitable : « capricieuse » et « n'importe quoi » sont des interprétations, pas des observations. Pour la transformer en éléments utiles, on pose des questions de type QQOQCP : Quoi exactement (quel mouvement, quelle fonction) ? Quand cela arrive-t-il (à quel moment du cycle, depuis quand) ? Où (quel poste, quelle partie) ? Comment (progressivement, brutalement) ? Combien de fois (une fois, périodique) ? Qui/quel mode (automatique, manuel) ? Exemple de bonne description obtenue : « en mode automatique, le vérin de serrage ne sort pas une fois sur trois, depuis le nettoyage de vendredi ». Cette formulation, faite de faits, oriente immédiatement la recherche.",
    },
    memo: ["Faits, pas interprétations", "QQOQCP", "Depuis quand ? un changement récent ?"],
    resume:
      "Décrire précisément un problème, c'est le formuler avec des faits observables (pas des interprétations) en s'appuyant sur le QQOQCP, en notant le contexte et la fréquence, ce qui oriente fortement le diagnostic.",
    quizIds: ["mnt66", "mnt67", "mnt68", "mnt69", "mnt70"],
    verification: {
      question: "Laquelle de ces descriptions est la plus utile au diagnostic ?",
      options: ["« La machine est capricieuse »", "« Le vérin ne sort pas une fois sur trois en automatique, depuis vendredi »", "« Elle est fichue »", "« Ça marche mal »"],
      correct: 1,
      explanation: "Une description faite de faits (quoi, fréquence, depuis quand) oriente la recherche ; les jugements vagues n'aident pas." ,
    },
    exercice: {
      enonce:
        "Expliquez pourquoi il faut décrire un problème par des faits, et comment le QQOQCP y aide.",
      consignes: [
        "Distingue fait et interprétation.",
        "Cite les questions du QQOQCP.",
        "Donne un exemple de description forte.",
      ],
      criteres: [
        "J'ai distingué fait et interprétation.",
        "J'ai cité le QQOQCP.",
        "J'ai donné une description faite de faits.",
      ],
      correction:
        "Il faut décrire un problème par des faits observables et vérifiables, car une interprétation glissée dès le départ (« il est fichu ») oriente à tort la recherche et fait sauter des pistes. On distingue donc ce qu'on a réellement constaté (un fait : une température, une fréquence, un constat) de ce qu'on suppose (une interprétation). Le QQOQCP structure cette description en répondant à : Quoi, Qui, Où, Quand, Comment, Combien. Exemple de description forte : « le moteur atteint 90 °C après 30 minutes à pleine charge, depuis le changement de courroie de mardi » : elle donne des données chiffrées, un contexte et un changement récent, tout ce qui manque à « le moteur chauffe, il est sûrement fichu ».",
    },
  },
  {
    id: "6-15",
    title: "Remonter aux causes : les 5 pourquoi",
    durationMinutes: 30,
    objectifs: [
      "Utiliser la méthode des 5 pourquoi pour trouver la cause racine.",
      "Distinguer traiter le symptôme et traiter la cause.",
    ],
    simple:
      "La méthode des « 5 pourquoi » consiste à demander « pourquoi ? » à chaque réponse, jusqu'à atteindre la cause profonde (la cause racine) sur laquelle on peut agir durablement. Le chiffre 5 est indicatif. L'intérêt : ne pas se contenter de traiter le symptôme (qui reviendrait), mais remonter à l'origine réelle.",
    vocab: [
      ["5 pourquoi", "Méthode de questionnement en chaîne pour atteindre la cause racine."],
      ["Cause racine", "Origine profonde sur laquelle agir pour éviter la récidive."],
      ["Symptôme", "Effet visible ; le traiter seul ne supprime pas la cause."],
      ["Cause immédiate", "Cause directe de l'effet, souvent proche du symptôme."],
      ["Action durable", "Action sur la cause racine qui empêche le problème de revenir."],
    ],
    example:
      "Le convoyeur s'arrête → pourquoi ? le moteur a disjoncté → pourquoi ? surcharge → pourquoi ? le rouleau frottait → pourquoi ? roulement grippé → pourquoi ? plus de lubrification. Cause racine : un point de graissage oublié dans le plan. Réarmer la protection (symptôme) n'aurait pas suffi.",
    schema: "diagnostic-flow",
    illustrations: ["five-whys"],
    ascii: "SYMPTOME → pourquoi ? → cause → pourquoi ? → ... → CAUSE RACINE\nAGIR sur la cause RACINE (durable), pas seulement sur le SYMPTOME\nle « 5 » est indicatif (parfois moins, parfois plus)",
    retenir: [
      "On demande « pourquoi ? » en chaîne jusqu'à la cause racine.",
      "Agir sur la cause racine évite la récidive ; traiter le symptôme non.",
      "Le chiffre 5 est indicatif : on s'arrête quand on peut agir durablement.",
      "Chaque « pourquoi » doit s'appuyer sur des faits, pas des suppositions.",
    ],
    erreurs: [
      "S'arrêter à la cause immédiate (le symptôme) et « réarmer » sans plus.",
      "Enchaîner des « pourquoi » supposés, non vérifiés par des faits.",
      "Chercher un coupable plutôt qu'une cause technique traitable.",
    ],
    astucesPro: [
      "On valide chaque « pourquoi » par une observation ou une mesure.",
      "La cause racine est souvent organisationnelle (un point oublié dans le plan).",
      "On s'arrête quand l'action possible empêche durablement la récidive.",
    ],
    diagnostic: [
      "Partir du symptôme décrit en faits.",
      "Remonter la chaîne des causes en vérifiant chaque étape.",
      "Identifier la cause sur laquelle une action durable est possible.",
    ],
    depannage: [
      "Traiter la cause racine (durable), pas seulement l'effet.",
      "Mettre à jour le plan ou la procédure si la cause est organisationnelle.",
      "Vérifier que l'action empêche bien la récidive.",
    ],
    securite: [
      "La méthode vise une cause technique/organisationnelle, jamais à contourner une sécurité.",
      "Les vérifications sur les parties actives suivent la consignation et les habilitations.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Une protection thermique de moteur déclenche régulièrement ; un opérateur se contente de la réarmer à chaque fois.",
      mission: ["Dire ce qui manque à sa réponse.", "Appliquer les 5 pourquoi.", "Proposer l'action durable."],
      correction:
        "Réarmer la protection ne traite que le symptôme : la protection redéclenchera car la cause n'est pas supprimée. En appliquant les 5 pourquoi : la protection déclenche → pourquoi ? le moteur est en surcharge → pourquoi ? il force → pourquoi ? l'organe entraîné frotte anormalement → pourquoi ? un roulement est en fin de vie → pourquoi ? il n'a pas été lubrifié/surveillé. Cause racine : un défaut de lubrification ou de surveillance (point non couvert par le plan). Action durable : remplacer le roulement en fin de vie ET ajouter le point de graissage/surveillance au plan de maintenance, afin que le problème ne revienne pas. Chaque « pourquoi » se valide par des faits (mesure de courant, contrôle du roulement), et l'on ne contourne jamais la protection.",
    },
    memo: ["« Pourquoi ? » jusqu'à la cause racine", "Agir sur la cause, pas le symptôme", "Valider par des faits"],
    resume:
      "La méthode des 5 pourquoi remonte la chaîne des causes jusqu'à la cause racine, sur laquelle on agit durablement ; traiter seulement le symptôme laisserait le problème revenir.",
    quizIds: ["mnt71", "mnt72", "mnt73", "mnt74", "mnt75"],
    verification: {
      question: "Quel est l'objectif de la méthode des 5 pourquoi ?",
      options: ["Trouver un coupable", "Atteindre la cause racine pour agir durablement", "Réarmer plus vite", "Changer une pièce au hasard"],
      correct: 1,
      explanation: "Les 5 pourquoi remontent jusqu'à la cause racine, celle sur laquelle une action durable empêche la récidive." ,
    },
    exercice: {
      enonce:
        "Expliquez la méthode des 5 pourquoi et la différence entre traiter le symptôme et traiter la cause racine.",
      consignes: [
        "Explique le principe des 5 pourquoi.",
        "Donne un exemple de chaîne de causes.",
        "Distingue symptôme et cause racine.",
      ],
      criteres: [
        "J'ai expliqué le questionnement en chaîne.",
        "J'ai donné un exemple remontant à une cause racine.",
        "J'ai distingué symptôme et cause racine.",
      ],
      correction:
        "La méthode des 5 pourquoi consiste à demander « pourquoi ? » à chaque réponse, en remontant la chaîne des causes jusqu'à une cause racine sur laquelle on peut agir durablement ; le chiffre 5 est indicatif. Exemple : le convoyeur s'arrête → le moteur a disjoncté (surcharge) → le rouleau frottait → son roulement était grippé → il n'était plus lubrifié → le point de graissage manquait au plan (cause racine). Traiter le symptôme, ce serait seulement réarmer la protection : le problème reviendrait, car la cause subsiste. Traiter la cause racine, c'est remplacer le roulement et ajouter le point au plan de graissage, ce qui empêche la récidive. Chaque « pourquoi » doit s'appuyer sur des faits vérifiés, et l'on cherche une cause technique ou organisationnelle traitable, pas un coupable.",
    },
  },
  {
    id: "6-16",
    title: "Organiser les causes : l'arbre des causes (5M)",
    durationMinutes: 30,
    objectifs: [
      "Explorer toutes les familles de causes possibles avec les 5M.",
      "Éviter de se focaliser trop tôt sur une seule piste.",
    ],
    simple:
      "Quand une panne peut avoir plusieurs origines, on organise la recherche avec le diagramme causes-effet (Ishikawa, en « arête de poisson ») et les 5M : Main-d'œuvre, Matériel, Méthode, Matière, Milieu. On liste, pour chaque famille, les causes possibles. Cela évite de foncer sur une seule idée et d'oublier des pistes.",
    vocab: [
      ["Ishikawa (arête de poisson)", "Diagramme qui classe les causes possibles d'un effet par familles."],
      ["5M", "Main-d'œuvre, Matériel, Méthode, Matière, Milieu : familles de causes."],
      ["Main-d'œuvre", "Cause liée aux personnes (formation, geste, organisation)."],
      ["Matériel", "Cause liée aux machines, outils, composants."],
      ["Milieu", "Cause liée à l'environnement (température, poussière, humidité)."],
    ],
    example:
      "Un défaut de qualité récurrent : on remplit un Ishikawa. Matériel : outil usé ? Méthode : réglage inadapté ? Matière : lot de pièces hors tolérance ? Milieu : température de l'atelier ? Main-d'œuvre : mode opératoire mal appliqué ? On explore chaque famille avant de conclure.",
    schema: "diagnostic-flow",
    ascii: "ISHIKAWA (arete de poisson) : classer les CAUSES d'un EFFET par familles\n5M : MAIN-D'OEUVRE · MATERIEL · METHODE · MATIERE · MILIEU\nexplorer TOUTES les familles avant de conclure",
    retenir: [
      "L'Ishikawa classe les causes possibles d'un effet par familles.",
      "Les 5M : Main-d'œuvre, Matériel, Méthode, Matière, Milieu.",
      "On explore chaque famille pour ne pas oublier de piste.",
      "L'outil complète les 5 pourquoi quand les causes sont multiples.",
    ],
    erreurs: [
      "Se focaliser sur une seule cause sans explorer les autres familles.",
      "Confondre l'effet (le problème) et les causes.",
      "Lister des causes sans ensuite les vérifier par des faits.",
    ],
    astucesPro: [
      "Les 5M servent d'aide-mémoire pour n'oublier aucune famille.",
      "On combine Ishikawa (large) et 5 pourquoi (en profondeur).",
      "Après avoir listé, on hiérarchise et on vérifie les causes probables.",
    ],
    diagnostic: [
      "Formuler l'effet précisément (au bout de l'arête).",
      "Parcourir les 5M pour lister les causes possibles.",
      "Hiérarchiser puis vérifier les causes les plus probables.",
    ],
    depannage: [
      "Écarter par des faits les familles non concernées.",
      "Approfondir la cause retenue avec les 5 pourquoi.",
      "Agir sur la cause confirmée et vérifier l'effet.",
    ],
    securite: [
      "L'analyse des causes se fait sans exposition aux parties actives ; les vérifications suivent la consignation.",
      "On ne néglige jamais une cause « Milieu » ou « Main-d'œuvre » liée à la sécurité.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un défaut de qualité apparaît régulièrement sur des pièces usinées, sans cause évidente.",
      mission: ["Proposer un outil d'analyse.", "Lister une cause par famille (5M).", "Dire comment conclure."],
      correction:
        "Comme les origines possibles sont multiples, on utilise un diagramme d'Ishikawa avec les 5M pour explorer toutes les familles de causes. Une cause possible par famille : Matériel — outil de coupe usé ; Méthode — paramètres d'usinage/réglage inadaptés ; Matière — lot de pièces brutes hors tolérance ; Milieu — variations de température de l'atelier dilatant les pièces ; Main-d'œuvre — mode opératoire mal appliqué. Pour conclure, on ne s'arrête pas à la liste : on hiérarchise les causes les plus probables, on les vérifie par des faits (mesures, contrôles), on écarte celles qui ne collent pas, puis on approfondit la cause retenue avec les 5 pourquoi avant d'agir et de contrôler l'effet.",
    },
    memo: ["Ishikawa = arête de poisson", "5M : Main-d'œuvre/Matériel/Méthode/Matière/Milieu", "Explorer avant de conclure"],
    resume:
      "L'arbre des causes (Ishikawa) et les 5M — Main-d'œuvre, Matériel, Méthode, Matière, Milieu — organisent la recherche des causes multiples d'un effet, pour explorer toutes les pistes avant de conclure.",
    quizIds: ["mnt76", "mnt77", "mnt78", "mnt79", "mnt80"],
    verification: {
      question: "Que représentent les 5M d'un diagramme d'Ishikawa ?",
      options: ["Cinq machines", "Main-d'œuvre, Matériel, Méthode, Matière, Milieu", "Cinq mesures", "Cinq minutes"],
      correct: 1,
      explanation: "Les 5M sont les familles de causes : Main-d'œuvre, Matériel, Méthode, Matière, Milieu." ,
    },
    exercice: {
      enonce:
        "Expliquez l'intérêt du diagramme d'Ishikawa et des 5M, et comment il complète les 5 pourquoi.",
      consignes: [
        "Explique le rôle de l'Ishikawa.",
        "Cite les 5M.",
        "Explique la complémentarité avec les 5 pourquoi.",
      ],
      criteres: [
        "J'ai expliqué le classement des causes par familles.",
        "J'ai cité les 5M.",
        "J'ai relié Ishikawa (large) et 5 pourquoi (profondeur).",
      ],
      correction:
        "Le diagramme d'Ishikawa (en arête de poisson) classe les causes possibles d'un effet par familles, ce qui évite de se focaliser trop tôt sur une seule piste et d'en oublier d'autres. Les familles sont les 5M : Main-d'œuvre (personnes, formation, geste), Matériel (machines, outils, composants), Méthode (réglages, procédures), Matière (pièces, matières premières) et Milieu (environnement : température, poussière, humidité). L'Ishikawa travaille en largeur — il liste toutes les causes plausibles — tandis que les 5 pourquoi travaillent en profondeur — ils remontent une chaîne jusqu'à la cause racine. On les combine : d'abord explorer les familles avec l'Ishikawa, hiérarchiser et vérifier par des faits, puis approfondir la cause retenue avec les 5 pourquoi.",
    },
  },
  {
    id: "6-17",
    title: "Le diagnostic multi-technologies",
    durationMinutes: 30,
    objectifs: [
      "Croiser les technologies (mécanique, électrique, pneumatique, automatisme).",
      "Situer un défaut dans la bonne chaîne avant d'accuser une technologie.",
    ],
    simple:
      "Une machine moderne mêle mécanique, électricité, pneumatique et automatisme. Un même symptôme peut venir de n'importe laquelle : un mouvement qui manque peut être mécanique (grippage), électrique (protection), pneumatique (pression) ou de commande (capteur, programme). Diagnostiquer, c'est situer le défaut dans la bonne technologie avant d'agir, en s'appuyant sur les indices de chacune.",
    vocab: [
      ["Multi-technologies", "Présence conjointe de mécanique, électricité, pneumatique, automatisme."],
      ["Chaîne d'énergie", "De la source à l'actionneur (électrique, pneumatique…)."],
      ["Chaîne d'information", "Des capteurs à la commande (automatisme)."],
      ["Indice", "Voyant, pression, bruit, mesure propre à une technologie."],
      ["Frontière", "Point où l'on passe d'une technologie à une autre (ex. sortie automate → préactionneur)."],
    ],
    example:
      "Un vérin ne sort pas. Automatisme : la sortie est-elle commandée (voyant) ? Pneumatique : la pression et le distributeur sont-ils corrects ? Mécanique : le vérin est-il grippé ? On teste chaque technologie à sa frontière pour situer le défaut, au lieu d'accuser d'emblée « le vérin ».",
    schema: "diagnostic-flow",
    ascii: "1 symptome → plusieurs technologies possibles (MECA · ELEC · PNEU · AUTO)\nsituer le defaut a la bonne FRONTIERE avant d'agir\nutiliser les INDICES de chaque techno (voyant, pression, bruit, mesure)",
    retenir: [
      "Un même symptôme peut venir de plusieurs technologies.",
      "On situe le défaut dans la bonne chaîne (énergie ou information) avant d'agir.",
      "Chaque technologie a ses indices : voyants (auto), pression (pneu), mesures (élec), bruit/jeu (méca).",
      "On teste aux frontières entre technologies pour localiser.",
    ],
    erreurs: [
      "Accuser une technologie sans avoir vérifié les autres.",
      "Ignorer la chaîne d'information (capteur, programme) et ne regarder que la mécanique.",
      "Ne pas exploiter les indices propres à chaque technologie.",
    ],
    astucesPro: [
      "Les voyants d'E/S disent vite si le problème est « commande » ou « puissance/mécanique ».",
      "On remonte la chaîne : information (capteur→auto) puis énergie (sortie→préactionneur→actionneur).",
      "On raisonne « frontières » : où passe-t-on d'une techno à l'autre ?",
    ],
    diagnostic: [
      "Lister les technologies pouvant causer le symptôme.",
      "Utiliser les indices de chacune pour situer le défaut.",
      "Tester aux frontières pour isoler la technologie en cause.",
    ],
    depannage: [
      "Traiter la technologie réellement en cause, pas la plus « évidente ».",
      "Confirmer par les indices avant de remplacer un composant.",
      "Croiser les résultats si le diagnostic reste ambigu.",
    ],
    securite: [
      "Un système multi-technologies cumule des énergies : on consigne toutes les énergies (électrique, pneumatique, hydraulique) avant d'intervenir.",
      "On vérifie l'absence de tension ET de pression, et les énergies résiduelles.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur une station automatisée, un vérin de serrage ne sort plus. Le technicien veut immédiatement remplacer le vérin.",
      mission: ["Lister les technologies à vérifier.", "Proposer un ordre de test.", "Rappeler la sécurité multi-énergies."],
      correction:
        "Plusieurs technologies peuvent expliquer le symptôme : l'automatisme (la sortie de l'automate est-elle commandée ? capteur amont présent ? condition du programme remplie ?), le pneumatique (pression disponible ? distributeur qui bascule ? échappement libre ?), et la mécanique (vérin grippé, obstacle). Ordre de test : commencer par les indices rapides — le voyant de la sortie (commande ou non), puis les entrées/capteurs, puis la pression et le distributeur, et enfin la mécanique du vérin ; on teste ainsi aux frontières pour situer le défaut avant de remplacer quoi que ce soit. Remplacer le vérin d'emblée serait souvent inutile et coûteux. Sécurité : ce système cumule électricité et air comprimé ; avant toute intervention, on consigne les deux énergies, on purge la pression et on vérifie l'absence de tension et de pression, sans contourner de sécurité.",
    },
    memo: ["1 symptôme → plusieurs technos", "Situer avant d'accuser", "Consigner toutes les énergies"],
    resume:
      "Le diagnostic multi-technologies croise mécanique, électricité, pneumatique et automatisme : on situe le défaut dans la bonne chaîne à l'aide des indices de chacune, avant d'agir et en consignant toutes les énergies.",
    quizIds: ["mnt81", "mnt82", "mnt83", "mnt84", "mnt85"],
    verification: {
      question: "Face à un vérin qui ne sort pas sur une machine automatisée, que fait-on d'abord ?",
      options: ["Remplacer le vérin", "Situer le défaut (automatisme, pneumatique, mécanique) à l'aide des indices", "Augmenter la pression au maximum", "Changer l'automate"],
      correct: 1,
      explanation: "On situe le défaut dans la bonne technologie grâce aux indices (voyants, pression, mécanique) avant d'agir." ,
    },
    exercice: {
      enonce:
        "Expliquez pourquoi un diagnostic doit croiser plusieurs technologies, avec un exemple.",
      consignes: [
        "Explique qu'un symptôme peut venir de plusieurs technologies.",
        "Donne un exemple avec les indices de chaque technologie.",
        "Rappelle la sécurité multi-énergies.",
      ],
      criteres: [
        "J'ai expliqué la multi-causalité par technologie.",
        "J'ai donné un exemple avec indices (auto/pneu/méca).",
        "J'ai rappelé la consignation de toutes les énergies.",
      ],
      correction:
        "Une machine moderne combine plusieurs technologies (mécanique, électricité, pneumatique, automatisme), si bien qu'un même symptôme peut provenir de l'une ou l'autre : il faut donc situer le défaut dans la bonne technologie avant d'agir, plutôt que d'accuser d'emblée le composant le plus visible. Exemple : un vérin qui ne sort pas — côté automatisme, on regarde si la sortie est commandée (voyant) et si les capteurs/conditions du programme sont bons ; côté pneumatique, on vérifie la pression, le distributeur et l'échappement ; côté mécanique, on cherche un grippage ou un obstacle. On teste aux frontières entre technologies pour localiser. Sécurité : ces systèmes cumulent des énergies (électrique, pneumatique) ; avant toute intervention, on consigne toutes les énergies, on purge la pression et on vérifie l'absence de tension et de pression.",
    },
  },
  {
    id: "6-18",
    title: "Confirmer, corriger durablement et capitaliser (synthèse)",
    durationMinutes: 30,
    objectifs: [
      "Confirmer la cause avant de corriger, puis vérifier l'efficacité.",
      "Capitaliser l'intervention pour prévenir la récidive.",
    ],
    simple:
      "La fin d'un diagnostic compte autant que le début. Une fois la cause identifiée, on la confirme (on s'assure qu'elle explique bien le symptôme), on corrige durablement (on agit sur la cause racine, pas le symptôme), on vérifie que le problème est résolu, et on capitalise : on trace l'intervention et, si utile, on met à jour le plan de maintenance pour que la panne ne revienne pas.",
    vocab: [
      ["Confirmation", "Vérifier que la cause identifiée explique bien le symptôme."],
      ["Correction durable", "Action sur la cause racine, qui empêche la récidive."],
      ["Vérification d'efficacité", "Contrôle que le problème est réellement résolu."],
      ["Capitalisation", "Tracer et exploiter l'intervention pour l'avenir."],
      ["Mise à jour du plan", "Ajouter une opération/surveillance pour prévenir la récidive."],
    ],
    example:
      "Après avoir trouvé un roulement grippé par manque de graissage, on remplace le roulement (correction), on vérifie que la machine refonctionne normalement (efficacité), on trace l'intervention et on ajoute le point de graissage au plan (capitalisation) : la panne ne reviendra pas pour la même raison.",
    schema: "diagnostic-flow",
    ascii: "CONFIRMER la cause → CORRIGER durablement (cause racine) → VERIFIER l'efficacite → CAPITALISER (tracer + MAJ plan)\nla fin du diagnostic previent la RECIDIVE",
    retenir: [
      "On confirme la cause avant de corriger.",
      "On corrige durablement (cause racine), pas seulement le symptôme.",
      "On vérifie que le problème est réellement résolu.",
      "On capitalise : traçabilité et mise à jour du plan préviennent la récidive.",
    ],
    erreurs: [
      "Corriger sans avoir confirmé la cause (on traite peut-être la mauvaise).",
      "Ne pas vérifier l'efficacité et laisser un problème latent.",
      "Ne rien tracer : la même panne se reproduit et se re-diagnostique de zéro.",
    ],
    astucesPro: [
      "Une correction durable inclut souvent une mise à jour du plan préventif.",
      "La traçabilité d'aujourd'hui accélère le diagnostic de demain.",
      "On vérifie l'efficacité dans les conditions réelles, pas seulement à l'arrêt.",
    ],
    diagnostic: [
      "Vérifier que la cause retenue explique tous les faits.",
      "Contrôler l'efficacité après correction (essai en conditions réelles).",
      "Repérer si une action préventive doit être ajoutée au plan.",
    ],
    depannage: [
      "Agir sur la cause racine confirmée.",
      "Vérifier la remise en fonction et les sécurités.",
      "Tracer et, si besoin, mettre à jour le plan de maintenance.",
    ],
    securite: [
      "La vérification d'efficacité inclut le contrôle des organes de sécurité avant remise en service.",
      "Toute correction sur les parties actives suit la consignation ; on ne neutralise aucune sécurité.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Après un diagnostic, un technicien remplace une pièce, redémarre, et part sans vérifier ni tracer.",
      mission: ["Dire ce qui manque à sa clôture.", "Décrire les bonnes étapes finales.", "Expliquer l'intérêt de capitaliser."],
      correction:
        "Il manque trois choses à sa clôture : la confirmation que la pièce remplacée était bien la cause (et non un symptôme), la vérification d'efficacité (contrôler, en conditions réelles, que le problème est résolu et que les sécurités fonctionnent) et la capitalisation (tracer l'intervention). Les bonnes étapes finales sont donc : confirmer la cause, corriger durablement en agissant sur la cause racine, vérifier l'efficacité par un essai, puis capitaliser en renseignant le rapport et, si nécessaire, en mettant à jour le plan de maintenance (ajout d'une opération ou d'une surveillance). Capitaliser est essentiel : sans traçabilité, la même panne reviendra et devra être re-diagnostiquée de zéro ; avec elle, on prévient la récidive et on accélère les diagnostics futurs. Toute correction se fait après consignation, sans neutraliser de sécurité.",
    },
    memo: ["Confirmer → corriger → vérifier → capitaliser", "Cause racine, pas symptôme", "Tracer + MAJ du plan"],
    resume:
      "Clôturer un diagnostic, c'est confirmer la cause, corriger durablement (cause racine), vérifier l'efficacité et capitaliser (traçabilité, mise à jour du plan) pour prévenir la récidive.",
    quizIds: ["mnt86", "mnt87", "mnt88", "mnt89", "mnt90"],
    verification: {
      question: "Que fait-on après avoir corrigé une panne, pour bien clôturer le diagnostic ?",
      options: ["On part aussitôt", "On vérifie l'efficacité et on capitalise (trace, mise à jour du plan)", "On neutralise les sécurités", "On oublie l'intervention"],
      correct: 1,
      explanation: "On vérifie que le problème est résolu et on capitalise (traçabilité, mise à jour du plan) pour éviter la récidive." ,
    },
    exercice: {
      enonce:
        "Décrivez les étapes finales d'un diagnostic (confirmer, corriger, vérifier, capitaliser) et leur intérêt.",
      consignes: [
        "Explique la confirmation et la correction durable.",
        "Explique la vérification d'efficacité.",
        "Explique la capitalisation et son intérêt.",
      ],
      criteres: [
        "J'ai décrit la confirmation avant correction.",
        "J'ai décrit la vérification d'efficacité.",
        "J'ai expliqué la capitalisation (traçabilité, plan) et son intérêt.",
      ],
      correction:
        "Les étapes finales d'un diagnostic sont : confirmer la cause (s'assurer qu'elle explique bien tous les faits, pour ne pas corriger la mauvaise) ; corriger durablement en agissant sur la cause racine plutôt que sur le symptôme ; vérifier l'efficacité en contrôlant, en conditions réelles, que le problème est résolu et que les organes de sécurité fonctionnent ; puis capitaliser en traçant l'intervention (cause, action, pièces, temps) et, si nécessaire, en mettant à jour le plan de maintenance (ajout d'une opération ou d'une surveillance). Leur intérêt : sans confirmation ni vérification, on risque de laisser un problème latent ; sans capitalisation, la même panne reviendra et sera re-diagnostiquée de zéro. Bien clôturer un diagnostic prévient donc la récidive et accélère les interventions futures, la sécurité étant contrôlée avant la remise en service.",
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
    status: "available",
    exam: {
      questionIds: ["mnt1", "mnt4", "mnt6", "mnt7", "mnt11", "mnt12", "mnt16", "mnt19", "mnt21", "mnt24", "mnt26", "mnt29"],
      passPercent: 80,
    },
  },
  {
    id: "m6-b2",
    num: 2,
    title: "La surveillance conditionnelle",
    objective: "Surveiller l'état des équipements (vibrations, thermographie, analyse d'huile, ultrasons).",
    lessonIds: block2Lessons.map((lesson) => lesson.id),
    chapterCount: 6,
    status: "available",
    exam: {
      questionIds: ["mnt31", "mnt35", "mnt36", "mnt39", "mnt41", "mnt43", "mnt46", "mnt49", "mnt51", "mnt54", "mnt56", "mnt59"],
      passPercent: 80,
    },
  },
  {
    id: "m6-b3",
    num: 3,
    title: "La méthodologie de diagnostic",
    objective: "Mener un diagnostic structuré multi-technologies et remonter aux causes.",
    lessonIds: block3Lessons.map((lesson) => lesson.id),
    chapterCount: 6,
    status: "available",
    exam: {
      questionIds: ["mnt61", "mnt64", "mnt66", "mnt69", "mnt71", "mnt72", "mnt76", "mnt79", "mnt81", "mnt84", "mnt86", "mnt89"],
      passPercent: 80,
    },
  },
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
  lessons: [...block1Lessons, ...block2Lessons, ...block3Lessons],
  blocks: MAINTENANCE_BLOCKS,
};
