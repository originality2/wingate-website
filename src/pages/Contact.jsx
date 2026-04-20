import { contactPage, siteContact } from '../content/siteContent';

export default function Contact() {
  return (
    <main className="page-shell">
      <section className="page-hero" aria-label="Contact page header">
        <div className="container">
          <p className="page-eyebrow">Wingate Childcare Co-operative</p>
          <h1>{contactPage.title}</h1>
          <p className="page-intro">{contactPage.intro}</p>
        </div>
      </section>

      <section id="details" className="page-section">
        <div className="container card-grid two-col">
          <article className="soft-card">
            <h2>Contact Details</h2>
            <p>{siteContact.address}</p>
            <p>
              <a href={`tel:${siteContact.phone.replace(/\D/g, '')}`}>{siteContact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            </p>
            <h3>Opening Hours</h3>
            <ul>
              {siteContact.hours.map((item) => (
                <li key={item.day}>{item.day}: {item.time}</li>
              ))}
            </ul>
          </article>
          <article className="soft-card">
            <h2>Visit Us</h2>
            <p>Book a tour to see the rooms, meet educators, and ask questions about enrolment availability.</p>
            <a className="btn btn-primary" href={siteContact.mapLink} target="_blank" rel="noreferrer">
              Open Map
            </a>
          </article>
        </div>
      </section>

      <section id="message" className="page-section page-section--alt">
        <div className="container">
          <article className="soft-card message-card">
            <h2>Message Us</h2>
            <p>
              Send us a short message and we will get back to you about tours, availability, and enrolment steps.
            </p>
            <form className="simple-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" autoComplete="name" />
              </label>
              <label>
                Email
                <input type="email" name="email" autoComplete="email" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" />
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}
