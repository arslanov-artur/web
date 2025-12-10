<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  const highlights = [
    { value: '5+', label: 'Years Experience' },
    { value: '1000+', label: 'Concurrent Users' },
    { value: '60%', label: 'Workflow Automation' },
    { value: '3x', label: 'Speed Improvement' }
  ];

  const skills = [
    {
      category: 'Frontend',
      icon: '◈',
      items: ['TypeScript', 'React', 'Next.js', 'Svelte']
    },
    {
      category: 'Backend',
      icon: '◉',
      items: ['Node.js', 'NestJS', 'GraphQL', 'Microservices']
    },
    {
      category: 'Database',
      icon: '◎',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch']
    },
    {
      category: 'Cloud',
      icon: '◇',
      items: ['AWS S3', 'Docker', 'CI/CD', 'Kubernetes']
    }
  ];
</script>

<section id="about" class="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>

    <div class="bento-grid">
      <!-- Main intro card - spans 2 columns -->
      <div class="bento-card intro-card glass">
        <div class="card-content">
          <h3>Senior Software Engineer</h3>
          <p>
            Building scalable systems and solving complex technical challenges.
            From real-time collaboration systems to automated document pipelines,
            I focus on delivering measurable results.
          </p>
          <p class="highlight-text">
            Strong mentoring background — helping developers grow and shipping quality code.
          </p>
        </div>
      </div>

      <!-- Stats cards -->
      {#each highlights as stat, i}
        <div class="bento-card stat-card glass" style="--delay: {i * 0.1}s">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}

      <!-- Skills cards -->
      {#each skills as skillGroup, i}
        <div class="bento-card skill-card glass" style="--delay: {(i + 4) * 0.1}s">
          <div class="skill-header">
            <span class="skill-icon">{skillGroup.icon}</span>
            <h4>{skillGroup.category}</h4>
          </div>
          <div class="skill-items">
            {#each skillGroup.items as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .about {
    background-color: var(--bg-base);
    height: 95vh;
    max-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    font-size: var(--text-3xl);
    margin-bottom: 3rem;
    text-align: center;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(120px, auto);
    gap: 1.25rem;
  }

  .bento-card {
    padding: 1.5rem;
    border-radius: 1.25rem;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
  }

  .bento-card::before {
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

  .bento-card:hover::before {
    opacity: 1;
  }

  .bento-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), 0 0 30px rgba(129, 140, 248, 0.1);
  }

  /* Intro card - spans 2 columns, 2 rows */
  .intro-card {
    grid-column: span 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .intro-card h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: var(--font-sans);
    font-weight: 600;
  }

  .intro-card p {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .highlight-text {
    color: var(--color-primary) !important;
    font-weight: 500;
  }

  /* Stat cards */
  .stat-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .stat-value {
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Skill cards */
  .skill-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .skill-icon {
    font-size: var(--text-lg);
    color: var(--color-primary);
  }

  .skill-header h4 {
    font-size: var(--text-base);
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-weight: 600;
    margin: 0;
  }

  .skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-tag {
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-size: var(--text-xs);
    color: var(--text-secondary);
    background: var(--bg-subtle);
    border: 1px solid var(--glass-border);
    transition: all 0.2s ease;
  }

  .skill-tag:hover {
    color: var(--text-primary);
    border-color: var(--color-primary);
    background: rgba(129, 140, 248, 0.1);
  }

  @media (max-width: 900px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .intro-card {
      grid-column: span 2;
      grid-row: span 1;
    }
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1rem;
    }

    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 2rem;
    }

    .bento-grid {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .intro-card {
      grid-column: span 2;
    }

    .stat-card {
      padding: 1.25rem 1rem;
    }

    .stat-value {
      font-size: var(--text-xl);
    }

    .skill-card {
      grid-column: span 2;
    }

    .bento-card {
      padding: 1.25rem;
    }

    .intro-card p {
      font-size: var(--text-sm);
    }
  }
</style>
