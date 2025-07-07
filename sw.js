// sw.js
const CACHE_NAME = 'secure-bank-v1';
const ASSETS = [
  '/', '/index.html', '/css/styles.css', '/js/app.js',
  '/logo.png', '/apple-touch-icon.png', '/manifest.json',
  '/icon-192.png', '/icon-512.png'
];

self.addEventListener('install', e => 
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()))
);
self.addEventListener('activate', e => 
  e.waitUntil(caches.keys().then(keys => 
    Promise.all(keys.filter(k => k!==CACHE_NAME).map(k=>caches.delete(k)))
  ).then(()=>self.clients.claim()))
);
self.addEventListener('fetch', e => 
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))
);