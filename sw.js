const CACHE='gymlog-v1.11';
const SHELL=['./','./index.html','./manifest.webmanifest','./favicon.svg','./favicon-32.png','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./icon-512-maskable.png','./gym-log-logo.png','./doblejota-logo.png','./assets-gymlog247-qr.png','./data/routines.json','./config/pro-config.json'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('gymlog-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 if(url.pathname.endsWith('/data/routines.json')||url.pathname.endsWith('/config/pro-config.json')){
  event.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match(req).then(r=>r||Response.error())));return;
 }
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res})));
});
