import{r as i,c as a,a as o,w as h,v as k,b as c,h as m,F as f,e as x,o as n,t as T,n as b}from"./index-B8xV2pLB.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"app"},D={action:""},w=["disabled"],g={class:"tasks"},A=["onClick"],B=["onClick"],L={__name:"ToDoList",setup(V){const t=i(""),s=i([]);function r(){s.value.push({words:t.value,done:!1}),t.value=""}function u(l){s.value.splice(l,1)}function p(){s.value=[]}return(l,d)=>(n(),a("div",y,[o("form",D,[h(o("input",{type:"text",placeholder:"Add Your Task","onUpdate:modelValue":d[0]||(d[0]=e=>t.value=e)},null,512),[[k,t.value]]),o("button",{class:"add",onClick:c(r,["prevent"]),type:"button",disabled:!t.value}," Add Task ",8,w),s.value.length>1?(n(),a("button",{key:0,class:"dall",onClick:c(p,["prevent"])}," Delete All ")):m("",!0)]),(n(!0),a(f,null,x(s.value,(e,_)=>(n(),a("div",g,[o("div",{class:"task-text",onClick:v=>e.done=!e.done,style:b({"text-decoration":e.done?"line-through":""})},T(e.words),13,A),o("span",{onClick:v=>u(_)},"Delete",8,B)]))),256))]))}},N=C(L,[["__scopeId","data-v-1ab50812"]]);export{N as default};
