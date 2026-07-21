import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { BADGE_DEFS } from "./src/data/badges";
import { PANNES } from "./src/data/faults";
import { MODULES } from "./src/data/modules";
import { QUESTIONS } from "./src/data/questions";
import { assertLearningData } from "./src/data/validate";

const dataSummary = assertLearningData({
  modules: MODULES,
  questions: QUESTIONS,
  faults: PANNES,
  badges: BADGE_DEFS,
});

console.info(
  `[TMI] Contenu validé : ${dataSummary.modules} modules, ${dataSummary.lessons} leçons, ${dataSummary.questions} questions, ${dataSummary.faults} pannes, ${dataSummary.badges} badges.`,
);

export default defineConfig({
  cacheDir: ".vite-cache",
  plugins: [react(), tailwindcss()],
});
