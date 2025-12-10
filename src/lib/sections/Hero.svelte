<script lang="ts">
  import { onMount } from 'svelte';

  let mounted = false;
  let ready = false;
  let colorIndex = 0;

  // Vibrant colors inspired by dotsandlines.io
  const accentColors = ['#818cf8', '#f472b6', '#34d399', '#fbbf24', '#f97316'];

  onMount(() => {
    mounted = true;
    setTimeout(() => ready = true, 100);

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % accentColors.length;
    }, 4000);

    return () => clearInterval(colorInterval);
  });

  $: currentColor = accentColors[colorIndex];
  $: nextColor = accentColors[(colorIndex + 1) % accentColors.length];
</script>

<section id="home" class="hero">
  <!-- Dynamic background inspired by dotsandlines.io -->
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1" style="background: {currentColor}"></div>
  <div class="bg-blob blob-2" style="background: {nextColor}"></div>
  <div class="bg-grid"></div>

  {#if mounted}
    <div class="container" class:ready>
      <!-- Header -->
      <header class="header">
        <a href="/" class="logo">A.</a>
        <nav class="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact" class="nav-cta">Contact</a>
        </nav>
      </header>

      <!-- Main content -->
      <main class="main">
        <div class="headline">
          <div class="line">
            <span class="word">Software</span>
          </div>
          <div class="line">
            <span class="word">Engineer</span>
            <span class="accent-dot" style="background: {currentColor}"></span>
          </div>
        </div>

        <div class="info">
          <p class="bio">
            Building digital products with precision and care.
            <span class="highlight">5+ years</span> crafting scalable solutions.
          </p>

          <div class="meta">
            <span class="meta-item">
              <span class="meta-label">Based in</span>
              <span class="meta-value">Berlin</span>
            </span>
            <span class="meta-item">
              <span class="meta-label">Stack</span>
              <span class="meta-value">TS / React / Node</span>
            </span>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="name-block">
          <span class="name">Artur Arslanov</span>
          <span class="status">
            <span class="status-dot"></span>
            Available
          </span>
        </div>

        <a href="#work" class="cta">
          View Work
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </footer>
    </div>
  {/if}
</section>

<style>
  .hero {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    position: relative;
    background: var(--bg-base);
    overflow: hidden;
  }

  /* Dynamic background */
  .bg-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(129, 140, 248, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(244, 114, 182, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }

  .bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.12;
    transition: background 2s ease, transform 8s ease;
    pointer-events: none;
    animation: float 20s ease-in-out infinite;
  }

  .blob-1 {
    top: -15%;
    right: -5%;
    width: 45vw;
    height: 45vw;
  }

  .blob-2 {
    bottom: -20%;
    left: -10%;
    width: 40vw;
    height: 40vw;
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(2%, 3%) scale(1.02); }
    50% { transform: translate(-1%, 5%) scale(0.98); }
    75% { transform: translate(3%, -2%) scale(1.01); }
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  :global([data-theme="light"]) .bg-grid {
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  }

  /* Container */
  .container {
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
  }

  .container.ready .word,
  .container.ready .bio,
  .container.ready .meta,
  .container.ready .footer {
    opacity: 1;
    transform: translateY(0);
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    flex-shrink: 0;
    opacity: 0;
    animation: fadeIn 0.6s ease 0.2s forwards;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }

  .logo {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.03em;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav a {
    font-size: var(--text-sm);
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav a:hover {
    color: var(--text-primary);
  }

  .nav-cta {
    padding: 0.5rem 1.25rem;
    background: var(--gradient-primary);
    color: white !important;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .nav-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(129, 140, 248, 0.3);
  }

  /* Main */
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    min-height: 0;
  }

  /* Headline */
  .headline {
    display: flex;
    flex-direction: column;
  }

  .line {
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .word {
    font-size: clamp(3.5rem, 12vw, 10rem);
    font-weight: 600;
    letter-spacing: -0.04em;
    line-height: 0.9;
    color: var(--text-primary);
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .line:nth-child(2) .word {
    transition-delay: 0.1s;
  }

  .accent-dot {
    width: clamp(1rem, 3vw, 2.5rem);
    height: clamp(1rem, 3vw, 2.5rem);
    border-radius: 50%;
    flex-shrink: 0;
    transition: background 1.5s ease;
  }

  /* Info */
  .info {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .bio {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.3s;
  }

  .highlight {
    color: var(--text-primary);
    font-weight: 500;
  }

  .meta {
    display: flex;
    gap: 2rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.4s;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .meta-label {
    font-size: 11px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .meta-value {
    font-size: var(--text-sm);
    color: var(--text-primary);
    font-weight: 500;
  }

  /* Footer */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    flex-shrink: 0;
    border-top: 1px solid var(--glass-border);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.5s;
  }

  .name-block {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .name {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .status-dot {
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .cta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--text-sm);
    font-weight: 600;
    color: white;
    text-decoration: none;
    padding: 0.875rem 1.5rem;
    background: var(--gradient-primary);
    border: none;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 4px 15px rgba(129, 140, 248, 0.3);
  }

  .cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(129, 140, 248, 0.4);
    gap: 0.75rem;
  }

  .cta svg {
    transition: transform 0.3s ease;
  }

  .cta:hover svg {
    transform: translate(3px, -3px);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .container {
      padding: 0 1.25rem;
    }

    .header {
      padding: 1rem 0;
    }

    .nav a:not(.nav-cta) {
      display: none;
    }

    .main {
      gap: 1.5rem;
    }

    .word {
      font-size: clamp(2.5rem, 14vw, 4rem);
    }

    .accent-dot {
      width: 0.6rem;
      height: 0.6rem;
    }

    .info {
      max-width: 100%;
      gap: 0.75rem;
    }

    .bio {
      font-size: var(--text-base);
    }

    .footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem 0;
    }

    .cta {
      width: 100%;
      justify-content: center;
      padding: 0.75rem 1.25rem;
    }

    .blob-1 {
      width: 70vw;
      height: 70vw;
      top: -25%;
      right: -20%;
    }

    .blob-2 {
      width: 60vw;
      height: 60vw;
    }
  }
</style>
