!function(){"use strict";const e=["client/members.8e53be85.js","client/rush.68d417a3.js","client/[slug].73ac4098.js","client/faq.d580f2c4.js","client/index.e64b6957.js","client/chunk.fe8cac34.js","client/about.6dd804ea.js","client/chunk.b17b5815.js","client/index.65e73a0a.js","client/client.f773bd9d.js"].concat(["service-worker-index.html","favicon.ico","global.css","icons/garnett-unfilled.svg","icons/garnett.svg","icons/pillar-white.png","icons/pillar-white.xcf","icons/pillar.png","icons/pillar.svg","images/founders.jpg","images/hamntongs.png","images/pi_fun.jpg","images/sigma_fun.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1562038080360").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1562038080360"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1562038080360").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
