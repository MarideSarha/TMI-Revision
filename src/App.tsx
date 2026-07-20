import { useState, useEffect, useRef, useCallback } from "react";
import {
  Wrench, Cog, Zap, Shield, Gauge, BookOpen, AlertTriangle, CheckCircle2, XCircle,
  Award, Flame, MessageCircle, Send, Moon, Sun, ChevronRight, ChevronLeft, Home,
  GraduationCap, ListChecks, Activity, HardHat, Wind, Droplet, Cpu, ClipboardList,
  Target, TrendingUp, Lock, RotateCcw, Loader2, Sparkles, Calendar, ArrowLeft,
  Settings2, Timer, PenTool, BarChart3, ShieldAlert, PlugZap, Waves
} from "lucide-react";

/* ============================================================
   TMI RÉVISION — plateforme de préparation au Titre Pro TMI
   Contenu marqué [AFORP] = issu directement du programme officiel
   Contenu marqué [+] = complément pédagogique ajouté pour réviser
   ============================================================ */

/* ---------------------------- DATA: MODULES & LEÇONS ---------------------------- */

const MODULES = [
  {
    id: "m1",
    num: 1,
    title: "Environnement industriel & sécurité de base",
    icon: HardHat,
    color: "amber",
    source: "[AFORP] Module 1 + [+] compléments sécurité",
    lessons: [
      {
        id: "1-1",
        title: "Le monde de la maintenance industrielle",
        simple:
          "Une usine fabrique des produits grâce à des machines. Ces machines doivent fonctionner sans arrêt imprévu : c'est le rôle du service maintenance de les garder en bon état, de les réparer si elles tombent en panne, et de les améliorer.",
        vocab: [
          ["Production", "Le service qui fabrique le produit."],
          ["Maintenance", "Le service qui garde les machines en état de marche."],
          ["Qualité", "Le service qui vérifie que le produit est conforme."],
          ["Méthodes", "Le service qui prépare et organise les interventions."],
          ["Criticité", "Le niveau de risque qu'une panne fait courir à la production."],
        ],
        example:
          "Sur une ligne de tri de colis en entrepôt logistique, si un moteur de convoyeur tombe en panne, toute la ligne s'arrête. Le technicien de maintenance doit intervenir vite pour relancer la production, pendant que le service qualité vérifie qu'aucun colis n'a été abîmé.",
        schema: "orgchart",
        retenir: [
          "La maintenance ne fabrique pas le produit : elle garde l'outil de production disponible.",
          "4 fonctions clés du service maintenance : réalisation (terrain), méthodes (préparation), ordonnancement (planification), magasin (pièces de rechange).",
          "Un équipement à forte criticité doit être surveillé en priorité.",
        ],
        erreurs: [
          "Confondre « entretien » (subir la panne) et « maintenance » (anticiper et maîtriser).",
          "Croire que la maintenance n'intervient qu'après une panne : elle prévient aussi.",
        ],
        quizIds: ["q1", "q2", "q3", "q4", "q5"],
        exercice: {
          enonce:
            "Une machine tombe en panne 3 fois par semaine et bloque toute la ligne de production. Un technicien la répare à chaque fois, sans jamais chercher pourquoi. Que devrait faire le service maintenance en plus des réparations ?",
          correction:
            "Il devrait analyser l'historique des pannes (dates, causes, durées) pour identifier une cause récurrente, puis mettre en place une action préventive (contrôle régulier, remplacement anticipé d'une pièce) voire une action améliorative si le défaut est structurel. Réparer sans analyser, c'est de l'entretien, pas de la maintenance.",
        },
      },
      {
        id: "1-2",
        title: "Les 3 types de maintenance",
        simple:
          "Il existe 3 grandes familles d'actions de maintenance : corriger une panne déjà présente, prévenir une panne avant qu'elle n'arrive, ou améliorer un équipement pour qu'il tombe moins souvent en panne.",
        vocab: [
          ["Maintenance corrective", "Réparer après l'apparition d'une panne (dépannage ou réparation)."],
          ["Maintenance préventive systématique", "Intervenir à intervalles fixes, sans attendre un signe de défaillance (ex : vidange tous les 10 000 km)."],
          ["Maintenance préventive conditionnelle", "Intervenir quand un indicateur montre un début de défaillance (ex : analyse vibratoire, indicateur de colmatage)."],
          ["Maintenance améliorative", "Modifier l'équipement pour augmenter sa fiabilité ou sa disponibilité."],
        ],
        example:
          "Changer une courroie cassée = corrective. Changer une courroie tous les ans par précaution = préventive systématique. Changer une courroie parce qu'un capteur de tension détecte qu'elle est trop détendue = préventive conditionnelle. Remplacer la courroie par une chaîne plus robuste pour éviter le problème définitivement = améliorative.",
        schema: "maintenance-types",
        retenir: [
          "Corrective = après la panne. Préventive = avant la panne. Améliorative = on change la conception.",
          "La préventive systématique est basée sur le temps ou l'usage. La conditionnelle est basée sur un état mesuré.",
          "Un équipement très critique (ligne qui ne doit jamais s'arrêter) justifie plus de préventif.",
        ],
        erreurs: [
          "Confondre préventif systématique et conditionnel : le premier est planifié à l'avance, le second dépend d'une mesure.",
          "Penser que la maintenance améliorative est du luxe : elle réduit souvent les coûts sur le long terme.",
        ],
        quizIds: ["q6", "q7", "q8", "q9", "q10"],
        exercice: {
          enonce:
            "Classez ces 4 actions : (a) remplacer un roulement après un test d'analyse vibratoire, (b) remplacer un filtre à air tous les 3 mois, (c) réparer un vérin qui fuit, (d) ajouter un carter de protection supplémentaire sur une chaîne de transmission qui s'use trop vite.",
          correction:
            "(a) préventive conditionnelle — décidée suite à une mesure. (b) préventive systématique — intervalle fixe. (c) corrective — la panne est déjà là. (d) améliorative — on modifie l'équipement pour le rendre plus fiable.",
        },
      },
      {
        id: "1-3",
        title: "Sécurité de base : EPI et consignation",
        simple:
          "Avant toute intervention sur une machine, il faut d'abord protéger sa propre sécurité et celle des autres. On porte des équipements de protection, et on s'assure que la machine ne peut pas redémarrer ni libérer d'énergie dangereuse pendant l'intervention : c'est la consignation.",
        vocab: [
          ["EPI", "Équipement de Protection Individuelle : gants isolants, lunettes, chaussures de sécurité, casque."],
          ["Consignation", "Ensemble des opérations qui isolent une machine de toutes ses sources d'énergie avant intervention."],
          ["Mise hors énergie", "Couper l'alimentation électrique, pneumatique, hydraulique ou mécanique d'un équipement."],
          ["VAT", "Vérificateur d'Absence de Tension : outil qui confirme qu'un circuit électrique est bien hors tension."],
          ["Arrêt d'urgence", "Dispositif qui coupe immédiatement le mouvement dangereux d'une machine."],
          ["NF C 18-510", "Norme française qui encadre les habilitations électriques et les règles de sécurité électrique."],
        ],
        example:
          "Avant de changer un contacteur dans une armoire électrique, le technicien coupe le disjoncteur, cadenasse l'interrupteur pour que personne ne le remette en marche, puis vérifie avec un VAT qu'il n'y a plus de tension avant de toucher le moindre fil.",
        schema: "consignation-steps",
        retenir: [
          "L'ordre de la consignation : séparer (couper) → condamner (cadenasser) → identifier → vérifier l'absence d'énergie (VAT).",
          "On ne shunte JAMAIS un dispositif de sécurité, même pour aller plus vite.",
          "La sécurité passe toujours avant la réparation, sans exception.",
        ],
        erreurs: [
          "Vérifier l'absence de tension seulement « à l'oreille » ou en supposant que c'est coupé : il faut toujours mesurer avec un VAT.",
          "Réarmer un arrêt d'urgence sans avoir compris pourquoi il s'est déclenché.",
        ],
        quizIds: ["q11", "q12", "q13", "q14", "q15", "q16"],
        exercice: {
          enonce:
            "Un collègue vous dit : « Pas besoin de cadenasser, je reste à côté de l'armoire, personne ne touchera à rien. » Que répondez-vous ?",
          correction:
            "Rester à côté ne protège pas contre un redémarrage automatique (automate, minuterie) ni contre une erreur de manipulation par une autre personne non informée. La condamnation physique (cadenas) est obligatoire : elle rend l'action de remise sous tension impossible, pas seulement improbable.",
        },
      },
    ],
  },
  {
    id: "m2",
    num: 2,
    title: "Mathématiques appliquées à la maintenance",
    icon: Gauge,
    color: "sky",
    source: "[AFORP] Module 2",
    lessons: [
      {
        id: "2-1",
        title: "Fractions, pourcentages, proportionnalité",
        simple:
          "En maintenance, on calcule tout le temps des proportions : un pourcentage de disponibilité, une fraction de pièce, une règle de trois pour convertir une unité. Ce sont des outils du quotidien, pas des exercices abstraits.",
        vocab: [
          ["Fraction", "Une partie d'un tout, écrite a/b."],
          ["Pourcentage", "Une fraction ramenée sur 100."],
          ["Proportionnalité", "Deux grandeurs qui augmentent ou diminuent dans les mêmes proportions."],
          ["Règle de trois", "Méthode pour trouver une valeur inconnue à partir d'une proportion connue."],
        ],
        example:
          "Une machine a fonctionné 22 heures sur les 24 heures d'une journée. Sa disponibilité est de 22/24 = 0,9166, soit 91,7 %. Si l'entreprise vise 95 %, on sait qu'il faut réduire les arrêts.",
        schema: "percentage-bar",
        retenir: [
          "Pourcentage = (valeur / total) × 100.",
          "Règle de trois : si A correspond à B, alors C correspond à (C × B) / A.",
          "Toujours vérifier que le résultat a un sens physique (une disponibilité ne peut pas dépasser 100 %).",
        ],
        erreurs: [
          "Oublier de multiplier par 100 pour obtenir un pourcentage.",
          "Inverser le numérateur et le dénominateur dans une règle de trois.",
        ],
        quizIds: ["q17", "q18", "q19", "q20", "q21", "q22"],
        exercice: {
          enonce:
            "Une ligne de production a fonctionné 6h30 sur une équipe de 8h. Quel est son taux de disponibilité en pourcentage ?",
          correction:
            "6h30 = 6,5 h. Taux = (6,5 / 8) × 100 = 81,25 %. On arrondit généralement à 81,3 %.",
        },
      },
      {
        id: "2-2",
        title: "Puissance, énergie, rendement",
        simple:
          "La puissance, c'est la vitesse à laquelle une machine consomme ou fournit de l'énergie. L'énergie, c'est la quantité totale utilisée sur une durée. Le rendement compare ce qu'on récupère à ce qu'on a fourni.",
        vocab: [
          ["Puissance (P)", "Énergie fournie par unité de temps, en Watts (W)."],
          ["Énergie (E)", "P × t, en Joules ou en kWh."],
          ["Rendement (η)", "Rapport entre la puissance utile et la puissance fournie, toujours inférieur à 1 (ou 100 %)."],
        ],
        example:
          "Un moteur consomme 3 kW pendant 2 heures : il consomme 6 kWh d'énergie. S'il ne restitue que 2,4 kW de puissance mécanique utile sur les 3 kW consommés, son rendement est 2,4/3 = 0,8, soit 80 %. Les 20 % restants sont perdus en chaleur.",
        schema: "energy-flow",
        retenir: [
          "E (kWh) = P (kW) × t (h).",
          "Rendement = puissance utile / puissance consommée. Toujours < 100 % dans la réalité.",
          "Un rendement qui baisse dans le temps est souvent le signe d'une usure ou d'un encrassement.",
        ],
        erreurs: [
          "Confondre puissance (instantanée) et énergie (cumulée sur une durée).",
          "Annoncer un rendement supérieur à 100 % : c'est physiquement impossible, il y a une erreur de calcul.",
        ],
        quizIds: ["q23", "q24", "q25", "q26", "q27"],
        exercice: {
          enonce:
            "Un moteur électrique reçoit une puissance de 5 kW et fournit une puissance mécanique utile de 4,25 kW. Calculez son rendement en pourcentage.",
          correction:
            "Rendement = 4,25 / 5 = 0,85, soit 85 %. Les 15 % restants sont dissipés en pertes (chaleur, frottements).",
        },
      },
      {
        id: "2-3",
        title: "Force, couple, pression, débit",
        simple:
          "Ces 4 grandeurs reviennent sans cesse en mécanique et en fluides : la force pousse ou tire, le couple fait tourner, la pression s'exerce sur une surface, le débit mesure un flux qui passe.",
        vocab: [
          ["Force (F)", "Action qui peut déplacer ou déformer un objet, en Newtons (N)."],
          ["Couple (C)", "Force qui fait tourner autour d'un axe, C = F × d, en N·m."],
          ["Pression (P)", "Force appliquée sur une surface, P = F / S, en Pascals ou en bars."],
          ["Débit (Q)", "Volume de fluide qui passe par unité de temps, en L/min ou m³/h."],
        ],
        example:
          "Pour serrer un boulon avec une clé dynamométrique à un couple de 50 N·m sur un bras de levier de 0,25 m, il faut appliquer une force de F = C / d = 50 / 0,25 = 200 N.",
        schema: "torque-diagram",
        retenir: [
          "Couple = Force × distance au point de rotation.",
          "Pression = Force / Surface : plus la surface est petite, plus la pression est grande pour une même force.",
          "Débit = Volume / temps : utile pour dimensionner un vérin ou une pompe hydraulique.",
        ],
        erreurs: [
          "Oublier de convertir les unités (mm en m, bars en Pascals) avant de calculer.",
          "Confondre force et pression : la pression dépend de la surface sur laquelle la force s'applique.",
        ],
        quizIds: ["q28", "q29", "q30", "q31", "q32"],
        exercice: {
          enonce:
            "Un vérin hydraulique a un piston de section 20 cm² et doit développer une force de 4000 N. Quelle pression d'huile (en bars) faut-il lui fournir ? (1 bar = 100 000 Pa, 20 cm² = 0,002 m²)",
          correction:
            "P = F / S = 4000 / 0,002 = 2 000 000 Pa. Conversion en bars : 2 000 000 / 100 000 = 20 bars.",
        },
      },
    ],
  },
  {
    id: "m3",
    num: 3,
    title: "Électrotechnique industrielle",
    icon: Zap,
    color: "violet",
    source: "[AFORP] Module 3",
    lessons: [
      {
        id: "3-1",
        title: "Tension, intensité, résistance, loi d'Ohm",
        simple:
          "L'électricité, c'est un peu comme l'eau dans un tuyau : la tension pousse, l'intensité est le débit de courant, et la résistance freine ce courant. La loi d'Ohm relie ces trois grandeurs.",
        vocab: [
          ["Tension (U)", "Différence de potentiel électrique, en Volts (V)."],
          ["Intensité (I)", "Quantité de courant qui circule, en Ampères (A)."],
          ["Résistance (R)", "Ce qui s'oppose au passage du courant, en Ohms (Ω)."],
          ["Loi d'Ohm", "U = R × I."],
          ["Courant continu (DC)", "Le courant circule toujours dans le même sens (ex : batterie)."],
          ["Courant alternatif (AC)", "Le courant change de sens périodiquement (ex : réseau EDF, 50 Hz)."],
          ["Monophasé", "Réseau alternatif à une seule phase, souvent 230 V (usage domestique)."],
          ["Triphasé", "Réseau alternatif à 3 phases, souvent 400 V (usage industriel, moteurs)."],
        ],
        example:
          "Un radiateur de résistance 50 Ω branché sur du 230 V consomme un courant I = U / R = 230 / 50 = 4,6 A.",
        schema: "ohm-triangle",
        retenir: [
          "Triangle U-R-I : U = R × I, I = U / R, R = U / I.",
          "Le triphasé alimente les moteurs industriels car il fournit un champ tournant naturel.",
          "230 V entre phase et neutre, environ 400 V entre deux phases en triphasé standard français.",
        ],
        erreurs: [
          "Confondre 230 V (monophasé) et 400 V (entre phases en triphasé) : ce ne sont pas deux tensions différentes par hasard, elles sont liées par √3.",
          "Oublier que la loi d'Ohm ne s'applique telle quelle qu'en courant continu ou en résistance pure.",
        ],
        quizIds: ["q33", "q34", "q35", "q36", "q37", "q38"],
        exercice: {
          enonce:
            "Un moteur monophasé absorbe un courant de 8 A sous une tension de 230 V. Sa résistance interne équivalente est-elle proche de 29 Ω ? Vérifiez le calcul.",
          correction:
            "R = U / I = 230 / 8 = 28,75 Ω, soit environ 29 Ω. Le calcul est correct (à noter : un vrai moteur n'est pas une résistance pure, mais l'exercice reste valable pour s'entraîner à la loi d'Ohm).",
        },
      },
      {
        id: "3-2",
        title: "Appareillage électrique industriel",
        simple:
          "Dans une armoire électrique, plusieurs composants protègent et pilotent les moteurs : les fusibles et disjoncteurs coupent en cas de défaut, les contacteurs pilotent la mise en route, les relais thermiques protègent contre la surcharge.",
        vocab: [
          ["Fusible", "Coupe le circuit en fondant si le courant dépasse une valeur : protection non réarmable."],
          ["Disjoncteur", "Coupe le circuit automatiquement en cas de surcharge ou court-circuit, réarmable."],
          ["Contacteur", "Interrupteur commandé électriquement pour piloter un moteur à distance."],
          ["Relais thermique", "Protège le moteur contre une surcharge prolongée en coupant l'alimentation."],
          ["Moteur asynchrone", "Type de moteur électrique le plus courant en industrie, alimenté en triphasé."],
          ["Variateur de vitesse", "Appareil qui fait varier la vitesse d'un moteur en modifiant fréquence et tension."],
        ],
        example:
          "Sur un convoyeur, le contacteur ferme le circuit pour démarrer le moteur quand on appuie sur « marche ». Si le moteur force trop (colis coincé), le relais thermique détecte la surcharge et coupe l'alimentation avant que le moteur ne grille.",
        schema: "control-circuit",
        retenir: [
          "Fusible = protection non réarmable contre le court-circuit. Disjoncteur = protection réarmable.",
          "Relais thermique = protection spécifique contre la surcharge du moteur, pas contre le court-circuit.",
          "Un contacteur ne protège rien : il commande. C'est le relais thermique et le disjoncteur qui protègent.",
        ],
        erreurs: [
          "Confondre contacteur (qui commande) et disjoncteur (qui protège).",
          "Réarmer un relais thermique plusieurs fois sans chercher la cause de la surcharge.",
        ],
        quizIds: ["q39", "q40", "q41", "q42", "q43", "q44"],
        exercice: {
          enonce:
            "Un moteur s'arrête tout seul après 10 minutes de marche, sans bruit anormal ni fumée. Quel composant a probablement agi, et pourquoi ?",
          correction:
            "Le relais thermique a probablement coupé le circuit car le moteur consommait un courant trop élevé pendant trop longtemps (surcharge). Il faut vérifier la charge mécanique entraînée avant de réarmer.",
        },
      },
      {
        id: "3-3",
        title: "Appareils de mesure et diagnostic de premier niveau",
        simple:
          "Pour diagnostiquer une panne électrique, il faut savoir choisir et utiliser le bon outil de mesure, toujours en respectant la sécurité.",
        vocab: [
          ["Multimètre", "Mesure tension, intensité, résistance et continuité."],
          ["Pince ampèremétrique", "Mesure l'intensité sans ouvrir le circuit, en entourant le câble."],
          ["VAT", "Vérificateur d'Absence de Tension, utilisé juste avant de toucher un circuit consigné."],
          ["Continuité", "Test qui vérifie qu'un circuit ou un composant n'est pas coupé."],
        ],
        example:
          "Pour savoir si un moteur triphasé est bien alimenté sur ses 3 phases sans démonter l'armoire, on utilise une pince ampèremétrique sur chaque fil d'alimentation.",
        schema: "measurement-tools",
        retenir: [
          "Toujours vérifier l'absence de tension avec un VAT avant de toucher un circuit, même consigné.",
          "La pince ampèremétrique mesure sans contact direct avec le conducteur nu : plus sûr pour l'intensité.",
          "Le multimètre en mode continuité doit toujours être utilisé hors tension.",
        ],
        erreurs: [
          "Mesurer une résistance ou une continuité sur un circuit encore sous tension : risque d'endommager l'appareil et danger pour l'utilisateur.",
          "Utiliser un multimètre en position ampèremètre en série sans précaution : cela peut créer un court-circuit si mal branché.",
        ],
        quizIds: ["q45", "q46", "q47", "q48", "q49", "q50"],
        exercice: {
          enonce:
            "Vous devez vérifier si un contacteur a un contact collé (fermé alors qu'il ne devrait pas l'être). Quel appareil utilisez-vous, et dans quel état doit être le circuit ?",
          correction:
            "On utilise un multimètre en mode continuité (ou ohmmètre), et le circuit doit être hors tension et consigné avant la mesure. On mesure entre les bornes du contact : si continuité alors qu'il devrait être ouvert, le contact est collé.",
        },
      },
    ],
  },
];

