const staticCacheName = 'site-static'
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
    '/src/img/climate-icon-0.jpg',
    '/src/css/fontawesome-free-5.15.4-web/css/all.css',
    '/package-lock.json',
    '/node_modules/chart.js/dist/chart.min.js'
]
//install service workers
self.addEventListener('install', evt =>{
    //console.log('service worker installé')
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
    })
  );
    
});

//activate service workers 123
self.addEventListener('activate',evt => {
    //console.log('service worker activé')
})

//fetch event 
self.addEventListener('fetch',evt => {
    //console.log('fetch event',evt)
})