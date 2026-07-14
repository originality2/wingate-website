import { Link } from "react-router-dom";
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

export const TextPanel = styled.div<{ $soft?: boolean }>`
  width: 100%;
  padding: clamp(1.5rem, 4vw, 4rem);
  background: ${({ $soft }) =>
    $soft ? "var(--color-soft)" : "var(--color-surface)"};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style: disc;
    padding-left: 1rem;
    color: var(--color-muted);
  }
`;

export const CardGrid = styled.div`
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

export const SoftCard = styled.article`
  background: var(--color-surface);
  border-radius: 0;
  padding: 1.1rem;
  height: 100%;
`;

export const PrimaryButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.1rem;
  font-weight: 600;
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;
  width: fit-content;
  margin-top: 0.5rem;

  &:hover {
    background: var(--color-primary-dark);
  }
`;

export const PrimaryRouterButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.1rem;
  font-weight: 600;
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;
  width: fit-content;
  margin-top: 0.5rem;

  &:hover {
    background: var(--color-primary-dark);
  }
`;
