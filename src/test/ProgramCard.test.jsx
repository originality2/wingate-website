import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProgramCard from '../components/Programs/ProgramCard';
import { mockPrograms } from '../lib/mockData';

describe('ProgramCard', () => {
  const program = mockPrograms[0];

  it('renders the program title', () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} />
      </MemoryRouter>
    );
    expect(screen.getByText(program.fields.title)).toBeInTheDocument();
  });

  it('renders the age range', () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} />
      </MemoryRouter>
    );
    expect(screen.getByText(program.fields.ageRange)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} />
      </MemoryRouter>
    );
    expect(screen.getByText(program.fields.description)).toBeInTheDocument();
  });

  it('does not show Popular badge when not featured', () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} featured={false} />
      </MemoryRouter>
    );
    // The badge is CSS-only (::before pseudo-element), so just check class absence
    const article = screen.getByRole('article');
    expect(article.classList.contains('program-card--featured')).toBe(false);
  });

  it('shows featured class when featured=true', () => {
    render(
      <MemoryRouter>
        <ProgramCard program={program} featured={true} />
      </MemoryRouter>
    );
    const article = screen.getByRole('article');
    expect(article.classList.contains('program-card--featured')).toBe(true);
  });
});
