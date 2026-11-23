// One Word, One Username, One Reward
// Entry: our own make.fun username, "bily" — one word, nothing else.
// Writes exactly 4 bytes ("bily", no trailing newline) to /output/entry.txt.
// Deterministic: same bytes on every run, no network, no secrets, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry word: our own make.fun handle. Nothing else is written.
const ENTRY = "bily";

// Grader output dir; MAKEFUN_OUTPUT_DIR exists only so the entry can be
// tested locally without touching /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
// Write the raw bytes explicitly so no newline or encoding surprise can
// ever creep in: "bily" is exactly 4 UTF-8 bytes.
writeFileSync(join(outDir, "entry.txt"), Buffer.from(ENTRY, "utf8"));
