import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const links = ["About", "Projects", "Experience", "Contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // On the homepage, anchor-scroll normally.
  // On any other route, link back to "/#section" so the browser
  // navigates home first, then jumps to the section.
  const hrefFor = (link) =>
    isHome ? `#${link.toLowerCase()}` : `/#${link.toLowerCase()}`;

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        HANA TAREK
      </Link>

      {/* Desktop links */}
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link}>
            <a href={hrefFor(link)} className="nav__link">
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a href={isHome ? "#contact" : "/#contact"} className="nav__cta">
        Hire Me
      </a>

      {/* Mobile hamburger */}
      <button
        className="nav__hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={`nav__bar ${menuOpen ? "nav__bar--top-open" : ""}`} />
        <span className={`nav__bar ${menuOpen ? "nav__bar--mid-open" : ""}`} />
        <span className={`nav__bar ${menuOpen ? "nav__bar--bot-open" : ""}`} />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav__drawer">
          {links.map((link) => (
            <a
              key={link}
              href={hrefFor(link)}
              className="nav__drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}