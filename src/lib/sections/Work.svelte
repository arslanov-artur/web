<script lang="ts">
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly, fade } from 'svelte/transition';
  
  let sectionElement: HTMLElement;
  let visible = false;
  
  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      role: 'Senior Fullstack Developer',
      period: '2021 - Present',
      description: 'Leading the development of cloud-native applications and mentoring junior developers.',
      highlights: [
        'Architected microservices reducing latency by 40%',
        'Led team of 5 developers on flagship product',
        'Implemented CI/CD pipeline saving 10+ hours/week'
      ]
    },
    {
      company: 'Digital Solutions Co.',
      role: 'Fullstack Developer',
      period: '2018 - 2021',
      description: 'Built scalable web applications and RESTful APIs for enterprise clients.',
      highlights: [
        'Developed React-based dashboard used by 10K+ users',
        'Optimized database queries improving performance by 60%',
        'Integrated third-party payment systems'
      ]
    },
    {
      company: 'StartUp Labs',
      role: 'Junior Developer',
      period: '2016 - 2018',
      description: 'Full-stack development for various startup projects and MVPs.',
      highlights: [
        'Built 5+ MVPs from scratch',
        'Learned modern web development practices',
        'Worked directly with founders and stakeholders'
      ]
    }
  ];
</script>

<section bind:this={sectionElement} class="work">
  <IntersectionObserver element={sectionElement} bind:intersecting={visible} threshold={0.3}>
    <div class="container">
      {#if visible}
        <div class="content">
          <h2 class="section-title" in:fade={{ duration: 600 }}>
            Work Experience
          </h2>
          
          <div class="timeline">
            {#each experiences as exp, i}
              <div class="timeline-item" in:fly={{ x: i % 2 === 0 ? -50 : 50, duration: 800, delay: 200 + i * 150 }}>
                <div class="timeline-marker"></div>
                <div class="timeline-content glass">
                  <div class="timeline-header">
                    <h3>{exp.role}</h3>
                    <span class="period">{exp.period}</span>
                  </div>
                  <h4>{exp.company}</h4>
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
      {/if}
    </div>
  </IntersectionObserver>
</section>

<style>
  .work {
    background-color: var(--bg-base);
  }
  
  .container {
    max-width: 1000px;
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
    padding-right: 4rem;
  }
  
  .timeline-item:nth-child(even) {
    left: 50%;
    padding-left: 4rem;
  }
  
  .timeline-marker {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--gradient-primary);
    border-radius: 50%;
    top: 2rem;
    z-index: 1;
  }
  
  .timeline-item:nth-child(odd) .timeline-marker {
    right: -10px;
  }
  
  .timeline-item:nth-child(even) .timeline-marker {
    left: -10px;
  }
  
  .timeline-content {
    padding: 2rem;
    border-radius: 1rem;
    transition: all var(--transition-base) var(--ease-out);
  }
  
  .timeline-content:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
  
  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .timeline-content h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-weight: 600;
  }
  
  .timeline-content h4 {
    font-size: var(--text-lg);
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-family: var(--font-sans);
    font-weight: 500;
  }
  
  .period {
    font-size: var(--text-sm);
    color: var(--text-muted);
    font-weight: 500;
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
  }
  
  @media (max-width: 768px) {
    .timeline::before {
      left: 20px;
    }
    
    .timeline-item {
      width: 100%;
      padding-left: 60px !important;
      padding-right: 2rem !important;
      left: 0 !important;
    }
    
    .timeline-marker {
      left: 10px !important;
      right: auto !important;
    }
    
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 3rem;
    }
  }
</style>