/* ---------------------------- DATA: QUESTION BANK (50) ---------------------------- */

const QUESTIONS = {
  q1: { lesson: "1-1", type: "qcm", q: "Quel est le rôle principal du service maintenance ?", options: ["Fabriquer le produit", "Garder les équipements en état de fonctionner", "Vendre les produits", "Contrôler la comptabilité"], correct: 1, exp: "La maintenance ne produit pas : elle garde l'outil de production disponible et fiable." },
  q2: { lesson: "1-1", type: "vf", q: "« Entretenir » et « maintenir » veulent dire exactement la même chose.", options: ["Vrai", "Faux"], correct: 1, exp: "Entretenir, c'est subir la panne. Maintenir, c'est anticiper et maîtriser le matériel." },
  q3: { lesson: "1-1", type: "qcm", q: "Quelle fonction du service maintenance prépare les interventions avant qu'elles aient lieu ?", options: ["Réalisation", "Méthodes", "Magasin", "Qualité"], correct: 1, exp: "La fonction Méthodes analyse et prépare le travail avant l'intervention terrain." },
  q4: { lesson: "1-1", type: "qcm", q: "Un équipement à forte criticité est un équipement...", options: ["Peu utilisé", "Dont la panne a un fort impact sur la production", "Neuf", "Facile à réparer"], correct: 1, exp: "La criticité mesure le risque (technique, financier, humain) qu'une panne fait courir." },
  q5: { lesson: "1-1", type: "vf", q: "Le service Ordonnancement gère les stocks de pièces de rechange.", options: ["Vrai", "Faux"], correct: 1, exp: "C'est le Magasin qui gère les pièces de rechange. L'Ordonnancement planifie les interventions." },

  q6: { lesson: "1-2", type: "qcm", q: "Changer une pièce parce qu'un capteur a détecté un début d'usure, c'est de la maintenance...", options: ["Corrective", "Préventive systématique", "Préventive conditionnelle", "Améliorative"], correct: 2, exp: "On agit suite à une mesure d'état : c'est du conditionnel, pas du systématique (qui serait à intervalle fixe)." },
  q7: { lesson: "1-2", type: "qcm", q: "Réparer un vérin après qu'il ait commencé à fuir est de la maintenance...", options: ["Corrective", "Préventive systématique", "Préventive conditionnelle", "Améliorative"], correct: 0, exp: "La panne (la fuite) est déjà là : on corrige un défaut existant." },
  q8: { lesson: "1-2", type: "vf", q: "La maintenance améliorative consiste à modifier la conception d'un équipement pour le rendre plus fiable.", options: ["Vrai", "Faux"], correct: 0, exp: "Exact : on ne se contente pas de réparer, on change la conception pour éviter que le problème revienne." },
  q9: { lesson: "1-2", type: "qcm", q: "Remplacer un filtre tous les 3 mois par habitude, sans mesure préalable, relève de :", options: ["Préventif conditionnel", "Préventif systématique", "Correctif", "Améliorative"], correct: 1, exp: "Intervalle fixe défini à l'avance = systématique." },
  q10: { lesson: "1-2", type: "vf", q: "La maintenance corrective se produit toujours après l'apparition d'une défaillance.", options: ["Vrai", "Faux"], correct: 0, exp: "Par définition, la corrective intervient une fois que le défaut est déjà présent." },

  q11: { lesson: "1-3", type: "qcm", q: "Quel est le premier réflexe avant toute intervention sur une machine ?", options: ["Commencer la réparation", "Sécuriser (EPI, consignation)", "Demander un devis", "Prévenir le client"], correct: 1, exp: "La sécurité passe toujours avant la réparation." },
  q12: { lesson: "1-3", type: "qcm", q: "Que signifie VAT ?", options: ["Vérificateur d'Absence de Tension", "Variateur Automatique de Tension", "Valeur d'Alimentation Triphasée", "Vérification Annuelle Technique"], correct: 0, exp: "Le VAT confirme qu'un circuit est bien hors tension avant intervention." },
  q13: { lesson: "1-3", type: "vf", q: "On peut réarmer un arrêt d'urgence sans chercher pourquoi il s'est déclenché, tant qu'on est pressé.", options: ["Vrai", "Faux"], correct: 1, exp: "Il faut toujours comprendre la cause avant de réarmer un dispositif de sécurité." },
  q14: { lesson: "1-3", type: "qcm", q: "L'ordre correct d'une consignation électrique est :", options: ["Vérifier → Séparer → Condamner", "Séparer → Condamner → Identifier → Vérifier l'absence de tension", "Condamner → Réparer → Vérifier", "Identifier → Réparer → Séparer"], correct: 1, exp: "On sépare la source, on condamne (cadenas), on identifie l'ouvrage, puis on vérifie l'absence de tension avec un VAT." },
  q15: { lesson: "1-3", type: "qcm", q: "La norme NF C 18-510 concerne :", options: ["La qualité alimentaire", "Les habilitations et la sécurité électrique", "La comptabilité industrielle", "Le transport de marchandises"], correct: 1, exp: "C'est la norme française de référence pour la prévention des risques électriques." },
  q16: { lesson: "1-3", type: "vf", q: "Rester physiquement à côté d'une armoire électrique ouverte remplace la condamnation par cadenas.", options: ["Vrai", "Faux"], correct: 1, exp: "Cela ne protège pas contre un redémarrage automatique ou une erreur d'un tiers : le cadenas est indispensable." },

  q17: { lesson: "2-1", type: "qcm", q: "Une machine a fonctionné 18h sur 24h. Quel est son taux de disponibilité ?", options: ["60 %", "70 %", "75 %", "80 %"], correct: 2, exp: "18/24 = 0,75, soit 75 %." },
  q18: { lesson: "2-1", type: "qcm", q: "Convertir 3/4 en pourcentage donne :", options: ["34 %", "43 %", "75 %", "0,75 %"], correct: 2, exp: "3/4 = 0,75 = 75 %." },
  q19: { lesson: "2-1", type: "calc", q: "Si 5 pièces coûtent 40 €, combien coûtent 8 pièces (même prix unitaire) ?", options: ["56 €", "64 €", "72 €", "80 €"], correct: 1, exp: "Prix unitaire = 40/5 = 8 €. Pour 8 pièces : 8 × 8 = 64 €." },
  q20: { lesson: "2-1", type: "vf", q: "Un taux de disponibilité peut dépasser 100 %.", options: ["Vrai", "Faux"], correct: 1, exp: "Impossible physiquement : le temps de fonctionnement ne peut pas dépasser le temps total disponible." },
  q21: { lesson: "2-1", type: "qcm", q: "Pour calculer un pourcentage, la formule est :", options: ["(valeur × total) / 100", "(valeur / total) × 100", "valeur + total × 100", "100 / (valeur × total)"], correct: 1, exp: "Pourcentage = (valeur / total) × 100." },
  q22: { lesson: "2-1", type: "calc", q: "Une pièce mesure 1,20 m. Un plan indique une échelle de conversion : 4 pièces identiques mises bout à bout couvrent quelle longueur ?", options: ["3,6 m", "4,2 m", "4,8 m", "5,2 m"], correct: 2, exp: "1,20 × 4 = 4,80 m." },

  q23: { lesson: "2-2", type: "qcm", q: "Un moteur de 2 kW fonctionne pendant 3 heures. Quelle énergie a-t-il consommée ?", options: ["2 kWh", "3 kWh", "5 kWh", "6 kWh"], correct: 3, exp: "E = P × t = 2 × 3 = 6 kWh." },
  q24: { lesson: "2-2", type: "qcm", q: "Le rendement d'une machine est le rapport entre :", options: ["Puissance utile et puissance consommée", "Tension et intensité", "Temps et distance", "Masse et volume"], correct: 0, exp: "Rendement = puissance utile / puissance consommée, toujours inférieur à 100 %." },
  q25: { lesson: "2-2", type: "vf", q: "Un rendement de 105 % est possible si la machine est très performante.", options: ["Vrai", "Faux"], correct: 1, exp: "Un rendement dépasse jamais 100 % : il y a toujours des pertes (chaleur, frottements)." },
  q26: { lesson: "2-2", type: "calc", q: "Un moteur consomme 4 kW et fournit 3,2 kW utiles. Quel est son rendement ?", options: ["70 %", "75 %", "80 %", "85 %"], correct: 2, exp: "3,2 / 4 = 0,8 = 80 %." },
  q27: { lesson: "2-2", type: "qcm", q: "Une baisse progressive du rendement d'une machine dans le temps indique souvent :", options: ["Une amélioration de conception", "Une usure ou un encrassement", "Une baisse de tension du réseau uniquement", "Rien d'anormal"], correct: 1, exp: "C'est souvent le signe d'usure, de frottements accrus ou d'encrassement." },

  q28: { lesson: "2-3", type: "qcm", q: "Le couple se calcule par la formule :", options: ["C = F / d", "C = F × d", "C = F + d", "C = d / F"], correct: 1, exp: "Couple = Force × distance au point de rotation." },
  q29: { lesson: "2-3", type: "qcm", q: "La pression se calcule par :", options: ["P = F × S", "P = F / S", "P = S / F", "P = F + S"], correct: 1, exp: "Pression = Force / Surface." },
  q30: { lesson: "2-3", type: "calc", q: "Une force de 100 N est appliquée avec un bras de levier de 0,5 m. Quel est le couple ?", options: ["20 N·m", "50 N·m", "150 N·m", "200 N·m"], correct: 1, exp: "C = F × d = 100 × 0,5 = 50 N·m." },
  q31: { lesson: "2-3", type: "vf", q: "Pour une même force, plus la surface d'appui est petite, plus la pression est grande.", options: ["Vrai", "Faux"], correct: 0, exp: "P = F/S : si S diminue, P augmente pour une force F constante." },
  q32: { lesson: "2-3", type: "calc", q: "Un débit de 30 L/min correspond à combien de litres en 5 minutes ?", options: ["100 L", "120 L", "150 L", "180 L"], correct: 2, exp: "30 × 5 = 150 L." },

  q33: { lesson: "3-1", type: "qcm", q: "La loi d'Ohm s'écrit :", options: ["U = R + I", "U = R × I", "U = R / I", "U = I / R"], correct: 1, exp: "U = R × I, la relation fondamentale entre tension, résistance et intensité." },
  q34: { lesson: "3-1", type: "qcm", q: "Une résistance de 20 Ω est parcourue par un courant de 5 A. Quelle est la tension à ses bornes ?", options: ["4 V", "25 V", "100 V", "15 V"], correct: 2, exp: "U = R × I = 20 × 5 = 100 V." },
  q35: { lesson: "3-1", type: "vf", q: "En France, le triphasé industriel standard est autour de 400 V entre phases.", options: ["Vrai", "Faux"], correct: 0, exp: "230 V entre phase et neutre, environ 400 V entre deux phases (rapport √3)." },
  q36: { lesson: "3-1", type: "qcm", q: "Le courant alternatif se caractérise par :", options: ["Un sens toujours identique", "Un sens qui change périodiquement", "L'absence de tension", "Une résistance nulle"], correct: 1, exp: "Le courant change de sens à une fréquence donnée (50 Hz en France)." },
  q37: { lesson: "3-1", type: "calc", q: "Une résistance a une tension de 12 V à ses bornes pour un courant de 3 A. Quelle est sa valeur ?", options: ["2 Ω", "4 Ω", "6 Ω", "36 Ω"], correct: 1, exp: "R = U / I = 12 / 3 = 4 Ω." },
  q38: { lesson: "3-1", type: "vf", q: "Le triphasé est privilégié pour les moteurs industriels car il crée naturellement un champ tournant.", options: ["Vrai", "Faux"], correct: 0, exp: "C'est un des grands avantages du triphasé pour les moteurs asynchrones." },

  q39: { lesson: "3-2", type: "qcm", q: "Quel composant protège spécifiquement contre une surcharge prolongée du moteur ?", options: ["Le contacteur", "Le relais thermique", "Le fusible", "Le variateur"], correct: 1, exp: "Le relais thermique surveille le courant moteur et coupe en cas de surcharge durable." },
  q40: { lesson: "3-2", type: "qcm", q: "Le contacteur sert principalement à :", options: ["Protéger contre le court-circuit", "Commander la mise en route/arrêt à distance", "Mesurer la tension", "Réguler la pression"], correct: 1, exp: "Le contacteur commande, il ne protège pas." },
  q41: { lesson: "3-2", type: "vf", q: "Un fusible peut être réarmé après avoir fondu.", options: ["Vrai", "Faux"], correct: 1, exp: "Un fusible fondu doit être remplacé, contrairement à un disjoncteur qui se réarme." },
  q42: { lesson: "3-2", type: "qcm", q: "Le variateur de vitesse agit sur :", options: ["La couleur du moteur", "La fréquence et la tension d'alimentation", "Le poids du moteur", "Le nombre de phases uniquement"], correct: 1, exp: "En modifiant fréquence et tension, le variateur fait varier la vitesse du moteur asynchrone." },
  q43: { lesson: "3-2", type: "vf", q: "Réarmer un relais thermique plusieurs fois sans chercher la cause est une bonne pratique.", options: ["Vrai", "Faux"], correct: 1, exp: "Il faut identifier la cause de la surcharge avant de réarmer, sinon on risque d'endommager le moteur." },
  q44: { lesson: "3-2", type: "qcm", q: "Le moteur asynchrone industriel est le plus souvent alimenté en :", options: ["Continu 12 V", "Monophasé 230 V uniquement", "Triphasé", "Basse fréquence uniquement"], correct: 2, exp: "Le triphasé est la norme pour les moteurs industriels de puissance." },

  q45: { lesson: "3-3", type: "qcm", q: "Avant de mesurer la continuité d'un contact avec un multimètre, le circuit doit être :", options: ["Sous tension", "Hors tension", "En surcharge", "Peu importe"], correct: 1, exp: "La mesure de continuité s'effectue toujours hors tension, sous peine d'endommager l'appareil ou de se mettre en danger." },
  q46: { lesson: "3-3", type: "qcm", q: "Quel appareil permet de mesurer l'intensité sans ouvrir le circuit ?", options: ["Multimètre en mode tension", "Pince ampèremétrique", "VAT", "Manomètre"], correct: 1, exp: "La pince ampèremétrique entoure le câble et mesure le champ magnétique induit par le courant." },
  q47: { lesson: "3-3", type: "vf", q: "Le VAT doit être utilisé juste avant de toucher un circuit, même s'il a déjà été consigné.", options: ["Vrai", "Faux"], correct: 0, exp: "C'est la dernière étape indispensable de la consignation, à ne jamais sauter." },
  q48: { lesson: "3-3", type: "qcm", q: "Pour vérifier si un contact de contacteur est resté collé, on utilise :", options: ["Un manomètre", "Un multimètre en mode continuité, hors tension", "Une pince ampèremétrique sous tension", "Un tachymètre"], correct: 1, exp: "On teste la continuité entre les bornes du contact, hors tension." },
  q49: { lesson: "3-3", type: "vf", q: "On peut mesurer une résistance sur un circuit encore sous tension sans problème.", options: ["Vrai", "Faux"], correct: 1, exp: "C'est dangereux et cela peut endommager l'appareil de mesure : il faut être hors tension." },
  q50: { lesson: "3-3", type: "qcm", q: "Le multimètre permet de mesurer :", options: ["Uniquement la tension", "Tension, intensité, résistance, continuité", "Uniquement la pression", "Uniquement le débit"], correct: 1, exp: "C'est un appareil polyvalent pour les mesures électriques de base." },
};

