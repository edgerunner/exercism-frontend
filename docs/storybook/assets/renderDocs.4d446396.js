import"./iframe.d5457aa1.js";import{R as n}from"./index.0d5c0cea.js";import{R as g}from"./index.a6b341b9.js";var y={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},b={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},E={textAlign:"center"},h=function(){return n.createElement("div",{style:y,className:"sb-nodocs sb-wrapper"},n.createElement("div",{style:b},n.createElement("h1",{style:E},"No Docs"),n.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's\xA0",n.createElement("code",null,"docs")," parameter. If you think this is an error:"),n.createElement("ul",null,n.createElement("li",null,"Please check the story definition."),n.createElement("li",null,"Please check the Storybook config."),n.createElement("li",null,"Try reloading the page.")),n.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};h.displayName="NoDocs";function f(t,a,l,i,s,u,r){try{var c=t[u](r),o=c.value}catch(d){l(d);return}c.done?a(o):Promise.resolve(o).then(i,s)}function k(t){return function(){var a=this,l=arguments;return new Promise(function(i,s){var u=t.apply(a,l);function r(o){f(u,i,s,r,c,"next",o)}function c(o){f(u,i,s,r,c,"throw",o)}r(void 0)})}}function S(t,a,l,i){return w(t,a,l).then(i)}function w(t,a,l){return p.apply(this,arguments)}function p(){return p=k(regeneratorRuntime.mark(function t(a,l,i){var s,u,r,c,o,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.parameters.docs,!((r!=null&&r.getPage||r!=null&&r.page)&&!(r!=null&&r.getContainer||r!=null&&r.container))){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=r.container,e.t1){e.next=8;break}return e.next=7,(s=r.getContainer)===null||s===void 0?void 0:s.call(r);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(m){var v=m.children;return n.createElement(n.Fragment,null,v)};case 11:if(c=e.t0,e.t3=r.page,e.t3){e.next=17;break}return e.next=16,(u=r.getPage)===null||u===void 0?void 0:u.call(r);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=h;case 20:return o=e.t2,d=n.createElement(c,{key:a.componentId,context:l},n.createElement(o,null)),e.next=24,new Promise(function(m){g.render(d,i,m)});case 24:case"end":return e.stop()}},t)})),p.apply(this,arguments)}function A(t){g.unmountComponentAtNode(t)}export{S as renderDocs,A as unmountDocs};
//# sourceMappingURL=renderDocs.4d446396.js.map
