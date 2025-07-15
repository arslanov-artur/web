<script lang="ts">
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly, fade } from 'svelte/transition';
  
  let sectionElement: HTMLElement;
  let visible = false;
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      link: 'https://github.com/arthur-arslanov/ecommerce',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      link: 'https://github.com/arthur-arslanov/taskmanager',
      demo: null
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard for business intelligence',
      technologies: ['Svelte', 'D3.js', 'Python', 'FastAPI'],
      link: 'https://github.com/arthur-arslanov/analytics',
      demo: 'https://analytics.example.com'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for social media platform with GraphQL support',
      technologies: ['GraphQL', 'Go', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/arthur-arslanov/social-api',
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
                
                <p>{project.description}</p>
                
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
  }
  
  .project-card {
    padding: 2rem;
    border-radius: 1rem;
    text-align: left;
    transition: all var(--transition-base) var(--ease-out);
    display: flex;
    flex-direction: column;
  }
  
  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
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
    transition: color var(--transition-fast) var(--ease-out);
    display: flex;
    align-items: center;
  }
  
  .project-link:hover {
    color: var(--color-primary);
  }
  
  .project-card p {
    font-size: var(--text-base);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    flex: 1;
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
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 3rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>