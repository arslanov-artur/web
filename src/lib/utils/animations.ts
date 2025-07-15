import { animate, stagger, spring } from 'motion';

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