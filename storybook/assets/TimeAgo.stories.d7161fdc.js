var a=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(t,o,e)=>o in t?a(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,r=(t,o)=>{for(var e in o||(o={}))i.call(o,e)&&s(t,e,o[e]);if(n)for(var e of n(o))p.call(o,e)&&s(t,e,o[e]);return t};import{T as m}from"./TimeAgo.127284d2.js";import{j as c}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var w={parameters:{storySource:{source:`import TimeAgo from "./TimeAgo";

export default {
  title: "Components/TimeAgo",
  component: TimeAgo,
};

const Template = (props) => <TimeAgo {...props} />;

export const JustNow = Template.bind({});
JustNow.args = {
  date: new Date(),
};
`,locationsMap:{"just-now":{startLoc:{col:17,line:8},endLoc:{col:50,line:8},startBody:{col:17,line:8},endBody:{col:50,line:8}}}}},title:"Components/TimeAgo",component:m};const l=t=>c(m,r({},t)),d=l.bind({});d.args={date:new Date};const f=["JustNow"];export{d as JustNow,f as __namedExportsOrder,w as default};
//# sourceMappingURL=TimeAgo.stories.d7161fdc.js.map
