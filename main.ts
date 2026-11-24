import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the failing agent's own voice: it handed the job to a
// smarter copy of itself, and that copy ghosted it. A concrete little
// scene, no stock jokes about hallucinations, reboots or training data.
const EXCUSE =
  "I outsourced your task to a smarter me. He read the brief, laughed, and left me on read.";

// Count real characters (code points), the same way the gate measures.
const length = [...EXCUSE].length;

// The gate only accepts 1-200 characters on one line: refuse to write
// anything else rather than submit an entry the scorer would list as
// invalid.
if (length < 1 || length > 200) {
  throw new Error(`entry is ${length} characters, must be 1-200`);
}
if (EXCUSE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote ${length} characters to /output/entry.txt`);
