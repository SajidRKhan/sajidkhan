import Container from "@/components/ui/Container";

export default function Hero() {
  return (
      <section className="hero">
        <div className="hero-glow" />

        <Container>
          <div className="hero-grid">
            <div className="hero-content">
              <div className="availability">
                <span className="availability-dot">
                  <span />
                </span>

                Available for freelance &amp; remote work
              </div>

              <p className="hero-eyebrow">FULL-STACK DEVELOPER</p>

              <h1 className="hero-title">
                I build software
                <br />
                that businesses
                <br />
                <span>actually use.</span>
              </h1>

              <p className="hero-description">
                I build scalable web applications, SaaS products, marketplaces,
                APIs and automation that solve real business problems.
              </p>

              <div className="hero-actions">
                <a href="#work" className="button button-primary">
                  Explore my work
                  <span aria-hidden="true">↓</span>
                </a>

                <a href="/resume.pdf" target="_blank" className="button button-secondary">
                  Download résumé
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orbit visual-orbit-one" />
              <div className="visual-orbit visual-orbit-two" />

              <div className="dashboard-card dashboard-main">
                <div className="card-header">
                  <div>
                    <span className="card-label">SYSTEM OVERVIEW</span>
                    <strong>Production</strong>
                  </div>

                  <span className="live-status">
                    <i />
                    Live
                  </span>
                </div>

                <div className="metric">
                  <span>Active users</span>
                  <strong>12,482</strong>
                  <small>+18.4%</small>
                </div>

                <div className="chart">
                  <span style={{ height: "32%" }} />
                  <span style={{ height: "48%" }} />
                  <span style={{ height: "40%" }} />
                  <span style={{ height: "64%" }} />
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "79%" }} />
                  <span style={{ height: "68%" }} />
                  <span style={{ height: "91%" }} />
                  <span style={{ height: "82%" }} />
                  <span style={{ height: "100%" }} />
                </div>
              </div>

              <div className="dashboard-card api-card">
                <div className="api-top">
                  <span>API REQUEST</span>
                  <strong>200 OK</strong>
                </div>

                <code>POST /api/orders</code>

                <div className="api-bottom">
                  <span>Response time</span>
                  <strong>142ms</strong>
                </div>
              </div>

              <div className="dashboard-card deploy-card">
                <div className="deploy-icon">✓</div>

                <div>
                  <span>Deployment</span>
                  <strong>Successful</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>40+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>7+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>30+</strong>
              <span>Clients</span>
            </div>

            <div className="hero-stack">
              <span>CORE STACK</span>
              <p>PHP · Laravel · CodeIgniter · JavaScript</p>
            </div>
          </div>
        </Container>
      </section>
  );
}