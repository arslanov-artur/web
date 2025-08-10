<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { navigateToSection } from '../stores/navigation';
  
  let mounted = false;
  onMount(() => mounted = true);
  
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
  }
</script>

<section id="home" class="hero">
  <div class="mesh-gradient gradient-animated"></div>
  <div class="geometric-shapes">
    <!-- Triangles -->
    <div class="shape triangle triangle-1"></div>
    <div class="shape triangle triangle-2"></div>
    <div class="shape triangle triangle-3"></div>
    
    <!-- Hexagons -->
    <div class="shape hexagon hexagon-1"></div>
    <div class="shape hexagon hexagon-2"></div>
    
    <!-- Squares -->
    <div class="shape square square-1"></div>
    <div class="shape square square-2"></div>
    
    <!-- Circles -->
    <div class="shape circle circle-1"></div>
    <div class="shape circle circle-2"></div>
    
    <!-- Additional Polygons -->
    <div class="shape polygon polygon-1"></div>
    <div class="shape polygon polygon-2"></div>
    
    <!-- Cross-screen shapes -->
    <div class="shape cross-shape triangle-cross"></div>
    <div class="shape cross-shape square-cross"></div>
    <div class="shape cross-shape circle-cross"></div>
  </div>
  <div class="floating-orbs">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>
  
    <div class="content" in:fade={{ duration: 1000 }}>
      <h1 class="name" in:fly={{ y: 30, duration: 800, delay: 200 }}>
        Artur Arslanov
      </h1>
      
      <p class="title" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        Senior Software Engineer
      </p>
      
      <div class="tagline-wrapper" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        <p class="tagline">
          <span class="tagline-item">5+ years building scalable systems</span>
        </p>
        <p class="tagline">
          <span class="tagline-item">TypeScript</span>
          <span class="tagline-dot">•</span>
          <span class="tagline-item">React</span>
          <span class="tagline-dot">•</span>
          <span class="tagline-item">Node.js</span>
          <span class="tagline-dot">•</span>
          <span class="tagline-item">Nest.js</span>
        </p>
      </div>
      
      <div class="cta-group" in:fly={{ y: 20, duration: 800, delay: 800 }}>
        <a href="#work" class="btn-primary" on:click={handleSmoothScroll}>
          View Work
        </a>
        <a href="#contact" class="btn-secondary" on:click={handleSmoothScroll}>
          Get in Touch
        </a>
      </div>
    </div>
</section>

