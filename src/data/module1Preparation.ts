import type { Lesson } from "../types";

/**
 * Bloc 2 du module 1 — préparation et coordination d'une intervention.
 *
 * Ces repères ne remplacent ni les procédures du site, ni l'analyse de risques
 * de l'employeur, ni les permis, autorisations, formations ou habilitations
 * nécessaires à une opération réelle.
 */
export const MODULE1_PREPARATION_LESSONS: Lesson[] = [
  {
    id: "1-7",
    title: "Transformer une demande en intervention préparée",
    durationMinutes: 40,
    objectifs: [
      "Transformer un signalement vague en demande d'intervention exploitable.",
      "Définir le périmètre, l'état attendu et les limites de l'intervention avant de choisir une solution.",
      "Repérer les informations manquantes qui imposent un point d'arrêt.",
    ],
    simple:
      "Une bonne intervention commence avant la caisse à outils. Le technicien doit savoir quelle machine est concernée, ce qui est observé, dans quelles conditions le défaut apparaît, quel résultat est attendu et qui peut confirmer la situation. Une demande urgente mais incomplète ne doit pas devenir une improvisation dangereuse.",
    vocab: [
      ["Demande d'intervention", "Enregistrement du besoin : équipement, symptôme, contexte, priorité et demandeur."],
      ["Symptôme", "Fait observable : bruit, arrêt, fuite, échauffement, défaut affiché ou qualité dégradée."],
      ["Périmètre", "Limites exactes de la tâche, de l'équipement et de la zone concernés."],
      ["État attendu", "Fonctionnement ou résultat qui permettra de dire que l'intervention est terminée."],
      ["Criticité", "Importance d'un équipement au regard de la sécurité, de la production, de la qualité et de l'environnement."],
      ["Point d'arrêt", "Condition qui interdit de continuer tant qu'une incertitude ou un danger n'est pas traité."],
    ],
    example:
      "Dans un centre logistique, la demande « convoyeur en panne, urgent » est insuffisante. Une demande préparée précise : convoyeur CV-17, zone expédition, arrêt intermittent après accumulation, code défaut F23, dernier fonctionnement à 14 h 10, colis bloqués retirés par la production, accès interdit en attendant la maintenance, contact opérateur et résultat attendu.",
    schema: "work-order",
    retenir: [
      "Identifier sans ambiguïté l'équipement et la zone avant toute action.",
      "Décrire des faits observés, sans transformer une hypothèse en cause certaine.",
      "Préciser l'état de production, les personnes concernées et les conséquences possibles.",
      "Définir ce qui est inclus, exclu et attendu de l'intervention.",
      "Une information manquante critique déclenche un point d'arrêt, pas une supposition.",
    ],
    erreurs: [
      "Écrire « moteur HS » alors qu'aucune mesure n'a confirmé la cause.",
      "Intervenir sur une machine portant le même nom mais pas le même repère.",
      "Confondre priorité de production et autorisation de commencer.",
      "Accepter une extension de tâche orale sans réévaluer les risques et les moyens.",
    ],
    quizIds: ["m1p1", "m1p2", "m1p3", "m1p4", "m1p5"],
    verification: {
      question: "Quelle formulation décrit un symptôme sans inventer la cause ?",
      options: ["Le roulement est cassé", "Bruit cyclique côté entraînement à partir de 40 Hz", "Le motoréducteur est à remplacer", "La maintenance a mal graissé"],
      correct: 1,
      explanation: "Le bruit, sa localisation et sa condition d'apparition sont des faits. Les autres propositions affirment une cause non confirmée.",
    },
    exercice: {
      enonce: "Un opérateur appelle : « La pompe 2 ne marche plus, viens vite ». Transforme cet appel en demande d'intervention exploitable.",
      consignes: [
        "Demande le repère exact, la fonction et la zone de la pompe.",
        "Liste les symptômes, alarmes, conditions d'apparition et actions déjà tentées.",
        "Précise l'état actuel, les impacts et le contact terrain.",
        "Écris un périmètre et un résultat attendu sans poser de diagnostic prématuré.",
      ],
      criteres: [
        "Ma demande distingue faits et hypothèses.",
        "L'équipement et la zone sont identifiés sans ambiguïté.",
        "J'ai prévu un point d'arrêt si une information de sécurité manque.",
      ],
      correction:
        "Exemple : « Pompe P-02 du circuit de refroidissement, local utilités. Débit tombé à zéro à 10 h 35 ; voyant défaut variateur allumé, code à relever ; pas de fuite visible depuis l'extérieur ; aucune réinitialisation effectuée ; circuit maintenu par P-01 ; accès au local contrôlé. Mission : constater le défaut, identifier la cause et proposer la remise en état dans le périmètre autorisé. Contact : opérateur utilités. Point d'arrêt : ne pas commencer sans état des fluides, procédure et autorisation applicables. »",
    },
    activity: {
      type: "sequence",
      title: "Construis une demande fiable",
      instruction: "Remets les étapes dans l'ordre avant d'affecter le travail.",
      items: ["Identifier équipement et zone", "Recueillir les faits", "Décrire impacts et état actuel", "Définir périmètre et résultat attendu", "Repérer les informations manquantes", "Affecter selon compétences et priorité"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "La demande devient une base de préparation, pas une simple injonction à se dépêcher.",
    },
    ascii: `DEMANDE BRUTE                     DEMANDE PRÉPARÉE
« Convoyeur en panne »             Repère : CV-17 / expédition
          │                        Faits : arrêt + code F23
          ├── où ?                 Contexte : accumulation
          ├── quand ?              État : accès interdit
          ├── quoi exactement ?    Impact : ligne arrêtée
          ├── dans quel état ?     Périmètre : diagnostic autorisé
          └── résultat attendu ?   Point d'arrêt : info sécurité absente`,
    astucesPro: [
      "Fais reformuler le symptôme par la personne qui l'a réellement observé.",
      "Note l'heure et la condition d'apparition : vitesse, charge, recette, température ou cycle.",
      "Photographie ou relève un code défaut seulement si les règles du site l'autorisent et sans entrer dans une zone dangereuse.",
    ],
    diagnostic: [
      "Identifier l'équipement par son repère physique et documentaire.",
      "Séparer faits, hypothèses, actions déjà réalisées et conséquences.",
      "Comparer le fonctionnement observé à l'état normal attendu.",
      "Lister les informations manquantes avant de choisir les premiers contrôles.",
    ],
    depannage: [
      "Faire sécuriser la situation immédiate par les personnes compétentes.",
      "Formaliser la demande et faire confirmer le périmètre.",
      "Préparer la suite sans démontage ni réarmement prématuré.",
      "Réévaluer la demande si le symptôme, la zone ou l'objectif change.",
    ],
    securite: [
      "Une urgence de production ne remplace jamais l'analyse de risques ni l'autorisation de travail.",
      "Ne pas demander à un opérateur de reproduire un défaut dangereux pour obtenir plus d'informations.",
      "Ne pas accéder à la zone dangereuse pour vérifier un repère avant sa mise en sécurité selon la procédure.",
    ],
    etudeDeCas: {
      situation: "Une cellule photoélectrique semble provoquer des arrêts aléatoires. La production demande de la shunter pour confirmer.",
      mission: ["Reformuler la demande sans valider le shunt.", "Définir les informations à recueillir.", "Identifier le point d'arrêt sécurité."],
      correction: "La demande doit décrire les arrêts, alarmes, conditions de charge et état de la cellule sans affirmer qu'elle est en cause. Neutraliser un dispositif peut modifier une fonction de sécurité ou créer un comportement imprévu : le technicien refuse le contournement et fait définir une méthode de diagnostic sûre par les responsables compétents.",
    },
    memo: ["Repère", "Faits", "Contexte", "État", "Impacts", "Périmètre", "Attendu", "Point d'arrêt"],
    resume: "Une demande professionnelle identifie l'équipement, décrit les faits et le contexte, précise l'état actuel, les impacts, le périmètre et le résultat attendu. Elle n'invente pas la cause et bloque l'affectation si une information critique manque.",
  },
  {
    id: "1-8",
    title: "Préparer compétences, documents, pièces et moyens",
    durationMinutes: 45,
    objectifs: [
      "Construire une préparation complète avant l'arrivée devant la machine.",
      "Vérifier la compétence des intervenants et l'adéquation des moyens à la tâche réelle.",
      "Détecter une documentation obsolète ou une pièce non conforme avant le démontage.",
    ],
    simple:
      "Préparer, c'est rendre l'intervention faisable sans improvisation. Il faut les bonnes personnes, la bonne version des documents, les pièces identifiées, l'outillage contrôlé, les moyens d'accès et de manutention adaptés, ainsi que le temps nécessaire aux contrôles et à la remise en service.",
    vocab: [
      ["Gamme", "Suite d'opérations préparée pour réaliser et contrôler un travail."],
      ["Indice documentaire", "Repère de version permettant de vérifier que le document est à jour."],
      ["Nomenclature", "Liste structurée des composants et références d'un équipement."],
      ["Compétence", "Capacité acquise par formation et expérience à réaliser une tâche correctement."],
      ["Habilitation", "Reconnaissance formelle par l'employeur pour certaines opérations définies ; elle ne vaut pas compétence universelle."],
      ["Moyen d'accès", "Équipement prévu pour atteindre la zone de travail en sécurité : plateforme, passerelle, nacelle autorisée…"],
    ],
    example:
      "Pour remplacer un motoréducteur de convoyeur, la préparation comprend le plan et la notice applicables, la masse et les points de levage, le motoréducteur de bonne référence, l'accouplement, les fixations, les moyens de manutention vérifiés, les instruments de contrôle, les personnes compétentes, la procédure de maîtrise des énergies et un créneau coordonné avec la production.",
    schema: "work-preparation",
    retenir: [
      "Préparer les personnes, informations, pièces, outils, accès, manutentions et contrôles.",
      "Comparer référence, caractéristiques et état de la pièce avant de déposer l'ancienne.",
      "Vérifier l'indice documentaire et les modifications réelles de la machine.",
      "Prévoir dès le départ le contrôle final et les critères d'acceptation.",
      "Un moyen absent ou non vérifié impose de replanifier, pas d'improviser.",
    ],
    erreurs: [
      "Choisir un outil uniquement parce qu'il est disponible.",
      "Découvrir la masse de la pièce après avoir commencé à la déposer.",
      "Utiliser un plan sans vérifier son indice ni sa concordance avec la machine.",
      "Prévoir le remplacement sans prévoir l'alignement, l'essai et la traçabilité.",
    ],
    quizIds: ["m1p6", "m1p7", "m1p8", "m1p9", "m1p10"],
    verification: {
      question: "Un plan porte l'indice B, mais la machine a été modifiée après sa diffusion. Que faire ?",
      options: ["Continuer car un plan existe", "Corriger le plan au crayon et commencer", "Arrêter la préparation et obtenir la documentation applicable", "Démonter pour découvrir le montage"],
      correct: 2,
      explanation: "Une discordance entre document et réalité est un point d'arrêt. Il faut faire identifier et valider la référence applicable.",
    },
    exercice: {
      enonce: "Prépare le remplacement d'un rouleau de tête de convoyeur de 180 kg situé à 2,5 m de hauteur.",
      consignes: ["Liste compétences et rôles nécessaires.", "Liste documents, pièces, outillage, accès et manutention.", "Définis les contrôles avant démontage et après remontage.", "Ajoute au moins trois points d'arrêt."],
      criteres: ["Je traite hauteur, masse et énergies.", "Je vérifie références et moyens avant démontage.", "Je prévois alignement, tension, protecteurs et essai."],
      correction: "La préparation exige une méthode autorisée, les personnes compétentes, les documents applicables, la maîtrise multi-énergies, un accès sécurisé et un moyen de levage adapté et vérifié. Il faut confirmer masse, points de prise, stabilité, rouleau et roulements de remplacement, outillage, alignement et tension. Points d'arrêt : masse ou prise inconnue, moyen de levage non adapté, document incohérent, zone non isolée ou énergie non maîtrisée.",
    },
    activity: {
      type: "sequence",
      title: "Prépare avant d'ouvrir la machine",
      instruction: "Replace les jalons d'une préparation professionnelle.",
      items: ["Définir la tâche et ses limites", "Choisir les compétences", "Vérifier documents et références", "Préparer accès, outils et manutention", "Définir risques et mesures", "Prévoir contrôles et restitution"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as préparé l'ensemble du travail, y compris le contrôle final.",
    },
    ascii: `PRÉPARATION D'INTERVENTION
          ┌──────────────┐
          │ TÂCHE RÉELLE │
          └──────┬───────┘
  ┌──────────┬──────────┼──────────┬───────────┐
Personnes  Documents   Pièces    Outils     Accès/levage
  └──────────┴──────────┼──────────┴───────────┘
                 Risques + mesures
                        │
              Contrôles + restitution`,
    astucesPro: [
      "Prépare une solution de repli si la pièce neuve ou le montage réel n'est pas conforme.",
      "Vérifie l'espace nécessaire à l'extraction, pas seulement l'accès de l'intervenant.",
      "Pose les instruments de contrôle dans la liste de préparation : ils ne doivent pas être oubliés après remontage.",
    ],
    diagnostic: ["Comparer demande, documentation et état connu.", "Identifier les incertitudes techniques et de sécurité.", "Vérifier l'adéquation des compétences et moyens.", "Transformer chaque incertitude critique en point d'arrêt."],
    depannage: ["Ne rien déposer avant validation du dossier et des moyens.", "Faire corriger toute référence ou procédure incohérente.", "Replanifier si l'accès, le levage ou les compétences ne sont pas disponibles.", "Tracer les écarts découverts pour les prochaines interventions."],
    securite: ["Un transpalette ou un chariot ne devient pas un moyen de levage de personnes.", "La masse, le centre de gravité et les points de prise doivent être connus avant manutention.", "Une habilitation ou autorisation couvre un domaine défini ; elle ne remplace ni la compétence technique ni les instructions du site."],
    etudeDeCas: {
      situation: "Le roulement attendu est en stock, mais son jeu interne et son suffixe diffèrent de la nomenclature.",
      mission: ["Décider si le montage peut commencer.", "Lister les vérifications.", "Expliquer le risque d'une substitution improvisée."],
      correction: "Le montage ne commence pas. Le suffixe peut modifier jeu, étanchéité, lubrification ou température admissible. Il faut comparer plan, nomenclature, plaque, historique et prescription du constructeur, puis faire valider toute substitution par la fonction compétente. La pression de production ne constitue pas une validation technique.",
    },
    memo: ["Personnes", "Documents", "Pièces", "Outils", "Accès", "Manutention", "Risques", "Contrôles"],
    resume: "Une préparation fiable réunit compétences, documents à jour, pièces conformes, outils, accès, manutention, mesures de prévention et contrôles finaux. Tout écart critique est traité avant le démontage.",
  },
  {
    id: "1-9",
    title: "Réévaluer les risques au pied de la machine",
    durationMinutes: 45,
    objectifs: [
      "Comparer la situation prévue à la situation réelle juste avant le travail.",
      "Repérer un changement de tâche, d'environnement, d'énergie ou de coactivité.",
      "Appliquer un point d'arrêt et faire adapter les mesures avant de poursuivre.",
    ],
    simple:
      "Une analyse préparée au bureau peut devenir fausse sur le terrain : autre produit, sol mouillé, protecteur absent, engin en circulation, équipement modifié ou deuxième équipe présente. Avant de commencer et après chaque changement, les intervenants comparent ce qui était prévu à ce qu'ils voient réellement.",
    vocab: [
      ["Analyse préalable", "Évaluation préparée avant l'arrivée sur la zone."],
      ["Réévaluation terrain", "Vérification de l'analyse au regard de la situation réellement observée."],
      ["Aléa", "Événement ou condition non prévu qui modifie le travail."],
      ["Risque résiduel", "Risque restant après mise en place des mesures prévues."],
      ["Causerie préalable", "Échange court où l'équipe partage tâche, risques, rôles, mesures et points d'arrêt."],
      ["Droit d'alerte", "Dispositif légal distinct des règles internes ; face à un danger, l'intervenant alerte selon les procédures applicables."],
    ],
    example:
      "Une intervention sur une pompe a été préparée à froid. Sur place, une conduite voisine est chaude, une entreprise nettoie au sol et le chemin d'évacuation est partiellement encombré. L'équipe ne se contente pas du document initial : elle arrête le départ, signale les écarts et fait adapter la coordination et les mesures.",
    schema: "intervention-briefing",
    retenir: ["Observer la tâche, la machine, les énergies, la zone, les accès, les personnes et les activités voisines.", "Comparer systématiquement prévu et réel.", "Partager les rôles, moyens de communication et points d'arrêt avec toute l'équipe.", "Réévaluer après un aléa, une pause longue, un changement d'équipe ou une extension de tâche.", "Un document signé ne rend pas sûre une situation qui a changé."],
    erreurs: ["Faire la vérification seul sans partager les écarts avec l'équipe.", "Cocher une liste de mémoire sans observer la zone.", "Poursuivre parce que l'écart semble mineur.", "Modifier le mode opératoire oralement sans validation ni traçabilité."],
    quizIds: ["m1p11", "m1p12", "m1p13", "m1p14", "m1p15"],
    verification: {
      question: "Le sol est devenu glissant depuis la préparation. Quelle décision est correcte ?",
      options: ["Commencer prudemment", "Ajouter seulement des gants", "Arrêter le départ et faire traiter l'écart", "Signer la fiche initiale"],
      correct: 2,
      explanation: "La situation réelle a changé. Le risque de chute et ses interactions doivent être réévalués avant le début du travail.",
    },
    exercice: {
      enonce: "Compare le dossier d'une intervention sur un ventilateur avec la situation réelle : accès prévu libre, mais palettes stockées, bruit élevé et soudeur travaillant à proximité.",
      consignes: ["Liste les écarts et leurs conséquences.", "Décide lesquels bloquent le départ.", "Propose les personnes à informer.", "Décris les conditions nécessaires pour reprendre."],
      criteres: ["Je traite accès, communication et coactivité.", "Je ne compense pas un danger uniquement par de l'attention.", "Je fais valider les mesures adaptées avant reprise."],
      correction: "Les palettes peuvent gêner l'accès et l'évacuation ; le bruit peut empêcher les alertes ; le soudage apporte chaleur, projections, fumées et risque incendie. Le travail ne commence pas. Le responsable et les activités voisines doivent coordonner le dégagement, la communication, les protections et le séquencement, puis mettre à jour les documents applicables.",
    },
    activity: {
      type: "sequence",
      title: "Prévu contre réel",
      instruction: "Remets la boucle de réévaluation dans l'ordre.",
      items: ["Relire tâche et mesures prévues", "Observer la situation réelle", "Identifier les écarts", "Arrêter si un écart modifie le risque", "Faire adapter et valider les mesures", "Partager puis vérifier avant reprise"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as utilisé l'écart comme un signal de réévaluation, pas comme une raison d'improviser.",
    },
    ascii: `DOSSIER PRÉVU             TERRAIN RÉEL
machine arrêtée           machine / voisinage
accès libre        ⇄      accès / sol / éclairage
une seule équipe          personnes / engins
produit connu             produit / température
        │                         │
        └──── ÉCART ? ────────────┘
               oui → STOP → adapter → valider → partager`,
    astucesPro: ["Demande à chacun de citer un danger et un point d'arrêt : cela révèle les incompréhensions.", "Regarde aussi au-dessus, en dessous et derrière la zone de travail.", "Après une interruption, vérifie que les conditions et les dispositifs n'ont pas changé."],
    diagnostic: ["Relire l'intervention prévue.", "Balayer machine, environnement, personnes et activités.", "Comparer chaque mesure à son état réel.", "Classer les écarts : à traiter avant départ, à surveiller ou à escalader."],
    depannage: ["Suspendre le démarrage ou l'activité concernée.", "Informer le responsable désigné.", "Faire mettre à jour l'analyse, le mode opératoire ou la coordination.", "Ne reprendre qu'après partage et vérification des nouvelles mesures."],
    securite: ["L'application n'autorise pas l'apprenant à décider seul de l'acceptabilité d'un risque réel.", "Un danger grave ou une condition non maîtrisée impose l'arrêt et l'alerte selon les règles du site.", "Ne jamais entrer dans une zone dangereuse pour compléter l'observation avant sa mise en sécurité."],
    etudeDeCas: {
      situation: "Pendant le démontage, l'équipe découvre une canalisation non repérée traversant le carter.",
      mission: ["Décider immédiatement.", "Expliquer pourquoi le dossier initial n'est plus suffisant.", "Définir la reprise possible."],
      correction: "L'équipe s'arrête, protège la zone et informe. La canalisation doit être identifiée, son contenu et son état déterminés par les personnes compétentes, puis les énergies, risques et mesures réévalués. Le démontage ne reprend qu'avec une méthode et une autorisation actualisées.",
    },
    memo: ["Prévu", "Observer", "Comparer", "Écart", "Stop", "Adapter", "Valider", "Partager"],
    resume: "La préparation est réévaluée juste avant le travail et à chaque évolution. Tout écart qui modifie le risque devient un point d'arrêt jusqu'à adaptation, validation et partage des mesures.",
  },
  {
    id: "1-10",
    title: "Comprendre autorisations, permis et responsabilités",
    durationMinutes: 45,
    objectifs: ["Distinguer compétence, formation, habilitation, autorisation et permis de travail.", "Vérifier que les rôles et limites de chacun sont compris avant le travail.", "Reconnaître le cas particulier de la coactivité avec une entreprise extérieure."],
    simple:
      "Savoir faire techniquement ne suffit pas toujours pour avoir le droit de faire. Selon la tâche et le site, l'employeur définit qui prépare, autorise, consigne, exécute, surveille, contrôle et remet en service. Certains travaux utilisent un permis spécifique. Les intitulés varient : le technicien doit suivre l'organisation réelle de son entreprise, pas inventer une autorité.",
    vocab: [
      ["Autorisation de travail", "Validation interne donnant le départ pour une tâche définie, dans des conditions définies."],
      ["Permis", "Document spécifique exigé par le site pour certains risques, par exemple feu, espace confiné ou fouille."],
      ["Habilitation", "Reconnaissance par l'employeur de la capacité à accomplir en sécurité certaines opérations réglementées."],
      ["Consigne", "Instruction obligatoire liée au site, à l'équipement ou à l'opération."],
      ["Entreprise utilisatrice", "Entreprise dans l'établissement de laquelle une entreprise extérieure intervient."],
      ["Plan de prévention", "Document issu de l'analyse commune des risques d'interférence entre entreprises lorsque le cadre applicable l'exige."],
    ],
    example:
      "Un mécanicien compétent doit meuler un support dans une usine chimique. Sa compétence mécanique ne lui donne pas automatiquement le départ : le site peut exiger une autorisation de travail, un permis de feu, des contrôles d'atmosphère, une coordination avec l'exploitation et une surveillance définie.",
    schema: "authorization-gate",
    retenir: ["Compétence technique et autorisation d'agir sont deux conditions différentes.", "Vérifier tâche, zone, durée, signataires, conditions et limites du document.", "Un permis ne supprime pas le danger : il formalise des conditions et mesures à appliquer.", "Pour une entreprise extérieure, l'analyse des interférences et la coordination sont réalisées entre les employeurs selon le cadre applicable.", "Si le rôle de consignation, de surveillance ou de remise en service est incertain, le travail ne commence pas."],
    erreurs: ["Croire qu'un badge, un diplôme ou une ancienneté autorise toutes les opérations.", "Signer un permis sans vérifier les conditions sur le terrain.", "Utiliser un ancien permis pour une nouvelle tâche ou une autre zone.", "Confondre plan de prévention, autorisation de travail et mode opératoire."],
    quizIds: ["m1p16", "m1p17", "m1p18", "m1p19", "m1p20"],
    verification: {
      question: "Un permis signé suffit-il à rendre le travail sûr ?",
      options: ["Oui, toujours", "Non, les mesures doivent être réellement en place et la situation conforme", "Oui, si l'intervenant est ancien", "Oui, pour moins d'une heure"],
      correct: 1,
      explanation: "Le document formalise des conditions. Il faut encore vérifier leur mise en œuvre et réévaluer la situation réelle.",
    },
    exercice: {
      enonce: "Une société extérieure doit souder une bride à proximité d'une ligne en production.",
      consignes: ["Distingue responsabilités des employeurs et rôle de l'intervenant.", "Liste les documents et vérifications possibles sans imposer un modèle universel.", "Décris les risques d'interférence.", "Donne les points d'arrêt avant départ."],
      criteres: ["Je traite le cadre entreprise extérieure.", "Je ne présente pas le permis comme une protection suffisante.", "Je vérifie coordination, feu, atmosphère, énergies et secours selon le site."],
      correction: "Les entreprises organisent l'inspection préalable, analysent les risques d'interférence et définissent les mesures et responsables selon le cadre applicable. Le site peut exiger autorisation et permis de feu. L'intervenant vérifie que tâche, zone, durée, conditions, moyens incendie, voisinage, énergies et surveillance correspondent au terrain. Tout écart ou rôle incertain bloque le départ.",
    },
    activity: {
      type: "sequence",
      title: "Franchis les portes d'autorisation",
      instruction: "Replace les vérifications avant le début du travail.",
      items: ["Définir tâche et risques", "Vérifier compétence et habilitation requises", "Identifier rôles et coordination", "Obtenir documents et permis applicables", "Contrôler les mesures sur le terrain", "Donner le départ selon la procédure"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Le départ vient après les compétences, les rôles, les documents et la vérification terrain.",
    },
    ascii: `COMPÉTENT ? ── non → ne pas affecter
     │ oui
FORMÉ / HABILITÉ si requis ? ── non → STOP
     │ oui
RÔLES + DOCUMENTS + PERMIS applicables ? ── non → STOP
     │ oui
MESURES RÉELLEMENT EN PLACE ? ── non → STOP
     │ oui
        DÉPART SELON LA PROCÉDURE`,
    astucesPro: ["Lis les limites du document, pas seulement son titre.", "Fais nommer la personne à contacter si la situation change.", "Vérifie que chaque intervenant comprend le même périmètre et le même point de restitution."],
    diagnostic: ["Identifier le cadre : interne, entreprise extérieure, opération particulière.", "Lister compétences, habilitations et autorisations requises.", "Vérifier rôles, documents, conditions et dates.", "Comparer les exigences aux mesures réellement observées."],
    depannage: ["Suspendre le départ si une signature, un rôle ou une condition manque.", "Faire corriger le document par l'autorité prévue.", "Réactualiser en cas de changement de tâche, d'équipe ou de condition.", "Archiver ou clôturer selon la procédure après restitution."],
    securite: ["Ne jamais signer pour une vérification que l'on n'a pas réalisée.", "Un permis expiré, incomplet ou hors périmètre ne doit pas être réutilisé.", "Les règles exactes dépendent du droit applicable et de l'organisation de l'employeur ; l'application ne délivre aucune autorisation."],
    etudeDeCas: {
      situation: "Un technicien reçoit l'ordre oral d'entrer dans une cuve « seulement deux minutes » pour récupérer un outil.",
      mission: ["Identifier les erreurs de raisonnement.", "Décider de la conduite immédiate.", "Expliquer les exigences à faire définir."],
      correction: "La courte durée ne supprime pas les risques d'un espace confiné. Le technicien refuse l'entrée et alerte. Une intervention éventuelle exige une analyse spécifique, une procédure, les autorisations et compétences prévues, les contrôles d'atmosphère, la ventilation, la surveillance et les secours organisés selon le site.",
    },
    memo: ["Compétence", "Formation", "Habilitation", "Autorisation", "Permis", "Rôles", "Terrain", "Départ"],
    resume: "Une intervention ne démarre que si les personnes sont compétentes et reconnues pour la tâche, les rôles sont clairs, les documents applicables sont valides et les mesures sont réellement en place. Aucun papier ne remplace la vérification terrain.",
  },
  {
    id: "1-11",
    title: "Installer la zone et maîtriser la coactivité",
    durationMinutes: 45,
    objectifs: ["Délimiter une zone de travail adaptée aux dangers et aux circulations.", "Identifier les interférences entre maintenance, production, nettoyage, logistique et entreprises extérieures.", "Coordonner les phases de travail et les communications."],
    simple:
      "La machine n'est pas le seul danger. Autour d'elle circulent des piétons, chariots, produits, équipes et informations. Le balisage avertit et limite l'accès, mais il ne remplace ni une séparation physique adaptée, ni l'arrêt d'une circulation dangereuse, ni la coordination des activités.",
    vocab: [
      ["Coactivité", "Présence simultanée ou successive d'activités pouvant se gêner ou créer des risques entre elles."],
      ["Interférence", "Interaction entre activités, installations ou matériels qui crée ou augmente un risque."],
      ["Balisage", "Repérage visible d'une zone et de ses limites ; sa résistance et son niveau de contrôle doivent être adaptés."],
      ["Périmètre de sécurité", "Zone définie pour tenir les personnes non concernées à distance du danger."],
      ["Séquençage", "Organisation des tâches dans le temps pour éviter des opérations incompatibles."],
      ["Référent", "Interlocuteur désigné pour coordonner ou transmettre les informations selon l'organisation du site."],
    ],
    example:
      "Pendant le remplacement d'un moteur de convoyeur, un chariot doit emprunter l'allée voisine, le nettoyage utilise de l'eau et une autre équipe intervient en hauteur. La préparation doit traiter collision, sol glissant et chute d'objets : séparation des flux, arrêt ou déviation, protection collective, séquençage et communication entre responsables.",
    schema: "coactivity-zone",
    retenir: ["Définir une zone selon les dangers réels, pas selon la longueur de ruban disponible.", "Maintenir les voies d'évacuation, accès secours et organes nécessaires accessibles.", "Séparer autant que possible personnes, engins, charges et travaux superposés.", "Coordonner les activités simultanées, successives et leurs changements d'état.", "Vérifier régulièrement que le balisage et les mesures restent efficaces."],
    erreurs: ["Poser un cône puis considérer la zone sécurisée.", "Bloquer une issue ou un extincteur avec les outils et pièces déposées.", "Oublier les activités au niveau supérieur ou inférieur.", "Retirer le balisage avant la fin des essais et de la restitution."],
    quizIds: ["m1p21", "m1p22", "m1p23", "m1p24", "m1p25"],
    verification: {
      question: "Un ruban de balisage suffit-il à protéger d'un chariot en circulation ?",
      options: ["Oui, s'il est rouge", "Oui, avec un panneau", "Non, il faut traiter le flux et utiliser des mesures adaptées au risque de collision", "Oui, pendant moins de dix minutes"],
      correct: 2,
      explanation: "Un ruban n'arrête pas un engin. La circulation doit être supprimée, séparée ou coordonnée avec des moyens réellement efficaces.",
    },
    exercice: {
      enonce: "Organise une zone de maintenance autour d'une pompe située entre une allée chariots et un passage piéton.",
      consignes: ["Dessine les flux et la zone d'intervention.", "Identifie les interférences et travaux incompatibles.", "Propose la hiérarchie des mesures.", "Définis communication, contrôle et fin de balisage."],
      criteres: ["Je traite le mouvement des engins à la source.", "Je conserve évacuation et secours.", "Je coordonne avant, pendant et après l'intervention."],
      correction: "La solution prioritaire évite l'interférence : arrêt ou déviation contrôlée du flux pendant les phases exposées, séparation physique adaptée si possible, accès réservé, rangement des flexibles et pièces, éclairage et visibilité, interlocuteur logistique identifié. Le balisage complète ces mesures. La zone reste contrôlée jusqu'à la fin des essais et la restitution.",
    },
    activity: {
      type: "sequence",
      title: "Installe une zone maîtrisée",
      instruction: "Replace les actions avant l'arrivée des outils.",
      items: ["Cartographier dangers et flux", "Supprimer ou séparer les interférences", "Définir accès, évacuation et stockage", "Installer protections et balisage", "Informer les activités voisines", "Contrôler pendant le travail"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as traité les flux avant d'ajouter la signalisation.",
    },
    ascii: `        TRAVAIL EN HAUTEUR
              ↓ objets
╔════════ ZONE INTERDITE ════════╗
║  pièces rangées   [MACHINE]    ║
║  accès maintenu   équipe       ║
╚════════════════════════════════╝
PIÉTONS ───────── voie séparée ───────→
CHARIOTS ══ déviation / arrêt contrôlé ══→
                 issue + secours libres`,
    astucesPro: ["Place-toi sur les trajectoires probables, pas seulement autour de la machine.", "Désigne un emplacement pour les pièces déposées afin d'éviter encombrement et contamination.", "Annonce les changements de phase : consignation, levage, essai, remise en service."],
    diagnostic: ["Cartographier personnes, engins, énergies, niveaux et activités.", "Identifier les croisements dans l'espace et le temps.", "Évaluer l'efficacité réelle des séparations et communications.", "Réévaluer à chaque changement de phase ou d'équipe."],
    depannage: ["Arrêter la phase exposée si une personne ou un engin entre dans la zone.", "Rétablir ou renforcer la séparation avant reprise.", "Reprogrammer les tâches incompatibles.", "Informer et tracer les écarts répétés pour une action durable."],
    securite: ["Ne jamais se placer comme barrière humaine devant un engin.", "Un signaleur ou surveillant n'est efficace que si son rôle, sa position et ses communications sont définis.", "Les protections collectives et l'organisation des flux priment sur la seule vigilance individuelle."],
    etudeDeCas: {
      situation: "Pendant un levage, un opérateur traverse la zone pour atteindre un pupitre resté en service.",
      mission: ["Identifier l'erreur de préparation.", "Décider immédiatement.", "Proposer une correction durable."],
      correction: "Le levage est interrompu et la charge placée dans une situation sûre selon la méthode. Le pupitre nécessaire aurait dû être rendu accessible hors de la zone ou l'activité utilisant ce pupitre suspendue et coordonnée. La zone, les flux et le séquençage sont revus avant reprise.",
    },
    memo: ["Flux", "Interférences", "Séparer", "Accès", "Évacuation", "Informer", "Contrôler", "Maintenir"],
    resume: "Maîtriser la coactivité consiste à supprimer ou séparer les interférences, organiser les flux et les phases, installer une zone contrôlée, informer les acteurs et vérifier les mesures jusqu'à la restitution.",
  },
  {
    id: "1-12",
    title: "Contrôler, restituer et remettre en service",
    durationMinutes: 50,
    objectifs: ["Préparer la fin de travaux dès le début de l'intervention.", "Contrôler l'équipement, la zone et les personnes avant toute remise en énergie.", "Conduire un essai progressif, restituer à la production et tracer le résultat."],
    simple:
      "La fin du serrage n'est pas la fin de l'intervention. Avant la remise en énergie, l'équipe vérifie le montage, les protecteurs, les outils, les pièces, les fluides, les personnes et la zone. La déconsignation suit les rôles du site. L'essai est annoncé, progressif et surveillé, puis l'équipement est explicitement rendu à la production avec ses limites éventuelles.",
    vocab: [
      ["Contrôle avant remise en énergie", "Vérification technique et sécurité avant que l'équipement puisse de nouveau recevoir de l'énergie."],
      ["Déconsignation", "Suite organisée d'opérations permettant la remise à disposition de l'équipement selon la procédure et les responsabilités définies."],
      ["Essai fonctionnel", "Vérification du fonctionnement attendu dans des conditions préparées et surveillées."],
      ["Réception", "Constat partagé que les travaux sont terminés et que l'état de l'équipement est connu."],
      ["Restitution", "Transfert explicite de l'équipement vers l'exploitation ou la production."],
      ["Réserve", "Écart ou limite restant à traiter, formalisé avec ses conditions d'utilisation ou d'interdiction."],
    ],
    example:
      "Après remplacement d'une courroie, le technicien contrôle référence, alignement, tension, serrages et rotation manuelle autorisée. Il remet les protecteurs, inventorie outils et pièces, fait retirer les dispositifs selon les rôles, annonce l'essai, démarre à condition maîtrisée, surveille bruit et vibration, puis restitue avec le compte rendu.",
    schema: "handback-loop",
    retenir: ["Prévoir les critères d'acceptation avant de commencer le travail.", "Reconstituer toutes les protections et fonctions nécessaires avant l'essai normal.", "Compter personnes, outils, pièces, obturateurs temporaires et dispositifs de retenue.", "La déconsignation est coordonnée ; personne ne retire arbitrairement le dispositif d'un autre.", "La production doit recevoir explicitement l'état, le résultat et les réserves éventuelles."],
    erreurs: ["Réarmer pour voir si le montage est correct.", "Tester protecteur ouvert par commodité.", "Annoncer seulement « c'est bon » sans résultat ni réserve.", "Effacer une alarme sans rechercher et tracer sa cause."],
    quizIds: ["m1p26", "m1p27", "m1p28", "m1p29", "m1p30"],
    verification: {
      question: "Quel moment autorise la remise à la production ?",
      options: ["Dès que la pièce est montée", "Après contrôle, essai maîtrisé et restitution explicite", "Après retrait du premier cadenas", "Quand l'opérateur redémarre seul"],
      correct: 1,
      explanation: "La restitution vient après reconstitution, vérifications, déconsignation coordonnée, essai et communication du résultat.",
    },
    exercice: {
      enonce: "Construis la fiche de fin d'intervention après remplacement d'un motoréducteur.",
      consignes: ["Définis les contrôles mécaniques et de sécurité.", "Décris la coordination de déconsignation sans attribuer un rôle universel.", "Prépare un essai progressif et ses critères d'arrêt.", "Rédige la restitution et les informations à tracer."],
      criteres: ["Je contrôle protecteurs, zone, personnes et moyens.", "Je prévois des critères mesurables et des points d'arrêt.", "La production reçoit un état explicite et documenté."],
      correction: "La fiche vérifie référence, fixation, niveau d'huile si applicable, accouplement, alignement, sens prévu, câblages traités par personnel compétent, protecteurs, propreté et inventaire. Les dispositifs sont retirés selon la procédure et par les personnes prévues. L'essai est annoncé, zone évacuée, démarrage progressif si possible, avec surveillance du sens, bruit, vibration, intensité et température selon les moyens autorisés. Le compte rendu indique cause confirmée, actions, mesures, résultat, réserves et heure de restitution.",
    },
    activity: {
      type: "sequence",
      title: "Rends la machine sans créer un nouveau risque",
      instruction: "Remets les étapes de clôture dans l'ordre.",
      items: ["Contrôler le travail et reconstituer l'équipement", "Inventorier personnes, outils et pièces", "Faire retirer les dispositifs selon les rôles", "Informer et préparer l'essai", "Essayer progressivement et surveiller", "Restituer et tracer"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "La machine est contrôlée, essayée et explicitement restituée.",
    },
    ascii: `TRAVAUX TERMINÉS
       ↓
[Montage + protecteurs + propreté]
       ↓
[Personnes + outils + pièces comptés]
       ↓
[Déconsignation coordonnée]
       ↓
[Annonce → essai progressif → surveillance]
       ↓
[Réception production + compte rendu + réserves]
       └──────── retour d'expérience ────────┐
                                             └→ prochaine préparation`,
    astucesPro: ["Définis avant l'essai ce qui impose un arrêt immédiat.", "Fais constater les résultats clés avec l'exploitant lorsque la procédure le prévoit.", "Transforme chaque écart découvert en information utile pour la prochaine gamme."],
    diagnostic: ["Comparer travaux réalisés, prescription et état final.", "Vérifier toutes les interfaces touchées ou voisines.", "Définir paramètres normaux et seuils d'arrêt pour l'essai.", "Comparer le résultat d'essai à l'état attendu."],
    depannage: ["Si l'essai révèle un écart, arrêter selon la procédure et remettre en sécurité.", "Ne pas enchaîner les réarmements sans hypothèse ni contrôle.", "Réouvrir l'intervention et mettre à jour l'analyse si le périmètre change.", "Tracer le résultat même si la remise en service échoue."],
    securite: ["Ne jamais remettre en énergie sans vérifier la présence des personnes et l'état des protecteurs.", "Ne jamais retirer le cadenas ou dispositif personnel d'autrui hors procédure exceptionnelle formalisée.", "Les essais nécessitant une énergie ou un mode particulier doivent être spécifiquement préparés, autorisés et réalisés par des personnes compétentes."],
    etudeDeCas: {
      situation: "Après réparation, le convoyeur tourne mais un bruit nouveau apparaît à faible vitesse.",
      mission: ["Décider si la machine peut être restituée.", "Définir la conduite immédiate.", "Préciser la traçabilité attendue."],
      correction: "Le résultat n'est pas conforme à l'état attendu. L'essai est arrêté selon la procédure et l'équipement remis en sécurité. L'équipe recherche la cause dans le périmètre autorisé : frottement, alignement, fixation, protecteur ou pièce. La production est informée que la restitution est refusée ou assortie uniquement d'une décision formelle prise par l'autorité compétente ; le bruit et les contrôles sont tracés.",
    },
    memo: ["Contrôler", "Reconstituer", "Compter", "Déconsigner", "Informer", "Essayer", "Restituer", "Tracer"],
    resume: "Une intervention se termine par la reconstitution et le contrôle, l'inventaire de la zone, une déconsignation coordonnée, un essai préparé et surveillé, puis une restitution explicite et tracée à la production.",
  },
];
