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
