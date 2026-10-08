import Container from "@/components/ui/Container";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <Container>
        <nav className="navbar" aria-label="Main navigation">
          <a href="/" className="logo" aria-label="Sajid Khan home">
            SK<span>.</span>
          </a>

          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a href="/#contact" className="nav-cta">
            Let&apos;s Talk
            <span aria-hidden="true">↗</span>
          </a>

          <button className="mobile-menu" aria-label="Open menu">
            <span />
            <span />
          </button>
        </nav>
      </Container>
    </header>
  );
}