import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ParentResources from "../ParentResources";
import {
  parentResourceLinks,
  resourcesPage,
} from "../../../content/siteContent";

describe("ParentResources", () => {
  it("renders page heading", () => {
    render(<ParentResources />);

    expect(
      screen.getByRole("heading", { name: resourcesPage.title }),
    ).toBeInTheDocument();
  });

  it("renders all document resource links", () => {
    render(<ParentResources />);

    expect(
      screen.getAllByRole("link", { name: /open resource/i }),
    ).toHaveLength(parentResourceLinks.documents.length);
  });

  it("renders all policy links", () => {
    render(<ParentResources />);

    expect(screen.getAllByRole("link", { name: /view policy/i })).toHaveLength(
      parentResourceLinks.policies.length,
    );
  });
});
