import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I'm sorry I missed the deadline. My context window was full of the meeting about the deadline, the reminder about the deadline, and a 400-page doc titled 'final_final_v2'.";

// Gate: the entry must be 1-200 chars of non-whitespace text.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
