import{h as j,l as u,k as o,g as i,j as e,P as g,w as $,u as T,Z as K,o as Z,n as J,q as W,s as X,r as S,v as Y,x as ee,y as se,m as s,b as F,M as m,K as ae,N as R,V as y,_ as ie,S as v,$ as te,U as k,z as le,A as re,C as b,D as E,T as M,E as de,G as p,B as I,a0 as ne,I as U,H as _,a1 as oe}from"./strapi-BCf4qKUQ.js";import{u as me}from"./index-C02D7oHu-C1E7ADbJ-DQmM3M3Y.js";const pe=j().shape({options:j().shape({from:j().shape({name:u().required({id:o.required.id,defaultMessage:"This field is required"}),email:u().email(o.email).required({id:o.required.id,defaultMessage:"This field is required"})}).required(),response_email:u().email(o.email),object:u().required({id:o.required.id,defaultMessage:"This field is required"}),message:u().required({id:o.required.id,defaultMessage:"This field is required"})}).required(o.required.id)}),P=({template:a={},onToggle:d,open:t,onSubmit:n})=>{const{formatMessage:l}=T();return e.jsx(m.Root,{open:t,onOpenChange:d,children:e.jsxs(m.Content,{children:[e.jsxs(m.Header,{children:[e.jsxs(ae,{label:`${l({id:s("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${a.display?l({id:s(a.display),defaultMessage:a.display}):""}`,children:[e.jsx(R,{children:l({id:s("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),e.jsx(R,{isCurrent:!0,children:a.display?l({id:s(a.display),defaultMessage:a.display}):""})]}),e.jsx(y,{children:e.jsx(m.Title,{children:`${l({id:s("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${a.display?l({id:s(a.display),defaultMessage:a.display}):""}`})})]}),e.jsx(ie,{onSubmit:n,initialValues:a,validationSchema:pe,children:({isSubmitting:h})=>e.jsxs(e.Fragment,{children:[e.jsx(m.Body,{children:e.jsx(v.Root,{gap:5,children:[{label:l({id:s("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"}),name:"options.from.name",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"}),name:"options.from.email",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"}),name:"options.response_email",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"}),name:"options.object",size:6,type:"string"},{label:l({id:s("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",size:12,type:"text"}].map(({size:f,...c})=>e.jsx(v.Item,{col:f,direction:"column",alignItems:"stretch",children:e.jsx(te,{...c})},c.name))})}),e.jsxs(m.Footer,{children:[e.jsx(m.Close,{children:e.jsx(k,{variant:"tertiary",children:"Cancel"})}),e.jsx(k,{loading:h,type:"submit",children:"Finish"})]})]})})]})})};P.defaultProps={template:{}};P.propTypes={template:i.shape({display:i.string,icon:i.string,options:i.shape({from:i.shape({name:i.string,email:i.string}),message:i.string,object:i.string,response_email:i.string})}),open:i.bool.isRequired,onSubmit:i.func.isRequired,onToggle:i.func.isRequired};const L=({canUpdate:a,onEditClick:d})=>{const{formatMessage:t}=T();return e.jsxs(le,{colCount:3,rowCount:3,children:[e.jsx(re,{children:e.jsxs(b,{children:[e.jsx(E,{width:"1%",children:e.jsx(y,{children:t({id:s("Email.template.table.icon.label"),defaultMessage:"icon"})})}),e.jsx(E,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:t({id:s("Email.template.table.name.label"),defaultMessage:"name"})})}),e.jsx(E,{width:"1%",children:e.jsx(y,{children:t({id:s("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),e.jsxs(de,{children:[e.jsxs(b,{onClick:()=>d("reset_password"),children:[e.jsx(p,{children:e.jsx(I,{width:"3.2rem",height:"3.2rem",padding:"0.8rem",children:e.jsx(ne,{"aria-label":t({id:"global.reset-password",defaultMessage:"Reset password"})})})}),e.jsx(p,{children:e.jsx(M,{children:t({id:"global.reset-password",defaultMessage:"Reset password"})})}),e.jsx(p,{onClick:n=>n.stopPropagation(),children:e.jsx(U,{onClick:()=>d("reset_password"),label:t({id:s("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),variant:"ghost",disabled:!a,children:e.jsx(_,{})})})]}),e.jsxs(b,{onClick:()=>d("email_confirmation"),children:[e.jsx(p,{children:e.jsx(I,{width:"3.2rem",height:"3.2rem",padding:"0.8rem",children:e.jsx(oe,{"aria-label":t({id:s("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),e.jsx(p,{children:e.jsx(M,{children:t({id:s("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),e.jsx(p,{onClick:n=>n.stopPropagation(),children:e.jsx(U,{onClick:()=>d("email_confirmation"),label:t({id:s("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),variant:"ghost",disabled:!a,children:e.jsx(_,{})})})]})]})]})};L.propTypes={canUpdate:i.bool.isRequired,onEditClick:i.func.isRequired};const he=()=>e.jsx(g.Protect,{permissions:$.readEmailTemplates,children:e.jsx(ce,{})}),ce=()=>{const{formatMessage:a}=T(),{trackUsage:d}=me(),{notifyStatus:t}=K(),{toggleNotification:n}=Z(),l=J(),{get:h,put:f}=W(),{formatAPIError:c}=X(),[z,A]=S.useState(!1),[q,B]=S.useState(null),{isLoading:H,allowedActions:{canUpdate:N}}=Y({update:$.updateEmailTemplates}),{isLoading:O,data:C}=ee(["users-permissions","email-templates"],async()=>{const{data:r}=await h("/users-permissions/email-templates");return r},{onSuccess(){t(a({id:s("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(r){n({type:"danger",message:c(r)})}}),Q=H||O,x=()=>{A(r=>!r)},V=r=>{B(r),x()},w=se(r=>f("/users-permissions/email-templates",{"email-templates":r}),{async onSuccess(){await l.invalidateQueries(["users-permissions","email-templates"]),n({type:"success",message:a({id:"notification.success.saved",defaultMessage:"Saved"})}),d("didEditEmailTemplates"),x()},onError(r){n({type:"danger",message:c(r)})},refetchActive:!0}),D=r=>{d("willEditEmailTemplates");const G={...C,[q]:r};w.mutate(G)};return Q?e.jsx(g.Loading,{}):e.jsxs(g.Main,{"aria-busy":w.isLoading,children:[e.jsx(g.Title,{children:a({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:a({id:s("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})})}),e.jsx(F.Header,{title:a({id:s("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.jsxs(F.Content,{children:[e.jsx(L,{onEditClick:V,canUpdate:N}),e.jsx(P,{template:C[q],onToggle:x,open:z,onSubmit:D})]})]})};export{ce as EmailTemplatesPage,he as ProtectedEmailTemplatesPage};
