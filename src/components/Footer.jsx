export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">CHALUMEAUX D&apos;OR</span>
            <p>
              L&apos;Art de Sublimer l&apos;Éternel — Fine jewellery crafted with passion in Kigali
              since 2013.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61590173807214"
                className="social-btn"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/bijouteriechalumeaudor/"
                className="social-btn"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                ig
              </a>
              <a
                href="https://www.tiktok.com/@bijouteriechalumeaudor"
                className="social-btn"
                title="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                tk
              </a>
              <a
                href="mailto:bijouteriechalumeaudor@gmail.com"
                className="social-btn"
                title="Email"
              >
                @
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Custom Fabrication</a>
              </li>
              <li>
                <a href="#services">Wedding Rings</a>
              </li>
              <li>
                <a href="#services">Engagement Rings</a>
              </li>
              <li>
                <a href="#services">Repair & Restoration</a>
              </li>
              <li>
                <a href="#services">Cleaning & Polishing</a>
              </li>
              <li>
                <a href="#services">Transformation</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Jewellery</h4>
            <ul>
              <li>
                <a href="#collections">Rings</a>
              </li>
              <li>
                <a href="#collections">Pendants</a>
              </li>
              <li>
                <a href="#collections">Bracelets</a>
              </li>
              <li>
                <a href="#collections">Necklaces</a>
              </li>
              <li>
                <a href="#collections">Earrings</a>
              </li>
              <li>
                <a href="#collections">Custom Pieces</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit Us</h4>
            <ul>
              <li>
                <a href="#">CHIC Building, B2F</a>
              </li>
              <li>
                <a href="#">Room B08, Kigali</a>
              </li>
              <li>
                <a href="tel:+250795694412">0795 694 412</a>
              </li>
              <li>
                <a href="mailto:bijouteriechalumeaudor@gmail.com">
                  bijouteriechalumeaudor@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Chalumeaux D&apos;Or — Bijouterie Artisanale. All rights reserved.</p>
          <p style={{ color: 'rgba(201,168,76,0.3)' }}>✦ L&apos;Art de Sublimer l&apos;Éternel ✦</p>
        </div>
      </div>
    </footer>
  );
}
