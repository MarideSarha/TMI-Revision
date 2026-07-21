import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { BADGE_DEFS, MODULES, PANNES, QUESTIONS, assertLearningData } from "./src/data";

const dataSummary = assertLearningData({
  modules: MODULES,
  questions: QUESTIONS,
  faults: PANNES,
  badges: BADGE_DEFS,
});

console.info(
  `[TMI] Contenu validé : ${dataSummary.modules} modules, ${dataSummary.blocks} blocs, ${dataSummary.lessons} leçons, ${dataSummary.questions} questions, ${dataSummary.faults} pannes, ${dataSummary.badges} badges.`,
);

export default defineConfig({
  cacheDir: ".vite-cache",
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "vendor-react",
              test: /[\\/]node_modules[\\/](?:react|react-dom)[\\/]/,
            },
            {
              name: "vendor-icons",
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            },
            {
              name: "learning-data",
              test: /[\\/]src[\\/]data[\\/]/,
            },
          ],
        },
      },
    },
  },
});
