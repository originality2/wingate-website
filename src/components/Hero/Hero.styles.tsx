import styled from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const HeroSection = styled.section`
  position: relative;
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 58%,
    #4ebc78 100%
  );
  color: #fff;
  padding: 6.5rem 0 3.5rem;
  overflow: hidden;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 20rem;
    height: 20rem;
    right: -7rem;
    top: -4rem;
    background: rgba(255, 211, 108, 0.2);
  }

  &::after {
    width: 16rem;
    height: 16rem;
    left: -5rem;
    bottom: 3rem;
    background: rgba(255, 111, 169, 0.14);
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(
      circle at 18% 20%,
      rgba(255, 255, 255, 0.16) 0%,
      transparent 25%
    ),
    radial-gradient(
      circle at 82% 22%,
      rgba(123, 200, 255, 0.18) 0%,
      transparent 24%
    ),
    radial-gradient(
      circle at 72% 78%,
      rgba(255, 180, 58, 0.18) 0%,
      transparent 26%
    ),
    radial-gradient(circle, rgba(255, 255, 255, 0.11) 1px, transparent 1px);
  background-size:
    auto,
    auto,
    auto,
    28px 28px;
  pointer-events: none;
`;

export const HeroContentGrid = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 1.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${layoutBreakpoints.large}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

export const HeroText = styled.div``;

export const Badge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.28);
  padding: 0.35rem 1rem;
  border-radius: 1rem 1.6rem 1rem 1.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
`;

export const Headline = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  line-height: 1.15;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
`;

export const Subheading = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.75;
  margin-bottom: 1.5rem;
  max-width: 520px;

  @media (max-width: ${layoutBreakpoints.large}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: ${layoutBreakpoints.large}) {
    justify-content: center;
  }
`;

export const HeroButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.1rem;
  font-weight: 600;
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
`;

export const PrimaryHeroButtonLink = styled(HeroButtonLink)`
  background: var(--color-primary);
  color: #fff;

  &:hover {
    background: var(--color-primary-dark);
  }
`;

export const SecondaryHeroButtonLink = styled(HeroButtonLink)`
  border: 1px solid rgba(255, 255, 255, 0.7);
  color: #fff;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  align-self: stretch;

  @media (max-width: ${layoutBreakpoints.large}) {
    max-width: 360px;
    margin: 0 auto;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    max-width: 280px;
  }
`;

export const StatCard = styled.div<{ $accent?: boolean; $green?: boolean }>`
  --card-tilt: -2deg;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 2rem 1.5rem 2rem 1.35rem;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
  text-align: center;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  transform: rotate(var(--card-tilt));
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  ${({ $accent }) =>
    $accent &&
    `
    background: rgba(255, 180, 58, 0.26);
    border-color: rgba(255, 211, 108, 0.42);
  `}

  ${({ $green }) =>
    $green &&
    `
    background: rgba(99, 199, 138, 0.24);
  `}

  &:hover {
    transform: translateY(-6px) rotate(var(--card-tilt));
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 0 22px 42px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: ${layoutBreakpoints.large}) {
    transform: none;

    &:hover {
      transform: none;
    }
  }
`;

export const StatIcon = styled.span`
  font-size: 2rem;
`;

export const StatValue = styled.span`
  font-size: 1.75rem;
  font-weight: 800;
  font-family: var(--font-heading);
  color: #fff;
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const Wave = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  line-height: 0;

  svg {
    width: 100%;
    height: 80px;
    display: block;
  }
`;
