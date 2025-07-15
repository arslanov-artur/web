import { writable } from 'svelte/store';

export const currentSection = writable(0);
export const totalSections = 5;

let isScrolling = false;

export function navigateToSection(index: number) {
  if (isScrolling || index < 0 || index >= totalSections) return;
  
  isScrolling = true;
  currentSection.set(index);
  
  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

export function handleWheel(event: WheelEvent) {
  event.preventDefault();
  
  if (isScrolling) return;
  
  const direction = event.deltaY > 0 ? 1 : -1;
  currentSection.update(current => {
    const next = current + direction;
    if (next >= 0 && next < totalSections) {
      navigateToSection(next);
      return next;
    }
    return current;
  });
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