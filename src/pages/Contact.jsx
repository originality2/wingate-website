import ContactForm from '../components/Contact/ContactForm';
import { mockContactInfo } from '../lib/mockData';
import './About.css';
import './Contact.css';

export default function Contact() {
  const { address, phone, email, hours } = mockContactInfo;

  return (
    <main>
      <section className="page-hero page-hero--purple" aria-label="Contact page header">
        <div className="container page-hero__inner">
          <h1 className="page-hero__title">Get in Touch</h1>
          <p className="page-hero__subtitle">
            We&apos;d love to meet you and your family. Reach out to schedule a tour or ask any questions.
          </p>
        </div>
      </section>

      <section className="contact-page section">
        <div className="container contact-page__inner">

          <div className="contact-page__info">
            <h2 className="section-title">Contact Information</h2>

            <div className="contact-info-block">
              <span className="contact-info-block__icon" aria-hidden="true">📍</span>
              <div>
                <h3 className="contact-info-block__title">Address</h3>
                <p className="contact-info-block__text">{address}</p>
              </div>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-block__icon" aria-hidden="true">📞</span>
              <div>
                <h3 className="contact-info-block__title">Phone</h3>
                <a href={`tel:${phone.replace(/\D/g,'')}`} className="contact-info-block__link">
                  {phone}
                </a>
              </div>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-block__icon" aria-hidden="true">✉️</span>
              <div>
                <h3 className="contact-info-block__title">Email</h3>
                <a href={`mailto:${email}`} className="contact-info-block__link">{email}</a>
              </div>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-block__icon" aria-hidden="true">🕐</span>
              <div>
                <h3 className="contact-info-block__title">Hours of Operation</h3>
                <table className="contact-hours">
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day}>
                        <td className="contact-hours__day">{day}</td>
                        <td className="contact-hours__time">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-map" aria-label="Map location placeholder">
              <div className="contact-map__placeholder">
                <span aria-hidden="true">🗺️</span>
                <p>123 Wingate Way, Childcare Town</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact-map__btn"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="contact-page__form">
            <h2 className="section-title">Send Us a Message</h2>
            <p className="contact-page__form-intro">
              Fill in the form below and we&apos;ll get back to you within one business day.
            </p>
            <ContactForm />
          </div>

        </div>
      </section>
    </main>
  );
}
