import { b as mapStores, F as FilterStore, P as ProductStore, m as mapState, c as mapActions, g as useAsyncData, u as useFetch, a as _export_sfc, i as __nuxt_component_0$3, e as __nuxt_component_0$5, j as __nuxt_component_2$1 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
      const { data } = await useFetch(`${this.baseUrl}/api/product/${id}`, { initialCache: false }, "$U48yGv7YOO");
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = resolveComponent("Title");
  const _component_Meta = resolveComponent("Meta");
  const _component_ProductFilter = __nuxt_component_0$3;
  const _component_b_icon_funnel = resolveComponent("b-icon-funnel");
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_b_icon_basket3 = resolveComponent("b-icon-basket3");
  const _component_Pagination = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "products" }, _attrs))} data-v-faf88617>`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Jalyuzi - \u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 `);
      } else {
        return [
          createTextVNode("Jalyuzi - \u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "keywords",
    content: "\u0416\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u043A\u0443\u043F\u0438\u0442\u044C \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0443\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435, \u0436\u0430\u043B\u044E\u0437\u0438 \u0443\u0437, \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0436\u0430\u043B\u044E\u0437\u0435\u0439 \u0432 \u0422\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u0444\u043E\u0442\u043E \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, jalyuzi, jalyuzi uz, jalyuzi pardalar"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: "\u0446\u0435\u043D\u044B \u043D\u0430 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435"
  }, null, _parent));
  _push(`<div class="row gx-0" data-v-faf88617><div class="col-lg-3" data-v-faf88617>`);
  _push(ssrRenderComponent(_component_ProductFilter, {
    showFilter: $data.showFilterStatus,
    is_sub: false,
    onGetProducts: $options.getProducts,
    onCloseFilter: $options.closeFilter,
    onChangeMyProducts: $options.changeMyProducts
  }, null, _parent));
  _push(`</div><div class="col-lg-9" data-v-faf88617><section class="main" data-v-faf88617><div class="main-container" data-v-faf88617><div class="main-top-card card" data-v-faf88617><div class="card-body d-flex" style="${ssrRenderStyle({ "justify-content": "space-between" })}" data-v-faf88617><h4 class="card-title" data-v-faf88617>\u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B</h4><div class="d-flex" style="${ssrRenderStyle({ "justify-content": "flex-end" })}" data-v-faf88617><div class="icon-filter" data-v-faf88617><a data-v-faf88617>`);
  _push(ssrRenderComponent(_component_b_icon_funnel, { class: "" }, null, _parent));
  _push(`</a></div></div></div></div><div data-v-faf88617>`);
  if ($data.is_product) {
    _push(`<div class="row gx-3" data-v-faf88617><!--[-->`);
    ssrRenderList($data.products, (product) => {
      _push(`<div class="col-md-3 col-6 col-sm-4" data-v-faf88617>`);
      if (product.status) {
        _push(`<div class="card main-card" data-v-faf88617>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: "product-id", params: { id: product.slug } },
          class: "me-auto ms-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _ctx.baseUrl + product.image)}${ssrRenderAttr("alt", product.name)} class="card-img" alt="..." data-v-faf88617${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.baseUrl + product.image,
                  alt: product.name,
                  class: "card-img"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="card-body" data-v-faf88617>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: "product-id", params: { id: product.slug } },
          class: "nav-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 class="card-title" data-v-faf88617${_scopeId}>${ssrInterpolate(product.name)} - ${ssrInterpolate(product.weight)}</h4><span class="card-price" data-v-faf88617${_scopeId}>${ssrInterpolate(product.b_price)} \u0441\u0443\u043C</span>`);
            } else {
              return [
                createVNode("h4", { class: "card-title" }, toDisplayString(product.name) + " - " + toDisplayString(product.weight), 1),
                createVNode("span", { class: "card-price" }, toDisplayString(product.b_price) + " \u0441\u0443\u043C", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div data-v-faf88617>`);
        if (product.type_id) {
          _push(`<div data-v-faf88617>`);
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
          _push(`<div data-v-faf88617>`);
          if (product.inCart) {
            _push(`<div class="btn-dis" data-v-faf88617>\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435</div>`);
          } else {
            _push(`<button class="btn btn-success w-100 btn-more" data-v-faf88617><span data-v-faf88617>\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u044C</span> `);
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
    if ($data.showPagination) {
      _push(ssrRenderComponent(_component_Pagination, {
        item: _ctx.page_size,
        total: _ctx.total,
        onPageChanged: $options.loadProducts
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="row gx-3" data-v-faf88617><div class="container" data-v-faf88617><h5 style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-faf88617>${ssrInterpolate($data.not_product)} :(</h5></div></div>`);
  }
  _push(`</div></div></section></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-faf88617"]]);

export { index as default };
//# sourceMappingURL=index.4af87b48.mjs.map
