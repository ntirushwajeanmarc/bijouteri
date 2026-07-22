import { useRevealOnScroll } from '../hooks/useReveal';

function ChurchIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 48 48"
      width="40"
      height="40"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* Peaked roof + walls — no cross */}
      <path d="M10 22 L24 10 L38 22" />
      <path d="M12 22v18h24V22" />
      <path d="M20 40v-10h8v10" />
      <path d="M17 28h5M26 28h5" />
    </svg>
  );
}

const services = [
  {
    icon: '💍',
    num: '01',
    title: 'Custom Fabrication',
    desc: 'From your vision to a tangible jewel — we design and handcraft bespoke rings, necklaces, bracelets, and more in gold and silver, to your exact specifications.',
  },
  {
    icon: '🔧',
    num: '02',
    title: 'Repair & Restoration',
    desc: 'Broken clasp, bent prong, or cracked band? Our skilled goldsmiths restore your precious pieces to their original glory with meticulous care.',
  },
  {
    icon: '✨',
    num: '03',
    title: 'Cleaning & Polishing',
    desc: 'Restore the brilliance of your jewellery with our professional deep-cleaning and polishing service, making your pieces shine like new again.',
  },
  {
    icon: '🔄',
    num: '04',
    title: 'Transformation',
    desc: 'Give new life to old jewellery. We reimagine and transform existing pieces into modern designs that honour their sentimental value while refreshing their style.',
  },
  {
    icon: <ChurchIcon />,
    num: '05',
    title: 'Wedding & Engagement',
    desc: 'Celebrate your love with handcrafted wedding and engagement rings. We guide couples through every detail to create the perfect symbol of their commitment.',
  },
  {
    icon: '🎁',
    num: '06',
    title: 'And Much More',
    desc: 'Pendants, earrings, resizing, engraving, stone setting and other jewellery services. Visit us at CHIC Building, B2F, Room B08 to discuss your project.',
  },
];

export default function Services() {
  useRevealOnScroll('.service-card');

  return (
    <section className="section services-bg" id="services">
      <div className="container">
        <div className="services-header">
          <div className="centered-label">
            <span className="bar" />
            What We Do
            <span className="bar" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Our <em>Services</em>
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--white-dim)',
              marginTop: '1rem',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            From the first sketch to the final polish — every service delivered with artisanal
            mastery.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.num} className="service-card reveal">
              <span className="service-icon">{service.icon}</span>
              <div className="service-num">{service.num}</div>
              <div className="service-title">{service.title}</div>
              <div className="service-line" />
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
