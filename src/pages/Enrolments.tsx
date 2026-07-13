import { Link } from 'react-router-dom';
import { enrolmentsPage, parentResourceLinks } from '../content/siteContent';

export default function Enrolments() {
  return (
    <main className="page-shell">
      <section className="page-hero" aria-label="Enrolments page header">
        <div className="container">
          <p className="page-eyebrow">Wingate Childcare Co-operative</p>
          <h1>{enrolmentsPage.title}</h1>
          <p className="page-intro">{enrolmentsPage.intro}</p>
        </div>
      </section>

      <section id="info" className="page-section">
        <div className="content-grid">
          <div className="text-panel">
            <h2>Enrolment Information & Availability</h2>
            <p>
              Families are encouraged to join the waitlist as early as possible. Places are offered based on
              availability across the year, with most offers made at the beginning of each year when children
              transition to school.
            </p>
            <p>
              As day changes and withdrawals require only two weeks&apos; notice, availability can shift quickly.
              Offers are also made in line with the Priority of Access policy.
            </p>
            <a className="btn btn-primary" href={parentResourceLinks.documents[0].href} target="_blank" rel="noreferrer">
              Open Family Handbook
            </a>
            <a
              className="btn btn-primary"
              href="https://prodadmin.myxplor.com/enrollment/index/dllrYUJ1THpWSGlCT2luRVlIM0NqZz09"
              target="_blank"
              rel="noreferrer"
            >
              Add to Waitlist
            </a>
          </div>
          <div className="text-panel text-panel--soft">
            <h3>What to Prepare</h3>
            <ul>
              <li>Child and family contact details</li>
              <li>Preferred days and start timeframe</li>
              <li>CCS information and child CRN</li>
              <li>Immunisation and allergy/dietary information</li>
              <li>Emergency contacts</li>
              <li>Authorised collection identification details</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="fees" className="page-section page-section--alt">
        <div className="container">
          <h2>Fees</h2>
          <div className="card-grid">
            <article className="soft-card">
              <h3>Daily Fees</h3>
              <p>Current fees: Daily $161, Weekly $785. Fees are set by the Committee of Management and reviewed annually.</p>
            </article>
            <article className="soft-card">
              <h3>Child Care Subsidy</h3>
              <p>Out-of-pocket costs depend on CCS and ACCS eligibility. CCS is based on the centre&apos;s 11-hour operating day.</p>
            </article>
            <article className="soft-card">
              <h3>Inclusions</h3>
              <p>First one-hour orientation is free; half-day orientations are charged at half the daily rate.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="tours" className="page-section">
        <div className="content-grid">
          <div className="text-panel text-panel--soft">
            <h2>Tours</h2>
            <p>
              Please call or email to book a tour. Tours are by appointment and include meeting leadership and room
              educators while observing the program indoors and outdoors.
            </p>
            <Link to="/contact" className="btn btn-primary">Book a Tour</Link>
          </div>
          <div className="text-panel text-panel--soft">
            <h3>What You&apos;ll See</h3>
            <ul>
              <li>Each room and outdoor spaces</li>
              <li>Orientation approach and transition support</li>
              <li>How educators communicate with families</li>
              <li>Current enrolment timelines</li>
              <li>What to bring and what the centre provides</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
