import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials";
import { mockTestimonials } from "../../../lib/mockData";

describe("Testimonials", () => {
  it("renders all testimonials", () => {
    render(<Testimonials testimonials={mockTestimonials} />);
    expect(screen.getByText(/what parents say/i)).toBeInTheDocument();
  });

  it.each(mockTestimonials)(
    "renders testimonial quote for: $authorName",
    (testimonial) => {
      render(<Testimonials testimonials={mockTestimonials} />);

      expect(screen.getByText(testimonial.quote)).toBeInTheDocument();
    },
  );

  it.each(mockTestimonials)(
    "renders testimonial author for: $authorName",
    (testimonial) => {
      render(<Testimonials testimonials={mockTestimonials} />);

      expect(screen.getByText(testimonial.authorName)).toBeInTheDocument();
    },
  );

  it("renders nothing when testimonials list is empty", () => {
    const { container } = render(<Testimonials testimonials={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders the section heading", () => {
    render(<Testimonials testimonials={mockTestimonials} />);
    expect(screen.getByText(/what parents say/i)).toBeInTheDocument();
  });
});
