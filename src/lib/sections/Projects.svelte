<script lang="ts">
  let sectionElement: HTMLElement;
  
  const projects = [
    {
      title: 'StickIO Bot',
      description: 'AI-powered Telegram bot that turns ideas into vibrant sticker packs. Generates custom stickers with various styles and emotions, used by thousands of users',
      technologies: ['Node.js', 'Telegram Bot API', 'AI/ML', 'Image Generation'],
      link: 'https://t.me/stickio_bot',
      demo: 'https://t.me/stickio_bot',
      type: 'telegram'
    },
    {
      title: 'Headless UI Collection',
      description: 'Production-ready headless UI components for React. Unstyled, accessible components that integrate seamlessly with any design system',
      technologies: ['React', 'TypeScript', 'Headless UI', 'Accessibility'],
      link: 'https://github.com/arslanov-artur/react-headless-ui-collection',
      demo: null
    },
    {
      title: 'Messenger PWA',
      description: 'Progressive Web App messenger with real-time messaging, offline support, and push notifications. Built with modern web technologies',
      technologies: ['React', 'PWA', 'Service Workers', 'WebSockets'],
      link: 'https://github.com/arslanov-artur/messenger-pwa',
      demo: null
    }
  ];
</script>

<section id="projects" bind:this={sectionElement} class="projects">
    <div class="container">
        <div class="content">
          <h2 class="section-title">
            Featured Projects
          </h2>
          
          <div class="projects-grid">
            {#each projects as project, i}
              <a href={project.link} target="_blank" rel="noopener noreferrer" class="project-card-link">
                <div class="project-card glass">
                  <div class="project-header">
                    <h3>{project.title}</h3>
                    <div class="project-links">
                      {#if project.type === 'telegram'}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="project-icon">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      {:else}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="project-icon">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      {/if}
                    </div>
                  </div>
                  
                  <p class="project-description">{project.description}</p>
                  
                  <div class="tech-stack">
                    {#each project.technologies as tech}
                      <span class="tech-tag">{tech}</span>
                    {/each}
                  </div>
                </div>
              </a>
            {/each}
          </div>
        </div>
    </div>
</section>

<style>
  .projects {
    background-color: var(--bg-base);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .content {
    text-align: center;
  }
  
  .section-title {
    font-size: var(--text-3xl);
    margin-bottom: 4rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    position: relative;
    overflow: hidden;
  }
  
  .project-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;
  }
  
  .projects-grid::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%);
    opacity: 0.05;
    filter: blur(50px);
    pointer-events: none;
  }
  
  .project-card {
    padding: 2rem;
    border-radius: 1rem;
    text-align: left;
    transition: box-shadow var(--transition-base) var(--ease-out), border-color var(--transition-base) var(--ease-out);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transform-origin: center;
    cursor: pointer;
    min-height: 280px;
  }
  
  .project-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: var(--gradient-primary);
    border-radius: 1rem;
    opacity: 0;
    z-index: -1;
    transition: opacity var(--transition-base);
  }
  
  .project-card:hover {
    box-shadow: var(--shadow-lg), 0 20px 40px rgba(129, 140, 248, 0.2);
    border-color: transparent;
  }
  
  .project-card:hover::before {
    opacity: 1;
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .project-card h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-weight: 600;
  }
  
  .project-links {
    display: flex;
    gap: 0.75rem;
  }
  
  .project-icon {
    color: var(--text-muted);
    pointer-events: none;
  }
  
  .project-description {
    font-size: var(--text-base);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    flex: 1;
    line-height: var(--leading-relaxed);
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    transition: all var(--transition-base);
  }
  
  .project-card:hover .project-description {
    -webkit-line-clamp: unset;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tag {
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: var(--text-xs);
    color: var(--text-primary);
    background: var(--bg-subtle);
    border: 1px solid var(--glass-border);
    transition: all var(--transition-fast) var(--ease-out);
  }
  
  .project-card:hover .tech-tag {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: white;
  }
  
  @media (max-width: 768px) {
    .projects {
      padding: 1rem;
      overflow-x: hidden;
    }
    
    .container {
      padding: 0 1rem;
      max-width: 100%;
    }
    
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 3rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0;
    }
    
    .project-card {
      padding: 1.5rem;
      min-height: auto;
    }
    
    .project-card h3 {
      font-size: var(--text-lg);
    }
    
    .project-description {
      font-size: var(--text-sm);
    }
  }
</style>