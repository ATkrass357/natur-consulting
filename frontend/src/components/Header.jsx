import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Startseite", end: true },
  { to: "/unternehmen", label: "Unternehmen" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/karriere", label: "Karriere" },
  { to: "/kontakt", label: "Kontakt" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#F8F7F4]/85 border-b border-[#1B3B22]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-5">
        <Link to="/" data-testid="header-logo-link">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-10" aria-label="Hauptnavigation">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? "text-[#1B3B22] font-medium" : "text-[#414C45] hover:text-[#1B3B22]"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/registrierung/angestellte"
            data-testid="header-cta-registrieren"
            className="inline-block bg-[#9C462C] hover:bg-[#7A3622] text-white px-6 py-3 text-sm font-medium tracking-wide transition-colors"
          >
            Jetzt bewerben
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-[#1B3B22]"
          aria-label="Menü öffnen"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#1B3B22]/10 bg-[#F8F7F4]" data-testid="mobile-menu">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base ${isActive ? "text-[#1B3B22] font-medium" : "text-[#414C45]"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/registrierung/angestellte"
              onClick={() => setOpen(false)}
              data-testid="mobile-cta-registrieren"
              className="mt-2 bg-[#9C462C] text-white px-6 py-3 text-sm font-medium tracking-wide text-center"
            >
              Jetzt bewerben
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
