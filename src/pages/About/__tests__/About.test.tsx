import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../About";
import { aboutPage } from "../../../content/siteContent";

describe("About", () => {
  it("renders the about heading", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", { name: aboutPage.title }),
    ).toBeInTheDocument();
  });

  it.each([/history/i, /philosophy/i])(
    "renders section heading: %s",
    (heading) => {
      render(<About />);

      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    },
  );

  it.each([
    "Early learning art room with child-sized furniture",
    "Children's playdough table with natural materials",
  ])("renders section image alt text: %s", (altText) => {
    render(<About />);

    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });
});
