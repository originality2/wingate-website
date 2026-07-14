import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  it("renders the site logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(
      screen.getByLabelText(/wingate childcare home/i),
    ).toBeInTheDocument();
  });

  it.each([
    "About",
    "Program",
    "Enrolments",
    "Our People",
    "Gallery",
    "Parent Resources",
    "Contact",
  ])("renders navigation link: %s", (link) => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
  });

  it("renders the Enrol Now CTA", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("link", { name: /enrol now/i }),
    ).toBeInTheDocument();
  });
});
