var c=Object.defineProperty;var a=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var r=(t,n,o)=>n in t?c(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,l=(t,n)=>{for(var o in n||(n={}))i.call(n,o)&&r(t,o,n[o]);if(a)for(var o of a(n))d.call(n,o)&&r(t,o,n[o]);return t};import{A as s}from"./Avatar.60b603f3.js";import{j as p}from"./jsx-runtime.08fc6b8b.js";import"./index.0d5c0cea.js";var A={parameters:{storySource:{source:`import Avatar from "./Avatar";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  src: "https://avatars0.githubusercontent.com/u/1234?s=460&v=4",
  handle: "johndoe",
};

export const HandleOnly = Template.bind({});
HandleOnly.args = {
  handle: "johndoe",
};

export const NoData = Template.bind({});
NoData.args = {};
`,locationsMap:{"with-image":{startLoc:{col:17,line:12},endLoc:{col:47,line:12},startBody:{col:17,line:12},endBody:{col:47,line:12}},"handle-only":{startLoc:{col:17,line:12},endLoc:{col:47,line:12},startBody:{col:17,line:12},endBody:{col:47,line:12}},"no-data":{startLoc:{col:17,line:12},endLoc:{col:47,line:12},startBody:{col:17,line:12},endBody:{col:47,line:12}}}}},title:"Components/Avatar",component:s};const e=t=>p(s,l({},t)),m=e.bind({});m.args={src:"https://avatars0.githubusercontent.com/u/1234?s=460&v=4",handle:"johndoe"};const h=e.bind({});h.args={handle:"johndoe"};const g=e.bind({});g.args={};const f=["WithImage","HandleOnly","NoData"];export{h as HandleOnly,g as NoData,m as WithImage,f as __namedExportsOrder,A as default};
//# sourceMappingURL=Avatar.stories.fe179890.js.map