<style>
  .hero {
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  .mesh-gradient {
    position: absolute;
    inset: 0;
    background: var(--gradient-hero);
    opacity: 0.3;
    filter: blur(80px);
  }
  
  :global([data-theme="light"]) .mesh-gradient {
    opacity: 0.4;
    filter: blur(50px);
  }
  
  .floating-orbs {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }
  
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.3;
    mix-blend-mode: screen;
    /* Removed animation to improve scroll performance */
  }
  
  :global([data-theme="light"]) .orb {
    filter: blur(20px);
    opacity: 0.5;
    mix-blend-mode: normal;
  }
  
  .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(129, 140, 248, 0.6) 0%, transparent 70%);
    top: -100px;
    left: -100px;
    animation-delay: 0s;
  }
  
  :global([data-theme="light"]) .orb-1 {
    background: radial-gradient(circle, rgba(129, 140, 248, 0.8) 0%, transparent 70%);
  }
  
  .orb-2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(244, 114, 182, 0.6) 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    animation-delay: 7s;
  }
  
  :global([data-theme="light"]) .orb-2 {
    background: radial-gradient(circle, rgba(244, 114, 182, 0.8) 0%, transparent 70%);
  }
  
  .orb-3 {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.6) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 14s;
  }
  
  :global([data-theme="light"]) .orb-3 {
    background: radial-gradient(circle, rgba(52, 211, 153, 0.8) 0%, transparent 70%);
  }
  
  /* Geometric Shapes Container */
  .geometric-shapes {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }
  
  /* Base Shape Styles */
  .shape {
    position: absolute;
    opacity: 0.15;
    will-change: transform;
    filter: blur(0.5px);
  }
  
  /* Light theme adjustments */
  :global([data-theme="light"]) .shape {
    opacity: 0.12;
  }
  
  /* Add depth with different blur levels */
  .shape:nth-child(odd) {
    filter: blur(1px);
  }
  
  .shape:nth-child(3n) {
    filter: blur(0px);
    opacity: 0.2;
  }
  
  :global([data-theme="light"]) .shape:nth-child(3n) {
    opacity: 0.15;
  }
  
  /* Enhanced colors for light theme */
  :global([data-theme="light"]) .triangle {
    filter: saturate(1.5);
  }
  
  :global([data-theme="light"]) .hexagon {
    filter: saturate(1.3);
  }
  
  :global([data-theme="light"]) .square,
  :global([data-theme="light"]) .circle {
    filter: saturate(1.4);
  }
  
  :global([data-theme="light"]) .polygon {
    filter: saturate(1.2);
  }
  
  /* Triangles */
  .triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }
  
  .triangle-1 {
    border-bottom: 86px solid rgba(129, 140, 248, 0.5);
    top: 10%;
    left: 15%;
    transform: rotate(15deg);
    animation: float-rotate 20s ease-in-out infinite;
  }
  
  .triangle-2 {
    border-bottom: 60px solid rgba(244, 114, 182, 0.4);
    bottom: 20%;
    right: 10%;
    transform: rotate(-30deg);
    animation: float-rotate-reverse 25s ease-in-out infinite;
  }
  
  .triangle-3 {
    border-bottom: 40px solid rgba(52, 211, 153, 0.4);
    top: 60%;
    left: 5%;
    transform: rotate(45deg);
    animation: float-drift 30s ease-in-out infinite;
  }
  
  /* Hexagons */
  .hexagon {
    width: 80px;
    height: 45px;
    position: relative;
    background: rgba(129, 140, 248, 0.3);
  }
  
  .hexagon::before,
  .hexagon::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }
  
  .hexagon::before {
    top: -22px;
    border-bottom: 22px solid rgba(129, 140, 248, 0.3);
  }
  
  .hexagon::after {
    bottom: -22px;
    border-top: 22px solid rgba(129, 140, 248, 0.3);
  }
  
  .hexagon-1 {
    top: 30%;
    right: 20%;
    transform: scale(1.2) rotate(30deg);
    animation: float-scale 22s ease-in-out infinite;
  }
  
  .hexagon-2 {
    bottom: 15%;
    left: 25%;
    transform: scale(0.8) rotate(-15deg);
    background: rgba(244, 114, 182, 0.3);
    animation: float-rotate 28s ease-in-out infinite;
  }
  
  .hexagon-2::before {
    border-bottom-color: rgba(244, 114, 182, 0.3);
  }
  
  .hexagon-2::after {
    border-top-color: rgba(244, 114, 182, 0.3);
  }
  
  /* Squares */
  .square {
    background: transparent;
    border: 2px solid;
  }
  
  .square-1 {
    width: 60px;
    height: 60px;
    border-color: rgba(129, 140, 248, 0.4);
    top: 45%;
    left: 10%;
    transform: rotate(45deg);
    animation: float-spin 35s linear infinite;
  }
  
  .square-2 {
    width: 40px;
    height: 40px;
    border-color: rgba(52, 211, 153, 0.4);
    top: 15%;
    right: 35%;
    transform: rotate(15deg);
    animation: float-drift 25s ease-in-out infinite;
  }
  
  /* Circles */
  .circle {
    border-radius: 50%;
    background: transparent;
    border: 2px solid;
  }
  
  .circle-1 {
    width: 50px;
    height: 50px;
    border-color: rgba(244, 114, 182, 0.4);
    bottom: 30%;
    right: 15%;
    animation: float-scale 20s ease-in-out infinite;
  }
  
  .circle-2 {
    width: 30px;
    height: 30px;
    border-color: rgba(129, 140, 248, 0.5);
    top: 70%;
    right: 40%;
    animation: float-drift 18s ease-in-out infinite;
  }
  
  /* Polygons (Pentagons) */
  .polygon {
    width: 60px;
    height: 60px;
    background: rgba(244, 114, 182, 0.2);
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
  
  .polygon-1 {
    top: 20%;
    left: 40%;
    transform: scale(1.3) rotate(72deg);
    animation: float-rotate-reverse 32s ease-in-out infinite;
  }
  
  .polygon-2 {
    bottom: 25%;
    left: 60%;
    transform: scale(0.9) rotate(-36deg);
    background: rgba(52, 211, 153, 0.2);
    animation: float-spin 40s linear infinite;
  }
  
  /* Animations - Enhanced with screen movement */
  @keyframes float-rotate {
    0% {
      transform: rotate(15deg) translateY(0) translateX(0);
    }
    25% {
      transform: rotate(25deg) translateY(-30px) translateX(40px);
    }
    50% {
      transform: rotate(5deg) translateY(-50px) translateX(-30px);
    }
    75% {
      transform: rotate(20deg) translateY(20px) translateX(20px);
    }
    100% {
      transform: rotate(15deg) translateY(0) translateX(0);
    }
  }
  
  @keyframes float-rotate-reverse {
    0% {
      transform: rotate(-30deg) translateX(0) translateY(0);
    }
    25% {
      transform: rotate(-40deg) translateX(50px) translateY(-20px);
    }
    50% {
      transform: rotate(-35deg) translateX(-40px) translateY(-40px);
    }
    75% {
      transform: rotate(-25deg) translateX(30px) translateY(30px);
    }
    100% {
      transform: rotate(-30deg) translateX(0) translateY(0);
    }
  }
  
  @keyframes float-drift {
    0% {
      transform: translate(0, 0) rotate(45deg);
    }
    20% {
      transform: translate(40px, -30px) rotate(50deg);
    }
    40% {
      transform: translate(-20px, -60px) rotate(40deg);
    }
    60% {
      transform: translate(60px, 20px) rotate(48deg);
    }
    80% {
      transform: translate(-30px, 40px) rotate(42deg);
    }
    100% {
      transform: translate(0, 0) rotate(45deg);
    }
  }
  
  @keyframes float-scale {
    0% {
      transform: scale(1.2) rotate(30deg) translate(0, 0);
    }
    25% {
      transform: scale(1.3) rotate(40deg) translate(-20px, 30px);
    }
    50% {
      transform: scale(1.5) rotate(35deg) translate(30px, -20px);
    }
    75% {
      transform: scale(1.2) rotate(25deg) translate(-10px, -10px);
    }
    100% {
      transform: scale(1.2) rotate(30deg) translate(0, 0);
    }
  }
  
  @keyframes float-spin {
    0% {
      transform: rotate(0deg) translate(0, 0);
    }
    25% {
      transform: rotate(90deg) translate(20px, -20px);
    }
    50% {
      transform: rotate(180deg) translate(-30px, 10px);
    }
    75% {
      transform: rotate(270deg) translate(10px, 30px);
    }
    100% {
      transform: rotate(360deg) translate(0, 0);
    }
  }
  
  /* New cross-screen animation */
  @keyframes cross-screen {
    0% {
      transform: translateX(-100vw) translateY(0) rotate(0deg);
    }
    50% {
      transform: translateX(50vw) translateY(-20vh) rotate(180deg);
    }
    100% {
      transform: translateX(120vw) translateY(10vh) rotate(360deg);
    }
  }
  
  /* Cross-screen shapes */
  .cross-shape {
    position: fixed;
    opacity: 0.1;
  }
  
  :global([data-theme="light"]) .cross-shape {
    opacity: 0.15;
  }
  
  .triangle-cross {
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 70px solid rgba(129, 140, 248, 0.3);
    top: 20vh;
    animation: cross-screen 45s linear infinite;
  }
  
  :global([data-theme="light"]) .triangle-cross {
    border-bottom-color: rgba(99, 102, 241, 0.4);
  }
  
  .square-cross {
    width: 50px;
    height: 50px;
    background: transparent;
    border: 3px solid rgba(244, 114, 182, 0.3);
    top: 50vh;
    transform: rotate(45deg);
    animation: cross-screen 60s linear infinite;
    animation-delay: -20s;
  }
  
  :global([data-theme="light"]) .square-cross {
    border-color: rgba(236, 72, 153, 0.4);
    border-width: 4px;
  }
  
  .circle-cross {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(52, 211, 153, 0.2);
    top: 70vh;
    animation: cross-screen 50s linear infinite;
    animation-delay: -40s;
  }
  
  :global([data-theme="light"]) .circle-cross {
    background: rgba(16, 185, 129, 0.3);
  }
  
  .content {
    position: relative;
    text-align: center;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  
  .name {
    font-family: var(--font-display);
    font-size: var(--text-hero);
    font-weight: 300;
    letter-spacing: var(--tracking-tight);
    background: linear-gradient(270deg, var(--color-primary), var(--color-accent-1), var(--color-accent-2));
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    /* Removed animation to improve scroll performance */
    position: relative;
  }
  
  .title {
    font-size: var(--text-2xl);
    color: var(--text-secondary);
    font-weight: 300;
    letter-spacing: var(--tracking-wider);
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;
    line-height: 1.2;
  }
  
  .title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    opacity: 0.5;
  }
  
  .tagline-wrapper {
    margin-bottom: 2rem;
    overflow: hidden;
  }
  
  .tagline {
    font-size: var(--text-lg);
    color: var(--text-muted);
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tagline-item {
    display: inline-block;
    animation: slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  .tagline-item:nth-child(1) { animation-delay: 0.7s; }
  .tagline-item:nth-child(3) { animation-delay: 0.8s; }
  .tagline-item:nth-child(5) { animation-delay: 0.9s; }
  .tagline-item:nth-child(7) { animation-delay: 1s; }
  .tagline-item:nth-child(9) { animation-delay: 1.1s; }
  
  .tagline-dot {
    color: var(--color-primary);
    font-weight: bold;
    animation: fade-in-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  .tagline-dot:nth-child(2) { animation-delay: 0.75s; }
  .tagline-dot:nth-child(4) { animation-delay: 0.85s; }
  .tagline-dot:nth-child(6) { animation-delay: 0.95s; }
  .tagline-dot:nth-child(8) { animation-delay: 1.05s; }
  
  .tagline {
    font-size: var(--text-lg);
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
  }
  
  .btn-primary, .btn-secondary {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-weight: 500;
    transition: all var(--transition-base) var(--ease-out);
    border: none;
    cursor: pointer;
    font-size: var(--text-base);
    text-decoration: none;
    display: inline-block;
  }
  
  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--glow-primary);
    position: relative;
    overflow: hidden;
  }
  
  .btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  .btn-primary:hover {
    box-shadow: var(--glow-primary), var(--shadow-lg);
  }
  
  .btn-primary:hover::before {
    left: 100%;
  }
  
  .btn-secondary {
    background: var(--glass-bg);
    color: var(--text-primary);
    /* Removed backdrop-filter to improve scroll performance */
    border: 1px solid var(--glass-border);
  }
  
  .btn-secondary:hover {
    background: var(--bg-overlay);
    border-color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    .hero {
      padding: 1rem;
      overflow: hidden;
    }
    
    /* Adjust geometric shapes for mobile */
    .shape {
      opacity: 0.1;
    }
    
    :global([data-theme="light"]) .shape {
      opacity: 0.05;
    }
    
    /* Reduce shape sizes on mobile */
    .triangle-1 {
      border-left-width: 30px;
      border-right-width: 30px;
      border-bottom-width: 52px;
    }
    
    .triangle-2 {
      border-left-width: 25px;
      border-right-width: 25px;
      border-bottom-width: 43px;
    }
    
    .triangle-3 {
      border-left-width: 20px;
      border-right-width: 20px;
      border-bottom-width: 35px;
    }
    
    .hexagon {
      width: 50px;
      height: 28px;
    }
    
    .hexagon::before,
    .hexagon::after {
      border-left-width: 25px;
      border-right-width: 25px;
    }
    
    .hexagon::before {
      top: -14px;
      border-bottom-width: 14px;
    }
    
    .hexagon::after {
      bottom: -14px;
      border-top-width: 14px;
    }
    
    .square-1 {
      width: 40px;
      height: 40px;
    }
    
    .square-2 {
      width: 30px;
      height: 30px;
    }
    
    .circle-1 {
      width: 35px;
      height: 35px;
    }
    
    .circle-2 {
      width: 25px;
      height: 25px;
    }
    
    .polygon {
      width: 40px;
      height: 40px;
    }
    
    .content {
      padding: 0;
      max-width: 100%;
    }
    
    .name {
      font-size: var(--text-3xl);
      word-wrap: break-word;
    }
    
    .title {
      font-size: var(--text-xl);
    }
    
    .tagline-wrapper {
      max-width: 100%;
    }
    
    .tagline {
      font-size: var(--text-base);
    }
    
    .cta-group {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0 1rem;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 280px;
      font-size: var(--text-base);
      padding: 0.875rem 2rem;
    }
  }
</style>