/* ---------------------------- DATA: PANNES (10 scénarios) ---------------------------- */

const PANNES = [
  {
    id: "p1",
    title: "Le convoyeur ne démarre plus",
    icon: Activity,
    symptomes:
      "Vous appuyez sur le bouton « marche » du convoyeur : rien ne se passe, aucun bruit, aucun voyant de défaut ne clignote sur le pupitre.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Le moteur est totalement grillé", "Un arrêt d'urgence de la ligne est resté enclenché", "Le variateur est en surchauffe", "La courroie a cassé"], correct: 1 },
      { label: "Premier contrôle à effectuer ?", options: ["Démonter le moteur", "Inspecter visuellement tous les boutons d'arrêt d'urgence de la ligne", "Mesurer le débit d'huile", "Changer le contacteur"], correct: 1 },
      { label: "Appareil de mesure à utiliser si besoin ?", options: ["Manomètre", "Tachymètre", "Multimètre / VAT", "Débitmètre"], correct: 2 },
      { label: "Règle de sécurité à respecter ?", options: ["Réarmer directement sans vérifier", "Ne jamais shunter le circuit de sécurité, vérifier avant de réarmer", "Ignorer la procédure car on est pressé", "Démonter l'AU"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Remplacer le moteur", "Identifier l'AU enclenché, vérifier qu'il n'y a pas de danger réel, puis le réarmer et retester", "Court-circuiter le bouton", "Changer la courroie"], correct: 1 },
    ],
    correction:
      "Quand une machine ne démarre pas sans aucun signe de défaut électrique, le premier réflexe est de vérifier tous les arrêts d'urgence de la ligne (souvent partagés entre plusieurs postes). Une fois la cause identifiée (bouton resté enclenché, coup accidentel), on vérifie qu'il n'y a aucun danger réel avant de réarmer, puis on relance un test à vide avant de remettre en production.",
  },
  {
    id: "p2",
    title: "Le moteur chauffe anormalement",
    icon: Zap,
    symptomes:
      "Un moteur triphasé d'entraînement de convoyeur est très chaud au toucher après seulement 20 minutes de marche. Aucune odeur de brûlé, pas de bruit anormal.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Manque de peinture sur le carter", "Surcharge mécanique ou déséquilibre entre les 3 phases", "Le moteur est neuf", "Trop de lubrifiant"], correct: 1 },
      { label: "Contrôle prioritaire ?", options: ["Vérifier la couleur du moteur", "Mesurer l'intensité sur les 3 phases et comparer à la plaque signalétique", "Changer le moteur directement", "Vérifier le niveau d'huile du réducteur uniquement"], correct: 1 },
      { label: "Appareil de mesure adapté ?", options: ["Pince ampèremétrique", "Manomètre", "Débitmètre", "Thermomètre à mercure"], correct: 0 },
      { label: "Sécurité à respecter avant d'ouvrir le bornier ?", options: ["Aucune précaution nécessaire", "Vérifier l'absence de tension (VAT) après consignation, porter les EPI", "Toucher directement les fils", "Laisser sous tension pour mesurer plus vite"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Peindre le moteur", "Corriger la surcharge ou le déséquilibre de phase identifié, puis remettre en service progressivement", "Changer la couleur du carter", "Ne rien faire, c'est normal"], correct: 1 },
    ],
    correction:
      "Un moteur qui chauffe sans bruit ni odeur suspecte oriente vers une surcharge (charge mécanique trop importante) ou un déséquilibre entre les phases (une phase qui alimente moins que les autres). On mesure l'intensité sur chaque phase avec une pince ampèremétrique et on compare à la valeur nominale de la plaque signalétique. Un écart important entre phases confirme le déséquilibre.",
  },
  {
    id: "p3",
    title: "Le capteur ne détecte plus les colis",
    icon: Target,
    symptomes:
      "Le capteur de présence en bout de convoyeur ne déclenche plus le comptage des colis, alors que ceux-ci passent bien devant.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Le capteur est encrassé ou mal aligné", "Le moteur est en panne", "Le disjoncteur a coupé toute la ligne", "Le variateur est en défaut"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Vérifier l'alimentation et le signal de sortie du capteur", "Changer le moteur", "Vérifier la pression pneumatique", "Contrôler la tension du réseau triphasé"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Manomètre", "Multimètre (mesure de tension logique)", "Débitmètre", "Tensiomètre de courroie"], correct: 1 },
      { label: "Sécurité à respecter ?", options: ["Aucune, un capteur n'est jamais dangereux", "Isoler la partie commande si nécessaire, rester attentif aux mouvements de la ligne", "Démonter tout le tableau électrique", "Couper l'alimentation générale de l'usine"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Nettoyer et réaligner le capteur, le remplacer si toujours défaillant", "Changer tout le convoyeur", "Ignorer le problème", "Augmenter la vitesse du convoyeur"], correct: 0 },
    ],
    correction:
      "Un capteur qui ne détecte plus, sans autre défaut sur la ligne, est souvent encrassé, désaligné, ou en fin de vie. On vérifie d'abord son alimentation puis son signal de sortie avec un multimètre. Le nettoyage et le réalignement résolvent souvent le problème ; sinon, on remplace le capteur.",
  },
  {
    id: "p4",
    title: "Le disjoncteur déclenche",
    icon: PlugZap,
    symptomes: "Le disjoncteur général d'une armoire déclenche dès qu'on le réarme, après quelques secondes de marche.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Un défaut d'isolement ou un court-circuit sur le circuit", "Un simple encrassement mécanique", "Une pression pneumatique trop basse", "Un capteur mal réglé"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Réarmer plusieurs fois de suite pour voir", "Vérifier l'isolement du circuit et la charge raccordée", "Changer directement tout le câblage", "Ignorer et attendre"], correct: 1 },
      { label: "Appareil de mesure adapté ?", options: ["Multimètre / mégohmmètre", "Débitmètre", "Tachymètre", "Manomètre"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Réarmer en boucle sans diagnostic", "Ne jamais réarmer plusieurs fois sans diagnostic, consigner avant d'investiguer", "Shunter le disjoncteur", "Augmenter le calibre du disjoncteur pour que ça ne coupe plus"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Augmenter le calibre du disjoncteur", "Localiser et isoler ou remplacer le composant en défaut d'isolement, puis réarmer", "Ignorer le déclenchement", "Remplacer le disjoncteur par un modèle plus faible"], correct: 1 },
    ],
    correction:
      "Un disjoncteur qui déclenche rapidement après réarmement indique très probablement un court-circuit ou un défaut d'isolement sur le circuit protégé, et non un simple problème de disjoncteur. Réarmer en boucle sans chercher la cause est dangereux : il faut consigner, mesurer l'isolement du circuit et localiser le défaut avant toute remise en service.",
  },
  {
    id: "p5",
    title: "Le vérin pneumatique ne sort pas",
    icon: Wind,
    symptomes: "Un vérin pneumatique de poussée ne sort plus, alors que la commande électrique semble activée (voyant allumé).",
    steps: [
      { label: "Cause la plus probable ?", options: ["Manque de pression réseau ou distributeur bloqué", "Le moteur électrique du convoyeur est en panne", "Le disjoncteur a coupé", "Le contacteur est soudé"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Vérifier la pression du réseau d'air et l'état du distributeur", "Vérifier la tension du réseau triphasé", "Changer le moteur", "Vérifier le niveau d'huile hydraulique"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Manomètre", "Pince ampèremétrique", "Tachymètre", "VAT"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Intervenir directement sous pression", "Couper l'alimentation en air comprimé avant toute intervention mécanique sur le vérin", "Ignorer la pression résiduelle", "Démonter sans purger"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Réparer la fuite d'air, débloquer ou remplacer le distributeur, remplacer la bobine de l'électrovanne si besoin", "Changer tout le convoyeur", "Augmenter la pression réseau au-delà des specs", "Ignorer, ce n'est pas grave"], correct: 0 },
    ],
    correction:
      "Un vérin qui ne sort pas alors que la commande électrique semble active oriente vers un problème pneumatique : pression insuffisante, distributeur bloqué, fuite, ou bobine d'électrovanne défectueuse. Avant toute intervention mécanique, on coupe et on purge l'alimentation en air comprimé, car l'air sous pression peut projeter des pièces.",
  },
  {
    id: "p6",
    title: "Fuite hydraulique",
    icon: Droplet,
    symptomes: "De l'huile s'échappe au niveau d'un flexible sur un vérin hydraulique de presse. Une flaque se forme au sol.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Joint usé, flexible endommagé ou raccord desserré", "Le moteur électrique est en surcharge", "Un capteur est déréglé", "Le disjoncteur a coupé"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Identifier visuellement le point exact de la fuite et vérifier la pression du circuit", "Redémarrer la presse immédiatement", "Vérifier la tension du réseau", "Ignorer et continuer la production"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Manomètre", "Multimètre", "Pince ampèremétrique", "Tachymètre"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Intervenir directement sous pression", "Dépressuriser complètement le circuit avant toute intervention, l'huile sous pression est dangereuse", "Ignorer le risque de projection", "Nettoyer sans couper le circuit"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Remplacer le joint ou le flexible, resserrer le raccord, purger l'air du circuit avant remise en service", "Ajouter de l'huile sans réparer la fuite", "Augmenter la pression pour compenser", "Ignorer, une petite fuite n'est jamais grave"], correct: 0 },
    ],
    correction:
      "Une fuite hydraulique doit toujours être traitée avec prudence : l'huile sous haute pression peut pénétrer la peau et causer des blessures graves, même à travers un jet invisible. On dépressurise complètement le circuit avant d'intervenir, on identifie et remplace la pièce défaillante (joint, flexible, raccord), puis on purge l'air avant remise en service.",
  },
  {
    id: "p7",
    title: "Un roulement fait du bruit",
    icon: Cog,
    symptomes: "Un roulement de poulie motrice émet un bruit de grincement régulier, de plus en plus fort au fil des jours.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Manque de lubrification, usure ou défaut d'alignement", "Un problème purement électrique", "Une fuite pneumatique", "Un défaut de capteur"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Analyse vibratoire ou écoute au stéthoscope, et contrôle de la température du roulement", "Mesurer la tension du réseau", "Vérifier la pression d'air", "Changer directement le moteur"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Mallette d'analyse vibratoire / thermomètre infrarouge", "Manomètre", "VAT", "Débitmètre"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Intervenir sur l'organe en mouvement sans rien couper", "Consigner mécaniquement et électriquement avant tout démontage", "Ignorer, le bruit n'est pas dangereux", "Continuer la production pendant l'intervention"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Lubrifier ou remplacer le roulement, vérifier l'alignement de l'arbre", "Ignorer le bruit tant que ça tourne", "Augmenter la vitesse pour compenser", "Changer uniquement la courroie"], correct: 0 },
    ],
    correction:
      "Un bruit de roulement qui s'aggrave progressivement est un signe classique de défaut naissant (manque de graisse, usure, désalignement). L'analyse vibratoire ou le contrôle de température permettent de confirmer le diagnostic avant une panne complète. On consigne toujours l'organe en mouvement avant de démonter.",
  },
  {
    id: "p8",
    title: "Courroie détendue",
    icon: RotateCcw,
    symptomes: "Une courroie de transmission patine légèrement au démarrage et présente un léger fléchissement visible.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Usure normale ou mauvais réglage de tension initial", "Une panne électrique du moteur", "Un défaut de capteur", "Une fuite hydraulique"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Mesurer la tension de la courroie et vérifier son état visuel (fissures, effilochage)", "Mesurer la tension électrique du moteur", "Vérifier la pression pneumatique", "Changer tout le convoyeur"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Tensiomètre de courroie", "Multimètre", "Manomètre", "VAT"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Intervenir sur la courroie en mouvement", "Consigner l'organe en mouvement avant toute intervention", "Ignorer, ce n'est pas dangereux", "Continuer la production"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Retendre ou remplacer la courroie, vérifier l'alignement des poulies", "Ignorer le patinage", "Augmenter la vitesse du moteur pour compenser", "Ajouter de la graisse sur la courroie"], correct: 0 },
    ],
    correction:
      "Une courroie détendue ou usée patine et perd en efficacité de transmission, ce qui peut aussi accélérer son usure et celle des poulies. On mesure sa tension avec un tensiomètre dédié, on vérifie l'absence de fissures, puis on retend ou remplace la courroie après avoir consigné l'organe en mouvement.",
  },
  {
    id: "p9",
    title: "Contacteur défectueux",
    icon: PlugZap,
    symptomes: "Un moteur ne démarre pas malgré une commande correcte : aucun bruit de claquement du contacteur ne se fait entendre.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Bobine grillée ou contacts oxydés/collés du contacteur", "Une fuite pneumatique", "Un problème de couple mécanique", "Un défaut de capteur de présence colis"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Mesurer la continuité de la bobine et l'état des contacts", "Vérifier la pression d'air", "Vérifier le débit hydraulique", "Changer le moteur directement"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Multimètre", "Manomètre", "Débitmètre", "Tensiomètre de courroie"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Mesurer sous tension sans précaution", "Vérifier l'absence de tension (VAT) après consignation avant toute mesure de continuité", "Shunter le contacteur pour tester", "Ignorer la procédure"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Remplacer le contacteur en vérifiant le bon calibre", "Réparer la bobine soi-même par soudure", "Ignorer et forcer le démarrage manuellement", "Augmenter la tension d'alimentation"], correct: 0 },
    ],
    correction:
      "L'absence de bruit de claquement du contacteur oriente vers une bobine grillée ou des contacts défectueux. Après consignation et vérification de l'absence de tension, on mesure la continuité de la bobine puis des contacts au multimètre. Le contacteur défectueux est remplacé par un modèle de même calibre.",
  },
  {
    id: "p10",
    title: "Arrêt d'urgence enclenché sans raison apparente",
    icon: ShieldAlert,
    symptomes: "La ligne complète est à l'arrêt. Le voyant « défaut sécurité » est allumé sur le pupitre, mais personne n'a vu quelqu'un appuyer sur un bouton d'arrêt d'urgence.",
    steps: [
      { label: "Cause la plus probable ?", options: ["Un bouton AU resté bloqué mécaniquement ou un défaut du circuit de sécurité", "Une simple coupure de courant générale", "Un problème de capteur de colis uniquement", "Une fuite hydraulique"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Inspecter visuellement tous les AU de la ligne et vérifier le relais de sécurité", "Redémarrer directement sans vérifier", "Changer le moteur principal", "Vérifier la pression pneumatique uniquement"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Multimètre (continuité du circuit de sécurité)", "Manomètre", "Tachymètre", "Débitmètre"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Shunter le circuit de sécurité pour redémarrer plus vite", "Ne jamais shunter un circuit de sécurité, analyser la cause avant de réarmer", "Ignorer le voyant et forcer le redémarrage", "Débrancher le relais de sécurité définitivement"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Déverrouiller le bouton bloqué ou remplacer le relais de sécurité défectueux, puis réarmer et retester", "Contourner le circuit de sécurité avec un fil", "Ignorer et laisser la ligne à l'arrêt indéfiniment sans diagnostic", "Changer tout le pupitre de commande"], correct: 0 },
    ],
    correction:
      "Un déclenchement de sécurité sans action visible d'un opérateur doit toujours être pris au sérieux : bouton AU resté mécaniquement bloqué, ou défaut du relais de sécurité lui-même. On inspecte tous les AU de la ligne et on contrôle la continuité du circuit de sécurité au multimètre. Shunter un circuit de sécurité est absolument interdit, quelle que soit l'urgence de production.",
  },
];

