import{x as n}from"./lit-element-CZ4ibZPf.js";import"./my-element-cGlGvymD.js";const s={title:"Components/LwButton",component:"lw-button",tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info"]},size:{control:"select",options:["mini","small","medium","large"]},plain:{control:"boolean"},round:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},text:{control:"text"}}},r={args:{type:"primary",size:"medium",text:"Primary Button"},render:e=>n`<lw-button .type=${e.type} .size=${e.size} .plain=${e.plain??!1}
    .round=${e.round??!1} .loading=${e.loading??!1} .disabled=${e.disabled??!1}
    .text=${e.text??""}></lw-button>`},t={args:{type:"primary",size:"medium",loading:!0,text:"Loading…"},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'primary',\n    size: 'medium',\n    text: 'Primary Button'\n  },\n  render: args => html`<lw-button .type=${args.type} .size=${args.size} .plain=${args.plain ?? false}\n    .round=${args.round ?? false} .loading=${args.loading ?? false} .disabled=${args.disabled ?? false}\n    .text=${args.text ?? ''}></lw-button>`\n}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'medium',
    loading: true,
    text: 'Loading…'
  },
  render: Primary.render
}`,...t.parameters?.docs?.source}}};const i=["Primary","Loading"];export{t as Loading,r as Primary,i as __namedExportsOrder,s as default};
