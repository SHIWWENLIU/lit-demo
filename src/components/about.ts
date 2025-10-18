import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('about-card')
export class About extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 360px;
      margin: 1.5rem auto;
      color: #1f2933;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .card {
      background: linear-gradient(135deg, #ffffff, #f5f7fb);
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 16px;
      box-shadow: 0 14px 26px rgba(15, 23, 42, 0.08);
      padding: 1.75rem;
    }

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: #0f172a;
    }

    p {
      margin: 0;
      line-height: 1.6;
      font-size: 0.95rem;
    }
  `;

  @property({ type: String })
  caption = 'Default value';

  render() {
    return html`
      <article class="card">
        <h2>About</h2>
        <p>${this.caption}</p>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-card': About;
  }
}
