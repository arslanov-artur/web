<script lang="ts">
  import { theme } from '../stores/theme';
  
  let currentTheme: 'dark' | 'light' = 'dark';
  
  theme.subscribe(value => {
    currentTheme = value;
  });
  
  function toggleTheme() {
    theme.toggle();
  }
</script>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
  <div class="toggle-track">
    <div class="toggle-thumb" class:light={currentTheme === 'light'}>
      {#if currentTheme === 'dark'}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      {:else}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      {/if}
    </div>
  </div>
</button>

<style>
  .theme-toggle {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 38px;
  }
  
  .toggle-track {
    width: 60px;
    height: 30px;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: 30px;
    position: relative;
    transition: all var(--transition-base) var(--ease-out);
  }
  
  .toggle-track:hover {
    border-color: var(--color-primary);
  }
  
  .toggle-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all var(--transition-base) var(--ease-out);
  }
  
  .toggle-thumb.light {
    transform: translateX(30px);
  }
  
  .toggle-thumb svg {
    width: 14px;
    height: 14px;
  }
  
</style>