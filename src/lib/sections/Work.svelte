<script lang="ts">
  const experiences = [
    {
      company: 'SalaryGuide',
      role: 'Senior Software Engineer',
      period: 'Aug 2025 - Present',
      description: 'Transparent salary data for paid media and SEO professionals',
      highlights: []
    },
    {
      company: 'Juro',
      role: 'Senior Software Engineer',
      period: 'Jun 2023 - Aug 2025',
      description: 'London based LegalTech startup specializing in contract automation platform',
      highlights: [
        'Performance optimizations: 2.4s → 800ms render times, 40% better engagement',
        'Document pipeline: 8000+ contracts/month, 82% automation accuracy',
        'Mentored 2 junior devs, 25% faster reviews, 30% fewer bugs'
      ]
    },
    {
      company: 'Ancor',
      role: 'Software Engineer',
      period: 'Oct 2019 - Jun 2023',
      description: 'Comprehensive staffing platform for automated HR management',
      highlights: [
        'NestJS backend: 1000+ concurrent users, 150+ API endpoints, 99% uptime',
        'MySQL schema: 45+ tables, sub 200ms response times',
        'Redis caching: 60% less DB load, 45% faster API responses'
      ]
    }
  ];
</script>

<section id="work" class="work">
  <div class="container">
    <h2 class="section-title">Work Experience</h2>

    <div class="work-grid">
      {#each experiences as exp, i}
        <div class="work-card glass" style="--delay: {i * 0.1}s">
          <div class="card-header">
            <div class="company-info">
              <h3 class="company-name">{exp.company}</h3>
              <span class="role">{exp.role}</span>
            </div>
            <span class="period">{exp.period}</span>
          </div>

          <p class="description">{exp.description}</p>

          {#if exp.highlights.length > 0}
            <ul class="highlights">
              {#each exp.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
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
    max-width: 1200px;
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

  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .work-card {
    padding: 1.5rem;
    border-radius: 1.25rem;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .work-card::before {
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

  .work-card:hover::before {
    opacity: 1;
  }

  .work-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), 0 0 30px rgba(129, 140, 248, 0.1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
    gap: 0.5rem;
  }

  .company-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .company-name {
    font-size: var(--text-lg);
    font-weight: 600;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .role {
    font-size: var(--text-sm);
    color: var(--text-primary);
    font-weight: 500;
  }

  .period {
    font-size: var(--text-xs);
    color: var(--text-muted);
    background: var(--glass-bg);
    padding: 0.25rem 0.625rem;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .description {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }

  .highlights {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
  }

  .highlights li {
    position: relative;
    padding-left: 1rem;
    margin-bottom: 0.375rem;
    font-size: var(--text-xs);
    color: var(--text-muted);
    line-height: 1.5;
  }

  .highlights li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }

  @media (max-width: 900px) {
    .work-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
      max-height: 70vh;
      overflow-y: auto;
      padding-right: 0.5rem;
    }

    .work-grid::-webkit-scrollbar {
      width: 4px;
    }

    .work-grid::-webkit-scrollbar-track {
      background: var(--glass-bg);
      border-radius: 2px;
    }

    .work-grid::-webkit-scrollbar-thumb {
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

    .work-card {
      padding: 1.25rem;
    }

    .card-header {
      flex-direction: column;
    }

    .period {
      align-self: flex-start;
    }
  }
</style>
