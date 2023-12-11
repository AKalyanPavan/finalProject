var cacheName = "currentCache";

self.addEventListener('install', (ev) => {

	console.log("service worker installed");
	
	ev.waitUntil(
		caches.open(cacheName).then((cache) => {
			cache.addAll([
				"./../src/App.js",
				"./../src/index.js",
				"./../src/index.css",
				"./manifest.json",
				"./index.html",
				"./../src/components/header.js",
				"./../src/components/homePage.js",
				"./../src/components/signupPage.js",
				"./../src/components/genericComponents/button.js",
				"./../src/icons/logo.js"
			]);
		}).catch((error) => {
			console.log("cache failes:", error);
		})
	);
});

self.addEventListener('activate', (ev) => {

	console.log("service worker activated");

	ev.waitUntil(clients.claim());
	ev.waitUntil(caches.keys().then((cacheNames) => {
		return Promise.all(cacheNames
			.filter(item => item !== cacheName)
			.map(item => caches.delete(item))
		);
	}));
});

self.addEventListener('fetch', (ev) => {
	// Cache strategy: Network with Cache Fallback
	ev.respondWith(
		fetch(ev.request)
		.catch(() => {
			return caches.open(cacheName).then((cache) => {
				return cache.match(ev.request);
			})
		})
	);
});