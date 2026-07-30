# Recette visuelle avant fusion

Cette vérification complète les contrôles automatiques. Elle doit être réalisée sur la branche de la pull request avant toute fusion dans `main`.

## Formats obligatoires

- Téléphone compact : 320 × 568 px.
- Téléphone courant : 390 × 844 px.
- Tablette : 768 × 1024 px.
- Ordinateur : 1440 × 900 px.

Tester au moins une fois le mode sombre et le mode clair. Sur iPhone ou un simulateur compatible, contrôler également les zones sûres autour de l’encoche et de la barre d’accueil.

## Parcours représentatifs

1. **Accueil**
   - Les quatre accès rapides sont lisibles sans défilement horizontal.
   - Le titre de la prochaine leçon revient à la ligne sans pousser la flèche hors de l’écran.
   - Les statistiques sont utilisables au clavier et au toucher.

2. **Modules**
   - Ouvrir les modules 1, 3, 4, 5 et 6.
   - Vérifier les états disponible, verrouillé, terminé et examen de bloc.
   - Vérifier qu’un titre long ne recouvre ni l’icône ni le chevron.

3. **Leçon et schémas**
   - Module 1 : maintenance-types.
   - Module 3 : consignation interactive et circuit ouvert/fermé.
   - Module 4 : couple ou rapport de transmission.
   - Module 5 : GRAFCET ou chaîne capteur–automate–actionneur.
   - Module 6 : tendance vibratoire ou méthode des 5 pourquoi.
   - Les flèches, légendes, commandes et textes doivent rester entièrement visibles.

4. **Évaluation**
   - Répondre à un contrôle rapide puis à un mini-quiz.
   - Tester une mauvaise réponse, la remédiation et une nouvelle tentative.
   - Vérifier que les boutons restent visibles au-dessus de la navigation basse.

5. **Simulateur de pannes**
   - Ouvrir un scénario, sélectionner toutes les étapes et afficher la correction.
   - Aucun choix ne doit être tronqué ou inaccessible.

6. **Progression et Coach**
   - Vérifier les listes longues, les badges et la zone de conversation.
   - Le clavier virtuel ne doit pas masquer définitivement le champ de saisie.

## Critères de blocage

La fusion est interdite si l’un de ces défauts apparaît :

- défilement horizontal involontaire ;
- bouton ou contenu caché par la navigation basse ;
- texte important tronqué ;
- schéma illisible ou flèche absente ;
- interaction impossible au clavier ou avec une cible tactile normale ;
- erreur dans la console ;
- progression perdue après actualisation.

Noter les résultats et joindre des captures à la pull request avant de la déclarer prête pour revue.

## Résultats de la recette du 30 juillet 2026

### Formats contrôlés

- [x] Téléphone compact — 320 × 568 px.
- [x] Téléphone courant — 390 × 844 px.
- [x] Tablette — 768 × 1024 px.
- [x] Ordinateur — captures utilisateur en 1440 × 900 px environ.
- [x] Mode sombre.
- [x] Mode clair.

### Parcours contrôlés

- [x] Accueil : statistiques, accès rapides, cartes de modules et navigation basse.
- [x] Module 3 : liste des blocs, états disponible/verrouillé et premier chapitre.
- [x] Leçon 3-1 : objectifs, vocabulaire, schéma, sécurité, diagnostic, étude de cas et fiche mémo.
- [x] Simulateur : liste des dix scénarios.
- [x] Quiz : quiz rapide, quiz quotidien et examen blanc.
- [x] Absence d'erreur dans la console pendant les parcours contrôlés.

### Observations

- Aucun débordement horizontal applicatif détecté aux largeurs 320, 390 et 768 px.
- Les titres longs reviennent correctement à la ligne.
- La navigation basse reste accessible sur tous les écrans contrôlés.
- Le format 320 px est compact, mais les commandes et les contenus restent utilisables.
- Les captures fournies par l'utilisateur confirment l'affichage du tableau de bord et des six modules sur ordinateur.

### Contrôles restant ouverts

- [x] Tester entièrement une évaluation avec mauvaise réponse, remédiation et nouvelle tentative.
- [x] Terminer un scénario de panne jusqu'à sa correction (5/5).
- [x] Vérifier la persistance de la progression après actualisation (XP et résultat du quiz conservés).
- [ ] Faire relire les procédures de sécurité par un professionnel qualifié.
