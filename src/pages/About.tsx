import { aboutPage, galleryImages } from '../content/siteContent';

export default function About() {
  return (
    <main className="page-shell">
      <section className="page-hero" aria-label="About page header">
        <div className="container">
          <p className="page-eyebrow">Wingate Childcare Co-operative</p>
          <h1>{aboutPage.title}</h1>
          <p className="page-intro">{aboutPage.intro}</p>
        </div>
      </section>

      <section id="history" className="page-section">
        <div className="content-grid">
          <div className="text-panel">
            <h2>History</h2>
            <p>
              Wingate Avenue Children&apos;s Co-Operative first opened in 1975 and has provided education and care
              for local families ever since. The service is a 70-place, not-for-profit long day care centre for
              children aged 6 weeks to 6 years.
            </p>
            <p>
              As a community co-operative, Wingate is governed by a volunteer Committee of Management alongside
              centre leadership. This structure helps maintain strong family voice, community access, and quality
              investment in educators and learning environments.
            </p>
          </div>
          <div className="image-panel">
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="rounded-media" />
          </div>
        </div>
      </section>

      <section id="philosophy" className="page-section page-section--alt">
        <div className="content-grid">
          <div className="image-panel">
            <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="rounded-media" />
          </div>
          <div className="text-panel">
            <h2>Philosophy</h2>
            <p>
              We acknowledge the Wurundjeri Woi-Wurrung People of the Kulin Nation and pay our respects to Elders
              past, present, and emerging. Wingate&apos;s philosophy centres relationships with children, families, and
              community.
            </p>
            <p>
              Inspired by Reggio Emilia, we see children as capable, curious learners and educators as thoughtful
              guides. We value play as learning, inclusion, compassion, and wellbeing so that every child and family
              experiences belonging.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
