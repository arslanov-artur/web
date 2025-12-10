<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
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
    currentPosition,
    isTransitioning,
    transitionDirection,
    handleWheel,
    handleKeyboard,
    handleTouchStart,
    handleTouchEnd,
    grid,
    navigateToPosition
  } from './lib/stores/navigation';
  import { theme } from './lib/stores/theme';

  let mounted = false;
  let isMobile = false;

  // All sections for mobile scroll
  const allSections = [
    { id: 'home', component: Hero },
    { id: 'about', component: About },
    { id: 'work', component: Work },
    { id: 'projects', component: Projects },
    { id: 'publications', component: Publications },
    { id: 'contact', component: Contact }
  ];

  function checkMobile() {
    isMobile = window.innerWidth < 768;
  }

  // Intersection observer for mobile scroll animations
  function observeSections() {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.mobile-section').forEach((section) => {
      observer.observe(section);
    });
  }

  // Map components to grid positions
  const componentMap: Record<string, any> = {
    'home': Hero,
    'about': About,
    'work': Work,
    'projects': Projects,
    'publications': Publications,
    'contact': Contact
  };

  function getCurrentComponent(pos: { row: number; col: number }) {
    const section = grid[pos.row]?.[pos.col];
    return section ? componentMap[section.id] : null;
  }

  onMount(() => {
    mounted = true;
    theme.init();
    checkMobile();

    window.addEventListener('resize', checkMobile);

    // Only add fullpage scroll handlers on desktop
    if (!isMobile) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyboard);
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
      document.body.style.overflow = 'hidden';
    } else {
      // Setup intersection observer for mobile scroll animations
      setTimeout(observeSections, 100);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyboard);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = '';
    }
  });

  // Smooth slide + fade transition inspired by premium agency sites
  function slideTransition(node: Element, { direction, duration = 500 }: { direction: 'up' | 'down' | 'left' | 'right', duration?: number }) {
    const isVertical = direction === 'up' || direction === 'down';
    const isPositive = direction === 'down' || direction === 'right';

    return {
      duration,
      easing: cubicOut,
      css: (t: number) => {
        // Smooth slide with scale for depth effect
        const slideAmount = (1 - t) * (isPositive ? 6 : -6);
        const scale = 0.98 + (t * 0.02);
        const translate = isVertical
          ? `translateY(${slideAmount}%)`
          : `translateX(${slideAmount}%)`;

        return `
          transform: ${translate} scale(${scale});
          opacity: ${t};
        `;
      }
    };
  }

  function getOutDirection(dir: 'up' | 'down' | 'left' | 'right'): 'up' | 'down' | 'left' | 'right' {
    switch (dir) {
      case 'down': return 'up';
      case 'up': return 'down';
      case 'right': return 'left';
      case 'left': return 'right';
    }
  }

  // Get flat index for dots
  function getFlatIndex(pos: { row: number; col: number }): number {
    let index = 0;
    for (let r = 0; r < pos.row; r++) {
      index += grid[r].length;
    }
    return index + pos.col;
  }

  function getPositionFromIndex(index: number): { row: number; col: number } {
    let remaining = index;
    for (let r = 0; r < grid.length; r++) {
      if (remaining < grid[r].length) {
        return { row: r, col: remaining };
      }
      remaining -= grid[r].length;
    }
    return { row: 0, col: 0 };
  }

  $: currentComponent = getCurrentComponent($currentPosition);
  $: currentFlatIndex = getFlatIndex($currentPosition);
  $: totalSections = grid.flat().length;
  $: currentRow = grid[$currentPosition.row];
  $: hasHorizontalNav = currentRow && currentRow.length > 1;
</script>

