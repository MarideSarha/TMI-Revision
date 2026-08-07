import type { Lesson } from "../types";

/**
 * Bloc 3 du module 1 — risques spécifiques de l'atelier, troisième tranche.
 *
 * Support de révision uniquement. Les travaux réels en hauteur, en zone
 * bruyante, en espace confiné ou en atmosphère explosible exigent une
 * évaluation, une procédure, des équipements, une formation et des
 * autorisations adaptés au site et à l'opération.
 */
export const MODULE1_WORKSHOP_RISK_LESSONS_3: Lesson[] = [
  {
    id: "1-19",
    title: "Prévenir les chutes de hauteur et les chutes d'objets",
    durationMinutes: 60,
    objectifs: [
      "Reconnaître une situation de chute sans se limiter à un nombre de mètres.",
      "Choisir d'abord un accès et un poste protégés collectivement.",
      "Préparer le travail, la protection des personnes au-dessous et le secours avant de monter.",
    ],
    simple:
      "Le risque existe dès qu'une personne ou un objet peut tomber vers un niveau inférieur : plateforme, passerelle, mezzanine, fosse, trappe, toiture, échelle ou dessus de machine. Il n'existe pas de hauteur minimale qui rendrait automatiquement une chute acceptable. Le technicien cherche d'abord à supprimer le travail en hauteur ou à utiliser un plan de travail stable avec garde-corps. Un harnais ne remplace pas une protection collective et ne suffit jamais sans système complet, point d'ancrage prévu, tirant d'air compatible et organisation du secours.",
    vocab: [
      ["Plan de travail", "Surface depuis laquelle la tâche est réalisée ; elle doit être stable, résistante et adaptée à l'opération."],
      ["Protection collective", "Barrière qui protège plusieurs personnes sans dépendre uniquement de leur comportement : garde-corps, plateforme protégée ou échafaudage adapté."],
      ["Système de retenue", "Ensemble empêchant d'atteindre la zone où une chute est possible ; il n'est pas conçu pour arrêter une chute déjà commencée."],
      ["Système d'arrêt de chute", "Ensemble conçu pour arrêter une chute en limitant les efforts, avec harnais, liaison et ancrage compatibles."],
      ["Tirant d'air", "Hauteur libre nécessaire sous la personne pour que le système arrête la chute avant un impact."],
      ["Suspension inerte", "Maintien immobile dans un harnais après une chute ; c'est une urgence qui exige un secours préparé."],
    ],
    example:
      "Un capteur est fixé au-dessus d'un convoyeur. Monter sur le bâti ou sur une caisse est interdit : le déplacement du capteur doit être étudié depuis le sol, sinon une plateforme ou un moyen d'accès protégé et autorisé est prévu. La zone sous l'intervention est également interdite à cause des outils et pièces susceptibles de tomber.",
    schema: "work-at-height-hierarchy",
    retenir: [
      "Éviter le travail en hauteur est la première mesure : descendre l'équipement, utiliser un outil depuis le sol ou modifier l'accès.",
      "Un plan de travail protégé collectivement est prioritaire sur la protection individuelle.",
      "Échelle, escabeau, échafaudage, plateforme élévatrice et système antichute ont des usages, limites, vérifications et compétences différents.",
      "La météo, le sol, la circulation, l'électricité, les ouvertures et la chute d'objets font partie de l'analyse.",
      "Le secours d'une personne suspendue doit être organisé avant l'intervention, jamais inventé après la chute.",
    ],
    erreurs: [
      "Considérer qu'une faible hauteur ne peut provoquer qu'une blessure légère.",
      "Utiliser une caisse, une palette, un rayonnage ou la machine comme moyen d'accès.",
      "Croire que porter un harnais suffit, sans ancrage ni système validé.",
      "Travailler au-dessus de collègues sans balisage ni rétention des outils.",
    ],
    quizIds: ["m1w31", "m1w32", "m1w33", "m1w34", "m1w35"],
    verification: {
      question: "Quelle solution doit être recherchée en premier pour remplacer un capteur situé à quatre mètres ?",
      options: ["Monter sur le convoyeur", "Éviter l'accès en hauteur ou prévoir un poste protégé collectivement", "Prendre n'importe quelle échelle", "Porter seulement un casque"],
      correct: 1,
      explanation: "La démarche commence par éviter l'exposition puis privilégie un plan de travail et une protection collective adaptés.",
    },
    exercice: {
      enonce: "Un moteur de ventilation est installé sur une mezzanine. Une trappe reste ouverte pendant la montée des pièces et des opérateurs circulent au niveau inférieur. Prépare l'intervention.",
      consignes: [
        "Repère les risques de chute de personne et d'objet à chaque phase.",
        "Cherche les solutions permettant d'éviter ou de réduire le travail en hauteur.",
        "Définis accès, plan de travail, protections collectives et zone interdite.",
        "Prévois communication, météo éventuelle, manutention et secours.",
      ],
      criteres: [
        "Je ne choisis pas un équipement d'accès avant d'avoir défini la tâche réelle.",
        "Je traite la trappe et les personnes situées sous l'intervention.",
        "Je refuse toute protection individuelle sans système et secours validés.",
      ],
      correction:
        "L'intervention est préparée par phase : accès, acheminement, travail, essai et repli. La trappe reçoit une protection collective ou une organisation équivalente validée ; la zone inférieure est interdite et les objets sont sécurisés. La possibilité de déposer le moteur ou de réaliser certains contrôles depuis un niveau protégé est étudiée. Le moyen d'accès et de travail est choisi selon la durée, les efforts, la manutention et l'environnement, puis vérifié et utilisé par du personnel formé et autorisé. Si un système antichute individuel demeure nécessaire, l'ancrage, le tirant d'air, les compatibilités et le plan de secours sont définis avant l'accès.",
    },
    activity: {
      type: "sequence",
      title: "Construis une intervention en hauteur sûre",
      instruction: "Replace les décisions de la suppression du risque jusqu'à la restitution.",
      items: ["Définir la tâche et les phases", "Éviter le travail en hauteur", "Choisir un plan protégé collectivement", "Maîtriser accès, dessous et objets", "Compléter si nécessaire par un système validé", "Contrôler, intervenir et restituer"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as privilégié l'évitement et la protection collective avant les moyens individuels.",
    },
    ascii: `TÂCHE EN HAUTEUR ?
        |
        +--> ÉVITER / TRAVAILLER DEPUIS LE SOL
        |
        +--> PLAN DE TRAVAIL + GARDE-CORPS
        |
        +--> ÉQUIPEMENT TEMPORAIRE ADAPTÉ
        |
        +--> EPI ANTICHUTE EN DERNIER RECOURS
             ancrage + liaison + harnais + secours`,
    astucesPro: [
      "Découpe l'intervention en phases : le danger change souvent pendant l'ouverture d'une trappe, la manutention ou le repli.",
      "Compte les outils et petites pièces avant de quitter la zone pour éviter un objet oublié en hauteur.",
      "Contrôle visuellement le sol, les appuis, les garde-corps et les accès avant chaque utilisation, puis signale tout écart.",
    ],
    diagnostic: [
      "Repérer bords, ouvertures, surfaces fragiles, différences de niveau et accès.",
      "Évaluer durée, efforts, portée, fréquence, manutention et besoin de deux mains.",
      "Identifier circulation, coactivité, météo, proximité électrique et risque de chute d'objets.",
      "Faire valider moyen de travail, compétences, vérifications, balisage et secours.",
    ],
    depannage: [
      "Mettre l'équipement industriel dans l'état sûr prévu avant l'accès.",
      "Installer et contrôler les protections et le moyen de travail autorisés.",
      "Sécuriser outils, pièces, ouvertures et zone située au-dessous.",
      "Replier sans retirer prématurément une protection puis restituer et tracer les écarts.",
    ],
    securite: [
      "Ne jamais utiliser un élément de machine, une palette ou une caisse comme poste de travail.",
      "Ne jamais improviser un ancrage ni mélanger des composants antichute non validés ensemble.",
      "Après une chute, le surveillant alerte et applique le plan de secours ; il ne s'expose pas à son tour.",
    ],
    etudeDeCas: {
      situation: "Pour réarmer un équipement, un collègue veut monter deux minutes sur une échelle posée contre le convoyeur en marche.",
      mission: ["Identifier les dangers masqués par la courte durée.", "Expliquer pourquoi l'échelle ne règle pas la situation.", "Proposer une décision professionnelle."],
      correction: "La durée courte ne supprime ni la chute, ni le démarrage, ni le heurt ou le renversement de l'échelle. L'opération est arrêtée et réévaluée. Le besoin de réarmement est traité depuis un emplacement accessible ou au moyen d'un poste sécurisé prévu par l'entreprise, après maîtrise des énergies et de la circulation. Une modification durable de l'accès ou de la commande doit être étudiée si l'action se répète.",
    },
    memo: ["Éviter", "Plan stable", "Collectif", "Accès", "Dessous", "Objets", "Tirant d'air", "Secours"],
    resume: "Prévenir une chute consiste à supprimer l'exposition puis à fournir un poste protégé collectivement. Toute solution individuelle exige un système complet, des compétences, des vérifications et un secours préparé. La courte durée et la faible hauteur ne justifient jamais l'improvisation.",
  },
  {
    id: "1-20",
    title: "Comprendre, mesurer et réduire le bruit industriel",
    durationMinutes: 55,
    objectifs: [
      "Distinguer niveau instantané, durée d'exposition et bruit de crête.",
      "Repérer les effets auditifs et les risques indirects pour la sécurité.",
      "Choisir des actions à la source avant les protecteurs auditifs.",
    ],
    simple:
      "Le bruit peut endommager progressivement l'audition sans douleur immédiate. Le risque dépend du niveau, de la durée et des bruits très courts mais intenses. Il peut aussi masquer une alarme, gêner la communication, fatiguer et diminuer l'attention. Un téléphone ou une impression personnelle ne remplace pas une évaluation par des personnes compétentes. La meilleure prévention réduit le bruit à la source : machine moins bruyante, entretien, équilibrage, capotage, silencieux, isolation ou traitement du local.",
    vocab: [
      ["dB(A)", "Décibel pondéré A, indicateur couramment utilisé pour l'exposition moyenne en tenant compte de la sensibilité de l'oreille."],
      ["dB(C) crête", "Indicateur utilisé pour les bruits impulsionnels très courts et intenses."],
      ["LEX,8h", "Niveau d'exposition quotidienne ramené à une durée de référence de huit heures."],
      ["Dosimètre", "Appareil porté qui enregistre l'exposition sonore pendant une activité ou une période."],
      ["Sonomètre", "Appareil mesurant le niveau sonore selon une méthode et des réglages définis."],
      ["PICB", "Protecteur individuel contre le bruit : bouchon ou coquille choisi pour l'exposition et correctement porté."],
    ],
    example:
      "Un roulement de ventilateur devient bruyant. Distribuer uniquement des bouchons ne traite ni la dégradation mécanique ni la source. La zone est gérée selon l'évaluation existante, puis le défaut est diagnostiqué en sécurité : lubrification, roulement, déséquilibre, frottement, desserrage ou résonance.",
    schema: "noise-prevention-path",
    retenir: [
      "Le niveau et la durée se combinent ; un bruit de crête doit aussi être considéré.",
      "À partir de 80 dB(A) sur huit heures ou 135 dB(C) de crête, les premières actions réglementaires sont déclenchées ; l'évaluation reste obligatoire quel que soit le niveau.",
      "Réduire à la source, éloigner, encloisonner et organiser passent avant les protecteurs individuels.",
      "L'atténuation réelle d'un protecteur dépend du choix, de l'ajustement, de la formation et du port pendant toute l'exposition.",
      "La communication et l'audibilité des alarmes doivent rester efficaces avec le bruit et les protections portées.",
    ],
    erreurs: [
      "Décider qu'un bruit est acceptable parce qu'il ne fait pas mal.",
      "Utiliser une application de téléphone comme preuve réglementaire d'exposition.",
      "Choisir le protecteur qui affiche l'atténuation maximale sans étudier alarmes et communication.",
      "Retirer quelques minutes les protecteurs dans une zone bruyante en pensant que cela ne change rien.",
    ],
    quizIds: ["m1w36", "m1w37", "m1w38", "m1w39", "m1w40"],
    verification: {
      question: "Quelle action est prioritaire lorsqu'un ventilateur produit un bruit anormal ?",
      options: ["Donner seulement un casque antibruit", "Réduire l'exposition et rechercher la cause du bruit à la source", "Parler plus fort", "Ignorer si la production continue"],
      correct: 1,
      explanation: "La protection auditive peut compléter la prévention, mais la source et la cause technique doivent d'abord être maîtrisées.",
    },
    exercice: {
      enonce: "Après l'installation d'un compresseur, les opérateurs parlent plus fort et n'entendent plus toujours l'alarme du chariot. Construis l'analyse et le plan d'action.",
      consignes: [
        "Sépare indices, mesures nécessaires et conclusions encore inconnues.",
        "Propose des actions sur source, transmission, local et organisation.",
        "Traite l'alarme, les circulations et la communication.",
        "Définis le rôle provisoire puis durable des protections auditives.",
      ],
      criteres: [
        "Je ne transforme pas une application mobile en mesure officielle.",
        "Je traite le danger de circulation créé par le masquage de l'alarme.",
        "Je maintiens la recherche de réduction collective même si des PICB sont portés.",
      ],
      correction:
        "L'augmentation du niveau de voix et le masquage de l'alarme sont des signaux d'alerte, pas une mesure. L'employeur fait évaluer l'exposition et l'intelligibilité des signaux par une méthode adaptée. Le compresseur, son implantation, ses supports, son échappement, son capotage et le traitement acoustique du local sont étudiés. Circulation et accès sont provisoirement adaptés. Les PICB sont choisis selon le niveau réel, la tâche, le confort, la compatibilité avec les autres EPI et la perception des alarmes, avec formation au port ; ils ne remplacent pas le programme de réduction à la source.",
    },
    activity: {
      type: "sequence",
      title: "Construis une démarche bruit",
      instruction: "Classe les actions de l'identification du problème au contrôle de l'efficacité.",
      items: ["Repérer tâches, sources et personnes", "Évaluer niveau, durée et crêtes", "Réduire le bruit à la source", "Agir sur propagation et organisation", "Choisir et former au PICB si nécessaire", "Mesurer à nouveau et vérifier les alarmes"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as placé la réduction collective avant la protection individuelle et prévu une vérification.",
    },
    ascii: `SOURCE --------> PROPAGATION --------> OREILLE / TÂCHE
 moteur          air, structure         audition
 choc            parois, local          alarme masquée

RÉDUIRE SOURCE > ISOLER/CAPOTER > ORGANISER > PICB > CONTRÔLER`,
    astucesPro: [
      "Un bruit nouveau est aussi un symptôme mécanique : compare avec l'état normal sans t'exposer pour écouter de près.",
      "Consigne le contexte de la mesure : machine, charge, vitesse, portes, capots et nombre d'équipements en service.",
      "Vérifie que le protecteur reste compatible avec casque, lunettes, communication et signaux d'urgence.",
    ],
    diagnostic: [
      "Identifier sources, tâches, durées, coactivité et bruits impulsionnels.",
      "Rechercher évaluations, cartographie, mesures et protections déjà définies.",
      "Examiner état mécanique, fixation, capotage, silencieux, fuite et résonance sans neutraliser de protection.",
      "Comparer avant/après intervention avec la même méthode et les mêmes conditions.",
    ],
    depannage: [
      "Limiter l'accès et l'exposition selon les règles de la zone.",
      "Maîtriser les énergies avant tout contrôle mécanique rapproché.",
      "Corriger la cause validée : desserrage, usure, déséquilibre, lubrification, fuite ou traitement acoustique.",
      "Remettre les capots, réaliser un essai maîtrisé et vérifier bruit, vibration, communication et alarmes.",
    ],
    securite: [
      "Ne jamais approcher l'oreille d'une machine ni retirer un protecteur pour localiser un bruit.",
      "Ne jamais supprimer un capot acoustique ou un silencieux pour faciliter un essai permanent.",
      "Acouphène, baisse auditive soudaine ou douleur après un bruit intense impose de quitter l'exposition et d'appliquer la prise en charge prévue.",
    ],
    etudeDeCas: {
      situation: "Un technicien retire une coquille antibruit pour mieux entendre quel roulement siffle.",
      mission: ["Expliquer pourquoi la méthode est dangereuse et peu fiable.", "Proposer des observations sans exposition supplémentaire.", "Définir la suite professionnelle."],
      correction: "Retirer la protection augmente immédiatement l'exposition et l'écoute subjective localise mal une source réverbérée. Le technicien maintient les mesures de la zone, exploite l'historique et utilise les méthodes autorisées : mesure vibratoire, température, inspection hors tension et comparaison structurée. La machine est arrêtée si les critères de sécurité ou de fiabilité l'exigent, puis la cause est confirmée avant réparation.",
    },
    memo: ["Niveau", "Durée", "Crête", "Source", "Propagation", "Alarmes", "PICB", "Vérifier"],
    resume: "Le bruit est un risque auditif et un facteur d'accident. Une prévention professionnelle mesure l'exposition, réduit la source et la propagation, organise le travail puis complète avec des protecteurs adaptés. Le bruit anormal reste un symptôme à diagnostiquer sans créer une nouvelle exposition.",
  },
  {
    id: "1-21",
    title: "Reconnaître les atmosphères dangereuses, espaces confinés et zones ATEX",
    durationMinutes: 70,
    objectifs: [
      "Distinguer espace confiné, atmosphère dangereuse et zone ATEX.",
      "Reconnaître manque d'oxygène, toxique, gaz ou poussières explosibles et évolution possible de l'atmosphère.",
      "Appliquer la règle de non-entrée, d'évacuation et d'alerte sans sauvetage improvisé.",
    ],
    simple:
      "Une cuve, une fosse, un regard, un silo ou un grand carter peut être difficile à ventiler et à évacuer : c'est potentiellement un espace confiné. Son atmosphère peut manquer d'oxygène, contenir un toxique ou devenir explosible sans odeur ni signe visible. Une ATEX est un mélange d'air avec un gaz, une vapeur, un brouillard ou une poussière combustible pouvant exploser avec une source d'inflammation ; elle peut exister hors d'un espace confiné. Aucun sens humain ne prouve que l'air est sûr. L'entrée exige une procédure, un permis validé, des contrôles d'atmosphère, une ventilation, un surveillant extérieur, des moyens de communication et un plan de secours.",
    vocab: [
      ["Espace confiné", "Volume totalement ou partiellement fermé, peu ventilé, non conçu pour une occupation continue et où les accès ou l'évacuation sont difficiles."],
      ["Atmosphère dangereuse", "Air présentant notamment un manque ou excès d'oxygène, un toxique, un risque d'incendie ou d'explosion."],
      ["ATEX", "Atmosphère explosible : mélange avec l'air d'une substance combustible pouvant propager une explosion après inflammation."],
      ["Contrôleur d'atmosphère", "Appareil adapté aux gaz recherchés, utilisé par du personnel formé selon une méthode, des vérifications et des seuils définis."],
      ["Permis de pénétrer", "Document opérationnel validé sur site qui confirme les conditions et moyens avant toute entrée en espace confiné."],
      ["Surveillant", "Personne formée restant à l'extérieur, dédiée à la surveillance, à la communication, à l'évacuation et à l'alerte."],
    ],
    example:
      "Une pompe immergée se trouve au fond d'une fosse. Même si l'intervention semble mécanique, la fosse peut accumuler un gaz, manquer d'oxygène, se remplir ou présenter une chute. Regarder depuis l'ouverture ne valide pas l'atmosphère et descendre sans organisation spécifique est interdit.",
    schema: "dangerous-atmosphere-gate",
    retenir: [
      "Espace confiné et ATEX ne sont pas synonymes : l'analyse recherche les deux ainsi que les autres risques.",
      "Une atmosphère peut changer pendant le travail à cause d'une fuite, d'un produit, d'une réaction, d'une panne de ventilation ou de la tâche elle-même.",
      "Le contrôle est réalisé avant l'entrée puis en continu selon la procédure, avec un appareil adapté et vérifié.",
      "Le surveillant reste dehors, dédié à sa mission et n'entre jamais pour secourir une victime.",
      "En zone ATEX, éviter la formation du mélange, supprimer les sources d'inflammation et limiter les conséquences sont les priorités.",
    ],
    erreurs: [
      "Se fier à l'odeur, à une flamme ou au comportement d'un animal pour juger l'atmosphère.",
      "Entrer quelques secondes pour récupérer un outil sans permis ni surveillance.",
      "Ventiler avec de l'oxygène ou un matériel non adapté au risque.",
      "Descendre aider une personne inconsciente sans équipement ni équipe de secours préparée.",
    ],
    quizIds: ["m1w41", "m1w42", "m1w43", "m1w44", "m1w45"],
    verification: {
      question: "Un collègue s'effondre dans une cuve. Quelle est la première règle pour le témoin non équipé ?",
      options: ["Entrer immédiatement", "Retenir sa respiration et descendre", "Rester hors de la cuve, alerter et déclencher le plan de secours", "Jeter de l'eau"],
      correct: 2,
      explanation: "Une entrée improvisée crée souvent une seconde victime. Le témoin reste en sécurité et déclenche les secours préparés.",
    },
    exercice: {
      enonce: "Une équipe doit contrôler un agitateur à l'intérieur d'une cuve vidée la veille. La trappe est ouverte et aucune odeur n'est perçue. Prépare la décision d'entrée.",
      consignes: [
        "Explique pourquoi cuve vide, trappe ouverte et absence d'odeur ne suffisent pas.",
        "Liste les énergies, produits, arrivées, atmosphères et tâches à analyser.",
        "Définis permis, contrôle, ventilation, surveillant, communication et secours.",
        "Ajoute les mesures spécifiques si une ATEX peut se former.",
      ],
      criteres: [
        "Je n'autorise aucune entrée avant validation complète sur site.",
        "Je traite les variations d'atmosphère pendant la tâche.",
        "Je prévois l'évacuation et le secours sans entrée improvisée du surveillant.",
      ],
      correction:
        "La cuve est identifiée comme espace confiné potentiel. L'historique des produits, dépôts, réactions, nettoyages et travaux prévus est analysé. Toutes les énergies et arrivées de fluides sont consignées ou isolées selon la procédure ; nettoyage, purge et ventilation sont définis. Une personne formée contrôle l'atmosphère aux emplacements et pendant les durées prévus avec un appareil adapté et vérifié. Le permis est validé sur le lieu, le surveillant reste dehors avec communication et moyens d'alerte, et le plan de secours est opérationnel. Si un mélange explosible est possible, le zonage, les matériels autorisés, les travaux par point chaud, l'électricité statique et toutes les sources d'inflammation sont traités. Sans une seule de ces conditions, l'entrée n'a pas lieu.",
    },
    activity: {
      type: "sequence",
      title: "Verrouille l'entrée en espace confiné",
      instruction: "Replace les barrières qui doivent être confirmées avant puis pendant l'entrée.",
      items: ["Identifier ouvrage, tâche et dangers", "Isoler énergies et arrivées", "Nettoyer, purger et ventiler", "Contrôler l'atmosphère", "Valider permis, surveillant et secours", "Surveiller en continu et évacuer sur alarme"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as traité l'entrée comme une autorisation conditionnelle et révocable, jamais comme une formalité.",
    },
    ascii: `ESPACE / PROCÉDÉ
       |
       +--> OXYGÈNE INSUFFISANT ?
       +--> TOXIQUE ?
       +--> GAZ / VAPEUR / POUSSIÈRE EXPLOSIBLE ?
       +--> NOYADE, CHUTE, ÉNERGIE, ENSEVELISSEMENT ?

PAS DE PERMIS + CONTRÔLE + VENTILATION + SURVEILLANT + SECOURS
                         = PAS D'ENTRÉE`,
    astucesPro: [
      "Analyse aussi ce que la tâche va produire : soudage, solvant, nettoyage, fermentation, inertage ou remise en suspension de poussières.",
      "Un détecteur n'est utile que si ses cellules correspondent aux dangers recherchés et si l'utilisateur connaît ses limites et alarmes.",
      "L'ordre d'évacuation est immédiat en cas d'alarme, de malaise, de perte de communication ou de panne de ventilation.",
    ],
    diagnostic: [
      "Identifier géométrie, accès, ventilation naturelle, produits, dépôts et historique.",
      "Recenser toutes les arrivées, énergies, mouvements, remplissages et risques de chute ou noyade.",
      "Évaluer l'atmosphère initiale et son évolution possible pendant chaque tâche.",
      "Vérifier organisation, compétences, permis, instruments, ventilation, communication et secours.",
    ],
    depannage: [
      "Chercher d'abord une inspection ou une intervention depuis l'extérieur.",
      "Faire isoler et condamner les sources et arrivées selon la procédure spécifique.",
      "Mettre en œuvre nettoyage, ventilation, contrôle et moyens autorisés avant l'entrée.",
      "Maintenir surveillance, détection, communication et possibilité d'évacuation jusqu'à la restitution.",
    ],
    securite: [
      "Ne jamais entrer pour vérifier une atmosphère avec ses sens ou un détecteur non maîtrisé.",
      "Ne jamais ventiler à l'oxygène et ne jamais introduire une source d'inflammation ou un matériel non autorisé en zone ATEX.",
      "Le surveillant n'entre jamais porter secours : il alerte et applique le plan prévu depuis l'extérieur.",
    ],
    etudeDeCas: {
      situation: "L'alarme gaz se déclenche pendant le remplacement d'une vanne dans un regard. L'opérateur pense finir en deux minutes.",
      mission: ["Décider de l'action immédiate.", "Lister les causes possibles sans les tester en restant dedans.", "Définir les conditions d'une éventuelle reprise."],
      correction: "L'alarme entraîne l'évacuation immédiate selon la procédure ; le surveillant reste dehors, vérifie la sortie et alerte. Une fuite, une panne de ventilation, une réaction, un déplacement de gaz ou un défaut de mesure sont étudiés depuis une situation sûre par les personnes compétentes. La reprise exige une nouvelle évaluation, le rétablissement des barrières, des contrôles conformes et un permis revalidé. Le délai de production ne modifie pas cette règle.",
    },
    memo: ["Confiné", "Oxygène", "Toxique", "ATEX", "Isoler", "Ventiler", "Surveillant", "Secours"],
    resume: "Une atmosphère dangereuse ne se voit pas et peut évoluer rapidement. Toute entrée en espace confiné repose sur une procédure complète, un permis validé, l'isolement, la ventilation, le contrôle, un surveillant et un secours préparé. Une alarme ou un doute impose l'évacuation, jamais une tentative de finir vite ou de secourir sans protection.",
  },
];
