import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  background: #f7fff7;
`;

export const Hero = styled.section`
  min-height: 80vh;
  background-image:
    linear-gradient(rgba(0, 28, 18, 0.45), rgba(0, 28, 18, 0.45)),
    url("../../tmp-photos/photo-1.jpeg");
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
  font-size: 0.75rem;
  color: #fff;
  font-weight: 700;
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

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.article`
  position: relative;
  min-height: 44vh;
`;

export const TileImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const TileOverlay = styled(Link)`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 30, 20, 0.15), rgba(0, 30, 20, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: #fff;

  h2,
  p,
  span {
    color: #fff;
  }
`;

export const ContactStrip = styled.section`
  background: #008f5a;
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

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
