<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let mounted = false;
  let mouseX = 0;
  let mouseY = 0;
  let windowWidth = 0;
  let windowHeight = 0;

  // Parallax multipliers for different elements
  const parallaxLayers = [
    { x: 0.02, y: 0.02 },  // Slowest
    { x: 0.04, y: 0.04 },
    { x: 0.06, y: 0.06 },  // Fastest
  ];

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

  function handleSmoothScroll(e: MouseEvent) {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const id = target.getAttribute('href');
    if (id && id.startsWith('#')) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  $: transform1 = `translate(${mouseX * parallaxLayers[0].x * 100}px, ${mouseY * parallaxLayers[0].y * 100}px)`;
  $: transform2 = `translate(${mouseX * parallaxLayers[1].x * 100}px, ${mouseY * parallaxLayers[1].y * 100}px)`;
  $: transform3 = `translate(${mouseX * parallaxLayers[2].x * 100}px, ${mouseY * parallaxLayers[2].y * 100}px)`;
</script>

<section id="home" class="hero">
  <div class="mesh-gradient gradient-animated"></div>

  <!-- Interactive floating orbs that follow mouse -->
  <div class="interactive-bg">
    <div class="parallax-layer layer-1" style="transform: {transform1}">
      <div class="floating-blob blob-1"></div>
      <div class="floating-blob blob-2"></div>
    </div>
    <div class="parallax-layer layer-2" style="transform: {transform2}">
      <div class="floating-blob blob-3"></div>
      <div class="glow-ring ring-1"></div>
    </div>
    <div class="parallax-layer layer-3" style="transform: {transform3}">
      <div class="glow-ring ring-2"></div>
      <div class="floating-dot dot-1"></div>
      <div class="floating-dot dot-2"></div>
      <div class="floating-dot dot-3"></div>
    </div>
  </div>

  <!-- Grid lines -->
  <div class="grid-overlay"></div>
  
    <div class="content" in:fade={{ duration: 1000 }}>
      <h1 class="name" in:fly={{ y: 30, duration: 800, delay: 200 }}>
        Artur Arslanov
      </h1>
      
      <p class="title" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        Senior Software Engineer
      </p>
      
      <div class="tagline-wrapper" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        <p class="tagline-main">Crafting digital experiences that scale</p>
        <div class="tech-pills">
          <span class="tech-pill">TypeScript</span>
          <span class="tech-pill">React</span>
          <span class="tech-pill">Node.js</span>
          <span class="tech-pill">NestJS</span>
        </div>
      </div>
      
      <div class="cta-group" in:fly={{ y: 20, duration: 800, delay: 800 }}>
        <a href="#work" class="btn-primary" on:click={handleSmoothScroll}>
          View Work
        </a>
        <a href="#contact" class="btn-secondary" on:click={handleSmoothScroll}>
          Get in Touch
        </a>
      </div>
    </div>
</section>

<style>
  .hero {
    padding: 2rem;
    width: 100%;
    height: 95vh;
    max-height: 95vh;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mesh-gradient {
    position: absolute;
    inset: 0;
    background: var(--gradient-hero);
    opacity: 0.4;
    filter: blur(100px);
  }

  :global([data-theme="light"]) .mesh-gradient {
    opacity: 0.5;
    filter: blur(80px);
  }

  /* Interactive Background */
  .interactive-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .parallax-layer {
    position: absolute;
    inset: 0;
    transition: transform 0.1s ease-out;
  }

  /* Floating Blobs */
  .floating-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.4;
    animation: blob-morph 20s ease-in-out infinite;
  }

  :global([data-theme="light"]) .floating-blob {
    opacity: 0.3;
    filter: blur(40px);
  }

  .blob-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(129, 140, 248, 0.8) 0%, transparent 70%);
    top: -15%;
    left: -10%;
  }

  .blob-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(244, 114, 182, 0.7) 0%, transparent 70%);
    bottom: -10%;
    right: -5%;
    animation-delay: -7s;
  }

  .blob-3 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.6) 0%, transparent 70%);
    top: 40%;
    left: 60%;
    animation-delay: -14s;
  }

  /* Glow Rings */
  .glow-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid;
    opacity: 0.3;
    animation: ring-pulse 8s ease-in-out infinite;
  }

  .ring-1 {
    width: 300px;
    height: 300px;
    border-color: var(--color-primary);
    top: 20%;
    right: 15%;
  }

  .ring-2 {
    width: 200px;
    height: 200px;
    border-color: var(--color-accent-1);
    bottom: 25%;
    left: 10%;
    animation-delay: -4s;
  }

  /* Floating Dots */
  .floating-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-primary);
    opacity: 0.6;
    animation: dot-float 15s ease-in-out infinite;
  }

  .dot-1 {
    top: 15%;
    left: 20%;
  }

  .dot-2 {
    top: 70%;
    right: 25%;
    animation-delay: -5s;
    background: var(--color-accent-1);
  }

  .dot-3 {
    top: 45%;
    left: 75%;
    animation-delay: -10s;
    background: var(--color-accent-2);
  }

  /* Grid Overlay */
  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(129, 140, 248, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(129, 140, 248, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  :global([data-theme="light"]) .grid-overlay {
    background-image:
      linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  }

  /* Animations */
  @keyframes blob-morph {
    0%, 100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      transform: rotate(0deg) scale(1);
    }
    25% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    50% {
      border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
      transform: rotate(180deg) scale(1.1);
    }
    75% {
      border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%;
    }
  }

  @keyframes ring-pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.15;
    }
  }

  @keyframes dot-float {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(20px, -30px);
    }
    50% {
      transform: translate(-10px, -50px);
    }
    75% {
      transform: translate(30px, -20px);
    }
  }

  .content {
    position: relative;
    text-align: center;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  
  .name {
    font-family: var(--font-display);
    font-size: var(--text-hero);
    font-weight: 300;
    letter-spacing: var(--tracking-tight);
    background: linear-gradient(270deg, var(--color-primary), var(--color-accent-1), var(--color-accent-2));
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    /* Removed animation to improve scroll performance */
    position: relative;
  }
  
  .title {
    font-size: var(--text-2xl);
    color: var(--text-secondary);
    font-weight: 300;
    letter-spacing: var(--tracking-wider);
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;
    line-height: 1.2;
  }
  
  .title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    opacity: 0.5;
  }
  
  .tagline-wrapper {
    margin-bottom: 2.5rem;
  }

  .tagline-main {
    font-size: var(--text-xl);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .tech-pills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tech-pill {
    padding: 0.5rem 1.25rem;
    border-radius: 100px;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-muted);
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
  }

  .tech-pill:hover {
    color: var(--text-primary);
    border-color: var(--color-primary);
    box-shadow: 0 0 20px rgba(129, 140, 248, 0.15);
  }
  
  .cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
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
    background: var(--color-primary);
    color: white;
    box-shadow: 0 4px 14px rgba(129, 140, 248, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(129, 140, 248, 0.5);
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
  }

  .btn-secondary:hover {
    border-color: var(--text-muted);
    background: var(--glass-bg);
  }
  
  @media (max-width: 768px) {
    .hero {
      padding: 1rem;
    }

    /* Reduce blob sizes on mobile */
    .floating-blob {
      opacity: 0.25;
      filter: blur(40px);
    }

    .blob-1 {
      width: 300px;
      height: 300px;
    }

    .blob-2 {
      width: 250px;
      height: 250px;
    }

    .blob-3 {
      width: 200px;
      height: 200px;
    }

    .glow-ring {
      opacity: 0.15;
    }

    .ring-1 {
      width: 180px;
      height: 180px;
    }

    .ring-2 {
      width: 120px;
      height: 120px;
    }

    .grid-overlay {
      background-size: 40px 40px;
    }

    .content {
      padding: 0;
      max-width: 100%;
    }

    .name {
      font-size: var(--text-3xl);
      word-wrap: break-word;
    }

    .title {
      font-size: var(--text-xl);
    }

    .tagline-wrapper {
      max-width: 100%;
    }

    .tagline {
      font-size: var(--text-base);
    }

    .tagline-main {
      font-size: var(--text-lg);
    }

    .tech-pills {
      gap: 0.5rem;
    }

    .tech-pill {
      padding: 0.375rem 1rem;
      font-size: var(--text-xs);
    }

    .cta-group {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0 1rem;
      margin-top: 2rem;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 240px;
      justify-content: center;
    }
  }
</style>