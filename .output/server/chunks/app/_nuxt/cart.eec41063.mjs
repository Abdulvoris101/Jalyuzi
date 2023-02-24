import { m as mapState, P as ProductStore, b as mapStores, A as AccountStore, c as mapActions, d as useCookie, a as _export_sfc, e as __nuxt_component_0$5 } from '../server.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Title = resolveComponent("Title");
  const _component_Meta = resolveComponent("Meta");
  const _component_nuxt_link = __nuxt_component_0$5;
  const _component_b_icon_pencil = resolveComponent("b-icon-pencil");
  const _component_b_icon_check = resolveComponent("b-icon-check");
  const _component_b_icon_dash = resolveComponent("b-icon-dash");
  const _component_b_icon_plus = resolveComponent("b-icon-plus");
  const _component_b_icon_x = resolveComponent("b-icon-x");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "cart-page" }, _attrs))} data-v-c845c49d>`);
  _push(ssrRenderComponent(_component_Title, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Jalyuzi - \u041A\u043E\u0440\u0437\u0438\u043D\u043A\u0430 `);
      } else {
        return [
          createTextVNode("Jalyuzi - \u041A\u043E\u0440\u0437\u0438\u043D\u043A\u0430 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Meta, {
    name: "description",
    content: "\u0446\u0435\u043D\u044B \u043D\u0430 \u0436\u0430\u043B\u044E\u0437\u0438 \u0432 \u0442\u0430\u0448\u043A\u0435\u043D\u0442\u0435"
  }, null, _parent));
  _push(`<div class="container" data-v-c845c49d>`);
  if ($data.product_ordered) {
    _push(`<div class="product-ordered" data-v-c845c49d><h3 class="order-title" data-v-c845c49d>\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442!</h3><span class="order-content" data-v-c845c49d> \u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 `);
    _push(ssrRenderComponent(_component_nuxt_link, { to: { name: "contact" } }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`\u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438`);
        } else {
          return [
            createTextVNode("\u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`. </span><span class="order-content" style="${ssrRenderStyle({ "display": "block" })}" data-v-c845c49d> \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432 \u043D\u0430\u0448\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435! </span></div>`);
  } else {
    _push(`<div class="row" data-v-c845c49d><div class="col-md-8" data-v-c845c49d><article class="card" data-v-c845c49d><div class="card-body" data-v-c845c49d><h4 class="cart-l-title mb-4" data-v-c845c49d> \u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 ${ssrInterpolate(_ctx.countOfCart)} \u0442\u043E\u0432\u0430\u0440\u0430 </h4><!--[-->`);
    ssrRenderList(_ctx.cart_products, (product) => {
      _push(`<div class="card-item mb-3" data-v-c845c49d><div class="row gx-0" data-v-c845c49d><div class="col-md-2 col-2" data-v-c845c49d><img${ssrRenderAttr("src", _ctx.baseUrl + product.image)} class="img-cart" width="115"${ssrRenderAttr("alt", product.name)} data-v-c845c49d></div><div class="col-md-3 col-3" data-v-c845c49d><h3 class="cart-product-title" data-v-c845c49d>${ssrInterpolate(product.name)} - ${ssrInterpolate(product.weight)}</h3>`);
      if ($options.caniEdit(product.id)) {
        _push(`<div data-v-c845c49d><h4 class="cart-product-comp" data-v-c845c49d>\u0420\u0430\u0437\u043C\u0435\u0440\u044B: ${ssrInterpolate(product.current_width)} x ${ssrInterpolate(product.current_height)} `);
        _push(ssrRenderComponent(_component_b_icon_pencil, {
          onClick: ($event) => $options.editSquare(product.id),
          class: "pencil-icon pb-1",
          style: { "font-size": "18px", "cursor": "pointer" }
        }, null, _parent));
        _push(`</h4></div>`);
      } else {
        _push(`<div data-v-c845c49d><h4 class="cart-product-comp" data-v-c845c49d>\u0420\u0430\u0437\u043C\u0435\u0440\u044B: `);
        _push(ssrRenderComponent(_component_b_icon_check, {
          onClick: ($event) => $options.submitEdit(product.id),
          class: "check-icon pb-1",
          style: { "font-size": "24px", "cursor": "pointer" }
        }, null, _parent));
        _push(`</h4><div class="d-flex" data-v-c845c49d><input type="number" style="${ssrRenderStyle({ "width": "45%" })}" placeholder="W" class="me-2 form-control"${ssrRenderAttr("value", $data.editWidth)} data-v-c845c49d><span class="pt-1 pe-2" data-v-c845c49d>x</span><input type="number" style="${ssrRenderStyle({ "width": "45%" })}" placeholder="H" class="form-control"${ssrRenderAttr("value", $data.editHeight)} data-v-c845c49d></div></div>`);
      }
      _push(`</div><div class="col-md-3 col-3" data-v-c845c49d><div class="input-group mb-3" data-v-c845c49d><button class="input-group-text btn btn-light toggle-btn" id="basic-addon1" data-v-c845c49d>`);
      _push(ssrRenderComponent(_component_b_icon_dash, { class: "dash-icon" }, null, _parent));
      _push(`</button><input type="text" class="form-control inp-count"${ssrRenderAttr("value", product.current_count)} aria-label="Username" aria-describedby="basic-addon1" readonly data-v-c845c49d><button class="input-group-text btn btn-light toggle-btn" id="basic-addon1" data-v-c845c49d>`);
      _push(ssrRenderComponent(_component_b_icon_plus, { class: "plus-icon" }, null, _parent));
      _push(`</button></div></div><div class="col-md-3 col-2 ps-3" data-v-c845c49d><h4 class="cart-item-price" data-v-c845c49d>${ssrInterpolate(product.current_price)} \u0441\u0443\u043C</h4></div><div class="col-md-1 col-1" data-v-c845c49d><button class="btn x-icon-btn pb-2" data-v-c845c49d>`);
      _push(ssrRenderComponent(_component_b_icon_x, {
        class: "x-icon",
        style: { "font-size": "20px" }
      }, null, _parent));
      _push(`</button></div></div><hr data-v-c845c49d></div>`);
    });
    _push(`<!--]--></div></article></div><div class="col-md-4" data-v-c845c49d><div class="card card-r" data-v-c845c49d><div class="card-body" data-v-c845c49d><h4 class="product-price-title" data-v-c845c49d>\u0418\u0442\u043E\u0433\u043E: ${ssrInterpolate($data.allOverPrice)} \u0441\u0443\u043C </h4><hr data-v-c845c49d><ul class="product-dt" data-v-c845c49d><li class="product-dt-item" data-v-c845c49d><span data-v-c845c49d>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:</span> ${ssrInterpolate($data.allOverPrice)} \u0441\u0443\u043C </li><li class="product-dt-item" data-v-c845c49d><span data-v-c845c49d>\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:</span> \u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 </li><li class="product-dt-item" data-v-c845c49d><span data-v-c845c49d>\u0422\u0438\u043F \u0437\u0430\u043A\u0430\u0437\u0430:</span> \u041F\u0440\u043E\u0434\u0443\u043A\u0442 </li></ul>`);
    if (_ctx.isLogined) {
      _push(`<div data-v-c845c49d>`);
      if (_ctx.addresses) {
        _push(`<button class="btn btn-success w-100 mt-3" data-v-c845c49d>\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0417\u0430\u043A\u0430\u0437</button>`);
      } else {
        _push(`<div data-v-c845c49d><button class="btn btn-success w-100 mt-3" disabled data-v-c845c49d>\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0417\u0430\u043A\u0430\u0437</button><span class="error-authenticate text-danger" data-v-c845c49d>*\u0427\u0442\u043E\u0431\u044B \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0430</span></div>`);
      }
      _push(`</div>`);
    } else {
      _push(`<div data-v-c845c49d><button class="btn btn-success w-100 mt-3" disabled data-v-c845c49d>\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0417\u0430\u043A\u0430\u0437</button><span class="text-danger" data-v-c845c49d>*\u0427\u0442\u043E\u0431\u044B \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0432\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443</span></div>`);
    }
    _push(`</div></div><article class="card mt-3" id="address" data-v-c845c49d><div class="card-body" data-v-c845c49d><div class="top-address" data-v-c845c49d><h4 class="cart-a-title pt-1" data-v-c845c49d> \u0410\u0434\u0440\u0435\u0441\u044B </h4>`);
    if (_ctx.addresses == false) {
      _push(`<div data-v-c845c49d>`);
      if ($data.addAdress == false) {
        _push(`<button class="btn btn-outline-danger" data-v-c845c49d>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0434\u0440\u0435\u0441 + </button>`);
      } else {
        _push(`<button class="btn btn-outline-success" data-v-c845c49d>\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if ($data.addAdress) {
      _push(`<div class="body-address mt-3" data-v-c845c49d><div class="form-group" data-v-c845c49d><input type="text" class="form-control" placeholder="\u0413\u043E\u0440\u043E\u0434" required${ssrRenderAttr("value", $data.city)} data-v-c845c49d><input type="text" class="form-control" placeholder="\u0420\u0430\u0439\u043E\u043D" required${ssrRenderAttr("value", $data.state)} data-v-c845c49d></div><input type="text" class="form-control mt-3" placeholder="\u0423\u043B\u0438\u0446\u0430 \u0438 \u041C\u0430\u0445\u0430\u043B\u043B\u0430"${ssrRenderAttr("value", $data.fulladdress)} required data-v-c845c49d></div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.addresses) {
      _push(`<div data-v-c845c49d><table class="table" data-v-c845c49d><thead data-v-c845c49d><tr data-v-c845c49d><th scope="col" data-v-c845c49d>#</th><th scope="col" data-v-c845c49d>City</th><th scope="col" data-v-c845c49d>State</th></tr></thead><tbody data-v-c845c49d><tr data-v-c845c49d><th scope="row" data-v-c845c49d>1</th><td data-v-c845c49d>${ssrInterpolate(_ctx.addresses[0].city)}</td><td data-v-c845c49d>${ssrInterpolate(_ctx.addresses[0].state)}</td></tr></tbody></table></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></article></div></div>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c845c49d"]]);

export { cart as default };
//# sourceMappingURL=cart.eec41063.mjs.map
