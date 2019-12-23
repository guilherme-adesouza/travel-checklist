'use strict';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
        .then(function(swReg) {
            console.log('Service Worker is registered', swReg);
        })
        .catch(function(error) {
            console.error('Service Worker Error', error);
        });
    });
} else {
    console.warn('Service worker not supported')
}