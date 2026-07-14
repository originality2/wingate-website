import { Link } from "react-router-dom";
import styled from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const Main = styled.main`
  background: #f5f1ed;
`;

export const Hero = styled.section`
  min-height: 80vh;
  background-image:
    linear-gradient(rgba(51, 42, 30, 0.45), rgba(51, 42, 30, 0.45)),
    url("/src/img/child_with_bucket.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`;

export const HeroOverlay = styled.div`
  padding: clamp(1.2rem, 4vw, 3.5rem);
  max-width: 780px;
  color: #fff;
`;

export const Eyebrow = styled.p`
  display: inline-block;
  margin-bottom: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
`;

export const HeroTitle = styled.h1`
  color: #fff;
`;

export const HeroSubtitle = styled.p`
  color: #fff;
`;

export const LinksGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${layoutBreakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  display: grid;
  height: 44vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:nth-child(3n) {
    grid-column: 1 / -1;
  }

  &:last-child {
    grid-column: 1 / -1;
  }
`;

export const TileImage = styled.img`
  grid-area: 1 / 1;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: 1;
  transition: transform 0.35s ease;

  ${Tile}:hover & {
    transform: scale(1.06);
  }
`;

export const TileOverlay = styled(Link)`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(51, 42, 30, 0.15), rgba(51, 42, 30, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: #fff;
  z-index: 2;
  cursor: pointer;
  transition: background 0.35s ease;

  ${Tile}:hover & {
    background: linear-gradient(rgba(51, 42, 30, 0.22), rgba(51, 42, 30, 0.82));
  }

  h2,
  p,
  span {
    color: #fff;
    cursor: inherit;
  }
`;

export const ContactStrip = styled.section`
  background: var(--color-muted);
  color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 1.2rem 1.5rem;

  h2,
  p,
  a {
    color: #fff;
  }

  a {
    display: block;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
