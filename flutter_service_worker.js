'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a6c20c7510882c34fc11d4a0825871f2",
"assets/AssetManifest.bin.json": "6604ff0e8765df15740af3e939a89471",
"assets/assets/animations/animation_contact_section.json": "ccb26168cd6c08ece7b08ff42a508971",
"assets/assets/animations/animation_hero.json": "7dc87b189e206597efc806d253f1e6c2",
"assets/assets/animations/flowchart_anim.json": "870cd22875e24f577832b08c149c4015",
"assets/assets/animations/hero_background.json": "8ff81da66794c24c412bbb03e2ed5610",
"assets/assets/animations/mobile%2520animation.json": "7f6b903bd18fb01437b09696bfc4c17a",
"assets/assets/fonts/NotoSans-Bold.ttf": "a165a42685795361b25593effb32fdb1",
"assets/assets/fonts/NotoSans-BoldItalic.ttf": "4f6ff3639c1e5728b905b650c1a06e75",
"assets/assets/fonts/NotoSans-Italic.ttf": "154da4697acc779b55af0a67f1241e4e",
"assets/assets/fonts/NotoSans-Regular.ttf": "2fd9c16b805724d590c0cff96da070a4",
"assets/assets/images/contact_mock.png": "859cde179f131094aae41107d63c275a",
"assets/assets/images/ecom_1.png": "09ac65daeb619582d1b4e87113352722",
"assets/assets/images/ecom_2.png": "478a6f4568b9d68193599e57baacc8e7",
"assets/assets/images/ecom_3.png": "7f418846da8c513237cb2ec234620ea4",
"assets/assets/images/expense_1.png": "bb1803f12bdc0b7f6e88be37c1cd8a3c",
"assets/assets/images/expense_2.png": "5297d560d7ef1b3f2b36a52a099b45c8",
"assets/assets/images/hero_mock.png": "29988099dd42d15087b731c56fa242fa",
"assets/assets/images/landing_dark.png": "3758a3e31b62632b781cf54d4f7d504c",
"assets/assets/images/learnest_1.png": "1b187db2f5a3885f62b57f0ebf485c11",
"assets/assets/images/learnest_2.png": "7ace74610850c6103ee8abde0f4873f0",
"assets/assets/images/learnest_3.png": "e52d5baa33bf25012615a9bcefffff47",
"assets/assets/images/test1.jpg": "2be828cb48a8aa0241d0548c139cf368",
"assets/assets/images/test2.jpg": "8de1c39c89a33cee16e64b1d710d384f",
"assets/assets/images/test3.jpg": "b79afa1eb68af39ebdd96ee6242b26c3",
"assets/assets/images/test_vid_1.mp4": "9285e1aa2af781867c7053fd93c34e7d",
"assets/assets/images/web_blog.png": "30415e9b041b9fbc5268e9ee2ee8d068",
"assets/assets/images/web_dashboard.png": "133d9058f81c7f7153fb4f8ab6ddd6cf",
"assets/assets/images/web_ecom.png": "dca9c14306c7dc82fa49b5b72585c158",
"assets/assets/images/web_port.png": "b9ddc1f11dca332ec28ef7ca31f2df73",
"assets/assets/videos/test_vid_1.mp4": "9285e1aa2af781867c7053fd93c34e7d",
"assets/FontManifest.json": "3c330d00277748353ed993c0845a9f1b",
"assets/fonts/MaterialIcons-Regular.otf": "5310f045dbb39531e1a7c02ea55c49c6",
"assets/NOTICES": "640c1b1de3f5a97c88affadfa11a87b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "83ce4d33d0ead105ac73a51a67ee42d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c7de8df4c642a03a899c5452c3e2ae8",
"/": "6c7de8df4c642a03a899c5452c3e2ae8",
"main.dart.js": "443116a82404ba8846530250a8320164",
"manifest.json": "b752e88784b8c18d27dcd60e930efa70",
"version.json": "7464846b1db45097f96d35e84fa19b88"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
