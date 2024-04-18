'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f254610e3beb250b27266c13c260c8c",
"assets/AssetManifest.bin.json": "686530bcb74cc9879358927fee432fb2",
"assets/AssetManifest.json": "bd3b4d0ed3f308299c52884d5fe66147",
"assets/challenge_image/appBarIcon.png": "4f8c6b403fff4e2bc5d8701fff2069bf",
"assets/challenge_image/books.png": "347d18a809507ab44cbd5e2cb476e741",
"assets/challenge_image/coming_soon.png": "69f54e871d6753d7df2e552337c282a7",
"assets/challenge_image/firstTrip.png": "622b123c44245634ec1222cb3d29e50f",
"assets/challenge_image/first_meeting.png": "1c260cfb7300c3ae3150c6c85b6d451b",
"assets/challenge_image/freelance_work.png": "135c89cc05098b8e9105af5768f0d939",
"assets/challenge_image/LessonImage/play1.png": "6bf18bb580d120cf99b319ac6acc68ed",
"assets/challenge_image/LessonImage/Play2.png": "832790a174c33df60277e61601f4c6af",
"assets/challenge_image/LessonImage/Play3.png": "ff63ea8061971a8d973048920dcf5092",
"assets/challenge_image/LessonImage/Play4.png": "1dd22fa3e1a69b0857da65aa642302d3",
"assets/challenge_image/LessonImage/PlayBk.png": "1dd22fa3e1a69b0857da65aa642302d3",
"assets/challenge_image/listening.png": "af2231b2a46e25ba4b34cda9c1f98ad1",
"assets/challenge_image/partners.png": "c9976a6de65e6052a994a77775c74820",
"assets/challenge_image/prof.jpg": "eaa3d9ca9c450674156c2bd12d9124af",
"assets/challenge_image/quizzes.png": "5ab604f96afff2b257a8bde31ddeaac2",
"assets/challenge_image/reading.png": "453ce9dad63be6235a572934980f449c",
"assets/challenge_image/readmeImage/chat.jpg": "60f55c8d14d453b74ab11e71799df7c1",
"assets/challenge_image/readmeImage/exercise.jpg": "47d9a36a52576c4084cd600e6c932055",
"assets/challenge_image/readmeImage/game.jpg": "71affdf511752ac593db4053c622d6e0",
"assets/challenge_image/readmeImage/home.jpg": "6c4a63a981b5c7ae7334458818af23be",
"assets/challenge_image/readmeImage/lesson.jpg": "ae0f6cd15e473bb543e497de79b66f9f",
"assets/challenge_image/readmeImage/onboarding.jpg": "2cb7c59f13ce45ba5a0b7de66f3a0110",
"assets/challenge_image/readmeImage/Splash.jpg": "0d542ef72c41143eb252f6563aa15719",
"assets/challenge_image/recording.png": "168cf0050afdf35f8de7a47f0454b751",
"assets/challenge_image/speaking.png": "092f19508a8dd5452e85de6b6eca367b",
"assets/challenge_image/splash1.png": "42e60fb2e6c4ad30e87356217f12c3a6",
"assets/challenge_image/splash2.png": "d3e9194c019f105bbeee80a682a08ed2",
"assets/challenge_image/textLogo.png": "883b27ecf83462ab47f22a399e59f0a7",
"assets/challenge_image/writing.png": "4cd597fe815ade2bda743d5142dbf751",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7b9ca33877be885d9e7bc41140757a4b",
"assets/NOTICES": "df3d042c058ba678b45a8eecc8145999",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "ebec2180c8fd2244c0b887fe4abd79a5",
"canvaskit/canvaskit.wasm": "b730404c3182c77feae53f97aeab7247",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "85af9a3ce602e02632c701fa742320cb",
"canvaskit/chromium/canvaskit.wasm": "e85c2054a44abc8e393f58b32c1a4a8e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "4ff83c62a0243119b7245316356685e7",
"canvaskit/skwasm.wasm": "0a5c4a5d97a16304b3e4d1a4c4a24b9c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "efec94d9d9a78c1eaaff903965df2844",
"/": "efec94d9d9a78c1eaaff903965df2844",
"main.dart.js": "549b43a79323665b6603f7c352db1191",
"manifest.json": "9fabc269043ae257489ab91bf5d7815b",
"version.json": "a5f4160878aa7202e1fab81b06449120"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
