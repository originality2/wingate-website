import { Link } from 'react-router-dom';
import ProgramCard from '../components/Programs/ProgramCard';
import { mockPrograms } from '../lib/mockData';
import { useContentfulEntries } from '../hooks/useContentful';
import './About.css';
import './Programs.css';

const FAQS = [
  {
    q: 'What are your hours?',
    a: 'We are open Monday through Friday, 6:30 am to 6:00 pm. We are closed on major public holidays.',
  },
  {
    q: 'Is there a waiting list?',
    a: 'We do have a waitlist for some age groups. We recommend registering your interest as early as possible, even before your baby is born.',
  },
  {
    q: 'Do you offer part-time care?',
    a: 'Yes! We offer both full-time and part-time enrolment options. Please contact us to discuss availability.',
  },
  {
    q: 'What meals are provided?',
    a: 'We provide nutritious morning tea, lunch, and afternoon tea daily. Our menus are designed by a qualified nutritionist and accommodate allergies and dietary requirements.',
  },
  {
    q: 'How do I stay updated on my child\'s day?',
    a: 'We use a daily digital portfolio and communication app that lets you see photos, activities, and notes from your child\'s day in real time.',
  },
];

export default function Programs() {
  const { data: programs } = useContentfulEntries('program', mockPrograms);

  return (
    <main>
      <section className="page-hero page-hero--amber" aria-label="Programs page header">
        <div className="container page-hero__inner">
          <h1 className="page-hero__title">Our Programs</h1>
          <p className="page-hero__subtitle">
            Developmentally appropriate care and education for every stage, from infancy through school age.
          </p>
        </div>
      </section>

      <section className="programs-list section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Find the Right Program</h2>
            <p className="section-subtitle">
              Each program is thoughtfully designed around the developmental needs of that age group,
              with low staff-to-child ratios and qualified educators.
            </p>
          </div>
          <div className="programs-list__grid">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.id || program.sys?.id || program.title}
                program={program}
                featured={index === 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum approach */}
      <section className="programs-approach section" aria-label="Our curriculum approach">
        <div className="container programs-approach__inner">
          <div className="programs-approach__text">
            <h2 className="section-title">Our Curriculum Approach</h2>
            <p className="programs-approach__para">
              We use a play-based, emergent curriculum that follows children&apos;s interests and
              questions. Teachers observe, document, and respond to each child&apos;s unique
              developmental journey.
            </p>
            <ul className="programs-approach__list">
              {[
                'Literacy & language development',
                'Early numeracy & STEM exploration',
                'Creative arts & music',
                'Physical development & outdoor play',
                'Social-emotional learning',
                'Cultural awareness & diversity',
              ].map((item) => (
                <li key={item} className="programs-approach__item">
                  <span aria-hidden="true">✅</span> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">Enquire About Enrolment</Link>
          </div>
          <div className="programs-approach__image">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"
              alt="Teacher engaging with children in a classroom"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="programs-faq section" aria-label="Frequently asked questions">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Have more questions? We&apos;d love to hear from you.
            </p>
          </div>
          <div className="programs-faq__list">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="programs-faq__item">
                <summary className="programs-faq__question">{q}</summary>
                <p className="programs-faq__answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
