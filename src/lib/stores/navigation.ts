import { writable, get } from 'svelte/store';

// Linear section order with transition directions
export const sections = [
  { id: 'home', name: 'Hero', transitionIn: 'down' },
  { id: 'about', name: 'About', transitionIn: 'down' },
  { id: 'work', name: 'Work', transitionIn: 'right' },
  { id: 'projects', name: 'Projects', transitionIn: 'right' },
  { id: 'publications', name: 'Publications', transitionIn: 'down' },
  { id: 'contact', name: 'Contact', transitionIn: 'down' }
] as const;

export type TransitionDirection = 'up' | 'down' | 'left' | 'right';

export const currentSection = writable(0);
export const isTransitioning = writable(false);
export const transitionDirection = writable<TransitionDirection>('down');
export const totalSections = sections.length;

const TRANSITION_DURATION = 500;
const COOLDOWN_AFTER_TRANSITION = 200;

let isInCooldown = false;

// Scroll accumulation for smoother trackpad handling
let scrollAccumulator = 0;
let lastScrollTime = 0;
const SCROLL_THRESHOLD = 80;
const SCROLL_RESET_DELAY = 150;

function getTransitionDirection(fromIndex: number, toIndex: number): TransitionDirection {
  if (toIndex > fromIndex) {
    // Moving forward - use the target section's transitionIn
    return sections[toIndex].transitionIn as TransitionDirection;
  } else {
    // Moving backward - reverse the direction
    const forwardDir = sections[fromIndex].transitionIn;
    switch (forwardDir) {
      case 'down': return 'up';
      case 'up': return 'down';
      case 'right': return 'left';
      case 'left': return 'right';
      default: return 'up';
    }
  }
}

export function navigateToSection(index: number) {
  if (get(isTransitioning) || isInCooldown) return;
  if (index < 0 || index >= totalSections) return;

  const current = get(currentSection);
  if (index === current) return;

  const direction = getTransitionDirection(current, index);
  transitionDirection.set(direction);
  isTransitioning.set(true);
  currentSection.set(index);

  setTimeout(() => {
    isTransitioning.set(false);
    isInCooldown = true;
    setTimeout(() => {
      isInCooldown = false;
    }, COOLDOWN_AFTER_TRANSITION);
  }, TRANSITION_DURATION);
}

export function handleWheel(event: WheelEvent) {
  event.preventDefault();

  if (get(isTransitioning) || isInCooldown) return;

  const now = Date.now();
  const delta = event.deltaY;

  // Reset accumulator if too much time has passed
  if (now - lastScrollTime > SCROLL_RESET_DELAY) {
    scrollAccumulator = 0;
  }
  lastScrollTime = now;

  // Accumulate scroll delta
  scrollAccumulator += delta;

  // Only trigger when threshold is reached
  if (Math.abs(scrollAccumulator) < SCROLL_THRESHOLD) return;

  const current = get(currentSection);
  const direction = scrollAccumulator > 0 ? 1 : -1;
  const next = current + direction;

  // Reset accumulator after triggering
  scrollAccumulator = 0;

  if (next >= 0 && next < totalSections) {
    navigateToSection(next);
  }
}

export function handleKeyboard(event: KeyboardEvent) {
  if (get(isTransitioning) || isInCooldown) return;

  const current = get(currentSection);

  switch(event.key) {
    case 'ArrowDown':
    case 'ArrowRight':
    case 'PageDown':
    case ' ':
      event.preventDefault();
      if (current < totalSections - 1) {
        navigateToSection(current + 1);
      }
      break;
    case 'ArrowUp':
    case 'ArrowLeft':
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

// Touch support with velocity detection
let touchStartY = 0;
let touchStartX = 0;
let touchStartTime = 0;

export function handleTouchStart(event: TouchEvent) {
  touchStartY = event.touches[0].clientY;
  touchStartX = event.touches[0].clientX;
  touchStartTime = Date.now();
}

export function handleTouchEnd(event: TouchEvent) {
  if (get(isTransitioning) || isInCooldown) return;

  const touchEndY = event.changedTouches[0].clientY;
  const touchEndX = event.changedTouches[0].clientX;
  const elapsed = Date.now() - touchStartTime;

  const diffY = touchStartY - touchEndY;
  const diffX = touchStartX - touchEndX;

  // Calculate velocity (faster swipes need less distance)
  const velocityY = Math.abs(diffY) / elapsed;
  const minDistance = velocityY > 0.5 ? 30 : 60;

  // Only trigger if vertical swipe is dominant
  if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > minDistance) {
    const current = get(currentSection);
    if (diffY > 0 && current < totalSections - 1) {
      navigateToSection(current + 1);
    } else if (diffY < 0 && current > 0) {
      navigateToSection(current - 1);
    }
  }
}

// For backwards compatibility with grid-based code
export const grid = [
  [{ id: 'home', name: 'Hero' }],
  [{ id: 'about', name: 'About' }, { id: 'work', name: 'Work' }, { id: 'projects', name: 'Projects' }],
  [{ id: 'publications', name: 'Publications' }],
  [{ id: 'contact', name: 'Contact' }]
];

export const currentPosition = writable({ row: 0, col: 0 });

// Sync currentPosition with currentSection
currentSection.subscribe((index) => {
  // Map flat index to grid position for indicator display
  if (index === 0) currentPosition.set({ row: 0, col: 0 });
  else if (index === 1) currentPosition.set({ row: 1, col: 0 });
  else if (index === 2) currentPosition.set({ row: 1, col: 1 });
  else if (index === 3) currentPosition.set({ row: 1, col: 2 });
  else if (index === 4) currentPosition.set({ row: 2, col: 0 });
  else if (index === 5) currentPosition.set({ row: 3, col: 0 });
});

export function navigateToPosition(pos: { row: number; col: number }, _direction: TransitionDirection) {
  // Convert grid position to flat index
  let index = 0;
  if (pos.row === 0) index = 0;
  else if (pos.row === 1) index = 1 + pos.col;
  else if (pos.row === 2) index = 4;
  else if (pos.row === 3) index = 5;

  navigateToSection(index);
}
