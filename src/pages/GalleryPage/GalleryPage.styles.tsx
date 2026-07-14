import styled from "styled-components";

export const GalleryGrid = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
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
