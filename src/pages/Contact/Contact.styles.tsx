import styled from "styled-components";

import { SoftCard, layoutBreakpoints } from "../../styles/pageLayout.styles";

export const TwoColGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${layoutBreakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const MessageCard = styled(SoftCard)`
  max-width: 760px;
`;

export const SimpleForm = styled.form`
  display: grid;
  gap: 0.85rem;
`;

export const FieldLabel = styled.label`
  display: grid;
  gap: 0.35rem;
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
  transition: 0.2s ease;
  border: 0;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;

  &:hover {
    background: var(--color-primary-dark);
  }
`;
