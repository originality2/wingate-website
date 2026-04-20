import { Link } from 'react-router-dom';
import { navItems, siteContact } from '../../content/siteContent';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">

        <div className="footer__brand">
          <Link to="/about" className="footer__logo" aria-label="Wingate Childcare Home">
            <span aria-hidden="true">W</span>
            <span className="footer__logo-name">Wingate Childcare Co-operative</span>
          </Link>
          <p className="footer__tagline">
            A warm early learning environment where children, educators, and families grow together.
          </p>
        </div>

        <div className="footer__links">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__nav-list">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="footer__nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3 className="footer__heading">Visit & Contact</h3>
          <address className="footer__address">
            <p>{siteContact.address}</p>
            <a href={`tel:${siteContact.phone.replace(/\D/g, '')}`} className="footer__contact-link">
              {siteContact.phone}
            </a>
            <a href={`mailto:${siteContact.email}`} className="footer__contact-link">
              {siteContact.email}
            </a>
          </address>
          <p className="footer__hours"><strong>Hours:</strong> Monday to Friday, 7:00am – 6:00pm</p>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Wingate Childcare Co-operative.</p>
          <p>
            <Link to="/parent-resources" className="footer__bottom-link">Parent Resources</Link>
            {' · '}
            <Link to="/enrolments" className="footer__bottom-link">Enrolments</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
