import { defineComponent, onUpdated, inject, ref, onMounted, onBeforeUnmount, watch, provide, computed, openBlock, createElementBlock, createElementVNode, renderSlot, resolveComponent, createBlock, resolveDynamicComponent, withCtx, onServerPrefetch, isRef, getCurrentInstance, h, Suspense, Transition, reactive, defineAsyncComponent, unref, watchEffect, markRaw, mergeProps, createVNode, useSSRContext, createTextVNode, toDisplayString, Fragment as Fragment$1, renderList, shallowRef, createApp, toRef, effectScope, onErrorCaptured, isReactive, toRaw, onUnmounted, nextTick as nextTick$1, toRefs } from 'vue';
import { $fetch as $fetch$1 } from 'ohmyfetch';
import { joinURL, hasProtocol, isEqual as isEqual$1, parseURL } from 'ufo';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { RouterView, createMemoryHistory, createRouter } from 'vue-router';
import destr from 'destr';
import { appendHeader, createError as createError$1, sendRedirect } from 'h3';
import defu, { defuFn } from 'defu';
import { isFunction as isFunction$1 } from '@vue/shared';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderSuspense } from 'vue/server-renderer';
import { parse, serialize } from 'cookie-es';
import { isEqual } from 'ohash';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED,
  MOUNTED,
  IDLE,
  MOVING,
  SCROLLING,
  DRAGGING,
  DESTROYED
};
function empty(array) {
  array.length = 0;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop$1 = function noop2() {
};
function raf(func) {
  return requestAnimationFrame(func);
}
function typeOf(type, subject) {
  return typeof subject === type;
}
function isObject$1(subject) {
  return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
  return subject === null;
}
function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}
function toArray(value) {
  return isArray(value) ? value : [value];
}
function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}
function includes(array, value) {
  return array.indexOf(value) > -1;
}
function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}
function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function(name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}
function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children2) {
  forEach(children2, parent.appendChild.bind(parent));
}
function before(nodes, ref2) {
  forEach(nodes, function(node) {
    var parent = (ref2 || node).parentNode;
    if (parent) {
      parent.insertBefore(node, ref2);
    }
  });
}
function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function(child2) {
    return matches(child2, selector);
  }) : children2;
}
function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn$1(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }
  return object;
}
function assign$1(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      object[key] = source[key];
    });
  });
  return object;
}
function merge$1(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject$1(value)) {
        object[key] = merge$1({}, isObject$1(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}
function omit(object, keys) {
  forEach(keys || ownKeys(object), function(key) {
    delete object[key];
  });
}
function removeAttribute(elms, attrs) {
  forEach(elms, function(elm) {
    forEach(attrs, function(attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}
function setAttribute(elms, attrs, value) {
  if (isObject$1(attrs)) {
    forOwn$1(attrs, function(value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function(elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}
function create(tag, attrs, parent) {
  var elm = document.createElement(tag);
  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }
  parent && append(parent, elm);
  return elm;
}
function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }
  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}
function display(elm, display2) {
  style(elm, "display", display2);
}
function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}
function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}
function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}
function rect(target) {
  return target.getBoundingClientRect();
}
function remove(nodes) {
  forEach(nodes, function(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
  e.preventDefault();
  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}
function query(parent, selector) {
  return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}
function timeOf(e) {
  return e.timeStamp;
}
function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}
function sign(x) {
  return +(x > 0) - +(x < 0);
}
function format(string, replacements) {
  forEach(replacements, function(replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}
function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
  var listeners = [];
  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function(target, event, namespace) {
      var isEventTarget = "addEventListener" in target;
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }
  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function(target, event, namespace) {
      listeners = listeners.filter(function(listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }
        return true;
      });
    });
  }
  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;
    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles,
        detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }
    target.dispatchEvent(e);
    return e;
  }
  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function(target) {
      target && forEach(events, function(events2) {
        events2.split(" ").forEach(function(eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }
  function destroy() {
    listeners.forEach(function(data) {
      data[4]();
    });
    empty(listeners);
  }
  return {
    bind,
    unbind,
    dispatch,
    destroy
  };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();
  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function(e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }
  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }
  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }
  return assign$1(binder, {
    bus,
    on,
    off: apply(binder.unbind, bus),
    emit
  });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;
  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);
      if (rate >= 1) {
        onInterval();
        startTime = now();
        if (limit && ++count >= limit) {
          return pause();
        }
      }
      id = raf(update);
    }
  }
  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }
  function pause() {
    paused = true;
  }
  function rewind() {
    startTime = now();
    rate = 0;
    if (onUpdate) {
      onUpdate(rate);
    }
  }
  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }
  function set(time) {
    interval = time;
  }
  function isPaused() {
    return paused;
  }
  return {
    start,
    rewind,
    pause,
    cancel,
    set,
    isPaused
  };
}
function State(initialState) {
  var state = initialState;
  function set(value) {
    state = value;
  }
  function is(states) {
    return includes(toArray(states), state);
  }
  return {
    set,
    is
  };
}
function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function() {
    interval.isPaused() && interval.start();
  };
}
function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];
  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function(n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function(key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }
  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }
  function register(options2, query2) {
    var queryList = matchMedia(query2);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }
  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function(merged2, entry) {
      return merge$1(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);
    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }
  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge$1(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }
  function set(opts, base, notify) {
    merge$1(options, opts);
    base && merge$1(Object.getPrototypeOf(options), opts);
    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }
  return {
    setup,
    destroy,
    reduce,
    set
  };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};
function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }
  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }
  return {
    resolve,
    orient
  };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};
