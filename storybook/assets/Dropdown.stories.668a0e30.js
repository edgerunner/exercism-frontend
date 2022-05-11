import{D as o}from"./Dropdown.ce0b39a3.js";import{a as e,j as n}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var s={parameters:{storySource:{source:`import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export function Default({ radio }) {
  return (
    <Dropdown.Wrapper>
      <button>Dropdown</button>
      <Dropdown.Menu radio={radio}>
        <Dropdown.Item data-try={75}>Item 1</Dropdown.Item>
        <Dropdown.Item selected className="extra">
          Item 2
        </Dropdown.Item>
        <Dropdown.Item id="third">Item 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Wrapper>
  );
}
Default.args = {
  radio: false,
};
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:7,line:8},endLoc:{col:1,line:21},startBody:{col:7,line:8},endBody:{col:1,line:21}}}}},title:"Components/Dropdown",component:o};const t=function({radio:r}){return e(o.Wrapper,{children:[n("button",{children:"Dropdown"}),e(o.Menu,{radio:r,children:[n(o.Item,{"data-try":75,children:"Item 1"}),n(o.Item,{selected:!0,className:"extra",children:"Item 2"}),n(o.Item,{id:"third",children:"Item 3"})]})]})};t.args={radio:!1};t.__docgenInfo={description:"",methods:[],displayName:"Default"};const i=["Default"];export{t as Default,i as __namedExportsOrder,s as default};
//# sourceMappingURL=Dropdown.stories.668a0e30.js.map
