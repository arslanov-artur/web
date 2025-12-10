<script lang="ts">
  const projects = [
    {
      title: 'StickIO Bot',
      description: 'AI-powered Telegram bot that turns ideas into vibrant sticker packs',
      technologies: ['Node.js', 'NestJS', 'Telegram API', 'TypeScript'],
      link: 'https://t.me/stickio_bot',
      type: 'telegram'
    },
    {
      title: 'UI Collection',
      description: 'Production-ready headless UI components for React',
      technologies: ['React', 'TypeScript', 'Headless UI', 'A11y'],
      link: 'https://github.com/arslanov-artur/react-headless-ui-collection'
    },
    {
      title: 'Messenger PWA',
      description: 'Real-time messenger with offline support and push notifications',
      technologies: ['TypeScript', 'PWA', 'WebSockets', 'Service Workers'],
      link: 'https://github.com/arslanov-artur/messenger-pwa'
    }
  ];
</script>

<section id="projects" class="projects">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>

    <div class="projects-grid">
      {#each projects as project, i}
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="project-card glass" style="--delay: {i * 0.1}s">
          <div class="card-header">
            <h3>{project.title}</h3>
            {#if project.type === 'telegram'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="icon">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            {:else}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            {/if}
          </div>

          <p class="description">{project.description}</p>

          <div class="tech-stack">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
    background-color: var(--bg-base);
    height: 95vh;
    max-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  .section-title {
    font-size: var(--text-3xl);
    margin-bottom: 2rem;
    text-align: center;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .project-card {
    padding: 1.5rem;
    border-radius: 1.25rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: var(--gradient-border);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover::before {
    opacity: 1;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), 0 0 30px rgba(129, 140, 248, 0.1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .project-card h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text-primary);
  }

  .icon {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .project-card:hover .icon {
    color: var(--color-primary);
  }

  .description {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1rem;
    flex: 1;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .tech-tag {
    padding: 0.25rem 0.625rem;
    border-radius: 15px;
    font-size: var(--text-xs);
    color: var(--text-muted);
    background: var(--bg-subtle);
    border: 1px solid var(--glass-border);
    transition: all 0.2s ease;
  }

  .project-card:hover .tech-tag {
    border-color: var(--color-primary);
    color: var(--text-primary);
  }

  @media (max-width: 900px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
      max-height: 70vh;
      overflow-y: auto;
      padding-right: 0.5rem;
    }

    .projects-grid::-webkit-scrollbar {
      width: 4px;
    }

    .projects-grid::-webkit-scrollbar-track {
      background: var(--glass-bg);
      border-radius: 2px;
    }

    .projects-grid::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 2px;
    }
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1rem;
    }

    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 1.5rem;
    }

    .project-card {
      padding: 1.25rem;
    }
  }
</style>
