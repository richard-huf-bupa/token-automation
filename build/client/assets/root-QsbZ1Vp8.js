import{j as t}from"./jsx-runtime-0DLF9kdB.js";import{n as d,o as y,p as f,q as x,r as i,_ as S,O as g,M as w,L as j,S as _}from"./components-DfA0yev_.js";/**
 * @remix-run/react v2.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function k({getKey:e,...l}){let{isSpaMode:c}=d(),r=y(),p=f();x({getKey:e,storageKey:a});let u=i.useMemo(()=>{if(!e)return null;let s=e(r,p);return s!==r.key?s:null},[]);if(c)return null;let m=((s,h)=>{if(!window.history.state||!window.history.state.key){let o=Math.random().toString(32).slice(2);window.history.replaceState({key:o},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(o){console.error(o),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",S({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(u)})`}}))}const O=()=>[{title:"Very cool app | Remix"},{property:"og:title",content:"Very cool app"},{name:"description",content:"This app is the best"}],R=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function E({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(w,{}),t.jsx(j,{}),typeof document>"u"?"__STYLES__":null]}),t.jsxs("body",{children:[e,t.jsx(k,{}),t.jsx(_,{}),!1]})]})}function I(){return t.jsx(g,{})}export{E as Layout,I as default,R as links,O as meta};
