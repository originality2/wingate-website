import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const layoutBreakpoints = {
  mobile: "31.3125rem",
  tablet: "48rem",
  large: "62.5rem",
} as const;

export const Main = styled.main`
  flex: 1;
`;

export const HeroSection = styled.section`
  padding: 4rem 0 2rem;
  background: linear-gradient(
    135deg,
    var(--color-soft) 0%,
    var(--color-surface) 100%
  );

  h1 {
    max-width: 18ch;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 1.5rem;

  @media (min-width: ${layoutBreakpoints.tablet}) {
    padding: 2rem;
  }

  @media (min-width: ${layoutBreakpoints.large}) {
    padding: 3rem;
  }
`;

export const Eyebrow = styled.p`
  display: inline-block;
  margin-bottom: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-dark);
`;

export const Intro = styled.p`
  max-width: 65ch;
  margin-bottom: 1rem;
`;

export const Section = styled.section<{ $alt?: boolean }>`
  padding: 0;
  scroll-margin-top: 6rem;
  background: ${({ $alt }) => ($alt ? "#e5d9cc" : "transparent")};
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

  @media (max-width: ${layoutBreakpoints.mobile}) {
    flex-direction: column;
    min-height: 0;
  }
`;

export const TextPanel = styled.div<{ $soft?: boolean }>`
  width: 100%;
  padding: 1.5rem;
  background: ${({ $soft }) =>
    $soft ? "var(--color-soft)" : "var(--color-surface)"};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${layoutBreakpoints.tablet}) {
    padding: 2rem;
  }

  @media (min-width: ${layoutBreakpoints.large}) {
    padding: 3rem;
  }

  ul {
    list-style: var(--content-list-style);
    padding-left: var(--content-list-padding-left);
    color: var(--color-content-list);
  }
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
  display: block;
`;

export const CardGrid = styled.div<{ $twoCol?: boolean }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ $twoCol }) =>
    $twoCol ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))"};

  @media (max-width: ${layoutBreakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SoftCard = styled.article`
  background: var(--color-surface);
  border-radius: 0;
  padding: 1.1rem;
  height: 100%;

  ul {
    list-style: var(--content-list-style);
    padding-left: var(--content-list-padding-left);
    color: var(--color-content-list);
  }
`;

const primaryButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.1rem;
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

export const PrimaryButtonLink = styled(Link)`
  ${primaryButtonStyles}
`;

export const PrimaryButtonAnchor = styled.a`
  ${primaryButtonStyles}
`;

export const PrimaryButton = styled.button`
  ${primaryButtonStyles}
`;
