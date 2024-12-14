import{o as S,u as x,s as T,gk as P,r as g,gl as O,gm as W,gn as A,j as a,P as k,b as j,B as w,F as h,av as I,T as F}from"./strapi-BCf4qKUQ.js";import{u as _}from"./useDragLayer-CBz2FbKb.js";const f={id:"notification.error",defaultMessage:"An error occurred, please try again"},B=(n={})=>{const{toggleNotification:e}=S(),{formatMessage:t}=x(),{_unstableFormatAPIError:r}=T(),{skip:i=!1,...u}=n,{data:o,isLoading:E,error:l}=P({populate:"stages",...u},{skip:i});g.useEffect(()=>{l&&e({type:"danger",message:r(l)})},[l,r,e]);const[p]=O(),D=g.useCallback(async c=>{try{const s=await p({data:c});return"error"in s?(e({type:"danger",message:r(s.error)}),s):(e({type:"success",message:t({id:"actions.created",defaultMessage:"Created workflow"})}),s)}catch(s){throw e({type:"danger",message:t(f)}),s}},[p,r,t,e]),[m]=W(),b=g.useCallback(async(c,s)=>{try{const d=await m({id:c,data:s});return"error"in d?(e({type:"danger",message:r(d.error)}),d):(e({type:"success",message:t({id:"actions.updated",defaultMessage:"Updated workflow"})}),d)}catch(d){throw e({type:"danger",message:t(f)}),d}},[r,t,e,m]),[y]=A(),R=g.useCallback(async c=>{try{const s=await y({id:c});if("error"in s){e({type:"danger",message:r(s.error)});return}return e({type:"success",message:t({id:"actions.deleted",defaultMessage:"Deleted workflow"})}),s.data}catch(s){throw e({type:"danger",message:t(f)}),s}},[y,r,t,e]),{workflows:C=[],meta:M}=o??{};return{meta:M,workflows:C,isLoading:E,error:l,create:D,delete:R,update:b}},G={STAGE:"stage"},L=({name:n})=>a.jsxs(h,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:"30rem",children:[a.jsx(h,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:a.jsx(I,{width:"0.8rem",fill:"neutral600"})}),a.jsx(F,{fontWeight:"bold",children:n})]});function v(n,e,t){if(!n||!e||!t)return{display:"none"};const{x:r,y:i}=t;return{transform:`translate(${r}px, ${i}px)`}}const N=()=>{const{itemType:n,isDragging:e,item:t,initialOffset:r,currentOffset:i,mouseOffset:u}=_(o=>({item:o.getItem(),itemType:o.getItemType(),initialOffset:o.getInitialSourceClientOffset(),currentOffset:o.getSourceClientOffset(),isDragging:o.isDragging(),mouseOffset:o.getClientOffset()}));return!e||n!==G.STAGE?null:a.jsx(w,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:a.jsxs(w,{style:v(r,i,u),children:[a.jsx(L,{name:typeof t.item=="string"?t.item:null}),";"]})})},$=({children:n})=>a.jsx(k.Main,{children:a.jsx(j.Content,{children:n})}),q=({title:n,subtitle:e,navigationAction:t,primaryAction:r})=>{const{formatMessage:i}=x();return a.jsxs(a.Fragment,{children:[a.jsx(k.Title,{children:i({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:n})}),a.jsx(j.BaseHeader,{navigationAction:t,primaryAction:r,title:n,subtitle:e})]})};export{N as D,q as H,$ as R,G as a,B as u};
