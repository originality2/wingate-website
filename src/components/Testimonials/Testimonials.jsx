import './Testimonials.css';

function TestimonialCard({ testimonial }) {
  const { quote, authorName, authorTitle } = testimonial;
  return (
    <blockquote className="testimonial-card">
      <svg className="testimonial-card__quote-icon" viewBox="0 0 40 40" width="40" height="40" fill="none" aria-hidden="true">
        <text x="0" y="36" fontSize="52" fontFamily="Georgia, serif" fill="var(--color-primary-light)" opacity="0.3">"</text>
      </svg>
      <p className="testimonial-card__text">{quote}</p>
      <footer className="testimonial-card__author">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {authorName.charAt(0)}
        </div>
        <div>
          <cite className="testimonial-card__name">{authorName}</cite>
          <span className="testimonial-card__title">{authorTitle}</span>
        </div>
      </footer>
    </blockquote>
  );
}

export default function Testimonials({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="testimonials section" aria-label="Parent testimonials">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">What Parents Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it – hear from the families who trust us with their most precious ones.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id || t.sys?.id || t.authorName} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
