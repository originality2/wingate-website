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
    url("https://d2kvbtvlrloztz.cloudfront.net/img/child_with_bucket.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  background-attachment: fixed;
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

  @media (max-width: ${layoutBreakpoints.large}) {
    cursor: default;
  }

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
  aspect-ratio: auto;
  will-change: transform;
  content-visibility: auto;

  ${Tile}:hover & {
    transform: scale(1.06);
  }
`;

export const TileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(51, 42, 30, 0.15), rgba(51, 42, 30, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: #fff;
  z-index: 2;
  transition: background 0.35s ease;

  ${Tile}:hover & {
    background: linear-gradient(rgba(51, 42, 30, 0.22), rgba(51, 42, 30, 0.82));
  }

  h2,
  p {
    color: #fff;
  }
`;

export const TileDesktopLink = styled(Link)`
  position: absolute;
  inset: 0;
  z-index: 3;
  cursor: pointer;

  @media (max-width: ${layoutBreakpoints.large}) {
    display: none;
  }
`;

export const TileLearnMoreButton = styled(Link)`
  display: none;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-top: 0.6rem;
  padding: 0.55rem 0.95rem;
  border-radius: 45px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #fff;
    color: #332a1e;
  }

  @media (max-width: ${layoutBreakpoints.large}) {
    display: inline-flex;
  }
`;
