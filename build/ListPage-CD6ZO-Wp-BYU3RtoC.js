import{aM as k,d as Q,ag as _,u as y,aN as O,t as H,aO as N,j as e,P as L,b as M,aP as x,aQ as l,T as m,F as v,I as G,ai as J,aR as E,n as $,q as B,r as P,M as h,J as Y,K as z,aS as K,B as V,Q as W,U as R,aT as X,aU as Z,aV as ee,aW as te,aX as se}from"./strapi-BdtmSf-H.js";import{g as ae}from"./users-8N93LH7R-MOwOr-tf.js";const ie=k.injectEndpoints({endpoints:t=>({getAuditLogs:t.query({query:i=>({url:"/admin/audit-logs",config:{params:i}})}),getAuditLog:t.query({query:i=>`/admin/audit-logs/${i}`})}),overrideExisting:!1}),{useGetAuditLogsQuery:ne,useGetAuditLogQuery:oe}=ie,w=()=>{const{formatDate:t}=y();return n=>{const a=Z(n),o=t(a,{dateStyle:"long"}),s=t(a,{timeStyle:"medium",hourCycle:"h24"});return`${o}, ${s}`}},q={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},D=t=>q[t]||t,re=({handleClose:t,logId:i})=>{const{toggleNotification:n}=$(),{_unstableFormatAPIError:a}=B(),{data:o,error:s,isLoading:d}=oe(i);P.useEffect(()=>{s&&(n({type:"danger",message:a(s)}),t())},[s,a,t,n]);const u=w(),c=o&&"date"in o?u(o.date):"";return e.jsx(h.Root,{defaultOpen:!0,onOpenChange:t,children:e.jsxs(h.Content,{children:[e.jsx(h.Header,{children:e.jsx(Y,{label:c,id:"title",children:e.jsx(z,{isCurrent:!0,children:c})})}),e.jsx(h.Body,{children:e.jsx(de,{isLoading:d,data:o,formattedDate:c})})]})})},de=({isLoading:t,data:i,formattedDate:n})=>{const{formatMessage:a}=y();if(t)return e.jsx(v,{padding:7,justifyContent:"center",alignItems:"center",children:e.jsx(K,{children:"Loading content..."})});const{action:o,user:s,payload:d}=i;return e.jsxs(e.Fragment,{children:[e.jsx(V,{marginBottom:3,children:e.jsx(m,{variant:"delta",id:"title",children:a({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),e.jsxs(W.Root,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[e.jsx(j,{actionLabel:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:a({id:`Settings.permissions.auditLogs.${o}`,defaultMessage:D(o)},{model:d?.model})}),e.jsx(j,{actionLabel:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:n}),e.jsx(j,{actionLabel:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:s?.displayName||"-"}),e.jsx(j,{actionLabel:a({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:s?.id.toString()||"-"})]}),e.jsxs(R.Root,{children:[e.jsx(R.Label,{children:a({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}),e.jsx(le,{value:JSON.stringify(d,null,2),disabled:!0})]})]})},le=Q(_)`
  max-width: 100%;
  overflow: scroll;
`,j=({actionLabel:t,actionName:i})=>e.jsxs(v,{direction:"column",alignItems:"baseline",gap:1,children:[e.jsx(m,{textColor:"neutral600",variant:"sigma",children:t}),e.jsx(m,{textColor:"neutral600",children:i})]}),ue=({canReadAuditLogs:t,canReadUsers:i})=>{const{toggleNotification:n}=$(),{_unstableFormatAPIError:a}=B(),[{query:o}]=N(),{data:s,error:d,isError:u,isLoading:c}=X({},{skip:!i,refetchOnMountOrArgChange:!0});P.useEffect(()=>{d&&n({type:"danger",message:a(d)})},[d,n,a]);const{data:b,isLoading:C,isError:S,error:p}=ne(o,{refetchOnMountOrArgChange:!0,skip:!t});return P.useEffect(()=>{p&&n({type:"danger",message:a(p)})},[p,n,a]),{auditLogs:b,users:s?.users??[],isLoading:c||C,hasError:S||u}},I=t=>{const{formatMessage:i}=y(),n=ee(t.name),a=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"}),o=s=>{n.onChange(t.name,s)};return e.jsx(te,{"aria-label":a,value:n.value,onChange:o,children:t.options?.map(s=>{const d=typeof s=="string"?s:s.value,u=typeof s=="string"?s:s.label;return e.jsx(se,{value:d,children:u},d)})})},ce=({formatMessage:t,users:i,canReadUsers:n})=>{const a=[{label:t({id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"}),value:"$eq"},{label:t({id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"}),value:"$ne"}],o=[{input:I,label:t({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),name:"action",operators:a,options:Object.keys(q).map(s=>({label:t({id:`Settings.permissions.auditLogs.${s}`,defaultMessage:D(s)},{model:void 0}),value:s})),type:"enumeration"},{label:t({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),name:"date",type:"datetime"}];return n&&i?[...o,{input:I,label:t({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),mainField:{name:"id",type:"integer"},name:"user",operators:a,options:i.map(s=>({label:ae(s),value:s.id.toString()})),type:"relation"}]:o},me=()=>{const{formatMessage:t}=y(),i=O(r=>r.admin_app.permissions.settings),{allowedActions:{canRead:n,canReadUsers:a},isLoading:o}=H({...i?.auditLogs,readUsers:i?.users.read||[]}),[{query:s},d]=N(),{auditLogs:u,users:c,isLoading:b,hasError:C}=ue({canReadAuditLogs:n,canReadUsers:a}),S=w(),p=ce({formatMessage:t,users:c,canReadUsers:a}),A=[{name:"action",label:t({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),sortable:!0},{name:"date",label:t({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),sortable:!0},{name:"user",label:t({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),sortable:!1,cellFormatter:({user:r})=>r?r.displayName:""}];if(C)return e.jsx(L.Error,{});const T=b||o,{results:F=[]}=u??{};return e.jsxs(L.Main,{"aria-busy":T,children:[e.jsx(L.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:t({id:"global.auditLogs",defaultMessage:"Audit Logs"})})}),e.jsx(M.Header,{title:t({id:"global.auditLogs",defaultMessage:"Audit Logs"}),subtitle:t({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.jsx(M.Action,{startActions:e.jsxs(x.Root,{options:p,children:[e.jsx(x.Trigger,{}),e.jsx(x.Popover,{}),e.jsx(x.List,{})]})}),e.jsxs(M.Content,{children:[e.jsx(l.Root,{rows:F,headers:A,isLoading:T,children:e.jsxs(l.Content,{children:[e.jsx(l.Head,{children:A.map(r=>e.jsx(l.HeaderCell,{...r},r.name))}),e.jsx(l.Empty,{}),e.jsx(l.Loading,{}),e.jsx(l.Body,{children:F.map(r=>e.jsxs(l.Row,{onClick:()=>d({id:r.id}),children:[A.map(f=>{const{name:g,cellFormatter:U}=f;switch(g){case"action":return e.jsx(l.Cell,{children:e.jsx(m,{textColor:"neutral800",children:t({id:`Settings.permissions.auditLogs.${r.action}`,defaultMessage:D(r.action)},{model:r.payload?.model??""})})},g);case"date":return e.jsx(l.Cell,{children:e.jsx(m,{textColor:"neutral800",children:S(r.date)})},g);case"user":return e.jsx(l.Cell,{children:e.jsx(m,{textColor:"neutral800",children:U?U(r,f):"-"})},g);default:return e.jsx(l.Cell,{children:e.jsx(m,{textColor:"neutral800",children:r[g]||"-"})},g)}}),e.jsx(l.Cell,{onClick:f=>f.stopPropagation(),children:e.jsx(v,{justifyContent:"end",children:e.jsx(G,{onClick:()=>d({id:r.id}),withTooltip:!1,label:t({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${r.action} action`}),variant:"ghost",children:e.jsx(J,{})})})})]},r.id))})]})}),e.jsxs(E.Root,{...u?.pagination,children:[e.jsx(E.PageSize,{}),e.jsx(E.Links,{})]})]}),s?.id&&e.jsx(re,{handleClose:()=>d({id:""},"remove"),logId:s.id.toString()})]})},fe=()=>{const t=O(i=>i.admin_app.permissions.settings?.auditLogs?.main);return e.jsx(L.Protect,{permissions:t,children:e.jsx(me,{})})};export{me as ListPage,fe as ProtectedListPage};
