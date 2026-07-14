import styled from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const GalleryRoot = styled.div``;

export const Grid = styled.div<{ $compact: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: ${({ $compact }) => ($compact ? "200px" : "220px")};
  gap: 0.75rem;

  @media (max-width: ${layoutBreakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 180px;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }
`;

export const Item = styled.figure<{ $wide: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 1.9rem 1.4rem 2rem 1.3rem;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  margin: 0;
  grid-column: ${({ $wide }) => ($wide ? "span 2" : "span 1")};

  &:hover img {
    transform: scale(1.05);
  }

  &:hover figcaption {
    transform: translateY(0);
  }

  @media (max-width: ${layoutBreakpoints.tablet}) {
    grid-column: span 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
  color: #fff;
  padding: 1.5rem 0.75rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  transform: translateY(100%);
  transition: transform 0.3s ease;
`;
