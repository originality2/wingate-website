import styled from "styled-components";

export const ProgramCardArticle = styled.article<{ $featured: boolean }>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff 0%, #fffdf8 100%);
  border-radius: 2.2rem 1.6rem 2rem 1.5rem;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(240, 223, 196, 0.95);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-8px) rotate(-1deg);
    box-shadow: var(--shadow-soft);
  }

  ${({ $featured }) =>
    $featured &&
    `
    border-color: rgba(47, 143, 91, 0.55);
  `}
`;

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, var(--color-accent) 0%, #ff9267 100%);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem 1rem 0.8rem 1.2rem;
  z-index: 1;
`;

export const IconWrap = styled.div`
  background: var(--color-card, #e8f5e9);
  padding: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.span`
  line-height: 1;
`;

export const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const Age = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-primary);
  background: rgba(46, 125, 50, 0.08);
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  align-self: flex-start;
`;

export const Title = styled.h3`
  margin-top: 0.2rem;
`;

export const Description = styled.p`
  color: var(--color-muted);
  line-height: 1.7;
  flex: 1;
`;

export const LearnMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-link-accent);
  margin-top: 0.5rem;
  transition: gap 0.2s ease;

  &:hover {
    gap: 0.55rem;
  }
`;
