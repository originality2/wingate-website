import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";
import { homePage, siteContact } from "../../../content/siteContent";

describe("Home", () => {
  it("renders page hero heading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: homePage.title }),
    ).toBeInTheDocument();
  });

  it("renders all tile links", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getAllByText(/view page/i)).toHaveLength(
      homePage.tiles.length,
    );
  });

  it("renders contact address", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText(siteContact.address)).toBeInTheDocument();
  });

  it("renders phone link with tel href", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: siteContact.phone }),
    ).toHaveAttribute("href", `tel:${siteContact.phone.replace(/\D/g, "")}`);
  });

  it("renders email link with mailto href", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: siteContact.email }),
    ).toHaveAttribute("href", `mailto:${siteContact.email}`);
  });
});
