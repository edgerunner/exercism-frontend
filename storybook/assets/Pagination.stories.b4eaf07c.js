var l=Object.defineProperty;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var r=(n,t,a)=>t in n?l(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,i=(n,t)=>{for(var a in t||(t={}))p.call(t,a)&&r(n,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&r(n,a,t[a]);return n};import{P as c}from"./Pagination.021362db.js";import{j as e,a as u,F as s}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var h={parameters:{storySource:{source:`import Pagination from "./Pagination";

export default {
  title: "Controllers/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 15,
  current: 8,
  spread: 2,
  cap: 1,
  children: ({ page, current }) => (current ? <b>{page}</b> : <> {page} </>),
  spacer: <> \u2026 </>,
};
`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:51,line:8},startBody:{col:17,line:8},endBody:{col:51,line:8}}}}},title:"Controllers/Pagination",component:c};const g=n=>e(c,i({},n)),m=g.bind({});m.args={count:15,current:8,spread:2,cap:1,children:({page:n,current:t})=>t?e("b",{children:n}):u(s,{children:[" ",n," "]}),spacer:e(s,{children:" \u2026 "})};const D=["Default"];export{m as Default,D as __namedExportsOrder,h as default};
//# sourceMappingURL=Pagination.stories.b4eaf07c.js.map
