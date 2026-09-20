const CACHE='my-health-v1';
const ASSETS=['./','./index.html','./manifest.json','./icon-180.png','./hero_plant.png','./hero_plant2.png','./bottom_left_clean.png','./bottom_right_clean.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const c=x.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));return x}))));
