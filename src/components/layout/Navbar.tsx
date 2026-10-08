"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <Container>
        <nav className="navbar" aria-label="Main navigation">
          <Link
            href="/"
            className="logo"
            aria-label="Sajid Khan home"
            onClick={closeMenu}
          >
            SK<span>.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/#contact" className="nav-cta">
            Let&apos;s Talk
            <span aria-hidden="true">↗</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu ${menuOpen ? "active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "active" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="portfolio-container">
          <div className="mobile-nav-inner">
            <div className="mobile-nav-label">
              <span>MENU</span>
              <span>01 — 04</span>
            </div>

            <div className="mobile-nav-links">
              {navigation.map((item, index) => (
                <Link key={item.label} href={item.href} onClick={closeMenu}>
                  <span className="mobile-nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item.label}</span>

                  <span className="mobile-nav-arrow">↗</span>
                </Link>
              ))}
            </div>

            <div className="mobile-nav-bottom">
              <p>AVAILABLE FOR OPPORTUNITIES</p>

              <Link
                href="/#contact"
                className="mobile-nav-cta"
                onClick={closeMenu}
              >
                Let&apos;s Talk
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
