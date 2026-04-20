import { parentResourceLinks, resourcesPage } from '../content/siteContent';

export default function ParentResources() {
  return (
    <main className="page-shell">
      <section className="page-hero" aria-label="Parent Resources page header">
        <div className="container">
          <p className="page-eyebrow">Wingate Childcare Co-operative</p>
          <h1>{resourcesPage.title}</h1>
          <p className="page-intro">{resourcesPage.intro}</p>
        </div>
      </section>

      <section id="documents" className="page-section">
        <div className="container">
          <h2>Documents</h2>
          <div className="card-grid">
            {parentResourceLinks.documents.map((resource) => (
              <article key={resource.label} className="soft-card">
                <h3>{resource.label}</h3>
                <a href={resource.href} target="_blank" rel="noreferrer" className="text-link">
                  Open Resource
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="daily" className="page-section page-section--alt">
        <div className="container card-grid two-col">
          <article className="soft-card">
            <h2>Daily Information</h2>
            <ul>
              <li>Drop-off and collection routines</li>
              <li>Clearly labelled bag and spare clothing each day</li>
              <li>Water bottle, comfort item, and weather-appropriate clothing</li>
              <li>Sun-safe hat requirements from September to April</li>
              <li>Communication and updates from educators</li>
            </ul>
          </article>
          <article className="soft-card">
            <h2>Communication</h2>
            <p>
              Families are supported through enrolment and orientation with open communication between management,
              educators, and families. Personal information is handled respectfully and confidentially.
            </p>
          </article>
        </div>
      </section>

      <section id="policies" className="page-section">
        <div className="container">
          <h2>Policies</h2>
          <div className="card-grid">
            {parentResourceLinks.policies.map((policy) => (
              <article key={policy.label} className="soft-card">
                <h3>{policy.label}</h3>
                <a href={policy.href} target="_blank" rel="noreferrer" className="text-link">
                  View Policy
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
