import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "United Motors",
    category: "B2B Automotive Parts Platform",
    description:
      "A large-scale B2B automotive parts platform built to simplify product discovery and wholesale ordering. It features vehicle-based compatibility search across make, model, variant and year, inventory monitoring, automated pricing logic and streamlined catalog management.",
    stack: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    stat: "3,600+",
    statLabel: "Products Managed",
    image: "/projects/united-motors.webp",
    url: "#",
    slug: "united-motors",
    theme: "united",
  },
  {
    number: "02",
    title: "FareScanner",
    category: "Flight Search & Booking Platform",
    description:
      "An API-driven flight search and booking platform that connects with external airfare providers to retrieve live flight options. It includes airport search, fare comparison, promotional pricing, booking workflows and secure online payment processing.",
    stack: ["CodeIgniter", "REST API", "MySQL", "Razorpay"],
    stat: "Live",
    statLabel: "Flight Search",
    image: "/projects/farescanner.webp",
    url: "https://hf.ynaps-test.space/flight_v4/",
    slug: "farescanner",
    theme: "fare",
  },
  {
    number: "03",
    title: "SiliconSmiths",
    category: "AI & Digital Solutions Platform",
    description:
      "A fully dynamic digital agency platform built from scratch to present AI automation, custom web applications, mobile development, SEO and digital growth services. The platform includes dynamic services, projects, insights, lead-generation flows and conversion-focused business pages.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
    stat: "Custom",
    statLabel: "Laravel Platform",
    image: "/projects/siliconsmiths.webp",
    url: "https://siliconsmiths.com/",
    slug: "siliconsmiths",
    theme: "silicon",
  },
  {
    number: "04",
    title: "Rentify360",
    category: "Rental & Booking Platform",
    description:
      "A rental-focused web platform designed to simplify vehicle discovery, reservations and fleet operations. It provides structured rental listings, streamlined booking journeys and business-focused functionality for managing rental services efficiently.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    stat: "360°",
    statLabel: "Rental Experience",
    image: "/projects/rentify360.webp",
    url: "https://rentify360.in/",
    slug: "rentify360",
    theme: "rentify",
  },
];

export default function SelectedWork() {
  return (
    <section className="selected-work" id="work">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading">
          <div className="section-heading-label">
            <span className="section-number">02</span>
            <span className="section-kicker">SELECTED WORK</span>
          </div>

          <p>
            A selection of products and platforms I&apos;ve built to solve
            real business problems.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                index % 2 !== 0 ? "project-card-reverse" : ""
              }`}
              key={project.title}
            >
              {/* Project Content */}
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h2>{project.title}</h2>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-actions">
                    <a
                      href={`/work/${project.slug}`}
                      className="project-link"
                    >
                      View case study
                      <span aria-hidden="true">↗</span>
                    </a>

                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-live-link"
                      >
                        Live site
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>

                  <div className="project-stat">
                    <strong>{project.stat}</strong>
                    <span>{project.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Project Screenshot */}
              <div
                className={`project-showcase ${project.theme}`}
              >
                <div className="project-glow" />

                <a
                  href={project.url !== "#" ? project.url : `/work/${project.slug}`}
                  target={project.url !== "#" ? "_blank" : undefined}
                  rel={project.url !== "#" ? "noreferrer" : undefined}
                  className="project-image-link"
                  aria-label={`View ${project.title}`}
                >
                  <div className="project-browser">
                    {/* Browser Toolbar */}
                    <div className="project-browser-toolbar">
                      <div className="project-browser-dots">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="project-browser-address">
                        <span className="project-lock">●</span>
                        {project.title}
                      </div>

                      <div className="project-browser-action">
                        ↗
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="project-image">
                      <Image
                        src={project.image}
                        alt={`${project.title} website screenshot`}
                        fill
                        sizes="(max-width: 1050px) 100vw, 58vw"
                        className="project-screenshot"
                      />

                      <div className="project-image-overlay">
                        <span>
                          View project
                          <i>↗</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                <span
                  className="project-watermark"
                  aria-hidden="true"
                >
                  {project.number}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="all-work">
          <a href="/work">
            <div>
              <small>MORE PROJECTS</small>
              <span>View all projects</span>
            </div>

            <span className="all-work-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}