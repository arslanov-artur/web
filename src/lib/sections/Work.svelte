<script lang="ts">
  const experiences = [
    {
      company: 'SalaryGuide',
      role: 'Senior Software Engineer',
      period: 'Aug 2025 - Present',
      description: 'Transparent salary data for paid media and SEO professionals',
      highlights: [],
      featured: true
    },
    {
      company: 'Juro',
      role: 'Senior Software Engineer',
      period: 'Jun 2023 - Aug 2025',
      description: 'London based LegalTech startup specializing in contract automation platform',
      highlights: [
        '2.4s → 800ms render times',
        '8000+ contracts/month processed',
        'Mentored 2 junior devs'
      ]
    },
    {
      company: 'Ancor',
      role: 'Software Engineer',
      period: 'Oct 2019 - Jun 2023',
      description: 'Comprehensive staffing platform for automated HR management',
      highlights: [
        '1000+ concurrent users',
        '150+ API endpoints',
        '99.9% uptime'
      ]
    }
  ];

  const workStats = [
    { value: '6+', label: 'Years Coding' },
    { value: '50+', label: 'Projects Shipped' }
  ];
</script>

<section id="work" class="work">
  <div class="container">
    <h2 class="section-title">Work Experience</h2>

    <div class="bento-grid">
      <!-- Featured job - spans 2 columns -->
      <div class="bento-card featured-card glass">
        <div class="featured-badge">Current</div>
        <div class="card-content">
          <h3>{experiences[0].company}</h3>
          <span class="role">{experiences[0].role}</span>
          <p class="description">{experiences[0].description}</p>
        </div>
        <span class="period">{experiences[0].period}</span>
      </div>

      <!-- Stats -->
      {#each workStats as stat}
        <div class="bento-card stat-card glass">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}

      <!-- Other jobs -->
      {#each experiences.slice(1) as exp}
        <div class="bento-card job-card glass">
          <div class="card-header">
            <div>
              <h4>{exp.company}</h4>
              <span class="role">{exp.role}</span>
            </div>
            <span class="period">{exp.period}</span>
          </div>
          <p class="description">{exp.description}</p>
          {#if exp.highlights.length > 0}
            <div class="highlights">
              {#each exp.highlights as highlight}
                <span class="highlight-tag">{highlight}</span>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .work {
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
    margin-bottom: 2.5rem;
    text-align: center;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

  /* Featured card */
  .featured-card {
    grid-column: span 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    background: var(--gradient-primary);
    color: white;
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .featured-card h3 {
    font-size: var(--text-2xl);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .featured-card .role {
    font-size: var(--text-base);
    color: var(--text-primary);
    font-weight: 500;
    display: block;
    margin-bottom: 1rem;
  }

  .featured-card .description {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .featured-card .period {
    font-size: var(--text-sm);
    color: var(--text-muted);
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

  /* Job cards */
  .job-card {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .job-card h4 {
    font-size: var(--text-lg);
    color: var(--text-primary);
    font-weight: 600;
    margin: 0;
  }

  .role {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }

  .period {
    font-size: var(--text-xs);
    color: var(--text-muted);
    background: var(--glass-bg);
    padding: 0.25rem 0.625rem;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    white-space: nowrap;
  }

  .description {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.5;
    margin: 0;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }

  .highlight-tag {
    padding: 0.25rem 0.625rem;
    border-radius: 15px;
    font-size: var(--text-xs);
    color: var(--text-secondary);
    background: var(--bg-subtle);
    border: 1px solid var(--glass-border);
  }

  @media (max-width: 900px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .featured-card {
      grid-column: span 2;
      grid-row: span 1;
    }

    .job-card {
      grid-column: span 2;
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

    .bento-card {
      padding: 1.25rem;
    }

    .featured-card h3 {
      font-size: var(--text-xl);
    }

    .stat-value {
      font-size: var(--text-xl);
    }
  }
</style>
