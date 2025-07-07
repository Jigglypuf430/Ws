// sw.js
const CACHE_NAME = 'secure-bank-v2';
const ASSETS = [
  '/css/styles.css',
  '/js/app.js',
  '/logo.png',
  '/apple-touch-icon.png',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', e =>
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  )
);

self.addEventListener('activate', e =>
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  )
);

self.addEventListener('fetch', event => {
  // For navigation requests (i.e. the “app shell”), always try network first
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(resp => {
          // update the shell in cache for next time
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return resp;
        })
        .catch(() =>
          // if offline, fall back to cached index.html
          caches.match('/index.html')
        )
    );
    return;
  }

  // For other requests, do cache-first
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request)
    )
  );
});
