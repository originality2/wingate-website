import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChildSafePractice from "../ChildSafePractice";

describe("ChildSafePractice", () => {
  it("renders the page heading", () => {
    render(
      <MemoryRouter>
        <ChildSafePractice />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /child safe practice/i }),
    ).toBeInTheDocument();
  });

  it("renders the child safety section headings", () => {
    render(
      <MemoryRouter>
        <ChildSafePractice />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /child safety committee and children's voice/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /child safety advocate/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /independent child safety consultant/i,
      }),
    ).toBeInTheDocument();
  });
});
