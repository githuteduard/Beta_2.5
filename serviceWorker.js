const staticDevCalaca = "Juego_Cal"
const assets = [
  "index.html",
  "css/Tumba.css",
  "js/base.js",
  "img/tumba1.png",
  "img/tumba2.png",
  "img/Calaca.png",
  "img/nube.png",
  "img/suelo.png",
  "img/cactus1.png",
  "img/cactus2.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCalaca).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })