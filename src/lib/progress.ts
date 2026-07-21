import type { Progress } from "../types";

const STORAGE_KEY = "tmi-progress-v1";

export function emptyProgress(): Progress {
  return {
    xp: 0,
    lessonsDone: {},
    quizAnswers: {},
    panneScores: {},
    streak: 0,
    lastVisit: null,
    badges: [],
    history: [],
  };
}

export async function loadProgress(): Promise<Progress> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...emptyProgress(), ...JSON.parse(raw) };
  } catch (error) {
    console.warn("Progression illisible, remise à zéro.", error);
  }

  return emptyProgress();
}

export async function saveProgress(progress: Progress): Promise<void> {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Erreur de sauvegarde locale", error);
  }
}

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export function levelFromXp(xp: number): number {
  return Math.floor(xp / 150) + 1;
}

export function xpForNextLevel(xp: number): number {
  return levelFromXp(xp) * 150;
}
