import { Link } from 'react-router-dom';
import { galleryImages, programGroups, programPage } from '../content/siteContent';

export default function Programs() {
  return (
    <main className="page-shell">
      <section className="page-hero" aria-label="Program page header">
        <div className="container">
          <p className="page-eyebrow">Wingate Childcare Co-operative</p>
          <h1>{programPage.title}</h1>
          <p className="page-intro">{programPage.intro}</p>
        </div>
      </section>

      <section id="pedagogy" className="page-section">
        <div className="content-grid">
          <div className="text-panel">
            <h2>Pedagogy</h2>
            <p>
              We aim for a balance between adult-led, child-initiated, and shared learning experiences.
              Intentional teaching at Wingate is deliberate, purposeful, and responsive to children&apos;s emerging
              interests.
            </p>
            <p>
              Our emergent curriculum is shaped through observation, documentation, family input, and community
              context. Programs are play-based, informed by Reggio Emilia, and aligned with the Victorian Early
              Years Learning Framework.
            </p>
          </div>
          <div className="image-panel">
            <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="rounded-media" />
          </div>
        </div>
      </section>

      <section id="age-groups" className="page-section page-section--alt">
        <div className="container">
          <h2>Seeds, Seedlings & Sprouts</h2>
          <p>
            Wingate provides education and care from 6 weeks onwards, including funded 3-year-old and 4-year-old
            kindergarten pathways within the curriculum.
          </p>
          <div className="card-grid">
            {programGroups.map((group) => (
              <article key={group.name} className="soft-card">
                <p className="card-eyebrow">{group.ages}</p>
                <h3>{group.name}</h3>
                <p>{group.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="meals" className="page-section">
        <div className="content-grid">
          <div className="image-panel">
            <img src={galleryImages[4].src} alt={galleryImages[4].alt} className="rounded-media" />
          </div>
          <div className="text-panel">
            <h2>Meals & Nutrition</h2>
            <p>
              The centre provides a breakfast program (until 8am), morning tea, lunch, afternoon tea, and a late
              snack. Menus support children&apos;s wellbeing and dietary requirements.
            </p>
            <p>
              Wingate also supplies nappies, wipes, sunscreen, and children&apos;s bedding as part of the daily program.
            </p>
            <Link className="btn btn-primary" to="/parent-resources">
              View Sample Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
