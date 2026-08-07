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

export const Section = styled.section`
  padding: 0;
  scroll-margin-top: 6rem;
  background: transparent;
  --panel-bg: var(--color-surface);
  --panel-bg-contrast: var(--color-soft);
  --soft-card-bg: var(--panel-bg-contrast);

  &:nth-of-type(odd) {
    background: #e5d9cc;
    --panel-bg: var(--color-soft);
    --panel-bg-contrast: var(--color-surface);
    --soft-card-bg: var(--panel-bg-contrast);
  }
`;

const getFlippedVirtualParity = (
  virtualParity?: "odd" | "even",
): "odd" | "even" | undefined => {
  if (virtualParity === "odd") return "even";
  if (virtualParity === "even") return "odd";
  return undefined;
};

const getTextPanelBackground = (
  virtualParity: "odd" | "even" | undefined,
  contrastPanel: boolean | undefined,
) => {
  if (virtualParity === "odd") return "var(--color-soft)";
  if (virtualParity === "even") return "var(--color-surface)";
  return contrastPanel
    ? "var(--panel-bg-contrast, var(--color-soft))"
    : "var(--panel-bg, var(--color-surface))";
};

const getTextPanelSoftCardBackground = (
  virtualParity: "odd" | "even" | undefined,
  contrastPanel: boolean | undefined,
) => {
  if (virtualParity === "odd") return "var(--color-surface)";
  if (virtualParity === "even") return "var(--color-soft)";
  return contrastPanel
    ? "var(--panel-bg, var(--color-surface))"
    : "var(--panel-bg-contrast, var(--color-soft))";
};

export const TextPanel = styled.div<{
  $contrastPanel?: boolean;
  $virtualParity?: "odd" | "even";
  $flipVirtualParityResponsiveness?: boolean;
}>`
  width: 100%;
  padding: 1.5rem;
  background: ${({ $virtualParity, $contrastPanel }) =>
    getTextPanelBackground($virtualParity, $contrastPanel)};
  --soft-card-bg: ${({ $virtualParity, $contrastPanel }) =>
    getTextPanelSoftCardBackground($virtualParity, $contrastPanel)};
  display: flex;
  flex-direction: column;

  @media (max-width: ${layoutBreakpoints.large}) {
    background: ${({
      $flipVirtualParityResponsiveness,
      $virtualParity,
      $contrastPanel,
    }) =>
      getTextPanelBackground(
        $flipVirtualParityResponsiveness
          ? getFlippedVirtualParity($virtualParity)
          : $virtualParity,
        $contrastPanel,
      )};
    --soft-card-bg: ${({
      $flipVirtualParityResponsiveness,
      $virtualParity,
      $contrastPanel,
    }) =>
      getTextPanelSoftCardBackground(
        $flipVirtualParityResponsiveness
          ? getFlippedVirtualParity($virtualParity)
          : $virtualParity,
        $contrastPanel,
      )};
  }

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

export const ContentGrid = styled.div<{ $stackAtTablet?: boolean }>`
  display: flex;
  align-items: stretch;
  min-height: clamp(420px, 56vh, 760px);

  > * {
    flex: 1 1 50%;
    min-width: 0;
    display: flex;
  }

  @media (max-width: ${({ $stackAtTablet }) =>
      $stackAtTablet ? layoutBreakpoints.large : layoutBreakpoints.mobile}) {
    flex-direction: column;
    min-height: 0;

    > ${TextPanel} {
      order: 0;
    }

    > ${ImagePanel} {
      order: 1;
    }
  }
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
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${layoutBreakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
  padding-bottom: 1rem;
`;

export const SoftCard = styled.article`
  background: var(--soft-card-bg, var(--color-soft));
  border-radius: 15px;
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
  border-radius: 45px;
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
