import { writable, get } from 'svelte/store';

export const currentSection = writable(0);
export const isTransitioning = writable(false);
export const transitionDirection = writable<'up' | 'down'>('down');
export const totalSections = 6;

let scrollAccumulator = 0;
let lastScrollTime = Date.now();
const SCROLL_THRESHOLD = 50;
const TRANSITION_DURATION = 800;

export function navigateToSection(index: number) {
  if (get(isTransitioning) || index < 0 || index >= totalSections) return;

  const current = get(currentSection);
  if (index === current) return;

  transitionDirection.set(index > current ? 'down' : 'up');
  isTransitioning.set(true);
  currentSection.set(index);

  setTimeout(() => {
    isTransitioning.set(false);
    scrollAccumulator = 0;
  }, TRANSITION_DURATION);
}

export function handleWheel(event: WheelEvent) {
  event.preventDefault();

  if (get(isTransitioning)) return;

  const now = Date.now();
  if (now - lastScrollTime > 200) {
    scrollAccumulator = 0;
  }

  scrollAccumulator += event.deltaY;
  lastScrollTime = now;

  if (Math.abs(scrollAccumulator) >= SCROLL_THRESHOLD) {
    const direction = scrollAccumulator > 0 ? 1 : -1;
    scrollAccumulator = 0;

    const current = get(currentSection);
    const next = current + direction;
    if (next >= 0 && next < totalSections) {
      navigateToSection(next);
    }
  }
}

export function handleKeyboard(event: KeyboardEvent) {
  if (get(isTransitioning)) return;

  const current = get(currentSection);

  switch(event.key) {
    case 'ArrowDown':
    case 'PageDown':
    case ' ':
      event.preventDefault();
      if (current < totalSections - 1) {
        navigateToSection(current + 1);
      }
      break;
    case 'ArrowUp':
    case 'PageUp':
      event.preventDefault();
      if (current > 0) {
        navigateToSection(current - 1);
      }
      break;
    case 'Home':
      event.preventDefault();
      navigateToSection(0);
      break;
    case 'End':
      event.preventDefault();
      navigateToSection(totalSections - 1);
      break;
  }
}

// Touch support
let touchStartY = 0;
let touchEndY = 0;

export function handleTouchStart(event: TouchEvent) {
  touchStartY = event.touches[0].clientY;
}

export function handleTouchEnd(event: TouchEvent) {
  if (get(isTransitioning)) return;

  touchEndY = event.changedTouches[0].clientY;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > 50) {
    const current = get(currentSection);
    if (diff > 0 && current < totalSections - 1) {
      navigateToSection(current + 1);
    } else if (diff < 0 && current > 0) {
      navigateToSection(current - 1);
    }
  }
}