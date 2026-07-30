import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();

async function source(path) {
  return readFile(resolve(root, path), "utf8");
}

function requireText(content, expected, message) {
  if (!content.includes(expected)) {
    throw new Error(`[TMI UI] ${message}`);
  }
}

function ensureStaticSvgReferencesResolve(path, content) {
  const ids = new Set([...content.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  const references = [...content.matchAll(/url\(#([^)]+)\)/g)]
    .map((match) => match[1])
    .filter((reference) => !reference.includes("${"));
  const unresolved = [...new Set(references.filter((reference) => !ids.has(reference)))];

  if (unresolved.length > 0) {
    throw new Error(`[TMI UI] ${path} référence des identifiants SVG absents : ${unresolved.join(", ")}.`);
  }
}

const [html, app, dashboard, css, lessonSchema, interactiveSchema] = await Promise.all([
  source("index.html"),
  source("src/App.tsx"),
  source("src/features/dashboard/Dashboard.tsx"),
  source("src/index.css"),
  source("src/features/courses/LessonSchema.tsx"),
  source("src/features/courses/InteractiveSchema.tsx"),
]);

requireText(
  html,
  'name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"',
  "la balise viewport mobile avec viewport-fit=cover est obligatoire.",
);
requireText(app, 'aria-label="Navigation principale"', "la navigation principale doit être nommée.");
requireText(app, 'aria-current={active ? "page" : undefined}', "l’écran actif doit être exposé aux technologies d’assistance.");
requireText(app, 'aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}', "le bouton de thème doit avoir un nom accessible.");
requireText(app, "w-11 h-11", "le bouton de thème doit conserver une cible tactile d’au moins 44 px.");
requireText(app, "tmi-safe-top", "l’en-tête doit respecter la zone sûre du téléphone.");
requireText(app, "tmi-safe-bottom", "la navigation basse doit respecter la zone sûre du téléphone.");
requireText(css, ".tmi-safe-top { padding-top: env(safe-area-inset-top); }", "la zone sûre supérieure n’est pas définie.");
requireText(css, ".tmi-safe-bottom { padding-bottom: env(safe-area-inset-bottom); }", "la zone sûre inférieure n’est pas définie.");
requireText(css, "min-width: 320px", "la largeur mobile minimale de référence doit rester explicite.");
requireText(dashboard, 'aria-label="Voir le détail de ma progression"', "le panneau de statistiques cliquable doit être nommé.");
requireText(lessonSchema, "useId", "les marqueurs SVG des leçons doivent utiliser des identifiants uniques.");

ensureStaticSvgReferencesResolve("src/features/courses/LessonSchema.tsx", lessonSchema);
ensureStaticSvgReferencesResolve("src/features/courses/InteractiveSchema.tsx", interactiveSchema);

console.info("[TMI UI] Contrat responsive et accessibilité de base validé.");
