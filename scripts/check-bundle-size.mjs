import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const assetsDirectory = join(process.cwd(), "dist", "assets");
const maximumChunkSize = 500_000;

const files = await readdir(assetsDirectory);
const javascriptFiles = files.filter((file) => file.endsWith(".js"));

if (javascriptFiles.length === 0) {
  throw new Error("Aucun fichier JavaScript généré dans dist/assets.");
}

const chunks = await Promise.all(
  javascriptFiles.map(async (file) => {
    const { size } = await stat(join(assetsDirectory, file));
    return { file, size };
  }),
);

const oversizedChunks = chunks.filter(({ size }) => size > maximumChunkSize);
const largestChunk = chunks.reduce((largest, chunk) =>
  chunk.size > largest.size ? chunk : largest,
);

if (oversizedChunks.length > 0) {
  const details = oversizedChunks
    .map(({ file, size }) => `${file} (${(size / 1_000).toFixed(2)} kB)`)
    .join(", ");

  throw new Error(
    `Budget JavaScript dépassé (maximum 500 kB par fichier) : ${details}`,
  );
}

console.info(
  `[TMI] Budget JavaScript validé : plus gros fichier ${largestChunk.file} (${(largestChunk.size / 1_000).toFixed(2)} kB).`,
);
