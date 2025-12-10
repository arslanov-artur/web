<script lang="ts">
  const publications = [
    {
      title: 'Your Tech Stack Doesn\'t Matter',
      link: 'https://www.linkedin.com/posts/artur-arslanov_your-tech-stack-doesnt-matter-your-users-activity-7359454836905455616-AvJF'
    },
    {
      title: 'The Myth of the 10x Developer',
      link: 'https://www.linkedin.com/posts/artur-arslanov_the-myth-of-the-10x-developer-met-a-10x-activity-7349791548181549056-WR5O'
    }
  ];
</script>

<section id="publications" class="publications">
  <div class="container">
    <div class="content">
      <h2 class="section-title">Publications</h2>

      <div class="publications-list">
        {#each publications as post}
          <a href={post.link} target="_blank" rel="noopener noreferrer" class="publication-item glass">
            <svg class="linkedin-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span class="publication-title">{post.title}</span>
            <svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .publications {
    background-color: var(--bg-base);
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content {
    text-align: center;
  }

  .section-title {
    font-size: var(--text-3xl);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .publications-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .publication-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-base) var(--ease-out);
  }

  .publication-item:hover {
    transform: translateX(4px);
    border-color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(129, 140, 248, 0.15);
  }

  .linkedin-icon {
    flex-shrink: 0;
    color: var(--text-muted);
    transition: color var(--transition-base);
  }

  .publication-item:hover .linkedin-icon {
    color: var(--color-primary);
  }

  .publication-title {
    flex: 1;
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--text-primary);
    text-align: left;
  }

  .arrow-icon {
    flex-shrink: 0;
    color: var(--text-muted);
    transition: all var(--transition-base);
  }

  .publication-item:hover .arrow-icon {
    color: var(--color-primary);
    transform: translateX(2px);
  }

  @media (max-width: 768px) {
    .publications {
      padding: 3rem 1rem;
    }

    .container {
      padding: 0 1rem;
    }

    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 1.5rem;
    }

    .publication-item {
      padding: 0.875rem 1.25rem;
    }

    .publication-title {
      font-size: var(--text-sm);
    }
  }
</style>
