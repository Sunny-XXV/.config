// Copyright 2024 OneTab Ltd.  All rights reserved.
function u(t){return!(t==null||!t||!(t+"").trim())}function r(t,e,l){if(!e)return null;try{if(e.tagName==="A"){if(e.href===t&&u(e.textContent))return e.textContent}else if(l==="down"){if(e.childNodes)for(let n of Array.from(e.childNodes)){let i=r(t,n,"down");if(u(i))return i}}else if(l==="up"){if(e.parentElement)return r(t,e.parentElement,"up")}else if(l==="both"){let n=r(t,e,"down");if(n||(n=r(t,e,"up")),u(n))return n}}catch(n){return console.log(n),null}}function f(t){return t&&(t=t.replace(/\s\s+/g," ").trim(),t)}function c(t){try{let e;try{let l=window.getSelection().extentNode;e=r(t,l,"both"),e=f(e)}catch(l){console.log(l)}if(e)return e;{let l=document.links;for(let n=0;n<l.length;n++){let i=l[n].href;if(new URL(i,document.baseURI).href===t){let o=l[n].textContent;if(o=f(o),!o)continue;return o}}}}catch(e){console.log(e)}return t}window.t||(window.t=!0,chrome.runtime.onMessage.addListener((t,e,l)=>{if(t.type==="getLinkTitle"){let n=t.url,i=c(n);l({url:n,title:i})}}));
