import{x as s}from"./lit-element-CZ4ibZPf.js";import"./my-element-cGlGvymD.js";const p={title:"Components/LwInput",component:"lw-input",tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},size:{control:"select",options:["small","medium","large"]},hint:{control:"text"},hintError:{control:"boolean",name:"hint error"}}},o=e=>s`
  <lw-input
    .value=${e.value??""}
    .label=${e.label??""}
    .placeholder=${e.placeholder??""}
    .disabled=${e.disabled??!1}
    .size=${e.size??"medium"}
    .hint=${e.hint??""}
    .hintError=${e.hintError??!1}
  ></lw-input>
`,r={args:{label:"Email",placeholder:"name@example.com",value:"",size:"medium"},render:o},l={args:{label:"Username",placeholder:"Enter at least 6 characters",hint:"Letters and numbers only."},render:o},a={args:{label:"Password",placeholder:"••••••••",hint:"Password is too short.",hintError:!0},render:o},n={args:{label:"API Key",value:"1234-5678-9012",disabled:!0},render:o},t={render:()=>s`
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
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
    value: '',
    size: 'medium'
  },
  render: Template
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter at least 6 characters',
    hint: 'Letters and numbers only.'
  },
  render: Template
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: '••••••••',
    hint: 'Password is too short.',
    hintError: true
  },
  render: Template
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'API Key',
    value: '1234-5678-9012',
    disabled: true
  },
  render: Template
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...t.parameters?.docs?.source}}};const c=["Default","WithHint","ErrorState","Disabled","Sizes"];export{r as Default,n as Disabled,a as ErrorState,t as Sizes,l as WithHint,c as __namedExportsOrder,p as default};
