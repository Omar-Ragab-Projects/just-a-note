import{r as n,c as i,a as e,F as f,e as h,w as p,v as c,o as d,t as b,p as g,f as x}from"./index-B8xV2pLB.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v=l=>(g("data-v-2cac45e2"),l=l(),x(),l),B={class:"validate"},S={class:"errors"},U={class:"error"},V={action:"post",method:"send"},C={class:"form-input"},F=v(()=>e("label",{for:""},"Username",-1)),w={class:"form-input"},E=v(()=>e("label",{for:""},"Subject",-1)),I={class:"form-input"},M=v(()=>e("label",{for:""},"Message",-1)),j={__name:"FormValidate",setup(l){const o=n(),r=n(),u=n(),t=n([]);function _(m){if(t.value=[],o.value||t.value.push("Username Can't Be Empty"),r.value||t.value.push("Subject Can't Be Empty"),u.value||t.value.push("Message Can't Be Empty"),o.value&&o.value.length>10&&t.value.push("Username Must Be Lower Than 10 Chars"),t.value.length==0)return!0;m.preventDefault()}return(m,a)=>(d(),i("div",B,[e("div",S,[(d(!0),i(f,null,h(t.value,s=>(d(),i("div",U,b(s),1))),256))]),e("form",V,[e("div",C,[F,p(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),class:"form-input"},null,512),[[c,o.value]])]),e("div",w,[E,p(e("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=s=>r.value=s),class:"form-input"},null,512),[[c,r.value]])]),e("div",I,[M,p(e("textarea",{class:"form-input","onUpdate:modelValue":a[2]||(a[2]=s=>u.value=s)},null,512),[[c,u.value]])]),e("input",{type:"submit",value:"Send",onClick:_})])]))}},L=y(j,[["__scopeId","data-v-2cac45e2"]]);export{L as default};
