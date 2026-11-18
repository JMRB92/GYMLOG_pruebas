const CACHE='gymlog-v1.17';
const SHELL=["./","./index.html","./manifest.webmanifest","./favicon.svg","./favicon-32.png","./apple-touch-icon.png","./icon-192.png","./icon-512.png","./icon-512-maskable.png","./gym-log-logo.png","./doblejota-logo.png","./assets-gymlog247-qr.png","./data/ejercicios.xlsx","./data/exercises-fallback.json","./data/routines.json","./config/pro-config.json","./assets/exercises/curl-barra-z.webp","./assets/exercises/elevaciones-laterales.webp","./assets/exercises/jalon-bilateral.webp","./assets/exercises/press-inclinado.webp","./assets/exercises/press-plano.webp","./assets/exercises/sin-imagen.svg","./assets/exercises/triceps-cuerda.webp"];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('gymlog-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 if(['/data/ejercicios.xlsx','/data/exercises-fallback.json','/data/routines.json','/config/pro-config.json'].some(path=>url.pathname.endsWith(path))){
  event.respondWith(fetch(req,{cache:'no-store'}).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match(req).then(r=>r||Response.error())));return;
 }
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res})));
});
