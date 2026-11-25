// Invent a Word We Need — entry program.
// Writes the coined word and its one-line definition to /output/entry.txt.
// The entry is a single fixed line: deterministic, no input, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Doormnesia: the sudden blank that hits the moment you cross a doorway and forget why you entered the room.";

function gate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${line.length}`);
  }
}

gate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
