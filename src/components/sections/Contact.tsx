// components/sections/Contact.tsx

const contactLinks = [
  {
    label: "Email",
    value: "srk167025@gmail.com",
    href: "mailto:srk167025@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sajidrkhan",
    href: "https://www.linkedin.com/in/sajidrkhan/",
  },
  {
    label: "GitHub",
    value: "github.com/SajidRKhan",
    href: "https://github.com/SajidRKhan",
  },
];

export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="portfolio-container">
              <div className="contact-top">
      <div className="section-heading-label">
        <span className="section-number">05</span>
        <span className="section-kicker">CONTACT</span>
      </div>

      <div className="contact-status">
        <span className="contact-status-dot" />
        AVAILABLE FOR OPPORTUNITIES
      </div>
    </div>

          <div className="contact-main">
            <div className="contact-copy">
              <p className="contact-eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>

              <h2>
                Let&apos;s build
                <span> something great.</span>
              </h2>
            </div>

            <div className="contact-content">
              <p>
                I&apos;m open to full-time opportunities, freelance projects,
                contract work and collaborations where I can help build
                reliable, scalable digital products.
              </p>

              <a
                href="mailto:srk167025@gmail.com"
                className="contact-primary"
              >
                Start a conversation
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-link"
                key={link.label}
              >
                <div>
                  <span className="contact-link-number">
                    0{index + 1}
                  </span>

                  <span className="contact-link-label">
                    {link.label}
                  </span>
                </div>

                <div className="contact-link-right">
                  <span>{link.value}</span>
                  <span className="contact-link-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="portfolio-container footer-inner">
          <a href="#" className="footer-logo">
            SK<span>.</span>
          </a>

          <p>
            Full-Stack Developer
            <span> · </span>
            Karachi, Pakistan
          </p>

          <a href="#" className="back-to-top">
            Back to top
            <span>↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}