function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }
  var elm = from;
  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }
    elm = elm.parentElement;
  }
  return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;
  function setup() {
    collect();
    init();
    update();
  }
  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function() {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }
  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }
  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }
  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn$1({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function(className, key) {
      elements[key] = find("." + className);
    });
    assign$1(elements, {
      root,
      track,
      list,
      slides
    });
  }
  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";
    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }
    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }
  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }
  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }
  return assign$1(elements, {
    setup,
    mount,
    destroy
  });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
  var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;
  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }
    listen();
  }
  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);
    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }
  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }
  function initNavigation() {
    var controls = Splide2.splides.map(function(target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }
  function onMove() {
    if (!destroyed) {
      update();
    }
  }
  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }
  function updateActivity() {
    var active = isActive();
    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }
  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);
    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }
    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }
    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }
    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }
  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }
  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }
  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }
    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }
  function isWithin(from, distance) {
    var diff = abs(from - index);
    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }
    return diff <= distance;
  }
  var self = {
    index,
    slideIndex,
    slide,
    container,
    isClone,
    mount,
    destroy,
    update,
    style: style$1,
    isWithin
  };
  return self;
}
function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
  var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
  var Slides2 = [];
  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }
  function init() {
    slides.forEach(function(slide, index) {
      register(slide, index, -1);
    });
  }
  function destroy() {
    forEach$1(function(Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }
  function update() {
    forEach$1(function(Slide2) {
      Slide2.update();
    });
  }
  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function(Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }
  function get(excludeClones) {
    return excludeClones ? filter(function(Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }
  function getIn(page) {
    var Controller2 = Components2.Controller;
    var index = Controller2.toIndex(page);
    var max2 = Controller2.hasFocus() ? 1 : options.perPage;
    return filter(function(Slide2) {
      return between(Slide2.index, index, index + max2 - 1);
    });
  }
  function getAt(index) {
    return filter(index)[0];
  }
  function add(items, index) {
    forEach(items, function(slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }
      if (isHTMLElement(slide)) {
        var ref2 = slides[index];
        ref2 ? before(slide, ref2) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }
  function remove$1(matcher) {
    remove(filter(matcher).map(function(Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }
  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }
  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }
  function style2(prop, value, useContainer) {
    forEach$1(function(Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }
  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;
    if (length) {
      images.forEach(function(img) {
        bind(img, "load error", function() {
          if (!--length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }
  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }
  function isEnough() {
    return Slides2.length > options.perPage;
  }
  return {
    mount,
    destroy,
    update,
    register,
    get,
    getIn,
    getAt,
    add,
    remove: remove$1,
    forEach: forEach$1,
    filter,
    style: style2,
    getLength,
    isEnough
  };
}
function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
  var Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
  var getAt = Slides2.getAt, styleSlides = Slides2.style;
  var vertical;
  var rootRect;
  var overflow;
  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }
  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }
  function resize(force) {
    var newRect = rect(root);
    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }
  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject$1(padding) ? 0 : padding)) || "0px";
  }
  function cssTrackHeight() {
    var height = "";
    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }
    return height;
  }
  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }
  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }
  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }
  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }
  function listSize() {
    return rect(list)[resolve("width")];
  }
  function slideSize(index, withoutGap) {
    var Slide2 = getAt(index || 0);
    return Slide2 ? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }
  function totalSize(index, withoutGap) {
    var Slide2 = getAt(index);
    if (Slide2) {
      var right = rect(Slide2.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }
    return 0;
  }
  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }
  function getGap() {
    var Slide2 = getAt(0);
    return Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight"))) || 0;
  }
  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }
  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }
  return {
    mount,
    resize,
    listSize,
    slideSize,
    sliderSize,
    totalSize,
    getPadding,
    isOverflow
  };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;
  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }
  function remount() {
    destroy();
    mount();
  }
  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }
  function observe() {
    var count = computeCloneCount();
    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }
  function generate(count) {
    var slides = Slides2.get().slice();
    var length = slides.length;
    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }
      push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide2.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements2.list, clone);
        push(clones, clone);
        Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
      });
    }
  }
  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }
  function computeCloneCount() {
    var clones2 = options.clones;
    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }
    return clones2;
  }
  return {
    mount,
    destroy
  };
}
function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
  var Transition;
  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }
  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }
  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }
    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function() {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }
  function jump(index) {
    translate(toPosition(index, true));
  }
  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }
  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;
      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }
    return position;
  }
  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }
  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }
  function toIndex(position) {
    var Slides2 = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;
    for (var i = 0; i < Slides2.length; i++) {
      var slideIndex = Slides2[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);
      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }
    return index;
  }
  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }
  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }
  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }
    return position;
  }
  function offset(index) {
    var focus2 = options.focus;
    return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
  }
  function getLimit(max2) {
    return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }
  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }
  function exceededLimit(max2, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }
  return {
    mount,
    move,
    jump,
    translate,
    shift,
    cancel,
    toIndex,
    toPosition,
    getPosition,
    getLimit,
    exceededLimit,
    reposition
  };
}
function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
  var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }
  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
    if (index !== currIndex) {
      currIndex = index;
      Move2.reposition();
    }
  }
  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }
  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);
      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move2.move(dest, index, prevIndex, callback);
      }
    }
  }
  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function() {
      var index = loop(Move2.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }
  function parse(control) {
    var index = currIndex;
    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }
    return index;
  }
  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }
    return destination ? dest : loop(dest);
  }
  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);
      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }
      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }
    return dest;
  }
  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();
      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }
    return dest;
  }
  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }
  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }
    return clamp(end, 0, slideCount - 1);
  }
  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }
  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }
  function toDest(destination) {
    var closest2 = Move2.toIndex(destination);
    return isSlide ? clamp(closest2, 0, endIndex) : closest2;
  }
  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }
  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }
  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }
  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }
  return {
    mount,
    go,
    scroll,
    getNext,
    getPrev,
    getAdjacent,
    getEnd,
    setIndex,
    getIndex,
    toIndex,
    toPage,
    toDest,
    hasFocus,
    isBusy
  };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, bind = event.bind, emit = event.emit;
  var classes = options.classes, i18n = options.i18n;
  var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var placeholder = Elements2.arrows, track = Elements2.track;
  var wrapper = placeholder;
  var prev = Elements2.prev;
  var next = Elements2.next;
  var created;
  var wrapperClasses;
  var arrows = {};
  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }
  function remount() {
    destroy();
    mount();
  }
  function init() {
    var enabled = options.arrows;
    if (enabled && !(prev && next)) {
      createArrows();
    }
    if (prev && next) {
      assign$1(arrows, {
        prev,
        next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }
  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);
    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }
  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }
  function go(control) {
    Controller2.go(control, true);
  }
  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }
  function createArrow(prev2) {
    var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
    return parseHtml(arrow);
  }
  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller2.getPrev();
      var nextIndex = Controller2.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }
  return {
    arrows,
    mount,
    destroy,
    update
  };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";
  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
      stopped || play();
      update();
    }
  }
  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function(e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }
    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function(e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }
    if (toggle) {
      bind(toggle, "click", function() {
        stopped ? play() : pause(true);
      });
    }
    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }
  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }
  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }
    stopped = !!stop;
    update();
    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }
  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }
  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }
  function onAnimationFrame(rate) {
    var bar = Elements2.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }
  function onMove(index) {
    var Slide2 = Components2.Slides.getAt(index);
    interval.set(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }
  return {
    mount,
    destroy: interval.cancel,
    play,
    pause,
    isPaused
  };
}
function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }
  function cover(cover2) {
    Components2.Slides.forEach(function(Slide2) {
      var img = child(Slide2.container || Slide2.slide, "img");
      if (img && img.src) {
        toggle(cover2, img, Slide2);
      }
    });
  }
  function toggle(cover2, img, Slide2) {
    Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
    display(img, cover2 ? "none" : "");
  }
  return {
    mount,
    destroy: apply(cover, false)
  };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
  var set = Splide2.state.set;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;
  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }
  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();
    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }
    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }
  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }
  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);
    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;
      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }
  function clear() {
    if (interval) {
      interval.cancel();
    }
  }
  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }
  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }
  return {
    mount,
    destroy: clear,
    scroll,
    cancel
  };
}
var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};
function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
  var state = Splide2.state;
  var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
  var getPosition = Move2.getPosition, exceededLimit = Move2.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;
  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop$1, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop$1, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }
  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }
  function onPointerDown(e) {
    clickPrevented = false;
    if (!disabled) {
      var isTouch = isTouchEvent(e);
      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller2.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move2.cancel();
          Scroll2.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }
  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }
    if (e.cancelable) {
      if (dragging) {
        Move2.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());
        if (expired || hasExceeded) {
          save(e);
        }
        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }
  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }
    if (dragging) {
      move(e);
      prevent(e);
    }
    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }
  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }
  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }
  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);
    if (isFree) {
      Controller2.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller2.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller2.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller2.go(Controller2.toDest(destination), true);
    }
    reduce(true);
  }
  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject$1(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }
  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }
  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);
      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }
    return 0;
  }
  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }
  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }
  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }
  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }
  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }
  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }
  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }
  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }
  function isDragging() {
    return dragging;
  }
  function disable(value) {
    disabled = value;
  }
  return {
    mount,
    disable,
    isDragging
  };
}
var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};
function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;
  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }
  function init() {
    var keyboard = options.keyboard;
    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }
  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }
  function disable(value) {
    disabled = value;
  }
  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function() {
      disabled = _disabled;
    });
  }
  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);
      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }
  return {
    mount,
    destroy,
    disable
  };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];
  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }
  function init() {
    empty(entries);
    register();
    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }
  function register() {
    Components2.Slides.forEach(function(Slide2) {
      queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function(img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide2, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }
  function check() {
    entries = entries.filter(function(data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }
  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }
  function onLoad(data, e) {
    var img = data[0], Slide2 = data[1];
    removeClass(Slide2.slide, CLASS_LOADING);
    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
      emit(EVENT_RESIZE);
    }
    isSequential && loadNext();
  }
  function loadNext() {
    entries.length && load(entries.shift());
  }
  return {
    mount,
    destroy: apply(empty, entries),
    check
  };
}
function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements2.pagination;
  var items = [];
  var list;
  var paginationClasses;
  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");
    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list,
        items
      }, getAt(Splide2.index));
    }
  }
  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }
    event.destroy();
  }
  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
    var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements2.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
    for (var i = 0; i < max2; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides2.getIn(i).map(function(Slide2) {
        return Slide2.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));
      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }
      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li,
        button,
        page: i
      });
    }
  }
  function onClick(page) {
    go(">" + page, true);
  }
  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;
    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }
    var item = items[nextPage];
    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }
  function getDirection() {
    return options.paginationDirection || options.direction;
  }
  function getAt(index) {
    return items[Controller2.toPage(index)];
  }
  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());
    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }
    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }
    emit(EVENT_PAGINATION_UPDATED, {
      list,
      items
    }, prev, curr);
  }
  return {
    items,
    mount,
    destroy,
    getAt,
    update
  };
}
var TRIGGER_KEYS = [" ", "Enter"];
function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
  var events = [];
  function mount() {
    Splide2.splides.forEach(function(target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });
    if (isNavigation) {
      navigate();
    }
  }
  function destroy() {
    events.forEach(function(event) {
      event.destroy();
    });
    empty(events);
  }
  function remount() {
    destroy();
    mount();
  }
  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function(index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }
  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }
  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }
  function onClick(Slide2) {
    Splide2.go(Slide2.index);
  }
  function onKeydown(Slide2, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide2);
      prevent(e);
    }
  }
  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount,
    destroy,
    remount
  };
}
function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
  var lastTime = 0;
  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }
  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);
      var _min = options.wheelMinThreshold || 0;
      var sleep = options.wheelSleep || 0;
      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }
      shouldPrevent(backwards) && prevent(e);
    }
  }
  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }
  return {
    mount
  };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }
  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);
    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }
  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }
  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }
  return {
    mount,
    disable,
    destroy
  };
}
var ComponentConstructors = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Media,
  Direction,
  Elements,
  Slides,
  Layout,
  Clones,
  Move,
  Controller,
  Arrows,
  Autoplay,
  Cover,
  Scroll,
  Drag,
  Keyboard,
  LazyLoad,
  Pagination,
  Sync,
  Wheel,
  Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};
function Fade(Splide2, Components2, options) {
  var Slides2 = Components2.Slides;
  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }
  function init() {
    Slides2.forEach(function(Slide2) {
      Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
    });
  }
  function start(index, done) {
    Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }
  return {
    mount,
    start,
    cancel: noop$1
  };
}
function Slide(Splide2, Components2, options) {
  var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;
  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function(e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }
  function start(index, done) {
    var destination = Move2.toPosition(index, true);
    var position = Move2.getPosition();
    var speed = getSpeed(index);
    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll2.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move2.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move2.jump(index);
      done();
    }
  }
  function cancel() {
    transition("");
    Scroll2.cancel();
  }
  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;
    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller2.getIndex(true);
      var end = Controller2.getEnd();
      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }
    return options.speed;
  }
  return {
    mount,
    start,
    cancel
  };
}
var _Splide = /* @__PURE__ */ function() {
  function _Splide2(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge$1({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide2.defaults, options || {});
    try {
      merge$1(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }
    this._o = Object.create(merge$1({}, options));
  }
  var _proto = _Splide2.prototype;
  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;
    var state = this.state, Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign$1({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn$1(Constructors, function(Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn$1(Components2, function(component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };
  _proto.sync = function sync(splide) {
    this.splides.push({
      splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });
    if (this.state.is(IDLE)) {
      this._C.Sync.remount();
      splide.Components.Sync.remount();
    }
    return this;
  };
  _proto.go = function go(control) {
    this._C.Controller.go(control);
    return this;
  };
  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };
  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };
  _proto.emit = function emit(event) {
    var _this$event;
    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));
    return this;
  };
  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);
    return this;
  };
  _proto.remove = function remove2(matcher) {
    this._C.Slides.remove(matcher);
    return this;
  };
  _proto.is = function is(type) {
    return this._o.type === type;
  };
  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };
  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }
    var event = this.event, state = this.state;
    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn$1(this._C, function(component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }
    return this;
  };
  _createClass(_Splide2, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);
  return _Splide2;
}();
var Splide$1 = _Splide;
Splide$1.defaults = {};
Splide$1.STATES = STATES;
const EVENTS = [
  EVENT_ACTIVE,
  EVENT_ARROWS_MOUNTED,
  EVENT_ARROWS_UPDATED,
  EVENT_AUTOPLAY_PAUSE,
  EVENT_AUTOPLAY_PLAY,
  EVENT_AUTOPLAY_PLAYING,
  EVENT_CLICK,
  EVENT_DESTROY,
  EVENT_DRAG,
  EVENT_DRAGGED,
  EVENT_DRAGGING,
  EVENT_HIDDEN,
  EVENT_INACTIVE,
  EVENT_LAZYLOAD_LOADED,
  EVENT_MOUNTED,
  EVENT_MOVE,
  EVENT_MOVED,
  EVENT_NAVIGATION_MOUNTED,
  EVENT_PAGINATION_MOUNTED,
  EVENT_PAGINATION_UPDATED,
  EVENT_REFRESH,
  EVENT_RESIZE,
  EVENT_RESIZED,
  EVENT_SCROLL,
  EVENT_SCROLLED,
  EVENT_UPDATED,
  EVENT_VISIBLE
];
const SPLIDE_INJECTION_KEY = "splide";
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
const _sfc_main$2$1 = defineComponent({
  name: "SplideTrack",
  setup() {
    onUpdated(() => {
      var _a;
      const splide = inject(SPLIDE_INJECTION_KEY);
      (_a = splide == null ? void 0 : splide.value) == null ? void 0 : _a.refresh();
    });
  }
});
const _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "splide__track" };
const _hoisted_2 = { class: "splide__list" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("ul", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const SplideTrack = /* @__PURE__ */ _export_sfc$1(_sfc_main$2$1, [["render", _sfc_render$2]]);
const _sfc_main$1$1 = defineComponent({
  name: "Splide",
  emits: EVENTS.map((event) => `splide:${event}`),
  components: { SplideTrack },
  props: {
    tag: {
      default: "div",
      type: String
    },
    options: {
      default: {},
      type: Object
    },
    extensions: Object,
    transition: Function,
    hasTrack: {
      default: true,
      type: Boolean
    }
  },
  setup(props, context) {
    const splide = ref();
    const root = ref();
    onMounted(() => {
      if (root.value) {
        splide.value = new Splide$1(root.value, props.options);
        bind(splide.value);
        splide.value.mount(props.extensions, props.transition);
      }
    });
    onBeforeUnmount(() => {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.destroy();
    });
    watch(() => merge({}, props.options), (options) => {
      if (splide.value) {
        splide.value.options = options;
      }
    }, { deep: true });
    provide(SPLIDE_INJECTION_KEY, splide);
    const index = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.index) || 0;
    });
    const length = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.length) || 0;
    });
    function go(control) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.go(control);
    }
    function sync(target) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.sync(target);
    }
    function bind(splide2) {
      EVENTS.forEach((event) => {
        splide2.on(event, (...args) => {
          context.emit(`splide:${event}`, splide2, ...args);
        });
      });
    }
    return {
      splide,
      root,
      index,
      length,
      go,
      sync
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SplideTrack = resolveComponent("SplideTrack");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: "splide",
    ref: "root"
  }, {
    default: withCtx(() => [
      _ctx.hasTrack ? (openBlock(), createBlock(_component_SplideTrack, { key: 0 }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ]),
    _: 3
  }, 512);
}
const Splide = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$1, [["render", _sfc_render$1]]);
const _sfc_main$a = defineComponent({
  name: "SplideSlide"
});
const _hoisted_1 = { class: "splide__slide" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SplideSlide = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["render", _sfc_render]]);
const VueSplide = {
  install(app) {
    app.component(Splide.name, Splide);
    app.component(SplideSlide.name, SplideSlide);
  }
};

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_d = (_c = options.lazy) != null ? _c : options.defer) != null ? _d : false;
  options.initialCache = (_e = options.initialCache) != null ? _e : true;
  options.immediate = (_f = options.immediate) != null ? _f : true;
  const nuxt = useNuxtApp();
  const useInitialCache = () => (nuxt.isHydrating || options.initialCache) && nuxt.payload.data[key] !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(useInitialCache() ? nuxt.payload.data[key] : (_h = (_g = options.default) == null ? void 0 : _g.call(options)) != null ? _h : null),
      pending: ref(!useInitialCache()),
      error: ref((_i = nuxt.payload._errors[key]) != null ? _i : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2, _b2;
      asyncData.error.value = error;
      asyncData.data.value = unref((_b2 = (_a2 = options.default) == null ? void 0 : _a2.call(options)) != null ? _b2 : null);
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watch2,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    initialCache,
    watch: [
      _request,
      ...watch2 || []
    ]
  };
  const asyncData = useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
