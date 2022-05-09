var r=Object.defineProperty;var n=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(o,t,e)=>t in o?r(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,l=(o,t)=>{for(var e in t||(t={}))p.call(t,e)&&i(o,e,t[e]);if(n)for(var e of n(t))c.call(t,e)&&i(o,e,t[e]);return o};import{I as a}from"./Items.2be204e3.js";import{f as m}from"./Items.fixtures.8895ef52.js";import{j as d}from"./jsx-runtime.f0c22839.js";import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./index.17e183eb.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./PageNavigation.131e32e4.js";import"./DebouncingInput.fd197a77.js";import"./Pagination.3b2d042e.js";import"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";var S={parameters:{storySource:{source:`import Items from "./Items";
import fixtures from "./Items.fixtures.js";

export default {
  title: "Features/Testimonials/List/Items",
  component: Items,
};

const Template = (args) => <Items {...args} />;

export const FullPage = Template.bind({});
FullPage.args = {
  testimonials: fixtures,
  loading: false,
};

export const Empty = Template.bind({});
Empty.args = {
  testimonials: [],
  loading: false,
};

export const FewItems = Template.bind({});
FewItems.args = {
  testimonials: fixtures.slice(0, 3),
  loading: false,
};
`,locationsMap:{"full-page":{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}},empty:{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}},"few-items":{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}}}}},title:"Features/Testimonials/List/Items",component:a};const s=o=>d(a,l({},o)),f=s.bind({});f.args={testimonials:m,loading:!1};const g=s.bind({});g.args={testimonials:[],loading:!1};const u=s.bind({});u.args={testimonials:m.slice(0,3),loading:!1};const h=["FullPage","Empty","FewItems"];export{g as Empty,u as FewItems,f as FullPage,h as __namedExportsOrder,S as default};
//# sourceMappingURL=Items.stories.9c2e7809.js.map