import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

beforeAll(() => {
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

  class IntersectionObserverMock {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  }

  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
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
});
