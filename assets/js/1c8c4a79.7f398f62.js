"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3693],{4407:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var n=t(4848),i=t(8453);const r={title:"NPS",tags:["admin","nps"]},o=void 0,d={id:"docs/core/admin/features/nps",title:"NPS",description:"What does it do",source:"@site/docs/docs/01-core/admin/05-features/nps.md",sourceDirName:"docs/01-core/admin/05-features",slug:"/docs/core/admin/features/nps",permalink:"/docs/core/admin/features/nps",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/05-features/nps.md",tags:[{label:"admin",permalink:"/tags/admin"},{label:"nps",permalink:"/tags/nps"}],version:"current",frontMatter:{title:"NPS",tags:["admin","nps"]},sidebar:"docs",previous:{title:"useEnterprise",permalink:"/docs/core/admin/features/hooks/use-enterprise"},next:{title:"Introduction",permalink:"/docs/core/content-manager/intro"}},a={},h=[{value:"What does it do",id:"what-does-it-do",level:2},{value:"When do we show the survey?",id:"when-do-we-show-the-survey",level:2},{value:"Where data is submitted",id:"where-data-is-submitted",level:2},{value:"Hooks",id:"hooks",level:2},{value:"useNpsSurveySettings",id:"usenpssurveysettings",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"what-does-it-do",children:"What does it do"}),"\n",(0,n.jsx)(s.p,{children:"The NPS survey is shown to users to get their feedback about Strapi. It is based on a rating scale from 0 to 10, and we also invite users to provide additional comments."}),"\n",(0,n.jsx)(s.h2,{id:"when-do-we-show-the-survey",children:"When do we show the survey?"}),"\n",(0,n.jsx)(s.p,{children:'The NPS survey is only displayed to admin users who have selected the "Keep me updated" checkbox during registration. The survey is displayed after 5 minutes of activity.'}),"\n",(0,n.jsx)(s.p,{children:"The survey is shown to eligible users based on the following rules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If a user responds to the survey, the survey will be presented again within 90 days."}),"\n",(0,n.jsx)(s.li,{children:"If a user does not respond to the survey the first time after their last response, the survey will be presented again after 7 days."}),"\n",(0,n.jsx)(s.li,{children:"If a user does not respond to the survey for the second or subsequent time after their last response, the survey will be presented again after 90 days."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"where-data-is-submitted",children:"Where data is submitted"}),"\n",(0,n.jsxs)(s.p,{children:["The data is sent to this endpoint: ",(0,n.jsx)(s.code,{children:"https://analytics.strapi.io/submit-nps"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"hooks",children:"Hooks"}),"\n",(0,n.jsx)(s.h3,{id:"usenpssurveysettings",children:"useNpsSurveySettings"}),"\n",(0,n.jsxs)(s.p,{children:["This hook uses the ",(0,n.jsx)(s.code,{children:"usePersistentState"})," hook from the helper-plugin (more information available ",(0,n.jsx)(s.a,{href:"/docs/core/helper-plugin/hooks/use-persistent-state",children:"here"}),'). It is exported so that it can be used during the registration process to determine whether users have selected the "Keep me updated" checkbox.']})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var n=t(6540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);