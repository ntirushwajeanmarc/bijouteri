import { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  useRevealOnScroll('.contact-detail');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-label">Get in Touch</div>
        <h2 className="section-title">
          Visit Our <em>Atelier</em>
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Chalumeaux D&apos;Or</h3>
            <p>
              We welcome you to our workshop in the heart of Kigali. Whether you have a repair, a
              custom project in mind, or simply wish to browse our creations — come visit us.
            </p>
            <div className="contact-detail reveal">
              <div className="contact-icon">📍</div>
              <div className="contact-detail-text">
                <div className="label">Location</div>
                <div className="value">
                  CHIC Building, B2F Floor, Room B08
                  <br />
                  Kigali, Rwanda
                </div>
              </div>
            </div>
            <div className="contact-detail reveal">
              <div className="contact-icon">📞</div>
              <div className="contact-detail-text">
                <div className="label">Phone</div>
                <div className="value">
                  <a href="tel:+250783377346">+250 783 377 346</a>
                  <br />
                  <a href="tel:+250722377346">+250 722 377 346</a>
                </div>
              </div>
            </div>
            <div className="contact-detail reveal">
              <div className="contact-icon">✉️</div>
              <div className="contact-detail-text">
                <div className="label">Email</div>
                <div className="value">
                  <a href="mailto:uwijon007@yahoo.fr">uwijon007@yahoo.fr</a>
                </div>
              </div>
            </div>
            <div className="contact-detail reveal">
              <div className="contact-icon">👤</div>
              <div className="contact-detail-text">
                <div className="label">Workshop Manager</div>
                <div className="value">UWIZEYIMANA Jonathan</div>
              </div>
            </div>
            <div className="ornament" style={{ marginTop: '2.5rem' }}>
              <div className="ornament-line" />
              <div className="ornament-diamond" />
              <div className="ornament-diamond" style={{ margin: '0 4px' }} />
              <div className="ornament-diamond" />
              <div className="ornament-line" />
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'rgba(201,168,76,0.7)',
                marginTop: 0,
              }}
            >
              &quot;Every great jewel begins with a conversation.&quot;
            </p>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+250 ..." />
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Custom Fabrication</option>
                  <option>Wedding Rings</option>
                  <option>Engagement Ring</option>
                  <option>Repair & Restoration</option>
                  <option>Cleaning & Polishing</option>
                  <option>Transformation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Tell us about your project or inquiry..." />
              </div>
              <button
                type="submit"
                className="form-submit"
                style={
                  submitted
                    ? {
                        background: 'linear-gradient(135deg,#4a7c4e,#5a9e60)',
                        color: 'white',
                      }
                    : undefined
                }
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
