import { f as useRoute, b as mapStores, F as FilterStore, P as ProductStore, m as mapState, c as mapActions, u as useFetch, a as _export_sfc, i as __nuxt_component_0$3, e as __nuxt_component_0$5, j as __nuxt_component_2$1 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
      const { data } = await useFetch(`${this.baseUrl}/api/product/${id}`, { initialCache: false }, "$1LNrqx1Bf6");
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductFilter = __nuxt_component_0$3;
  const _component_b_icon_funnel = resolveComponent("b-icon-funnel");
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_b_icon_basket3 = resolveComponent("b-icon-basket3");
  const _component_Pagination = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "subcategory" }, _attrs))} data-v-09b42b36><div class="row gx-0" data-v-09b42b36><div class="col-lg-3" data-v-09b42b36>`);
  _push(ssrRenderComponent(_component_ProductFilter, {
    showFilter: $data.showFilterStatus,
    is_sub: true,
    onCloseFilter: $options.closeFilter
  }, null, _parent));
  _push(`</div><div class="col-lg-9" data-v-09b42b36><section class="main" data-v-09b42b36><div class="main-container" data-v-09b42b36><div class="main-top-card card" data-v-09b42b36><div class="card-body d-flex" style="${ssrRenderStyle({ "justify-content": "space-between" })}" data-v-09b42b36><div style="${ssrRenderStyle({ "width": "100%" })}" data-v-09b42b36><h4 class="card-title" data-v-09b42b36>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 - ${ssrInterpolate(_ctx.category_name)}</h4><div class="d-flex" style="${ssrRenderStyle({ "justify-content": "flex-end" })}" data-v-09b42b36><div class="icon-filter" data-v-09b42b36><a data-v-09b42b36>`);
  _push(ssrRenderComponent(_component_b_icon_funnel, { class: "" }, null, _parent));
  _push(`</a></div></div></div></div></div>`);
  if (_ctx.is_data) {
    _push(`<div class="row gx-3" data-v-09b42b36><!--[-->`);
    ssrRenderList(_ctx.getData, (product) => {
      _push(`<div class="col-md-3 col-6 col-sm-4 mt-3" data-v-09b42b36>`);
      if (product.status) {
        _push(`<div class="card main-card" data-v-09b42b36>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: "product-id", params: { id: product.slug } },
          class: "me-auto ms-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _ctx.baseUrl + product.image)} class="card-img"${ssrRenderAttr("alt", product.name)} data-v-09b42b36${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.baseUrl + product.image,
                  class: "card-img",
                  alt: product.name
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="card-body" data-v-09b42b36>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: "product-id", params: { id: product.slug } },
          class: "nav-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 class="card-title" data-v-09b42b36${_scopeId}>${ssrInterpolate(product.name)} - ${ssrInterpolate(product.weight)}</h4><span class="card-price" data-v-09b42b36${_scopeId}>${ssrInterpolate(product.price_sum)} \u0441\u0443\u043C</span>`);
            } else {
              return [
                createVNode("h4", { class: "card-title" }, toDisplayString(product.name) + " - " + toDisplayString(product.weight), 1),
                createVNode("span", { class: "card-price" }, toDisplayString(product.price_sum) + " \u0441\u0443\u043C", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div data-v-09b42b36>`);
        if (product.type_id) {
          _push(`<div data-v-09b42b36>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { name: "product-id", params: { id: product.slug } },
            class: "btn-more w-100 btn btn-success"
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
          _push(`</div>`);
        } else {
          _push(`<div data-v-09b42b36>`);
          if (product.inCart) {
            _push(`<div class="btn-dis" data-v-09b42b36>\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435</div>`);
          } else {
            _push(`<button class="btn btn-success w-100 btn-more" data-v-09b42b36><span data-v-09b42b36>\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u044C</span> `);
            _push(ssrRenderComponent(_component_b_icon_basket3, { class: "basket3-icon pb-1" }, null, _parent));
            _push(`</button>`);
          }
          _push(`</div>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]-->`);
    _push(ssrRenderComponent(_component_Pagination, {
      item: _ctx.page_size_s,
      total: _ctx.total_s,
      onPageChanged: $options.loadProducts
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="row gx-3" data-v-09b42b36><div class="container" data-v-09b42b36><h5 style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-09b42b36>${ssrInterpolate($data.not_product)} :(</h5></div></div>`);
  }
  _push(`</div></section></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/subcategory/[[id]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __id__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-09b42b36"]]);

export { __id__ as default };
//# sourceMappingURL=_id_.9b97d9a1.mjs.map
