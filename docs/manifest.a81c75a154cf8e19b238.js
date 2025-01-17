!(function () {
  'use strict';
  var leafPrototypes,
    getProto,
    inProgress,
    loadStylesheet,
    installedCssChunks,
    __webpack_modules__ = {},
    __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    if (__webpack_module_cache__[moduleId]) return __webpack_module_cache__[moduleId].exports;
    var module = (__webpack_module_cache__[moduleId] = { id: moduleId, loaded: !1, exports: {} });
    return (
      __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__),
      (module.loaded = !0),
      module.exports
    );
  }
  (__webpack_require__.m = __webpack_modules__),
    (__webpack_require__.x = function () {}),
    (__webpack_require__.n = function (module) {
      var getter =
        module && module.__esModule
          ? function () {
              return module.default;
            }
          : function () {
              return module;
            };
      return __webpack_require__.d(getter, { a: getter }), getter;
    }),
    (getProto = Object.getPrototypeOf
      ? function (obj) {
          return Object.getPrototypeOf(obj);
        }
      : function (obj) {
          return obj.__proto__;
        }),
    (__webpack_require__.t = function (value, mode) {
      if ((1 & mode && (value = this(value)), 8 & mode)) return value;
      if ('object' == typeof value && value) {
        if (4 & mode && value.__esModule) return value;
        if (16 & mode && 'function' == typeof value.then) return value;
      }
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      var def = {};
      leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
      for (
        var current = 2 & mode && value;
        'object' == typeof current && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      )
        Object.getOwnPropertyNames(current).forEach(function (key) {
          def[key] = function () {
            return value[key];
          };
        });
      return (
        (def.default = function () {
          return value;
        }),
        __webpack_require__.d(ns, def),
        ns
      );
    }),
    (__webpack_require__.d = function (exports, definition) {
      for (var key in definition)
        __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key) &&
          Object.defineProperty(exports, key, { enumerable: !0, get: definition[key] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = function (chunkId) {
      return Promise.all(
        Object.keys(__webpack_require__.f).reduce(function (promises, key) {
          return __webpack_require__.f[key](chunkId, promises), promises;
        }, [])
      );
    }),
    (__webpack_require__.u = function (chunkId) {
      return (
        {
          715: 'components-Sections-ReactRouter-Routes-IncrementRoute',
          896: 'components-Sections-ReactRouter-Routes-DecrementRoute',
          956: 'components-Sections-ReactRouter-Routes-ResetRoute',
        }[chunkId] +
        '.' +
        __webpack_require__.h() +
        '.js'
      );
    }),
    (__webpack_require__.miniCssF = function (chunkId) {
      return 715 === chunkId
        ? '715.7dd94fe17002b841b25c.css'
        : 896 === chunkId
        ? '896.7dd94fe17002b841b25c.css'
        : 956 === chunkId
        ? '956.7dd94fe17002b841b25c.css'
        : { 179: 'main', 700: 'manifest', 736: 'vendor' }[chunkId] +
          '.' +
          { 179: 'e6747817a710beefd9ef', 736: '31d6cfe0d16ae931b73c' }[chunkId] +
          '.css';
    }),
    (__webpack_require__.h = function () {
      return 'a81c75a154cf8e19b238';
    }),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (__webpack_require__.hmd = function (module) {
      return (
        (module = Object.create(module)).children || (module.children = []),
        Object.defineProperty(module, 'exports', {
          enumerable: !0,
          set: function () {
            throw new Error(
              'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id
            );
          },
        }),
        module
      );
    }),
    (__webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }),
    (inProgress = {}),
    (__webpack_require__.l = function (url, done, key) {
      if (inProgress[url]) inProgress[url].push(done);
      else {
        var script, needAttach;
        if (void 0 !== key)
          for (var scripts = document.getElementsByTagName('script'), i = 0; i < scripts.length; i++) {
            var s = scripts[i];
            if (s.getAttribute('src') == url || s.getAttribute('data-webpack') == 'react-boilerplate:' + key) {
              script = s;
              break;
            }
          }
        script ||
          ((needAttach = !0),
          ((script = document.createElement('script')).charset = 'utf-8'),
          (script.timeout = 120),
          __webpack_require__.nc && script.setAttribute('nonce', __webpack_require__.nc),
          script.setAttribute('data-webpack', 'react-boilerplate:' + key),
          (script.src = url)),
          (inProgress[url] = [done]);
        var onScriptComplete = function (prev, event) {
            (script.onerror = script.onload = null), clearTimeout(timeout);
            var doneFns = inProgress[url];
            if (
              (delete inProgress[url],
              script.parentNode && script.parentNode.removeChild(script),
              doneFns &&
                doneFns.forEach(function (fn) {
                  return fn(event);
                }),
              prev)
            )
              return prev(event);
          },
          timeout = setTimeout(onScriptComplete.bind(null, void 0, { type: 'timeout', target: script }), 12e4);
        (script.onerror = onScriptComplete.bind(null, script.onerror)),
          (script.onload = onScriptComplete.bind(null, script.onload)),
          needAttach && document.head.appendChild(script);
      }
    }),
    (__webpack_require__.r = function (exports) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(exports, '__esModule', { value: !0 });
    }),
    (__webpack_require__.nmd = function (module) {
      return (module.paths = []), module.children || (module.children = []), module;
    }),
    (function () {
      var scriptUrl;
      __webpack_require__.g.importScripts && (scriptUrl = __webpack_require__.g.location + '');
      var document = __webpack_require__.g.document;
      if (!scriptUrl && document && (document.currentScript && (scriptUrl = document.currentScript.src), !scriptUrl)) {
        var scripts = document.getElementsByTagName('script');
        scripts.length && (scriptUrl = scripts[scripts.length - 1].src);
      }
      if (!scriptUrl) throw new Error('Automatic publicPath is not supported in this browser');
      (scriptUrl = scriptUrl
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (__webpack_require__.p = scriptUrl);
    })(),
    (loadStylesheet = function (chunkId) {
      return new Promise(function (resolve, reject) {
        var href = __webpack_require__.miniCssF(chunkId),
          fullhref = __webpack_require__.p + href;
        if (
          (function (href, fullhref) {
            for (
              var existingLinkTags = document.getElementsByTagName('link'), i = 0;
              i < existingLinkTags.length;
              i++
            ) {
              var dataHref = (tag = existingLinkTags[i]).getAttribute('data-href') || tag.getAttribute('href');
              if ('stylesheet' === tag.rel && (dataHref === href || dataHref === fullhref)) return tag;
            }
            var existingStyleTags = document.getElementsByTagName('style');
            for (i = 0; i < existingStyleTags.length; i++) {
              var tag;
              if ((dataHref = (tag = existingStyleTags[i]).getAttribute('data-href')) === href || dataHref === fullhref)
                return tag;
            }
          })(href, fullhref)
        )
          return resolve();
        !(function (chunkId, fullhref, resolve, reject) {
          var linkTag = document.createElement('link');
          (linkTag.rel = 'stylesheet'),
            (linkTag.type = 'text/css'),
            (linkTag.onerror = linkTag.onload = function (event) {
              if (((linkTag.onerror = linkTag.onload = null), 'load' === event.type)) resolve();
              else {
                var errorType = event && ('load' === event.type ? 'missing' : event.type),
                  realHref = (event && event.target && event.target.href) || fullhref,
                  err = new Error('Loading CSS chunk ' + chunkId + ' failed.\n(' + realHref + ')');
                (err.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (err.type = errorType),
                  (err.request = realHref),
                  linkTag.parentNode.removeChild(linkTag),
                  reject(err);
              }
            }),
            (linkTag.href = fullhref),
            document.head.appendChild(linkTag);
        })(chunkId, fullhref, resolve, reject);
      });
    }),
    (installedCssChunks = { 700: 0 }),
    (__webpack_require__.f.miniCss = function (chunkId, promises) {
      installedCssChunks[chunkId]
        ? promises.push(installedCssChunks[chunkId])
        : 0 !== installedCssChunks[chunkId] &&
          { 715: 1, 896: 1, 956: 1 }[chunkId] &&
          promises.push(
            (installedCssChunks[chunkId] = loadStylesheet(chunkId).then(
              function () {
                installedCssChunks[chunkId] = 0;
              },
              function (e) {
                throw (delete installedCssChunks[chunkId], e);
              }
            ))
          );
    }),
    (function () {
      var installedChunks = { 700: 0 },
        deferredModules = [];
      __webpack_require__.f.j = function (chunkId, promises) {
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
        if (0 !== installedChunkData)
          if (installedChunkData) promises.push(installedChunkData[2]);
          else {
            var promise = new Promise(function (resolve, reject) {
              installedChunkData = installedChunks[chunkId] = [resolve, reject];
            });
            promises.push((installedChunkData[2] = promise));
            var url = __webpack_require__.p + __webpack_require__.u(chunkId),
              error = new Error();
            __webpack_require__.l(
              url,
              function (event) {
                if (
                  __webpack_require__.o(installedChunks, chunkId) &&
                  (0 !== (installedChunkData = installedChunks[chunkId]) && (installedChunks[chunkId] = void 0),
                  installedChunkData)
                ) {
                  var errorType = event && ('load' === event.type ? 'missing' : event.type),
                    realSrc = event && event.target && event.target.src;
                  (error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')'),
                    (error.name = 'ChunkLoadError'),
                    (error.type = errorType),
                    (error.request = realSrc),
                    installedChunkData[1](error);
                }
              },
              'chunk-' + chunkId
            );
          }
      };
      var checkDeferredModules = function () {},
        webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
          for (
            var moduleId,
              chunkId,
              chunkIds = data[0],
              moreModules = data[1],
              runtime = data[2],
              executeModules = data[3],
              i = 0,
              resolves = [];
            i < chunkIds.length;
            i++
          )
            (chunkId = chunkIds[i]),
              __webpack_require__.o(installedChunks, chunkId) &&
                installedChunks[chunkId] &&
                resolves.push(installedChunks[chunkId][0]),
              (installedChunks[chunkId] = 0);
          for (moduleId in moreModules)
            __webpack_require__.o(moreModules, moduleId) && (__webpack_require__.m[moduleId] = moreModules[moduleId]);
          for (
            runtime && runtime(__webpack_require__), parentChunkLoadingFunction && parentChunkLoadingFunction(data);
            resolves.length;

          )
            resolves.shift()();
          return executeModules && deferredModules.push.apply(deferredModules, executeModules), checkDeferredModules();
        },
        chunkLoadingGlobal = (self.webpackChunkreact_boilerplate = self.webpackChunkreact_boilerplate || []);
      function checkDeferredModulesImpl() {
        for (var result, i = 0; i < deferredModules.length; i++) {
          for (var deferredModule = deferredModules[i], fulfilled = !0, j = 1; j < deferredModule.length; j++) {
            var depId = deferredModule[j];
            0 !== installedChunks[depId] && (fulfilled = !1);
          }
          fulfilled &&
            (deferredModules.splice(i--, 1),
            (result = __webpack_require__((__webpack_require__.s = deferredModule[0]))));
        }
        return (
          0 === deferredModules.length && (__webpack_require__.x(), (__webpack_require__.x = function () {})), result
        );
      }
      chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
        (chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal)));
      var startup = __webpack_require__.x;
      __webpack_require__.x = function () {
        return (__webpack_require__.x = startup || function () {}), (checkDeferredModules = checkDeferredModulesImpl)();
      };
    })(),
    __webpack_require__.x();
})();
