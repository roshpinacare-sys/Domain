# הוכחת הבעלים — עמוד אחד, כל האמת (owner-proof)

_מורכב מהפנקסים המחויבים בלבד (keyless, offline). כל מספר נושא מקור + זמן מדידה — פתחו את הפנקס ובדקו._

## מה יש לנו — אוצרות פר רשת (כל מספר ניתן לאימות על השרשרת)

- **steemLiquid**: "0.921 STEEM" — _מקור: agents/money-ledger.json (condenser_api live read) · נמדד: 2026-10-03T20:09:56.309Z_
- **steemDebt**: "0.078 SBD" — _מקור: agents/money-ledger.json · נמדד: 2026-10-03T20:09:56.309Z_
- **steemPowerSp**: "3810.486 SP" — _מקור: agents/money-ledger.json · נמדד: 2026-10-03T20:09:56.309Z · ההון המוקפא — נזיל במרווחים לפי לוח ה-powerdown_
- **hiveLiquid**: "0.034 HIVE" — _מקור: agents/money-ledger.json · נמדד: 2026-10-03T20:09:56.309Z_
- **blurtLiquid**: "70.690 BLURT" — _מקור: agents/money-ledger.json · נמדד: 2026-10-03T20:09:56.309Z_

## הכנסה מתוכננת — ה-powerdown (ה-drip) והראנווי שלו

- **weeklySp**: 475.883745 — _מקור: agents/sovereign-drip.json (condenser_api, measured twice) · נמדד: 2026-10-03T21:15:22.560Z · STEEM נכנסים מדי שבוע מה-stake_
- **remainingSp**: 1903.534981 — _מקור: agents/sovereign-drip.json · נמדד: 2026-10-03T21:15:22.560Z_
- **runwayDays**: 28 — _מקור: agents/sovereign-drip.json · נמדד: 2026-10-03T21:15:22.560Z · אחרי זה ה-stake נגמר — ההכנסה הזו היא החזר הון, לא תשואה_
- **nextWithdrawal**: "2026-10-10T02:01:27" — _מקור: agents/sovereign-drip.json · נמדד: 2026-10-03T21:15:22.560Z_
- **lastDripSteem**: 475.857 — _מקור: agents/earn-audit.json (headcorner drip_arrived_steem, chain truth) · ה-drip הקודם הגיע והוטל לשוק באותה שעה — הרוטציה האוטונומית הראשונה בהיסטוריה של הצי (CR-0046)_

## האמת על הכסף — רווח והפסד, בלי קישוט

- **realizedSbd (lifetime)**: -1.118787 — _מקור: agents/truth-baseline.json · נמדד: 2026-10-02T00:05:00Z · מדד כל-חיים של המסחר_
- **usdPerDay7dAvg (lifetime)**: 0.00412 — _מקור: agents/truth-baseline.json · נמדד: 2026-10-02T00:05:00Z_
- **trips (lifetime)**: 65 — _מקור: agents/truth-baseline.json · נמדד: 2026-10-02T00:05:00Z_
- **יום אחרון**: realizedSbdToday=-0.227169, fills=87 — agents/fill-ledger.json (הליכת היום, היקף יומי מ-00:00Z)
- **הכנסה · contentRewards**: 0 — נמדד מת: 1421 הצבעות + 56 פוסטים → 0.000 לכל החיים — לולאת התוכן עדיין לא מרוויחה (CR-0046) · agents/earn-audit.json (chain truth, 7d window + lifetime walk)
- **הכנסה · tradingSpread**: -0.227169 — הרגל היחידה שנמדדה עם תנועה — כרגע סביב האפס, ה-buy-premium breaker סוגר את הדליפה (CR-0047) · agents/fill-ledger.json (הליכת היום, היקף יומי מ-00:00Z)

## מה רץ לבד — 24/7, בלי מפתח, עם מרפא עצמי

- **workflowsTotal**: 48 — _מקור: .github/workflows (tree scan)_
- **workflowsScheduled**: 43 — _מקור: .github/workflows (tree scan)_
- **keeperArcDesks**: 4 — _מקור: agents/tick-keeper.json · נמדד: 2026-10-03T22:22:53.326Z · השומר מודד את הקבלות של הדסקים עצמן ומצית מחדש דסק רעב_
- **stasisBreaker**: false — _מקור: agents/STASIS.json · השובר ריק — אין עצירה בתוקף_
- **arc · sovereign-tick-cron**: קבלה אחרונה "2026-10-03T21:35:25.128Z" — מקסימום פער מותר: 20m · נמדד: 2026-10-03T22:22:53.326Z
- **arc · earn-audit-cron**: קבלה אחרונה "2026-10-03T21:55:45.550Z" — מקסימום פער מותר: 45m · נמדד: 2026-10-03T22:22:53.326Z
- **arc · fill-ledger-cron**: קבלה אחרונה "2026-10-03T21:52:35.139Z" — מקסימום פער מותר: 45m · נמדד: 2026-10-03T22:22:53.326Z
- **arc · market-grid-cron**: קבלה אחרונה "2026-10-03T18:41:15.465Z" — מקסימום פער מותר: 120m · נמדד: 2026-10-03T22:22:53.326Z

## משמעת — מה מוכח ומה נבדק

- **claimsAudit**: "WARN" — _מקור: agents/claims-audit.json · נמדד: 2026-10-03T22:42:33.566Z · כל קובץ שנטען בפנקס — נבדק שהוא באמת על העץ_
- **censusLanes**: undefined — _מקור: agents/fleet-census.json · נמדד: 2026-10-03T22:42:32.601Z · מפת ה-16 מסלולים של הצי_
- **ownerLanguage**: "he" — _מקור: agents/claims-audit.cjs OWNER_LANGUAGE (CR-0050) · כל פנייה לבעלים — בעברית_

_החוק: שום מספר לא מומצא, שום היקף לא מתגנב (יומי לעולם לא מתגלגל לכל-חיים), שום הפסד לא מוסתר._
