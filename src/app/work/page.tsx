import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "United Motors",
    category: "B2B Automotive Parts Platform",
    description:
      "A large-scale B2B automotive parts platform built to simplify product discovery and wholesale ordering with vehicle-based compatibility search, inventory monitoring and catalog management.",
    stack: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    image: "/projects/united-motors.webp",
    type: "Web Application",
    url: "https://umparts.in/",
  },
  {
    number: "02",
    title: "FareScanner",
    category: "Flight Search & Booking Platform",
    description:
      "An API-driven flight search and booking platform with live flight options, airport search, fare comparison, promotional pricing, booking workflows and online payments.",
    stack: ["CodeIgniter", "REST API", "MySQL", "Razorpay"],
    image: "/projects/farescanner.webp",
    type: "Web Application",
    url: "https://hf.ynaps-test.space/flight_v4/",
  },
  {
    number: "03",
    title: "Bazario",
    category: "Multi-Vendor E-commerce Marketplace",
    description:
      "A full-featured multi-vendor marketplace built with Laravel, featuring vendor and customer accounts, simple and variable products, digital products, vendor dashboards, wallet and withdrawal workflows, order management and marketplace administration.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/projects/bazario.webp",
    type: "E-commerce",
    url: "https://bazario.ifree.page/",
  },
  {
    number: "04",
    title: "SiliconSmiths",
    category: "AI & Digital Solutions Platform",
    description:
      "A custom technology-services platform presenting web development, AI automation, SEO, digital marketing and other digital solutions through a fully dynamic experience.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/projects/siliconsmiths.webp",
    type: "Business",
    url: "https://www.siliconsmiths.com/",
  },
  {
    number: "05",
    title: "Rentify360",
    category: "Rental & Booking Platform",
    description:
      "A rental-focused web platform designed around vehicle discovery, reservations, booking journeys and business-focused rental operations.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/projects/rentify360.webp",
    type: "Web Application",
    url: "https://rentify360.in/",
  },
  {
    number: "06",
    title: "Ncure Pharma",
    category: "Healthcare & Product Platform",
    description:
      "A responsive product-focused business platform designed to present pharmaceutical and healthcare products through a clean digital experience.",
    stack: ["PHP", "CodeIgniter", "Bootstrap", "JavaScript"],
    image: "/projects/ncure.webp",
    type: "E-commerce",
    url: "https://ncurepharma.com/",
  },
  {
    number: "07",
    title: "Gotta Pattika",
    category: "Business & Services Website",
    description:
      "A custom business website developed to present the brand, services and customer-facing information through a responsive interface.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/projects/gottapattika.webp",
    type: "Business",
    url: "https://gottapattika.com/",
  },
  {
    number: "08",
    title: "CafeDePaan",
    category: "Restaurant & Hospitality Website",
    description:
      "A responsive hospitality website designed around brand presentation, products, customer discovery and a polished digital presence.",
    stack: ["PHP", "JavaScript", "Bootstrap"],
    image: "/projects/cafedepaan.webp",
    type: "Business",
    url: "https://cafedepaan.com/",
  },
  {
    number: "09",
    title: "EpoxyTrend",
    category: "Business Web Platform",
    description:
      "A custom business platform developed with CodeIgniter for managing and presenting services, content and customer-facing information.",
    stack: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    image: "/projects/epoxytrend.webp",
    type: "Business",
    url: "https://epoxytrend.ca/",
  },
  {
    number: "10",
    title: "GDSTE",
    category: "Corporate Website",
    description:
      "A responsive corporate web experience developed to communicate services, capabilities and business information through a structured interface.",
    stack: ["PHP", "JavaScript", "Bootstrap"],
    image: "/projects/gdste.webp",
    type: "Business",
    url: "https://gdste.com/",
  },
  {
    number: "11",
    title: "Honey Dale",
    category: "Brand & Product Website",
    description:
      "A brand-focused digital experience designed to showcase products, strengthen online presence and provide a polished customer-facing interface.",
    stack: ["PHP", "JavaScript", "Bootstrap"],
    image: "/projects/honey.webp",
    type: "E-commerce",
    url: "https://www.honey-dale.com/",
  },
  {
    number: "12",
    title: "Neranzo",
    category: "Business Website",
    description:
      "A modern responsive website developed around business presentation, services and customer engagement.",
    stack: ["PHP", "JavaScript", "Bootstrap"],
    image: "/projects/neranzo.webp",
    type: "Business",
    url: "https://neranzo.com/",
  },
  {
    number: "13",
    title: "Minshe Academy",
    category: "Education Platform",
    description:
      "A multi-role education platform supporting students, teachers, parents, administrators and professionals with authentication and platform workflows.",
    stack: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    image: "/projects/minshe.webp",
    type: "Web Application",
    url: "https://minshe.co.in/",
  },
  {
    number: "14",
    title: "One Startup",
    category: "Startup Platform",
    description:
      "A responsive digital platform created to present the startup, its services and business proposition through a modern web experience.",
    stack: ["PHP", "JavaScript", "Bootstrap"],
    image: "/projects/onestartup.webp",
    type: "Business",
    url: "https://one-startup.in/",
  },
  {
    number: "15",
    title: "MasterJee",
    category: "Web Application",
    description:
      "A custom web solution built around structured business workflows, responsive interfaces and database-driven functionality.",
    stack: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
    image: "/projects/masterjee.webp",
    type: "Web Application",
    url: "https://masterjeetuitionwale.com/",
  },
  {
    number: "16",
    title: "Aryavarta Shopee",
    category: "E-commerce Platform",
    description:
      "An e-commerce experience developed around product discovery, catalog presentation and online shopping workflows.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/projects/aryavarta-shopee.webp",
    type: "E-commerce",
    url: "https://aryavartashopee.com/",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="work-page">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="work-hero">
          <div className="portfolio-container">
            <div className="work-hero-top">
              <div className="section-heading-label">
                <span className="section-number">01</span>
                <span className="section-kicker">PROJECT ARCHIVE</span>
              </div>

              <span className="work-count">
                {projects.length.toString().padStart(2, "0")} PROJECTS
              </span>
            </div>

            <div className="work-hero-grid">
              <h1>
                Selected projects
                <span>& things I&apos;ve built.</span>
              </h1>

              <div className="work-hero-copy">
                <p>
                  A collection of web applications, platforms, e-commerce
                  systems and business products I&apos;ve worked on over the
                  years.
                </p>

                <Link href="/" className="work-back">
                  ← Back home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT ARCHIVE
        ====================================================== */}
        <section className="work-archive">
          <div className="portfolio-container">
            <div className="work-filter">
              <span>ALL PROJECTS</span>

              <div>
                <span>WEB APPLICATIONS</span>
                <span>E-COMMERCE</span>
                <span>BUSINESS</span>
              </div>
            </div>

            <div className="work-grid">
              {projects.map((project) => (
                <article
                  className="archive-project"
                  key={project.title}
                >
                  {/* PROJECT IMAGE */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="archive-project-image"
                      aria-label={`Visit ${project.title}`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <span className="archive-project-number">
                        {project.number}
                      </span>

                      <span className="archive-project-type">
                        {project.type}
                      </span>

                      <span className="archive-live-badge">
                        LIVE ↗
                      </span>
                    </a>
                  ) : (
                    <div className="archive-project-image">
                      <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      <span className="archive-project-number">
                        {project.number}
                      </span>

                      <span className="archive-project-type">
                        {project.type}
                      </span>
                    </div>
                  )}

                  {/* PROJECT HEADING */}
                  <div className="archive-project-heading">
                    <div>
                      <p>{project.category}</p>
                      <h2>{project.title}</h2>
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="archive-project-arrow"
                        aria-label={`Visit ${project.title}`}
                      >
                        ↗
                      </a>
                    ) : (
                      <span className="archive-project-no-link">
                        ARCHIVE
                      </span>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p className="archive-project-description">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="archive-project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <section className="work-bottom">
          <div className="portfolio-container">
            <p>HAVE A PROJECT OR OPPORTUNITY?</p>

            <Link href="/#contact">
              Let&apos;s work together
              <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}