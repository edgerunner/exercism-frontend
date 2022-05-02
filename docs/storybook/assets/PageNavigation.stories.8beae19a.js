var p=Object.defineProperty,l=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var e=(o,n,t)=>n in o?p(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,a=(o,n)=>{for(var t in n||(n={}))g.call(n,t)&&e(o,t,n[t]);if(r)for(var t of r(n))m.call(n,t)&&e(o,t,n[t]);return o},i=(o,n)=>l(o,u(n));import{P as s}from"./PageNavigation.18185e37.js";import{j as d}from"./jsx-runtime.08fc6b8b.js";import{p as f}from"./iframe.d5457aa1.js";import"./Pagination.e86f640f.js";import"./index.0d5c0cea.js";import"./Avatar.60b603f3.js";import"./Button.6143c391.js";import"./Dropdown.0a2d65bc.js";import"./Input.22c04f06.js";import"./Loading.2b696d90.js";import"./Pill.eb211c84.js";import"./TimeAgo.a75273b8.js";import"./TrackIcon.3cb17c1d.js";var k={parameters:{storySource:{source:`import PageNavigation from "./PageNavigation";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/PageNavigation",
  component: PageNavigation,
  argTypes: {
    count: { control: "number" },
    current: { control: "number" },
  },
};

const Template = (args) => {
  const [, updateArgs] = useArgs();
  return (
    <PageNavigation
      {...args}
      onPageChange={(current) => updateArgs({ current })}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  count: 15,
  current: 8,
};

export const Short = Template.bind({});
Short.args = {
  count: 5,
  current: 1,
};
`,locationsMap:{default:{startLoc:{col:17,line:13},endLoc:{col:1,line:21},startBody:{col:17,line:13},endBody:{col:1,line:21}},short:{startLoc:{col:17,line:13},endLoc:{col:1,line:21},startBody:{col:17,line:13},endBody:{col:1,line:21}}}}},title:"Components/PageNavigation",component:s,argTypes:{count:{control:"number"},current:{control:"number"}}};const c=o=>{const[,n]=f();return d(s,i(a({},o),{onPageChange:t=>n({current:t})}))},P=c.bind({});P.args={count:15,current:8};const b=c.bind({});b.args={count:5,current:1};const E=["Default","Short"];export{P as Default,b as Short,E as __namedExportsOrder,k as default};
//# sourceMappingURL=PageNavigation.stories.8beae19a.js.map
