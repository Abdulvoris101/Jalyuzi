globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"baseUrl":"http://192.168.100.73","public":{"baseUrl":"http://192.168.100.73"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('../error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/_nuxt/1.1f38c1f5.webp": {
    "type": "image/webp",
    "etag": "\"41bc4-/H+6KB2MQ+kV49CqkzAz/fSUgXY\"",
    "mtime": "2023-02-24T09:44:19.325Z",
    "size": 269252,
    "path": "../public/_nuxt/1.1f38c1f5.webp"
  },
  "/_nuxt/2.04327b80.png": {
    "type": "image/png",
    "etag": "\"294851-Cl7aO130yNp+ROMyzidxaUfzCQM\"",
    "mtime": "2023-02-24T09:44:19.325Z",
    "size": 2705489,
    "path": "../public/_nuxt/2.04327b80.png"
  },
  "/_nuxt/4.325431e2.webp": {
    "type": "image/webp",
    "etag": "\"15d78-PEc44+qrQJ1Z1hePX+7qI2RerKE\"",
    "mtime": "2023-02-24T09:44:19.321Z",
    "size": 89464,
    "path": "../public/_nuxt/4.325431e2.webp"
  },
  "/_nuxt/Pagination.368333bd.js": {
    "type": "application/javascript",
    "etag": "\"4e5-dbH38bMZJ3ixFjUghL6pKrrrIY4\"",
    "mtime": "2023-02-24T09:44:19.321Z",
    "size": 1253,
    "path": "../public/_nuxt/Pagination.368333bd.js"
  },
  "/_nuxt/_id_.210e7930.js": {
    "type": "application/javascript",
    "etag": "\"1f36-zx68rTsAHS2pBhhP1V5dinxA/0c\"",
    "mtime": "2023-02-24T09:44:19.321Z",
    "size": 7990,
    "path": "../public/_nuxt/_id_.210e7930.js"
  },
  "/_nuxt/_id_.99aae10e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6e1-ecGuSuzGr37ZZ8VwI4MWy8meLd4\"",
    "mtime": "2023-02-24T09:44:19.321Z",
    "size": 1761,
    "path": "../public/_nuxt/_id_.99aae10e.css"
  },
  "/_nuxt/_id_.c19fd1f3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"737-Vqb+lLCs8XwgAYYo8U66ODNRqIg\"",
    "mtime": "2023-02-24T09:44:19.321Z",
    "size": 1847,
    "path": "../public/_nuxt/_id_.c19fd1f3.css"
  },
  "/_nuxt/_id_.e17ce170.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b23-wXBpI77Xx4Kr165RWiooyW2Rfb4\"",
    "mtime": "2023-02-24T09:44:19.317Z",
    "size": 19235,
    "path": "../public/_nuxt/_id_.e17ce170.css"
  },
  "/_nuxt/_id_.e335e266.js": {
    "type": "application/javascript",
    "etag": "\"1860f-ChgOTy0gJnRjxN/BUYkGwUrJ+AE\"",
    "mtime": "2023-02-24T09:44:19.317Z",
    "size": 99855,
    "path": "../public/_nuxt/_id_.e335e266.js"
  },
  "/_nuxt/_id_.efee927c.js": {
    "type": "application/javascript",
    "etag": "\"10a8-HYumI6vpFKoF78rxbU6t4GfP7VU\"",
    "mtime": "2023-02-24T09:44:19.317Z",
    "size": 4264,
    "path": "../public/_nuxt/_id_.efee927c.js"
  },
  "/_nuxt/about-bg.3e19bde3.png": {
    "type": "image/png",
    "etag": "\"55a1e-tfkxCXPukcoC5IvZbbzQE8jY1cA\"",
    "mtime": "2023-02-24T09:44:19.317Z",
    "size": 350750,
    "path": "../public/_nuxt/about-bg.3e19bde3.png"
  },
  "/_nuxt/about-slide1.f805b8dd.jpg": {
    "type": "image/jpeg",
    "etag": "\"575cb-saVKix/c1MYiT268m4xCG27rYr0\"",
    "mtime": "2023-02-24T09:44:19.317Z",
    "size": 357835,
    "path": "../public/_nuxt/about-slide1.f805b8dd.jpg"
  },
  "/_nuxt/about-slide2.49a042f3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ff24-Y/U72qOVkl3quLaw1AiOmSFL8b8\"",
    "mtime": "2023-02-24T09:44:19.317Z",
    "size": 196388,
    "path": "../public/_nuxt/about-slide2.49a042f3.jpg"
  },
  "/_nuxt/about-slide3.458c6000.jpg": {
    "type": "image/jpeg",
    "etag": "\"46a0f-lMM0+air5eztMRkuPb2diIY9DOE\"",
    "mtime": "2023-02-24T09:44:19.317Z",
    "size": 289295,
    "path": "../public/_nuxt/about-slide3.458c6000.jpg"
  },
  "/_nuxt/about-text.51fa5a94.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b0ac-U2XGtlWDOpFBToO1edd6EN/B4gE\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 503980,
    "path": "../public/_nuxt/about-text.51fa5a94.jpg"
  },
  "/_nuxt/about.cb7cd74b.js": {
    "type": "application/javascript",
    "etag": "\"375d-3kk0TSoXI0XbAGmgmfEVYcdGkP4\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 14173,
    "path": "../public/_nuxt/about.cb7cd74b.js"
  },
  "/_nuxt/about.d6a3a7c4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"383-JW2m9s3WevGJhVCdx1nqI/dQeLA\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 899,
    "path": "../public/_nuxt/about.d6a3a7c4.css"
  },
  "/_nuxt/bg-home-sec.2e5f626b.webp": {
    "type": "image/webp",
    "etag": "\"2e326-F6dhKg3eQCjgyzYSePoF7QrP6Tk\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 189222,
    "path": "../public/_nuxt/bg-home-sec.2e5f626b.webp"
  },
  "/_nuxt/cart.b179c9fb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"98c-o4aUJ2U/RS4N/Z0Y7bM/67KIakY\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 2444,
    "path": "../public/_nuxt/cart.b179c9fb.css"
  },
  "/_nuxt/cart.c8011521.js": {
    "type": "application/javascript",
    "etag": "\"2fe8-bsCZWZ0+y8XVwlGRhK6Nb6JX6cA\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 12264,
    "path": "../public/_nuxt/cart.c8011521.js"
  },
  "/_nuxt/contact-bg.110007f9.png": {
    "type": "image/png",
    "etag": "\"34d0f-utzDrZ9rzwUd7UwHStn2sJQv+nY\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 216335,
    "path": "../public/_nuxt/contact-bg.110007f9.png"
  },
  "/_nuxt/contact.62f312a8.js": {
    "type": "application/javascript",
    "etag": "\"214a-ykrbroiMImrA98z55Hsuyv/0YpQ\"",
    "mtime": "2023-02-24T09:44:19.313Z",
    "size": 8522,
    "path": "../public/_nuxt/contact.62f312a8.js"
  },
  "/_nuxt/contact.f7dcca18.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3eb-Y6du4K7QTQQi1sYQjSERGQVv06Q\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 1003,
    "path": "../public/_nuxt/contact.f7dcca18.css"
  },
  "/_nuxt/default.5f2f21da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f30-R6UwkrNtx5NEqI6tZtWmpgZP0yA\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 20272,
    "path": "../public/_nuxt/default.5f2f21da.css"
  },
  "/_nuxt/default.935102b3.js": {
    "type": "application/javascript",
    "etag": "\"84f5-nEQ3c3NZc0Y55/xsMZzCpYkgSlI\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 34037,
    "path": "../public/_nuxt/default.935102b3.js"
  },
  "/_nuxt/entry.5dbf4d12.js": {
    "type": "application/javascript",
    "etag": "\"f87c4-fDgvPVu0oAhir8pe0guhsZOUnJU\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 1017796,
    "path": "../public/_nuxt/entry.5dbf4d12.js"
  },
  "/_nuxt/entry.7376aaf5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31309-Vj2sKGXARNpEOxHA1Z9zs1DLusY\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 201481,
    "path": "../public/_nuxt/entry.7376aaf5.css"
  },
  "/_nuxt/error-404.18ced855.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-F8gJ3uSz6Dg2HRyb374Ax3RegKE\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.18ced855.css"
  },
  "/_nuxt/error-404.1e5b3f7f.js": {
    "type": "application/javascript",
    "etag": "\"8a3-UzlcYJG7H5nlP6lZuwJ5nme2UD0\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 2211,
    "path": "../public/_nuxt/error-404.1e5b3f7f.js"
  },
  "/_nuxt/error-500.899df368.js": {
    "type": "application/javascript",
    "etag": "\"751-d7KqKwTCVZNyCUP0olY/eJLS2WI\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.899df368.js"
  },
  "/_nuxt/error-500.e60962de.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-VhleGjkSRH7z4cQDJV3dxcboMhU\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.e60962de.css"
  },
  "/_nuxt/error-component.e2e66eb3.js": {
    "type": "application/javascript",
    "etag": "\"465-pUkhDw799sUhdHM3wN8y+MQ0LD8\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 1125,
    "path": "../public/_nuxt/error-component.e2e66eb3.js"
  },
  "/_nuxt/index.168f830c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"283-ap9mslBdQQVQ/5A+Nz4V60eJJig\"",
    "mtime": "2023-02-24T09:44:19.309Z",
    "size": 643,
    "path": "../public/_nuxt/index.168f830c.css"
  },
  "/_nuxt/index.176981ea.js": {
    "type": "application/javascript",
    "etag": "\"1a8c-JN3iCRn3dG88PTO8T+HO2Wg5/h0\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 6796,
    "path": "../public/_nuxt/index.176981ea.js"
  },
  "/_nuxt/index.ac95edea.js": {
    "type": "application/javascript",
    "etag": "\"19d9-i3lE1CK9M0yRIiuyB0Ul9soNQS0\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 6617,
    "path": "../public/_nuxt/index.ac95edea.js"
  },
  "/_nuxt/index.b942eeb7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4dd-pV9Levx+PrMg6Q6UHk28SZZ95f0\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 1245,
    "path": "../public/_nuxt/index.b942eeb7.css"
  },
  "/_nuxt/logo.a217d876.png": {
    "type": "image/png",
    "etag": "\"2293a-PHeVqoeA3425IM5EBHG8F/OfjuU\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 141626,
    "path": "../public/_nuxt/logo.a217d876.png"
  },
  "/_nuxt/logo.a58c913a.jpg": {
    "type": "image/jpeg",
    "etag": "\"b8a6-jL1E6CMYYACCZXCcJr8Djplh0Gw\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 47270,
    "path": "../public/_nuxt/logo.a58c913a.jpg"
  },
  "/_nuxt/myprofile.c5710f23.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ef-2YIlTUmzJME7OcFD8Wfa2dFpI4I\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 495,
    "path": "../public/_nuxt/myprofile.c5710f23.css"
  },
  "/_nuxt/myprofile.d9f8cfcb.js": {
    "type": "application/javascript",
    "etag": "\"dd6-TSdyDyEGM2WgVgW7px2PYHqcfOI\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 3542,
    "path": "../public/_nuxt/myprofile.d9f8cfcb.js"
  },
  "/_nuxt/portfolio.86a666fc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9e-FNoQct5n6CaqL3LFWmVa6UmeGok\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 158,
    "path": "../public/_nuxt/portfolio.86a666fc.css"
  },
  "/_nuxt/portfolio.a04a8c59.js": {
    "type": "application/javascript",
    "etag": "\"4ed-zhEPIupRCiz4hJXImcmrJWAW3RM\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 1261,
    "path": "../public/_nuxt/portfolio.a04a8c59.js"
  },
  "/_nuxt/search.3c34e97e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36-Mw0j/zAZJ56jtH8ocsz9oTrkKyU\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 54,
    "path": "../public/_nuxt/search.3c34e97e.css"
  },
  "/_nuxt/search.af9996ca.js": {
    "type": "application/javascript",
    "etag": "\"686-TfNJzQiZ7SMJ82rixDRaPHOwtPM\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 1670,
    "path": "../public/_nuxt/search.af9996ca.js"
  },
  "/_nuxt/under1.c4189c3b.jpg": {
    "type": "image/jpeg",
    "etag": "\"1af6b-sxOkZa2j9jS/djU3hk+dcZoFrrA\"",
    "mtime": "2023-02-24T09:44:19.305Z",
    "size": 110443,
    "path": "../public/_nuxt/under1.c4189c3b.jpg"
  },
  "/_nuxt/under2.555f3be0.jpg": {
    "type": "image/jpeg",
    "etag": "\"38ed1-5LT20Lab5lIjyvKhOWyt1efPwpY\"",
    "mtime": "2023-02-24T09:44:19.301Z",
    "size": 233169,
    "path": "../public/_nuxt/under2.555f3be0.jpg"
  },
  "/_nuxt/under3.b89916d9.jpg": {
    "type": "image/jpeg",
    "etag": "\"17a72-DfbpNzS5XRkAMCzeLLWDVydxDjU\"",
    "mtime": "2023-02-24T09:44:19.301Z",
    "size": 96882,
    "path": "../public/_nuxt/under3.b89916d9.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_jeFKA1 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_jeFKA1, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_jeFKA1, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
