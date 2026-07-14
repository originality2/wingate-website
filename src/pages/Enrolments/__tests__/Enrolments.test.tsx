import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Enrolments from "../Enrolments";
import { enrolmentsPage } from "../../../content/siteContent";

describe("Enrolments", () => {
  it("renders the enrolments heading", () => {
    render(
      <MemoryRouter>
        <Enrolments />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: enrolmentsPage.title }),
    ).toBeInTheDocument();
  });

  it.each([/open family handbook/i, /add to waitlist/i, /book a tour/i])(
    "renders action link: %s",
    (label) => {
      render(
        <MemoryRouter>
          <Enrolments />
        </MemoryRouter>,
      );

      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    },
  );
});
