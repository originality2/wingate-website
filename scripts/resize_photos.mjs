import { mkdtemp, readdir, rename, rm, unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { extname, join, parse } from "node:path";
import sharp from "sharp";

const photosDirectory = join(import.meta.dirname, "../src/assets/photos");
const outputDirectory = await mkdtemp(join(tmpdir(), "wingate-photos-"));
const images = (await readdir(photosDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && /\.jpe?g$/i.test(entry.name))
  .map((entry) => entry.name);

try {
  await Promise.all(
    images.map(async (image) => {
      const source = join(photosDirectory, image);
      const output = join(outputDirectory, `${parse(image).name}.webp`);

      await sharp(source)
        .rotate()
        .resize({
          width: 1920,
          height: 1920,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 82, effort: 6 })
        .toFile(output);
    }),
  );

  await Promise.all(
    images.map(async (image) => {
      const outputName = `${parse(image).name}.webp`;

      await rename(
        join(outputDirectory, outputName),
        join(photosDirectory, outputName),
      );
      await unlink(join(photosDirectory, image));
    }),
  );

  console.log(`Converted ${images.length} photos to WebP.`);
} finally {
  await rm(outputDirectory, { force: true, recursive: true });
}
