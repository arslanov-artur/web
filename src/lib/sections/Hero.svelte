<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { navigateToSection } from '../stores/navigation';
  
  let mounted = false;
  onMount(() => mounted = true);
</script>

<section class="hero">
  <div class="mesh-gradient gradient-animated"></div>
  <div class="floating-orbs">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>
  
  {#if mounted}
    <div class="content" in:fade={{ duration: 1000 }}>
      <h1 class="name" in:fly={{ y: 30, duration: 800, delay: 200 }}>
        Arthur Arslanov
      </h1>
      
      <p class="title" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        Senior Fullstack Developer
      </p>
      
      <div class="tagline-wrapper" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        <p class="tagline">
          <span class="tagline-item">5+ years building scalable systems</span>
          <span class="tagline-dot">•</span>
          <span class="tagline-item">React</span>
          <span class="tagline-dot">•</span>
          <span class="tagline-item">TypeScript</span>
          <span class="tagline-dot">•</span>
          <span class="tagline-item">Node.js</span>
        </p>
      </div>
      
      <div class="cta-group" in:fly={{ y: 20, duration: 800, delay: 800 }}>
        <button class="btn-primary" on:click={() => navigateToSection(2)}>
          View Work
        </button>
        <button class="btn-secondary" on:click={() => navigateToSection(4)}>
          Get in Touch
        </button>
      </div>
    </div>
  {/if}
</section>

<style>
  .hero {
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  .mesh-gradient {
    position: absolute;
    inset: 0;
    background: var(--gradient-hero);
    opacity: 0.4;
    filter: blur(100px);
  }
  
  .floating-orbs {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }
  
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.5;
    animation: float 20s ease-in-out infinite;
  }
  
  .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(129, 140, 248, 0.8) 0%, transparent 70%);
    top: -200px;
    left: -200px;
    animation-delay: 0s;
  }
  
  .orb-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(244, 114, 182, 0.8) 0%, transparent 70%);
    bottom: -150px;
    right: -150px;
    animation-delay: 7s;
  }
  
  .orb-3 {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.8) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 14s;
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
    animation: gradient-shift 8s ease infinite;
    position: relative;
  }
  
  .title {
    font-size: var(--text-2xl);
    color: var(--text-secondary);
    font-weight: 300;
    letter-spacing: var(--tracking-wider);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
  }
  
  .title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    opacity: 0.5;
  }
  
  .tagline-wrapper {
    margin-bottom: 2rem;
    overflow: hidden;
  }
  
  .tagline {
    font-size: var(--text-lg);
    color: var(--text-muted);
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tagline-item {
    display: inline-block;
    animation: slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  .tagline-item:nth-child(1) { animation-delay: 0.7s; }
  .tagline-item:nth-child(3) { animation-delay: 0.8s; }
  .tagline-item:nth-child(5) { animation-delay: 0.9s; }
  .tagline-item:nth-child(7) { animation-delay: 1s; }
  .tagline-item:nth-child(9) { animation-delay: 1.1s; }
  
  .tagline-dot {
    color: var(--color-primary);
    font-weight: bold;
    animation: fade-in-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  .tagline-dot:nth-child(2) { animation-delay: 0.75s; }
  .tagline-dot:nth-child(4) { animation-delay: 0.85s; }
  .tagline-dot:nth-child(6) { animation-delay: 0.95s; }
  .tagline-dot:nth-child(8) { animation-delay: 1.05s; }
  
  .tagline {
    font-size: var(--text-lg);
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
  }
  
  .btn-primary, .btn-secondary {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-weight: 500;
    transition: all var(--transition-base) var(--ease-out);
    border: none;
    cursor: pointer;
    font-size: var(--text-base);
  }
  
  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--glow-primary);
    position: relative;
    overflow: hidden;
  }
  
  .btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: var(--glow-primary), var(--shadow-lg);
  }
  
  .btn-primary:hover::before {
    left: 100%;
  }
  
  .btn-secondary {
    background: var(--glass-bg);
    color: var(--text-primary);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
  }
  
  .btn-secondary:hover {
    background: var(--bg-overlay);
    border-color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    .hero {
      padding: 1rem;
    }
    
    .content {
      padding: 0;
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
    
    .cta-group {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0 1rem;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 280px;
      font-size: var(--text-base);
      padding: 0.875rem 2rem;
    }
  }
</style>