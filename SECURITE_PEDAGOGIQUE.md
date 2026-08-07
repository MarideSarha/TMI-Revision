# Revue interne de sécurité pédagogique

Date : 30 juillet 2026
Périmètre : TMI Révision, pull request #1

## Statut et limites

Cette revue est une analyse technique et pédagogique interne. Elle vérifie la cohérence des messages de prévention de
l'application, mais ne constitue ni une certification réglementaire, ni une habilitation électrique, ni la validation
d'un mode opératoire propre à une entreprise.

L'application peut être publiée comme support de révision à condition de conserver les avertissements visibles. Une
intervention réelle reste soumise à l'évaluation des risques, aux procédures du site, aux instructions du constructeur
et aux autorisations, formations et habilitations de l'intervenant.

## Principes vérifiés

- priorité permanente à la sécurité sur la remise en production ;
- interdiction de shunter ou neutraliser une protection ;
- recherche de la cause avant réarmement ;
- consignation de toutes les énergies concernées, y compris les énergies accumulées ;
- VAT réalisée avec un vérificateur adapté, distinct d'un multimètre ;
- continuité et résistance mesurées hors tension après consignation et VAT ;
- mesure sous tension limitée aux situations indispensables, autorisées et couvertes par l'habilitation ;
- purge et vérification d'absence de pression avant intervention pneumatique ou hydraulique ;
- immobilisation et soutien des charges avant intervention mécanique ;
- remise en place des protecteurs et essai maîtrisé avant retour en production ;
- urgence médicale immédiate en cas de suspicion d'injection hydraulique sous la peau.

## Corrections apportées pendant la revue

- ajout d'un avertissement visible dans chaque leçon et chaque scénario de panne ;
- clarification de la différence entre VAT, multimètre, pince ampèremétrique et mégohmmètre ;
- remplacement du contrôle de température à la main par une mesure sans contact ;
- encadrement explicite des mesures sous tension ;
- renforcement des scénarios moteur, capteur, isolement, pneumatique, hydraulique, roulement, courroie et circuit de sécurité ;
- clarification du contrôle de continuité d'un circuit de sécurité, uniquement hors tension.

## Verdict interne

Le contenu est jugé cohérent pour une plateforme pédagogique de révision destinée à un débutant. Il ne doit jamais être
présenté comme une autorisation d'intervenir seul sur un équipement réel. Pour un usage officiel en centre de formation
ou en entreprise, une relecture humaine par un formateur, un préventeur ou un responsable habilitation reste recommandée.

## Références officielles consultées

- [INRS — Habilitation électrique](https://www.inrs.fr/risques/electriques/habilitation-electrique)
- [INRS — Opérations sur les installations électriques](https://www.inrs.fr/risques/electriques/operations-installations.html)
- [INRS — Prévention des risques liés à l'utilisation des machines](https://www.inrs.fr/risques/utilisation-machines/prevention-risques-utilisation-machines.html)
- [INRS ED 6270 — Prévention des risques en maintenance](https://www.inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-6270.pdf)
