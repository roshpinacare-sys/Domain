// policy-gate.mjs — the git-native PolicyAVS tier (self-audit wave, 2026-10-13).
// What it is: a DETERMINISTIC whitelist gate every signing lane must pass before
// it touches a key. What it is NOT: a network, a contract, or security theater —
// it is one file of hard rules + one verdict, enforced in-process before sendTransaction.
// Law: refuse + receipt on violation (T-77); the independent verifier lanes
// (anchor-verify / fleet-verify / wallet-verify) re-check published receipts —
// that pair (gate before, verify after) is our honest operator-network shape.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const POLICY_PATH = process.env.POLICY_PATH || path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "fleet", "policy.json");

export function loadPolicy() {
  return JSON.parse(readFileSync(POLICY_PATH, "utf8"));
}

/**
 * Verify a signing intent against the hard policy. Deterministic, no network.
 * @param {{chainId:number, to:string, data:string, value?:string, gasPriceGwei:number, costEth:number, reserveAfterEth:number, derivedAddress?:string, bookEoa?:string, dayRoot:string, alreadyAnchoredThisRoot?:boolean}} intent
 * @returns {{ok:boolean, violations:string[], checks:Array<{name:string,pass:boolean,detail:string}>}}
 */
export function verifyIntent(intent) {
  const p = loadPolicy();
  const s = p.signing;
  const checks = [];
  const add = (name, pass, detail) => checks.push({ name, pass, detail });
  const violations = [];

  add("chain-allowed", s.allowedChains.includes(Number(intent.chainId)), `chainId ${intent.chainId}`);
  add("relay-whitelisted", s.allowedRelays.includes(String(intent.to).toLowerCase()), String(intent.to).slice(0, 6) + "…");
  add("selector-allowed", s.allowedSelectors.some((sel) => String(intent.data).toLowerCase().startsWith(sel)), String(intent.data).slice(0, 10));
  if (s.calldataMustCarryDayRoot) {
    add("calldata-carries-dayRoot", String(intent.data).toLowerCase().includes(String(intent.dayRoot).toLowerCase().slice(2)), intent.dayRoot.slice(0, 10) + "…");
  }
  add("gas-price-cap", intent.gasPriceGwei <= (s.maxGasPriceGwei[String(intent.chainId)] ?? Infinity), `${intent.gasPriceGwei} gwei`);
  add("cost-cap", intent.costEth <= s.maxCostPerActionEth, `${intent.costEth} ETH ≤ ${s.maxCostPerActionEth}`);
  add("reserve-floor", intent.reserveAfterEth >= s.minReserveAfterActionEth, `reserve ${intent.reserveAfterEth} ≥ ${s.minReserveAfterActionEth}`);
  add("one-sign-per-dayRoot", !intent.alreadyAnchoredThisRoot, intent.alreadyAnchoredThisRoot ? "root already anchored" : "root fresh");
  if (s.keyDerivationMustEqualBookEoa && intent.derivedAddress && intent.bookEoa) {
    add("eoa-hard-gate", String(intent.derivedAddress).toLowerCase() === String(intent.bookEoa).toLowerCase(), "verify-then-sign");
  }
  for (const c of checks) if (!c.pass) violations.push(`${c.name}: ${c.detail}`);
  return { ok: violations.length === 0, violations, checks, policyVersion: p.version };
}
