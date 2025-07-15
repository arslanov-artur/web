<script lang="ts">
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly, fade } from 'svelte/transition';
  
  let sectionElement: HTMLElement;
  let visible = false;
  
  const projects = [
    {
      title: 'Real-time Contract Editor',
      description: 'WebSocket-based collaborative document editor handling 25+ concurrent users with conflict-free editing using Operational Transform algorithm',
      technologies: ['React', 'WebSockets', 'Redis Pub/Sub', 'MessagePack'],
      link: 'https://github.com/arthur-arslanov',
      demo: null
    },
    {
      title: 'Document Processing Pipeline',
      description: 'Automated contract processing system handling 8000+ documents monthly with 82% automation accuracy using ML validation rules',
      technologies: ['RabbitMQ', 'ElasticSearch', 'NestJS', 'TypeScript'],
      link: 'https://github.com/arthur-arslanov',
      demo: null
    },
    {
      title: 'Enterprise HR Platform',
      description: 'Scalable staffing management system serving 1000+ concurrent users with 150+ API endpoints and 99% uptime',
      technologies: ['NestJS', 'MySQL', 'Redis', 'Docker'],
      link: 'https://github.com/arthur-arslanov',
      demo: null
    },
    {
      title: 'API Integration Layer',
      description: 'Robust integration system connecting 5+ external services, processing 50K+ daily API calls with circuit breakers and retry mechanisms',
      technologies: ['TypeScript', 'Express', 'Redis', 'Circuit Breakers'],
      link: 'https://github.com/arthur-arslanov',
      demo: null
    }
  ];
</script>

<section bind:this={sectionElement} class="projects">
  <IntersectionObserver element={sectionElement} bind:intersecting={visible} threshold={0.3}>
    <div class="container">
      {#if visible}
        <div class="content">
          <h2 class="section-title" in:fade={{ duration: 600 }}>
            Featured Projects
          </h2>
          
          <div class="projects-grid">
            {#each projects as project, i}
              <div class="project-card glass" in:fly={{ y: 30, duration: 800, delay: 200 + i * 100 }}>
                <div class="project-header">
                  <h3>{project.title}</h3>
                  <div class="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       class="project-link" aria-label="View source code">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                    {#if project.demo}
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         class="project-link" aria-label="View live demo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
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
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </IntersectionObserver>
</section>

<style>
  .projects {
    background-color: var(--bg-base);
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
  }
  
  .projects-grid::before {
    content: '';
    position: absolute;
    inset: -100px;
    background: radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%);
    opacity: 0.05;
    filter: blur(100px);
    pointer-events: none;
  }
  
  .project-card {
    padding: 2rem;
    border-radius: 1rem;
    text-align: left;
    transition: all var(--transition-base) var(--ease-out);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
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
    transform: translateY(-8px) scale(1.02);
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
  
  .project-link {
    color: var(--text-muted);
    transition: all var(--transition-fast) var(--ease-out);
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    position: relative;
  }
  
  .project-link::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-primary);
    opacity: 0;
    border-radius: 8px;
    transition: opacity var(--transition-fast);
  }
  
  .project-link:hover {
    color: white;
    transform: scale(1.1);
  }
  
  .project-link:hover::before {
    opacity: 1;
  }
  
  .project-link svg {
    position: relative;
    z-index: 1;
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
    }
    
    .container {
      padding: 0 1rem;
    }
    
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 3rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .project-card {
      padding: 1.5rem;
    }
    
    .project-card h3 {
      font-size: var(--text-lg);
    }
    
    .project-description {
      font-size: var(--text-sm);
    }
  }
</style>