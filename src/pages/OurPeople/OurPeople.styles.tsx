import styled from "styled-components";
import { layoutBreakpoints } from "../../styles/pageLayout.styles";

export const TeamGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: ${layoutBreakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${layoutBreakpoints.mobile}) {
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
  aspect-ratio: 3 / 4;
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

export const TeamBody = styled.div`
  padding: 1rem;
`;
