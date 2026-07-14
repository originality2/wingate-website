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

export const ContentGrid = styled.div`
  display: flex;
  align-items: stretch;
  min-height: clamp(420px, 56vh, 760px);

  > * {
    flex: 1 1 50%;
    min-width: 0;
    display: flex;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    min-height: 0;
  }
`;

export const TextPanel = styled.div`
  width: 100%;
  padding: clamp(1.5rem, 4vw, 4rem);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImagePanel = styled.div`
  display: flex;
  align-self: stretch;
  overflow: hidden;
`;

export const RoundedMedia = styled.img`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 100%;
`;
