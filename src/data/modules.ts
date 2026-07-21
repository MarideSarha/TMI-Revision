import { Gauge, HardHat, Zap } from "lucide-react";
import type { TrainingModule } from "../types";

/* ---------------------------- DATA: MODULES & LEÇONS ---------------------------- */

export const MODULES: TrainingModule[] = [
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
          "L'entretien courant (nettoyage, graissage, réglages) fait partie des actions de maintenance ; il ne se limite pas à subir les pannes.",
        ],
        erreurs: [
          "Réduire l'entretien à une réparation après panne : l'entretien comprend aussi des actions courantes de prévention.",
          "Croire que la maintenance n'intervient qu'après une panne : elle prévient aussi.",
        ],
        quizIds: ["q1", "q2", "q3", "q4", "q5"],
        exercice: {
          enonce:
            "Une machine tombe en panne 3 fois par semaine et bloque toute la ligne de production. Un technicien la répare à chaque fois, sans jamais chercher pourquoi. Que devrait faire le service maintenance en plus des réparations ?",
          correction:
            "Il devrait analyser l'historique des pannes (dates, causes, durées) pour identifier une cause récurrente, puis mettre en place une action préventive (contrôle régulier, remplacement anticipé d'une pièce), voire une action améliorative si le défaut est structurel. Réparer à répétition sans analyser la cause ne permet pas de maîtriser durablement l'équipement.",
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
          "Une intervention corrective reste méthodique : sécuriser, constater, diagnostiquer, réparer, contrôler puis tracer l'intervention.",
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
          "Une consignation électrique est réalisée selon l'organisation de l'entreprise par des personnes formées et habilitées pour les opérations concernées.",
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
