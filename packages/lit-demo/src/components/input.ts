import { css, html, LitElement, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type LwInputSize = 'small' | 'medium' | 'large'

let inputIdSeed = 0

@customElement('lw-input')
export class LwInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    label {
      font-size: 0.85rem;
      color: #475569;
      font-weight: 600;
    }

    input {
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(15, 23, 42, 0.2);
      padding: 0.55em 0.8em;
      font-size: 0.95rem;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
      color: #0f172a;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(15, 23, 42, 0.05);
    }

    input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
    }

    input:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      background-color: #f8fafc;
    }

    input.size-small {
      padding: 0.4em 0.65em;
      font-size: 0.85rem;
    }

    input.size-large {
      padding: 0.75em 1em;
      font-size: 1.05rem;
    }

    .hint {
      font-size: 0.8rem;
      color: #64748b;
    }

    .hint.error {
      color: #dc2626;
    }
  `

  @property({ type: String, reflect: true })
  value = ''

  @property({ type: String })
  label = ''

  @property({ type: String })
  placeholder = ''

  @property({ type: Boolean, reflect: true })
  disabled = false

  @property({ type: String, reflect: true })
  size: LwInputSize = 'medium'

  @property({ type: String })
  hint = ''

  @property({ type: Boolean })
  hintError = false

  /**
   * Optional id for the internal input element. If not provided, a stable auto id is used.
   */
  @property({ type: String })
  inputId?: string

  private readonly autoId = `lw-input-${++inputIdSeed}`

  private handleInput(event: Event) {
    const target = event.target as HTMLInputElement | null
    if (!target) return

    this.value = target.value
    this.dispatchEvent(
      new CustomEvent('value-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  protected render() {
    const sizeClass = `size-${this.size}`
    const inputId = this.inputId || this.autoId
    const hasHint = Boolean(this.hint)
    const hintId = hasHint ? `${inputId}-hint` : undefined

    return html`
      <div class="wrapper">
        ${this.label ? html`<label for=${inputId}>${this.label}</label>` : null}
        <input
          id=${inputId}
          class=${sizeClass}
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          aria-describedby=${hintId ?? nothing}
          @input=${this.handleInput}
        />
        ${hasHint
          ? html`<span
              id=${hintId}
              class="hint ${this.hintError ? 'error' : ''}"
              role=${this.hintError ? 'alert' : nothing}
            >
              ${this.hint}
            </span>`
          : null}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lw-input': LwInput
  }
}
