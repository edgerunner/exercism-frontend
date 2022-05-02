var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var n=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))k.call(e,r)&&n(t,r,e[r]);if(o)for(var r of o(e))T.call(e,r)&&n(t,r,e[r]);return t},c=(t,e)=>p(t,d(e));import{T as a,f as l}from"./TrackSelector.fixtures.6fbc3d42.js";import{j as u}from"./jsx-runtime.08fc6b8b.js";import{p as S}from"./iframe.d5457aa1.js";import"./Avatar.60b603f3.js";import"./Button.6143c391.js";import"./Dropdown.0a2d65bc.js";import"./index.0d5c0cea.js";import"./Input.22c04f06.js";import"./Loading.2b696d90.js";import"./PageNavigation.18185e37.js";import"./Pagination.e86f640f.js";import"./Pill.eb211c84.js";import"./TimeAgo.a75273b8.js";import"./TrackIcon.3cb17c1d.js";var w={parameters:{storySource:{source:`import TrackSelector from "./TrackSelector";
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
`,locationsMap:{"some-tracks":{startLoc:{col:17,line:10},endLoc:{col:1,line:18},startBody:{col:17,line:10},endBody:{col:1,line:18}},"one-track":{startLoc:{col:17,line:10},endLoc:{col:1,line:18},startBody:{col:17,line:10},endBody:{col:1,line:18}}}}},title:"Features/Testimonials/TrackSelector",component:a};const i=t=>{const[,e]=S();return u(a,c(s({},t),{onSelect:r=>e({selected:r})}))},f=i.bind({});f.args={selected:"erlang",tracks:l};const g=i.bind({});g.args={selected:"elm",tracks:[l[2]]};const z=["SomeTracks","OneTrack"];export{g as OneTrack,f as SomeTracks,z as __namedExportsOrder,w as default};
//# sourceMappingURL=TrackSelector.stories.0ff80a13.js.map
