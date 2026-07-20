import { Activity, Cog, Droplet, PlugZap, RotateCcw, ShieldAlert, Target, Wind, Zap } from "lucide-react";

/* ---------------------------- DATA: PANNES (10 scénarios) ---------------------------- */

export const PANNES = [
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
      "La température de carcasse d'un moteur triphasé d'entraînement de convoyeur, mesurée au thermomètre infrarouge, augmente anormalement après seulement 20 minutes de marche. Aucune odeur de brûlé, pas de bruit anormal.",
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
      { label: "Contrôle prioritaire ?", options: ["Mettre la zone en sécurité, localiser la fuite sans approcher la main puis contrôler la pression après dépressurisation", "Redémarrer la presse immédiatement", "Vérifier la tension du réseau", "Ignorer et continuer la production"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Manomètre", "Multimètre", "Pince ampèremétrique", "Tachymètre"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Intervenir directement sous pression", "Dépressuriser complètement le circuit et ne jamais rechercher une fuite avec la main", "Ignorer le risque de projection", "Nettoyer sans couper le circuit"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Remplacer le joint ou le flexible, resserrer le raccord, purger l'air du circuit avant remise en service", "Ajouter de l'huile sans réparer la fuite", "Augmenter la pression pour compenser", "Ignorer, une petite fuite n'est jamais grave"], correct: 0 },
    ],
    correction:
      "Une fuite hydraulique doit toujours être traitée avec prudence : un jet d'huile sous haute pression peut pénétrer la peau et provoquer une urgence médicale. On ne cherche jamais la fuite avec la main. On balise la zone, arrête et dépressurise complètement le circuit, puis on remplace la pièce défaillante (joint, flexible ou raccord) avant de purger et contrôler la remise en service.",
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
      { label: "Cause la plus probable ?", options: ["Bobine non alimentée ou bobine coupée", "Une fuite pneumatique", "Un problème de couple mécanique", "Un défaut de capteur de présence colis"], correct: 0 },
      { label: "Contrôle prioritaire ?", options: ["Vérifier le circuit de commande, puis contrôler la continuité de la bobine hors tension", "Vérifier la pression d'air", "Vérifier le débit hydraulique", "Changer le moteur directement"], correct: 0 },
      { label: "Appareil de mesure adapté ?", options: ["Multimètre", "Manomètre", "Débitmètre", "Tensiomètre de courroie"], correct: 0 },
      { label: "Sécurité à respecter ?", options: ["Mesurer sous tension sans précaution", "Vérifier l'absence de tension (VAT) après consignation avant toute mesure de continuité", "Shunter le contacteur pour tester", "Ignorer la procédure"], correct: 1 },
      { label: "Réparation proposée ?", options: ["Remplacer le contacteur en vérifiant le bon calibre", "Réparer la bobine soi-même par soudure", "Ignorer et forcer le démarrage manuellement", "Augmenter la tension d'alimentation"], correct: 0 },
    ],
    correction:
      "L'absence de claquement oriente d'abord vers une bobine qui ne reçoit pas sa tension de commande ou vers une bobine coupée. On vérifie le circuit de commande selon la procédure et l'habilitation applicables. Après consignation et VAT, on peut mesurer la continuité de la bobine au multimètre. Le contacteur défectueux est remplacé par un modèle compatible, de même tension de bobine et de calibre adapté.",
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
