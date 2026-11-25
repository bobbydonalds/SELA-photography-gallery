import { copyFile, mkdir } from "node:fs/promises";

const files = [
  ["alpinejs/dist/cdn.min.js", "alpine.min.js"],
  ["tailwindcss/LICENSE", "licenses/tailwind.txt"],
  ["@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2", "fonts/bricolage.woff2"],
  ["@fontsource-variable/bricolage-grotesque/LICENSE", "licenses/bricolage.txt"],
  ["@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2", "fonts/dm-sans.woff2"],
  ["@fontsource-variable/dm-sans/LICENSE", "licenses/dm-sans.txt"],
  ["@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", "fonts/instrument-italic.woff2"],
  ["@fontsource/instrument-serif/LICENSE", "licenses/instrument-serif.txt"],
];

await Promise.all([
  mkdir("assets/fonts", { recursive: true }),
  mkdir("assets/licenses", { recursive: true }),
]);

await Promise.all(files.map(([source, target]) =>
  copyFile(`node_modules/${source}`, `assets/${target}`)
));

