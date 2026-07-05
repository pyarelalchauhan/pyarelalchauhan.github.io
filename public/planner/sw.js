/* Plan It — service worker for offline / installable use.
   Bump CACHE when the app shell changes so clients pick up the new files. */
var CACHE = "plan-it-v1";
var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).catch(function(){})
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method!=="GET") return;
  var url = new URL(req.url);
  if(url.origin!==self.location.origin) return; // let cross-origin requests pass through

  // Navigations: serve the cached app shell so it opens offline.
  if(req.mode==="navigate"){
    e.respondWith(
      caches.match("./index.html").then(function(hit){
        return hit || fetch(req).catch(function(){ return caches.match("./"); });
      })
    );
    return;
  }

  // Everything else: cache-first, fall back to network and cache it.
  e.respondWith(
    caches.match(req).then(function(hit){
      return hit || fetch(req).then(function(res){
        if(res && res.status===200 && res.type==="basic"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return hit; });
    })
  );
});
