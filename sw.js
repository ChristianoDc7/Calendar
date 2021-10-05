const CACHE_NAME = 'pwa-cache-v1'; // cache name and version number (update version number for each update)
const CONTENT_TO_CACHE = [
    '/',
    '/index.html',
    '/scripts/app.js',
    '/styles/styles.css',
    '/assets/icons/android-chrome-192x192.png',
    '/assets/icons/android-chrome-512x512.png',
    '/assets/icons/apple-touch-icon.png',
    '/assets/icons/favicon-16x16.png',
    '/assets/icons/favicon-32x32.png',
    '/assets/icons/mstile-150x150.png',
    '/assets/icons/safari-pinned-tab.svg'
];

// Install event
self.addEventListener('install', function (e) {
    console.log('Service Worker -- Install');

    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('Service Worker -- Caching all: app shell and content');
            return cache.addAll(contentToCache);
        })
    );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
    e.respondWith(
            caches.match(e.request).then(function (response) {
                if (response) {
                    console.debug('Service Worker -- Get data from cache: ' + e.request.url);
                    return response;
                }
    
                return fetch(e.request).then(function (response) {
                    return caches.open(CACHE_NAME).then(function (cache) {
                        console.debug('Service Worker -- Fetch and caching new resource: ' + e.request.url);
                        cache.put(e.request, response.clone());
                        return response;
                    });
                });
            })
        );
    });