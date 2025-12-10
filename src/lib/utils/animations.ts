import { animate, stagger, spring } from 'motion';

// Puzzle directions for scatter effect
const puzzleOffsets = [
  { x: -80, y: -60, rotate: -8 },   // top-left
  { x: 80, y: -50, rotate: 6 },     // top-right
  { x: -70, y: 60, rotate: 5 },     // bottom-left
  { x: 90, y: 50, rotate: -7 },     // bottom-right
  { x: 0, y: -80, rotate: 4 },      // top
  { x: 0, y: 70, rotate: -5 },      // bottom
  { x: -100, y: 0, rotate: -6 },    // left
  { x: 100, y: 0, rotate: 7 },      // right
  { x: -60, y: -40, rotate: 3 },    // variations
  { x: 70, y: 40, rotate: -4 },
  { x: -50, y: 50, rotate: 6 },
  { x: 60, y: -60, rotate: -5 },
];

export function puzzleReveal(selector: string, options: { delay?: number; staggerDelay?: number } = {}) {
  const { delay = 0, staggerDelay = 80 } = options;
  const elements = document.querySelectorAll<HTMLElement>(selector);

  if (!elements.length) return;

  // Set initial scattered state
  elements.forEach((el, i) => {
    const offset = puzzleOffsets[i % puzzleOffsets.length];
    el.style.opacity = '0';
    el.style.transform = `translate(${offset.x}px, ${offset.y}px) rotate(${offset.rotate}deg) scale(0.9)`;
    el.style.transition = 'none';
  });

  // Animate each element with stagger
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