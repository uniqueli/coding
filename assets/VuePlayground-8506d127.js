import{g as _,h as m,i as f,s,j as g,k as y,l as R,m as a,C as h,_ as r}from"./app-123ab3ff.js";const w=e=>JSON.parse(decodeURIComponent(e));var V=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const u=m(),i=f(!0),t=s(),l=s(),n=s(),o=g(()=>y({},u,w(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([r(()=>import("./vue-repl-010b9af2.js"),["assets/vue-repl-010b9af2.js","assets/app-123ab3ff.js","assets/utils-a5e1dbae-143be013.js"]),r(()=>import("./codemirror-editor-12e56d85.js"),["assets/codemirror-editor-12e56d85.js","assets/utils-a5e1dbae-143be013.js","assets/app-123ab3ff.js"])]);t.value=p,n.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),i.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[i.value?a(h,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:n.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};
