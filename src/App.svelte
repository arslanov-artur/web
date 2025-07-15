<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Hero from './lib/sections/Hero.svelte';
  import About from './lib/sections/About.svelte';
  import Work from './lib/sections/Work.svelte';
  import Projects from './lib/sections/Projects.svelte';
  import Contact from './lib/sections/Contact.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import ThemeToggle from './lib/components/ThemeToggle.svelte';
  import { currentSection, handleWheel, handleKeyboard } from './lib/stores/navigation';
  import { theme } from './lib/stores/theme';
  
  let mounted = false;
  let sectionOffset = 0;
  
  onMount(() => {
    mounted = true;
    theme.init();
    
    // Add event listeners for navigation
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyboard);
    
    // Subscribe to section changes
    const unsubscribe = currentSection.subscribe(value => {
      sectionOffset = value * 100;
    });
    
    return () => {
      unsubscribe();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyboard);
    };
  });
</script>

<main class="portfolio-container">
  {#if mounted}
    <Navigation />
    <ThemeToggle />
    
    <div class="sections-wrapper" style="transform: translateY(-{sectionOffset}vh)">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
    
    <div class="scroll-progress">
      <div class="progress-bar" style="height: {($currentSection + 1) * 20}%"></div>
    </div>
  {/if}
</main>

<style>
  .portfolio-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: var(--bg-base);
  }
  
  .sections-wrapper {
    transition: transform 0.8s var(--ease-in-out);
    will-change: transform;
  }
  
  .scroll-progress {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 200px;
    background-color: var(--bg-overlay);
    border-radius: 3px;
    overflow: hidden;
    z-index: 100;
  }
  
  .progress-bar {
    width: 100%;
    background: var(--gradient-primary);
    transition: height 0.8s var(--ease-in-out);
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    .scroll-progress {
      right: 1rem;
    }
  }
</style>