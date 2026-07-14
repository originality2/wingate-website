import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const Navigation = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: min(26rem, 84vw);
    max-width: 100%;
    height: 100dvh;
    background: linear-gradient(
      165deg,
      var(--color-accent-dark) 0%,
      var(--color-accent) 100%
    );
    z-index: 1600;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding: calc(5rem + env(safe-area-inset-top)) 1.5rem
      calc(1.1rem + env(safe-area-inset-bottom));
    transform: ${({ $open }) =>
      $open ? "translateX(0)" : "translateX(-104%)"};
    opacity: 1;
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition:
      transform 0.24s ease,
      box-shadow 0.24s ease;
    box-shadow: ${({ $open }) =>
      $open ? "0 20px 40px rgba(0, 0, 0, 0.22)" : "none"};
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    inset: 0;
    width: 100vw;
    max-width: 100vw;
    padding: calc(5rem + env(safe-area-inset-top)) 1.5rem
      calc(1.25rem + env(safe-area-inset-bottom));
    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-100%)"};
    box-shadow: none;
  }
`;

export const NavCloseButton = styled.button`
  display: none;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: inline-flex;
    position: absolute;
    top: calc(env(safe-area-inset-top) + 1rem);
    left: 1rem;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    cursor: pointer;

    span {
      position: absolute;
      display: block;
      width: 20px;
      height: 2px;
      background: #ffffff;
      border-radius: 2px;
    }

    span:nth-child(1) {
      transform: rotate(45deg);
    }

    span:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: ${layoutBreakpoints.large}) {
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
  padding: 0.35rem 0;
  border-radius: 0;
  color: var(--color-muted);
  background-image: linear-gradient(
    to right,
    var(--color-primary-dark),
    var(--color-primary-dark)
  );
  background-size: 0 1px;
  background-repeat: no-repeat;
  background-position: 0 calc(100% - 0.1rem);
  transition: 0.2s ease;

  &:hover,
  &[aria-current="page"] {
    color: var(--color-primary-dark);
    background-size: 100% 1px;
  }

  @media (max-width: ${layoutBreakpoints.large}) {
    display: inline-block;
    width: auto;
    padding: 0.15rem 0;
    color: #ffffff;
    border: 0;
    letter-spacing: 0.01em;
    background-image: linear-gradient(to right, #ffffff, #ffffff);
    background-position: 0 calc(100% - 0.12rem);

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
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;
  flex-shrink: 0;

  &:hover {
    background: var(--color-primary-dark);
  }

  @media (max-width: ${layoutBreakpoints.large}) {
    margin-top: 0.25rem;
    align-self: flex-start;
    padding: 0.7rem 1rem;
    background: #ffffff;
    color: var(--color-primary-dark);

    &:hover {
      background: rgba(255, 255, 255, 0.9);
      color: var(--color-primary-dark);
    }
  }
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  z-index: 1500;
  animation: headerOverlayFade 0.25s ease;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: block;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    display: none;
  }

  @keyframes headerOverlayFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
