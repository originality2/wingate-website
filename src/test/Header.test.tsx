import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

describe('Header', () => {
  it('renders the site logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/wingate childcare home/i)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navLinks = [
      'About',
      'Program',
      'Enrolments',
      'Our People',
      'Gallery',
      'Parent Resources',
      'Contact',
    ];
    navLinks.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument();
    });
  });

  it('renders the Enrol Now CTA', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: /enrol now/i })
    ).toBeInTheDocument();
  });
});
