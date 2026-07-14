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

export const Section = styled.section`
  padding: 0;
  scroll-margin-top: 6rem;
`;

export const TeamGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamCard = styled.article`
  border-radius: 0;
  overflow: hidden;
  background: var(--color-surface);
  height: 100%;
`;

export const TeamImage = styled.img`
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

export const TeamBody = styled.div`
  padding: 1rem;
`;

export const CardEyebrow = styled.p`
  display: inline-block;
  margin-bottom: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-primary-dark);
  font-weight: 700;
`;
