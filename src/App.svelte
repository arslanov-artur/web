<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Hero from './lib/sections/Hero.svelte';
  import About from './lib/sections/About.svelte';
  import Work from './lib/sections/Work.svelte';
  import Projects from './lib/sections/Projects.svelte';
  import Publications from './lib/sections/Publications.svelte';
  import Contact from './lib/sections/Contact.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import ThemeToggle from './lib/components/ThemeToggle.svelte';
  import CustomCursor from './lib/components/CustomCursor.svelte';
  import { theme } from './lib/stores/theme';

  let mounted = false;
  let sectionsVisible: boolean[] = [false, false, false, false, false, false];

  function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const index = parseInt(entry.target.getAttribute('data-section-index') || '0');
      if (entry.isIntersecting) {
        sectionsVisible[index] = true;
      }
    });
  }

  onMount(() => {
    mounted = true;
    theme.init();

    // Setup intersection observer for section animations
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    setTimeout(() => {
      document.querySelectorAll('[data-section-index]').forEach(section => {
        observer.observe(section);
      });
    }, 100);
    
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
    <CustomCursor />
    <Navigation />
    <ThemeToggle />

    <!-- Using standard scroll instead of transform -->
    <div class="sections-wrapper">
      <div data-section-index="0" class="section-animate" class:visible={sectionsVisible[0]}>
        <Hero />
      </div>
      <div data-section-index="1" class="section-animate" class:visible={sectionsVisible[1]}>
        <About />
      </div>
      <div data-section-index="2" class="section-animate" class:visible={sectionsVisible[2]}>
        <Work />
      </div>
      <div data-section-index="3" class="section-animate" class:visible={sectionsVisible[3]}>
        <Projects />
      </div>
      <div data-section-index="4" class="section-animate" class:visible={sectionsVisible[4]}>
        <Publications />
      </div>
      <div data-section-index="5" class="section-animate" class:visible={sectionsVisible[5]}>
        <Contact />
      </div>
    </div>
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
    width: 100%;
  }

  /* Section animation wrapper */
  .section-animate {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .section-animate.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Stagger animations for children */
  .section-animate.visible :global(.stagger-child) {
    animation: stagger-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes stagger-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Standard scrolling for sections */
  .sections-wrapper > :global(section) {
    position: relative;
  }
</style>