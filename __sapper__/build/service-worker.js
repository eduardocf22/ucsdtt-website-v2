!function(){"use strict";const e=["client/about.dc7b7294.js","client/index.9da1d84e.js","client/[slug].2eb46c82.js","client/chunk.b11b1129.js","client/client.ba3f392a.js","client/index.b55c9dfa.js"].concat(["service-worker-index.html","favicon.ico","global.css","great-success.png","icons/garnett-unfilled.svg","icons/garnett.svg","images/pi_fun.jpg","images/sigma_fun.jpg","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1561865520451").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1561865520451"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1561865520451").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();