import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeaderNavigation from "../HeaderNavigation";

describe("HeaderNavigation", () => {
  it("renders navigation links", () => {
    const onCloseMenu = vi.fn();

    render(
      <MemoryRouter>
        <HeaderNavigation menuOpen={true} onCloseMenu={onCloseMenu} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /enrol now/i }),
    ).toBeInTheDocument();
  });

  it("closes when overlay is clicked", () => {
    const onCloseMenu = vi.fn();

    render(
      <MemoryRouter>
        <HeaderNavigation menuOpen={true} onCloseMenu={onCloseMenu} />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByTestId("header-navigation-overlay"));

    expect(onCloseMenu).toHaveBeenCalledTimes(1);
  });
});
