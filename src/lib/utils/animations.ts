import { animate, stagger, spring } from 'motion';

// ============================================
// SCROLL ANIMATION HELPER - triggers animation when section enters viewport
// ============================================
type RevealFunction = (selector: string, options?: { delay?: number; staggerDelay?: number }) => void;

export function setupScrollAnimation(
  sectionId: string,
  cardSelector: string,
  revealFn: RevealFunction,
  options: { delay?: number; staggerDelay?: number } = {}
): void {
  const section = document.querySelector(sectionId);
  const cards = document.querySelectorAll<HTMLElement>(cardSelector);

  if (!section || !cards.length) return;

  // Mark as not yet animated
  if (section.getAttribute('data-animated') === 'true') return;

  // Set initial hidden state for all cards
  cards.forEach((el) => {
    el.style.opacity = '0';
    el.style.visibility = 'hidden';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && section.getAttribute('data-animated') !== 'true') {
          // Mark as animated to prevent re-triggering
          section.setAttribute('data-animated', 'true');

          // Make cards visible (but still opacity 0)
          cards.forEach((el) => {
            el.style.visibility = 'visible';
          });

          // Run the reveal animation
          revealFn(cardSelector, options);

          // Cleanup observer
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px' // Trigger slightly before fully in view
    }
  );

  observer.observe(section);
}

// Helper to check if on mobile
export function isMobile(): boolean {
  return typeof window !== 'undefined' && window.innerWidth < 768;
}

// ============================================
// ABOUT: Spiral inward - cards orbit from circular positions
// ============================================
export function spiralReveal(selector: string, options: { delay?: number; staggerDelay?: number } = {}) {
  const { delay = 0, staggerDelay = 70 } = options;
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  elements.forEach((el, i) => {
    const angle = (i * 45) + (i * 15); // spiral angle
    const radius = 120 + (i * 20);
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    const rotate = (angle % 30) - 15;

    el.style.opacity = '0';
    el.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(0.7)`;
    el.style.transition = 'none';
  });

  setTimeout(() => {
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      }, i * staggerDelay);
    });
  }, delay);
}

// ============================================
// WORK: Chaotic explosion - intense scatter with depth illusion
// ============================================
export function chaoticReveal(selector: string, options: { delay?: number; staggerDelay?: number } = {}) {
  const { delay = 0, staggerDelay = 40 } = options;
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  const chaos = [
    { x: -150, y: -100, rotate: -25, scale: 0.5 },
    { x: 180, y: -80, rotate: 20, scale: 0.6 },
    { x: -120, y: 120, rotate: 15, scale: 0.55 },
    { x: 200, y: 90, rotate: -18, scale: 0.65 },
    { x: -60, y: -150, rotate: 30, scale: 0.5 },
    { x: 100, y: 160, rotate: -22, scale: 0.6 },
    { x: -200, y: 40, rotate: 12, scale: 0.55 },
    { x: 160, y: -130, rotate: -28, scale: 0.5 },
    { x: -80, y: 180, rotate: 25, scale: 0.6 },
    { x: 220, y: 20, rotate: -15, scale: 0.55 },
  ];

  elements.forEach((el, i) => {
    const c = chaos[i % chaos.length];
    el.style.opacity = '0';
    el.style.transform = `translate(${c.x}px, ${c.y}px) rotate(${c.rotate}deg) scale(${c.scale})`;
    el.style.filter = 'blur(4px)';
    el.style.transition = 'none';
  });

  setTimeout(() => {
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out, filter 0.5s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        el.style.filter = 'blur(0px)';
      }, i * staggerDelay);
    });
  }, delay);
}

// ============================================
// PROJECTS: Cascade waterfall - wave from top with horizontal sway
// ============================================
export function cascadeReveal(selector: string, options: { delay?: number; staggerDelay?: number } = {}) {
  const { delay = 0, staggerDelay = 100 } = options;
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  elements.forEach((el, i) => {
    const waveX = Math.sin(i * 0.8) * 60;
    const y = -80 - (i * 30);

    el.style.opacity = '0';
    el.style.transform = `translate(${waveX}px, ${y}px) rotateX(25deg) scale(0.9)`;
    el.style.transformOrigin = 'center top';
    el.style.transition = 'none';
  });

  setTimeout(() => {
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.5s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0) rotateX(0deg) scale(1)';
      }, i * staggerDelay);
    });
  }, delay);
}

// ============================================
// PUBLICATIONS: 3D flip - cards flip from rotated 3D space
// ============================================
export function flipReveal(selector: string, options: { delay?: number; staggerDelay?: number } = {}) {
  const { delay = 0, staggerDelay = 120 } = options;
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  const flips = [
    { rotateY: -90, rotateX: 15, x: -50 },
    { rotateY: 90, rotateX: -10, x: 50 },
    { rotateY: -60, rotateX: 20, x: -30 },
    { rotateY: 75, rotateX: -15, x: 40 },
  ];

  elements.forEach((el, i) => {
    const f = flips[i % flips.length];
    el.style.opacity = '0';
    el.style.transform = `perspective(800px) translateX(${f.x}px) rotateY(${f.rotateY}deg) rotateX(${f.rotateX}deg)`;
    el.style.transformOrigin = 'center center';
    el.style.transition = 'none';
  });

  setTimeout(() => {
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'perspective(800px) translateX(0) rotateY(0deg) rotateX(0deg)';
      }, i * staggerDelay);
    });
  }, delay);
}

// ============================================
// CONTACT: Rise up - cards rise from below with elastic bounce
// ============================================
export function riseReveal(selector: string, options: { delay?: number; staggerDelay?: number } = {}) {
  const { delay = 0, staggerDelay = 70 } = options;
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  elements.forEach((el, i) => {
    const offsetY = 100 + (i * 15);
    const offsetX = (i % 2 === 0 ? -1 : 1) * (10 + i * 5);

    el.style.opacity = '0';
    el.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.85)`;
    el.style.transition = 'none';
  });

  setTimeout(() => {
    elements.forEach((el, i) => {
      setTimeout(() => {
        // Elastic bounce easing
        el.style.transition = 'transform 0.9s cubic-bezier(0.34, 1.8, 0.64, 1), opacity 0.5s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0) scale(1)';
      }, i * staggerDelay);
    });
  }, delay);
}

