import"./useDebounce.71098d6d.js";import{u as m}from"./usePagination.a0793e72.js";import"./Avatar.d0721344.js";import{B as s}from"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";import{a as n,j as o}from"./jsx-runtime.f0c22839.js";function l({count:r,current:i,onPageChange:e}){const t=m({count:r,current:i});return n("nav",{className:"PageNavigation",children:[o(s,{className:"prev",onClick:i>1?()=>e(i-1):null,arrow:"left",children:"Previous"}),[...t()].map(a=>a.spacer?o("span",{className:"spacer",children:"\u22EF"},a.key):a.current?o("b",{children:a.page},a.key):o("a",{onClick:()=>e(a.page),children:a.page},a.key)),o(s,{className:"next",onClick:i<r?()=>e(i+1):null,arrow:"right",children:"Next"})]})}l.__docgenInfo={description:"",methods:[],displayName:"PageNavigation"};export{l as P};
//# sourceMappingURL=PageNavigation.4ae08f45.js.map