import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

type LwButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type LwButtonSize = 'mini' | 'small' | 'medium' | 'large'
type NativeType = 'button' | 'submit' | 'reset'

@customElement('lw-button')
export class LwButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    button.btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.55em 1.4em;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;
      background-color: #2563eb;
      color: #fff;
      box-shadow: 0 8px 18px rgba(37, 99, 235, 0.2);
    }

    button.btn:focus-visible {
      outline: 3px solid rgba(37, 99, 235, 0.35);
      outline-offset: 2px;
    }

    button.btn--plain {
      background-color: transparent;
      border-color: currentColor;
      color: inherit;
      box-shadow: none;
    }

    button.btn:not(.btn--plain) {
      color: #fff;
    }

    button.btn--round {
      border-radius: 999px;
    }

    button.btn--primary {
      background-color: #2563eb;
    }

    button.btn--success {
      background-color: #16a34a;
    }

    button.btn--warning {
      background-color: #f59e0b;
    }

    button.btn--danger {
      background-color: #dc2626;
    }

    button.btn--info {
      background-color: #0ea5e9;
    }

    button.btn--plain.btn--primary {
      color: #2563eb;
    }

    button.btn--plain.btn--success {
      color: #15803d;
    }

    button.btn--plain.btn--warning {
      color: #d97706;
    }

    button.btn--plain.btn--danger {
      color: #b91c1c;
    }

    button.btn--plain.btn--info {
      color: #0284c7;
    }

    button.btn--mini {
      font-size: 0.75rem;
      padding: 0.35em 0.9em;
    }

    button.btn--small {
      font-size: 0.85rem;
      padding: 0.45em 1em;
    }

    button.btn--large {
      font-size: 1rem;
      padding: 0.7em 1.8em;
    }

    button.btn:disabled {
      cursor: not-allowed;
      opacity: 0.65;
      box-shadow: none;
    }

    .spinner {
      width: 0.9em;
      height: 0.9em;
      border-radius: 999px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-top-color: rgba(255, 255, 255, 1);
      animation: spin 0.6s linear infinite;
    }

    .label {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `

  @property({ type: String, reflect: true })
  type: LwButtonType = 'primary'

  @property({ type: String, reflect: true })
  size: LwButtonSize = 'medium'

  @property({ type: Boolean, reflect: true })
  plain = false

  @property({ type: Boolean, reflect: true })
  round = false

  @property({ type: Boolean, reflect: true })
  loading = false

  @property({ type: Boolean, reflect: true })
  disabled = false

  @property({ type: String })
  nativeType: NativeType = 'button'

  @property({ type: String })
  text = ''

  protected render() {
    const classes = {
      btn: true,
      'btn--plain': this.plain,
      'btn--round': this.round,
      [`btn--${this.type}`]: true,
      [`btn--${this.size}`]: true,
    }

    const labelContent = this.text ? html`${this.text}` : html`<slot></slot>`

    return html`
      <button
        class=${classMap(classes)}
        type=${this.nativeType}
        ?disabled=${this.disabled || this.loading}
        aria-busy=${this.loading ? 'true' : 'false'}
      >
        ${this.loading
          ? html`<span
              class="spinner"
              aria-hidden="true"
            ></span>`
          : null}
        <span class="label">${labelContent}</span>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lw-button': LwButton
  }
}
