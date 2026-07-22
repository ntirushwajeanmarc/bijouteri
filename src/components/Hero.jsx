import { getPhoto } from '../data/gallery';

const particles = [
  { left: '20%', top: '30%', delay: '0s', duration: '7s' },
  { left: '35%', top: '60%', delay: '1s', duration: '9s' },
  { left: '65%', top: '25%', delay: '2s', duration: '8s' },
  { left: '78%', top: '50%', delay: '0.5s', duration: '10s' },
  { left: '50%', top: '75%', delay: '3s', duration: '7.5s' },
  { left: '12%', top: '55%', delay: '1.5s', duration: '8.5s' },
  { left: '88%', top: '35%', delay: '4s', duration: '9s' },
];

export default function Hero() {
  const heroPhoto = getPhoto(0);

  return (
    <section className="hero">
      <div className="hero-bg" />
      {heroPhoto && (
        <div
          className="hero-photo-bg"
          style={{ backgroundImage: `url(${heroPhoto})` }}
          aria-hidden="true"
        />
      )}
      <div className="hero-ring" />
      <div className="hero-ring" />
      <div className="hero-ring" />
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="hero-eyebrow">Est. 2013 — Kigali, Rwanda</div>
      {heroPhoto && (
        <img
          src={heroPhoto}
          alt="Chalumeaux D'Or"
          className="hero-logo-img"
        />
      )}
      <h1 className="hero-title">
        <span className="line-gold">Chalumeaux</span>
        <span className="line-gold">D&apos;Or</span>
        <span className="line-white">Bijouterie &amp; Joaillerie</span>
      </h1>
      <p className="hero-tagline">L&apos;Art de Sublimer l&apos;Éternel</p>
      <div className="hero-divider" />
      <p className="hero-since">✦ &nbsp; Since 2013 &nbsp; ✦ &nbsp; Kigali, Rwanda &nbsp; ✦</p>
      <div className="hero-actions">
        <a href="#collections" className="btn-primary">
          <span>Explore Collections</span>
        </a>
        <a href="#contact" className="btn-secondary">
          Book a Consultation
        </a>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
