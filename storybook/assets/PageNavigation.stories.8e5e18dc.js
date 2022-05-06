var p=Object.defineProperty,l=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var e=(o,n,t)=>n in o?p(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,a=(o,n)=>{for(var t in n||(n={}))g.call(n,t)&&e(o,t,n[t]);if(r)for(var t of r(n))m.call(n,t)&&e(o,t,n[t]);return o},i=(o,n)=>l(o,u(n));import{P as s}from"./PageNavigation.4df546b4.js";import{j as d}from"./jsx-runtime.f0c22839.js";import{p as f}from"./iframe.24a05b0e.js";import"./Pagination.021362db.js";import"./index.17e183eb.js";import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";var k={parameters:{storySource:{source:`import PageNavigation from "./PageNavigation";
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
//# sourceMappingURL=PageNavigation.stories.8e5e18dc.js.map
