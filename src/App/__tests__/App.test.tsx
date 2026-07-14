import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

beforeAll(() => {
  Object.defineProperty(window, "scrollTo", {
    writable: true,
    value: vi.fn(),
  });

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe("App", () => {
  it("renders two home-branded links", () => {
    render(<App />);

    expect(
      screen.getAllByRole("link", { name: /wingate childcare home/i }),
    ).toHaveLength(2);
  });

  it("renders enrolment information link", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: /enrolment information/i }),
    ).toBeInTheDocument();
  });

  it("renders footer content info landmark", () => {
    render(<App />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("scrolls to the top when navigating to another page", async () => {
    const user = userEvent.setup();

    render(<App />);

    vi.mocked(window.scrollTo).mockClear();

    const navigation = within(
      screen.getByRole("navigation", { name: /main navigation/i }),
    );

    await user.click(navigation.getByRole("link", { name: /^about$/i }));

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
