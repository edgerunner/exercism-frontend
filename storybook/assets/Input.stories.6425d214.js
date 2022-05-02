var a=Object.defineProperty;var o=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var r=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&r(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&r(e,n,t[n]);return e};import{I as s}from"./Input.39416d34.js";import{j as i}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var I={parameters:{storySource:{source:`import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "radio",
      options: ["text", "number", "password", "search"],
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Text input",
  value: "",
};
`,locationsMap:{text:{startLoc:{col:17,line:14},endLoc:{col:46,line:14},startBody:{col:17,line:14},endBody:{col:46,line:14}}}}},title:"Components/Input",component:s,argTypes:{type:{control:"radio",options:["text","number","password","search"]}}};const m=e=>i(s,p({},e)),u=m.bind({});u.args={type:"text",placeholder:"Text input",value:""};const g=["Text"];export{u as Text,g as __namedExportsOrder,I as default};
//# sourceMappingURL=Input.stories.6425d214.js.map
