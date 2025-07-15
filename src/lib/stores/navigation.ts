import { writable } from 'svelte/store';

export const currentSection = writable(0);
export const totalSections = 5;

let isScrolling = false;
let scrollAccumulator = 0;
let lastScrollTime = Date.now();
const SCROLL_THRESHOLD = 50; // Minimum delta to trigger scroll
const SCROLL_TIMEOUT = 1200; // Increased timeout for smoother experience

export function navigateToSection(index: number) {
  if (isScrolling || index < 0 || index >= totalSections) return;
  
  isScrolling = true;
  currentSection.set(index);
  
  setTimeout(() => {
    isScrolling = false;
    scrollAccumulator = 0;
  }, SCROLL_TIMEOUT);
}

export function handleWheel(event: WheelEvent) {
  event.preventDefault();
  
  if (isScrolling) return;
  
  const now = Date.now();
  const timeDiff = now - lastScrollTime;
  
  // Reset accumulator if too much time has passed
  if (timeDiff > 200) {
    scrollAccumulator = 0;
  }
  
  scrollAccumulator += event.deltaY;
  lastScrollTime = now;
  
  // Only scroll if we've accumulated enough delta
  if (Math.abs(scrollAccumulator) >= SCROLL_THRESHOLD) {
    const direction = scrollAccumulator > 0 ? 1 : -1;
    scrollAccumulator = 0;
    
    currentSection.update(current => {
      const next = current + direction;
      if (next >= 0 && next < totalSections) {
        navigateToSection(next);
        return next;
      }
      return current;
    });
  }
}

export function handleKeyboard(event: KeyboardEvent) {
  if (isScrolling) return;
  
  switch(event.key) {
    case 'ArrowDown':
    case 'PageDown':
      event.preventDefault();
      currentSection.update(current => {
        const next = current + 1;
        if (next < totalSections) {
          navigateToSection(next);
          return next;
        }
        return current;
      });
      break;
    case 'ArrowUp':
    case 'PageUp':
      event.preventDefault();
      currentSection.update(current => {
        const next = current - 1;
        if (next >= 0) {
          navigateToSection(next);
          return next;
        }
        return current;
      });
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