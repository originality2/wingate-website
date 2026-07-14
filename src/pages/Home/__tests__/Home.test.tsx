import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";
import { homePage } from "../../../content/siteContent";

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

    expect(screen.getAllByRole("link", { name: /view /i })).toHaveLength(
      homePage.tiles.length,
    );
  });
});
