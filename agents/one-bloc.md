# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-10-03T19:23:48.044Z** · Verdict: **DEGRADED** · REACHED 2/16 (keyless 2 + token 0) · AUTH-WALL 14 · UNKNOWN 0 · local-sync 0/2

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `—` | AUTH-WALL | — | N/A |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `—` | AUTH-WALL | — | N/A |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `844df83af4b4` | REACHED | keyless | BEHIND |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `d6f249028777` | REACHED | keyless | N/A |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `—` | AUTH-WALL | — | N/A |
| roshpina | הגרעין + מבקר השליטה העצמית | `—` | AUTH-WALL | — | N/A |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `—` | AUTH-WALL | — | N/A |
| Saosmartwallet | הארנק — זרימת רישום כנה | `—` | AUTH-WALL | — | N/A |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `—` | AUTH-WALL | — | N/A |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `—` | AUTH-WALL | — | N/A |
| Adsmarket | הקמפיין הכן — claims-guard | `—` | AUTH-WALL | — | N/A |
| Defi | הכלכלן — reprices חי fail-closed | `—` | AUTH-WALL | — | UNKNOWN-ORIGIN |
| saos-dex | הבורסה — פעימות dex-beat/grid | `—` | AUTH-WALL | — | N/A |
| saos-jummper | החוזים בפייתון — signingcontract | `—` | AUTH-WALL | — | N/A |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `—` | AUTH-WALL | — | N/A |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `—` | AUTH-WALL | — | N/A |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · DECLARED (sibling not checked out)
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · DECLARED (sibling not checked out)

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
