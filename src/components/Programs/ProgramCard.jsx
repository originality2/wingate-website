import { Link } from 'react-router-dom';
import './ProgramCard.css';

export default function ProgramCard({ program, featured = false }) {
  const { title, ageRange, description, icon, color } = program;

  return (
    <article
      className={`program-card${featured ? ' program-card--featured' : ''}`}
      style={{ '--card-color': color }}
    >
      <div className="program-card__icon-wrap">
        <span className="program-card__icon" aria-hidden="true">{icon}</span>
      </div>
      <div className="program-card__body">
        <p className="program-card__age">{ageRange}</p>
        <h3 className="program-card__title">{title}</h3>
        <p className="program-card__description">{description}</p>
        <Link to="/contact" className="program-card__link">
          Learn more
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}
