self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open('speedlane').then(function (cache) {
        return cache.addAll([
          '/index.html',
          '/js/index.js',
          '/images/logo.png',
          '/lib/qrcode.min.js',
          '/lib/material_icons.css',
          '/lib/material_icons.woff2',
          '/lib/material.min.css',
          '/lib/material.min.js',
          '/webManifest.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function (event) {
  
    console.log(event.request.url);
  
    event.respondWith(
  
      caches.match(event.request).then(function (response) {
  
        return response || fetch(event.request);
  
      })
  
    );
  
  });