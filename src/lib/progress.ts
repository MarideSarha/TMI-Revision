const STORAGE_KEY = "tmi-progress-v1";

export function emptyProgress() {
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

export async function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...emptyProgress(), ...JSON.parse(raw) };
  } catch (error) {
    console.warn("Progression illisible, remise à zéro.", error);
  }

  return emptyProgress();
}

export async function saveProgress(progress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Erreur de sauvegarde locale", error);
  }
}

export function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export function levelFromXp(xp) {
  return Math.floor(xp / 150) + 1;
}

export function xpForNextLevel(xp) {
  return levelFromXp(xp) * 150;
}
