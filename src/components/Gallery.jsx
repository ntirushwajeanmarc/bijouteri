import { useState } from 'react';
import { GALLERY_URL, PHOTOS } from '../data/gallery';
import { useRevealOnScroll } from '../hooks/useReveal';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  useRevealOnScroll('.gallery-photo');

  if (!PHOTOS.length) return null;

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <div className="centered-label">
            <span className="bar" />
            Photo Gallery
            <span className="bar" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Our <em>Atelier</em> in Images
          </h2>
        </div>
        <div className="photo-gallery-grid">
          {PHOTOS.map((src, i) => (
            <button
              key={src}
              type="button"
              className="gallery-photo reveal"
              onClick={() => setLightbox(src)}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={src} alt={`Chalumeaux D'Or jewellery ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
        <div className="gallery-cta">
          <a
            href={GALLERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Full Gallery on Pixieset
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer',
          }}
        >
          <img
            src={lightbox}
            alt="Enlarged jewellery photo"
            style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
          />
        </div>
      )}
    </section>
  );
}