{#if mounted}
  {#if isMobile}
    <!-- Mobile: Simple scroll layout -->
    <main class="mobile-container">
      {#each allSections as section (section.id)}
        <div class="mobile-section" id={section.id}>
          <svelte:component this={section.component} />
        </div>
      {/each}
    </main>
  {:else}
    <!-- Desktop: Fullpage scroll -->
    <main class="fullpage-container">
      <CustomCursor />
      <Navigation />

      <div class="sections-viewport">
        {#key `${$currentPosition.row}-${$currentPosition.col}`}
          <div
            class="section-wrapper"
            in:slideTransition={{ direction: $transitionDirection, duration: 500 }}
            out:slideTransition={{ direction: getOutDirection($transitionDirection), duration: 500 }}
          >
            <svelte:component this={currentComponent} />
          </div>
        {/key}
      </div>

      <!-- Navigation indicators -->
      <div class="nav-indicators">
        <div class="vertical-dots">
          {#each grid as row, rowIndex}
            <button
              class="row-dot"
              class:active={$currentPosition.row === rowIndex}
              class:has-cols={row.length > 1}
              on:click={() => {
                if (!$isTransitioning) {
                  const direction = rowIndex > $currentPosition.row ? 'down' : 'up';
                  navigateToPosition({ row: rowIndex, col: 0 }, direction);
                }
              }}
              aria-label="Go to row {rowIndex + 1}"
            >
              <span class="dot-inner"></span>
              {#if row.length > 1 && $currentPosition.row === rowIndex}
                <div class="col-indicators">
                  {#each row as _, colIndex}
                    <span
                      class="col-dot"
                      class:active={$currentPosition.col === colIndex}
                    ></span>
                  {/each}
                </div>
              {/if}
            </button>
          {/each}
        </div>

        {#if hasHorizontalNav}
          <div class="direction-hint horizontal">
            {#if $currentPosition.col > 0}
              <span class="hint-arrow left">←</span>
            {/if}
            {#if $currentPosition.col < currentRow.length - 1}
              <span class="hint-arrow right">→</span>
            {/if}
          </div>
        {/if}
      </div>
    </main>
  {/if}
{/if}

<style>
  /* Mobile: Simple scroll */
  .mobile-container {
    min-height: 100vh;
    background-color: var(--bg-base);
    overflow-x: hidden;
  }

  .mobile-section {
    min-height: auto !important;
    height: auto !important;
    opacity: 1;
    transform: none;
    display: block;
  }

  /* Desktop: Fullpage scroll */
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
    perspective: 1200px;
    perspective-origin: center center;
  }

  .section-wrapper {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    will-change: transform, opacity;
  }

  .section-wrapper > :global(section) {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Override for mobile sections */
  .mobile-section > :global(section) {
    height: auto !important;
    min-height: auto !important;
    display: block !important;
  }

  /* Navigation indicators - premium style */
  .nav-indicators {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .vertical-dots {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.75rem 0.5rem;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    border: 1px solid var(--glass-border);
  }

  .row-dot {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--text-muted);
    opacity: 0.4;
    cursor: pointer;
    padding: 0;
    border: none;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .row-dot:hover {
    opacity: 0.8;
    transform: scale(1.3);
  }

  .row-dot.active {
    opacity: 1;
    background: var(--color-primary);
    box-shadow: 0 0 12px var(--color-primary);
  }

  .row-dot.has-cols.active {
    width: auto;
    height: auto;
    padding: 6px 10px;
    border-radius: 20px;
    gap: 6px;
    background: var(--color-primary);
  }

  .dot-inner {
    display: none;
  }

  .col-indicators {
    display: flex;
    gap: 6px;
  }

  .col-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
  }

  .col-dot.active {
    background: white;
    transform: scale(1.2);
  }

  /* Direction hints */
  .direction-hint {
    position: fixed;
    display: flex;
    gap: 1rem;
    color: var(--text-muted);
    font-size: var(--text-sm);
    pointer-events: none;
    animation: fade-pulse 2s ease-in-out infinite;
  }

  .direction-hint.horizontal {
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .hint-arrow {
    opacity: 0.5;
  }

  @keyframes fade-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* Scroll hint */
  .scroll-hint {
    position: fixed;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    z-index: 100;
    opacity: 0.6;
  }

  .mouse {
    width: 22px;
    height: 34px;
    border: 1.5px solid var(--text-muted);
    border-radius: 11px;
    position: relative;
    opacity: 0.8;
  }

  .wheel {
    width: 3px;
    height: 6px;
    background: var(--color-primary);
    border-radius: 2px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll-wheel 2s ease-in-out infinite;
  }

  @keyframes scroll-wheel {
    0%, 100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    50% {
      opacity: 0;
      transform: translateX(-50%) translateY(8px);
    }
  }

  @media (max-width: 768px) {
    .nav-indicators {
      right: 1rem;
    }

    .vertical-dots {
      gap: 0.5rem;
      padding: 0.5rem 0.375rem;
    }

    .row-dot {
      width: 8px;
      height: 8px;
    }

    .row-dot.has-cols.active {
      padding: 4px 8px;
    }

    .col-dot {
      width: 5px;
      height: 5px;
    }

    .scroll-hint {
      bottom: 1.5rem;
      font-size: 10px;
    }

    .mouse {
      width: 18px;
      height: 28px;
    }

    .direction-hint {
      font-size: var(--text-xs);
    }
  }
</style>
