import type { LucideIcon } from "lucide-react";

export type Theme = "dark" | "light";
export type ModuleTone = "amber" | "sky" | "violet";
export type ProgressTone = ModuleTone | "emerald";
export type QuestionType = "qcm" | "vf" | "calc";
export type LessonStage = "read" | "checkpoint" | "quiz" | "exercice" | "done";
export type ExamModeId = "quick" | "daily" | "exam";
export type TrainingBlockStatus = "available" | "planned";

export type LessonSchemaType =
  | "orgchart"
  | "maintenance-types"
  | "consignation-steps"
  | "percentage-bar"
  | "energy-flow"
  | "torque-diagram"
  | "ohm-triangle"
  | "control-circuit"
  | "measurement-tools";

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
