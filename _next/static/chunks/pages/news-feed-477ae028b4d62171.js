(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{8435:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news-feed",function(){return s(3883)}])},9689:function(e,t,s){"use strict";var a=s(5893);t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"relative w-full h-80 bg-fixed z-10",style:{background:"url(".concat("/portfolio-ellen-next-js","/images/bigsky.png)"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,a.jsx)("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full",children:(0,a.jsx)("div",{className:" w-full h-full",children:t})})})}},4370:function(e,t,s){"use strict";var a=s(5893),r=s(8193);t.Z=()=>(0,a.jsxs)("div",{id:"intro",className:"mt-4 mb-10 lg:mb-0",children:[(0,a.jsxs)("div",{className:"flex h-10 items-center justify-between text-xs font-normal  ${textColor} py-4 px-2 md:px-4 w-full ${bgColor}",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-1 text-base",children:(0,a.jsx)(r.XI4,{})}),(0,a.jsx)("span",{children:"2024"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:["Made with ❤️ ",(0,a.jsx)("span",{className:"font-bold",children:" \xa0 Monty-Asp"})]}),(0,a.jsx)("a",{href:"https://efurness.github.io/ellen-s-react-portfolio/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/react.png",alt:"react image"})})}),(0,a.jsx)("a",{href:"https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/storymap.png",alt:"story map image"})})}),(0,a.jsx)("a",{href:"./Resume2024.pdf",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/resume.png",alt:"resume image"})})}),(0,a.jsx)("a",{href:"https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/camera.png",alt:"camera image"})})})]}),(0,a.jsxs)("div",{className:"hidden md:flex items-center",children:[(0,a.jsx)("div",{className:"mr-1 text-base"}),(0,a.jsx)("div",{})]})]})},3481:function(e,t,s){"use strict";var a=s(5893),r=s(7294);t.Z=e=>{let[t,s]=(0,r.useState)(null),[i,n]=(0,r.useState)("");return(0,r.useEffect)(()=>{if(""===i)return;let fetchApi=async()=>{let e="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=imperial&appid=c8f8824f82f862c7696a070f2a1a8586"),t=await fetch(e);if(console.log(t),!1===t.ok)return;let a=await t.json();console.log(a),s(a)};fetchApi().catch(e=>{console.error("Error:",e)})},[i]),(0,a.jsxs)("div",{className:"p-4 font-serif text-left indent-1",children:[(0,a.jsx)("h1",{className:"".concat("dark"===e?"text-Snow":"text-green-300"),children:"Temps \xb0 \xa0Today"}),(0,a.jsx)("input",{type:"search",className:"InputField indent-1 text-sm ".concat("dark"===e?"text-Snow":"text-blue-600"),placeholder:"Enter City Name ...",onChange:e=>{n(e.target.value.toLocaleUpperCase())}}),t?(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"max-w-sm w-40 lg:max-w-40 lg:flex bg-green-200 opacity-80 text-left",children:(0,a.jsxs)("div",{className:"text-blue-900",children:[(0,a.jsx)("h2",{className:"text-blue-900",children:i}),(0,a.jsxs)("h2",{children:[Math.round(t.main.temp),"\xb0 F"]}),(0,a.jsxs)("h6",{className:"text-sm",children:["low ",Math.round(t.main.temp_min),"\xb0 | high \xa0",Math.round(t.main.temp_max),"\xb0"]}),(0,a.jsx)("h6",{children:t.weather[0].description}),(0,a.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),alt:"weather status icon"})]})}),(0,a.jsx)("div",{})]}):(0,a.jsx)("div",{})]})}},3883:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return news_feed}});var a=s(5893),r=s(9689),i=s(4370),n=s(7294),l=s(7317),c=s(1120),o=s(5697),d=s.n(o);let Article=e=>{var t,s;let{article:r,theme:i}=e;return(0,a.jsx)("div",{className:"".concat("dark"===i?"bg-DeepNightBlack":"bg-sky-50"),style:{maxWidth:800,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",border:"2px solid #66e48d",height:325},children:(0,a.jsx)("div",{className:"hover:saturate-150",children:(0,a.jsx)("h6",{children:(0,a.jsxs)("a",{className:"".concat("dark"===i?"text-Snow":"text-blue-600"),href:r.url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:[(0,a.jsx)("img",{src:(null===(s=r.multimedia)||void 0===s?void 0:null===(t=s[0])||void 0===t?void 0:t.url)?"".concat(r.multimedia[0].url):"https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",alt:"news-img"}),(0,a.jsx)("span",{className:"p-2 inline-block",children:r.title})]})})})})};Article.propTypes={article:d().object.isRequired};let m=(0,c.Z)({card:{maxWidth:600,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}});function Articles(e){let{loading:t,articles:s,theme:r}=e,i=m();return(0,a.jsx)(a.Fragment,{children:t?"Loading...":(0,a.jsx)("div",{className:i.root,children:(0,a.jsx)(l.Z,{container:!0,spacing:3,children:s.map(e=>(0,a.jsx)(l.Z,{item:!0,xs:12,sm:4,children:(0,a.jsx)(Article,{article:e,theme:r})},e._id))})})})}Articles.propTypes={loading:d().bool.isRequired,articles:d().array.isRequired};var x=s(3481),h=s(5121),news_feed=e=>{let[t,s]=(0,n.useState)(!1),[l,c]=(0,n.useState)([]),[o,d]=(0,n.useState)(function(){let e=new Date,t=e.getMonth()+1,s=e.getFullYear(),a=e.getDate(),r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return"".concat(r," ").concat(t,"/").concat(a,"/").concat(s)}()),m="dark"===e.theme?"text-Snow":"text-green-300";return(0,n.useEffect)(()=>{let getArticles=async()=>{s(!0);let e=await h.Z.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=P820OA3BVKJ4QezqHU7b85aAQkmjezfc");console.log(e);let t=e.data.results;t.length=6,c(t),s(!1)};getArticles()},[]),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("div",{className:"mt-10 md:mt-0 text-md text-Snow font-serif text-right p-1",children:o}),(0,a.jsx)("div",{className:"mt-10 md:mt-0 text-2xl text-Snow  text-center",children:(0,a.jsxs)("div",{className:"font-serif font-semibold ".concat(m),children:["New York Times"," ",(0,a.jsx)("span",{className:"text-blue-300 font-bold animate-pulse font-serif",children:"Top Stories"}),(0,a.jsx)("br",{})]})}),(0,a.jsx)(x.Z,{theme:e.theme}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"mt-10 md:mt-0 text-sm text-Snow font-style: italic text-left",children:(0,a.jsx)(Articles,{loading:t,articles:l,theme:e.theme})}),(0,a.jsx)(i.Z,{})]})}}},function(e){e.O(0,[617,131,774,888,179],function(){return e(e.s=8435)}),_N_E=e.O()}]);