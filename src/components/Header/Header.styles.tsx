import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const HeaderRoot = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  /* Required so the sticky header remains above page content while scrolling. */
  z-index: 1200;
  background: var(--color-soft);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(6px);
  transition: box-shadow 0.2s ease;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      box-shadow: var(--shadow-soft);
    `}

  @media (max-width: ${layoutBreakpoints.large}) {
    backdrop-filter: none;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  min-height: 74px;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: grid;
    grid-template-columns: 36px 1fr 36px;
    align-items: center;
    gap: 0.75rem;
    min-height: 68px;
    position: relative;
    z-index: 1520;
  }
`;

export const BurgerButton = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  gap: 4px;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  border: 0;
  background: transparent;
  transition: background 0.2s ease;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    background: rgba(0, 143, 90, 0.08);
  }

  span {
    display: block;
    width: 18px;
    height: 2px;
    background: var(--color-text);
    border-radius: 2px;
    transition: 0.2s ease;
    transform-origin: center;
  }

  span:nth-child(1) {
    transform: ${({ $open }) =>
      $open ? "translateY(6px) rotate(45deg)" : "none"};
  }

  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  span:nth-child(3) {
    transform: ${({ $open }) =>
      $open ? "translateY(-6px) rotate(-45deg)" : "none"};
  }

  @media (max-width: ${layoutBreakpoints.large}) {
    display: flex;
    grid-column: 1;
    justify-self: start;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  @media (max-width: ${layoutBreakpoints.large}) {
    grid-column: 2;
    justify-self: center;
    margin: 0;
  }
`;

export const LogoImage = styled.img`
  height: 80px;
  width: auto;
  object-fit: contain;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: none;
  }
`;

export const LogoIconImage = styled.img`
  display: none;
  width: 60px;
  height: 60px;
  object-fit: contain;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: block;
  }
`;

export const MobileSpacer = styled.span`
  display: none;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: block;
    width: 36px;
    height: 36px;
    grid-column: 3;
  }
`;

export const SubnavWrap = styled.div`
  border-top: 1px solid rgba(122, 207, 166, 0.35);
  border-bottom: 1px solid rgba(122, 207, 166, 0.45);
  background: rgba(255, 255, 255, 0.65);

  @media (max-width: ${layoutBreakpoints.large}) {
    display: none;
  }
`;

export const SubnavContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 0 1.25rem;
`;

export const Subnav = styled.nav`
  overflow-x: auto;
`;

export const SubnavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 44px;
`;

export const SubnavLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0;
  color: var(--color-muted);
  white-space: nowrap;
  background-image: linear-gradient(
    to right,
    var(--color-primary-dark),
    var(--color-primary-dark)
  );
  background-size: 0 1px;
  background-repeat: no-repeat;
  background-position: 0 calc(100% - 0.1rem);
  transition:
    color 0.2s ease,
    background-size 0.2s ease;

  &:hover {
    color: var(--color-primary-dark);
    background-size: 100% 1px;
  }
`;
