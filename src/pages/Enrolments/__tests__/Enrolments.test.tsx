import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Enrolments from "../Enrolments";

describe("Enrolments", () => {
  it("renders the updated enrolments heading", () => {
    render(
      <MemoryRouter>
        <Enrolments />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /begin your journey with wingate avenue children's co-operative/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders updated fee information", () => {
    render(
      <MemoryRouter>
        <Enrolments />
      </MemoryRouter>,
    );

    expect(screen.getByText(/daily fee: \$167\.70/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /child care subsidy \(ccs\)/i }),
    ).toBeInTheDocument();
  });

  it("renders ACCS information link", () => {
    render(
      <MemoryRouter>
        <Enrolments />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /click here/i })).toHaveAttribute(
      "href",
      "https://www.servicesaustralia.gov.au/how-to-apply-for-additional-child-care-subsidy?context=41866",
    );
  });
});
