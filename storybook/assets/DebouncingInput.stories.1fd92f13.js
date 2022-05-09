var d=Object.defineProperty,g=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var a=(o,n,e)=>n in o?d(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e,u=(o,n)=>{for(var e in n||(n={}))b.call(n,e)&&a(o,e,n[e]);if(t)for(var e of t(n))D.call(n,e)&&a(o,e,n[e]);return o},r=(o,n)=>g(o,m(n));import{D as p}from"./DebouncingInput.fd197a77.js";import{j as c}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var x={parameters:{storySource:{source:`import DebouncingInput from "./DebouncingInput";

export default {
  title: "Controllers/DebouncingInput",
  component: DebouncingInput,
  argTypes: {
    delay: { control: { type: "range", min: 0, max: 10000, step: 100 } },
    onChange: { action: "changed" },
  },
};

export function Debounce(args) {
  return (
    <DebouncingInput {...args}>
      {(value, handleInput) => (
        <input
          type="text"
          value={value}
          onInput={(event) => handleInput(event.target.value)}
        />
      )}
    </DebouncingInput>
  );
}
Debounce.args = {
  delay: 1000,
};
;Debounce.__docgenInfo={"description":"","methods":[],"displayName":"Debounce"}`,locationsMap:{debounce:{startLoc:{col:7,line:12},endLoc:{col:1,line:24},startBody:{col:7,line:12},endBody:{col:1,line:24}}}}},title:"Controllers/DebouncingInput",component:p,argTypes:{delay:{control:{type:"range",min:0,max:1e4,step:100}},onChange:{action:"changed"}}};const i=function(n){return c(p,r(u({},n),{children:(e,l)=>c("input",{type:"text",value:e,onInput:s=>l(s.target.value)})}))};i.args={delay:1e3};i.__docgenInfo={description:"",methods:[],displayName:"Debounce"};const v=["Debounce"];export{i as Debounce,v as __namedExportsOrder,x as default};
//# sourceMappingURL=DebouncingInput.stories.1fd92f13.js.map
