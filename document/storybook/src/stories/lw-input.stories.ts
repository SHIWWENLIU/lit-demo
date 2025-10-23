import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import '@shawnlll/lit-demo'

const meta: Meta = {
  title: 'Components/LwInput',
  component: 'lw-input',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    hint: { control: 'text' },
    hintError: { control: 'boolean', name: 'hint error' },
  },
}

export default meta
type Story = StoryObj

const Template: Story['render'] = (args) => html`
  <lw-input
    .value=${args.value ?? ''}
    .label=${args.label ?? ''}
    .placeholder=${args.placeholder ?? ''}
    .disabled=${args.disabled ?? false}
    .size=${args.size ?? 'medium'}
    .hint=${args.hint ?? ''}
    .hintError=${args.hintError ?? false}
  ></lw-input>
`

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
    value: '',
    size: 'medium',
  },
  render: Template,
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter at least 6 characters',
    hint: 'Letters and numbers only.',
  },
  render: Template,
}

export const ErrorState: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    hint: 'Password is too short.',
    hintError: true,
  },
  render: Template,
}

export const Disabled: Story = {
  args: {
    label: 'API Key',
    value: '1234-5678-9012',
    disabled: true,
  },
  render: Template,
}

export const Sizes: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 1rem; width: 320px;"
    >
      <lw-input
        label="Small"
        size="small"
        placeholder="Small input"
      ></lw-input>
      <lw-input
        label="Medium"
        size="medium"
        placeholder="Medium input"
      ></lw-input>
      <lw-input
        label="Large"
        size="large"
        placeholder="Large input"
      ></lw-input>
    </div>
  `,
}
