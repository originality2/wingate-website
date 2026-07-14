import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderRoot = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 1200;
  background: rgba(247, 255, 247, 0.95);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(6px);
  transition: box-shadow 0.2s ease;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      box-shadow: var(--shadow-soft);
    `}
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

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 36px 1fr 36px;
    align-items: center;
    gap: 0.75rem;
    min-height: 68px;
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

  @media (max-width: 900px) {
    display: flex;
    grid-column: 1;
    justify-self: start;
    z-index: 30;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;

  @media (max-width: 900px) {
    grid-column: 2;
    justify-self: center;
    margin: 0;
  }
`;

export const LogoIcon = styled.span`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  background: var(--color-primary);
  color: #fff;
  border-radius: 0;
  font-weight: 700;
`;

export const LogoText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.05;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const LogoName = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const LogoTagline = styled.span`
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-muted);
  font-weight: 600;
`;

export const Navigation = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 900px) {
    display: flex;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    width: 100%;
    max-height: calc(100dvh - 68px);
    background: linear-gradient(
      165deg,
      rgb(0, 143, 90) 0%,
      rgb(0, 165, 207) 100%
    );
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
    z-index: 1300;
    padding: 1rem 1.5rem calc(1.1rem + env(safe-area-inset-bottom));
    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-12px)"};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition:
      transform 0.24s ease,
      opacity 0.22s ease;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.75rem;
    width: 100%;
    margin: 0;
  }
`;

export const NavItem = styled.li``;

export const MainNavLink = styled(NavLink)`
  position: relative;
  padding: 0.35rem 0;
  border-radius: 0;
  font-weight: 600;
  font-size: 0.83rem;
  color: var(--color-muted);
  transition: 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.1rem;
    height: 1px;
    background: var(--color-primary-dark);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  &:hover,
  &[aria-current="page"] {
    color: var(--color-primary-dark);
  }

  &:hover::after,
  &[aria-current="page"]::after {
    transform: scaleX(1);
  }

  @media (max-width: 900px) {
    display: inline-block;
    width: auto;
    font-size: 1.1rem;
    padding: 0.15rem 0;
    color: #ffffff;
    border: 0;
    letter-spacing: 0.01em;

    &::after {
      background: #ffffff;
      bottom: -0.12rem;
    }

    &:hover,
    &[aria-current="page"] {
      color: #ffffff;
    }
  }
`;

export const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.55rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;
  flex-shrink: 0;

  &:hover {
    background: var(--color-primary-dark);
  }

  @media (max-width: 900px) {
    margin-top: 0.25rem;
    align-self: flex-start;
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
    background: #ffffff;
    color: var(--color-primary-dark);

    &:hover {
      background: rgba(255, 255, 255, 0.9);
      color: var(--color-primary-dark);
    }
  }
`;

export const MobileSpacer = styled.span`
  display: none;

  @media (max-width: 900px) {
    display: block;
    width: 36px;
    height: 36px;
    grid-column: 3;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  z-index: 1250;
  cursor: pointer;
  animation: headerOverlayFade 0.25s ease;

  @keyframes headerOverlayFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SubnavWrap = styled.div`
  border-top: 1px solid rgba(122, 207, 166, 0.35);
  border-bottom: 1px solid rgba(122, 207, 166, 0.45);
  background: rgba(255, 255, 255, 0.65);

  @media (max-width: 900px) {
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
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: var(--color-muted);
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.1rem;
    height: 1px;
    background: var(--color-primary-dark);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: var(--color-primary-dark);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
