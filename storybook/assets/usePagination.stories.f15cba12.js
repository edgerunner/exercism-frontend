import{u as s}from"./usePagination.42389a98.js";import{j as n,F as r,a as c}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var L={parameters:{storySource:{source:`import usePagination from "./usePagination";

export default {
  title: "Hooks/usePagination",
  argTypes: {
    count: { control: "number" },
    current: { control: "number" },
    spread: { control: "number" },
    cap: { control: "number" },
  },
};

export function Default(...args) {
  const pageGenerator = usePagination(...args);

  return [
    [...pageGenerator()].map(({ page, current, spacer }) =>
      spacer ? <>\u2026</> : current ? <b>{page}</b> : <> {page} </>
    ),
  ];
}

Default.args = {
  count: 15,
  current: 8,
  spread: 2,
  cap: 1,
};

export function FirstAndLast(...args) {
  const pageGenerator = usePagination(...args);

  return [
    [...pageGenerator()].map(({ page, current, spacer, first, last }) => [
      first ? <>&lt; </> : null,
      spacer ? <>\u2026</> : current ? <b>{page}</b> : <> {page} </>,
      last ? <> &gt;</> : null,
    ]),
  ];
}
FirstAndLast.args = Default.args;
`,locationsMap:{default:{startLoc:{col:7,line:13},endLoc:{col:1,line:21},startBody:{col:7,line:13},endBody:{col:1,line:21}},"first-and-last":{startLoc:{col:7,line:30},endLoc:{col:1,line:40},startBody:{col:7,line:30},endBody:{col:1,line:40}}}}},title:"Hooks/usePagination",argTypes:{count:{control:"number"},current:{control:"number"},spread:{control:"number"},cap:{control:"number"}}};const l=function(...t){return[[...s(...t)()].map(({page:e,current:a,spacer:o})=>o?n(r,{children:"\u2026"}):a?n("b",{children:e}):c(r,{children:[" ",e," "]}))]};l.args={count:15,current:8,spread:2,cap:1};const d=function(...t){return[[...s(...t)()].map(({page:e,current:a,spacer:o,first:p,last:g})=>[p?n(r,{children:"< "}):null,o?n(r,{children:"\u2026"}):a?n("b",{children:e}):c(r,{children:[" ",e," "]}),g?n(r,{children:" >"}):null])]};d.args=l.args;const h=["Default","FirstAndLast"];export{l as Default,d as FirstAndLast,h as __namedExportsOrder,L as default};
//# sourceMappingURL=usePagination.stories.f15cba12.js.map
