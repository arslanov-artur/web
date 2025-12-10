import { writable, get } from 'svelte/store';

export const currentSection = writable(0);
export const isTransitioning = writable(false);
export const transitionDirection = writable<'up' | 'down'>('down');
export const totalSections = 6;

const TRANSITION_DURATION = 800;
const COOLDOWN_AFTER_TRANSITION = 300;

let lastNavigationTime = 0;
let isInCooldown = false;

export function navigateToSection(index: number) {
  if (get(isTransitioning) || isInCooldown || index < 0 || index >= totalSections) return;

  const current = get(currentSection);
  if (index === current) return;

  lastNavigationTime = Date.now();
  transitionDirection.set(index > current ? 'down' : 'up');
  isTransitioning.set(true);
  currentSection.set(index);

  setTimeout(() => {
    isTransitioning.set(false);
    // Add cooldown period after transition
    isInCooldown = true;
    setTimeout(() => {
      isInCooldown = false;
    }, COOLDOWN_AFTER_TRANSITION);
  }, TRANSITION_DURATION);
}

export function handleWheel(event: WheelEvent) {
  event.preventDefault();

  // Block during transition and cooldown
  if (get(isTransitioning) || isInCooldown) return;

  // Only respond to significant scroll delta
  const delta = event.deltaY;
  if (Math.abs(delta) < 30) return;

  const current = get(currentSection);
  const direction = delta > 0 ? 1 : -1;
  const next = current + direction;

  if (next >= 0 && next < totalSections) {
    navigateToSection(next);
  }
}

export function handleKeyboard(event: KeyboardEvent) {
  if (get(isTransitioning) || isInCooldown) return;

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

export function handleTouchStart(event: TouchEvent) {
  touchStartY = event.touches[0].clientY;
}

export function handleTouchEnd(event: TouchEvent) {
  if (get(isTransitioning) || isInCooldown) return;

  const touchEndY = event.changedTouches[0].clientY;
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
