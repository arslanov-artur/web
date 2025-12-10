<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let mounted = false;
  let mouseX = 0;
  let mouseY = 0;
  let windowWidth = 0;
  let windowHeight = 0;

  function handleMouseMove(e: MouseEvent) {
    mouseX = (e.clientX - windowWidth / 2) / windowWidth;
    mouseY = (e.clientY - windowHeight / 2) / windowHeight;
  }

  function handleResize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  }

  onMount(() => {
    mounted = true;
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    }
  });

  $: transform1 = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
  $: transform2 = `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
  $: transform3 = `translate(${mouseX * 60}px, ${mouseY * 60}px)`;
</script>

<section id="home" class="hero">
  <!-- Animated gradient orbs -->
  <div class="orb-container">
    <div class="orb orb-1" style="transform: {transform1}"></div>
    <div class="orb orb-2" style="transform: {transform2}"></div>
    <div class="orb orb-3" style="transform: {transform3}"></div>
    <div class="orb orb-4"></div>
  </div>

  <!-- Geometric shapes -->
  <div class="shapes-container">
    <div class="shape shape-1" style="transform: {transform1} rotate(45deg)"></div>
    <div class="shape shape-2" style="transform: {transform2} rotate(-30deg)"></div>
    <div class="shape shape-3" style="transform: {transform3}"></div>
  </div>

  <!-- Floating particles -->
  <div class="particles">
    {#each Array(12) as _, i}
      <div class="particle" style="--i: {i}; --delay: {i * 0.5}s"></div>
    {/each}
  </div>

  <!-- Grid overlay -->
  <div class="grid-overlay"></div>

  <!-- Noise texture -->
  <div class="noise"></div>

  {#if mounted}
    <div class="content">
      <h1 class="name">
        <span class="char" style="--i: 0">A</span><span class="char" style="--i: 1">r</span><span class="char" style="--i: 2">t</span><span class="char" style="--i: 3">u</span><span class="char" style="--i: 4">r</span><span class="char space" style="--i: 5">&nbsp;</span><span class="char" style="--i: 6">A</span><span class="char" style="--i: 7">r</span><span class="char" style="--i: 8">s</span><span class="char" style="--i: 9">l</span><span class="char" style="--i: 10">a</span><span class="char" style="--i: 11">n</span><span class="char" style="--i: 12">o</span><span class="char" style="--i: 13">v</span>
      </h1>

      <p class="title">
        Senior Software Engineer
      </p>

      <div class="tagline-wrapper">
        <p class="tagline">
          <span class="tagline-item">5+ years building scalable systems</span>
        </p>
        <p class="tagline tech-line">
          <span class="tech">TypeScript</span>
          <span class="dot">•</span>
          <span class="tech">React</span>
          <span class="dot">•</span>
          <span class="tech">Node.js</span>
          <span class="dot">•</span>
          <span class="tech">NestJS</span>
        </p>
      </div>

      <div class="cta-group">
        <a href="#work" class="btn-primary">
          View Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#contact" class="btn-secondary">
          Get in Touch
        </a>
      </div>
    </div>
  {/if}
</section>

<style>
  .hero {
    width: 100%;
    height: 95vh;
    max-height: 95vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: var(--bg-base);
  }

  /* ===== COOL BACKGROUND ===== */

  .orb-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.6;
    mix-blend-mode: screen;
    will-change: transform;
    transition: transform 0.3s ease-out;
  }

  :global([data-theme="light"]) .orb {
    mix-blend-mode: multiply;
    opacity: 0.4;
  }

  .orb-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(129, 140, 248, 0.8) 0%, rgba(129, 140, 248, 0) 70%);
    top: -20%;
    left: -10%;
    animation: orb-float-1 20s ease-in-out infinite;
  }

  .orb-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(244, 114, 182, 0.7) 0%, rgba(244, 114, 182, 0) 70%);
    bottom: -15%;
    right: -10%;
    animation: orb-float-2 25s ease-in-out infinite;
  }

  .orb-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.6) 0%, rgba(52, 211, 153, 0) 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: orb-float-3 18s ease-in-out infinite;
  }

  .orb-4 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, rgba(251, 191, 36, 0) 70%);
    top: 20%;
    right: 20%;
    animation: orb-float-4 22s ease-in-out infinite;
  }

  @keyframes orb-float-1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(30px, 50px) scale(1.1); }
    50% { transform: translate(-20px, 30px) scale(0.95); }
    75% { transform: translate(40px, -20px) scale(1.05); }
  }

  @keyframes orb-float-2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-40px, -30px) scale(1.1); }
    66% { transform: translate(30px, 40px) scale(0.9); }
  }

  @keyframes orb-float-3 {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
  }

  @keyframes orb-float-4 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-50px, 50px); }
  }

  .shapes-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .shape {
    position: absolute;
    border: 1px solid;
    opacity: 0.15;
    will-change: transform;
    transition: transform 0.3s ease-out;
  }

  .shape-1 {
    width: 200px;
    height: 200px;
    border-color: var(--color-primary);
    top: 15%;
    left: 10%;
    animation: shape-rotate 30s linear infinite;
  }

  .shape-2 {
    width: 150px;
    height: 150px;
    border-color: var(--color-accent-1);
    border-radius: 30%;
    bottom: 20%;
    right: 15%;
    animation: shape-rotate 25s linear infinite reverse;
  }

  .shape-3 {
    width: 100px;
    height: 100px;
    border-color: var(--color-accent-2);
    border-radius: 50%;
    top: 60%;
    left: 20%;
    animation: shape-pulse 8s ease-in-out infinite;
  }

  @keyframes shape-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes shape-pulse {
    0%, 100% { transform: scale(1); opacity: 0.15; }
    50% { transform: scale(1.2); opacity: 0.25; }
  }

  .particles {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-primary);
    opacity: 0.4;
    animation: particle-float 20s ease-in-out infinite;
    animation-delay: var(--delay);
    left: calc(var(--i) * 8% + 5%);
    top: calc(var(--i) * 7% + 10%);
  }

  .particle:nth-child(even) {
    background: var(--color-accent-1);
    animation-duration: 25s;
  }

  .particle:nth-child(3n) {
    background: var(--color-accent-2);
    width: 6px;
    height: 6px;
  }

  @keyframes particle-float {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
    25% { transform: translate(30px, -50px) scale(1.2); opacity: 0.6; }
    50% { transform: translate(-20px, -100px) scale(0.8); opacity: 0.3; }
    75% { transform: translate(40px, -60px) scale(1.1); opacity: 0.5; }
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(129, 140, 248, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(129, 140, 248, 0.03) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  }

  .noise {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
  }

  /* ===== CONTENT WITH ANIMATIONS ===== */

  .content {
    position: relative;
    text-align: center;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    z-index: 10;
  }

  .name {
    font-family: var(--font-display);
    font-size: var(--text-hero);
    font-weight: 300;
    letter-spacing: var(--tracking-tight);
    margin-bottom: 1rem;
    display: inline-block;
  }

  .char {
    display: inline-block;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent-1) 50%, var(--color-accent-2) 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation:
      char-appear 0.6s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i) * 0.05s) both,
      gradient-shift 8s ease infinite;
  }

  .char.space {
    width: 0.3em;
  }

  @keyframes char-appear {
    from {
      opacity: 0;
      transform: translateY(40px) rotateX(-90deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }
  }

  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .title {
    font-size: var(--text-2xl);
    color: var(--text-secondary);
    font-weight: 300;
    letter-spacing: var(--tracking-wider);
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;
    animation: fade-slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both;
  }

  .title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    animation: line-expand 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards;
  }

  @keyframes fade-slide-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes line-expand {
    to {
      transform: translateX(-50%) scaleX(1);
    }
  }

  .tagline-wrapper {
    margin-bottom: 2rem;
    animation: fade-slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
  }

  .tagline {
    font-size: var(--text-lg);
    color: var(--text-muted);
    margin: 0 auto 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tagline-item {
    display: inline-block;
  }

  .tech-line {
    gap: 0.75rem;
  }

  .tech {
    color: var(--text-secondary);
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .tech:hover {
    color: var(--color-primary);
  }

  .dot {
    color: var(--color-primary);
    animation: dot-pulse 2s ease-in-out infinite;
  }

  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(4) { animation-delay: 0.4s; }
  .dot:nth-child(6) { animation-delay: 0.6s; }

  @keyframes dot-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  .cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
    animation: fade-slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both;
  }

  .btn-primary, .btn-secondary {
    padding: 0.875rem 2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: var(--text-sm);
    letter-spacing: 0.02em;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: 0 4px 20px rgba(129, 140, 248, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(129, 140, 248, 0.5);
  }

  .btn-primary svg {
    transition: transform 0.2s ease;
  }

  .btn-primary:hover svg {
    transform: translateX(4px);
  }

  .btn-secondary {
    background: var(--glass-bg);
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
  }

  .btn-secondary:hover {
    border-color: var(--color-primary);
    background: rgba(129, 140, 248, 0.1);
  }

  /* ===== MOBILE ===== */

  @media (max-width: 768px) {
    .orb {
      filter: blur(60px);
      opacity: 0.4;
    }

    .orb-1 { width: 350px; height: 350px; }
    .orb-2 { width: 300px; height: 300px; }
    .orb-3 { width: 250px; height: 250px; }
    .orb-4 { display: none; }

    .shape { opacity: 0.1; }
    .shape-1 { width: 120px; height: 120px; }
    .shape-2 { width: 100px; height: 100px; }
    .shape-3 { width: 60px; height: 60px; }

    .particle { opacity: 0.3; }

    .content {
      padding: 0 1rem;
    }

    .name {
      font-size: var(--text-3xl);
    }

    .title {
      font-size: var(--text-xl);
    }

    .tagline {
      font-size: var(--text-base);
    }

    .cta-group {
      flex-direction: column;
      align-items: center;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 240px;
      justify-content: center;
    }
  }
</style>
