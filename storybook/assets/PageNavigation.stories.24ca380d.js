var p=Object.defineProperty,l=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var e=(o,n,t)=>n in o?p(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,a=(o,n)=>{for(var t in n||(n={}))u.call(n,t)&&e(o,t,n[t]);if(r)for(var t of r(n))g.call(n,t)&&e(o,t,n[t]);return o},i=(o,n)=>l(o,m(n));import{P as s}from"./PageNavigation.c7f565ee.js";import{j as d}from"./jsx-runtime.f0c22839.js";import{p as f}from"./iframe.5f6d2034.js";import"./useDebounce.71098d6d.js";import"./index.17e183eb.js";import"./usePagination.42389a98.js";import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";var E={parameters:{storySource:{source:`import PageNavigation from "./PageNavigation";
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
`,locationsMap:{default:{startLoc:{col:17,line:13},endLoc:{col:1,line:21},startBody:{col:17,line:13},endBody:{col:1,line:21}},short:{startLoc:{col:17,line:13},endLoc:{col:1,line:21},startBody:{col:17,line:13},endBody:{col:1,line:21}}}}},title:"Components/PageNavigation",component:s,argTypes:{count:{control:"number"},current:{control:"number"}}};const c=o=>{const[,n]=f();return d(s,i(a({},o),{onPageChange:t=>n({current:t})}))},P=c.bind({});P.args={count:15,current:8};const b=c.bind({});b.args={count:5,current:1};const M=["Default","Short"];export{P as Default,b as Short,M as __namedExportsOrder,E as default};
//# sourceMappingURL=PageNavigation.stories.24ca380d.js.map
