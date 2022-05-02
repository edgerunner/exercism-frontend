var i=Object.defineProperty;var r=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var e=(n,o,t)=>o in n?i(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,m=(n,o)=>{for(var t in o||(o={}))s.call(o,t)&&e(n,t,o[t]);if(r)for(var t of r(o))c.call(o,t)&&e(n,t,o[t]);return n};import{F as a}from"./Footer.6d54cf1d.js";import{j as p}from"./jsx-runtime.08fc6b8b.js";import"./Avatar.60b603f3.js";import"./Button.6143c391.js";import"./Dropdown.0a2d65bc.js";import"./index.0d5c0cea.js";import"./Input.22c04f06.js";import"./Loading.2b696d90.js";import"./PageNavigation.18185e37.js";import"./Pagination.e86f640f.js";import"./Pill.eb211c84.js";import"./TimeAgo.a75273b8.js";import"./TrackIcon.3cb17c1d.js";var j={parameters:{storySource:{source:`import Footer from "./Footer";

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
`,locationsMap:{dummy:{startLoc:{col:17,line:13},endLoc:{col:47,line:13},startBody:{col:17,line:13},endBody:{col:47,line:13}}}}},title:"Features/Testimonials/List/Footer",component:a,argTypes:{count:{control:"number"},current:{control:"number"},onPageChange:{action:"onPageChange"}}};const u=n=>p(a,m({},n)),l=u.bind({});l.args={count:15,current:8};const B=["Dummy"];export{l as Dummy,B as __namedExportsOrder,j as default};
//# sourceMappingURL=Footer.stories.df51b344.js.map
