import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import ProgramCard from '../components/Programs/ProgramCard';
import Testimonials from '../components/Testimonials/Testimonials';
import { mockHeroContent, mockPrograms, mockTestimonials, mockAboutContent } from '../lib/mockData';
import { useContentfulEntries } from '../hooks/useContentful';
import './Home.css';

export default function Home() {
  const { data: programs } = useContentfulEntries('program', mockPrograms);
  const { data: testimonials } = useContentfulEntries('testimonial', mockTestimonials);

  return (
    <main>
      <Hero content={mockHeroContent} />

      {/* About snippet */}
      <section className="home-about section" aria-label="About us">
        <div className="container home-about__inner">
          <div className="home-about__text">
            <h2 className="section-title">{mockAboutContent.headline}</h2>
            <p className="home-about__body">
              At Wingate Childcare, we believe every child deserves a joyful, safe, and stimulating
              start in life. Founded on the principles of respect, curiosity, and community, our
              centre has been a trusted partner for families for over 20 years.
            </p>
            <p className="home-about__body">
              Our qualified educators use a play-based approach rooted in early childhood research
              to support each child's development across cognitive, physical, social, and emotional
              domains.
            </p>
            <Link to="/about" className="btn btn-primary home-about__cta">
              Learn More About Us
            </Link>
          </div>

          <div className="home-about__stats" aria-label="Key statistics">
            {mockAboutContent.stats.map(({ value, label }) => (
              <div key={label} className="home-about__stat">
                <span className="home-about__stat-value">{value}</span>
                <span className="home-about__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="home-programs section" aria-label="Our programs">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              From infants to school-age children, we offer developmentally appropriate programs
              to nurture every stage of your child&apos;s growth.
            </p>
          </div>
          <div className="home-programs__grid">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.sys.id}
                program={program}
                featured={index === 2}
              />
            ))}
          </div>
          <div className="home-programs__cta text-center">
            <Link to="/programs" className="btn btn-secondary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home-cta" aria-label="Schedule a tour">
        <div className="container home-cta__inner">
          <div>
            <h2 className="home-cta__headline">Ready to Give Your Child the Best Start?</h2>
            <p className="home-cta__subtext">
              Schedule a free tour and see our classrooms, meet our team, and ask all your questions.
            </p>
          </div>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn-primary">Book a Tour</Link>
            <a href="tel:+15551234567" className="btn btn-outline-white">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
