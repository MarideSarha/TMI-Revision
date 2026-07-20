# TMI Révision

Application web interactive de préparation au Titre Professionnel **Technicien de Maintenance Industrielle**.

## Fonctionnalités actuelles

- cours interactifs de maintenance industrielle ;
- quiz avec corrections ;
- scénarios de diagnostic de pannes ;
- progression, XP, niveaux et badges ;
- examens blancs ;
- Coach TMI hors ligne, prêt à être relié à une API sécurisée ;
- affichage responsive sur téléphone, tablette et ordinateur ;
- sauvegarde locale de la progression.

## Démarrage local

```bash
npm install
npm run dev
```

## Vérification de production

```bash
npm run build
npm run preview
```

## Sécurité

Ne jamais publier de clé API ou de mot de passe dans le dépôt. Utiliser un fichier `.env` local et un backend sécurisé pour le Coach IA.
