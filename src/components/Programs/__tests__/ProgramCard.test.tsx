import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProgramCard from "../ProgramCard";
import { mockPrograms } from "../../../lib/mockData";

describe("ProgramCard", () => {
  const program = mockPrograms[0];

  it("renders the program title", () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} />
      </MemoryRouter>,
    );
    expect(screen.getByText(program.title)).toBeInTheDocument();
  });

  it("renders the age range", () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} />
      </MemoryRouter>,
    );
    expect(screen.getByText(program.ageRange)).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} />
      </MemoryRouter>,
    );
    expect(screen.getByText(program.description)).toBeInTheDocument();
  });

  it("does not show Popular badge when not featured", () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} featured={false} />
      </MemoryRouter>,
    );
    expect(screen.queryByText("Popular")).not.toBeInTheDocument();
  });

  it("shows Popular badge when featured=true", () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} featured={true} />
      </MemoryRouter>,
    );
    expect(screen.getByText("Popular")).toBeInTheDocument();
  });
});
