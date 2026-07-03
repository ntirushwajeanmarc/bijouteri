import { useRevealOnScroll } from '../hooks/useReveal';

const TO_EMAIL = 'uwijon007@yahoo.fr';

export default function Contact() {
  useRevealOnScroll('.contact-detail');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    if (!firstName || !lastName || !email || !service || !message) {
      return;
    }

    const subject = `Chalumeaux D'Or — ${service} inquiry from ${firstName} ${lastName}`;
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Service: ${service}`,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TO_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
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
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="+250 ..." />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" defaultValue="" required>
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
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                Send via Gmail →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
