import { Award, BookOpen, Flame, Gauge, HardHat, ShieldAlert, ShieldCheck, Target, Zap } from "lucide-react";
import type { BadgeDefinition } from "../types";

/* ---------------------------- BADGES ---------------------------- */

export const BADGE_DEFS: BadgeDefinition[] = [
  { id: "first_lesson", label: "Premier pas", desc: "Terminer votre première leçon", icon: BookOpen },
  { id: "module_1", label: "Bases solides", desc: "Terminer le module Environnement & sécurité", icon: HardHat },
  { id: "module_2", label: "Calculateur", desc: "Terminer le module Mathématiques appliquées", icon: Gauge },
  { id: "module_3", label: "Électricien", desc: "Terminer le module Électrotechnique", icon: Zap },
  { id: "mechanics_block_1", label: "Observateur mécanique", desc: "Maîtriser le bloc 1 de mécanique avec au moins 80 %", icon: ShieldCheck },
  { id: "detective_5", label: "Détective", desc: "Résoudre 5 scénarios de panne", icon: Target },
  { id: "detective_10", label: "Maître du diagnostic", desc: "Résoudre les 10 scénarios de panne", icon: ShieldAlert },
  { id: "streak_3", label: "Régularité", desc: "3 jours de révision d'affilée", icon: Flame },
  { id: "streak_7", label: "Discipline de fer", desc: "7 jours de révision d'affilée", icon: Flame },
  { id: "fifty_correct", label: "50 bonnes réponses", desc: "Cumuler 50 bonnes réponses aux quiz", icon: Award },
];
