<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Hero from './lib/sections/Hero.svelte';
  import About from './lib/sections/About.svelte';
  import Work from './lib/sections/Work.svelte';
  import Projects from './lib/sections/Projects.svelte';
  import Contact from './lib/sections/Contact.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import ThemeToggle from './lib/components/ThemeToggle.svelte';
  // import { currentSection, handleWheel, handleKeyboard } from './lib/stores/navigation';
  import { theme } from './lib/stores/theme';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
    theme.init();
    
    // Disabled custom navigation - using standard scroll
    // window.addEventListener('wheel', handleWheel, { passive: false });
    // window.addEventListener('keydown', handleKeyboard);
    
    // const unsubscribe = currentSection.subscribe(value => {
    //   sectionOffset = value * 100;
    // });
    
    // return () => {
    //   unsubscribe();
    //   window.removeEventListener('wheel', handleWheel);
    //   window.removeEventListener('keydown', handleKeyboard);
    // };
  });
</script>

<main class="portfolio-container">
  {#if mounted}
    <Navigation />
    <ThemeToggle />
    
    <!-- Using standard scroll instead of transform -->
    <div class="sections-wrapper">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
    
    <!-- Scroll progress removed for standard scrolling -->
  {/if}
</main>

<style>
  .portfolio-container {
    min-height: 100vh;
    position: relative;
    background-color: var(--bg-base);
    width: 100%;
  }
  
  .sections-wrapper {
    /* Removed transition that was causing drag */
    width: 100%;
  }
  
  /* Standard scrolling for sections */
  .sections-wrapper > :global(section) {
    position: relative;
  }
  
</style>