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
          className="lightbox"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Enlarged jewellery photo"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
