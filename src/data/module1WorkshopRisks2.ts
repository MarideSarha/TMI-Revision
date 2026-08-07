import type { Lesson } from "../types";

/**
 * Bloc 3 du module 1 — risques spécifiques de l'atelier, deuxième tranche.
 *
 * Support de révision uniquement : les opérations réelles restent soumises à
 * l'évaluation des risques, aux procédures du site, à la notice de poste et
 * aux formations, équipements et autorisations définis par l'employeur.
 */
export const MODULE1_WORKSHOP_RISK_LESSONS_2: Lesson[] = [
  {
    id: "1-16",
    title: "Identifier et prévenir le risque chimique",
    durationMinutes: 55,
    objectifs: [
      "Distinguer danger d'un produit, voie d'exposition et situation réelle de travail.",
      "Lire les informations essentielles d'une étiquette CLP et repérer les rubriques utiles d'une FDS.",
      "Choisir une réaction sûre face à un produit inconnu, une fuite ou une émission de procédé.",
    ],
    simple:
      "Un produit chimique ne devient pas dangereux uniquement lorsqu'il est renversé. Il peut être inhalé sous forme de vapeur, gaz, poussière ou fumée, atteindre la peau ou les yeux, ou être avalé par contamination des mains. Le technicien identifie d'abord le produit ou l'émission, lit les informations disponibles, observe comment l'exposition peut se produire et applique les protections prévues. Il ne sent jamais volontairement un produit et ne mélange rien pour « voir ce que cela fait ».",
    vocab: [
      ["Danger chimique", "Propriété d'un produit ou d'une émission capable de nuire à la santé, provoquer un incendie, une explosion ou polluer."],
      ["Exposition", "Contact réel entre une personne et l'agent chimique, par inhalation, peau, yeux ou ingestion accidentelle."],
      ["CLP", "Système européen de classification et d'étiquetage : pictogrammes, avertissement, mentions de danger et conseils de prudence."],
      ["FDS", "Fiche de données de sécurité donnant notamment les dangers, la prévention, le stockage, les premiers secours et la conduite en cas de déversement."],
      ["Captage à la source", "Dispositif qui retire le polluant au plus près de l'endroit où il est émis."],
      ["Substitution", "Remplacement d'un produit ou procédé dangereux par une solution moins dangereuse."],
    ],
    example:
      "Lors du nettoyage d'un motoréducteur, un bidon sans étiquette est posé près d'un dégraissant. Le bon réflexe est de ne pas l'utiliser : isoler la situation, rechercher l'identification par les voies prévues et signaler l'écart. La couleur ou l'odeur ne permettent pas d'identifier un produit.",
    schema: "chemical-exposure-path",
    retenir: [
      "Le risque combine le danger de l'agent et les conditions réelles d'exposition.",
      "L'étiquette est une première information ; la FDS et la notice de poste complètent la préparation.",
      "Les émissions de procédé — fumées, poussières, gaz ou brouillards — peuvent être dangereuses même sans étiquette.",
      "La priorité est de supprimer ou substituer, puis de capter et confiner avant de compter sur les EPI.",
      "Un produit inconnu, transvasé sans étiquette ou stocké de façon incohérente n'est pas utilisé.",
    ],
    erreurs: [
      "Reconnaître un produit à son odeur ou à sa couleur.",
      "Mettre un masque ou des gants au hasard sans vérifier leur compatibilité.",
      "Transvaser un produit dans une bouteille alimentaire.",
      "Nettoyer un déversement sans connaître le produit et la procédure d'urgence.",
    ],
    quizIds: ["m1w16", "m1w17", "m1w18", "m1w19", "m1w20"],
    verification: {
      question: "Quelle information décrit le mieux une exposition chimique ?",
      options: ["Le pictogramme seul", "La rencontre entre l'agent et une voie d'entrée dans le corps", "La couleur du bidon", "Le prix du produit"],
      correct: 1,
      explanation: "Le danger appartient à l'agent ; l'exposition dépend de la situation, de la voie, de la durée et de la fréquence.",
    },
    exercice: {
      enonce: "Une pompe fuit près d'un fût. Une flaque inconnue dégage une odeur et le sol devient glissant. Prépare la conduite à tenir sans entrer dans la zone.",
      consignes: [
        "Décris les dangers possibles sans inventer l'identité du produit.",
        "Repère les personnes, écoulements, sources d'ignition et voies d'exposition.",
        "Indique les informations et moyens à obtenir avant toute action.",
        "Propose l'alerte, le balisage et la réponse selon l'organisation du site.",
      ],
      criteres: [
        "Je ne touche, ne goûte et ne sens pas volontairement le produit.",
        "Je traite aussi la glissade, l'incendie, l'environnement et la propagation.",
        "Je renvoie l'intervention vers les personnes formées et les moyens compatibles.",
      ],
      correction:
        "Il faut rester hors de la zone, empêcher l'accès et alerter selon la procédure. L'identification s'appuie sur le repère de l'équipement, les contenants, l'inventaire, l'étiquette, la FDS et les informations du procédé, jamais sur une reconnaissance sensorielle volontaire. Les personnes désignées évaluent exposition, incompatibilités, ventilation, ignition, rétention et moyens d'intervention. En cas de contact ou de malaise, les secours et mesures prévues par le site sont déclenchés sans improviser de neutralisation.",
    },
    activity: {
      type: "sequence",
      title: "Construis l'analyse d'une exposition chimique",
      instruction: "Replace les étapes dans l'ordre avant de choisir une protection.",
      items: ["Identifier l'agent ou l'émission", "Lire étiquette, FDS et notice", "Repérer les voies d'exposition", "Analyser quantité, durée et procédé", "Supprimer ou réduire à la source", "Compléter par les mesures prévues"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as relié le produit à la situation réelle avant de choisir une mesure de prévention.",
    },
    ascii: `AGENT / ÉMISSION ---> DISPERSION ---> PERSONNE ---> DOMMAGE
 liquide, vapeur       air/surface     peau, yeux      immédiat
 gaz, poussière                        poumons         ou différé

SUPPRIMER > SUBSTITUER > CONFINER/CAPTER > ORGANISER > EPI`,
    astucesPro: [
      "Photographie l'étiquette ou relève la référence seulement si cela peut être fait sans entrer dans la zone dangereuse.",
      "Vérifie toujours les produits générés par l'opération : fumées de soudage, poussières, brouillards d'huile ou gaz de combustion.",
      "Avant de choisir un gant, un filtre ou un absorbant, vérifie la compatibilité prévue par la FDS et les règles du site.",
    ],
    diagnostic: [
      "Identifier produit, procédé, quantité, état physique et température sans s'exposer.",
      "Rechercher étiquette, FDS, notice de poste, historique et émissions possibles.",
      "Repérer inhalation, peau, yeux, ingestion accidentelle, incendie, explosion et propagation.",
      "Faire définir la méthode, les protections et la gestion des déchets par les personnes compétentes.",
    ],
    depannage: [
      "Arrêter l'exposition et protéger la zone selon les consignes du site.",
      "Faire maîtriser la source et le procédé avec les moyens prévus et compatibles.",
      "Traiter la cause technique sans créer de mélange, projection ou émission supplémentaire.",
      "Nettoyer, éliminer, contrôler et restituer avec la traçabilité requise.",
    ],
    securite: [
      "Ne jamais identifier un produit en le sentant, le touchant ou le goûtant.",
      "Ne jamais mélanger ni neutraliser des produits sans procédure validée : une réaction dangereuse peut se produire.",
      "En cas d'exposition, appliquer immédiatement l'organisation des secours du site et transmettre l'identité du produit ou la FDS si disponible, sans retarder les secours.",
    ],
    etudeDeCas: {
      situation: "Un technicien propose d'utiliser un solvant plus puissant trouvé dans un ancien placard pour décoller un joint.",
      mission: ["Identifier les informations manquantes.", "Évaluer pourquoi le remplacement improvisé est dangereux.", "Proposer une décision professionnelle."],
      correction: "Le produit ne doit pas être utilisé tant que son identité, son état, son étiquette, sa FDS, ses incompatibilités et son autorisation d'emploi ne sont pas vérifiés. Un solvant peut créer exposition, incendie, incompatibilité avec les joints et déchet dangereux. La méthode de démontage et le produit autorisé sont confirmés par la procédure et les personnes compétentes ; le produit ancien est signalé pour gestion adaptée.",
    },
    memo: ["Agent", "Étiquette", "FDS", "Voies", "Exposition", "Substitution", "Captage", "Urgence"],
    resume: "Prévenir le risque chimique consiste à identifier l'agent ou l'émission, comprendre ses dangers, analyser les voies d'exposition et agir d'abord à la source. Un produit inconnu ou une situation non prévue impose l'arrêt, le balisage et l'alerte, jamais l'improvisation.",
  },
  {
    id: "1-17",
    title: "Maîtriser les risques thermiques de l'atelier",
    durationMinutes: 50,
    objectifs: [
      "Distinguer contact chaud ou froid, rayonnement, fluide, flamme et ambiance thermique.",
      "Repérer les facteurs qui aggravent une exposition à la chaleur ou au froid.",
      "Préparer une intervention sans toucher une surface pour estimer sa température.",
    ],
    simple:
      "Le risque thermique ne se limite pas à une pièce rouge. Un palier, une vapeur, un fluide, une canalisation ou une surface métallique froide peuvent blesser sans signe évident. L'ambiance chaude ou froide peut aussi diminuer la vigilance, la dextérité et la capacité physique. Le technicien identifie la source, le mode de transfert et la durée d'exposition, puis réduit l'exposition avant de choisir les protections adaptées.",
    vocab: [
      ["Conduction", "Transfert de chaleur par contact direct avec une surface, une pièce ou un fluide."],
      ["Convection", "Transport de chaleur par un air, un gaz ou un liquide en mouvement."],
      ["Rayonnement", "Énergie thermique reçue à distance d'une source chaude, sans contact."],
      ["Inertie thermique", "Capacité d'un équipement à rester chaud ou froid après son arrêt."],
      ["Contrainte thermique", "Effort imposé au corps par l'ambiance, la tâche, les vêtements et la durée d'exposition."],
      ["Calorifugeage", "Isolation d'une surface ou canalisation pour réduire les pertes de chaleur et le risque de contact."],
    ],
    example:
      "Après l'arrêt d'une pompe de fluide chaud, le moteur est immobile mais le corps de pompe, la canalisation et le produit restent chauds. Ouvrir immédiatement une bride cumulerait pression résiduelle, projection et brûlure thermique ou chimique.",
    schema: "thermal-exposure-path",
    retenir: [
      "Une machine arrêtée peut conserver longtemps une température dangereuse.",
      "La température se contrôle avec une méthode et un instrument adaptés, jamais avec la main.",
      "Température, humidité, rayonnement, mouvement de l'air, effort, tenue et durée influencent la contrainte thermique.",
      "La prévention prioritaire limite l'exposition : isolation, écran, ventilation, automatisation, organisation et pauses adaptées.",
      "Un malaise, une confusion, une perte de coordination ou des frissons anormaux imposent l'arrêt et l'alerte selon le site.",
    ],
    erreurs: [
      "Toucher rapidement une pièce pour savoir si elle est encore chaude.",
      "Se fier uniquement à sa couleur ou à l'absence de vapeur.",
      "Ouvrir un circuit chaud sans traiter aussi la pression et le produit.",
      "Considérer l'eau ou les pauses comme une autorisation de maintenir une exposition excessive.",
    ],
    quizIds: ["m1w21", "m1w22", "m1w23", "m1w24", "m1w25"],
    verification: {
      question: "Quel contrôle convient avant d'approcher une surface potentiellement chaude ?",
      options: ["La toucher brièvement", "Utiliser la méthode de mesure prévue sans exposer le corps", "Regarder uniquement sa couleur", "Mouiller la surface"],
      correct: 1,
      explanation: "Une surface peut être dangereuse sans signe visible ; le contrôle doit être adapté, préparé et réalisé sans contact corporel.",
    },
    exercice: {
      enonce: "Un roulement de ventilateur a chauffé. La machine est arrêtée depuis dix minutes et l'équipe veut déposer le palier.",
      consignes: [
        "Identifie les sources thermiques et les autres énergies encore présentes.",
        "Propose une méthode de vérification sans contact corporel.",
        "Définis les conditions à réunir avant démontage.",
        "Prépare la surveillance lors de la remise en service.",
      ],
      criteres: [
        "Je ne transforme pas une durée d'attente en preuve de température sûre.",
        "Je traite rotation, charge, température et éventuels fluides.",
        "Je prévois un essai contrôlé et des critères d'arrêt.",
      ],
      correction:
        "La zone est protégée et toutes les énergies sont maîtrisées selon la procédure. La température est mesurée avec l'instrument et la méthode prévus, en tenant compte des limites de mesure et de l'émissivité si une mesure infrarouge est utilisée. Le démontage attend l'état thermique compatible avec l'opération et les EPI prescrits. Après réparation, l'essai surveille température, bruit, vibration et intensité selon des seuils définis ; une nouvelle montée anormale impose l'arrêt et la recherche de cause.",
    },
    activity: {
      type: "sequence",
      title: "Prépare une intervention sur un équipement chaud",
      instruction: "Classe les étapes de l'observation à la restitution.",
      items: ["Identifier source et mode de transfert", "Protéger la zone", "Maîtriser toutes les énergies", "Mesurer avec la méthode prévue", "Attendre ou réduire l'exposition", "Intervenir puis surveiller l'essai"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as vérifié l'état thermique au lieu de le supposer.",
    },
    ascii: `SOURCE ---> TRANSFERT ---> EXPOSITION ---> EFFET
 four       contact         peau           brûlure
 vapeur    convection      corps entier   malaise
 surface   rayonnement     yeux/corps     baisse de vigilance

Arrêt machine ≠ température sûre`,
    astucesPro: [
      "Sur une mesure infrarouge, vérifie distance, zone visée, propreté de l'optique et limites liées à la surface.",
      "Compare les températures dans des conditions similaires et recherche la tendance, pas seulement une valeur isolée.",
      "Associe toujours température anormale, charge, lubrification, alignement, ventilation et état du procédé.",
    ],
    diagnostic: [
      "Identifier source, température possible, rayonnement, fluide et durée d'exposition.",
      "Repérer surfaces accessibles, trajectoires de projection et zones de récupération thermique.",
      "Mesurer selon la procédure avec un appareil adapté et interpréter ses limites.",
      "Rechercher la cause technique sans supprimer une protection thermique utile.",
    ],
    depannage: [
      "Éloigner les personnes et réduire l'exposition selon les consignes.",
      "Faire appliquer la mise en sécurité et atteindre un état thermique compatible avec l'opération.",
      "Traiter la cause : lubrification, frottement, refroidissement, isolation ou procédé selon le diagnostic.",
      "Contrôler la remontée en température lors d'un essai annoncé avec seuils d'arrêt.",
    ],
    securite: [
      "Ne jamais utiliser la main comme thermomètre.",
      "Ne jamais ouvrir un circuit chaud sans maîtrise vérifiée de la pression, du produit et de la température.",
      "Face à un malaise ou à une brûlure, déclencher l'organisation des secours du site ; ne pas appliquer de produit ou méthode improvisée.",
    ],
    etudeDeCas: {
      situation: "Un capot moteur est très chaud. Pour gagner du temps, un collègue propose de retirer l'isolant et de relancer le ventilateur.",
      mission: ["Identifier les risques de cette proposition.", "Distinguer symptôme et cause.", "Construire une réponse professionnelle."],
      correction: "Retirer une protection sans analyse peut exposer les personnes et masquer la cause. La température élevée est un symptôme à caractériser : charge, ventilation, roulement, alignement, alimentation ou environnement. L'équipement est maintenu dans un état sûr, la mesure et le diagnostic sont réalisés selon les compétences et procédures prévues, puis la protection est conservée ou modifiée uniquement après validation technique.",
    },
    memo: ["Source", "Contact", "Convection", "Rayonnement", "Inertie", "Mesure", "Exposition", "Alerte"],
    resume: "Le risque thermique dépend de la source, du transfert, de l'exposition et du travail réel. Le technicien ne suppose jamais qu'une surface est sûre : il maîtrise les énergies, mesure avec la méthode prévue, réduit l'exposition et surveille la remise en service.",
  },
  {
    id: "1-18",
    title: "Prévenir les risques de manutention et les TMS",
    durationMinutes: 55,
    objectifs: [
      "Analyser une manutention à partir de la charge, de la tâche, de l'environnement et de la personne.",
      "Privilégier suppression, organisation et aides mécaniques avant la technique gestuelle.",
      "Préparer le déplacement sûr d'un moteur, d'un rouleau ou d'une pièce encombrante.",
    ],
    simple:
      "La manutention ne signifie pas seulement soulever. Porter, pousser, tirer, tenir, poser ou déplacer une charge peut provoquer chute, écrasement et troubles musculosquelettiques. Une pièce légère peut devenir risquée si elle est loin du corps, répétée, glissante ou manipulée dans un espace étroit. Le meilleur geste ne corrige pas un équipement trop lourd ou une organisation mal préparée : on cherche d'abord à supprimer le port manuel et à utiliser une aide adaptée.",
    vocab: [
      ["Manutention manuelle", "Transport ou soutien d'une charge par l'effort d'une personne : lever, poser, pousser, tirer, porter ou déplacer."],
      ["TMS", "Troubles musculosquelettiques touchant muscles, tendons, nerfs ou articulations, favorisés par les contraintes du travail."],
      ["Prise", "Zone et manière de saisir la charge ; une prise absente, glissante ou coupante augmente le risque."],
      ["Centre de gravité", "Point autour duquel la masse s'équilibre ; s'il est décalé, la charge peut basculer."],
      ["Aide à la manutention", "Moyen réduisant ou supprimant l'effort : chariot, table élévatrice, palan ou dispositif conçu pour la charge."],
      ["Coactivité", "Présence de plusieurs personnes, véhicules ou travaux dont les actions peuvent interagir."],
    ],
    example:
      "Un motoréducteur de 45 kg doit être sorti d'un convoyeur. Le poids seul ne suffit pas pour décider : accès, hauteur, prise, centre de gravité, fixation, huile, trajectoire, capacité du moyen de levage et zone d'écrasement doivent être préparés.",
    schema: "handling-risk-analysis",
    retenir: [
      "Analyser charge, fréquence, posture, prise, trajet, sol, espace, cadence et coactivité.",
      "Éviter ou réduire la manutention manuelle avant d'enseigner un geste de levage.",
      "Une aide mécanique doit être adaptée, vérifiée, utilisée par des personnes formées et selon ses limites.",
      "La trajectoire et la zone de pose se préparent avant de déplacer la charge.",
      "Une douleur, une prise incertaine ou une situation différente du plan impose l'arrêt et la réévaluation.",
    ],
    erreurs: [
      "Décider seul qu'une charge est légère sans connaître sa masse ni son équilibre.",
      "Soulever à plusieurs sans chef de manœuvre ni signal commun.",
      "Placer les doigts sous la charge au moment de la poser.",
      "Utiliser un palan, une sangle ou un point d'accrochage sans vérifier leur adéquation.",
    ],
    quizIds: ["m1w26", "m1w27", "m1w28", "m1w29", "m1w30"],
    verification: {
      question: "Quelle mesure doit être recherchée en priorité pour une pièce lourde déplacée régulièrement ?",
      options: ["Demander de lever plus vite", "Supprimer le port manuel ou installer une aide adaptée", "Porter une ceinture lombaire", "Alterner seulement la main droite et la main gauche"],
      correct: 1,
      explanation: "La prévention agit d'abord sur la situation de travail et réduit l'exposition, avant les techniques individuelles.",
    },
    exercice: {
      enonce: "Prépare la dépose et le transport d'un rouleau de convoyeur long, gras et difficile à saisir.",
      consignes: [
        "Liste les informations à obtenir avant de commencer.",
        "Choisis les moyens de soutien, de préhension et de transport à faire valider.",
        "Définis la trajectoire, le balisage et les rôles.",
        "Prépare la pose et la réaction en cas de perte de contrôle.",
      ],
      criteres: [
        "Je traite masse, longueur, centre de gravité, prise et pollution de surface.",
        "Je garde le corps hors des zones d'écrasement et n'improvise pas un point d'accrochage.",
        "Je prévois un arrêt de manœuvre clair et une zone de pose stable.",
      ],
      correction:
        "La machine est mise en sécurité et le rouleau est soutenu avant libération de ses fixations. Masse, dimensions, centre de gravité, état de surface et points de préhension sont confirmés. L'aide adaptée, ses accessoires et sa capacité sont validés par les personnes compétentes. Le trajet et la zone de pose sont dégagés, la coactivité maîtrisée, les rôles et signaux convenus. Personne ne se place sous la charge ni dans un point d'écrasement ; si la situation change, la manœuvre est arrêtée et replanifiée.",
    },
    activity: {
      type: "sequence",
      title: "Prépare une manutention technique",
      instruction: "Replace les étapes avant tout déplacement de la charge.",
      items: ["Identifier la charge et son équilibre", "Supprimer ou réduire le port manuel", "Choisir et vérifier l'aide", "Préparer trajet et zone de pose", "Attribuer rôles et signaux", "Déplacer sans entrer dans la zone d'écrasement"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as préparé le déplacement avant d'exposer les personnes.",
    },
    ascii: `CHARGE + TÂCHE + ENVIRONNEMENT + ORGANISATION
 masse    fréquence   sol/espace      rôles/cadence
 prise    distance    obstacles       coactivité
 équilibre posture   zone de pose     aide disponible

ÉVITER > MÉCANISER > ORGANISER > FORMER > CONTRÔLER`,
    astucesPro: [
      "Cherche le poids réel dans la documentation ou par une méthode validée ; ne l'estime pas à l'œil.",
      "Prépare des cales ou supports adaptés pour que les mains ne passent jamais sous la pièce à la pose.",
      "Pour pousser ou tirer, observe aussi l'effort de démarrage, l'état des roues, la pente et la visibilité.",
    ],
    diagnostic: [
      "Décrire masse, dimensions, centre de gravité, prise, arêtes, température et contamination.",
      "Observer posture, distance, fréquence, hauteur, trajet, sol, éclairage et espace disponible.",
      "Identifier aides existantes, capacités, accessoires, points d'accrochage et compétences requises.",
      "Rechercher les zones de chute, basculement, coincement et écrasement pendant toute la trajectoire.",
    ],
    depannage: [
      "Mettre l'équipement et la charge dans un état stable avant démontage.",
      "Installer le soutien ou moyen de manutention prévu avant de libérer la pièce.",
      "Réaliser la manœuvre coordonnée avec trajet et zone interdite définis.",
      "Poser sur un support stable, retirer les moyens sans exposer les mains et tracer les écarts.",
    ],
    securite: [
      "Ne jamais se placer sous une charge suspendue ni entre une charge mobile et un obstacle fixe.",
      "Ne jamais improviser un point de levage, un accessoire ou une capacité d'utilisation.",
      "L'application ne remplace ni la formation à l'utilisation des appareils de levage ni les vérifications et autorisations du site.",
    ],
    etudeDeCas: {
      situation: "Deux collègues veulent porter un moteur à la main parce que le chariot est utilisé ailleurs et que la production attend.",
      mission: ["Identifier les facteurs de risque ignorés.", "Décider si l'urgence de production change la règle.", "Proposer une solution professionnelle."],
      correction: "L'attente de production ne transforme pas une manutention non préparée en opération acceptable. La masse, la prise, le trajet, le centre de gravité et les zones d'écrasement ne sont pas maîtrisés. L'opération est différée jusqu'à disponibilité d'une aide adaptée ou replanifiée avec une méthode validée, des personnes formées et une coordination claire.",
    },
    memo: ["Charge", "Prise", "Équilibre", "Trajet", "Aide", "Capacité", "Rôles", "Zone de pose"],
    resume: "Une manutention sûre se prépare à partir de la charge, du travail réel et de l'environnement. Le technicien cherche d'abord à éviter ou mécaniser le port, puis sécurise l'aide, la trajectoire, les rôles et la pose sans exposer le corps aux zones d'écrasement.",
  },
];
