import styled from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const FooterRoot = styled.footer`
  background: var(--color-primary-dark);
  color: #f5f7f5;
  padding-top: 2rem;
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 1.25rem 1.25rem 1.5rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: ${layoutBreakpoints.large}) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

export const Brand = styled.div`
  @media (max-width: ${layoutBreakpoints.large}) {
    grid-column: 1 / -1;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 0.7rem;
`;

export const LogoImage = styled.img`
  display: block;
  height: 96px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

export const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.8);
  max-width: 38ch;
`;

export const Heading = styled.h3`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.55rem;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const NavItemLink = styled.a`
  color: rgba(255, 255, 255, 0.85);

  &:hover {
    text-decoration: underline;
  }
`;

export const Address = styled.address`
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

export const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.9);

  &:hover {
    text-decoration: underline;
  }
`;

export const Hours = styled.p`
  color: rgba(255, 255, 255, 0.85);
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.9rem 0;
`;

export const BottomInner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.82);
  flex-wrap: wrap;

  @media (max-width: ${layoutBreakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const BottomLink = styled.a`
  color: rgba(255, 255, 255, 0.9);

  &:hover {
    text-decoration: underline;
  }
`;
