import{u as a,j as t,bH as s}from"./strapi-BCf4qKUQ.js";import{a as n}from"./SelectRoles-DqX-L_B3-Bfg3QJw7.js";import"./useAdminRoles-MxUoA3eI-Bfu-J258.js";const g=({registrationToken:e})=>{const{formatMessage:i}=a();return e?t.jsx(n,{target:`${window.location.origin}${s()}/auth/register?registrationToken=${e}`,children:i({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})}):t.jsx(n,{target:`${window.location.origin}${s()}/auth/login`,children:i({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."})})};export{g as MagicLinkEE};