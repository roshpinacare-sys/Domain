# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-10-03T05:57:28.260Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 2 + token 14) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 13/16

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `360bb250198d` | REACHED | token | SYNCED |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `68f83f8d5712` | REACHED | token | SYNCED |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `cff0f610eef6` | REACHED | keyless | SYNCED |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `e9f0909a2303` | REACHED | keyless | BEHIND |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `43f7dd680a9b` | REACHED | token | BEHIND |
| roshpina | הגרעין + מבקר השליטה העצמית | `22f3344fde3e` | REACHED | token | SYNCED |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `a5763f0c61bf` | REACHED | token | SYNCED |
| Saosmartwallet | הארנק — זרימת רישום כנה | `743d1f0fd632` | REACHED | token | SYNCED |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `9b9d6d07c1a4` | REACHED | token | SYNCED |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `c8d8a92b4a22` | REACHED | token | SYNCED |
| Adsmarket | הקמפיין הכן — claims-guard | `49af85637a13` | REACHED | token | SYNCED |
| Defi | הכלכלן — reprices חי fail-closed | `34929b1eb25c` | REACHED | token | SYNCED |
| saos-dex | הבורסה — פעימות dex-beat/grid | `5cff914372a2` | REACHED | token | BEHIND |
| saos-jummper | החוזים בפייתון — signingcontract | `270270388e0b` | REACHED | token | SYNCED |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `5d25c8c22532` | REACHED | token | SYNCED |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `62c0a7433892` | REACHED | token | SYNCED |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict THRIVING · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · VERIFIED
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · VERIFIED

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
