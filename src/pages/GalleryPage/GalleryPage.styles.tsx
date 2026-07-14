import styled from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const GalleryGrid = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: ${layoutBreakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryCard = styled.figure`
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  background: var(--color-surface);
`;

export const Image = styled.img`
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;
