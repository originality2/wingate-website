# Component File Structure Rule

All React components must follow a colocated folder structure.

## Required structure

For every component `*.tsx` file, keep the component, styles, export, and tests together in the same component folder:

```text
src/<feature>/<ComponentFolder>/
  <ComponentName>.tsx
  <ComponentName>.styles.tsx
  index.ts
  __tests__/
    <ComponentName>.test.tsx
```

## Requirements

1. Each component must be in its own folder.
2. The component implementation file must be named `<ComponentName>.tsx`.
3. The style file must be named `<ComponentName>.styles.tsx`.
4. Each component folder must include an `index.ts` file.
5. `index.ts` must export the component as the default export.
6. Each component folder must include a `__tests__` folder.
7. Component tests must be colocated in `__tests__` and named `<ComponentName>.test.tsx`.

## Example

```text
src/components/Contact/
  ContactForm.tsx
  ContactForm.styles.tsx
  index.ts
  __tests__/
    ContactForm.test.tsx
```

## `index.ts` template

```ts
export { default } from "./<ComponentName>";
```
