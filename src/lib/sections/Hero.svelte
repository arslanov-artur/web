<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeToggle from '../components/ThemeToggle.svelte';

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
        <nav class="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact" class="nav-cta">Contact</a>
          <ThemeToggle />
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

        <p class="bio">
          Building digital products with precision and care.
          <span class="highlight">6+ years</span> crafting scalable solutions.
        </p>

        <div class="tech-stack">
          <span class="stack-item">TypeScript</span>
          <span class="stack-item">React</span>
          <span class="stack-item">Node.js</span>
          <span class="stack-item">PostgreSQL</span>
        </div>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="scroll-hint">
          <div class="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>

        <a href="#work" class="cta">
          View Work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
    padding: 1rem 2rem 2rem;
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
    padding: 1rem 4rem 0;
    display: flex;
    flex-direction: column;
  }

  .container.ready .word,
  .container.ready .bio,
  .container.ready .tech-stack,
  .container.ready .footer,
  .container.ready .scroll-hint {
    opacity: 1;
    transform: translateY(0);
  }

  /* Header */
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem 0;
    flex-shrink: 0;
    opacity: 0;
    animation: fadeIn 0.6s ease 0.2s forwards;
    position: relative;
    z-index: 10;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
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
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .word {
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 600;
    letter-spacing: -0.04em;
    line-height: 1;
    color: var(--text-primary);
    opacity: 0;
    transform: translateY(50px);
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

  /* Bio */
  .bio {
    max-width: 500px;
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
    font-weight: 600;
  }

  /* Tech Stack */
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.4s;
  }

  .stack-item {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-primary);
    padding: 0.5rem 1rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    transition: all 0.3s ease;
  }

  .stack-item:hover {
    background: rgba(129, 140, 248, 0.1);
    border-color: rgba(129, 140, 248, 0.3);
    color: var(--color-primary);
    transform: translateY(-2px);
  }

  /* Footer */
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding-bottom: 2rem;
    margin-top: auto;
    flex-shrink: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.5s;
  }

  .scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--text-muted), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }

  .scroll-hint span {
    font-size: 10px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
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

    .bio {
      font-size: var(--text-base);
      max-width: 100%;
    }

    .tech-stack {
      gap: 0.5rem;
    }

    .stack-item {
      padding: 0.4rem 0.8rem;
      font-size: var(--text-xs);
    }

    .footer {
      gap: 1.5rem;
      padding: 1.5rem 0;
    }

    .cta {
      width: 100%;
      justify-content: center;
      padding: 0.875rem 1.5rem;
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
