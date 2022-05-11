var c=Object.defineProperty;var l=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var r=(t,n,o)=>n in t?c(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,i=(t,n)=>{for(var o in n||(n={}))d.call(n,o)&&r(t,o,n[o]);if(l)for(var o of l(n))s.call(n,o)&&r(t,o,n[o]);return t};import{B as a}from"./Button.fcc31c49.js";import{j as p}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var y={parameters:{storySource:{source:`import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    arrow: { control: "inline-radio", options: [null, "left", "right"] },
  },
};

const Template = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  children: "Enabled button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled button",
  onClick: null,
};

export const Arrow = Template.bind({});
Arrow.args = {
  children: "Arrow",
  arrow: "left",
};
`,locationsMap:{enabled:{startLoc:{col:17,line:12},endLoc:{col:47,line:12},startBody:{col:17,line:12},endBody:{col:47,line:12}},disabled:{startLoc:{col:17,line:12},endLoc:{col:47,line:12},startBody:{col:17,line:12},endBody:{col:47,line:12}},arrow:{startLoc:{col:17,line:12},endLoc:{col:47,line:12},startBody:{col:17,line:12},endBody:{col:47,line:12}}}}},title:"Components/Button",component:a,argTypes:{onClick:{action:"clicked"},arrow:{control:"inline-radio",options:[null,"left","right"]}}};const e=t=>p(a,i({},t)),b=e.bind({});b.args={children:"Enabled button"};const u=e.bind({});u.args={children:"Disabled button",onClick:null};const m=e.bind({});m.args={children:"Arrow",arrow:"left"};const h=["Enabled","Disabled","Arrow"];export{m as Arrow,u as Disabled,b as Enabled,h as __namedExportsOrder,y as default};
//# sourceMappingURL=Button.stories.83ac2e3d.js.map
