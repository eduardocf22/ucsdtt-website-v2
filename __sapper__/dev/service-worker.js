(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1562213625457;

	const files = [
		"service-worker-index.html",
		"favicon.ico",
		"global.css",
		"icons/garnett-unfilled.svg",
		"icons/garnett.svg",
		"icons/pillar-white.png",
		"icons/pillar-white.xcf",
		"icons/pillar.png",
		"icons/pillar.svg",
		"images/founders.jpg",
		"images/hamntongs.png",
		"images/pi_fun.jpg",
		"images/sigma_fun.jpg",
		"images/tau_class.JPG",
		"images/tau_cute.jpg",
		"images/upsilon_class.jpg",
		"images/upsilon_class_2.jpg",
		"manifest.json"
	];

	const shell = [
		"client/chunk.cebb6f67.js",
		"client/client.d2e1cc16.js",
		"client/chunk.2eabe72b.js",
		"client/index.e099de39.js",
		"client/chunk.e0035de7.js",
		"client/members.de8043d7.js",
		"client/about.433921c1.js",
		"client/index.9b2bc557.js",
		"client/[slug].5a8530d5.js",
		"client/rush.94f73f46.js",
		"client/faq.1b9fb873.js",
		"client/sapper-dev-client.66640646.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
