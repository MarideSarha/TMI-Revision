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
};
