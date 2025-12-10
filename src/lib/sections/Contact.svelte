<script lang="ts">
  const contactInfo = {
    email: 'arthur.arslanoov@gmail.com',
    github: 'https://github.com/arslanov-artur',
    linkedin: 'https://linkedin.com/in/artur-arslanov',
    telegramChannel: 'https://t.me/js_arthur',
    telegramAccount: 'https://t.me/arthur_arslanov',
    whatsapp: 'https://wa.me/+4915257550122'
  };

  const contactLinks = [
    { name: 'LinkedIn', href: contactInfo.linkedin, primary: true },
    { name: 'GitHub', href: contactInfo.github },
    { name: 'Telegram', href: contactInfo.telegramAccount },
    { name: 'WhatsApp', href: contactInfo.whatsapp },
    { name: 'Email', href: `mailto:${contactInfo.email}` },
    { name: 'Channel', href: contactInfo.telegramChannel }
  ];
</script>

<section id="contact" class="contact">
  <!-- Consistent background -->
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-grid"></div>

  <div class="container">
    <div class="bento-grid">
      <!-- Main CTA card -->
      <div class="bento-card cta-card glass">
        <h3>Let's work together</h3>
        <p>I'm always interested in hearing about new projects and opportunities.</p>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" class="cta-button">
          Connect on LinkedIn
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Contact links -->
      {#each contactLinks.filter(l => !l.primary) as link}
        <a href={link.href} target="_blank" rel="noopener noreferrer" class="bento-card link-card glass">
          <span class="link-name">{link.name}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      {/each}
    </div>

    <p class="footer-text">
      Built with Svelte &bull; &copy; 2025 Artur Arslanov
    </p>
  </div>
</section>

<style>
  .contact {
    background-color: var(--bg-base);
    height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  /* Background elements */
  .bg-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(129, 140, 248, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 70%, rgba(251, 191, 36, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  .bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.1;
    pointer-events: none;
    animation: float 20s ease-in-out infinite;
  }

  .blob-1 {
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 50vw;
    height: 50vw;
    background: #818cf8;
  }

  .blob-2 {
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 45vw;
    height: 45vw;
    background: #fbbf24;
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translateX(-50%) translate(0, 0) scale(1); }
    25% { transform: translateX(-50%) translate(2%, 3%) scale(1.02); }
    50% { transform: translateX(-50%) translate(-1%, 5%) scale(0.98); }
    75% { transform: translateX(-50%) translate(3%, -2%) scale(1.01); }
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  :global([data-theme="light"]) .bg-grid {
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    text-align: center;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .bento-card {
    padding: 1.25rem;
    border-radius: 1.25rem;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
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
    transform: scale(1.02);
    box-shadow: var(--shadow-lg), 0 0 30px rgba(129, 140, 248, 0.1);
  }

  /* CTA card */
  .cta-card {
    grid-column: span 5;
    padding: 2rem;
    text-align: center;
  }

  .cta-card h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin-bottom: 0.75rem;
  }

  .cta-card p {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    background: var(--gradient-primary);
    color: white;
    font-size: var(--text-sm);
    font-weight: 600;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(129, 140, 248, 0.4);
  }

  .cta-button svg {
    transition: transform 0.2s ease;
  }

  .cta-button:hover svg {
    transform: translateX(4px);
  }

  /* Link cards */
  .link-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.25rem 1rem;
  }

  .link-name {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-primary);
  }

  .arrow {
    color: var(--text-muted);
    transition: all 0.2s ease;
  }

  .link-card:hover .arrow {
    color: var(--color-primary);
    transform: translate(2px, -2px);
  }

  .footer-text {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  @media (max-width: 700px) {
    .bento-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .cta-card {
      grid-column: span 3;
    }
  }

  @media (max-width: 500px) {
    .container {
      padding: 0 1rem;
    }

    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .cta-card {
      grid-column: span 2;
      padding: 1.5rem;
    }

    .link-card {
      padding: 1rem;
    }

    .link-name {
      font-size: var(--text-xs);
    }
  }
</style>