/* ---------------------------- BADGES ---------------------------- */

const BADGE_DEFS = [
  { id: "first_lesson", label: "Premier pas", desc: "Terminer votre première leçon", icon: BookOpen },
  { id: "module_1", label: "Bases solides", desc: "Terminer le module Environnement & sécurité", icon: HardHat },
  { id: "module_2", label: "Calculateur", desc: "Terminer le module Mathématiques appliquées", icon: Gauge },
  { id: "module_3", label: "Électricien", desc: "Terminer le module Électrotechnique", icon: Zap },
  { id: "detective_5", label: "Détective", desc: "Résoudre 5 scénarios de panne", icon: Target },
  { id: "detective_10", label: "Maître du diagnostic", desc: "Résoudre les 10 scénarios de panne", icon: ShieldAlert },
  { id: "streak_3", label: "Régularité", desc: "3 jours de révision d'affilée", icon: Flame },
  { id: "streak_7", label: "Discipline de fer", desc: "7 jours de révision d'affilée", icon: Flame },
  { id: "fifty_correct", label: "50 bonnes réponses", desc: "Cumuler 50 bonnes réponses aux quiz", icon: Award },
];

/* ---------------------------- STORAGE ---------------------------- */

const STORAGE_KEY = "tmi-progress-v1";

