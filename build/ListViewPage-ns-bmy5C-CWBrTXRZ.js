import{d as K,bp as N,aq as me,u as A,o as ge,s as fe,cF as Y,cC as se,r as S,a7 as he,aP as D,cE as xe,bx as B,eF as je,cI as ye,cm as be,eB as P,j as e,P as E,bu as Ce,b as Q,eG as Se,bg as Le,F as k,aR as y,cK as Te,T as L,cG as J,eH as Ie,aS as q,eI as Me,eJ as Re,U as Ae,b8 as Fe,bf as Ee,bo as ke,v as ne,cA as Pe,c4 as we,eK as ve,aU as ae,cD as Oe,t as ie,eL as re,eM as Be,aQ as $,aW as De,aX as He,aY as Ue,b7 as Z,eN as z,an as G,I as $e,d5 as We,L as Ne,dF as Ve,a4 as _e,eO as qe,bL as ze,ab as Ge,eP as Qe,eQ as Ke,cz as Ye,aV as Je,eR as Ze,eS as M,eT as Xe,eU as oe,Z as et,aT as tt}from"./strapi-DdIuP085.js";import{u as le,a as st,p as X}from"./useDebounce-DmuSJIF3-BQ9CmjB3.js";import{g as ce,u as nt}from"./relations-BlpLgngh-exYPs8Tc.js";import{u as at}from"./hooks-E5u1mcgM-B2fV8oHA.js";const ee=["json","component","media","richtext","dynamiczone","password","blocks"],it=["createdAt","updatedAt"],rt=[...re,"strapi_assignee"],ot=({disabled:t,schema:n})=>{const{attributes:s,uid:a,options:o}=n,{formatMessage:l,locale:j}=A(),{trackUsage:f}=N(),r=we("FiltersImpl",c=>c.permissions),[{query:h}]=D(),{schemas:g}=ve(),T=S.useMemo(()=>r.filter(c=>c.action==="admin::users.read"&&c.subject===null).length>0,[r]),I=(h?.filters?.$and??[]).reduce((c,F)=>{const[b,p]=Object.entries(F)[0];if(typeof p.id!="object")return c;const R=p.id.$eq||p.id.$ne;return R&&rt.includes(b)&&!c.includes(R)&&c.push(R),c},[]),{data:x,isLoading:u}=ae({filters:{id:{$in:I}}},{skip:I.length===0||!T}),{users:d=[]}=x??{},{metadata:w}=Oe(a,{selectFromResult:({data:c})=>({metadata:c?.contentType.metadatas??{}})}),H=ie(j,{sensitivity:"base"}),v=S.useMemo(()=>{const[{properties:{fields:c=[]}={fields:[]}}]=r.filter(b=>b.action==="plugin::content-manager.explorer.read"&&b.subject===a);return["id",...c.filter(b=>{const p=s[b]??{};return p.type&&!ee.includes(p.type)}),...it,...T?re:[]].map(b=>{const p=s[b];if(ee.includes(p.type))return null;const{mainField:R="",label:V}=w[b].list;let i={name:b,label:V??"",mainField:Be(p,R,{schemas:g,components:{}}),type:p.type};return p.type==="relation"&&"target"in p&&p.target==="admin::user"&&(i={...i,input:lt,options:d.map(C=>({label:J(C),value:C.id.toString()})),operators:[{label:l({id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"}),value:"$eq"},{label:l({id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"}),value:"$ne"}],mainField:{name:"id",type:"integer"}}),p.type==="enumeration"&&(i={...i,options:p.enum.map(C=>({label:C,value:C}))}),i}).filter(Boolean).toSorted((b,p)=>H.compare(b.label,p.label))},[r,T,a,s,w,g,d,l,H]),U=c=>{c&&f("willFilterEntries")},O=c=>{const F=s[c.name];F&&f("didFilterEntries",{useRelation:F.type==="relation"})};return e.jsxs($.Root,{disabled:t,options:v,onOpenChange:U,onChange:O,children:[e.jsx($.Trigger,{}),e.jsx($.Popover,{}),e.jsx($.List,{})]})},lt=({name:t})=>{const[n,s]=S.useState(10),[a,o]=S.useState(""),{formatMessage:l}=A(),j=st(a,300),{data:f,isLoading:r}=ae({pageSize:n,_q:j}),h=De(t),g=d=>{d||s(10)},{users:T=[],pagination:I}=f??{},{pageCount:x=1,page:u=1}=I??{};return e.jsx(He,{value:h.value,"aria-label":l({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select a user to filter"}),onOpenChange:g,onChange:d=>h.onChange(t,d),loading:r,onLoadMore:()=>s(n+10),hasMoreItems:u<x,onInputChange:d=>{o(d.currentTarget.value)},children:T.map(d=>e.jsx(Ue,{value:d.id.toString(),children:J(d)},d.id))})},W=({type:t,value:n})=>{const{formatDate:s,formatTime:a,formatNumber:o}=A();let l=n;if(t==="date"&&(l=s(Je(n),{dateStyle:"full"})),t==="datetime"&&(l=s(n,{dateStyle:"full",timeStyle:"short"})),t==="time"){const[j,f,r]=n.split(":"),h=new Date;h.setHours(j),h.setMinutes(f),h.setSeconds(r),l=a(h,{timeStyle:"short"})}return["float","decimal"].includes(t)&&(l=o(n,{maximumFractionDigits:20})),["integer","biginteger"].includes(t)&&(l=o(n,{maximumFractionDigits:0})),Ze(l)},ct=({content:t,mainField:n})=>n?e.jsx(Z,{label:t[n.name],children:e.jsx(L,{maxWidth:"25rem",textColor:"neutral800",ellipsis:!0,children:e.jsx(W,{type:n.type,value:t[n.name]})})}):null,ut=({content:t,mainField:n})=>{const{formatMessage:s}=A();return n?e.jsxs(M.Root,{children:[e.jsxs(M.Trigger,{onClick:a=>a.stopPropagation(),children:[e.jsx(Xe,{children:t.length}),s({id:"content-manager.containers.list.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:t.length})]}),e.jsx(M.Content,{children:t.map(a=>e.jsx(M.Item,{disabled:!0,children:e.jsx(L,{maxWidth:"50rem",ellipsis:!0,children:e.jsx(W,{type:n.type,value:a[n.name]})})},a.id))})]}):null},dt=t=>t&&t[0]==="."?t.substring(1):t,ue=({url:t,mime:n,alternativeText:s,name:a,ext:o,formats:l})=>{const j=X(t);if(n.includes("image")){const h=l?.thumbnail?.url,g=X(h)||j;return e.jsx(oe.Item,{src:g,alt:s||a,fallback:s||a,preview:!0})}const f=dt(o),r=a.length>100?`${a.substring(0,100)}...`:a;return e.jsx(Z,{description:r,children:e.jsx(de,{children:f})})},de=({children:t})=>e.jsx(k,{tag:"span",position:"relative",borderRadius:"50%",width:"26px",height:"26px",borderColor:"neutral200",background:"neutral150",paddingLeft:"1px",justifyContent:"center",alignItems:"center",children:e.jsx(pt,{variant:"sigma",textColor:"neutral600",children:t})}),pt=K(L)`
  font-size: 0.9rem;
  line-height: 0.9rem;
`,mt=({content:t})=>e.jsx(oe.Group,{children:t.map((n,s)=>{const a=`${n.id}${s}`;if(s===3){const o=`+${t.length-3}`;return e.jsx(de,{children:o},a)}return s>3?null:e.jsx(ue,{...n},a)})}),gt=({mainField:t,content:n})=>e.jsx(L,{maxWidth:"50rem",textColor:"neutral800",ellipsis:!0,children:ce(n,t)}),ft=({mainField:t,content:n,rowId:s,name:a})=>{const{model:o}=Y(),{formatMessage:l}=A(),{notifyStatus:j}=et(),[f,r]=S.useState(!1),[h]=a.split("."),{data:g,isLoading:T}=nt({model:o,id:s,targetField:h},{skip:!f,refetchOnMountOrArgChange:!0}),I=Array.isArray(n)?n.length:n.count;return S.useEffect(()=>{g&&j(l({id:P("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"}))},[g,l,j]),e.jsxs(M.Root,{onOpenChange:x=>r(x),children:[e.jsx(M.Trigger,{onClick:x=>x.stopPropagation(),children:e.jsx(L,{style:{cursor:"pointer"},textColor:"neutral800",fontWeight:"regular",children:I>0?l({id:"content-manager.containers.list.items",defaultMessage:"{number} {number, plural, =0 {items} one {item} other {items}}"},{number:I}):"-"})}),e.jsxs(M.Content,{children:[T&&e.jsx(M.Item,{disabled:!0,children:e.jsx(tt,{small:!0,children:l({id:P("ListViewTable.relation-loading"),defaultMessage:"Relations are loading"})})}),g?.results&&e.jsxs(e.Fragment,{children:[g.results.map(x=>e.jsx(M.Item,{disabled:!0,children:e.jsx(L,{maxWidth:"50rem",ellipsis:!0,children:ce(x,t)})},x.documentId)),g?.pagination&&g?.pagination.total>10&&e.jsx(M.Item,{"aria-disabled":!0,"aria-label":l({id:P("ListViewTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"}),children:e.jsx(L,{children:"…"})})]})]})]})},ht=({content:t,mainField:n,attribute:s,rowId:a,name:o})=>{if(!xt(t,n,s))return e.jsx(L,{textColor:"neutral800",paddingLeft:s.type==="relation"?"1.6rem":0,paddingRight:s.type==="relation"?"1.6rem":0,children:"-"});switch(s.type){case"media":return s.multiple?e.jsx(mt,{content:t}):e.jsx(ue,{...t});case"relation":return pe(s.relation)?e.jsx(gt,{mainField:n,content:t}):e.jsx(ft,{rowId:a,mainField:n,content:t,name:o});case"component":return s.repeatable?e.jsx(ut,{mainField:n,content:t}):e.jsx(ct,{mainField:n,content:t});case"string":return e.jsx(Z,{description:t,children:e.jsx(L,{maxWidth:"30rem",ellipsis:!0,textColor:"neutral800",children:e.jsx(W,{type:s.type,value:t})})});default:return e.jsx(L,{maxWidth:"30rem",ellipsis:!0,textColor:"neutral800",children:e.jsx(W,{type:s.type,value:t})})}},xt=(t,n,s)=>{if(s.type==="component"){if(s.repeatable||!n)return t?.length>0;const a=t?.[n.name];return n.name==="id"&&![void 0,null].includes(a)?!0:!z(a)}return s.type==="relation"?pe(s.relation)?!z(t):Array.isArray(t)?t.length>0:t?.count>0:["integer","decimal","float","number"].includes(s.type)?typeof t=="number":s.type==="boolean"?t!==null:!z(t)},pe=t=>["oneToOne","manyToOne","oneToOneMorph"].includes(t),jt=t=>{const n=at(l=>l.admin_app.permissions.contentManager?.collectionTypesConfigurations??[]),[{query:s}]=D(),{formatMessage:a}=A(),{allowedActions:{canConfigureView:o}}=ne(n);return e.jsxs(G.Root,{children:[e.jsx(G.Trigger,{children:e.jsx($e,{label:a({id:"components.ViewSettings.tooltip",defaultMessage:"View Settings"}),children:e.jsx(We,{})})}),e.jsx(G.Content,{side:"bottom",align:"end",sideOffset:4,children:e.jsxs(k,{alignItems:"stretch",direction:"column",padding:3,gap:3,children:[o?e.jsx(Ne,{size:"S",startIcon:e.jsx(Ve,{}),variant:"secondary",tag:_e,to:{pathname:"configurations/list",search:s.plugins?B.stringify({plugins:s.plugins},{encode:!1}):""},children:a({id:"app.links.configure-view",defaultMessage:"Configure the view"})}):null,e.jsx(yt,{...t})]})})]})},yt=({headers:t=[],resetHeaders:n,setHeaders:s})=>{const{trackUsage:a}=N(),{formatMessage:o,locale:l}=A(),{schema:j,model:f}=Y(),{list:r}=se(f),h=ie(l,{sensitivity:"base"}),g=j?.attributes??{},T=Object.keys(g).filter(u=>qe(g[u])).map(u=>({name:u,label:r.metadatas[u]?.label??""})).sort((u,d)=>h.compare(u.label,d.label)),I=u=>{a("didChangeDisplayedFields");const d=t.includes(u)?t.filter(w=>w!==u):[...t,u];s(d)},x=()=>{n()};return e.jsxs(k,{tag:"fieldset",direction:"column",alignItems:"stretch",gap:3,borderWidth:0,children:[e.jsxs(k,{justifyContent:"space-between",children:[e.jsx(L,{tag:"legend",variant:"pi",fontWeight:"bold",children:o({id:"containers.list.displayedFields",defaultMessage:"Displayed fields"})}),e.jsx(ze,{onClick:x,children:o({id:"app.components.Button.reset",defaultMessage:"Reset"})})]}),e.jsx(k,{direction:"column",alignItems:"stretch",children:T.map(u=>{const d=t.includes(u.name);return e.jsx(k,{wrap:"wrap",gap:2,background:d?"primary100":"transparent",hasRadius:!0,padding:2,children:e.jsx(Ge,{onCheckedChange:()=>I(u.name),checked:d,name:u.name,children:e.jsx(L,{fontSize:1,children:u.label})})},u.name)})})]})},{INJECT_COLUMN_IN_TABLE:bt}=Qe,Ct=K(Q.Header)`
  overflow-wrap: anywhere;
`,St=()=>{const{trackUsage:t}=N(),n=me(),{formatMessage:s}=A(),{toggleNotification:a}=ge(),{_unstableFormatAPIError:o}=fe(P),{collectionType:l,model:j,schema:f}=Y(),{list:r}=se(j),[h,g]=S.useState([]),T=le(r.layout);S.useEffect(()=>{he(T,r.layout)||g(r.layout)},[r.layout,T]);const I=i=>{g(Ke(i,f.attributes,r.metadatas))},[{query:x}]=D({page:"1",pageSize:r.settings.pageSize.toString(),sort:r.settings.defaultSortBy?`${r.settings.defaultSortBy}:${r.settings.defaultSortOrder}`:""}),u=S.useMemo(()=>xe(x),[x]),d=S.useMemo(()=>B.stringify(u,{encode:!0,encodeValuesOnly:!0}),[u]),w=S.useMemo(()=>{const i=d.split("&").map(C=>{const[m,_]=C.split("=");return{[m]:_}});return Object.assign({},...i)},[d]),{data:H,error:v,isFetching:U}=je({model:j,params:w});S.useEffect(()=>{v&&a({type:"danger",message:o(v)})},[v,o,a]);const{results:O=[],pagination:c}=H??{};S.useEffect(()=>{c&&c.pageCount>0&&c.page>c.pageCount&&n({search:B.stringify({...x,page:c.pageCount})},{replace:!0})},[c,s,x,n]);const{canCreate:F}=ye("ListViewPage",({canCreate:i})=>({canCreate:i})),b=be("ListViewPage",({runHookWaterfall:i})=>i),p=S.useMemo(()=>{const C=b(bt,{displayedHeaders:h,layout:r}).displayedHeaders.map(m=>({...m,label:typeof m.label=="string"?m.label:s(m.label),name:`${m.name}${m.mainField?.name?`.${m.mainField.name}`:""}`}));return f?.options?.draftAndPublish&&C.push({attribute:{type:"custom"},name:"status",label:s({id:P("containers.list.table-headers.status"),defaultMessage:"status"}),searchable:!1,sortable:!1}),C},[h,s,r,b,f?.options?.draftAndPublish]);if(U)return e.jsx(E.Loading,{});if(v)return e.jsx(E.Error,{});const R=f?.info.displayName??"Untitled",V=i=>()=>{t("willEditEntryFromList"),n({pathname:i.toString(),search:B.stringify({plugins:x.plugins})})};return e.jsxs(E.Main,{children:[e.jsx(E.Title,{children:`${R}`}),e.jsx(Ct,{primaryAction:F?e.jsx(te,{}):null,subtitle:s({id:P("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:c?.total}),title:R,navigationAction:e.jsx(Ce,{})}),e.jsx(Q.Action,{endActions:e.jsxs(e.Fragment,{children:[e.jsx(Se,{area:"listView.actions"}),e.jsx(jt,{setHeaders:I,resetHeaders:()=>g(r.layout),headers:h.map(i=>i.name)})]}),startActions:e.jsxs(e.Fragment,{children:[r.settings.searchable&&e.jsx(Le,{disabled:O.length===0,label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:R}),placeholder:s({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),r.settings.filterable&&f?e.jsx(ot,{disabled:O.length===0,schema:f}):null]})}),e.jsx(Q.Content,{children:e.jsxs(k,{gap:4,direction:"column",alignItems:"stretch",children:[e.jsxs(y.Root,{rows:O,headers:p,isLoading:U,children:[e.jsx(Tt,{}),e.jsxs(y.Content,{children:[e.jsxs(y.Head,{children:[e.jsx(y.HeaderCheckboxCell,{}),p.map(i=>e.jsx(y.HeaderCell,{...i},i.name))]}),e.jsx(y.Loading,{}),e.jsx(y.Empty,{action:F?e.jsx(te,{variant:"secondary"}):null}),e.jsx(y.Body,{children:O.map(i=>e.jsxs(y.Row,{cursor:"pointer",onClick:V(i.documentId),children:[e.jsx(y.CheckboxCell,{id:i.id}),p.map(({cellFormatter:C,...m})=>{if(m.name==="status"){const{status:_}=i;return e.jsx(y.Cell,{children:e.jsx(Te,{status:_,maxWidth:"min-content"})},m.name)}return["createdBy","updatedBy"].includes(m.name.split(".")[0])?e.jsx(y.Cell,{children:e.jsx(L,{textColor:"neutral800",children:i[m.name.split(".")[0]]?J(i[m.name.split(".")[0]]):"-"})},m.name):typeof C=="function"?e.jsx(y.Cell,{children:C(i,m,{collectionType:l,model:j})},m.name):e.jsx(y.Cell,{children:e.jsx(ht,{content:i[m.name.split(".")[0]],rowId:i.documentId,...m})},m.name)}),e.jsx(Lt,{onClick:C=>C.stopPropagation(),children:e.jsx(Ie,{document:i})})]},i.id))})]})]}),e.jsxs(q.Root,{...c,onPageSizeChange:()=>t("willChangeNumberOfEntriesPerPage"),children:[e.jsx(q.PageSize,{}),e.jsx(q.Links,{})]})]})})]})},Lt=K(y.Cell)`
  display: flex;
  justify-content: flex-end;
`,Tt=()=>{const t=Me("TableActionsBar",o=>o.selectRow),[{query:n}]=D(),s=n?.plugins?.i18n?.locale,a=le(s);return S.useEffect(()=>{a!==s&&t([])},[t,a,s]),e.jsx(y.ActionBar,{children:e.jsx(Re,{})})},te=({variant:t})=>{const{formatMessage:n}=A(),{trackUsage:s}=N(),[{query:a}]=D();return e.jsx(Ae,{variant:t,tag:Fe,onClick:()=>{s("willCreateEntry",{status:"draft"})},startIcon:e.jsx(Ee,{}),style:{textDecoration:"none"},to:{pathname:"create",search:B.stringify({plugins:a.plugins})},minWidth:"max-content",marginLeft:2,children:n({id:P("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})})},Ft=()=>{const{slug:t=""}=ke(),{permissions:n=[],isLoading:s,error:a}=ne(Ye.map(o=>({action:o,subject:t})));return s?e.jsx(E.Loading,{}):a||!t?e.jsx(E.Error,{}):e.jsx(E.Protect,{permissions:n,children:({permissions:o})=>e.jsx(Pe,{permissions:o,children:e.jsx(St,{})})})};export{St as ListViewPage,Ft as ProtectedListViewPage};