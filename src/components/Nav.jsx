import { useEffect, useState } from 'react';
import { useScrollNav, useSmoothScroll } from '../hooks/useScrollNav';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#collections', label: 'Collections' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollNav();
  useSmoothScroll();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav id="mainNav" className={menuOpen ? 'menu-open' : ''}>
        <a href="#" className="nav-logo" onClick={handleLinkClick}>
          CHALUMEAUX <span>D&apos;OR</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-links-cta">
            <a href="#contact" className="nav-cta nav-cta-mobile" onClick={handleLinkClick}>
              Book Consultation
            </a>
          </li>
        </ul>

        <a href="#contact" className="nav-cta nav-cta-desktop">
          <span className="nav-cta-short">Book</span>
          <span className="nav-cta-full">Book Consultation</span>
        </a>
      </nav>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
