(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{9813:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/background",function(){return l(3628)}])},9689:function(e,t,l){"use strict";var s=l(5893);t.Z=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"relative w-full h-80 bg-fixed z-10",style:{background:"url(images/bigsky.png)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,s.jsx)("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack",children:(0,s.jsx)("div",{className:"bg-Black/5 w-full h-full",children:t})})})}},5764:function(e,t,l){"use strict";var s=l(5893);l(7294),t.Z=e=>{let{children:t,className:l="h-full w-full"}=e;return(0,s.jsx)("div",{className:"".concat(l," boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl"),children:t})}},4566:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(5764);t.Z=e=>{let{className:t}=e;return(0,s.jsx)(a.Z,{children:(0,s.jsxs)("div",{role:"status",className:"".concat(t," max-w-full card_stylings animate-pulse bg-EveningBlack self-center"),children:[(0,s.jsx)("div",{className:"h-2.5 rounded-full bg-Green/20 w-48 mb-4"}),(0,s.jsx)("div",{className:"h-2 rounded-full bg-Green/20 max-w-[365px] mb-2.5"}),(0,s.jsx)("div",{className:"h-2 rounded-full bg-Green/20 mb-2.5"}),(0,s.jsx)("div",{className:"h-2 rounded-full bg-Green/20 max-w-[330px] mb-2.5"}),(0,s.jsx)("div",{className:"h-2 rounded-full bg-Green/20 max-w-[400px] mb-2.5"}),(0,s.jsx)("div",{className:"h-2 rounded-full bg-Green/20 max-w-[360px]"}),(0,s.jsx)("span",{className:"sr-only",children:"Loading..."})]})})}},4370:function(e,t,l){"use strict";var s=l(5893),a=l(8193),n=l(5434);t.Z=()=>(0,s.jsx)("div",{id:"intro",className:"mt-4 mb-10 lg:mb-0",children:(0,s.jsxs)("div",{className:"flex h-10 items-center justify-between text-xs font-normal  ${textColor} py-4 px-2 md:px-4 w-full ${bgColor}",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"mr-1 text-base",children:(0,s.jsx)(a.XI4,{})}),(0,s.jsx)("span",{children:"2024 All Rights Reserved."})]}),(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsxs)("a",{href:"https://www.fiverr.com/codeworthy",target:"_blank",rel:"noreferrer",children:["Made with ❤️ by ",(0,s.jsx)("span",{className:"font-bold",children:"Monty-Asp"})]})}),(0,s.jsxs)("div",{className:"hidden md:flex items-center",children:[(0,s.jsx)("div",{className:"mr-1 text-base",children:(0,s.jsx)(n.h6V,{})}),(0,s.jsx)("div",{})]})]})})},3628:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return background}});var s=l(5893);l(7294);var a=l(5764),Background_Edu_Card=e=>{let t=e.data,l="dark"===e.theme?"text-Snow":"text-Black",n="dark"===e.theme?"bg-DeepNightBlack":"bg-Green";return(0,s.jsx)(a.Z,{className:"keepItEmpty",children:(0,s.jsxs)("div",{className:" ".concat(n," card_stylings transition px-8 py-10 opacity-70"),children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("div",{className:"flex-initial text-[17px] ".concat(l," font-medium"),children:t.title}),(0,s.jsxs)("div",{className:"flex justify-items-center justify-center ".concat(l," ").concat(n," ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal opacity-50 text-center"),children:[" ",t.year," "]})]}),(0,s.jsx)("div",{className:"text-xs ".concat(l," font-normal italic mt-1 "),children:t.degree}),(0,s.jsx)("div",{className:"".concat(l," text-sm font-normal mt-4 "),children:t.detail})]})})},Background_Exp_Card=e=>{let t=e.data,l="dark"===e.theme?"text-Snow":"text-MidNightBlack",n="dark"===e.theme?"bg-DeepNightBlack":"bg-Green";return(0,s.jsx)(a.Z,{children:(0,s.jsxs)("div",{className:"".concat(n," card_stylings transition px-8 py-10 opacity-70  "),children:[(0,s.jsx)("div",{className:"flex-initial text-[17px] ".concat(l," font-medium"),children:t.title}),(0,s.jsx)("div",{className:"text-sm ".concat(l," font-normal italic mt-1 "),children:t.role}),(0,s.jsx)("div",{className:"".concat(l," text-xs opacity-50 font-normal italic"),children:(0,s.jsx)("a",{href:"".concat(t.url),target:"_blank",rel:"noreferrer",children:t.url})}),(0,s.jsx)("div",{className:"".concat(l," text-sm font-normal mt-4 text-justify"),children:t.desc}),(0,s.jsxs)("div",{className:"flex justify-between ".concat(l," ").concat(n," w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50 "),children:[(0,s.jsx)("div",{children:t.year})," ",(0,s.jsx)("div",{children:t.location})]})]})})},n=l(9689),r=l(4370),c=l(8767),i=l(5121),d=l(4566),background=function(e){var t,l,a,o;let x=e.theme,{isLoading:m,error:u,data:h}=(0,c.useQuery)("background",()=>i.Z.get("api/background").then(e=>{let{data:t}=e;return t}).catch(e=>console.error("Error fetching testimonials:",e)));return(0,s.jsxs)(n.Z,{children:[(0,s.jsxs)("div",{className:"grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-y-4 order-2 md:order-1  md:mr-12",children:[(0,s.jsx)("div",{className:"mt-10 md:mt-0 text-xl text-Snow font-semibold",children:"Education"}),m?[1,2,3].map(e=>(0,s.jsx)(d.Z,{className:"p-8 h-full w-full relative"},"bg_".concat(e))):h&&(null===(l=h[0])||void 0===l?void 0:null===(t=l.eduCards)||void 0===t?void 0:t.map((e,t)=>(0,s.jsx)(Background_Edu_Card,{data:e,theme:x},t)))]}),(0,s.jsx)("div",{className:"order-1 md:order-2",children:(0,s.jsxs)("div",{className:"flex flex-col gap-y-4 md:ml-12",children:[(0,s.jsx)("div",{className:"md:pt-0 pt-4 text-xl text-Snow font-semibold",children:"Experience"}),m?[1,2,3].map(e=>(0,s.jsx)(d.Z,{className:"p-8 h-full w-full relative"},"bg_".concat(e))):h&&(null===(o=h[1])||void 0===o?void 0:null===(a=o.expCards)||void 0===a?void 0:a.map((e,t)=>(0,s.jsx)(Background_Exp_Card,{data:e,theme:x},t)))]})})]}),(0,s.jsx)(r.Z,{})]})}}},function(e){e.O(0,[228,617,121,774,888,179],function(){return e(e.s=9813)}),_N_E=e.O()}]);