function emptyProgress() {
  return {
    xp: 0,
    lessonsDone: {},
    quizAnswers: {},
    panneScores: {},
    streak: 0,
    lastVisit: null,
    badges: [],
    history: [],
  };
}

async function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...emptyProgress(), ...JSON.parse(raw) };
  } catch (e) {
    console.warn("Progression illisible, remise à zéro.", e);
  }
  return emptyProgress();
}

async function saveProgress(p) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch (e) {
    console.error("Erreur de sauvegarde locale", e);
  }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function levelFromXp(xp) {
  return Math.floor(xp / 150) + 1;
}
function xpForNextLevel(xp) {
  const lvl = levelFromXp(xp);
  return lvl * 150;
}

/* ---------------------------- SMALL UI PIECES ---------------------------- */

function HazardStripe({ className = "" }) {
  return (
    <div
      className={`h-2 w-full ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #f5b400 0px, #f5b400 14px, #14151a 14px, #14151a 28px)",
      }}
    />
  );
}

function ProgressBar({ value, max, tone = "amber" }) {
  const pct = Math.min(100, Math.round((value / Math.max(1, max)) * 100));
  const toneMap = {
    amber: "bg-amber-400",
    sky: "bg-sky-400",
    violet: "bg-violet-400",
    emerald: "bg-emerald-400",
  };
  return (
    <div className="w-full h-2.5 rounded-full bg-slate-700/60 overflow-hidden">
      <div className={`h-full ${toneMap[tone] || toneMap.amber} transition-all duration-500`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function StatTile({ icon: Icon, label, value, sub, dark }) {
  return (
    <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} flex flex-col gap-1`}>
      <div className="flex items-center gap-2 text-slate-400">
        <Icon size={16} />
        <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <div className={`text-2xl font-bold font-mono ${dark ? "text-white" : "text-slate-900"}`}>{value}</div>
      {sub && <div className="text-xs text-slate-400">{sub}</div>}
    </div>
  );
}

function ModulePlate({ mod, dark, onClick, completed, total }) {
  const Icon = mod.icon;
  const colorMap = {
    amber: "text-amber-400 border-amber-400/40",
    sky: "text-sky-400 border-sky-400/40",
    violet: "text-violet-400 border-violet-400/40",
  };
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl border-2 ${colorMap[mod.color]} ${dark ? "bg-slate-800/60" : "bg-white"} p-4 flex items-center gap-4 hover:scale-[1.01] active:scale-[0.99] transition-transform`}
    >
      <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${dark ? "bg-slate-900" : "bg-slate-100"} border ${colorMap[mod.color]}`}>
        <Icon size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`font-mono text-xs px-1.5 py-0.5 rounded ${dark ? "bg-slate-900 text-slate-400" : "bg-slate-100 text-slate-500"}`}>PLAQUE {mod.num.toString().padStart(2, "0")}</span>
        </div>
        <div className={`font-bold ${dark ? "text-white" : "text-slate-900"} truncate`}>{mod.title}</div>
        <div className="mt-1"><ProgressBar value={completed} max={total} tone={mod.color === "amber" ? "amber" : mod.color === "sky" ? "sky" : "violet"} /></div>
        <div className="text-xs text-slate-400 mt-1">{completed}/{total} leçons terminées</div>
      </div>
      <ChevronRight className="text-slate-400 shrink-0" size={20} />
    </button>
  );
}

/* ---------------------------- SVG SCHEMAS ---------------------------- */

function LessonSchema({ type, dark }) {
  const stroke = dark ? "#94a3b8" : "#475569";
  const accent = "#f5b400";
  const box = dark ? "#1e293b" : "#f1f5f9";

  if (type === "orgchart") {
    return (
      <svg viewBox="0 0 320 140" className="w-full h-32">
        <rect x="110" y="6" width="100" height="28" rx="4" fill={box} stroke={stroke} />
        <text x="160" y="24" textAnchor="middle" fontSize="10" fill={stroke}>Direction</text>
        <line x1="160" y1="34" x2="160" y2="55" stroke={stroke} />
        <line x1="45" y1="55" x2="275" y2="55" stroke={stroke} />
        {[
          [45, "Production"],
          [160, "Maintenance"],
          [275, "Qualité"],
        ].map(([x, label], i) => (
          <g key={i}>
            <line x1={x} y1="55" x2={x} y2="70" stroke={stroke} />
            <rect x={x - 48} y="70" width="96" height="28" rx="4" fill={label === "Maintenance" ? accent : box} stroke={stroke} />
            <text x={x} y="88" textAnchor="middle" fontSize="10" fill={label === "Maintenance" ? "#14151a" : stroke} fontWeight={label === "Maintenance" ? "bold" : "normal"}>{label}</text>
          </g>
        ))}
      </svg>
    );
  }
  if (type === "maintenance-types") {
    return (
      <svg viewBox="0 0 320 110" className="w-full h-28">
        {["Corrective", "Préventive sys.", "Préventive cond.", "Améliorative"].map((t, i) => (
          <g key={i}>
            <rect x={10 + i * 78} y="30" width="68" height="50" rx="6" fill={box} stroke={i === 3 ? accent : stroke} strokeWidth={i === 3 ? 2 : 1} />
            <text x={10 + i * 78 + 34} y="58" textAnchor="middle" fontSize="9" fill={stroke}>{t}</text>
          </g>
        ))}
        <line x1="10" y1="20" x2="310" y2="20" stroke={stroke} markerEnd="url(#arrow)" />
        <text x="160" y="12" textAnchor="middle" fontSize="9" fill={stroke}>Panne présente → absente</text>
      </svg>
    );
  }
  if (type === "consignation-steps") {
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        {["Séparer", "Condamner", "Identifier", "Vérifier (VAT)"].map((t, i) => (
          <g key={i}>
            <circle cx={45 + i * 80} cy="35" r="24" fill={i === 3 ? accent : box} stroke={stroke} />
            <text x={45 + i * 80} y="39" textAnchor="middle" fontSize="8" fill={i === 3 ? "#14151a" : stroke}>{i + 1}</text>
            <text x={45 + i * 80} y="72" textAnchor="middle" fontSize="9" fill={stroke}>{t}</text>
            {i < 3 && <line x1={45 + i * 80 + 26} y1="35" x2={45 + (i + 1) * 80 - 26} y2="35" stroke={stroke} />}
          </g>
        ))}
      </svg>
    );
  }
  if (type === "percentage-bar") {
    return (
      <svg viewBox="0 0 320 60" className="w-full h-16">
        <rect x="10" y="20" width="300" height="20" rx="4" fill={box} stroke={stroke} />
        <rect x="10" y="20" width="225" height="20" rx="4" fill={accent} />
        <text x="160" y="15" textAnchor="middle" fontSize="9" fill={stroke}>Disponibilité machine : 75 %</text>
      </svg>
    );
  }
  if (type === "energy-flow") {
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        <rect x="10" y="30" width="90" height="30" rx="4" fill={box} stroke={stroke} />
        <text x="55" y="49" textAnchor="middle" fontSize="9" fill={stroke}>Puissance fournie</text>
        <line x1="100" y1="45" x2="150" y2="45" stroke={stroke} markerEnd="url(#arrow)" />
        <rect x="150" y="15" width="80" height="60" rx="6" fill={accent} />
        <text x="190" y="49" textAnchor="middle" fontSize="10" fill="#14151a" fontWeight="bold">Moteur η</text>
        <line x1="230" y1="35" x2="280" y2="35" stroke={stroke} markerEnd="url(#arrow)" />
        <text x="300" y="32" textAnchor="middle" fontSize="8" fill={stroke}>utile</text>
        <line x1="230" y1="60" x2="280" y2="75" stroke={stroke} strokeDasharray="3,2" />
        <text x="298" y="80" textAnchor="middle" fontSize="8" fill={stroke}>pertes</text>
      </svg>
    );
  }
  if (type === "torque-diagram") {
    return (
      <svg viewBox="0 0 320 100" className="w-full h-28">
        <circle cx="160" cy="55" r="6" fill={stroke} />
        <line x1="160" y1="55" x2="260" y2="55" stroke={stroke} strokeWidth="3" />
        <text x="210" y="45" textAnchor="middle" fontSize="9" fill={stroke}>distance d</text>
        <line x1="260" y1="55" x2="260" y2="20" stroke={accent} strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="272" y="35" fontSize="9" fill={accent}>Force F</text>
        <text x="160" y="85" textAnchor="middle" fontSize="9" fill={stroke}>C = F × d</text>
      </svg>
    );
  }
  if (type === "ohm-triangle") {
    return (
      <svg viewBox="0 0 200 130" className="w-full h-32">
        <polygon points="100,15 20,110 180,110" fill={box} stroke={stroke} strokeWidth="2" />
        <line x1="20" y1="80" x2="180" y2="80" stroke={stroke} />
        <line x1="72" y1="80" x2="72" y2="110" stroke={stroke} />
        <text x="100" y="55" textAnchor="middle" fontSize="16" fill={accent} fontWeight="bold">U</text>
        <text x="46" y="100" textAnchor="middle" fontSize="14" fill={stroke}>R</text>
        <text x="126" y="100" textAnchor="middle" fontSize="14" fill={stroke}>I</text>
      </svg>
    );
  }
  if (type === "control-circuit") {
    return (
      <svg viewBox="0 0 320 100" className="w-full h-28">
        {["Disjoncteur", "Contacteur", "Relais th.", "Moteur"].map((t, i) => (
          <g key={i}>
            <rect x={10 + i * 78} y="30" width="66" height="40" rx="4" fill={i === 3 ? accent : box} stroke={stroke} />
            <text x={10 + i * 78 + 33} y="53" textAnchor="middle" fontSize="8" fill={i === 3 ? "#14151a" : stroke}>{t}</text>
            {i < 3 && <line x1={10 + i * 78 + 66} y1="50" x2={10 + (i + 1) * 78} y2="50" stroke={stroke} markerEnd="url(#arrow)" />}
          </g>
        ))}
      </svg>
    );
  }
  if (type === "measurement-tools") {
    return (
      <svg viewBox="0 0 320 90" className="w-full h-24">
        {["Multimètre", "Pince ampère.", "VAT"].map((t, i) => (
          <g key={i}>
            <rect x={20 + i * 100} y="20" width="80" height="45" rx="6" fill={box} stroke={accent} strokeWidth="2" />
            <text x={60 + i * 100} y="47" textAnchor="middle" fontSize="9" fill={stroke}>{t}</text>
          </g>
        ))}
      </svg>
    );
  }
  return null;
}

