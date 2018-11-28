const filesToCache = [
    '/',
    '/index.html',
    '/404.html',
    '/project1/add-two-number.html',
    '/project1/js/addtwonumbers.js',
    '/project1/grid.html',
    '/project2/peta.html',
    '/project2/css/peta.css',
    '/project2/js/peta.js',
    '/project3/peta.html',
    '/project3/readnote.html',
    '/project3/css/peta.css',
    '/project3/data/catatan.json',
    '/project3/data/catatan.txt',
    '/project3/data/peta.json',
    '/project3/images/img-1.jpg',
    '/project3/images/img-2.jpg',
    '/project3/images/img-3.jpg',
    '/project3/images/img-4.jpg',
    '/project3/images/img-5.jpg',
    '/project3/js/peta.jpg',
    '/project3/js/readnote.jpg'
];
self.addEventListener('install', event => {
    console.log('Persiapan Cache');
    event.waitUntil(
        caches.open('mws-satyadara')
            .then(cache => {
                return cache.add('/',
                    '/index.html',
                    '/404.html',
                    '/project1/add-two-number.html',
                    '/project1/js/addtwonumbers.js',
                    '/project1/grid.html',
                    '/project2/peta.html',
                    '/project2/css/peta.css',
                    '/project2/js/peta.js',
                    '/project3/peta.html',
                    '/project3/readnote.html',
                    '/project3/css/peta.css',
                    '/project3/data/catatan.json',
                    '/project3/data/catatan.txt',
                    '/project3/data/peta.json',
                    '/project3/images/img-1.jpg',
                    '/project3/images/img-2.jpg',
                    '/project3/images/img-3.jpg',
                    '/project3/images/img-4.jpg',
                    '/project3/images/img-5.jpg',
                    '/project3/js/peta.jpg',
                    '/project3/js/readnote.jpg');
            })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(data => {
                if (data) {
                    return data;
                }
                // tidak ada response, ambil ke jaringan
                else {
                    return fetch(event.request)
                }

            })
            .catch(error => {
                return new Response("Error : " + error);
            })
    );
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf('mws-satyadara') !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

