var i=Object.defineProperty;var r=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var e=(n,o,t)=>o in n?i(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,m=(n,o)=>{for(var t in o||(o={}))s.call(o,t)&&e(n,t,o[t]);if(r)for(var t of r(o))c.call(o,t)&&e(n,t,o[t]);return n};import{F as a}from"./Footer.9d30a298.js";import{j as p}from"./jsx-runtime.f0c22839.js";import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./index.17e183eb.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./PageNavigation.131e32e4.js";import"./DebouncingInput.fd197a77.js";import"./Pagination.3b2d042e.js";import"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";var B={parameters:{storySource:{source:`import Footer from "./Footer";

export default {
  title: "Features/Testimonials/List/Footer",
  component: Footer,
  argTypes: {
    count: { control: "number" },
    current: { control: "number" },
    onPageChange: { action: "onPageChange" },
  },
};

const Template = (args) => <Footer {...args} />;

export const Dummy = Template.bind({});
Dummy.args = {
  count: 15,
  current: 8,
};
`,locationsMap:{dummy:{startLoc:{col:17,line:13},endLoc:{col:47,line:13},startBody:{col:17,line:13},endBody:{col:47,line:13}}}}},title:"Features/Testimonials/List/Footer",component:a,argTypes:{count:{control:"number"},current:{control:"number"},onPageChange:{action:"onPageChange"}}};const u=n=>p(a,m({},n)),l=u.bind({});l.args={count:15,current:8};const v=["Dummy"];export{l as Dummy,v as __namedExportsOrder,B as default};
//# sourceMappingURL=Footer.stories.54384bf0.js.map
