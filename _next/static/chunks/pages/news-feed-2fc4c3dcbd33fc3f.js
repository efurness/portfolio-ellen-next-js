(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{8435:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news-feed",function(){return s(3883)}])},9689:function(e,t,s){"use strict";var r=s(5893);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"relative w-full h-80 bg-fixed z-10",style:{background:"url(".concat("/portfolio-ellen-next-js","/images/bigsky.png)"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,r.jsx)("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full",children:(0,r.jsx)("div",{className:" w-full h-full",children:t})})})}},4370:function(e,t,s){"use strict";var r=s(5893),a=s(8193);t.Z=()=>(0,r.jsxs)("div",{id:"intro",className:"mt-4 mb-10 lg:mb-0",children:[(0,r.jsxs)("div",{className:"flex h-10 items-center justify-between text-xs font-normal  ${textColor} py-4 px-2 md:px-4 w-full ${bgColor}",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"mr-1 text-base",children:(0,r.jsx)(a.XI4,{})}),(0,r.jsx)("span",{children:"2024"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:["Made with ❤️  ",(0,r.jsx)("span",{className:"font-bold",children:" Monty-Asp"})]}),(0,r.jsx)("a",{href:"https://efurness.github.io/ellen-s-react-portfolio/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("span",{className:"text-right",children:(0,r.jsx)("img",{src:"images/react.png",alt:"react image"})})}),(0,r.jsx)("a",{href:"https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("span",{className:"text-right",children:(0,r.jsx)("img",{src:"images/storymap.png",alt:"story map image"})})}),(0,r.jsx)("a",{href:"https://efurness.github.io/ellen-s-react-portfolio/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("span",{className:"text-right",children:(0,r.jsx)("img",{src:"images/resume.png",alt:"resume image"})})}),(0,r.jsx)("a",{href:"https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("span",{className:"text-right",children:(0,r.jsx)("img",{src:"images/camera.png",alt:"camera image"})})})]}),(0,r.jsxs)("div",{className:"hidden md:flex items-center",children:[(0,r.jsx)("div",{className:"mr-1 text-base"}),(0,r.jsx)("div",{})]})]})},3883:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return news_feed}});var r=s(5893),a=s(9689),i=s(4370),l=s(7294),n=s(7317),c=s(1120),o=s(5697),d=s.n(o);let Article=e=>{var t,s;let a=e.article;e.theme;let i="dark"===e.theme?"bg-DeepNightBlack":"bg-sky-50";return(0,r.jsx)("div",{style:{maxWidth:800,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",border:"2px solid #66e48d",backgroundColor:"#ffffff",height:325},children:(0,r.jsx)("div",{className:"hover:saturate-150 ".concat(i),children:(0,r.jsx)("h6",{children:(0,r.jsxs)("a",{href:e.article.url,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#3f77b7"},children:[(0,r.jsx)("img",{src:(null===(s=a.multimedia)||void 0===s?void 0:null===(t=s[0])||void 0===t?void 0:t.url)?"".concat(a.multimedia[0].url):"https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",alt:"news-img"}),(0,r.jsx)("span",{className:"".concat(i," p-2 inline-block"),children:e.article.title})]})})})})};Article.propTypes={article:d().object.isRequired};let m=(0,c.Z)({card:{maxWidth:600,boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},media:{height:300}});function Articles(e){let{loading:t,articles:s}=e,a=m();return(0,r.jsx)(r.Fragment,{children:t?"Loading...":(0,r.jsx)("div",{className:a.root,children:(0,r.jsx)(n.Z,{container:!0,spacing:3,children:s.map(e=>(0,r.jsx)(n.Z,{item:!0,xs:12,sm:4,children:(0,r.jsx)(Article,{article:e})},e._id))})})})}Articles.propTypes={loading:d().bool.isRequired,articles:d().array.isRequired};var x=s(5121),news_feed=()=>{let[e,t]=(0,l.useState)(!1),[s,n]=(0,l.useState)([]),[c,o]=(0,l.useState)(function(){let e=new Date,t=e.getMonth()+1,s=e.getFullYear(),r=e.getDate(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return"".concat(a," ").concat(t,"/").concat(r,"/").concat(s)}());return(0,l.useEffect)(()=>{let getArticles=async()=>{t(!0);let e=await x.Z.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=P820OA3BVKJ4QezqHU7b85aAQkmjezfc");console.log(e);let s=e.data.results;s.length=6,n(s),t(!1)};getArticles()},[]),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("div",{className:"mt-10 md:mt-0 text-sm text-Snow font-serif text-right p-1",children:(0,r.jsx)("p",{children:c})}),(0,r.jsxs)("div",{className:"mt-10 md:mt-0 text-2xl text-Snow font-semibold text-center font-serif",children:[(0,r.jsxs)("div",{className:"p-4",children:["New York Times ",(0,r.jsx)("span",{className:"text-blue-300 font-bold animate-pulse font-serif",children:"Top Stories"})]}),(0,r.jsx)("div",{className:"mt-10 md:mt-0 text-sm text-Snow font-medium font-style: italic text-left font-serif",children:(0,r.jsx)(Articles,{loading:e,articles:s})})]}),(0,r.jsx)(i.Z,{})]})}}},function(e){e.O(0,[617,131,774,888,179],function(){return e(e.s=8435)}),_N_E=e.O()}]);