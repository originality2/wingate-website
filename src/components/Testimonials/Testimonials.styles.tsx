import styled from "styled-components";

export const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(123, 200, 255, 0.12) 100%
  );
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 1.25rem;
`;

export const HeaderBlock = styled.div`
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.7rem, 2.8vw, 2.3rem);
  margin-bottom: 0.6rem;
`;

export const SectionSubtitle = styled.p`
  max-width: 62ch;
  margin-left: auto;
  margin-right: auto;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const TestimonialCardRoot = styled.blockquote`
  background: #fff;
  border-radius: 2.2rem 1.7rem 2.25rem 1.55rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  border: 1px solid rgba(240, 223, 196, 0.95);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 0.4rem;
    border-radius: 0 0 999px 999px;
    background: linear-gradient(
      90deg,
      var(--color-border),
      var(--color-accent)
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -0.7rem;
    left: 2rem;
    width: 1.4rem;
    height: 1.4rem;
    background: #fff;
    border-right: 1px solid rgba(240, 223, 196, 0.95);
    border-bottom: 1px solid rgba(240, 223, 196, 0.95);
    transform: rotate(45deg);
  }

  &:hover {
    transform: translateY(-6px) rotate(1deg);
    box-shadow: var(--shadow-soft);
  }
`;

export const QuoteIcon = styled.svg`
  flex-shrink: 0;
`;

export const QuoteText = styled.p`
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.75;
  flex: 1;
  font-style: italic;
`;

export const Author = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 1rem 1.2rem 1rem 1.3rem;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

export const AuthorMeta = styled.div``;

export const AuthorName = styled.cite`
  display: block;
  font-weight: 700;
  font-style: normal;
  color: var(--color-text);
  font-size: 0.9rem;
`;

export const AuthorTitle = styled.span`
  display: block;
  font-size: 0.8rem;
  color: var(--color-muted);
`;
