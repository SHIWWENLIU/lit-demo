# Lit Comp Monorepo

This repository uses **Lerna + pnpm workspaces** to manage two projects:

- `packages/lit-demo`: the publishable Lit component library.
- `document/storybook`: the Storybook site for showcasing components.

## Getting Started

```bash
pnpm install
pnpm bootstrap     # sets up cross-package links
```

### Development scripts

- `pnpm --filter @shawnlll/lit-demo dev` – run the Vite playground for the component library.
- `pnpm storybook` – start the Storybook documentation site.

## Publishing

1. Build the package you want to release: `pnpm --filter @shawnlll/lit-demo build`.
2. Bump its version (`pnpm --filter @shawnlll/lit-demo version patch`).
3. Publish from that package folder or via `pnpm --filter @shawnlll/lit-demo publish --access public`.
