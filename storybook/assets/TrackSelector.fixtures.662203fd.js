var T=Object.defineProperty,_=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(r,t,e)=>t in r?T(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,m=(r,t)=>{for(var e in t||(t={}))w.call(t,e)&&d(r,e,t[e]);if(p)for(var e of p(t))b.call(t,e)&&d(r,e,t[e]);return r},h=(r,t)=>_(r,C(t));import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import{D as u}from"./Dropdown.ce0b39a3.js";import"./Input.39416d34.js";import"./Loading.4a602b0a.js";import"./PageNavigation.131e32e4.js";import{P as L}from"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import{T as g}from"./TrackIcon.8baf42f0.js";import{r as i}from"./index.17e183eb.js";import{a as k,j as o}from"./jsx-runtime.f0c22839.js";const f="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/all-tracks-5723af830c1df04c577e2aefdc8003f62c4270ec.svg";function y({tracks:r,selected:t,onSelect:e}){var a;const[l,s]=i.exports.useState(!1),c=i.exports.useMemo(()=>r.length<2?r:[{slug:null,title:"All tracks",icon_url:f,count:r.reduce((x,v)=>x+v.count,0)},...r],[r]);return k(u.Wrapper,{element:"button",className:"TrackSelector",onClick:()=>s(!l),children:[o(g,{src:((a=r.find(n=>n.slug===t))==null?void 0:a.icon_url)||f}),o(j,{}),l?o(u.Menu,{radio:!0,children:c.map(n=>i.exports.createElement(S,h(m({},n),{selected:n.slug===t,onClick:e,key:n.slug})))}):null]})}function S({title:r,icon_url:t,slug:e,count:l,selected:s,onClick:c}){return k(u.Item,{selected:s,onClick:()=>c(e),children:[o(g,{src:t}),o("h6",{children:r}),o(L,{value:l})]})}function j(){return o("svg",{width:"15",height:"8",viewBox:"0 0 15 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M13.5938 0.960125L7.78708 6.76625C7.71098 6.84246 7.6077 6.88528 7.5 6.88528C7.3923 6.88528 7.28902 6.84246 7.21292 6.76625L1.40625 0.960125",stroke:"#5C5589",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}y.__docgenInfo={description:"",methods:[],displayName:"TrackSelector"};var U=[{slug:"ruby",title:"Ruby",icon_url:"https://dg8krxphbh767.cloudfront.net/tracks/ruby.svg",count:12},{slug:"erlang",title:"Erlang",icon_url:"https://dg8krxphbh767.cloudfront.net/tracks/erlang.svg",count:9},{slug:"elm",title:"Elm",icon_url:"https://dg8krxphbh767.cloudfront.net/tracks/elm.svg",count:7}];export{y as T,U as f};
//# sourceMappingURL=TrackSelector.fixtures.662203fd.js.map
