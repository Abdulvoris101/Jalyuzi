import { u as useFetch, e as __nuxt_component_0$5 } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import 'cookie-es';
import 'ohash';
import 'bootstrap-icons-vue';
import '../../nitro/node-server.mjs';
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

const _sfc_main = {
  __name: "portfolio",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://feeds.behold.so/ran2jUY85ACMmkU6mxiA", "$czx70LxKTy")), __temp = await __temp, __restore(), __temp);
    let posts = data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "portfolio" }, _attrs))}><div class="container"><h4 class="portfolio-title mt-3 mb-3">Portfolio</h4><div class="row mb-5"><!--[-->`);
      ssrRenderList(unref(posts), (post, index) => {
        _push(`<div class="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: post.permalink,
          class: "text-dark",
          style: { "text-decoration": "none" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<article class="card insta-card" style="${ssrRenderStyle({ "box-shadow": "none !important" })}"${_scopeId}><div class="card-image"${_scopeId}>`);
              if (post.mediaType == "IMAGE") {
                _push2(`<img${ssrRenderAttr("src", post.mediaUrl)} class="img-fluid img"${ssrRenderAttr("alt", post.caption)}${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", post.thumbnailUrl)} class="img-fluid img"${ssrRenderAttr("alt", post.caption)}${_scopeId}>`);
              }
              _push2(`</div>`);
              if (post.caption) {
                _push2(`<main class="card-content"${_scopeId}><div class="media"${_scopeId}><div class="content"${_scopeId}><span class="content-body"${_scopeId}>${ssrInterpolate(post.caption)}</span></div></div></main>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</article>`);
            } else {
              return [
                createVNode("article", {
                  class: "card insta-card",
                  style: { "box-shadow": "none !important" }
                }, [
                  createVNode("div", { class: "card-image" }, [
                    post.mediaType == "IMAGE" ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: post.mediaUrl,
                      class: "img-fluid img",
                      alt: post.caption
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: post.thumbnailUrl,
                      class: "img-fluid img",
                      alt: post.caption
                    }, null, 8, ["src", "alt"]))
                  ]),
                  post.caption ? (openBlock(), createBlock("main", {
                    key: 0,
                    class: "card-content"
                  }, [
                    createVNode("div", { class: "media" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("span", { class: "content-body" }, toDisplayString(post.caption), 1)
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio.7d37e31d.mjs.map
