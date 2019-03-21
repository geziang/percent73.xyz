// DEBUG MODE
var SW_MAIN    = ";;;/* run in service worker */\nvar URL_MAP =\n{\n  \"2019/03/20/hello-world/index.html\": {\n    \"url\": \"https://geziang.github.io/blog_published/2019/03/20/hello-world/index.html\",\n    \"cdn\": \"\"\n  },\n  \"archives/2019/03/index.html\": {\n    \"url\": \"https://geziang.github.io/blog_published/archives/2019/03/index.html\",\n    \"cdn\": \"\"\n  },\n  \"archives/2019/index.html\": {\n    \"url\": \"https://geziang.github.io/blog_published/archives/2019/index.html\",\n    \"cdn\": \"\"\n  },\n  \"archives/index.html\": {\n    \"url\": \"https://geziang.github.io/blog_published/archives/index.html\",\n    \"cdn\": \"\"\n  },\n  \"css/aloha.css\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/aloha.css\",\n    \"cdn\": \"\"\n  },\n  \"css/aloha.less\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/aloha.less\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/semantic.min.css\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/semantic.min.css\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.eot\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.eot\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.svg\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.svg\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.ttf\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.ttf\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff2\": {\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff2\",\n    \"cdn\": \"\"\n  },\n  \"favicon.ico\": {\n    \"url\": \"https://geziang.github.io/blog_published/favicon.ico\",\n    \"cdn\": \"\"\n  },\n  \"images/algolia_logo.svg\": {\n    \"url\": \"https://geziang.github.io/blog_published/images/algolia_logo.svg\",\n    \"cdn\": \"\"\n  },\n  \"images/avatar.jpg\": {\n    \"url\": \"https://geziang.github.io/blog_published/images/avatar.jpg\",\n    \"cdn\": \"\"\n  },\n  \"images/scrolltop.png\": {\n    \"url\": \"https://geziang.github.io/blog_published/images/scrolltop.png\",\n    \"cdn\": \"\"\n  },\n  \"index.html\": {\n    \"url\": \"https://geziang.github.io/blog_published/index.html\",\n    \"cdn\": \"\"\n  },\n  \"js/aloha-events.js\": {\n    \"url\": \"https://geziang.github.io/blog_published/js/aloha-events.js\",\n    \"cdn\": \"\"\n  },\n  \"js/aloha.js\": {\n    \"url\": \"https://geziang.github.io/blog_published/js/aloha.js\",\n    \"cdn\": \"https://i.loli.net/2019/03/20/5c91f646251cd.png\"\n  },\n  \"js/semantic-ui-algolia.js\": {\n    \"url\": \"https://geziang.github.io/blog_published/js/semantic-ui-algolia.js\",\n    \"cdn\": \"\"\n  }\n}\nasync function output(size, data, os) {\n  if (data.length < size) {\n    // TODO: error handler\n    console.warn('bad size');\n    os.close();\n    return;\n  }\n  os.enqueue(data);\n\n  os.close();\n  return -1;  // success\n}\n\nfunction parseImg(blob) {\n	return new Promise((resolve, reject) => {\n		self.clients.matchAll().then(clients => {\n			let client = clients[0];\n			\n			var msg_chan = new MessageChannel();\n			msg_chan.port1.onmessage = function(event){\n				console.log('sw port on message');\n				if(event.data.error){\n					reject(event.data.error);\n				}else{\n					resolve(event.data);\n				}\n			};\n\n			console.log('sw post to page');\n			client.postMessage(blob, [msg_chan.port2]);\n		})\n    })\n}\n\nasync function proxy(req, item) {\n  // TODO: choose fastest node, error retry\n  let cdn = item.cdn;\n  let url = item.url;\n\n  if (cdn == \"\") {\n	  let res = await fetch(url);\n	  return res;\n  }\n  \n  let res = await fetch(cdn);\n  let blob = await res.blob();\n  let obj = await parseImg(blob);\n  \n  if (!obj) {\n    let html = '500: Decode Failed';\n    return new Response(html, {\n      status: 500,\n      statusText: 'Decode Failed'\n    });\n  }\n  let ext = JSON.parse(obj.ext);\n  let data = obj.data;\n  let size = ext.size;\n  let mime = ext.mime;\n\n  // http respond\n  let headers = new Headers();\n  headers.set('content-type', mime);\n  headers.set('x-proxy', cdn);\n\n  // ostream <- my chunks\n  // istream -> Response\n  let os;\n  let is = new ReadableStream({\n    start(controller) {\n      os = controller;\n    }\n  });\n\n  res = new Response(is, {\n    headers: headers,\n  });\n\n  output(size, data, os);\n  return res;\n}\n\nexports.onfetch = function(e) {\n  let req = e.request;\n  let url = new URL(req.url);\n\n  let host = url.hostname;\n  if (host != \"percent73.xyz\") {\n	  let res = fetch(url);\n	  return res;\n  }\n  \n  let path = url.pathname;\n  if (path.endsWith('/')) {\n    path += 'index.html';\n  }\n\n  let item = URL_MAP[path.substr(1)];\n  if (!item) {\n    let html = '404: Not Found';\n\n    return new Response(html, {\n      status: 404,\n      statusText: 'Not Found'\n    });\n  }\n\n  return proxy(req, item);\n};\n\nexports.oninit = function(e) {\n  console.log('mod oninit');\n};\n\nexports.onterm = function(e) {\n  console.log('mod onterm');\n};;;;"
var SW_LOADER  = "/* run in service worker */\nconst EVENT_FETCH = 0;\nconst EVENT_MSG = 1;\n\nlet queue = [];\nlet swMod;\n\nfunction addQueue(v) {\n  queue.push(v);\n}\n\nfunction flushQueue() {\n  queue.forEach(args => {\n    let [type, e, y, n] = args;\n\n    switch (type) {\n    case EVENT_MSG:\n      swMod.onmsg(e);\n      break;\n\n    case EVENT_FETCH:\n      let p = swMod.onfetch(e);\n      if (!p) {\n        // sw bypass\n        p = fetch(e.request);\n      }\n      p.then(y).catch(n);\n      break;\n    }\n  });\n  queue = [];\n}\n\nself.onmessage = function(e) {\n  if (swMod) {\n    swMod.onmsg(e);\n  } else {\n    addQueue([EVENT_MSG, e]);\n  }\n};\n\nself.onfetch = function(e) {\n  let req = e.request;\n  let url = req.url;\n\n  console.log('[sw_loader] fetch {mode: %o, url: %o, hdr: %o}',\n    req.mode, url, new Map(req.headers)\n  );\n\n  // force update\n  if (url.endsWith('/--update')) {\n    load(true);\n    let res = new Response('UPDATED');\n    e.respondWith(res);\n    return;\n  }\n\n  // bypass Mixed-Content (except localhost)\n  if (url.startsWith('http:') && !url.startsWith('http://127.0.0.1')) {\n    return;\n  }\n\n  let ret;\n\n  if (swMod) {\n    ret = swMod.onfetch(e);\n  } else {\n    ret = new Promise((y, n) => {\n      addQueue([EVENT_FETCH, e, y, n]);\n    });\n  }\n\n  if (ret) {\n    e.respondWith(ret);\n  }\n};\n\nself.onactivate = function(e) {\n  console.log('[sw_loader] onactivate');\n};\n\nself.oninstall = function(e) {\n  console.log('[sw_loader] oninstall');\n  skipWaiting();\n};\n\nfunction run(code) {\n  let exports = {};\n\n  let fn = Function('exports', code);\n  fn(exports);\n\n  if (swMod) {\n    swMod.onterm();\n  }\n  swMod = exports;\n  swMod.oninit();\n\n  flushQueue();\n}\n\nfunction extractSwMain(code) {\n  let m = code.match(/\\;{3}.+?\\;{3}/);\n  return m && m[0]\n    .replace(/\\\\n/g, '\\n')\n    .replace(/\\\\\"/g, '\"')\n    .replace(/\\\\\\\\/g, '\\\\')\n}\n\nasync function load(isUpdate) {\n  let oldJs;\n  let cache = await caches.open('v1');\n  let req = new Request('/sw_main');\n  let res = await cache.match(req);\n\n  if (res) {\n    oldJs = await res.text();\n  } else {\n    // if cache missing, we use the default\n    // module which defined in boot.js\n    oldJs = SW_MAIN;\n  }\n\n  // init\n  if (!isUpdate) {\n    run(oldJs);\n    return;\n  }\n\n  // fetch latest version\n  let url = location.href;\n  if (isUpdate) {\n    url += '?_=' + Date.now();\n  }\n  res = await fetch(url);\n\n  // cache & run if sw_main modified\n  let newJs = await res.text();\n  let newSw = extractSwMain(newJs);\n  console.assert(newSw);\n\n  if (newSw !== SW_MAIN) {\n    cache.put(req, new Response(newSw));\n    run(newSw);\n    console.log('[sw_loader] sw_main updated');\n  } else {\n    console.log('[sw_loader] sw_main no updated');\n  }\n}\n\nload();"
var SW_INSTALL = "/* run in page */\n\nvar canvasDataEncoder = (function () {\n	function find_best_size(totallen) {\n	  var pixelCount = Math.ceil(totallen / 3) + 2; //2 pixel for length header\n\n      // canvas max width or height\n      var MAX_L = 4096;\n\n      var sqrt = Math.ceil(Math.sqrt(pixelCount));\n      if (sqrt > MAX_L) {\n        return null;\n      }\n\n      var minL = Math.ceil(pixelCount / MAX_L);\n      var minS = 1e9;\n      var bestH = 0, bestW = 0;\n\n      for (var h = minL; h <= sqrt; h++) {\n        var w = Math.ceil(pixelCount / h);\n        var size = w * h;\n        if (size < minS) {\n          minS = size;\n          bestW = w;\n          bestH = h;\n        }\n\n        if (size == pixelCount) {\n          break;\n        }\n      }\n      return {w: bestW, h: bestH};\n    }\n	\n	function encode(canvas, x, y, data, ext) {\n		\"use strict\";\n		// Stringify the data\n		var ctx = canvas.getContext('2d'),\n			quartet,\n			quartets = [],\n			currentX = 0, currentY = 0,\n			i,j;\n\n		var datalen = data.length;\n		var extlen = ext.length;\n		var sizeBuf = new Uint8Array(6);\n		sizeBuf[0] = extlen & 0xff;\n		sizeBuf[1] = extlen >>  8 & 0xff;\n		sizeBuf[2] = datalen & 0xff;\n		sizeBuf[3] = datalen >>  8 & 0xff;\n		sizeBuf[4] = datalen >>  16 & 0xff;\n		sizeBuf[5] = datalen >>  24 & 0xff;\n		\n		quartets.push([sizeBuf[0],sizeBuf[1],sizeBuf[2],255]);\n		quartets.push([sizeBuf[3],sizeBuf[4],sizeBuf[5],255]);\n		\n		// Loop the string and generate quartet pixel data\n		quartet = [];\n		j = 0;\n		for (i = 0; i < extlen + datalen; i++) {\n			if (i < extlen) {\n				quartet.push(ext[i]);\n			} else {\n				quartet.push(data[i-extlen]);\n			}\n			j++;\n\n			if (j >= 3) {\n				j = 0;\n				quartet.push(255);\n				quartets.push(quartet);\n				quartet = [];\n			}\n		}\n\n		// Loop the quartets and paint them!\n		for (i = 0; i < quartets.length; i++) {\n			quartet = quartets[i];\n			ctx.fillStyle = 'rgba(' + quartet[0] + ', ' + quartet[1] + ', ' + quartet[2] + ', 255)';\n			ctx.fillRect(x + currentX, y + currentY, 1, 1);\n\n			currentX++;\n			if (currentX >= canvas.width) { currentX = 0; currentY++; }\n		}\n	}\n\n	function decode(canvas, x, y) {\n		\"use strict\";\n		var ctx = canvas.getContext('2d'),\n			imageData = ctx.getImageData(x, y, canvas.width, canvas.height).data;\n\n		if (imageData.length < 8) {\n			console.log(\"img decode failed!\");\n			return null;\n		}\n		var extlen =\n			imageData[0] << 0 |\n			imageData[1] << 8;\n		var datalen =\n			imageData[2] << 0 |\n			imageData[4] << 8 |\n			imageData[5] << 16 |\n			imageData[6] << 24;\n			\n		var ext = new Uint8Array(extlen);\n		var data = new Uint8Array(datalen);\n		var p = 0, i = 0, j = 0;\n		while (p < extlen) {\n			j++;\n			if (j <= 3) {\n				ext[p++] = imageData[i++];\n			} else {\n				j = 0;\n			}\n		}\n		p = 0;\n		while (p < datalen) {\n			j++;\n			if (j <= 3) {\n				data[p++] = imageData[i++];\n			} else {\n				j = 0;\n			}\n		}\n		return {ext:ext, data:data};\n	}\n\n	return {find_best_size:find_best_size, encode:encode, decode:decode};\n}());\n\nvar module;\nif (module) module.exports = canvasDataEncoder;\nfunction reload() {\n  var curr = +new Date;\n  var last;\n  try {\n    last = +sessionStorage._ts || 0;\n  } catch (err) {\n    last = curr;\n  }\n\n  if (curr - last < 100) {\n    show('waiting...');\n    setTimeout(reload, 5000);\n    return;\n  }\n\n  try {\n    sessionStorage._ts = curr;\n  } catch (err) {\n  }\n  location.reload();\n}\n\nfunction show(s) {\n  var node = document.body || document.documentElement;\n  node.innerHTML = s;\n}\n\nfunction unsupport() {\n  show('Please use the latest Chrome');\n}\n\nfunction onfail(err) {\n  show(err);\n}\n\nfunction main() {\n  var sw = navigator.serviceWorker;\n  if (!sw) {\n    return unsupport();\n  }\n\n  var asynFlag;\n  try {\n    asynFlag = eval('async _=>_');\n  } catch(err) {\n  }\n\n  var streamFlag = self.ReadableStream;\n  //...\n\n  if (!asynFlag || !streamFlag) {\n    unsupport();\n    return;\n  }\n\n  let url = document.currentScript.src;\n  sw\n    .register(url)\n    .then(reload)\n    .catch(onfail);\n\n  sw.onerror = function(err) {\n    console.warn('sw err:', err);\n  };\n  \n  navigator.serviceWorker.addEventListener('message', function(event){\n	console.log('page on message');\n	let objectURL = URL.createObjectURL(event.data);\n	let img = new Image();\n    img.onload = function() {\n      let w = img.width;\n      let h = img.height;\n      let canvas = document.createElement('canvas');\n      canvas.width = w;\n      canvas.height = h;\n\n      let ctx = canvas.getContext('2d');\n      ctx.drawImage(img, 0, 0);\n\n      let obj = canvasDataEncoder.decode(canvas,0,0);\n      ctx = null;\n      canvas = null;\n	  img = null;\n      event.ports[0].postMessage(obj);\n	  URL.revokeObjectURL(objectURL);\n    };\n    img.src = objectURL;\n  });\n}\nmain();"

eval(self.window ? SW_INSTALL : SW_LOADER);