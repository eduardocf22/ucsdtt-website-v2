!function(){"use strict";const e=["client/chunk.ae9bbe36.js","client/faq.e815e7c5.js","client/rush.aca48f86.js","client/[slug].8f74add4.js","client/index.9556d3e3.js","client/chunk.744eb7d4.js","client/members.c0170639.js","client/chunk.75583514.js","client/about.bd665994.js","client/index.d08ce268.js","client/client.a7b9d49c.js"].concat(["service-worker-index.html","favicon.ico","global.css","icons/garnett-unfilled.svg","icons/garnett.svg","icons/pillar-white.png","icons/pillar-white.xcf","icons/pillar.png","icons/pillar.svg","images/founders.jpg","images/hamntongs.png","images/pi_fun.jpg","images/sigma_fun.jpg","images/tau_class.JPG","images/tau_cute.jpg","images/upsilon_class.jpg","images/upsilon_class_2.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1562215417935").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1562215417935"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1562215417935").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