// ============================================
// GENERIC: Original puzzle for fallback
// ============================================
export function puzzleReveal(selector: string, options: { delay?: number; staggerDelay?: number } = {}) {
  const { delay = 0, staggerDelay = 80 } = options;
  const elements = document.querySelectorAll<HTMLElement>(selector);
  if (!elements.length) return;

  const offsets = [
    { x: -80, y: -60, rotate: -8 },
    { x: 80, y: -50, rotate: 6 },
    { x: -70, y: 60, rotate: 5 },
    { x: 90, y: 50, rotate: -7 },
    { x: 0, y: -80, rotate: 4 },
    { x: 0, y: 70, rotate: -5 },
  ];

  elements.forEach((el, i) => {
    const o = offsets[i % offsets.length];
    el.style.opacity = '0';
    el.style.transform = `translate(${o.x}px, ${o.y}px) rotate(${o.rotate}deg) scale(0.9)`;
    el.style.transition = 'none';
  });

  setTimeout(() => {
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      }, i * staggerDelay);
    });
  }, delay);
}

export function transitionSection(direction: number) {
  animate(
    '.section-content',
    { 
      opacity: [0, 1],
      y: [direction * 50, 0]
    },
    { 
      duration: 0.8,
      easing: spring({ stiffness: 100, damping: 15 })
    }
  );
}

export function animateList(selector: string) {
  animate(
    selector,
    { 
      opacity: [0, 1],
      x: [-20, 0]
    },
    { 
      delay: stagger(0.1),
      duration: 0.5,
      easing: [0.22, 1, 0.36, 1]
    }
  );
}

export function setupHoverEffects() {
  const cards = document.querySelectorAll('.interactive-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animate(card, { 
        scale: 1.02,
        boxShadow: 'var(--shadow-lg)'
      }, { duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', () => {
      animate(card, { 
        scale: 1,
        boxShadow: 'var(--shadow-md)'
      }, { duration: 0.3 });
    });
  });
}

export function revealText(element: HTMLElement) {
  const letters = element.textContent?.split('') || [];
  element.innerHTML = letters.map(letter => 
    `<span style="opacity: 0">${letter}</span>`
  ).join('');
  
  animate(
    element.querySelectorAll('span'),
    { opacity: 1 },
    { delay: stagger(0.03), duration: 0.5 }
  );
}

export function fadeIn(node: HTMLElement, { delay = 0, duration = 300 } = {}) {
  return {
    delay,
    duration,
    css: (t: number) => `opacity: ${t}`
  };
}

export function fly(node: HTMLElement, {
  delay = 0,
  duration = 400,
  easing = (t: number) => t,
  x = 0,
  y = 0,
  opacity = 0
} = {}) {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;
  const od = +style.opacity;
  const dx = x;
  const dy = y;
  const do_ = od - opacity;

  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `
      transform: ${transform} translate(${(1 - t) * dx}px, ${(1 - t) * dy}px);
      opacity: ${od - (do_ * u)}
    `
  };
}