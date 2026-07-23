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

- Aucun nouveau chapitre à ce stade (étape 1 = refactor structurel sans changement de contenu).

## Fichiers créés

- `src/data/electrotechnique.ts` — nouveau module M3 par blocs (leçons 3-1/3-2/3-3 déplacées telles quelles + feuille de route blocs 2-7).
- `CLAUDE_HANDOVER.md` — ce document.

## Fichiers modifiés

- `src/data/modules.ts` — retrait du module M3 (déplacé), retrait de l'import `Zap` devenu inutile.
- `src/data/index.ts` — assemblage `[m1, m2, ELECTRO_MODULE (m3), MECHANICS_MODULE (m4)]` + réexports.

## Décisions techniques

- **Aucun changement de contenu pédagogique** à cette étape : les 3 leçons de M3 sont copiées
  mot pour mot ; les questions q33–q50 restent inchangées.
- Réutilisation du modèle existant (`mechanics.ts`) : `TrainingBlock[]` + `TrainingModule`,
  pour bénéficier automatiquement de l'affichage par blocs, du déblocage séquentiel et des examens de bloc.
- L'`id` du module reste `m3` : le badge `module_3` et toute progression existante restent valides.
- Examen du bloc 1 construit à partir des questions existantes (couvre les 3 leçons, seuil 80 %).
- Choix de rester en **SVG + CSS + état React** pour les futures illustrations/animations
  (pas de nouvelle dépendance d'animation), conforme au budget bundle (`scripts/check-bundle-size.mjs`).

## Tests exécutés

- `npm run check` (typecheck TypeScript + build de production + validateur pédagogique + budget bundle) : **OK**.
- Démarrage `npm run dev` : serveur opérationnel, app servie (HTTP 200).
- Vérification visuelle pixel non réalisée (Playwright non installé, non ajouté volontairement) —
  à confirmer manuellement côté Codex sur la page du module 3.

## Résultat du build

- Build réussi. Décomptes après refactor : **4 modules, 19 blocs, 57 leçons, 290 questions, 10 pannes, 12 badges.**
- Plus gros bundle : `learning-data` ≈ 459 kB (sous le budget de 500 kB).

## Problèmes connus

- Le marqueur SVG `#arrow` est référencé dans `LessonSchema.tsx` mais **jamais défini** (bug cosmétique
  préexistant : les têtes de flèche ne s'affichent pas). Non corrigé à cette étape pour rester en refactor pur ;
  les nouveaux schémas définiront leurs propres marqueurs inline.
- M4 reste incomplet (6 blocs sur 12), conformément à la décision de ne pas y toucher pour l'instant.

## Éléments restant à faire

- Rédiger le contenu du **bloc 2 de M3 — Sécurité électrique, consignation et habilitations**
  (chapitres + examen de bloc), avec ses schémas interactifs.
- Étendre progressivement les blocs 3 à 7 de M3.
- Ajouter l'infrastructure de schémas interactifs/animés (prototypes prévus : schéma de consignation
  étape par étape, et animation circuit ouvert / fermé / court-circuit).
- Envisager d'étendre les règles de `validate.ts` aux nouvelles leçons `3-*` pour verrouiller la qualité.
- Ajouter des badges de maîtrise par bloc pour M3 (sur le modèle `mechanics_block_*`).

## Commits réalisés

- `refactor(module-3): restructure l'électrotechnique en parcours par blocs`

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
