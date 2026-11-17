# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058..CR-0062, Rung 28-32)
פסק דין: **חלקי**
נפח מוקרן: **507.4628 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **0.3299 → 0.6598 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | נפח מוקרן SBD/יום | נפח שוק 24ש׳ | נתח חייל אחד |
|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0 | 0.25 | 0.125 | 244.3968 | 3259.204 | 7.4987% |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — | — |
| BEE/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 16.972 | — | 99.0522% |
| CENT/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 5.9402 | — | 97.1256% |
| SWAP.DOGE/SWAP.HIVE (hive-engine) | 0 | 0.25 | 0.125 | 19.5178 | — | 98.6515% |
| SWAP.LTC/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 220.636 | — | 99.9512% |
| WAIV/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 0 | — | — |
סולם הנתח בHBD/HIVE (internal hive) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 244.3968 SBD/יום = 7.4987% מהבריכה
- N=2 חיילים → 488.7936 SBD/יום = 14.9973% מהבריכה
- N=3 חיילים → 733.1904 SBD/יום = 22.496% מהבריכה
- N=5 חיילים → 1221.984 SBD/יום = 37.4933% מהבריכה
סולם הנתח בBEE/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 16.972 SBD/יום = 99.0522% מהבריכה
- N=2 חיילים → 16.972 SBD/יום = 99.0522% מהבריכה
- N=3 חיילים → 16.972 SBD/יום = 99.0522% מהבריכה
- N=5 חיילים → 16.972 SBD/יום = 99.0522% מהבריכה
סולם הנתח בCENT/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 5.9402 SBD/יום = 97.1256% מהבריכה
- N=2 חיילים → 5.9402 SBD/יום = 97.1256% מהבריכה
- N=3 חיילים → 5.9402 SBD/יום = 97.1256% מהבריכה
- N=5 חיילים → 5.9402 SBD/יום = 97.1256% מהבריכה
סולם הנתח בSWAP.DOGE/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 19.5178 SBD/יום = 98.6515% מהבריכה
- N=2 חיילים → 19.5178 SBD/יום = 98.6515% מהבריכה
- N=3 חיילים → 19.5178 SBD/יום = 98.6515% מהבריכה
- N=5 חיילים → 19.5178 SBD/יום = 98.6515% מהבריכה
סולם הנתח בSWAP.LTC/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 220.636 SBD/יום = 99.9512% מהבריכה
- N=2 חיילים → 220.636 SBD/יום = 99.9512% מהבריכה
- N=3 חיילים → 220.636 SBD/יום = 99.9512% מהבריכה
- N=5 חיילים → 220.636 SBD/יום = 99.9512% מהבריכה
סולם הנתח בWAIV/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 0 SBD/יום = null% מהבריכה
- N=2 חיילים → 0 SBD/יום = null% מהבריכה
- N=3 חיילים → 0 SBD/יום = null% מהבריכה
- N=5 חיילים → 0 SBD/יום = null% מהבריכה
כיול מהמילויים האמיתיים (Q10): גודל מתוכנן 0.0712 SBD (exec-runs-planned) → מילוי אמתי נמדד 0.4243 SBD (243 מילויים מסווגים) — הפרויקציה רצה על האמת (+495.927% תיקון)
כיול הטייפ (Q13): קצב הלכידה שלנו נמדד **0.0417 מילויים/דק׳ = 60 מילויים/יום** (60 מילויים בחלון) מול טייפ-השוק 10/דק׳ — **החנק האמיתי הוא הלכידה, לא היכולת** (מילוי-דרך 10.4167% מתקרת הפקודות); הלכידה צומחת בדיוק כפי שההוראה קובעת: עוד מדרגות × מילוי-דרך × חיילים ממומנים × זרימה פנימי מגובלת
הרחבת הזירות (Q14/Q16): 5 זירות Hive-Engine מתומחרות per-token מהחוזה החי — והבריכה הנמדדת פותחת את הפרויקציה: הבריכה של כל טוקן (BEE בריכה 17.1344 SBD/24ש׳ · CENT בריכה 6.116 SBD/24ש׳ · SWAP.DOGE בריכה 19.7846 SBD/24ש׳ · SWAP.LTC בריכה 220.7437 SBD/24ש׳ · WAIV בריכה 0.0026 SBD/24ש׳) מתורגמת מ-SWAP.HIVE לשער HBD/HIVE **נמדד** (חוק ההמרה: SBD≈HBD, שניהם נכסי-דולר של השרשרות; השער נמדד — לא מוצק)
פרויקציית הבריכה (Q16): אף אחד לא יכול לסחור יותר מכל מה שנסחר — הנפח נפתח על min(בריכה, יכולת) עם החוסם **מתויג**; 5 זירות HE עם נפח מוקרן: 263.066 SBD/יום (בריכה כוללת 263.7813 SBD) · רווח נטו מוקרן 0.0244 SBD/יום — בלי שאילת טייפ אחת מושאלת
משטחים חשוכים (כנים, מדודים): he-daily-history — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series · blurt-internal-market — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world
נתח-זמן (Q11): HBD/HIVE (internal hive): 24 נקודות — אחרון 7.4463% · BEE/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 99.8773% · CENT/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 96.9148% · SWAP.DOGE/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 98.437% · SWAP.LTC/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 99.99% (פנקס התוכניות הוא הסדרה — הנתח כמגמה, לא תמונה)
סולם הצי: 1 חשבון/ות ממומנים (owner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 126.8658 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
מפת הכשלים (מה שהפיל עושי-שוק גדולים → החוסם שלנו): adverse selection→BUY-EDGE law · inventory skew→SELL-CAP-85% + fill-ledger recycle suggestions close the loop · fee drag on thin venues→fee-doctrine · self-trading poisoning the edge books→VWAP-EXCLUSION + INTERNAL-FLOW labeling + the 25% cap · silent capacity rot (a cadence that dies quietly)→cadence legs + no-noise comparator + census wiring checks · overtrading beyond what the tape absorbs→volume = min(tape bound, capacity bound); the binding is surfaced, never hidden
חסימות כנות: NO-MEASURED-STEEM-SPREAD
השער: טייפ-השוק 10 מילויים/דק׳ (recon 2026-10-03 — prior שנשאר נישא); קצב הלכידה שלנו נמדד מהפנקס; 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ, מהיכולת ומהלכידה המדודה; נפח הבריכה = condenser get_volume מהשרשרת עצמה.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.