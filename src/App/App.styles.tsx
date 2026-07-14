import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --color-bg: #d4c4b0;
    --color-surface: #f5f1ed;
    --color-soft: #e8dfd5;
    --color-primary: #6b8e23;
    --color-primary-dark: #556b2f;
    --color-primary-light: #9cb86a;
    --color-accent: #8b7355;
    --color-accent-dark: #70553b;
    --color-text: #1e1f16;
    --color-muted: #a39975;
    --color-border: #a0826d;
    --radius-lg: 0;
    --radius-md: 0;
    --shadow-sm: 0 12px 24px rgba(30, 31, 22, 0.1);
    --shadow-soft: 0 12px 30px rgba(0, 114, 69, 0.1);
    --font-heading: 'Fraunces', serif;
    --font-body: 'DM Sans', sans-serif;
    --color-heading: var(--color-text);
    --heading-line-height: 1.2;
    --heading-h1-size: clamp(2rem, 4vw, 3rem);
    --heading-h2-size: clamp(1.7rem, 2.8vw, 2.3rem);
    --heading-h3-size: 1.3rem;
    --color-text-body: var(--color-muted);
    --text-body-margin-bottom: 0.85rem;
    --color-link: inherit;
    --link-text-decoration: none;
    --color-link-hover: inherit;
    --link-hover-text-decoration: none;
    --list-margin: 0;
    --list-padding: 0;
    --list-style: none;
    --content-list-style: disc;
    --content-list-padding-left: 1rem;
    --color-content-list: var(--color-muted);
    --color-link-accent: var(--color-primary-dark);
    --link-accent-font-weight: 600;
  }

  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-body);
    line-height: 1.6;
  }

  body[data-menu-open='true'],
  body.header-menu-open {
    overflow: hidden;
  }

  h1,
  h2,
  h3 {
    margin: 0 0 0.75rem;
    color: var(--color-heading);
    font-family: var(--font-heading);
    line-height: var(--heading-line-height);
  }

  h1 {
    font-size: var(--heading-h1-size);
  }

  h2 {
    font-size: var(--heading-h2-size);
  }

  h3 {
    font-size: var(--heading-h3-size);
  }

  p {
    margin: 0 0 var(--text-body-margin-bottom);
    color: var(--color-text-body);
  }

  ul {
    margin: var(--list-margin);
    padding: var(--list-padding);
    list-style: var(--list-style);
  }

  a {
    color: var(--color-link);
    text-decoration: var(--link-text-decoration);
  }

  a:hover {
    color: var(--color-link-hover);
    text-decoration: var(--link-hover-text-decoration);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  [data-reveal='true'] {
    animation: reveal-in 0.55s ease both;
  }

  @keyframes reveal-in {
    from {
      opacity: 0;
      transform: translateY(22px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [data-reveal='true'] {
      animation: none;
    }
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const NotFoundMain = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export const NotFoundInner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding: 1.25rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const NotFoundEmoji = styled.span``;

export const NotFoundTitle = styled.h1`
  color: var(--color-text);
`;

export const NotFoundText = styled.p`
  color: var(--color-muted);
  max-width: 400px;
`;

export const PrimaryLinkButton = styled.a`
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
