import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { contactPage, siteContact } from "../../../content/siteContent";

describe("Contact page", () => {
  it("renders page heading", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", { name: contactPage.title }),
    ).toBeInTheDocument();
  });

  it("renders contact address", () => {
    render(<Contact />);

    expect(screen.getByText(siteContact.address)).toBeInTheDocument();
  });

  it("renders phone link with tel href", () => {
    render(<Contact />);

    expect(
      screen.getByRole("link", { name: siteContact.phone }),
    ).toHaveAttribute("href", `tel:${siteContact.phone.replace(/\D/g, "")}`);
  });

  it("renders email link with mailto href", () => {
    render(<Contact />);

    expect(
      screen.getByRole("link", { name: siteContact.email }),
    ).toHaveAttribute("href", `mailto:${siteContact.email}`);
  });

  it.each([/name/i, /email/i, /message/i])(
    "renders message form field: %s",
    (fieldLabel) => {
      render(<Contact />);

      expect(screen.getByLabelText(fieldLabel)).toBeInTheDocument();
    },
  );

  it("renders message form submit button", () => {
    render(<Contact />);

    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });
});
