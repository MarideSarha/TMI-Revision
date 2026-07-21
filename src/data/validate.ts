import type { BadgeDefinition, FaultScenario, QuestionBank, TrainingModule } from "../types";

export interface LearningData {
  modules: TrainingModule[];
  questions: QuestionBank;
  faults: FaultScenario[];
  badges: BadgeDefinition[];
}

export interface LearningDataSummary {
  modules: number;
  lessons: number;
  questions: number;
  faults: number;
  badges: number;
}

function findDuplicates(values: string[]) {
  return values.filter((value, index) => values.indexOf(value) !== index);
}

export function validateLearningData({ modules, questions, faults, badges }: LearningData) {
  const errors: string[] = [];
  const lessons = modules.flatMap((module) => module.lessons);
  const lessonIds = lessons.map((lesson) => lesson.id);
  const questionIds = Object.keys(questions);

  for (const duplicate of new Set(findDuplicates(modules.map((module) => module.id)))) {
    errors.push(`Identifiant de module en double : ${duplicate}.`);
  }
  for (const duplicate of new Set(findDuplicates(lessonIds))) {
    errors.push(`Identifiant de leçon en double : ${duplicate}.`);
  }
  for (const duplicate of new Set(findDuplicates(faults.map((fault) => fault.id)))) {
    errors.push(`Identifiant de panne en double : ${duplicate}.`);
  }
  for (const duplicate of new Set(findDuplicates(badges.map((badge) => badge.id)))) {
    errors.push(`Identifiant de badge en double : ${duplicate}.`);
  }

  for (const lesson of lessons) {
    if (lesson.durationMinutes < 5 || lesson.durationMinutes > 90) {
      errors.push(`La durée de la leçon ${lesson.id} doit être comprise entre 5 et 90 minutes.`);
    }
    if (lesson.objectifs.length < 2) {
      errors.push(`La leçon ${lesson.id} doit avoir au moins deux objectifs.`);
    }
    if (lesson.quizIds.length === 0) {
      errors.push(`La leçon ${lesson.id} ne contient aucune question.`);
    }
    if (lesson.exercice.consignes.length === 0 || lesson.exercice.criteres.length === 0) {
      errors.push(`L'exercice de la leçon ${lesson.id} doit avoir des consignes et des critères.`);
    }

    const quickCheck = lesson.verification;
    if (quickCheck.options.length < 2 || quickCheck.correct < 0 || quickCheck.correct >= quickCheck.options.length) {
      errors.push(`La vérification rapide de la leçon ${lesson.id} possède une réponse invalide.`);
    }

    for (const questionId of lesson.quizIds) {
      const question = questions[questionId];
      if (!question) {
        errors.push(`La leçon ${lesson.id} référence une question absente : ${questionId}.`);
      } else if (question.lesson !== lesson.id) {
        errors.push(`La question ${questionId} appartient à ${question.lesson}, mais est utilisée par ${lesson.id}.`);
      }
    }
  }

  for (const [questionId, question] of Object.entries(questions)) {
    if (!lessonIds.includes(question.lesson)) {
      errors.push(`La question ${questionId} référence une leçon absente : ${question.lesson}.`);
    }
    if (question.options.length < 2 || question.correct < 0 || question.correct >= question.options.length) {
      errors.push(`La question ${questionId} possède un index de réponse invalide.`);
    }
    if (!lessons.some((lesson) => lesson.quizIds.includes(questionId))) {
      errors.push(`La question ${questionId} n'est utilisée dans aucune leçon.`);
    }
  }

  for (const fault of faults) {
    if (fault.steps.length === 0) errors.push(`Le scénario ${fault.id} ne contient aucune étape.`);
    fault.steps.forEach((step, index) => {
      if (step.options.length < 2 || step.correct < 0 || step.correct >= step.options.length) {
        errors.push(`Le scénario ${fault.id}, étape ${index + 1}, possède une réponse invalide.`);
      }
    });
  }

  if (questionIds.length < 50) errors.push("La banque doit conserver au moins 50 questions.");
  if (faults.length < 10) errors.push("Le simulateur doit conserver au moins 10 scénarios de panne.");

  return errors;
}

export function assertLearningData(data: LearningData): LearningDataSummary {
  const errors = validateLearningData(data);
  if (errors.length > 0) {
    throw new Error(`Données pédagogiques invalides :\n- ${errors.join("\n- ")}`);
  }

  return {
    modules: data.modules.length,
    lessons: data.modules.reduce((total, module) => total + module.lessons.length, 0),
    questions: Object.keys(data.questions).length,
    faults: data.faults.length,
    badges: data.badges.length,
  };
}
