'use strict';

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/javascripts/main.js',
    '/images/icons/favicon-32x32.png',
    '/images/icons/dontforget_144x144.png',
    '/manifest.json',
    '/styles/style.css',
    '/styles/normalize.css'
];

self.addEventListener('install', function(event) {
    console.log('OWWWWWEEEEEEEEE')
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(function(error) {
                console.error('Service Worker Error', error);
            })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('fetchhhhhhhhh')
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        console.log('caches!')
                        return response;
                    }
                    return fetch(event.request);
                }
            )
            .catch(function(error) {
                console.error('Service Worker Error', error);
            })
    );
});