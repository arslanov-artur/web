<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import Hero from './lib/sections/Hero.svelte';
  import About from './lib/sections/About.svelte';
  import Work from './lib/sections/Work.svelte';
  import Projects from './lib/sections/Projects.svelte';
  import Publications from './lib/sections/Publications.svelte';
  import Contact from './lib/sections/Contact.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import ThemeToggle from './lib/components/ThemeToggle.svelte';
  import CustomCursor from './lib/components/CustomCursor.svelte';
  import {
    currentSection,
    isTransitioning,
    transitionDirection,
    handleWheel,
    handleKeyboard,
    handleTouchStart,
    handleTouchEnd,
    totalSections,
    navigateToSection
  } from './lib/stores/navigation';
  import { theme } from './lib/stores/theme';

  let mounted = false;

  const sections = [
    { component: Hero, id: 'home' },
    { component: About, id: 'about' },
    { component: Work, id: 'work' },
    { component: Projects, id: 'projects' },
    { component: Publications, id: 'publications' },
    { component: Contact, id: 'contact' }
  ];

  onMount(() => {
    mounted = true;
    theme.init();

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyboard);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Prevent default scroll
    document.body.style.overflow = 'hidden';
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyboard);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = '';
    }
  });

  // Custom transition
  function slideTransition(node: Element, { direction, duration = 800 }: { direction: 'up' | 'down', duration?: number }) {
    const y = direction === 'down' ? 100 : -100;
    return {
      duration,
      easing: cubicOut,
      css: (t: number) => `
        transform: translateY(${(1 - t) * y}vh);
        opacity: ${t};
      `
    };
  }
</script>

<main class="fullpage-container">
  {#if mounted}
    <CustomCursor />
    <Navigation />
    <ThemeToggle />

    <div class="sections-viewport">
      {#each sections as section, index}
        {#if $currentSection === index}
          <div
            class="section-wrapper"
            in:slideTransition={{ direction: $transitionDirection, duration: 800 }}
            out:slideTransition={{ direction: $transitionDirection === 'down' ? 'up' : 'down', duration: 800 }}
          >
            <svelte:component this={section.component} />
          </div>
        {/if}
      {/each}
    </div>

    <!-- Progress indicator -->
    <div class="progress-dots">
      {#each sections as _, index}
        <button
          class="dot"
          class:active={$currentSection === index}
          on:click={() => {
            if (!$isTransitioning) {
              navigateToSection(index);
            }
          }}
          aria-label="Go to section {index + 1}"
        >
          <span class="dot-inner"></span>
        </button>
      {/each}
    </div>

    <!-- Scroll hint (only on first section) -->
    {#if $currentSection === 0}
      <div class="scroll-hint" transition:fade={{ duration: 300 }}>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    {/if}
  {/if}
</main>

<style>
  .fullpage-container {
    position: fixed;
    inset: 0;
    background-color: var(--bg-base);
    overflow: hidden;
  }

  .sections-viewport {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .section-wrapper {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .section-wrapper > :global(section) {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Progress dots */
  .progress-dots {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 100;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: transparent;
    border: 1.5px solid var(--text-muted);
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
    position: relative;
  }

  .dot:hover {
    border-color: var(--color-primary);
    transform: scale(1.2);
  }

  .dot.active {
    border-color: var(--color-primary);
  }

  .dot-inner {
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: var(--gradient-primary);
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  .dot.active .dot-inner {
    transform: scale(1);
  }

  /* Scroll hint */
  .scroll-hint {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-muted);
    font-size: var(--text-sm);
    z-index: 100;
    animation: float-hint 2s ease-in-out infinite;
  }

  .mouse {
    width: 24px;
    height: 38px;
    border: 2px solid var(--text-muted);
    border-radius: 12px;
    position: relative;
  }

  .wheel {
    width: 4px;
    height: 8px;
    background: var(--color-primary);
    border-radius: 2px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll-wheel 1.5s ease-in-out infinite;
  }

  @keyframes scroll-wheel {
    0%, 100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    50% {
      opacity: 0.3;
      transform: translateX(-50%) translateY(10px);
    }
  }

  @keyframes float-hint {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-8px);
    }
  }

  @media (max-width: 768px) {
    .progress-dots {
      right: 1rem;
      gap: 0.75rem;
    }

    .dot {
      width: 10px;
      height: 10px;
    }

    .scroll-hint {
      bottom: 1.5rem;
      font-size: var(--text-xs);
    }

    .mouse {
      width: 20px;
      height: 32px;
    }
  }
</style>
