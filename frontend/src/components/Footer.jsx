import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#1B221C] text-[#D8D4CC] mt-24" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <circle cx="17" cy="17" r="16.5" stroke="#EFECE5" />
              <path d="M9 22C13 22 17 19 18.5 14.5C20 10 22.5 9 25 9C24 13 22 17 19 19.5C16 22 12 22.5 9 22Z" fill="#EFECE5" />
              <path d="M9 22C11 20 14 18.5 18 18" stroke="#9C462C" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <div className="leading-none">
              <div className="font-heading text-lg font-medium text-[#EFECE5]">Natur Consulting</div>
              <div className="font-label text-[10px] text-[#9CA89F]">ecoprotec GmbH</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#A9B1AA]">
            Premium Umweltberatung für Unternehmen. Wir verbinden ökologische Verantwortung mit wirtschaftlicher Exzellenz.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3 items-start"><MapPin size={16} className="mt-0.5 text-[#9C462C]" /><span>Pamplonastraße 19<br/>33106 Paderborn</span></div>
            <div className="flex gap-3 items-center"><Mail size={16} className="text-[#9C462C]" /><span>info@natur-consulting.de</span></div>
          </div>
        </div>

        <div>
          <div className="font-label text-xs text-[#9C462C] mb-4">Navigation</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" data-testid="footer-nav-startseite" className="hover:text-[#EFECE5] transition">Startseite</Link></li>
            <li><Link to="/unternehmen" data-testid="footer-nav-unternehmen" className="hover:text-[#EFECE5] transition">Unternehmen</Link></li>
            <li><Link to="/leistungen" data-testid="footer-nav-leistungen" className="hover:text-[#EFECE5] transition">Leistungen</Link></li>
            <li><Link to="/karriere" data-testid="footer-nav-karriere" className="hover:text-[#EFECE5] transition">Karriere</Link></li>
            <li><Link to="/kontakt" data-testid="footer-nav-kontakt" className="hover:text-[#EFECE5] transition">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-label text-xs text-[#9C462C] mb-4">Rechtliches</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/impressum" data-testid="footer-nav-impressum" className="hover:text-[#EFECE5] transition">Impressum</Link></li>
            <li><Link to="/datenschutz" data-testid="footer-nav-datenschutz" className="hover:text-[#EFECE5] transition">Datenschutz</Link></li>
            <li><Link to="/registrierung/angestellte" data-testid="footer-nav-registrierung" className="hover:text-[#EFECE5] transition">Mitarbeiter-Registrierung</Link></li>
          </ul>
          <div className="font-label text-xs text-[#9C462C] mb-4 mt-10">Register</div>
          <p className="text-xs leading-relaxed text-[#A9B1AA]">
            HRB 3625<br/>Amtsgericht Paderborn
          </p>
        </div>
      </div>

      <div className="border-t border-[#EFECE5]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#9CA89F]">© {new Date().getFullYear()} ecoprotec GmbH · Geschäftsführer Markus Engemann</div>
          <div className="font-label text-[10px] text-[#9CA89F]">Gebaut mit Respekt vor der Natur</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
