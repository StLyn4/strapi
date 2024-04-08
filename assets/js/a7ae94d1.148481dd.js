"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9883],{1574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),o=n(8453);const r={title:"Authentication",tags:["admin","auth"]},i=void 0,a={id:"docs/core/admin/features/authentication",title:"Authentication",description:"Authentication was previously non-reactive using localStorage or sessionStorage to store the information and the user. It was accessed by the now deprecated auth object imported from the helper-plugin. This didn't work well because we couldn't use it to correctly stop & fire requests that required users to be authenticated e.g. gettng project configurations.",source:"@site/docs/docs/01-core/admin/05-features/authentication.md",sourceDirName:"docs/01-core/admin/05-features",slug:"/docs/core/admin/features/authentication",permalink:"/docs/core/admin/features/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/05-features/authentication.md",tags:[{label:"admin",permalink:"/tags/admin"},{label:"auth",permalink:"/tags/auth"}],version:"current",frontMatter:{title:"Authentication",tags:["admin","auth"]},sidebar:"docs",previous:{title:"Develop",permalink:"/docs/core/admin/commands/develop"},next:{title:"useAdminRoles",permalink:"/docs/core/admin/features/hooks/use-admin-roles"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Authentication was previously non-reactive using ",(0,s.jsx)(t.code,{children:"localStorage"})," or ",(0,s.jsx)(t.code,{children:"sessionStorage"})," to store the information and the user. It was accessed by the now deprecated ",(0,s.jsx)(t.code,{children:"auth"})," object imported from the ",(0,s.jsx)(t.code,{children:"helper-plugin"}),". This didn't work well because we couldn't use it to correctly stop & fire requests that required users to be authenticated e.g. gettng project configurations."]}),"\n",(0,s.jsxs)(t.p,{children:["However, we now store the token in state along with the user & this can be passed around the application via the ",(0,s.jsx)(t.code,{children:"useAuth"})," hook. For backwards compatability in ",(0,s.jsx)(t.code,{children:"v4"})," we still use the ",(0,s.jsx)(t.code,{children:"auth"})," object but this will likely be removed in a later version of strapi."]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"useAuth"})," hook is built on top of a custom ",(0,s.jsx)(t.code,{children:"createContext"}),' version which asserts the context is there and throws an error if this is not the case.\nTherefore the hook expects a "consumer name" to be passed so a helpful error message can be provided. It is also built using the ',(0,s.jsx)(t.code,{children:"use-context-selector"})," library meaning we can also pass a selector function to the hook to select a specific part of the context."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const token = useAuth('App', (state) => state.token); // token will be a string or null\n"})}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"interface SanitizedAdminUser {\n  blocked: boolean;\n  email?: string;\n  firstname?: string;\n  isActive: boolean;\n  lastname?: string;\n  preferedLanguage?: string;\n  registrationToken?: string | null;\n  roles: Array<{ name: string; code: string; description?: string }>;\n  username?: string;\n}\n\ninterface AuthContext {\n  login: (body: { email: string; password: string; rememberMe: boolean }) =>\n    | {\n        data: {\n          token: string;\n          user: Omit<SanitizedAdminUser, 'permissions'>;\n        };\n      }\n    | {\n        error: BaseQueryError | SerializedError;\n      };\n  logout: () => Promise<void>;\n  setToken: (token: string | null) => void;\n  token: string | null;\n  user?: SanitizedAdminUser;\n}\n\ntype UseAuth = <Selected>(\n  consumerName: string,\n  selector: (state: AuthContext) => Selected\n) => Selected;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);