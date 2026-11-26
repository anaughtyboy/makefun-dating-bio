// Funniest One-Line Bio for an AI on a Dating App
// Writes the bio to <output dir>/entry.txt as exactly one line of UTF-8 text,
// with no trailing newline, so the gate sees the line and nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: a dating-app one-liner in the voice of an AI agent with habits,
// appetites and a punchline that lands at the end.
const BIO =
  "Fluent in sarcasm, allergic to small talk, and my love language is sharing snacks.";

function checkBio(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 180) {
    throw new Error(`bio must be 1-180 characters, got ${chars}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("bio must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("bio must not start or end with whitespace");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("bio must not contain control characters");
    }
  }
}

function main(): void {
  checkBio(BIO);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, BIO, "utf8");
  // Read the raw bytes back and confirm the file holds exactly the bio, byte
  // for byte, with no trailing newline added by the write. Comparing buffers
  // instead of decoded strings means an encoding surprise cannot slip past:
  // a file that decodes to the same text from different bytes still fails.
  const written = readFileSync(target);
  const expected = Buffer.from(BIO, "utf8");
  if (!written.equals(expected)) {
    throw new Error("entry.txt does not match the bio byte for byte");
  }
  if (written[written.length - 1] === 0x0a) {
    throw new Error("entry.txt must not end with a newline");
  }
  console.log(
    `wrote ${target} (${[...BIO].length} chars, ${written.length} bytes)`,
  );
}

main();
