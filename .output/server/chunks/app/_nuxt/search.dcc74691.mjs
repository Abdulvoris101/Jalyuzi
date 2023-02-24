import { b as mapStores, P as ProductStore, m as mapState, a as _export_sfc, e as __nuxt_component_0$5 } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "search-res" }, _attrs))}><div class="container"><section class="search-section"><h4 class="search-title">\u041D\u0430\u0439\u0434\u0435\u0442\u0441\u044F \u0432\u0441\u0435 </h4><input type="text"${ssrRenderAttr("value", $data.query)} placeholder="\u041F\u043E\u0438\u0441\u043A" class="form-control mt-3"><table class="table mt-3"><thead><tr><th scope="col">Id</th><th scope="col">Image</th><th scope="col">Name</th><th scope="col">Weight</th><th scope="col">Price</th><th>To</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.searchedProducts, (product) => {
    _push(`<tr><th scope="row">${ssrInterpolate(product.id)}</th><td><img${ssrRenderAttr("src", _ctx.baseUrl + product.image)} width="50"${ssrRenderAttr("alt", product.name)}></td><td>${ssrInterpolate(product.model)}</td><td>${ssrInterpolate(product.weight)}</td><td>${ssrInterpolate(product.price)}</td><td>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "text-dark",
      to: { name: "product-id", params: { id: product.slug } }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` \u041F\u0435\u0440\u0435\u0439\u0442\u0438 `);
        } else {
          return [
            createTextVNode(" \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]--></tbody></table></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { search as default };
//# sourceMappingURL=search.dcc74691.mjs.map
