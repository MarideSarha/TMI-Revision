import type { LucideIcon } from "lucide-react";

export type Theme = "dark" | "light";
export type ModuleTone = "amber" | "sky" | "violet";
export type ProgressTone = ModuleTone | "emerald";
export type QuestionType = "qcm" | "vf" | "calc";
export type LessonStage = "read" | "checkpoint" | "quiz" | "remediation" | "exercice" | "done";
export type ExamModeId = "quick" | "daily" | "exam";
export type TrainingBlockStatus = "available" | "in_progress" | "planned";

export type LessonSchemaType =
  | "orgchart"
  | "maintenance-types"
  | "consignation-steps"
  | "percentage-bar"
  | "energy-flow"
  | "torque-diagram"
  | "measurement-process"
  | "unit-scale"
  | "force-diagram"
  | "speed-relationship"
  | "power-torque"
  | "bolted-joint"
  | "transmission-ratio"
  | "tool-selection"
  | "force-path"
  | "measurement-chain"
  | "caliper-reading"
  | "micrometer-reading"
  | "dial-indicator"
  | "measurement-report"
  | "blueprint-document"
  | "orthographic-views"
  | "section-view"
  | "functional-dimensioning"
  | "tolerance-zone"
  | "fit-clearance"
  | "material-selection"
  | "manufacturing-process"
  | "thread-profile"
  | "bolt-grade"
  | "locking-methods"
  | "seized-fastener"
  | "static-sealing"
  | "flange-tightening"
  | "dynamic-sealing"
  | "leak-diagnosis"
  | "shaft-inspection"
  | "keyed-joint"
  | "coupling-selection"
  | "alignment-basics"
  | "shaft-runout"
  | "dial-alignment"
  | "laser-alignment"
  | "balance-vibration"
  | "ohm-triangle"
  | "control-circuit"
  | "measurement-tools"
  | "electrical-ppe"
  | "measurement-safety"
  | "electrical-first-aid"
  | "power-distribution"
  | "three-phase-voltages"
  | "command-power-circuit"
  | "asynchronous-motor"
  | "star-delta-coupling"
  | "vfd-blockdiagram"
  | "schematic-comparison"
  | "diagnostic-flow"
  | "po-pc-structure"
  | "energy-info-chains"
  | "sensor-types-compare"
  | "pneumatic-symbols"
  | "plc-structure"
  | "air-treatment-frl";

/**
 * Schémas pédagogiques interactifs ou animés (SVG + CSS + état React).
 * Contrairement à LessonSchemaType (illustration fixe), ceux-ci proposent
 * une interaction (étapes cliquables) ou une animation légère. Chaque
 * illustration reste compréhensible sans mouvement (repli statique) et
 * respecte la préférence système « réduire les animations ».
 */
export type InteractiveSchemaType =
  | "consignation-interactive"
  | "circuit-states"
  | "habilitation-decoder"
  | "neutral-regimes"
  | "contactor-thermal"
  | "rotation-direction"
  | "symbol-decoder"
  | "diagnostic-tree"
  | "automated-system"
  | "sensor-detection"
  | "pneumatic-cylinder"
  | "plc-scan-cycle"
  | "auto-diagnostic-tree";

export interface LessonExercise {
  enonce: string;
  consignes: string[];
  criteres: string[];
  correction: string;
}

export interface LessonQuickCheck {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LessonSequenceActivity {
  type: "sequence";
  title: string;
  instruction: string;
  items: string[];
  correctOrder: number[];
  success: string;
}

export interface LessonConversionChallenge {
  prompt: string;
  answer: number;
  tolerance: number;
  unit: string;
  explanation: string;
}

export interface LessonConversionActivity {
  type: "conversion";
  title: string;
  instruction: string;
  challenges: LessonConversionChallenge[];
}

export interface LessonCalculationActivity {
  type: "calculation";
  title: string;
  instruction: string;
  challenges: LessonConversionChallenge[];
}

export type LessonInteractiveActivity = LessonSequenceActivity | LessonConversionActivity | LessonCalculationActivity;

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  objectifs: string[];
  simple: string;
  vocab: Array<[string, string]>;
  example: string;
  schema: LessonSchemaType;
  retenir: string[];
  erreurs: string[];
  quizIds: string[];
  verification: LessonQuickCheck;
  exercice: LessonExercise;
  activity?: LessonInteractiveActivity;
  /** Schémas interactifs ou animés affichés dans la leçon (facultatif). */
  illustrations?: InteractiveSchemaType[];
  ascii?: string;
  astucesPro?: string[];
  diagnostic?: string[];
  depannage?: string[];
  securite?: string[];
  etudeDeCas?: {
    situation: string;
    mission: string[];
    correction: string;
  };
  memo?: string[];
  resume?: string;
}

export interface BlockExam {
  questionIds: string[];
  passPercent: number;
}

export interface TrainingBlock {
  id: string;
  num: number;
  title: string;
  objective: string;
  lessonIds: string[];
  chapterCount: number;
  status: TrainingBlockStatus;
  exam?: BlockExam;
}

export interface TrainingModule {
  id: string;
  num: number;
  title: string;
  icon: LucideIcon;
  color: ModuleTone;
  source: string;
  lessons: Lesson[];
  blocks?: TrainingBlock[];
}

export interface QuizQuestion {
  lesson: string;
  type: QuestionType;
  q: string;
  options: string[];
  correct: number;
  exp: string;
}

export type QuestionBank = Record<string, QuizQuestion>;

export interface QuizResult {
  correctCount: number;
  total: number;
  answers: Record<string, boolean>;
}

export interface FaultStep {
  label: string;
  options: string[];
  correct: number;
}

export interface FaultScenario {
  id: string;
  title: string;
  icon: LucideIcon;
  symptomes: string;
  steps: FaultStep[];
  correction: string;
}

export interface FaultScore {
  score: number;
  total: number;
}

export interface BadgeDefinition {
  id: string;
  label: string;
  desc: string;
  icon: LucideIcon;
}

export interface ProgressHistoryEntry {
  label: string;
  date: string;
}

export interface Progress {
  xp: number;
  lessonsDone: Record<string, boolean>;
  quizAnswers: Record<string, boolean[]>;
  panneScores: Record<string, FaultScore>;
  blockExamScores: Record<string, QuizResult>;
  streak: number;
  lastVisit: string | null;
  badges: string[];
  history: ProgressHistoryEntry[];
}

export type AppView =
  | "dashboard"
  | "modules"
  | "module"
  | "lesson"
  | "blockExam"
  | "pannes"
  | "exam"
  | "progression"
  | "coach";

export interface ViewData {
  mod?: TrainingModule;
  lesson?: Lesson;
  block?: TrainingBlock;
}

export type Navigate = (view: AppView, data?: ViewData) => void;

export interface CoachMessage {
  role: "assistant" | "user";
  content: string;
}
