# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058..CR-0062, Rung 28-32)
פסק דין: **מנוע-נפח-חי**
נפח מוקרן: **25.458 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **0.198 → 0.396 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | נפח מוקרן SBD/יום | נפח שוק 24ש׳ | נתח חייל אחד |
|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0 | 1.5556 | 0.7778 | 25.458 | 1884.709 | 1.3508% |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — | — |
| BEE/SWAP.HIVE (hive-engine) | 0 | 0.5884 | — | — | — | — |
| CENT/SWAP.HIVE (hive-engine) | 0 | 1.7074 | — | — | — | — |
| SWAP.DOGE/SWAP.HIVE (hive-engine) | 0 | 0.0389 | — | — | — | — |
| SWAP.LTC/SWAP.HIVE (hive-engine) | 0 | 0.481 | — | — | — | — |
| WAIV/SWAP.HIVE (hive-engine) | 0 | 0.0051 | — | — | — | — |
סולם הנתח בSBD/STEEM (internal steem) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 244.3968 SBD/יום = 12.9673% מהבריכה
- N=2 חיילים → 488.7936 SBD/יום = 25.9347% מהבריכה
- N=3 חיילים → 733.1904 SBD/יום = 38.902% מהבריכה
- N=5 חיילים → 1221.984 SBD/יום = 64.8367% מהבריכה
מימוש מול פרויקציה (SBD/STEEM (internal steem)): 60 מילויים אמיתיים ב-24 שעות מהמילוי האחרון · נמכר 2.834 SBD · נקנה 3.037 SBD · מילוי ממוצע 0.0979 SBD · דיוק הפרויקציה 11.1321%
כיול מהמילויים האמיתיים (Q10): גודל מתוכנן 0.0712 SBD (exec-runs-planned) → מילוי אמתי נמדד 0.4243 SBD (243 מילויים מסווגים) — הפרויקציה רצה על האמת (+495.927% תיקון)
כיול הטייפ (Q13): קצב הלכידה שלנו נמדד **0.0417 מילויים/דק׳ = 60 מילויים/יום** (60 מילויים בחלון) מול טייפ-השוק 10/דק׳ — **החנק האמיתי הוא הלכידה, לא היכולת** (מילוי-דרך 10.4167% מתקרת הפקודות); הלכידה צומחת בדיוק כפי שההוראה קובעת: עוד מדרגות × מילוי-דרך × חיילים ממומנים × זרימה פנימי מגובלת
הרחבת הזירות (Q14/Q16): 5 זירות Hive-Engine מתומחרות per-token מהחוזה החי — והבריכה הנמדדת פותחת את הפרויקציה: הבריכה של כל טוקן (BEE בריכה — SBD/24ש׳ · CENT בריכה — SBD/24ש׳ · SWAP.DOGE בריכה — SBD/24ש׳ · SWAP.LTC בריכה — SBD/24ש׳ · WAIV בריכה — SBD/24ש׳) מתורגמת מ-SWAP.HIVE לשער HBD/HIVE **נמדד** (חוק ההמרה: SBD≈HBD, שניהם נכסי-דולר של השרשרות; השער נמדד — לא מוצק)
משטחים חשוכים (כנים, מדודים): he-daily-history — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series · blurt-internal-market — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world
נתח-זמן (Q11): SBD/STEEM (internal steem): 24 נקודות — אחרון 1.5152% (פנקס התוכניות הוא הסדרה — הנתח כמגמה, לא תמונה)
סולם הצי: 1 חשבון/ות ממומנים (owner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 6.3645 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
מפת הכשלים (מה שהפיל עושי-שוק גדולים → החוסם שלנו): adverse selection→BUY-EDGE law · inventory skew→SELL-CAP-85% + fill-ledger recycle suggestions close the loop · fee drag on thin venues→fee-doctrine · self-trading poisoning the edge books→VWAP-EXCLUSION + INTERNAL-FLOW labeling + the 25% cap · silent capacity rot (a cadence that dies quietly)→cadence legs + no-noise comparator + census wiring checks · overtrading beyond what the tape absorbs→volume = min(tape bound, capacity bound); the binding is surfaced, never hidden
השער: טייפ-השוק 10 מילויים/דק׳ (recon 2026-10-03 — prior שנשאר נישא); קצב הלכידה שלנו נמדד מהפנקס; 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ, מהיכולת ומהלכידה המדודה; נפח הבריכה = condenser get_volume מהשרשרת עצמה.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.