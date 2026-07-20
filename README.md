# Volume

**Personal workout tracker with progression logging, plan generation, and a rest timer.**
Live at **[activecatalyst.github.io/volume](https://activecatalyst.github.io/volume/)**.

Volume is a single-file progressive web app — one `index.html`, no build step, no server, no account. Open it in a browser, add it to your home screen, and train. All data lives on your device.

## Features

- **12 preset plans** across five groups — Start Here, Build Muscle, Lose Fat, Athletic Power, Conditioning — from a 3-day beginner full-body to a 6-day lower-body specialization, plus deficit-friendly Cut Phase and Cut Phase: Lower Bias.
- **90-exercise library** with coaching cues, safety notes, swap options for every plan exercise, and regressions for the risky stuff. Every exercise card links to a web search for form videos.
- **Plan generator** — pick days, goal, and level; get a balanced week with compound lifts first.
- **Progression engine** — double progression with rep-range logic, RPE back-off signals, multi-signal deload triggers, and honest units (minutes, seconds, and meters log as what they are, not fake reps).
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
