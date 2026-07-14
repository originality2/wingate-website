import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Programs from "../Programs";
import { programGroups, programPage } from "../../../content/siteContent";

describe("Programs", () => {
  it("renders page heading", () => {
    render(
      <MemoryRouter>
        <Programs />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: programPage.title }),
    ).toBeInTheDocument();
  });

  it.each([/pedagogy/i, /meals & nutrition/i])(
    "renders program section heading: %s",
    (heading) => {
      render(
        <MemoryRouter>
          <Programs />
        </MemoryRouter>,
      );

      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    },
  );

  it("renders sample menu link", () => {
    render(
      <MemoryRouter>
        <Programs />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /view sample menu/i }),
    ).toBeInTheDocument();
  });

  it.each(programGroups.map((group) => group.name))(
    "renders program group heading: %s",
    (groupName) => {
      render(
        <MemoryRouter>
          <Programs />
        </MemoryRouter>,
      );

      expect(
        screen.getByRole("heading", { name: groupName }),
      ).toBeInTheDocument();
    },
  );
});
