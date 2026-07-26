import { Activity, Award, BookOpen, Cpu, Flame, Gauge, HardHat, ShieldAlert, ShieldCheck, Target, Wrench, Zap } from "lucide-react";
import type { BadgeDefinition } from "../types";

/* ---------------------------- BADGES ---------------------------- */

export const BADGE_DEFS: BadgeDefinition[] = [
  { id: "first_lesson", label: "Premier pas", desc: "Terminer votre première leçon", icon: BookOpen },
  { id: "module_1", label: "Bases solides", desc: "Terminer le module Environnement & sécurité", icon: HardHat },
  { id: "module_2", label: "Calculateur", desc: "Terminer le module Mathématiques appliquées", icon: Gauge },
  { id: "module_3", label: "Électricien", desc: "Terminer le module Électrotechnique", icon: Zap },
  { id: "electro_block_2", label: "Sécurité électrique", desc: "Maîtriser la sécurité électrique et la consignation avec au moins 80 %", icon: ShieldCheck },
  { id: "electro_block_3", label: "Distribution & protections", desc: "Maîtriser la distribution, les régimes de neutre et les protections avec au moins 80 %", icon: Zap },
  { id: "electro_block_4", label: "Commande & appareillage", desc: "Maîtriser l'appareillage de commande et de protection avec au moins 80 %", icon: Wrench },
  { id: "electro_block_5", label: "Moteurs & variation", desc: "Maîtriser les moteurs asynchrones et la variation de vitesse avec au moins 80 %", icon: Zap },
  { id: "electro_block_6", label: "Lecture de schémas", desc: "Savoir lire un schéma électrique pour localiser un organe ou une panne avec au moins 80 %", icon: BookOpen },
  { id: "electro_block_7", label: "Diagnostic électrique", desc: "Structurer une recherche de panne électrique méthodique avec au moins 80 %", icon: Target },
  { id: "auto_block_1", label: "Bases de l'automatisme", desc: "Comprendre la structure d'un système automatisé avec au moins 80 %", icon: Cpu },
  { id: "auto_block_2", label: "Les capteurs", desc: "Reconnaître et choisir les capteurs industriels avec au moins 80 %", icon: Cpu },
  { id: "auto_block_3", label: "Actionneurs & vérins", desc: "Comprendre actionneurs, préactionneurs et vérins avec au moins 80 %", icon: Cpu },
  { id: "auto_block_4", label: "Le pneumatique", desc: "Maîtriser vérins, distributeurs et traitement de l'air comprimé avec au moins 80 %", icon: Cpu },
  { id: "auto_block_5", label: "L'automate (API)", desc: "Comprendre l'automate programmable, ses E/S et son cycle avec au moins 80 %", icon: Cpu },
  { id: "auto_block_6", label: "Séquence & GRAFCET", desc: "Décrire un fonctionnement séquentiel avec le GRAFCET avec au moins 80 %", icon: Cpu },
  { id: "auto_block_7", label: "Diagnostic & maintenance", desc: "Diagnostiquer et entretenir un système automatisé en sécurité avec au moins 80 %", icon: Target },
  { id: "maint_block_1", label: "Plan préventif", desc: "Bâtir et suivre un plan de maintenance préventive (gammes, périodicités, lubrification) avec au moins 80 %", icon: Activity },
  { id: "maint_block_2", label: "Surveillance conditionnelle", desc: "Surveiller l'état des équipements (vibrations, thermographie, huile, ultrasons) avec au moins 80 %", icon: Activity },
  { id: "mechanics_block_1", label: "Observateur mécanique", desc: "Maîtriser le bloc 1 de mécanique avec au moins 80 %", icon: ShieldCheck },
  { id: "mechanics_block_5", label: "Assembleur fiable", desc: "Maîtriser assemblages, fixations et étanchéité avec au moins 80 %", icon: Wrench },
  { id: "mechanics_block_6", label: "Aligneur de précision", desc: "Maîtriser arbres, accouplements, alignement et vibrations avec au moins 80 %", icon: Target },
  { id: "detective_5", label: "Détective", desc: "Résoudre 5 scénarios de panne", icon: Target },
  { id: "detective_10", label: "Maître du diagnostic", desc: "Résoudre les 10 scénarios de panne", icon: ShieldAlert },
  { id: "streak_3", label: "Régularité", desc: "3 jours de révision d'affilée", icon: Flame },
  { id: "streak_7", label: "Discipline de fer", desc: "7 jours de révision d'affilée", icon: Flame },
  { id: "fifty_correct", label: "50 bonnes réponses", desc: "Cumuler 50 bonnes réponses aux quiz", icon: Award },
];
