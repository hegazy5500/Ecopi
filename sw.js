const CACHE_NAME = 'ecoloop-static-v1';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './sw.js',
  './assets/css/styles.css',
  './assets/js/app.js',
  './assets/img/logo.svg',
  './assets/img/hero-illustration.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
