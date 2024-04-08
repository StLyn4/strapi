"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6013],{5960:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(4848),n=i(8453);const r={title:"Custom fields",tags:["content-type-builder","plugins"]},l="Custom fields",o={id:"rfcs/custom-fields",title:"Custom fields",description:"Summary",source:"@site/docs/rfcs/01-custom-fields.md",sourceDirName:"rfcs",slug:"/rfcs/custom-fields",permalink:"/rfcs/custom-fields",draft:!1,unlisted:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/rfcs/01-custom-fields.md",tags:[{label:"content-type-builder",permalink:"/tags/content-type-builder"},{label:"plugins",permalink:"/tags/plugins"}],version:"current",sidebarPosition:1,frontMatter:{title:"Custom fields",tags:["content-type-builder","plugins"]},sidebar:"rfcs",previous:{title:"Introduction",permalink:"/rfcs/intro"},next:{title:"RFC Example Doc",permalink:"/rfcs/example"}},a={},d=[{value:"Summary",id:"summary",level:2},{value:"Detailed design",id:"detailed-design",level:2},{value:"Server",id:"server",level:3},{value:"Admin",id:"admin",level:3},{value:"Packaging",id:"packaging",level:3},{value:"Example",id:"example",level:3},{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"custom-fields",children:"Custom fields"}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"Custom fields provide a way to replace the inputs of existing Strapi types to improve the content editing experience."}),"\n",(0,s.jsx)(t.h2,{id:"detailed-design",children:"Detailed design"}),"\n",(0,s.jsx)(t.p,{children:"A custom field needs to be registered in both the admin and server."}),"\n",(0,s.jsx)(t.h3,{id:"server",children:"Server"}),"\n",(0,s.jsxs)(t.p,{children:["To register a custom field on the server, see ",(0,s.jsx)(t.a,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html#registering-a-custom-field-on-the-server",children:"documentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The custom field will be added to Strapi during the server ",(0,s.jsx)(t.a,{href:"https://docs.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/server.html#register",children:"register lifecycle"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"type: customField"})," saved on the schema.json for a content-type or component is converted to the underlying Strapi data type by calling the ",(0,s.jsx)(t.a,{href:"https://github.com/strapi/strapi/blob/a8f807d27ebc9c8b9b335e885154a06c60a896ae/packages/core/strapi/lib/Strapi.js#L395",children:"convertCustomFieldType function"})," as soon as the app starts during the ",(0,s.jsx)(t.code,{children:"register"})," lifecycle, right after all custom fields have been loaded."]}),"\n",(0,s.jsx)(t.h3,{id:"admin",children:"Admin"}),"\n",(0,s.jsxs)(t.p,{children:["To register a custom field to the admin panel, see ",(0,s.jsx)(t.a,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html#registering-a-custom-field-in-the-admin-panel",children:"documentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["A custom field being saved on a content-type or component will have it\u2019s underlying data type converted from the underlying data type to ",(0,s.jsx)(t.code,{children:"type: customField"})," just before save in the ",(0,s.jsx)(t.a,{href:"https://github.com/strapi/strapi/blob/33debd57010667a3fc5dfa343a673206cfb956e1/packages/core/content-type-builder/admin/src/components/DataManagerProvider/utils/cleanData.js#L97-L100",children:"formatAttributes function"})," of the ",(0,s.jsx)(t.code,{children:"cleanData"})," util"]}),"\n",(0,s.jsx)(t.h3,{id:"packaging",children:"Packaging"}),"\n",(0,s.jsx)(t.p,{children:"A custom field can be registered in either a Strapi application or Strapi plugin. However, they can only be shared through plugins by publishing the package on npm."}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/strapi/strapi/blob/main/packages/plugins/color-picker/",children:"Color Picker"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/WalkingPizza/strapi-plugin-shopify-fields/",children:"Shopify plugin"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"We do not yet offer the ability to create a custom database type in Strapi."}),"\n",(0,s.jsx)(t.li,{children:"When extending a custom field\u2019s base and advanced forms in the Content-type Builder, it is not yet possible to import custom input components."}),"\n",(0,s.jsx)(t.li,{children:"We do not allow custom fields to use the relation, component, dynamic zone and media types."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,s.jsx)(t.p,{children:"We consider making special packages for Custom fields but :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Custom fields would not have been able to access other features from the plugin API. While that is not always required, it also enables custom fields that do need it to implement more advanced behaviors. For example, a custom field can also use injection zones if needed."}),"\n",(0,s.jsx)(t.li,{children:"Introducing a new custom field type of package would have required a new loader in Strapi, and a new section and review processes on the marketplace, which would have made the feature more complex to ship."}),"\n",(0,s.jsx)(t.li,{children:"The overkill aspect of the plugin API for a simple custom field could be mitigated by adding a new plugin generator that only created the files required for a custom field."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://strapi.io/custom-fields",children:"Custom Fields page"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",children:"Docs"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/strapi/rfcs/pull/40",children:"non-technical RFC"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/strapi/rfcs/pull/42",children:"technical RFC"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var s=i(6540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);