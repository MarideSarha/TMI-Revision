import type { QuestionBank } from "../types";

/* ----------------------------------------------------------------
   BANQUE DE QUESTIONS — MODULE 5 (Automatisme industriel)
   Préfixe « aut » = automatisme.
   ---------------------------------------------------------------- */

export const AUTOMATISME_QUESTIONS: QuestionBank = {
  // --- Leçon 5-1 : Qu'est-ce qu'un système automatisé ---
  aut1: { lesson: "5-1", type: "qcm", q: "Qu'est-ce qu'un système automatisé ?", options: ["Une machine pilotée à la main en permanence", "Un ensemble qui exécute des tâches de façon autonome selon un programme", "Un simple moteur", "Un outil de mesure"], correct: 1, exp: "Un système automatisé réalise des tâches de manière autonome, selon un programme, sans intervention humaine permanente." },
  aut2: { lesson: "5-1", type: "qcm", q: "Quel élément détecte une information et l'envoie à la commande ?", options: ["L'actionneur", "Le capteur", "Le vérin", "Le moteur"], correct: 1, exp: "Le capteur détecte une grandeur et informe la partie commande ; l'actionneur, lui, agit." },
  aut3: { lesson: "5-1", type: "qcm", q: "Quel élément agit sur la matière ou le produit ?", options: ["Le capteur", "L'actionneur", "Le pupitre", "Le voyant"], correct: 1, exp: "L'actionneur (moteur, vérin) agit sous l'ordre de la commande." },
  aut4: { lesson: "5-1", type: "vf", q: "Un système automatisé fonctionne en boucle : l'effet produit est de nouveau détecté.", options: ["Vrai", "Faux"], correct: 0, exp: "Vrai : capteurs, commande et actionneurs forment une boucle ; l'effet obtenu est à nouveau détecté par les capteurs." },
  aut5: { lesson: "5-1", type: "vf", q: "Un système automatisé n'a plus besoin de maintenance.", options: ["Vrai", "Faux"], correct: 1, exp: "Faux : un système automatisé demande de la maintenance (capteurs, actionneurs, automate) pour rester fiable." },

  // --- Leçon 5-2 : Partie opérative et partie commande ---
  aut6: { lesson: "5-2", type: "qcm", q: "Que fait la partie opérative (PO) ?", options: ["Elle décide", "Elle agit physiquement (moteurs, vérins)", "Elle programme", "Elle affiche les menus"], correct: 1, exp: "La partie opérative agit sur la matière : actionneurs, capteurs, effecteurs." },
  aut7: { lesson: "5-2", type: "qcm", q: "Que fait la partie commande (PC) ?", options: ["Elle agit sur la matière", "Elle décide et pilote (souvent un automate)", "Elle transporte le produit", "Elle chauffe le moteur"], correct: 1, exp: "La partie commande décide et pilote le système, souvent à l'aide d'un automate." },
  aut8: { lesson: "5-2", type: "qcm", q: "Qu'est-ce qu'un « ordre » ?", options: ["Une information de la PO vers la PC", "Une consigne de la PC vers la PO", "Un défaut", "Une mesure de tension"], correct: 1, exp: "Un ordre est une consigne envoyée par la partie commande vers la partie opérative (ex : sortir un vérin)." },
  aut9: { lesson: "5-2", type: "qcm", q: "Qu'est-ce qu'un « compte rendu » ?", options: ["Un ordre de la PC", "Une information renvoyée par la PO vers la PC", "Un réglage", "Une panne"], correct: 1, exp: "Un compte rendu est l'information renvoyée par la partie opérative (via les capteurs) vers la partie commande." },
  aut10: { lesson: "5-2", type: "vf", q: "Sans comptes rendus, la partie commande « travaille à l'aveugle ».", options: ["Vrai", "Faux"], correct: 0, exp: "Vrai : les comptes rendus confirment que les ordres ont été exécutés ; sans eux, le cycle peut se bloquer." },

  // --- Leçon 5-3 : Chaîne d'énergie et chaîne d'information ---
  aut11: { lesson: "5-3", type: "qcm", q: "À quelle chaîne appartient un capteur ?", options: ["La chaîne d'énergie", "La chaîne d'information", "Aucune", "Les deux"], correct: 1, exp: "Le capteur acquiert une information : il appartient à la chaîne d'information." },
  aut12: { lesson: "5-3", type: "qcm", q: "À quelle chaîne appartient un moteur qui entraîne une bande ?", options: ["La chaîne d'information", "La chaîne d'énergie", "Aucune", "Le pupitre"], correct: 1, exp: "Le moteur convertit l'énergie pour agir : il appartient à la chaîne d'énergie." },
  aut13: { lesson: "5-3", type: "qcm", q: "Quelles sont les fonctions de la chaîne d'information ?", options: ["Alimenter, distribuer, agir", "Acquérir, traiter, communiquer", "Chauffer, refroidir", "Serrer, desserrer"], correct: 1, exp: "La chaîne d'information acquiert (capteur), traite (automate) et communique l'ordre." },
  aut14: { lesson: "5-3", type: "qcm", q: "Dans la chaîne d'énergie, quelle fonction autorise ou oriente l'énergie vers l'actionneur ?", options: ["Acquérir", "Distribuer (préactionneur)", "Traiter", "Communiquer"], correct: 1, exp: "La fonction « distribuer » (préactionneur : contacteur, distributeur) autorise, coupe ou oriente l'énergie vers l'actionneur." },
  aut15: { lesson: "5-3", type: "vf", q: "L'information commande l'énergie.", options: ["Vrai", "Faux"], correct: 0, exp: "Vrai : la chaîne d'information (capteurs, automate) pilote la chaîne d'énergie (préactionneurs, actionneurs)." },

  // --- Leçon 5-4 : Le cycle d'un système automatisé ---
  aut16: { lesson: "5-4", type: "qcm", q: "Qu'est-ce que le cycle d'un système automatisé ?", options: ["Un composant", "La suite d'étapes qu'il répète automatiquement", "Un capteur", "Une énergie"], correct: 1, exp: "Le cycle est la suite d'étapes que le système répète automatiquement." },
  aut17: { lesson: "5-4", type: "qcm", q: "Qu'est-ce que l'état initial ?", options: ["La fin du cycle", "La position de départ, sûre et connue, avant le lancement", "Une panne", "Un capteur"], correct: 1, exp: "L'état initial est la position de départ, sûre et connue, à partir de laquelle le cycle est lancé." },
  aut18: { lesson: "5-4", type: "qcm", q: "Quelle est la boucle interne répétée par l'automate ?", options: ["Serrer, percer, desserrer", "Lire les entrées, traiter, mettre à jour les sorties", "Alimenter, distribuer, agir", "Ouvrir, fermer"], correct: 1, exp: "Le cycle automate répète : lire les entrées (capteurs), traiter le programme, mettre à jour les sorties." },
  aut19: { lesson: "5-4", type: "vf", q: "On peut lancer un cycle sans que le système soit à l'état initial, sans risque.", options: ["Vrai", "Faux"], correct: 1, exp: "Faux : lancer un cycle hors de l'état initial peut provoquer des mouvements inattendus. On vérifie l'état initial d'abord." },
  aut20: { lesson: "5-4", type: "qcm", q: "Repérer l'étape où le cycle se bloque permet de :", options: ["Changer la couleur", "Cibler l'organe (capteur ou actionneur) concerné", "Augmenter la cadence", "Supprimer l'automate"], correct: 1, exp: "L'étape bloquante indique l'organe concerné (capteur de compte rendu ou actionneur) à contrôler." },

  // --- Leçon 5-5 : Sécurité des systèmes automatisés ---
  aut21: { lesson: "5-5", type: "qcm", q: "Quel risque particulier présente un système automatisé ?", options: ["Il est trop lent", "Il peut démarrer ou redémarrer automatiquement", "Il ne consomme rien", "Il est silencieux"], correct: 1, exp: "Un système automatisé peut redémarrer seul (temporisation, ordre) : d'où un danger si on intervient sans consignation." },
  aut22: { lesson: "5-5", type: "qcm", q: "Avant d'intervenir sur un système automatisé, on consigne :", options: ["Seulement l'électricité", "Toutes les énergies (électrique, pneumatique, hydraulique)", "Rien", "Uniquement l'air"], correct: 1, exp: "On consigne toutes les énergies présentes ; en oublier une (ex : air comprimé) laisse un danger." },
  aut23: { lesson: "5-5", type: "vf", q: "L'arrêt d'urgence suffit pour intervenir en sécurité dans une zone automatisée.", options: ["Vrai", "Faux"], correct: 1, exp: "Faux : l'arrêt d'urgence stoppe les mouvements sur le moment, mais ne remplace pas la consignation de toutes les énergies." },
  aut24: { lesson: "5-5", type: "vf", q: "Un vérin peut rester sous pression même après coupure de l'électricité.", options: ["Vrai", "Faux"], correct: 0, exp: "Vrai : le circuit pneumatique peut rester sous pression ; on purge selon la procédure avant d'intervenir." },
  aut25: { lesson: "5-5", type: "qcm", q: "Que ne fait-on jamais sur une machine automatisée en fonctionnement ?", options: ["La regarder", "Retirer un protecteur (carter, barrière)", "Lire le pupitre", "Noter la cadence"], correct: 1, exp: "On ne retire jamais un protecteur sur une machine en fonctionnement : c'est un risque grave." },

  // --- Leçon 5-6 : Repérer les sous-ensembles ---
  aut26: { lesson: "5-6", type: "qcm", q: "Que repère-t-on d'abord sur un système automatisé ?", options: ["La couleur", "La partie commande et la partie opérative", "Le prix", "La marque"], correct: 1, exp: "On repère d'abord la partie commande (décide) et la partie opérative (agit), puis capteurs et actionneurs." },
  aut27: { lesson: "5-6", type: "qcm", q: "Un détecteur de présence appartient à :", options: ["La chaîne d'énergie", "La chaîne d'information", "Aucune", "Le pupitre"], correct: 1, exp: "Un détecteur acquiert une information : il appartient à la chaîne d'information." },
  aut28: { lesson: "5-6", type: "qcm", q: "Pour situer une panne, on la place dans :", options: ["La chaîne d'information ou la chaîne d'énergie", "Le carnet de commandes", "La couleur des fils", "Le prix"], correct: 0, exp: "On situe la panne dans l'information (capteurs, commande) ou l'énergie (préactionneurs, actionneurs)." },
  aut29: { lesson: "5-6", type: "qcm", q: "Le contacteur qui distribue l'énergie au moteur est un :", options: ["Capteur", "Préactionneur", "Effecteur", "Pupitre"], correct: 1, exp: "Le contacteur est un préactionneur : il distribue l'énergie vers l'actionneur (le moteur)." },
  aut30: { lesson: "5-6", type: "vf", q: "Le repérage des sous-ensembles est la base du diagnostic d'un système automatisé.", options: ["Vrai", "Faux"], correct: 0, exp: "Vrai : identifier commande, capteurs, préactionneurs et actionneurs permet de comprendre le système et de situer une panne." },
};
