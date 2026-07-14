import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
`;

export const HeroSection = styled.section`
  padding: 4rem 0 2rem;
  background: linear-gradient(135deg, #dbffe8 0%, #e6fbff 100%);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 1.25rem;
`;

export const Eyebrow = styled.p`
  display: inline-block;
  margin-bottom: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-primary-dark);
  font-weight: 700;
`;

export const Intro = styled.p`
  max-width: 65ch;
  margin-bottom: 1rem;
`;

export const Section = styled.section<{ $alt?: boolean }>`
  padding: 0;
  scroll-margin-top: 6rem;
  background: ${({ $alt }) => ($alt ? "#dcffe9" : "transparent")};
`;

export const CardGrid = styled.div<{ $twoCol?: boolean }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ $twoCol }) =>
    $twoCol ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))"};

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const SoftCard = styled.article`
  background: var(--color-surface);
  border-radius: 0;
  padding: 1.1rem;
  height: 100%;

  ul {
    list-style: disc;
    padding-left: 1rem;
    color: var(--color-muted);
  }
`;

export const TextLink = styled.a`
  color: var(--color-primary-dark);
  font-weight: 600;
`;
