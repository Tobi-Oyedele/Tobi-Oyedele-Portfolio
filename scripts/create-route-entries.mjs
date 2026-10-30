import { copyFile, mkdir } from "node:fs/promises";

// Serve the React entry point at each public page URL on static hosts.
// Assets use root-relative URLs, so the same HTML works at nested paths.
const output = new URL("../dist/", import.meta.url);
const entry = new URL("index.html", output);

for (const route of ["bookshelf", "list-100"]) {
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await copyFile(entry, new URL("index.html", directory));
}
