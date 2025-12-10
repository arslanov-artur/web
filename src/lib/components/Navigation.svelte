<script lang="ts">
  const sections = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' }
  ];
  
  let menuOpen = false;
  let currentSection = '#home';
  
  function handleSmoothScroll(e: MouseEvent) {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const id = target.getAttribute('href');
    if (id && id.startsWith('#')) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    menuOpen = false; // Close mobile menu after clicking
  }
  
  // Update current section based on scroll position with debouncing
  import { onMount } from 'svelte';
  
  onMount(() => {
    let ticking = false;
    
    function updateCurrentSection() {
      const scrollPos = window.scrollY + window.innerHeight / 3; // Adjusted for better detection
      
      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.querySelector(section.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPos >= elementTop) {
            currentSection = section.href;
            break;
          }
        }
      }
      
      ticking = false;
    }
    
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateCurrentSection);
        ticking = true;
      }
    }
    
    // Initial check
    updateCurrentSection();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<nav class="navigation" class:menu-open={menuOpen}>
  <button class="menu-toggle" on:click={() => menuOpen = !menuOpen} aria-label="Toggle menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
  
  <ul class="nav-list">
    {#each sections as section}
      <li>
        <a 
          href={section.href}
          class="nav-item"
          class:active={currentSection === section.href}
          on:click={handleSmoothScroll}
        >
          <span class="nav-indicator"></span>
          <span class="nav-text">{section.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .navigation {
    position: fixed;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    padding: 0.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  
  .menu-toggle span {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    transition: all var(--transition-base) var(--ease-out);
  }
  
  .menu-open .menu-toggle span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .menu-open .menu-toggle span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-open .menu-toggle span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .nav-item {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-muted);
    font-size: var(--text-sm);
    font-weight: 500;
    transition: all var(--transition-fast) var(--ease-out);
    position: relative;
    text-decoration: none;
  }
  
  .nav-item::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: var(--gradient-primary);
    border-radius: 2px;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .nav-item.active::before {
    height: 20px;
  }
  
  .nav-item:hover {
    color: var(--text-primary);
  }
  
  .nav-item.active {
    color: var(--text-primary);
  }
  
  .nav-indicator {
    width: 40px;
    height: 2px;
    background: var(--text-muted);
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
  }
  
  .nav-indicator::after {
    content: '';
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .nav-item:hover .nav-indicator {
    width: 60px;
    background: var(--text-secondary);
  }
  
  .nav-item.active .nav-indicator {
    width: 60px;
    background: var(--gradient-primary);
    box-shadow: 0 0 10px rgba(129, 140, 248, 0.5);
  }
  
  .nav-item.active .nav-indicator::after {
    left: 0;
    animation: shimmer 2s infinite;
  }
  
  .nav-text {
    opacity: 0;
    transform: translateX(-10px);
    transition: all var(--transition-base) var(--ease-out);
  }
  
  .nav-item:hover .nav-text,
  .nav-item.active .nav-text {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media (max-width: 1024px) {
    .navigation {
      left: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    .navigation {
      top: 2rem;
      left: 2rem;
      transform: none;
    }
    
    .menu-toggle {
      display: flex;
    }
    
    .nav-list {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 1rem;
      background: var(--glass-bg);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid var(--glass-border);
      padding: 1.5rem;
      border-radius: 1rem;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      transition: all var(--transition-base) var(--ease-out);
    }
    
    .menu-open .nav-list {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
    
    .nav-text {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>