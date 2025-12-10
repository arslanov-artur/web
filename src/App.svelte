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

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyboard);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

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

  // Transition based on direction - experimental animations
  function slideTransition(node: Element, { direction, duration = 500 }: { direction: 'up' | 'down' | 'left' | 'right', duration?: number }) {
    const isVertical = direction === 'up' || direction === 'down';
    const isPositive = direction === 'down' || direction === 'right';

    return {
      duration,
      easing: cubicOut,
      css: (t: number) => {
        // Smooth eased value
        const eased = t;

        // 3D rotation effect
        const rotateAxis = isVertical ? 'X' : 'Y';
        const rotateAmount = (1 - eased) * (isPositive ? -15 : 15);

        // Slide distance (smaller, more subtle)
        const slideAmount = (1 - eased) * (isPositive ? 30 : -30);
        const translate = isVertical
          ? `translateY(${slideAmount}vh)`
          : `translateX(${slideAmount}vw)`;

        // Scale from slightly smaller
        const scale = 0.92 + (0.08 * eased);

        // Blur during transition
        const blur = (1 - eased) * 8;

        return `
          transform: ${translate} rotate${rotateAxis}(${rotateAmount}deg) scale(${scale});
          opacity: ${eased};
          filter: blur(${blur}px);
          transform-style: preserve-3d;
          perspective: 1200px;
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

<main class="fullpage-container">
  {#if mounted}
    <CustomCursor />
    <Navigation />
    <ThemeToggle />

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
      <!-- Vertical dots (rows) -->
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

      <!-- Direction hints -->
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

    <!-- Scroll hint (only on first section) -->
    {#if $currentPosition.row === 0 && $currentPosition.col === 0}
      <div class="scroll-hint">
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
    will-change: transform, opacity, filter;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .section-wrapper > :global(section) {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Navigation indicators */
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
    gap: 1rem;
  }

  .row-dot {
    position: relative;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: transparent;
    border: 1.5px solid var(--text-muted);
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .row-dot:hover {
    border-color: var(--color-primary);
    transform: scale(1.2);
  }

  .row-dot.active {
    border-color: var(--color-primary);
  }

  .row-dot.has-cols.active {
    width: auto;
    height: auto;
    padding: 4px 8px;
    border-radius: 20px;
    gap: 4px;
  }

  .dot-inner {
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: var(--gradient-primary);
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  .row-dot.active:not(.has-cols) .dot-inner {
    transform: scale(1);
  }

  .row-dot.has-cols .dot-inner {
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
    background: var(--text-muted);
    transition: all 0.3s ease;
  }

  .col-dot.active {
    background: var(--gradient-primary);
    transform: scale(1.3);
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
    .nav-indicators {
      right: 1rem;
      gap: 0.5rem;
    }

    .vertical-dots {
      gap: 0.75rem;
    }

    .row-dot {
      width: 10px;
      height: 10px;
    }

    .row-dot.has-cols.active {
      padding: 3px 6px;
    }

    .col-dot {
      width: 5px;
      height: 5px;
    }

    .scroll-hint {
      bottom: 1.5rem;
      font-size: var(--text-xs);
    }

    .mouse {
      width: 20px;
      height: 32px;
    }

    .direction-hint {
      font-size: var(--text-xs);
    }
  }
</style>
