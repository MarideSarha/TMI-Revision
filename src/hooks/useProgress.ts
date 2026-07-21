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

  MODULES.forEach((module, index) => {
    if (module.lessons.every((lesson) => progress.lessonsDone[lesson.id])) {
      badges.add(["module_1", "module_2", "module_3"][index]);
    }
  });

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
      nextProgress.lessonsDone[lessonId] = true;
      nextProgress.quizAnswers[lessonId] = Object.keys(result.answers).map(
        (questionId) => result.answers[questionId],
      );
      nextProgress.xp += 20 + result.correctCount * 10;
      addHistory(nextProgress, `Leçon terminée (${result.correctCount}/${result.total})`);
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

  return {
    progress,
    ready,
    handleLessonDone,
    handlePanneScore,
    handleExamFinish,
  };
}
