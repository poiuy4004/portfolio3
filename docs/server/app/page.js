(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8461:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>l,routeModule:()=>h,tree:()=>u});var n=r(482),o=r(9108),i=r(2563),a=r.n(i),s=r(8300),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);r.d(t,c);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1136)),"C:\\Users\\82102\\react\\portfolio3\\src\\app\\page.tsx"],metadata:{icon:[],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,8013))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"C:\\Users\\82102\\react\\portfolio3\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,8013))).default(e)],twitter:[],manifest:void 0}}],l=["C:\\Users\\82102\\react\\portfolio3\\src\\app\\page.tsx"],d="/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3999:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},4629:(e,t,r)=>{Promise.resolve().then(r.bind(r,3411))},3916:()=>{},6793:(e,t,r)=>{"use strict";t.v=void 0;var n=r(113);Object.defineProperty(t,"v",{enumerable:!0,get:function(){return n.JigsawPuzzle}})},113:(e,t,r)=>{"use strict";var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]},i=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},a=function(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.JigsawPuzzle=void 0;var s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t}(r(3729)),c=function(e,t,r){return e<t?t:e>r?r:e};t.JigsawPuzzle=function(e){var t=e.imageSrc,r=e.rows,o=void 0===r?3:r,i=e.columns,u=void 0===i?4:i,l=e.onSolved,d=void 0===l?function(){}:l;if(!t)return null;var p=(0,s.useState)(),h=p[0],f=p[1],g=(0,s.useState)(),m=g[0],v=g[1],x=(0,s.useState)(),_=x[0],b=x[1],y=(0,s.useState)(),P=y[0],w=y[1],j=(0,s.useRef)(),M=(0,s.useRef)(),z=(0,s.useRef)(),k=(0,s.useCallback)(function(e){v({width:e.width,height:e.height}),_&&w(_.width/e.width*e.height),f(Array.from(Array(o*u).keys()).map(function(t){return{correctPosition:t,tileHeight:e.height/o,tileWidth:e.width/u,tileOffsetX:t%u*(e.width/u),tileOffsetY:e.height/o*Math.floor(t/u),currentPosXPerc:Math.random()*(1-1/o),currentPosYPerc:Math.random()*(1-1/u),solved:!1}}))},[o,u]),O=(0,s.useCallback)(function(e){var t,r=null===(t=e.find(function(e){return e.contentRect}))||void 0===t?void 0:t.contentRect;r&&(b({width:r.width,height:r.height}),m&&w(r.width/m.width*m.height))},[b,m]),C=(0,s.useCallback)(function(e){if(e){j.current=e;var t=new ResizeObserver(O);t.observe(e),M.current=t,b({width:e.offsetWidth,height:e.offsetHeight}),m&&w(e.offsetWidth/m.width*m.height)}},[b,m,j,M]);(0,s.useEffect)(function(){var e=new Image;e.onload=function(){return k(e)},e.src=t},[t,o,u]);var B=(0,s.useCallback)(function(e,t){var r,n;if(!e.solved){"touchstart"===t.type&&document.documentElement.style.setProperty("overflow","hidden");var o={x:null!==(r=t.pageX)&&void 0!==r?r:t.touches[0].pageX,y:null!==(n=t.pageY)&&void 0!==n?n:t.touches[0].pageY};z.current={tile:e,elem:t.target,mouseOffsetX:o.x-t.target.getBoundingClientRect().x,mouseOffsetY:o.y-t.target.getBoundingClientRect().y},t.target.classList.add("jigsaw-puzzle__piece--dragging")}},[z]),N=(0,s.useCallback)(function(e){var t,r;if(z.current){e.stopPropagation(),e.preventDefault();var n={x:null!==(t=e.pageX)&&void 0!==t?t:e.touches[0].pageX,y:null!==(r=e.pageY)&&void 0!==r?r:e.touches[0].pageY},o={x:c(n.x-j.current.getBoundingClientRect().left-z.current.mouseOffsetX,0,_.width-z.current.elem.offsetWidth),y:c(n.y-j.current.getBoundingClientRect().top-z.current.mouseOffsetY,0,_.height-z.current.elem.offsetHeight)};z.current.elem.style.setProperty("left","".concat(o.x,"px")),z.current.elem.style.setProperty("top","".concat(o.y,"px"))}},[z,_]),R=(0,s.useCallback)(function(e){var t;if(z.current){"touchend"===e.type&&document.documentElement.style.removeProperty("overflow"),null===(t=z.current)||void 0===t||t.elem.classList.remove("jigsaw-puzzle__piece--dragging");var r={x:c(z.current.elem.offsetLeft/_.width,0,1),y:c(z.current.elem.offsetTop/_.height,0,1)},i=z.current.tile,s={x:i.correctPosition%u/u,y:Math.floor(i.correctPosition/u)/o},l=.028>=Math.abs(s.x-r.x)&&.028>=Math.abs(s.y-r.y);f(function(e){var t=a(a([],e.filter(function(e){return e.correctPosition!==i.correctPosition}),!0),[n(n({},i),{currentPosXPerc:l?s.x:r.x,currentPosYPerc:l?s.y:r.y,solved:l})],!1);return t.every(function(e){return e.solved})&&d(),t}),z.current=void 0}},[z,f,_,d]);return s.default.createElement("div",{ref:C,onTouchMove:N,onMouseMove:N,onTouchEnd:R,onMouseUp:R,onTouchCancel:R,onMouseLeave:R,className:"jigsaw-puzzle",style:{height:P?"".concat(P,"px"):void 0},onDragEnter:function(e){e.stopPropagation(),e.preventDefault()},onDragOver:function(e){e.stopPropagation(),e.preventDefault()}},h&&_&&m&&h.map(function(e){return s.default.createElement("div",{draggable:!1,onMouseDown:function(t){return B(e,t)},onTouchStart:function(t){return B(e,t)},key:e.correctPosition,className:"jigsaw-puzzle__piece ".concat(e.solved?" jigsaw-puzzle__piece--solved":""," "),style:{position:"absolute",height:"".concat(1/o*100,"%"),width:"".concat(1/u*100,"%"),backgroundImage:"url(".concat(t,")"),backgroundSize:"".concat(_.width,"px ").concat(_.height,"px"),backgroundPositionX:"".concat(e.correctPosition%u/(u-1)*100,"%"),backgroundPositionY:"".concat(Math.floor(e.correctPosition/u)/(o-1)*100,"%"),left:"".concat(e.currentPosXPerc*_.width,"px"),top:"".concat(e.currentPosYPerc*_.height,"px")}})}))}},3411:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(5344),o=r(3729),i=r(4767),a=r(845),s=r.n(a),c=r(6294),u=r.n(c);let l=function({titleText:e,contentText:t,leftButtonText:r,rightButtonText:o,leftButtonFn:i,rightButtonFn:a}){return n.jsx("article",{className:u().container,onClick:()=>a(!1),children:(0,n.jsxs)("section",{className:u().box,children:[n.jsx("div",{className:u().title,children:e}),n.jsx("section",{className:u().content,children:t}),(0,n.jsxs)("div",{className:u().buttonBox,children:[r?n.jsx("button",{className:`${u().button} ${u().leftButton}`,children:r}):null,n.jsx("button",{className:`${u().button} ${u().rightButton}`,onClick:()=>a(!1),children:o})]})]})})};var d=r(8242),p=r.n(d),h=r(6793);r(3528);let f=function(){let e=(0,i.useRouter)();return n.jsx("article",{className:p().container,children:n.jsx("section",{className:p().box,children:n.jsx(h.v,{imageSrc:"images/puzzleImg.png",rows:2,columns:3,onSolved:()=>e.push("/intro")})})})};function g(){let[e,t]=(0,o.useState)(!0),r=(0,i.useRouter)();return(0,o.useEffect)(()=>{setTimeout(()=>t(!1),2222),window.innerWidth<1025&&r.push("/intro")}),(0,n.jsxs)("main",{className:s().container,children:[n.jsx(f,{}),n.jsx("button",{className:s().skipButton,onClick:()=>r.push("intro"),children:"퍼즐 건너뛰기 ►"}),e?n.jsx(l,{titleText:"퍼즐을 맞춰보세요!",contentText:"퍼즐을 맞추고 포트폴리오를 확인하세요!",rightButtonText:"닫기",rightButtonFn:t}):null]})}},6294:e=>{e.exports={container:"modal_container__4hhyw",box:"modal_box__MwjKM",title:"modal_title__beNLR",content:"modal_content__ZLUFF",buttonBox:"modal_buttonBox__dBMwJ",button:"modal_button__WHQSK",leftButton:"modal_leftButton__scdxf",rightButton:"modal_rightButton__MQW3r"}},8242:e=>{e.exports={container:"puzzle_container__y2EaT",box:"puzzle_box__7lxun"}},845:e=>{e.exports={container:"root_container__lG6uK",skipButton:"root_skipButton__k2A49"}},1342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>o});var n=r(5036);r(2155);let o={title:"장용민",description:"장용민 포트폴리오",keywords:"프론트엔드,개발자,포트폴리오",authors:[{name:"Dev.YongMin",url:"https://poiuy4004.github.io/portfolio3"}],publisher:"장용민",classification:"장용민",referrer:"origin",robots:"",creator:"Dev.YongMin",category:"portfolio",generator:"장용민",icons:"https://avatars.githubusercontent.com/u/125282928?v=4",openGraph:{type:"website",url:"https://poiuy4004.github.io/portfolio3",title:"장용민",description:"장용민 포트폴리오",siteName:"장용민 포트폴리오",images:[{url:"https://example.com/og.png"}]},twitter:{card:"summary_large_image",site:"@portfolio",creator:"@Dev.YongMin",images:"https://avatars.githubusercontent.com/u/125282928?v=4"}};function i({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{children:e})})}},1136:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>a});let n=(0,r(6843).createProxy)(String.raw`C:\Users\82102\react\portfolio3\src\app\page.tsx`),{__esModule:o,$$typeof:i}=n,a=n.default},8013:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i}),r(5036),r(342);var n=r(337);let o={};async function i(e){let{__metadata_id__:t,...r}=e.params,i=(0,n.fillMetadataSegment)(".",r,"opengraph-image"),{generateImageMetadata:a}=o;function s(e,t){let r={alt:e.alt,type:e.contentType||"image/png",url:i+(t?"/"+t:"")+"?faf23158e5de6701"},{size:n}=e;return n&&(r.width=n.width,r.height=n.height),r}return a?(await a({params:r})).map((e,t)=>{let r=(e.id||t)+"";return s(e,r)}):[s(o,"")]}},3528:()=>{},2155:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[243,356,859],()=>r(8461));module.exports=n})();