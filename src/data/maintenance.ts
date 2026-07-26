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
    status: "in_progress",
  },
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
  lessons: [...block1Lessons, ...block2Lessons],
  blocks: MAINTENANCE_BLOCKS,
};
