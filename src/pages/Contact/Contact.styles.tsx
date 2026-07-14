import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
`;

export const HeroSection = styled.section`
  padding: 4rem 0 2rem;
  background: linear-gradient(135deg, #dbffe8 0%, #e6fbff 100%);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 1.25rem;
`;

export const Eyebrow = styled.p`
  display: inline-block;
  margin-bottom: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-primary-dark);
  font-weight: 700;
`;

export const Intro = styled.p`
  max-width: 65ch;
  margin-bottom: 1rem;
`;

export const Section = styled.section<{ $alt?: boolean }>`
  padding: 0;
  scroll-margin-top: 6rem;
  background: ${({ $alt }) => ($alt ? "#dcffe9" : "transparent")};
`;

export const TwoColGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const SoftCard = styled.article`
  background: var(--color-surface);
  border-radius: 0;
  padding: 1.1rem;
  height: 100%;

  ul {
    list-style: disc;
    padding-left: 1rem;
    color: var(--color-muted);
  }
`;

export const MessageCard = styled(SoftCard)`
  max-width: 760px;
`;

export const PrimaryLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.1rem;
  font-weight: 600;
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;

  &:hover {
    background: var(--color-primary-dark);
  }
`;

export const SimpleForm = styled.form`
  display: grid;
  gap: 0.85rem;
`;

export const FieldLabel = styled.label`
  display: grid;
  gap: 0.35rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0;
  padding: 0.55rem 0.7rem;
  background: #fff;
  border: 1px solid var(--color-border);
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 0;
  padding: 0.55rem 0.7rem;
  background: #fff;
  border: 1px solid var(--color-border);
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.1rem;
  font-weight: 600;
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;

  &:hover {
    background: var(--color-primary-dark);
  }
`;
