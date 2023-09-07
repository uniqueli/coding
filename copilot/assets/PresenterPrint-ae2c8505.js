import{d as _,u as d,a as p,c as m,b as u,e as n,f as t,t as s,g as a,F as h,r as f,n as g,h as v,o as l,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-221c33fc.js";import{N as w}from"./NoteDisplay-5766638e.js";const S={class:"m-4"},V={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>v.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:g(a(k))},[t("div",S,[t("div",V,[t("h1",D,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(l(!0),n(h,null,f(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(a(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),H])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",j)):N("v-if",!0)]))),128))])],4))}}),A=P(z,[["__file","/Users/uniqueli/Documents/ShareCopilot/copilot/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
