// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"fytn1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "14e190f5da7fe0b4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"oSPhM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsDatepicker = require("js-datepicker");
var _jsDatepickerDefault = parcelHelpers.interopDefault(_jsDatepicker);
const picker = (0, _jsDatepickerDefault.default)("#input", {
    formatter: (input, date)=>{
        const value = date.toLocaleDateString();
        input.value = value;
    }
});
let val = document.querySelector("#input");
let btn = document.querySelector("button");
let display = document.createElement("p");
display.classList.add("here");
btn.addEventListener("click", function() {
    let birthday = new Date(val.value);
    let now = new Date();
    let years = now.getFullYear() - birthday.getFullYear();
    let months = (now - birthday) / 1000 / 60 / 60 / 24 / 30.4375 - years * 12;
    display.innerHTML = `You are <strong> ${years} years and ${months.toFixed(0)} months </strong> old`;
    document.querySelector("div").append(display);
});

},{"js-datepicker":"4IEYE","@parcel/transformer-js/src/esmodule-helpers.js":"7FXsF"}],"4IEYE":[function(require,module,exports,__globalThis) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function n(a) {
            if (t[a]) return t[a].exports;
            var r = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var r in e)n.d(a, r, (function(t) {
                return e[t];
            }).bind(null, r));
            return a;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 0);
    }([
        function(e, t, n) {
            "use strict";
            n.r(t);
            var a = [], r = [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ], i = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ], o = {
                t: "top",
                r: "right",
                b: "bottom",
                l: "left",
                c: "centered"
            };
            function s() {}
            var l = [
                "click",
                "focusin",
                "keydown",
                "input"
            ];
            function d(e) {
                l.forEach(function(t) {
                    e.addEventListener(t, e === document ? L : Y);
                });
            }
            function c(e) {
                return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce(function(t, n) {
                    return t[n] = c(e[n]), t;
                }, {}) : e;
            }
            function u(e, t) {
                var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden");
                t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [
                    h(t, e, a),
                    f(t, e, a),
                    v(e, a)
                ].join(""), a && window.requestAnimationFrame(function() {
                    M(!0, e);
                });
            }
            function h(e, t, n) {
                return [
                    '<div class="qs-controls' + (n ? " qs-blur" : "") + '">',
                    '<div class="qs-arrow qs-left"></div>',
                    '<div class="qs-month-year' + (t.disableYearOverlay ? " qs-disabled-year-overlay" : "") + '">',
                    '<span class="qs-month">' + t.months[e.getMonth()] + "</span>",
                    '<span class="qs-year">' + e.getFullYear() + "</span>",
                    "</div>",
                    '<div class="qs-arrow qs-right"></div>',
                    "</div>"
                ].join("");
            }
            function f(e, t, n) {
                var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {}, m = +v.start, y = +v.end, p = g(new Date(e).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0;
                p.setMonth(p.getMonth() + 1), p.setDate(0);
                var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0);
                S += (w + b) % 7 ? 7 : 0;
                for(var M = 1; M <= S; M++){
                    var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, O = j ? C < 1 ? -1 : 1 : 0, P = j && !l, k = P ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x;
                    Y && !P && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !P && (A += " qs-disabled"), +g(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), P && (A += " qs-empty", k = ""), q.push('<div class="' + A + '" data-direction="' + O + '">' + k + "</div>");
                }
                var R = d.map(function(e) {
                    return '<div class="qs-square qs-day">' + e + "</div>";
                }).concat(q);
                return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), R.join("");
            }
            function v(e, t) {
                var n = e.overlayPlaceholder, a = e.overlayButton;
                return [
                    '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">',
                    "<div>",
                    '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />',
                    '<div class="qs-close">&#10005;</div>',
                    "</div>",
                    '<div class="qs-overlay-month-container">' + e.overlayMonths.map(function(e, t) {
                        return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                    }).join("") + "</div>",
                    '<div class="qs-submit qs-disabled">' + a + "</div>",
                    "</div>"
                ].join("");
            }
            function m(e, t, n) {
                var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling;
                (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n), n || q(t), o && (y({
                    instance: t,
                    deselect: n
                }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
            }
            function y(e) {
                var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling;
                t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
            }
            function p(e, t, n) {
                if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
            }
            function w(e, t, n, a) {
                n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
            }
            function D(e) {
                if (!e.noPosition) {
                    var t = e.position.top, n = e.position.right;
                    if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                    var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                    e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                }
            }
            function b(e) {
                return "[object Date]" === x(e) && "Invalid Date" !== e.toString();
            }
            function g(e) {
                if (b(e) || "number" == typeof e && !isNaN(e)) {
                    var t = new Date(+e);
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                }
            }
            function q(e) {
                e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e), e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
            }
            function S(e) {
                e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e), D(e), e.onShow(e));
            }
            function M(e, t) {
                var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares");
                e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), r.focus());
            }
            function E(e, t, n, a) {
                var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value;
                if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i);
                else if (n.calendar.contains(t)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
            }
            function x(e) {
                return ({}).toString.call(e);
            }
            function C(e) {
                a.forEach(function(t) {
                    t !== e && q(t);
                });
            }
            function L(e) {
                if (!e.__qs_shadow_dom) {
                    var t = e.which || e.keyCode, n = e.type, r = e.target, o = r.classList, s = a.filter(function(e) {
                        return e.calendar.contains(r) || e.el === r;
                    })[0], l = s && s.calendar.contains(r);
                    if (!(s && s.isMobile && s.disableMobile)) {
                        if ("click" === n) {
                            if (!s) return a.forEach(q);
                            if (s.disabled) return;
                            var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum;
                            if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s);
                            else if (o.contains("qs-arrow")) w(o, s);
                            else if (p || o.contains("qs-close")) h || M(!y, s);
                            else if (D) E(e, v, s, D);
                            else {
                                if (o.contains("qs-disabled")) return;
                                if (o.contains("qs-num")) {
                                    var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b);
                                    if (g) {
                                        s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth], u(s);
                                        for(var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L;){
                                            var O = Y[j];
                                            O.textContent === b && (L = O), j++;
                                        }
                                        r = L;
                                    }
                                    return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s));
                                }
                                o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s));
                            }
                        } else if ("focusin" === n && s) S(s), C(s);
                        else if ("keydown" === n && 9 === t && s) q(s);
                        else if ("keydown" === n && s && !s.disabled) {
                            var P = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                            13 === t && P && l ? E(e, r, s) : 27 === t && P && l && M(!0, s);
                        } else if ("input" === n) {
                            if (!s || !s.calendar.contains(r)) return;
                            var k = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce(function(e, t) {
                                return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                            }, "").slice(0, 4);
                            r.value = N, k.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                        }
                    }
                }
            }
            function Y(e) {
                L(e), e.__qs_shadow_dom = !0;
            }
            function j(e, t) {
                l.forEach(function(n) {
                    e.removeEventListener(n, t);
                });
            }
            function O() {
                S(this);
            }
            function P() {
                q(this);
            }
            function k(e, t) {
                var n = g(e), a = this.currentYear, r = this.currentMonth, i = this.sibling;
                if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
                    instance: this,
                    deselect: !0
                }), u(i)), u(this), this;
                if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({
                    instance: this
                }), u(i));
                var o = a === n.getFullYear() && r === n.getMonth();
                return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this;
            }
            function N(e) {
                return I(this, e, !0);
            }
            function _(e) {
                return I(this, e);
            }
            function I(e, t, n) {
                var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g(t), d = n ? "Min" : "Max";
                function c() {
                    return "original" + d + "Date";
                }
                function h() {
                    return d.toLowerCase() + "Date";
                }
                function f() {
                    return "set" + d;
                }
                function v() {
                    throw new Error("Out-of-range date passed to " + f());
                }
                if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, i.maxDate = void 0)) : e[h()] = void 0;
                else {
                    if (!b(t)) throw new Error("Invalid date passed to " + f());
                    i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                }
                return i && u(i), u(e), e;
            }
            function A() {
                var e = this.first ? this : this.sibling, t = e.sibling;
                return {
                    start: e.dateSelected,
                    end: t.dateSelected
                };
            }
            function R() {
                var e = this.shadowDom, t = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this;
                this.inlinePosition && (a.some(function(e) {
                    return e !== i && e.positionedEl === t;
                }) || t.style.setProperty("position", null));
                n.remove(), a = a.filter(function(e) {
                    return e !== i;
                }), r && delete r.sibling, a.length || j(document, L);
                var o = a.some(function(t) {
                    return t.shadowDom === e;
                });
                for(var s in e && !o && j(e, Y), this)delete this[s];
                a.length || l.forEach(function(e) {
                    document.removeEventListener(e, L);
                });
            }
            function F(e, t) {
                var n = new Date(e);
                if (!b(n)) throw new Error("Invalid date passed to `navigate`");
                this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this);
            }
            function B() {
                var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                e && M(t, this);
            }
            t.default = function(e, t) {
                var n = function(e, t) {
                    var n, l, d = function(e) {
                        var t = c(e);
                        t.events && (t.events = t.events.reduce(function(e, t) {
                            if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                            return e[+g(t)] = !0, e;
                        }, {}));
                        [
                            "startDate",
                            "dateSelected",
                            "minDate",
                            "maxDate"
                        ].forEach(function(e) {
                            var n = t[e];
                            if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                            t[e] = g(n);
                        });
                        var n = t.position, i = t.maxDate, l = t.minDate, d = t.dateSelected, u = t.overlayPlaceholder, h = t.overlayButton, f = t.startDay, v = t.id;
                        if (t.startDate = g(t.startDate || d || new Date), t.disabledDates = (t.disabledDates || []).reduce(function(e, t) {
                            var n = +g(t);
                            if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                            if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                            return e[n] = 1, e;
                        }, {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");
                        if (null != v) {
                            var m = a.filter(function(e) {
                                return e.id === v;
                            });
                            if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                            m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0;
                        }
                        var y = [
                            "tr",
                            "tl",
                            "br",
                            "bl",
                            "c"
                        ].some(function(e) {
                            return n === e;
                        });
                        if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
                        function p(e) {
                            throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                        }
                        if (t.position = function(e) {
                            var t = e[0], n = e[1], a = {};
                            a[o[t]] = 1, n && (a[o[n]] = 1);
                            return a;
                        }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                        d && (l > d && p("min"), i < d && p());
                        if ([
                            "onSelect",
                            "onShow",
                            "onHide",
                            "onMonthChange",
                            "formatter",
                            "disabler"
                        ].forEach(function(e) {
                            "function" != typeof t[e] && (t[e] = s);
                        }), [
                            "customDays",
                            "customMonths",
                            "customOverlayMonths"
                        ].forEach(function(e, n) {
                            var a = t[e], r = n ? 12 : 7;
                            if (a) {
                                if (!Array.isArray(a) || a.length !== r || a.some(function(e) {
                                    return "string" != typeof e;
                                })) throw new Error('"' + e + '" must be an array with ' + r + " strings.");
                                t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                            }
                        }), f && f > 0 && f < 7) {
                            var w = (t.customDays || r).slice(), D = w.splice(0, f);
                            t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [
                                w.length - 1,
                                w.length
                            ];
                        } else t.startDay = 0, t.weekendIndices = [
                            6,
                            0
                        ];
                        "string" != typeof u && delete t.overlayPlaceholder;
                        "string" != typeof h && delete t.overlayButton;
                        var q = t.defaultView;
                        if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                        return t.defaultView = q || "calendar", t;
                    }(t || {
                        startDate: g(new Date),
                        position: "bl",
                        defaultView: "calendar"
                    }), u = e;
                    if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u);
                    else {
                        if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported.");
                        for(var h, f = u.parentNode; !h;){
                            var v = x(f);
                            "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0, n = f, l = f.host) : f = f.parentNode;
                        }
                    }
                    if (!u) throw new Error("No selector / element found.");
                    if (a.some(function(e) {
                        return e.el === u;
                    })) throw new Error("A datepicker already exists on that element.");
                    var m = u === document.body, y = n ? u.parentElement || n : m ? document.body : u.parentElement, w = n ? u.parentElement || l : y, D = document.createElement("div"), q = document.createElement("div");
                    D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker";
                    var M = {
                        shadowDom: n,
                        customElement: l,
                        positionedEl: w,
                        el: u,
                        parent: y,
                        nonInput: "INPUT" !== u.nodeName,
                        noPosition: m,
                        position: !m && d.position,
                        startDate: d.startDate,
                        dateSelected: d.dateSelected,
                        disabledDates: d.disabledDates,
                        minDate: d.minDate,
                        maxDate: d.maxDate,
                        noWeekends: !!d.noWeekends,
                        weekendIndices: d.weekendIndices,
                        calendarContainer: D,
                        calendar: q,
                        currentMonth: (d.startDate || d.dateSelected).getMonth(),
                        currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()],
                        currentYear: (d.startDate || d.dateSelected).getFullYear(),
                        events: d.events || {},
                        defaultView: d.defaultView,
                        setDate: k,
                        remove: R,
                        setMin: N,
                        setMax: _,
                        show: O,
                        hide: P,
                        navigate: F,
                        toggleOverlay: B,
                        onSelect: d.onSelect,
                        onShow: d.onShow,
                        onHide: d.onHide,
                        onMonthChange: d.onMonthChange,
                        formatter: d.formatter,
                        disabler: d.disabler,
                        months: d.months || i,
                        days: d.customDays || r,
                        startDay: d.startDay,
                        overlayMonths: d.overlayMonths || (d.months || i).map(function(e) {
                            return e.slice(0, 3);
                        }),
                        overlayPlaceholder: d.overlayPlaceholder || "4-digit year",
                        overlayButton: d.overlayButton || "Submit",
                        disableYearOverlay: !!d.disableYearOverlay,
                        disableMobile: !!d.disableMobile,
                        isMobile: "ontouchstart" in window,
                        alwaysShow: !!d.alwaysShow,
                        id: d.id,
                        showAllDates: !!d.showAllDates,
                        respectDisabledReadOnly: !!d.respectDisabledReadOnly,
                        first: d.first,
                        second: d.second
                    };
                    if (d.sibling) {
                        var E = d.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate;
                        C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, E.getRange = A, C.getRange = A;
                    }
                    d.dateSelected && p(u, M);
                    var j = getComputedStyle(w).position;
                    m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative"));
                    var I = a.filter(function(e) {
                        return e.positionedEl === M.positionedEl;
                    });
                    I.some(function(e) {
                        return e.inlinePosition;
                    }) && (M.inlinePosition = !0, I.forEach(function(e) {
                        e.inlinePosition = !0;
                    }));
                    D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M);
                    return M;
                }(e, t);
                if (a.length || d(document), n.shadowDom && (a.some(function(e) {
                    return e.shadowDom === n.shadowDom;
                }) || d(n.shadowDom)), a.push(n), n.second) {
                    var l = n.sibling;
                    y({
                        instance: n,
                        deselect: !n.dateSelected
                    }), y({
                        instance: l,
                        deselect: !l.dateSelected
                    }), u(l);
                }
                return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n;
            };
        }
    ]).default;
});

},{}],"7FXsF":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["fytn1","oSPhM"], "oSPhM", "parcelRequire94c2", {})

//# sourceMappingURL=age.da7fe0b4.js.map
