# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-10-03T19:17:16.668Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 2 + token 14) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 11/16

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `86cd9559f540` | REACHED | token | BEHIND |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `33c541d6b635` | REACHED | token | SYNCED |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `a1f190a2c13f` | REACHED | keyless | SYNCED |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `d6f249028777` | REACHED | keyless | BEHIND |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `e7c3ec02331a` | REACHED | token | BEHIND |
| roshpina | הגרעין + מבקר השליטה העצמית | `e1c6eeb2994c` | REACHED | token | SYNCED |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `098a302a381d` | REACHED | token | SYNCED |
| Saosmartwallet | הארנק — זרימת רישום כנה | `7ed6ca812d69` | REACHED | token | BEHIND |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `8437ae60d705` | REACHED | token | SYNCED |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `c8d8a92b4a22` | REACHED | token | SYNCED |
| Adsmarket | הקמפיין הכן — claims-guard | `17683983156e` | REACHED | token | SYNCED |
| Defi | הכלכלן — reprices חי fail-closed | `8dae9d842817` | REACHED | token | SYNCED |
| saos-dex | הבורסה — פעימות dex-beat/grid | `1bb6ae6da857` | REACHED | token | BEHIND |
| saos-jummper | החוזים בפייתון — signingcontract | `b70df1022f0e` | REACHED | token | SYNCED |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `2ef1b78a152e` | REACHED | token | SYNCED |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `62c0a7433892` | REACHED | token | SYNCED |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · VERIFIED
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · VERIFIED

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
