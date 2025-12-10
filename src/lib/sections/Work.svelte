<script lang="ts">
</script>

<section id="work" class="work">
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>

  <div class="container">
    <div class="bento-grid">
      <div class="card c1 glass">
        <span class="badge">Now</span>
        <h3>SalaryGuide</h3>
        <p class="role">Senior Software Engineer</p>
        <p class="desc">Transparent salary data for paid media and SEO professionals</p>
      </div>

      <div class="card c2 glass"><span class="skill">TypeScript</span></div>

      <div class="card c3 glass">
        <span class="stat-num">6+</span>
        <span class="stat-txt">YOE</span>
      </div>

      <div class="card c4 glass">
        <div class="card-head">
          <h4>Juro</h4>
          <span class="period">2023 - 2025</span>
        </div>
        <p class="role">Senior Software Engineer</p>
        <p class="desc">LegalTech — contract automation</p>
        <div class="tags"><span>8000+ contracts/mo</span></div>
      </div>

      <div class="card c5 glass"><span class="skill">React</span></div>

      <div class="card c6 glass">
        <span class="stat-num">2</span>
        <span class="stat-txt">devs mentored</span>
      </div>

      <div class="card c7 glass">
        <div class="card-head">
          <h4>Ancor</h4>
          <span class="period">2019 - 2023</span>
        </div>
        <p class="role">Software Engineer</p>
        <p class="desc">Staffing platform for HR</p>
        <div class="tags"><span>1000+ users</span></div>
      </div>

      <div class="card c8 glass"><span class="skill">Node</span></div>
      <div class="card c9 glass"><span class="skill">SQL</span></div>

      <div class="card c10 card-accent">
        <span class="accent-num">99%</span>
        <span class="accent-txt">uptime</span>
      </div>
    </div>
  </div>
</section>

