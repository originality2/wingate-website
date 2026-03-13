import { useState } from 'react';
import './ContactForm.css';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  childAge: '',
  program: '',
  message: '',
};

const PROGRAM_OPTIONS = [
  'Infant Care (6 wks – 12 months)',
  'Toddler Program (1 – 3 years)',
  'Preschool (3 – 5 years)',
  'Before & After School (K – 5th grade)',
  'General Enquiry',
];

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate form submission (replace with real endpoint or service)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
    setForm(INITIAL_FORM);
  };

  if (status === 'success') {
    return (
      <div className="contact-form__success" role="status" aria-live="polite">
        <span className="contact-form__success-icon" aria-hidden="true">🎉</span>
        <h3>Thank you, we&apos;ll be in touch soon!</h3>
        <p>We usually respond within one business day. We look forward to meeting you and your family.</p>
        <button
          className="btn btn-primary"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-name">
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
            className="contact-form__input"
            autoComplete="name"
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-email">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
            className="contact-form__input"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-phone">
            Phone Number
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="contact-form__input"
            autoComplete="tel"
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-childAge">
            Child&apos;s Age
          </label>
          <input
            id="cf-childAge"
            type="text"
            name="childAge"
            value={form.childAge}
            onChange={handleChange}
            placeholder="e.g. 18 months"
            className="contact-form__input"
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="cf-program">
          Program Interest
        </label>
        <select
          id="cf-program"
          name="program"
          value={form.program}
          onChange={handleChange}
          className="contact-form__input contact-form__select"
        >
          <option value="">Select a program…</option>
          {PROGRAM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="cf-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a little about your child and any questions you have…"
          required
          rows={5}
          className="contact-form__input contact-form__textarea"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary contact-form__submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
        {status !== 'submitting' && (
          <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
        )}
      </button>
    </form>
  );
}
