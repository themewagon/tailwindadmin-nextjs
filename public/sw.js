const CACHE_NAME = 'tailwind-admin-cache-v2';
const BASE_PATH = '/tailwindadmin-nextjs';
const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/auth/login/`,
  `${BASE_PATH}/icons/icon-192.png`,
  `${BASE_PATH}/icons/icon-512.png`,
];

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate SW
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch cached resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
