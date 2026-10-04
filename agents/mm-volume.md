# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058..CR-0061, Rung 28-31)
פסק דין: **מנוע-נפח-חי**
נפח מוקרן: **483.7 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **1.4441 → 2.8879 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | נפח מוקרן SBD/יום | נפח שוק 24ש׳ | נתח חייל אחד |
|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0 | 2.5031 | 1.2516 | 85.684 | 104.057 | 82.3433% |
| HBD/HIVE (internal hive) | 0 | 0.1867 | 0.0934 | 398.016 | 989.374 | 40.2291% |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — | — |
| BEE/SWAP.HIVE (hive-engine) | 0 | 0.199 | — | — | — | — |
| CENT/SWAP.HIVE (hive-engine) | 0 | 3.0426 | — | — | — | — |
| SWAP.DOGE/SWAP.HIVE (hive-engine) | 0 | 2.0692 | — | — | — | — |
| SWAP.LTC/SWAP.HIVE (hive-engine) | 0 | 0.0623 | — | — | — | — |
| WAIV/SWAP.HIVE (hive-engine) | 0 | 0.2738 | — | — | — | — |
סולם הנתח בSBD/STEEM (internal steem) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 398.016 SBD/יום = 382.4981% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=2 חיילים → 796.032 SBD/יום = 764.9961% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=3 חיילים → 1194.048 SBD/יום = 1147.4942% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=5 חיילים → 1990.08 SBD/יום = 1912.4903% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
סולם הנתח בHBD/HIVE (internal hive) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 398.016 SBD/יום = 40.2291% מהבריכה
- N=2 חיילים → 796.032 SBD/יום = 80.4581% מהבריכה
- N=3 חיילים → 1194.048 SBD/יום = 120.6872% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=5 חיילים → 1990.08 SBD/יום = 201.1454% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
מימוש מול פרויקציה (SBD/STEEM (internal steem)): 124 מילויים אמיתיים ב-24 שעות מהמילוי האחרון · נמכר 62.781 SBD · נקנה 24.388 SBD · מילוי ממוצע 0.703 SBD · דיוק הפרויקציה 73.2704%
כיול מהמילויים האמיתיים (Q10): גודל מתוכנן 0.068 SBD (exec-runs-planned) → מילוי אמתי נמדד 0.691 SBD (130 מילויים מסווגים) — הפרויקציה רצה על האמת (+916.1765% תיקון)
כיול הטייפ (Q13): קצב הלכידה שלנו נמדד **0.0861 מילויים/דק׳ = 124 מילויים/יום** (124 מילויים בחלון) מול טייפ-השוק 10/דק׳ — **החנק האמיתי הוא הלכידה, לא היכולת** (מילוי-דרך 21.5278% מתקרת הפקודות); הלכידה צומחת בדיוק כפי שההוראה קובעת: עוד מדרגות × מילוי-דרך × חיילים ממומנים × זרימה פנימי מגובלת
הרחבת הזירות (Q14): 5 זירות Hive-Engine מתומחרות per-token מהחוזה החי (BEE 0bps קצה 0.0995% · CENT 0bps קצה 1.5213% ראוי-גריד · SWAP.DOGE 0bps קצה 1.0346% ראוי-גריד · SWAP.LTC 0bps קצה 0.0312% · WAIV 0bps קצה 0.1369%) — נפח מוקרן ימתין לטייפ צד-שרשרת נמדד (כנה, לא מומצא)
משטחים חשוכים (כנים, מדודים): blurt-internal-market — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world
נתח-זמן (Q11): SBD/STEEM (internal steem): 2 נקודות — אחרון 243.1568% · HBD/HIVE (internal hive): 2 נקודות — אחרון 41.5157% (פנקס התוכניות הוא הסדרה — הנתח כמגמה, לא תמונה)
סולם הצי: 1 חשבון/ות ממומנים (headcorner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 120.925 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
מפת הכשלים (מה שהפיל עושי-שוק גדולים → החוסם שלנו): adverse selection→BUY-EDGE law · inventory skew→SELL-CAP-85% + fill-ledger recycle suggestions close the loop · fee drag on thin venues→fee-doctrine · self-trading poisoning the edge books→VWAP-EXCLUSION + INTERNAL-FLOW labeling + the 25% cap · silent capacity rot (a cadence that dies quietly)→cadence legs + no-noise comparator + census wiring checks · overtrading beyond what the tape absorbs→volume = min(tape bound, capacity bound); the binding is surfaced, never hidden
השער: טייפ-השוק 10 מילויים/דק׳ (recon 2026-10-03 — prior שנשאר נישא); קצב הלכידה שלנו נמדד מהפנקס; 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ, מהיכולת ומהלכידה המדודה; נפח הבריכה = condenser get_volume מהשרשרת עצמה.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.