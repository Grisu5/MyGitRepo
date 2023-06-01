var cacheName = "petapp";
var cacheFiles = [
    "index.htlm",
    "products.js",
    "petapp.webmanifest",
    "img/cat.jpg",
    "img/Cat03.jpg",
    "img/icon-store-512.png"
];
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil (
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});
