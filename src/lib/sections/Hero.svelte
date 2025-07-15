<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  let mounted = false;
  onMount(() => mounted = true);
</script>

<section class="hero">
  <div class="mesh-gradient"></div>
  
  {#if mounted}
    <div class="content" in:fade={{ duration: 1000 }}>
      <h1 class="name" in:fly={{ y: 30, duration: 800, delay: 200 }}>
        Arthur Arslanov
      </h1>
      
      <p class="title" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        Senior Fullstack Developer
      </p>
      
      <p class="tagline" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        Crafting exceptional digital experiences with modern web technologies
      </p>
      
      <div class="cta-group" in:fly={{ y: 20, duration: 800, delay: 800 }}>
        <button class="btn-primary" on:click={() => window.location.href = '#work'}>
          View Work
        </button>
        <button class="btn-secondary" on:click={() => window.location.href = '#contact'}>
          Get in Touch
        </button>
      </div>
    </div>
  {/if}
</section>

<style>
  .hero {
    padding: 2rem;
  }
  
  .mesh-gradient {
    position: absolute;
    inset: 0;
    background: var(--gradient-mesh);
    opacity: 0.3;
    filter: blur(100px);
  }
  
  .content {
    position: relative;
    text-align: center;
    max-width: 800px;
  }
  
  .name {
    font-family: var(--font-display);
    font-size: var(--text-hero);
    font-weight: 300;
    letter-spacing: var(--tracking-tight);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }
  
  .title {
    font-size: var(--text-2xl);
    color: var(--text-secondary);
    font-weight: 300;
    letter-spacing: var(--tracking-wider);
    margin-bottom: 2rem;
  }
  
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
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-primary), var(--shadow-lg);
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
    .name {
      font-size: var(--text-3xl);
    }
    
    .title {
      font-size: var(--text-xl);
    }
    
    .cta-group {
      flex-direction: column;
      align-items: center;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 300px;
    }
  }
</style>