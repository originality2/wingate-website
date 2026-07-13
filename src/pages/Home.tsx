import { Link } from 'react-router-dom';
import { homePage, siteContact } from '../content/siteContent';

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__overlay">
          <p className="page-eyebrow">Ascot Vale</p>
          <h1>{homePage.title}</h1>
          <p>{homePage.subtitle}</p>
          <Link to="/enrolments" className="btn btn-primary">Enrolment Information</Link>
        </div>
      </section>

      <section className="home-links" aria-label="Site links">
        {homePage.tiles.map((tile) => (
          <article key={tile.to} className="home-tile">
            <img src={tile.image} alt={tile.alt} />
            <Link to={tile.to} className="home-tile__overlay">
              <h2>{tile.title}</h2>
              <p>{tile.text}</p>
              <span>View page</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="home-contact-strip">
        <div>
          <h2>Contact Wingate</h2>
          <p>{siteContact.address}</p>
        </div>
        <div>
          <a href={`tel:${siteContact.phone.replace(/\D/g, '')}`}>{siteContact.phone}</a>
          <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
        </div>
      </section>
    </main>
  );
}