function useRequestHeaders(include) {
  var _a, _b;
  const headers = (_b = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.req.headers) != null ? _b : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$5 = defineNuxtLink({ componentName: "NuxtLink" });
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta2) {
  const resolvedMeta = isFunction$1(meta2) ? computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "renderPriority" || key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};
var stringifyAttrName = (str) => str.replace(/[\s"'><\/=]/g, "").replace(/[^a-zA-Z0-9_-]/g, "");
var stringifyAttrValue = (str) => str.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = stringifyAttrName(key);
    if (value !== true) {
      attribute += `="${stringifyAttrValue(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var tagDedupeKey = (tag) => {
  if (!["meta", "base", "script", "link"].includes(tag.tag)) {
    return false;
  }
  const { props, tag: tagName } = tag;
  if (tagName === "base") {
    return "base";
  }
  if (tagName === "link" && props.rel === "canonical") {
    return "canonical";
  }
  if (props.charset) {
    return "charset";
  }
  const name = ["key", "id", "name", "property", "http-equiv"];
  for (const n of name) {
    let value = void 0;
    if (typeof props.getAttribute === "function" && props.hasAttribute(n)) {
      value = props.getAttribute(n);
    } else {
      value = props[n];
    }
    if (value !== void 0) {
      return `${tagName}-${n}-${value}`;
    }
  }
  return false;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title != null ? title : "");
  }
  return template(unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: { key: "default", ...obj[key] } });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: unref(item) });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document2),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute(
    "content",
    "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length)
  );
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const deduping = {};
      const titleTemplate = allHeadObjs.map((i) => unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs, headObjectIdx) => {
        const tags = headObjToTags(unref(objs));
        tags.forEach((tag, tagIdx) => {
          tag._position = headObjectIdx * 1e4 + tagIdx;
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(
              titleTemplate,
              tag.props.children
            );
          }
          const dedupeKey = tagDedupeKey(tag);
          if (dedupeKey) {
            deduping[dedupeKey] = tag;
          } else {
            deduped.push(tag);
          }
        });
      });
      deduped.push(...Object.values(deduping));
      return deduped.sort((a, b) => a._position - b._position);
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags.sort(sortTags)) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  if (tag.props.renderPriority) {
    delete tag.props.renderPriority;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var sortTags = (aTag, bTag) => {
  const tagWeight = (tag) => {
    if (tag.props.renderPriority) {
      return tag.props.renderPriority;
    }
    switch (tag.tag) {
      case "base":
        return -1;
      case "meta":
        if (tag.props.charset) {
          return -2;
        }
        if (tag.props["http-equiv"] === "content-security-policy") {
          return 0;
        }
        return 10;
      default:
        return 10;
    }
  };
  return tagWeight(aTag) - tagWeight(bTag);
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags.sort(sortTags)) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs({
        ...htmlAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      });
    },
    get bodyAttrs() {
      return stringifyAttrs({
        ...bodyAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      });
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = ref(_meta);
    const headObj = computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const NoScript = defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((props) => {
    const meta2 = { ...props };
    if (meta2.httpEquiv) {
      meta2["http-equiv"] = meta2.httpEquiv;
      delete meta2.httpEquiv;
    }
    return {
      meta: [meta2]
    };
  })
});
const Style = defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const appHead = { "meta": [{ "name": "description", "content": "Jalyuzi.uz - \u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u043A\u0430\u043D\u0435\u0432\u044B\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430" }, { "name": "keywords", "content": "\u0436\u0430\u043B\u044E\u0437\u0438 \u0446\u0435\u043D\u0430 \u0442\u0430\u0448\u043A\u0435\u043D\u0442e \u0436\u0430\u043B\u044E\u0437\u0438 \u0446\u0435\u043D\u0430 \u0442\u0430\u0448\u043A\u0435\u043D\u0442e  \u0416\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0443\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435  \u0436\u0430\u043B\u044E\u0437\u0438 \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0436\u0430\u043B\u044E\u0437\u0435\u0439 \u0432 \u0422\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0444\u043E\u0442\u043E \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0435 \u043E\u043A\u043D\u0430 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u043A\u043E\u043C\u0431\u043E  \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u0430 \u0436\u0430\u043B\u044E\u0437\u0438 \u0446\u0435\u043D\u0430 \u0443\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D \u0436\u0430\u043B\u044E\u0437\u0438 \u043D\u0430 \u043E\u043A\u043D\u0430 \u0442\u0430\u0448\u043A\u0435\u043D\u0442 \u043A\u0443\u043F\u0438\u0442\u044C \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 jalyuzi Jaluz Jalyuzilar jalyuzi.uz jalyuzi v tashkente " }], "link": [{ "rel": "icon", "href": "http://www.jalyuzi.uz/image/catalog/favicon.png" }], "style": [], "script": [], "noscript": [], "charset": "utf-16", "viewport": "width=500, initial-scale=1", "title": "Jalyuzi.uz - \u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u043A\u0430\u043D\u0435\u0432\u044B\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430" };
const appLayoutTransition = { "name": "layout", "mode": "out-in" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2 = defineNuxtPlugin((nuxtApp) => {
  useHead(markRaw({ title: "", ...appHead }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = inject(isNestedKey, false);
    provide(isNestedKey, true);
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const transitionProps = (_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition;
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              isNested && nuxtApp.isHydrating ? h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) : h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_Splide = resolveComponent("Splide");
  const _component_SplideSlide = resolveComponent("SplideSlide");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "slide-about" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_Splide, {
    options: { type: "loop", autoplay: true, pagination: false },
    "aria-label": "My Favorite Images"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SplideSlide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="slide-img slide1"${_scopeId2}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "slide-img slide1" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SplideSlide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="slide-img slide2"${_scopeId2}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "slide-img slide2" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SplideSlide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="slide-img slide3"${_scopeId2}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "slide-img slide3" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SplideSlide, null, {
            default: withCtx(() => [
              createVNode("figure", { class: "slide-img slide1" })
            ]),
            _: 1
          }),
          createVNode(_component_SplideSlide, null, {
            default: withCtx(() => [
              createVNode("figure", { class: "slide-img slide2" })
            ]),
            _: 1
          }),
          createVNode(_component_SplideSlide, null, {
            default: withCtx(() => [
              createVNode("figure", { class: "slide-img slide3" })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSlide.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const isVue2 = false;
/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick$1().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = (pinia) || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
let mapStoreSuffix = "Store";
function mapStores(...stores) {
  return stores.reduce((reduced, useStore) => {
    reduced[useStore.$id + mapStoreSuffix] = function() {
      return useStore(this.$pinia);
    };
    return reduced;
  }, {});
}
function mapState(useStore, keysOrMapper) {
  return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
    reduced[key] = function() {
      return useStore(this.$pinia)[key];
    };
    return reduced;
  }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
    reduced[key] = function() {
      const store = useStore(this.$pinia);
      const storeKey = keysOrMapper[key];
      return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
    };
    return reduced;
  }, {});
}
function mapActions(useStore, keysOrMapper) {
  return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
    reduced[key] = function(...args) {
      return useStore(this.$pinia)[key](...args);
    };
    return reduced;
  }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
    reduced[key] = function(...args) {
      return useStore(this.$pinia)[keysOrMapper[key]](...args);
    };
    return reduced;
  }, {});
}
const ProductStore = defineStore("product", {
  state: () => {
    return {
      products: [],
      category_products: [],
      is_product: false,
      is_data: false,
      subcategories: [],
      current_category: "",
      current_subcategory: "",
      baseUrl: "http://192.168.100.73",
      countOfCart: 0,
      lastId: "",
      cart_products: [],
      total: 0,
      page_size: 1,
      total_c: 0,
      page_size_c: 0,
      all_products: [],
      page_size_s: 1,
      total_s: 0
    };
  },
  actions: {
    async fetchProducts(number) {
      let { data, pending, error } = await useAsyncData("products", () => $fetch(`${this.baseUrl}/api/products/?page=${number}`));
      if (data.value) {
        if (data.value.results.length >= 1) {
          this.products = data.value.results;
          for (let i = 0; i < this.products.length; i++) {
            let overall_price = this.products[i].price_sum.toString();
            overall_price = `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`;
            this.products[i].b_price = overall_price;
          }
          this.total = data.value.total;
          this.page_size = data.value.page_size;
          this.inTheCart();
          this.is_product = true;
        } else {
          this.products = [];
          this.is_product = false;
        }
      }
    },
    async getAllProducts() {
      let { data, pending, error } = await useFetch(`${this.baseUrl}/api/products/?paginate=false`, { initialCache: false }, "$AsVKrjVe7r");
      this.all_products = data.value;
    },
    setCategoryId(id, type) {
      if (type == "category") {
        this.current_category = id;
      } else if (type == "subcategory") {
        this.current_subcategory = id;
      }
    },
    async getCategoryProducts(category_id, pageNumber) {
      let { data, pending, error } = await useAsyncData("cat", () => $fetch(`${this.baseUrl}/api/products/?category=${category_id}&page=${pageNumber}`), { initialCache: false });
      if (data.value.results.length >= 1) {
        this.category_products = data.value.results;
        this.total_c = data.value.total;
        this.page_size_c = data.value.page_size;
        this.inCategoryCart();
        this.inTheCart();
        this.is_data = true;
      } else {
        this.category_products = [];
        this.is_data = false;
      }
    },
    async getSubCategoryProducts(id, pageNumber) {
      let { data, pending, error } = await useFetch(`${this.baseUrl}/api/products/?subcategory=${id}&page=${pageNumber}`, { initialCache: false }, "$eyCpaYpu2b");
      if (data.value.results.length >= 1) {
        this.category_products = data.value.results;
        this.inCategoryCart();
        this.total_s = data.value.total;
        this.page_size_s = data.value.page_size;
        this.is_data = true;
      } else {
        this.category_products = [];
        this.is_data = false;
      }
    },
    changeProducts(data) {
      if (data.value.length >= 1) {
        this.products = data.value;
        this.category_products = data.value;
        this.inCategoryCart();
        this.inTheCart();
        this.is_data = true;
        this.is_data = true;
      } else {
        this.products = "";
        this.category_products = "";
        this.is_data = false;
        this.is_data = false;
      }
    },
    addToCart(obj, id) {
      let product_name = "product" + id;
      localStorage.setItem(product_name, obj);
      let lastID = localStorage.getItem("lastID");
      if (lastID == null) {
        localStorage.setItem("lastID", id);
      } else {
        if (parseInt(lastID) < id) {
          localStorage.setItem("lastID", id);
        }
      }
      this.inTheCart();
      this.inCategoryCart();
    },
    inCategoryCart() {
      for (let i = 0; i < this.category_products.length; i++) {
        let obj_s = window.localStorage.getItem("product" + this.category_products[i].id);
        let obj = JSON.parse(obj_s);
        if (obj == null) {
          this.category_products[i].inCart = false;
        } else {
          this.category_products[i].inCart = true;
        }
      }
    },
    inTheCart() {
      for (let i = 0; i < this.products.length; i++) {
        let obj_s = window.localStorage.getItem("product" + this.products[i].id);
        let obj = JSON.parse(obj_s);
        if (obj == null) {
          this.products[i].inCart = false;
        } else {
          this.products[i].inCart = true;
        }
      }
    },
    increaseCart() {
      this.countOfCart = this.countOfCart + 1;
    },
    setCartItem() {
      if (localStorage.length > 1) {
        this.countOfCart = parseInt(localStorage.length) - 2;
      } else {
        this.countOfCart = 0;
      }
    },
    async getCartProducts() {
      if (localStorage.getItem("lastID")) {
        let len = parseInt(localStorage.getItem("lastID"));
        let cart_products = localStorage.getItem("cart_products");
        for (let i = 1; i <= len; i++) {
          let item = window.localStorage.getItem("product" + i);
          if (item != null) {
            let obj = this.all_products.find((obj2) => obj2.id == JSON.parse(item).id);
            obj.current_width = JSON.parse(item).width;
            obj.current_height = JSON.parse(item).height;
            obj.current_price = JSON.parse(item).overall_price;
            obj.current_type = JSON.parse(item).type_id;
            obj.type_id = JSON.parse(item).type_id;
            obj.current_count = 1;
            if (cart_products != null) {
              this.cart_products = JSON.parse(localStorage.getItem("cart_products"));
              let found = this.cart_products.findIndex((el) => el.id == obj.id);
              if (found == -1) {
                this.cart_products.push(obj);
                localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
              }
            } else {
              this.cart_products.push(obj);
              localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
            }
          }
        }
      }
    }
  },
  getters: {
    getProducts: (state) => state.products,
    getData: (state) => state.category_products,
    getCategoryId: (state) => state.current_category,
    getSubCategoryId: (state) => state.current_subcategory
  }
});
const FilterStore = defineStore("filter", {
  state: () => {
    return {
      colors: [],
      catalogs: [],
      properties: [],
      categories: [],
      my_catalog: [],
      my_colors: [],
      my_category: [],
      subcategories: [],
      my_subcategory: [],
      properties: [],
      baseUrl: "http://192.168.100.73",
      my_property: []
    };
  },
  actions: {
    async fetchColors() {
      const { data } = await useAsyncData("colors", () => $fetch(`${this.baseUrl}/api/filter/colors/`));
      this.colors = data.value;
    },
    async fetchCatalogs(type) {
      const { data } = await useAsyncData("catalog", () => $fetch(`${this.baseUrl}/api/filter/catalog/?${type}=true`));
      this.catalogs = data.value;
    },
    async fetchSubCatalogs() {
      const { data } = await useAsyncData("catalog", () => $fetch(`${this.baseUrl}/api/filter/catalog/?subcategory=true`));
      this.catalogs = data.value;
    },
    async fetchProperties() {
      const { data } = await useAsyncData("property", () => $fetch(`${this.baseUrl}/api/filter/property/`));
      this.properties = data.value;
    },
    async fetchCategories() {
      const { data, pending, error } = await useAsyncData("cat", () => $fetch(`${this.baseUrl}/api/categories/`), { initialCache: false });
      this.categories = data.value;
    },
    async fetchSubCategories() {
      const { data, pending, error } = await useAsyncData("sub", () => $fetch(`${this.baseUrl}/api/subcategory/`), { initialCache: false });
      this.subcategories = data.value;
    },
    getDetailCatalog(id) {
      let catalogs = this.catalogs;
      let catalog = catalogs.find((el) => el.id == id);
      this.my_catalog = catalog;
    },
    getDetailProperty(id) {
      let properties = this.properties;
      let property = properties.find((el) => el.id == id);
      this.my_property = property;
    },
    getDetailColor(id) {
      let colors = this.colors;
      let color = colors.find((el) => el.id == id);
      this.my_colors = color;
    },
    getDetailCategory(id) {
      let categories = this.categories;
      let category = categories.find((el) => el.id == id);
      this.my_category = category;
    },
    getDetailSubCategory(id) {
      let subcategories = this.subcategories;
      let subcategory = subcategories.find((el) => el.id == id);
      this.my_category = subcategory;
    }
  },
  getters: {
    getCatalogs: (state) => state.catalogs,
    getColors: (state) => state.colors,
    getProperties: (state) => state.properties,
    getMyCatalog: (state) => state.my_catalog,
    getMyColors: (state) => state.my_colors,
    getMyCategory: (state) => state.my_category,
    getMyProperty: (state) => state.my_property
  }
});
const AccountStore = defineStore("modal", {
  state: () => {
    return {
      regStatus: false,
      loginStatus: false,
      resetStatus: false,
      verifStatus: false,
      phone_number: "",
      csrfToken: "",
      isLogined: false,
      firstConfirm: false,
      password: "",
      firstName: "",
      lastName: "",
      userToken: "",
      addresses: [],
      username_reset: "",
      resetConfirmStatus: "",
      baseUrl: "http://192.168.100.73"
    };
  },
  actions: {
    regToggleModal() {
      this.regStatus = !this.regStatus;
    },
    loginToggleModal() {
      this.loginStatus = !this.loginStatus;
    },
    verifToggleModal() {
      this.verifStatus = !this.verifStatus;
    },
    resetToggleModal() {
      this.resetStatus = !this.resetStatus;
    },
    resetConfirmToggle() {
      this.resetConfirmStatus = !this.resetConfirmStatus;
    },
    changeResetUsername(username) {
      this.username_reset = username;
    },
    async getMe() {
      this.userToken = useCookie("user_token").value;
      let csrfToken = useCookie("csrftoken").value;
      let { data, error } = await useFetch(`${this.baseUrl}/api/users/me/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + this.userToken,
          "x-csrftoken": csrfToken
        },
        initialCache: false
      }, "$2POzIpBoVH");
      if (data.value == null) {
        this.isLogined = false;
      } else {
        this.firstConfirm = data.value.first_confirm;
        this.isLogined = true;
        if (data.value.first_name == "") {
          this.firstName = data.value.username;
        } else {
          this.phone_number = data.value.username;
          this.firstName = data.value.first_name;
        }
        this.lastName = data.value.last_name;
        this.getAdresses();
      }
    },
    setCsrfToken() {
      let cookie = useCookie("csrftoken");
      this.csrfToken = cookie;
    },
    async getAdresses() {
      let user_token = useCookie("user_token").value;
      let csrfToken = useCookie("csrftoken").value;
      const { data, error } = await useFetch(`${this.baseUrl}/api/orders/address/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + user_token,
          "x-csrftoken": csrfToken
        }
      }, "$efUckrrin2");
      if (this.addresses != null) {
        if (this.addresses.length < 1) {
          this.addresses = false;
        } else {
          this.addresses = data.value;
        }
      } else {
        this.addresses = false;
      }
    }
  },
  getters: {
    getRegStatus: (state) => state.regStatus,
    getLoginStatus: (state) => state.loginStatus,
    getPhoneNumber: (state) => state.phone_number,
    getVerifStatus: (state) => state.verifStatus,
    getCsrfToken: (state) => state.csrfToken,
    getFirstName: (state) => state.firstName
  }
});
const meta$a = void 0;
({
  data() {
    return {
      isEdit: false,
      editWidth: "",
      editHeight: "",
      changedId: null,
      allOverPrice: "",
      addAdress: false,
      city: "",
      state: "",
      fulladdress: "",
      product_ordered: false
    };
  },
  mounted() {
    this.getCartProducts();
    this.allPrice();
  },
  computed: {
    ...mapState(ProductStore, ["countOfCart", "products", "lastId", "cart_products", "baseUrl"]),
    ...mapStores(ProductStore),
    ...mapState(AccountStore, ["isLogined", "addresses"])
  },
  methods: {
    ...mapActions(ProductStore, ["getCartProducts", "inTheCart", "setCartItem", "inCategoryCart"]),
    buyProducts() {
      let data = [];
      if (this.cart_products.length > 1) {
        for (let i = 0; i < this.cart_products.length; i++) {
          let product = this.cart_products[i];
          let size = `${product.current_width}x${product.current_height}`;
          data.push({
            "product": product.id,
            "product_price": parseInt(product.price_sum),
            "overall_price": product.current_price,
            "size": size,
            "status": "pending",
            "address": this.addresses[0].id,
            "amount": product.current_count,
            "type_id": product.type_id
          });
        }
        this.createOrder(JSON.stringify(data));
      } else if (this.cart_products.length == 1) {
        let product = this.cart_products[0];
        let size = `${product.current_width}x${product.current_height}`;
        let product_cart = JSON.parse(localStorage.getItem("product" + this.cart_products[0].id));
        data = [{
          "product": product.id,
          "product_price": product.price_sum,
          "overall_price": product.current_price,
          "size": size,
          "status": "pending",
          "address": this.addresses[0].id,
          "amount": product.current_count,
          "type_id": product_cart.type_id
        }];
        this.createOrder(JSON.stringify(data));
      }
    },
    createOrder(data) {
      let userToken = useCookie("user_token");
      let url = `${this.baseUrl}/api/orders/`;
      let csrfToken = useCookie("csrftoken");
      this.inTheCart();
      this.inCategoryCart();
      let store = ProductStore();
      store.inTheCart();
      store.inCategoryCart();
      this.cart_products = [];
      store.$patch({ "countOfCart": 0, "cart_products": [] });
      fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + userToken.value,
          "x-csrftoken": csrfToken.value
        },
        body: data
      }).then((resp) => {
        resp.json();
        this.product_ordered = true;
        localStorage.removeItem("cart_products");
        localStorage.removeItem("lastID");
        if (JSON.parse(data).length > 1) {
          for (let i = 0; i < JSON.parse(data).length; i++) {
            localStorage.removeItem("product" + JSON.parse(data)[i].product);
          }
        } else if (JSON.parse(data).length == 1) {
          localStorage.removeItem("product" + JSON.parse(data)[0].product);
        }
      });
    },
    fetchAddress() {
      let body = {
        "city": this.city,
        "state": this.state,
        "address": this.fulladdress
      };
      let userToken = useCookie("user_token");
      let url = `${this.baseUrl}/api/orders/address/`;
      let csrfToken = useCookie("csrftoken");
      fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token " + userToken.value,
          "x-csrftoken": csrfToken.value
        },
        body: JSON.stringify(body)
      }).then((resp) => {
        resp.json();
        this.addAdress = false;
        this.addresses.push(body);
      });
    },
    allPrice() {
      let overall_price = null;
      for (let i = 0; i < this.cart_products.length; i++) {
        overall_price += this.cart_products[i].current_price;
      }
      if (overall_price != null) {
        overall_price = overall_price.toString();
        overall_price = `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`;
        this.allOverPrice = overall_price;
      }
    },
    editSquare(id) {
      this.isEdit = true;
      this.changedId = id;
      this.caniEdit(id);
      this.allPrice();
    },
    increaseCount(id) {
      let product = this.cart_products.find((obj) => obj.id == id);
      let product_s = JSON.parse(localStorage.getItem("product" + product.id));
      if (product.current_count <= product.count) {
        product.current_count = product.current_count + 1;
        product.current_price = parseInt(product_s.overall_price) * product.current_count;
        localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
        this.allPrice();
      }
    },
    deleteItem(id) {
      localStorage.removeItem("product" + id);
      for (let i = 0; i < this.cart_products.length; i++) {
        if (this.cart_products[i].id == id) {
          this.cart_products.splice(i, 1);
          localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
          this.allOverPrice = 0;
          this.allPrice();
          this.setCartItem();
          this.inTheCart();
        }
      }
    },
    decreaseCount(id) {
      let product = this.cart_products.find((obj) => obj.id == id);
      let product_s = JSON.parse(localStorage.getItem("product" + product.id));
      if (product.current_count > 1) {
        product.current_price = product.current_price - parseInt(product_s.overall_price);
        product.current_count = product.current_count - 1;
        localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
        this.allPrice();
      } else {
        product.current_count = 1;
      }
    },
    submitEdit(id) {
      let product = this.cart_products.find((obj) => obj.id == id);
      let product_cart = JSON.parse(localStorage.getItem("product" + id));
      if (this.editWidth > 0 && this.editHeight > 0) {
        let overall_price = parseInt(product.price_sum) * (this.editWidth * this.editHeight);
        overall_price = overall_price * product.current_count;
        let price = overall_price;
        product.current_width = this.editWidth;
        product.current_height = this.editHeight;
        product.current_price = price;
        product_cart.width = this.editWidth;
        product_cart.height = this.editHeight;
        product_cart.overall_price = parseInt(overall_price);
        localStorage.setItem("product" + id, JSON.stringify(product_cart));
        localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
        this.allPrice();
        this.isEdit = false;
        this.caniEdit(id);
      }
    },
    caniEdit(product) {
      if (this.changedId == product && this.isEdit == true) {
        return false;
      }
      return true;
    }
  }
});
const meta$9 = void 0;
const _sfc_main$8 = {
  props: ["showFilter", "is_sub"],
  data() {
    return {
      category_status: false,
      catalogs: [],
      filter: {
        catalogs: [],
        colors: [],
        properties: []
      }
    };
  },
  watch: {
    showFilter() {
      let side = this.$el.querySelector(".side-left-mb");
      if (this.showFilter) {
        side.style.display = "block";
      } else {
        side.style.display = "none";
      }
    }
  },
  computed: {
    getId() {
      const route = useRoute();
      return route.params.id;
    },
    ...mapState(FilterStore, ["getColors", "getProperties", "getCatalogs", "baseUrl"]),
    ...mapStores(FilterStore)
  },
  methods: {
    ...mapActions(ProductStore, ["changeProducts", "fetchProducts", "getSubCategoryProducts"]),
    closeFilter() {
      this.$emit("closeFilter");
    },
    submitFilter() {
      let catalogs = this.filter.catalogs;
      let colors = this.filter.colors;
      let properties = this.filter.properties;
      let catalog_q = "catalog=";
      let color_q = "color=";
      let properties_q = "property=";
      let category = this.getId;
      let query = "";
      if (catalogs.length >= 1) {
        for (let i = 0; i < catalogs.length; i++) {
          catalog_q += catalogs[i] + ",";
        }
        catalog_q = catalog_q.slice(0, -1);
        query += catalog_q;
      } else {
        catalog_q = "";
      }
      if (colors.length >= 1) {
        for (let i = 0; i < colors.length; i++) {
          color_q += colors[i] + ",";
        }
        color_q = color_q.slice(0, -1);
        query += "&" + color_q;
      } else {
        color_q = "";
      }
      if (properties.length >= 1) {
        for (let i = 0; i < properties.length; i++) {
          properties_q += properties[i] + ",";
        }
        properties_q = properties_q.slice(0, -1);
        query += "&" + properties_q;
      } else {
        properties_q = "";
      }
      if (category) {
        if (this.is_sub) {
          query += "&subcategory=" + category;
        } else {
          query += "&category=" + category;
        }
      }
      let route = useRoute();
      let id = route.params.id;
      if (query.length >= 1) {
        if (query == `&category=${id}`) {
          this.$emit("getCategoryProductsOn", id, 1);
        } else if (query == `&subcategory=${id}`) {
          this.getSubCategoryProducts(id, 1);
        } else {
          this.getFilterPosts(query);
        }
      } else {
        this.$emit("getProducts", this.getId(), 1);
      }
    },
    async getFilterPosts(query) {
      console.log(query);
      const { data, pending, error } = await useFetch(`${this.$config.baseUrl}/api/products/?${query}&paginate=false`, { initialCache: false }, "$S3ChnpQfbw");
      this.changeProducts(data);
      this.$emit("changeMyProducts", data);
    },
    changeCatalog(event) {
      let arr = this.filter.catalogs;
      let item = arr.find((element) => element == event);
      let index = arr.indexOf(item);
      if (index > -1) {
        arr.splice(index, 1);
      } else {
        arr.push(event);
      }
      this.filter.catalogs = arr;
      this.submitFilter();
    },
    changeColor(event) {
      let arr = this.filter.colors;
      let item = arr.find((element) => element == event);
      let index = arr.indexOf(item);
      if (index > -1) {
        arr.splice(index, 1);
      } else {
        arr.push(event);
      }
      this.filter.colors = arr;
      this.submitFilter();
    },
    changeProperties(event) {
      let arr = this.filter.properties;
      let item = arr.find((element) => element == event);
      let index = arr.indexOf(item);
      if (index > -1) {
        arr.splice(index, 1);
      } else {
        arr.push(event);
      }
      this.filter.properties = arr;
      this.submitFilter();
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_icon_x_circle = resolveComponent("b-icon-x-circle");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "filter-section" }, _attrs))}><section class="side-left"><h4 class="filter-title">Filters-Diamonds</h4><div><ul class="filter-catalog mt-1"><li><span class="catalog-title filter-link">\u041A\u0430\u0442\u0430\u043B\u043E\u0433</span></li><!--[-->`);
  ssrRenderList(_ctx.getCatalogs, (catalog) => {
    _push(`<li class="filter-catalog-item"><input type="checkbox" class="form-check-input"${ssrRenderAttr("id", "catalog" + catalog.id)}> <label class="filter-link"${ssrRenderAttr("for", "catalog" + catalog.id)}>${ssrInterpolate(catalog.name)}</label></li>`);
  });
  _push(`<!--]--></ul></div><div><ul class="filter-catalog mt-3"><li><span class="catalog-title filter-link">\u0426\u0432\u0435\u0442\u044B</span></li><!--[-->`);
  ssrRenderList(_ctx.getColors, (color) => {
    _push(`<li class="filter-catalog-item"><input type="checkbox" class="form-check-input"${ssrRenderAttr("id", "color" + color.id)}> <label${ssrRenderAttr("for", "color" + color.id)} class="filter-link">${ssrInterpolate(color.name)}</label></li>`);
  });
  _push(`<!--]--></ul></div><div><ul class="filter-catalog mt-3"><li><span class="catalog-title filter-link">\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430</span></li><!--[-->`);
  ssrRenderList(_ctx.getProperties, (property) => {
    _push(`<li class="filter-catalog-item"><input type="checkbox"${ssrRenderAttr("id", "property" + property.id)} class="form-check-input"> <label class="filter-link"${ssrRenderAttr("for", "property" + property.id)}>${ssrInterpolate(property.name)}</label></li>`);
  });
  _push(`<!--]--></ul></div><ul class="filter-catalog mt-3"><li><span class="catalog-title filter-link">\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435</span></li><li class="filter-catalog-item"><input type="checkbox" class="form-check-input" id="idf1"> <label for="idf1" class="filter-link">30%</label></li><li class="filter-catalog-item"><input type="checkbox" class="form-check-input" id="idf3"> <label for="idf2" class="filter-link">50%</label></li></ul><button class="btn btn-primary mt-4">\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C</button></section><section class="side-left-mb ps-3"><div class="d-flex" style="${ssrRenderStyle({ "align-items": "center", "justify-content": "space-between" })}"><h4 class="filter-title">Filters-Diamonds</h4><a class="me-4 text-dark">`);
  _push(ssrRenderComponent(_component_b_icon_x_circle, { class: "" }, null, _parent));
  _push(`</a></div><div class="row"><div class="col-md-6 col-6"><div><ul class="filter-catalog mt-1"><li><span class="catalog-title filter-link">\u041A\u0430\u0442\u0430\u043B\u043E\u0433</span></li><!--[-->`);
  ssrRenderList(_ctx.getCatalogs, (catalog) => {
    _push(`<li class="filter-catalog-item"><input type="checkbox" class="form-check-input"${ssrRenderAttr("id", "catalog" + catalog.id)}> <label class="filter-link">${ssrInterpolate(catalog.name)}</label></li>`);
  });
  _push(`<!--]--></ul></div></div><div class="col-md-6 col-6"><div><ul class="filter-catalog mt-3"><li><span class="catalog-title filter-link">\u0426\u0432\u0435\u0442\u044B</span></li><!--[-->`);
  ssrRenderList(_ctx.getColors, (color) => {
    _push(`<li class="filter-catalog-item"><input type="checkbox" class="form-check-input"${ssrRenderAttr("id", "color" + color.id)}> <label class="filter-link">${ssrInterpolate(color.name)}</label></li>`);
  });
  _push(`<!--]--></ul></div></div><div class="col-md-6 col-6"><div><ul class="filter-catalog mt-3"><li><span class="catalog-title filter-link">\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430</span></li><!--[-->`);
  ssrRenderList(_ctx.getProperties, (property) => {
    _push(`<li class="filter-catalog-item"><input type="checkbox"${ssrRenderAttr("id", "property" + property.id)} class="form-check-input"> <label class="filter-link">${ssrInterpolate(property.name)}</label></li>`);
  });
  _push(`<!--]--></ul></div></div><div class="col-md-6 col-6"><ul class="filter-catalog mt-3"><li><span class="catalog-title filter-link">\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435</span></li><li class="filter-catalog-item"><input type="checkbox" class="form-check-input" id="idf1"> <label for="idf1" class="filter-link">30%</label></li><li class="filter-catalog-item"><input type="checkbox" class="form-check-input" id="idf3"> <label for="idf2" class="filter-link">50%</label></li></ul></div></div></section></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductFilter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  props: ["total", "item"],
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.item);
    }
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.$emit("page-changed", pageNumber);
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "pagination pagination-md mt-3 ms-2" }, _attrs))} data-v-b85a7f25><li class="page-item" data-v-b85a7f25><a class="page-link" aria-label="Previous" data-v-b85a7f25><span aria-hidden="true" data-v-b85a7f25>\xAB</span></a></li><!--[-->`);
  ssrRenderList($options.totalPages, (page, index) => {
    _push(`<li class="${ssrRenderClass([{ "active": page == $data.currentPage }, "page-item"])}" data-v-b85a7f25>`);
    if (Math.abs(page - $data.currentPage) < 3 || page == $options.totalPages - 1 || _ctx.pageNumber == 0) {
      _push(`<a class="${ssrRenderClass([{ current: $data.currentPage === _ctx.pageNumber, last: _ctx.pageNumber == $options.totalPages - 1 && Math.abs(_ctx.pageNumber - $data.currentPage) > 3, first: _ctx.pageNumber == 0 && Math.abs(_ctx.pageNumber - $data.currentPage) > 3 }, "page-link"])}" data-v-b85a7f25>${ssrInterpolate(page)}</a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--><li class="page-item" data-v-b85a7f25><a class="page-link" aria-label="Next" data-v-b85a7f25><span aria-hidden="true" data-v-b85a7f25>\xBB</span></a></li></ul>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-b85a7f25"]]);
({
  data() {
    return {
      category_name: "",
      subcategories: [],
      subcategory_status: false,
      height: "150",
      width: "100",
      overall_price: "",
      showFilterStatus: false,
      not_product: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043D\u0435\u0442 ):",
      is_data: false,
      category_products: [],
      showPagination: true,
      type: "category"
    };
  },
  computed: {
    getId() {
      const route = useRoute();
      return route.params.id;
    },
    ...mapStores(ProductStore, FilterStore),
    ...mapState(ProductStore, ["total_c", "page_size_c", "baseUrl"])
  },
  async created() {
    this.getCategoryProductsOn(this.getId, 1);
    this.getCategoryProducts(this.getId, 1);
    this.getSubcategories();
    this.getCategory();
  },
  methods: {
    ...mapActions(ProductStore, ["getCategoryProducts"]),
    changeMyProducts(data) {
      if (data.value.length >= 1) {
        this.category_products = data.value;
        this.inTheCart();
        this.is_data = true;
        this.showPagination = false;
      } else {
        this.category_products = [];
        this.is_data = false;
        this.showPagination = true;
      }
    },
    inTheCart() {
      for (let i = 0; i < this.category_products.length; i++) {
        let obj_s = window.localStorage.getItem("product" + this.category_products[i].id);
        let obj = JSON.parse(obj_s);
        if (obj == null) {
          this.category_products[i].inCart = false;
        } else {
          this.category_products[i].inCart = true;
        }
      }
    },
    async getCategoryProductsOn(category_id, pageNumber) {
      let { data, pending, error } = await useAsyncData("cat", () => $fetch(`${this.baseUrl}/api/products/?category=${category_id}&page=${pageNumber}`), { initialCache: false });
      this.showPagination = true;
      if (data.value.results.length >= 1) {
        this.is_data = true;
        this.category_products = data.value.results;
        this.inTheCart();
      } else {
        this.category_products = [];
        this.is_data = false;
      }
    },
    closeFilter() {
      this.showFilterStatus = !this.showFilterStatus;
    },
    showFilter() {
      this.showFilterStatus = !this.showFilterStatus;
    },
    ...mapActions(ProductStore, ["addToCart", "increaseCart", "inCategoryCart"]),
    async getProduct(id) {
      const { data } = await useFetch(`${this.baseUrl}/api/product/${id}`, { initialCache: false }, "$snJWdeOxML");
      data.value.inCart = true;
      return data.value;
    },
    loadProducts(pageNumber) {
      this.getCategoryProductsOn(this.getId, pageNumber);
      this.$router.push({ path: "", query: { page: pageNumber } });
    },
    toBuy(id) {
      let product = this.getProduct(id);
      let product_obj;
      product.then((resp) => {
        product_obj = resp;
        let price = parseInt(product_obj.price_sum);
        let square = this.width / 100 * (this.height / 100);
        this.overall_price = parseInt(price * square);
        if (product_obj.type_id == true) {
          let new_p = {
            "id": product_obj.id,
            "width": this.width / 100,
            "height": this.height / 100,
            "overall_price": this.overall_price,
            "type_id": product_obj.type_id
          };
          let json_obj = JSON.stringify(new_p);
          this.addToCart(json_obj, product_obj.id);
          this.increaseCart();
        } else {
          let new_p = {
            "id": product_obj.id,
            "width": this.width / 100,
            "height": this.height / 100,
            "overall_price": this.overall_price,
            "type_id": "None"
          };
          let json_obj = JSON.stringify(new_p);
          this.addToCart(json_obj, product_obj.id);
          this.increaseCart();
        }
      });
    },
    async getSubcategories() {
      const { data } = await useAsyncData("subcategory", () => $fetch(`${this.baseUrl}/api/subcategory/`));
      this.subcategories = data.value;
    },
    async getCategory() {
      const { data, error } = await useAsyncData("category", () => $fetch(`${this.baseUrl}/api/category/${this.getId}/`, {
        headers: useRequestHeaders(["cookie"])
      }), { initialCache: false });
      this.category_name = data.value.name;
      if (data.value.subcategories.length > 1) {
        this.subcategory_status = true;
      } else {
        this.subcategory_status = false;
      }
    }
  }
});
const meta$8 = void 0;
({
  data() {
    return {
      is_product: false,
      not_product: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043D\u0435\u0442",
      height: "150",
      width: "100",
      overall_price: "",
      showFilterStatus: false
    };
  },
  computed: {
    getId() {
      const route = useRoute();
      return route.params.id;
    },
    ...mapStores(ProductStore, FilterStore),
    ...mapState(ProductStore, ["getData", "is_data", "total_s", "page_size_s", "baseUrl"])
  },
  created() {
    this.getSubCategoryProducts(this.getId, 1);
    this.fetchCatalogs("subcategory");
  },
  methods: {
    ...mapActions(ProductStore, ["getSubCategoryProducts", "addToCart", "increaseCart"]),
    ...mapActions(FilterStore, ["fetchCatalogs"]),
    closeFilter() {
      this.showFilterStatus = !this.showFilterStatus;
    },
    loadProducts(pageNumber) {
      let store = ProductStore();
      store.getSubCategoryProducts(this.getId, pageNumber);
      this.$router.push({ path: "", query: { page: pageNumber } });
    },
    showFilter() {
      this.showFilterStatus = !this.showFilterStatus;
    },
    async getProduct(id) {
      const { data } = await useFetch(`${this.baseUrl}/api/product/${id}`, { initialCache: false }, "$m1QxMWtHCy");
      data.value.inCart = true;
      this.getSubCategoryProducts();
      return data.value;
    },
    toBuy(id) {
      let product = this.getProduct(id);
      let product_obj;
      product.then((resp) => {
        product_obj = resp;
        let price = parseInt(product_obj.price_sum);
        let square = this.width / 100 * (this.height / 100);
        this.overall_price = parseInt(price * square);
        if (product_obj.type_id == true) {
          let new_p = {
            "id": product_obj.id,
            "width": this.width / 100,
            "height": this.height / 100,
            "overall_price": this.overall_price,
            "type_id": product_obj.type_id
          };
          let json_obj = JSON.stringify(new_p);
          this.increaseCart();
          this.addToCart(json_obj, product_obj.id);
        } else {
          let new_p = {
            "id": product_obj.id,
            "width": this.width / 100,
            "height": this.height / 100,
            "overall_price": this.overall_price,
            "type_id": "None"
          };
          let json_obj = JSON.stringify(new_p);
          this.increaseCart();
          this.addToCart(json_obj, product_obj.id);
        }
      });
    }
  }
});
const meta$7 = void 0;
({
  data() {
    return {
      name: "",
      email: "",
      phone_number: "",
      message: "",
      errors: []
    };
  },
  computed: {
    ...mapStores(ProductStore),
    ...mapState(ProductStore, ["baseUrl"])
  },
  methods: {
    sendMessage() {
      let userToken = useCookie("user_token");
      let csrfToken = useCookie("csrftoken");
      if (this.name != "" && this.email != "" && this.phone_number != "" && this.message != "") {
        let url = `${this.$config.baseUrl}/api/contact/`;
        let data = JSON.stringify({
          "name": this.name,
          "email": this.email,
          "phone_number": this.phone_number,
          "message": this.message
        });
        fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + userToken.value,
            "x-csrftoken": csrfToken.value
          },
          body: data
        }).then((resp) => resp.json()).then((data2) => {
          if (data2.email != this.email) {
            this.errors.push(data2.email);
          } else {
            this.name = "";
            this.email = "";
            this.phone_number = "";
            this.message = "";
            this.errors = [];
            this.errors.push("\u0412\u0430\u0448 \u0437\u0430\u043F\u0440\u043E\u0441 \u043F\u0440\u0438\u043D\u044F\u0442");
          }
        });
        this.error = [];
      } else {
        this.errors.push("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u0435");
      }
    }
  }
});
const meta$6 = void 0;
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Splide = resolveComponent("Splide");
  const _component_SplideSlide = resolveComponent("SplideSlide");
  const _component_nuxt_link = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Splide, {
    options: { type: "loop", autoplay: true },
    "aria-label": "My Favorite Images"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SplideSlide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="slide-bg-img slide-1"${_scopeId2}><div${_scopeId2}><h3 class="slide-subtitle"${_scopeId2}>\u0420\u043E\u0441\u043A\u043E\u0448\u044C \u0438 \u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0441\u0442\u044C </h3><h2 class="slide-title"${_scopeId2}> \u0417\u0432\u043E\u043D\u0438\u0442\u0435 \u0438 \u0417\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435 +998909940000 </h2>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: "tel:909940000",
                class: "btn btn-light mt-3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u0417\u0432\u043E\u043D\u0438\u0442\u0435`);
                  } else {
                    return [
                      createTextVNode("\u0417\u0432\u043E\u043D\u0438\u0442\u0435")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></figure>`);
            } else {
              return [
                createVNode("figure", { class: "slide-bg-img slide-1" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "slide-subtitle" }, "\u0420\u043E\u0441\u043A\u043E\u0448\u044C \u0438 \u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0441\u0442\u044C "),
                    createVNode("h2", { class: "slide-title" }, " \u0417\u0432\u043E\u043D\u0438\u0442\u0435 \u0438 \u0417\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435 +998909940000 "),
                    createVNode(_component_nuxt_link, {
                      to: "tel:909940000",
                      class: "btn btn-light mt-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0432\u043E\u043D\u0438\u0442\u0435")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SplideSlide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="slide-bg-img slide-2"${_scopeId2}><div${_scopeId2}><h3 class="slide-subtitle"${_scopeId2}> \u043E\u0442 Diamond Exclusive </h3><h2 class="slide-title"${_scopeId2}> \u041B\u0443\u0447\u0448\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0441\u043E\u043B\u043D\u0446\u0430 </h2>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: { name: "products" },
                class: "btn btn-light mt-3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435`);
                  } else {
                    return [
                      createTextVNode("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></figure>`);
            } else {
              return [
                createVNode("figure", { class: "slide-bg-img slide-2" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "slide-subtitle" }, " \u043E\u0442 Diamond Exclusive "),
                    createVNode("h2", { class: "slide-title" }, " \u041B\u0443\u0447\u0448\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0441\u043E\u043B\u043D\u0446\u0430 "),
                    createVNode(_component_nuxt_link, {
                      to: { name: "products" },
                      class: "btn btn-light mt-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SplideSlide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<figure class="slide-bg-img slide-3"${_scopeId2}><div${_scopeId2}><h3 class="slide-subtitle"${_scopeId2}> \u0423 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u0441\u0435 </h3><h2 class="slide-title"${_scopeId2}> \u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0416\u0430\u043B\u044E\u0437\u0438 </h2>`);
              _push3(ssrRenderComponent(_component_nuxt_link, {
                to: { name: "products" },
                class: "btn btn-light mt-3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435`);
                  } else {
                    return [
                      createTextVNode("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></figure>`);
            } else {
              return [
                createVNode("figure", { class: "slide-bg-img slide-3" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "slide-subtitle" }, " \u0423 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u0441\u0435 "),
                    createVNode("h2", { class: "slide-title" }, " \u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0416\u0430\u043B\u044E\u0437\u0438 "),
                    createVNode(_component_nuxt_link, {
                      to: { name: "products" },
                      class: "btn btn-light mt-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SplideSlide, null, {
            default: withCtx(() => [
              createVNode("figure", { class: "slide-bg-img slide-1" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "slide-subtitle" }, "\u0420\u043E\u0441\u043A\u043E\u0448\u044C \u0438 \u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0441\u0442\u044C "),
                  createVNode("h2", { class: "slide-title" }, " \u0417\u0432\u043E\u043D\u0438\u0442\u0435 \u0438 \u0417\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435 +998909940000 "),
                  createVNode(_component_nuxt_link, {
                    to: "tel:909940000",
                    class: "btn btn-light mt-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0432\u043E\u043D\u0438\u0442\u0435")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_SplideSlide, null, {
            default: withCtx(() => [
              createVNode("figure", { class: "slide-bg-img slide-2" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "slide-subtitle" }, " \u043E\u0442 Diamond Exclusive "),
                  createVNode("h2", { class: "slide-title" }, " \u041B\u0443\u0447\u0448\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0441\u043E\u043B\u043D\u0446\u0430 "),
                  createVNode(_component_nuxt_link, {
                    to: { name: "products" },
                    class: "btn btn-light mt-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_SplideSlide, null, {
            default: withCtx(() => [
              createVNode("figure", { class: "slide-bg-img slide-3" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "slide-subtitle" }, " \u0423 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u0441\u0435 "),
                  createVNode("h2", { class: "slide-title" }, " \u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0416\u0430\u043B\u044E\u0437\u0438 "),
                  createVNode(_component_nuxt_link, {
                    to: { name: "products" },
                    class: "btn btn-light mt-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u0442\u0435")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slide.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "underintro" }, _attrs))} data-v-477ab69e><div class="row gx-2" data-v-477ab69e><div class="col-lg-4 col-md-6 col-sm-6" data-v-477ab69e><div class="under-card card1" data-v-477ab69e><div class="text" data-v-477ab69e><div data-v-477ab69e><h2 class="under-card-title" data-v-477ab69e> \u0420\u043E\u0441\u043A\u043E\u0448\u043D\u044B\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0434\u043E\u043C\u0430 </h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "products/",
    class: "btn btn-success mt-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u0435\u0440\u0435\u0439\u0442\u0438`);
      } else {
        return [
          createTextVNode("\u041F\u0435\u0440\u0435\u0439\u0442\u0438")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="col-lg-4 col-md-6 col-sm-6" data-v-477ab69e><div class="under-card card2" data-v-477ab69e><div class="text" data-v-477ab69e><div data-v-477ab69e><h2 class="under-card-title" data-v-477ab69e> \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0444\u0438\u0441\u0430 </h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "products/",
    class: "btn btn-success mt-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u0435\u0440\u0435\u0439\u0442\u0438`);
      } else {
        return [
          createTextVNode("\u041F\u0435\u0440\u0435\u0439\u0442\u0438")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="col-lg-4 col-md-12 mt-0 col-sm-12" data-v-477ab69e><div class="under-card card3" data-v-477ab69e><div class="text" data-v-477ab69e><div data-v-477ab69e><h2 class="under-card-title" data-v-477ab69e> \u041D\u043E\u0432\u044B\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0434\u043E\u043C\u0430 </h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "products/",
    class: "btn btn-success mt-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u0435\u0440\u0435\u0439\u0442\u0438`);
      } else {
        return [
          createTextVNode("\u041F\u0435\u0440\u0435\u0439\u0442\u0438")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UnderIntro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-477ab69e"]]);
const _sfc_main$4 = {
  data() {
    return {
      categories: []
    };
  },
  async created() {
    const { data } = await useFetch(`${this.$config.baseUrl}/api/categories/`, "$Z1R2bBm68Y");
    this.categories = data.value;
  },
  computed: {
    ...mapStores(ProductStore),
    ...mapState(ProductStore, ["baseUrl"])
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "categories" }, _attrs))}><h3 class="title mb-3">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</h3><div class="row gx-2"><!--[-->`);
  ssrRenderList($data.categories, (category) => {
    _push(`<div class="col-lg-3 col-md-6 col-6 col-sm-6">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "category/" + category.id
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="grid"${_scopeId}><figure class="effect-lily"${_scopeId}><img${ssrRenderAttr("src", category.image)} height="350" alt="img12"${_scopeId}><figcaption${_scopeId}><div${_scopeId}><h2${_scopeId}>${ssrInterpolate(category.name)}</h2></div><p${_scopeId}>Click to detail</p></figcaption></figure></div>`);
        } else {
          return [
            createVNode("div", { class: "grid" }, [
              createVNode("figure", { class: "effect-lily" }, [
                createVNode("img", {
                  src: category.image,
                  height: "350",
                  alt: "img12"
                }, null, 8, ["src"]),
                createVNode("figcaption", null, [
                  createVNode("div", null, [
                    createVNode("h2", null, toDisplayString(category.name), 1)
                  ]),
                  createVNode("p", null, "Click to detail")
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Categories.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "companies" }, _attrs))} data-v-f751c66a></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Companies.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f751c66a"]]);
const meta$5 = void 0;
({
  data() {
    return {
      status: "MyProfile",
      logout: "",
      sure: "\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u043E\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?"
    };
  },
  computed: {
    ...mapStores(AccountStore),
    ...mapState(AccountStore, ["firstName", "lastName", "phone_number", "baseUrl"])
  },
  methods: {
    myclass() {
      if (this.status == "MyProfile") {
        return {
          "active": true
        };
      }
    },
    updateclass() {
      if (this.status == "UpdateProfile") {
        return {
          "active": true
        };
      }
    },
    logoutclass() {
      if (this.status == "Logout") {
        return {
          "active": true
        };
      }
    },
    user_logout() {
      fetch(`${this.$config.baseUrl}/api/users/logout/`, {
        method: "GET",
        credentials: "include"
      }).then((resp) => resp.json()).then((data) => {
        if (data.Logout) {
          this.sure = "";
          this.logout = "\u0412\u044B \u0432\u044B\u0445\u043E\u0434\u0438\u043B\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430!";
          let userToken = useCookie("user_token");
          userToken.value = null;
          let store = AccountStore();
          store.getMe();
          store.getAdresses();
        }
      });
    }
  }
});
const meta$4 = void 0;
const meta$3 = void 0;
const _sfc_main$2 = {
  props: {
    category_id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      not_product: "\u041D\u0435\u0442\u0443 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 ):"
    };
  },
  created() {
    this.baseUrl = this.$config.baseUrl;
  },
  computed: {
    ...mapStores(ProductStore, FilterStore),
    ...mapState(ProductStore, ["is_product", "getData"]),
    ...mapState(FilterStore, ["getColors", "getCatalogs", "getProperties"])
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Splide = resolveComponent("Splide");
  const _component_SplideSlide = resolveComponent("SplideSlide");
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_nuxt_link = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "pop-products" }, _attrs))} data-v-ed0a93d3>`);
  if (_ctx.is_product) {
    _push(ssrRenderComponent(_component_Splide, {
      options: { gap: 5, autoplay: true, perPage: 4, pagination: false, autoheight: true },
      "aria-label": "My Favorite Images"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.getData, (product) => {
            _push2(ssrRenderComponent(_component_SplideSlide, {
              key: product.id
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="card main-card" data-v-ed0a93d3${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: { name: "product-id", params: { id: product.id } },
                    class: "me-auto ms-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _ctx.baseUrl + product.image)} style="${ssrRenderStyle({ "margin-top": "20px", "padding": "0" })}" class="img-fluid"${ssrRenderAttr("alt", product.name)} data-v-ed0a93d3${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _ctx.baseUrl + product.image,
                            style: { "margin-top": "20px", "padding": "0" },
                            class: "img-fluid",
                            alt: product.name
                          }, null, 8, ["src", "alt"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="card-body" data-v-ed0a93d3${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: { name: "product-id", params: { id: product.id } },
                    class: "nav-link"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="card-title" data-v-ed0a93d3${_scopeId3}>${ssrInterpolate(product.name)} - ${ssrInterpolate(product.weight)}</h4><span class="card-price" data-v-ed0a93d3${_scopeId3}>${ssrInterpolate(product.price)} \u0441\u0443\u043C</span>`);
                      } else {
                        return [
                          createVNode("h4", { class: "card-title" }, toDisplayString(product.name) + " - " + toDisplayString(product.weight), 1),
                          createVNode("span", { class: "card-price" }, toDisplayString(product.price) + " \u0441\u0443\u043C", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div data-v-ed0a93d3${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: { name: "product-id", params: { id: product.id } },
                    class: "btn btn-success mt-2 btn-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-ed0a93d3${_scopeId3}>\u041F\u0435\u0440\u0435\u0439\u0442\u0438</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card main-card" }, [
                      createVNode(_component_NuxtLink, {
                        to: { name: "product-id", params: { id: product.id } },
                        class: "me-auto ms-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _ctx.baseUrl + product.image,
                            style: { "margin-top": "20px", "padding": "0" },
                            class: "img-fluid",
                            alt: product.name
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode(_component_NuxtLink, {
                          to: { name: "product-id", params: { id: product.id } },
                          class: "nav-link"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "card-title" }, toDisplayString(product.name) + " - " + toDisplayString(product.weight), 1),
                            createVNode("span", { class: "card-price" }, toDisplayString(product.price) + " \u0441\u0443\u043C", 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]),
                        createVNode("div", null, [
                          createVNode(_component_nuxt_link, {
                            to: { name: "product-id", params: { id: product.id } },
                            class: "btn btn-success mt-2 btn-sm"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment$1, null, renderList(_ctx.getData, (product) => {
              return openBlock(), createBlock(_component_SplideSlide, {
                key: product.id
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "card main-card" }, [
                    createVNode(_component_NuxtLink, {
                      to: { name: "product-id", params: { id: product.id } },
                      class: "me-auto ms-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _ctx.baseUrl + product.image,
                          style: { "margin-top": "20px", "padding": "0" },
                          class: "img-fluid",
                          alt: product.name
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode(_component_NuxtLink, {
                        to: { name: "product-id", params: { id: product.id } },
                        class: "nav-link"
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "card-title" }, toDisplayString(product.name) + " - " + toDisplayString(product.weight), 1),
                          createVNode("span", { class: "card-price" }, toDisplayString(product.price) + " \u0441\u0443\u043C", 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createVNode("div", null, [
                        createVNode(_component_nuxt_link, {
                          to: { name: "product-id", params: { id: product.id } },
                          class: "btn btn-success mt-2 btn-sm"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438")
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopProducts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ed0a93d3"]]);
({
  data() {
    return {
      product: [],
      square: "1,5",
      height: "150",
      width: "100",
      overall_price: "",
      endSquare: "",
      showPrice: "",
      inCart: false,
      errorType: "",
      typeProduct: ""
    };
  },
  computed: {
    ...mapStores(FilterStore, ProductStore),
    ...mapState(FilterStore, ["getMyCatalog", "getMyColors", "getMyCategory", "getMyProperty"]),
    ...mapState(ProductStore, ["baseUrl"]),
    getId() {
      const route = useRoute();
      return route.params.id;
    }
  },
  methods: {
    ...mapActions(FilterStore, ["getDetailCatalog", "getDetailColor", "getDetailCategory", "getDetailSubCategory", "getDetailProperty"]),
    ...mapActions(ProductStore, ["setCategoryId", "addToCart", "increaseCart"]),
    async getProduct() {
      const { data } = await useFetch(`${this.baseUrl}/api/product/${this.getId}`, { initialCache: false }, "$rMlQqPL3qK");
      this.product = data.value;
      this.inTheCart();
      let pri = this.product.price_sum;
      this.showPrice = `${pri.slice(-9, -6)} ${pri.slice(-6, -3)} ${pri.slice(-3)}`;
      this.overall_price = this.showPrice;
      this.endSquare = `${this.width / 100}x${this.height / 100}`;
      if (this.product.category != null) {
        this.getDetailCategory(this.product.category);
        this.setCategoryId(this.product.category, "category");
      } else if (this.product.subcategory) {
        this.getDetailSubCategory(this.product.subcategory);
        this.setCategoryId(this.product.subcategory, "subcategory");
      }
      if (this.product.color.length == 1) {
        this.getDetailColor(this.product.color);
      } else if (this.product.color.length > 1) {
        this.getDetailColor(this.product.color[0]);
      }
      if (this.product.catalog) {
        this.getDetailCatalog(this.product.catalog);
      }
      if (this.product.property) {
        this.getDetailProperty(this.product.property);
      }
    },
    changeSquary() {
      let width = parseInt(this.width);
      let height = parseInt(this.height);
      let price = parseInt(this.product.price_sum);
      if (width < 100) {
        this.width = "100";
      }
      if (height < 100) {
        this.height = "100";
      }
      this.square = this.width / 100 * (this.height / 100);
      this.overall_price = price * this.square;
      this.endSquare = `${this.width / 100}x${this.height / 100}`;
    },
    toBuy(obj) {
      if (obj.type_id == true) {
        if (this.typeProduct != "") {
          let new_p = {
            "id": obj.id,
            "width": this.width / 100,
            "height": this.height / 100,
            "overall_price": this.overall_price,
            "type_id": this.typeProduct
          };
          let json_obj = JSON.stringify(new_p);
          this.inCart = true;
          this.increaseCart();
          this.addToCart(json_obj, obj.id);
        } else {
          this.errorType = "*required field";
        }
      } else {
        let new_p = {
          "id": obj.id,
          "width": this.width / 100,
          "height": this.height / 100,
          "overall_price": this.overall_price,
          "type_id": "None"
        };
        let json_obj = JSON.stringify(new_p);
        this.inCart = true;
        this.increaseCart();
        this.addToCart(json_obj, obj.id);
        this.errorType = "";
      }
    },
    inTheCart() {
      let name = "product" + this.product.id;
      let obj = window.localStorage.getItem(name);
      if (obj) {
        this.inCart = true;
      } else {
        this.inCart = false;
      }
    }
  },
  created() {
    this.getProduct();
  }
});
const meta$2 = void 0;
({
  async created() {
    this.getProducts(1);
  },
  data() {
    return {
      not_product: "\u041D\u0435\u0442\u0443 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 ):",
      product: [],
      height: "150",
      width: "100",
      overall_price: "",
      showFilterStatus: false,
      page: 1,
      products: [],
      is_product: false,
      showPagination: true
    };
  },
  computed: {
    ...mapStores(ProductStore, FilterStore),
    ...mapState(ProductStore, ["total", "page_size", "baseUrl"]),
    ...mapState(FilterStore, ["getColors", "getCatalogs", "getProperties"])
  },
  methods: {
    ...mapActions(ProductStore, ["addToCart", "increaseCart"]),
    changeMyProducts(data) {
      if (data.value.length >= 1) {
        this.products = data.value;
        this.inTheCart();
        this.is_product = true;
        for (let i = 0; i < this.products.length; i++) {
          let overall_price = this.products[i].price_sum.toString();
          overall_price = `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`;
          this.products[i].b_price = overall_price;
        }
        this.showPagination = false;
      } else {
        this.products = [];
        this.is_product = false;
        this.showPagination = false;
      }
    },
    inTheCart() {
      for (let i = 0; i < this.products.length; i++) {
        let obj_s = localStorage.getItem("product" + this.products[i].id);
        let obj = JSON.parse(obj_s);
        if (obj == null) {
          this.products[i].inCart = false;
        } else {
          this.products[i].inCart = true;
        }
      }
    },
    async getProducts(page, id) {
      let { data, pending, error } = await useAsyncData("products", () => $fetch(`${this.baseUrl}/api/products/?page=${page}`), { initialCache: false });
      if (data.value.results.length >= 1) {
        this.products = data.value.results;
        for (let i = 0; i < this.products.length; i++) {
          let overall_price = this.products[i].price_sum.toString();
          overall_price = `${overall_price.slice(-9, -6)} ${overall_price.slice(-6, -3)} ${overall_price.slice(-3)}`;
          this.products[i].b_price = overall_price;
        }
        this.is_product = true;
        this.showPagination = true;
        this.inTheCart();
      } else {
        this.products = [];
        this.is_product = false;
      }
    },
    closeFilter() {
      this.showFilterStatus = !this.showFilterStatus;
    },
    loadProducts(pageNumber) {
      let store = ProductStore();
      this.$router.push({ path: "", query: { page: pageNumber } });
      store.fetchProducts(pageNumber);
      this.getProducts(pageNumber);
    },
    async getProduct(id) {
      const { data } = await useFetch(`${this.baseUrl}/api/product/${id}`, { initialCache: false }, "$KGuFkAgQ7G");
      data.value.inCart = true;
      return data.value;
    },
    showFilter() {
      this.showFilterStatus = !this.showFilterStatus;
    },
    toBuy(id) {
      let product = this.getProduct(id);
      let product_obj;
      product.then((resp) => {
        product_obj = resp;
        let price = parseInt(product_obj.price_sum);
        let square = this.width / 100 * (this.height / 100);
        this.overall_price = parseInt(price * square);
        if (product_obj.type_id == true) {
          let new_p = {
            "id": product_obj.id,
            "width": this.width / 100,
            "height": this.height / 100,
            "overall_price": this.overall_price,
            "type_id": product_obj.type_id
          };
          let json_obj = JSON.stringify(new_p);
          this.increaseCart();
          this.addToCart(json_obj, product_obj.id);
          this.inTheCart();
          this.getProducts(1);
        } else {
          let new_p = {
            "id": product_obj.id,
            "width": this.width / 100,
            "height": this.height / 100,
            "overall_price": this.overall_price,
            "type_id": "None"
          };
          let json_obj = JSON.stringify(new_p);
          this.increaseCart();
          this.addToCart(json_obj, product_obj.id);
          this.inTheCart();
          this.getProducts(1);
        }
      });
    }
  }
});
const meta$1 = void 0;
({
  data() {
    return {
      searchedProducts: [],
      query: ""
    };
  },
  computed: {
    ...mapStores(ProductStore),
    ...mapState(ProductStore, ["products"])
  },
  created() {
    this.baseUrl = this.$config.baseUrl;
  },
  methods: {
    queryFilter() {
      this.searchedProducts = this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  }
});
const meta = void 0;
const _routes = [
  {
    name: "about",
    path: "/about",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/about.vue",
    children: [],
    meta: meta$a,
    alias: [],
    component: () => import('./_nuxt/about.b399921c.mjs').then((m) => m.default || m)
  },
  {
    name: "cart",
    path: "/cart",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/cart.vue",
    children: [],
    meta: meta$9,
    alias: [],
    component: () => import('./_nuxt/cart.eec41063.mjs').then((m) => m.default || m)
  },
  {
    name: "category-id",
    path: "/category/:id?",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/category/[[id]].vue",
    children: [],
    meta: meta$8,
    alias: [],
    component: () => import('./_nuxt/_id_.7d09a4df.mjs').then((m) => m.default || m)
  },
  {
    name: "category-subcategory-id",
    path: "/category/subcategory/:id?",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/category/subcategory/[[id]].vue",
    children: [],
    meta: meta$7,
    alias: [],
    component: () => import('./_nuxt/_id_.9b97d9a1.mjs').then((m) => m.default || m)
  },
  {
    name: "contact",
    path: "/contact",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/contact.vue",
    children: [],
    meta: meta$6,
    alias: [],
    component: () => import('./_nuxt/contact.74788c23.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/index.vue",
    children: [],
    meta: meta$5,
    alias: [],
    component: () => import('./_nuxt/index.ae3b4759.mjs').then((m) => m.default || m)
  },
  {
    name: "myprofile",
    path: "/myprofile",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/myprofile.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => import('./_nuxt/myprofile.d26c7a3f.mjs').then((m) => m.default || m)
  },
  {
    name: "portfolio",
    path: "/portfolio",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/portfolio.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => import('./_nuxt/portfolio.7d37e31d.mjs').then((m) => m.default || m)
  },
  {
    name: "product-id",
    path: "/product/:id?",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/product/[[id]].vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => import('./_nuxt/_id_.c20b98bf.mjs').then((m) => m.default || m)
  },
  {
    name: "products",
    path: "/products",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/products/index.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => import('./_nuxt/index.4af87b48.mjs').then((m) => m.default || m)
  },
  {
    name: "search",
    path: "/search",
    file: "/home/abdulvoris/Documents/Jalyuzi/frontend/pages/search.vue",
    children: [],
    meta,
    alias: [],
    component: () => import('./_nuxt/search.dcc74691.mjs').then((m) => m.default || m)
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const globalMiddleware = [];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a, _b, _c, _d;
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b = (_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) != null ? _b : createMemoryHistory(routerBase);
  const routes = (_d = (_c = routerOptions.routes) == null ? void 0 : _c.call(routerOptions, _routes)) != null ? _d : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b2, _c2, _d2;
    if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a2, _b2;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a2 = initialLayout.value) != null ? _a2 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual$1(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const plugins_b_icons_js_CvlTzXPgv6 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BootstrapIconsPlugin, {
    property: {
      id: "GA_MEASUREMENT_ID"
    }
  });
});
const plugins_vue_splide_js_QoaTwmxjiV = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide, {
    property: {
      id: "GA_MEASUREMENT_ID"
    }
  });
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq,
  plugins_b_icons_js_CvlTzXPgv6,
  plugins_vue_splide_js_QoaTwmxjiV
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.41eef35b.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layouts = {
  default: defineAsyncComponent(() => import('./_nuxt/default.eb0aa48b.mjs').then((m) => m.default || m))
};
const __nuxt_component_0 = defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      const transitionProps = (_c = route.meta.layoutTransition) != null ? _c : appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => {
          return _wrapIf(layouts[layout], hasLayout, context.slots).default();
        }
      }).default();
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = resolveComponent("NuxtPage");
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { AccountStore as A, FilterStore as F, ProductStore as P, __nuxt_component_0$4 as _, _export_sfc as a, mapStores as b, mapActions as c, useCookie as d, entry$1 as default, __nuxt_component_0$5 as e, useRoute as f, useAsyncData as g, useRequestHeaders as h, __nuxt_component_0$3 as i, __nuxt_component_2$1 as j, __nuxt_component_0$2 as k, __nuxt_component_1 as l, mapState as m, __nuxt_component_2 as n, __nuxt_component_4 as o, __nuxt_component_0$1 as p, useHead as q, useFetch as u };
//# sourceMappingURL=server.mjs.map
