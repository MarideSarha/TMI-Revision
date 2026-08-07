import { Gauge, HardHat } from "lucide-react";
// Module 3 (Électrotechnique) est désormais défini dans ./electrotechnique.ts
import type { TrainingModule } from "../types";
import { MODULE1_SAFETY_BLOCKS, MODULE1_SAFETY_LESSONS } from "./module1Safety";

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
        durationMinutes: 20,
        objectifs: [
          "Situer le rôle de la maintenance parmi les services de l'entreprise.",
          "Expliquer pourquoi la criticité d'un équipement oriente les priorités d'intervention.",
        ],
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
        verification: {
          question: "Une seule machine peut arrêter toute la ligne. Quelle notion aide à la traiter en priorité ?",
          options: ["La couleur de la machine", "Sa criticité", "Son année d'achat", "La taille de son moteur"],
          correct: 1,
          explanation: "La criticité mesure l'impact possible d'une panne sur la sécurité, la production, la qualité et les coûts.",
        },
        exercice: {
          enonce:
            "Une machine tombe en panne 3 fois par semaine et bloque toute la ligne de production. Un technicien la répare à chaque fois, sans jamais chercher pourquoi. Que devrait faire le service maintenance en plus des réparations ?",
          consignes: [
            "Identifie ce qui manque dans la façon actuelle d'intervenir.",
            "Propose une action préventive et une action améliorative possibles.",
            "Explique quelles informations doivent être enregistrées après l'intervention.",
          ],
          criteres: [
            "J'ai parlé de l'analyse de la cause et de l'historique des pannes.",
            "J'ai proposé au moins une action qui évite la répétition du défaut.",
            "J'ai prévu une trace écrite de l'intervention et de son résultat.",
          ],
          correction:
            "Il devrait analyser l'historique des pannes (dates, causes, durées) pour identifier une cause récurrente, puis mettre en place une action préventive (contrôle régulier, remplacement anticipé d'une pièce), voire une action améliorative si le défaut est structurel. Réparer à répétition sans analyser la cause ne permet pas de maîtriser durablement l'équipement.",
        },
        ascii: `ENTREPRISE INDUSTRIELLE
├─ Production : fabrique
├─ Qualité : vérifie la conformité
├─ Maintenance
│  ├─ Réalisation : intervient sur le terrain
│  ├─ Méthodes : prépare les gammes et analyses
│  ├─ Ordonnancement : planifie les travaux
│  └─ Magasin : fournit les pièces
└─ HSE : organise la prévention des risques`,
        astucesPro: [
          "Avant de toucher la machine, demande ce qui s'est passé, depuis quand et dans quelles conditions.",
          "Une panne bien décrite fait gagner plus de temps qu'un démontage commencé trop vite.",
          "Observe aussi l'impact sécurité, qualité et environnement : la production n'est jamais le seul critère.",
        ],
        diagnostic: [
          "Recueillir les faits auprès de l'opérateur sans transformer son avis en certitude.",
          "Comparer l'état constaté au fonctionnement normal attendu.",
          "Évaluer la criticité avant de décider l'ordre des contrôles.",
          "Tracer symptôme, cause confirmée, action et résultat.",
        ],
        depannage: [
          "Sécuriser la zone et appliquer les règles du site.",
          "Décrire précisément le symptôme avant tout démontage.",
          "Consulter l'historique et la documentation disponible.",
          "Contrôler du plus simple au plus probable, puis confirmer la cause.",
          "Réparer, tester dans les conditions autorisées et rendre compte.",
        ],
        securite: [
          "Ne jamais laisser l'urgence de production supprimer l'analyse des risques.",
          "Ne pas intervenir hors de son autorisation, de sa formation ou de son habilitation.",
          "Signaler immédiatement une protection absente, neutralisée ou endommagée.",
        ],
        etudeDeCas: {
          situation: "Le convoyeur principal s'arrête plusieurs fois par poste. L'équipe de production demande un redémarrage immédiat.",
          mission: [
            "Identifier les interlocuteurs et les informations à recueillir.",
            "Classer les impacts possibles : sécurité, production, qualité, environnement et coût.",
            "Proposer une réponse qui concilie sécurité, remise en service et recherche de cause.",
          ],
          correction: "Le technicien sécurise d'abord la situation, collecte les faits auprès de l'opérateur et consulte l'historique. Il ne promet pas un redémarrage avant d'avoir identifié les risques et la cause. Après réparation et essais autorisés, il trace l'intervention et propose une action préventive si le défaut est récurrent.",
        },
        memo: ["Sécuriser", "Constater", "Diagnostiquer", "Réparer", "Contrôler", "Tracer"],
        resume: "La maintenance maintient un équipement disponible, sûr et conforme. Le technicien travaille avec la production, la qualité, les méthodes et le HSE ; il priorise selon la criticité et ne sacrifie jamais la sécurité à la vitesse.",
      },
      {
        id: "1-2",
        title: "Les 3 types de maintenance",
        durationMinutes: 22,
        objectifs: [
          "Classer une intervention en corrective, préventive systématique, préventive conditionnelle ou améliorative.",
          "Choisir une stratégie de maintenance cohérente avec le symptôme et la criticité.",
        ],
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
        verification: {
          question: "Un roulement est remplacé parce que ses vibrations dépassent un seuil. De quel type d'action s'agit-il ?",
          options: ["Corrective", "Préventive systématique", "Préventive conditionnelle", "Améliorative"],
          correct: 2,
          explanation: "La décision dépend d'une mesure de l'état réel du roulement : c'est une maintenance préventive conditionnelle.",
        },
        exercice: {
          enonce:
            "Classez ces 4 actions : (a) remplacer un roulement après un test d'analyse vibratoire, (b) remplacer un filtre à air tous les 3 mois, (c) réparer un vérin qui fuit, (d) ajouter un carter de protection supplémentaire sur une chaîne de transmission qui s'use trop vite.",
          consignes: [
            "Classe chaque action dans une famille de maintenance.",
            "Justifie le classement avec le moment ou le déclencheur de l'intervention.",
            "Vérifie que tu distingues bien systématique et conditionnelle.",
          ],
          criteres: [
            "J'ai classé les quatre actions.",
            "J'ai justifié chaque réponse avec un indice de la situation.",
            "J'ai distingué intervalle fixe et mesure d'état.",
          ],
          correction:
            "(a) préventive conditionnelle — décidée suite à une mesure. (b) préventive systématique — intervalle fixe. (c) corrective — la panne est déjà là. (d) améliorative — on modifie l'équipement pour le rendre plus fiable.",
        },
        ascii: `ÉTAT DE L'ÉQUIPEMENT
│
├─ Défaillance présente ───────────► CORRECTIVE
│
├─ Pas de panne, échéance atteinte ► PRÉVENTIVE SYSTÉMATIQUE
│
├─ Dérive mesurée ─────────────────► PRÉVENTIVE CONDITIONNELLE
│
└─ Défaut récurrent à supprimer ───► AMÉLIORATIVE`,
        astucesPro: [
          "Une bonne stratégie dépend de la criticité, du coût d'arrêt et de la possibilité de détecter une dérive.",
          "Ne remplace pas systématiquement une pièce sans comparer sa durée de vie réelle à la périodicité prévue.",
          "Après une corrective répétitive, demande toujours si une action améliorative est justifiée.",
        ],
        diagnostic: [
          "Déterminer si la défaillance est déjà présente ou seulement annoncée par un indicateur.",
          "Rechercher le déclencheur de l'intervention : panne, calendrier, mesure d'état ou retour d'expérience.",
          "Comparer le choix de maintenance à la criticité et au coût global.",
        ],
        depannage: [
          "Pour une corrective, remettre d'abord l'équipement dans un état sûr.",
          "Confirmer la cause avant de remplacer une pièce.",
          "Contrôler la remise en service et enregistrer les résultats.",
          "Si le défaut se répète, déclencher une analyse de cause et une proposition d'amélioration.",
        ],
        securite: [
          "Le type de maintenance ne change jamais l'obligation de maîtriser les risques de l'intervention.",
          "Une opération planifiée reste dangereuse si les énergies et coactivités ne sont pas maîtrisées.",
          "Toute modification améliorative doit être validée selon les règles techniques et l'organisation de l'entreprise.",
        ],
        etudeDeCas: {
          situation: "Un roulement de ventilateur est changé tous les trois mois, mais plusieurs roulements retirés sont encore en bon état.",
          mission: [
            "Identifier la stratégie actuelle.",
            "Proposer les mesures permettant d'envisager une maintenance conditionnelle.",
            "Expliquer les gains attendus et les risques à maîtriser.",
          ],
          correction: "Le remplacement trimestriel est systématique. Une surveillance des vibrations, de la température et du bruit, avec seuils et tendances validés, peut permettre un passage au conditionnel. La décision doit tenir compte de la criticité du ventilateur et conserver une marge de sécurité suffisante.",
        },
        memo: ["Panne = corrective", "Échéance = systématique", "Mesure = conditionnelle", "Conception modifiée = améliorative"],
        resume: "Corrective, préventive systématique, préventive conditionnelle et améliorative répondent à des déclencheurs différents. Le bon choix résulte de la criticité, des données disponibles et du coût global, jamais d'une habitude seule.",
      },
      {
        id: "1-3",
        title: "Sécurité de base : EPI et consignation",
        durationMinutes: 25,
        objectifs: [
          "Remettre dans l'ordre les étapes essentielles d'une consignation.",
          "Choisir les protections et la vérification adaptées avant une intervention.",
        ],
        simple:
          "Avant toute intervention sur une machine, il faut d'abord protéger sa propre sécurité et celle des autres. On porte des équipements de protection, et on s'assure que la machine ne peut pas redémarrer ni libérer d'énergie dangereuse pendant l'intervention : c'est la consignation.",
        vocab: [
          ["EPI", "Équipement de protection porté par une personne, choisi selon le risque : lunettes, chaussures, protection auditive, gants adaptés, etc."],
          ["Consignation", "Ensemble des opérations qui isolent une machine de toutes ses sources d'énergie avant intervention."],
          ["Mise hors énergie", "Couper l'alimentation électrique, pneumatique, hydraulique ou mécanique d'un équipement."],
          ["VAT", "Vérificateur d'Absence de Tension : outil qui confirme qu'un circuit électrique est bien hors tension."],
          ["Arrêt d'urgence", "Fonction qui commande un arrêt rapide face à un danger ; elle ne remplace ni la séparation des énergies ni la consignation."],
          ["NF C 18-510", "Norme française qui encadre les habilitations électriques et les règles de sécurité électrique."],
        ],
        example:
          "Avant de changer un contacteur dans une armoire électrique, un technicien habilité pour l'opération applique la procédure du site : séparation, condamnation, identification, puis vérification d'absence de tension avec le matériel prévu.",
        schema: "consignation-steps",
        retenir: [
          "L'ordre de la consignation : séparer (couper) → condamner (cadenasser) → identifier → vérifier l'absence d'énergie (VAT).",
          "On ne shunte JAMAIS un dispositif de sécurité, même pour aller plus vite.",
          "La sécurité passe toujours avant la réparation, sans exception.",
          "Une consignation électrique est réalisée selon l'organisation de l'entreprise par des personnes formées et habilitées pour les opérations concernées.",
          "Un arrêt d'urgence arrête une situation dangereuse, mais ne prouve pas que toutes les énergies sont isolées.",
        ],
        erreurs: [
          "Vérifier l'absence de tension seulement « à l'oreille » ou en supposant que c'est coupé : il faut toujours mesurer avec un VAT.",
          "Réarmer un arrêt d'urgence sans avoir compris pourquoi il s'est déclenché.",
        ],
        quizIds: ["q11", "q12", "q13", "q14", "q15", "q16"],
        verification: {
          question: "Avant de remplacer un contacteur, quelle action doit précéder tout contact avec les conducteurs ?",
          options: ["Réarmer le disjoncteur", "Faire uniquement un contrôle visuel", "Consigner puis vérifier l'absence de tension", "Démonter immédiatement le contacteur"],
          correct: 2,
          explanation: "La source doit être séparée et condamnée, puis l'absence de tension vérifiée selon la procédure et les habilitations applicables.",
        },
        exercice: {
          enonce:
            "Un collègue vous dit : « Pas besoin de cadenasser, je reste à côté de l'armoire, personne ne touchera à rien. » Que répondez-vous ?",
          consignes: [
            "Identifie les risques qui restent présents sans condamnation.",
            "Explique le rôle précis du cadenas.",
            "Rappelle la vérification à effectuer avant de toucher le circuit.",
          ],
          criteres: [
            "J'ai mentionné le risque de redémarrage ou d'erreur d'un tiers.",
            "J'ai expliqué que la condamnation rend la remise sous énergie impossible.",
            "J'ai cité la vérification d'absence de tension.",
          ],
          correction:
            "Rester à côté ne protège pas contre un redémarrage automatique ni contre l'erreur d'un tiers. Il faut appliquer la procédure de consignation du site : séparation, condamnation par le dispositif prévu, identification et vérification de l'absence d'énergie. Seules les personnes formées, autorisées ou habilitées pour l'opération réalisent les étapes qui leur sont confiées.",
        },
        illustrations: ["consignation-interactive"],
        activity: {
          type: "sequence",
          title: "Remets la préparation en sécurité dans l'ordre",
          instruction: "Classe les étapes avant une intervention hors énergie. La procédure réelle du site reste prioritaire.",
          items: ["Analyser la tâche et les énergies", "Arrêter selon la procédure", "Séparer toutes les sources", "Condamner et identifier", "Dissiper les énergies résiduelles", "Vérifier l'état sûr"],
          correctOrder: [0, 1, 2, 3, 4, 5],
          success: "La machine n'est considérée sûre qu'après maîtrise des sources et des énergies résiduelles, puis vérification selon la procédure.",
        },
        ascii: `RÉSEAU ÉLECTRIQUE ─┐
AIR COMPRIMÉ ──────┼─► MACHINE ─► mouvement / chaleur / pression
HYDRAULIQUE ───────┤
GRAVITÉ / RESSORT ─┘

ARRÊT D'URGENCE = ordre d'arrêt
CONSIGNATION     = maîtrise durable des énergies`,
        astucesPro: [
          "Fais le tour physique de la machine : une seule source oubliée suffit à créer un accident grave.",
          "Teste l'appareil de vérification avant et après son utilisation lorsque la procédure le prévoit.",
          "Ton cadenas et ton identification ne se prêtent pas : ils matérialisent ta protection personnelle selon l'organisation du site.",
        ],
        diagnostic: [
          "Identifier la tâche exacte et la zone d'intervention.",
          "Recenser les sources électriques, pneumatiques, hydrauliques, thermiques, mécaniques et gravitaires.",
          "Repérer les automatismes, alimentations de secours et énergies accumulées.",
          "Vérifier l'état sûr avec les moyens prévus avant de commencer.",
        ],
        depannage: [
          "Arrêter et informer les personnes concernées.",
          "Appliquer la procédure de consignation correspondant à l'équipement et à l'opération.",
          "Dissiper ou retenir les énergies résiduelles : pression, ressort, inertie, charge suspendue, chaleur.",
          "Vérifier l'absence d'énergie dangereuse avant intervention.",
          "Après travaux, contrôler la zone, retirer les protections selon la procédure et effectuer une remise en service maîtrisée.",
        ],
        securite: [
          "Ce cours prépare à comprendre les principes ; il ne délivre aucune habilitation ni autorisation d'intervention.",
          "L'arrêt normal, l'arrêt d'urgence ou un écran éteint ne constituent pas une consignation.",
          "Une opération électrique ne se réalise que dans les limites de l'habilitation et des instructions reçues.",
        ],
        etudeDeCas: {
          situation: "Un convoyeur est arrêté par le bouton d'urgence. Un carton reste coincé sous une bande tendue et un vérin pneumatique est encore sous pression.",
          mission: [
            "Expliquer pourquoi l'arrêt d'urgence est insuffisant.",
            "Lister les énergies encore présentes.",
            "Décrire les principes de mise en sécurité avant le débourrage.",
          ],
          correction: "Le bouton d'urgence a commandé l'arrêt, mais l'alimentation électrique, la pression pneumatique, la tension de la bande et les masses mobiles peuvent rester dangereuses. Il faut interdire l'accès, appliquer la procédure multi-énergies, dissiper ou retenir les énergies accumulées, vérifier l'état sûr et n'intervenir que dans les limites de son autorisation.",
        },
        memo: ["Identifier les énergies", "Séparer", "Condamner", "Dissiper", "Vérifier", "Intervenir", "Remettre en service avec contrôle"],
        resume: "Une machine arrêtée n'est pas forcément hors énergie. La consignation vise à empêcher le maintien ou la réapparition d'une énergie dangereuse. Elle suit la procédure de l'entreprise et requiert les compétences, autorisations et habilitations adaptées.",
      },
      ...MODULE1_SAFETY_LESSONS,
    ],
    blocks: MODULE1_SAFETY_BLOCKS,
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
        durationMinutes: 20,
        objectifs: [
          "Calculer un pourcentage de disponibilité à partir d'une durée de fonctionnement.",
          "Contrôler la cohérence d'un résultat de proportionnalité et de ses unités.",
        ],
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
        verification: {
          question: "Une machine fonctionne 6 heures sur une période de 8 heures. Quelle est sa disponibilité ?",
          options: ["60 %", "75 %", "80 %", "133 %"],
          correct: 1,
          explanation: "Disponibilité = (6 / 8) × 100 = 75 %. Le résultat reste bien compris entre 0 et 100 %.",
        },
        exercice: {
          enonce:
            "Une ligne de production a fonctionné 6h30 sur une équipe de 8h. Quel est son taux de disponibilité en pourcentage ?",
          consignes: [
            "Convertis 6 h 30 en heures décimales.",
            "Applique la formule valeur divisée par total, puis multiplie par 100.",
            "Arrondis le résultat au dixième et vérifie sa cohérence.",
          ],
          criteres: [
            "J'ai correctement converti 6 h 30 en 6,5 h.",
            "J'ai écrit la formule et conservé l'unité pourcentage.",
            "Mon résultat final est 81,25 %, soit environ 81,3 %.",
          ],
          correction:
            "6h30 = 6,5 h. Taux = (6,5 / 8) × 100 = 81,25 %. On arrondit généralement à 81,3 %.",
        },
      },
      {
        id: "2-2",
        title: "Puissance, énergie, rendement",
        durationMinutes: 20,
        objectifs: [
          "Distinguer puissance instantanée, énergie consommée et rendement.",
          "Calculer une énergie en kWh ou un rendement en pourcentage.",
        ],
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
        verification: {
          question: "Un moteur de 3 kW fonctionne pendant 2 heures. Quelle énergie consomme-t-il ?",
          options: ["1,5 kWh", "5 kWh", "6 kWh", "9 kWh"],
          correct: 2,
          explanation: "Énergie = puissance × durée = 3 kW × 2 h = 6 kWh.",
        },
        exercice: {
          enonce:
            "Un moteur électrique reçoit une puissance de 5 kW et fournit une puissance mécanique utile de 4,25 kW. Calculez son rendement en pourcentage.",
          consignes: [
            "Identifie la puissance utile et la puissance reçue.",
            "Calcule le rapport utile sur reçue.",
            "Convertis le résultat en pourcentage et interprète les pertes.",
          ],
          criteres: [
            "J'ai utilisé la formule puissance utile divisée par puissance reçue.",
            "J'ai obtenu un rendement de 85 %.",
            "J'ai indiqué que les 15 % restants correspondent aux pertes.",
          ],
          correction:
            "Rendement = 4,25 / 5 = 0,85, soit 85 %. Les 15 % restants sont dissipés en pertes (chaleur, frottements).",
        },
      },
      {
        id: "2-3",
        title: "Force, couple, pression, débit",
        durationMinutes: 25,
        objectifs: [
          "Associer force, couple, pression et débit à leur formule et à leur unité.",
          "Convertir les surfaces et les pressions avant un calcul industriel.",
        ],
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
        verification: {
          question: "Une force de 100 N agit à 0,20 m de l'axe. Quel couple produit-elle ?",
          options: ["5 N·m", "20 N·m", "100 N·m", "500 N·m"],
          correct: 1,
          explanation: "Couple = force × distance = 100 × 0,20 = 20 N·m.",
        },
        exercice: {
          enonce:
            "Un vérin hydraulique a un piston de section 20 cm² et doit développer une force de 4000 N. Quelle pression d'huile (en bars) faut-il lui fournir ? (1 bar = 100 000 Pa, 20 cm² = 0,002 m²)",
          consignes: [
            "Utilise la surface convertie en mètres carrés.",
            "Calcule la pression en pascals avec P = F / S.",
            "Convertis ensuite les pascals en bars.",
          ],
          criteres: [
            "J'ai utilisé 0,002 m² pour la surface.",
            "J'ai obtenu 2 000 000 Pa avant conversion.",
            "Ma réponse finale est 20 bars.",
          ],
          correction:
            "P = F / S = 4000 / 0,002 = 2 000 000 Pa. Conversion en bars : 2 000 000 / 100 000 = 20 bars.",
        },
      },
    ],
  },
];
