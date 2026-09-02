import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import OurPeople from "../OurPeople";
import {
  peoplePage,
  teamMemberGroups,
  teamMembers,
} from "../../../content/siteContent";

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
      screen.getAllByRole("heading", { name: member.name }).length,
    ).toBeGreaterThan(0);
  });

  it.each(teamMembers)("renders team member role: $name", (member) => {
    render(<OurPeople />);

    expect(screen.getAllByText(member.role).length).toBeGreaterThan(0);
  });

  it.each(teamMemberGroups)("renders the $title group", (group) => {
    render(<OurPeople />);

    expect(
      screen.getByRole("heading", { name: group.title }),
    ).toBeInTheDocument();
  });

  it.each(teamMembers.filter((member) => member.qualification))(
    "renders $name's qualification",
    (member) => {
      render(<OurPeople />);

      expect(screen.getByText(member.qualification!)).toBeInTheDocument();
    },
  );
});
