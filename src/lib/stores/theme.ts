import { writable } from 'svelte/store';

function createThemeStore() {
  const { subscribe, set, update } = writable<'dark' | 'light'>('dark');
  
  return {
    subscribe,
    toggle: () => update(theme => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    }),
    init: () => {
      const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
      const theme = saved || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      set(theme);
    }
  };
}

export const theme = createThemeStore();