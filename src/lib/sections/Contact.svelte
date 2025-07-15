<script lang="ts">
  import { onMount } from 'svelte';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { fly, fade } from 'svelte/transition';
  
  let sectionElement: HTMLElement;
  let visible = false;
  
  const contactInfo = {
    email: 'arthur@example.com',
    github: 'https://github.com/arthur-arslanov',
    linkedin: 'https://linkedin.com/in/arthur-arslanov',
    twitter: 'https://twitter.com/arthur_dev'
  };
</script>

<section bind:this={sectionElement} class="contact">
  <IntersectionObserver element={sectionElement} bind:intersecting={visible} threshold={0.3}>
    <div class="container">
      {#if visible}
        <div class="content">
          <h2 class="section-title" in:fade={{ duration: 600 }}>
            Get In Touch
          </h2>
          
          <div class="contact-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <p class="contact-text">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div class="contact-methods">
              <a href="mailto:{contactInfo.email}" class="contact-button btn-primary">
                Send Email
              </a>
              
              <div class="social-links">
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" 
                   class="social-link" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                   class="social-link" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer"
                   class="social-link" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="footer-text" in:fade={{ duration: 600, delay: 800 }}>
              <p>Built with Svelte • Hosted on GitHub Pages</p>
              <p>&copy; 2024 Arthur Arslanov. All rights reserved.</p>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </IntersectionObserver>
</section>

<style>
  .contact {
    background-color: var(--bg-base);
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .content {
    text-align: center;
  }
  
  .section-title {
    font-size: var(--text-3xl);
    margin-bottom: 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  
  .contact-text {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    max-width: 600px;
    line-height: var(--leading-relaxed);
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .contact-button {
    padding: 1rem 3rem;
    border-radius: 50px;
    font-weight: 500;
    font-size: var(--text-lg);
    background: var(--gradient-primary);
    color: white;
    transition: all var(--transition-base) var(--ease-out);
    text-decoration: none;
    display: inline-block;
  }
  
  .contact-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-primary), var(--shadow-lg);
  }
  
  .social-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .social-link {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
    transition: all var(--transition-base) var(--ease-out);
  }
  
  .social-link:hover {
    background: var(--bg-overlay);
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
  }
  
  .footer-text {
    text-align: center;
    margin-top: 2rem;
  }
  
  .footer-text p {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin: 0.5rem 0;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 2rem;
    }
    
    .contact-text {
      font-size: var(--text-base);
    }
    
    .contact-button {
      font-size: var(--text-base);
    }
  }
</style>