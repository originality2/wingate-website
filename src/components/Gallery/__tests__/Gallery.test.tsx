import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Gallery from "../Gallery";
import { mockGalleryImages } from "../../../lib/mockData";

const galleryAltTexts = mockGalleryImages.map(
  (item) => item.description || item.title || "Gallery image",
);
const galleryTitles = mockGalleryImages
  .map((item) => item.title)
  .filter((title): title is string => Boolean(title));

describe("Gallery", () => {
  it("renders nothing when no images are provided", () => {
    const { container } = render(<Gallery images={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders all images in full mode", () => {
    render(<Gallery images={mockGalleryImages} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(mockGalleryImages.length);
  });

  it.each(galleryAltTexts)("renders gallery image alt text: %s", (altText) => {
    render(<Gallery images={mockGalleryImages} />);

    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  it.each(galleryTitles)("renders gallery title: %s", (title) => {
    render(<Gallery images={mockGalleryImages} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("limits images to six in compact mode", () => {
    const extendedImages = [
      ...mockGalleryImages,
      {
        id: "g7",
        title: "Water Play",
        description: "Exploring water play together",
        imageUrl: "https://example.com/water.jpg",
      },
    ];

    render(<Gallery images={extendedImages} compact />);

    expect(screen.getAllByRole("img")).toHaveLength(6);
  });

  it("does not render images beyond compact limit", () => {
    const extendedImages = [
      ...mockGalleryImages,
      {
        id: "g7",
        title: "Water Play",
        description: "Exploring water play together",
        imageUrl: "https://example.com/water.jpg",
      },
    ];

    render(<Gallery images={extendedImages} compact />);

    expect(screen.queryByText("Water Play")).not.toBeInTheDocument();
  });
});
