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
  useScrollNav();
  useSmoothScroll();

  return (
    <nav id="mainNav">
      <a href="#" className="nav-logo">
        CHALUMEAUX <span>D&apos;OR</span>
      </a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">
        Book Consultation
      </a>
    </nav>
  );
}
