# @shawnlll/lit-demo

Small collection of Lit-based web components. Additional components are showcased at **https://shiwwenliu.github.io/lit-demo/**.

## Installation

```bash
pnpm add @shawnlll/lit-demo
# or npm install / yarn add
```

## Quick usage

Register every component (side-effect import):

```ts
import '@shawnlll/lit-demo'
```

Then drop the custom element into any HTML:

```html
<lw-button
  type="success"
  text="Save changes"
></lw-button>
```

## LwButton highlights

- `type="primary | success | warning | danger | info"` controls theme colors.
- `size="mini | small | medium | large"` adjusts padding and font size.
- `plain`, `round`, `disabled`, and `loading` toggle visual states.
- Pass text via the `text` attribute, or omit it and use the default slot.
- Emits native `click` events; when `loading` is `true` the button is automatically disabled to prevent accidental submits.

## More components

Usage examples and prop tables are available in Storybook: **https://shiwwenliu.github.io/lit-demo/**.
