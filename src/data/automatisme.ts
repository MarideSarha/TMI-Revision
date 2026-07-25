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
    chapterCount: 7,
    status: "in_progress",
  },
  { id: "m5-b3", num: 3, title: "Actionneurs et préactionneurs", objective: "Comprendre les actionneurs et les préactionneurs qui les commandent.", lessonIds: [], chapterCount: 6, status: "planned" },
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
  lessons: [...block1Lessons, ...block2Lessons],
  blocks: AUTOMATISME_BLOCKS,
};
