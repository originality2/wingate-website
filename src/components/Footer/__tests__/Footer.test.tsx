import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";
import { navItems, siteContact } from "../../../content/siteContent";

describe("Footer", () => {
  it("renders the site brand link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /wingate childcare home/i }),
    ).toBeInTheDocument();
  });

  it.each(navItems.map((item) => item.label))(
    "renders quick navigation link: %s",
    (label) => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
      );

      const quickLinksHeading = screen.getByRole("heading", {
        name: /quick links/i,
      });
      const quickLinksSection = quickLinksHeading.parentElement;

      expect(
        within(quickLinksSection as HTMLElement).getByRole("link", {
          name: label,
        }),
      ).toBeInTheDocument();
    },
  );

  it("renders address link to map", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: siteContact.address }),
    ).toHaveAttribute("href", siteContact.mapLink);
  });

  it("renders phone link with tel href", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: siteContact.phone }),
    ).toHaveAttribute("href", `tel:${siteContact.phone.replace(/\D/g, "")}`);
  });

  it("renders email link with mailto href", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: siteContact.email }),
    ).toHaveAttribute("href", `mailto:${siteContact.email}`);
  });

  it.each([
    [/parent resources/i, 2],
    [/enrolments/i, 2],
  ])("renders utility links %s count %i", (label, count) => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole("link", { name: label })).toHaveLength(count);
  });
});
