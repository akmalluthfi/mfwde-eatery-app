if(!self.define){let e,s={};const i=(i,f)=>(i=new URL(i+".js",f).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>i(e,o),a={module:{uri:o},exports:r,require:c};s[o]=Promise.all(f.map((e=>a[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-13a68322"],(function(e){"use strict";e.setCacheNameDetails({prefix:"static-eatery"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app.min.css",revision:"8bf1c9497feffd404d97f84e275e8a90"},{url:"app.min.js",revision:"b5ebcf2c5682cf54b5c867f4ed4d2a07"},{url:"app.min.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"assets/fonts/fa-regular-400-1f3772178d9e5bed38a6.woff2",revision:null},{url:"assets/fonts/fa-solid-900-41c0f706d8ce93933771.woff2",revision:null},{url:"assets/icons/apple-touch-icon.png",revision:"c6f33f612f5cd21a513b00a8f73bf573"},{url:"assets/icons/icon-192x192.png",revision:"b546d96bf1f8f16f47bc95f48e87ebdd"},{url:"assets/icons/icon-256x256.png",revision:"74f0509b80a97e04d12fcdac5a917fa6"},{url:"assets/icons/icon-384x384.png",revision:"984b7055174b00dafce398ea54fb5f0e"},{url:"assets/icons/icon-512x512.png",revision:"f2ac05bf19cb4d037181105000e0c4f0"},{url:"assets/icons/logo.png",revision:"00c52bf43af86e38a9f2a34372f3de3a"},{url:"assets/images/banner-e43806c95523e2af2cef.jpg",revision:null},{url:"favicon.ico",revision:"8af506bb9d5d87ce9be038263dd5082b"},{url:"index.html",revision:"8dd82011e822ebffbd7ff2cceb2005e8"},{url:"site.webmanifest",revision:"8858eec72a349632feddf494f1a97a46"}],{}),e.registerRoute((({url:e})=>"https://restaurant-api.dicoding.dev"===e.origin),new e.StaleWhileRevalidate({cacheName:"api-cache",plugins:[]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
//# sourceMappingURL=sw.js.map