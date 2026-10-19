# Volume

**Personal workout tracker with progression logging, plan generation, and a rest timer.**
Live at **[activecatalyst.github.io/volume](https://activecatalyst.github.io/volume/)**.

Volume is a single-file progressive web app — one `index.html`, no build step, no server, no account. Open it in a browser, add it to your home screen, and train. All data lives on your device.

## Features

- **11 preset plans** across Start Here, Build Muscle, Lose Fat, Maintain and Add-ons — from a 3-day beginner full-body and a 3-day machine full-body for busy seasons, through Upper/Lower 4-Day (the default), Intermediate PPL and Long Track, to Cut Phase (with a Lower-Body Bias option) and a Maintenance block for after the cut. Athletic Power and Pure Cardio run alongside a main plan.
- **98-exercise library** with coaching cues, safety notes, swap options for every plan exercise, and regressions for the risky stuff. Every exercise card links to a web search for form videos.
- **Plan generator** — pick days, goal, and level; get a balanced week with compound lifts first, every muscle trained twice a week, and nothing your limits or injury screen rule out.
- **My limits** — tap *No jumping* or *No floor work* once on the Plans page and every plan, swap and generated session respects it, swapping in the nearest suitable exercise automatically.
- **Weekly sets per muscle** — each plan shows its weekly hard sets per muscle group, and History shows what you have actually logged this week against that target.
- **Progression engine** — double progression with rep-range logic, RPE back-off signals, multi-signal deload triggers, and honest units (minutes, seconds, and meters log as what they are, not fake reps).
- **Progression feedback** — RPE is logged as *reps left in the tank*, not a vague effort score. The app watches your logs: a lift stuck at the same weight and reps for three sessions raises a card that tells you whether to add load (low effort) or deload (genuine plateau), with a one-tap prefill for next session. Hitting the top of a rep range prompts a load bump; a session logged well below working intensity gets a quiet note. Your review shows a Progression block — last session vs this one, with direction.
- **Safety pathway** — first-run health notice, a "when to stop" rule reachable from every workout and the rest timer, and an injury/condition screening that actually changes what the app suggests.
- **Rest timer, Travel Mode** (bodyweight plan swap with auto-restore), **workout history**, and an **analytics dashboard**.
- **Backup & restore** — export/import your full history as JSON. Import is transactional with a pre-import snapshot; a bad file can't corrupt your data.
- **Apple Watch tips** — each plan suggests the workout type to start on your watch, per day.
- Works offline once loaded (service worker with polite, never-mid-workout updates).

## Install

**iPhone:** open the site in Safari → Share → *Add to Home Screen*.
**Android:** open in Chrome → accept the *Add to Home Screen* prompt.
It launches full-screen like a native app and works offline.

## Your data

Everything is stored in your browser's localStorage — nothing is sent anywhere, ever. That also means clearing browser data erases your history: **export a backup** from the 💾 menu regularly. Backups are plain JSON you can keep anywhere.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app — UI, styles, logic, and all plan/exercise data |
| `sw.js` | Service worker (offline cache, staged updates) |
| `manifest.json` | PWA manifest |
| `grind-dashboard.html` | Analytics dashboard (Chart.js) |
| `icons/` | App icons and favicons |

## Provenance & scope

This build is the product of a multidisciplinary review cycle: independent audits of exercise safety, programming, branding, color/accessibility, and code quality, with findings applied and verified by automated checks (referential integrity, plyometric contact caps ≤80/session, swap coverage). The full review workspace lives outside this repo.

**Personal-use scope:** Volume is built and reviewed for personal use, not public distribution. The programming and health copy were analyzed by AI review panels but have **not** been signed off by a credentialed trainer, physical therapist, or physician. It gives general fitness guidance, not medical advice — if you have a health condition or new pain, talk to a qualified professional before training.

## Colors

The interface uses the "Forged Ember" token system — WCAG-checked dark theme (light theme staged for a future release). Brand orange `#FF5C00` on warm charcoal.

---

*Built with a lot of iteration and an unreasonable number of safety checks.*
