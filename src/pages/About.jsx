import { Link } from 'react-router-dom';
import { mockAboutContent } from '../lib/mockData';
import { useContentfulEntries } from '../hooks/useContentful';
import './About.css';

const VALUES = [
  {
    icon: '💛',
    title: 'Safety First',
    description:
      'Our facilities are DHS-licensed and regularly inspected. Safety is woven into every aspect of our day – from secure entry systems to rigorous allergy protocols.',
  },
  {
    icon: '🌱',
    title: 'Play-Based Learning',
    description:
      'Research shows children learn best through play. Our curriculum is intentionally designed to embed learning in joyful, hands-on experiences every day.',
  },
  {
    icon: '🤝',
    title: 'Family Partnership',
    description:
      'We keep you connected with daily reports, open-door policies, and regular family events. You are always a valued member of your child\'s learning journey.',
  },
  {
    icon: '🌍',
    title: 'Inclusive Community',
    description:
      'We celebrate the rich diversity of our families and foster a culture of belonging where every child and every family feels seen, respected, and welcome.',
  },
];

const TEAM = [
  {
    name: 'Director',
    emoji: '👩‍💼',
    bio: 'Over 15 years in early childhood education with a Masters in ECE.',
  },
  {
    name: 'Lead Educator',
    emoji: '👨‍🏫',
    bio: 'Specialises in language development and inclusive learning practices.',
  },
  {
    name: 'Infant Room Lead',
    emoji: '👩‍🍼',
    bio: 'Passionate about attachment-based caregiving for our youngest children.',
  },
  {
    name: 'Preschool Teacher',
    emoji: '👩‍🎨',
    bio: 'Creative curriculum designer with a focus on STEM exploration through art.',
  },
];

export default function About() {
  const { data: aboutUs } = useContentfulEntries('aboutUs', mockAboutContent);
  const aboutContent = aboutUs ?? mockAboutContent;

  return (
    <main>
      {/* Page header */}
      <section className="page-hero page-hero--green" aria-label="About page header">
        <div className="container page-hero__inner">
          <h1 className="page-hero__title">About Wingate Childcare</h1>
          <p className="page-hero__subtitle">
            A caring team, a nurturing environment, and a commitment to every child&apos;s potential.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story section">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <h2 className="section-title">Our Story</h2>
            {aboutContent.body.split('\n\n').map((para, i) => (
              <p key={i} className="about-story__para">{para.trim()}</p>
            ))}
            <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
          </div>
          <div className="about-story__image" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=600&q=80"
              alt="Children playing together at Wingate Childcare"
              className="about-story__img"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats section" aria-label="Key statistics">
        <div className="container">
          <div className="about-stats__grid">
            {(aboutContent.stats ?? mockAboutContent.stats).map(({ value, label }) => (
              <div key={label} className="about-stats__item">
                <span className="about-stats__value">{value}</span>
                <span className="about-stats__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section" aria-label="Our values">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              Everything we do is guided by these principles that put children and families first.
            </p>
          </div>
          <div className="about-values__grid">
            {VALUES.map(({ icon, title, description }) => (
              <div key={title} className="about-values__card">
                <span className="about-values__icon" aria-hidden="true">{icon}</span>
                <h3 className="about-values__title">{title}</h3>
                <p className="about-values__desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team section" aria-label="Our team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our dedicated educators are qualified, caring professionals who love what they do.
            </p>
          </div>
          <div className="about-team__grid">
            {TEAM.map(({ name, emoji, bio }) => (
              <div key={name} className="about-team__card">
                <div className="about-team__avatar" aria-hidden="true">{emoji}</div>
                <h3 className="about-team__name">{name}</h3>
                <p className="about-team__bio">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
