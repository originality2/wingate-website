import styled from "styled-components";

export const ContactFormRoot = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--color-text);

  span {
    color: var(--color-accent);
  }
`;

const InputBase = `
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--color-border);
  border-radius: 1.2rem 1rem 1.25rem 0.95rem;
  font-size: 1rem;
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.88);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  width: 100%;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: #fff;
    box-shadow: 0 0 0 4px rgba(47, 143, 91, 0.14);
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const Input = styled.input`
  ${InputBase}
`;

export const Select = styled.select`
  ${InputBase}
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23757575' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
`;

export const Textarea = styled.textarea`
  ${InputBase}
  resize: vertical;
  min-height: 120px;
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
  align-self: flex-start;
  min-width: 180px;

  &:hover {
    background: var(--color-primary-dark);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ContactFormSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  padding: 3rem 1.5rem;
  background: linear-gradient(180deg, #f4ffe9 0%, #fff7e5 100%);
  border-radius: 2rem 1.6rem 2.2rem 1.5rem;
  border: 2px solid var(--color-primary-light, #7acfa6);
  box-shadow: var(--shadow-soft);

  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--color-primary-dark);
  }

  p {
    color: var(--color-muted);
    max-width: 400px;
  }
`;

export const SuccessIcon = styled.span`
  font-size: 3rem;
`;
