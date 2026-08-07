import { getCollectionPhotos } from '../data/gallery';
import { WHATSAPP_URL } from '../data/contact';
import { useRevealOnScroll } from '../hooks/useReveal';

const collections = [
  {
    tag: 'Collection 01',
    name: 'Wedding Bands',
    desc: 'Timeless rings crafted to celebrate the eternal bond of marriage. Each pair tells a unique love story in gold and silver.',
  },
  {
    tag: 'Collection 02',
    name: 'Engagement Rings',
    desc: 'Begin your forever with a ring that captures the brilliance of your love. Solitaires, halos, and bespoke designs.',
  },
  {
    tag: 'Collection 03',
    name: 'Pendants & Bracelets',
    desc: 'Exquisite pendants, bracelets, and necklaces crafted from gold and silver to adorn every occasion with elegance.',
  },
];

export default function Collections() {
  const photos = getCollectionPhotos();
  useRevealOnScroll('.collection-card');

  return (
    <section className="section collections-section" id="collections">
      <div className="container">
        <div className="section-label">Our Jewellery</div>
        <h2 className="section-title">
          Signature <em>Collections</em>
        </h2>
        <div className="collections-grid">
          {collections.map((col, i) => (
            <div key={col.name} className="collection-card reveal">
              {photos[i] ? (
                <img src={photos[i]} alt={col.name} className="col-photo" />
              ) : (
                <div className="col-placeholder col-wedding" />
              )}
              <div className="collection-overlay">
                <div className="collection-tag">{col.tag}</div>
                <div className="collection-name">{col.name}</div>
                <div className="collection-desc">{col.desc}</div>
                <a
                  href={WHATSAPP_URL}
                  className="collection-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
