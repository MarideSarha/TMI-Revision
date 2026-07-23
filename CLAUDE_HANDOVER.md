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

**Étape 2** — module 3, bloc 2 (publication progressive, 2 chapitres sur 7) :
- **3-4 — Comprendre le risque électrique** (contact direct/indirect, court-circuit, effets sur le corps,
  rôle de la terre et des protections). Intègre l'**animation interactive « circuit ouvert / fermé / court-circuit »**.
- **3-5 — La consignation électrique étape par étape** (séparer, condamner, identifier, VAT).
  Intègre le **schéma interactif « consignation étape par étape »**.

## Fichiers créés

**Étape 1**
- `src/data/electrotechnique.ts` — module M3 par blocs (leçons 3-1/3-2/3-3 déplacées + feuille de route blocs 2-7).
- `CLAUDE_HANDOVER.md` — ce document.

**Étape 2**
- `src/features/courses/InteractiveSchema.tsx` — composant des schémas interactifs/animés
  (2 prototypes : `consignation-interactive` et `circuit-states`), SVG + CSS + état React.
- `src/data/electrotechniqueQuestions.ts` — banque de questions du bloc 2 (`els1`…`els10`).

## Fichiers modifiés

**Étape 1**
- `src/data/modules.ts` — retrait du module M3 (déplacé), retrait de l'import `Zap` devenu inutile.
- `src/data/index.ts` — assemblage `[m1, m2, ELECTRO_MODULE (m3), MECHANICS_MODULE (m4)]` + réexports.

**Étape 2**
- `src/types/index.ts` — ajout de `InteractiveSchemaType` et du champ facultatif `Lesson.illustrations`.
- `src/index.css` — keyframes `tmi-flow` + classe `.tmi-current-flow`, animation active uniquement
  si `prefers-reduced-motion: no-preference`, mise en pause via `.is-paused`.
- `src/features/courses/LessonView.tsx` — rendu des `illustrations` après le schéma statique.
- `src/features/courses/index.ts` — export de `InteractiveSchema`.
- `src/data/electrotechnique.ts` — ajout des chapitres 3-4 et 3-5, bloc `m3-b2` passé en `in_progress`.
- `src/data/index.ts` — fusion de `ELECTRO_QUESTIONS` dans la banque de questions.

## Décisions techniques

- **Étape 1 — aucun changement de contenu pédagogique** : les 3 leçons de M3 sont copiées mot pour mot ;
  les questions q33–q50 restent inchangées.
- Réutilisation du modèle existant (`mechanics.ts`) : `TrainingBlock[]` + `TrainingModule`,
  pour bénéficier de l'affichage par blocs, du déblocage séquentiel et des examens de bloc.
- L'`id` du module reste `m3` : le badge `module_3` et toute progression existante restent valides.
- **Schémas visuels : SVG + CSS + état React, sans nouvelle dépendance** (aucune librairie d'animation).
  Chaque illustration a un titre, une légende et une explication ; reste lisible sans mouvement ;
  n'utilise jamais la couleur seule (texte + icônes) ; respecte `prefers-reduced-motion` au niveau CSS ;
  propose Pause/Recommencer là où c'est pertinent. Impact bundle mesuré : `learning-data` 459 → 475 kB
  (sous le budget de 500 kB), `index` (app) +13 kB.
- Bloc 2 en statut `in_progress` : il s'affiche avec le badge « Publication progressive », propose ses
  chapitres disponibles et **n'exige pas encore d'examen** (l'examen sera ajouté quand le bloc sera complété
  et passé en `available`). Rappel : un bloc `in_progress` reste **verrouillé tant que l'examen du bloc
  précédent (bloc 1) n'est pas réussi** — comportement de déblocage séquentiel hérité de M4.

## Tests exécutés

- `npm run check` (typecheck TypeScript + build de production + validateur pédagogique + budget bundle) : **OK**
  après l'étape 1 et après l'étape 2.
- Démarrage `npm run dev` : serveur opérationnel, app et nouveau composant servis (HTTP 200).
- Vérification visuelle pixel non réalisée dans l'environnement distant (Playwright non installé,
  non ajouté volontairement). **À confirmer visuellement côté PC / Codex** : ouvrir M3 → réussir l'examen
  du bloc 1 pour déverrouiller le bloc 2 → chapitres 3-4 et 3-5 → tester les schémas interactifs,
  le mode clair/sombre et l'affichage mobile.

## Résultat du build

- Build réussi. Décomptes après étape 2 : **4 modules, 19 blocs, 59 leçons, 300 questions, 10 pannes, 12 badges.**
- Plus gros bundle : `learning-data` ≈ 475 kB (sous le budget de 500 kB).

## Problèmes connus

- Le marqueur SVG `#arrow` est référencé dans `LessonSchema.tsx` mais **jamais défini** (bug cosmétique
  préexistant : les têtes de flèche des schémas statiques ne s'affichent pas). Non corrigé pour rester
  ciblé ; les nouveaux schémas interactifs définissent leurs propres marqueurs inline.
- M4 reste incomplet (6 blocs sur 12), conformément à la décision de ne pas y toucher pour l'instant.
- Vérification visuelle/mobile des 2 schémas interactifs restant à faire côté PC (voir « Tests exécutés »).

## Éléments restant à faire

- Compléter le **bloc 2 de M3** : chapitres 3-6 à 3-10 (EPI et outillage isolant, VAT et mesures en sécurité,
  habilitations NF C 18-510, conduite à tenir en cas d'incident, synthèse), puis passer le bloc en `available`
  avec son examen de validation.
- Étendre progressivement les blocs 3 à 7 de M3.
- Envisager d'étendre les règles de `validate.ts` aux nouvelles leçons `3-*` **une fois tous les chapitres
  de M3 harmonisés** (attention : 3-1/3-2/3-3 n'ont pas encore le parcours pro complet — ne pas activer
  la règle avant de les avoir enrichis, sinon le build échoue).
- Ajouter des badges de maîtrise par bloc pour M3 (sur le modèle `mechanics_block_*`).
- Réutiliser `InteractiveSchema` pour les prochains schémas (contacteur/relais thermique, démarrage moteur,
  sens de rotation, etc.) en ajoutant de nouveaux `InteractiveSchemaType`.

## Commits réalisés

- `refactor(module-3): restructure l'electrotechnique en parcours par blocs` (poussé : `b0a0dfb`)
- `feat(module-3): ajoute le bloc securite (chap. 3-4, 3-5) et 2 schemas interactifs`

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
