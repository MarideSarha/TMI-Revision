import { Cpu } from "lucide-react";
import type { Lesson, TrainingBlock, TrainingModule } from "../types";

/* ============================================================
   MODULE 5 — AUTOMATISME INDUSTRIEL
   Parcours progressif débutant → opérationnel, organisé par blocs
   de maîtrise (même modèle que les modules 3 et 4).

   Passerelle depuis le module 3 (chapitre 3-43) : on prolonge la
   chaîne d'information (capteurs, automate) au-dessus de la chaîne
   d'énergie déjà étudiée en électrotechnique.
   ============================================================ */

const block1Lessons: Lesson[] = [
  {
    id: "5-1",
    title: "Qu'est-ce qu'un système automatisé ?",
    durationMinutes: 28,
    objectifs: [
      "Définir un système automatisé et citer des exemples industriels.",
      "Comprendre pourquoi on automatise et comment fonctionne la boucle capteur-commande-actionneur.",
    ],
    simple:
      "Un système automatisé réalise des tâches de façon répétitive sans intervention humaine permanente. Des capteurs l'informent, une partie commande décide, et des actionneurs agissent. L'effet obtenu est de nouveau détecté : le système fonctionne en boucle.",
    vocab: [
      ["Système automatisé", "Ensemble qui exécute des tâches de manière autonome, selon un programme."],
      ["Automatisation", "Remplacement d'actions manuelles par des dispositifs qui les réalisent automatiquement."],
      ["Capteur", "Élément qui détecte une grandeur (présence, position, niveau) et informe la commande."],
      ["Actionneur", "Élément qui agit (moteur, vérin) sous l'ordre de la commande."],
      ["Cycle", "Suite d'étapes que le système répète automatiquement."],
    ],
    example:
      "Sur une ligne d'embouteillage, un capteur détecte la présence d'une bouteille, l'automate décide de déclencher le remplissage, puis un vérin ou une vanne agit. La bouteille remplie avance, une nouvelle arrive, et le cycle recommence, sans opérateur à chaque étape.",
    schema: "energy-info-chains",
    illustrations: ["automated-system"],
    ascii: "CAPTEUR (informe) → PARTIE COMMANDE (decide) → ACTIONNEUR (agit)\n        ↑___________________ effet detecte _______________↓",
    retenir: [
      "Un système automatisé exécute des tâches de façon autonome, selon un programme.",
      "Il fonctionne en boucle : les capteurs informent, la commande décide, les actionneurs agissent.",
      "L'effet produit est de nouveau détecté par les capteurs.",
      "On automatise pour gagner en régularité, en cadence, en sécurité et en qualité.",
    ],
    erreurs: [
      "Croire qu'un système automatisé n'a plus besoin de maintenance : il en a d'autant plus besoin.",
      "Confondre capteur (qui informe) et actionneur (qui agit).",
      "Penser que l'automatisme remplace l'électrotechnique : il s'ajoute à elle.",
    ],
    astucesPro: [
      "Devant une machine, on identifie d'abord ce qui informe (capteurs) et ce qui agit (actionneurs).",
      "Situer une panne dans la boucle (information ou énergie) oriente le diagnostic.",
    ],
    diagnostic: [
      "Repérer les capteurs et les actionneurs du système.",
      "Situer un dysfonctionnement dans la chaîne d'information ou la chaîne d'énergie.",
      "Vérifier le déroulement du cycle par rapport au fonctionnement attendu.",
    ],
    depannage: [
      "Observer le cycle pour repérer à quelle étape il s'interrompt.",
      "Distinguer un défaut de détection (capteur) d'un défaut d'action (actionneur).",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Un système automatisé peut démarrer ou redémarrer seul : on consigne avant d'intervenir.",
      "On agit dans les limites de son habilitation, y compris sur les systèmes automatisés.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur une ligne automatisée, les bouteilles avancent mais ne sont jamais remplies.",
      mission: ["Situer le problème dans la boucle.", "Citer deux éléments à contrôler.", "Indiquer la précaution."],
      correction:
        "Les bouteilles avancent (une partie du système fonctionne) mais le remplissage n'a pas lieu : le problème se situe soit dans la détection (le capteur de présence de bouteille n'informe pas la commande), soit dans l'action (l'actionneur de remplissage n'agit pas). On contrôle donc le capteur de présence et l'actionneur/préactionneur de remplissage. Avant tout accès, on consigne car le système peut redémarrer seul.",
    },
    memo: ["Capteur informe", "Commande décide", "Actionneur agit", "Fonctionne en boucle"],
    resume:
      "Un système automatisé exécute un cycle de façon autonome : capteurs, partie commande et actionneurs forment une boucle où l'information pilote l'action.",
    quizIds: ["aut1", "aut2", "aut3", "aut4", "aut5"],
    verification: {
      question: "Dans un système automatisé, quel élément détecte une information et la transmet à la commande ?",
      options: ["L'actionneur", "Le capteur", "Le vérin", "Le moteur"],
      correct: 1,
      explanation: "Le capteur détecte une grandeur (présence, position…) et informe la partie commande. L'actionneur, lui, agit.",
    },
    exercice: {
      enonce:
        "Décrivez la boucle d'un système automatisé simple de votre choix, en nommant un capteur, la partie commande et un actionneur.",
      consignes: [
        "Choisis un exemple simple (portail, ligne, machine).",
        "Nomme un capteur, la commande et un actionneur.",
        "Explique comment la boucle se referme.",
      ],
      criteres: [
        "J'ai identifié un capteur (information).",
        "J'ai identifié la partie commande et un actionneur.",
        "J'ai expliqué que l'effet est de nouveau détecté.",
      ],
      correction:
        "Exemple d'un portail automatique : un capteur (bouton ou détecteur) informe la partie commande qu'il faut ouvrir ; la commande décide et envoie l'ordre ; l'actionneur (moteur) ouvre le portail. Un capteur de fin de course détecte l'ouverture complète et informe la commande, qui arrête le moteur : la boucle se referme. Information et action s'enchaînent en boucle.",
    },
  },
  {
    id: "5-2",
    title: "Partie opérative et partie commande",
    durationMinutes: 28,
    objectifs: [
      "Distinguer la partie opérative de la partie commande.",
      "Comprendre le dialogue d'ordres et de comptes rendus entre les deux.",
    ],
    simple:
      "Un système automatisé se décompose en deux grandes parties : la partie opérative, qui agit physiquement (moteurs, vérins, capteurs), et la partie commande, qui décide et pilote (souvent un automate). Elles dialoguent : la commande envoie des ordres, l'opérative renvoie des comptes rendus.",
    vocab: [
      ["Partie opérative (PO)", "Partie qui agit sur la matière : actionneurs, capteurs, effecteurs."],
      ["Partie commande (PC)", "Partie qui décide et pilote : automate, logique de commande."],
      ["Ordre", "Consigne envoyée par la PC vers la PO (ex : sortir un vérin)."],
      ["Compte rendu", "Information renvoyée par la PO vers la PC (ex : vérin sorti)."],
      ["Pupitre", "Interface qui permet à l'opérateur de dialoguer avec la partie commande."],
    ],
    example:
      "Sur une presse automatisée : la partie commande envoie l'ordre « descendre la presse » ; la partie opérative (le vérin) exécute et un capteur renvoie le compte rendu « presse en position basse ». La commande décide alors de l'étape suivante.",
    schema: "po-pc-structure",
    ascii: "PARTIE COMMANDE (decide)\n   | ordres        ↑ comptes rendus\n   v                |\nPARTIE OPERATIVE (agit : verins, moteurs, capteurs)",
    retenir: [
      "La partie opérative (PO) agit ; la partie commande (PC) décide et pilote.",
      "La PC envoie des ordres à la PO.",
      "La PO renvoie des comptes rendus à la PC (via les capteurs).",
      "Le pupitre permet à l'opérateur de dialoguer avec la partie commande.",
    ],
    erreurs: [
      "Confondre partie opérative (agit) et partie commande (décide).",
      "Oublier les comptes rendus : sans eux, la commande « travaille à l'aveugle ».",
      "Croire que le pupitre fait partie de la partie opérative.",
    ],
    astucesPro: [
      "On sépare toujours mentalement PO et PC pour diagnostiquer une machine.",
      "Un ordre envoyé sans compte rendu attendu peut bloquer le cycle.",
    ],
    diagnostic: [
      "Déterminer si le défaut vient de la PO (action) ou de la PC (décision).",
      "Vérifier la présence des ordres et des comptes rendus.",
      "Contrôler le dialogue au niveau des entrées/sorties de la commande.",
    ],
    depannage: [
      "Contrôler l'actionneur et son capteur de compte rendu côté PO.",
      "Vérifier l'ordre émis côté PC (entrée/sortie).",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "La partie opérative comporte des énergies (électrique, pneumatique) à consigner avant intervention.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Une commande envoie l'ordre de sortir un vérin, mais le cycle reste bloqué à cette étape.",
      mission: ["Nommer l'information probablement manquante.", "Indiquer où contrôler.", "Préciser la précaution."],
      correction:
        "Le cycle attend probablement un compte rendu qui n'arrive pas : le capteur de fin de course « vérin sorti » n'informe pas la partie commande, soit parce que le vérin n'est pas réellement sorti (défaut d'action, PO), soit parce que le capteur est défaillant (défaut d'information). On contrôle donc le vérin et son capteur de fin de course. Avant tout accès à la partie opérative (énergie pneumatique et électrique), on consigne les énergies concernées.",
    },
    memo: ["PO = agit", "PC = décide", "Ordres PC→PO", "Comptes rendus PO→PC"],
    resume:
      "Un système automatisé sépare la partie opérative (qui agit) et la partie commande (qui décide) ; elles dialoguent par ordres et comptes rendus.",
    quizIds: ["aut6", "aut7", "aut8", "aut9", "aut10"],
    verification: {
      question: "Quelle partie envoie les ordres dans un système automatisé ?",
      options: ["La partie opérative", "La partie commande", "Le vérin", "Le capteur seul"],
      correct: 1,
      explanation: "La partie commande décide et envoie les ordres ; la partie opérative agit et renvoie des comptes rendus.",
    },
    exercice: {
      enonce:
        "Expliquez le dialogue entre partie commande et partie opérative sur l'exemple d'un vérin, en citant un ordre et un compte rendu.",
      consignes: [
        "Décris l'ordre envoyé par la PC.",
        "Décris le compte rendu renvoyé par la PO.",
        "Explique à quoi sert ce compte rendu.",
      ],
      criteres: [
        "J'ai cité un ordre (ex : sortir le vérin).",
        "J'ai cité un compte rendu (ex : vérin sorti).",
        "J'ai expliqué que le compte rendu permet à la PC de continuer le cycle.",
      ],
      correction:
        "La partie commande envoie l'ordre « sortir le vérin ». La partie opérative exécute, et un capteur de fin de course renvoie le compte rendu « vérin sorti ». Ce compte rendu confirme à la partie commande que l'action est réalisée : elle peut alors décider de l'étape suivante. Sans ce retour, la commande ne saurait pas si l'ordre a été exécuté et le cycle pourrait se bloquer.",
    },
  },
  {
    id: "5-3",
    title: "Chaîne d'énergie et chaîne d'information",
    durationMinutes: 30,
    objectifs: [
      "Décomposer un système automatisé en chaîne d'énergie et chaîne d'information.",
      "Associer chaque fonction (acquérir, traiter, agir…) à son maillon.",
    ],
    simple:
      "Un système automatisé combine deux chaînes. La chaîne d'énergie alimente et fait agir (alimenter, distribuer, convertir, transmettre, agir). La chaîne d'information acquiert et traite (acquérir, traiter, communiquer). L'information commande l'énergie.",
    vocab: [
      ["Chaîne d'énergie", "Suite de fonctions qui amènent l'énergie jusqu'à l'action : alimenter, distribuer, convertir, transmettre, agir."],
      ["Chaîne d'information", "Suite de fonctions qui gèrent l'information : acquérir, traiter, communiquer."],
      ["Acquérir", "Recueillir une information par un capteur."],
      ["Traiter", "Décider à partir des informations (automate, logique)."],
      ["Distribuer", "Autoriser, couper ou orienter l'énergie (préactionneur)."],
    ],
    example:
      "Sur un convoyeur automatisé : la chaîne d'information acquiert (capteur de présence), traite (automate) et communique l'ordre ; la chaîne d'énergie alimente (réseau), distribue (contacteur/distributeur), convertit (moteur) et agit (bande qui avance).",
    schema: "energy-info-chains",
    ascii: "INFORMATION : acquerir → traiter → communiquer\n                                | commande\nENERGIE     : alimenter → distribuer → convertir → transmettre → agir",
    retenir: [
      "La chaîne d'énergie : alimenter, distribuer, convertir, transmettre, agir.",
      "La chaîne d'information : acquérir, traiter, communiquer.",
      "L'information (capteurs, automate) commande l'énergie (préactionneurs, actionneurs).",
      "Ce découpage sert de carte pour comprendre et diagnostiquer un système.",
    ],
    erreurs: [
      "Mélanger les deux chaînes : un capteur relève de l'information, un moteur de l'énergie.",
      "Oublier la fonction « distribuer » (préactionneur) entre la décision et l'action.",
      "Croire que la chaîne d'information agit directement sur la matière.",
    ],
    astucesPro: [
      "On repère la fonction où une grandeur existe encore et la première où elle disparaît.",
      "Le découpage en fonctions permet d'isoler rapidement la zone en défaut.",
    ],
    diagnostic: [
      "Situer le symptôme dans la chaîne d'énergie ou d'information.",
      "Vérifier chaque fonction dans l'ordre logique.",
      "Repérer le maillon où l'action attendue ne se produit plus.",
    ],
    depannage: [
      "Contrôler l'acquisition (capteurs) si la commande « ne voit » rien.",
      "Contrôler la distribution et la conversion si l'énergie n'arrive pas à l'actionneur.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "La chaîne d'énergie comporte des énergies dangereuses à consigner avant intervention.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un convoyeur automatisé ne démarre pas : l'automate donne pourtant l'ordre de marche.",
      mission: ["Situer la recherche dans les deux chaînes.", "Citer les fonctions à contrôler.", "Indiquer la précaution."],
      correction:
        "Si l'automate donne l'ordre (chaîne d'information correcte jusqu'à « communiquer »), on recherche le défaut dans la chaîne d'énergie : distribuer (le préactionneur/contacteur reçoit-il et transmet-il l'ordre ?), convertir (le moteur est-il alimenté ?), agir (la bande est-elle libre ?). On contrôle ces fonctions dans l'ordre. Avant tout accès aux parties actives, on consigne les énergies, car le système peut redémarrer seul.",
    },
    memo: ["Énergie : alimenter→distribuer→convertir→transmettre→agir", "Information : acquérir→traiter→communiquer", "L'info commande l'énergie"],
    resume:
      "Un système automatisé associe une chaîne d'énergie (jusqu'à l'action) et une chaîne d'information (acquisition et traitement) ; l'information commande l'énergie.",
    quizIds: ["aut11", "aut12", "aut13", "aut14", "aut15"],
    verification: {
      question: "À quelle chaîne appartient un capteur ?",
      options: ["La chaîne d'énergie", "La chaîne d'information", "Aucune", "Les deux à parts égales"],
      correct: 1,
      explanation: "Le capteur acquiert une information : il appartient à la chaîne d'information. Le moteur, qui agit, relève de la chaîne d'énergie.",
    },
    exercice: {
      enonce:
        "Classez les éléments suivants dans la chaîne d'énergie ou la chaîne d'information : capteur de présence, automate, contacteur, moteur.",
      consignes: [
        "Associe chaque élément à sa chaîne.",
        "Justifie brièvement.",
        "Rappelle qui commande qui.",
      ],
      criteres: [
        "Capteur et automate → information ; contacteur et moteur → énergie.",
        "J'ai justifié chaque classement.",
        "J'ai rappelé que l'information commande l'énergie.",
      ],
      correction:
        "Capteur de présence et automate appartiennent à la chaîne d'information (acquérir, traiter). Le contacteur (distribuer) et le moteur (convertir/agir) appartiennent à la chaîne d'énergie. L'information commande l'énergie : l'automate, à partir de l'information du capteur, pilote le contacteur qui alimente le moteur.",
    },
  },
  {
    id: "5-4",
    title: "Le cycle d'un système automatisé",
    durationMinutes: 28,
    objectifs: [
      "Décrire le cycle répétitif d'un système automatisé.",
      "Distinguer le cycle de la machine et le cycle de l'automate.",
    ],
    simple:
      "Un système automatisé répète une suite d'étapes : c'est son cycle. La machine enchaîne des opérations (avancer, serrer, percer, reculer…), pendant que l'automate, lui, répète en boucle : lire les entrées, traiter le programme, mettre à jour les sorties.",
    vocab: [
      ["Cycle", "Suite d'étapes que le système répète automatiquement."],
      ["État initial", "Position de départ, sûre et connue, avant le lancement du cycle."],
      ["Départ cycle", "Ordre qui lance le déroulement des étapes."],
      ["Cycle automate", "Boucle interne de l'automate : lire les entrées, traiter, mettre à jour les sorties."],
      ["Mode de marche", "Façon d'utiliser le système : automatique, manuel, pas à pas…"],
    ],
    example:
      "Une perceuse automatisée : à l'état initial, foret en haut. Au départ cycle, la pièce est bridée, le foret descend, perce, remonte, la pièce est libérée, et le système revient à l'état initial, prêt pour la pièce suivante. Pendant ce temps, l'automate lit ses entrées, exécute son programme et actualise ses sorties, en boucle.",
    schema: "energy-info-chains",
    ascii: "CYCLE MACHINE : etat initial → operations → retour etat initial\nCYCLE AUTOMATE : lire entrees → traiter → mettre a jour sorties (en boucle)",
    retenir: [
      "Le cycle est la suite d'étapes répétée par le système.",
      "On part d'un état initial sûr et connu.",
      "Le cycle automate répète : lire les entrées, traiter, mettre à jour les sorties.",
      "Les modes de marche (auto, manuel, pas à pas) adaptent l'utilisation.",
    ],
    erreurs: [
      "Lancer un cycle sans que le système soit à l'état initial.",
      "Confondre le cycle de la machine et le cycle interne de l'automate.",
      "Oublier qu'un cycle peut se relancer automatiquement.",
    ],
    astucesPro: [
      "On vérifie toujours l'état initial avant de relancer un cycle.",
      "Observer où le cycle se bloque indique l'étape et l'organe concernés.",
    ],
    diagnostic: [
      "Vérifier que le système est bien à l'état initial.",
      "Repérer l'étape du cycle où le déroulement s'interrompt.",
      "Relier cette étape à l'organe concerné (capteur ou actionneur).",
    ],
    depannage: [
      "Identifier l'étape bloquante et l'organe associé.",
      "Contrôler le capteur de compte rendu ou l'actionneur de cette étape.",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "Un cycle peut se relancer automatiquement : on consigne avant d'intervenir.",
      "On ne remet pas un système en cycle sans l'avoir remis à l'état initial en sécurité.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Une machine automatisée se bloque toujours à la même étape du cycle : le foret descend mais ne remonte jamais.",
      mission: ["Situer l'étape bloquante.", "Citer les organes à contrôler.", "Indiquer la précaution."],
      correction:
        "L'étape bloquante est la remontée du foret : soit l'ordre de remontée n'est pas donné (compte rendu de fin de descente manquant, capteur bas défaillant), soit l'actionneur de remontée n'agit pas. On contrôle donc le capteur de position basse et l'actionneur (vérin/moteur) de remontée. Avant tout accès, on consigne les énergies, car le cycle peut se relancer.",
    },
    memo: ["Cycle = étapes répétées", "État initial sûr", "Automate : lire → traiter → sorties", "Repérer l'étape bloquante"],
    resume:
      "Un système automatisé répète un cycle depuis un état initial ; l'automate, en parallèle, boucle sur lire-traiter-écrire pour piloter ces étapes.",
    quizIds: ["aut16", "aut17", "aut18", "aut19", "aut20"],
    verification: {
      question: "Quelle est la boucle interne répétée par l'automate ?",
      options: ["Serrer, percer, desserrer", "Lire les entrées, traiter, mettre à jour les sorties", "Alimenter, distribuer, agir", "Ouvrir, fermer"],
      correct: 1,
      explanation: "Le cycle automate répète en permanence : lire les entrées (capteurs), traiter le programme, puis mettre à jour les sorties (préactionneurs).",
    },
    exercice: {
      enonce:
        "Décrivez le cycle d'une machine automatisée simple, depuis l'état initial jusqu'au retour à cet état.",
      consignes: [
        "Décris l'état initial.",
        "Énumère les étapes dans l'ordre.",
        "Explique le retour à l'état initial.",
      ],
      criteres: [
        "J'ai défini un état initial sûr.",
        "J'ai énuméré les étapes dans l'ordre.",
        "J'ai expliqué le retour à l'état initial et la répétition.",
      ],
      correction:
        "Exemple d'une perceuse : état initial, foret en haut et pièce absente. Étapes : arrivée et bridage de la pièce, descente du foret, perçage, remontée du foret, libération de la pièce. Le système revient alors à l'état initial, prêt pour la pièce suivante : le cycle se répète. Chaque étape est confirmée par un compte rendu (capteur) avant de passer à la suivante.",
    },
  },
  {
    id: "5-5",
    title: "Sécurité des systèmes automatisés",
    durationMinutes: 28,
    objectifs: [
      "Identifier les risques propres aux systèmes automatisés.",
      "Appliquer les principes de sécurité avant d'intervenir.",
    ],
    simple:
      "Un système automatisé présente un risque particulier : il peut démarrer ou redémarrer tout seul, sans prévenir. Avant toute intervention, on met le système en sécurité : arrêt, consignation des énergies, et vérification qu'aucun mouvement ne peut se produire.",
    vocab: [
      ["Redémarrage automatique", "Relance du système par l'automate, sans action humaine."],
      ["Arrêt d'urgence", "Dispositif qui stoppe immédiatement les mouvements dangereux."],
      ["Protecteur", "Carter, barrière ou grille qui empêche l'accès à une zone dangereuse."],
      ["Consignation", "Mise et maintien hors énergie de toutes les sources avant intervention."],
      ["Énergies multiples", "Un système peut cumuler énergie électrique, pneumatique, hydraulique."],
    ],
    example:
      "Un robot de palettisation est à l'arrêt, immobile. Sans consignation, l'automate peut le relancer à tout moment (temporisation, ordre distant). Avant d'entrer dans sa zone, on consigne l'électricité ET l'air comprimé, et on vérifie qu'aucun mouvement n'est possible.",
    schema: "consignation-steps",
    ascii: "RISQUE : redemarrage automatique sans prevenir\nAVANT INTERVENTION : arreter → consigner TOUTES les energies → verifier\n(electrique ET pneumatique ET hydraulique)",
    retenir: [
      "Un système automatisé peut démarrer ou redémarrer seul : danger majeur.",
      "On consigne TOUTES les énergies (électrique, pneumatique, hydraulique), pas une seule.",
      "L'arrêt d'urgence stoppe le mouvement, mais ne remplace pas la consignation.",
      "On ne retire jamais un protecteur sur une machine en fonctionnement.",
    ],
    erreurs: [
      "Croire qu'un système à l'arrêt est sûr : il peut redémarrer automatiquement.",
      "Ne consigner que l'électricité en oubliant l'air comprimé ou l'hydraulique.",
      "Confondre arrêt d'urgence et consignation : l'arrêt d'urgence ne suffit pas pour intervenir.",
    ],
    astucesPro: [
      "On repère toutes les sources d'énergie du système avant d'intervenir.",
      "Un vérin peut rester sous pression même après coupure : on purge selon la procédure.",
    ],
    diagnostic: [
      "Identifier toutes les énergies présentes sur le système.",
      "Vérifier l'absence de mouvement possible après consignation.",
      "Repérer les zones dangereuses et leurs protecteurs.",
    ],
    depannage: [
      "Arrêter, consigner toutes les énergies, purger les pressions résiduelles.",
      "Vérifier l'absence d'énergie avant tout accès.",
      "Remettre en énergie de façon maîtrisée, protecteurs en place.",
    ],
    securite: [
      "La consignation de toutes les énergies est indispensable avant d'entrer dans une zone automatisée.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Un technicien coupe l'électricité d'un poste automatisé et entre dans la zone ; un vérin sort brusquement.",
      mission: ["Expliquer ce qui a été oublié.", "Indiquer la bonne démarche.", "Rappeler le rôle de l'arrêt d'urgence."],
      correction:
        "Le technicien a oublié une énergie : l'air comprimé. Couper l'électricité ne suffit pas si le circuit pneumatique reste sous pression, un vérin peut alors sortir. La bonne démarche est de consigner TOUTES les énergies (électrique et pneumatique), puis de purger les pressions résiduelles et de vérifier l'absence de mouvement possible avant d'entrer. L'arrêt d'urgence stoppe les mouvements sur le moment, mais il ne remplace pas la consignation : il ne garantit pas l'absence durable d'énergie.",
    },
    memo: ["Peut redémarrer seul", "Consigner TOUTES les énergies", "Purger les pressions", "Arrêt d'urgence ≠ consignation"],
    resume:
      "La sécurité d'un système automatisé impose de consigner toutes ses énergies avant intervention, car il peut redémarrer seul ; l'arrêt d'urgence ne suffit pas.",
    quizIds: ["aut21", "aut22", "aut23", "aut24", "aut25"],
    verification: {
      question: "Pourquoi un système automatisé à l'arrêt reste-t-il dangereux sans consignation ?",
      options: ["Il ne l'est pas", "Il peut démarrer ou redémarrer automatiquement", "Il consomme trop", "Il fait du bruit"],
      correct: 1,
      explanation: "Un automate peut relancer le système à tout moment (temporisation, ordre) : sans consignation de toutes les énergies, un mouvement dangereux reste possible.",
    },
    exercice: {
      enonce:
        "Expliquez pourquoi il faut consigner toutes les énergies d'un système automatisé, et pourquoi l'arrêt d'urgence ne suffit pas.",
      consignes: [
        "Explique le risque de redémarrage automatique.",
        "Justifie la consignation de toutes les énergies.",
        "Précise la différence avec l'arrêt d'urgence.",
      ],
      criteres: [
        "J'ai expliqué le redémarrage automatique.",
        "J'ai justifié la consignation de toutes les énergies (électrique, pneumatique, hydraulique).",
        "J'ai distingué arrêt d'urgence et consignation.",
      ],
      correction:
        "Un système automatisé peut redémarrer seul, sans action humaine : intervenir sans consignation expose à un mouvement soudain. On consigne toutes les énergies car un système en cumule souvent plusieurs (électrique, pneumatique, hydraulique) ; en oublier une laisse un danger (par exemple un vérin sous pression). L'arrêt d'urgence stoppe les mouvements à l'instant, mais ne garantit pas l'absence durable d'énergie : seule la consignation, suivie d'une vérification, autorise l'intervention.",
    },
  },
  {
    id: "5-6",
    title: "Synthèse : repérer les sous-ensembles d'un système",
    durationMinutes: 28,
    objectifs: [
      "Repérer, sur un système réel, la PO, la PC, les capteurs et les actionneurs.",
      "Situer une panne dans la chaîne d'information ou d'énergie.",
    ],
    simple:
      "Ce chapitre met en pratique le bloc : devant un système automatisé, on identifie la partie commande, la partie opérative, les capteurs, les préactionneurs et les actionneurs. Ce repérage permet de comprendre le fonctionnement et de situer rapidement une panne.",
    vocab: [
      ["Sous-ensemble", "Partie identifiable du système (commande, capteurs, actionneurs…)."],
      ["Repérage", "Identification des éléments et de leur rôle sur le système réel."],
      ["Chaîne d'information", "Capteurs et automate (chapitre 5-3)."],
      ["Chaîne d'énergie", "Préactionneurs et actionneurs (chapitre 5-3)."],
      ["Localisation de panne", "Situer le défaut dans l'information ou l'énergie."],
    ],
    example:
      "Sur un convoyeur automatisé : la partie commande est l'armoire avec l'automate ; les capteurs (présence, fin de course) forment l'acquisition ; le contacteur est le préactionneur ; le moteur est l'actionneur. En repérant ces sous-ensembles, on situe vite un défaut : détection ou action.",
    schema: "po-pc-structure",
    illustrations: ["automated-system"],
    ascii: "REPERER : PC (automate) · capteurs · preactionneurs · actionneurs\n→ situer la panne : INFORMATION (capteur/commande) ou ENERGIE (preact./act.)",
    retenir: [
      "On repère d'abord la partie commande et la partie opérative.",
      "On identifie les capteurs (information) et les actionneurs (énergie).",
      "Situer une panne, c'est la placer dans la chaîne d'information ou d'énergie.",
      "Ce repérage est la base du diagnostic d'un système automatisé.",
    ],
    erreurs: [
      "Confondre capteur et actionneur lors du repérage.",
      "Chercher une panne sans avoir repéré les sous-ensembles.",
      "Oublier les préactionneurs entre la commande et les actionneurs.",
    ],
    astucesPro: [
      "On suit le flux : information des capteurs vers l'automate, ordres vers les actionneurs.",
      "Un défaut de détection et un défaut d'action se traitent différemment.",
    ],
    diagnostic: [
      "Repérer PC, PO, capteurs et actionneurs sur le système.",
      "Situer le symptôme dans l'information ou l'énergie.",
      "Cibler l'organe correspondant pour la suite du diagnostic.",
    ],
    depannage: [
      "Contrôler les capteurs si la commande ne réagit pas.",
      "Contrôler préactionneurs et actionneurs si l'action ne se produit pas.",
      "Respecter la consignation de toutes les énergies avant tout accès.",
    ],
    securite: [
      "Le repérage se fait sans intervenir sur les parties actives tant que le système n'est pas consigné.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur un poste automatisé, une action n'a pas lieu ; on doit d'abord comprendre le système.",
      mission: ["Lister les sous-ensembles à repérer.", "Expliquer comment situer la panne.", "Indiquer la précaution."],
      correction:
        "On repère : la partie commande (automate), les capteurs (acquisition d'information), les préactionneurs (distribution de l'énergie) et les actionneurs (action). Pour situer la panne, on détermine si l'automate reçoit bien l'information des capteurs et donne l'ordre (chaîne d'information), puis si l'ordre est distribué et l'actionneur alimenté (chaîne d'énergie) : le maillon où cela s'interrompt localise la panne. Avant tout accès aux parties actives, on consigne toutes les énergies, car le système peut redémarrer seul.",
    },
    memo: ["Repérer PC / PO", "Capteurs = info / actionneurs = énergie", "Situer : information ou énergie", "Consigner avant d'accéder"],
    resume:
      "Repérer les sous-ensembles (commande, capteurs, préactionneurs, actionneurs) permet de comprendre un système automatisé et de situer une panne dans l'information ou l'énergie.",
    quizIds: ["aut26", "aut27", "aut28", "aut29", "aut30"],
    verification: {
      question: "Pour situer une panne sur un système automatisé, on la place dans :",
      options: ["La couleur des câbles", "La chaîne d'information ou la chaîne d'énergie", "Le prix de la machine", "Le carnet de commandes"],
      correct: 1,
      explanation: "On situe la panne dans la chaîne d'information (capteurs, commande) ou la chaîne d'énergie (préactionneurs, actionneurs) : cela cible l'organe à contrôler.",
    },
    exercice: {
      enonce:
        "Sur un convoyeur automatisé, repérez la partie commande, un capteur, un préactionneur et un actionneur, puis expliquez comment situer une panne.",
      consignes: [
        "Nomme chaque sous-ensemble.",
        "Associe-le à sa chaîne (information ou énergie).",
        "Explique la localisation d'une panne.",
      ],
      criteres: [
        "J'ai repéré PC, capteur, préactionneur, actionneur.",
        "J'ai associé chacun à sa chaîne.",
        "J'ai expliqué comment situer la panne.",
      ],
      correction:
        "Partie commande : l'automate dans l'armoire. Capteur : détecteur de présence ou fin de course (chaîne d'information). Préactionneur : le contacteur qui distribue l'énergie (chaîne d'énergie). Actionneur : le moteur du convoyeur (chaîne d'énergie). Pour situer une panne : vérifier si l'automate reçoit l'information et donne l'ordre (information), puis si le contacteur transmet et le moteur est alimenté (énergie). Le maillon défaillant localise la panne. On consigne toutes les énergies avant d'accéder aux parties actives.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 2 — LES CAPTEURS INDUSTRIELS
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block2Lessons: Lesson[] = [
  {
    id: "5-7",
    title: "À quoi sert un capteur ?",
    durationMinutes: 26,
    objectifs: [
      "Expliquer le rôle d'un capteur dans un système automatisé.",
      "Distinguer un capteur tout ou rien (TOR) d'un capteur analogique.",
    ],
    simple:
      "Un capteur est l'organe des sens du système automatisé : il détecte une grandeur (présence, position, niveau, température) et transforme cette information en un signal électrique compris par l'automate. Sans capteurs, la partie commande travaillerait à l'aveugle.",
    vocab: [
      ["Capteur", "Élément qui détecte une grandeur et la transforme en signal pour la commande."],
      ["Tout ou rien (TOR)", "Signal à deux états seulement : présent/absent, 0 ou 1."],
      ["Analogique", "Signal qui varie de façon continue (ex : 4-20 mA, 0-10 V) selon la grandeur."],
      ["Portée", "Distance à laquelle un capteur détecte l'objet."],
      ["Entrée automate", "Borne de l'automate qui reçoit le signal d'un capteur."],
    ],
    example:
      "Sur une ligne, un détecteur de présence est un capteur TOR : la bouteille est là (1) ou pas (0). Un capteur de température, lui, est analogique : il fournit une valeur qui varie continûment avec la température mesurée.",
    schema: "sensor-types-compare",
    ascii: "CAPTEUR = organe des sens du systeme\nTOR : deux etats (0 / 1) — presence, position\nANALOGIQUE : valeur continue — temperature, pression, niveau",
    retenir: [
      "Le capteur détecte une grandeur et l'envoie à la commande sous forme de signal.",
      "Un capteur TOR ne donne que deux états : 0 ou 1.",
      "Un capteur analogique fournit une valeur qui varie continûment.",
      "Les capteurs sont raccordés aux entrées de l'automate.",
    ],
    erreurs: [
      "Confondre capteur TOR (deux états) et capteur analogique (valeur continue).",
      "Confondre capteur (qui informe) et actionneur (qui agit).",
      "Choisir un capteur sans tenir compte de la grandeur à détecter.",
    ],
    astucesPro: [
      "On choisit le type de capteur selon la grandeur à détecter et l'objet.",
      "Un signal analogique se lit avec une valeur ; un signal TOR, avec un état 0/1.",
    ],
    diagnostic: [
      "Identifier la grandeur détectée et le type de capteur (TOR ou analogique).",
      "Vérifier que le capteur fournit bien un signal à la commande.",
      "Contrôler l'état d'une entrée automate face à la présence de l'objet.",
    ],
    depannage: [
      "Vérifier l'alimentation et le raccordement du capteur.",
      "Contrôler le signal reçu par l'entrée automate.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Un capteur défaillant peut fausser le fonctionnement : on ne le shunte pas pour « faire marcher ».",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Une machine doit mesurer le niveau d'un réservoir et déclencher une pompe à un seuil.",
      mission: ["Indiquer le type de capteur pour le niveau.", "Indiquer le type pour le seuil de déclenchement.", "Justifier."],
      correction:
        "Pour connaître le niveau exact et le suivre en continu, on utilise un capteur analogique de niveau (valeur qui varie continûment). Pour simplement déclencher la pompe à un seuil (plein/vide), un capteur tout ou rien (détecteur de niveau) suffit : il donne deux états. Le choix dépend du besoin : suivre une valeur (analogique) ou détecter un franchissement de seuil (TOR).",
    },
    memo: ["Capteur = sens du système", "TOR = 0/1", "Analogique = valeur continue", "Raccordé aux entrées automate"],
    resume:
      "Le capteur détecte une grandeur et la transmet à la commande ; il est tout ou rien (deux états) ou analogique (valeur continue).",
    quizIds: ["aut31", "aut32", "aut33", "aut34", "aut35"],
    verification: {
      question: "Un détecteur de présence qui indique seulement « objet là / pas là » est un capteur :",
      options: ["Analogique", "Tout ou rien (TOR)", "De température", "De pression"],
      correct: 1,
      explanation: "Deux états seulement (présent/absent, 0/1) : c'est un capteur tout ou rien (TOR). Un capteur analogique fournirait une valeur continue.",
    },
    exercice: {
      enonce:
        "Classez ces capteurs en TOR ou analogique : (a) détecteur de présence, (b) capteur de température, (c) fin de course, (d) capteur de pression.",
      consignes: [
        "Classe chaque capteur.",
        "Justifie par le type de signal.",
        "Rappelle la différence TOR / analogique.",
      ],
      criteres: [
        "(a) TOR, (b) analogique, (c) TOR, (d) analogique.",
        "J'ai justifié par deux états ou valeur continue.",
        "J'ai rappelé la différence.",
      ],
      correction:
        "(a) détecteur de présence = TOR (présent/absent). (b) capteur de température = analogique (valeur continue). (c) fin de course = TOR (atteint/pas atteint). (d) capteur de pression = analogique (valeur continue). Un capteur TOR ne donne que deux états ; un capteur analogique fournit une valeur qui varie continûment avec la grandeur mesurée.",
    },
  },
  {
    id: "5-8",
    title: "Le détecteur inductif",
    durationMinutes: 28,
    objectifs: [
      "Expliquer le principe et l'usage d'un détecteur inductif.",
      "Comprendre la détection sans contact et ses limites.",
    ],
    simple:
      "Le détecteur inductif détecte les objets métalliques sans les toucher. Quand un métal entre dans sa zone, il modifie un champ magnétique et la sortie du détecteur change d'état. Il est robuste et très répandu, mais il ne détecte que les métaux.",
    vocab: [
      ["Détecteur inductif", "Capteur de proximité qui détecte les objets métalliques sans contact."],
      ["Sans contact", "Détection à distance, sans toucher l'objet : pas d'usure mécanique."],
      ["Zone de détection", "Espace devant le capteur où l'objet est détecté (portée courte, quelques mm)."],
      ["Sortie TOR", "État 0 ou 1 selon la présence de l'objet métallique."],
      ["Champ magnétique", "Champ modifié par l'approche d'un métal, à l'origine de la détection."],
    ],
    example:
      "Sur un poste d'usinage, un détecteur inductif confirme la présence d'une pièce métallique dans le montage avant d'autoriser l'usinage. Il détecte le métal à quelques millimètres, sans contact, ce qui évite l'usure.",
    schema: "sensor-types-compare",
    illustrations: ["sensor-detection"],
    ascii: "objet METALLIQUE dans la zone → champ modifie → SORTIE = 1\nobjet hors zone ou non metallique → SORTIE = 0\n(detection SANS CONTACT, portee courte)",
    retenir: [
      "Le détecteur inductif détecte uniquement les objets métalliques.",
      "La détection est sans contact : pas d'usure mécanique.",
      "La portée est courte (quelques millimètres).",
      "La sortie est tout ou rien : 0 (pas de métal) ou 1 (métal détecté).",
    ],
    erreurs: [
      "Attendre d'un détecteur inductif qu'il détecte du plastique ou du carton : il ne détecte que le métal.",
      "Placer l'objet hors de la portée (trop loin) et croire le capteur défaillant.",
      "Négliger l'environnement métallique autour du capteur, qui peut perturber la détection.",
    ],
    astucesPro: [
      "On respecte la distance de détection indiquée par le constructeur.",
      "Un voyant sur le détecteur indique souvent l'état de la sortie : pratique pour diagnostiquer.",
    ],
    diagnostic: [
      "Vérifier que l'objet à détecter est bien métallique et dans la portée.",
      "Contrôler le voyant d'état du détecteur.",
      "Vérifier l'alimentation et le raccordement.",
    ],
    depannage: [
      "Ajuster la distance capteur-objet si la détection est incertaine.",
      "Contrôler le signal reçu par l'entrée automate.",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "On ne modifie pas le réglage ou la position d'un capteur de sécurité sans procédure.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un détecteur inductif ne détecte jamais une pièce en plastique posée devant lui.",
      mission: ["Expliquer pourquoi.", "Proposer le bon type de capteur.", "Rappeler une vérification."],
      correction:
        "Le détecteur inductif ne détecte que les objets métalliques : une pièce en plastique ne modifie pas son champ magnétique, la sortie reste donc à 0. Pour détecter du plastique, il faut un autre type de capteur, par exemple un détecteur capacitif ou photoélectrique. On vérifie aussi que l'objet est bien dans la portée du capteur et que celui-ci est alimenté et raccordé correctement.",
    },
    memo: ["Détecte le métal", "Sans contact", "Portée courte", "Sortie 0/1"],
    resume:
      "Le détecteur inductif détecte sans contact les objets métalliques à courte distance et fournit une sortie tout ou rien ; il ne détecte pas les matériaux non métalliques.",
    quizIds: ["aut36", "aut37", "aut38", "aut39", "aut40"],
    verification: {
      question: "Que détecte un détecteur inductif ?",
      options: ["Tous les matériaux", "Uniquement les objets métalliques", "Uniquement le verre", "La température"],
      correct: 1,
      explanation: "Le détecteur inductif détecte uniquement les objets métalliques, sans contact, à courte distance.",
    },
    exercice: {
      enonce:
        "Expliquez le principe du détecteur inductif et donnez un avantage et une limite.",
      consignes: [
        "Explique ce qu'il détecte et comment (sans contact).",
        "Donne un avantage.",
        "Donne une limite.",
      ],
      criteres: [
        "J'ai indiqué qu'il détecte le métal sans contact.",
        "J'ai donné un avantage (pas d'usure, robuste).",
        "J'ai donné une limite (métal uniquement, portée courte).",
      ],
      correction:
        "Le détecteur inductif détecte les objets métalliques sans contact : l'approche d'un métal modifie son champ magnétique et fait basculer sa sortie tout ou rien. Avantage : détection sans contact, donc pas d'usure mécanique, et grande robustesse. Limite : il ne détecte que les métaux et sa portée est courte (quelques millimètres).",
    },
  },
  {
    id: "5-9",
    title: "Le détecteur capacitif",
    durationMinutes: 26,
    objectifs: [
      "Expliquer le principe et l'usage d'un détecteur capacitif.",
      "Comparer le détecteur capacitif au détecteur inductif.",
    ],
    simple:
      "Le détecteur capacitif détecte presque tous les matériaux : métal, plastique, bois, verre, liquides. L'approche d'un objet modifie une capacité électrique et fait basculer la sortie. Il peut même détecter un niveau de liquide à travers une paroi fine.",
    vocab: [
      ["Détecteur capacitif", "Capteur de proximité qui détecte presque tous les matériaux sans contact."],
      ["Capacité", "Grandeur électrique modifiée par l'approche d'un objet."],
      ["Détection de niveau", "Usage courant : détecter la présence d'un liquide ou d'un solide, parfois à travers une paroi."],
      ["Sensibilité", "Réglage qui adapte le capteur à l'objet et à l'environnement."],
      ["Sortie TOR", "État 0 ou 1 selon la présence de l'objet."],
    ],
    example:
      "Sur une trémie, un détecteur capacitif signale quand le niveau de granulés atteint le capteur, même à travers la paroi. Contrairement à l'inductif, il détecte aussi bien le plastique que le métal.",
    schema: "sensor-types-compare",
    ascii: "objet (metal, plastique, bois, liquide...) dans la zone → SORTIE = 1\ndetection SANS CONTACT · peut detecter un NIVEAU a travers une paroi fine",
    retenir: [
      "Le détecteur capacitif détecte presque tous les matériaux, pas seulement le métal.",
      "La détection est sans contact, comme l'inductif.",
      "Il sert souvent à détecter un niveau (liquide, granulés), parfois à travers une paroi.",
      "Il est plus sensible à l'environnement : un réglage de sensibilité est souvent nécessaire.",
    ],
    erreurs: [
      "Confondre inductif (métal seulement) et capacitif (presque tous matériaux).",
      "Régler une sensibilité inadaptée qui provoque des détections intempestives.",
      "Négliger l'influence de l'humidité ou des dépôts sur la détection.",
    ],
    astucesPro: [
      "On règle la sensibilité selon l'objet et l'environnement pour éviter les faux déclenchements.",
      "Pour détecter un niveau à travers une paroi, on vérifie l'épaisseur et le matériau de la paroi.",
    ],
    diagnostic: [
      "Vérifier que l'objet est dans la portée et le réglage de sensibilité adapté.",
      "Contrôler l'influence de dépôts, d'humidité ou de la paroi.",
      "Vérifier l'alimentation et le raccordement.",
    ],
    depannage: [
      "Ajuster la sensibilité si la détection est intempestive ou absente.",
      "Nettoyer la face de détection si nécessaire.",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "On ne modifie pas un capteur de sécurité sans procédure.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "On doit détecter le niveau de granulés plastiques dans une trémie fermée.",
      mission: ["Choisir le type de capteur.", "Expliquer pourquoi pas l'inductif.", "Citer un point de réglage."],
      correction:
        "On choisit un détecteur capacitif : il détecte presque tous les matériaux, y compris le plastique, et peut détecter un niveau à travers une paroi fine. Le détecteur inductif ne conviendrait pas car il ne détecte que le métal. Point de réglage : la sensibilité, à ajuster selon le matériau, la paroi et l'environnement, pour éviter les détections intempestives.",
    },
    memo: ["Détecte presque tout", "Sans contact", "Détection de niveau", "Régler la sensibilité"],
    resume:
      "Le détecteur capacitif détecte sans contact presque tous les matériaux et sert souvent à détecter un niveau ; il demande un réglage de sensibilité adapté.",
    quizIds: ["aut41", "aut42", "aut43", "aut44", "aut45"],
    verification: {
      question: "Quelle est la principale différence entre détecteur capacitif et détecteur inductif ?",
      options: ["Le capacitif détecte presque tous les matériaux, l'inductif seulement le métal", "Le capacitif ne détecte rien", "L'inductif détecte le plastique", "Il n'y a aucune différence"],
      correct: 0,
      explanation: "Le détecteur inductif ne détecte que le métal, tandis que le capacitif détecte presque tous les matériaux (métal, plastique, liquide…).",
    },
    exercice: {
      enonce:
        "Comparez détecteur inductif et détecteur capacitif : ce qu'ils détectent, un usage typique de chacun.",
      consignes: [
        "Indique ce que détecte chacun.",
        "Donne un usage typique de chacun.",
        "Rappelle un point d'attention du capacitif.",
      ],
      criteres: [
        "Inductif = métal ; capacitif = presque tous matériaux.",
        "J'ai donné un usage pour chacun.",
        "J'ai cité le réglage de sensibilité du capacitif.",
      ],
      correction:
        "Le détecteur inductif détecte uniquement les objets métalliques (ex : présence d'une pièce métallique dans un montage). Le détecteur capacitif détecte presque tous les matériaux (ex : niveau de granulés ou de liquide, même à travers une paroi fine). Les deux fonctionnent sans contact. Point d'attention du capacitif : sa sensibilité doit être réglée selon l'objet et l'environnement pour éviter les détections intempestives.",
    },
  },
  {
    id: "5-10",
    title: "Le détecteur photoélectrique",
    durationMinutes: 28,
    objectifs: [
      "Expliquer le principe d'un détecteur photoélectrique.",
      "Distinguer les modes barrage, reflex et proximité.",
    ],
    simple:
      "Le détecteur photoélectrique utilise un faisceau lumineux pour détecter un objet, souvent à grande distance. Selon le montage, l'objet coupe le faisceau ou le renvoie. Il détecte la plupart des objets, quelle que soit leur matière, tant qu'ils arrêtent ou renvoient la lumière.",
    vocab: [
      ["Détecteur photoélectrique", "Capteur qui détecte un objet à l'aide d'un faisceau lumineux."],
      ["Mode barrage", "Émetteur et récepteur séparés ; l'objet est détecté quand il coupe le faisceau."],
      ["Mode reflex", "Émetteur et récepteur côte à côte, avec un réflecteur ; l'objet coupe le faisceau réfléchi."],
      ["Mode proximité", "L'objet lui-même renvoie la lumière vers le récepteur."],
      ["Portée", "Distance de détection, souvent bien plus grande que l'inductif ou le capacitif."],
    ],
    example:
      "À l'entrée d'un convoyeur, un détecteur photoélectrique en mode barrage détecte le passage des cartons : quand un carton coupe le faisceau entre l'émetteur et le récepteur, la sortie change d'état. La portée peut atteindre plusieurs mètres.",
    schema: "sensor-types-compare",
    ascii: "BARRAGE : emetteur --faisceau--> recepteur ; objet coupe → detecte\nREFLEX : emetteur/recepteur + reflecteur ; objet coupe le faisceau reflechi\nPROXIMITE : l'objet renvoie la lumiere vers le recepteur",
    retenir: [
      "Le détecteur photoélectrique détecte grâce à un faisceau lumineux.",
      "Mode barrage : émetteur et récepteur séparés, l'objet coupe le faisceau.",
      "Mode reflex : un réflecteur renvoie le faisceau, l'objet le coupe.",
      "Mode proximité : l'objet lui-même renvoie la lumière. La portée est souvent grande.",
    ],
    erreurs: [
      "Choisir un mode inadapté (ex : proximité sur un objet noir peu réfléchissant).",
      "Négliger l'encrassement de la lentille, qui fausse la détection.",
      "Oublier l'alignement émetteur/récepteur ou réflecteur en mode barrage/reflex.",
    ],
    astucesPro: [
      "On nettoie régulièrement la lentille : la poussière réduit la portée.",
      "On choisit le mode selon la distance, l'objet et la place disponible.",
    ],
    diagnostic: [
      "Vérifier l'alignement et la propreté de l'optique.",
      "Contrôler le mode utilisé par rapport à l'objet à détecter.",
      "Vérifier l'alimentation et le raccordement.",
    ],
    depannage: [
      "Nettoyer la lentille et réaligner l'émetteur/récepteur ou le réflecteur.",
      "Contrôler le signal reçu par l'entrée automate.",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "On ne modifie pas un capteur de sécurité (barrière immatérielle) sans procédure.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un détecteur photoélectrique en mode barrage ne détecte plus les cartons de façon fiable.",
      mission: ["Citer deux causes probables.", "Indiquer les vérifications.", "Rappeler une précaution."],
      correction:
        "Deux causes probables : un désalignement entre l'émetteur et le récepteur, ou un encrassement de la lentille qui affaiblit le faisceau. Vérifications : contrôler l'alignement, nettoyer les optiques, vérifier l'alimentation et le raccordement, puis contrôler le signal reçu par l'automate. S'il s'agit d'une barrière de sécurité, toute intervention suit une procédure et se fait dans les limites de son habilitation.",
    },
    memo: ["Faisceau lumineux", "Barrage / reflex / proximité", "Grande portée", "Nettoyer et aligner l'optique"],
    resume:
      "Le détecteur photoélectrique détecte un objet par un faisceau lumineux (barrage, reflex ou proximité), souvent à grande distance et quelle que soit la matière.",
    quizIds: ["aut46", "aut47", "aut48", "aut49", "aut50"],
    verification: {
      question: "Dans le mode barrage d'un détecteur photoélectrique, comment l'objet est-il détecté ?",
      options: ["Il renvoie la lumière", "Il coupe le faisceau entre émetteur et récepteur", "Il chauffe le capteur", "Il touche le capteur"],
      correct: 1,
      explanation: "En mode barrage, l'émetteur et le récepteur sont séparés : l'objet est détecté lorsqu'il coupe le faisceau entre les deux.",
    },
    exercice: {
      enonce:
        "Décrivez les trois modes du détecteur photoélectrique (barrage, reflex, proximité) en une phrase chacun.",
      consignes: [
        "Décris le mode barrage.",
        "Décris le mode reflex.",
        "Décris le mode proximité.",
      ],
      criteres: [
        "Barrage : émetteur et récepteur séparés, l'objet coupe le faisceau.",
        "Reflex : réflecteur qui renvoie le faisceau, l'objet le coupe.",
        "Proximité : l'objet renvoie lui-même la lumière.",
      ],
      correction:
        "Barrage : l'émetteur et le récepteur sont séparés ; l'objet est détecté quand il coupe le faisceau entre les deux (grande portée). Reflex : l'émetteur et le récepteur sont côte à côte avec un réflecteur en face ; l'objet est détecté quand il coupe le faisceau réfléchi. Proximité : l'objet lui-même renvoie la lumière vers le récepteur ; pratique quand on ne peut placer qu'un seul boîtier.",
    },
  },
  {
    id: "5-11",
    title: "Détecteurs de position et fins de course",
    durationMinutes: 26,
    objectifs: [
      "Expliquer le rôle d'un capteur de position et d'un fin de course.",
      "Distinguer détection mécanique (avec contact) et détection sans contact.",
    ],
    simple:
      "Un capteur de position indique où se trouve un élément mobile. Le fin de course est un capteur mécanique : quand la pièce arrive en butée, elle appuie sur un galet ou un levier qui bascule un contact. C'est simple, robuste, mais avec contact, donc soumis à l'usure.",
    vocab: [
      ["Fin de course", "Capteur mécanique actionné par le contact de l'élément mobile en fin de déplacement."],
      ["Détecteur de position", "Capteur qui indique la position d'un élément (haute, basse, sortie…)."],
      ["Galet / levier", "Pièce du fin de course actionnée par l'objet."],
      ["Contact mécanique", "Détection par appui physique, sujette à l'usure."],
      ["Compte rendu de position", "Information « position atteinte » renvoyée à la commande."],
    ],
    example:
      "Sur un vérin, un fin de course en position sortie renvoie le compte rendu « vérin sorti » à l'automate. Quand la tige arrive en butée, elle appuie sur le galet du fin de course, dont le contact bascule.",
    schema: "po-pc-structure",
    ascii: "element mobile arrive en butee → appuie sur le galet → CONTACT bascule\n→ compte rendu « position atteinte » a la commande",
    retenir: [
      "Le fin de course détecte une position par contact mécanique.",
      "Il fournit un compte rendu « position atteinte » à la commande.",
      "Simple et robuste, mais soumis à l'usure car avec contact.",
      "Pour éviter l'usure, on peut utiliser des détecteurs de position sans contact.",
    ],
    erreurs: [
      "Régler un fin de course de sorte qu'il soit heurté violemment : usure rapide.",
      "Confondre détection avec contact (fin de course) et sans contact (inductif, etc.).",
      "Oublier qu'un fin de course encrassé ou usé peut ne plus commuter.",
    ],
    astucesPro: [
      "On règle la position du fin de course pour un appui franc mais sans choc.",
      "Un fin de course qui ne commute plus bloque souvent le cycle : on le vérifie tôt.",
    ],
    diagnostic: [
      "Vérifier que l'élément mobile actionne bien le galet/levier.",
      "Contrôler la commutation du contact (continuité) hors tension.",
      "Vérifier l'usure et le réglage du fin de course.",
    ],
    depannage: [
      "Ajuster ou remplacer un fin de course usé.",
      "Contrôler le compte rendu reçu par l'automate.",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "Certains fins de course participent à la sécurité (position sûre) : on ne les shunte pas.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un cycle se bloque : l'automate attend le compte rendu « vérin sorti » qui n'arrive jamais.",
      mission: ["Nommer le capteur concerné.", "Citer les causes probables.", "Indiquer les contrôles."],
      correction:
        "Le capteur concerné est le fin de course « vérin sorti ». Causes probables : le vérin ne sort pas complètement (défaut d'action) et n'actionne pas le galet, ou le fin de course est usé/déréglé et ne commute plus. Contrôles : vérifier que la tige atteint bien le galet, contrôler la commutation du contact (continuité, hors tension après consignation), et vérifier le réglage et l'usure du fin de course.",
    },
    memo: ["Fin de course = contact", "Compte rendu de position", "Robuste mais s'use", "Sans contact = pas d'usure"],
    resume:
      "Le fin de course détecte une position par contact mécanique et renvoie un compte rendu à la commande ; robuste mais sujet à l'usure, il peut être remplacé par un détecteur sans contact.",
    quizIds: ["aut51", "aut52", "aut53", "aut54", "aut55"],
    verification: {
      question: "Comment un fin de course détecte-t-il une position ?",
      options: ["Sans contact, par un faisceau", "Par contact mécanique (galet/levier actionné)", "Par la température", "Par la couleur"],
      correct: 1,
      explanation: "Le fin de course est actionné par le contact physique de l'élément mobile (galet ou levier), qui fait basculer un contact.",
    },
    exercice: {
      enonce:
        "Expliquez le fonctionnement d'un fin de course et donnez un avantage et un inconvénient par rapport à un détecteur sans contact.",
      consignes: [
        "Décris le fonctionnement.",
        "Donne un avantage.",
        "Donne un inconvénient.",
      ],
      criteres: [
        "J'ai décrit l'appui mécanique qui bascule le contact.",
        "J'ai donné un avantage (simple, robuste).",
        "J'ai donné un inconvénient (usure car avec contact).",
      ],
      correction:
        "Le fin de course est actionné par l'élément mobile : en fin de déplacement, la pièce appuie sur un galet ou un levier qui fait basculer un contact, renvoyant le compte rendu « position atteinte ». Avantage : simple, robuste et peu coûteux. Inconvénient : la détection se fait par contact, donc le capteur s'use avec le temps, contrairement à un détecteur sans contact (inductif, photoélectrique).",
    },
  },
  {
    id: "5-12",
    title: "Capteurs analogiques et grandeurs mesurées",
    durationMinutes: 28,
    objectifs: [
      "Expliquer ce que fournit un capteur analogique.",
      "Citer des grandeurs mesurées et des signaux normalisés (4-20 mA, 0-10 V).",
    ],
    simple:
      "Un capteur analogique ne dit pas seulement « présent ou absent » : il fournit une valeur qui varie continûment avec la grandeur mesurée (température, pression, niveau, débit). Cette valeur est transmise sous forme de signal normalisé, par exemple 4-20 mA ou 0-10 V.",
    vocab: [
      ["Capteur analogique", "Capteur qui fournit une valeur continue proportionnelle à la grandeur."],
      ["Signal normalisé", "Signal standard compris par les automates : 4-20 mA (courant) ou 0-10 V (tension)."],
      ["Grandeur mesurée", "Ce que l'on mesure : température, pression, niveau, débit…"],
      ["Étendue de mesure", "Plage de valeurs que le capteur peut mesurer (ex : 0 à 100 °C)."],
      ["Entrée analogique", "Entrée de l'automate qui reçoit et convertit le signal analogique."],
    ],
    example:
      "Un capteur de pression 4-20 mA associé à une plage 0-10 bar envoie 4 mA pour 0 bar et 20 mA pour 10 bar. L'automate lit ce courant et en déduit la pression, qu'il peut afficher ou utiliser pour réguler.",
    schema: "energy-info-chains",
    ascii: "grandeur (temperature, pression, niveau) → CAPTEUR ANALOGIQUE\n→ signal normalise (4-20 mA ou 0-10 V) → entree analogique de l'automate",
    retenir: [
      "Un capteur analogique fournit une valeur continue, pas seulement deux états.",
      "Les signaux normalisés courants sont 4-20 mA et 0-10 V.",
      "Grandeurs typiques : température, pression, niveau, débit.",
      "Le signal est reçu par une entrée analogique de l'automate.",
    ],
    erreurs: [
      "Confondre capteur analogique (valeur continue) et capteur TOR (deux états).",
      "Ignorer l'étendue de mesure et interpréter une valeur hors plage.",
      "Oublier que le 4-20 mA démarre à 4 mA (0 correspond souvent à un défaut de ligne).",
    ],
    astucesPro: [
      "Le 4-20 mA permet de détecter une coupure de ligne : 0 mA signale un défaut, pas la valeur minimale.",
      "On vérifie la correspondance signal/valeur (échelle) avant d'interpréter une mesure.",
    ],
    diagnostic: [
      "Identifier la grandeur mesurée et le type de signal (4-20 mA, 0-10 V).",
      "Vérifier la cohérence de la valeur avec l'étendue de mesure.",
      "Contrôler le signal reçu par l'entrée analogique.",
    ],
    depannage: [
      "Vérifier l'alimentation, le câblage et l'échelle du capteur.",
      "Comparer la valeur lue à une référence.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Les mesures sous tension se font avec l'habilitation et le matériel adaptés.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un capteur de niveau 4-20 mA affiche 0 mA sur l'automate.",
      mission: ["Interpréter la valeur 0 mA.", "Citer une cause probable.", "Indiquer la vérification."],
      correction:
        "Sur une boucle 4-20 mA, la valeur minimale utile est 4 mA (niveau bas), pas 0. Un signal à 0 mA indique généralement un défaut de la ligne : coupure du câble, capteur non alimenté ou débranché. Cause probable : rupture ou desserrage du câble, ou capteur hors tension. Vérification : contrôler l'alimentation et la continuité de la boucle, le raccordement du capteur, puis le signal reçu par l'entrée analogique, en respectant les précautions et l'habilitation.",
    },
    memo: ["Valeur continue", "4-20 mA / 0-10 V", "Température, pression, niveau", "0 mA = défaut de ligne"],
    resume:
      "Un capteur analogique fournit une valeur continue de la grandeur mesurée, via un signal normalisé (4-20 mA, 0-10 V) lu par une entrée analogique de l'automate.",
    quizIds: ["aut56", "aut57", "aut58", "aut59", "aut60"],
    verification: {
      question: "Quel est un signal analogique normalisé courant en industrie ?",
      options: ["4-20 mA", "0 ou 1 seulement", "230 V alternatif", "50 Hz"],
      correct: 0,
      explanation: "Le 4-20 mA (courant) et le 0-10 V (tension) sont des signaux analogiques normalisés courants ; 0/1 correspond au tout ou rien.",
    },
    exercice: {
      enonce:
        "Un capteur de température 4-20 mA a une étendue de 0 à 100 °C. Que représentent 4 mA et 20 mA, et pourquoi le 4-20 mA est-il pratique ?",
      consignes: [
        "Indique la valeur correspondant à 4 mA et à 20 mA.",
        "Explique le lien entre signal et grandeur.",
        "Donne un avantage du 4-20 mA.",
      ],
      criteres: [
        "4 mA = 0 °C, 20 mA = 100 °C.",
        "J'ai expliqué la proportionnalité signal/valeur.",
        "J'ai cité la détection de coupure de ligne.",
      ],
      correction:
        "Avec une étendue 0-100 °C, 4 mA correspond à 0 °C et 20 mA à 100 °C ; le courant varie proportionnellement à la température entre ces deux bornes. Le 4-20 mA est pratique car il ne démarre pas à 0 : un signal à 0 mA indique alors un défaut de ligne (coupure, capteur non alimenté), ce qui permet de distinguer une vraie valeur basse d'une panne.",
    },
  },
  {
    id: "5-13",
    title: "Raccordement des capteurs et synthèse",
    durationMinutes: 28,
    objectifs: [
      "Comprendre le raccordement d'un capteur (nombre de fils, type de sortie).",
      "Choisir un capteur adapté et situer une panne de détection.",
    ],
    simple:
      "Un capteur se raccorde à l'automate par des fils : alimentation et signal. Selon le capteur, on parle de montage 2 fils ou 3 fils, avec une sortie de type PNP ou NPN. Ce chapitre fait aussi la synthèse : choisir le bon capteur et diagnostiquer une détection.",
    vocab: [
      ["Montage 3 fils", "Raccordement avec alimentation (+ et −) et un fil de signal séparé."],
      ["Montage 2 fils", "Raccordement où le signal passe par les fils d'alimentation."],
      ["Sortie PNP", "La sortie commute vers le + de l'alimentation (courant sortant)."],
      ["Sortie NPN", "La sortie commute vers le − de l'alimentation (courant entrant)."],
      ["Entrée automate", "Doit être compatible avec le type de sortie du capteur (PNP/NPN)."],
    ],
    example:
      "Un détecteur inductif 3 fils à sortie PNP se raccorde au +, au − et à une entrée automate compatible PNP. Si l'entrée attend du NPN, le capteur ne sera pas vu correctement : la compatibilité est essentielle.",
    schema: "sensor-types-compare",
    ascii: "3 FILS : + / - / signal ; sortie PNP ou NPN\nl'ENTREE automate doit etre compatible avec le type de sortie du capteur",
    retenir: [
      "Un capteur se raccorde par des fils d'alimentation et de signal.",
      "Montage 3 fils : alimentation + signal séparé ; 2 fils : signal par l'alimentation.",
      "La sortie est de type PNP ou NPN : l'entrée automate doit être compatible.",
      "Choisir un capteur, c'est adapter type, portée, matière détectée et raccordement.",
    ],
    erreurs: [
      "Raccorder un capteur PNP sur une entrée prévue pour du NPN (ou l'inverse).",
      "Inverser l'alimentation (+ et −) et endommager le capteur.",
      "Choisir un capteur sans vérifier la matière de l'objet et la portée.",
    ],
    astucesPro: [
      "On vérifie toujours PNP/NPN et le schéma de raccordement du capteur avant de câbler.",
      "Un voyant sur le capteur aide à confirmer la détection lors du diagnostic.",
    ],
    diagnostic: [
      "Vérifier l'alimentation et le raccordement (fils, polarité).",
      "Contrôler la compatibilité PNP/NPN avec l'entrée automate.",
      "Confirmer la détection avec le voyant et l'état de l'entrée.",
    ],
    depannage: [
      "Corriger un raccordement ou une incompatibilité PNP/NPN.",
      "Remplacer un capteur défaillant par un modèle équivalent.",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "Le câblage se fait hors tension, après consignation.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un détecteur neuf, bien alimenté et dont le voyant s'allume à la détection, n'est pourtant pas « vu » par l'automate.",
      mission: ["Formuler l'hypothèse la plus probable.", "Indiquer la vérification.", "Rappeler la précaution."],
      correction:
        "Le voyant s'allume à la détection : le capteur fonctionne et détecte bien l'objet. S'il n'est pas vu par l'automate, l'hypothèse la plus probable est une incompatibilité de type de sortie (PNP/NPN) avec l'entrée, ou une erreur de raccordement du fil de signal. Vérification : contrôler le type de sortie du capteur et la compatibilité de l'entrée automate, ainsi que le câblage du signal. Le câblage se corrige hors tension, après consignation, dans les limites de son habilitation.",
    },
    memo: ["3 fils : + / − / signal", "PNP ou NPN", "Entrée compatible", "Câbler hors tension"],
    resume:
      "Un capteur se raccorde par ses fils d'alimentation et de signal, avec une sortie PNP ou NPN à rendre compatible avec l'entrée automate ; le bon choix combine type, portée, matière et raccordement.",
    quizIds: ["aut61", "aut62", "aut63", "aut64", "aut65"],
    verification: {
      question: "Pourquoi doit-on vérifier le type de sortie (PNP/NPN) d'un capteur ?",
      options: ["Pour la couleur du boîtier", "Pour qu'il soit compatible avec l'entrée de l'automate", "Pour mesurer la température", "Cela n'a aucune importance"],
      correct: 1,
      explanation: "L'entrée de l'automate doit être compatible avec le type de sortie du capteur (PNP ou NPN), sinon le signal n'est pas correctement lu.",
    },
    exercice: {
      enonce:
        "On doit détecter sans contact la présence de bouteilles en plastique sur un convoyeur, à environ 30 cm. Choisissez un capteur et précisez un point de raccordement à vérifier.",
      consignes: [
        "Choisis un type de capteur adapté.",
        "Justifie par la matière et la distance.",
        "Cite un point de raccordement à vérifier.",
      ],
      criteres: [
        "J'ai choisi un capteur adapté (photoélectrique).",
        "J'ai justifié par le plastique et la distance de 30 cm.",
        "J'ai cité la compatibilité PNP/NPN ou le câblage.",
      ],
      correction:
        "Le plastique n'est pas détecté par un inductif, et 30 cm dépasse la portée usuelle d'un capacitif : on choisit un détecteur photoélectrique, qui détecte la plupart des objets à grande distance. Au raccordement, on vérifie la compatibilité du type de sortie (PNP/NPN) avec l'entrée de l'automate et le bon câblage (alimentation et signal), le tout réalisé hors tension après consignation.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 3 — ACTIONNEURS ET PRÉACTIONNEURS
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block3Lessons: Lesson[] = [
  {
    id: "5-14",
    title: "Qu'est-ce qu'un actionneur ?",
    durationMinutes: 26,
    objectifs: [
      "Définir un actionneur et son rôle dans la chaîne d'énergie.",
      "Citer les grandes familles d'actionneurs et l'énergie qu'ils utilisent.",
    ],
    simple:
      "Un actionneur est l'organe qui agit : il transforme une énergie reçue (électrique, pneumatique, hydraulique) en une action utile, le plus souvent un mouvement. Le moteur fait tourner, le vérin pousse ou tire, la résistance chauffe.",
    vocab: [
      ["Actionneur", "Organe qui transforme une énergie en action (mouvement, chaleur…)."],
      ["Énergie électrique", "Énergie utilisée par les moteurs, résistances, électro-aimants."],
      ["Énergie pneumatique", "Air comprimé utilisé par les vérins et moteurs pneumatiques."],
      ["Énergie hydraulique", "Huile sous pression utilisée pour de gros efforts (vérins hydrauliques)."],
      ["Effecteur", "Élément en bout de chaîne qui réalise le travail final (pince, tapis…)."],
    ],
    example:
      "Sur un poste automatisé, un moteur (actionneur électrique) entraîne un tapis, un vérin (actionneur pneumatique) pousse les pièces, et une résistance (actionneur électrique) chauffe une colle. Chacun transforme une énergie en action.",
    schema: "energy-info-chains",
    ascii: "ENERGIE (elec / pneu / hydro) → ACTIONNEUR → ACTION\nmoteur = rotation · verin = translation · resistance = chaleur",
    retenir: [
      "L'actionneur transforme une énergie reçue en action utile.",
      "Familles : électrique (moteur, résistance), pneumatique (vérin), hydraulique (vérin de forte puissance).",
      "L'actionneur est le maillon « agir » de la chaîne d'énergie.",
      "L'effecteur, en bout de chaîne, réalise le travail final.",
    ],
    erreurs: [
      "Confondre actionneur (agit) et capteur (informe).",
      "Confondre actionneur (agit) et préactionneur (distribue l'énergie).",
      "Oublier que l'énergie de l'actionneur doit être adaptée au besoin (effort, vitesse).",
    ],
    astucesPro: [
      "On identifie l'énergie de chaque actionneur pour savoir quoi consigner.",
      "Le choix de l'énergie dépend de l'effort, de la vitesse et de l'environnement.",
    ],
    diagnostic: [
      "Identifier l'actionneur concerné et son énergie.",
      "Vérifier que l'énergie arrive bien à l'actionneur.",
      "Distinguer un défaut d'énergie d'un défaut de l'actionneur lui-même.",
    ],
    depannage: [
      "Contrôler l'arrivée d'énergie (électrique, pneumatique) à l'actionneur.",
      "Vérifier l'actionneur lui-même si l'énergie est présente.",
      "Respecter la consignation de toutes les énergies avant tout accès.",
    ],
    securite: [
      "Chaque énergie d'actionneur (électrique, pneumatique, hydraulique) doit être consignée avant intervention.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur une machine, une pièce n'est plus poussée par le vérin, alors que le tapis avance normalement.",
      mission: ["Identifier l'actionneur en cause.", "Nommer son énergie.", "Indiquer une première vérification."],
      correction:
        "L'actionneur en cause est le vérin (le tapis, entraîné par un moteur, fonctionne). Son énergie est pneumatique (air comprimé). Première vérification : contrôler l'arrivée d'air comprimé au vérin et son préactionneur (distributeur), puis, si l'air est présent, le vérin lui-même. Avant tout accès, on consigne les énergies concernées, car un vérin peut se déplacer brusquement.",
    },
    memo: ["Actionneur = agit", "Transforme une énergie", "Moteur / vérin / résistance", "≠ capteur, ≠ préactionneur"],
    resume:
      "L'actionneur transforme une énergie (électrique, pneumatique, hydraulique) en action utile ; c'est le maillon « agir » de la chaîne d'énergie.",
    quizIds: ["aut66", "aut67", "aut68", "aut69", "aut70"],
    verification: {
      question: "Quel est le rôle d'un actionneur ?",
      options: ["Détecter une information", "Transformer une énergie en action", "Distribuer l'énergie", "Programmer le cycle"],
      correct: 1,
      explanation: "L'actionneur transforme une énergie reçue en action utile (mouvement, chaleur). Le capteur informe, le préactionneur distribue.",
    },
    exercice: {
      enonce:
        "Associez chaque actionneur à son énergie et à son action : (a) moteur, (b) vérin pneumatique, (c) résistance chauffante.",
      consignes: [
        "Indique l'énergie de chacun.",
        "Indique l'action produite.",
        "Rappelle la différence avec un préactionneur.",
      ],
      criteres: [
        "(a) électrique → rotation, (b) pneumatique → translation, (c) électrique → chaleur.",
        "J'ai indiqué énergie et action.",
        "J'ai rappelé que le préactionneur distribue, l'actionneur agit.",
      ],
      correction:
        "(a) moteur : énergie électrique, action = rotation. (b) vérin pneumatique : énergie pneumatique (air comprimé), action = translation (pousser/tirer). (c) résistance chauffante : énergie électrique, action = production de chaleur. L'actionneur agit, tandis que le préactionneur (contacteur, distributeur) se contente de lui distribuer l'énergie sur ordre de la commande.",
    },
  },
  {
    id: "5-15",
    title: "Le préactionneur",
    durationMinutes: 26,
    objectifs: [
      "Expliquer le rôle d'un préactionneur entre la commande et l'actionneur.",
      "Citer les préactionneurs courants selon l'énergie.",
    ],
    simple:
      "Entre la partie commande et l'actionneur, il y a le préactionneur. La commande envoie un petit signal (faible puissance) ; le préactionneur, lui, distribue la forte énergie vers l'actionneur. Le contacteur le fait pour l'électricité, le distributeur pour l'air comprimé.",
    vocab: [
      ["Préactionneur", "Organe qui distribue l'énergie de puissance vers l'actionneur sur ordre de la commande."],
      ["Contacteur", "Préactionneur électrique : il alimente le moteur (vu au module 3)."],
      ["Distributeur", "Préactionneur pneumatique : il envoie l'air comprimé vers le vérin."],
      ["Relais", "Préactionneur pour de faibles puissances, ou relais de commande."],
      ["Distribuer", "Autoriser, couper ou orienter l'énergie vers l'actionneur."],
    ],
    example:
      "La commande envoie un signal 24 V à la bobine d'un contacteur : le contacteur (préactionneur) ferme alors le circuit de puissance et alimente le moteur (actionneur). Pour un vérin, c'est un distributeur qui joue ce rôle avec l'air comprimé.",
    schema: "command-power-circuit",
    ascii: "COMMANDE (petit signal) → PREACTIONNEUR (distribue la puissance) → ACTIONNEUR\ncontacteur (elec) · distributeur (pneu) · relais (faible puissance)",
    retenir: [
      "Le préactionneur distribue la puissance vers l'actionneur sur ordre de la commande.",
      "La commande fournit un petit signal ; le préactionneur commute la forte énergie.",
      "Contacteur = préactionneur électrique ; distributeur = préactionneur pneumatique.",
      "Sans préactionneur, la commande ne pourrait pas piloter de gros actionneurs.",
    ],
    erreurs: [
      "Confondre préactionneur (distribue) et actionneur (agit).",
      "Croire que la commande alimente directement le moteur ou le vérin.",
      "Oublier le préactionneur lors du diagnostic d'un défaut d'action.",
    ],
    astucesPro: [
      "On vérifie toujours le préactionneur entre la commande et l'actionneur lors d'un défaut d'action.",
      "Un préactionneur reçoit un ordre : on contrôle d'abord la présence de cet ordre.",
    ],
    diagnostic: [
      "Vérifier que la commande envoie bien l'ordre au préactionneur.",
      "Contrôler que le préactionneur distribue l'énergie vers l'actionneur.",
      "Distinguer un défaut d'ordre, de préactionneur ou d'actionneur.",
    ],
    depannage: [
      "Contrôler l'ordre reçu par le préactionneur (bobine, pilote).",
      "Vérifier que le préactionneur commute (contacts, tiroir du distributeur).",
      "Respecter la consignation avant tout accès.",
    ],
    securite: [
      "Le préactionneur commute une énergie de puissance : on consigne avant d'intervenir.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "La commande envoie l'ordre de démarrer un moteur, mais le moteur ne tourne pas.",
      mission: ["Nommer le préactionneur concerné.", "Indiquer l'ordre des contrôles.", "Rappeler la précaution."],
      correction:
        "Le préactionneur concerné est le contacteur. Ordre des contrôles : vérifier que la commande envoie bien l'ordre à la bobine du contacteur, puis que le contacteur commute (contacts principaux fermés), et enfin que le moteur (actionneur) est alimenté et fonctionne. On distingue ainsi un défaut d'ordre (commande), de préactionneur (contacteur) ou d'actionneur (moteur). Les contrôles nécessitant un accès se font après consignation, dans les limites de son habilitation.",
    },
    memo: ["Préactionneur = distribue", "Commande = petit signal", "Contacteur (élec) / distributeur (pneu)", "Contrôler l'ordre reçu"],
    resume:
      "Le préactionneur distribue la puissance vers l'actionneur sur ordre de la commande ; contacteur pour l'électricité, distributeur pour l'air comprimé.",
    quizIds: ["aut71", "aut72", "aut73", "aut74", "aut75"],
    verification: {
      question: "Quel est le rôle du préactionneur ?",
      options: ["Détecter une information", "Distribuer la puissance vers l'actionneur sur ordre de la commande", "Programmer le cycle", "Réaliser le travail final"],
      correct: 1,
      explanation: "Le préactionneur (contacteur, distributeur) distribue l'énergie de puissance vers l'actionneur, à partir du petit signal de la commande.",
    },
    exercice: {
      enonce:
        "Expliquez la chaîne commande → préactionneur → actionneur pour un moteur, puis pour un vérin.",
      consignes: [
        "Décris la chaîne pour un moteur.",
        "Décris la chaîne pour un vérin.",
        "Nomme le préactionneur dans chaque cas.",
      ],
      criteres: [
        "Moteur : commande → contacteur → moteur.",
        "Vérin : commande → distributeur → vérin.",
        "J'ai bien identifié le préactionneur.",
      ],
      correction:
        "Pour un moteur : la commande envoie un petit signal à la bobine du contacteur (préactionneur), qui ferme le circuit de puissance et alimente le moteur (actionneur). Pour un vérin : la commande envoie un signal au distributeur (préactionneur), qui envoie l'air comprimé vers le vérin (actionneur) pour le faire sortir ou rentrer. Dans les deux cas, le préactionneur distribue la puissance sur ordre de la commande.",
    },
  },
  {
    id: "5-16",
    title: "Les actionneurs électriques",
    durationMinutes: 26,
    objectifs: [
      "Citer les principaux actionneurs électriques et leur action.",
      "Relier ces actionneurs aux notions du module 3.",
    ],
    simple:
      "Les actionneurs électriques transforment l'électricité en action. Le moteur produit un mouvement de rotation, la résistance chauffante produit de la chaleur, l'électro-aimant produit une force ou un mouvement court (comme la bobine d'un contacteur ou d'un distributeur).",
    vocab: [
      ["Moteur", "Actionneur électrique qui produit une rotation (vu au module 3)."],
      ["Résistance chauffante", "Actionneur qui transforme l'électricité en chaleur (effet Joule)."],
      ["Électro-aimant", "Bobine qui, alimentée, crée une force magnétique (mouvement court)."],
      ["Effet Joule", "Production de chaleur par le passage du courant dans une résistance."],
      ["Rotation", "Mouvement produit par un moteur."],
    ],
    example:
      "Dans un four automatisé : un moteur (actionneur) entraîne un ventilateur, des résistances chauffantes (actionneurs) montent en température, et l'électro-aimant du distributeur pilote un vérin de porte. Tous sont des actionneurs électriques ou pilotés électriquement.",
    schema: "control-circuit",
    ascii: "ELECTRICITE → MOTEUR (rotation)\n            → RESISTANCE (chaleur, effet Joule)\n            → ELECTRO-AIMANT (force / mouvement court)",
    retenir: [
      "Le moteur produit une rotation (détaillé au module 3).",
      "La résistance chauffante produit de la chaleur par effet Joule.",
      "L'électro-aimant crée une force magnétique (bobine de contacteur, de distributeur).",
      "Ces actionneurs sont pilotés par des préactionneurs (contacteur, relais).",
    ],
    erreurs: [
      "Oublier que la bobine d'un contacteur ou d'un distributeur est un électro-aimant.",
      "Confondre l'actionneur électrique et son préactionneur.",
      "Négliger l'échauffement normal de certains actionneurs (résistances).",
    ],
    astucesPro: [
      "Les notions du module 3 (moteurs, protections) s'appliquent directement aux actionneurs électriques.",
      "Une résistance chauffante se contrôle aussi par sa continuité (hors tension).",
    ],
    diagnostic: [
      "Identifier le type d'actionneur électrique et son action attendue.",
      "Vérifier son alimentation via son préactionneur.",
      "Contrôler l'actionneur lui-même (continuité d'une résistance, état d'un moteur).",
    ],
    depannage: [
      "Vérifier l'alimentation et le préactionneur.",
      "Contrôler l'actionneur (moteur, résistance) hors tension après consignation.",
      "Appliquer les méthodes du module 3 pour les moteurs.",
    ],
    securite: [
      "Les actionneurs électriques relèvent des règles de sécurité électrique du module 3.",
      "On consigne avant tout contrôle nécessitant un accès.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Dans un four automatisé, la température ne monte plus alors que le ventilateur tourne.",
      mission: ["Identifier l'actionneur en cause.", "Indiquer un contrôle simple.", "Rappeler la précaution."],
      correction:
        "L'actionneur en cause est la résistance chauffante (le moteur du ventilateur, lui, fonctionne). Contrôle simple : après consignation, vérifier la continuité de la résistance (une résistance coupée ne chauffe plus) et son alimentation via son préactionneur (contacteur). On applique les règles de sécurité électrique du module 3 : consignation et vérification d'absence de tension avant le contrôle, dans les limites de son habilitation.",
    },
    memo: ["Moteur = rotation", "Résistance = chaleur (Joule)", "Électro-aimant = force", "Voir module 3 pour les moteurs"],
    resume:
      "Les actionneurs électriques transforment l'électricité en rotation (moteur), en chaleur (résistance) ou en force (électro-aimant) ; ils prolongent les notions du module 3.",
    quizIds: ["aut76", "aut77", "aut78", "aut79", "aut80"],
    verification: {
      question: "Quel actionneur électrique produit de la chaleur ?",
      options: ["Le moteur", "La résistance chauffante", "L'électro-aimant", "Le capteur"],
      correct: 1,
      explanation: "La résistance chauffante transforme l'électricité en chaleur par effet Joule. Le moteur produit une rotation, l'électro-aimant une force.",
    },
    exercice: {
      enonce:
        "Citez trois actionneurs électriques et l'action de chacun, puis indiquez lequel relève directement du module 3.",
      consignes: [
        "Cite trois actionneurs électriques.",
        "Donne l'action de chacun.",
        "Indique celui détaillé au module 3.",
      ],
      criteres: [
        "J'ai cité moteur, résistance, électro-aimant.",
        "J'ai donné l'action de chacun.",
        "J'ai indiqué le moteur (module 3).",
      ],
      correction:
        "Trois actionneurs électriques : le moteur (produit une rotation), la résistance chauffante (produit de la chaleur par effet Joule) et l'électro-aimant (produit une force ou un mouvement court, comme la bobine d'un contacteur ou d'un distributeur). Le moteur est détaillé au module 3 (constitution, couplage, démarrage, protection), dont les notions s'appliquent directement ici.",
    },
  },
  {
    id: "5-17",
    title: "Le vérin pneumatique",
    durationMinutes: 30,
    objectifs: [
      "Distinguer un vérin simple effet d'un vérin double effet.",
      "Expliquer comment l'air comprimé fait sortir et rentrer la tige.",
    ],
    simple:
      "Le vérin pneumatique transforme l'air comprimé en un mouvement de translation : la tige sort ou rentre. Le vérin simple effet n'a qu'une entrée d'air et revient grâce à un ressort. Le vérin double effet reçoit l'air des deux côtés : l'air pousse d'un côté pour sortir, de l'autre pour rentrer.",
    vocab: [
      ["Vérin", "Actionneur pneumatique qui produit un mouvement de translation (tige)."],
      ["Simple effet", "Une seule entrée d'air ; le retour se fait par un ressort."],
      ["Double effet", "Deux entrées d'air : l'air fait sortir puis rentrer la tige."],
      ["Tige", "Partie mobile du vérin qui sort et rentre pour agir."],
      ["Chambre", "Volume de chaque côté du piston, alimenté ou mis à l'échappement."],
    ],
    example:
      "Un vérin double effet pousse des cartons sur un convoyeur : quand le distributeur envoie l'air dans la chambre arrière, la tige sort et pousse le carton ; quand il envoie l'air dans la chambre avant, la tige rentre. L'autre chambre est alors à l'échappement.",
    schema: "pneumatic-symbols",
    illustrations: ["pneumatic-cylinder"],
    ascii: "SIMPLE EFFET : 1 entree d'air → sort ; ressort → rentre\nDOUBLE EFFET : air cote arriere → SORT ; air cote avant → RENTRE\n(l'autre chambre est a l'echappement)",
    retenir: [
      "Le vérin transforme l'air comprimé en mouvement de translation.",
      "Simple effet : une entrée d'air, retour par ressort.",
      "Double effet : air des deux côtés, pour sortir et pour rentrer.",
      "La chambre alimentée pousse le piston ; l'autre est à l'échappement.",
    ],
    erreurs: [
      "Confondre simple effet (ressort de rappel) et double effet (air des deux côtés).",
      "Intervenir sur un vérin sans purger la pression résiduelle.",
      "Oublier qu'un vérin peut sortir brusquement à la remise en pression.",
    ],
    astucesPro: [
      "On repère quelle chambre est alimentée pour comprendre le sens du mouvement.",
      "Avant intervention, on consigne l'air ET on purge la pression résiduelle.",
    ],
    diagnostic: [
      "Vérifier l'alimentation en air et le distributeur qui pilote le vérin.",
      "Contrôler que la bonne chambre est alimentée selon le mouvement attendu.",
      "Rechercher une fuite ou un grippage si le mouvement est lent ou absent.",
    ],
    depannage: [
      "Contrôler l'arrivée d'air et le distributeur.",
      "Rechercher les fuites et l'état des joints du vérin.",
      "Consigner l'air et purger la pression avant tout démontage.",
    ],
    securite: [
      "L'air comprimé reste dangereux : un vérin peut se déplacer brusquement.",
      "On consigne l'énergie pneumatique et on purge la pression avant d'intervenir.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un vérin double effet sort normalement mais rentre très lentement.",
      mission: ["Formuler deux hypothèses.", "Indiquer les contrôles.", "Rappeler la précaution."],
      correction:
        "Deux hypothèses : un échappement de la chambre avant qui se fait mal (silencieux/échappement encrassé ou réglage de débit trop fermé), ou une fuite/un grippage qui freine le retour. Contrôles : vérifier le réglage des débits (limiteurs), l'état de l'échappement du distributeur, et rechercher une fuite ou un point dur. Avant tout démontage, on consigne l'air comprimé et on purge la pression résiduelle, car le vérin peut bouger brusquement.",
    },
    memo: ["Air comprimé → translation", "Simple effet = ressort", "Double effet = air 2 côtés", "Purger avant d'intervenir"],
    resume:
      "Le vérin pneumatique transforme l'air comprimé en translation ; simple effet (retour par ressort) ou double effet (air des deux côtés), la chambre alimentée pousse la tige.",
    quizIds: ["aut81", "aut82", "aut83", "aut84", "aut85"],
    verification: {
      question: "Comment un vérin double effet fait-il rentrer sa tige ?",
      options: ["Grâce à un ressort", "En envoyant l'air comprimé dans la chambre opposée", "En coupant l'électricité", "Il ne rentre jamais"],
      correct: 1,
      explanation: "Le vérin double effet reçoit l'air des deux côtés : pour rentrer, l'air est envoyé dans la chambre avant, l'arrière étant à l'échappement.",
    },
    exercice: {
      enonce:
        "Expliquez la différence entre un vérin simple effet et un vérin double effet, et comment chacun fait rentrer la tige.",
      consignes: [
        "Décris le vérin simple effet.",
        "Décris le vérin double effet.",
        "Explique le retour de la tige dans chaque cas.",
      ],
      criteres: [
        "Simple effet : une entrée d'air, retour par ressort.",
        "Double effet : air des deux côtés.",
        "J'ai expliqué le retour dans chaque cas.",
      ],
      correction:
        "Le vérin simple effet n'a qu'une entrée d'air : l'air fait sortir la tige, et le retour se fait grâce à un ressort de rappel quand on coupe l'air. Le vérin double effet a deux entrées d'air : l'air envoyé d'un côté fait sortir la tige, l'air envoyé de l'autre côté la fait rentrer (l'autre chambre étant à l'échappement). Le double effet permet donc de commander activement les deux sens.",
    },
  },
  {
    id: "5-18",
    title: "Le distributeur pneumatique",
    durationMinutes: 28,
    objectifs: [
      "Expliquer le rôle du distributeur comme préactionneur du vérin.",
      "Lire une désignation simple (nombre d'orifices / de positions) et le mode de pilotage.",
    ],
    simple:
      "Le distributeur est le préactionneur du vérin : il oriente l'air comprimé vers l'une ou l'autre chambre. On le désigne par son nombre d'orifices et de positions (par exemple 5/2). Il est piloté par la commande, souvent par un électro-aimant (électrodistributeur).",
    vocab: [
      ["Distributeur", "Préactionneur qui oriente l'air comprimé vers le vérin."],
      ["Orifice", "Voie de raccordement du distributeur (alimentation, utilisation, échappement)."],
      ["Position", "État du distributeur ; un 5/2 a 2 positions (tige sort / tige rentre)."],
      ["Électrodistributeur", "Distributeur piloté par un électro-aimant (signal électrique de la commande)."],
      ["Pilotage", "Moyen d'actionner le distributeur : électrique, manuel, pneumatique."],
    ],
    example:
      "Un distributeur 5/2 pilote un vérin double effet : dans une position, il envoie l'air dans la chambre arrière (tige sort) ; dans l'autre, dans la chambre avant (tige rentre). Piloté par un électro-aimant, il obéit au signal de la commande.",
    schema: "pneumatic-symbols",
    ascii: "DISTRIBUTEUR 5/2 : 5 orifices, 2 positions\nposition 1 → air chambre arriere (tige sort)\nposition 2 → air chambre avant (tige rentre)\npilotage : electro-aimant (electrodistributeur)",
    retenir: [
      "Le distributeur oriente l'air vers l'une ou l'autre chambre du vérin.",
      "La désignation (ex : 5/2) indique le nombre d'orifices et de positions.",
      "Un 5/2 pilote un vérin double effet (sortir / rentrer).",
      "L'électrodistributeur est piloté par un électro-aimant, sur signal de la commande.",
    ],
    erreurs: [
      "Confondre distributeur (préactionneur) et vérin (actionneur).",
      "Oublier que le distributeur reçoit un ordre : on contrôle d'abord ce signal.",
      "Mal interpréter la désignation (orifices / positions).",
    ],
    astucesPro: [
      "Un électrodistributeur a souvent une commande manuelle auxiliaire : pratique pour tester sans automate.",
      "On vérifie le signal de pilotage avant de suspecter le distributeur lui-même.",
    ],
    diagnostic: [
      "Vérifier que la commande envoie bien le signal de pilotage.",
      "Contrôler que le distributeur commute (tiroir) et oriente l'air.",
      "Distinguer un défaut de signal, de distributeur ou de vérin.",
    ],
    depannage: [
      "Tester le pilotage (électro-aimant, commande manuelle auxiliaire).",
      "Contrôler l'alimentation en air et l'état du distributeur.",
      "Consigner l'air et purger la pression avant tout démontage.",
    ],
    securite: [
      "Agir sur la commande manuelle d'un distributeur peut déplacer le vérin : on s'assure que la zone est sûre.",
      "On consigne l'air et on purge la pression avant intervention.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un vérin ne bouge plus ; l'air comprimé est bien présent à l'entrée du distributeur.",
      mission: ["Indiquer ce que l'on teste d'abord.", "Citer une astuce de test.", "Rappeler la précaution."],
      correction:
        "L'air étant présent, on teste d'abord le pilotage du distributeur : la commande envoie-t-elle bien le signal à l'électro-aimant ? Astuce : beaucoup d'électrodistributeurs ont une commande manuelle auxiliaire qui permet de forcer la commutation pour vérifier si le vérin bouge, indépendamment de l'automate. On distingue ainsi un défaut de signal (commande) d'un défaut du distributeur ou du vérin. Attention : forcer la commande déplace le vérin ; on s'assure que la zone est dégagée et on respecte les précautions.",
    },
    memo: ["Distributeur = préactionneur du vérin", "5/2 = 5 orifices, 2 positions", "Électrodistributeur = piloté élec.", "Tester le signal de pilotage"],
    resume:
      "Le distributeur oriente l'air comprimé vers les chambres du vérin ; désigné par ses orifices et positions (ex : 5/2), il est souvent piloté électriquement par la commande.",
    quizIds: ["aut86", "aut87", "aut88", "aut89", "aut90"],
    verification: {
      question: "Quel est le rôle du distributeur pneumatique ?",
      options: ["Détecter la position de la tige", "Orienter l'air comprimé vers les chambres du vérin", "Produire l'air comprimé", "Chauffer l'air"],
      correct: 1,
      explanation: "Le distributeur est le préactionneur du vérin : il oriente l'air comprimé vers l'une ou l'autre chambre selon l'ordre de la commande.",
    },
    exercice: {
      enonce:
        "Expliquez ce que signifie « distributeur 5/2 » et comment il pilote un vérin double effet.",
      consignes: [
        "Explique le « 5 » et le « 2 ».",
        "Décris les deux positions.",
        "Indique le mode de pilotage courant.",
      ],
      criteres: [
        "5 = orifices, 2 = positions.",
        "J'ai décrit les deux positions (sortir / rentrer).",
        "J'ai cité le pilotage par électro-aimant.",
      ],
      correction:
        "« 5/2 » signifie 5 orifices et 2 positions. Dans une position, le distributeur envoie l'air dans la chambre arrière du vérin (la tige sort) tandis que l'autre chambre est à l'échappement ; dans l'autre position, il envoie l'air dans la chambre avant (la tige rentre). Il est souvent piloté par un électro-aimant (électrodistributeur), qui commute sur signal de la partie commande.",
    },
  },
  {
    id: "5-19",
    title: "Synthèse actionneurs, préactionneurs et diagnostic",
    durationMinutes: 28,
    objectifs: [
      "Relier commande, préactionneur et actionneur dans la chaîne d'énergie.",
      "Diagnostiquer méthodiquement un défaut d'action.",
    ],
    simple:
      "Ce chapitre rassemble le bloc : la commande donne un ordre, le préactionneur distribue l'énergie, l'actionneur agit. Face à un défaut d'action, on remonte cette chaîne : l'ordre est-il présent ? le préactionneur commute-t-il ? l'énergie arrive-t-elle ? l'actionneur est-il bon ?",
    vocab: [
      ["Chaîne commande-action", "Commande → préactionneur → actionneur → action."],
      ["Défaut d'action", "L'action attendue ne se produit pas (moteur, vérin qui ne bouge pas)."],
      ["Ordre", "Signal de la commande vers le préactionneur."],
      ["Distribution", "Rôle du préactionneur qui envoie l'énergie à l'actionneur."],
      ["Localisation", "Situer le défaut : ordre, préactionneur, énergie ou actionneur."],
    ],
    example:
      "Un vérin ne sort pas : on vérifie l'ordre de la commande au distributeur, la commutation du distributeur, la présence d'air, puis l'état du vérin. La même logique s'applique à un moteur avec son contacteur.",
    schema: "command-power-circuit",
    ascii: "COMMANDE (ordre) → PREACTIONNEUR (distribue) → ACTIONNEUR (agit)\ndiagnostic : ordre ? commutation ? energie ? actionneur ?",
    retenir: [
      "La chaîne : commande → préactionneur → actionneur → action.",
      "Face à un défaut d'action, on remonte cette chaîne dans l'ordre.",
      "On vérifie : l'ordre, la commutation du préactionneur, l'énergie, puis l'actionneur.",
      "La même logique s'applique en électrique (contacteur) et en pneumatique (distributeur).",
    ],
    erreurs: [
      "Accuser directement l'actionneur sans vérifier l'ordre et le préactionneur.",
      "Oublier de contrôler la présence de l'énergie (électrique ou pneumatique).",
      "Intervenir sans consigner toutes les énergies concernées.",
    ],
    astucesPro: [
      "On teste le préactionneur (commande manuelle du distributeur, contrôle de la bobine) pour isoler le défaut.",
      "On note le dernier maillon correct et le premier défaillant.",
    ],
    diagnostic: [
      "Vérifier l'ordre de la commande vers le préactionneur.",
      "Contrôler la commutation du préactionneur et l'arrivée d'énergie.",
      "Contrôler l'actionneur si tout le reste est correct.",
    ],
    depannage: [
      "Localiser le maillon défaillant (ordre, préactionneur, énergie, actionneur).",
      "Corriger la cause, puis contrôler l'action.",
      "Consigner toutes les énergies et purger les pressions avant tout accès.",
    ],
    securite: [
      "Un actionneur peut se déplacer brusquement : on consigne et on purge avant d'intervenir.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un moteur d'un poste automatisé ne démarre pas ; un vérin voisin, lui, fonctionne.",
      mission: ["Décrire la démarche pour le moteur.", "Citer les maillons à contrôler.", "Rappeler la précaution."],
      correction:
        "Le vérin fonctionne, donc la commande et l'air sont a priori corrects sur cette partie. Pour le moteur, on remonte la chaîne : la commande envoie-t-elle l'ordre à la bobine du contacteur (préactionneur) ? le contacteur commute-t-il ? le moteur est-il alimenté ? le moteur lui-même est-il bon (voir module 3) ? On localise ainsi le maillon défaillant. Les contrôles nécessitant un accès se font après consignation de toutes les énergies, dans les limites de son habilitation.",
    },
    memo: ["Commande → préactionneur → actionneur", "Remonter la chaîne", "Ordre ? commutation ? énergie ? actionneur ?", "Consigner et purger"],
    resume:
      "Diagnostiquer un défaut d'action, c'est remonter la chaîne commande → préactionneur → actionneur, en vérifiant à chaque maillon l'ordre, la commutation, l'énergie et l'actionneur.",
    quizIds: ["aut91", "aut92", "aut93", "aut94", "aut95"],
    verification: {
      question: "Face à un défaut d'action, dans quel ordre remonte-t-on la chaîne ?",
      options: ["Actionneur, puis rien d'autre", "Ordre de la commande, préactionneur, énergie, actionneur", "Au hasard", "Uniquement l'énergie"],
      correct: 1,
      explanation: "On vérifie successivement l'ordre de la commande, la commutation du préactionneur, l'arrivée d'énergie, puis l'actionneur.",
    },
    exercice: {
      enonce:
        "Un vérin ne sort pas alors que l'automate donne l'ordre. Décrivez la démarche de diagnostic en remontant la chaîne.",
      consignes: [
        "Donne les maillons à vérifier dans l'ordre.",
        "Indique un test possible sur le préactionneur.",
        "Rappelle la précaution de sécurité.",
      ],
      criteres: [
        "J'ai vérifié ordre, distributeur, air, vérin.",
        "J'ai cité un test (commande manuelle du distributeur).",
        "J'ai rappelé la consignation et la purge.",
      ],
      correction:
        "On remonte la chaîne : l'automate envoie-t-il bien l'ordre à l'électro-aimant du distributeur ? le distributeur commute-t-il (on peut tester avec sa commande manuelle auxiliaire) ? l'air comprimé arrive-t-il ? le vérin est-il libre (pas de grippage ni de fuite) ? On localise ainsi le maillon défaillant. Avant tout démontage, on consigne l'air comprimé et on purge la pression résiduelle, car le vérin peut se déplacer brusquement.",
    },
  },
];

/* ---------------------------------------------------------------
   BLOC 5 — L'AUTOMATE PROGRAMMABLE INDUSTRIEL (API)
   Publication progressive : chapitres ajoutés et validés un par un.
   --------------------------------------------------------------- */

const block5Lessons: Lesson[] = [
  {
    id: "5-20",
    title: "Qu'est-ce qu'un automate programmable (API) ?",
    durationMinutes: 28,
    objectifs: [
      "Définir l'automate programmable et son rôle dans la partie commande.",
      "Comprendre l'apport de la logique programmée par rapport à la logique câblée.",
    ],
    simple:
      "L'automate programmable industriel (API) est le cerveau de la partie commande. Il lit les informations des capteurs, exécute un programme, et commande les préactionneurs. Son grand avantage : on modifie son comportement en changeant le programme, sans recâbler l'installation.",
    vocab: [
      ["API", "Automate Programmable Industriel : appareil programmable qui pilote un système automatisé."],
      ["Programme", "Suite d'instructions qui définit le comportement de l'automate."],
      ["Logique câblée", "Comportement défini uniquement par le câblage (relais) : figé, difficile à modifier."],
      ["Logique programmée", "Comportement défini par un programme : modifiable sans recâbler."],
      ["Partie commande", "Ensemble qui décide et pilote ; l'API en est le cœur."],
    ],
    example:
      "Sur une machine, pour changer une temporisation ou une condition de marche, on modifie le programme de l'API depuis un ordinateur, au lieu de rajouter ou déplacer des relais et des fils. Le même automate peut piloter des machines très différentes selon son programme.",
    schema: "po-pc-structure",
    ascii: "API = cerveau de la partie commande\nlit CAPTEURS → execute un PROGRAMME → commande PREACTIONNEURS\navantage : on modifie le PROGRAMME, pas le cablage",
    retenir: [
      "L'API est le cœur programmable de la partie commande.",
      "Il lit les capteurs, exécute un programme, commande les préactionneurs.",
      "La logique programmée se modifie sans recâbler (contrairement à la logique câblée).",
      "Un même automate peut piloter des systèmes différents selon son programme.",
    ],
    erreurs: [
      "Croire qu'il faut recâbler pour changer le comportement : on modifie le programme.",
      "Confondre l'API (décide) avec les actionneurs (agissent).",
      "Penser que l'API alimente directement la puissance : il commande des préactionneurs.",
    ],
    astucesPro: [
      "Un changement de comportement passe d'abord par le programme, pas par le câblage.",
      "On distingue toujours ce qui relève du programme de ce qui relève du matériel.",
    ],
    diagnostic: [
      "Déterminer si un dysfonctionnement vient du programme ou du matériel (E/S, câblage).",
      "Vérifier que l'API reçoit bien les informations des capteurs.",
      "Contrôler que l'API commande bien les sorties attendues.",
    ],
    depannage: [
      "Distinguer un problème de programme d'un problème de câblage ou d'E/S.",
      "Faire appel à une personne compétente pour toute modification de programme.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Une modification de programme peut changer le comportement de la machine : elle relève d'une personne compétente et suit une procédure.",
      "On consigne avant toute intervention matérielle sur l'installation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "On veut allonger le temps de séchage d'une machine automatisée de 10 à 15 secondes.",
      mission: ["Dire si un recâblage est nécessaire.", "Indiquer où se fait la modification.", "Préciser la précaution."],
      correction:
        "Aucun recâblage n'est nécessaire : la temporisation est gérée par le programme de l'API. La modification se fait dans le programme (changer la valeur de temporisation), à l'aide de l'outil de programmation, par une personne compétente. C'est justement l'avantage de la logique programmée. Toute modification suit une procédure et est validée avant remise en service, la sécurité de la machine étant vérifiée.",
    },
    memo: ["API = cerveau programmable", "Capteurs → programme → préactionneurs", "Modifier le programme, pas le câblage"],
    resume:
      "L'API est le cœur programmable de la partie commande : il lit les capteurs, exécute un programme et commande les préactionneurs ; son comportement se modifie par le programme.",
    quizIds: ["aut96", "aut97", "aut98", "aut99", "aut100"],
    verification: {
      question: "Quel est le grand avantage de l'automate programmable par rapport à la logique câblée ?",
      options: ["Il est moins cher à l'achat", "On modifie son comportement en changeant le programme, sans recâbler", "Il n'a pas besoin de capteurs", "Il agit directement sur la matière"],
      correct: 1,
      explanation: "Avec un API, on change le comportement en modifiant le programme, sans recâbler l'installation comme il le faudrait en logique câblée.",
    },
    exercice: {
      enonce:
        "Expliquez la différence entre logique câblée et logique programmée, avec un exemple d'avantage de l'API.",
      consignes: [
        "Définis la logique câblée.",
        "Définis la logique programmée.",
        "Donne un avantage concret de l'API.",
      ],
      criteres: [
        "J'ai défini la logique câblée (figée par le câblage).",
        "J'ai défini la logique programmée (par programme).",
        "J'ai donné un avantage (modification sans recâblage).",
      ],
      correction:
        "En logique câblée, le comportement est défini uniquement par le câblage (relais) : le modifier demande de recâbler. En logique programmée, le comportement est défini par un programme dans l'API : on le modifie en changeant le programme, sans toucher au câblage. Avantage concret : pour changer une temporisation ou une condition de marche, on modifie le programme depuis un ordinateur, ce qui est rapide et flexible.",
    },
  },
  {
    id: "5-21",
    title: "La structure d'un automate",
    durationMinutes: 28,
    objectifs: [
      "Identifier les grandes parties d'un automate programmable.",
      "Expliquer le rôle de chaque partie.",
    ],
    simple:
      "Un automate se compose de plusieurs parties : une alimentation qui le fait fonctionner, un processeur (l'unité de calcul) associé à une mémoire qui contient le programme, et des modules d'entrées et de sorties qui le relient aux capteurs et aux préactionneurs.",
    vocab: [
      ["Processeur (CPU)", "Unité de calcul qui exécute le programme."],
      ["Mémoire", "Zone qui contient le programme et les données (états, valeurs)."],
      ["Module d'entrées", "Interface qui reçoit les signaux des capteurs."],
      ["Module de sorties", "Interface qui commande les préactionneurs."],
      ["Alimentation", "Fournit l'énergie de fonctionnement à l'automate."],
    ],
    example:
      "Dans une armoire, l'automate se présente souvent en modules côte à côte : le bloc d'alimentation, le processeur au centre, puis les cartes d'entrées (reliées aux capteurs) et de sorties (reliées aux préactionneurs).",
    schema: "plc-structure",
    ascii: "ALIMENTATION | ENTREES (E) → PROCESSEUR + MEMOIRE → SORTIES (S)\ncapteurs → E                              S → preactionneurs",
    retenir: [
      "Alimentation : fournit l'énergie à l'automate.",
      "Processeur (CPU) + mémoire : exécutent et contiennent le programme.",
      "Modules d'entrées : reçoivent les signaux des capteurs.",
      "Modules de sorties : commandent les préactionneurs.",
    ],
    erreurs: [
      "Confondre entrées (venant des capteurs) et sorties (vers les préactionneurs).",
      "Oublier que le programme est dans la mémoire, exécuté par le processeur.",
      "Négliger l'alimentation, dont un défaut arrête tout l'automate.",
    ],
    astucesPro: [
      "On repère les cartes d'entrées et de sorties par leur repérage et leurs voyants.",
      "Un défaut d'alimentation met tout l'automate hors service : on le vérifie en premier.",
    ],
    diagnostic: [
      "Vérifier l'alimentation et l'état général de l'automate.",
      "Localiser la carte d'entrées ou de sorties concernée.",
      "Distinguer un défaut de module d'un défaut de programme.",
    ],
    depannage: [
      "Contrôler l'alimentation de l'automate.",
      "Vérifier la carte E/S concernée et son raccordement.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Les interventions sur l'automate se font hors tension, après consignation.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un automate est totalement éteint, aucun voyant allumé.",
      mission: ["Nommer la partie à contrôler en premier.", "Justifier.", "Rappeler la précaution."],
      correction:
        "La partie à contrôler en premier est l'alimentation : si l'automate est totalement éteint, sans aucun voyant, c'est souvent qu'il n'est plus alimenté (alimentation en défaut, protection déclenchée, câblage). On vérifie donc l'alimentation avant de suspecter le processeur ou les modules. Les contrôles se font hors tension après consignation, dans les limites de son habilitation.",
    },
    memo: ["Alimentation", "Processeur + mémoire", "Entrées (capteurs)", "Sorties (préactionneurs)"],
    resume:
      "Un automate comprend une alimentation, un processeur avec sa mémoire (le programme), et des modules d'entrées (capteurs) et de sorties (préactionneurs).",
    quizIds: ["aut101", "aut102", "aut103", "aut104", "aut105"],
    verification: {
      question: "Quelle partie de l'automate exécute le programme ?",
      options: ["L'alimentation", "Le processeur (CPU)", "Le module de sorties", "Le capteur"],
      correct: 1,
      explanation: "Le processeur (CPU) exécute le programme contenu dans la mémoire. L'alimentation fournit l'énergie ; les modules E/S relient l'automate au terrain.",
    },
    exercice: {
      enonce:
        "Citez les quatre grandes parties d'un automate et le rôle de chacune.",
      consignes: [
        "Cite les quatre parties.",
        "Donne le rôle de chacune.",
        "Précise ce qui relie l'automate au terrain.",
      ],
      criteres: [
        "J'ai cité alimentation, processeur+mémoire, entrées, sorties.",
        "J'ai donné le rôle de chacune.",
        "J'ai indiqué que les modules E/S relient au terrain.",
      ],
      correction:
        "Les quatre grandes parties : l'alimentation (fournit l'énergie à l'automate), le processeur (CPU) associé à la mémoire (exécute et contient le programme), le module d'entrées (reçoit les signaux des capteurs) et le module de sorties (commande les préactionneurs). Ce sont les modules d'entrées et de sorties qui relient l'automate au terrain (capteurs et préactionneurs).",
    },
  },
  {
    id: "5-22",
    title: "Les entrées et les sorties (E/S)",
    durationMinutes: 28,
    objectifs: [
      "Distinguer les entrées et les sorties d'un automate.",
      "Comprendre le repérage des E/S et l'usage des voyants d'état.",
    ],
    simple:
      "Les entrées de l'automate reçoivent les informations des capteurs ; les sorties commandent les préactionneurs. Chaque entrée et chaque sortie porte un repère (une adresse), et un voyant indique souvent son état : c'est très pratique pour diagnostiquer.",
    vocab: [
      ["Entrée (E)", "Borne qui reçoit le signal d'un capteur (ex : détecteur, bouton)."],
      ["Sortie (S)", "Borne qui commande un préactionneur (ex : bobine de contacteur, d'électrodistributeur)."],
      ["Repère / adresse", "Identifiant d'une entrée ou d'une sortie dans l'automate et le programme."],
      ["Voyant d'état", "Témoin lumineux qui indique si une E/S est active (1) ou non (0)."],
      ["E/S TOR / analogique", "Entrées et sorties tout ou rien (0/1) ou analogiques (valeur continue)."],
    ],
    example:
      "Un détecteur de présence est raccordé à l'entrée de l'automate : quand il détecte, le voyant de cette entrée s'allume. Le programme lit cet état et, s'il le décide, active une sortie dont le voyant s'allume aussi, commandant un préactionneur.",
    schema: "plc-structure",
    ascii: "CAPTEURS → ENTREES (E) : voyant 1 = actif\nSORTIES (S) → PREACTIONNEURS : voyant 1 = commande active\nchaque E/S a un REPERE (adresse)",
    retenir: [
      "Les entrées reçoivent les capteurs ; les sorties commandent les préactionneurs.",
      "Chaque E/S a un repère (adresse) utilisé dans le programme.",
      "Un voyant d'état indique si l'E/S est à 1 (actif) ou 0.",
      "Les voyants d'état sont un outil précieux pour diagnostiquer.",
    ],
    erreurs: [
      "Confondre une entrée (venant d'un capteur) et une sortie (vers un préactionneur).",
      "Ignorer les voyants d'état, qui renseignent immédiatement sur l'E/S.",
      "Se tromper de repère entre le programme et le câblage.",
    ],
    astucesPro: [
      "Comparer l'état réel (capteur activé) au voyant d'entrée localise vite un défaut de détection ou de câblage.",
      "Si le voyant de sortie est allumé mais l'actionneur inactif, le défaut est en aval de l'automate.",
    ],
    diagnostic: [
      "Comparer la présence de l'objet au voyant de l'entrée correspondante.",
      "Vérifier si la sortie attendue s'active (voyant) selon le programme.",
      "Situer le défaut en amont (capteur) ou en aval (préactionneur) de l'automate.",
    ],
    depannage: [
      "Contrôler le capteur et son câblage si l'entrée ne s'active pas alors qu'elle le devrait.",
      "Contrôler le préactionneur si la sortie est active mais l'action absente.",
      "Respecter la consignation avant tout accès aux parties actives.",
    ],
    securite: [
      "Forcer une sortie peut déclencher un mouvement : on s'assure que la zone est sûre et on suit la procédure.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un capteur détecte bien un objet (son propre voyant est allumé), mais le voyant de l'entrée correspondante de l'automate reste éteint.",
      mission: ["Situer le défaut.", "Indiquer la vérification.", "Rappeler la précaution."],
      correction:
        "Le capteur fonctionne (son voyant est allumé), mais l'information n'arrive pas à l'automate (voyant d'entrée éteint) : le défaut se situe entre le capteur et l'entrée, c'est-à-dire dans le câblage ou le raccordement (fil coupé, borne desserrée, mauvaise entrée). Vérification : contrôler le câblage du signal jusqu'à la bonne entrée, et la compatibilité électrique. Les contrôles nécessitant un accès se font après consignation, dans les limites de son habilitation.",
    },
    memo: ["Entrées = capteurs", "Sorties = préactionneurs", "Repère + voyant d'état", "Voyants = aide au diagnostic"],
    resume:
      "Les entrées de l'automate reçoivent les capteurs et les sorties commandent les préactionneurs ; repères et voyants d'état facilitent la lecture et le diagnostic.",
    quizIds: ["aut106", "aut107", "aut108", "aut109", "aut110"],
    verification: {
      question: "À quoi sert une sortie d'automate ?",
      options: ["À recevoir un capteur", "À commander un préactionneur", "À alimenter l'automate", "À stocker le programme"],
      correct: 1,
      explanation: "Une sortie commande un préactionneur (bobine de contacteur, d'électrodistributeur). Ce sont les entrées qui reçoivent les capteurs.",
    },
    exercice: {
      enonce:
        "Expliquez comment les voyants d'état des entrées et sorties aident à diagnostiquer, avec un exemple.",
      consignes: [
        "Explique ce qu'indique un voyant d'entrée.",
        "Explique ce qu'indique un voyant de sortie.",
        "Donne un exemple de diagnostic à partir des voyants.",
      ],
      criteres: [
        "J'ai relié le voyant d'entrée à l'état du capteur.",
        "J'ai relié le voyant de sortie à la commande.",
        "J'ai donné un exemple de localisation de défaut.",
      ],
      correction:
        "Un voyant d'entrée allumé signifie que l'automate reçoit bien le signal du capteur (entrée à 1). Un voyant de sortie allumé signifie que l'automate commande le préactionneur (sortie à 1). Exemple : si un objet est présent mais que le voyant d'entrée reste éteint, le défaut est entre le capteur et l'automate (câblage). Si le voyant de sortie est allumé mais l'actionneur inactif, le défaut est en aval (préactionneur, énergie). Les voyants localisent donc rapidement le maillon en cause.",
    },
  },
  {
    id: "5-23",
    title: "Le cycle de l'automate (scrutation)",
    durationMinutes: 28,
    objectifs: [
      "Décrire le cycle de scrutation d'un automate.",
      "Comprendre l'image des entrées et le temps de cycle.",
    ],
    simple:
      "L'automate travaille par cycles très rapides appelés scrutation. À chaque cycle, il lit d'un coup l'état de toutes ses entrées, exécute son programme, puis met à jour ses sorties, et recommence. Ce cycle dure quelques millisecondes.",
    vocab: [
      ["Scrutation", "Cycle répété : lire les entrées, traiter le programme, écrire les sorties."],
      ["Image des entrées", "État des entrées lu au début du cycle et figé pendant le traitement."],
      ["Traitement", "Exécution du programme à partir de l'image des entrées."],
      ["Mise à jour des sorties", "Écriture des sorties selon le résultat du programme."],
      ["Temps de cycle", "Durée d'un cycle de scrutation, généralement quelques millisecondes."],
    ],
    example:
      "Un automate lit l'état d'un détecteur au début du cycle, exécute son programme (par exemple : si détecteur = 1, alors sortie moteur = 1), puis met à jour la sortie. Même si le détecteur change juste après la lecture, ce changement ne sera pris en compte qu'au cycle suivant.",
    schema: "plc-structure",
    illustrations: ["plc-scan-cycle"],
    ascii: "SCRUTATION (en boucle, quelques ms) :\n1. LIRE les entrees (image figee)\n2. TRAITER le programme\n3. ECRIRE les sorties → on recommence",
    retenir: [
      "L'automate fonctionne par cycles de scrutation très rapides.",
      "Il lit d'abord l'image des entrées, figée pour tout le cycle.",
      "Il exécute ensuite le programme, puis met à jour les sorties.",
      "Un changement d'entrée pendant le cycle est pris au cycle suivant.",
    ],
    erreurs: [
      "Croire que l'automate réagit « en continu » : il travaille par cycles.",
      "Oublier que l'image des entrées est figée au début du cycle.",
      "Ignorer le très léger délai lié au temps de cycle.",
    ],
    astucesPro: [
      "Le temps de cycle explique un très léger retard entre une entrée et la sortie correspondante.",
      "Pour des événements très brefs, on vérifie que leur durée dépasse le temps de cycle.",
    ],
    diagnostic: [
      "Tenir compte du cycle pour interpréter le comportement de l'automate.",
      "Vérifier l'état des entrées au moment de leur lecture (voyants).",
      "Distinguer un problème de cycle/programme d'un problème matériel.",
    ],
    depannage: [
      "Vérifier que les signaux d'entrée sont assez longs pour être vus.",
      "Contrôler les voyants d'E/S pour suivre le cheminement de l'information.",
      "Faire appel à une personne compétente pour l'analyse du programme.",
    ],
    securite: [
      "On n'intervient pas sur le programme d'une machine en fonctionnement sans procédure.",
      "On consigne avant toute intervention matérielle.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un capteur détecte un objet très bref, mais l'automate ne réagit jamais.",
      mission: ["Relier le problème au cycle.", "Expliquer la cause probable.", "Proposer une piste."],
      correction:
        "L'automate lit ses entrées une fois par cycle : si l'objet est détecté pendant un temps plus court que le temps de cycle, il peut passer « entre deux lectures » et ne jamais être vu. La cause probable est un signal trop bref par rapport au temps de cycle. Piste : allonger la durée du signal (temporisation matérielle, mémorisation) ou utiliser une entrée rapide prévue pour capter les impulsions courtes. L'analyse fine relève d'une personne compétente.",
    },
    memo: ["Scrutation = lire → traiter → écrire", "Image des entrées figée", "Boucle en quelques ms", "Léger délai normal"],
    resume:
      "L'automate exécute un cycle de scrutation rapide : lire l'image des entrées, traiter le programme, écrire les sorties, puis recommencer.",
    quizIds: ["aut111", "aut112", "aut113", "aut114", "aut115"],
    verification: {
      question: "Dans quel ordre se déroule le cycle de scrutation ?",
      options: ["Écrire les sorties, lire les entrées, traiter", "Lire les entrées, traiter le programme, écrire les sorties", "Traiter, écrire, lire", "Au hasard"],
      correct: 1,
      explanation: "Le cycle de scrutation enchaîne : lire les entrées (image figée), traiter le programme, écrire les sorties, puis recommence.",
    },
    exercice: {
      enonce:
        "Expliquez le cycle de scrutation d'un automate et ce qu'est l'image des entrées.",
      consignes: [
        "Donne les trois étapes du cycle.",
        "Explique l'image des entrées.",
        "Indique la conséquence sur la réactivité.",
      ],
      criteres: [
        "J'ai donné lire → traiter → écrire.",
        "J'ai expliqué l'image figée des entrées.",
        "J'ai indiqué le léger délai lié au temps de cycle.",
      ],
      correction:
        "Le cycle de scrutation comprend trois étapes répétées en boucle : lire les entrées (l'automate en fait une image figée), traiter le programme à partir de cette image, puis écrire les sorties. L'image des entrées est prise au début du cycle et ne change pas pendant le traitement : un changement d'entrée survenu ensuite n'est vu qu'au cycle suivant. Conséquence : l'automate réagit avec un très léger délai, de l'ordre du temps de cycle (quelques millisecondes).",
    },
  },
  {
    id: "5-24",
    title: "Le programme et la logique de commande",
    durationMinutes: 28,
    objectifs: [
      "Comprendre qu'un programme lie des entrées à des sorties par des conditions.",
      "Reconnaître les fonctions logiques de base ET, OU, NON.",
    ],
    simple:
      "Le programme de l'automate définit des conditions : selon l'état des entrées, il décide de l'état des sorties. Ces conditions utilisent des fonctions logiques simples : ET (toutes les conditions), OU (au moins une), NON (l'inverse).",
    vocab: [
      ["Instruction", "Élément du programme qui teste des entrées et agit sur des sorties."],
      ["Fonction ET", "La sortie est active seulement si toutes les conditions sont vraies."],
      ["Fonction OU", "La sortie est active si au moins une condition est vraie."],
      ["Fonction NON", "Inverse l'état d'une condition (vrai devient faux)."],
      ["Bit interne", "Mémoire du programme qui garde un état (ex : mémoriser une position)."],
    ],
    example:
      "Programme d'une presse : la sortie « descendre » est active si le bouton marche est appuyé ET la sécurité est fermée ET la pièce est présente. Si une seule condition manque, la presse ne descend pas. C'est une fonction ET.",
    schema: "plc-structure",
    ascii: "ET : sortie = 1 si TOUTES les conditions = 1\nOU : sortie = 1 si AU MOINS UNE condition = 1\nNON : inverse l'etat (1 devient 0)",
    retenir: [
      "Le programme relie des entrées à des sorties par des conditions.",
      "ET : toutes les conditions doivent être vraies.",
      "OU : au moins une condition doit être vraie.",
      "NON : inverse une condition. Des bits internes mémorisent des états.",
    ],
    erreurs: [
      "Confondre ET (toutes) et OU (au moins une).",
      "Oublier une condition de sécurité dans une fonction ET.",
      "Négliger les bits internes qui mémorisent un état entre deux cycles.",
    ],
    astucesPro: [
      "On lit une condition de sortie comme une phrase : « active si … ET … ».",
      "Une sécurité se place souvent en condition ET obligatoire d'une sortie de mouvement.",
    ],
    diagnostic: [
      "Identifier les conditions d'une sortie qui ne s'active pas.",
      "Vérifier l'état réel de chaque condition (entrées, sécurités).",
      "Repérer la condition manquante qui bloque la sortie.",
    ],
    depannage: [
      "Contrôler chaque entrée intervenant dans la condition d'une sortie.",
      "Vérifier les sécurités incluses dans la logique.",
      "Faire analyser le programme par une personne compétente si nécessaire.",
    ],
    securite: [
      "On ne supprime jamais une condition de sécurité d'un programme pour « faire marcher ».",
      "Toute modification de programme suit une procédure et une validation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Une presse ne descend pas ; le bouton marche est bien appuyé et la pièce est présente.",
      mission: ["Nommer la logique concernée.", "Indiquer la condition à vérifier.", "Rappeler la précaution."],
      correction:
        "La sortie « descendre » dépend d'une fonction ET de plusieurs conditions. Deux conditions sont réunies (bouton marche et pièce présente), mais la presse ne descend pas : il manque probablement la troisième condition, par exemple la sécurité fermée (protecteur, barrière). On vérifie donc l'état de cette sécurité et son entrée sur l'automate (voyant). On ne supprime jamais une condition de sécurité pour forcer le mouvement : la précaution prime.",
    },
    memo: ["ET = toutes", "OU = au moins une", "NON = inverse", "Sécurité en condition ET"],
    resume:
      "Le programme définit des conditions logiques (ET, OU, NON) qui relient les entrées aux sorties ; des bits internes mémorisent des états.",
    quizIds: ["aut116", "aut117", "aut118", "aut119", "aut120"],
    verification: {
      question: "Avec une fonction ET, quand la sortie est-elle active ?",
      options: ["Si au moins une condition est vraie", "Seulement si toutes les conditions sont vraies", "Jamais", "Toujours"],
      correct: 1,
      explanation: "La fonction ET n'active la sortie que si toutes les conditions sont vraies en même temps.",
    },
    exercice: {
      enonce:
        "Expliquez les fonctions ET et OU avec un exemple de condition de sortie pour chacune.",
      consignes: [
        "Explique la fonction ET avec un exemple.",
        "Explique la fonction OU avec un exemple.",
        "Précise l'intérêt d'une sécurité en condition ET.",
      ],
      criteres: [
        "J'ai expliqué ET (toutes les conditions).",
        "J'ai expliqué OU (au moins une).",
        "J'ai relié la sécurité à une condition ET.",
      ],
      correction:
        "Fonction ET : la sortie est active seulement si toutes les conditions sont vraies. Exemple : « descendre » active si marche ET sécurité fermée ET pièce présente. Fonction OU : la sortie est active si au moins une condition est vraie. Exemple : « alarme » active si défaut1 OU défaut2. Placer une sécurité en condition ET obligatoire garantit que le mouvement ne peut pas se produire tant que la sécurité n'est pas satisfaite.",
    },
  },
  {
    id: "5-25",
    title: "Dialogue homme-machine et communication",
    durationMinutes: 26,
    objectifs: [
      "Comprendre le rôle d'un pupitre / d'une interface homme-machine (IHM).",
      "Situer la communication entre automates et supervision.",
    ],
    simple:
      "Pour utiliser une machine automatisée, l'opérateur a besoin de dialoguer avec l'automate : lancer un cycle, régler une valeur, voir un défaut. C'est le rôle du pupitre ou de l'interface homme-machine (IHM). Les automates peuvent aussi communiquer entre eux et avec une supervision par des réseaux.",
    vocab: [
      ["IHM / pupitre", "Interface Homme-Machine : écran et boutons pour dialoguer avec l'automate."],
      ["Dialogue", "Échange entre l'opérateur et la machine (ordres, affichages, réglages)."],
      ["Réseau", "Liaison qui permet aux automates et équipements d'échanger des données."],
      ["Supervision", "Système qui surveille et pilote plusieurs machines à distance."],
      ["Voyant / bouton", "Éléments simples de dialogue : signaler un état, donner un ordre."],
    ],
    example:
      "Sur une ligne, un pupitre à écran permet à l'opérateur de choisir un mode de marche, de régler une cadence et de voir les défauts. Les automates de la ligne échangent des informations par un réseau, et une supervision affiche l'état de toute la ligne dans le bureau des méthodes.",
    schema: "po-pc-structure",
    ascii: "OPERATEUR ↔ IHM/pupitre ↔ AUTOMATE\nAUTOMATES ↔ RESEAU ↔ SUPERVISION (surveillance a distance)",
    retenir: [
      "L'IHM (pupitre) permet à l'opérateur de dialoguer avec l'automate.",
      "Le dialogue sert à lancer, régler, et voir les défauts.",
      "Les réseaux relient automates, IHM et supervision pour échanger des données.",
      "La supervision surveille et pilote plusieurs machines à distance.",
    ],
    erreurs: [
      "Confondre l'IHM (dialogue) avec l'automate (traitement).",
      "Négliger les messages de défaut affichés par l'IHM lors d'un diagnostic.",
      "Oublier qu'un défaut réseau peut couper la communication sans panne « machine ».",
    ],
    astucesPro: [
      "Les messages et codes de défaut de l'IHM sont une première source d'information en diagnostic.",
      "On distingue un défaut de la machine d'un défaut de communication (réseau).",
    ],
    diagnostic: [
      "Lire les messages et défauts affichés par l'IHM.",
      "Vérifier la communication (réseau) entre les équipements.",
      "Distinguer un défaut machine d'un défaut de dialogue ou de réseau.",
    ],
    depannage: [
      "Exploiter les informations de l'IHM pour cibler la recherche.",
      "Contrôler les liaisons de communication si les données ne circulent plus.",
      "Faire appel à une personne compétente pour les réseaux et la supervision.",
    ],
    securite: [
      "Un ordre donné depuis l'IHM ou la supervision peut déclencher un mouvement : on s'assure que la zone est sûre.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique et ne remplace pas la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "L'IHM affiche « défaut communication » alors que la machine elle-même semble en bon état.",
      mission: ["Interpréter le message.", "Indiquer où chercher.", "Rappeler une distinction utile."],
      correction:
        "Le message « défaut communication » indique un problème d'échange de données, pas forcément une panne mécanique ou électrique de la machine. On cherche du côté des liaisons de communication (câble réseau, connecteur, équipement réseau) entre l'IHM, l'automate ou la supervision. Distinction utile : un défaut de communication n'est pas un défaut « machine » ; la partie opérative peut être saine alors que le dialogue est interrompu. Les réseaux relèvent souvent d'une personne compétente dédiée.",
    },
    memo: ["IHM = dialogue", "Lancer / régler / voir défauts", "Réseau = échange de données", "Supervision = à distance"],
    resume:
      "L'IHM permet à l'opérateur de dialoguer avec l'automate ; les réseaux relient automates et supervision pour échanger des données et surveiller à distance.",
    quizIds: ["aut121", "aut122", "aut123", "aut124", "aut125"],
    verification: {
      question: "À quoi sert une interface homme-machine (IHM / pupitre) ?",
      options: ["À exécuter le programme", "À permettre à l'opérateur de dialoguer avec l'automate", "À alimenter la machine", "À détecter les objets"],
      correct: 1,
      explanation: "L'IHM permet à l'opérateur de dialoguer avec l'automate : lancer un cycle, régler une valeur, voir les défauts.",
    },
    exercice: {
      enonce:
        "Expliquez le rôle d'un pupitre (IHM) et donnez deux exemples de ce qu'un opérateur peut y faire.",
      consignes: [
        "Explique le rôle de l'IHM.",
        "Donne deux actions possibles pour l'opérateur.",
        "Cite l'intérêt des messages de défaut.",
      ],
      criteres: [
        "J'ai expliqué le rôle de dialogue de l'IHM.",
        "J'ai donné deux actions (lancer, régler, voir).",
        "J'ai cité l'utilité des défauts affichés.",
      ],
      correction:
        "Le pupitre (IHM) est l'interface qui permet à l'opérateur de dialoguer avec l'automate. L'opérateur peut par exemple choisir un mode de marche et lancer un cycle, régler une valeur (cadence, temporisation), ou consulter l'état et les défauts de la machine. Les messages de défaut affichés sont précieux en diagnostic : ils orientent directement la recherche de la panne.",
    },
  },
  {
    id: "5-26",
    title: "Synthèse API et diagnostic",
    durationMinutes: 28,
    objectifs: [
      "Mobiliser les notions du bloc pour diagnostiquer un système à automate.",
      "Distinguer un problème de programme d'un problème matériel.",
    ],
    simple:
      "Ce chapitre rassemble le bloc : l'automate lit ses entrées, exécute un programme et commande ses sorties, dans un cycle rapide. Pour diagnostiquer, on utilise les voyants d'E/S et les messages de l'IHM, et on distingue toujours un problème de programme d'un problème matériel.",
    vocab: [
      ["Voyant d'E/S", "Témoin qui montre l'état réel d'une entrée ou d'une sortie."],
      ["Problème matériel", "Défaut de capteur, de câblage, de préactionneur ou d'alimentation."],
      ["Problème de programme", "Comportement lié à la logique du programme (conditions, temporisations)."],
      ["Image des entrées", "État lu au début du cycle (chapitre 5-23)."],
      ["Diagnostic méthodique", "Recherche ordonnée : entrées, programme, sorties, terrain."],
    ],
    example:
      "Une sortie ne s'active pas : on regarde le voyant de la sortie. S'il est éteint, la condition du programme n'est pas remplie (vérifier les entrées et sécurités) ou il y a un défaut interne ; s'il est allumé mais l'actionneur inactif, le défaut est en aval (préactionneur, énergie).",
    schema: "plc-structure",
    ascii: "VOYANT SORTIE eteint → condition programme non remplie (voir entrees/securites)\nVOYANT SORTIE allume mais pas d'action → defaut EN AVAL (preactionneur, energie)",
    retenir: [
      "L'automate : lire les entrées, traiter le programme, écrire les sorties (cycle).",
      "Les voyants d'E/S et l'IHM sont les premiers outils de diagnostic.",
      "Voyant de sortie éteint : condition du programme non remplie ou défaut interne.",
      "Voyant de sortie allumé mais pas d'action : défaut en aval de l'automate.",
    ],
    erreurs: [
      "Accuser le programme sans vérifier les entrées et les sorties réelles.",
      "Oublier de comparer l'état du terrain aux voyants d'E/S.",
      "Modifier un programme sans compétence ni procédure.",
    ],
    astucesPro: [
      "On part toujours des voyants d'E/S : ils montrent ce que l'automate « voit » et « commande » réellement.",
      "On sépare nettement le matériel (capteurs, câblage, préactionneurs) du programme.",
    ],
    diagnostic: [
      "Comparer l'état du terrain aux voyants d'entrées.",
      "Vérifier si la sortie attendue s'active (voyant) selon les conditions.",
      "Situer le défaut : entrée, programme, sortie ou aval (terrain).",
    ],
    depannage: [
      "Traiter un défaut matériel (capteur, câblage, préactionneur) selon les méthodes des blocs précédents.",
      "Faire analyser le programme par une personne compétente si le matériel est sain.",
      "Consigner avant tout accès aux parties actives.",
    ],
    securite: [
      "On ne force pas une sortie ni ne modifie un programme sans procédure et sans s'assurer que la zone est sûre.",
      "On agit dans les limites de son habilitation.",
      "Cette application est pédagogique : elle prépare à la formation, elle ne la remplace pas.",
    ],
    etudeDeCas: {
      situation: "Une sortie « avancer tapis » a son voyant allumé sur l'automate, mais le tapis ne bouge pas.",
      mission: ["Situer le défaut.", "Citer les organes à contrôler.", "Rappeler la précaution."],
      correction:
        "Le voyant de la sortie est allumé : l'automate commande bien l'avance. Le défaut est donc en aval de l'automate. On contrôle le préactionneur (contacteur qui alimente le moteur), l'arrivée d'énergie et le moteur lui-même, en appliquant les méthodes des blocs précédents. Le programme et l'automate ne sont pas en cause ici, puisque la commande est présente. Les contrôles nécessitant un accès se font après consignation, dans les limites de son habilitation.",
    },
    memo: ["Voyants d'E/S d'abord", "Sortie éteinte → programme/entrées", "Sortie allumée sans action → aval", "Matériel ≠ programme"],
    resume:
      "Diagnostiquer un système à automate, c'est utiliser les voyants d'E/S et l'IHM pour situer le défaut, en distinguant toujours un problème de programme d'un problème matériel.",
    quizIds: ["aut126", "aut127", "aut128", "aut129", "aut130"],
    verification: {
      question: "Le voyant d'une sortie est allumé mais l'actionneur ne bouge pas. Où est le défaut ?",
      options: ["Dans le programme", "En aval de l'automate (préactionneur, énergie, actionneur)", "Dans l'alimentation de l'automate", "Dans le capteur d'entrée"],
      correct: 1,
      explanation: "La sortie est bien commandée (voyant allumé) : le défaut est en aval de l'automate, côté préactionneur, énergie ou actionneur.",
    },
    exercice: {
      enonce:
        "Expliquez comment utiliser les voyants d'entrées et de sorties pour distinguer un problème matériel d'un problème de programme.",
      consignes: [
        "Explique ce qu'indique un voyant d'entrée.",
        "Explique ce qu'indique un voyant de sortie.",
        "Décris comment on distingue matériel et programme.",
      ],
      criteres: [
        "J'ai relié le voyant d'entrée à l'information reçue.",
        "J'ai relié le voyant de sortie à la commande.",
        "J'ai décrit la distinction matériel / programme.",
      ],
      correction:
        "Le voyant d'entrée montre si l'automate reçoit bien l'information d'un capteur ; le voyant de sortie montre si l'automate commande bien un préactionneur. Si un capteur détecte mais que l'entrée reste éteinte, le défaut est matériel (câblage, capteur). Si les entrées sont correctes mais la sortie attendue ne s'active pas, la condition du programme n'est pas remplie (problème de logique ou entrée manquante). Si la sortie est allumée mais rien ne bouge, le défaut est matériel en aval (préactionneur, énergie, actionneur). Les voyants permettent ainsi de situer le défaut et de distinguer matériel et programme.",
    },
  },
];

const block7Lessons: Lesson[] = [
  {
    id: "5-27",
    title: "La démarche de diagnostic d'un système automatisé",
    durationMinutes: 30,
    objectifs: [
      "Adopter une démarche de diagnostic ordonnée plutôt qu'au hasard.",
      "Situer une panne dans la chaîne information → décision → action.",
    ],
    simple:
      "Diagnostiquer, c'est d'abord observer avant de démonter. On part du symptôme (ce qui ne se produit pas), on récolte les indices (voyants, IHM, schémas), puis on remonte la chaîne du système : capteur → entrée → automate → sortie → préactionneur → actionneur. On avance étape par étape, en confirmant chaque hypothèse, jusqu'à localiser le défaut.",
    vocab: [
      ["Symptôme", "Ce que l'on constate : l'action attendue ne se produit pas, ou pas correctement."],
      ["Chaîne fonctionnelle", "Suite capteur → entrée → automate → sortie → préactionneur → actionneur à parcourir."],
      ["Hypothèse", "Cause possible que l'on vérifie par une observation, avant d'agir."],
      ["Indice", "Information objective : voyant, message d'IHM, mesure, état d'un schéma."],
      ["Localiser", "Situer le défaut sur un maillon précis de la chaîne avant d'intervenir."],
    ],
    example:
      "Un tapis ne démarre pas au cycle. Plutôt que de changer le moteur, on observe : le voyant de la sortie moteur est-il allumé ? les entrées de départ cycle sont-elles présentes ? le capteur de sécurité est-il actif ? En quelques observations, on situe le défaut sans rien démonter.",
    schema: "diagnostic-flow",
    ascii: "SYMPTOME → OBSERVER (voyants, IHM, schema) → REMONTER LA CHAINE\ncapteur → entree → automate → sortie → preactionneur → actionneur\nune etape a la fois, on confirme avant d'agir",
    retenir: [
      "Observer avant de démonter : les voyants et l'IHM renseignent sans ouvrir.",
      "Partir du symptôme précis : quelle action ne se produit pas ?",
      "Remonter la chaîne fonctionnelle maillon par maillon.",
      "Confirmer chaque hypothèse par un indice avant d'intervenir.",
    ],
    erreurs: [
      "Changer une pièce « au hasard » sans avoir localisé le défaut.",
      "Sauter des étapes de la chaîne et conclure trop vite.",
      "Ignorer les voyants et messages qui donnent déjà la réponse.",
      "Intervenir sur les parties actives sans avoir consigné.",
    ],
    astucesPro: [
      "On formule le symptôme en une phrase précise avant de chercher.",
      "On note ce qu'on observe : cela évite de tourner en rond.",
      "On suit toujours le même sens de parcours pour ne rien oublier.",
    ],
    diagnostic: [
      "Décrire précisément ce qui ne fonctionne pas (quelle action, dans quel mode).",
      "Recenser les indices disponibles : voyants d'E/S, messages d'IHM, schémas.",
      "Situer le maillon suspect avant toute intervention matérielle.",
    ],
    depannage: [
      "Remonter la chaîne dans l'ordre plutôt que d'intervenir au hasard.",
      "Distinguer un défaut d'information (capteur, entrée) d'un défaut d'action (sortie, préactionneur, actionneur).",
      "Faire appel à une personne compétente pour toute action sur le programme.",
    ],
    securite: [
      "L'observation des voyants et de l'IHM se fait machine en fonctionnement mais sans accès aux parties actives.",
      "Avant tout démontage ou mesure sur les parties actives, on consigne les énergies (électrique, pneumatique, hydraulique) et on vérifie l'absence de tension/pression.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Une machine automatisée reste bloquée au départ de cycle. Un collègue veut immédiatement remplacer l'automate.",
      mission: ["Proposer une démarche avant de changer une pièce.", "Citer deux indices à observer d'abord.", "Rappeler la précaution de sécurité."],
      correction:
        "Avant de remplacer quoi que ce soit, on formule le symptôme (le cycle ne démarre pas) et on observe : les voyants des entrées de départ cycle et des sécurités sont-ils dans l'état attendu ? le voyant de la sortie concernée s'allume-t-il ? On remonte ainsi la chaîne pour localiser le maillon en défaut. Deux indices utiles : l'état des voyants d'E/S et les messages de l'IHM. Remplacer l'automate au hasard est coûteux et souvent inutile. Toute intervention sur les parties actives se fait après consignation et vérification d'absence de tension/pression.",
    },
    memo: ["Observer avant de démonter", "Symptôme → chaîne → localiser", "Un indice confirme chaque hypothèse"],
    resume:
      "Une démarche de diagnostic ordonnée part du symptôme, s'appuie sur les indices (voyants, IHM, schémas) et remonte la chaîne fonctionnelle maillon par maillon jusqu'à localiser le défaut, en sécurité.",
    quizIds: ["aut131", "aut132", "aut133", "aut134", "aut135"],
    verification: {
      question: "Quelle est la bonne première étape face à une panne sur un système automatisé ?",
      options: ["Remplacer l'automate", "Observer les indices (voyants, IHM) et formuler le symptôme", "Démonter le moteur", "Augmenter la vitesse du cycle"],
      correct: 1,
      explanation: "On observe d'abord les indices et on formule précisément le symptôme : cela oriente la recherche avant tout démontage.",
    },
    exercice: {
      enonce:
        "Décrivez, dans l'ordre, la démarche pour diagnostiquer une action qui ne se produit pas sur un système automatisé.",
      consignes: [
        "Indique par quoi on commence.",
        "Cite le sens de parcours de la chaîne.",
        "Précise la règle avant d'intervenir sur les parties actives.",
      ],
      criteres: [
        "J'ai commencé par l'observation et le symptôme.",
        "J'ai parcouru la chaîne capteur → entrée → automate → sortie → préactionneur → actionneur.",
        "J'ai rappelé la consignation avant intervention.",
      ],
      correction:
        "On commence par observer les indices (voyants d'E/S, messages d'IHM, schémas) et formuler précisément le symptôme. Puis on remonte la chaîne fonctionnelle dans l'ordre : capteur → entrée → automate → sortie → préactionneur → actionneur, en confirmant chaque hypothèse par une observation. On localise ainsi le maillon en défaut avant d'agir. Toute intervention sur les parties actives (démontage, mesure) se fait après consignation des énergies et vérification d'absence de tension/pression.",
    },
  },
  {
    id: "5-28",
    title: "Utiliser les voyants et l'IHM pour diagnostiquer",
    durationMinutes: 30,
    objectifs: [
      "Lire les voyants d'entrées et de sorties d'un automate.",
      "Exploiter les messages de l'IHM comme aide au diagnostic.",
    ],
    simple:
      "Les voyants d'entrées et de sorties de l'automate, et les messages de l'IHM (le pupitre), sont les premiers outils de diagnostic : ils montrent ce que l'automate « voit » (entrées) et ce qu'il « commande » (sorties), sans rien démonter. Un voyant d'entrée allumé signifie que l'information arrive ; un voyant de sortie allumé signifie que l'automate envoie l'ordre.",
    vocab: [
      ["Voyant d'entrée", "LED qui s'allume quand l'automate reçoit le signal d'un capteur sur cette entrée."],
      ["Voyant de sortie", "LED qui s'allume quand l'automate commande cette sortie (préactionneur)."],
      ["IHM", "Interface Homme-Machine (pupitre, écran) : affiche états, valeurs et messages de défaut."],
      ["Message de défaut", "Information affichée par l'IHM signalant une anomalie détectée."],
      ["Forçage", "Action de figer manuellement une E/S : réservée à une personne compétente, jamais pour contourner une sécurité."],
    ],
    example:
      "Un capteur de présence est censé être actif, mais le voyant de l'entrée correspondante reste éteint : l'information n'arrive pas à l'automate. On sait déjà que le problème est côté capteur ou câblage, pas dans le programme. À l'inverse, l'IHM affichant « défaut communication » oriente vers le réseau, pas vers la mécanique.",
    schema: "plc-structure",
    ascii: "VOYANT ENTREE allume = l'automate RECOIT l'info du capteur\nVOYANT SORTIE allume = l'automate COMMANDE le preactionneur\nIHM = messages d'etat et de defaut (lire avant d'agir)",
    retenir: [
      "Voyant d'entrée = ce que l'automate reçoit des capteurs.",
      "Voyant de sortie = ce que l'automate commande vers les préactionneurs.",
      "L'IHM affiche états, valeurs et messages de défaut : on les lit d'abord.",
      "Ces indices permettent de situer le défaut sans démonter.",
    ],
    erreurs: [
      "Confondre voyant d'entrée (info reçue) et voyant de sortie (ordre envoyé).",
      "Ignorer un message de l'IHM qui donne déjà la piste.",
      "Croire qu'un voyant de sortie allumé garantit que l'actionneur bouge (le défaut peut être en aval).",
      "Utiliser le forçage pour contourner une sécurité.",
    ],
    astucesPro: [
      "On compare l'état réel du procédé avec ce que montrent les voyants : l'écart est parlant.",
      "On note le message exact de l'IHM avant de l'acquitter.",
      "Le repérage des cartes et des voyants aide à relier voyant et capteur/préactionneur.",
    ],
    diagnostic: [
      "Vérifier si le voyant d'entrée s'allume quand le capteur devrait détecter.",
      "Vérifier si le voyant de sortie s'allume quand l'action est demandée.",
      "Lire les messages de l'IHM et les relier au maillon concerné.",
    ],
    depannage: [
      "Un voyant d'entrée éteint alors que le capteur détecte oriente vers le câblage ou l'entrée.",
      "Un voyant de sortie allumé sans action oriente vers l'aval (préactionneur, énergie, actionneur).",
      "Un message de défaut d'IHM oriente vers la fonction indiquée (communication, sécurité, surcharge…).",
    ],
    securite: [
      "La lecture des voyants et de l'IHM se fait sans accès aux parties actives.",
      "Le forçage d'une entrée ou d'une sortie relève d'une personne compétente et ne doit jamais contourner une sécurité.",
      "Avant toute mesure ou démontage sur les parties actives, on consigne et on vérifie l'absence de tension/pression.",
    ],
    etudeDeCas: {
      situation: "Une action de serrage ne se fait pas. Le voyant de la sortie correspondante est allumé sur l'automate.",
      mission: ["Dire ce que prouve ce voyant.", "Indiquer où chercher le défaut.", "Citer une précaution avant d'intervenir."],
      correction:
        "Le voyant de sortie allumé prouve que l'automate commande bien la sortie : le programme et l'information sont donc corrects pour cette étape. Le défaut est en aval de la sortie : préactionneur (distributeur, contacteur), présence de l'énergie (air comprimé, tension), câblage, ou actionneur (vérin) lui-même. On y cherche la cause. Avant toute intervention sur les parties actives, on consigne les énergies concernées et on vérifie l'absence de tension/pression.",
    },
    memo: ["Entrée = reçu · Sortie = commandé", "IHM : lire les messages d'abord", "Sortie allumée sans action → aval"],
    resume:
      "Les voyants d'entrées/sorties et les messages de l'IHM montrent ce que l'automate reçoit et commande : ce sont les premiers outils de diagnostic pour situer un défaut sans démonter.",
    quizIds: ["aut136", "aut137", "aut138", "aut139", "aut140"],
    verification: {
      question: "Un voyant d'entrée allumé indique que :",
      options: ["L'automate commande un préactionneur", "L'automate reçoit bien le signal d'un capteur sur cette entrée", "L'actionneur est en panne", "Le programme est faux"],
      correct: 1,
      explanation: "Un voyant d'entrée s'allume quand l'automate reçoit le signal du capteur relié à cette entrée : l'information arrive bien.",
    },
    exercice: {
      enonce:
        "Expliquez comment les voyants d'E/S et l'IHM aident à situer une panne, avec un exemple de chaque.",
      consignes: [
        "Explique ce qu'indique un voyant d'entrée.",
        "Explique ce qu'indique un voyant de sortie.",
        "Donne un exemple d'aide apportée par l'IHM.",
      ],
      criteres: [
        "J'ai relié le voyant d'entrée à l'information reçue d'un capteur.",
        "J'ai relié le voyant de sortie à la commande d'un préactionneur.",
        "J'ai donné un exemple de message d'IHM utile.",
      ],
      correction:
        "Un voyant d'entrée allumé montre que l'automate reçoit bien l'information d'un capteur : s'il reste éteint alors que le capteur détecte, le défaut est côté capteur ou câblage. Un voyant de sortie allumé montre que l'automate commande bien un préactionneur : s'il est allumé mais que l'actionneur ne bouge pas, le défaut est en aval. L'IHM complète ces indices : un message « défaut communication » oriente vers le réseau, un message de surcharge vers la protection moteur. Ces indices permettent de situer la panne sans démonter.",
    },
  },
  {
    id: "5-29",
    title: "Localiser une panne : capteur, entrée, sortie, actionneur",
    durationMinutes: 32,
    objectifs: [
      "Appliquer une méthode de localisation le long de la chaîne fonctionnelle.",
      "Distinguer un défaut d'information, un défaut de programme et un défaut d'action.",
    ],
    simple:
      "Localiser une panne, c'est décider sur quel maillon se situe le défaut. On raisonne avec les voyants : si la sortie est commandée (voyant allumé) mais que rien ne bouge, le défaut est en aval (préactionneur, énergie, actionneur). Si la sortie n'est pas commandée, on regarde les entrées : si une information manque, on remonte vers le capteur ; si toutes les entrées sont bonnes, c'est une condition du programme qui n'est pas remplie.",
    vocab: [
      ["En aval", "Après la sortie de l'automate : préactionneur, énergie de puissance, actionneur."],
      ["En amont", "Avant l'automate : capteur, câblage capteur, entrée."],
      ["Défaut d'information", "Une entrée n'a pas l'état attendu (capteur, câblage, entrée)."],
      ["Défaut d'action", "L'ordre part mais l'action ne se fait pas (préactionneur, énergie, actionneur)."],
      ["Condition non remplie", "Le programme n'active pas la sortie car une condition (autre entrée, sécurité, mode) manque."],
    ],
    example:
      "Un vérin ne sort pas. Voyant de sortie éteint : l'automate ne commande pas. On regarde l'entrée « pièce présente » : voyant éteint. Le capteur de présence détecte-t-il la pièce ? Son voyant reste éteint : le défaut est un problème de détection (capteur mal réglé, hors portée ou en panne). La panne est localisée sans avoir rien démonté au hasard.",
    schema: "energy-info-chains",
    illustrations: ["auto-diagnostic-tree"],
    ascii: "SORTIE commandee (voyant ON) + rien ne bouge → AVAL (preactionneur/energie/actionneur)\nSORTIE non commandee → regarder ENTREES\n  entree manquante → remonter au CAPTEUR\n  entrees OK → CONDITION du PROGRAMME non remplie",
    retenir: [
      "Voyant de sortie allumé + pas d'action ⇒ défaut en aval (préactionneur, énergie, actionneur).",
      "Voyant de sortie éteint ⇒ regarder les entrées.",
      "Entrée manquante ⇒ remonter vers le capteur (câblage puis capteur).",
      "Entrées correctes mais sortie inactive ⇒ condition du programme non remplie (ou défaut interne).",
    ],
    erreurs: [
      "Conclure « moteur en panne » alors que la sortie n'est même pas commandée.",
      "Oublier de vérifier la présence de l'énergie de puissance en aval.",
      "Confondre « le capteur ne détecte pas » et « l'information n'arrive pas à l'entrée ».",
      "Contourner une sécurité pour forcer la sortie.",
    ],
    astucesPro: [
      "On teste le capteur en présentant la cible et en regardant SON voyant, puis celui de l'entrée.",
      "Un défaut en aval se confirme souvent en vérifiant l'énergie (air, tension) avant l'actionneur.",
      "On garde en tête : information en amont, action en aval, décision au milieu.",
    ],
    diagnostic: [
      "Regarder d'abord le voyant de la sortie concernée : commandée ou non ?",
      "Selon le cas, contrôler l'aval (énergie, préactionneur, actionneur) ou les entrées.",
      "Pour une entrée manquante, distinguer capteur en défaut et liaison capteur ↔ entrée.",
    ],
    depannage: [
      "Aval : contrôler préactionneur, énergie de puissance et actionneur, après consignation.",
      "Amont : contrôler position/réglage du capteur, puis câblage et entrée.",
      "Programme : vérifier les conditions et sécurités ; toute modification relève d'une personne compétente.",
    ],
    securite: [
      "Le repérage par les voyants se fait sans accès aux parties actives.",
      "On consigne les énergies (électrique, pneumatique, hydraulique) et on vérifie l'absence de tension/pression avant tout contrôle en aval sur les parties actives.",
      "On ne contourne jamais une sécurité pour faire fonctionner la machine ; l'application est pédagogique et ne remplace pas les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur une station, une pièce n'est pas éjectée. Le voyant de la sortie « éjecteur » est éteint et l'entrée « pièce en position » est éteinte, mais le capteur de position semble bien face à la pièce.",
      mission: ["Situer le maillon suspect.", "Dire comment vérifier si le capteur est en cause.", "Citer la précaution avant intervention."],
      correction:
        "La sortie n'étant pas commandée, le problème est en amont : une information manque (entrée « pièce en position » éteinte). Pour vérifier le capteur, on présente la cible et on regarde son propre voyant : s'il s'allume mais que l'entrée reste éteinte, le défaut est dans la liaison capteur ↔ entrée (câblage, borne, entrée) ; s'il reste éteint, c'est un défaut de détection (position, réglage, portée ou capteur en panne). On localise ainsi précisément avant d'agir. Toute intervention sur les parties actives se fait après consignation et vérification d'absence de tension/pression, sans contourner de sécurité.",
    },
    memo: ["Sortie ON + rien ne bouge → aval", "Sortie OFF → entrées", "Capteur : tester avec son voyant"],
    resume:
      "On localise une panne en lisant les voyants : sortie commandée sans action ⇒ aval ; sortie non commandée ⇒ entrées, puis capteur ou condition de programme, avant toute intervention en sécurité.",
    quizIds: ["aut141", "aut142", "aut143", "aut144", "aut145"],
    verification: {
      question: "Le voyant de la sortie est allumé mais l'actionneur ne bouge pas. Où se situe le défaut ?",
      options: ["Dans le programme", "En aval de l'automate (préactionneur, énergie, actionneur)", "Dans le capteur d'entrée", "Dans l'alimentation de l'automate"],
      correct: 1,
      explanation: "La sortie est bien commandée : l'automate fait son travail. Le défaut est en aval — préactionneur, énergie de puissance ou actionneur.",
    },
    exercice: {
      enonce:
        "À partir de l'état des voyants, expliquez comment décider si une panne est en amont, dans le programme, ou en aval.",
      consignes: [
        "Explique le cas « voyant de sortie allumé, pas d'action ».",
        "Explique le cas « voyant de sortie éteint, une entrée manque ».",
        "Explique le cas « voyant de sortie éteint, toutes les entrées correctes ».",
      ],
      criteres: [
        "J'ai relié sortie allumée sans action à un défaut en aval.",
        "J'ai relié entrée manquante à un défaut capteur/câblage en amont.",
        "J'ai relié entrées correctes + sortie inactive à une condition de programme.",
      ],
      correction:
        "Si le voyant de sortie est allumé mais que rien ne bouge, l'automate commande bien : le défaut est en aval (préactionneur, énergie de puissance, actionneur). Si le voyant de sortie est éteint, on regarde les entrées : une entrée manquante conduit à remonter vers le capteur — s'il détecte mais que l'entrée reste éteinte, le défaut est dans la liaison ; s'il ne détecte pas, c'est un défaut de détection. Si toutes les entrées sont correctes mais la sortie reste inactive, c'est une condition du programme qui n'est pas remplie (autre condition, sécurité active, mode). On agit ensuite en sécurité, après consignation, sans contourner de sécurité.",
    },
  },
  {
    id: "5-30",
    title: "La maintenance préventive d'un système automatisé",
    durationMinutes: 30,
    objectifs: [
      "Distinguer maintenance préventive et maintenance corrective.",
      "Citer les gestes d'entretien courants d'un système automatisé.",
    ],
    simple:
      "La maintenance préventive consiste à entretenir régulièrement le système pour éviter les pannes, au lieu d'attendre qu'elles surviennent (maintenance corrective). Sur un système automatisé, cela va du nettoyage des capteurs au contrôle des connexions, en passant par la vérification des sécurités et la propreté de l'air comprimé.",
    vocab: [
      ["Maintenance préventive", "Entretien planifié pour éviter les pannes avant qu'elles n'arrivent."],
      ["Maintenance corrective", "Réparation après l'apparition d'une panne."],
      ["Maintenance conditionnelle", "Entretien déclenché par une mesure (usure, température, vibration)."],
      ["Gamme de maintenance", "Liste ordonnée des opérations d'entretien à réaliser et de leur périodicité."],
      ["Traçabilité", "Enregistrement des interventions réalisées (date, opération, observations)."],
    ],
    example:
      "Sur une machine, on nettoie régulièrement la face des capteurs optiques (la poussière fausse la détection), on resserre les borniers, on purge le filtre d'air comprimé et on teste les arrêts d'urgence. Ces gestes simples évitent des arrêts coûteux.",
    schema: "maintenance-types",
    ascii: "PREVENTIVE (avant la panne) : nettoyer capteurs, serrer connexions, purger air, tester securites\nCORRECTIVE (apres la panne) : reparer/remplacer\nCONDITIONNELLE : declenchee par une mesure (usure, temperature)",
    retenir: [
      "Préventive = avant la panne ; corrective = après la panne.",
      "Nettoyer les capteurs : la saleté fausse la détection.",
      "Contrôler les connexions et le repérage : une borne desserrée crée des défauts intermittents.",
      "Vérifier les sécurités (arrêts d'urgence, protecteurs) et la qualité de l'air comprimé.",
    ],
    erreurs: [
      "N'intervenir qu'en corrective et subir les pannes.",
      "Négliger le nettoyage des capteurs, source fréquente de défauts.",
      "Oublier de tester les organes de sécurité lors de l'entretien.",
      "Ne rien tracer : on perd l'historique utile au diagnostic.",
    ],
    astucesPro: [
      "Un défaut intermittent oriente souvent vers une connexion desserrée ou un capteur encrassé.",
      "On suit une gamme de maintenance : mêmes gestes, même périodicité, tracés.",
      "L'air comprimé propre et sec prolonge la vie des distributeurs et vérins.",
    ],
    diagnostic: [
      "Repérer les points sensibles : capteurs exposés, connexions, filtres d'air.",
      "Comparer l'état constaté à l'état attendu (propreté, serrage, réglage).",
      "Consigner les observations pour suivre l'évolution dans le temps.",
    ],
    depannage: [
      "Traiter en priorité les causes récurrentes révélées par l'historique.",
      "Remplacer un consommable (filtre, joint) selon la périodicité prévue.",
      "Faire remonter à une personne compétente tout écart touchant la sécurité.",
    ],
    securite: [
      "Les opérations de maintenance sur les parties actives se font après consignation des énergies et vérification d'absence de tension/pression.",
      "On teste les organes de sécurité selon la procédure, sans jamais les neutraliser.",
      "Cette application est pédagogique et ne remplace ni la formation ni la gamme de maintenance de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Une cellule automatisée présente des arrêts aléatoires plusieurs fois par jour, sans message clair.",
      mission: ["Proposer des gestes de maintenance préventive utiles.", "Citer une cause fréquente de défaut intermittent.", "Rappeler la précaution de sécurité."],
      correction:
        "Des arrêts aléatoires évoquent souvent un défaut intermittent : on nettoie la face des capteurs (poussière), on resserre les borniers et connecteurs, on vérifie le repérage, on purge et contrôle le filtre d'air comprimé, et on teste les sécurités. Une cause fréquente est une connexion desserrée ou un capteur encrassé. Toutes ces opérations sur les parties actives se font après consignation et vérification d'absence de tension/pression, sans neutraliser aucune sécurité, et sont tracées pour suivre l'évolution.",
    },
    memo: ["Préventive avant la panne", "Nettoyer capteurs · serrer connexions", "Tester les sécurités · tracer"],
    resume:
      "La maintenance préventive entretient le système (capteurs, connexions, air, sécurités) pour éviter les pannes, contrairement à la corrective qui répare après ; elle se fait en sécurité et se trace.",
    quizIds: ["aut146", "aut147", "aut148", "aut149", "aut150"],
    verification: {
      question: "Quelle est la différence entre maintenance préventive et corrective ?",
      options: ["Aucune", "La préventive entretient avant la panne, la corrective répare après", "La corrective est planifiée, la préventive est subie", "La préventive ne concerne que l'automate"],
      correct: 1,
      explanation: "La maintenance préventive entretient régulièrement pour éviter la panne ; la corrective intervient une fois la panne survenue.",
    },
    exercice: {
      enonce:
        "Proposez un petit plan de maintenance préventive pour un système automatisé, avec au moins quatre gestes.",
      consignes: [
        "Cite au moins quatre gestes d'entretien.",
        "Explique pourquoi chacun est utile.",
        "Rappelle la règle de sécurité.",
      ],
      criteres: [
        "J'ai cité au moins quatre gestes pertinents.",
        "J'ai justifié leur utilité.",
        "J'ai rappelé la consignation avant intervention.",
      ],
      correction:
        "Plan de maintenance préventive : nettoyer la face des capteurs (la saleté fausse la détection) ; resserrer les borniers et connecteurs (une borne desserrée crée des défauts intermittents) ; purger et contrôler le filtre d'air comprimé (protège distributeurs et vérins) ; tester les organes de sécurité (arrêts d'urgence, protecteurs) selon la procédure ; vérifier le repérage et tracer les interventions. Chacun de ces gestes réduit le risque de panne. Toutes les opérations sur les parties actives se font après consignation des énergies et vérification d'absence de tension/pression, sans neutraliser de sécurité.",
    },
  },
  {
    id: "5-31",
    title: "Sécurité et consignation multi-énergies",
    durationMinutes: 32,
    objectifs: [
      "Comprendre qu'un système automatisé cumule plusieurs énergies à maîtriser.",
      "Appliquer les principes de consignation avant intervention.",
    ],
    simple:
      "Un système automatisé combine souvent plusieurs énergies : électrique, pneumatique (air comprimé) et parfois hydraulique. Avant d'intervenir, il faut toutes les maîtriser : on consigne chaque énergie, on vérifie l'absence de tension et de pression, et on tient compte des énergies résiduelles (air emprisonné, charges suspendues, condensateurs) qui peuvent provoquer un mouvement dangereux.",
    vocab: [
      ["Consignation", "Procédure qui met et maintient une installation hors énergie de façon sûre."],
      ["Multi-énergies", "Présence simultanée de plusieurs énergies (électrique, pneumatique, hydraulique)."],
      ["Énergie résiduelle", "Énergie encore présente après coupure (air sous pression, charge suspendue, condensateur)."],
      ["VAT", "Vérification d'Absence de Tension, réalisée après coupure et avant de travailler."],
      ["Purge", "Évacuation de l'air ou du fluide sous pression pour supprimer l'énergie résiduelle."],
    ],
    example:
      "Pour intervenir sur une station à vérins, couper l'électricité ne suffit pas : un vérin peut rester sous pression et bouger brutalement. On coupe aussi l'air, on purge le circuit, et on s'assure qu'aucune charge n'est en équilibre instable avant d'approcher les mains.",
    schema: "consignation-steps",
    ascii: "SYSTEME = ELECTRIQUE + PNEUMATIQUE (+ HYDRAULIQUE)\nconsigner CHAQUE energie → VAT (electrique) + PURGE (air/fluide)\nattention aux ENERGIES RESIDUELLES (air emprisonne, charge suspendue)",
    retenir: [
      "Un système automatisé cumule souvent plusieurs énergies à consigner.",
      "Couper l'électricité ne supprime pas l'air sous pression : il faut aussi consigner et purger.",
      "On vérifie l'absence de tension (VAT) ET l'absence de pression.",
      "Les énergies résiduelles (air, charges, condensateurs) peuvent créer un mouvement dangereux.",
    ],
    erreurs: [
      "Ne consigner que l'électricité en oubliant l'air comprimé.",
      "Oublier la purge : un vérin peut se déplacer brutalement.",
      "Négliger une charge suspendue ou en équilibre instable.",
      "Intervenir sans vérifier réellement l'absence de tension et de pression.",
    ],
    astucesPro: [
      "On identifie toutes les sources d'énergie du système avant d'intervenir.",
      "On purge et on met à l'atmosphère les circuits pneumatiques avant d'approcher les actionneurs.",
      "On sécurise les charges (calage) qui pourraient tomber une fois l'énergie coupée.",
    ],
    diagnostic: [
      "Recenser les énergies présentes (électrique, pneumatique, hydraulique).",
      "Vérifier que chaque énergie est bien consignée avant intervention.",
      "Identifier les énergies résiduelles possibles et les neutraliser.",
    ],
    depannage: [
      "Ne jamais travailler sur un circuit encore sous pression ou sous tension.",
      "Purger l'air et décharger les circuits avant tout démontage.",
      "Faire appel à une personne habilitée pour les opérations qui l'exigent.",
    ],
    securite: [
      "La consignation multi-énergies et la vérification d'absence de tension/pression sont réalisées par des personnes habilitées, selon la procédure.",
      "On ne neutralise jamais une sécurité et on tient compte de toutes les énergies résiduelles.",
      "Cette application est pédagogique et ne remplace ni la formation, ni les habilitations, ni les procédures de consignation de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Un opérateur veut dégager une pièce coincée entre deux vérins. Il coupe l'armoire électrique et veut passer la main.",
      mission: ["Dire si la coupure électrique suffit.", "Indiquer les précautions supplémentaires.", "Nommer les vérifications à faire."],
      correction:
        "Couper l'électricité ne suffit pas : les vérins peuvent rester sous pression et se déplacer brutalement. Il faut aussi consigner l'air comprimé (et l'hydraulique s'il y en a), purger les circuits pour supprimer l'énergie résiduelle, et sécuriser toute charge en équilibre. Vérifications : absence de tension (VAT) sur la partie électrique et absence de pression sur les circuits pneumatiques/hydrauliques avant d'approcher les mains. Ces opérations relèvent des personnes habilitées et suivent la procédure de consignation ; on ne neutralise jamais une sécurité.",
    },
    memo: ["Plusieurs énergies = plusieurs consignations", "VAT + purge", "Attention aux énergies résiduelles"],
    resume:
      "Un système automatisé cumule électricité, air comprimé et parfois hydraulique : avant d'intervenir on consigne chaque énergie, on vérifie l'absence de tension et de pression et on neutralise les énergies résiduelles.",
    quizIds: ["aut151", "aut152", "aut153", "aut154", "aut155"],
    verification: {
      question: "Sur un système à vérins pneumatiques, couper l'électricité suffit-il avant d'intervenir ?",
      options: ["Oui, tout est coupé", "Non : il faut aussi consigner et purger l'air comprimé", "Oui, si on va vite", "Non, mais seulement la nuit"],
      correct: 1,
      explanation: "L'air comprimé reste une énergie dangereuse : un vérin sous pression peut bouger. Il faut consigner l'air et purger avant d'intervenir." ,
    },
    exercice: {
      enonce:
        "Expliquez pourquoi et comment on maîtrise les différentes énergies avant d'intervenir sur un système automatisé.",
      consignes: [
        "Cite les énergies possibles.",
        "Explique pourquoi couper l'électricité ne suffit pas.",
        "Décris les vérifications avant intervention.",
      ],
      criteres: [
        "J'ai cité électrique, pneumatique (et hydraulique).",
        "J'ai expliqué le risque de l'air sous pression / énergie résiduelle.",
        "J'ai décrit la VAT et le contrôle d'absence de pression.",
      ],
      correction:
        "Un système automatisé combine souvent l'énergie électrique, l'air comprimé et parfois l'hydraulique. Couper l'électricité ne suffit pas : un vérin peut rester sous pression et se déplacer brutalement (énergie résiduelle). On consigne donc chaque énergie, on purge les circuits sous pression, et on sécurise les charges en équilibre. Avant d'intervenir, on vérifie l'absence de tension (VAT) sur la partie électrique et l'absence de pression sur les circuits pneumatiques/hydrauliques. Ces opérations sont réalisées par des personnes habilitées, selon la procédure, sans neutraliser aucune sécurité.",
    },
  },
  {
    id: "5-32",
    title: "Synthèse du module et mise en situation",
    durationMinutes: 30,
    objectifs: [
      "Relier les notions du module : structure, capteurs, actionneurs, automate, diagnostic.",
      "Appliquer une démarche complète à une mise en situation.",
    ],
    simple:
      "Ce chapitre relie tout le module. Un système automatisé s'organise en partie opérative et partie commande, reliées par une chaîne d'information (capteurs → entrées) et une chaîne d'énergie (sorties → préactionneurs → actionneurs). L'automate exécute un programme en cycle. Pour diagnostiquer, on observe les voyants et l'IHM, on remonte la chaîne, et on intervient en sécurité après consignation.",
    vocab: [
      ["Partie opérative", "Ce qui agit sur la matière : actionneurs, effecteurs (PO)."],
      ["Partie commande", "Ce qui décide et pilote : l'automate et sa logique (PC)."],
      ["Chaîne d'information", "Capteurs → entrées : ce que le système perçoit."],
      ["Chaîne d'énergie", "Sorties → préactionneurs → actionneurs : ce que le système fait."],
      ["Démarche de diagnostic", "Observer, remonter la chaîne, localiser, intervenir en sécurité."],
    ],
    example:
      "Sur un poste de tri : un capteur détecte la pièce (information), l'automate décide (programme), une sortie commande un distributeur (préactionneur) qui alimente un vérin (actionneur) éjectant la pièce. Si le tri échoue, on observe les voyants pour situer le maillon en cause.",
    schema: "po-pc-structure",
    ascii: "PO (agit) <-> PC (decide)\ninfo : capteurs → entrees      energie : sorties → preactionneurs → actionneurs\nAUTOMATE = programme en cycle · DIAGNOSTIC = observer, remonter, localiser, securite",
    retenir: [
      "PO (agit) et PC (décide) forment le système automatisé.",
      "Chaîne d'information : capteurs → entrées ; chaîne d'énergie : sorties → préactionneurs → actionneurs.",
      "L'automate exécute un programme en cycle (lecture entrées, traitement, écriture sorties).",
      "Diagnostiquer = observer (voyants, IHM), remonter la chaîne, localiser, intervenir en sécurité.",
    ],
    erreurs: [
      "Confondre partie opérative (agit) et partie commande (décide).",
      "Confondre chaîne d'information (capteurs) et chaîne d'énergie (actionneurs).",
      "Oublier que le diagnostic commence par l'observation, pas par le démontage.",
      "Négliger la consignation multi-énergies avant d'intervenir.",
    ],
    astucesPro: [
      "Situer chaque élément dans PO/PC et dans sa chaîne aide à raisonner vite.",
      "Les voyants d'E/S sont la boussole du diagnostic.",
      "Toujours conclure une intervention par un contrôle des sécurités et une traçabilité.",
    ],
    diagnostic: [
      "Identifier le maillon concerné : information, décision ou action.",
      "Utiliser les voyants et l'IHM pour situer sans démonter.",
      "Vérifier les conditions du cycle et l'état des sécurités.",
    ],
    depannage: [
      "Traiter le maillon localisé (capteur, câblage, préactionneur, énergie, actionneur).",
      "Distinguer défaut matériel et condition de programme.",
      "Intervenir après consignation, sans contourner de sécurité, puis tracer.",
    ],
    securite: [
      "Toute intervention sur les parties actives suit la consignation multi-énergies et la vérification d'absence de tension/pression.",
      "Une modification de programme relève d'une personne compétente ; on ne neutralise jamais une sécurité.",
      "Cette application est pédagogique et ne remplace ni la formation, ni les habilitations, ni les procédures de l'entreprise.",
    ],
    etudeDeCas: {
      situation: "Sur un poste de tri automatisé, les pièces ne sont plus éjectées depuis ce matin. Vous êtes chargé du diagnostic.",
      mission: ["Situer les éléments dans PO/PC et leurs chaînes.", "Décrire votre démarche de diagnostic.", "Préciser les précautions de sécurité."],
      correction:
        "Le capteur de présence et l'IHM appartiennent à la chaîne d'information (vers la PC) ; le distributeur (préactionneur) et le vérin (actionneur) forment la chaîne d'énergie de la PO ; l'automate est la PC. Démarche : observer le voyant de la sortie « éjecteur » — s'il est allumé sans action, chercher en aval (air, distributeur, vérin) ; s'il est éteint, vérifier l'entrée « pièce présente », donc le capteur (le tester avec son voyant) ou une condition du programme. On localise ainsi le maillon en défaut. Précautions : consigner les énergies électrique et pneumatique, vérifier l'absence de tension et de pression, ne pas contourner les sécurités, et tracer l'intervention.",
    },
    memo: ["PO agit · PC décide", "Info : capteurs · Énergie : actionneurs", "Diagnostic : observer → localiser → sécurité"],
    resume:
      "Le module se synthétise ainsi : PO/PC, chaîne d'information (capteurs) et chaîne d'énergie (actionneurs), automate en cycle, et une démarche de diagnostic qui observe, remonte la chaîne, localise et intervient en sécurité.",
    quizIds: ["aut156", "aut157", "aut158", "aut159", "aut160"],
    verification: {
      question: "Dans un système automatisé, la chaîne d'information correspond à :",
      options: ["sorties → préactionneurs → actionneurs", "capteurs → entrées (ce que le système perçoit)", "l'alimentation de l'automate", "l'IHM uniquement"],
      correct: 1,
      explanation: "La chaîne d'information va des capteurs vers les entrées de l'automate : c'est ce que le système perçoit ; la chaîne d'énergie, elle, va des sorties vers les actionneurs.",
    },
    exercice: {
      enonce:
        "Sur un système automatisé de votre choix, situez les éléments dans PO/PC et les deux chaînes, puis décrivez une démarche de diagnostic complète.",
      consignes: [
        "Place au moins un élément dans la PO et un dans la PC.",
        "Distingue chaîne d'information et chaîne d'énergie.",
        "Décris la démarche de diagnostic et la sécurité.",
      ],
      criteres: [
        "J'ai réparti des éléments entre PO et PC.",
        "J'ai distingué les deux chaînes.",
        "J'ai décrit une démarche de diagnostic en sécurité.",
      ],
      correction:
        "Exemple d'un poste de tri : la partie opérative comprend le vérin (actionneur) et le distributeur (préactionneur) ; la partie commande est l'automate et sa logique. La chaîne d'information va du capteur de présence vers l'entrée de l'automate ; la chaîne d'énergie va de la sortie vers le distributeur puis le vérin. Démarche de diagnostic : observer les voyants et l'IHM, remonter la chaîne (sortie commandée ou non, entrées présentes ou non, capteur qui détecte ou non) pour localiser le maillon en défaut, puis intervenir après consignation des énergies (électrique et pneumatique), vérification d'absence de tension/pression, sans contourner de sécurité, et tracer l'intervention.",
    },
  },
];

const block4Lessons: Lesson[] = [
  {
    id: "5-33",
    title: "L'air comprimé : production et intérêt en industrie",
    durationMinutes: 28,
    objectifs: [
      "Comprendre pourquoi l'air comprimé est très utilisé en automatisme.",
      "Décrire la chaîne de production et de distribution de l'air comprimé.",
    ],
    simple:
      "L'air comprimé est une énergie très courante en industrie : un compresseur aspire l'air ambiant et le comprime, un réservoir le stocke, puis un réseau le distribue jusqu'aux machines. On l'apprécie car il est simple, robuste, sans risque électrique côté actionneur et facile à évacuer (il retourne à l'atmosphère).",
    vocab: [
      ["Compresseur", "Machine qui aspire l'air et augmente sa pression."],
      ["Réservoir (cuve)", "Réserve d'air comprimé qui amortit les variations de débit."],
      ["Réseau d'air", "Tuyauteries qui distribuent l'air comprimé aux machines."],
      ["Pression", "Force exercée par l'air par unité de surface (souvent en bar)."],
      ["Pneumatique", "Qui utilise l'air comprimé comme énergie."],
    ],
    example:
      "Dans un atelier, un compresseur alimente une cuve, puis une tuyauterie parcourt les postes de travail. Chaque machine se raccorde au réseau pour actionner ses vérins. Une pression de service typique se situe autour de 6 à 7 bar.",
    schema: "energy-flow",
    ascii: "AIR ambiant → COMPRESSEUR → RESERVOIR → RESEAU → MACHINES (verins)\nenergie simple, robuste, sans risque electrique cote actionneur",
    retenir: [
      "Le compresseur comprime l'air ; le réservoir le stocke ; le réseau le distribue.",
      "L'air comprimé est simple, robuste et facile à évacuer.",
      "Côté actionneur, il n'y a pas de risque électrique.",
      "La pression de service usuelle est de l'ordre de 6 à 7 bar.",
    ],
    erreurs: [
      "Croire que l'air comprimé est sans danger : sous pression, il l'est.",
      "Oublier que l'air contient de l'eau et des impuretés à traiter.",
      "Confondre débit (quantité d'air) et pression (force de l'air).",
    ],
    astucesPro: [
      "Une chute de pression au poste signale souvent une fuite ou un sous-dimensionnement.",
      "L'air comprimé coûte cher à produire : les fuites sont une perte d'énergie.",
      "On purge régulièrement les points bas du réseau (condensats).",
    ],
    diagnostic: [
      "Vérifier la pression disponible au poste par rapport à la pression de service.",
      "Repérer les fuites (sifflement, chute de pression) sur le réseau.",
      "Contrôler l'état du réservoir et des purges.",
    ],
    depannage: [
      "Traiter les fuites en priorité : elles dégradent la pression et gaspillent l'énergie.",
      "Vérifier le compresseur et la régulation en cas de manque de pression général.",
      "Purger les condensats accumulés dans le réseau.",
    ],
    securite: [
      "L'air comprimé est une énergie dangereuse : ne jamais diriger un jet vers soi ou autrui, ni s'en servir pour se dépoussiérer.",
      "Avant intervention, on consigne le réseau et on purge la pression résiduelle.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Sur une ligne, plusieurs vérins deviennent lents et manquent de force en fin de journée.",
      mission: ["Proposer une cause probable.", "Indiquer comment la vérifier.", "Rappeler une précaution de sécurité."],
      correction:
        "Une baisse de force et de vitesse simultanée sur plusieurs vérins évoque un manque de pression général : fuite importante sur le réseau, compresseur qui n'arrive plus à suivre la demande, ou réservoir insuffisant en pointe. On vérifie la pression disponible au poste (manomètre) par rapport à la pression de service, on recherche les fuites (sifflement, contrôle) et on contrôle le compresseur. Toute intervention sur le réseau se fait après consignation et purge de la pression résiduelle ; on ne dirige jamais un jet d'air vers une personne.",
    },
    memo: ["Compresseur → réservoir → réseau → machines", "Air : simple, robuste, à traiter", "Sous pression = dangereux"],
    resume:
      "L'air comprimé est produit par un compresseur, stocké dans un réservoir et distribué par un réseau jusqu'aux machines ; simple et robuste, il reste une énergie sous pression à maîtriser.",
    quizIds: ["aut161", "aut162", "aut163", "aut164", "aut165"],
    verification: {
      question: "Dans quel ordre l'air comprimé arrive-t-il jusqu'à une machine ?",
      options: ["Machine → réseau → compresseur", "Compresseur → réservoir → réseau → machine", "Réseau → compresseur → réservoir", "Réservoir → compresseur → machine"],
      correct: 1,
      explanation: "Le compresseur comprime l'air, le réservoir le stocke, puis le réseau le distribue jusqu'à la machine." ,
    },
    exercice: {
      enonce:
        "Décrivez la chaîne de production et de distribution de l'air comprimé, et citez deux qualités de cette énergie.",
      consignes: [
        "Cite les éléments dans l'ordre.",
        "Donne deux avantages de l'air comprimé.",
        "Rappelle une précaution de sécurité.",
      ],
      criteres: [
        "J'ai cité compresseur → réservoir → réseau → machine.",
        "J'ai donné deux avantages.",
        "J'ai rappelé une précaution (air sous pression).",
      ],
      correction:
        "La chaîne est : le compresseur aspire et comprime l'air ambiant, le réservoir le stocke et amortit les variations, le réseau de tuyauteries le distribue jusqu'aux machines qui actionnent leurs vérins. Deux avantages : c'est une énergie simple et robuste, sans risque électrique côté actionneur, et facile à évacuer (retour à l'atmosphère). Précaution : l'air comprimé reste dangereux sous pression ; on ne dirige jamais un jet vers une personne et on consigne/purge avant intervention.",
    },
  },
  {
    id: "5-34",
    title: "Le traitement de l'air comprimé (FRL)",
    durationMinutes: 28,
    objectifs: [
      "Comprendre pourquoi l'air comprimé doit être traité avant usage.",
      "Identifier le rôle du filtre, du régulateur et du lubrificateur.",
    ],
    simple:
      "L'air sortant du compresseur contient de l'eau et des impuretés, et sa pression varie. Avant d'alimenter une machine, on le conditionne avec une unité FRL : un Filtre retient l'eau et les poussières, un Régulateur fixe et stabilise la pression, et un Lubrificateur (facultatif) ajoute un peu d'huile pour les composants qui le demandent.",
    vocab: [
      ["FRL", "Filtre-Régulateur-Lubrificateur : unité de conditionnement de l'air comprimé."],
      ["Filtre", "Retient l'eau (condensats) et les impuretés de l'air."],
      ["Régulateur", "Fixe une pression de service stable, réglable au manomètre."],
      ["Lubrificateur", "Ajoute un fin brouillard d'huile pour certains composants (souvent facultatif)."],
      ["Condensats", "Eau qui se forme dans l'air comprimé et qu'il faut évacuer."],
    ],
    example:
      "À l'entrée d'une machine, on trouve souvent un bloc compact : d'abord le filtre avec sa cuve où l'eau s'accumule, puis le régulateur avec son bouton et son manomètre réglé sur la pression voulue, et parfois un lubrificateur. C'est le premier élément à contrôler quand la machine « manque d'air ».",
    schema: "air-treatment-frl",
    ascii: "RESEAU → [ FILTRE ] → [ REGULATEUR ] → [ LUBRIFICATEUR (option) ] → MACHINE\n retient eau/impuretes   fixe la pression        huile fine",
    retenir: [
      "F = Filtre : retient l'eau et les impuretés.",
      "R = Régulateur : fixe et stabilise la pression de service.",
      "L = Lubrificateur : ajoute un peu d'huile (souvent facultatif).",
      "Le FRL se place à l'entrée de la machine ; on le contrôle en premier en cas de manque d'air.",
    ],
    erreurs: [
      "Négliger la purge du filtre : l'eau finit par passer et endommager les composants.",
      "Confondre le rôle du filtre (propreté) et du régulateur (pression).",
      "Croire que le lubrificateur est toujours nécessaire : beaucoup de composants sont « non lubrifiés ».",
    ],
    astucesPro: [
      "Un manque d'air à la machine s'explique souvent par un filtre encrassé ou un régulateur mal réglé.",
      "On vérifie le niveau de la cuve du filtre et on la purge régulièrement.",
      "On règle le régulateur sur la pression prescrite, ni plus ni moins.",
    ],
    diagnostic: [
      "Contrôler la pression affichée au régulateur par rapport à la valeur prescrite.",
      "Vérifier l'état du filtre (encrassement, eau dans la cuve).",
      "Contrôler le lubrificateur si le composant en aval en a besoin.",
    ],
    depannage: [
      "Nettoyer ou remplacer un filtre encrassé ; purger la cuve.",
      "Régler correctement le régulateur si la pression est trop basse ou trop haute.",
      "Ajuster le lubrificateur selon les préconisations.",
    ],
    securite: [
      "Le réglage du FRL et l'entretien se font sur un circuit consigné et purgé de sa pression résiduelle.",
      "On ne démonte jamais une cuve de filtre sous pression.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Une machine « manque d'air » : les vérins sont lents alors que le réseau de l'atelier est normal.",
      mission: ["Indiquer le premier élément à contrôler.", "Citer deux vérifications.", "Rappeler la précaution avant démontage."],
      correction:
        "Si le réseau de l'atelier est correct mais que la machine seule manque d'air, on contrôle d'abord son unité FRL, à l'entrée de la machine. Deux vérifications : la pression affichée au régulateur (réglée à la valeur prescrite ?) et l'état du filtre (encrassé, cuve pleine d'eau ?). Un filtre colmaté ou un régulateur mal réglé explique souvent le symptôme. Avant tout démontage (par exemple de la cuve du filtre), on consigne et on purge la pression résiduelle : on ne démonte jamais une cuve sous pression.",
    },
    memo: ["F filtre · R régulateur · L lubrificateur", "FRL = entrée de la machine", "Purger le filtre régulièrement"],
    resume:
      "L'unité FRL conditionne l'air comprimé avant la machine : le filtre le nettoie, le régulateur fixe la pression, le lubrificateur ajoute au besoin un peu d'huile ; c'est le premier élément à contrôler en cas de manque d'air.",
    quizIds: ["aut166", "aut167", "aut168", "aut169", "aut170"],
    verification: {
      question: "Dans une unité FRL, quel élément fixe et stabilise la pression de service ?",
      options: ["Le filtre", "Le régulateur", "Le lubrificateur", "Le compresseur"],
      correct: 1,
      explanation: "Le régulateur fixe une pression de service stable, réglable et lisible au manomètre ; le filtre nettoie et le lubrificateur ajoute de l'huile." ,
    },
    exercice: {
      enonce:
        "Expliquez le rôle de chaque élément d'une unité FRL et pourquoi on la contrôle en premier en cas de manque d'air.",
      consignes: [
        "Explique le rôle du filtre.",
        "Explique le rôle du régulateur.",
        "Explique le rôle du lubrificateur et la précaution.",
      ],
      criteres: [
        "J'ai relié le filtre à la propreté (eau, impuretés).",
        "J'ai relié le régulateur à la pression.",
        "J'ai indiqué le rôle du lubrificateur et la consignation avant démontage.",
      ],
      correction:
        "Dans une unité FRL : le filtre retient l'eau (condensats) et les impuretés pour protéger les composants ; le régulateur fixe et stabilise la pression de service, réglable au manomètre ; le lubrificateur ajoute un fin brouillard d'huile pour les composants qui l'exigent (souvent facultatif). On la contrôle en premier car un filtre encrassé ou un régulateur mal réglé explique fréquemment un manque d'air à la machine. Avant tout démontage (cuve du filtre par exemple), on consigne le circuit et on purge la pression résiduelle.",
    },
  },
  {
    id: "5-35",
    title: "Le vérin pneumatique : simple et double effet",
    durationMinutes: 30,
    objectifs: [
      "Décrire un vérin pneumatique et son rôle d'actionneur.",
      "Distinguer vérin simple effet et vérin double effet.",
    ],
    simple:
      "Le vérin est l'actionneur pneumatique le plus courant : l'air comprimé pousse un piston, ce qui fait sortir ou rentrer une tige. Dans un vérin simple effet, l'air agit dans un seul sens et un ressort assure le retour ; dans un vérin double effet, l'air agit des deux côtés, ce qui donne de la force à l'aller comme au retour.",
    vocab: [
      ["Vérin", "Actionneur qui transforme la pression de l'air en mouvement linéaire (tige)."],
      ["Piston", "Pièce mobile poussée par l'air à l'intérieur du vérin."],
      ["Simple effet", "L'air agit dans un seul sens ; le retour est assuré par un ressort."],
      ["Double effet", "L'air agit alternativement des deux côtés (force à l'aller et au retour)."],
      ["Échappement", "Sortie de l'air de la chambre non alimentée."],
    ],
    example:
      "Un vérin double effet qui pousse une pièce : l'air entre du côté arrière, le piston avance, la tige sort et pousse la pièce ; pour revenir, l'air entre de l'autre côté et la tige rentre. Un vérin simple effet, lui, sort sous pression et revient tout seul grâce à son ressort dès qu'on coupe l'air.",
    schema: "pneumatic-symbols",
    illustrations: ["pneumatic-cylinder"],
    ascii: "SIMPLE EFFET : air d'un cote → sort ; ressort → rentre\nDOUBLE EFFET : air cote 1 → sort ; air cote 2 → rentre (force aux 2 sens)\nchambre non alimentee = echappement",
    retenir: [
      "Le vérin transforme la pression de l'air en mouvement linéaire.",
      "Simple effet : air dans un sens, retour par ressort.",
      "Double effet : air des deux côtés, force à l'aller et au retour.",
      "La chambre non alimentée est à l'échappement.",
    ],
    erreurs: [
      "Croire qu'un vérin simple effet a de la force au retour (c'est le ressort, faible).",
      "Oublier que la chambre opposée doit être à l'échappement pour que le piston bouge.",
      "Confondre le vérin (actionneur) et le distributeur (préactionneur qui l'alimente).",
    ],
    astucesPro: [
      "On choisit le double effet quand on a besoin de force dans les deux sens.",
      "Un vérin qui n'avance pas malgré l'air peut avoir sa chambre opposée mal mise à l'échappement (contre-pression).",
      "Le repère de position (capteur sur le vérin) confirme fin de course sortie/rentrée.",
    ],
    diagnostic: [
      "Vérifier que l'air arrive bien à la chambre à alimenter.",
      "Vérifier que la chambre opposée est à l'échappement.",
      "Contrôler l'étanchéité du piston (fuite interne) si le mouvement est mou.",
    ],
    depannage: [
      "Rechercher une contre-pression ou un échappement bouché si le vérin peine.",
      "Contrôler les joints du piston en cas de fuite interne.",
      "Vérifier le distributeur qui alimente le vérin avant de suspecter le vérin lui-même.",
    ],
    securite: [
      "Un vérin peut se déplacer brutalement : avant intervention, on consigne l'air et on purge la pression des deux chambres.",
      "On tient compte de l'énergie résiduelle (air emprisonné) et des charges portées par la tige.",
      "Cette application est pédagogique et ne remplace ni la formation ni les procédures.",
    ],
    etudeDeCas: {
      situation: "Un vérin double effet sort correctement mais rentre très lentement et sans force.",
      mission: ["Citer deux causes possibles.", "Indiquer comment orienter le diagnostic.", "Rappeler la précaution de sécurité."],
      correction:
        "Un vérin qui sort bien mais rentre mal a un problème du côté « rentrée » : l'air n'arrive pas correctement à la chambre de retour (distributeur, raccord, réglage de vitesse trop fermé) ou l'échappement de la chambre de sortie est gêné (contre-pression). Une fuite interne au piston peut aussi affaiblir le mouvement. On oriente le diagnostic en vérifiant d'abord l'alimentation et l'échappement de chaque chambre, puis le distributeur, avant de suspecter le vérin. Avant toute intervention, on consigne l'air et on purge la pression des deux chambres, en tenant compte de la charge portée par la tige.",
    },
    memo: ["Vérin = air → mouvement", "Simple effet : ressort au retour", "Double effet : force aux 2 sens"],
    resume:
      "Le vérin transforme la pression de l'air en mouvement de tige : simple effet (retour par ressort) ou double effet (air des deux côtés, force à l'aller et au retour), la chambre opposée étant à l'échappement.",
    quizIds: ["aut171", "aut172", "aut173", "aut174", "aut175"],
    verification: {
      question: "Quelle est la différence entre un vérin simple effet et un vérin double effet ?",
      options: ["Aucune", "Le simple effet revient par ressort ; le double effet est poussé par l'air dans les deux sens", "Le double effet n'a pas de piston", "Le simple effet n'utilise pas d'air"],
      correct: 1,
      explanation: "En simple effet, l'air agit dans un sens et un ressort assure le retour ; en double effet, l'air agit des deux côtés." ,
    },
    exercice: {
      enonce:
        "Expliquez le fonctionnement d'un vérin double effet et ce qui le distingue d'un vérin simple effet.",
      consignes: [
        "Décris comment sort et rentre la tige d'un double effet.",
        "Explique le rôle de l'échappement.",
        "Indique la différence avec un simple effet.",
      ],
      criteres: [
        "J'ai décrit l'alimentation alternée des deux chambres.",
        "J'ai expliqué l'échappement de la chambre opposée.",
        "J'ai distingué le retour par ressort du simple effet.",
      ],
      correction:
        "Dans un vérin double effet, l'air comprimé entre d'abord d'un côté du piston : il le pousse et la tige sort, tandis que la chambre opposée est à l'échappement. Pour rentrer, l'air entre de l'autre côté et la première chambre passe à l'échappement. Le vérin a donc de la force à l'aller comme au retour. Un vérin simple effet, lui, n'est alimenté que d'un seul côté : il sort sous pression et revient grâce à un ressort de rappel dès que l'air est coupé, avec une force de retour faible. Le mouvement est commandé par le distributeur (préactionneur).",
    },
  },
];

export const AUTOMATISME_BLOCKS: TrainingBlock[] = [
  {
    id: "m5-b1",
    num: 1,
    title: "Découvrir l'automatisme et la structure d'un système automatisé",
    objective: "Comprendre ce qu'est un système automatisé, sa structure (PO/PC) et ses chaînes d'énergie et d'information.",
    lessonIds: block1Lessons.map((lesson) => lesson.id),
    chapterCount: block1Lessons.length,
    status: "available",
    exam: {
      questionIds: ["aut1", "aut2", "aut6", "aut8", "aut11", "aut13", "aut16", "aut18", "aut21", "aut23", "aut26", "aut28"],
      passPercent: 80,
    },
  },
  {
    id: "m5-b2",
    num: 2,
    title: "Les capteurs industriels",
    objective: "Reconnaître et choisir les capteurs TOR et analogiques (inductif, capacitif, photoélectrique…).",
    lessonIds: block2Lessons.map((lesson) => lesson.id),
    chapterCount: block2Lessons.length,
    status: "available",
    exam: {
      questionIds: ["aut31", "aut33", "aut36", "aut39", "aut41", "aut43", "aut46", "aut48", "aut51", "aut53", "aut56", "aut58", "aut61", "aut63"],
      passPercent: 80,
    },
  },
  {
    id: "m5-b3",
    num: 3,
    title: "Actionneurs et préactionneurs",
    objective: "Comprendre les actionneurs et les préactionneurs qui les commandent.",
    lessonIds: block3Lessons.map((lesson) => lesson.id),
    chapterCount: block3Lessons.length,
    status: "available",
    exam: {
      questionIds: ["aut66", "aut68", "aut71", "aut73", "aut76", "aut78", "aut81", "aut83", "aut86", "aut88", "aut91", "aut93"],
      passPercent: 80,
    },
  },
  {
    id: "m5-b4",
    num: 4,
    title: "Le pneumatique industriel",
    objective: "Maîtriser vérins, distributeurs et traitement de l'air comprimé.",
    lessonIds: block4Lessons.map((lesson) => lesson.id),
    chapterCount: 7,
    status: "in_progress",
  },
  {
    id: "m5-b5",
    num: 5,
    title: "L'automate programmable industriel (API)",
    objective: "Comprendre le rôle de l'automate, ses entrées/sorties et son cycle.",
    lessonIds: block5Lessons.map((lesson) => lesson.id),
    chapterCount: block5Lessons.length,
    status: "available",
    exam: {
      questionIds: ["aut96", "aut98", "aut101", "aut103", "aut106", "aut107", "aut111", "aut113", "aut116", "aut118", "aut121", "aut123", "aut126", "aut128"],
      passPercent: 80,
    },
  },
  { id: "m5-b6", num: 6, title: "Cycle, séquence et logique de commande", objective: "Décrire un fonctionnement séquentiel simple (approche GRAFCET).", lessonIds: [], chapterCount: 6, status: "planned" },
  {
    id: "m5-b7",
    num: 7,
    title: "Diagnostic et maintenance des systèmes automatisés",
    objective: "Diagnostiquer méthodiquement un système automatisé en sécurité.",
    lessonIds: block7Lessons.map((lesson) => lesson.id),
    chapterCount: 6,
    status: "available",
    exam: {
      questionIds: ["aut131", "aut133", "aut136", "aut139", "aut141", "aut144", "aut146", "aut148", "aut151", "aut153", "aut156", "aut159"],
      passPercent: 80,
    },
  },
];

export const AUTOMATISME_MODULE: TrainingModule = {
  id: "m5",
  num: 5,
  title: "Automatisme industriel",
  icon: Cpu,
  color: "sky",
  source: "[TMI] Parcours progressif débutant → opérationnel · capteurs, actionneurs, API · passerelle depuis le module 3",
  lessons: [...block1Lessons, ...block2Lessons, ...block3Lessons, ...block4Lessons, ...block5Lessons, ...block7Lessons],
  blocks: AUTOMATISME_BLOCKS,
};
