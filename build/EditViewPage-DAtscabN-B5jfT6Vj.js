import{ap as N,aP as O,u as k,o as G,cF as Q,cI as U,cC as Y,r as C,j as e,P as d,bb as _,_ as q,ey as H,ez as $,eA as m,eB as j,S as c,eC as J,eD as K,d as W,bo as X,v as Z,cA as ee,F as P,B as te,eE as se,cz as ae}from"./strapi-BCf4qKUQ.js";import{a as ne,f as ie,t as re,g as I}from"./Field-D-mgn1tH-Uar7pC0s.js";import"./Relations-BIGPMSW4-CUN6Jc3j.js";import"./useDragAndDrop-DdHgKsqq-BwbFO4DX.js";import"./relations-BlpLgngh-CWR4ALj5.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-UjqQA0Iv.js";import"./objects-D6yBsdmx-CPoJWK6s.js";import"./useDebounce-DmuSJIF3-DVJEnbRd.js";const oe=a=>C.useEffect(a,de),de=[],S=({layout:a})=>e.jsx(P,{direction:"column",alignItems:"stretch",gap:6,children:a.map((n,o)=>{if(n.some(s=>s.some(t=>t.type==="dynamiczone"))){const[s]=n,[t]=s;return e.jsx(c.Root,{gap:4,children:e.jsx(c.Item,{col:12,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(I,{...t})})},t.name)}return e.jsx(te,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150",children:e.jsx(P,{direction:"column",alignItems:"stretch",gap:6,children:n.map((s,t)=>e.jsx(c.Root,{gap:4,children:s.map(({size:r,...u})=>e.jsx(c.Item,{col:r,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(I,{...u})},u.name))},t))})},o)})}),ce=()=>{const a=N(),[{query:{status:n}},o]=O({status:"draft"}),{formatMessage:s}=k(),{toggleNotification:t}=G(),{document:r,meta:u,isLoading:R,schema:l,components:g,collectionType:T,id:v,model:D,hasError:A}=Q(),h=l?.options?.draftAndPublish??!1;oe(()=>{a?.state&&"error"in a.state&&t({type:"danger",message:a.state.error,timeout:5e3})});const B=U("EditViewPage",i=>i.isLoading),x=T===se,p=!v&&!x,{isLoading:F,edit:{layout:b,settings:{mainField:f}}}=Y(D),{isLazyLoading:M}=ne([]),w=B||R||F||M,L=C.useMemo(()=>{if(!r&&!p&&!x||!l)return;const i=r?.id?r:ie(l,g);return re(l,g)(i)},[r,p,x,l,g]);if(A)return e.jsx(d.Error,{});if(w&&!r?.documentId)return e.jsx(d.Loading,{});if(!L)return e.jsx(d.Error,{});const z=i=>{(i==="published"||i==="draft")&&o({status:i},"push",!0)},y=f!=="id"&&r?.[f]?r[f]:"Untitled";return e.jsxs(_,{paddingLeft:10,paddingRight:10,children:[e.jsx(d.Title,{children:`${y}`}),e.jsx(q,{disabled:h&&n==="published",initialValues:L,method:p?"POST":"PUT",validate:(i,V)=>H(l?.attributes,g,{status:n,...V}).validate(i,{abortEarly:!1}),children:({resetForm:i})=>e.jsxs(e.Fragment,{children:[e.jsx($,{isCreating:p,status:h?ue(r,u):void 0,title:y}),e.jsxs(m.Root,{variant:"simple",value:n,onValueChange:z,children:[e.jsx(m.List,{"aria-label":s({id:j("containers.edit.tabs.label"),defaultMessage:"Document status"}),children:h?e.jsxs(e.Fragment,{children:[e.jsx(E,{value:"draft",children:s({id:j("containers.edit.tabs.draft"),defaultMessage:"draft"})}),e.jsx(E,{disabled:!u||u.availableStatus.length===0,value:"published",children:s({id:j("containers.edit.tabs.published"),defaultMessage:"published"})})]}):null}),e.jsxs(c.Root,{paddingTop:8,gap:4,children:[e.jsxs(c.Item,{col:9,s:12,direction:"column",alignItems:"stretch",children:[e.jsx(m.Content,{value:"draft",children:e.jsx(S,{layout:b})}),e.jsx(m.Content,{value:"published",children:e.jsx(S,{layout:b})})]}),e.jsx(c.Item,{col:3,s:12,direction:"column",alignItems:"stretch",children:e.jsx(J,{})})]})]}),e.jsx(K,{onProceed:i})]})})]})},E=W(m.Trigger)`
  text-transform: uppercase;
`,ue=(a,n)=>{const o=a?.status,s=n?.availableStatus??[];return o?o==="draft"&&s.find(t=>t.publishedAt!==null)?"published":o:"draft"},ye=()=>{const{slug:a=""}=X(),{permissions:n=[],isLoading:o,error:s}=Z(ae.map(t=>({action:t,subject:a})));return o?e.jsx(d.Loading,{}):s||!a?e.jsx(d.Error,{}):e.jsx(d.Protect,{permissions:n,children:({permissions:t})=>e.jsx(ee,{permissions:t,children:e.jsx(ce,{})})})};export{ce as EditViewPage,ye as ProtectedEditViewPage};