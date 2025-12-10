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
  let glowElement: HTMLDivElement;
  let animationFrame: number;
  let rotation = 0;

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
    const isInteractive = target.closest('a, button, [role="button"], .project-card, .publication-item, .skill-tag, .contact-link, .contact-button, .nav-item, .bento-card, input, textarea');
    isHovering = !!isInteractive;
  }

  function animate() {
    const ease = 0.12;
    cursorX += (targetX - cursorX) * ease;
    cursorY += (targetY - cursorY) * ease;
    rotation += isHovering ? 3 : 1;

    if (cursorElement) {
      const scale = isClicking ? 0.7 : isHovering ? 1.4 : 1;
      cursorElement.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
    }

    if (glowElement) {
      const glowScale = isHovering ? 1.5 : 1;
      glowElement.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%) scale(${glowScale})`;
    }

    animationFrame = requestAnimationFrame(animate);
  }

  onMount(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousemove', checkHoverState);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      animate();

      document.body.style.cursor = 'none';
      const style = document.createElement('style');
      style.textContent = '*, *::before, *::after { cursor: none !important; }';
      style.id = 'cursor-hide';
      document.head.appendChild(style);
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
      document.getElementById('cursor-hide')?.remove();
    }
  });
</script>

<div class="cursor-container" class:visible={isVisible}>
  <!-- Glow effect -->
  <div
    bind:this={glowElement}
    class="cursor-glow"
    class:hovering={isHovering}
  ></div>

  <!-- Main cursor shape -->
  <div
    bind:this={cursorElement}
    class="cursor-shape"
    class:hovering={isHovering}
    class:clicking={isClicking}
  >
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Diamond shape with gradient -->
      <defs>
        <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#818CF8" />
          <stop offset="50%" stop-color="#F472B6" />
          <stop offset="100%" stop-color="#34D399" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        fill="url(#cursor-gradient)"
        stroke="white"
        stroke-width="0.5"
        stroke-opacity="0.3"
      />
      <!-- Inner accent -->
      <path
        d="M12 6L18 12L12 18L6 12L12 6Z"
        fill="white"
        fill-opacity="0.2"
      />
    </svg>
  </div>

  <!-- Orbiting particles -->
  <div class="cursor-particles" class:hovering={isHovering} style="--x: {cursorX}px; --y: {cursorY}px;">
    <span class="particle p1"></span>
    <span class="particle p2"></span>
    <span class="particle p3"></span>
  </div>
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

  .cursor-shape {
    width: 20px;
    height: 20px;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);
    filter: drop-shadow(0 0 6px rgba(129, 140, 248, 0.6));
  }

  .cursor-shape svg {
    width: 100%;
    height: 100%;
  }

  .cursor-shape.hovering {
    filter: drop-shadow(0 0 12px rgba(244, 114, 182, 0.8));
  }

  .cursor-shape.clicking {
    filter: drop-shadow(0 0 16px rgba(52, 211, 153, 1));
  }

  .cursor-glow {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    background: radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
    opacity: 0.6;
  }

  .cursor-glow.hovering {
    background: radial-gradient(circle, rgba(244, 114, 182, 0.2) 0%, transparent 70%);
    opacity: 1;
  }

  /* Orbiting particles */
  .cursor-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    transform: translate(var(--x), var(--y));
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .cursor-particles.hovering .particle {
    opacity: 1;
  }

  .p1 {
    background: #818CF8;
    animation: orbit1 2s linear infinite;
  }

  .p2 {
    background: #F472B6;
    animation: orbit2 2.5s linear infinite;
  }

  .p3 {
    background: #34D399;
    animation: orbit3 3s linear infinite;
  }

  @keyframes orbit1 {
    from { transform: rotate(0deg) translateX(18px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(18px) rotate(-360deg); }
  }

  @keyframes orbit2 {
    from { transform: rotate(120deg) translateX(22px) rotate(-120deg); }
    to { transform: rotate(480deg) translateX(22px) rotate(-480deg); }
  }

  @keyframes orbit3 {
    from { transform: rotate(240deg) translateX(26px) rotate(-240deg); }
    to { transform: rotate(600deg) translateX(26px) rotate(-600deg); }
  }

  @media (pointer: coarse), (max-width: 768px) {
    .cursor-container {
      display: none;
    }
  }
</style>
