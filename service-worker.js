/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dba372bf5c434bbadfbd9cfac708495f"
  },
  {
    "url": "assets/css/0.styles.c22ec16c.css",
    "revision": "1d64de64eaa60882185d5bea737b7fde"
  },
  {
    "url": "assets/img/3table.98bb1ea3.jpg",
    "revision": "98bb1ea3eb55d48dc6391a174bfb4d3d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.14037953.js",
    "revision": "1cfb734c64f8924b09ecb6f1f3bab8b9"
  },
  {
    "url": "assets/js/11.f517094b.js",
    "revision": "ad6d29542e03b69c3b12c8b362a9fc57"
  },
  {
    "url": "assets/js/12.42b97237.js",
    "revision": "30357d032e6fd28150ac38ca743979e1"
  },
  {
    "url": "assets/js/13.7162d1c2.js",
    "revision": "e41a41e26b510c280daa0dd52ec8fda6"
  },
  {
    "url": "assets/js/14.7df4c986.js",
    "revision": "155f5b6fa20e79089a23752d05802f4a"
  },
  {
    "url": "assets/js/15.d17b0c6f.js",
    "revision": "ff6760350d16004f8ad5be001926627b"
  },
  {
    "url": "assets/js/16.5bf922f1.js",
    "revision": "4f3716046939f4eef07708b2b462b49d"
  },
  {
    "url": "assets/js/17.4fa8b675.js",
    "revision": "5461c7a0d044c50da21754dd0f32a848"
  },
  {
    "url": "assets/js/18.18b5cb1e.js",
    "revision": "a929eb7900e3f64eb0f408e8db21456a"
  },
  {
    "url": "assets/js/19.33edb4b1.js",
    "revision": "3c9f62bacc0b70f906f93741ce322f8c"
  },
  {
    "url": "assets/js/2.67305f22.js",
    "revision": "bfb3b1df1563a3dbf3ea7be20b8ae43d"
  },
  {
    "url": "assets/js/20.4261b5a9.js",
    "revision": "b5e4fb11924751eb2fa5c182845420d2"
  },
  {
    "url": "assets/js/21.51ae8a6f.js",
    "revision": "d3d86e57b122de0952c45d09fa722b9d"
  },
  {
    "url": "assets/js/22.ece9ebc5.js",
    "revision": "0dce736d0d85f7cc16567ba91cfed3d5"
  },
  {
    "url": "assets/js/23.8510417e.js",
    "revision": "43934ff2ee20ed4b97534a781a15cd25"
  },
  {
    "url": "assets/js/24.b9716aeb.js",
    "revision": "1d1d6ec1896163bc07ab444f25d39b37"
  },
  {
    "url": "assets/js/26.b6cecce5.js",
    "revision": "bdc2ca2303480888bff302aaf7ccf254"
  },
  {
    "url": "assets/js/3.3e67f9c9.js",
    "revision": "40789e6529a7f86622e7b4385d040107"
  },
  {
    "url": "assets/js/4.eb2e76df.js",
    "revision": "8bafaf2b7dd1d1574aee18bd868742ee"
  },
  {
    "url": "assets/js/5.6f7c615f.js",
    "revision": "a99bb060a570e30334eac1c11c2714d3"
  },
  {
    "url": "assets/js/6.449de892.js",
    "revision": "3e69b23baa0c535e21c504c65685da56"
  },
  {
    "url": "assets/js/7.de0bf912.js",
    "revision": "218b0cb40ff7184138eeb69ee6eb8e87"
  },
  {
    "url": "assets/js/8.b9b759b0.js",
    "revision": "b1b4468167cbeecb44ab91d56bee50da"
  },
  {
    "url": "assets/js/9.c2704dd1.js",
    "revision": "156466066a58ed99e9fde808c41fe1f9"
  },
  {
    "url": "assets/js/app.46ea52de.js",
    "revision": "555169844d4254fd5eabbe5b6aac0e30"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8de3e47bdce3c8f5b015ac4058c23f74"
  },
  {
    "url": "design/index.html",
    "revision": "314fae9f2fe7c1176dc404c9ed0edcda"
  },
  {
    "url": "index.html",
    "revision": "7b67ea4964b0242a3708c377580d3f64"
  },
  {
    "url": "intro/index.html",
    "revision": "11a25848efeb3c843edbb00256b54c60"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "9fddf70f2fc4d4a4e35b0cd20ce575a4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ed9eeb11da31c0c8af0f61fcafa3ad1f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "5c14142ec44000c69243ebfd986b16eb"
  },
  {
    "url": "software/index.html",
    "revision": "f74fe21c76b7961ce60dafdc0a6b1341"
  },
  {
    "url": "test/index.html",
    "revision": "092c1f619c6899e31f7cc4d0ec0721e2"
  },
  {
    "url": "use cases/index.html",
    "revision": "b132c3131da7653d591a6faa6ae313c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
