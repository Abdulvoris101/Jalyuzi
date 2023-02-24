import { f as useRoute, b as mapStores, F as FilterStore, P as ProductStore, m as mapState, c as mapActions, g as useAsyncData, u as useFetch, h as useRequestHeaders, a as _export_sfc, i as __nuxt_component_0$3, e as __nuxt_component_0$5, j as __nuxt_component_2$1 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
      const { data } = await useFetch(`${this.baseUrl}/api/product/${id}`, { initialCache: false }, "$ZsG0U0iQDG");
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = resolveComponent("Title");
  const _component_Meta = resolveComponent("Meta");
  const _component_ProductFilter = __nuxt_component_0$3;
  const _component_b_icon_funnel = resolveComponent("b-icon-funnel");
  const _component_NuxtLink = __nuxt_component_0$5;
  const _component_b_icon_basket3 = resolveComponent("b-icon-basket3");
  const _component_Pagination = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "products" }, _attrs))} data-v-ffa62a1b>`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Jalyuzi.uz - ${ssrInterpolate($data.category_name)} \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 `);
      } else {
        return [
          createTextVNode("Jalyuzi.uz - " + toDisplayString($data.category_name) + " \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 ", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: $data.category_name + "\u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0433.\u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435 \u0446\u0435\u043D\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430 Jalyuzi"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "keywords",
    content: "\u0416\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u043A\u0443\u043F\u0438\u0442\u044C \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0443\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D\u0435, \u0436\u0430\u043B\u044E\u0437\u0438 \u0443\u0437, \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0436\u0430\u043B\u044E\u0437\u0435\u0439 \u0432 \u0422\u0430\u0448\u043A\u0435\u043D\u0442\u0435, \u0444\u043E\u0442\u043E \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435, jalyuzi, jalyuzi uz, jalyuzi pardalar"
  }, null, _parent));
  _push(`<div class="row gx-0" data-v-ffa62a1b><div class="col-lg-3" data-v-ffa62a1b>`);
  _push(ssrRenderComponent(_component_ProductFilter, {
    showFilter: $data.showFilterStatus,
    is_sub: false,
    onGetCategoryProductsOn: $options.getCategoryProductsOn,
    onCloseFilter: $options.closeFilter,
    onChangeMyProducts: $options.changeMyProducts
  }, null, _parent));
  _push(`</div><div class="col-lg-9" data-v-ffa62a1b><section class="main" data-v-ffa62a1b><div class="main-container" data-v-ffa62a1b><div class="main-top-card card" data-v-ffa62a1b><div class="card-body d-flex" style="${ssrRenderStyle({ "justify-content": "space-between" })}" data-v-ffa62a1b><h4 class="card-title" data-v-ffa62a1b>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 - ${ssrInterpolate($data.category_name)}</h4><div class="d-flex" style="${ssrRenderStyle({ "justify-content": "flex-end" })}" data-v-ffa62a1b><div class="icon-filter" data-v-ffa62a1b><a data-v-ffa62a1b>`);
  _push(ssrRenderComponent(_component_b_icon_funnel, { class: "" }, null, _parent));
  _push(`</a></div></div></div></div>`);
  if ($data.subcategory_status) {
    _push(`<div data-v-ffa62a1b><div class="row gx-3" data-v-ffa62a1b><!--[-->`);
    ssrRenderList($data.subcategories, (subcategory) => {
      _push(`<div class="col-md-3 col-6 col-sm-4" data-v-ffa62a1b><div class="card main-card" data-v-ffa62a1b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "subcategory/" + subcategory.id,
        class: "me-auto ms-auto nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("alt", subcategory.name)}${ssrRenderAttr("src", subcategory.image)} class="card-img" data-v-ffa62a1b${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: subcategory.name,
                src: subcategory.image,
                class: "card-img"
              }, null, 8, ["alt", "src"])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<div class="card-body" data-v-ffa62a1b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "subcategory/" + subcategory.id,
        class: "me-auto ms-auto nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="card-title" data-v-ffa62a1b${_scopeId}>${ssrInterpolate(subcategory.name)}</h4><div data-v-ffa62a1b${_scopeId}><button class="btn btn-success w-100 btn-more" data-v-ffa62a1b${_scopeId}><span data-v-ffa62a1b${_scopeId}>\u041F\u0435\u0440\u0435\u0439\u0442\u0438</span></button></div>`);
          } else {
            return [
              createVNode("h4", { class: "card-title" }, toDisplayString(subcategory.name), 1),
              createVNode("div", null, [
                createVNode("button", { class: "btn btn-success w-100 btn-more" }, [
                  createVNode("span", null, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438")
                ])
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<div data-v-ffa62a1b>`);
    if ($data.is_data) {
      _push(`<div class="row gx-3" data-v-ffa62a1b><!--[-->`);
      ssrRenderList($data.category_products, (product) => {
        _push(`<div class="col-md-3 col-6 col-sm-4" data-v-ffa62a1b>`);
        if (product.status) {
          _push(`<div class="card main-card" data-v-ffa62a1b>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { name: "product-id", params: { id: product.slug } },
            class: "me-auto ms-auto"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _ctx.baseUrl + product.image)} class="card-img"${ssrRenderAttr("alt", product.name)} data-v-ffa62a1b${_scopeId}>`);
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
          _push(`<div class="card-body" data-v-ffa62a1b>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { name: "product-id", params: { id: product.slug } },
            class: "nav-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h4 class="card-title" data-v-ffa62a1b${_scopeId}>${ssrInterpolate(product.name)} - ${ssrInterpolate(product.weight)}</h4><span class="card-price" data-v-ffa62a1b${_scopeId}>${ssrInterpolate(product.price_sum)} \u0441\u0443\u043C</span>`);
              } else {
                return [
                  createVNode("h4", { class: "card-title" }, toDisplayString(product.name) + " - " + toDisplayString(product.weight), 1),
                  createVNode("span", { class: "card-price" }, toDisplayString(product.price_sum) + " \u0441\u0443\u043C", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div data-v-ffa62a1b>`);
          if (product.type_id) {
            _push(`<div data-v-ffa62a1b>`);
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
            _push(`<div data-v-ffa62a1b>`);
            if (product.inCart) {
              _push(`<div class="btn-dis" data-v-ffa62a1b>\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435</div>`);
            } else {
              _push(`<button class="btn btn-success w-100 btn-more" data-v-ffa62a1b><span data-v-ffa62a1b>\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u044C</span> `);
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
          item: _ctx.page_size_c,
          total: _ctx.total_c,
          onPageChanged: $options.loadProducts
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<div class="row gx-3" data-v-ffa62a1b><div class="container" data-v-ffa62a1b><h5 style="${ssrRenderStyle({ "font-weight": "normal" })}" data-v-ffa62a1b>${ssrInterpolate($data.not_product)}</h5></div></div>`);
    }
    _push(`</div>`);
  }
  _push(`</div></section></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[[id]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __id__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ffa62a1b"]]);

export { __id__ as default };
//# sourceMappingURL=_id_.7d09a4df.mjs.map
