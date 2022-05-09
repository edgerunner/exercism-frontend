var n=Object.defineProperty;var r=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(o,t,e)=>t in o?n(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,s=(o,t)=>{for(var e in t||(t={}))a.call(t,e)&&m(o,e,t[e]);if(r)for(var e of r(t))p.call(t,e)&&m(o,e,t[e]);return o};import{I as i,f as l}from"./Items.fixtures.8895ef52.js";import{j as c}from"./jsx-runtime.f0c22839.js";import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./index.17e183eb.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./PageNavigation.131e32e4.js";import"./DebouncingInput.fd197a77.js";import"./Pagination.3b2d042e.js";import"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";var M={parameters:{storySource:{source:`import Item from "./Item";
import fixtures from "./Items.fixtures.js";

export default {
  title: "Features/Testimonials/List/Item",
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = fixtures[0];
`,locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:45,line:9},startBody:{col:17,line:9},endBody:{col:45,line:9}}}}},title:"Features/Testimonials/List/Item",component:i};const f=o=>c(i,s({},o)),u=f.bind({});u.args=l[0];const O=["Default"];export{u as Default,O as __namedExportsOrder,M as default};
//# sourceMappingURL=Item.stories.f44fc26f.js.map
