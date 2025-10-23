import{f as P,u as O,i as y,a as v,x as p,T as S,E as z}from"./lit-element-CZ4ibZPf.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=e=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:P},E=(e=T,t,n)=>{const{kind:r,metadata:o}=n;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:i}=n;return{set(b){const x=t.get.call(this);t.set.call(this,b),this.requestUpdate(i,x,e)},init(b){return b!==void 0&&this.C(i,void 0,e,b),b}}}if(r==="setter"){const{name:i}=n;return function(b){const x=this[i];t.call(this,b),this.requestUpdate(i,x,e)}}throw Error("Unsupported decorator location: "+r)};function a(e){return(t,n)=>typeof n=="object"?E(e,t,n):((r,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,r),i?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,n)}var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor,_=(e,t,n,r)=>{for(var o=r>1?void 0:r?j(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(o=(r?i(t,n,o):i(o))||o);return r&&o&&I(t,n,o),o};let g=class extends v{constructor(){super(...arguments),this.caption="Default value"}render(){return p`
      <article class="card">
        <h2>About</h2>
        <p>${this.caption}</p>
      </article>
    `}};g.styles=y`
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
  `;_([a({type:String})],g.prototype,"caption",2);g=_([w("about-card")],g);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B={ATTRIBUTE:1},C=e=>(...t)=>({_$litDirective$:e,values:t});class L{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=C(class extends L{constructor(e){if(super(e),e.type!==B.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return S}});var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,c=(e,t,n,r)=>{for(var o=r>1?void 0:r?D(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(o=(r?i(t,n,o):i(o))||o);return r&&o&&A(t,n,o),o};let l=class extends v{constructor(){super(...arguments),this.type="primary",this.size="medium",this.plain=!1,this.round=!1,this.loading=!1,this.disabled=!1,this.nativeType="button",this.text=""}render(){const e={btn:!0,"btn--plain":this.plain,"btn--round":this.round,[`btn--${this.type}`]:!0,[`btn--${this.size}`]:!0},t=this.text?p`${this.text}`:p`<slot></slot>`;return p`
      <button
        class=${M(e)}
        type=${this.nativeType}
        ?disabled=${this.disabled||this.loading}
        aria-busy=${this.loading?"true":"false"}
      >
        ${this.loading?p`<span
              class="spinner"
              aria-hidden="true"
            ></span>`:null}
        <span class="label">${t}</span>
      </button>
    `}};l.styles=y`
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
  `;c([a({type:String,reflect:!0})],l.prototype,"type",2);c([a({type:String,reflect:!0})],l.prototype,"size",2);c([a({type:Boolean,reflect:!0})],l.prototype,"plain",2);c([a({type:Boolean,reflect:!0})],l.prototype,"round",2);c([a({type:Boolean,reflect:!0})],l.prototype,"loading",2);c([a({type:Boolean,reflect:!0})],l.prototype,"disabled",2);c([a({type:String})],l.prototype,"nativeType",2);c([a({type:String})],l.prototype,"text",2);l=c([w("lw-button")],l);var U=Object.defineProperty,V=Object.getOwnPropertyDescriptor,u=(e,t,n,r)=>{for(var o=r>1?void 0:r?V(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(o=(r?i(t,n,o):i(o))||o);return r&&o&&U(t,n,o),o};let F=0,d=class extends v{constructor(){super(...arguments),this.value="",this.label="",this.placeholder="",this.disabled=!1,this.size="medium",this.hint="",this.hintError=!1,this.autoId=`lw-input-${++F}`}handleInput(e){const t=e.target;t&&(this.value=t.value,this.dispatchEvent(new CustomEvent("value-change",{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){const e=`size-${this.size}`,t=this.inputId||this.autoId,n=!!this.hint,r=n?`${t}-hint`:void 0;return p`
      <div class="wrapper">
        ${this.label?p`<label for=${t}>${this.label}</label>`:null}
        <input
          id=${t}
          class=${e}
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          aria-describedby=${r??z}
          @input=${this.handleInput}
        />
        ${n?p`<span
              id=${r}
              class="hint ${this.hintError?"error":""}"
              role=${this.hintError?"alert":z}
            >
              ${this.hint}
            </span>`:null}
      </div>
    `}};d.styles=y`
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
  `;u([a({type:String,reflect:!0})],d.prototype,"value",2);u([a({type:String})],d.prototype,"label",2);u([a({type:String})],d.prototype,"placeholder",2);u([a({type:Boolean,reflect:!0})],d.prototype,"disabled",2);u([a({type:String,reflect:!0})],d.prototype,"size",2);u([a({type:String})],d.prototype,"hint",2);u([a({type:Boolean})],d.prototype,"hintError",2);u([a({type:String})],d.prototype,"inputId",2);d=u([w("lw-input")],d);const Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e";var k=Object.defineProperty,G=Object.getOwnPropertyDescriptor,$=(e,t,n,r)=>{for(var o=r>1?void 0:r?G(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(o=(r?i(t,n,o):i(o))||o);return r&&o&&k(t,n,o),o};let f=class extends v{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return p`
      <div>
        <a
          href="https://lit.dev"
          target="_blank"
        >
          <img
            src=${Z}
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
    `}};f.styles=y`
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
  `;$([a()],f.prototype,"docsHint",2);$([a({type:Number})],f.prototype,"count",2);f=$([w("my-element")],f);const R={title:"Components/LwButton",component:"lw-button",tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info"]},size:{control:"select",options:["mini","small","medium","large"]},plain:{control:"boolean"},round:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},text:{control:"text"}}},h={args:{type:"primary",size:"medium",text:"Primary Button"},render:e=>p`<lw-button .type=${e.type} .size=${e.size} .plain=${e.plain??!1}
    .round=${e.round??!1} .loading=${e.loading??!1} .disabled=${e.disabled??!1}
    .text=${e.text??""}></lw-button>`},m={args:{type:"primary",size:"medium",loading:!0,text:"Loading…"},render:h.render};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'primary',\n    size: 'medium',\n    text: 'Primary Button'\n  },\n  render: args => html`<lw-button .type=${args.type} .size=${args.size} .plain=${args.plain ?? false}\n    .round=${args.round ?? false} .loading=${args.loading ?? false} .disabled=${args.disabled ?? false}\n    .text=${args.text ?? ''}></lw-button>`\n}",...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'medium',
    loading: true,
    text: 'Loading…'
  },
  render: Primary.render
}`,...m.parameters?.docs?.source}}};const q=["Primary","Loading"];export{m as Loading,h as Primary,q as __namedExportsOrder,R as default};
