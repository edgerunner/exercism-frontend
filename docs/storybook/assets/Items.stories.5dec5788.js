var r=Object.defineProperty;var n=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(o,t,e)=>t in o?r(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,l=(o,t)=>{for(var e in t||(t={}))p.call(t,e)&&i(o,e,t[e]);if(n)for(var e of n(t))c.call(t,e)&&i(o,e,t[e]);return o};import{I as a}from"./Items.b062ba37.js";import{f as m}from"./Items.fixtures.f842de88.js";import{j as d}from"./jsx-runtime.08fc6b8b.js";import"./Avatar.60b603f3.js";import"./Button.6143c391.js";import"./Dropdown.0a2d65bc.js";import"./index.0d5c0cea.js";import"./Input.22c04f06.js";import"./Loading.2b696d90.js";import"./PageNavigation.18185e37.js";import"./Pagination.e86f640f.js";import"./Pill.eb211c84.js";import"./TimeAgo.a75273b8.js";import"./TrackIcon.3cb17c1d.js";var O={parameters:{storySource:{source:`import Items from "./Items";
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
`,locationsMap:{"full-page":{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}},empty:{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}},"few-items":{startLoc:{col:17,line:9},endLoc:{col:46,line:9},startBody:{col:17,line:9},endBody:{col:46,line:9}}}}},title:"Features/Testimonials/List/Items",component:a};const s=o=>d(a,l({},o)),f=s.bind({});f.args={testimonials:m,loading:!1};const g=s.bind({});g.args={testimonials:[],loading:!1};const u=s.bind({});u.args={testimonials:m.slice(0,3),loading:!1};const S=["FullPage","Empty","FewItems"];export{g as Empty,u as FewItems,f as FullPage,S as __namedExportsOrder,O as default};
//# sourceMappingURL=Items.stories.5dec5788.js.map
