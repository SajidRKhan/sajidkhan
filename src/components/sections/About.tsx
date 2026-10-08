const capabilities = [
  {
    number: "01",
    title: "Backend",
    skills: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST APIs"],
  },
  {
    number: "02",
    title: "Frontend",
    skills: ["JavaScript", "jQuery", "Bootstrap", "HTML", "CSS"],
  },
  {
    number: "03",
    title: "Platforms",
    skills: ["SaaS", "Marketplaces", "WordPress", "Admin Systems", "Multi-role Apps"],
  },
  {
    number: "04",
    title: "Integrations",
    skills: ["Payment Gateways", "Third-party APIs", "AI Automation", "Webhooks", "Authentication"],
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="about-heading">
          <div className="section-heading-label">
            <span className="section-number">03</span>
            <span className="section-kicker">ABOUT</span>
          </div>

          <span className="about-heading-note">
            FULL-STACK DEVELOPMENT · PRODUCT ENGINEERING
          </span>
        </div>

        {/* Main About */}
        <div className="about-main">
          <div className="about-title-wrap">
            <h2 className="about-title">
              I build beyond
              <br />
              <span>the interface.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I&apos;m a full-stack developer focused on building
              production-ready web applications and digital products.
            </p>

            <p className="about-copy">
              My work goes beyond making interfaces look good. I work across
              backend architecture, databases, APIs, business logic, payments,
              integrations and frontend experiences to turn requirements into
              software people can actually use.
            </p>

            <p className="about-copy">
              I&apos;ve worked on SaaS products, marketplaces, booking
              platforms, business systems and custom web applications, with a
              focus on maintainable code and practical solutions to real
              business problems.
            </p>

            <a href="#experience" className="about-link">
              More about my experience
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* Profile Facts */}
        <div className="about-facts">
          <div className="about-fact">
            <span className="about-fact-label">EXPERIENCE</span>
            <strong>7+ Years</strong>
            <p>Professional development</p>
          </div>

          <div className="about-fact">
            <span className="about-fact-label">BASED IN</span>
            <strong>Karachi, PK</strong>
            <p>Working with clients globally</p>
          </div>

          <div className="about-fact">
            <span className="about-fact-label">CORE BACKEND</span>
            <strong>PHP / Laravel</strong>
            <p>Applications &amp; APIs</p>
          </div>

          <div className="about-fact">
            <span className="about-fact-label">AVAILABILITY</span>

            <div className="about-availability">
              <i />
              <strong>Available</strong>
            </div>

            <p>Remote &amp; freelance work</p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="capabilities">
          <div className="capabilities-heading">
            <div>
              <span>WHAT I WORK WITH</span>
              <h3>Capabilities &amp; stack</h3>
            </div>

            <p>
              Technologies are tools. I choose them around the product,
              requirements and problem being solved.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((capability) => (
              <div
                className="capability-card"
                key={capability.title}
              >
                <div className="capability-top">
                  <span>{capability.number}</span>
                  <span>↗</span>
                </div>

                <h4>{capability.title}</h4>

                <ul>
                  {capability.skills.map((skill) => (
                    <li key={skill}>
                      <span>{skill}</span>
                      <i />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}