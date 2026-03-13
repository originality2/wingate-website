import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero({ content }) {
  const { headline, subheading, primaryCta, secondaryCta } = content;

  return (
    <section className="hero" aria-label="Welcome to Wingate Childcare">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__badge">Nurturing Futures Since 2004</span>
          <h1 className="hero__headline">
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__subheading">{subheading}</p>
          <div className="hero__actions">
            <Link to={primaryCta.href} className="btn btn-primary hero__btn">
              {primaryCta.label}
              <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
            <Link to={secondaryCta.href} className="btn btn-outline-white hero__btn">
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="hero__cards" aria-hidden="true">
          <div className="hero__stat-card">
            <span className="hero__stat-icon">👶</span>
            <span className="hero__stat-value">6 wks+</span>
            <span className="hero__stat-label">Age from</span>
          </div>
          <div className="hero__stat-card hero__stat-card--accent">
            <span className="hero__stat-icon">⭐</span>
            <span className="hero__stat-value">5-Star</span>
            <span className="hero__stat-label">Rated</span>
          </div>
          <div className="hero__stat-card">
            <span className="hero__stat-icon">🏫</span>
            <span className="hero__stat-value">4</span>
            <span className="hero__stat-label">Programs</span>
          </div>
          <div className="hero__stat-card hero__stat-card--green">
            <span className="hero__stat-icon">❤️</span>
            <span className="hero__stat-value">150+</span>
            <span className="hero__stat-label">Families</span>
          </div>
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="var(--color-bg)"/>
        </svg>
      </div>
    </section>
  );
}
