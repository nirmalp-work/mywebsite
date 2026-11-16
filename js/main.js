/* ---------- Tokens ---------- */
:root {
  --bg-0: #02040a;
  --bg-1: #050914;
  --bg-2: #0a1230;
  --blue: #3b82f6;
  --purple: #8b5cf6;
  --text: #eef2ff;
  --muted: #9aa6c7;
  --line: rgba(148, 163, 255, 0.16);
  --glass: rgba(14, 22, 52, 0.55);
  --font: "Sora", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; }

html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  font-family: var(--font);
  color: var(--text);
  background: linear-gradient(160deg, var(--bg-2) 0%, var(--bg-1) 45%, var(--bg-0) 100%);
  background-attachment: fixed;
  overflow-x: hidden;
  line-height: 1.6;
}

ul { list-style: none; margin: 0; padding: 0; }
a { color: inherit; text-decoration: none; }

:focus-visible {
  outline: 2px solid var(--blue);
  outline-offset: 3px;
  border-radius: 10px;
}

/* ---------- Background ---------- */
.bg { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.45;
  will-change: transform;
}
.orb-blue {
  width: 46vmax; height: 46vmax;
  top: -14vmax; left: -12vmax;
  background: radial-gradient(circle, var(--blue), transparent 68%);
  animation: float 18s ease-in-out infinite alternate;
}
.orb-purple {
  width: 42vmax; height: 42vmax;
  bottom: -16vmax; right: -12vmax;
  background: radial-gradient(circle, var(--purple), transparent 68%);
  animation: float 22s ease-in-out infinite alternate-reverse;
}

.grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 64px 64px;
  opacity: 0.35;
  -webkit-mask-image: radial-gradient(ellipse at center, #000 20%, transparent 72%);
          mask-image: radial-gradient(ellipse at center, #000 20%, transparent 72%);
}

.cursor-glow {
  position: absolute;
  width: 420px; height: 420px;
  left: 0; top: 0;
  margin: -210px 0 0 -210px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.22), transparent 65%);
  opacity: 0;
  transition: opacity 0.4s ease;
  will-change: transform;
}
.cursor-glow.on { opacity: 1; }

@keyframes float {
  from { transform: translate3d(0, 0, 0) scale(1); }
  to   { transform: translate3d(4vmax, 3vmax, 0) scale(1.12); }
}

/* ---------- Layout ---------- */
.page {
  position: relative;
  z-index: 1;
  flex: 1;
  width: min(100%, 760px);
  margin: 0 auto;
  padding: clamp(40px, 8vh, 96px) 20px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(36px, 6vh, 56px);
  text-align: center;
}

.hero { display: flex; flex-direction: column; align-items: center; }

.brand {
  margin: 0 0 22px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--muted);
}

/* ---------- Badge ---------- */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 26px;
  padding: 8px 18px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #dbe4ff;
  background: linear-gradient(var(--glass), var(--glass)) padding-box,
              linear-gradient(120deg, var(--blue), var(--purple)) border-box;
  border: 1px solid transparent;
  border-radius: 999px;
  box-shadow: 0 0 24px rgba(99, 102, 241, 0.35);
}
.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #60a5fa;
  box-shadow: 0 0 10px #60a5fa;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.7); opacity: 0.5; }
}

