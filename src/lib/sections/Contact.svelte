<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  
  const contactInfo = {
    email: 'arthur.arslanoov@gmail.com',
    github: 'https://github.com/arslanov-artur',
    linkedin: 'https://linkedin.com/in/artur-arslanov',
    telegramChannel: 'https://t.me/js_arthur',
    telegramAccount: 'https://t.me/arthur_arslanov',
    whatsapp: 'https://wa.me/+4915257550122'
  };
</script>

<section id="contact" class="contact">
    <div class="container">
        <div class="content">
          <h2 class="section-title" in:fade={{ duration: 600 }}>
            <span class="text-gradient-animated">Get In Touch</span>
          </h2>
          
          <div class="contact-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <p class="contact-text">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div class="contact-methods">
              <div class="primary-buttons">
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" 
                   class="contact-button btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                
                <a href={contactInfo.telegramChannel} target="_blank" rel="noopener noreferrer" 
                   class="contact-button btn-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram Channel
                </a>
              </div>
              
              <div class="secondary-contact">
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" 
                   class="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                
                <a href={contactInfo.telegramAccount} target="_blank" rel="noopener noreferrer" 
                   class="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
                
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" 
                   class="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
                
                <a href="mailto:{contactInfo.email}" class="contact-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22,7-10,5L2,7"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>
            
            <div class="footer-text" in:fade={{ duration: 600, delay: 800 }}>
              <p class="shimmer">Built with Svelte • Hosted on GitHub Pages</p>
              <p>&copy; 2025 Artur Arslanov. All rights reserved.</p>
            </div>
          </div>
        </div>
    </div>
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
  
  .primary-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .btn-secondary {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-weight: 500;
    font-size: var(--text-lg);
    background: var(--gradient-primary);
    color: white;
    transition: all var(--transition-base) var(--ease-out);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.9;
    cursor: pointer;
  }
  
  .btn-secondary:hover {
    opacity: 1;
    box-shadow: 0 8px 30px rgba(129, 140, 248, 0.3);
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
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
    animation: pulse-glow 4s ease-in-out infinite;
    cursor: pointer;
  }
  
  .contact-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .contact-button:hover {
    box-shadow: 0 10px 40px rgba(129, 140, 248, 0.4), var(--glow-primary);
  }
  
  .contact-button:hover::before {
    width: 300px;
    height: 300px;
  }
  
  .secondary-contact {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
  }
  
  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    background: var(--glass-bg);
    /* Removed backdrop-filter to improve scroll performance */
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  
  .contact-link::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(129, 140, 248, 0.3), transparent);
    transform: translateX(-100%);
    /* Removed transition to prevent drag */
  }
  
  .contact-link:hover {
    background: var(--bg-overlay);
    border-color: var(--color-primary);
    color: var(--color-primary);
    box-shadow: 0 5px 20px rgba(129, 140, 248, 0.3);
  }
  
  .contact-link:hover::after {
    transform: translateX(100%);
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
    .contact {
      padding: 1rem;
    }
    
    .container {
      padding: 0 1rem;
    }
    
    .section-title {
      font-size: var(--text-2xl);
      margin-bottom: 2rem;
    }
    
    .contact-text {
      font-size: var(--text-base);
      padding: 0 0.5rem;
    }
    
    .primary-buttons {
      flex-direction: column;
      width: 100%;
      padding: 0 1rem;
      align-items: center;
    }
    
    .contact-button, .btn-secondary {
      font-size: var(--text-base);
      padding: 0.875rem 2rem;
      width: 100%;
      max-width: 320px;
    }
    
    .secondary-contact {
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      margin: 0 auto;
    }
    
    .contact-link {
      justify-content: center;
    }
  }
</style>