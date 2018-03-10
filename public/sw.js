var staticCacheName = 'speedlane-v1.2';  // Update this to refresh the caches for future updates

var filesToCache = [
  '/',
  '/index.html',
  '/js/index.js',
  '/images/logo.png',
  '/lib/qrcode.min.js',
  '/lib/material_icons.css',
  '/lib/material_icons.woff2',
  '/lib/material.min.css',
  '/lib/material.min.js',
  '/webManifest.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

// A new service worker has been found - delete the caches of the old service workers and only use the new one
self.addEventListener('activate', function (event) {
  console.log('Activating new service worker...');

  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});