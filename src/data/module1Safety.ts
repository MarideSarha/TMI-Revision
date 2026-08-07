import type { Lesson, TrainingBlock } from "../types";

/**
 * Première tranche du parcours sécurité.
 *
 * Les contenus donnent des repères pédagogiques. Ils ne remplacent jamais
 * l'évaluation des risques, les procédures du site, la formation pratique,
 * l'autorisation de l'employeur ou une habilitation réglementaire.
 */
export const MODULE1_SAFETY_LESSONS: Lesson[] = [
  {
    id: "1-4",
    title: "Danger, exposition, risque et dommage",
    durationMinutes: 35,
    objectifs: [
      "Distinguer clairement un danger, une situation dangereuse, une exposition, un événement dangereux et un dommage.",
      "Décrire un scénario d'accident concret avant de proposer une mesure de prévention.",
      "Utiliser gravité et probabilité comme repères simples pour hiérarchiser les risques sans remplacer l'évaluation de l'entreprise.",
    ],
    simple:
      "Un danger est ce qui peut blesser. Le risque apparaît lorsqu'une personne peut être exposée à ce danger. Le dommage est la conséquence possible. Dire seulement « c'est dangereux » ne suffit donc pas : un technicien doit expliquer qui peut être atteint, par quoi, à quel moment et avec quelles conséquences.",
    vocab: [
      ["Danger", "Source capable de provoquer une blessure ou une atteinte à la santé : pièce mobile, tension, pression, chaleur, produit chimique, bruit…"],
      ["Situation dangereuse", "Situation dans laquelle une personne est exposée à au moins un danger."],
      ["Événement dangereux", "Événement qui fait basculer la situation vers l'accident : redémarrage, rupture, fuite, chute d'une charge…"],
      ["Dommage", "Conséquence subie : coupure, écrasement, brûlure, électrisation, intoxication, perte auditive…"],
      ["Risque", "Combinaison de la probabilité d'un dommage et de sa gravité."],
      ["Presque-accident", "Événement sans blessure cette fois-ci, mais qui aurait pu provoquer un dommage."],
    ],
    example:
      "Sur un convoyeur, le rouleau tournant est le danger. Une main introduite pendant un débourrage crée l'exposition. Le redémarrage automatique est l'événement dangereux. L'entraînement de la main et l'écrasement sont les dommages possibles. La prévention commence en supprimant l'exposition : arrêt, maîtrise des énergies et moyen de débourrage adapté.",
    schema: "risk-chain",
    retenir: [
      "Danger et risque ne sont pas synonymes : le risque dépend aussi de l'exposition.",
      "Un scénario utile relie : danger → personne exposée → événement dangereux → dommage.",
      "Un presque-accident doit être signalé et analysé : l'absence de blessure ne prouve pas que la situation était sûre.",
      "La cotation simplifiée aide à prioriser ; elle ne remplace pas la méthode officielle d'évaluation des risques du site.",
    ],
    erreurs: [
      "Écrire seulement « risque mécanique » sans décrire le mouvement, l'exposition et le dommage possible.",
      "Baisser la gravité parce qu'aucun accident ne s'est encore produit.",
      "Confondre une mesure existante avec une preuve que le risque est totalement supprimé.",
      "Observer uniquement la machine et oublier l'environnement, la coactivité, l'accès ou l'organisation du travail.",
    ],
    quizIds: ["m1q1", "m1q2", "m1q3", "m1q4", "m1q5"],
    verification: {
      question: "Une chaîne tourne derrière un carter fixe en bon état. Quel élément constitue le danger ?",
      options: ["Le carter", "Le mouvement de la chaîne", "Le technicien", "La fiche d'intervention"],
      correct: 1,
      explanation: "Le mouvement de la chaîne possède l'énergie capable de provoquer un dommage. Le carter est une mesure de protection qui limite l'exposition.",
    },
    exercice: {
      enonce: "Pendant un nettoyage, un opérateur approche un chiffon d'un arbre encore en rotation. Décris le scénario de risque sans proposer immédiatement la réparation.",
      consignes: [
        "Nomme précisément le danger et la personne exposée.",
        "Décris la situation et l'événement dangereux possibles.",
        "Indique au moins deux dommages crédibles.",
        "Propose ensuite une première mesure qui supprime l'exposition.",
      ],
      criteres: [
        "J'ai distingué danger, exposition, événement et dommage.",
        "Mon scénario décrit un enroulement ou un entraînement possible.",
        "Ma première mesure agit avant de compter sur un EPI.",
      ],
      correction:
        "Danger : énergie mécanique de l'arbre en rotation. Exposition : main, chiffon et vêtements proches de l'arbre. Événement dangereux : le chiffon est happé et entraîne la main. Dommages possibles : écrasement, arrachement, fracture. Première mesure : arrêter et mettre l'équipement dans l'état sûr défini par la procédure avant le nettoyage ; utiliser ensuite une méthode et des outils empêchant l'approche de la zone dangereuse.",
    },
    activity: {
      type: "sequence",
      title: "Construis le scénario de risque",
      instruction: "Remets dans l'ordre le raisonnement avant de choisir une mesure de prévention.",
      items: ["Définir la tâche réelle", "Repérer le danger", "Identifier la personne et l'exposition", "Décrire l'événement dangereux", "Décrire le dommage possible", "Choisir et vérifier les mesures"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as relié la tâche au dommage possible. Cette chaîne évite les analyses vagues et aide à choisir une mesure réellement efficace.",
    },
    ascii: `TÂCHE : débourrer un convoyeur

[ÉNERGIE / DANGER]
 bande + rouleau + redémarrage
          │
          ▼
[EXPOSITION]
 main dans la zone d'entraînement
          │
          ▼
[ÉVÉNEMENT]
 remise en mouvement / happement
          │
          ▼
[DOMMAGE]
 écrasement, fracture, amputation`,
    astucesPro: [
      "Commence la phrase par « Pendant que la personne… » : cela oblige à décrire la tâche réelle.",
      "Photographie ou croquis uniquement si les règles du site l'autorisent et sans exposer de données confidentielles.",
      "Traite un presque-accident comme une information précieuse, pas comme une faute à cacher.",
    ],
    diagnostic: [
      "Observer le travail normal, mais aussi nettoyage, réglage, débourrage et maintenance.",
      "Repérer les énergies, mouvements, températures, pressions, produits et accès.",
      "Identifier qui est exposé : opérateur, mainteneur, prestataire ou personne à proximité.",
      "Décrire le scénario complet, puis examiner les protections existantes et leurs limites.",
      "Faire valider l'évaluation selon l'organisation sécurité de l'entreprise.",
    ],
    depannage: [
      "Si une situation dangereuse immédiate est observée, ne pas s'exposer pour la corriger.",
      "Alerter, arrêter ou faire arrêter selon les moyens autorisés et sécuriser la zone.",
      "Signaler le danger au responsable compétent et appliquer la procédure du site.",
      "Ne reprendre le travail qu'après mise en œuvre et vérification des mesures décidées.",
      "Tracer le danger, l'action et le résultat, y compris après un presque-accident.",
    ],
    securite: [
      "Ne jamais entrer dans une zone dangereuse pour « mieux voir » sans préparation et autorisation.",
      "Une absence d'accident antérieur ne réduit pas la gravité possible.",
      "L'évaluation officielle des risques relève de l'organisation de l'entreprise et doit être réalisée avec les acteurs compétents.",
    ],
    etudeDeCas: {
      situation: "Une cellule photoélectrique déclenche parfois l'arrêt d'un convoyeur. Des opérateurs retirent les colis coincés à la main, depuis l'extérieur du carter, pendant que le convoyeur peut repartir automatiquement.",
      mission: [
        "Construire deux scénarios de risque : entraînement par le convoyeur et heurt lors du redémarrage.",
        "Identifier les informations manquantes avant toute décision.",
        "Proposer une mesure immédiate et une amélioration durable à faire valider.",
      ],
      correction: "Les dangers sont les mouvements de la bande, des rouleaux et le redémarrage automatique. Il faut connaître la procédure de débourrage, les modes de marche, les dispositifs de protection et les énergies présentes. À court terme, arrêter l'opération improvisée et appliquer la procédure sûre. À long terme, traiter la cause du bourrage et concevoir un accès ou un outil de débourrage évitant l'exposition, avec validation compétente.",
    },
    memo: ["Tâche réelle", "Danger", "Personne exposée", "Événement", "Dommage", "Mesures", "Vérification"],
    resume: "Analyser un risque, c'est raconter précisément comment une personne pourrait être atteinte pendant une tâche. Le technicien distingue danger, exposition, événement et dommage, puis contribue à choisir des mesures validées qui réduisent réellement l'exposition.",
  },
  {
    id: "1-5",
    title: "Prévenir à la source : EPC, organisation et EPI",
    durationMinutes: 40,
    objectifs: [
      "Appliquer la hiérarchie des mesures : éviter, réduire à la source, protéger collectivement, organiser puis compléter par des EPI adaptés.",
      "Distinguer une protection collective d'un équipement de protection individuelle.",
      "Évaluer si une mesure reste efficace pendant les phases de maintenance et les situations dégradées.",
    ],
    simple:
      "La meilleure protection est celle qui supprime le danger ou empêche l'exposition sans dépendre d'un geste parfait. Un carter qui éloigne toutes les personnes d'une transmission est généralement plus fiable qu'une paire de gants. Les EPI restent importants, mais ils viennent en complément lorsque le risque n'a pas pu être suffisamment réduit autrement.",
    vocab: [
      ["Prévention intrinsèque", "Action qui supprime le danger ou le réduit dès la conception ou la modification de l'équipement."],
      ["EPC", "Protection collective qui protège toutes les personnes exposées : carter, garde-corps, captage, écran, encloisonnement…"],
      ["Mesure organisationnelle", "Règle de travail : procédure, autorisation, balisage, planification, coordination, formation…"],
      ["EPI", "Équipement porté individuellement ; il doit être choisi, ajusté, entretenu et utilisé pour le risque prévu."],
      ["Risque résiduel", "Risque qui demeure après la mise en place des mesures de prévention."],
      ["Coactivité", "Présence simultanée de plusieurs équipes ou entreprises dont les activités peuvent créer des risques entre elles."],
    ],
    example:
      "Une transmission par chaîne projette de la graisse et présente un risque d'entraînement. Supprimer l'accès à la chaîne par un carter interverrouillé agit collectivement. Planifier la maintenance et baliser la zone organise l'intervention. Lunettes et vêtements adaptés complètent la protection contre le risque résiduel, mais ne rendent jamais acceptable un accès à la chaîne en mouvement.",
    schema: "prevention-hierarchy",
    retenir: [
      "Supprimer ou réduire le danger à la source avant de choisir des EPI.",
      "La protection collective est prioritaire car elle ne dépend pas uniquement du comportement d'une personne.",
      "Une procédure n'annule pas un danger physique : elle complète les mesures techniques.",
      "Un EPI doit correspondre au danger, à la tâche, à l'utilisateur et aux instructions du fabricant.",
      "Toute mesure doit être vérifiée dans les phases réelles : production, nettoyage, réglage, dépannage et maintenance.",
    ],
    erreurs: [
      "Répondre « mettre des gants » à tous les risques, même près d'une pièce tournante où un gant peut être happé.",
      "Considérer le balisage comme suffisant alors qu'un accès dangereux reste possible.",
      "Neutraliser un protecteur pour gagner du temps et compter sur l'attention de l'opérateur.",
      "Choisir un EPI uniquement par habitude sans vérifier sa compatibilité avec le produit ou la tâche.",
    ],
    quizIds: ["m1q6", "m1q7", "m1q8", "m1q9", "m1q10"],
    verification: {
      question: "Quelle mesure protège le mieux plusieurs personnes d'une chaîne de transmission accessible ?",
      options: ["Des gants pour chaque personne", "Un panneau Attention", "Un carter fixe adapté empêchant l'accès", "Une consigne orale en début de poste"],
      correct: 2,
      explanation: "Le carter empêche collectivement l'accès à la zone dangereuse. Les consignes et EPI ne compensent pas une transmission accessible.",
    },
    exercice: {
      enonce: "Une meuleuse fixe projette régulièrement des particules vers une zone de passage. Classe les mesures proposées : déplacer le passage, installer un écran, limiter l'accès, former les utilisateurs, fournir une protection oculaire adaptée.",
      consignes: [
        "Identifie d'abord les mesures qui suppriment ou réduisent l'exposition à la source.",
        "Distingue protection collective, organisation et EPI.",
        "Propose un ensemble cohérent au lieu d'une mesure unique.",
      ],
      criteres: [
        "J'ai donné la priorité à l'éloignement ou à l'écran collectif.",
        "J'ai classé formation et limitation d'accès comme mesures organisationnelles.",
        "J'ai présenté la protection oculaire comme un complément adapté au risque résiduel.",
      ],
      correction:
        "Éloigner le passage évite l'exposition ; un écran adapté protège collectivement. Limiter l'accès et former organisent le travail. La protection oculaire complète ces mesures pour les personnes restant exposées. La solution finale doit être issue de l'évaluation du risque et validée par les responsables compétents.",
    },
    activity: {
      type: "sequence",
      title: "Choisis les mesures dans le bon ordre",
      instruction: "Classe les familles de mesures de la plus structurante à la plus complémentaire.",
      items: ["Éviter le risque", "Combattre le risque à la source", "Mettre en place une protection collective", "Organiser et informer", "Compléter par un EPI adapté", "Vérifier l'efficacité et le risque résiduel"],
      correctOrder: [0, 1, 2, 3, 4, 5],
      success: "Tu as privilégié les mesures qui ne reposent pas uniquement sur le comportement individuel, puis vérifié ce qui reste à maîtriser.",
    },
    ascii: `HIÉRARCHIE DE PRÉVENTION

1. ÉVITER / SUPPRIMER LE DANGER       efficacité forte
2. RÉDUIRE LE DANGER À LA SOURCE             ▲
3. PROTÉGER COLLECTIVEMENT (EPC)              │
4. ORGANISER / FORMER / SIGNALER              │
5. COMPLÉTER PAR DES EPI ADAPTÉS              ▼
6. VÉRIFIER LE RISQUE RÉSIDUEL          dépendance humaine + forte`,
    astucesPro: [
      "Demande toujours : « Peut-on faire la tâche sans entrer dans la zone dangereuse ? »",
      "Teste la protection dans la vraie vie : accès outils en main, visibilité réduite, nettoyage et maintenance compris.",
      "Un protecteur fréquemment neutralisé révèle souvent un problème d'usage ou de conception à corriger, jamais une permission de le contourner.",
    ],
    diagnostic: [
      "Vérifier si le danger peut être supprimé ou la tâche réalisée autrement.",
      "Contrôler l'intégrité, la fixation et la fonction des protections collectives.",
      "Examiner les accès pendant toutes les phases de vie de la machine.",
      "Identifier les mesures organisationnelles et leur application réelle.",
      "Vérifier le choix, l'état, l'ajustement et les limites des EPI requis.",
    ],
    depannage: [
      "Arrêter une tâche si la protection prévue est absente, dégradée ou neutralisée.",
      "Mettre la zone en sécurité sans improviser une protection de fortune.",
      "Signaler l'écart et faire décider une mesure provisoire par les personnes compétentes.",
      "Réparer ou remplacer la protection selon la documentation et les règles de modification.",
      "Vérifier son fonctionnement avant remise à disposition et tracer l'action.",
    ],
    securite: [
      "Ne jamais shunter un interverrouillage ou retirer un carter pour accélérer la production.",
      "Des gants peuvent augmenter le risque de happement près de pièces tournantes : le choix des EPI dépend de l'analyse de la tâche.",
      "Une modification de protecteur doit être étudiée et validée ; elle peut affecter la conformité et créer de nouveaux risques.",
    ],
    etudeDeCas: {
      situation: "Le capteur d'un carter arrête la machine dès son ouverture. Pour observer une vibration, un collègue propose de maintenir le capteur actif avec un aimant.",
      mission: [
        "Expliquer pourquoi cette méthode est inacceptable.",
        "Identifier la fonction de protection supprimée.",
        "Proposer une démarche d'observation sûre à faire valider.",
      ],
      correction: "L'aimant neutralise une protection collective et permet un mouvement dangereux carter ouvert. Il faut refuser le contournement, arrêter et signaler le besoin d'observation. Si un diagnostic en énergie est indispensable, seule une méthode prévue par le constructeur et l'entreprise, avec mode de réglage sécurisé, moyens techniques adaptés, personnel spécialement formé et instruction spécifique, peut être envisagée.",
    },
    memo: ["Éviter", "Réduire à la source", "Protéger collectivement", "Organiser", "Compléter par EPI", "Vérifier"],
    resume: "La prévention efficace agit d'abord sur le danger et l'exposition. Les protections collectives sont prioritaires ; procédures, formation et EPI complètent l'ensemble. Une protection neutralisée ou inadaptée impose l'arrêt et le traitement de l'écart.",
  },
  {
    id: "1-6",
    title: "Maîtriser les énergies dangereuses d'une machine",
    durationMinutes: 50,
    objectifs: [
      "Recenser les énergies électriques, pneumatiques, hydrauliques, mécaniques, gravitaires, thermiques et chimiques d'un équipement.",
      "Expliquer la différence entre arrêter, isoler, condamner, dissiper, vérifier et déconsigner.",
      "Préparer une intervention multi-énergies en respectant les rôles, procédures et autorisations du site.",
    ],
    simple:
      "Appuyer sur Arrêt ne retire pas l'énergie d'une machine. Un vérin peut rester sous pression, une charge peut tomber, un ressort peut se détendre et un moteur peut redémarrer automatiquement. Avant une intervention, toutes les énergies dangereuses liées à la tâche doivent être identifiées, isolées, empêchées de revenir, dissipées ou retenues, puis l'état sûr doit être vérifié.",
    vocab: [
      ["Séparation", "Action d'isoler l'équipement de chaque source d'énergie au moyen d'un dispositif approprié."],
      ["Condamnation", "Action d'empêcher la manœuvre du dispositif de séparation, généralement avec un dispositif personnel identifié selon la procédure."],
      ["Dissipation", "Élimination d'une énergie accumulée : purger une pression, décharger un condensateur, arrêter une inertie…"],
      ["Rétention", "Maintien mécanique sûr d'une énergie qui ne peut pas être supprimée, par exemple une charge soutenue par un dispositif adapté."],
      ["Vérification", "Contrôle avec la méthode prévue que l'énergie dangereuse est absente ou maîtrisée."],
      ["Déconsignation", "Ensemble ordonné des opérations permettant une remise en service sûre après contrôle de la zone et des personnes."],
    ],
    example:
      "Pour intervenir sur un élévateur, couper seulement le moteur ne suffit pas. Il faut considérer l'alimentation électrique, la charge en hauteur, l'énergie potentielle, les ressorts, le frein et un possible redémarrage automatique. La procédure peut imposer séparation et condamnation électriques, descente ou retenue mécanique de la charge, vérifications puis remise en service coordonnée.",
    schema: "energy-isolation",
    illustrations: ["consignation-interactive"],
    retenir: [
      "Arrêt ≠ séparation ≠ consignation : ce sont des états différents.",
      "Toutes les énergies liées à la tâche doivent être recherchées, y compris celles stockées ou générées par gravité.",
      "La condamnation empêche une remise en énergie intempestive ; la dissipation traite l'énergie encore présente après séparation.",
      "La vérification est une étape active : on ne se contente pas d'un voyant éteint ou d'une supposition.",
      "La déconsignation et la remise en service sont préparées, coordonnées et annoncées.",
    ],
    erreurs: [
      "Confondre arrêt d'urgence et isolement de toutes les sources.",
      "Purger l'air sans retenir un axe vertical qui peut descendre par gravité.",
      "Oublier une alimentation secourue, un second réseau ou une énergie produite localement.",
      "Retirer un dispositif de condamnation appartenant à une autre personne en dehors de la procédure prévue.",
      "Remettre en service sans compter les personnes, outils, pièces et protecteurs.",
    ],
    quizIds: ["m1q11", "m1q12", "m1q13", "m1q14", "m1q15"],
    verification: {
      question: "Après avoir isolé l'air comprimé d'un vérin vertical, quelle question est prioritaire ?",
      options: ["La couleur du flexible", "La charge peut-elle descendre par gravité ?", "Le prix du distributeur", "Le nombre d'heures du moteur"],
      correct: 1,
      explanation: "La pression peut disparaître alors que l'énergie potentielle gravitaire demeure. La charge doit être placée en position sûre ou retenue par un moyen prévu et vérifié.",
    },
    exercice: {
      enonce: "Prépare l'analyse d'énergie d'un convoyeur incliné équipé d'un motoréducteur, d'un frein, d'un tendeur à ressort et d'un vérin pneumatique de déviation.",
      consignes: [
        "Liste chaque source et chaque énergie accumulée.",
        "Décris, sans improviser de manœuvre, le principe d'isolement, de dissipation ou de rétention associé.",
        "Indique comment l'état sûr devra être vérifié selon la procédure.",
        "Prépare les points de contrôle avant remise en service.",
      ],
      criteres: [
        "J'ai identifié électricité, pression, gravité, ressort, inertie et énergie mécanique du frein.",
        "J'ai distingué séparation, condamnation, dissipation et rétention.",
        "J'ai prévu une vérification et une remise en service coordonnée.",
      ],
      correction:
        "L'analyse couvre l'alimentation électrique et les commandes, la pression du vérin et de ses volumes, la masse de la bande et des charges sur la pente, le ressort du tendeur, l'inertie des pièces et l'état du frein. La procédure validée définit les organes de séparation, condamnations, purges, calages ou retenues et contrôles. Avant remise en service : zone dégagée, protections remises, personnes informées, dispositifs retirés par les personnes prévues et essai maîtrisé.",
    },
    activity: {
      type: "sequence",
      title: "Prépare une consignation multi-énergies",
      instruction: "Remets dans l'ordre les principes généraux. Sur le terrain, applique toujours la procédure spécifique et les rôles définis par l'entreprise.",
      items: ["Définir la tâche et recenser les énergies", "Informer et arrêter selon la procédure", "Séparer les sources", "Condamner et identifier", "Dissiper ou retenir les énergies accumulées", "Vérifier l'état sûr", "Intervenir puis préparer la déconsignation", "Contrôler la zone et remettre en service de façon coordonnée"],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      success: "Tu as traité les sources, les accumulations et la remise en service. Une consignation est un système complet, pas seulement un cadenas.",
    },
    ascii: `CARTE DES ÉNERGIES D'UNE MACHINE

Électrique ─────────► tension / condensateurs / secours
Pneumatique ────────► pression dans flexibles et vérins
Hydraulique ────────► pression + accumulateurs
Mécanique ──────────► rotation / inertie / ressort tendu
Gravitaire ─────────► charge ou axe en hauteur
Thermique ──────────► surface, vapeur ou fluide chaud/froid
Chimique ───────────► fluide corrosif, toxique, inflammable

SOURCE ─► SÉPARER + CONDAMNER
STOCKAGE ─► DISSIPER ou RETENIR
ÉTAT SÛR ─► VÉRIFIER`,
    astucesPro: [
      "Suis physiquement les réseaux et compare-les au plan : les modifications anciennes ne sont pas toujours évidentes.",
      "Cherche ce qui peut bouger après la coupure : descendre, tourner, se détendre, chauffer ou se pressuriser de nouveau.",
      "Avant remise en service, fais un contrôle croisé : personnes, outils, pièces, protecteurs, commandes et zone d'essai.",
    ],
    diagnostic: [
      "Définir le périmètre exact de l'intervention et les mouvements possibles.",
      "Identifier sources principales, auxiliaires, secours, retours et énergies accumulées.",
      "Comparer plaque, schémas, repérages et réalité du terrain.",
      "Déterminer pour chaque énergie : séparation, condamnation, dissipation, rétention et vérification.",
      "Faire valider le plan de consignation et les rôles selon l'organisation du site.",
    ],
    depannage: [
      "Ne pas commencer si une énergie ou un rôle reste incertain.",
      "Arrêter, baliser et informer les personnes concernées.",
      "Appliquer la procédure spécifique de l'équipement avec les dispositifs prévus.",
      "Vérifier l'état sûr sans pénétrer prématurément dans la zone dangereuse.",
      "Après travaux, reconstituer l'équipement, contrôler la zone et organiser la remise en service.",
      "Tracer tout écart constaté : organe absent, repérage faux, fuite, procédure incomplète ou modification non documentée.",
    ],
    securite: [
      "La formation dans l'application ne donne pas le droit de consigner une installation réelle.",
      "Les opérations électriques, fluidiques, mécaniques et de levage exigent les compétences et autorisations prévues par l'employeur.",
      "Si une intervention doit exceptionnellement conserver une énergie, elle nécessite une analyse spécifique, des moyens techniques adaptés et une instruction de l'employeur pour du personnel spécialement formé.",
      "Ne jamais retirer le dispositif personnel d'une autre personne hors procédure exceptionnelle formalisée.",
    ],
    etudeDeCas: {
      situation: "Une porte de quai motorisée reste bloquée à mi-hauteur. Le moteur est coupé, mais la porte est lourde, les ressorts sont tendus et un collègue propose de desserrer immédiatement le frein.",
      mission: [
        "Identifier les énergies dangereuses encore présentes.",
        "Expliquer le scénario possible lors du desserrage du frein.",
        "Définir les principes de préparation avant une intervention autorisée.",
      ],
      correction: "La porte possède une énergie potentielle gravitaire et des ressorts accumulent une énergie mécanique ; le frein retient probablement la charge. Le desserrer peut provoquer une chute brutale. Il faut interdire la zone, consulter la documentation, faire définir une méthode de retenue mécanique adaptée, isoler et condamner les sources, maîtriser les ressorts et vérifier l'état sûr. Seul du personnel compétent et autorisé intervient avec le matériel prévu.",
    },
    memo: ["Définir la tâche", "Recenser", "Séparer", "Condamner", "Dissiper/Retenir", "Vérifier", "Intervenir", "Déconsigner", "Essayer et tracer"],
    resume: "Une machine peut conserver ou recréer plusieurs énergies après son arrêt. La maîtrise multi-énergies associe analyse de la tâche, séparation, condamnation, dissipation ou rétention, vérification et remise en service coordonnée. Elle s'effectue uniquement selon la procédure et les responsabilités du site.",
  },
];

export const MODULE1_SAFETY_BLOCKS: TrainingBlock[] = [
  {
    id: "m1-b1",
    num: 1,
    title: "Entrer dans l'industrie et intervenir en sécurité",
    objective: "Comprendre le rôle du mainteneur, reconnaître un risque et préparer la maîtrise des énergies avant toute intervention.",
    lessonIds: ["1-1", "1-2", "1-3", ...MODULE1_SAFETY_LESSONS.map((lesson) => lesson.id)],
    chapterCount: 6,
    status: "available",
    exam: {
      questionIds: ["q2", "q4", "q7", "q9", "q11", "q14", "m1q1", "m1q4", "m1q6", "m1q9", "m1q11", "m1q14"],
      passPercent: 80,
    },
  },
  {
    id: "m1-b2",
    num: 2,
    title: "Préparer, autoriser et coordonner une intervention",
    objective: "Préparer la tâche, définir les rôles, gérer la coactivité, baliser la zone et conduire une remise en service maîtrisée.",
    lessonIds: [],
    chapterCount: 6,
    status: "planned",
  },
  {
    id: "m1-b3",
    num: 3,
    title: "Risques spécifiques de l'atelier industriel",
    objective: "Reconnaître les risques mécaniques, électriques, chimiques, thermiques, de manutention, de hauteur, de bruit et d'atmosphère dangereuse.",
    lessonIds: [],
    chapterCount: 7,
    status: "planned",
  },
  {
    id: "m1-b4",
    num: 4,
    title: "Incidents, urgences et culture de prévention",
    objective: "Savoir alerter, protéger sans se mettre en danger, signaler les presque-accidents et contribuer au retour d'expérience.",
    lessonIds: [],
    chapterCount: 5,
    status: "planned",
  },
];
