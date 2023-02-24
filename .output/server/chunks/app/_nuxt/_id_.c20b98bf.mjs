import { b as mapStores, P as ProductStore, F as FilterStore, m as mapState, f as useRoute, c as mapActions, u as useFetch, a as _export_sfc, p as __nuxt_component_0$1 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
      const { data } = await useFetch(`${this.baseUrl}/api/product/${this.getId}`, { initialCache: false }, "$4WkmUpB7bD");
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = resolveComponent("Title");
  const _component_Meta = resolveComponent("Meta");
  const _component_b_icon_cart3 = resolveComponent("b-icon-cart3");
  const _component_PopProducts = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "detail-product" }, _attrs))} data-v-d16cbb39>`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Jalyuzi - ${ssrInterpolate($data.product.name)}`);
      } else {
        return [
          createTextVNode("Jalyuzi - " + toDisplayString($data.product.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "keywords",
    content: "\u0446\u0435\u043D\u044B \u043D\u0430 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: "\u0446\u0435\u043D\u044B \u043D\u0430 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435"
  }, null, _parent));
  _push(`<div class="container" data-v-d16cbb39><div class="row desk" data-v-d16cbb39><div class="col-md-3 col-5" data-v-d16cbb39><div class="card-left card" data-v-d16cbb39><div class="card-img" data-v-d16cbb39><a${ssrRenderAttr("href", $data.product.image)} data-fancybox data-v-d16cbb39><img${ssrRenderAttr("src", $data.product.image)}${ssrRenderAttr("alt", $data.product.name)} class="img-product img-fluid" alt="" data-v-d16cbb39></a></div></div></div><div class="col-md-5 col-7" data-v-d16cbb39><div class="product-detail" data-v-d16cbb39><h4 class="product-title" data-v-d16cbb39>${ssrInterpolate($data.product.name)} ${ssrInterpolate(_ctx.getMyCatalog.name)} ${ssrInterpolate(_ctx.getMyColors.name)}</h4><table class="table table-hover table-bordered mt-3" data-v-d16cbb39><tbody data-v-d16cbb39><tr data-v-d16cbb39><td data-v-d16cbb39>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyCategory.name)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyCatalog.name)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0426\u0432\u0435\u0442</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyColors.name)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0428\u0438\u0440\u0438\u043D\u0430</td><td data-v-d16cbb39>${ssrInterpolate($data.product.weight)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435</td><td data-v-d16cbb39>${ssrInterpolate($data.product.blackout)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyProperty.name)}</td></tr></tbody></table></div></div><div class="col-md-4 col-12" data-v-d16cbb39><div class="card" data-v-d16cbb39><div class="card-body" data-v-d16cbb39><h4 class="product-price-title" data-v-d16cbb39>\u0426\u0435\u043D\u0430 ${ssrInterpolate($data.showPrice)} \u0441\u0443\u043C \u0437\u0430 1m <sup data-v-d16cbb39>2</sup></h4><ul class="product-dt" data-v-d16cbb39><li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u0428\u0438\u0440\u0438\u043D\u0430 *\u0441\u043C</span> <input type="text"${ssrRenderAttr("value", $data.width)} class="form-control form-control-sm" data-v-d16cbb39></li><li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u0412\u044B\u0441\u043E\u0442\u0430 *\u0441\u043C</span> <input type="text"${ssrRenderAttr("value", $data.height)} class="form-control form-control-sm" data-v-d16cbb39></li>`);
  if ($data.product.type_id) {
    _push(`<li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u0426\u0432\u0435\u0442\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F</span><input type="text"${ssrRenderAttr("value", $data.typeProduct)} class="form-control form-control-sm" data-v-d16cbb39></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p class="text-danger" style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-d16cbb39>${ssrInterpolate($data.errorType)}</p><li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u041F\u043B\u043E\u0449\u0430\u0434\u044C: </span> <span style="${ssrRenderStyle({ "font-size": "17px" })}" data-v-d16cbb39>${ssrInterpolate($data.square)} \u043A\u0432.\u043C.</span></li></ul><div class="d-flex mt-3" data-v-d16cbb39><span style="${ssrRenderStyle({ "font-size": "17px" })}" data-v-d16cbb39>\u041E\u0431\u0449.\u0446\u0435\u043D\u0430: </span><h4 class="product-price ps-3" data-v-d16cbb39>${ssrInterpolate($data.overall_price)} \u0441\u0443\u043C </h4></div><div data-v-d16cbb39>`);
  if ($data.inCart) {
    _push(`<button class="btn btn-success w-100 mt-3" disabled data-v-d16cbb39> \u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 </button>`);
  } else {
    _push(`<button class="btn btn-success w-100 mt-3" data-v-d16cbb39>`);
    _push(ssrRenderComponent(_component_b_icon_cart3, {
      class: "cart3-icon pb-1",
      style: { "font-size": "20px" }
    }, null, _parent));
    _push(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>`);
  }
  _push(`</div></div></div></div></div><div class="mb-detail row" data-v-d16cbb39><div class="col-md-3 col-5" data-v-d16cbb39><div class="card-left card" data-v-d16cbb39><div class="card-img" data-v-d16cbb39><img${ssrRenderAttr("src", $data.product.image)}${ssrRenderAttr("alt", $data.product.name)} class="img-product img-fluid" alt="" data-v-d16cbb39></div><h4 class="product-title pt-4 ps-2" style="${ssrRenderStyle({ "font-size": "18px" })}" data-v-d16cbb39>${ssrInterpolate($data.product.name)} ${ssrInterpolate(_ctx.getMyCatalog.name)} ${ssrInterpolate(_ctx.getMyColors.name)}</h4></div></div><div class="col-md-4 col-7" data-v-d16cbb39><div class="card" data-v-d16cbb39><div class="card-body" data-v-d16cbb39><h4 class="product-price-title pt-0 pb-0" data-v-d16cbb39>\u0426\u0435\u043D\u0430 ${ssrInterpolate($data.showPrice)} \u0441\u0443\u043C \u0437\u0430 1m <sup data-v-d16cbb39>2</sup></h4><ul class="product-dt" data-v-d16cbb39><li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u0428\u0438\u0440\u0438\u043D\u0430</span> <input type="text"${ssrRenderAttr("value", $data.width)} class="form-control form-control-sm" data-v-d16cbb39></li><li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u0412\u044B\u0441\u043E\u0442\u0430</span> <input type="text"${ssrRenderAttr("value", $data.height)} class="form-control form-control-sm" data-v-d16cbb39></li>`);
  if ($data.product.type_id) {
    _push(`<li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u0426\u0432\u0435\u0442\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F</span> <input type="text"${ssrRenderAttr("value", $data.typeProduct)} class="form-control form-control-sm" required data-v-d16cbb39></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p class="text-danger" style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-d16cbb39>${ssrInterpolate($data.errorType)}</p><li class="product-dt-item" data-v-d16cbb39><span data-v-d16cbb39>\u041F\u043B\u043E\u0449\u0430\u0434\u044C: </span> <span style="${ssrRenderStyle({ "font-size": "17px" })}" data-v-d16cbb39>${ssrInterpolate($data.square)} \u043A\u0432.\u043C.</span></li></ul><div class="d-flex mt-3" data-v-d16cbb39><span style="${ssrRenderStyle({ "font-size": "17px" })}" data-v-d16cbb39>\u041E\u0431\u0449.\u0446\u0435\u043D\u0430: </span><h4 class="product-price ps-3" data-v-d16cbb39>${ssrInterpolate($data.overall_price)} \u0441\u0443\u043C </h4></div><div data-v-d16cbb39>`);
  if ($data.inCart) {
    _push(`<button class="btn btn-success w-100 mt-3" disabled data-v-d16cbb39> \u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 </button>`);
  } else {
    _push(`<button class="btn btn-success w-100 mt-3" data-v-d16cbb39>`);
    _push(ssrRenderComponent(_component_b_icon_cart3, {
      class: "cart3-icon pb-1",
      style: { "font-size": "20px" }
    }, null, _parent));
    _push(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>`);
  }
  _push(`</div></div></div></div><div class="col-md-5 col-12" data-v-d16cbb39><div class="product-detail" data-v-d16cbb39><table class="table table-hover table-bordered mt-3" data-v-d16cbb39><tbody data-v-d16cbb39><tr data-v-d16cbb39><td data-v-d16cbb39>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyCategory.name)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyCatalog.name)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0426\u0432\u0435\u0442</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyColors.name)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0428\u0438\u0440\u0438\u043D\u0430</td><td data-v-d16cbb39>${ssrInterpolate($data.product.weight)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435</td><td data-v-d16cbb39>${ssrInterpolate($data.product.blackout)}</td></tr><tr data-v-d16cbb39><td data-v-d16cbb39>\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E</td><td data-v-d16cbb39>${ssrInterpolate(_ctx.getMyProperty.name)}</td></tr></tbody></table></div></div></div><div class="recommend-products" data-v-d16cbb39><h4 class="recommend-title" data-v-d16cbb39>\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435</h4>`);
  _push(ssrRenderComponent(_component_PopProducts, {
    category_id: $data.product.category
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[[id]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __id__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d16cbb39"]]);

export { __id__ as default };
//# sourceMappingURL=_id_.c20b98bf.mjs.map
