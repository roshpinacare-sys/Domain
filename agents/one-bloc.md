# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-10-04T16:16:46.107Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 2 + token 14) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 0/16

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `a7c95143df02` | REACHED | token | BEHIND |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `d238b05cb50d` | REACHED | token | BEHIND |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `136a65c2cd8f` | REACHED | keyless | BEHIND |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `b2ec96e39877` | REACHED | keyless | BEHIND |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `da73f7fc7238` | REACHED | token | BEHIND |
| roshpina | הגרעין + מבקר השליטה העצמית | `d1b0850bdd6c` | REACHED | token | BEHIND |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `7fa9d4a358f2` | REACHED | token | BEHIND |
| Saosmartwallet | הארנק — זרימת רישום כנה | `52611f7f04ad` | REACHED | token | BEHIND |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `9f227564ce4e` | REACHED | token | BEHIND |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `6b5c64b984e7` | REACHED | token | BEHIND |
| Adsmarket | הקמפיין הכן — claims-guard | `aeb9524481ab` | REACHED | token | BEHIND |
| Defi | הכלכלן — reprices חי fail-closed | `6f90dce88b7b` | REACHED | token | BEHIND |
| saos-dex | הבורסה — פעימות dex-beat/grid | `0b7cc0093141` | REACHED | token | BEHIND |
| saos-jummper | החוזים בפייתון — signingcontract | `2b07b94a5621` | REACHED | token | BEHIND |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `057c440e4157` | REACHED | token | BEHIND |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `9b9b80a05d5b` | REACHED | token | BEHIND |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · VERIFIED
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · VERIFIED

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
