<script lang="ts">
</script>

<section id="work" class="work">
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>

  <div class="container">
    <div class="masonry">
      <!-- Col 1 -->
      <div class="col">
        <div class="card card-featured glass">
          <span class="badge">Now</span>
          <h3>SalaryGuide</h3>
          <p class="role">Senior Software Engineer</p>
          <p class="desc">Transparent salary data for paid media and SEO professionals</p>
        </div>
        <div class="card card-stat glass">
          <span class="stat-num">6+</span>
          <span class="stat-txt">Years</span>
        </div>
      </div>

      <!-- Col 2 -->
      <div class="col">
        <div class="card card-job glass">
          <div class="card-head">
            <h4>Juro</h4>
            <span class="period">2023 - 2025</span>
          </div>
          <p class="role">Senior Software Engineer</p>
          <p class="desc">LegalTech — contract automation platform</p>
          <div class="tags">
            <span>8000+ contracts/mo</span>
          </div>
        </div>
        <div class="card card-stat glass accent">
          <span class="stat-num">50+</span>
          <span class="stat-txt">Projects</span>
        </div>
      </div>

      <!-- Col 3 -->
      <div class="col">
        <div class="card card-stat glass">
          <span class="stat-num">3x</span>
          <span class="stat-txt">Faster</span>
        </div>
        <div class="card card-job glass">
          <div class="card-head">
            <h4>Ancor</h4>
            <span class="period">2019 - 2023</span>
          </div>
          <p class="role">Software Engineer</p>
          <p class="desc">Staffing platform for HR automation</p>
          <div class="tags">
            <span>1000+ users</span>
          </div>
        </div>
      </div>

      <!-- Col 4 -->
      <div class="col">
        <div class="card card-title glass">
          <h2>Work</h2>
        </div>
        <div class="card card-stack glass">
          <div class="stack-items">
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
          </div>
        </div>
        <div class="card card-stat glass">
          <span class="stat-num">99.9%</span>
          <span class="stat-txt">Uptime</span>
        </div>
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
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  /* 4-column masonry */
  .masonry {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
  }

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
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
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg), 0 0 20px rgba(129, 140, 248, 0.1);
  }

  /* Featured card */
  .card-featured {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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

  /* Stat cards */
  .card-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.25rem;
  }

  .card-stat.accent {
    background: linear-gradient(135deg, rgba(129, 140, 248, 0.1), rgba(244, 114, 182, 0.1));
  }

  .stat-num {
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }

  .stat-txt {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0.25rem;
  }

  /* Job cards */
  .card-job {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .card-job h4 {
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
    margin-top: 0.25rem;
  }

  .tags span {
    font-size: var(--text-xs);
    color: var(--color-primary);
    background: rgba(129, 140, 248, 0.1);
    padding: 0.25rem 0.6rem;
    border-radius: 8px;
  }

  /* Title card */
  .card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.75rem 1.25rem;
  }

  .card-title h2 {
    font-size: var(--text-3xl);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-weight: 700;
  }

  /* Stack card */
  .card-stack {
    padding: 1.25rem;
  }

  .stack-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .stack-items span {
    font-size: var(--text-xs);
    color: var(--text-secondary);
    background: var(--glass-bg);
    padding: 0.35rem 0.6rem;
    border-radius: 8px;
    border: 1px solid var(--glass-border);
  }

  /* Responsive */
  @media (max-width: 900px) {
    .masonry {
      flex-wrap: wrap;
    }

    .col {
      flex: 1 1 45%;
      min-width: 200px;
    }
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 1rem;
    }

    .masonry {
      gap: 1rem;
    }

    .col {
      flex: 1 1 100%;
      gap: 1rem;
    }

    .card {
      padding: 1.25rem;
    }

    .card-featured h3 {
      font-size: var(--text-xl);
    }

    .card-title h2 {
      font-size: var(--text-2xl);
    }

    .stat-num {
      font-size: var(--text-xl);
    }
  }
</style>
