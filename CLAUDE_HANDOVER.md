# Transmission du travail réalisé avec Claude Code

> Document de reprise à destination de Codex (relecture, test et fusion).
> Claude travaille **uniquement sur une branche dédiée** et **ne fusionne jamais dans `main`**.

## Branche utilisée

`claude/tmi-revision-takeover-agajbi`

(La convention `claude/module-5` n'a pas pu être utilisée : l'environnement d'exécution
impose la branche ci-dessus pour cette session. Aucun push sur `main`, aucun force push,
aucune réécriture d'historique.)

## Date de début

23 juillet 2026

## État du projet avant modification

- Application React 19 + TypeScript + Vite (rolldown) + Tailwind CSS v4, icônes `lucide-react`.
- Navigation par état React (pas de router). Progression sauvegardée en `localStorage`.
- 4 modules : M1 (Sécurité), M2 (Maths appliquées), M3 (Électrotechnique), M4 (Mécanique).
  - M1, M2, M3 : structure « plate » (leçons directes), issues du programme AFORP.
  - M4 : structure riche « par blocs de maîtrise » (12 blocs prévus, **6 réalisés**, 6 planifiés),
    avec examen de bloc, déblocage séquentiel et parcours pédagogique pro complet par leçon.
- Validateur pédagogique strict (`src/data/validate.ts`) exécuté à chaque build.
- `npm run check` (typecheck + build + budget bundle) : **vert** avant intervention.
- Décomptes de départ : 4 modules, 12 blocs, 57 leçons, 290 questions, 10 pannes, 12 badges.

### Décision d'orientation validée par le propriétaire

- **Ne pas** créer de modules M5/M6/M7 séparés dans l'immédiat.
- **Approfondir le module 3 (Électrotechnique)** en le transformant en parcours par blocs,
  sur le modèle du module 4. Ne pas toucher au module 4 pour l'instant.
- Priorité absolue : qualité, fiabilité technique, pédagogie pour débutant.
- Ajouter des schémas / illustrations / animations pédagogiques (SVG + CSS, sans dépendance lourde,
  respect de `prefers-reduced-motion`, lisibles sur mobile).

## Modules développés

- **Module 3 — Électrotechnique industrielle** : restructuré en 7 blocs de maîtrise et
  **entièrement développé** (7 blocs sur 7, 43 chapitres). Voir le détail des étapes ci-dessous.
- **Module 5 — Automatisme industriel** : **nouveau module créé** (décision validée par le propriétaire
  après achèvement du module 3). Bloc 1 « Découvrir l'automatisme » **disponible** (6 chapitres) ;
  blocs 2 à 7 planifiés (capteurs, actionneurs, pneumatique, API, GRAFCET, diagnostic).

## Chapitres ajoutés

**Étape 1** — aucun (refactor structurel pur).

**Étape 2 puis étape 3** — module 3, bloc 2 **complet (7 chapitres sur 7, statut `available` avec examen)** :
- **3-4 — Comprendre le risque électrique** (contact direct/indirect, court-circuit, effets sur le corps,
  rôle de la terre et des protections). Intègre l'**animation interactive « circuit ouvert / fermé / court-circuit »**.
- **3-5 — La consignation électrique étape par étape** (séparer, condamner, identifier, VAT).
  Intègre le **schéma interactif « consignation étape par étape »**.
- **3-6 — Les EPI et l'outillage isolant** (gants isolants, écran facial, outils isolés ; contrôle avant usage).
  Schéma statique `electrical-ppe`.
- **3-7 — Les habilitations électriques (NF C 18-510)** (domaine, rôle, attributs ; BR vs BC).
  Intègre le **schéma interactif « décodeur d'habilitation »**.
- **3-8 — Mesurer en sécurité** (catégories CAT, calibre, cordons, sous/hors tension). Schéma `measurement-safety`.
- **3-9 — Conduite à tenir face à un accident électrique** (protéger, alerter, secourir). Schéma `electrical-first-aid`.
- **3-10 — Synthèse sécurité et mise en situation** (démarche complète, références aux chapitres 3-4 à 3-9).
- Examen du bloc 2 (14 questions couvrant les 7 chapitres, seuil 80 %) + badge `electro_block_2` (« Sécurité électrique »).

**Étape 4** — module 3, bloc 3 **complet (7 chapitres, statut `available` avec examen)** :
- **3-11 — Du réseau à la machine : la distribution électrique** (TGBT, tableaux divisionnaires, départs).
  Schéma statique `power-distribution`.
- **3-12 — Monophasé et triphasé approfondis** (tension simple 230 V, composée 400 V, √3, équilibrage).
  Schéma statique `three-phase-voltages`.
- **3-13 — La terre et les régimes de neutre (TT, TN, IT)**. Intègre le **schéma interactif « régimes de neutre »**.
- **3-14 — La protection différentielle** (DDR, protection des personnes vs protection des circuits).
- **3-15 — Protéger les circuits : disjoncteurs, calibres et sélectivité**.
- **3-16 — Puissances en triphasé** (active, réactive, apparente, cos φ, compensation).
- **3-17 — Synthèse distribution et mise en situation** (références aux chapitres 3-11 à 3-16).
- Examen du bloc 3 (14 questions couvrant les 7 chapitres, seuil 80 %) + badge `electro_block_3` (« Distribution & protections »).

**Étape 5** — module 3, bloc 4 **complet (7 chapitres, statut `available` avec examen)** :
- **3-18 — Les fonctions d'un départ moteur** (sectionner, protéger du court-circuit, commander, protéger de la surcharge).
- **3-19 — Le sectionneur et l'isolement de sécurité** (manœuvre hors charge, condamnation).
- **3-20 — Le contacteur : commander le moteur à distance**. Intègre le **schéma interactif « contacteur + relais thermique en action »**.
- **3-21 — Le relais thermique et la protection contre les surcharges** (réglage sur In, classe de déclenchement).
- **3-22 — Circuit de commande et circuit de puissance** (marche/arrêt, auto-maintien). Schéma statique `command-power-circuit`.
- **3-23 — Temporisateurs et relais auxiliaires** (temporisation au travail/au repos, étoile-triangle).
- **3-24 — Synthèse appareillage et mise en situation** (diagnostic fonction par fonction, références 3-18 à 3-23).
- Examen du bloc 4 (14 questions) + badge `electro_block_4` (« Commande & appareillage »).

**Étape 6** — module 3, bloc 5 **complet (7 chapitres, statut `available` avec examen)** :
- **3-25 — Le moteur asynchrone triphasé : constitution et principe** (stator, rotor, champ tournant, glissement). Schéma `asynchronous-motor`.
- **3-26 — Plaque signalétique et couplage étoile / triangle**. Schéma `star-delta-coupling`.
- **3-27 — Le démarrage direct** (pointe de courant, à-coup, cas d'usage).
- **3-28 — Le démarrage étoile-triangle** (tension réduite au démarrage, temporisation).
- **3-29 — Le sens de rotation et son inversion**. Intègre le **schéma interactif « inverser le sens de rotation »**.
- **3-30 — Le variateur de vitesse** (redresseur → bus continu → onduleur, fréquence variable). Schéma `vfd-blockdiagram`.
- **3-31 — Synthèse moteurs et mise en situation** (références 3-25 à 3-30).
- Examen du bloc 5 (14 questions) + badge `electro_block_5` (« Moteurs & variation »).

**Étape 7** — module 3, bloc 6 **complet (6 chapitres, statut `available` avec examen)** :
- **3-32 — Lire un schéma électrique : à quoi ça sert**.
- **3-33 — Symboles et repérage normalisés**. Intègre le **schéma interactif « décodeur de repères »** (Q, KM, F, S, M, H, T, K).
- **3-34 — Schéma unifilaire et schéma développé**. Schéma statique `schematic-comparison`.
- **3-35 — Folios, renvois et organisation d'un dossier**.
- **3-36 — Suivre un schéma pour localiser une panne**.
- **3-37 — Synthèse lecture de schémas et mise en situation** (références 3-32 à 3-36).
- Examen du bloc 6 (12 questions) + badge `electro_block_6` (« Lecture de schémas »).

**Étape 8 — module 3 terminé** — bloc 7 **complet (6 chapitres, statut `available` avec examen)** :
- **3-38 — La démarche de diagnostic structurée** (constater, sécuriser, analyser, localiser, réparer, contrôler, tracer). Schéma statique `diagnostic-flow`.
- **3-39 — Du symptôme aux hypothèses**.
- **3-40 — L'organigramme de recherche de panne**. Intègre le **schéma interactif « assistant de diagnostic »** (`diagnostic-tree`, non noté, complémentaire du simulateur de pannes).
- **3-41 — Mesures et tests de confirmation**.
- **3-42 — Étude de cas transversale**.
- **3-43 — Synthèse du module 3 et passerelle vers l'automatisme** (chaîne d'énergie vs chaîne d'information).
- Examen du bloc 7 (12 questions) + badge `electro_block_7` (« Diagnostic électrique »).

> **Le module 3 « Électrotechnique industrielle » est désormais entièrement développé : 7 blocs sur 7 disponibles, 43 chapitres, 8 schémas interactifs, 7 examens de bloc, 7 badges de bloc.**

**Étape 9 — nouveau module 5 « Automatisme industriel »** — bloc 1 **complet (6 chapitres, `available` avec examen)** :
- **5-1 — Qu'est-ce qu'un système automatisé ?** Intègre le **schéma interactif « boucle d'un système automatisé »** (`automated-system`).
- **5-2 — Partie opérative et partie commande** (ordres / comptes rendus). Schéma `po-pc-structure`.
- **5-3 — Chaîne d'énergie et chaîne d'information**. Schéma `energy-info-chains`.
- **5-4 — Le cycle d'un système automatisé** (cycle machine vs cycle automate).
- **5-5 — Sécurité des systèmes automatisés** (redémarrage automatique, consignation de toutes les énergies).
- **5-6 — Repérer les sous-ensembles d'un système** (situer une panne : information ou énergie).
- Examen du bloc 1 (12 questions) + badge `auto_block_1` (« Bases de l'automatisme »).
- Nouveaux fichiers : `src/data/automatisme.ts`, `src/data/automatismeQuestions.ts` (`aut1`…`aut30`).
- `index.ts` : module m5 ajouté aux `MODULES` et `QUESTIONS`. `vite.config.ts` : chunk dédié `learning-auto`.

**Étape 10 — module 5, bloc 2 « Les capteurs industriels »** — **complet (7 chapitres, `available` avec examen)** :
- **5-7 — À quoi sert un capteur ?** (TOR vs analogique). Schéma `sensor-types-compare`.
- **5-8 — Le détecteur inductif** (métal, sans contact). Intègre le **schéma interactif « détection sans contact »** (`sensor-detection`).
- **5-9 — Le détecteur capacitif** (presque tous matériaux, niveau).
- **5-10 — Le détecteur photoélectrique** (barrage, reflex, proximité).
- **5-11 — Détecteurs de position et fins de course** (détection avec contact).
- **5-12 — Capteurs analogiques et grandeurs mesurées** (4-20 mA, 0-10 V).
- **5-13 — Raccordement des capteurs et synthèse** (2/3 fils, PNP/NPN).
- Questions `aut31`…`aut65`. Examen (14 questions) + badge `auto_block_2` (« Les capteurs »).

## Fichiers créés

**Étape 1**
- `src/data/electrotechnique.ts` — module M3 par blocs (leçons 3-1/3-2/3-3 déplacées + feuille de route blocs 2-7).
- `CLAUDE_HANDOVER.md` — ce document.

**Étapes 2-3**
- `src/features/courses/InteractiveSchema.tsx` — composant des schémas interactifs/animés
  (`consignation-interactive`, `circuit-states`, `habilitation-decoder`), SVG + CSS + état React.
- `src/data/electrotechniqueQuestions.ts` — banque de questions du bloc 2 (`els1`…`els35`).

## Fichiers modifiés

**Étape 1**
- `src/data/modules.ts` — retrait du module M3 (déplacé), retrait de l'import `Zap` devenu inutile.
- `src/data/index.ts` — assemblage `[m1, m2, ELECTRO_MODULE (m3), MECHANICS_MODULE (m4)]` + réexports.

**Étapes 2-3**
- `src/types/index.ts` — ajout de `InteractiveSchemaType`, du champ facultatif `Lesson.illustrations`,
  et de trois `LessonSchemaType` statiques (`electrical-ppe`, `measurement-safety`, `electrical-first-aid`).
- `src/index.css` — keyframes `tmi-flow` + classe `.tmi-current-flow`, animation active uniquement
  si `prefers-reduced-motion: no-preference`, mise en pause via `.is-paused`.
- `src/features/courses/LessonView.tsx` — rendu des `illustrations` après le schéma statique.
- `src/features/courses/index.ts` — export de `InteractiveSchema`.
- `src/features/courses/LessonSchema.tsx` — 3 nouveaux schémas statiques (EPI, mesure en sécurité, secours).
- `src/data/electrotechnique.ts` — chapitres 3-4 à 3-10, bloc `m3-b2` passé en `available` avec examen.
- `src/data/index.ts` — fusion de `ELECTRO_QUESTIONS` dans la banque de questions.
- `src/data/badges.ts` — badge `electro_block_2` (« Sécurité électrique »).
- `src/hooks/useProgress.ts` — attribution du badge `electro_block_2` à la réussite de l'examen `m3-b2`
  (constante renommée `blockExamBadges`).
- `vite.config.ts` — chunk dédié `learning-electro` pour isoler les données du module 3.

## Décisions techniques

- **Étape 1 — aucun changement de contenu pédagogique** : les 3 leçons de M3 sont copiées mot pour mot ;
  les questions q33–q50 restent inchangées.
- Réutilisation du modèle existant (`mechanics.ts`) : `TrainingBlock[]` + `TrainingModule`,
  pour bénéficier de l'affichage par blocs, du déblocage séquentiel et des examens de bloc.
- L'`id` du module reste `m3` : le badge `module_3` et toute progression existante restent valides.
- **Schémas visuels : SVG + CSS + état React, sans nouvelle dépendance** (aucune librairie d'animation).
  Chaque illustration a un titre, une légende et une explication ; reste lisible sans mouvement ;
  n'utilise jamais la couleur seule (texte + icônes) ; respecte `prefers-reduced-motion` au niveau CSS ;
  propose Pause/Recommencer là où c'est pertinent.
- **Chunk `learning-electro`** : quand `learning-data` a approché le budget de 500 kB/fichier, les données
  du module 3 ont été isolées dans leur propre chunk via `vite.config.ts` (`learning-data` ~449 kB,
  `learning-electro` ~63 kB) — le contenu peut continuer à grandir sans casser `check:bundle`.
- Bloc 2 finalisé en statut `available` : 7 chapitres + examen (14 questions couvrant les 7 leçons, seuil 80 %)
  + badge `electro_block_2`. Rappel : un bloc reste **verrouillé tant que l'examen du bloc précédent n'est pas
  réussi** — déblocage séquentiel hérité de M4 (pour tester le bloc 2, réussir d'abord l'examen du bloc 1).

## Tests exécutés

- `npm run check` (typecheck TypeScript + build de production + validateur pédagogique + budget bundle) : **OK**
  après chaque étape (1, 2, commit A, commit B).
- Démarrage `npm run dev` : serveur opérationnel, app et composants servis (HTTP 200).
- Vérification visuelle pixel non réalisée dans l'environnement distant (Playwright non installé,
  non ajouté volontairement). **À confirmer visuellement côté PC / Codex** : ouvrir M3 → réussir l'examen
  du bloc 1 pour déverrouiller le bloc 2 → parcourir les 7 chapitres → tester les 3 schémas interactifs
  (circuit, consignation, décodeur d'habilitation), le mode clair/sombre et l'affichage mobile.

## Résultat du build

- Build réussi. Décomptes après le bloc 2 du module 5 : **5 modules, 26 blocs, 110 leçons, 555 questions, 10 pannes, 20 badges.**
- Bundles sous budget : `learning-data` ≈ 450 kB, `learning-electro` et `learning-auto` isolés (budget 500 kB/fichier).
- **Module 3 : entièrement développé (7 blocs, 43 chapitres). Module 5 : blocs 1 et 2 sur 7 disponibles. Module 4 : inchangé (6 blocs sur 12).**

## Problèmes connus

- Le marqueur SVG `#arrow` est référencé dans `LessonSchema.tsx` mais **jamais défini** (bug cosmétique
  préexistant : les têtes de flèche des schémas statiques ne s'affichent pas). Non corrigé pour rester
  ciblé ; les nouveaux schémas interactifs définissent leurs propres marqueurs inline.
- M4 reste incomplet (6 blocs sur 12), conformément à la décision de ne pas y toucher pour l'instant.
- Vérification visuelle/mobile des schémas restant à faire côté PC (voir « Tests exécutés »).

## Éléments restant à faire

- **Module 3 « Électrotechnique » : entièrement terminé** (7 blocs, 43 chapitres, 8 schémas interactifs,
  7 examens de bloc, 7 badges de bloc + le badge `module_3` de fin de module).
- **Module 5 « Automatisme » : blocs 1 et 2 terminés**, blocs 3 à 7 à développer (actionneurs et
  préactionneurs, pneumatique, API, GRAFCET, diagnostic). Réutiliser `InteractiveSchema` pour les
  nouveaux schémas (vérin pneumatique, distributeur, cycle GRAFCET…).
- Alternative : compléter le **module 4** (mécanique, 6 blocs restants sur 12).
- Envisager d'étendre `validate.ts` aux leçons `3-*` (parcours pro complet) une fois les leçons
  fondatrices 3-1/3-2/3-3 enrichies au même niveau que les blocs 2 à 7.
- Envisager d'étendre les règles de `validate.ts` aux leçons `3-*` **une fois tous les chapitres
  de M3 harmonisés** (attention : 3-1/3-2/3-3 n'ont pas encore le parcours pro complet — ne pas activer
  la règle avant de les avoir enrichis, sinon le build échoue).
- Réutiliser `InteractiveSchema` pour les prochains schémas (contacteur/relais thermique, démarrage moteur,
  sens de rotation, capteurs, etc.) en ajoutant de nouveaux `InteractiveSchemaType`.

## Commits réalisés

Branche poussée sur GitHub (Pull Request #1) :
- `refactor(module-3): restructure l'electrotechnique en parcours par blocs`
- `feat(module-3): ajoute le bloc securite (chap. 3-4, 3-5) et 2 schemas interactifs`
- `feat(module-3): chapitres 3-6 (EPI) et 3-7 (habilitations) + decodeur interactif`
- `feat(module-3): complete le bloc securite (3-8, 3-9, 3-10), examen et badge`
- `feat(module-3): demarre le bloc 3 (distribution, triphase, regimes de neutre)`
- `feat(module-3): complete le bloc 3 (3-14 a 3-17), examen et badge`
- `feat(module-3): demarre le bloc 4 (fonctions depart moteur, sectionneur, contacteur)`
- `feat(module-3): complete le bloc 4 (3-21 a 3-24), examen et badge`
- `ci(pages): publie aussi depuis la branche de travail pour reviser en ligne`
- `ci(pages): revient au deploiement depuis main uniquement`
- `feat(module-3): demarre le bloc 5 (moteur asynchrone, couplage, demarrage direct)`
- `feat(module-3): complete le bloc 5 (3-28 a 3-31), examen et badge`
- `feat(module-3): demarre le bloc 6 (lecture de schemas electriques)`
- `feat(module-3): complete le bloc 6 (3-35 a 3-37), examen et badge`
- `feat(module-3): demarre le bloc 7 (methode de diagnostic electrique)`
- `feat(module-3): complete le bloc 7 (3-41 a 3-43), examen et badge — module 3 termine`
- `feat(module-5): cree le module Automatisme industriel + bloc 1 (5-1 a 5-3)`
- `feat(module-5): complete le bloc 1 (5-4 a 5-6), examen et badge`
- `feat(module-5): demarre le bloc 2 (capteurs : role, inductif, capacitif)`
- `feat(module-5): complete le bloc 2 (5-10 a 5-13), examen et badge`

## Instructions pour reprendre le développement

```bash
npm install          # installer les dépendances
npm run dev          # lancer le serveur de développement (http://localhost:5173)
npm run check        # typecheck + build + validateur pédagogique + budget bundle (à lancer avant chaque commit de contenu)
npm run build        # build de production
npm run preview      # prévisualiser le build de production
npm run build:pages  # build avec base path pour GitHub Pages
```

- Le contenu pédagogique se trouve dans `src/data/` (un fichier par domaine).
- Toute nouvelle leçon/bloc doit satisfaire `src/data/validate.ts` (exécuté au build).
- Respecter le design existant (composants de `src/components/ui.tsx` et `src/features/courses/`).
