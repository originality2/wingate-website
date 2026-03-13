import { Link } from 'react-router-dom';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'Contact',  to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">

        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Wingate Childcare Home">
            <span aria-hidden="true">🌱</span>
            <span className="footer__logo-name">Wingate Childcare</span>
          </Link>
          <p className="footer__tagline">
            A warm, nurturing home away from home where children grow, discover, and thrive every day.
          </p>
          <div className="footer__social" aria-label="Social media links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__nav-list">
            {QUICK_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="footer__nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3 className="footer__heading">Contact Us</h3>
          <address className="footer__address">
            <p>123 Wingate Way</p>
            <p>Childcare Town, ST 12345</p>
            <a href="tel:+15551234567" className="footer__contact-link">
              (555) 123-4567
            </a>
            <a href="mailto:hello@wingatechildcare.org" className="footer__contact-link">
              hello@wingatechildcare.org
            </a>
          </address>
          <p className="footer__hours"><strong>Hours:</strong> Mon–Fri, 6:30 am – 6:00 pm</p>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Wingate Childcare. All rights reserved.</p>
          <p>
            <Link to="/contact" className="footer__bottom-link">Privacy Policy</Link>
            {' · '}
            <Link to="/contact" className="footer__bottom-link">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