<style>
  .work {
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
    background: radial-gradient(ellipse at 80% 40%, rgba(244, 114, 182, 0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 10% 60%, rgba(251, 191, 36, 0.05) 0%, transparent 50%);
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
    right: -5%;
    width: 35vw;
    height: 35vw;
    background: #f472b6;
  }

  .blob-2 {
    bottom: -15%;
    left: -10%;
    width: 40vw;
    height: 40vw;
    background: #fbbf24;
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(2%, 3%) scale(1.02); }
    50% { transform: translate(-1%, 5%) scale(0.98); }
    75% { transform: translate(3%, -2%) scale(1.01); }
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
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  /* CHAOTIC grid */
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 0.6rem;
    height: 70vh;
    max-height: 600px;
  }

  /* Chaotic positioning - center filled, corners have gaps */
  .c1 { grid-column: 2 / 6; grid-row: 1 / 4; }      /* SalaryGuide */
  .c2 { grid-column: 8 / 9; grid-row: 3 / 4; }      /* TypeScript */
  .c3 { grid-column: 7 / 9; grid-row: 1 / 3; }      /* 6+ yrs */
  .c4 { grid-column: 9 / 13; grid-row: 2 / 4; }     /* Juro */
  .c5 { grid-column: 6 / 7; grid-row: 2 / 3; }      /* React */
  .c6 { grid-column: 1 / 3; grid-row: 4 / 6; }      /* 2 devs mentored */
  .c7 { grid-column: 3 / 7; grid-row: 4 / 7; }      /* Ancor */
  .c8 { grid-column: 6 / 7; grid-row: 3 / 4; }      /* Node */
  .c9 { grid-column: 7 / 8; grid-row: 3 / 4; }      /* SQL */
  .c10 { grid-column: 7 / 10; grid-row: 4 / 6; }    /* 99% accent */

  /* Card base */
  .card {
    padding: 1.5rem;
    border-radius: 1.25rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .card::before {
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

  .card:hover::before {
    opacity: 1;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-lg), 0 0 20px rgba(129, 140, 248, 0.1);
  }

  /* Featured card (c1) */
  .c1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    padding: 2rem;
  }

  .badge {
    display: inline-block;
    width: fit-content;
    padding: 0.25rem 0.75rem;
    background: var(--gradient-primary);
    color: white;
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .c1 h3 {
    font-size: var(--text-2xl);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
  }

  .role {
    font-size: var(--text-sm);
    color: var(--text-primary);
    font-weight: 500;
    margin: 0;
  }

  .desc {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.5;
    margin: 0;
  }

  /* Stat cards (c3, c6) */
  .c3, .c6 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  .stat-num {
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-txt {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
  }

  /* Job cards (c4, c7) */
  .c4, .c7 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .c4 h4, .c7 h4 {
    font-size: var(--text-lg);
    color: var(--text-primary);
    font-weight: 600;
    margin: 0;
  }

  .period {
    font-size: var(--text-xs);
    color: var(--text-muted);
    background: var(--glass-bg);
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
    white-space: nowrap;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tags span {
    font-size: var(--text-xs);
    color: var(--color-primary);
    background: rgba(129, 140, 248, 0.1);
    padding: 0.25rem 0.6rem;
    border-radius: 8px;
  }

  /* Skill cards (c2, c5, c8, c9) */
  .c2, .c5, .c8, .c9 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skill {
    font-size: var(--text-base);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Accent stat */
  .card-accent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: var(--gradient-primary);
    padding: 1rem;
  }

  .accent-num {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: white;
    line-height: 1;
  }

  .accent-txt {
    font-size: var(--text-sm);
    color: rgba(255,255,255,0.8);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .work {
      height: auto;
      min-height: auto;
      padding: 2rem 1rem;
      overflow: visible;
    }

    .bento-grid {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      height: auto;
      max-height: none;
    }

    .card {
      grid-column: auto !important;
      grid-row: auto !important;
    }

    /* Featured cards full width */
    .c1, .c4, .c7 {
      order: 0;
    }

    /* Stats smaller */
    .c3, .c6, .c10 {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
    }

    .c3 .stat-num, .c6 .stat-num {
      font-size: var(--text-xl);
    }

    /* Skills in a row */
    .c2, .c5, .c8, .c9 {
      display: inline-flex;
      width: auto;
      padding: 0.75rem 1.25rem;
    }
  }

  @media (max-width: 600px) {
    .work {
      padding: 2.5rem 1.25rem;
    }

    .container {
      padding: 0;
    }

    .bento-grid {
      gap: 1rem;
    }

    .card {
      padding: 1.5rem;
      border-radius: 1.25rem;
    }

    /* Featured card */
    .c1 {
      padding: 1.75rem;
    }

    .badge {
      padding: 0.35rem 1rem;
      font-size: var(--text-xs);
    }

    .c1 h3 {
      font-size: var(--text-xl);
    }

    .role {
      font-size: var(--text-base);
    }

    .c1 .desc {
      font-size: var(--text-sm);
      line-height: 1.6;
    }

    /* Job cards */
    .c4, .c7 {
      padding: 1.5rem;
    }

    .c4 h4, .c7 h4 {
      font-size: var(--text-lg);
    }

    .period {
      font-size: var(--text-xs);
      padding: 0.3rem 0.75rem;
    }

    .tags span {
      font-size: var(--text-xs);
      padding: 0.35rem 0.75rem;
    }

    /* Stat cards */
    .c3, .c6, .c10 {
      padding: 1.25rem 1.5rem;
    }

    .stat-num {
      font-size: var(--text-xl);
    }

    .stat-txt {
      font-size: var(--text-xs);
    }

    /* Skill cards */
    .c2, .c5, .c8, .c9 {
      padding: 1rem 1.5rem;
    }

    .skill {
      font-size: var(--text-base);
    }

    /* Accent card */
    .card-accent {
      padding: 1.5rem;
      border-radius: 1.25rem;
    }

    .accent-num {
      font-size: var(--text-xl);
    }

    .accent-txt {
      font-size: var(--text-xs);
    }

    .blob-1, .blob-2 {
      display: none;
    }

    .bg-grid {
      opacity: 0.3;
    }
  }
</style>
