import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  ContactFormRoot,
  ContactFormSuccess,
  Field,
  FormRow,
  Input,
  Label,
  Select,
  SubmitButton,
  SuccessIcon,
  Textarea,
} from "./ContactForm.styles";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  childAge: "",
  program: "",
  message: "",
};

const PROGRAM_OPTIONS = [
  "Infant Care (6 wks – 12 months)",
  "Toddler Program (1 – 3 years)",
  "Preschool (3 – 5 years)",
  "Before & After School (K – 5th grade)",
  "General Enquiry",
];

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  childAge: string;
  program: string;
  message: string;
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmissionStatus>("idle"); // idle | submitting | success | error

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission (replace with real endpoint or service)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setForm(INITIAL_FORM);
  };

  if (status === "success") {
    return (
      <ContactFormSuccess role="status" aria-live="polite">
        <SuccessIcon aria-hidden="true">🎉</SuccessIcon>
        <h3>Thank you, we&apos;ll be in touch soon!</h3>
        <p>
          We usually respond within one business day. We look forward to meeting
          you and your family.
        </p>
        <SubmitButton type="button" onClick={() => setStatus("idle")}>
          Send another message
        </SubmitButton>
      </ContactFormSuccess>
    );
  }

  return (
    <ContactFormRoot onSubmit={handleSubmit} noValidate>
      <FormRow>
        <Field>
          <Label htmlFor="cf-name">
            Your Name <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="cf-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
            autoComplete="name"
          />
        </Field>
        <Field>
          <Label htmlFor="cf-email">
            Email Address <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="cf-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
            autoComplete="email"
          />
        </Field>
      </FormRow>

      <FormRow>
        <Field>
          <Label htmlFor="cf-phone">Phone Number</Label>
          <Input
            id="cf-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />
        </Field>
        <Field>
          <Label htmlFor="cf-childAge">Child&apos;s Age</Label>
          <Input
            id="cf-childAge"
            type="text"
            name="childAge"
            value={form.childAge}
            onChange={handleChange}
            placeholder="e.g. 18 months"
          />
        </Field>
      </FormRow>

      <Field>
        <Label htmlFor="cf-program">Program Interest</Label>
        <Select
          id="cf-program"
          name="program"
          value={form.program}
          onChange={handleChange}
        >
          <option value="">Select a program…</option>
          {PROGRAM_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </Field>

      <Field>
        <Label htmlFor="cf-message">
          Message <span aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a little about your child and any questions you have…"
          required
          rows={5}
        />
      </Field>

      <SubmitButton type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && (
          <svg
            viewBox="0 0 20 20"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        )}
      </SubmitButton>
    </ContactFormRoot>
  );
}
