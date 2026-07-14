import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../Hero";
import { mockHeroContent } from "../../../lib/mockData";

describe("Hero", () => {
  it.each(mockHeroContent.headline.split("\n"))(
    "renders headline line: %s",
    (line) => {
      render(
        <MemoryRouter>
          <Hero content={mockHeroContent} />
        </MemoryRouter>,
      );

      expect(screen.getByText(line)).toBeInTheDocument();
    },
  );

  it("renders the subheading", () => {
    render(
      <MemoryRouter>
        <Hero content={mockHeroContent} />
      </MemoryRouter>,
    );
    expect(screen.getByText(mockHeroContent.subheading)).toBeInTheDocument();
  });

  it.each([/explore our programs/i, /schedule a tour/i])(
    "renders CTA link: %s",
    (ctaLabel) => {
      render(
        <MemoryRouter>
          <Hero content={mockHeroContent} />
        </MemoryRouter>,
      );

      expect(screen.getByRole("link", { name: ctaLabel })).toBeInTheDocument();
    },
  );
});
