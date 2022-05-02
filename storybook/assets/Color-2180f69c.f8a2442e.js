var Ur=Object.defineProperty,Jr=Object.defineProperties;var Qr=Object.getOwnPropertyDescriptors;var yr=Object.getOwnPropertySymbols;var Yr=Object.prototype.hasOwnProperty,Zr=Object.prototype.propertyIsEnumerable;var xr=(a,r,e)=>r in a?Ur(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e,F=(a,r)=>{for(var e in r||(r={}))Yr.call(r,e)&&xr(a,e,r[e]);if(yr)for(var e of yr(r))Zr.call(r,e)&&xr(a,e,r[e]);return a},ar=(a,r)=>Jr(a,Qr(r));import{s as P,W as Fr,T as re,F as ee,I as ae,C as te,a as ne,D as oe,E as dr,H as ie}from"./index.eb3e3ee6.js";import{R as pr,r as d}from"./index.17e183eb.js";import"./iframe.4b83cdbc.js";import"./util.3838a68d.js";import{j as w,a as Y}from"./jsx-runtime.f0c22839.js";var X,q;function S(a,r,e){return r in a?Object.defineProperty(a,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[r]=e,a}function lr(a){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},lr(a)}function H(a,r){return se(a)||ce(a,r)||le(a,r)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(a,r){if(!!a){if(typeof a=="string")return wr(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return wr(a,r)}}function wr(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=a[e];return t}function ce(a,r){var e=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t=[],n=!0,o=!1,i,u;try{for(e=e.call(a);!(n=(i=e.next()).done)&&(t.push(i.value),!(r&&t.length===r));n=!0);}catch(l){o=!0,u=l}finally{try{!n&&e.return!=null&&e.return()}finally{if(o)throw u}}return t}}function se(a){if(Array.isArray(a))return a}function z(){return(z=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}function gr(a,r){if(a==null)return{};var e,t,n={},o=Object.keys(a);for(t=0;t<o.length;t++)r.indexOf(e=o[t])>=0||(n[e]=a[e]);return n}function cr(a){var r=d.exports.useRef(a),e=d.exports.useRef(function(t){r.current&&r.current(t)});return r.current=a,e.current}var B=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),r>t?t:r<e?e:r},A=function(r){return"touches"in r},sr=function(r){return r&&r.ownerDocument.defaultView||self},kr=function(r,e,t){var n=r.getBoundingClientRect(),o=A(e)?function(i,u){for(var l=0;l<i.length;l++)if(i[l].identifier===u)return i[l];return i[0]}(e.touches,t):e;return{left:B((o.pageX-(n.left+sr(r).pageXOffset))/n.width),top:B((o.pageY-(n.top+sr(r).pageYOffset))/n.height)}},Mr=function(r){!A(r)&&r.preventDefault()},br=pr.memo(function(a){var r=a.onMove,e=a.onKey,t=gr(a,["onMove","onKey"]),n=d.exports.useRef(null),o=cr(r),i=cr(e),u=d.exports.useRef(null),l=d.exports.useRef(!1),c=d.exports.useMemo(function(){var k=function(h){Mr(h),(A(h)?h.touches.length>0:h.buttons>0)&&n.current?o(kr(n.current,h,u.current)):R(!1)},C=function(){return R(!1)};function R(m){var h=l.current,p=sr(n.current),g=m?p.addEventListener:p.removeEventListener;g(h?"touchmove":"mousemove",k),g(h?"touchend":"mouseup",C)}return[function(m){var h=m.nativeEvent,p=n.current;if(p&&(Mr(h),!function(M,E){return E&&!A(M)}(h,l.current)&&p)){if(A(h)){l.current=!0;var g=h.changedTouches||[];g.length&&(u.current=g[0].identifier)}p.focus(),o(kr(p,h,u.current)),R(!0)}},function(m){var h=m.which||m.keyCode;h<37||h>40||(m.preventDefault(),i({left:h===39?.05:h===37?-.05:0,top:h===40?.05:h===38?-.05:0}))},R]},[i,o]),v=c[0],f=c[1],y=c[2];return d.exports.useEffect(function(){return y},[y]),w("div",F({},z({},t,{onTouchStart:v,onMouseDown:v,className:"react-colorful__interactive",ref:n,onKeyDown:f,tabIndex:0,role:"slider"})))}),W=function(r){return r.filter(Boolean).join(" ")},mr=function(r){var e=r.color,t=r.left,n=r.top,o=n===void 0?.5:n,i=W(["react-colorful__pointer",r.className]);return w("div",{className:i,style:{top:100*o+"%",left:100*t+"%"},children:w("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}})})},_=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*r)/t},ve={grad:.9,turn:360,rad:360/(2*Math.PI)},tr=function(r){return r[0]==="#"&&(r=r.substr(1)),r.length<6?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:1}:{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:1}},fe=function(r,e){return e===void 0&&(e="deg"),Number(r)*(ve[e]||1)},he=function(r){var e=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?de({h:fe(e[1],e[2]),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)}):{h:0,s:0,v:0,a:1}},de=function(r){var e=r.s,t=r.l;return{h:r.h,s:(e*=(t<50?t:100-t)/100)>0?2*e/(t+e)*100:0,v:t+e,a:r.a}},Pr=function(r){var e=r.s,t=r.v,n=r.a,o=(200-e)*t/100;return{h:_(r.h),s:_(o>0&&o<200?e*t/100/(o<=100?o:200-o)*100:0),l:_(o/2),a:_(n,2)}},vr=function(r){var e=Pr(r);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},Q=function(r){var e=Pr(r);return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},jr=function(r){var e=r.h,t=r.s,n=r.v,o=r.a;e=e/360*6,t/=100,n/=100;var i=Math.floor(e),u=n*(1-t),l=n*(1-(e-i)*t),c=n*(1-(1-e+i)*t),v=i%6;return{r:_(255*[n,l,u,u,c,n][v]),g:_(255*[c,n,n,l,u,u][v]),b:_(255*[u,u,c,n,n,l][v]),a:_(o,2)}},pe=function(r){var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?zr({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},nr=function(r){var e=r.toString(16);return e.length<2?"0"+e:e},zr=function(r){var e=r.r,t=r.g,n=r.b,o=r.a,i=Math.max(e,t,n),u=i-Math.min(e,t,n),l=u?i===e?(t-n)/u:i===t?2+(n-e)/u:4+(e-t)/u:0;return{h:_(60*(l<0?l+6:l)),s:_(i?u/i*100:0),v:_(i/255*100),a:o}},Lr=pr.memo(function(a){var r=a.hue,e=a.onChange,t=W(["react-colorful__hue",a.className]);return React.createElement("div",{className:t},React.createElement(br,{onMove:function(o){e({h:360*o.left})},onKey:function(o){e({h:B(r+360*o.left,0,360)})},"aria-label":"Hue","aria-valuetext":_(r)},React.createElement(mr,{className:"react-colorful__hue-pointer",left:r/360,color:vr({h:r,s:100,v:100,a:1})})))}),Br=pr.memo(function(a){var r=a.hsva,e=a.onChange,t={backgroundColor:vr({h:r.h,s:100,v:100,a:1})};return React.createElement("div",{className:"react-colorful__saturation",style:t},React.createElement(br,{onMove:function(o){e({s:100*o.left,v:100-100*o.top})},onKey:function(o){e({s:B(r.s+100*o.left,0,100),v:B(r.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+_(r.s)+"%, Brightness "+_(r.v)+"%"},React.createElement(mr,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:vr(r)})))}),$r=function(r,e){if(r===e)return!0;for(var t in r)if(r[t]!==e[t])return!1;return!0},Xr=function(r,e){return r.replace(/\s/g,"")===e.replace(/\s/g,"")};function qr(a,r,e){var t=cr(e),n=d.exports.useState(function(){return a.toHsva(r)}),o=n[0],i=n[1],u=d.exports.useRef({color:r,hsva:o});d.exports.useEffect(function(){if(!a.equal(r,u.current.color)){var c=a.toHsva(r);u.current={hsva:c,color:r},i(c)}},[r,a]),d.exports.useEffect(function(){var c;$r(o,u.current.hsva)||a.equal(c=a.fromHsva(o),u.current.color)||(u.current={hsva:o,color:c},t(c))},[o,a,t]);var l=d.exports.useCallback(function(c){i(function(v){return Object.assign({},v,c)})},[]);return[o,l]}var ge=typeof window!="undefined"?d.exports.useLayoutEffect:d.exports.useEffect,be=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:void 0},Cr=new Map,Ar=function(r){ge(function(){var e=r.current?r.current.ownerDocument:document;if(e!==void 0&&!Cr.has(e)){var t=e.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Cr.set(e,t);var n=be();n&&t.setAttribute("nonce",n),e.head.appendChild(t)}},[])},me=function(r){var e=r.className,t=r.colorModel,n=r.color,o=n===void 0?t.defaultColor:n,i=r.onChange,u=gr(r,["className","colorModel","color","onChange"]),l=d.exports.useRef(null);Ar(l);var c=qr(t,o,i),v=c[0],f=c[1],y=W(["react-colorful",e]);return Y("div",ar(F({},z({},u,{ref:l,className:y})),{children:[w(Br,{hsva:v,onChange:f}),w(Lr,{hue:v.h,onChange:f,className:"react-colorful__last-control"})]}))},ye={defaultColor:"000",toHsva:function(r){return zr(tr(r))},fromHsva:function(r){return t=(e=jr(r)).g,n=e.b,"#"+nr(e.r)+nr(t)+nr(n);var e,t,n},equal:function(r,e){return r.toLowerCase()===e.toLowerCase()||$r(tr(r),tr(e))}},xe=function(r){return React.createElement(me,z({},r,{colorModel:ye}))},we=function(r){var e=r.className,t=r.hsva,n=r.onChange,o={backgroundImage:"linear-gradient(90deg, "+Q(Object.assign({},t,{a:0}))+", "+Q(Object.assign({},t,{a:1}))+")"},i=W(["react-colorful__alpha",e]);return React.createElement("div",{className:i},w("div",{className:"react-colorful__alpha-gradient",style:o}),React.createElement(br,{onMove:function(l){n({a:l.left})},onKey:function(l){n({a:B(t.a+l.left)})},"aria-label":"Alpha","aria-valuetext":_(100*t.a)+"%"},React.createElement(mr,{className:"react-colorful__alpha-pointer",left:t.a,color:Q(t)})))},Vr=function(r){var e=r.className,t=r.colorModel,n=r.color,o=n===void 0?t.defaultColor:n,i=r.onChange,u=gr(r,["className","colorModel","color","onChange"]),l=d.exports.useRef(null);Ar(l);var c=qr(t,o,i),v=c[0],f=c[1],y=W(["react-colorful",e]);return Y("div",ar(F({},z({},u,{ref:l,className:y})),{children:[w(Br,{hsva:v,onChange:f}),w(Lr,{hue:v.h,onChange:f}),w(we,{hsva:v,onChange:f,className:"react-colorful__last-control"})]}))},ke={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:he,fromHsva:Q,equal:Xr},Me=function(r){return w(Vr,F({},z({},r,{colorModel:ke})))},Ce={defaultColor:"rgba(0, 0, 0, 1)",toHsva:pe,fromHsva:function(r){var e=jr(r);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},equal:Xr},Ee=function(r){return w(Vr,F({},z({},r,{colorModel:Ce})))},Se={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G=Se,Gr={};for(var or=0,Er=Object.keys(G);or<Er.length;or++){var Sr=Er[or];Gr[G[Sr]]=Sr}var s={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},Wr=s;for(var ir=0,_r=Object.keys(s);ir<_r.length;ir++){var O=_r[ir];if(!("channels"in s[O]))throw new Error("missing channels property: "+O);if(!("labels"in s[O]))throw new Error("missing channel labels property: "+O);if(s[O].labels.length!==s[O].channels)throw new Error("channel and label counts mismatch: "+O);var Rr=s[O],_e=Rr.channels,Re=Rr.labels;delete s[O].channels,delete s[O].labels,Object.defineProperty(s[O],"channels",{value:_e}),Object.defineProperty(s[O],"labels",{value:Re})}s.rgb.hsl=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.min(r,e,t),o=Math.max(r,e,t),i=o-n,u,l;o===n?u=0:r===o?u=(e-t)/i:e===o?u=2+(t-r)/i:t===o&&(u=4+(r-e)/i),u=Math.min(u*60,360),u<0&&(u+=360);var c=(n+o)/2;return o===n?l=0:c<=.5?l=i/(o+n):l=i/(2-o-n),[u,l*100,c*100]};s.rgb.hsv=function(a){var r,e,t,n,o,i=a[0]/255,u=a[1]/255,l=a[2]/255,c=Math.max(i,u,l),v=c-Math.min(i,u,l),f=function(k){return(c-k)/6/v+1/2};return v===0?(n=0,o=0):(o=v/c,r=f(i),e=f(u),t=f(l),i===c?n=t-e:u===c?n=1/3+r-t:l===c&&(n=2/3+e-r),n<0?n+=1:n>1&&(n-=1)),[n*360,o*100,c*100]};s.rgb.hwb=function(a){var r=a[0],e=a[1],t=a[2],n=s.rgb.hsl(a)[0],o=1/255*Math.min(r,Math.min(e,t));return t=1-1/255*Math.max(r,Math.max(e,t)),[n,o*100,t*100]};s.rgb.cmyk=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.min(1-r,1-e,1-t),o=(1-r-n)/(1-n)||0,i=(1-e-n)/(1-n)||0,u=(1-t-n)/(1-n)||0;return[o*100,i*100,u*100,n*100]};function Oe(a,r){return Math.pow(a[0]-r[0],2)+Math.pow(a[1]-r[1],2)+Math.pow(a[2]-r[2],2)}s.rgb.keyword=function(a){var r=Gr[a];if(r)return r;for(var e=1/0,t,n=0,o=Object.keys(G);n<o.length;n++){var i=o[n],u=G[i],l=Oe(a,u);l<e&&(e=l,t=i)}return t};s.keyword.rgb=function(a){return G[a]};s.rgb.xyz=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var n=r*.4124+e*.3576+t*.1805,o=r*.2126+e*.7152+t*.0722,i=r*.0193+e*.1192+t*.9505;return[n*100,o*100,i*100]};s.rgb.lab=function(a){var r=s.rgb.xyz(a),e=r[0],t=r[1],n=r[2];e/=95.047,t/=100,n/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;var o=116*t-16,i=500*(e-t),u=200*(t-n);return[o,i,u]};s.hsl.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100,n,o,i;if(e===0)return i=t*255,[i,i,i];t<.5?n=t*(1+e):n=t+e-t*e;for(var u=2*t-n,l=[0,0,0],c=0;c<3;c++)o=r+1/3*-(c-1),o<0&&o++,o>1&&o--,6*o<1?i=u+(n-u)*6*o:2*o<1?i=n:3*o<2?i=u+(n-u)*(2/3-o)*6:i=u,l[c]=i*255;return l};s.hsl.hsv=function(a){var r=a[0],e=a[1]/100,t=a[2]/100,n=e,o=Math.max(t,.01);t*=2,e*=t<=1?t:2-t,n*=o<=1?o:2-o;var i=(t+e)/2,u=t===0?2*n/(o+n):2*e/(t+e);return[r,u*100,i*100]};s.hsv.rgb=function(a){var r=a[0]/60,e=a[1]/100,t=a[2]/100,n=Math.floor(r)%6,o=r-Math.floor(r),i=255*t*(1-e),u=255*t*(1-e*o),l=255*t*(1-e*(1-o));switch(t*=255,n){case 0:return[t,l,i];case 1:return[u,t,i];case 2:return[i,t,l];case 3:return[i,u,t];case 4:return[l,i,t];case 5:return[t,i,u]}};s.hsv.hsl=function(a){var r=a[0],e=a[1]/100,t=a[2]/100,n=Math.max(t,.01),o,i;i=(2-e)*t;var u=(2-e)*n;return o=e*n,o/=u<=1?u:2-u,o=o||0,i/=2,[r,o*100,i*100]};s.hwb.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100,n=e+t,o;n>1&&(e/=n,t/=n);var i=Math.floor(6*r),u=1-t;o=6*r-i,(i&1)!==0&&(o=1-o);var l=e+o*(u-e),c,v,f;switch(i){default:case 6:case 0:c=u,v=l,f=e;break;case 1:c=l,v=u,f=e;break;case 2:c=e,v=u,f=l;break;case 3:c=e,v=l,f=u;break;case 4:c=l,v=e,f=u;break;case 5:c=u,v=e,f=l;break}return[c*255,v*255,f*255]};s.cmyk.rgb=function(a){var r=a[0]/100,e=a[1]/100,t=a[2]/100,n=a[3]/100,o=1-Math.min(1,r*(1-n)+n),i=1-Math.min(1,e*(1-n)+n),u=1-Math.min(1,t*(1-n)+n);return[o*255,i*255,u*255]};s.xyz.rgb=function(a){var r=a[0]/100,e=a[1]/100,t=a[2]/100,n,o,i;return n=r*3.2406+e*-1.5372+t*-.4986,o=r*-.9689+e*1.8758+t*.0415,i=r*.0557+e*-.204+t*1.057,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92,n=Math.min(Math.max(0,n),1),o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),[n*255,o*255,i*255]};s.xyz.lab=function(a){var r=a[0],e=a[1],t=a[2];r/=95.047,e/=100,t/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;var n=116*e-16,o=500*(r-e),i=200*(e-t);return[n,o,i]};s.lab.xyz=function(a){var r=a[0],e=a[1],t=a[2],n,o,i;o=(r+16)/116,n=e/500+o,i=o-t/200;var u=Math.pow(o,3),l=Math.pow(n,3),c=Math.pow(i,3);return o=u>.008856?u:(o-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,i=c>.008856?c:(i-16/116)/7.787,n*=95.047,o*=100,i*=108.883,[n,o,i]};s.lab.lch=function(a){var r=a[0],e=a[1],t=a[2],n,o=Math.atan2(t,e);n=o*360/2/Math.PI,n<0&&(n+=360);var i=Math.sqrt(e*e+t*t);return[r,i,n]};s.lch.lab=function(a){var r=a[0],e=a[1],t=a[2],n=t/360*2*Math.PI,o=e*Math.cos(n),i=e*Math.sin(n);return[r,o,i]};s.rgb.ansi16=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=H(a,3),t=e[0],n=e[1],o=e[2],i=r===null?s.rgb.hsv(a)[2]:r;if(i=Math.round(i/50),i===0)return 30;var u=30+(Math.round(o/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return i===2&&(u+=60),u};s.hsv.ansi16=function(a){return s.rgb.ansi16(s.hsv.rgb(a),a[2])};s.rgb.ansi256=function(a){var r=a[0],e=a[1],t=a[2];if(r===e&&e===t)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;var n=16+36*Math.round(r/255*5)+6*Math.round(e/255*5)+Math.round(t/255*5);return n};s.ansi16.rgb=function(a){var r=a%10;if(r===0||r===7)return a>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var e=(~~(a>50)+1)*.5,t=(r&1)*e*255,n=(r>>1&1)*e*255,o=(r>>2&1)*e*255;return[t,n,o]};s.ansi256.rgb=function(a){if(a>=232){var r=(a-232)*10+8;return[r,r,r]}a-=16;var e,t=Math.floor(a/36)/5*255,n=Math.floor((e=a%36)/6)/5*255,o=e%6/5*255;return[t,n,o]};s.rgb.hex=function(a){var r=((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255),e=r.toString(16).toUpperCase();return"000000".substring(e.length)+e};s.hex.rgb=function(a){var r=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var e=r[0];r[0].length===3&&(e=e.split("").map(function(u){return u+u}).join(""));var t=parseInt(e,16),n=t>>16&255,o=t>>8&255,i=t&255;return[n,o,i]};s.rgb.hcg=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.max(Math.max(r,e),t),o=Math.min(Math.min(r,e),t),i=n-o,u,l;return i<1?u=o/(1-i):u=0,i<=0?l=0:n===r?l=(e-t)/i%6:n===e?l=2+(t-r)/i:l=4+(r-e)/i,l/=6,l%=1,[l*360,i*100,u*100]};s.hsl.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=e<.5?2*r*e:2*r*(1-e),n=0;return t<1&&(n=(e-.5*t)/(1-t)),[a[0],t*100,n*100]};s.hsv.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=r*e,n=0;return t<1&&(n=(e-t)/(1-t)),[a[0],t*100,n*100]};s.hcg.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100;if(e===0)return[t*255,t*255,t*255];var n=[0,0,0],o=r%1*6,i=o%1,u=1-i,l=0;switch(Math.floor(o)){case 0:n[0]=1,n[1]=i,n[2]=0;break;case 1:n[0]=u,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=i;break;case 3:n[0]=0,n[1]=u,n[2]=1;break;case 4:n[0]=i,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=u}return l=(1-e)*t,[(e*n[0]+l)*255,(e*n[1]+l)*255,(e*n[2]+l)*255]};s.hcg.hsv=function(a){var r=a[1]/100,e=a[2]/100,t=r+e*(1-r),n=0;return t>0&&(n=r/t),[a[0],n*100,t*100]};s.hcg.hsl=function(a){var r=a[1]/100,e=a[2]/100,t=e*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[a[0],n*100,t*100]};s.hcg.hwb=function(a){var r=a[1]/100,e=a[2]/100,t=r+e*(1-r);return[a[0],(t-r)*100,(1-t)*100]};s.hwb.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=1-e,n=t-r,o=0;return n<1&&(o=(t-n)/(1-n)),[a[0],n*100,o*100]};s.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]};s.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]};s.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]};s.gray.hsl=function(a){return[0,0,a[0]]};s.gray.hsv=s.gray.hsl;s.gray.hwb=function(a){return[0,100,a[0]]};s.gray.cmyk=function(a){return[0,0,0,a[0]]};s.gray.lab=function(a){return[a[0],0,0]};s.gray.hex=function(a){var r=Math.round(a[0]/100*255)&255,e=(r<<16)+(r<<8)+r,t=e.toString(16).toUpperCase();return"000000".substring(t.length)+t};s.rgb.gray=function(a){var r=(a[0]+a[1]+a[2])/3;return[r/255*100]};var Z=Wr;function Ie(){for(var a={},r=Object.keys(Z),e=r.length,t=0;t<e;t++)a[r[t]]={distance:-1,parent:null};return a}function He(a){var r=Ie(),e=[a];for(r[a].distance=0;e.length;)for(var t=e.pop(),n=Object.keys(Z[t]),o=n.length,i=0;i<o;i++){var u=n[i],l=r[u];l.distance===-1&&(l.distance=r[t].distance+1,l.parent=t,e.unshift(u))}return r}function Ne(a,r){return function(e){return r(a(e))}}function Te(a,r){for(var e=[r[a].parent,a],t=Z[r[a].parent][a],n=r[a].parent;r[n].parent;)e.unshift(r[n].parent),t=Ne(Z[r[n].parent][n],t),n=r[n].parent;return t.conversion=e,t}var Fe=function(r){for(var e=He(r),t={},n=Object.keys(e),o=n.length,i=0;i<o;i++){var u=n[i],l=e[u];l.parent!==null&&(t[u]=Te(u,e))}return t},fr=Wr,Pe=Fe,L={},je=Object.keys(fr);function ze(a){var r=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=n[0];return i==null?i:(i.length>1&&(n=i),a(n))};return"conversion"in a&&(r.conversion=a.conversion),r}function Le(a){var r=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=n[0];if(i==null)return i;i.length>1&&(n=i);var u=a(n);if(lr(u)==="object")for(var l=u.length,c=0;c<l;c++)u[c]=Math.round(u[c]);return u};return"conversion"in a&&(r.conversion=a.conversion),r}je.forEach(function(a){L[a]={},Object.defineProperty(L[a],"channels",{value:fr[a].channels}),Object.defineProperty(L[a],"labels",{value:fr[a].labels});var r=Pe(a),e=Object.keys(r);e.forEach(function(t){var n=r[t];L[a][t]=Le(n),L[a][t].raw=ze(n)})});var I=L,Be=oe,$e=function(){return Be.Date.now()},Xe=$e,qe=/\s/;function Ae(a){for(var r=a.length;r--&&qe.test(a.charAt(r)););return r}var Ve=Ae,Ge=Ve,We=/^\s+/;function Ke(a){return a&&a.slice(0,Ge(a)+1).replace(We,"")}var De=Ke,Ue=De,Or=dr,Je=ie,Ir=0/0,Qe=/^[-+]0x[0-9a-f]+$/i,Ye=/^0b[01]+$/i,Ze=/^0o[0-7]+$/i,ra=parseInt;function ea(a){if(typeof a=="number")return a;if(Je(a))return Ir;if(Or(a)){var r=typeof a.valueOf=="function"?a.valueOf():a;a=Or(r)?r+"":r}if(typeof a!="string")return a===0?a:+a;a=Ue(a);var e=Ye.test(a);return e||Ze.test(a)?ra(a.slice(2),e?2:8):Qe.test(a)?Ir:+a}var aa=ea,ta=dr,ur=Xe,Hr=aa,na="Expected a function",oa=Math.max,ia=Math.min;function ua(a,r,e){var t,n,o,i,u,l,c=0,v=!1,f=!1,y=!0;if(typeof a!="function")throw new TypeError(na);r=Hr(r)||0,ta(e)&&(v=!!e.leading,f="maxWait"in e,o=f?oa(Hr(e.maxWait)||0,r):o,y="trailing"in e?!!e.trailing:y);function k(x){var N=t,T=n;return t=n=void 0,c=x,i=a.apply(T,N),i}function C(x){return c=x,u=setTimeout(h,r),v?k(x):i}function R(x){var N=x-l,T=x-c,K=r-N;return f?ia(K,o-T):K}function m(x){var N=x-l,T=x-c;return l===void 0||N>=r||N<0||f&&T>=o}function h(){var x=ur();if(m(x))return p(x);u=setTimeout(h,R(x))}function p(x){return u=void 0,y&&t?k(x):(t=n=void 0,i)}function g(){u!==void 0&&clearTimeout(u),c=0,t=l=n=u=void 0}function M(){return u===void 0?i:p(ur())}function E(){var x=ur(),N=m(x);if(t=arguments,n=this,l=x,N){if(u===void 0)return C(l);if(f)return clearTimeout(u),u=setTimeout(h,r),k(l)}return u===void 0&&(u=setTimeout(h,r)),i}return E.cancel=g,E.flush=M,E}var la=ua,ca=la,sa=dr,va="Expected a function";function fa(a,r,e){var t=!0,n=!0;if(typeof a!="function")throw new TypeError(va);return sa(e)&&(t="leading"in e?!!e.leading:t,n="trailing"in e?!!e.trailing:n),ca(a,r,{leading:t,maxWait:r,trailing:n})}var ha=fa,da=P.div({position:"relative",maxWidth:250}),pa=P(Fr)({position:"absolute",zIndex:1,top:4,left:4}),ga=P.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),ba=P(re)(function(a){var r=a.theme;return{fontFamily:r.typography.fonts.base}}),ma=P.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),ya=P.div(function(a){var r=a.theme,e=a.active;return{width:16,height:16,boxShadow:e?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}}),xa=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,Nr=function(r){var e=r.value,t=r.active,n=r.onClick,o=r.style,i=ne(r,["value","active","onClick","style"]),u="linear-gradient(".concat(e,", ").concat(e,"), ").concat(xa,", linear-gradient(#fff, #fff)");return w(ya,F({},Object.assign({},i,{active:t,onClick:n},{style:Object.assign(Object.assign({},o),{backgroundImage:u})})))},wa=P(ee.Input)(function(a){var r=a.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:r.typography.fonts.base}}),ka=P(ae)(function(a){var r=a.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:r.input.color}}),b;(function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"})(b||(b={}));var U=Object.values(b),Ma=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Ca=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ea=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,hr=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Sa=/^\s*#?([0-9a-f]{3})\s*$/i,_a=(X={},S(X,b.HEX,xe),S(X,b.RGB,Ee),S(X,b.HSL,Me),X),J=(q={},S(q,b.HEX,"transparent"),S(q,b.RGB,"rgba(0, 0, 0, 0)"),S(q,b.HSL,"hsla(0, 0%, 0%, 0)"),q),Tr=function(r){var e=r==null?void 0:r.match(Ma);if(!e)return[0,0,0,1];var t=H(e,5),n=t[1],o=t[2],i=t[3],u=t[4],l=u===void 0?1:u;return[n,o,i,l].map(Number)},V=function(r){var e;if(!!r){var t=!0;if(Ca.test(r)){var n,o=Tr(r),i=H(o,4),u=i[0],l=i[1],c=i[2],v=i[3],f=I.rgb.hsl([u,l,c])||[0,0,0],y=H(f,3),k=y[0],C=y[1],R=y[2];return n={valid:t,value:r,keyword:I.rgb.keyword([u,l,c]),colorSpace:b.RGB},S(n,b.RGB,r),S(n,b.HSL,"hsla(".concat(k,", ").concat(C,"%, ").concat(R,"%, ").concat(v,")")),S(n,b.HEX,"#".concat(I.rgb.hex([u,l,c]).toLowerCase())),n}if(Ea.test(r)){var m,h=Tr(r),p=H(h,4),g=p[0],M=p[1],E=p[2],x=p[3],N=I.hsl.rgb([g,M,E])||[0,0,0],T=H(N,3),K=T[0],Kr=T[1],Dr=T[2];return m={valid:t,value:r,keyword:I.hsl.keyword([g,M,E]),colorSpace:b.HSL},S(m,b.RGB,"rgba(".concat(K,", ").concat(Kr,", ").concat(Dr,", ").concat(x,")")),S(m,b.HSL,r),S(m,b.HEX,"#".concat(I.hsl.hex([g,M,E]).toLowerCase())),m}var D=r.replace("#",""),$=I.keyword.rgb(D)||I.hex.rgb(D),er=I.rgb.hsl($),j=r;if(/[^#a-f0-9]/i.test(r)?j=D:hr.test(r)&&(j="#".concat(D)),j.startsWith("#"))t=hr.test(j);else try{I.keyword.hex(j)}catch{t=!1}return e={valid:t,value:j,keyword:I.rgb.keyword($),colorSpace:b.HEX},S(e,b.RGB,"rgba(".concat($[0],", ").concat($[1],", ").concat($[2],", 1)")),S(e,b.HSL,"hsla(".concat(er[0],", ").concat(er[1],"%, ").concat(er[2],"%, 1)")),S(e,b.HEX,j),e}},Ra=function(r,e,t){if(!r||!(e!=null&&e.valid))return J[t];if(t!==b.HEX)return(e==null?void 0:e[t])||J[t];if(!e.hex.startsWith("#"))try{return"#".concat(I.keyword.hex(e.hex))}catch{return J.hex}var n=e.hex.match(Sa);if(!n)return hr.test(e.hex)?e.hex:J.hex;var o=n[1].split(""),i=H(o,3),u=i[0],l=i[1],c=i[2];return"#".concat(u).concat(u).concat(l).concat(l).concat(c).concat(c)},Oa=function(r,e){var t=d.exports.useState(r||""),n=H(t,2),o=n[0],i=n[1],u=d.exports.useState(function(){return V(o)}),l=H(u,2),c=l[0],v=l[1],f=d.exports.useState((c==null?void 0:c.colorSpace)||b.HEX),y=H(f,2),k=y[0],C=y[1];d.exports.useEffect(function(){r===void 0&&(i(""),v(void 0),C(b.HEX))},[r]);var R=d.exports.useMemo(function(){return Ra(o,c,k).toLowerCase()},[o,c,k]),m=d.exports.useCallback(function(p){var g=V(p);i((g==null?void 0:g.value)||p||""),g&&(v(g),C(g.colorSpace),e(g.value))},[e]),h=d.exports.useCallback(function(){var p=U.indexOf(k)+1;p>=U.length&&(p=0),C(U[p]);var g=(c==null?void 0:c[U[p]])||"";i(g),e(g)},[c,k,e]);return{value:o,realValue:R,updateValue:m,color:c,colorSpace:k,cycleColorSpace:h}},rr=function(r){return r.replace(/\s*/,"").toLowerCase()},Ia=function(r,e,t){var n=d.exports.useState(e!=null&&e.valid?[e]:[]),o=H(n,2),i=o[0],u=o[1];d.exports.useEffect(function(){e===void 0&&u([])},[e]);var l=d.exports.useMemo(function(){var v=(r||[]).map(function(f){return typeof f=="string"?V(f):f.title?Object.assign(Object.assign({},V(f.color)),{keyword:f.title}):V(f.color)});return v.concat(i).filter(Boolean).slice(-27)},[r,i]),c=d.exports.useCallback(function(v){!(v!=null&&v.valid)||l.some(function(f){return rr(f[t])===rr(v[t])})||u(function(f){return f.concat(v)})},[t,l]);return{presets:l,addPreset:c}},La=function(r){var e=r.name,t=r.value,n=r.onChange,o=r.onFocus,i=r.onBlur,u=r.presetColors,l=r.startOpen,c=Oa(t,ha(n,200)),v=c.value,f=c.realValue,y=c.updateValue,k=c.color,C=c.colorSpace,R=c.cycleColorSpace,m=Ia(u,k,C),h=m.presets,p=m.addPreset,g=_a[C];return Y(da,{children:[w(pa,{trigger:"click",startOpen:l,closeOnClick:!0,onVisibilityChange:function(){return p(k)},tooltip:Y(ga,{children:[w(g,F({},Object.assign({color:f==="transparent"?"#000000":f},{onChange:y,onFocus:o,onBlur:i}))),h.length>0&&w(ma,{children:h.map(function(M,E){return w(Fr,{hasChrome:!1,tooltip:w(ba,{note:M.keyword||M.value}),children:w(Nr,{value:M[C],active:k&&rr(M[C])===rr(k[C]),onClick:function(){return y(M.value)}})},"".concat(M.value,"-").concat(E))})})]}),children:w(Nr,{value:f,style:{margin:4}})}),w(wa,{id:te(e),value:v,onChange:function(E){return y(E.target.value)},onFocus:function(E){return E.target.select()},placeholder:"Choose color..."}),v?w(ka,{icon:"markup",onClick:R}):null]})};export{La as ColorControl,La as default};
//# sourceMappingURL=Color-2180f69c.f8a2442e.js.map
