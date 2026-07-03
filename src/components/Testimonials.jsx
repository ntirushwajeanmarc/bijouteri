import { useRevealOnScroll } from '../hooks/useReveal';

const testimonials = [
  {
    stars: '★★★★★',
    text: "Jonathan and his team crafted our wedding bands with such care and precision. Every time I look at my ring, I'm reminded of how perfect the day was. Truly exceptional artisans.",
    initials: 'MN',
    name: 'Marie & Noel',
    detail: 'Wedding Clients — 2024',
  },
  {
    stars: '★★★★★',
    text: "I brought in my grandmother's old necklace for transformation and they created something breathtakingly modern while keeping its soul. The craftsmanship is extraordinary.",
    initials: 'AK',
    name: 'Amina K.',
    detail: 'Transformation Client — 2025',
  },
  {
    stars: '★★★★★',
    text: "Fast, professional, and honest. They repaired my engagement ring in two days and it looked brand new. Very fair price. I won't go anywhere else for jewellery in Kigali.",
    initials: 'EP',
    name: 'Emmanuel P.',
    detail: 'Repair Client — 2025',
  },
];

export default function Testimonials() {
  useRevealOnScroll('.testimonial-card');

  return (
    <section className="section testimonials-bg">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="centered-label">
            <span className="bar" />
            Testimonials
            <span className="bar" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            What Our <em>Clients Say</em>
          </h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card reveal">
              <div className="stars">{t.stars}</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-detail">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
