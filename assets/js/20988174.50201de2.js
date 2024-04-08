"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6926],{1703:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(4848),s=i(8453),r=i(9434);const a={title:"Startup Logger",slug:"/api/StartupLogger",tags:["module","private"],toc_min_heading_level:2,toc_max_heading_level:3},o="API",l={id:"api/startup-logger",title:"Startup Logger",description:"Current state: Stable",source:"@site/docs/api/startup-logger.mdx",sourceDirName:"api",slug:"/api/StartupLogger",permalink:"/api/StartupLogger",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/api/startup-logger.mdx",tags:[{label:"module",permalink:"/tags/module"},{label:"private",permalink:"/tags/private"}],version:"current",frontMatter:{title:"Startup Logger",slug:"/api/StartupLogger",tags:["module","private"],toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"api",previous:{title:"EventHub (WIP)",permalink:"/api/EventHub"},next:{title:"StrapiFS (WIP)",permalink:"/api/StrapiFS"}},d={},c=[{value:"Module: Startup Logger",id:"module-startup-logger",level:2},{value:"<code>logStats()</code>",id:"logstats",level:3},{value:"<code>logFirstStartupMessage()</code>",id:"logfirststartupmessage",level:3},{value:"<code>logDefaultStartupMessage()</code>",id:"logdefaultstartupmessage",level:3},{value:"<code>logStartupMessage({ isInitialized })</code>",id:"logstartupmessage-isinitialized-",level:3}];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Current state: ",(0,n.jsx)(t.strong,{children:"Stable"})]})}),"\n",(0,n.jsx)(t.p,{children:"This module is a simple logger for starting up Strapi with some useful information."}),"\n",(0,n.jsx)(t.h2,{id:"module-startup-logger",children:"Module: Startup Logger"}),"\n",(0,n.jsx)(t.h3,{id:"logstats",children:(0,n.jsx)(t.code,{children:"logStats()"})}),"\n",(0,n.jsx)(t.p,{children:"This log will display information about the instance of Strapi. The time launched, how many times it took and important configuration information."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:" Project information\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Time               \u2502 Wed Jan 01 2000 00:00:01 GMT+0200 (Central Euro\u2026 \u2502\n\u2502 Launched in        \u2502 2000 ms                                          \u2502\n\u2502 Environment        \u2502 development                                      \u2502\n\u2502 Process PID        \u2502 42                                               \u2502\n\u2502 Version            \u2502 4.9.0 (node v18.12.1)                            \u2502\n\u2502 Edition            \u2502 Enterprise                                       \u2502\n\u2502 Database           \u2502 postgres                                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,n.jsx)(t.h3,{id:"logfirststartupmessage",children:(0,n.jsx)(t.code,{children:"logFirstStartupMessage()"})}),"\n",(0,n.jsx)(t.p,{children:"This log will display the first time Strapi project is launched. It will ask the user to create its first admin user in the admin panel."}),"\n",(0,n.jsx)(t.h3,{id:"logdefaultstartupmessage",children:(0,n.jsx)(t.code,{children:"logDefaultStartupMessage()"})}),"\n",(0,n.jsx)(t.p,{children:"Default message to display when the Strapi server is started."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:" Actions available\n\nWelcome back!\nTo manage your project \ud83d\ude80, go to the administration panel at:\nhttp://localhost:1337/admin\n\nTo access the server \u26a1\ufe0f, go to:\nhttp://localhost:1337\n"})}),"\n",(0,n.jsx)(t.h3,{id:"logstartupmessage-isinitialized-",children:(0,n.jsx)(t.code,{children:"logStartupMessage({ isInitialized })"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"isInitialized"}),": ",(0,n.jsx)(r.A,{children:"Boolean"})," Has the Strapi project already been initialized?"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Will display the correct start-up message according to the specified boolean."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Can be disabled by setting ",(0,n.jsx)(t.code,{children:"STRAPI_HIDE_STARTUP_MESSAGE"})," to ",(0,n.jsx)(t.code,{children:"true"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9434:(e,t,i)=>{i.d(t,{A:()=>s});i(6540);var n=i(4848);function s(e){let{children:t}=e;return(0,n.jsxs)("span",{style:{color:"#017501"},children:["<",t,">"]})}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);