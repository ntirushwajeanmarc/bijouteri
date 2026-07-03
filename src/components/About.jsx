import { getPhoto } from '../data/gallery';
import { useRevealRef } from '../hooks/useReveal';

export default function About() {
  const aboutPhoto = getPhoto(1, getPhoto(0));
  const ref = useRevealRef();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap" ref={ref}>
            <div className="about-img-frame">
              {aboutPhoto && (
                <img src={aboutPhoto} alt="Chalumeaux D'Or artisan jewellery" />
              )}
            </div>
            <div className="about-badge">
              <div className="year">15+</div>
              <div className="since">Years of Craft</div>
            </div>
          </div>
          <div className="about-text">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Where Craft
              <br />
              Meets <em>Passion</em>
            </h2>
            <div className="ornament">
              <div className="ornament-line" />
              <div className="ornament-diamond" />
              <div className="ornament-line" />
            </div>
            <p>
              Founded in 2010, Chalumeaux D&apos;Or has been Kigali&apos;s most trusted name in fine
              jewellery craftsmanship. Born from a deep love of the art form, our atelier combines
              traditional goldsmithing techniques with a modern vision.
            </p>
            <p>
              Led by Workshop Manager{' '}
              <strong style={{ color: 'var(--gold)' }}>UWIZEYIMANA Jonathan</strong>, our skilled
              artisans pour their expertise and heart into every piece — from restoring cherished
              heirlooms to creating custom wedding rings that tell your unique love story.
            </p>
            <p>
              We believe that every jewel holds a story, and we are privileged to be the hands that
              shape those eternal moments.
            </p>
            <div className="about-stats">
              <div>
                <div className="stat-num">2010</div>
                <div className="stat-label">Founded</div>
              </div>
              <div>
                <div className="stat-num">1000+</div>
                <div className="stat-label">Pieces Crafted</div>
              </div>
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
