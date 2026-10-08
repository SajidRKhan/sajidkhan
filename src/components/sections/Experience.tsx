const experiences = [
  {
    number: "01",
    company: "YNAPS",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Mar 2022 — Jul 2026",
    description:
      "Built and maintained custom web applications, CMS modules, e-commerce features and admin dashboards. Developed CodeIgniter workflows for authentication, reporting, file uploads, dynamic content and database-driven modules while delivering responsive user interfaces and production deployments.",
    stack: ["PHP", "CodeIgniter", "Laravel", "MySQL", "JavaScript", "jQuery"],
  },
  {
    number: "02",
    company: "Tamkeen International Co.",
    role: "Full Stack Developer",
    location: "Jeddah, Saudi Arabia",
    period: "Jul 2020 — Sep 2024",
    description:
      "Developed responsive web applications, role-based dashboards, scalable backend modules and e-commerce functionality using CodeIgniter and MySQL. Worked across testing, validation, database management, debugging and deployment.",
    stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    number: "03",
    company: "Illustrious Tech",
    role: "PHP Developer",
    location: "Karachi, Pakistan",
    period: "Dec 2019 — Jul 2020",
    description:
      "Worked with designers and senior developers on frontend and backend functionality for corporate web projects. Implemented new features, supported development workflows and resolved application performance and functionality issues.",
    stack: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    number: "04",
    company: "Cloudesk Solutions",
    role: "PHP Developer",
    location: "Karachi, Pakistan",
    period: "Feb 2019 — Dec 2019",
    description:
      "Delivered client web projects from requirements through implementation. Worked on database architecture, website functionality, feature releases, code updates, deployments and ongoing database and application maintenance.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    number: "05",
    company: "Nolin BPO",
    role: "Web Development Intern",
    location: "Karachi, Pakistan",
    period: "2018 — 2019",
    description:
      "Gained hands-on experience in web development by supporting frontend and backend tasks, working with PHP, MySQL and JavaScript, fixing website issues, implementing UI updates and learning real-world development workflows in a professional environment.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="portfolio-container">
        {/* Header */}
        <div className="experience-heading">
          <div className="section-heading-label">
            <span className="section-number">04</span>
            <span className="section-kicker">EXPERIENCE</span>
          </div>

          <span className="experience-heading-note">
            2019 — 2026 · 7+ YEARS
          </span>
        </div>

        {/* Intro */}
        <div className="experience-intro">
          <h2>
            Experience building
            <br />
            <span>real products.</span>
          </h2>

          <div className="experience-intro-copy">
            <p>
              Over the years, I&apos;ve worked across the full development
              lifecycle — turning requirements into production-ready web
              applications, platforms and business systems.
            </p>

            <span>PHP · Laravel · CodeIgniter · MySQL · JavaScript</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={`${experience.company}-${experience.period}`}
            >
              <div className="experience-number">
                <span>{experience.number}</span>
              </div>

              <div className="experience-company">
                <span className="experience-location">
                  {experience.location}
                </span>

                <h3>{experience.company}</h3>

                <p>{experience.role}</p>
              </div>

              <div className="experience-details">
                <div className="experience-period">{experience.period}</div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-stack">
                  {experience.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="experience-arrow" aria-hidden="true">
                ↗
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="experience-bottom">
          <div>
            <span>07+</span>

            <p>
              Years working across web development,
              <br />
              products and business systems.
            </p>
          </div>

          <a href="/resume.pdf" target="_blank">
            Download résumé
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
