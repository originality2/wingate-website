import styled from "styled-components";

export const TeamGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamCard = styled.article`
  border-radius: 0;
  overflow: hidden;
  background: var(--color-surface);
  height: 100%;
`;

export const TeamImage = styled.img`
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

export const TeamBody = styled.div`
  padding: 1rem;
`;
