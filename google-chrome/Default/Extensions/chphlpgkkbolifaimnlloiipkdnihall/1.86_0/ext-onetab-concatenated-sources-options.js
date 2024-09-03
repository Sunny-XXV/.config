// Copyright 2024 OneTab Ltd.  All rights reserved.
const E="1.86",le=!1,de=!1,fe=!1,pe=!1,we=!1,he=!1,me=!0,xe="chrome://",ge="chrome://newtab/",ye="https://www.one-tab.com",be=!1,Te=!1,ve=!1;async function I(){return new Promise((e,t)=>{document.readyState==="complete"?e():document.addEventListener("readystatechange",n=>{document.readyState==="complete"&&e()})})}async function U(){await A(),await I(),N()}async function A(){try{await chrome.tabs.update((await chrome.tabs.getCurrent()).id,{autoDiscardable:!1})}catch(e){console.log(e)}}function Se(e){if(typeof e=="string"&&(e=document.getElementById(e)),!!e)for(;e.childNodes.length>0;)e.childNodes[0].remove()}function De(e){return c(void 0,"div",{style:{fontSize:"1px",height:e+"px",width:"1px"}}).o}let y=!1;async function F(e,t={}){if(!y){const r=async()=>{if((await chrome.runtime.sendMessage({args:[],type:"corePing",L:!0}))?.result?.pong!==String(E))throw new Error("core version mismatch")};try{await r()}catch(o){if(o.message==="core version mismatch")throw o;console.log(o),console.log("core not ready. retrying..."),await m(1e3);try{await r()}catch(i){console.log(i),console.log("core not ready. retrying..."),await m(5e3);try{await r()}catch(s){throw console.log(s),new Error("Cannot connect to core")}}}y=!0}t.type=e,t.L=!0;let n=await chrome.runtime.sendMessage(t);if(n===null)throw new Error("null message response from core");if(n?.P)throw new Error(n.P);return n.result}function Pe(e){chrome.runtime.onMessage.addListener((t,n,r)=>{t.type==="stateChange"&&e(t.U)})}const Le=new Proxy({},{get(e,t){return t}}),h=new Proxy({},{get(e,t,n){return(...r)=>(r=x(r,void 0,ne),F(t,{args:r}))}});let k=navigator.language||navigator.userLanguage;function G(){let e=["ar","he","fa","ps","ur"],t=k.split("-",1)[0];return e.indexOf(t)>=0?"rtl":"ltr"}let b=G();function u(){return b!=="rtl"}function N(){document.getElementsByTagName("html")[0].dir=b}function p(){return u()?"Left":"Right"}function Re(){return u()?"Right":"Left"}function j(){return u()?"left":"right"}function Ce(){return u()?"right":"left"}function $(e,t){u()?e.style.left=t:e.style.right=t}function Ee(e,t){u()?e.style.right=t:e.style.left=t}function T(e,t){u()?e.style.paddingLeft=t:e.style.paddingRight=t}function Ie(e,t){u()?e.style.paddingRight=t:e.style.paddingLeft=t}function M(e,t){u()?e.style.marginLeft=t:e.style.marginRight=t}function W(e){return c(void 0,"div",{id:"headerText",style:{paddingTop:"40px",paddingBottom:"20px",[`padding${p()}`]:"240px",fontSize:"16px",color:"var(--text-color-weak)",fontWeight:"300",borderBottom:"1px dashed var(--dash-color)",marginBottom:"10px"},textContent:e}).o}function B(e,t,n){return c(void 0,"picture",{style:{...e},...t,children:{S:c(void 0,"source",{srcset:n(!0),media:"(prefers-color-scheme: light)"}),C:c(void 0,"source",{srcset:n(!1),media:"(prefers-color-scheme: dark)"}),v:c(void 0,"img",{style:{width:"100%",height:"100%"}})}}).o}function H(){return B({width:416/2+"px",height:114/2+"px",position:"absolute",top:"16px",[`${j()}`]:"19px"},{},e=>`images/top-left-logo-${e?"light":"dark"}${u()?"":"-rtl"}.png`)}function Ue(e,t,n){let r=document.createElement("div"),o=document.createElement("div");T(o,"30px"),o.style.position="relative";let i=document.createElement("img");i.src=e?"images/twister-open.png":"images/twister-closed"+(u()?"":"-rtl")+".png",i.style.width=48/2+"px",i.style.height=50/2+"px",i.style.position="absolute",$(i,"0px"),i.style.top="0px",o.textContent=t,o.style.fontSize="16px",o.style.cursor="pointer",r.appendChild(o),o.appendChild(i);let s=document.createElement("div");T(s,"30px"),s.style.paddingTop="10px",s.appendChild(n.o),s.style.display=e?"block":"none",r.appendChild(s),o.onclick=()=>{e=!e,i.src=e?"images/twister-open.png":"images/twister-closed"+(u()?"":"-rtl")+".png",s.style.display=e?"block":"none"};let l={I:n.o};return Object.assign(l,n),l.o=r,l}function Ae(e,t,n,r){let o=document.createElement("div");o.style.fontSize=t+"px",o.className="clickable";let i=document.createElement("span");if(r){let s=document.createElement("span");s.textContent=a("newExclamation")+" ",i.appendChild(s)}return typeof e=="string"?i.appendChild(document.createTextNode(e)):i.appendChild(e),i.style.verticalAlign="middle",i.onclick=s=>{n(i)},o.appendChild(i),o}const v=chrome.runtime.getURL("onetab.html"),S=v.substring(0,v.length-"onetab.html".length);let D=!0;async function Fe(){return D?(await chrome.permissions.getAll()).permissions.includes("tabGroups")&&chrome.tabGroups:!1}async function ke(){if(!D)return!1;try{return await chrome.permissions.request({permissions:["tabGroups"]})}catch(e){return console.log('chrome.permissions.request for "tabGroups" permission failed with error:'),console.log(e),!1}}function Ge(e){let t=P(e);return t.toLowerCase().startsWith("www.")?t.substring("www.".length):t}function P(e){return e?(e.indexOf("//")===0&&(e="http:"+e),e.indexOf("://")===-1&&(e="http://"+e),e=e.substring(e.indexOf("://")+"://".length),e.indexOf("/")!==-1&&(e=e.substring(0,e.indexOf("/"))),e.indexOf(":")!==-1&&(e=e.substring(0,e.indexOf(":"))),e.indexOf("?")!==-1&&(e=e.substring(0,e.indexOf("?"))),e.indexOf("#")!==-1&&(e=e.substring(0,e.indexOf("#"))),e.toLowerCase()):"undefined"}function Ne(e){return e.indexOf("://")===-1?"https://":(e=e.substring(0,e.indexOf("://")+"://".length),e.toLowerCase())}let L=["com","co.uk","org.uk","net","org","de","ru","info","xyz","nl"];function je(e){let t=P(e);try{for(let n in L){let r="."+L[n];if(K(t,r)){for(t=t.substring(0,t.length-r.length);t.indexOf(".")!==-1;)t=t.substring(t.indexOf(".")+1);t=t+r;break}}return t.indexOf("www.")===0&&(t=t.substring("www.".length)),t}catch{return t}}function O(e){e.noCacheRandom=_()}function _(){return new Date().getTime()+Math.round(Math.random()*1e4)+""}async function $e(e,t){O(t);let n=JSON.stringify(t);return await(await V(e,n)).json()}async function V(e,t){let n={};t?(n.method="POST",n.body=t):n.method="GET",n.headers=new Headers,n.headers.append("Content-Type","text/json");let r=await fetch(e,n);if(r.status===200)return r;throw new Error("http response code"+r.status)}function Me(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const q="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");function z(e,t){let n=q,r=[],o=0;for(t=t||n.length,e=e||22,o=0;o<e;o++)r[o]=n[0|Math.random()*t];return r.join("")}function J(){return z()}function We(){return J()}function Be(e){return e==null?"":e.replace(/^\s+/,"").replace(/\s+$/,"")}function He(...e){return(t,n)=>e.reduce((r,o)=>r||o(t,n),0)}function Oe(e){return(t,n)=>e(t)-e(n)}function _e(e){return(t,n)=>e(n)-e(t)}const Ve=(e,t)=>!!t.starred-!!e.starred||e.starred&&t.starred&&t.starredDate-e.starredDate||t.createDate-e.createDate;function qe(e){return e||(e=""),e.replace(/[\x00-\x1F\x7F-\x9F]/g,"")}function K(e,t){return e?e.indexOf(t,e.length-t.length)!==-1:!1}const Q={restoreWindow:"newWindow",pinnedTabs:"ignore",startupLaunch:"displayOneTab",restoreRemoval:"default",duplicates:"allow",pinned:"true"};function ze(e,t){return t[e]?t[e]:Q[e]}function Je(e,t,n){e.parentNode&&e.remove(),t.insertBefore(e,n===void 0||n>=t.children.length||t.children.length===0?null:t.children[Math.max(0,n)])}function c(e,t,n){let r=t===void 0?e:document.createElement(t),o={};if(n){n.style&&Object.assign(r.style,n.style);for(let s of Object.keys(n))s!=="style"&&s!=="children"&&(r[s]=n[s]);if(n.children)for(const[s,l]of Object.entries(n.children))o[s]=l,r.appendChild(l instanceof HTMLElement?l:l.o);n.l&&r.appendChild(n.l),n.init&&n.init(r)}t!==void 0&&e&&e.appendChild(r);let i={o:r};return Object.assign(i,o),i}const R="about:reader?url=";function Ke(e){return e?e.indexOf(":")===-1?"https://"+e:e.indexOf(R)===0?decodeURIComponent(e.substring(R.length)):e.startsWith(`${S}placeholder.html?`)?new URLSearchParams(e.substring(e.indexOf("?"))).get("url"):e:""}function Qe(e){return parseInt(e.match(/\d+/)[0])}const C=[...new Array(30)].map((e,t)=>parseInt(10+Math.pow(1.6,t)));function*X(e){let t=0;for(;C.slice(0,t).reduce((n,r)=>n+r,0)<e;)yield C[t++]}async function Xe(e,t,n){let r=0;for(let o of X(e)){if(await n(r))return;await m(o),r+=o}throw new Error(`Timeout waiting for condition ${t}`)}function a(e){let t=chrome.i18n.getMessage(e);return t||(console.log("No translation available for: "+e),e)}function Ye(e,t,n){return t&&((e||"").toLowerCase().startsWith("file:")||Y(e))?n?`data:text/html, <html><body><div id="placeholderUrl">${e}</div></body></html>`:`${S}placeholder.html?url=${encodeURI(e)}`:e}async function Ze(){try{return!await chrome.extension.isAllowedFileSchemeAccess()}catch(e){return console.log(e),!0}}function Y(e){for(let t of Z)if(e.startsWith(t))return!0;return!!(!e||e===""||e.startsWith("chrome-devtools:"))}const Z=["javascript:","about:",...["chrome://","edge://","data:"].filter(e=>!1),...["edge://","chrome://"].map(e=>["newtab","new-tab-page","print","network-error","badcastcrash","inducebrowsercrashforrealz","crash","crashdump","kill","hang","shorthang","gpuclean","gpucrash","gpuhang","memory-exhaust","memory-pressure-critical","memory-pressure-moderate","ppapiflashcrash","ppapiflashhang","quit","restart"].map(t=>`${e}${t}/`)).flat()];async function m(e){return new Promise(t=>setTimeout(t,e))}class ee{async put(t,n){await chrome.storage.local.set({[t]:n})}async get(t){return(await chrome.storage.local.get([t]))[t]}async remove(t){return await chrome.storage.local.remove(t)}}const te=new ee;function w(){return te}const ne="undefined-34LKmiHxP3Mu48u8qrDaHf";function x(e,t,n){return Array.isArray(e)?e.map(r=>x(r,t,n)):typeof e=="object"&&e!==null?Object.fromEntries(Object.entries(e).map(([r,o])=>[r,x(o,t,n)])):e===t?n:e}const et="c",tt="e",nt="t";class re{async put(t,n){await chrome.storage.session.set({[t]:n})}async get(t){return(await chrome.storage.session.get([t]))[t]}async getAll(){return await chrome.storage.session.get(null)}async remove(t){return await chrome.storage.session.remove(t)}async clearAll(){await chrome.storage.session.clear()}}class oe{async put(t,n){await w().put("sessionStore",{...await this.getAll(),[t]:n})}async get(t){return(await this.getAll())[t]}async getAll(){return await w().get("sessionStore")??{}}async remove(t){let n=await this.getAll();delete n[t],await w().put("sessionStore",n)}async clearAll(){await w().remove("sessionStore")}}const ie=chrome.storage.session?new re:new oe;function rt(){return ie}function ot(){return navigator.userAgent.includes(" Edg/")}async function it(e){let[t]=await chrome.tabs.query({windowId:e.windowId,active:!0});t&&t.id!==e.id?(await chrome.tabs.update(e.id,{active:!0}),await chrome.tabs.update(t.id,{active:!0})):console.log("No active tab found")}setTimeout(async()=>{await U(),await ae()},1);function ae(){se()}function se(){c(document.getElementById("contentAreaDiv"),void 0,{style:{paddingTop:"0px",[`padding${p()}`]:"0px"},children:{j:H(),header:W(a("options")),tn:c(void 0,"div",{style:{paddingTop:"24px",[`padding${p()}`]:"36px"},children:{nn:d("restoreWindow",a("optionTabGroupRestoreTitle"),[{settingValue:"newWindow",title:a("optionTabGroupRestoreNewWindow")},{settingValue:"newWindowAlways",title:a("optionTabGroupRestoreNewWindowAlways")},{settingValue:"currentWindow",title:a("optionTabGroupRestoreCurrentWindowAlways")}]),rn:d("pinnedTabs",a("optionPinnedTabsTitle"),[{settingValue:"ignore",title:a("optionPinnedTabsDontSend"),en:a("optionPinnedTabsDontSendDesc")},{settingValue:"allow",title:a("optionPinnedTabsAllow")}],a("optionPinnedTabsNote")),on:d("startupLaunch",a("optionStartupLaunchTitle"),[{settingValue:"displayOneTab",title:a("optionStartupLaunchDisplay")},{settingValue:"none",title:a("optionStartupLaunchNone"),en:a("optionStartupLaunchNoneDesc")}]),an:d("restoreRemoval",a("optionRestoreRemovalTitle"),[{settingValue:"default",title:a("optionRestoreRemovalDefault"),en:a("optionRestoreRemovalDefaultDesc")},{settingValue:"keep",title:a("optionRestoreRemovalKeep"),en:a("optionRestoreRemovalKeepDesc")}]),sn:d("duplicates",a("optionDuplicatesTitle"),[{settingValue:"allow",title:a("optionDuplicatesAllow")},{settingValue:"reject",title:a("optionDuplicatesReject"),en:a("optionDuplicatesRejectDesc")}])}})}})}function d(e,t,n,r){let o=c(void 0,"div",{style:{paddingBottom:"40px",maxWidth:"600px"},children:{heading:c(void 0,"div",{style:{fontSize:"14px",paddingBottom:"0px"},textContent:t})}}).o;return n.forEach(i=>o.appendChild(ue(e,`optionGroup-${e}`,i))),r&&c(o,"div",{style:{fontSize:"12.25px",color:"var(--text-color-weak)",paddingTop:"10px",paddingLeft:"0px"},textContent:r}),o}let ce=0;function ue(e,t,n){let r="optionId"+ce++,o=n.settingValue,i=c(void 0,"div",{style:{paddingBottom:"0px"}}).o,s=c(void 0,"input",{style:{cursor:"pointer"},id:r,type:"radio",name:t}).o;h.ve(e).then(f=>{f===o&&(s.checked=!0)}),s.addEventListener("click",()=>{(async()=>{let f=await h.getSettings();f[e]=o,await h.se(f)})()});let l=c(void 0,"label",{style:{fontSize:"14px",cursor:"pointer"},htmlFor:r,textContent:" "+n.title}).o;i.appendChild(s),i.appendChild(l),M(i,"-5px");let g=c(void 0,"div",{style:{color:"var(--text-color-weak)",fontSize:"12.25px",paddingTop:"4px",[`padding${p()}`]:"30px"}}).o;return n.en&&(g.textContent=n.en),i.appendChild(g),i}
