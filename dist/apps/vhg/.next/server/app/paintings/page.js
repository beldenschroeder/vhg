(()=>{var e={};e.id=228,e.ids=[228],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2781:e=>{"use strict";e.exports=require("stream")},9370:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c});var s=r(3229),n=r(8650),i=r(5491),o=r.n(i),a=r(2561),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["paintings",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8075)),"/Users/beldenschroeder/code/vhg/apps/vhg/app/paintings/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3459)),"/Users/beldenschroeder/code/vhg/apps/vhg/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5720,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/beldenschroeder/code/vhg/apps/vhg/app/paintings/page.tsx"],p="/paintings/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/paintings/page",pathname:"/paintings",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2344:(e,t,r)=>{Promise.resolve().then(r.bind(r,73))},9009:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6510,23)),Promise.resolve().then(r.t.bind(r,9681,23)),Promise.resolve().then(r.t.bind(r,8959,23)),Promise.resolve().then(r.t.bind(r,429,23)),Promise.resolve().then(r.t.bind(r,6038,23)),Promise.resolve().then(r.t.bind(r,4067,23))},9823:()=>{},73:(e,t,r)=>{"use strict";r.r(t),r.d(t,{StyledComponentsRegistry:()=>a});var s=r(2683),n=r(3735),i=r(8936),o=r(5017);function a({children:e}){let[t]=(0,n.useState)(()=>new o.qH);return(0,i.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),s.jsx(s.Fragment,{children:e})}),s.jsx(o.LC,{sheet:t.instance,children:e})}},3459:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>c});var s=r(7173);r(2324);var n=r(7977);let i=(0,n.createProxy)(String.raw`/Users/beldenschroeder/code/vhg/apps/vhg/app/registry.tsx`),{__esModule:o,$$typeof:a}=i;i.default;let l=(0,n.createProxy)(String.raw`/Users/beldenschroeder/code/vhg/apps/vhg/app/registry.tsx#StyledComponentsRegistry`),c={title:"Welcome to demo2",description:"Generated by create-nx-workspace"};function d({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:s.jsx(l,{children:e})})})}},8075:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,dynamic:()=>o});var s=r(7173);async function n(){let e="production"===process.env.VERCEL_ENV?`https://${process.env.VERCEL_URL}`:"preview"===process.env.VERCEL_ENV?`https://${process.env.VERCEL_URL}`:`http://${process.env.VERCEL_URL}`;console.log("baseUrl: ",e);let t=await fetch(`${e}/api/hello`,{headers:{accept:"application/json"}}),r=await t.json();return console.log("data: ",r),r}async function i(){let e=await n();return console.log("paintings",e),(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Welcome to PaintingCollection!"}),s.jsx("ul",{children:e.map(e=>(0,s.jsxs)("li",{children:["Post: ",e.title]},e.id))})]})}let o="force-dynamic";function a(){return(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Welcome to Paintings!"}),s.jsx(i,{})]})}},2324:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[32,168],()=>r(9370));module.exports=s})();