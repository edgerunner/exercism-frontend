var u=Object.defineProperty,h=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))T.call(e,a)&&m(t,a,e[a]);if(l)for(var a of l(e))k.call(e,a)&&m(t,a,e[a]);return t},i=(t,e)=>h(t,f(e));import{L as y,F as x}from"./index.stories.b41ab8df.js";import"./Avatar.d0721344.js";import"./Button.fcc31c49.js";import"./Dropdown.ce0b39a3.js";import"./Input.39416d34.js";import{L as C}from"./Loading.4a602b0a.js";import"./PageNavigation.c7f565ee.js";import{P as M}from"./Pill.8b72d296.js";import"./TimeAgo.127284d2.js";import"./TrackIcon.8baf42f0.js";import{a as L,c as v,b as r}from"./useDebounce.71098d6d.js";import{r as P}from"./index.17e183eb.js";import{j as o,a as p}from"./jsx-runtime.f0c22839.js";import"./TrackSelector.fixtures.559ceb7f.js";import"./Items.b54d865f.js";import"./Items.fixtures.149ddeb1.js";import"./Footer.e58c3c4a.js";import"./usePagination.42389a98.js";const _=v({context:{parameters:{page:null,track:null,order:"newest_first",exercise:""},testimonials:null,tracks:null},initial:"Loading",states:{Loading:{invoke:{src:"fetchEverything",id:"fetch-everything",onDone:[{actions:"updateTracksAndTestimonials",target:"Ready"}]},type:"parallel"},Ready:{initial:"Idle",states:{Idle:{on:{"Change track selection":{actions:["updateSelectedTrack","resetPage"],target:"Loading"},"Change ordering":{actions:["updateOrder","resetPage"],target:"Loading"},"Change page":{actions:"updatePage",target:"Loading"},"Change exercise search":{actions:["updateExercise","resetPage"],target:"Loading"}}},Loading:{invoke:{src:"fetchTestimonialsOnly",id:"fetch-testimonials",onDone:[{actions:"updateTestimonials",target:"#My testimonials.Ready"}]}}}}},id:"My testimonials"},{services:{fetchTestimonialsOnly:O,fetchEverything:F},actions:{updateTestimonials:r({testimonials:(t,e)=>e.data.testimonials}),updateTracksAndTestimonials:r({tracks:(t,e)=>e.data.tracks,testimonials:(t,e)=>e.data.testimonials}),updateSelectedTrack:r({parameters:({parameters:t},{track:e})=>i(s({},t),{track:e})}),updateExercise:r({parameters:({parameters:t},{exercise:e})=>i(s({},t),{exercise:e})}),updateOrder:r({parameters:({parameters:t},{order:e})=>i(s({},t),{order:e})}),updatePage:r({parameters:({parameters:t},{page:e})=>i(s({},t),{page:e})}),resetPage:r({parameters:({parameters:t})=>i(s({},t),{page:null})})}});function g({parameters:t}){const e=new URL("https://exercism.org/api/v2/hiring/testimonials");for(const[a,n]of Object.entries(t))n&&e.searchParams.set(a,n);return fetch(e).then(a=>a.json())}function E(){return fetch("https://exercism.org/api/v2/tracks").then(t=>t.json()).then(j)}function F(t){return Promise.all([E(),g(t)]).then(([e,a])=>s({tracks:e},a)).then(d)}function O(t){return g(t).then(e=>s({tracks:t.tracks},e)).then(d)}function d({tracks:t,testimonials:e}){return e.total=0,e.tracks.forEach((a,n)=>{e.tracks[n]=t.get(a),e.tracks[n].count=e.track_counts[a]||0,e.total+=e.track_counts[a]}),{tracks:t,testimonials:e}}function j(t){return new Map(t.tracks.map(e=>[e.slug,e]))}function R(){const[t,e]=L(_),a=P.exports.useMemo(()=>({onPageChange:n=>e("Change page",{page:n}),onTrackChange:n=>e("Change track selection",{track:n}),onExerciseChange:n=>e("Change exercise search",{exercise:n}),onOrderChange:n=>e("Change ordering",{order:n})}),[e]);return[t,a]}function c(){var a;const[t,e]=R();return t.matches("Loading")?o("div",{className:"Loading-scope",children:o(C,{})}):p("main",{className:"MyTestimonials page",children:[p("header",{children:[o("h1",{children:"Testimonials I've left"}),o(M,{value:((a=t.context.testimonials)==null?void 0:a.total)||"?"})]}),o(y,{testimonials:t.context.testimonials.results,currentPage:t.context.testimonials.pagination.current_page,pageCount:t.context.testimonials.pagination.total_pages,onPageChange:e.onPageChange,tracks:t.context.testimonials.tracks,onTrackChange:e.onTrackChange,selectedTrack:t.context.parameters.track,exercise:t.context.parameters.exercise,onExerciseChange:e.onExerciseChange,order:t.context.parameters.order,onOrderChange:e.onOrderChange,loading:t.matches("Ready.Loading")})]})}c.__docgenInfo={description:"",methods:[],displayName:"MyTestimonials"};var Z={parameters:{storySource:{source:`import MyTestimonials from "./MyTestimonials";
import * as ListStories from "./list/index.stories";

export default {
  title: "Features/Testimonials/MyTestimonials",
  component: MyTestimonials,
};

const Template = (args) => <MyTestimonials {...args} />;

export const Full = Template.bind({});
Full.args = ListStories.Full.args;
`,locationsMap:{full:{startLoc:{col:17,line:9},endLoc:{col:55,line:9},startBody:{col:17,line:9},endBody:{col:55,line:9}}}}},title:"Features/Testimonials/MyTestimonials",component:c};const S=t=>o(c,s({},t)),b=S.bind({});b.args=x.args;const ee=["Full"];export{b as Full,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=MyTestimonials.stories.7c968503.js.map
