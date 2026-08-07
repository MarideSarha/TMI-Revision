import type { Lesson } from "../types";

/**
 * Bloc 3 du module 1 — risques spécifiques de l'atelier, première tranche.
 *
 * Support de révision uniquement : les opérations réelles restent soumises à
 * l'évaluation des risques, aux procédures du site et aux compétences,
 * autorisations, formations et habilitations définies par l'employeur.
 */
export const MODULE1_WORKSHOP_RISK_LESSONS: Lesson[] = [
  {
    id: "1-13",
    title: "Repérer les phénomènes dangereux mécaniques",
    durationMinutes: 50,
    objectifs: [
      "Reconnaître écrasement, cisaillement, coupure, entraînement, choc et projection.",
      "Relier une source de mouvement à une zone dangereuse et à une exposition possible.",
      "Choisir une réaction sûre face à un protecteur absent ou à un mouvement imprévu.",
    ],
    simple:
      "Une machine peut blesser sans être rapide ni impressionnante. Un rouleau attire un vêtement, un vérin écrase, une courroie entraîne, une pièce projetée frappe. Le bon réflexe consiste à observer la chaîne source de mouvement → transmission → pièce mobile → zone accessible, puis à empêcher l'exposition avant de chercher la panne.",
    vocab: [
      ["Phénomène dangereux", "Source capable de provoquer une blessure : mouvement, masse, arête, pression ou pièce projetée."],
      ["Zone dangereuse", "Espace où une personne peut être exposée à un phénomène dangereux."],
      ["Entraînement", "Happement d'un vêtement, d'un cheveu ou d'un membre par une pièce tournante ou deux rouleaux."],
      ["Cisaillement", "Mouvement de deux parties qui peuvent couper ou pincer comme des ciseaux."],
      ["Écrasement", "Compression d'une personne entre une partie mobile et une partie fixe ou une autre charge."],
      ["Protecteur", "Barrière matérielle empêchant ou limitant l'accès à une zone dangereuse."],
    ],
    example:
      "Sur un convoyeur à rouleaux, le point de rentrée entre la bande et le tambour peut entraîner une main. Retirer un colis à proximité de ce point pendant le mouvement n'est pas un simple geste de production : c'est une exposition directe à une zone dangereuse.",
    schema: "mechanical-hazard-zone",
    retenir: [
      "Observer la machine entière : source, transmission, effecteur, charge et environnement.",
      "Un arrêt normal ou un arrêt d'urgence ne prouve pas l'absence d'énergie ni de mouvement futur.",
      "Les protecteurs et dispositifs de protection doivent rester présents et efficaces.",
      "Une charge retenue, un ressort comprimé ou un ensemble en hauteur conserve une énergie mécanique.",
      "Un défaut de protection ou un mouvement imprévu impose l'arrêt, le balisage et l'alerte selon le site.",
    ],
    erreurs: [
      "Passer la main dans une ouverture parce que la machine semble lente.",
      "Tenir un chiffon près d'un arbre tournant.",
      "Se placer sous une charge seulement retenue par l'actionneur.",
      "Neutraliser un interverrouillage pour observer plus facilement.",
    ],
    quizIds: ["m1w1", "m1w2", "m1w3", "m1w4", "m1w5"],
    verification: {
      question: "Quel exemple correspond à un risque d'entraînement ?",
      options: ["Un carter chaud", "Une manche attirée entre une chaîne et un pignon", "Un sol glissant", "Un produit irritant"],
      correct: 1,
      explanation: "La chaîne et le pignon peuvent saisir puis entraîner le vêtement et le membre dans la transmission.",
    },
    exercice: {
      enonce: "Un colis bloque un convoyeur. La bande est arrêtée, mais le voyant de commande reste allumé. Prépare ton analyse sans entrer dans la zone.",
      consignes: [
        "Repère les pièces susceptibles de bouger et les points de pincement ou d'entraînement.",
        "Identifie les énergies et charges qui pourraient maintenir ou recréer un mouvement.",
        "Propose les mesures empêchant l'accès et le redémarrage avant le débourrage.",
        "Définis les contrôles nécessaires avant la restitution.",
      ],
      criteres: [
        "Je ne confonds pas bande arrêtée et machine en sécurité.",
        "Je traite la charge, les énergies et les personnes autour du convoyeur.",
        "Je respecte la procédure et les rôles du site sans inventer une autorisation.",
      ],
      correction:
        "Il faut interdire l'accès, identifier le convoyeur et son périmètre, analyser toutes les sources de mouvement et appliquer la procédure de mise en sécurité prévue par le site. Le colis, la bande, un tendeur ou une pente peuvent stocker une énergie. Le débourrage n'est réalisé que par des personnes compétentes et autorisées, avec les moyens prévus. Avant restitution : zone dégagée, protecteurs remis, personnes et outils recensés, puis essai annoncé et maîtrisé.",
    },
    activity: {
      type: "sequence",
      title: "Construis la chaîne du danger mécanique",
      instruction: "Classe les observations avant de choisir une mesure de prévention.",
      items: ["Identifier la source de mouvement", "Suivre la transmission", "Repérer l'effecteur ou la charge", "Délimiter la zone dangereuse", "Identifier l'exposition possible", "Supprimer ou empêcher l'exposition"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as relié la machine au dommage possible avant de penser à la réparation.",
    },
    ascii: `MOTEUR ---- ACCOUPLEMENT ---- TAMBOUR >>> BANDE
 source       transmission       mouvement
                                  \____/
                               point rentrant
                                   X
                          ZONE DANGEREUSE

Arrêt visible ≠ énergie maîtrisée ≠ accès autorisé`,
    astucesPro: [
      "Observe le mouvement normal puis demande-toi ce qui bougerait en cas de défaut ou de gravité.",
      "Recherche les points rentrants : bande-tambour, chaîne-pignon, engrenages et rouleaux.",
      "Signale immédiatement un protecteur déposé, desserré ou contourné ; ne le banalise jamais.",
    ],
    diagnostic: [
      "Décrire le mouvement, son sens, sa vitesse et la charge sans s'exposer.",
      "Repérer les parties fixes et mobiles créant pincement, cisaillement ou écrasement.",
      "Identifier les énergies accumulées et mouvements possibles après arrêt.",
      "Vérifier l'état apparent des protecteurs et dispositifs sans les tester dangereusement.",
    ],
    depannage: [
      "Faire arrêter et protéger la zone selon les règles du site.",
      "Faire appliquer la mise en sécurité multi-énergies par les personnes désignées.",
      "Traiter la cause avec l'outillage et la méthode prévus, jamais avec le corps comme outil.",
      "Reconstituer, contrôler, essayer et restituer selon la procédure.",
    ],
    securite: [
      "Ne jamais franchir, déposer ou neutraliser un protecteur sans cadre de travail autorisé et mise en sécurité adaptée.",
      "Ne jamais se placer sous une charge non soutenue par un dispositif mécanique adapté.",
      "Les cheveux, bijoux, gants inadaptés et vêtements flottants augmentent le risque près des pièces tournantes.",
    ],
    etudeDeCas: {
      situation: "Un rouleau de convoyeur fait du bruit. Un collègue propose de l'écouter avec un tournevis posé contre le palier pendant la marche.",
      mission: ["Identifier les phénomènes dangereux.", "Refuser la méthode dangereuse.", "Proposer une démarche d'observation et de diagnostic encadrée."],
      correction: "La proximité d'une pièce tournante expose à l'entraînement, au choc et à la projection ; le tournevis peut devenir un projectile. La méthode est refusée. L'équipe utilise uniquement des moyens et procédures de contrôle prévus, à distance ou après mise en sécurité selon la mesure recherchée, par des personnes formées et autorisées.",
    },
    memo: ["Source", "Transmission", "Effecteur", "Charge", "Zone", "Exposition", "Protection", "Énergie résiduelle"],
    resume: "Un risque mécanique naît d'un mouvement, d'une charge ou d'une forme dangereuse accessible. Le technicien repère la chaîne du mouvement, les zones dangereuses et les énergies résiduelles, puis empêche l'exposition avant toute recherche de panne.",
  },
  {
    id: "1-14",
    title: "Reconnaître le risque électrique et ses limites d'intervention",
    durationMinutes: 50,
    objectifs: [
      "Distinguer contact direct, contact indirect, arc électrique, incendie et explosion.",
      "Reconnaître les indices qui imposent de s'éloigner, protéger la zone et alerter.",
      "Comprendre que chaque opération exige une habilitation et des instructions adaptées.",
    ],
    simple:
      "L'électricité est invisible. Un conducteur nu, une enveloppe endommagée ou une masse métallique devenue accidentellement sous tension peut provoquer électrisation, brûlure, arc, incendie ou explosion. Un débutant apprend d'abord à reconnaître la situation et ses limites : il ne mesure, ne réarme et n'ouvre pas un équipement électrique parce qu'il possède un multimètre.",
    vocab: [
      ["Électrisation", "Passage d'un courant dans le corps, avec des conséquences plus ou moins graves."],
      ["Électrocution", "Électrisation ayant entraîné le décès."],
      ["Contact direct", "Contact avec une partie normalement sous tension."],
      ["Contact indirect", "Contact avec une masse devenue sous tension à la suite d'un défaut d'isolement."],
      ["Arc électrique", "Décharge dans l'air pouvant produire chaleur intense, lumière, bruit et projections."],
      ["Habilitation", "Reconnaissance par l'employeur de la capacité à réaliser en sécurité les tâches électriques confiées, dans des limites précises."],
    ],
    example:
      "Une armoire de convoyeur présente une porte entrouverte et une odeur de brûlé. Le bon réflexe n'est pas d'ouvrir davantage ni de réarmer : garder ses distances, empêcher l'accès et alerter les personnes compétentes selon les consignes du site.",
    schema: "electrical-hazard-path",
    retenir: [
      "Le risque dépend de la tâche, du domaine de tension, du voisinage et des conditions réelles.",
      "Une habilitation possède un symbole et un périmètre ; elle n'autorise pas toutes les opérations.",
      "La priorité est le travail hors tension après une mise en sécurité et une vérification adaptées.",
      "Un multimètre n'est pas un vérificateur d'absence de tension et ne donne aucune autorisation.",
      "Odeur, bruit, échauffement, trace d'arc, enveloppe cassée ou conducteur visible sont des signaux d'arrêt et d'alerte.",
    ],
    erreurs: [
      "Réarmer plusieurs fois un disjoncteur sans rechercher la cause.",
      "Ouvrir une armoire pour seulement regarder.",
      "Croire que des gants ordinaires protègent contre le risque électrique.",
      "Toucher une victime encore en contact avec la source sans mise en sécurité préalable.",
    ],
    quizIds: ["m1w6", "m1w7", "m1w8", "m1w9", "m1w10"],
    verification: {
      question: "Une carcasse métallique devient sous tension après un défaut d'isolement. De quel type de situation s'agit-il ?",
      options: ["Contact indirect possible", "Risque uniquement mécanique", "Contact direct normal", "Absence de risque si le moteur est arrêté"],
      correct: 0,
      explanation: "La carcasse est une masse normalement hors tension ; le défaut crée un risque de contact indirect.",
    },
    exercice: {
      enonce: "Tu découvres un coffret entrouvert, un voyant éteint et une trace noire près d'un câble. Décris ta réaction sans opération électrique.",
      consignes: [
        "Liste les indices visibles sans t'approcher ni toucher.",
        "Définis comment empêcher l'exposition d'autres personnes.",
        "Identifie les personnes à prévenir et les informations à transmettre.",
        "Explique pourquoi l'absence de voyant ne prouve pas l'absence de tension.",
      ],
      criteres: [
        "Je ne propose ni ouverture, ni mesure, ni réarmement.",
        "Je traite le risque d'arc et d'incendie en plus du choc électrique.",
        "Je renvoie l'opération aux personnes habilitées dans leur périmètre.",
      ],
      correction:
        "Rester à distance, interdire l'accès sans toucher l'enveloppe, alerter selon les consignes et transmettre repère, emplacement, trace, odeur, bruit et état observé. Un voyant peut être défaillant ou alimenté par un autre circuit ; il ne constitue pas une vérification d'absence de tension. Toute investigation relève d'une opération définie, confiée à une personne habilitée et équipée selon la procédure.",
    },
    activity: {
      type: "sequence",
      title: "Réagis face à une anomalie électrique",
      instruction: "Remets les actions d'un observateur non autorisé dans l'ordre.",
      items: ["S'arrêter à distance", "Empêcher l'accès sans toucher", "Alerter selon le site", "Transmettre les faits et le repère", "Laisser les personnes habilitées qualifier l'opération"],
      correctOrder: [0, 1, 2, 3, 4],
      success: "Tu as protégé sans transformer une observation en opération électrique improvisée.",
    },
    ascii: `SOURCE SOUS TENSION
        |
        +--> contact direct : partie active accessible
        |
        +--> défaut d'isolement --> masse métallique
        |                              |
        |                         contact indirect
        +--> arc --> chaleur / projections / incendie

Voyant éteint ≠ absence de tension vérifiée`,
    astucesPro: [
      "Avant toute action, nomme précisément l'opération : manœuvre, mesurage, vérification, essai, dépannage ou consignation.",
      "Lis les limites du titre d'habilitation et des instructions, pas seulement le premier symbole.",
      "Transmets les indices sans conclure : « odeur et trace noire », pas « variateur brûlé ».",
    ],
    diagnostic: [
      "Identifier la zone et l'équipement depuis un emplacement sûr.",
      "Relever uniquement les indices accessibles sans opération électrique.",
      "Déterminer si la tâche envisagée est d'ordre électrique ou réalisée au voisinage.",
      "Faire définir habilitation, rôle, procédure et moyens avant toute investigation.",
    ],
    depannage: [
      "Protéger la zone et alerter en présence d'un danger apparent.",
      "Faire établir l'état électrique par les personnes compétentes et habilitées.",
      "Privilégier l'opération hors tension selon la procédure applicable.",
      "Après traitement, contrôler les protections et tracer la cause avant remise en service.",
    ],
    securite: [
      "L'application ne prépare ni ne délivre une habilitation électrique.",
      "Ne jamais toucher un conducteur, une enveloppe endommagée ou une victime encore exposée à la source.",
      "Toute mesure sous tension est une opération à risque, justifiée et réservée au personnel habilité avec les moyens prévus.",
    ],
    etudeDeCas: {
      situation: "Un moteur s'arrête et son disjoncteur déclenche. La production demande un troisième réarmement pour terminer la série.",
      mission: ["Identifier les risques.", "Décider si le réarmement est acceptable.", "Proposer la suite professionnelle."],
      correction: "Le déclenchement signale une anomalie potentielle. Réarmer en boucle peut aggraver un défaut, provoquer un arc, un incendie ou un dommage mécanique. La demande est refusée ; l'équipement est maintenu dans un état sûr et le défaut est confié aux personnes compétentes et habilitées selon les règles du site.",
    },
    memo: ["Invisible", "Direct", "Indirect", "Arc", "Incendie", "Habilitation", "Hors tension", "Alerter"],
    resume: "Reconnaître le risque électrique consiste à identifier les situations de contact, d'arc et d'incendie, puis à respecter strictement le périmètre de l'opération et de l'habilitation. Observer n'autorise ni à ouvrir, ni à mesurer, ni à réarmer.",
  },
  {
    id: "1-15",
    title: "Maîtriser les dangers des fluides sous pression",
    durationMinutes: 55,
    objectifs: [
      "Reconnaître pression résiduelle, fouettement, projection, injection, brûlure et mouvement d'actionneur.",
      "Repérer la chaîne source → liaison → organe utilisateur → énergie accumulée.",
      "Adopter une méthode sûre devant une fuite ou un flexible endommagé.",
    ],
    simple:
      "Un circuit pneumatique ou hydraulique peut rester dangereux après l'arrêt du moteur ou du compresseur. Un accumulateur, un vérin chargé, une poche de pression ou un fluide chaud conserve de l'énergie. Une fuite très fine peut traverser la peau et un flexible rompu peut fouetter. On ne recherche donc jamais une fuite avec la main.",
    vocab: [
      ["Pression", "Force exercée par un fluide sur une surface."],
      ["Pression résiduelle", "Pression encore présente après l'arrêt ou la séparation de la source."],
      ["Accumulateur", "Organe capable de stocker un fluide sous pression et donc de l'énergie."],
      ["Fouettement", "Mouvement violent d'un flexible libéré ou rompu sous pression."],
      ["Injection sous-cutanée", "Pénétration d'un fluide sous pression à travers la peau ; urgence médicale même si la plaie paraît petite."],
      ["Rétention mécanique", "Moyen indépendant empêchant une charge ou un actionneur de se déplacer."],
    ],
    example:
      "Sur une presse, le groupe hydraulique est arrêté mais le coulisseau reste en hauteur et l'accumulateur peut être chargé. Desserrer un raccord peut libérer le fluide et provoquer à la fois une injection, une projection et la descente de la charge.",
    schema: "pressure-energy-path",
    retenir: [
      "Identifier la nature du fluide, la pression, la température et les produits associés.",
      "Repérer source, flexibles, tuyauteries, distributeurs, accumulateurs, vérins et charges.",
      "Séparer la source ne suffit pas : dissiper ou retenir l'énergie puis vérifier l'état sûr selon la procédure.",
      "Soutenir mécaniquement les parties susceptibles de descendre ou de bouger.",
      "Une suspicion d'injection sous la peau exige une prise en charge médicale urgente.",
    ],
    erreurs: [
      "Chercher une fuite hydraulique avec les doigts.",
      "Desserrer un raccord pour voir s'il reste de la pression.",
      "Se fier uniquement au manomètre sans considérer son isolement ou son état.",
      "Travailler sous un vérin seulement maintenu par la pression.",
    ],
    quizIds: ["m1w11", "m1w12", "m1w13", "m1w14", "m1w15"],
    verification: {
      question: "Pourquoi un vérin arrêté peut-il encore être dangereux ?",
      options: ["Sa peinture peut sécher", "Il ne l'est jamais", "Le fluide, la charge ou un accumulateur peut encore stocker de l'énergie", "Seulement si le voyant est rouge"],
      correct: 2,
      explanation: "L'arrêt de la source ne supprime pas automatiquement la pression résiduelle ni l'énergie gravitaire de la charge.",
    },
    exercice: {
      enonce: "Une brume d'huile apparaît près d'un flexible hydraulique et le manomètre indique encore une pression. Prépare la réaction sûre.",
      consignes: [
        "Décris les dangers sans chercher l'origine avec la main.",
        "Délimite la zone et les personnes à informer.",
        "Liste les énergies, organes de stockage et charges à maîtriser.",
        "Définis les conditions nécessaires avant inspection ou remplacement.",
      ],
      criteres: [
        "Je traite l'injection, la projection, la glissade et le mouvement possible.",
        "Je ne propose ni resserrage ni desserrage sous pression.",
        "Je prévois séparation, dissipation ou rétention et vérification selon la procédure.",
      ],
      correction:
        "Arrêter l'approche, éloigner les personnes et baliser sans traverser le jet. Alerter selon le site et identifier le circuit, le fluide, la pression, la température, les accumulateurs, vérins et charges. L'installation est mise en sécurité par les personnes désignées : séparation, condamnation, dissipation ou rétention et vérification selon la procédure. Le flexible n'est inspecté ni remplacé avant confirmation de l'état sûr.",
    },
    activity: {
      type: "sequence",
      title: "Suis l'énergie fluidique",
      instruction: "Remets la chaîne d'analyse dans l'ordre.",
      items: ["Identifier la source", "Suivre les liaisons", "Repérer stockage et actionneurs", "Identifier charges et mouvements", "Séparer et condamner selon la procédure", "Dissiper ou retenir puis vérifier"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu n'as pas limité l'analyse au compresseur ou à la pompe : toute la chaîne est prise en compte.",
    },
    ascii: `POMPE / COMPRESSEUR ---> FLEXIBLE ---> DISTRIBUTEUR ---> VÉRIN
       source             liaison          commande        mouvement
           \________________ ACCUMULATEUR ________________/
                              stockage

ARRÊT SOURCE     PRESSION RÉSIDUELLE     CHARGE EN HAUTEUR
     X                    !                      !
          état sûr à vérifier avant intervention`,
    astucesPro: [
      "Lis le schéma fluidique et observe où le fluide peut être emprisonné entre deux organes.",
      "Considère toujours l'effet mécanique du vérin ou du moteur hydraulique, pas seulement la fuite.",
      "Avant remplacement, fais confirmer la référence, la pression admissible, le fluide et la compatibilité du flexible.",
    ],
    diagnostic: [
      "Identifier fluide, pression nominale, température et dangers du produit.",
      "Tracer source, liaisons, organes d'isolement, stockage, actionneurs et charges.",
      "Observer à distance traces, brume, bruit, vibration ou déformation sans toucher.",
      "Faire définir l'état sûr et la méthode de vérification par les personnes compétentes.",
    ],
    depannage: [
      "Protéger la zone et arrêter l'exposition.",
      "Faire appliquer la consignation fluidique et la retenue mécanique prévues.",
      "Remplacer ou réparer uniquement avec composants, propreté et méthode conformes.",
      "Contrôler l'étanchéité et les mouvements lors d'un essai annoncé et maîtrisé.",
    ],
    securite: [
      "Ne jamais utiliser la main pour localiser une fuite sous pression.",
      "Ne jamais desserrer un raccord ni déposer un organe avant vérification de l'état sûr.",
      "Toute suspicion d'injection sous-cutanée nécessite l'arrêt du travail et une prise en charge médicale urgente en précisant le fluide concerné.",
    ],
    etudeDeCas: {
      situation: "Après une petite piqûre près d'un flexible hydraulique, un collègue dit qu'il n'a presque pas mal et veut finir son poste.",
      mission: ["Identifier la gravité potentielle.", "Décider de la conduite immédiate.", "Préciser les informations utiles aux secours."],
      correction: "Une injection sous-cutanée peut paraître minime tout en provoquant des lésions graves. Le travail est arrêté et la personne reçoit une prise en charge médicale urgente selon l'organisation des secours. Il faut signaler qu'il s'agit d'une possible injection sous pression et transmettre le produit ou la fiche de données disponible, sans retarder les secours.",
    },
    memo: ["Fluide", "Pression", "Température", "Source", "Stockage", "Actionneur", "Charge", "Vérifier"],
    resume: "Les circuits fluidiques stockent et transmettent une énergie capable de projeter, injecter, brûler ou déplacer une charge. L'analyse suit toute la chaîne, maîtrise la pression résiduelle et le mouvement, puis confirme l'état sûr avant intervention.",
  },
];
