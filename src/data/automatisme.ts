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
    chapterCount: 6,
    status: "in_progress",
  },
  { id: "m5-b4", num: 4, title: "Le pneumatique industriel", objective: "Maîtriser vérins, distributeurs et traitement de l'air comprimé.", lessonIds: [], chapterCount: 7, status: "planned" },
  { id: "m5-b5", num: 5, title: "L'automate programmable industriel (API)", objective: "Comprendre le rôle de l'automate, ses entrées/sorties et son cycle.", lessonIds: [], chapterCount: 7, status: "planned" },
  { id: "m5-b6", num: 6, title: "Cycle, séquence et logique de commande", objective: "Décrire un fonctionnement séquentiel simple (approche GRAFCET).", lessonIds: [], chapterCount: 6, status: "planned" },
  { id: "m5-b7", num: 7, title: "Diagnostic et maintenance des systèmes automatisés", objective: "Diagnostiquer méthodiquement un système automatisé en sécurité.", lessonIds: [], chapterCount: 6, status: "planned" },
];

export const AUTOMATISME_MODULE: TrainingModule = {
  id: "m5",
  num: 5,
  title: "Automatisme industriel",
  icon: Cpu,
  color: "sky",
  source: "[TMI] Parcours progressif débutant → opérationnel · capteurs, actionneurs, API · passerelle depuis le module 3",
  lessons: [...block1Lessons, ...block2Lessons, ...block3Lessons],
  blocks: AUTOMATISME_BLOCKS,
};
