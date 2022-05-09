var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var n=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))k.call(e,r)&&n(t,r,e[r]);if(o)for(var r of o(e))T.call(e,r)&&n(t,r,e[r]);return t},c=(t,e)=>p(t,d(e));import{T as a,f as l}from"./TrackSelector.fixtures.559ceb7f.js";import{j as u}from"./jsx-runtime.f0c22839.js";import{p as S}from"./iframe.5f6d2034.js";import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./index.17e183eb.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./PageNavigation.c7f565ee.js";import"./useDebounce.71098d6d.js";import"./usePagination.42389a98.js";import"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";var z={parameters:{storySource:{source:`import TrackSelector from "./TrackSelector";
import fixtures from "./TrackSelector.fixtures.js";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Features/Testimonials/TrackSelector",
  component: TrackSelector,
};

const Template = (args) => {
  const [, updateArgs] = useArgs();
  return (
    <TrackSelector
      {...args}
      onSelect={(selected) => updateArgs({ selected })}
    />
  );
};

export const SomeTracks = Template.bind({});
SomeTracks.args = {
  selected: "erlang",
  tracks: fixtures,
};

export const OneTrack = Template.bind({});
OneTrack.args = {
  selected: "elm",
  tracks: [fixtures[2]],
};
`,locationsMap:{"some-tracks":{startLoc:{col:17,line:10},endLoc:{col:1,line:18},startBody:{col:17,line:10},endBody:{col:1,line:18}},"one-track":{startLoc:{col:17,line:10},endLoc:{col:1,line:18},startBody:{col:17,line:10},endBody:{col:1,line:18}}}}},title:"Features/Testimonials/TrackSelector",component:a};const i=t=>{const[,e]=S();return u(a,c(s({},t),{onSelect:r=>e({selected:r})}))},f=i.bind({});f.args={selected:"erlang",tracks:l};const g=i.bind({});g.args={selected:"elm",tracks:[l[2]]};const C=["SomeTracks","OneTrack"];export{g as OneTrack,f as SomeTracks,C as __namedExportsOrder,z as default};
//# sourceMappingURL=TrackSelector.stories.6d31b9d5.js.map