/* ---------- Headline ---------- */
h1 {
  margin: 0 0 16px;
  font-size: clamp(2.3rem, 8.2vw, 4.6rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  background: linear-gradient(100deg, #ffffff 0%, #bcd0ff 40%, #c4b0ff 100%);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 28px rgba(99, 102, 241, 0.45));
}

.subtitle {
  margin: 0 0 18px;
  font-size: clamp(1.05rem, 2.8vw, 1.4rem);
  font-weight: 600;
  color: #a9b9ff;
}

.desc {
  margin: 0;
  max-width: 56ch;
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  color: var(--muted);
}

/* ---------- Contact ---------- */
.contact {
  width: 100%;
  padding: clamp(24px, 4vw, 36px) clamp(16px, 4vw, 32px);
  background: var(--glass);
  border: 1px solid var(--line);
  border-radius: 24px;
  -webkit-backdrop-filter: blur(14px);
          backdrop-filter: blur(14px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
}

.contact h2 {
  margin: 0 0 22px;
  font-size: 1.15rem;
  font-weight: 600;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 26px;
}

.icon-btn {
  --c: var(--blue);
  display: grid;
  place-items: center;
  width: 54px; height: 54px;
  font-size: 1.3rem;
  color: #dbe4ff;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 16px;
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}
.icon-btn:hover,
.icon-btn:focus-visible {
  transform: translateY(-5px) scale(1.06);
  color: #fff;
  background: var(--c);
  border-color: transparent;
  box-shadow: 0 10px 28px color-mix(in srgb, var(--c) 60%, transparent), 0 0 22px color-mix(in srgb, var(--c) 45%, transparent);
}
.icon-btn:active { transform: translateY(-1px) scale(0.98); }

.fb { --c: #1877f2; }
.ig { --c: #d6249f; }
.li { --c: #0a66c2; }
.yt { --c: #e11d2e; }
.gm { --c: var(--purple); }

.details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
}

.detail {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 100%;
  padding: 14px 16px;
  text-align: left;
  font-size: 0.95rem;
  font-weight: 600;
  overflow-wrap: anywhere;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 16px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}
.detail i {
  flex: none;
  display: grid;
  place-items: center;
  width: 40px; height: 40px;
  color: #fff;
  background: linear-gradient(135deg, var(--blue), var(--purple));
  border-radius: 12px;
}
.detail small {
  display: block;
  font-size: 0.72rem;
  font-weight: 400;
  color: var(--muted);
}
.detail:hover,
.detail:focus-visible {
  transform: translateY(-3px);
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(139, 92, 246, 0.6);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.25);
}

/* ---------- Footer ---------- */
.footer {
  position: relative;
  z-index: 1;
  padding: 24px 20px 32px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
}
.footer p { margin: 0; }

/* ---------- Entrance animation ---------- */
.reveal {
  opacity: 0;
  animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
  animation-delay: calc(var(--d, 0) * 110ms);
}
@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}

/* ---------- Responsive ---------- */
@media (max-width: 480px) {
  .icon-btn { width: 50px; height: 50px; font-size: 1.2rem; }
  .socials { gap: 10px; }
  .details { grid-template-columns: 1fr; }
}

@media (hover: none) {
  .cursor-glow { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  .reveal { opacity: 1; transform: none; }
}

/* ---------- Personal hero ---------- */
.page {
  width: min(100%, 1120px);
  padding: clamp(44px, 8vh, 88px) 28px 40px;
  gap: clamp(36px, 6vh, 64px);
}

.intro {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: clamp(36px, 7vw, 88px);
  text-align: left;
}

.hero {
  align-items: flex-start;
}

.brand {
  margin-bottom: 30px;
  color: #d7e3ff;
}

.badge {
  margin-bottom: 24px;
}

h1 {
  font-size: clamp(2.35rem, 4vw, 3.5rem);
  text-transform: none;
  letter-spacing: -0.055em;
}

.subtitle {
  color: #c4b5fd;
}

.desc {
  max-width: 48ch;
}

.hero-photo {
  position: relative;
  width: 100%;
  aspect-ratio: 1.25;
  margin: 0;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid rgba(191, 208, 255, 0.24);
  border-radius: 30px;
  background: #101a36;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.48), 0 0 55px rgba(59, 130, 246, 0.14);
}

.hero-photo::after {
  position: absolute;
  z-index: 0;
  inset: 55% 0 0;
  background: linear-gradient(180deg, transparent, rgba(3, 7, 18, 0.68));
  content: "";
}

.hero-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 62%;
  transition: transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.hero-photo:hover img {
  transform: scale(1.035);
}

.hero-photo figcaption {
  position: absolute;
  z-index: 1;
  right: 22px;
  bottom: 20px;
  left: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f3f6ff;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.photo-mark {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #93c5fd;
  box-shadow: 0 0 14px #60a5fa;
}

.contact {
  max-width: 920px;
}

.footer {
  padding-top: 10px;
}

@media (max-width: 720px) {
  .page {
    padding: 48px 20px 28px;
  }

  .intro {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero {
    align-items: center;
    text-align: center;
  }

  .hero-photo {
    max-width: 560px;
    aspect-ratio: 1.4;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 36px 16px 24px;
  }

  .hero-photo {
    border-radius: 22px;
  }
}
