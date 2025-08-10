<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  const skills = [
    {
      category: 'Frontend',
        items: [
        'TypeScript',
        'React',
        'Next.js',
        'Material UI',
        'Ant Design',
        'Styled Components',
        'Svelte'
      ]
    },
    {
      category: 'Backend',
      items: ['Node.js', 'NestJS', 'Express.js', 'REST API', 'GraphQL', 'Microservices Architecture']
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ElasticSearch', 'TypeORM', 'MikroORM']
    },
    {
      category: 'AWS',
      items: ['S3', 'Textract', 'SDK integration']
    },
  ];
</script>

<section id="about" class="about">
    <div class="container">
        <div class="content">
          <h2 class="section-title" in:fade={{ duration: 600 }}>
            About Me
          </h2>
          
          <div class="about-grid">
            <div class="about-text" in:fly={{ x: -30, duration: 800, delay: 200 }}>
              <p>
                Senior Software Engineer with 5+ years of commercial experience solving complex technical
                challenges. I've built real-time collaboration systems, automated document processing pipelines,
                and designed scalable API architectures
              </p>
              <p>
                Delivered measurable results: platforms handling 1000+ concurrent users, 3x improvement
                in speed, and 60% reduction in manual workflows through automation
              </p>
              <p>
                I have a strong mentoring background, helping junior developers improve their skills and
                coding proficiency
              </p>
            </div>

            <div class="skills-container" in:fly={{ x: 30, duration: 800, delay: 400 }}>
              {#each skills as skillGroup, i}
                <div class="skill-group" in:fade={{ duration: 600, delay: 600 + i * 100 }}>
                  <h3>{skillGroup.category}</h3>
                  <div class="skill-items">
                    {#each skillGroup.items as skill}
                      <span class="skill-tag glass"><span>{skill}</span></span>
                    {/each}
                  </div>
                </div>
              {/each}

              <h4 class="text-align-center">And more</h4>
            </div>
          </div>
        </div>
    </div>
</section>

<style>
  .about {
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
    background: linear-gradient(270deg, var(--color-primary), var(--color-accent-1));
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 6s ease infinite;
    position: relative;
    display: inline-block;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    text-align: left;
  }
  
  .about-text p {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }
  
  .skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .skill-group h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: var(--font-sans);
    font-weight: 600;
  }
  
  .skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .skill-tag {
    padding: 0.5rem 1.25rem;
    border-radius: 25px;
    font-size: var(--text-sm);
    color: var(--text-primary);
    transition: box-shadow var(--transition-base) var(--ease-out), border-color var(--transition-base) var(--ease-out), color var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
    background: var(--glass-bg);
    /* Removed backdrop-filter to improve scroll performance */
    border: 1px solid var(--glass-border);
  }
  
  .skill-tag span {
    position: relative;
    z-index: 1;
  }
  
  .skill-tag::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity var(--transition-base);
    border-radius: 25px;
  }
  
  .skill-tag:hover {
    box-shadow: var(--shadow-md), 0 0 20px rgba(129, 140, 248, 0.3);
    border-color: var(--color-primary);
    color: white;
  }
  
  .skill-tag:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .about {
      padding: 3rem 1rem;
    }
    
    .container {
      padding: 0 1rem;
    }
    
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 2rem;
    }
    
    .about-text p {
      font-size: var(--text-base);
      margin-bottom: 1rem;
    }
    
    .skills-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .skill-group h3 {
      font-size: var(--text-lg);
    }
    
    .skill-tag {
      font-size: var(--text-xs);
      padding: 0.375rem 1rem;
    }
  }
</style>