(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(277)}])},9689:function(e,t,s){"use strict";var a=s(5893);t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"relative w-full h-80 bg-fixed z-10",style:{background:"url(".concat("/portfolio-ellen-next-js","/images/bigsky.png)"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,a.jsx)("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full",children:(0,a.jsx)("div",{className:" w-full h-full",children:t})})})}},5764:function(e,t,s){"use strict";var a=s(5893);s(7294),t.Z=e=>{let{children:t,className:s="h-full w-full"}=e;return(0,a.jsx)("div",{className:"".concat(s," boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl"),children:t})}},4370:function(e,t,s){"use strict";var a=s(5893),n=s(8193);t.Z=()=>(0,a.jsxs)("div",{id:"intro",className:"mt-4 mb-10 lg:mb-0",children:[(0,a.jsxs)("div",{className:"flex h-10 items-center justify-between text-xs font-normal  ${textColor} py-4 px-2 md:px-4 w-full ${bgColor}",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-1 text-base",children:(0,a.jsx)(n.XI4,{})}),(0,a.jsx)("span",{children:"2024"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:["Made with ❤️ ",(0,a.jsx)("span",{className:"font-bold",children:" \xa0 Monty-Asp"})]}),(0,a.jsx)("a",{href:"https://efurness.github.io/ellen-s-react-portfolio/",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/react.png",alt:"react image"})})}),(0,a.jsx)("a",{href:"https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/storymap.png",alt:"story map image"})})}),(0,a.jsx)("a",{href:"./Resume2024.pdf",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/resume.png",alt:"resume image"})})}),(0,a.jsx)("a",{href:"https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html",target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"text-right",children:(0,a.jsx)("img",{src:"images/camera.png",alt:"camera image"})})})]}),(0,a.jsxs)("div",{className:"hidden md:flex items-center",children:[(0,a.jsx)("div",{className:"mr-1 text-base"}),(0,a.jsx)("div",{})]})]})},3481:function(e,t,s){"use strict";var a=s(5893),n=s(7294);t.Z=()=>{let[e,t]=(0,n.useState)(null),[s,i]=(0,n.useState)("");return(0,n.useEffect)(()=>{let fetchApi=async()=>{let e="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&units=imperial&appid=c8f8824f82f862c7696a070f2a1a8586"),a=await fetch(e);console.log(a);let n=await a.json();console.log(n),t(n.main)};fetchApi()},[s]),(0,a.jsxs)("div",{className:"p-4 font-serif text-right indent-1",children:[(0,a.jsx)("h1",{className:"text-white pr-5",children:"Temps Today"}),(0,a.jsx)("input",{type:"search",className:"InputField indent-1",onChange:e=>{i(e.target.value.toLocaleUpperCase())}}),e?(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"text-blue-900",children:[(0,a.jsx)("h2",{className:"text-blue-900",children:s}),(0,a.jsxs)("h1",{children:[Math.round(e.temp),"\xb0 F"]}),(0,a.jsxs)("h6",{className:"text-sm",children:["low ",Math.round(e.temp_min),"\xb0 | high \xa0",Math.round(e.temp_max),"\xb0"]})]})}):(0,a.jsx)("div",{children:(0,a.jsx)("h4",{className:"text-white pr-5",children:"Enter your city"})})]})}},277:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return pages}});var a=s(5893),n=s(4370),i=s(5459),r=s.n(i),l=s(9689),o=s(6261),HomeComponents_Banner=e=>{let t="dark"===e.theme?"text-Snow":"text-Black",s="dark"===e.theme?"bg-LightGray/10":"";e.theme;let n=(e.theme,"text-Snow");return(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16",children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-1",children:[(0,a.jsx)("span",{className:"text-base md:text-lg text-Green font-bold",children:"3+"}),(0,a.jsx)("span",{className:"text-xs ".concat(n),children:"REACT Projects"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-x-1",children:[(0,a.jsx)("span",{className:"text-base md:text-lg text-Green font-bold",children:"2+"}),(0,a.jsx)("span",{className:"text-xs ".concat(n),children:"Certificates"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-x-1",children:[(0,a.jsx)("span",{className:"text-base md:text-lg text-Green font-bold",children:"3+"}),(0,a.jsx)("span",{className:"text-xs ".concat(n),children:"Honors & Awards"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-x-1",children:[(0,a.jsx)("span",{className:"text-base md:text-lg text-Green font-bold",children:"6+"}),(0,a.jsx)("span",{className:"text-xs ".concat(n),children:"GIS Projects"})]})]}),(0,a.jsx)("div",{className:"absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full ",children:(0,a.jsx)("div",{className:"".concat(s," w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block"),children:(0,a.jsx)("div",{className:"flex items-center md:items-center md:justify-around",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("h1",{className:"text-3xl sm:text-4xl xl:text-5xl ".concat(n," font-bold"),children:"Ellen D Furness"})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"".concat(t," py-4 pb-4 text-xs h-20 lg:h-auto"),children:(0,a.jsxs)("span",{children:["<",(0,a.jsx)("span",{className:"text-Green sm:text-base xl:text-lg font-bold",children:"div"}),">"," ",(0,a.jsxs)("span",{className:"".concat(n," sm:text-xl xl:text-2xl font-bold"),children:[" ","I work with"," ",(0,a.jsx)("span",{className:"inline-block",children:(0,a.jsx)(r(),{options:{strings:["ArcGIS Pro","REACT","NEXTjs","REACT Leaflet","Tailwind"],autoStart:!0,loop:!0}})})]})," ","</",(0,a.jsx)("span",{className:"text-Green sm:text-base xl:text-lg font-bold",children:"div"}),">"," "]})})}),(0,a.jsx)(o.rU,{to:"",spy:!0,smooth:!0,duration:500,offset:-50,className:"button bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-purple-500",children:"Explore"})]})})})})]})},c=s(5764),Expertise_ExpertiseCard=e=>{let t=e.data,s="dark"===e.theme?"text-Snow":"text-Black",n="dark"===e.theme?"bg-LightGray/10":"bg-green-400";return(0,a.jsx)(c.Z,{children:(0,a.jsxs)("div",{className:"".concat(n," h-full space-y-2 p-8 card_stylings"),children:[(0,a.jsx)("div",{className:"".concat(s),children:t.title}),(0,a.jsx)("div",{className:"text-sm ".concat(s," font-normal"),children:t.desc})]})})};let d=[{id:0,title:"GIS",desc:"Proficient in GIS Software: ArcGIS Online, ArcGIS Pro and ArcGIS Desktop, additionally REACT Leaflet and ArcGIS API for Javascript -- building mapping applications for the Web. Utilized Story Maps and Experience Builder through ArcGIS Online."},{id:1,title:"Full Stack Web Development",desc:"I am a skilled in Full-stack Javascript development with experience in building web applications using ExpressJS, ReactJS, NextJS and NodeJS. With my expertise, I can deliver dynamic and efficient web solutions. "},{id:2,title:"Designing (UI/UX)",desc:"I am have a certificate in Web Development using design software such as Dreamweaver, PhotoScape X, and Adobe Illustrator. CSS and TailwindCSS have allowed me to to continously develop my creative skills."},{id:3,title:"Github/VSCode",desc:"Experience using GitHub for developing REACT and NEXT applications and using GitHub actions to publish my sites.  My Bootcamp Projects consisted of multiple pull requests to simplify the process of development. Continuous integration ensures up-to-date code. GitHub and VSCode are imperative to my success as a developer."},{id:4,title:"Open Source Contributor",desc:"Open Source is the future. I usually take some time on weekend and contribute towards an opensource project. It gives me opportunity to learn from best developer's practices."},{id:5,title:"Python for GIS",desc:"Geospatial Training in Python for ArcGIS Pro.  Use of Python Window, Notebooks in ArcGIS Pro, Jupyter Notebook, an open-source web application to create documents that contain live Python code and perform analysis and immediately view results in a geographic context"}];var Expertise_MyExpertise=e=>{let t=e.theme;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"px-2 md:px-8 py-4 text-lg font-bold text-LightGray",children:"My Expertise"}),(0,a.jsx)("div",{className:"grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ",children:d.map((e,s)=>(0,a.jsx)(Expertise_ExpertiseCard,{data:e,theme:t},s))})]})};s(7294);var Recommendations_RecommendationCard=e=>{let t=e.data,s="dark"===e.theme?"text-Snow":"text-Black",n="dark"===e.theme?"bg-LightGray/10":"bg-green-400";return(0,a.jsx)(c.Z,{children:(0,a.jsxs)("div",{className:"".concat(n," p-8 h-full relative card_stylings transition"),children:[(0,a.jsx)("img",{src:null==t?void 0:t.image,className:"absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0"}),(0,a.jsx)("div",{className:" ".concat(s," underline italic"),children:(0,a.jsx)("a",{href:null==t?void 0:t.linkednURL,target:"_blank",rel:"noreferrer",children:null==t?void 0:t.name})}),(0,a.jsx)("div",{className:"text-xs ".concat(s," italic mt-1"),children:null==t?void 0:t.designation}),(0,a.jsx)("div",{className:"text-sm mt-2 ".concat(s," font-normal"),children:null==t?void 0:t.view})]})})};let m=[{id:0,name:"Cynthia K. Godoy, NCIDQ_Principal",image:"images/cynthia.png",designation:"React JS | NEXT JS | Node | GraphQL",view:" I am delighted to wholeheartedly recommend my friend from Web Development bootcamp for her pursuit of a career in GIS.  Her persistance is truly commendable as she consistently strives for excellence in every endeavor. What sets her apart is an unsatiable desire to keep learning, a trait that extends beyond the norm.  Since our school days concluded she digs deeper into the world of programming, devouring at least seven books on the subject.  Her commitment to continuous growth is not just impressive but also inspiring.  I am confident that her passion and dedication will make her an invaluable asset to any GIS team. \uD83D\uDC4D! \uD83C\uDF1F",linkednURL:"https://www.linkedin.com/in/cynthia-godoy-96951845/"},{id:1,name:"Patricia F",image:"images/pup.png",designation:"Design",view:"Ellen is quite knowledgable about GIS and Web Development having created many apps using React Leaflet, REACT, NEXTjs, and MapView.  A common thread is her outstanding map development as seen in GIS StoryMap and Experience Builder.  To combine GIS, Biology, and Web makes her very appealing candidate for an organization \uD83C\uDF1F",linkednURL:""},{id:2,name:"Mrs. Shelley Levine",image:"images/Romeo.jpg",designation:"Cranial Sacral Therapist | Trauma Recovery Specialist | Life Coach",view:"As a close friend and professional confidant, I have experienced Ellen as a very bright, productive ambitious person, who diligently works always up to a new challenge. Ellen not only learns new technologies in depth with great speed, she also raises the bar as her standards are high and never cease to reflect her superlative talent! My field as a Holistic practitioner, I meet a wide variety of people. Ellen is most impressive and would undoubtedly be a great asset for the fortunate company that hires Ellen.\uD83C\uDF1F"}];var Recommendations_Recommendations=e=>{let t=e.theme;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"px-2 md:px-8 py-4 text-lg font-bold text-LightGray",children:"Recommendations"}),(0,a.jsx)("div",{className:"grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8",children:m.map((e,s)=>(0,a.jsx)(Recommendations_RecommendationCard,{data:e,theme:t},s))})]})},h=s(3481),pages=e=>(0,a.jsxs)("div",{className:"Home-Page -z-10",children:[(0,a.jsx)(HomeComponents_Banner,{theme:e.theme,setTheme:e.setTheme}),(0,a.jsx)(Expertise_MyExpertise,{theme:e.theme,setTheme:e.setTheme}),(0,a.jsx)(Recommendations_Recommendations,{theme:e.theme,setTheme:e.setTheme}),(0,a.jsx)(h.Z,{}),(0,a.jsx)(n.Z,{theme:e.theme,setTheme:e.setTheme})]})}},function(e){e.O(0,[617,880,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);