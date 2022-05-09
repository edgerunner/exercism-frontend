import{u as c}from"./useDebounce.71098d6d.js";import{j as r}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var i={parameters:{storySource:{source:`import useDebounce from "./useDebounce";

export default {
  title: "Hooks/useDebounce",
  argTypes: {
    delay: { control: { type: "range", min: 0, max: 10000, step: 100 } },
    onChange: { action: "changed" },
  },
};

export function Debounce({ delay, onChange }) {
  const [value, handleInput] = useDebounce(onChange, { delay });
  return (
    <input
      type="text"
      value={value}
      onInput={(event) => handleInput(event.target.value)}
    />
  );
}
Debounce.args = {
  delay: 1000,
};
;Debounce.__docgenInfo={"description":"","methods":[],"displayName":"Debounce"}`,locationsMap:{debounce:{startLoc:{col:7,line:11},endLoc:{col:1,line:20},startBody:{col:7,line:11},endBody:{col:1,line:20}}}}},title:"Hooks/useDebounce",argTypes:{delay:{control:{type:"range",min:0,max:1e4,step:100}},onChange:{action:"changed"}}};const e=function({delay:n,onChange:o}){const[t,a]=c(o,{delay:n});return r("input",{type:"text",value:t,onInput:u=>a(u.target.value)})};e.args={delay:1e3};e.__docgenInfo={description:"",methods:[],displayName:"Debounce"};const m=["Debounce"];export{e as Debounce,m as __namedExportsOrder,i as default};
//# sourceMappingURL=useDebounce.stories.f90e7d57.js.map
