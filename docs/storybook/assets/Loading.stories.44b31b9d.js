import{L as n}from"./Loading.2b696d90.js";import{a,j as e}from"./jsx-runtime.08fc6b8b.js";import"./index.0d5c0cea.js";var c={parameters:{storySource:{source:`import Loading from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    scoped: {
      description:
        "This is not a real prop. If a parent element has \`Loading-scope\` class, then the component will be scoped.",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

export function Overlay({ scoped }) {
  return (
    <div className={scoped ? "Loading-scope" : null}>
      <h1>Loading</h1>
      {[1, 2, 3, 4].map((i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          euismod, nunc euismod euismod consectetur, nisl nisl euismod nisl,
          euismod euismod nisl nisl euismod.
        </p>
      ))}
      <Loading />
    </div>
  );
}
Overlay.args = {
  scoped: false,
};
;Overlay.__docgenInfo={"description":"","methods":[],"displayName":"Overlay"}`,locationsMap:{overlay:{startLoc:{col:7,line:18},endLoc:{col:1,line:32},startBody:{col:7,line:18},endBody:{col:1,line:32}}}}},title:"Components/Loading",component:n,argTypes:{scoped:{description:"This is not a real prop. If a parent element has `Loading-scope` class, then the component will be scoped.",control:{type:"boolean"},defaultValue:!1}}};const o=function({scoped:s}){return a("div",{className:s?"Loading-scope":null,children:[e("h1",{children:"Loading"}),[1,2,3,4].map(i=>e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisl nisl euismod nisl, euismod euismod nisl nisl euismod."},i)),e(n,{})]})};o.args={scoped:!1};o.__docgenInfo={description:"",methods:[],displayName:"Overlay"};const p=["Overlay"];export{o as Overlay,p as __namedExportsOrder,c as default};
//# sourceMappingURL=Loading.stories.44b31b9d.js.map
