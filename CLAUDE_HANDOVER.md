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

- **Module 3 — Électrotechnique industrielle** : restructuration en 7 blocs de maîtrise.
  - Bloc 1 « Fondamentaux électriques » : **disponible** (3 chapitres existants, conservés à l'identique).
  - Blocs 2 à 7 : **planifiés** (feuille de route affichée, contenu à venir bloc par bloc).

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

- Build réussi. Décomptes après bloc 4 : **4 modules, 19 blocs, 78 leçons, 395 questions, 10 pannes, 15 badges.**
- Bundles sous budget : `learning-data` ≈ 449 kB, `learning-electro` isolé (budget 500 kB/fichier).
- **Module 3 : blocs 1 à 4 disponibles (24 chapitres) ; blocs 5 à 7 restant à développer.**

## Problèmes connus

- Le marqueur SVG `#arrow` est référencé dans `LessonSchema.tsx` mais **jamais défini** (bug cosmétique
  préexistant : les têtes de flèche des schémas statiques ne s'affichent pas). Non corrigé pour rester
  ciblé ; les nouveaux schémas interactifs définissent leurs propres marqueurs inline.
- M4 reste incomplet (6 blocs sur 12), conformément à la décision de ne pas y toucher pour l'instant.
- Vérification visuelle/mobile des schémas restant à faire côté PC (voir « Tests exécutés »).

## Éléments restant à faire

- **Blocs 2, 3 et 4 de M3 : terminés** (7 chapitres chacun, examen, badge).
- Développer les **blocs 5 à 7 de M3** (moteurs asynchrones et variation de vitesse,
  lecture de schémas électriques, méthode de diagnostic électrique).
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
