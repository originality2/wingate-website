import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems, sectionLinksByPath } from '../../content/siteContent';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const sectionLinks = sectionLinksByPath[location.pathname] ?? [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('header-menu-open', menuOpen);

    return () => {
      document.body.classList.remove('header-menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">
        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="header__logo" onClick={closeMenu} aria-label="Wingate Childcare Home">
          <span className="header__logo-icon" aria-hidden="true">W</span>
          <span className="header__logo-text">
            <span className="header__logo-name">Wingate Childcare</span>
            <span className="header__logo-tagline">Community Co-op</span>
          </span>
        </Link>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`} aria-label="Main navigation">
          <ul id="main-navigation" className="header__nav-list">
            {navItems.map(({ label, to }) => (
              <li key={to} className="header__nav-item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/enrolments" className="btn btn-primary header__cta" onClick={closeMenu}>
            Enrol Now
          </Link>
        </nav>

        <span className="header__mobile-spacer" aria-hidden="true" />
      </div>

      {menuOpen && (
        <div
          className="header__overlay"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      {sectionLinks.length > 0 && (
        <div className="header__subnav-wrap">
          <div className="container">
            <nav className="header__subnav" aria-label="Section navigation">
              <ul className="header__subnav-list">
                {sectionLinks.map((section) => (
                  <li key={section.id}>
                    <a className="header__subnav-link" href={`${location.pathname}#${section.id}`} onClick={closeMenu}>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
