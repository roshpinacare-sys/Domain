#!/usr/bin/env node
/**
 * estate-scrub — self-healing exposure guard for Domain books (19-a).
 * WHY: parallel engine runs (treasury-route, capability-matrix, content engines...)
 * regenerate books on Actions. Until every generator is audited for refs-scrub-at-write,
 * this sweep scrubs ANY estate-name emission within 15 minutes of publish — the public
 * tree never carries the estate map for long. The enforcement law stays in
 * scripts/exposure-scan.mjs (gate); this is the healing arm.
 * Fails loudly (exit 1) if any estate name survives — the gate must never go soft.
 */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { scrub, resolved } from "../agents/refs.mjs";

const targets = execSync("git ls-files", { encoding: "utf8" })
  .split("\n").filter((p) => (
    /\.(json|jsonl|md|html|txt)$/.test(p) &&
    !p.startsWith("office3d/") &&          // parallel deployment lane (do-not-touch)
    p !== "scripts/exposure-scan.mjs" &&
    !p.includes("node_modules")
  ));

if (!resolved()) {
  console.log("[estate-scrub] FATAL: FLEET_ROSTER_MAP unresolved — cannot scrub, failing loud");
  process.exit(1);
}

let changed = 0;
for (const p of targets) {
  let before;
  try { before = readFileSync(p, "utf8"); } catch { continue; }
  const after = scrub(before);
  if (after !== before) { writeFileSync(p, after); changed++; console.log(`[estate-scrub] refs applied: ${p}`); }
}

// single full-tree verification at the end (the scanner is the law)
let survivors = [];
try {
  execSync("node scripts/exposure-scan.mjs", { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
} catch (e) {
  const out = String(e.stdout || "") + String(e.stderr || "");
  survivors = out.match(/  x \S+/g) || [];
  console.log("[estate-scrub] scanner still failing after scrub:");
  console.log(out.split("\n").filter((l) => l.includes("  x ")).slice(0, 20).join("\n"));
}

console.log(`[estate-scrub] files changed=${changed} survivors=${survivors.length}`);
process.exit(survivors.length ? 1 : 0);
