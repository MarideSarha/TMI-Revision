import { useCallback, useEffect, useState } from "react";
import { MODULES } from "../data";
import { loadProgress, saveProgress, todayStr } from "../lib/progress";
import type { Progress, QuizResult } from "../types";

function addHistory(progress: Progress, label: string) {
  progress.history = [
    ...progress.history,
    {
      label,
      date: new Date().toLocaleString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ];
}

function checkBadges(progress: Progress) {
  const badges = new Set(progress.badges);

  if (Object.keys(progress.lessonsDone).length >= 1) badges.add("first_lesson");

  const moduleBadges: Record<string, string> = {
    m1: "module_1",
    m2: "module_2",
    m3: "module_3",
  };
  MODULES.forEach((module) => {
    if (module.lessons.every((lesson) => progress.lessonsDone[lesson.id])) {
      const badgeId = moduleBadges[module.id];
      if (badgeId) badges.add(badgeId);
    }
  });

  const blockExamBadges: Record<string, string> = {
    "m3-b2": "electro_block_2",
    "m3-b3": "electro_block_3",
    "m3-b4": "electro_block_4",
    "m3-b5": "electro_block_5",
    "m3-b6": "electro_block_6",
    "m3-b7": "electro_block_7",
    "m5-b1": "auto_block_1",
    "m5-b2": "auto_block_2",
    "m5-b3": "auto_block_3",
    "m5-b5": "auto_block_5",
    "m4-b1": "mechanics_block_1",
    "m4-b5": "mechanics_block_5",
    "m4-b6": "mechanics_block_6",
  };
  for (const [blockId, badgeId] of Object.entries(blockExamBadges)) {
    const result = progress.blockExamScores[blockId];
    if (result && (result.correctCount / result.total) * 100 >= 80) badges.add(badgeId);
  }

  const panneCount = Object.keys(progress.panneScores).length;
  if (panneCount >= 5) badges.add("detective_5");
  if (panneCount >= 10) badges.add("detective_10");
  if (progress.streak >= 3) badges.add("streak_3");
  if (progress.streak >= 7) badges.add("streak_7");

  const totalCorrect = Object.values(progress.quizAnswers).reduce(
    (sum, answers) => sum + answers.filter(Boolean).length,
    0,
  );
  if (totalCorrect >= 50) badges.add("fifty_correct");

  progress.badges = Array.from(badges);
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void (async () => {
      const currentProgress = await loadProgress();
      const today = todayStr();

      if (currentProgress.lastVisit !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        currentProgress.streak = currentProgress.lastVisit === yesterday ? currentProgress.streak + 1 : 1;
        currentProgress.lastVisit = today;
      }

      setProgress(currentProgress);
      setReady(true);
    })();
  }, []);

  const persist = useCallback((nextProgress: Progress) => {
    setProgress(nextProgress);
    void saveProgress(nextProgress);
  }, []);

  const handleLessonDone = useCallback(
    (lessonId: string, result: QuizResult) => {
      if (!progress) return;

      const nextProgress: Progress = {
        ...progress,
        lessonsDone: { ...progress.lessonsDone },
        quizAnswers: { ...progress.quizAnswers },
      };
      const firstCompletion = !nextProgress.lessonsDone[lessonId];
      nextProgress.lessonsDone[lessonId] = true;
      nextProgress.quizAnswers[lessonId] = Object.keys(result.answers).map(
        (questionId) => result.answers[questionId],
      );
      if (firstCompletion) nextProgress.xp += 20 + result.correctCount * 10;
      addHistory(
        nextProgress,
        `${firstCompletion ? "Leçon terminée" : "Leçon révisée"} (${result.correctCount}/${result.total})`,
      );
      checkBadges(nextProgress);
      persist(nextProgress);
    },
    [persist, progress],
  );

  const handlePanneScore = useCallback(
    (panneId: string, score: number, total: number) => {
      if (!progress) return;

      const nextProgress: Progress = {
        ...progress,
        panneScores: { ...progress.panneScores },
      };
      nextProgress.panneScores[panneId] = { score, total };
      nextProgress.xp += 15 + score * 5;
      addHistory(nextProgress, `Panne résolue : ${score}/${total}`);
      checkBadges(nextProgress);
      persist(nextProgress);
    },
    [persist, progress],
  );

  const handleExamFinish = useCallback(
    (result: QuizResult) => {
      if (!progress) return;

      const nextProgress = { ...progress };
      nextProgress.xp += result.correctCount * 8;
      addHistory(nextProgress, `Quiz terminé (${result.correctCount}/${result.total})`);
      checkBadges(nextProgress);
      persist(nextProgress);
    },
    [persist, progress],
  );

  const handleBlockExamFinish = useCallback(
    (blockId: string, result: QuizResult, passPercent: number) => {
      if (!progress) return;

      const previous = progress.blockExamScores[blockId];
      const previousPercent = previous ? (previous.correctCount / previous.total) * 100 : 0;
      const currentPercent = (result.correctCount / result.total) * 100;
      const firstPass = previousPercent < passPercent && currentPercent >= passPercent;
      const nextProgress: Progress = {
        ...progress,
        blockExamScores: {
          ...progress.blockExamScores,
          [blockId]: currentPercent >= previousPercent ? result : previous,
        },
      };

      if (firstPass) nextProgress.xp += 100;
      addHistory(
        nextProgress,
        `Examen de bloc ${currentPercent >= passPercent ? "réussi" : "à retravailler"} (${result.correctCount}/${result.total})`,
      );
      checkBadges(nextProgress);
      persist(nextProgress);
    },
    [persist, progress],
  );

  return {
    progress,
    ready,
    handleLessonDone,
    handlePanneScore,
    handleExamFinish,
    handleBlockExamFinish,
  };
}
