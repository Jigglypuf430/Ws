const CACHE = 'secure-bank-v2';
const ASSETS = [
  '/', '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/logo.png', '/apple-touch-icon.png',
  '/icon-192.png', '/icon-512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(res => res || fetch(evt.request)));
});