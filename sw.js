/* const staticCacheName = 'site-static'
const assets = [
    '/',
    '/index.html',
    '/persperctives.html',
    '/src/js/app.js',
    '/src/js/bootstrap.min.js',
    '/src/js/jquery.min.js',
    '/src/js/popper.min.js',
    '/src/js/script.js',
    '/src/js/tr.js',
    '/src/css/bootstrap.min.css',
    '/src/css/style.css',
    '/src/database/data.json',
    '/src/img/icon/climate-icon-0.jpg',
    '/package-lock.json',
    '/node_modules/chart.js/dist/chart.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
] */
//install service workers
// In your service worker
importScripts('https://cdnjs.cloudflare.com/ajax/libs/cache.adderall/1.0.0/cache.adderall.js');
const cachename = 'cache-v2'
const dynamicCache = "dynamic-cache-v1"
var STATIC_FILES = [
  '/'
];

self.addEventListener('install', event => {
    console.log('installé')
  event.waitUntil(
    caches.open(cachename).then(cache =>
      adderall.addAll(cache, STATIC_FILES)
    ).then(console.log('ok'))
  );
});
//activate service workers 123
self.addEventListener('activate',evt => {
    //console.log('service worker activé')
    evt.waitUntil(
        caches.keys().then(keys=>{
            return Promise.all(keys
                .filter(key => key != dynamicCache)
                .map(key => caches.delete(key))
            )
        })
    )
})

//fetch event 
self.addEventListener('fetch',evt => {
    //console.log('fetch event',evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes=>{
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone())
                    return fetchRes;
                })
            });
        }
            )
    )
})