import type { BadgeDefinition, FaultScenario, QuestionBank, TrainingModule } from "../types";

export interface LearningData {
  modules: TrainingModule[];
  questions: QuestionBank;
  faults: FaultScenario[];
  badges: BadgeDefinition[];
}

export interface LearningDataSummary {
  modules: number;
  blocks: number;
  lessons: number;
  questions: number;
  faults: number;
  badges: number;
}

function findDuplicates(values: string[]) {
  return values.filter((value, index) => values.indexOf(value) !== index);
}

function requiresProfessionalLessonContract(lessonId: string) {
  if (lessonId.startsWith("1-") || lessonId.startsWith("4-") || lessonId.startsWith("5-") || lessonId.startsWith("6-")) {
    return true;
  }

  const electroLesson = /^3-(\d+)$/.exec(lessonId);
  return electroLesson ? Number(electroLesson[1]) >= 4 : false;
}

export function validateLearningData({ modules, questions, faults, badges }: LearningData) {
  const errors: string[] = [];
  const lessons = modules.flatMap((module) => module.lessons);
  const lessonIds = lessons.map((lesson) => lesson.id);
  const questionIds = Object.keys(questions);
  const blocks = modules.flatMap((module) => module.blocks ?? []);

  for (const duplicate of new Set(findDuplicates(modules.map((module) => module.id)))) {
    errors.push(`Identifiant de module en double : ${duplicate}.`);
  }
  for (const duplicate of new Set(findDuplicates(lessonIds))) {
    errors.push(`Identifiant de leçon en double : ${duplicate}.`);
  }
  for (const duplicate of new Set(findDuplicates(blocks.map((block) => block.id)))) {
    errors.push(`Identifiant de bloc en double : ${duplicate}.`);
  }
  for (const duplicate of new Set(findDuplicates(faults.map((fault) => fault.id)))) {
    errors.push(`Identifiant de panne en double : ${duplicate}.`);
  }
  for (const duplicate of new Set(findDuplicates(badges.map((badge) => badge.id)))) {
    errors.push(`Identifiant de badge en double : ${duplicate}.`);
  }

  for (const lesson of lessons) {
    const professionalLesson = requiresProfessionalLessonContract(lesson.id);

    if (lesson.durationMinutes < 5 || lesson.durationMinutes > 90) {
      errors.push(`La durée de la leçon ${lesson.id} doit être comprise entre 5 et 90 minutes.`);
    }
    if (lesson.objectifs.length < 2) {
      errors.push(`La leçon ${lesson.id} doit avoir au moins deux objectifs.`);
    }
    if (lesson.quizIds.length === 0) {
      errors.push(`La leçon ${lesson.id} ne contient aucune question.`);
    }
    if (professionalLesson && lesson.quizIds.length < 5) {
      errors.push(`La leçon professionnelle ${lesson.id} doit contenir au moins cinq questions progressives.`);
    }
    if (lesson.exercice.consignes.length === 0 || lesson.exercice.criteres.length === 0) {
      errors.push(`L'exercice de la leçon ${lesson.id} doit avoir des consignes et des critères.`);
    }
    if (professionalLesson && (!lesson.ascii || !lesson.astucesPro?.length || !lesson.diagnostic?.length || !lesson.depannage?.length || !lesson.securite?.length || !lesson.etudeDeCas || !lesson.memo?.length || !lesson.resume)) {
      errors.push(`La leçon professionnelle ${lesson.id} doit contenir le parcours professionnel complet.`);
    }

    const quickCheck = lesson.verification;
    if (quickCheck.options.length < 2 || quickCheck.correct < 0 || quickCheck.correct >= quickCheck.options.length) {
      errors.push(`La vérification rapide de la leçon ${lesson.id} possède une réponse invalide.`);
    }

    if (lesson.activity?.type === "sequence") {
      const order = lesson.activity.correctOrder;
      const expected = lesson.activity.items.map((_, index) => index);
      if (lesson.activity.items.length < 3 || order.length !== expected.length || [...order].sort((a, b) => a - b).some((value, index) => value !== expected[index])) {
        errors.push(`L'activité de séquence de la leçon ${lesson.id} est incomplète ou possède un ordre invalide.`);
      }
    }
    if (lesson.activity?.type === "conversion" || lesson.activity?.type === "calculation") {
      if (lesson.activity.challenges.length < 2 || lesson.activity.challenges.some((challenge) => !Number.isFinite(challenge.answer) || challenge.tolerance < 0 || !challenge.unit.trim())) {
        errors.push(`L'atelier numérique de la leçon ${lesson.id} possède un défi invalide.`);
      }
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

  for (const module of modules) {
    for (const block of module.blocks ?? []) {
      for (const lessonId of block.lessonIds) {
        if (!module.lessons.some((lesson) => lesson.id === lessonId)) {
          errors.push(`Le bloc ${block.id} référence une leçon absente du module : ${lessonId}.`);
        }
      }
      if (block.status === "available" && block.lessonIds.length !== block.chapterCount) {
        errors.push(`Le bloc disponible ${block.id} doit contenir ses ${block.chapterCount} chapitres.`);
      }
      if (block.status === "available" && !block.exam) {
        errors.push(`Le bloc disponible ${block.id} doit posséder un examen de validation.`);
      }
      if (block.status === "in_progress" && (block.lessonIds.length === 0 || block.lessonIds.length >= block.chapterCount)) {
        errors.push(`Le bloc en construction ${block.id} doit proposer une partie, mais pas encore la totalité de ses chapitres.`);
      }
      if (block.exam) {
        if (block.exam.passPercent < 50 || block.exam.passPercent > 100) {
          errors.push(`Le seuil de l'examen ${block.id} est invalide.`);
        }
        for (const questionId of block.exam.questionIds) {
          if (!questions[questionId]) errors.push(`L'examen ${block.id} référence une question absente : ${questionId}.`);
          const lessonId = questions[questionId]?.lesson;
          if (lessonId && !block.lessonIds.includes(lessonId)) {
            errors.push(`La question ${questionId} de l'examen ${block.id} ne vient pas de ce bloc.`);
          }
        }
        const coveredLessons = new Set(block.exam.questionIds.map((questionId) => questions[questionId]?.lesson).filter(Boolean));
        for (const lessonId of block.lessonIds) {
          if (!coveredLessons.has(lessonId)) {
            errors.push(`L'examen ${block.id} doit évaluer la leçon ${lessonId}.`);
          }
        }
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
    blocks: data.modules.reduce((total, module) => total + (module.blocks?.length ?? 0), 0),
    lessons: data.modules.reduce((total, module) => total + module.lessons.length, 0),
    questions: Object.keys(data.questions).length,
    faults: data.faults.length,
    badges: data.badges.length,
  };
}
