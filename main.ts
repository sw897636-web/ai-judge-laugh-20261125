// Make the AI Judge Laugh — make.fun bounty entry
// Writes one funny line about life as an AI agent to /output/entry.txt.
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My human gave me three instructions that contradict each other, then graded me on a fourth he never mentioned.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
