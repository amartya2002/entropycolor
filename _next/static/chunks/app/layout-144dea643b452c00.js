(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{461:function(e,t,r){"use strict";r.d(t,{F:function(){return o},f:function(){return d}});var s=r(4332);let n=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,s.createContext)(void 0),c={setTheme:e=>{},themes:[]},o=()=>{var e;return null!==(e=(0,s.useContext)(i))&&void 0!==e?e:c},d=e=>(0,s.useContext)(i)?s.createElement(s.Fragment,null,e.children):s.createElement(u,e),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:o=m,defaultTheme:d=r?"system":"light",attribute:u="data-theme",value:b,children:p,nonce:y})=>{let[j,v]=(0,s.useState)(()=>h(c,d)),[w,k]=(0,s.useState)(()=>h(c)),N=b?Object.values(b):o,S=(0,s.useCallback)(e=>{let s=e;if(!s)return;"system"===e&&r&&(s=g());let a=b?b[s]:s,i=t?x():null,c=document.documentElement;if("class"===u?(c.classList.remove(...N),a&&c.classList.add(a)):a?c.setAttribute(u,a):c.removeAttribute(u),l){let e=n.includes(d)?d:null,t=n.includes(s)?s:e;c.style.colorScheme=t}null==i||i()},[]),E=(0,s.useCallback)(e=>{v(e);try{localStorage.setItem(c,e)}catch(e){}},[e]),$=(0,s.useCallback)(t=>{let s=g(t);k(s),"system"===j&&r&&!e&&S("system")},[j,e]);(0,s.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener($),$(e),()=>e.removeListener($)},[$]),(0,s.useEffect)(()=>{let e=e=>{e.key===c&&E(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,s.useEffect)(()=>{S(null!=e?e:j)},[e,j]);let T=(0,s.useMemo)(()=>({theme:j,setTheme:E,forcedTheme:e,resolvedTheme:"system"===j?w:j,themes:r?[...o,"system"]:o,systemTheme:r?w:void 0}),[j,E,e,w,r,o]);return s.createElement(i.Provider,{value:T},s.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:l,storageKey:c,themes:o,defaultTheme:d,attribute:u,value:b,children:p,attrs:N,nonce:y}),p)},f=(0,s.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:l,enableColorScheme:i,defaultTheme:c,value:o,attrs:d,nonce:m})=>{let u="system"===c,f="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=i?n.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",x=(e,t=!1,s=!0)=>{let a=o?o[e]:e,l=t?e+"|| ''":`'${a}'`,c="";return i&&s&&!t&&n.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===r?c+=t||a?`c.add(${l})`:"null":a&&(c+=`d[s](n,${l})`),c},g=e?`!function(){${f}${x(e)}}()`:l?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${x("dark")}}else{${x("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${x(o?"x[e]":"e",!0)}}${u?"":"else{"+x(c,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${x(o?"x[e]":"e",!0)}}else{${x(c,!1,!1)};}${h}}catch(t){}}();`;return s.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},x=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},3094:function(e,t,r){Promise.resolve().then(r.bind(r,406))},406:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var s=r(5533),n=r(4332),a=r(461);function l(e){let{width:t,height:r}=e,{theme:l}=(0,a.F)(),[i,c]=(0,n.useState)(!1),[o,d]=(0,n.useState)("");return(0,n.useEffect)(()=>{c(!0)},[]),(0,n.useEffect)(()=>{i&&d("dark"===l?"rgb(251 146 60)":"rgb(59 130 246)")},[l,i]),(0,s.jsx)("div",{className:" max-w-7xl pb-6",children:(0,s.jsx)("div",{className:" flex animate-pulse items-center justify-center",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||154,height:r||154,fill:"none",className:"animate-pulse ",children:[(0,s.jsx)("circle",{cx:77,cy:77,r:77,fill:"#000"}),(0,s.jsx)("circle",{cx:56.833,cy:58.828,r:13.52,fill:"#fff",stroke:"#fff",strokeWidth:2.532,transform:"rotate(-45 56.833 58.828)"}),(0,s.jsx)("circle",{cx:95.665,cy:95.669,r:13.52,fill:"#fff",stroke:"#fff",strokeWidth:2.532,transform:"rotate(-45 95.665 95.669)"}),(0,s.jsx)("circle",{cx:94.669,cy:58.828,r:13.52,fill:"#fff",stroke:"#fff",strokeWidth:2.532,transform:"rotate(-45 94.669 58.828)"}),(0,s.jsx)("circle",{cx:57.828,cy:95.669,r:13.52,fill:"#fff",stroke:"#fff",strokeWidth:2.532,transform:"rotate(-45 57.828 95.669)"}),(0,s.jsx)("path",{fill:"#fff",d:"M79.437 85.499c.57-.176.91-.74.806-1.357-.843-5.53-.348-6.488 4.561-8.632.564-.251.865-.881.69-1.451-.178-.578-.768-.916-1.381-.823-5.273.85-6.088.426-8.633-4.572-.283-.554-.864-.835-1.426-.662-.579.178-.91.74-.822 1.363.857 5.517.362 6.475-4.54 8.616-.577.264-.875.876-.694 1.462.175.57.749.913 1.378.815 5.285-.838 6.09-.419 8.619 4.584.301.557.888.827 1.442.657Z"})]})})})}function i(e){let{finishLoading:t}=e,[r,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=setTimeout(()=>a(!0),2);return()=>clearTimeout(e)},[]),(0,s.jsxs)("div",{className:"flex h-[100vh] flex-col items-center justify-center bg-black",children:[(0,s.jsx)(l,{}),(0,s.jsxs)("p",{className:"font-semibol lg:leding-tight text-center text-3xl leading-tight tracking-tighter text-zinc-200 lg:text-6xl",children:["Entropy",(0,s.jsxs)("span",{className:" bg-gradient-to-t from-zinc-700 to-zinc-200 bg-clip-text text-transparent",children:[" ","Gradient"]})]})]})}function c(e){let{children:t,...r}=e;return(0,s.jsx)(a.f,{...r,children:t})}r(1631);var o=r(1426),d=r.n(o);function m(e){let{href:t,version:r,title:n,iconHref:a}=e;return(0,s.jsx)("section",{className:"inline-flex flex-nowrap items-center rounded-full border border-gray-200 bg-white px-2 py-1 duration-300 hover:border-blue-500 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-slate-900 dark:hover:border-orange-900 ",children:(0,s.jsxs)(d(),{href:t,className:"inline-flex flex-nowrap items-center",children:[a&&(0,s.jsx)("img",{className:"me-1.5 inline-block h-6 w-6 rounded-full",src:a,alt:"Icon"}),(0,s.jsxs)("span",{className:"relative me-1.5 flex h-3 w-3",children:[(0,s.jsx)("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75 dark:bg-white"}),(0,s.jsx)("span",{className:"relative inline-flex h-3 w-3 rounded-full bg-blue-400 dark:bg-orange-400"})]}),(0,s.jsxs)("p",{className:"whitespace-nowrap text-xs font-medium text-gray-800 dark:text-zinc-200",children:[r," ",(0,s.jsx)("span",{className:"text-xs text-blue-400 dark:text-orange-400",children:n})]})]})})}var u=r(77);function f(){let{theme:e,setTheme:t}=(0,a.F)(),[r,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),r)?(0,s.jsx)("button",{className:" cursor-pointer border-none text-xl outline-none duration-300 hover:scale-110 hover:text-orange-400",onClick:()=>t("light"===e?"dark":"light"),children:"light"===e?(0,s.jsx)(u.NWY,{className:"hover:animate-spin active:animate-ping  ",height:20,width:20}):(0,s.jsx)(u.kLh,{height:17,width:17,className:"active:animate-ping"})}):null}var h=()=>{let[e,t]=(0,n.useState)(!1);return(0,s.jsx)("div",{className:"nav sticky top-0 mx-auto w-full justify-center bg-white/60 backdrop-blur-lg dark:bg-transparent",children:(0,s.jsxs)("div",{className:"z-99 mx-auto flex w-full max-w-7xl flex-row justify-between px-6 py-2 md:items-center md:px-12 lg:px-32",children:[(0,s.jsx)("div",{className:" flex flex-row items-center justify-between",children:(0,s.jsxs)(d(),{className:" text-xl font-semibold  text-gray-800 dark:text-zinc-200  ",href:"/",children:["Entropy",(0,s.jsxs)("span",{className:"from-zinc-100 to-zinc-700  font-normal text-zinc-600  dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent ",children:[" ","Gradient"]})]})}),(0,s.jsxs)("nav",{className:"flex gap-2",children:[(0,s.jsx)(m,{version:"v1.0",title:"Know More",href:"/blogs/v1"}),(0,s.jsx)(f,{})]})]})})};function x(){return(0,s.jsx)("div",{children:(0,s.jsx)("footer",{className:"bg-back",children:(0,s.jsxs)("div",{className:"mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",children:[(0,s.jsx)("div",{className:"flex justify-center space-x-6 md:order-2",children:(0,s.jsxs)("span",{className:"inline-flex w-full justify-center gap-3 md:w-auto md:justify-start lg:ml-auto",children:[(0,s.jsxs)("a",{className:"h-6 w-6 fill-black transition hover:text-blue-500",children:[(0,s.jsx)("span",{className:"sr-only",children:"github"}),(0,s.jsx)(u.wGg,{className:"md hydrated h-5 w-5",name:"logo-github",role:"img","aria-label":"logo github"})]}),(0,s.jsxs)("a",{className:"h-6 w-6 fill-black transition hover:text-blue-500",children:[(0,s.jsx)("span",{className:"sr-only",children:"twitter"}),(0,s.jsx)(u.S3E,{className:"md hydrated h-5 w-5",name:"logo-twitter",role:"img","aria-label":"logo twitter"})]}),(0,s.jsxs)("a",{className:"h-6 w-6 fill-black transition hover:text-blue-500",children:[(0,s.jsx)("span",{className:"sr-only",children:"Instagram"}),(0,s.jsx)(u.a5v,{className:"md hydrated h-5 w-5",name:"logo-instagram",role:"img","aria-label":"logo instagram"})]}),(0,s.jsxs)("a",{className:"h-6 w-6 fill-black transition hover:text-blue-500",children:[(0,s.jsx)("span",{className:"sr-only",children:"Linkedin"}),(0,s.jsx)(u.ipJ,{className:"md hydrated h-5 w-5",name:"logo-linkedin",role:"img","aria-label":"logo linkedin"})]})]})}),(0,s.jsx)("div",{className:"mt-8 md:order-1 md:mt-0",children:(0,s.jsx)("p",{className:"text-center text-base text-gray-400",children:(0,s.jsx)("span",{className:"mx-auto mt-2 text-sm text-gray-500",children:"Built by Amartya Sinha"})})})]})})})}function g(e){let{children:t}=e,[r,a]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{if(r){let e=setTimeout(()=>{a(!1)},1e3);return()=>clearTimeout(e)}},[r]),(0,s.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,s.jsx)("head",{}),(0,s.jsx)("body",{className:"",children:(0,s.jsx)(c,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:r?(0,s.jsx)(i,{finishLoading:()=>a(!1)}):(0,s.jsxs)("div",{className:"bg-white from-black to-zinc-900 dark:bg-gradient-to-br",children:[(0,s.jsx)(h,{}),t,(0,s.jsx)(x,{})]})})})]})}},1631:function(){},7108:function(e,t,r){"use strict";var s=r(4332),n=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var s,c={},o=null,d=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===c[s]&&(c[s]=t[s]);return{$$typeof:n,type:e,key:o,ref:d,props:c,_owner:l.current}}t.jsx=c,t.jsxs=c},5533:function(e,t,r){"use strict";e.exports=r(7108)},1426:function(e,t,r){e.exports=r(6308)}},function(e){e.O(0,[545,308,379,369,744],function(){return e(e.s=3094)}),_N_E=e.O()}]);