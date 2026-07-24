import { Award, BookOpen, Flame, Gauge, HardHat, ShieldAlert, ShieldCheck, Target, Wrench, Zap } from "lucide-react";
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
  { id: "mechanics_block_1", label: "Observateur mécanique", desc: "Maîtriser le bloc 1 de mécanique avec au moins 80 %", icon: ShieldCheck },
  { id: "mechanics_block_5", label: "Assembleur fiable", desc: "Maîtriser assemblages, fixations et étanchéité avec au moins 80 %", icon: Wrench },
  { id: "mechanics_block_6", label: "Aligneur de précision", desc: "Maîtriser arbres, accouplements, alignement et vibrations avec au moins 80 %", icon: Target },
  { id: "detective_5", label: "Détective", desc: "Résoudre 5 scénarios de panne", icon: Target },
  { id: "detective_10", label: "Maître du diagnostic", desc: "Résoudre les 10 scénarios de panne", icon: ShieldAlert },
  { id: "streak_3", label: "Régularité", desc: "3 jours de révision d'affilée", icon: Flame },
  { id: "streak_7", label: "Discipline de fer", desc: "7 jours de révision d'affilée", icon: Flame },
  { id: "fifty_correct", label: "50 bonnes réponses", desc: "Cumuler 50 bonnes réponses aux quiz", icon: Award },
];
