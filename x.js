// DEBUG MODE
var SW_MAIN    = ";;;/* run in service worker */\nvar URL_MAP =\n{\n  \"2019/03/20/hello-world/index.html\": {\n    \"hash\": \"7456210ba25f63d3716b4e3ef5b26ee9\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/2019/03/20/hello-world/index.html\",\n    \"cdn\": \"\"\n  },\n  \"archives/2019/03/index.html\": {\n    \"hash\": \"b9289edf6f4e05a01d62448395590649\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/archives/2019/03/index.html\",\n    \"cdn\": \"\"\n  },\n  \"archives/2019/index.html\": {\n    \"hash\": \"4e018d34b25f91612a0fbb3bce30a622\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/archives/2019/index.html\",\n    \"cdn\": \"\"\n  },\n  \"archives/index.html\": {\n    \"hash\": \"267c758c67142a4c4e955d3172fee90e\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/archives/index.html\",\n    \"cdn\": \"\"\n  },\n  \"css/aloha.css\": {\n    \"hash\": \"31d2d443f53b8d80694491e22026a979\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/aloha.css\",\n    \"cdn\": \"\"\n  },\n  \"css/aloha.less\": {\n    \"hash\": \"421b92c4aa9ab25eba7afb7814903439\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/aloha.less\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/semantic.min.css\": {\n    \"hash\": \"236918600111d1491b586d8124550235\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/semantic.min.css\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.eot\": {\n    \"hash\": \"79c0948be9771ecbc257cb2bfd93bee0\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.eot\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.svg\": {\n    \"hash\": \"fcc65f3110ebd12b6e43afe2fb77f910\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.svg\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.ttf\": {\n    \"hash\": \"1332ba5250d0eeb8d5fd1134feda9303\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.ttf\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff\": {\n    \"hash\": \"1ad629e3d8a87894da7394a2f5f559e3\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff\",\n    \"cdn\": \"\"\n  },\n  \"css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff2\": {\n    \"hash\": \"b11460dd621976449b101a7e04555d29\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/css/semantic-ui/2.2.4/themes/default/assets/fonts/icons.woff2\",\n    \"cdn\": \"\"\n  },\n  \"favicon.ico\": {\n    \"hash\": \"940228413e31fc619a46c4d5259dd553\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/favicon.ico\",\n    \"cdn\": \"\"\n  },\n  \"images/algolia_logo.svg\": {\n    \"hash\": \"0896a46b68512d010ae60f80a8634fac\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/images/algolia_logo.svg\",\n    \"cdn\": \"\"\n  },\n  \"images/avatar.jpg\": {\n    \"hash\": \"1e7c7ca19793bec6ef17c41f496ef76e\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/images/avatar.jpg\",\n    \"cdn\": \"\"\n  },\n  \"images/scrolltop.png\": {\n    \"hash\": \"6700b563de56fb8184e6c79e7ac83172\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/images/scrolltop.png\",\n    \"cdn\": \"\"\n  },\n  \"index.html\": {\n    \"hash\": \"d49b4a96e5b79a41636e204ee12fd7ac\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/index.html\",\n    \"cdn\": \"\"\n  },\n  \"js/aloha-events.js\": {\n    \"hash\": \"86e4a8c06a12c17feee011d6dfdabd97\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/js/aloha-events.js\",\n    \"cdn\": \"\"\n  },\n  \"js/aloha.js\": {\n    \"hash\": \"de30d105e658a427ad5fc0d1d034a189\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/js/aloha.js\",\n    \"cdn\": \"\"\n  },\n  \"js/semantic-ui-algolia.js\": {\n    \"hash\": \"16ce837ed69c5880717463a1c927823e\",\n    \"stub\": 26,\n    \"url\": \"https://geziang.github.io/blog_published/js/semantic-ui-algolia.js\",\n    \"cdn\": \"\"\n  }\n}\nlet _txtDec = new TextDecoder();\n\nclass MyReader {\n  constructor(reader) {\n    this.eof = false;\n    this._reader = reader;\n    this._queue = [];\n    this._avail = 0;\n    this._offset = 0;\n  }\n\n  async readUint32() {\n    let buf = await this.readBytes(4);\n    let int = buf[3] << 24 | buf[2] << 16 | buf[1] << 8 | buf[0];\n    return int >>> 0;\n  }\n\n  async readTinyText() {\n    let lenBuf = await this.readBytes(1);\n    let strBuf = await this.readBytes(lenBuf[0]);\n    return _txtDec.decode(strBuf);\n  }\n\n  // ...\n\n  async readBytes(size) {\n    if (this.eof) {\n      throw new Error('EOF');\n    }\n\n    while (this._avail < size) {\n      await this._load();\n      if (this.eof) {\n        // return the remaining data,\n        // even if less than $size.\n        size = this._avail;\n        break;\n      }\n    }\n    return this._readFromBuf(size);\n  }\n\n  async _load() {\n    let r = await this._reader.read();\n    if (r.done) {\n      this.eof = true;\n      return;\n    }\n    let chunk = r.value;\n    this._queue.push(chunk);\n    this._avail += chunk.length;\n  }\n\n  _readFromBuf(size) {\n    // first chunk\n    let buf = this._queue[0];\n    let len = buf.length;\n    let beg = this._offset;\n\n    // enough? (most case)\n    let end = beg + size;\n    if (end <= len) {\n      this._avail -= size;\n      this._offset = end;\n      return buf.subarray(beg, end);\n    }\n\n    // concat small chunks\n    let dstBuf = new Uint8Array(size);\n    let dstPos = 0;\n    let i = 0;\n    let stop;\n\n    for (;;) {\n      end = len;\n\n      let srcBuf = buf.subarray(beg, end);\n      dstBuf.set(srcBuf, dstPos);\n      dstPos += (end - beg);\n\n      if (stop) {\n        break;\n      }\n\n      buf = this._queue[++i];\n      len = buf.length;\n\n      let remain = size - dstPos;\n      if (len >= remain) {\n        len = remain;\n        stop = true;\n      }\n      beg = 0;\n    }\n\n    this._avail -= size;\n    this._queue.splice(0, i); // unshift i counts\n    this._offset = end;\n\n    return dstBuf;\n  }\n}\nconst BLK_SIZE  = 1024 * 16;\nconst HASH_SIZE = 16;\n\n\n// TODO: URL_MAP use binary format\nfor (let k in URL_MAP) {\n  let v = URL_MAP[k];\n  v.hash = hexToBytes(v.hash);\n}\n\nfunction hexToBytes(inStr) {\n  let outLen = inStr.length / 2;\n  let outBuf = new Uint8Array(outLen);\n\n  for (let i = 0; i < outLen; i++) {\n      let byte = parseInt(inStr.substr(i * 2, 2), 16);\n      console.assert(!isNaN(byte));\n      outBuf[i] = byte;\n  }\n  return outBuf;\n}\n\n//\n// utils\n//\nfunction memcmp(b1, b2, size) {\n  // TODO: u32 optimize\n  for (let i = 0; i < size; i++) {\n    if (b1[i] !== b2[i]) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction sha256(buf) {\n  return crypto.subtle.digest('SHA-256', buf);\n}\n\nasync function output(size, reader, os, hash) {\n  let n = Math.ceil(size / BLK_SIZE);\n  console.log('blk num:', n);\n\n  for (let i = 0; i < n; i++) {\n    if (reader.eof) {\n      // TODO: error handler\n      console.warn('bad size');\n      os.close();\n      return i;\n    }\n\n    // bufBiHj = Bi + H(i+1)\n    let bufBiHj = await reader.readBytes(BLK_SIZE + HASH_SIZE);\n\n    \n    let hashBuf = await sha256(bufBiHj);\n    let hashU8 = new Uint8Array(hashBuf);\n\n    let equal = memcmp(hashU8, hash, HASH_SIZE);\n    if (!equal) {\n      // TODO: error handler\n      console.warn('bad hash');\n      os.close();\n      return i;\n    }\n\n    \n    hash = bufBiHj.subarray(-HASH_SIZE);\n\n    let chunk = bufBiHj.subarray(0, BLK_SIZE);\n    os.enqueue(chunk);\n  }\n\n  os.close();\n  return -1;  // success\n}\n\nasync function proxy(req, item) {\n  // TODO: choose fastest node, error retry\n  let cdn = item.cdn;\n  let url = item.url;\n\n  if (cdn == \"\") {\n	  let res = await fetch(url);\n	  return res;\n  }\n  let res = await fetch(cdn);\n  let reader = new MyReader(res.body.getReader());\n\n  let stub = await reader.readBytes(item.stub);\n  let size = await reader.readUint32();\n  let mime = await reader.readTinyText();\n\n  // http respond\n  let headers = new Headers();\n  headers.set('content-type', mime);\n  headers.set('x-porxy', url);\n\n  // ostream <- my chunks\n  // istream -> Response\n  let os;\n  let is = new ReadableStream({\n    start(controller) {\n      os = controller;\n    }\n  });\n\n  res = new Response(is, {\n    headers: headers,\n  });\n\n  output(size, reader, os, item.hash);\n  return res;\n}\n\nexports.onfetch = function(e) {\n  let req = e.request;\n  let url = new URL(req.url);\n\n  let host = url.hostname;\n  if (host != \"percent73.xyz\") {\n	  let res = fetch(url);\n	  return res;\n  }\n  \n  let path = url.pathname;\n  if (path.endsWith('/')) {\n    path += 'index.html';\n  }\n\n  let item = URL_MAP[path.substr(1)];\n  if (!item) {\n    let html = '404: Not Found';\n\n    return new Response(html, {\n      status: 404,\n      statusText: 'Not Found'\n    });\n  }\n\n  return proxy(req, item);\n};\n\nexports.oninit = function(e) {\n  console.log('mod oninit');\n};\n\nexports.onterm = function(e) {\n  console.log('mod onterm');\n};;;;"
var SW_LOADER  = "/* run in service worker */\nconst EVENT_FETCH = 0;\nconst EVENT_MSG = 1;\n\nlet queue = [];\nlet swMod;\n\nfunction addQueue(v) {\n  queue.push(v);\n}\n\nfunction flushQueue() {\n  queue.forEach(args => {\n    let [type, e, y, n] = args;\n\n    switch (type) {\n    case EVENT_MSG:\n      swMod.onmsg(e);\n      break;\n\n    case EVENT_FETCH:\n      let p = swMod.onfetch(e);\n      if (!p) {\n        // sw bypass\n        p = fetch(e.request);\n      }\n      p.then(y).catch(n);\n      break;\n    }\n  });\n  queue = [];\n}\n\nself.onmessage = function(e) {\n  if (swMod) {\n    swMod.onmsg(e);\n  } else {\n    addQueue([EVENT_MSG, e]);\n  }\n};\n\nself.onfetch = function(e) {\n  let req = e.request;\n  let url = req.url;\n\n  console.log('[sw_loader] fetch {mode: %o, url: %o, hdr: %o}',\n    req.mode, url, new Map(req.headers)\n  );\n\n  // force update\n  if (url.endsWith('/--update')) {\n    load(true);\n    let res = new Response('UPDATED');\n    e.respondWith(res);\n    return;\n  }\n\n  // bypass Mixed-Content (except localhost)\n  if (url.startsWith('http:') && !url.startsWith('http://127.0.0.1')) {\n    return;\n  }\n\n  let ret;\n\n  if (swMod) {\n    ret = swMod.onfetch(e);\n  } else {\n    ret = new Promise((y, n) => {\n      addQueue([EVENT_FETCH, e, y, n]);\n    });\n  }\n\n  if (ret) {\n    e.respondWith(ret);\n  }\n};\n\nself.onactivate = function(e) {\n  console.log('[sw_loader] onactivate');\n};\n\nself.oninstall = function(e) {\n  console.log('[sw_loader] oninstall');\n  skipWaiting();\n};\n\nfunction run(code) {\n  let exports = {};\n\n  let fn = Function('exports', code);\n  fn(exports);\n\n  if (swMod) {\n    swMod.onterm();\n  }\n  swMod = exports;\n  swMod.oninit();\n\n  flushQueue();\n}\n\nfunction extractSwMain(code) {\n  let m = code.match(/\\;{3}.+?\\;{3}/);\n  return m && m[0]\n    .replace(/\\\\n/g, '\\n')\n    .replace(/\\\\\"/g, '\"')\n    .replace(/\\\\\\\\/g, '\\\\')\n}\n\nasync function load(isUpdate) {\n  let oldJs;\n  let cache = await caches.open('v1');\n  let req = new Request('/sw_main');\n  let res = await cache.match(req);\n\n  if (res) {\n    oldJs = await res.text();\n  } else {\n    // if cache missing, we use the default\n    // module which defined in boot.js\n    oldJs = SW_MAIN;\n  }\n\n  // init\n  if (!isUpdate) {\n    run(oldJs);\n    return;\n  }\n\n  // fetch latest version\n  let url = location.href;\n  if (isUpdate) {\n    url += '?_=' + Date.now();\n  }\n  res = await fetch(url);\n\n  // cache & run if sw_main modified\n  let newJs = await res.text();\n  let newSw = extractSwMain(newJs);\n  console.assert(newSw);\n\n  if (newSw !== SW_MAIN) {\n    cache.put(req, new Response(newSw));\n    run(newSw);\n    console.log('[sw_loader] sw_main updated');\n  } else {\n    console.log('[sw_loader] sw_main no updated');\n  }\n}\n\nload();"
var SW_INSTALL = "/* run in page */\n\nfunction reload() {\n  var curr = +new Date;\n  var last;\n  try {\n    last = +sessionStorage._ts || 0;\n  } catch (err) {\n    last = curr;\n  }\n\n  if (curr - last < 100) {\n    show('waiting...');\n    setTimeout(reload, 5000);\n    return;\n  }\n\n  try {\n    sessionStorage._ts = curr;\n  } catch (err) {\n  }\n  location.reload();\n}\n\nfunction show(s) {\n  var node = document.body || document.documentElement;\n  node.innerHTML = s;\n}\n\nfunction unsupport() {\n  show('Please use the latest Chrome');\n}\n\nfunction onfail(err) {\n  show(err);\n}\n\nfunction main() {\n  var sw = navigator.serviceWorker;\n  if (!sw) {\n    return unsupport();\n  }\n\n  var asynFlag;\n  try {\n    asynFlag = eval('async _=>_');\n  } catch(err) {\n  }\n\n  var streamFlag = self.ReadableStream;\n  //...\n\n  if (!asynFlag || !streamFlag) {\n    unsupport();\n    return;\n  }\n\n  let url = document.currentScript.src;\n  sw\n    .register(url)\n    .then(reload)\n    .catch(onfail);\n\n  sw.onerror = function(err) {\n    console.warn('sw err:', err);\n  };\n}\nmain();"

eval(self.window ? SW_INSTALL : SW_LOADER);