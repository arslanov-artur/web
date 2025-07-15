<script lang="ts">
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly, fade } from 'svelte/transition';
  
  let sectionElement: HTMLElement;
  let visible = false;
  
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue', 'Svelte', 'TypeScript', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git'] }
  ];
</script>

<section bind:this={sectionElement} class="about">
  <IntersectionObserver element={sectionElement} bind:intersecting={visible} threshold={0.3}>
    <div class="container">
      {#if visible}
        <div class="content">
          <h2 class="section-title" in:fade={{ duration: 600 }}>
            About Me
          </h2>
          
          <div class="about-grid">
            <div class="about-text" in:fly={{ x: -30, duration: 800, delay: 200 }}>
              <p>
                I'm a passionate fullstack developer with over 8 years of experience 
                building scalable web applications and leading development teams.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work on the web, 
                and has evolved into a career focused on creating elegant solutions to complex problems.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud architecture, and building 
                products that prioritize user experience and performance.
              </p>
            </div>
            
            <div class="skills-container" in:fly={{ x: 30, duration: 800, delay: 400 }}>
              {#each skills as skillGroup, i}
                <div class="skill-group" in:fade={{ duration: 600, delay: 600 + i * 100 }}>
                  <h3>{skillGroup.category}</h3>
                  <div class="skill-items">
                    {#each skillGroup.items as skill}
                      <span class="skill-tag glass">{skill}</span>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </IntersectionObserver>
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
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    display: flex;
    flex-direction: column;
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
    transition: all var(--transition-base) var(--ease-out);
  }
  
  .skill-tag:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 3rem;
    }
    
    .about-text p {
      font-size: var(--text-base);
    }
  }
</style>