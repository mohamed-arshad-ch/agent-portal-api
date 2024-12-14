import{h as se,l as D,i as ae,u as f,o as S,s as M,f_ as te,v as re,f$ as $,r as b,j as e,P as L,b as w,g0 as n,bY as ne,bZ as ie,M as g,U as F,bf as oe,g1 as H,g2 as le,c4 as N,_ as O,eA as h,F as T,T as p,b4 as k,B as z,bT as B,a1 as de,g3 as q,S as I,$ as ce,aW as ue,W as v,ae as ge,af as me,z as he,A as xe,C as R,D as E,V as fe,E as je,G as A,g4 as pe,bk as V,I as G,bj as be,bl as ye,H as Se,g5 as Me}from"./strapi-BCf4qKUQ.js";const Q=a=>a.name!==void 0,_=({disabled:a,variant:r="default"})=>{const{formatMessage:t}=f(),[s,d]=b.useState(!1);return e.jsxs(g.Root,{open:s,onOpenChange:d,children:[e.jsx(g.Trigger,{children:e.jsx(F,{variant:r,disabled:a,startIcon:e.jsx(oe,{}),onClick:()=>d(!0),size:"S",children:t({id:n("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),e.jsx(ve,{onClose:()=>d(!1)})]})},U=se().shape({code:D().nullable().required({id:"Settings.locales.modal.create.code.error",defaultMessage:"Please select a locale"}),name:D().nullable().max(50,{id:"Settings.locales.modal.create.name.error.min",defaultMessage:"The locale display name can only be less than 50 characters."}).required({id:"Settings.locales.modal.create.name.error.required",defaultMessage:"Please give the locale a display name"}),isDefault:ae()}),Ce={code:"",name:"",isDefault:!1},ve=({onClose:a})=>{const r=H(),{toggleNotification:t}=S(),{_unstableFormatAPIError:s,_unstableFormatValidationErrors:d}=M(),[c]=le(),{formatMessage:l}=f(),i=N("CreateModal",u=>u.refetchPermissions),o=async(u,m)=>{try{const x=await c(u);if("error"in x){Q(x.error)&&x.error.name==="ValidationError"?m.setErrors(d(x.error)):t({type:"danger",message:s(x.error)});return}t({type:"success",message:l({id:n("Settings.locales.modal.create.success"),defaultMessage:"Created locale"})}),i(),a()}catch{t({type:"danger",message:l({id:"notification.error",defaultMessage:"An error occurred, please try again"})})}};return e.jsx(g.Content,{children:e.jsxs(O,{method:"POST",initialValues:Ce,validationSchema:U,onSubmit:o,children:[e.jsx(g.Header,{children:e.jsx(g.Title,{children:l({id:n("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),e.jsx(g.Body,{children:e.jsxs(h.Root,{variant:"simple",defaultValue:"basic",children:[e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(p,{tag:"h2",variant:"beta",id:r,children:l({id:n("Settings.locales.modal.title"),defaultMessage:"Configuration"})}),e.jsxs(h.List,{"aria-labelledby":r,children:[e.jsx(h.Trigger,{value:"basic",children:l({id:n("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),e.jsx(h.Trigger,{value:"advanced",children:l({id:n("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),e.jsx(k,{}),e.jsxs(z,{paddingTop:7,paddingBottom:7,children:[e.jsx(h.Content,{value:"basic",children:e.jsx(J,{})}),e.jsx(h.Content,{value:"advanced",children:e.jsx(Y,{})})]})]})}),e.jsxs(g.Footer,{children:[e.jsx(g.Close,{children:e.jsx(F,{variant:"tertiary",children:l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),e.jsx(W,{})]})]})})},W=()=>{const{formatMessage:a}=f(),r=B("SubmitButton",s=>s.isSubmitting),t=B("SubmitButton",s=>s.modified);return e.jsx(F,{type:"submit",startIcon:e.jsx(de,{}),disabled:r||!t,children:a({id:"global.save",defaultMessage:"Save"})})},J=({mode:a="create"})=>{const{formatMessage:r}=f(),{toggleNotification:t}=S(),{_unstableFormatAPIError:s}=M(),{data:d,error:c}=q();if(b.useEffect(()=>{c&&t({type:"danger",message:s(c)})},[c,s,t]),!Array.isArray(d))return null;const l=d.map(o=>({label:o.name,value:o.code})),i=[{disabled:a!=="create",label:{id:n("Settings.locales.modal.create.code.label"),defaultMessage:"Locales"},name:"code",options:l,placeholder:{id:"components.placeholder.select",defaultMessage:"Select"},required:!0,size:6,type:"enumeration"},{hint:{id:n("Settings.locales.modal.create.name.label.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"},label:{id:n("Settings.locales.modal.create.name.label"),defaultMessage:"Locale display name"},name:"name",required:!0,size:6,type:"string"}].map(o=>({...o,hint:o.hint?r(o.hint):void 0,label:r(o.label),placeholder:o.placeholder?r(o.placeholder):void 0}));return e.jsx(I.Root,{gap:4,children:i.map(({size:o,...u})=>e.jsx(I.Item,{col:o,direction:"column",alignItems:"stretch",children:e.jsx(Z,{...u})},u.name))})},Y=({isDefaultLocale:a})=>{const{formatMessage:r}=f(),t=[{disabled:a,hint:{id:n("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"},label:{id:n("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"},name:"isDefault",size:6,type:"boolean"}].map(s=>({...s,hint:s.hint?r(s.hint):void 0,label:r(s.label)}));return e.jsx(I.Root,{gap:4,children:t.map(({size:s,...d})=>e.jsx(I.Item,{col:s,direction:"column",alignItems:"stretch",children:e.jsx(Z,{...d})},d.name))})},Z=a=>{switch(a.type){case"enumeration":return e.jsx(Ee,{...a});default:return e.jsx(ce,{...a})}},Ee=({disabled:a,hint:r,label:t,name:s,options:d,placeholder:c,required:l})=>{const{value:i,error:o,onChange:u}=ue(s),{data:m=[]}=q(),x=j=>{if(Array.isArray(m)){const P=m.find(C=>C.code===j);u(s,j),u("name",P.name)}else u(s,j)};return e.jsxs(v.Root,{error:o,hint:r,name:s,required:l,children:[e.jsx(v.Label,{children:t}),e.jsx(ge,{disabled:a,onChange:x,placeholder:c,value:i,children:d.map(j=>e.jsx(me,{value:j.value,children:j.label},j.value))}),e.jsx(v.Error,{}),e.jsx(v.Hint,{})]})},Ae=({id:a,name:r})=>{const{formatMessage:t}=f(),{toggleNotification:s}=S(),{_unstableFormatAPIError:d}=M(),[c,l]=b.useState(!1),[i]=pe(),o=async()=>{try{const u=await i(a);if("error"in u){s({type:"danger",message:d(u.error)});return}s({type:"success",message:t({id:n("Settings.locales.modal.delete.success"),defaultMessage:"Deleted locale"})}),l(!1)}catch{s({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred, please try again"})})}};return e.jsxs(V.Root,{open:c,onOpenChange:l,children:[e.jsx(V.Trigger,{children:e.jsx(G,{onClick:()=>l(!0),label:t({id:n("Settings.list.actions.delete"),defaultMessage:"Delete {name} locale"},{name:r}),variant:"ghost",children:e.jsx(be,{})})}),e.jsx(ye,{onConfirm:o})]})},Le=a=>{const{formatMessage:r}=f(),[t,s]=b.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:()=>s(!0),label:r({id:n("Settings.list.actions.edit"),defaultMessage:"Edit {name} locale"},{name:a.name}),variant:"ghost",children:e.jsx(Se,{})}),e.jsx(K,{...a,open:t,onOpenChange:s})]})},K=({id:a,code:r,isDefault:t,name:s,open:d,onOpenChange:c})=>{const{toggleNotification:l}=S(),{_unstableFormatAPIError:i,_unstableFormatValidationErrors:o}=M(),u=N("EditModal",C=>C.refetchPermissions),{formatMessage:m}=f(),x=H(),[j]=Me(),P=async({code:C,...X},ee)=>{try{const y=await j({id:a,...X});if("error"in y){Q(y.error)&&y.error.name==="ValidationError"?ee.setErrors(o(y.error)):l({type:"danger",message:i(y.error)});return}l({type:"success",message:m({id:n("Settings.locales.modal.edit.success"),defaultMessage:"Updated locale"})}),u(),c(!1)}catch{l({type:"danger",message:m({id:"notification.error",defaultMessage:"An error occurred, please try again"})})}};return e.jsx(g.Root,{open:d,onOpenChange:c,children:e.jsx(g.Content,{children:e.jsxs(O,{method:"PUT",onSubmit:P,initialValues:{code:r,name:s,isDefault:t},validationSchema:U,children:[e.jsx(g.Header,{children:e.jsx(g.Title,{children:m({id:n("Settings.list.actions.edit"),defaultMessage:"Edit a locale"},{name:s})})}),e.jsx(g.Body,{children:e.jsxs(h.Root,{variant:"simple",defaultValue:"basic",children:[e.jsxs(T,{justifyContent:"space-between",children:[e.jsx(p,{tag:"h2",variant:"beta",id:x,children:m({id:n("Settings.locales.modal.title"),defaultMessage:"Configuration"})}),e.jsxs(h.List,{"aria-labelledby":x,children:[e.jsx(h.Trigger,{value:"basic",children:m({id:n("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),e.jsx(h.Trigger,{value:"advanced",children:m({id:n("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),e.jsx(k,{}),e.jsxs(z,{paddingTop:7,paddingBottom:7,children:[e.jsx(h.Content,{value:"basic",children:e.jsx(J,{mode:"edit"})}),e.jsx(h.Content,{value:"advanced",children:e.jsx(Y,{isDefaultLocale:t})})]})]})}),e.jsxs(g.Footer,{children:[e.jsx(g.Close,{children:e.jsx(F,{variant:"tertiary",children:m({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),e.jsx(W,{})]})]})})})},Ie=({locales:a=[],canDelete:r,canUpdate:t})=>{const[s,d]=b.useState(),{formatMessage:c}=f(),l=i=>()=>{t&&d(i)};return e.jsxs(he,{colCount:4,rowCount:a.length+1,children:[e.jsx(xe,{children:e.jsxs(R,{children:[e.jsx(E,{children:e.jsx(p,{variant:"sigma",textColor:"neutral600",children:c({id:n("Settings.locales.row.id"),defaultMessage:"ID"})})}),e.jsx(E,{children:e.jsx(p,{variant:"sigma",textColor:"neutral600",children:c({id:n("Settings.locales.row.displayName"),defaultMessage:"Display name"})})}),e.jsx(E,{children:e.jsx(p,{variant:"sigma",textColor:"neutral600",children:c({id:n("Settings.locales.row.default-locale"),defaultMessage:"Default locale"})})}),e.jsx(E,{children:e.jsx(fe,{children:"Actions"})})]})}),e.jsx(je,{children:a.map(i=>e.jsxs(b.Fragment,{children:[e.jsxs(R,{onClick:l(i.id),style:{cursor:t?"pointer":"default"},children:[e.jsx(A,{children:e.jsx(p,{textColor:"neutral800",children:i.id})}),e.jsx(A,{children:e.jsx(p,{textColor:"neutral800",children:i.name})}),e.jsx(A,{children:e.jsx(p,{textColor:"neutral800",children:i.isDefault?c({id:n("Settings.locales.default"),defaultMessage:"Default"}):null})}),e.jsx(A,{children:e.jsxs(T,{gap:1,justifyContent:"flex-end",onClick:o=>o.stopPropagation(),children:[t&&e.jsx(Le,{...i}),r&&!i.isDefault&&e.jsx(Ae,{...i})]})})]}),e.jsx(K,{...i,onOpenChange:()=>d(void 0),open:s===i.id})]},i.id))})]})},Fe=()=>{const{formatMessage:a}=f(),{toggleNotification:r}=S(),{_unstableFormatAPIError:t}=M(),{data:s,isLoading:d,error:c}=te(),{isLoading:l,allowedActions:{canUpdate:i,canCreate:o,canDelete:u}}=re($);return b.useEffect(()=>{c&&r({type:"danger",message:t(c)})},[c,t,r]),d||l?e.jsx(L.Loading,{}):c||!Array.isArray(s)?e.jsx(L.Error,{}):e.jsxs(L.Main,{tabIndex:-1,children:[e.jsx(w.Header,{primaryAction:e.jsx(_,{disabled:!o}),title:a({id:n("plugin.name"),defaultMessage:"Internationalization"}),subtitle:a({id:n("Settings.list.description"),defaultMessage:"Configure the settings"})}),e.jsx(w.Content,{children:s.length>0?e.jsx(Ie,{locales:s,canDelete:u,canUpdate:i}):e.jsx(ne,{icon:e.jsx(ie,{width:void 0,height:void 0}),content:a({id:n("Settings.list.empty.title"),defaultMessage:"There are no locales"}),action:e.jsx(_,{disabled:!o,variant:"secondary"})})})]})},Te=()=>e.jsx(L.Protect,{permissions:$.read,children:e.jsx(Fe,{})});export{Te as ProtectedSettingsPage,Fe as SettingsPage};