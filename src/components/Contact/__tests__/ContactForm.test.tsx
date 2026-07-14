import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  it.each([/your name/i, /email address/i, /phone number/i, /message/i])(
    "renders form field: %s",
    (fieldLabel) => {
      render(<ContactForm />);

      expect(screen.getByLabelText(fieldLabel)).toBeInTheDocument();
    },
  );

  it("renders the submit button", () => {
    render(<ContactForm />);
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  it("shows success message after submission", async () => {
    render(<ContactForm />);
    // Fill required fields
    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    // After async submission, success message should appear
    expect(
      await screen.findByText(/thank you/i, {}, { timeout: 2500 }),
    ).toBeInTheDocument();
  });
});
