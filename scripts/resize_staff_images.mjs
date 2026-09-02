import { mkdtemp, readdir, rename, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import sharp from "sharp";

const staffDirectory = join(import.meta.dirname, "../src/assets/staff");
const outputDirectory = await mkdtemp(join(tmpdir(), "wingate-staff-"));
const images = (await readdir(staffDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith(".webp"))
  .map((entry) => entry.name);

try {
  await Promise.all(
    images.map(async (image) => {
      const source = join(staffDirectory, image);
      const output = join(outputDirectory, image);

      await sharp(source)
        .rotate()
        .resize({
          width: 1200,
          height: 1200,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 82, effort: 6 })
        .toFile(output);
    }),
  );

  await Promise.all(
    images.map((image) =>
      rename(
        join(outputDirectory, image),
        join(staffDirectory, basename(image)),
      ),
    ),
  );

  console.log(`Optimized ${images.length} staff photos.`);
} finally {
  await rm(outputDirectory, { force: true, recursive: true });
}
