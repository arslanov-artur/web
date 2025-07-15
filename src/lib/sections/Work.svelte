<script lang="ts">
  let sectionElement: HTMLElement;
  
  const experiences = [
    {
      company: 'Juro',
      role: 'Senior Fullstack Developer',
      period: 'Jun 2023 - Present',
      description: 'London based LegalTech startup specializing in AI-driven contract automation platform',
      highlights: [
        'Optimized React performance from 2.4s to 800ms (3x improvement) for 1000+ items',
        'Built document pipeline processing 8000+ contracts/month with 82% automation',
        'Reduced WebSocket latency by 35%, supporting 25+ concurrent users',
        'Mentored 2 junior developers: 25% faster PR approvals, 30% fewer bugs'
      ]
    },
    {
      company: 'Ancor',
      role: 'Fullstack Developer',
      period: 'Oct 2019 - Jun 2023',
      description: 'Comprehensive staffing platform for automated HR management',
      highlights: [
        'Architected NestJS backend serving 1000+ concurrent users with 99% uptime',
        'Designed MySQL schema with 45+ tables, achieving sub-200ms query times',
        'Built API integration layer connecting 5+ services, processing 50K+ calls daily',
        'Implemented Redis caching reducing database load by 60%'
      ]
    }
  ];
</script>

<section id="work" bind:this={sectionElement} class="work">
    <div class="container">
        <div class="content">
          <h2 class="section-title">
            Work Experience
          </h2>
          
          <div class="timeline">
            {#each experiences as exp, i}
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content glass">
                  <div class="timeline-header">
                    <h3>{exp.company}</h3>
                    <span class="period">{exp.period}</span>
                  </div>
                  <h4>{exp.role}</h4>
                  <p>{exp.description}</p>
                  <ul class="highlights">
                    {#each exp.highlights as highlight}
                      <li>{highlight}</li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/each}
          </div>
        </div>
    </div>
</section>

<style>
  .work {
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
  
  .timeline {
    position: relative;
    padding: 2rem 0;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--glass-border);
  }
  
  .timeline-item {
    position: relative;
    width: 50%;
    padding: 2rem;
    text-align: left;
  }
  
  .timeline-item:nth-child(odd) {
    left: 0;
    padding-right: 6rem;
  }
  
  .timeline-item:nth-child(even) {
    left: 50%;
    padding-left: 6rem;
  }
  
  .timeline-marker {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--gradient-primary);
    border-radius: 50%;
    top: 2rem;
    z-index: 1;
    box-shadow: 0 0 0 4px var(--bg-base), 0 0 0 6px var(--color-primary);
    /* Removed animation to improve scroll performance */
  }
  
  .timeline-item:nth-child(odd) .timeline-marker {
    right: -10px;
  }
  
  .timeline-item:nth-child(even) .timeline-marker {
    left: -10px;
  }
  
  .timeline-content {
    padding: 2.5rem;
    border-radius: 1rem;
    transition: box-shadow var(--transition-base) var(--ease-out), border-color var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
    max-width: 600px;
    transform-origin: center;
  }
  
  .timeline-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: var(--gradient-primary);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .timeline-content:hover {
    box-shadow: var(--shadow-lg), 0 10px 30px rgba(129, 140, 248, 0.2);
    border-color: var(--color-primary);
  }
  
  .timeline-content:hover::before {
    left: 0;
  }
  
  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .timeline-content h3 {
    font-size: var(--text-2xl);
    color: var(--color-primary);
    font-family: var(--font-display);
    font-weight: 600;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .timeline-content h4 {
    font-size: var(--text-lg);
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: var(--font-sans);
    font-weight: 500;
  }
  
  .period {
    font-size: var(--text-base);
    color: var(--text-muted);
    font-weight: 500;
    background: var(--glass-bg);
    padding: 0.375rem 1rem;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    white-space: nowrap;
  }
  
  .timeline-content p {
    font-size: var(--text-base);
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
  
  .highlights {
    list-style: none;
    padding: 0;
  }
  
  .highlights li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: var(--text-sm);
    color: var(--text-muted);
  }
  
  .highlights li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    animation: slide-in-left 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  .highlights li {
    opacity: 0;
    animation: slide-in-left 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  .timeline-item:nth-child(1) .highlights li:nth-child(1) { animation-delay: 0.3s; }
  .timeline-item:nth-child(1) .highlights li:nth-child(2) { animation-delay: 0.4s; }
  .timeline-item:nth-child(1) .highlights li:nth-child(3) { animation-delay: 0.5s; }
  .timeline-item:nth-child(1) .highlights li:nth-child(4) { animation-delay: 0.6s; }
  
  .timeline-item:nth-child(2) .highlights li:nth-child(1) { animation-delay: 0.5s; }
  .timeline-item:nth-child(2) .highlights li:nth-child(2) { animation-delay: 0.6s; }
  .timeline-item:nth-child(2) .highlights li:nth-child(3) { animation-delay: 0.7s; }
  .timeline-item:nth-child(2) .highlights li:nth-child(4) { animation-delay: 0.8s; }
  
  @media (max-width: 768px) {
    .work {
      padding: 1rem 0;
    }
    
    .container {
      padding: 0;
      max-width: 100%;
    }
    
    .timeline {
      padding: 0;
      margin: 0;
    }
    
    .timeline::before {
      left: 16px;
      width: 2px;
      background: linear-gradient(180deg, transparent, var(--color-primary) 20%, var(--color-primary) 80%, transparent);
    }
    
    .timeline-item {
      width: 100%;
      padding: 1rem 0 1rem 40px !important;
      left: 0 !important;
      margin: 0;
    }
    
    .timeline-marker {
      left: 8px !important;
      right: auto !important;
      width: 16px;
      height: 16px;
      border: 2px solid var(--bg-base);
      box-shadow: 0 0 0 2px var(--color-primary);
      top: 1.5rem;
    }
    
    .timeline-content {
      padding: 1.25rem;
      margin-right: 1rem;
      border-radius: 0.75rem;
    }
    
    .timeline-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
    }
    
    .timeline-content h3 {
      font-size: var(--text-lg);
    }
    
    .timeline-content h4 {
      font-size: var(--text-base);
    }
    
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 2rem;
      padding: 0 1rem;
    }
    
    .period {
      order: -1;
      font-size: var(--text-xs);
    }
    
    .highlights {
      margin-left: -0.5rem;
    }
    
    .highlights li {
      font-size: var(--text-sm);
      line-height: 1.6;
    }
  }
</style>