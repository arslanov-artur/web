<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let cursorX = 0;
  let cursorY = 0;
  let targetX = 0;
  let targetY = 0;
  let isHovering = false;
  let isClicking = false;
  let isVisible = false;
  let cursorElement: HTMLDivElement;
  let trailElement: HTMLDivElement;
  let animationFrame: number;

  function handleMouseMove(e: MouseEvent) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!isVisible) isVisible = true;
  }

  function handleMouseEnter() {
    isVisible = true;
  }

  function handleMouseLeave() {
    isVisible = false;
  }

  function handleMouseDown() {
    isClicking = true;
  }

  function handleMouseUp() {
    isClicking = false;
  }

  function checkHoverState(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, [role="button"], .project-card, .publication-item, .skill-tag, .contact-link, .contact-button, .nav-item, input, textarea');
    isHovering = !!isInteractive;
  }

  function animate() {
    // Smooth interpolation
    const ease = 0.15;
    cursorX += (targetX - cursorX) * ease;
    cursorY += (targetY - cursorY) * ease;

    if (cursorElement) {
      cursorElement.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`;
    }

    if (trailElement) {
      trailElement.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${isHovering ? 2 : 1})`;
    }

    animationFrame = requestAnimationFrame(animate);
  }

  onMount(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousemove', checkHoverState);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      animate();

      // Hide default cursor
      document.body.style.cursor = 'none';
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
      });
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', checkHoverState);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrame);
      document.body.style.cursor = '';
    }
  });
</script>

<div class="cursor-container" class:visible={isVisible}>
  <div
    bind:this={trailElement}
    class="cursor-trail"
    class:hovering={isHovering}
  ></div>
  <div
    bind:this={cursorElement}
    class="cursor-dot"
    class:hovering={isHovering}
    class:clicking={isClicking}
  ></div>
</div>

<style>
  .cursor-container {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .cursor-container.visible {
    opacity: 1;
  }

  .cursor-dot {
    width: 8px;
    height: 8px;
    background: var(--gradient-primary);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
    mix-blend-mode: difference;
  }

  .cursor-dot.hovering {
    width: 12px;
    height: 12px;
    background: white;
  }

  .cursor-dot.clicking {
    transform: scale(0.8);
  }

  .cursor-trail {
    width: 32px;
    height: 32px;
    border: 1px solid var(--color-primary);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s ease, opacity 0.2s ease;
    opacity: 0.5;
  }

  .cursor-trail.hovering {
    border-color: var(--color-accent-1);
    opacity: 0.8;
  }

  /* Hide on touch devices and small screens */
  @media (pointer: coarse), (max-width: 768px) {
    .cursor-container {
      display: none;
    }
  }
</style>
