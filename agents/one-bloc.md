# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-10-04T11:22:08.738Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 2 + token 14) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 0/16

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `f135f64708ba` | REACHED | token | BEHIND |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `bdb68f505515` | REACHED | token | BEHIND |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `e09f663e3af6` | REACHED | keyless | BEHIND |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `31a56fb31e49` | REACHED | keyless | BEHIND |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `6db83cbd7902` | REACHED | token | BEHIND |
| roshpina | הגרעין + מבקר השליטה העצמית | `19e6c4fb6e29` | REACHED | token | BEHIND |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `a662ab29fa9c` | REACHED | token | BEHIND |
| Saosmartwallet | הארנק — זרימת רישום כנה | `a86313ac20ef` | REACHED | token | BEHIND |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `0e1e83d578a9` | REACHED | token | BEHIND |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `0dbd2c829e74` | REACHED | token | BEHIND |
| Adsmarket | הקמפיין הכן — claims-guard | `4828a5671b34` | REACHED | token | BEHIND |
| Defi | הכלכלן — reprices חי fail-closed | `200a5d338ff0` | REACHED | token | BEHIND |
| saos-dex | הבורסה — פעימות dex-beat/grid | `53d3984888be` | REACHED | token | BEHIND |
| saos-jummper | החוזים בפייתון — signingcontract | `a8b9161c5a17` | REACHED | token | BEHIND |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `858fc930085f` | REACHED | token | BEHIND |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `4694f71097c0` | REACHED | token | BEHIND |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · VERIFIED
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · VERIFIED

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
