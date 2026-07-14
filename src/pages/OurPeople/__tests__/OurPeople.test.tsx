import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import OurPeople from "../OurPeople";
import { peoplePage, teamMembers } from "../../../content/siteContent";

describe("OurPeople", () => {
  it("renders page heading and all team members", () => {
    render(<OurPeople />);

    expect(
      screen.getByRole("heading", { name: peoplePage.title }),
    ).toBeInTheDocument();
  });

  it.each(teamMembers)("renders team member details: $name", (member) => {
    render(<OurPeople />);

    expect(
      screen.getByRole("heading", { name: member.name }),
    ).toBeInTheDocument();
  });

  it.each(teamMembers)("renders team member role: $name", (member) => {
    render(<OurPeople />);

    expect(screen.getByText(member.role)).toBeInTheDocument();
  });
});
