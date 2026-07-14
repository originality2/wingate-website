import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GalleryPage from "../GalleryPage";
import { galleryImages } from "../../../content/siteContent";

describe("GalleryPage", () => {
  it("renders the gallery heading", () => {
    render(<GalleryPage />);

    expect(
      screen.getByRole("heading", { name: /gallery/i }),
    ).toBeInTheDocument();
  });

  it("renders all gallery images", () => {
    render(<GalleryPage />);

    expect(screen.getAllByRole("img")).toHaveLength(galleryImages.length);
  });
});
