import{u as c}from"./usePagination.a0793e72.js";import{j as n,F as r,a as l}from"./jsx-runtime.f0c22839.js";import"./index.17e183eb.js";var y={parameters:{storySource:{source:`import usePagination from "./usePagination";

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
    [...pageGenerator()].map(({ page, current, spacer, key }) => (
      <span key={key}>
        {spacer ? <>\u2026</> : current ? <b>{page}</b> : <> {page} </>}
      </span>
    )),
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
`,locationsMap:{default:{startLoc:{col:7,line:13},endLoc:{col:1,line:23},startBody:{col:7,line:13},endBody:{col:1,line:23}},"first-and-last":{startLoc:{col:7,line:32},endLoc:{col:1,line:42},startBody:{col:7,line:32},endBody:{col:1,line:42}}}}},title:"Hooks/usePagination",argTypes:{count:{control:"number"},current:{control:"number"},spread:{control:"number"},cap:{control:"number"}}};const u=function(...t){return[[...c(...t)()].map(({page:e,current:a,spacer:o,key:s})=>n("span",{children:o?n(r,{children:"\u2026"}):a?n("b",{children:e}):l(r,{children:[" ",e," "]})},s))]};u.args={count:15,current:8,spread:2,cap:1};const d=function(...t){return[[...c(...t)()].map(({page:e,current:a,spacer:o,first:s,last:g})=>[s?n(r,{children:"< "}):null,o?n(r,{children:"\u2026"}):a?n("b",{children:e}):l(r,{children:[" ",e," "]}),g?n(r,{children:" >"}):null])]};d.args=u.args;const h=["Default","FirstAndLast"];export{u as Default,d as FirstAndLast,h as __namedExportsOrder,y as default};
//# sourceMappingURL=usePagination.stories.c395aca1.js.map
