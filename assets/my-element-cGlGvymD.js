import{f as _,u as z,i as g,a as m,x as d,T as O,E as x}from"./lit-element-CZ4ibZPf.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:_},S=(r=P,t,n)=>{const{kind:e,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),e==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(n.name,r),e==="accessor"){const{name:s}=n;return{set(b){const v=t.get.call(this);t.set.call(this,b),this.requestUpdate(s,v,r)},init(b){return b!==void 0&&this.C(s,void 0,r,b),b}}}if(e==="setter"){const{name:s}=n;return function(b){const v=this[s];t.call(this,b),this.requestUpdate(s,v,r)}}throw Error("Unsupported decorator location: "+e)};function a(r){return(t,n)=>typeof n=="object"?S(r,t,n):((e,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(o,i):void 0})(r,t,n)}var T=Object.defineProperty,I=Object.getOwnPropertyDescriptor,$=(r,t,n,e)=>{for(var o=e>1?void 0:e?I(t,n):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(e?s(t,n,o):s(o))||o);return e&&o&&T(t,n,o),o};let f=class extends m{constructor(){super(...arguments),this.caption="Default value"}render(){return d`
      <article class="card">
        <h2>About</h2>
        <p>${this.caption}</p>
      </article>
    `}};f.styles=g`
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
  `;$([a({type:String})],f.prototype,"caption",2);f=$([y("about-card")],f);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E={ATTRIBUTE:1},j=r=>(...t)=>({_$litDirective$:r,values:t});class M{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,e){this._$Ct=t,this._$AM=n,this._$Ci=e}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=j(class extends M{constructor(r){if(super(r),r.type!==E.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((t=>r[t])).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((e=>e!==""))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=r.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return O}});var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor,c=(r,t,n,e)=>{for(var o=e>1?void 0:e?B(t,n):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(e?s(t,n,o):s(o))||o);return e&&o&&A(t,n,o),o};let l=class extends m{constructor(){super(...arguments),this.type="primary",this.size="medium",this.plain=!1,this.round=!1,this.loading=!1,this.disabled=!1,this.nativeType="button",this.text=""}render(){const r={btn:!0,"btn--plain":this.plain,"btn--round":this.round,[`btn--${this.type}`]:!0,[`btn--${this.size}`]:!0},t=this.text?d`${this.text}`:d`<slot></slot>`;return d`
      <button
        class=${C(r)}
        type=${this.nativeType}
        ?disabled=${this.disabled||this.loading}
        aria-busy=${this.loading?"true":"false"}
      >
        ${this.loading?d`<span
              class="spinner"
              aria-hidden="true"
            ></span>`:null}
        <span class="label">${t}</span>
      </button>
    `}};l.styles=g`
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
  `;c([a({type:String,reflect:!0})],l.prototype,"type",2);c([a({type:String,reflect:!0})],l.prototype,"size",2);c([a({type:Boolean,reflect:!0})],l.prototype,"plain",2);c([a({type:Boolean,reflect:!0})],l.prototype,"round",2);c([a({type:Boolean,reflect:!0})],l.prototype,"loading",2);c([a({type:Boolean,reflect:!0})],l.prototype,"disabled",2);c([a({type:String})],l.prototype,"nativeType",2);c([a({type:String})],l.prototype,"text",2);l=c([y("lw-button")],l);var D=Object.defineProperty,U=Object.getOwnPropertyDescriptor,u=(r,t,n,e)=>{for(var o=e>1?void 0:e?U(t,n):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(e?s(t,n,o):s(o))||o);return e&&o&&D(t,n,o),o};let L=0,p=class extends m{constructor(){super(...arguments),this.value="",this.label="",this.placeholder="",this.disabled=!1,this.size="medium",this.hint="",this.hintError=!1,this.autoId=`lw-input-${++L}`}handleInput(r){const t=r.target;t&&(this.value=t.value,this.dispatchEvent(new CustomEvent("value-change",{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){const r=`size-${this.size}`,t=this.inputId||this.autoId,n=!!this.hint,e=n?`${t}-hint`:void 0;return d`
      <div class="wrapper">
        ${this.label?d`<label for=${t}>${this.label}</label>`:null}
        <input
          id=${t}
          class=${r}
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          aria-describedby=${e??x}
          @input=${this.handleInput}
        />
        ${n?d`<span
              id=${e}
              class="hint ${this.hintError?"error":""}"
              role=${this.hintError?"alert":x}
            >
              ${this.hint}
            </span>`:null}
      </div>
    `}};p.styles=g`
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
  `;u([a({type:String,reflect:!0})],p.prototype,"value",2);u([a({type:String})],p.prototype,"label",2);u([a({type:String})],p.prototype,"placeholder",2);u([a({type:Boolean,reflect:!0})],p.prototype,"disabled",2);u([a({type:String,reflect:!0})],p.prototype,"size",2);u([a({type:String})],p.prototype,"hint",2);u([a({type:Boolean})],p.prototype,"hintError",2);u([a({type:String})],p.prototype,"inputId",2);p=u([y("lw-input")],p);const V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e";var F=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,w=(r,t,n,e)=>{for(var o=e>1?void 0:e?Z(t,n):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(e?s(t,n,o):s(o))||o);return e&&o&&F(t,n,o),o};let h=class extends m{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return d`
      <div>
        <a
          href="https://lit.dev"
          target="_blank"
        >
          <img
            src=${V}
            class="logo lit"
            alt="Lit logo"
          />
        </a>
      </div>
      <lw-button
        type="primary"
        size="small"
        .loading=${!0}
        >loading</lw-button
      >
      <lw-button
        type="success"
        size="small"
        text="save"
      ></lw-button>
      <lw-button
        type="info"
        size="medium"
        disabled
        text="disabled"
      ></lw-button>
      <lw-button
        type="warning"
        size="large"
        text="warning"
      ></lw-button>
      <div class="card">
        <about-card caption="This is my demo"></about-card>
      </div>
    `}};h.styles=g`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `;w([a()],h.prototype,"docsHint",2);w([a({type:Number})],h.prototype,"count",2);h=w([y("my-element")],h);
