import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@shawnlll/lit-demo';

const meta: Meta = {
  title: 'Components/LwButton',
  component: 'lw-button',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'medium', 'large'],
    },
    plain: { control: 'boolean' },
    round: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    text: 'Primary Button',
  },
  render: (args) => html`<lw-button .type=${args.type} .size=${args.size} .plain=${args.plain ?? false}
    .round=${args.round ?? false} .loading=${args.loading ?? false} .disabled=${args.disabled ?? false}
    .text=${args.text ?? ''}></lw-button>`,
};

export const Loading: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    loading: true,
    text: 'Loading…',
  },
  render: Primary.render,
};
