// Volume Service Worker — v2 (RR-N2 remediation)
// Staged activation per release plan (Agent 7 H §3): a new SW installs, then
// WAITS until all tabs are closed before taking over — never a mid-workout
// takeover. skipWaiting()/clients.claim() removed deliberately.
const CACHE_NAME = 'volume-v4';
const ASSETS = [
  './index.html',
  './grind-dashboard.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  // No skipWaiting(): activation is staged (H §3).
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  // No clients.claim(): open pages keep their current SW until they reload.
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Google Fonts: network-first with cache fallback (unchanged behavior).
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(event.request).then(r => {
        const c = r.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
        return r;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // HTML documents: network-first so shipped fixes actually reach existing
  // users (RR-N2: cache-first previously pinned stale builds indefinitely).
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request).then(r => {
        if (event.request.method === 'GET' && r.status === 200) {
          const c = r.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
        }
        return r;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Static assets (icons, fonts already cached, etc.): cache-first.
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(r => {
      if (event.request.method === 'GET' && r.status === 200) {
        const c = r.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, c));
      }
      return r;
    }))
  );
});
