var n=Object.defineProperty;var r=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(o,t,e)=>t in o?n(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,s=(o,t)=>{for(var e in t||(t={}))a.call(t,e)&&m(o,e,t[e]);if(r)for(var e of r(t))p.call(t,e)&&m(o,e,t[e]);return o};import{I as i,f as l}from"./Items.fixtures.f842de88.js";import{j as c}from"./jsx-runtime.08fc6b8b.js";import"./Avatar.60b603f3.js";import"./Button.6143c391.js";import"./Dropdown.0a2d65bc.js";import"./index.0d5c0cea.js";import"./Input.22c04f06.js";import"./Loading.2b696d90.js";import"./PageNavigation.18185e37.js";import"./Pagination.e86f640f.js";import"./Pill.eb211c84.js";import"./TimeAgo.a75273b8.js";import"./TrackIcon.3cb17c1d.js";var E={parameters:{storySource:{source:`import Item from "./Item";
import fixtures from "./Items.fixtures.js";

export default {
  title: "Features/Testimonials/List/Item",
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = fixtures[0];
`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:45,line:9},startBody:{col:17,line:9},endBody:{col:45,line:9}}}}},title:"Features/Testimonials/List/Item",component:i};const f=o=>c(i,s({},o)),u=f.bind({});u.args=l[0];const M=["Default"];export{u as Default,M as __namedExportsOrder,E as default};
//# sourceMappingURL=Item.stories.95f80c57.js.map
