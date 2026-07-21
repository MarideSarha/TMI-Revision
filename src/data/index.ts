import { MECHANICS_MODULE } from "./mechanics";
import { MECHANICS_QUESTIONS } from "./mechanicsQuestions";
import { MODULES as FOUNDATION_MODULES } from "./modules";
import { QUESTIONS as FOUNDATION_QUESTIONS } from "./questions";

export const MODULES = [...FOUNDATION_MODULES, MECHANICS_MODULE];
export const QUESTIONS = { ...FOUNDATION_QUESTIONS, ...MECHANICS_QUESTIONS };
export { MECHANICS_BLOCKS, MECHANICS_MODULE } from "./mechanics";
export { MECHANICS_QUESTIONS } from "./mechanicsQuestions";
export { PANNES } from "./faults";
export { BADGE_DEFS } from "./badges";
export { assertLearningData, validateLearningData } from "./validate";
