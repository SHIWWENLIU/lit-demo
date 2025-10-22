import{f as $,u as _,i as h,a as y,x as p,T as z}from"./lit-element-BJ9lxnZz.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=t=>(e,o)=>{o!==void 0?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$},O=(t=P,e,o)=>{const{kind:r,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(o.name,t),r==="accessor"){const{name:a}=o;return{set(c){const g=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,g,t)},init(c){return c!==void 0&&this.C(a,void 0,t,c),c}}}if(r==="setter"){const{name:a}=o;return function(c){const g=this[a];e.call(this,c),this.requestUpdate(a,g,t)}}throw Error("Unsupported decorator location: "+r)};function l(t){return(e,o)=>typeof o=="object"?O(t,e,o):((r,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(n,s):void 0})(t,e,o)}var T=Object.defineProperty,M=Object.getOwnPropertyDescriptor,v=(t,e,o,r)=>{for(var n=r>1?void 0:r?M(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(r?a(e,o,n):a(n))||n);return r&&n&&T(e,o,n),n};let f=class extends y{constructor(){super(...arguments),this.caption="Default value"}render(){return p`
      <article class="card">
        <h2>About</h2>
        <p>${this.caption}</p>
      </article>
    `}};f.styles=h`
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
  `;v([l({type:String})],f.prototype,"caption",2);f=v([w("about-card")],f);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={ATTRIBUTE:1},S=t=>(...e)=>({_$litDirective$:t,values:e});class j{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=S(class extends j{constructor(t){if(super(t),t.type!==L.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return z}});var B=Object.defineProperty,C=Object.getOwnPropertyDescriptor,d=(t,e,o,r)=>{for(var n=r>1?void 0:r?C(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(r?a(e,o,n):a(n))||n);return r&&n&&B(e,o,n),n};let i=class extends y{constructor(){super(...arguments),this.type="primary",this.size="medium",this.plain=!1,this.round=!1,this.loading=!1,this.disabled=!1,this.nativeType="button",this.text=""}render(){const t={btn:!0,"btn--plain":this.plain,"btn--round":this.round,[`btn--${this.type}`]:!0,[`btn--${this.size}`]:!0},e=this.text?p`${this.text}`:p`<slot></slot>`;return p`
      <button
        class=${A(t)}
        type=${this.nativeType}
        ?disabled=${this.disabled||this.loading}
        aria-busy=${this.loading?"true":"false"}
      >
        ${this.loading?p`<span
              class="spinner"
              aria-hidden="true"
            ></span>`:null}
        <span class="label">${e}</span>
      </button>
    `}};i.styles=h`
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
  `;d([l({type:String,reflect:!0})],i.prototype,"type",2);d([l({type:String,reflect:!0})],i.prototype,"size",2);d([l({type:Boolean,reflect:!0})],i.prototype,"plain",2);d([l({type:Boolean,reflect:!0})],i.prototype,"round",2);d([l({type:Boolean,reflect:!0})],i.prototype,"loading",2);d([l({type:Boolean,reflect:!0})],i.prototype,"disabled",2);d([l({type:String})],i.prototype,"nativeType",2);d([l({type:String})],i.prototype,"text",2);i=d([w("lw-button")],i);const D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e";var E=Object.defineProperty,U=Object.getOwnPropertyDescriptor,x=(t,e,o,r)=>{for(var n=r>1?void 0:r?U(e,o):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(r?a(e,o,n):a(n))||n);return r&&n&&E(e,o,n),n};let b=class extends y{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return p`
      <div>
        <a
          href="https://lit.dev"
          target="_blank"
        >
          <img
            src=${D}
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
    `}};b.styles=h`
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
  `;x([l()],b.prototype,"docsHint",2);x([l({type:Number})],b.prototype,"count",2);b=x([w("my-element")],b);const F={title:"Components/LwButton",component:"lw-button",tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info"]},size:{control:"select",options:["mini","small","medium","large"]},plain:{control:"boolean"},round:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},text:{control:"text"}}},u={args:{type:"primary",size:"medium",text:"Primary Button"},render:t=>p`<lw-button .type=${t.type} .size=${t.size} .plain=${t.plain??!1}
    .round=${t.round??!1} .loading=${t.loading??!1} .disabled=${t.disabled??!1}
    .text=${t.text??""}></lw-button>`},m={args:{type:"primary",size:"medium",loading:!0,text:"Loading…"},render:u.render};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'primary',\n    size: 'medium',\n    text: 'Primary Button'\n  },\n  render: args => html`<lw-button .type=${args.type} .size=${args.size} .plain=${args.plain ?? false}\n    .round=${args.round ?? false} .loading=${args.loading ?? false} .disabled=${args.disabled ?? false}\n    .text=${args.text ?? ''}></lw-button>`\n}",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'medium',
    loading: true,
    text: 'Loading…'
  },
  render: Primary.render
}`,...m.parameters?.docs?.source}}};const k=["Primary","Loading"];export{m as Loading,u as Primary,k as __namedExportsOrder,F as default};
