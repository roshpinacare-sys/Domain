# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-10-03T15:35:16.322Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 2 + token 14) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 1/2

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `360bb250198d` | REACHED | token | N/A |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `22b293557bef` | REACHED | token | N/A |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `1e4921c4c371` | REACHED | keyless | BEHIND |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `6ebcdc142231` | REACHED | keyless | N/A |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `0bbcf8b74772` | REACHED | token | N/A |
| roshpina | הגרעין + מבקר השליטה העצמית | `e1c6eeb2994c` | REACHED | token | N/A |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `098a302a381d` | REACHED | token | N/A |
| Saosmartwallet | הארנק — זרימת רישום כנה | `743d1f0fd632` | REACHED | token | N/A |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `8437ae60d705` | REACHED | token | N/A |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `c8d8a92b4a22` | REACHED | token | N/A |
| Adsmarket | הקמפיין הכן — claims-guard | `17683983156e` | REACHED | token | N/A |
| Defi | הכלכלן — reprices חי fail-closed | `8dae9d842817` | REACHED | token | SYNCED |
| saos-dex | הבורסה — פעימות dex-beat/grid | `2bbd033c5f87` | REACHED | token | N/A |
| saos-jummper | החוזים בפייתון — signingcontract | `b70df1022f0e` | REACHED | token | N/A |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `5d25c8c22532` | REACHED | token | N/A |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `62c0a7433892` | REACHED | token | N/A |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict THRIVING · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · DECLARED (sibling not checked out)
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · DECLARED (sibling not checked out)

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
