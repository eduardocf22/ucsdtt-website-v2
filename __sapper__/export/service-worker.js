!function(){"use strict";const e=["client/members.203e3838.js","client/rush.541e7c94.js","client/[slug].31c040bd.js","client/faq.deab8181.js","client/index.2022ab02.js","client/chunk.67a6d449.js","client/chunk.39ca5c26.js","client/about.0b55eeba.js","client/index.5aa794c6.js","client/client.6974590b.js"].concat(["service-worker-index.html","favicon.ico","global.css","icons/garnett-unfilled.svg","icons/garnett.svg","icons/pillar-white.png","icons/pillar-white.xcf","icons/pillar.png","icons/pillar.svg","images/founders.jpg","images/hamntongs.png","images/pi_fun.jpg","images/sigma_fun.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1562046370135").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1562046370135"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1562046370135").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