/* ---------------------------- QUIZ COMPONENT ---------------------------- */

function QuizRunner({ questionIds, onFinish, dark, title }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState({});

  const qid = questionIds[idx];
  const question = QUESTIONS[qid];

  function submit() {
    if (selected === null) return;
    setRevealed(true);
    const isCorrect = selected === question.correct;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setAnswers((a) => ({ ...a, [qid]: isCorrect }));
  }

  function next() {
    if (idx + 1 < questionIds.length) {
      setIdx(idx + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      onFinish({ correctCount, total: questionIds.length, answers });
    }
  }

  return (
    <div className="space-y-4">
      {title && <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{title}</div>}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Question {idx + 1} / {questionIds.length}</span>
        <span className="font-mono">{correctCount} bonne(s) réponse(s)</span>
      </div>
      <ProgressBar value={idx + (revealed ? 1 : 0)} max={questionIds.length} tone="amber" />
      <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900"}`}>
        <p className="font-semibold mb-3">{question.q}</p>
        <div className="space-y-2">
          {question.options.map((opt, i) => {
            let cls = dark ? "border-slate-600 hover:border-slate-400" : "border-slate-300 hover:border-slate-500";
            if (revealed) {
              if (i === question.correct) cls = "border-emerald-500 bg-emerald-500/10";
              else if (i === selected) cls = "border-red-500 bg-red-500/10";
              else cls = dark ? "border-slate-700 opacity-50" : "border-slate-200 opacity-50";
            } else if (selected === i) {
              cls = "border-amber-400 bg-amber-400/10";
            }
            return (
              <button
                key={i}
                disabled={revealed}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-3 py-2.5 rounded-lg border-2 transition-colors flex items-center gap-2 ${cls}`}
              >
                {revealed && i === question.correct && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                {revealed && i === selected && i !== question.correct && <XCircle size={16} className="text-red-500 shrink-0" />}
                <span className="text-sm">{opt}</span>
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className={`mt-3 text-sm rounded-lg p-3 ${dark ? "bg-slate-900/60 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
            <span className="font-semibold">Explication : </span>{question.exp}
          </div>
        )}
      </div>
      <div className="flex justify-end">
        {!revealed ? (
          <button onClick={submit} disabled={selected === null} className="px-5 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-semibold disabled:opacity-40">
            Valider
          </button>
        ) : (
          <button onClick={next} className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold flex items-center gap-1">
            {idx + 1 < questionIds.length ? "Suivant" : "Terminer"} <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------------------- LESSON VIEW ---------------------------- */

function LessonView({ lesson, mod, dark, onBack, onDone, progress }) {
  const [stage, setStage] = useState("read"); // read -> quiz -> exercice -> done
  const done = !!progress.lessonsDone[lesson.id];

  return (
    <div className="space-y-5 pb-24">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au module
      </button>

      <div>
        <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">{mod.title}</div>
        <h2 className={`text-2xl font-bold mt-1 ${dark ? "text-white" : "text-slate-900"}`}>{lesson.title}</h2>
      </div>

      {stage === "read" && (
        <div className="space-y-5">
          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Explication simple</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} leading-relaxed`}>{lesson.simple}</p>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Mots techniques</h3>
            <dl className="space-y-2">
              {lesson.vocab.map(([term, def], i) => (
                <div key={i} className="text-sm">
                  <dt className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{term}</dt>
                  <dd className={`${dark ? "text-slate-400" : "text-slate-600"}`}>{def}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Exemple concret</h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} leading-relaxed text-sm`}>{lesson.example}</p>
          </section>

          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2">Schéma</h3>
            <LessonSchema type={lesson.schema} dark={dark} />
          </section>

          <section className={`rounded-xl p-4 border-2 border-amber-400/50 ${dark ? "bg-amber-400/5" : "bg-amber-50"}`}>
            <h3 className="font-semibold text-amber-500 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <ClipboardList size={14} /> À retenir
            </h3>
            <ul className="space-y-1.5">
              {lesson.retenir.map((r, i) => (
                <li key={i} className={`text-sm flex gap-2 ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-amber-400">▸</span>{r}
                </li>
              ))}
            </ul>
          </section>

          <section className={`rounded-xl p-4 border-2 border-red-400/40 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
            <h3 className="font-semibold text-red-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <AlertTriangle size={14} /> Erreurs fréquentes
            </h3>
            <ul className="space-y-1.5">
              {lesson.erreurs.map((r, i) => (
                <li key={i} className={`text-sm flex gap-2 ${dark ? "text-slate-200" : "text-slate-700"}`}>
                  <span className="text-red-400">✕</span>{r}
                </li>
              ))}
            </ul>
          </section>

          <button onClick={() => setStage("quiz")} className="w-full py-3 rounded-lg bg-amber-400 text-slate-900 font-bold">
            Faire le mini-quiz ({lesson.quizIds.length} questions)
          </button>
        </div>
      )}

      {stage === "quiz" && (
        <QuizRunner
          questionIds={lesson.quizIds}
          dark={dark}
          title="Mini-quiz de la leçon"
          onFinish={(res) => {
            onDone(lesson.id, res);
            setStage("exercice");
          }}
        />
      )}

      {stage === "exercice" && (
        <div className="space-y-4">
          <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
            <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
              <PenTool size={14} /> Exercice pratique
            </h3>
            <p className={`${dark ? "text-slate-200" : "text-slate-700"} text-sm mb-3`}>{lesson.exercice.enonce}</p>
            <details className="text-sm">
              <summary className="cursor-pointer font-semibold text-amber-400">Voir la correction détaillée</summary>
              <p className={`mt-2 ${dark ? "text-slate-300" : "text-slate-600"}`}>{lesson.exercice.correction}</p>
            </details>
          </section>
          <button onClick={() => setStage("done")} className="w-full py-3 rounded-lg bg-emerald-500 text-white font-bold flex items-center justify-center gap-2">
            <CheckCircle2 size={18} /> Terminer la leçon
          </button>
        </div>
      )}

      {stage === "done" && (
        <div className="text-center py-10 space-y-3">
          <CheckCircle2 size={48} className="mx-auto text-emerald-500" />
          <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>Leçon terminée !</h3>
          <p className="text-slate-400 text-sm">+20 XP ajoutés à votre progression.</p>
          <button onClick={onBack} className="px-6 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-semibold">
            Retour au module
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------------------- MODULE VIEW ---------------------------- */

function ModuleView({ mod, progress, dark, onOpenLesson, onBack }) {
  const doneCount = mod.lessons.filter((l) => progress.lessonsDone[l.id]).length;
  return (
    <div className="space-y-4 pb-24">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
        <ArrowLeft size={16} /> Retour au programme
      </button>
      <div>
        <div className="text-xs text-slate-400 font-mono">{mod.source}</div>
        <h2 className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>{mod.title}</h2>
        <div className="mt-2"><ProgressBar value={doneCount} max={mod.lessons.length} tone={mod.color === "amber" ? "amber" : mod.color === "sky" ? "sky" : "violet"} /></div>
      </div>
      <div className="space-y-3">
        {mod.lessons.map((lesson, i) => {
          const done = !!progress.lessonsDone[lesson.id];
          const locked = i > 0 && !progress.lessonsDone[mod.lessons[i - 1].id];
          return (
            <button
              key={lesson.id}
              disabled={locked}
              onClick={() => onOpenLesson(lesson)}
              className={`w-full text-left rounded-xl border p-4 flex items-center gap-3 ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} ${locked ? "opacity-50" : "hover:border-amber-400"}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-emerald-500" : locked ? "bg-slate-600" : "bg-amber-400"}`}>
                {done ? <CheckCircle2 size={18} className="text-white" /> : locked ? <Lock size={16} className="text-slate-300" /> : <span className="font-bold text-slate-900">{i + 1}</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{lesson.title}</div>
                <div className="text-xs text-slate-400">{lesson.quizIds.length} questions · exercice pratique</div>
              </div>
              {!locked && <ChevronRight size={18} className="text-slate-400 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------- PANNE SIMULATOR ---------------------------- */

function PanneCard({ panne, dark, onFinish }) {
  const [answers, setAnswers] = useState(Array(panne.steps.length).fill(null));
  const [revealed, setRevealed] = useState(false);

  function submit() {
    if (answers.some((a) => a === null)) return;
    setRevealed(true);
    const score = answers.filter((a, i) => a === panne.steps[i].correct).length;
    onFinish(score, panne.steps.length);
  }

  const Icon = panne.icon;

  return (
    <div className="space-y-4">
      <div className={`rounded-xl p-4 border-2 border-red-400/50 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
        <div className="flex items-center gap-2 mb-2">
          <Icon size={20} className="text-red-400" />
          <h3 className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>{panne.title}</h3>
        </div>
        <p className={`text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}>{panne.symptomes}</p>
      </div>

      {panne.steps.map((step, si) => (
        <div key={si} className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
          <p className={`text-sm font-semibold mb-2 ${dark ? "text-white" : "text-slate-900"}`}>{si + 1}. {step.label}</p>
          <div className="space-y-2">
            {step.options.map((opt, oi) => {
              let cls = dark ? "border-slate-600" : "border-slate-300";
              if (revealed) {
                if (oi === step.correct) cls = "border-emerald-500 bg-emerald-500/10";
                else if (oi === answers[si]) cls = "border-red-500 bg-red-500/10";
                else cls = "opacity-40 " + cls;
              } else if (answers[si] === oi) {
                cls = "border-amber-400 bg-amber-400/10";
              }
              return (
                <button
                  key={oi}
                  disabled={revealed}
                  onClick={() => {
                    const next = [...answers];
                    next[si] = oi;
                    setAnswers(next);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg border-2 text-sm transition-colors ${cls}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!revealed ? (
        <button
          onClick={submit}
          disabled={answers.some((a) => a === null)}
          className="w-full py-3 rounded-lg bg-amber-400 text-slate-900 font-bold disabled:opacity-40"
        >
          Voir la correction
        </button>
      ) : (
        <div className={`rounded-xl p-4 border-2 border-emerald-500/50 ${dark ? "bg-emerald-500/10" : "bg-emerald-50"}`}>
          <h4 className="font-semibold text-emerald-500 text-sm uppercase tracking-wide mb-2">Correction complète</h4>
          <p className={`text-sm ${dark ? "text-slate-200" : "text-slate-700"}`}>{panne.correction}</p>
          <p className="text-sm mt-2 font-semibold text-slate-400">
            Score : {answers.filter((a, i) => a === panne.steps[i].correct).length} / {panne.steps.length}
          </p>
        </div>
      )}
    </div>
  );
}

function PanneSimulator({ progress, dark, onScore }) {
  const [current, setCurrent] = useState(null);

  if (current) {
    const panne = PANNES.find((p) => p.id === current);
    return (
      <div className="space-y-4 pb-24">
        <button onClick={() => setCurrent(null)} className="flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400">
          <ArrowLeft size={16} /> Retour aux scénarios
        </button>
        <PanneCard
          panne={panne}
          dark={dark}
          onFinish={(score, total) => onScore(panne.id, score, total)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-24">
      <div>
        <h2 className={`text-2xl font-bold flex items-center gap-2 ${dark ? "text-white" : "text-slate-900"}`}>
          <ShieldAlert className="text-red-400" /> Simulateur de pannes
        </h2>
        <p className="text-sm text-slate-400 mt-1">[+] Complément pédagogique — 10 scénarios réalistes. La sécurité passe toujours avant la réparation.</p>
      </div>
      <div className="grid gap-3">
        {PANNES.map((p) => {
          const done = progress.panneScores[p.id];
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              onClick={() => setCurrent(p.id)}
              className={`rounded-xl border p-4 flex items-center gap-3 text-left ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} hover:border-red-400`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${done ? "bg-emerald-500" : "bg-red-400/20"}`}>
                <Icon size={18} className={done ? "text-white" : "text-red-400"} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{p.title}</div>
                {done && <div className="text-xs text-emerald-500">Résolu : {done.score}/{done.total}</div>}
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------- EXAM MODE ---------------------------- */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ExamMode({ dark, onFinish }) {
  const [mode, setMode] = useState(null);
  const allIds = Object.keys(QUESTIONS);

  if (mode === "quick") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 5)} dark={dark} title="Quiz rapide — 5 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }
  if (mode === "daily") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 10)} dark={dark} title="Quiz quotidien — 10 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }
  if (mode === "exam") {
    return <QuizRunner questionIds={shuffle(allIds).slice(0, 20)} dark={dark} title="Examen blanc — 20 questions" onFinish={(r) => { onFinish(r); setMode(null); }} />;
  }

  const options = [
    { id: "quick", label: "Quiz rapide", desc: "5 questions aléatoires", icon: Zap, time: "2 min" },
    { id: "daily", label: "Quiz quotidien", desc: "10 questions aléatoires", icon: Calendar, time: "5 min" },
    { id: "exam", label: "Examen blanc chronométré", desc: "20 questions, tous modules", icon: Timer, time: "15 min" },
  ];

  return (
    <div className="space-y-4 pb-24">
      <h2 className={`text-2xl font-bold flex items-center gap-2 ${dark ? "text-white" : "text-slate-900"}`}>
        <ListChecks className="text-amber-400" /> Quiz & examens blancs
      </h2>
      <div className="grid gap-3">
        {options.map((o) => {
          const Icon = o.icon;
          return (
            <button key={o.id} onClick={() => setMode(o.id)} className={`rounded-xl border p-4 flex items-center gap-3 text-left ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} hover:border-amber-400`}>
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{o.label}</div>
                <div className="text-xs text-slate-400">{o.desc} · ~{o.time}</div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          );
        })}
      </div>
      <div className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"} text-sm text-slate-400`}>
        Chaque module dispose aussi de son propre mini-quiz, accessible depuis chaque leçon.
      </div>
    </div>
  );
}

/* ---------------------------- PROGRESSION VIEW ---------------------------- */

function ProgressionView({ progress, dark }) {
  const lvl = levelFromXp(progress.xp);
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = Object.keys(progress.lessonsDone).length;
  const totalCorrect = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
  const totalAnswered = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.length, 0);

  // weak points: lessons with < 60% success
  const weak = [];
  MODULES.forEach((m) => m.lessons.forEach((l) => {
    const arr = progress.quizAnswers[l.id];
    if (arr && arr.length) {
      const rate = arr.filter(Boolean).length / arr.length;
      if (rate < 0.6) weak.push({ title: l.title, rate });
    }
  }));

  return (
    <div className="space-y-5 pb-24">
      <h2 className={`text-2xl font-bold flex items-center gap-2 ${dark ? "text-white" : "text-slate-900"}`}>
        <TrendingUp className="text-amber-400" /> Ma progression
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <StatTile icon={Award} label="Niveau" value={lvl} sub={`${progress.xp} / ${xpForNextLevel(progress.xp)} XP`} dark={dark} />
        <StatTile icon={Flame} label="Série" value={`${progress.streak} j`} dark={dark} />
        <StatTile icon={BookOpen} label="Leçons" value={`${doneLessons}/${totalLessons}`} dark={dark} />
        <StatTile icon={CheckCircle2} label="Bonnes réponses" value={totalAnswered ? `${totalCorrect}/${totalAnswered}` : "0"} dark={dark} />
      </div>

      <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
        <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-3">Points faibles à retravailler</h3>
        {weak.length === 0 ? (
          <p className="text-sm text-slate-400">Aucun point faible détecté pour le moment — continuez comme ça !</p>
        ) : (
          <ul className="space-y-2">
            {weak.map((w, i) => (
              <li key={i} className="flex items-center justify-between text-sm">
                <span className={dark ? "text-slate-200" : "text-slate-700"}>{w.title}</span>
                <span className="text-red-400 font-mono">{Math.round(w.rate * 100)}%</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
        <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-3">Badges</h3>
        <div className="grid grid-cols-3 gap-3">
          {BADGE_DEFS.map((b) => {
            const earned = progress.badges.includes(b.id);
            const Icon = b.icon;
            return (
              <div key={b.id} className={`rounded-lg p-2 flex flex-col items-center text-center gap-1 border ${earned ? "border-amber-400 bg-amber-400/10" : dark ? "border-slate-700 opacity-40" : "border-slate-200 opacity-40"}`}>
                <Icon size={20} className={earned ? "text-amber-400" : "text-slate-400"} />
                <span className={`text-[10px] font-semibold leading-tight ${dark ? "text-white" : "text-slate-900"}`}>{b.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`rounded-xl p-4 border ${dark ? "bg-slate-800/60 border-slate-700" : "bg-white border-slate-200"}`}>
        <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wide mb-3">Historique récent</h3>
        {progress.history.length === 0 ? (
          <p className="text-sm text-slate-400">Aucune activité enregistrée pour l'instant.</p>
        ) : (
          <ul className="space-y-1.5 max-h-48 overflow-y-auto">
            {progress.history.slice().reverse().slice(0, 12).map((h, i) => (
              <li key={i} className="text-xs text-slate-400 flex justify-between">
                <span>{h.label}</span>
                <span className="font-mono">{h.date}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

/* ---------------------------- COACH TMI (chat via Claude API) ---------------------------- */

const COACH_SYSTEM_PROMPT = `Tu es "Coach TMI", un formateur virtuel patient, encourageant et exigeant, spécialisé dans la préparation au Titre Professionnel Technicien(ne) de Maintenance Industrielle (niveau 4, RNCP 35191, formation AFORP démarrant en septembre 2026).
Le programme couvre : environnement industriel, mathématiques appliquées, électrotechnique industrielle, mécanique industrielle, pneumatique/hydraulique, automatismes, maintenance corrective/préventive/améliorative, diagnostic de pannes, sécurité industrielle (NF C 18-510), GMAO et communication professionnelle.
Tu t'adresses à un débutant complet. Utilise un vocabulaire simple, des exemples concrets d'usine ou d'entrepôt logistique (convoyeurs, moteurs, capteurs), et explique toujours étape par étape.
Tu peux : répondre aux questions, reformuler un cours plus simplement, poser des questions pour vérifier la compréhension, créer des exercices ou des scénarios de panne personnalisés, analyser des erreurs, préparer une séance de révision minutée, faire réciter une leçon, jouer le rôle d'un responsable maintenance en entreprise pour des mises en situation.
Reste toujours bienveillant mais rigoureux sur la sécurité : rappelle systématiquement que la sécurité passe avant la réparation dès qu'un scénario technique est abordé.
Réponds en français, de façon concise et structurée, avec des listes courtes si utile.`;

function CoachTMI({ dark }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour ! Je suis Coach TMI 👷 Je suis là pour t'accompagner jusqu'à ta rentrée en septembre 2026. Tu peux me poser une question, me demander un exercice personnalisé, une nouvelle panne à diagnostiquer, ou une séance de révision minutée. Par quoi veux-tu commencer ?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  async function send(text) {
    const content = text ?? input;
    if (!content.trim() || loading) return;
    const newMessages = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const endpoint = import.meta.env.VITE_COACH_API_URL;
      let reply = "";
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ system: COACH_SYSTEM_PROMPT, messages: newMessages }),
        });
        if (!res.ok) throw new Error(`Coach API: ${res.status}`);
        const data = await res.json();
        reply = data.reply || data.text || "";
      } else {
        const lower = content.toLowerCase();
        if (lower.includes("ohm")) reply = "La loi d’Ohm relie la tension U, la résistance R et l’intensité I : U = R × I. Exemple : avec 24 V et 12 Ω, I = 24 / 12 = 2 A. À toi : avec 230 V et 50 Ω, quelle intensité obtiens-tu ?";
        else if (lower.includes("panne")) reply = "Mise en situation : un convoyeur ne démarre plus. Sécurité d’abord : sécurise la zone et vérifie l’arrêt d’urgence. Puis contrôle dans cet ordre : alimentation, protections, chaîne de sécurité, capteurs, contacteur, variateur et moteur. Donne-moi tes trois premières vérifications et je corrige ton raisonnement.";
        else if (lower.includes("20 minutes") || lower.includes("séance")) reply = "Séance de 20 minutes : 5 min de rappel sur la sécurité et la consignation, 7 min sur la loi d’Ohm, 5 min de diagnostic d’un convoyeur, puis 3 min de quiz et correction.";
        else reply = "Mode hors ligne actif. Je peux déjà t’aider sur la loi d’Ohm, la sécurité, les calculs et les diagnostics de convoyeur. Pour un coach IA complet, configure VITE_COACH_API_URL vers un serveur sécurisé : aucune clé API ne doit être placée dans le navigateur.";
      }
      setMessages((m) => [...m, { role: "assistant", content: reply || "Je n’ai pas reçu de réponse exploitable." }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "Une erreur est survenue lors de la connexion au Coach. Réessaie dans un instant." }]);
    } finally {
      setLoading(false);
    }
  }

  const quickActions = [
    "Explique-moi la dernière leçon plus simplement",
    "Crée-moi un exercice personnalisé sur l'électricité",
    "Donne-moi une nouvelle panne à diagnostiquer",
    "Prépare-moi une séance de révision de 20 minutes",
    "Fais-moi réciter la loi d'Ohm",
    "Joue le rôle d'un responsable maintenance qui m'accueille",
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      <h2 className={`text-xl font-bold flex items-center gap-2 mb-3 ${dark ? "text-white" : "text-slate-900"}`}>
        <MessageCircle className="text-amber-400" /> Coach TMI
      </h2>
      <div ref={scrollRef} className={`flex-1 overflow-y-auto space-y-3 rounded-xl p-3 border ${dark ? "bg-slate-800/40 border-slate-700" : "bg-white border-slate-200"}`}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-amber-400 text-slate-900" : dark ? "bg-slate-700 text-slate-100" : "bg-slate-100 text-slate-800"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className={`rounded-2xl px-3.5 py-2.5 text-sm flex items-center gap-2 ${dark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-600"}`}>
              <Loader2 size={14} className="animate-spin" /> Coach TMI réfléchit...
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 overflow-x-auto py-2 no-scrollbar">
        {quickActions.map((qa, i) => (
          <button key={i} onClick={() => send(qa)} className={`shrink-0 text-xs px-3 py-1.5 rounded-full border whitespace-nowrap ${dark ? "border-slate-600 text-slate-300 hover:border-amber-400" : "border-slate-300 text-slate-600 hover:border-amber-400"}`}>
            {qa}
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Pose ta question au Coach TMI..."
          className={`flex-1 rounded-lg px-3 py-2.5 text-sm border ${dark ? "bg-slate-800 border-slate-600 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900"}`}
        />
        <button onClick={() => send()} disabled={loading} className="w-11 h-11 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 disabled:opacity-40">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- DASHBOARD ---------------------------- */

function Dashboard({ progress, dark, onNavigate }) {
  const lvl = levelFromXp(progress.xp);
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = Object.keys(progress.lessonsDone).length;
  const totalCorrect = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
  const totalAnswered = Object.values(progress.quizAnswers).reduce((s, arr) => s + arr.length, 0);
  const successRate = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : null;

  const weak = [];
  MODULES.forEach((m) => m.lessons.forEach((l) => {
    const arr = progress.quizAnswers[l.id];
    if (arr && arr.length) {
      const rate = arr.filter(Boolean).length / arr.length;
      if (rate < 0.6) weak.push(l.title);
    }
  }));

  const start = new Date();
  const target = new Date("2026-09-02T00:00:00");
  const daysLeft = Math.max(0, Math.ceil((target - start) / (1000 * 60 * 60 * 24)));

  // find next lesson to continue
  let nextLesson = null, nextMod = null;
  for (const m of MODULES) {
    for (const l of m.lessons) {
      if (!progress.lessonsDone[l.id]) { nextLesson = l; nextMod = m; break; }
    }
    if (nextLesson) break;
  }

  const dashboardActions = [
    {
      id: "modules",
      label: "Cours",
      description: `${totalLessons} leçons progressives`,
      icon: BookOpen,
      tone: "text-sky-400",
      surface: dark ? "hover:border-sky-400/60" : "hover:border-sky-400",
    },
    {
      id: "exam",
      label: "Quiz",
      description: `${Object.keys(QUIZ).length} questions et examens`,
      icon: ListChecks,
      tone: "text-violet-400",
      surface: dark ? "hover:border-violet-400/60" : "hover:border-violet-400",
    },
    {
      id: "pannes",
      label: "Simulateur",
      description: `${PANNES.length} diagnostics de panne`,
      icon: ShieldAlert,
      tone: "text-red-400",
      surface: dark ? "hover:border-red-400/60" : "hover:border-red-400",
    },
    {
      id: "progression",
      label: "Progression",
      description: "Résultats, XP et badges",
      icon: TrendingUp,
      tone: "text-emerald-400",
      surface: dark ? "hover:border-emerald-400/60" : "hover:border-emerald-400",
    },
  ];

  return (
    <div className="space-y-5 pb-24">
      <div>
        <p className="text-sm text-slate-400">Objectif rentrée</p>
        <div className={`flex items-baseline gap-2`}>
          <h1 className={`text-3xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>J-{daysLeft}</h1>
          <span className="text-sm text-slate-400">avant le 2 septembre 2026</span>
        </div>
        <ProgressBar value={100 - daysLeft > 0 ? 100 - daysLeft : 2} max={100} tone="amber" />
      </div>

      <button onClick={() => onNavigate("progression")} className="grid grid-cols-2 gap-3 text-left w-full">
        <StatTile icon={Award} label="Niveau" value={lvl} sub={`${progress.xp} XP`} dark={dark} />
        <StatTile icon={Flame} label="Série de révision" value={`${progress.streak} j`} dark={dark} />
        <StatTile icon={BookOpen} label="Cours terminés" value={`${doneLessons}/${totalLessons}`} dark={dark} />
        <StatTile icon={Target} label="Résultat quiz" value={successRate !== null ? `${successRate}%` : "—"} dark={dark} />
      </button>

      {weak.length > 0 && (
        <div className={`rounded-xl p-4 border-2 border-red-400/40 ${dark ? "bg-red-400/5" : "bg-red-50"}`}>
          <h3 className="font-semibold text-red-400 text-sm uppercase tracking-wide mb-2 flex items-center gap-1">
            <AlertTriangle size={14} /> Points faibles
          </h3>
          <ul className="text-sm space-y-1">
            {weak.slice(0, 3).map((w, i) => (
              <li key={i} className={dark ? "text-slate-200" : "text-slate-700"}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => (nextLesson ? onNavigate("lesson", { lesson: nextLesson, mod: nextMod }) : onNavigate("modules"))}
        className="w-full rounded-xl bg-amber-400 text-slate-900 p-4 flex items-center justify-between font-bold shadow-lg shadow-amber-400/20"
      >
        <span className="flex items-center gap-2">
          <GraduationCap size={20} />
          {nextLesson ? `Continuer : ${nextLesson.title}` : "Voir le programme complet"}
        </span>
        <ChevronRight size={20} />
      </button>

      <section aria-labelledby="quick-access-title">
        <div className="mb-2 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">Espace de travail</p>
            <h2 id="quick-access-title" className={`text-lg font-bold ${dark ? "text-white" : "text-slate-900"}`}>
              Que veux-tu travailler ?
            </h2>
          </div>
          <span className="text-xs text-slate-400">4 activités</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {dashboardActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onNavigate(action.id)}
                className={`group min-h-32 rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${action.surface} ${dark ? "border-slate-700 bg-slate-800/70 hover:bg-slate-800" : "border-slate-200 bg-white hover:bg-slate-50"}`}
              >
                <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-slate-900" : "bg-slate-100"}`}>
                  <Icon className={action.tone} size={21} />
                </span>
                <span className={`block text-sm font-bold ${dark ? "text-white" : "text-slate-900"}`}>{action.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-slate-400">{action.description}</span>
                <ChevronRight className="mt-3 text-slate-500 transition-transform group-hover:translate-x-1" size={16} />
              </button>
            );
          })}
        </div>
      </section>

      <div>
        <h3 className={`text-sm uppercase tracking-wide font-semibold text-slate-400 mb-2`}>Programme de révision</h3>
        <div className="space-y-3">
          {MODULES.map((m) => (
            <ModulePlate
              key={m.id}
              mod={m}
              dark={dark}
              completed={m.lessons.filter((l) => progress.lessonsDone[l.id]).length}
              total={m.lessons.length}
              onClick={() => onNavigate("module", { mod: m })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- APP SHELL ---------------------------- */

const NAV_ITEMS = [
  { id: "dashboard", label: "Accueil", icon: Home },
  { id: "modules", label: "Modules", icon: BookOpen },
  { id: "pannes", label: "Pannes", icon: ShieldAlert },
  { id: "exam", label: "Quiz", icon: ListChecks },
  { id: "coach", label: "Coach", icon: MessageCircle },
];

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [view, setView] = useState("dashboard");
  const [viewData, setViewData] = useState({});
  const [progress, setProgress] = useState(null);
  const [ready, setReady] = useState(false);

  const dark = theme === "dark";

  useEffect(() => {
    (async () => {
      const p = await loadProgress();
      const today = todayStr();
      if (p.lastVisit !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        p.streak = p.lastVisit === yesterday ? p.streak + 1 : p.lastVisit ? 1 : 1;
        p.lastVisit = today;
      }
      setProgress(p);
      setReady(true);
    })();
  }, []);

  const persist = useCallback((next) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  function addHistory(p, label) {
    p.history = [...p.history, { label, date: new Date().toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) }];
  }

  function checkBadges(p) {
    const badges = new Set(p.badges);
    if (Object.keys(p.lessonsDone).length >= 1) badges.add("first_lesson");
    MODULES.forEach((m, i) => {
      if (m.lessons.every((l) => p.lessonsDone[l.id])) badges.add(["module_1", "module_2", "module_3"][i]);
    });
    const panneCount = Object.keys(p.panneScores).length;
    if (panneCount >= 5) badges.add("detective_5");
    if (panneCount >= 10) badges.add("detective_10");
    if (p.streak >= 3) badges.add("streak_3");
    if (p.streak >= 7) badges.add("streak_7");
    const totalCorrect = Object.values(p.quizAnswers).reduce((s, arr) => s + arr.filter(Boolean).length, 0);
    if (totalCorrect >= 50) badges.add("fifty_correct");
    p.badges = Array.from(badges);
  }

  function handleLessonDone(lessonId, res) {
    const next = { ...progress, lessonsDone: { ...progress.lessonsDone }, quizAnswers: { ...progress.quizAnswers } };
    next.lessonsDone[lessonId] = true;
    next.quizAnswers[lessonId] = Object.keys(res.answers).map((k) => res.answers[k]);
    next.xp += 20 + res.correctCount * 10;
    addHistory(next, `Leçon terminée (${res.correctCount}/${res.total})`);
    checkBadges(next);
    persist(next);
  }

  function handlePanneScore(panneId, score, total) {
    const next = { ...progress, panneScores: { ...progress.panneScores } };
    next.panneScores[panneId] = { score, total };
    next.xp += 15 + score * 5;
    addHistory(next, `Panne résolue : ${score}/${total}`);
    checkBadges(next);
    persist(next);
  }

  function handleExamFinish(res) {
    const next = { ...progress };
    next.xp += res.correctCount * 8;
    addHistory(next, `Quiz terminé (${res.correctCount}/${res.total})`);
    checkBadges(next);
    persist(next);
  }

  function navigate(nextView, data = {}) {
    setView(nextView);
    setViewData(data);
  }

  if (!ready || !progress) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader2 className="animate-spin text-amber-400" size={32} />
      </div>
    );
  }

  const bg = dark ? "bg-slate-950" : "bg-slate-50";
  const text = dark ? "text-slate-100" : "text-slate-900";

  return (
    <div className={`min-h-screen ${bg} ${text} font-sans`}>
      <header className={`sticky top-0 z-20 border-b ${dark ? "bg-slate-950/95 border-slate-800" : "bg-slate-50/95 border-slate-200"} backdrop-blur`}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center">
              <Wrench size={18} className="text-slate-900" />
            </div>
            <div>
              <div className="font-bold leading-tight tracking-tight">TMI RÉVISION</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Titre Pro Maintenance Industrielle</div>
            </div>
          </div>
          <button
            onClick={() => setTheme(dark ? "light" : "dark")}
            className={`w-9 h-9 rounded-lg flex items-center justify-center border ${dark ? "border-slate-700 text-amber-400" : "border-slate-300 text-slate-600"}`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <HazardStripe />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5">
        {view === "dashboard" && <Dashboard progress={progress} dark={dark} onNavigate={navigate} />}

        {view === "modules" && (
          <div className="space-y-3 pb-24">
            <h2 className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>Programme de révision</h2>
            <p className="text-xs text-slate-400 -mt-2">Contenu basé sur le programme officiel AFORP, complété pour la révision (voir mention sous chaque module).</p>
            {MODULES.map((m) => (
              <ModulePlate key={m.id} mod={m} dark={dark} completed={m.lessons.filter((l) => progress.lessonsDone[l.id]).length} total={m.lessons.length} onClick={() => navigate("module", { mod: m })} />
            ))}
          </div>
        )}

        {view === "module" && viewData.mod && (
          <ModuleView mod={viewData.mod} progress={progress} dark={dark} onBack={() => navigate("modules")} onOpenLesson={(lesson) => navigate("lesson", { lesson, mod: viewData.mod })} />
        )}

        {view === "lesson" && viewData.lesson && (
          <LessonView
            lesson={viewData.lesson}
            mod={viewData.mod}
            dark={dark}
            progress={progress}
            onBack={() => navigate("module", { mod: viewData.mod })}
            onDone={handleLessonDone}
          />
        )}

        {view === "pannes" && <PanneSimulator progress={progress} dark={dark} onScore={handlePanneScore} />}

        {view === "exam" && <ExamMode dark={dark} onFinish={handleExamFinish} />}

        {view === "progression" && <ProgressionView progress={progress} dark={dark} />}

        {view === "coach" && <CoachTMI dark={dark} />}
      </main>

      <nav className={`fixed bottom-0 left-0 right-0 z-20 border-t ${dark ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-slate-200"} backdrop-blur`}>
        <div className="max-w-2xl mx-auto grid grid-cols-5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = view === item.id || (item.id === "modules" && (view === "module" || view === "lesson"));
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-semibold ${active ? "text-amber-400" : "text-slate-400"}`}
              >
                <Icon size={20} />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
