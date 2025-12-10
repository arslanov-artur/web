<script lang="ts">
</script>

<section id="work" class="work">
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>

  <div class="container">
    <div class="bento-grid">
      <!-- Big featured -->
      <div class="card card-featured glass">
        <span class="badge">Now</span>
        <h3>SalaryGuide</h3>
        <p class="role">Senior Software Engineer</p>
        <p class="desc">Transparent salary data for paid media and SEO professionals</p>
      </div>

      <!-- Tiny stats cluster -->
      <div class="card card-mini glass">
        <span class="mini-num">6+</span>
        <span class="mini-txt">yrs</span>
      </div>

      <div class="card card-mini glass">
        <span class="mini-num">50+</span>
        <span class="mini-txt">projects</span>
      </div>

      <!-- Juro wide -->
      <div class="card card-job-wide glass">
        <div class="card-head">
          <h4>Juro</h4>
          <span class="period">2023 - 2025</span>
        </div>
        <p class="role">Senior Software Engineer</p>
        <p class="desc">LegalTech — contract automation platform</p>
        <div class="tags"><span>8000+ contracts/mo</span></div>
      </div>

      <!-- Skills scattered -->
      <div class="card card-skill glass"><span>TypeScript</span></div>
      <div class="card card-skill glass"><span>React</span></div>

      <!-- Ancor tall -->
      <div class="card card-job-tall glass">
        <div class="card-head">
          <h4>Ancor</h4>
          <span class="period">2019 - 2023</span>
        </div>
        <p class="role">Software Engineer</p>
        <p class="desc">Staffing platform for HR automation</p>
        <div class="tags"><span>1000+ users</span></div>
      </div>

      <div class="card card-skill glass"><span>Node</span></div>
      <div class="card card-skill glass"><span>SQL</span></div>

      <!-- Accent -->
      <div class="card card-accent glass">
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

  /* Chaotic 6-column grid */
  .bento-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1.4fr 0.6fr 0.7fr 0.7fr;
    grid-template-rows: 1fr 0.5fr 0.5fr;
    gap: 0.75rem;
  }

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

  /* Featured - big anchor */
  .card-featured {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
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

  .card-featured h3 {
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

  /* Mini stats */
  .card-mini {
    grid-column: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 1rem;
  }

  .mini-num {
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .mini-txt {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
  }

  /* Juro - wide top right */
  .card-job-wide {
    grid-column: 5 / 7;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    padding: 1.25rem;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .card-job-wide h4,
  .card-job-tall h4 {
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

  /* Skill cards - scattered & colorful */
  .card-skill {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  .card-skill span {
    font-size: var(--text-base);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card-skill:nth-of-type(1) { grid-column: 5; grid-row: 2; }
  .card-skill:nth-of-type(2) { grid-column: 6; grid-row: 2; }
  .card-skill:nth-of-type(3) { grid-column: 1; grid-row: 3; }
  .card-skill:nth-of-type(4) { grid-column: 2; grid-row: 3; }

  /* Ancor - bottom middle */
  .card-job-tall {
    grid-column: 3 / 5;
    grid-row: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  /* Accent stat */
  .card-accent {
    grid-column: 5 / 7;
    grid-row: 3;
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
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }

    .card-featured,
    .card-job-wide,
    .card-job-tall,
    .card-accent {
      grid-column: span 2;
      grid-row: auto;
    }

    .card-mini,
    .card-skill {
      grid-column: auto;
      grid-row: auto;
    }

    .card-skill:nth-of-type(1),
    .card-skill:nth-of-type(2),
    .card-skill:nth-of-type(3),
    .card-skill:nth-of-type(4) {
      grid-column: auto;
      grid-row: auto;
    }
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1rem;
    }

    .bento-grid {
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .card {
      padding: 1rem;
    }

    .card-featured {
      padding: 1.25rem;
    }

    .card-featured h3 {
      font-size: var(--text-xl);
    }
  }
</style>
