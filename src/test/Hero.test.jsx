import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import { mockHeroContent } from '../lib/mockData';

describe('Hero', () => {
  it('renders the headline', () => {
    render(
      <MemoryRouter>
        <Hero content={mockHeroContent} />
      </MemoryRouter>
    );
    // Each line of the headline should be present
    mockHeroContent.headline.split('\n').forEach((line) => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });
  });

  it('renders the subheading', () => {
    render(
      <MemoryRouter>
        <Hero content={mockHeroContent} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockHeroContent.subheading)).toBeInTheDocument();
  });

  it('renders primary and secondary CTA links', () => {
    render(
      <MemoryRouter>
        <Hero content={mockHeroContent} />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: /explore our programs/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /schedule a tour/i })
    ).toBeInTheDocument();
  });
});
