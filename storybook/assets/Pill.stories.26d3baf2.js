var a=Object.defineProperty;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var o=(l,e,n)=>e in l?a(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n,t=(l,e)=>{for(var n in e||(e={}))c.call(e,n)&&o(l,n,e[n]);if(i)for(var n of i(e))d.call(e,n)&&o(l,n,e[n]);return l};import{P as r}from"./Pill.8b72d296.js";import{j as v}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var P={parameters:{storySource:{source:`import Pill from "./Pill";

export default {
  title: "Components/Pill",
  component: Pill,
};

const Template = (args) => <Pill {...args} />;

export const MeaningOfLifeUniverseAndEverything = Template.bind({});
MeaningOfLifeUniverseAndEverything.args = {
  value: 42,
};

export const BeverlyHills = Template.bind({});
BeverlyHills.args = {
  value: 90210,
};
`,locationsMap:{"meaning-of-life-universe-and-everything":{startLoc:{col:17,line:8},endLoc:{col:45,line:8},startBody:{col:17,line:8},endBody:{col:45,line:8}},"beverly-hills":{startLoc:{col:17,line:8},endLoc:{col:45,line:8},startBody:{col:17,line:8},endBody:{col:45,line:8}}}}},title:"Components/Pill",component:r};const s=l=>v(r,t({},l)),p=s.bind({});p.args={value:42};const m=s.bind({});m.args={value:90210};const B=["MeaningOfLifeUniverseAndEverything","BeverlyHills"];export{m as BeverlyHills,p as MeaningOfLifeUniverseAndEverything,B as __namedExportsOrder,P as default};
//# sourceMappingURL=Pill.stories.26d3baf2.js.map
