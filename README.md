# Lit Demo

Lightweight starter for authoring and publishing [Lit](https://lit.dev/) components.

## Development

- Install dependencies: `pnpm install`
- Start the demo page: `pnpm dev`

The demo page (`index.html`) mounts `<my-element>` so you can iterate locally.

## Build & Publish

The project is wired for npm distribution:

1. Produce JS bundles (ESM + CJS) and type declarations:
   ```bash
   pnpm build
   ```
   Output is written to `dist/`.
2. Inspect the package contents (optional):
   ```bash
   pnpm pack
   ```
3. Publish to npm (requires you to be logged in):
   ```bash
   pnpm publish --access public
   ```

Consumers can then install the package and import from the library entry point:

```ts
import { MyElement, About } from 'lit-demo';
```

## Scripts

- `pnpm lint` / `pnpm lint:fix` – ESLint checks
- `pnpm format` / `pnpm format:check` – Prettier formatting
- `pnpm build` – library bundle + `.d.ts` generation
- `pnpm preview` – preview the built demo (optional)

Husky + lint-staged run `pnpm lint-staged` on each commit to keep staged files tidy.
