import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as c,c as u,a as t,k as d,o as v}from"./index-B8xV2pLB.js";const f={class:"app"},p={__name:"ToggleClass",setup(_){const o=c(""),l=c(!1);function n(){o.value=o.value?"":"selected"}function i(s){s.target.classList.toggle("selected")}function r(s,e){s.target.classList.toggle(e)}return(s,e)=>(v(),u("div",f,[t("div",{class:d(o.value),onClick:n},"First Method",2),t("div",{class:d({selected:l.value}),onClick:e[0]||(e[0]=a=>l.value=!l.value)}," Second Method ",2),t("div",{onClick:i},"Third Method"),t("div",{onClick:e[1]||(e[1]=a=>r(a,"selected"))},"Fourth Method")]))}},k=g(p,[["__scopeId","data-v-c4c7dede"]]);export{k as default};
