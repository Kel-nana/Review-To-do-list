if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const c=e=>n(e,o),l={module:{uri:o},exports:s,require:c};i[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(t(...e),s)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"515a46d2214f8818783c.webp",revision:null},{url:"index.html",revision:"2a37613e121c6c45d27f9f5e75f0e3af"},{url:"main.bundle.js",revision:"b685ce2b43c553a415818c16bbd76416"},{url:"main.bundle.js.LICENSE.txt",revision:"dca2216dcfc4f9591480833c2418b5cd"}],{})}));
