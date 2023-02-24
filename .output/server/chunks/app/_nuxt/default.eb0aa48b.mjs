import { b as mapStores, P as ProductStore, A as AccountStore, m as mapState, c as mapActions, d as useCookie, a as _export_sfc, F as FilterStore, e as __nuxt_component_0$5 } from '../server.mjs';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$7 = {
  props: ["isLogined", "showMenu", "first_name"],
  data() {
    return {};
  },
  methods: {
    toggleStoreModal() {
      this.$emit("updateshowmenu", false);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$5;
  const _component_b_icon_search = resolveComponent("b-icon-search");
  const _component_b_icon_person = resolveComponent("b-icon-person");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "mb-nav" }, _attrs))}><div class="nav-m-links">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "index" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
      } else {
        return [
          createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "about" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041E \u043D\u0430\u0441`);
      } else {
        return [
          createTextVNode("\u041E \u043D\u0430\u0441")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "portfolio" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041A\u043E\u043D\u0442\u0430\u043A\u0442`);
      } else {
        return [
          createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "search" },
    class: "nav-link search-i"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_icon_search, {
          class: "bag-icon me-3",
          style: { "margin-bottom": "4px" }
        }, null, _parent2, _scopeId));
        _push2(`<span style="${ssrRenderStyle({ "font-size": "16px" })}"${_scopeId}>Search</span>`);
      } else {
        return [
          createVNode(_component_b_icon_search, {
            class: "bag-icon me-3",
            style: { "margin-bottom": "4px" }
          }),
          createVNode("span", { style: { "font-size": "16px" } }, "Search")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="account-i">`);
  if ($props.isLogined == false) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "",
      onClick: $options.toggleStoreModal,
      role: "button",
      class: "nav-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_b_icon_person, { class: "bottom-icon" }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_b_icon_person, { class: "bottom-icon" })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.isLogined) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: { name: "myprofile" },
      role: "button",
      class: "nav-link account-true"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_b_icon_person, { class: "bottom-icon" }, null, _parent2, _scopeId));
          _push2(`<span class="firstName"${_scopeId}>${ssrInterpolate($props.first_name)}</span>`);
        } else {
          return [
            createVNode(_component_b_icon_person, { class: "bottom-icon" }),
            createVNode("span", { class: "firstName" }, toDisplayString($props.first_name), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div> ${ssrInterpolate(_ctx.countOfCart)}</div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileNav.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0$1 = "" + globalThis.__buildAssetsURL("logo.a58c913a.jpg");
const _sfc_main$6 = {
  data() {
    return {
      store: "",
      sticky: false,
      showMenu: false
    };
  },
  computed: {
    ...mapStores(AccountStore, ProductStore),
    ...mapState(AccountStore, ["firstName", "lastName", "isLogined", "getFirstName"]),
    ...mapState(ProductStore, ["countOfCart"])
  },
  created() {
    this.store = AccountStore();
  },
  destroyed() {
    window.removeEventListener("scroll", this.fixedToTop);
  },
  mounted() {
    this.setCartItem();
    window.addEventListener("scroll", this.fixedToTop);
  },
  watch: {
    "$route"() {
      this.showMenu = false;
    }
  },
  methods: {
    ...mapActions(ProductStore, ["setCartItem"]),
    toggleStoreModal() {
      this.store.regToggleModal();
    },
    fixedToTop(event) {
      let sticky = this.$el.querySelector(".top-nav");
      if (sticky) {
        if (window.pageYOffset > sticky.offsetTop) {
          this.sticky = true;
        } else {
          this.sticky = false;
        }
      }
    },
    changeShowMenu(value) {
      this.store.regToggleModal();
      this.showMenu = value;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$5;
  const _component_b_icon_telephone = resolveComponent("b-icon-telephone");
  const _component_b_icon_envelope = resolveComponent("b-icon-envelope");
  const _component_b_icon_geo_alt = resolveComponent("b-icon-geo-alt");
  const _component_b_icon_list = resolveComponent("b-icon-list");
  const _component_b_icon_bag = resolveComponent("b-icon-bag");
  const _component_b_icon_search = resolveComponent("b-icon-search");
  const _component_b_icon_person = resolveComponent("b-icon-person");
  const _component_mobile_nav = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))}><nav class="nav"><div class="${ssrRenderClass([{ "sticky": $data.sticky }, "top-nav"])}"><div class="container"><div class="row"><div class="col-lg-9 col-md-8 col-sm-8">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "tel:99894-994-00-00",
    class: "phone_numb top-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_icon_telephone, { class: "top-icon" }, null, _parent2, _scopeId));
        _push2(` +998 94-994-00-00 `);
      } else {
        return [
          createVNode(_component_b_icon_telephone, { class: "top-icon" }),
          createTextVNode(" +998 94-994-00-00 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "mailto:jalyuzi@mail.com",
    class: "email top-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_icon_envelope, { class: "top-icon" }, null, _parent2, _scopeId));
        _push2(` jalyuzi@mail.com `);
      } else {
        return [
          createVNode(_component_b_icon_envelope, { class: "top-icon" }),
          createTextVNode(" jalyuzi@mail.com ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-3 col-md-4 col-sm-4">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "phone_numb top-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_icon_geo_alt, { class: "top-icon" }, null, _parent2, _scopeId));
        _push2(` Store Location `);
      } else {
        return [
          createVNode(_component_b_icon_geo_alt, { class: "top-icon" }),
          createTextVNode(" Store Location ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "top-link email"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` FAQ `);
      } else {
        return [
          createTextVNode(" FAQ ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="main-nav"><div class="container"><div class="row"><div class="col-lg-3 col-md-3 col-flex d-flex"><a>`);
  _push(ssrRenderComponent(_component_b_icon_list, { class: "bi-list" }, null, _parent));
  _push(`</a><div class="logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "index" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} width="150" alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            width: "150",
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="d-flex">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "cart" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_icon_bag, { class: "bag-icon-m" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_icon_bag, { class: "bag-icon-m" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-5 col-md-6 nav-items"><div class="nav-links">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "index" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
      } else {
        return [
          createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "about" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041E \u043D\u0430\u0441`);
      } else {
        return [
          createTextVNode("\u041E \u043D\u0430\u0441")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "portfolio" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041A\u043E\u043D\u0442\u0430\u043A\u0442`);
      } else {
        return [
          createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-4 col-md-3"><div class="nav-side-i">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "search" },
    class: "nav-link search-i"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_icon_search, {
          class: "bag-icon",
          style: { "margin-bottom": "4px" }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_icon_search, {
            class: "bag-icon",
            style: { "margin-bottom": "4px" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="account-i">`);
  if (_ctx.isLogined == false) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "",
      onClick: $options.toggleStoreModal,
      role: "button",
      class: "nav-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_b_icon_person, { class: "bottom-icon" }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_b_icon_person, { class: "bottom-icon" })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isLogined) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: { name: "myprofile" },
      role: "button",
      class: "nav-link account-true"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_b_icon_person, { class: "bottom-icon" }, null, _parent2, _scopeId));
          _push2(`<span class="firstName"${_scopeId}>${ssrInterpolate(_ctx.firstName)}</span>`);
        } else {
          return [
            createVNode(_component_b_icon_person, { class: "bottom-icon" }),
            createVNode("span", { class: "firstName" }, toDisplayString(_ctx.firstName), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "cart" },
    class: "nav-link bag-ic"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_icon_bag, { class: "bag-icon" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_icon_bag, { class: "bag-icon" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` ${ssrInterpolate(_ctx.countOfCart)}</div></div></div></div></div></nav>`);
  if ($data.showMenu) {
    _push(ssrRenderComponent(_component_mobile_nav, {
      first_name: _ctx.firstName,
      onUpdateshowmenu: $options.changeShowMenu,
      showMenu: $data.showMenu,
      isLogined: _ctx.isLogined
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  data() {
    return {
      firstName: "",
      lastName: "",
      phone_number: "",
      password: "",
      firstConfirm: false,
      response: {
        errors: [],
        data: [],
        statusCode: ""
      },
      store: ""
    };
  },
  computed: {
    ...mapStores(AccountStore),
    ...mapState(AccountStore, ["getRegStatus", "loginStatus", "regStatus", "csrfToken", "baseUrl"]),
    ...mapActions(AccountStore, ["regToggleModal", "loginToggleModal"])
  },
  created() {
    this.store = AccountStore();
  },
  methods: {
    ToVerification() {
      this.store.$patch({ verifStatus: true, regStatus: false });
    },
    RegToLogin() {
      this.store.$patch({ loginStatus: true, regStatus: false });
    },
    formIsValid() {
      let phone_number = this.phone_number.toString();
      let password = this.password.toString();
      if (phone_number.length < 8 || phone_number.length > 11) {
        this.$refs.phone_error.innerHTML = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043D\u0443\u044E \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430";
        return false;
      } else if (password.length < 6) {
        this.$refs.phone_error.innerHTML = "";
        this.$refs.password_error.innerHTML = "\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432";
        return false;
      } else if (this.password == this.firstName || this.password == this.lastName) {
        this.$refs.password_error.innerHTML = "\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C";
        return false;
      }
      this.$refs.password_error.innerHTML = "";
      return true;
    },
    submitRegister(event) {
      const isValid = this.formIsValid();
      if (isValid) {
        let body = {
          first_name: this.firstName,
          last_name: this.lastName,
          phone_number: this.phone_number,
          password: this.password
        };
        this.postRegister(body);
        this.store.$patch({ password: this.password });
      }
    },
    postRegister(body) {
      fetch(`${this.$config.baseUrl}/api/users/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "x-csrftoken": this.csrfToken
        },
        body: JSON.stringify(body)
      }).then((response) => {
        this.statusCode = response.status;
        return response.json();
      }).then((data) => {
        if (this.statusCode == 400) {
          this.response.errors.push(data.Error);
        } else {
          this.response.errors = [];
          this.store.$patch({ firstConfirm: data.firstConfirm, phone_number: data.username, userToken: data.token, isLogined: true });
          this.ToVerification();
          this.store.getMe();
          this.store.getAdresses();
        }
      });
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "register" }, _attrs))} data-v-2834368f><section class="ftco-section modal-wrapper" id="reg" style="${ssrRenderStyle(_ctx.getRegStatus ? null : { display: "none" })}" data-v-2834368f><div class="container" data-v-2834368f><div class="row justify-content-center" data-v-2834368f><div class="col-md-7 col-lg-5" data-v-2834368f><div class="login-wrap p-4 p-md-5" data-v-2834368f><a role="button" class="close" aria-label="close this modal" data-v-2834368f><svg viewBox="0 0 24 24" data-v-2834368f><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" data-v-2834368f></path></svg></a><h3 class="text-center mb-4" data-v-2834368f>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</h3><ul class="" data-v-2834368f><!--[-->`);
  ssrRenderList($data.response.errors, (error, index) => {
    _push(`<li class="error" data-v-2834368f>${ssrInterpolate(error)}</li>`);
  });
  _push(`<!--]--></ul><ul data-v-2834368f><!--[-->`);
  ssrRenderList($data.response.data, (data, index) => {
    _push(`<li class="success" data-v-2834368f>${ssrInterpolate(data)}</li>`);
  });
  _push(`<!--]--></ul><form action="#" class="login-form" data-v-2834368f><div class="form-group" data-v-2834368f><input type="text" class="form-control rounded-left"${ssrRenderAttr("value", $data.firstName)} placeholder="\u0418\u043C\u044F" required data-v-2834368f></div><div class="form-group d-flex" data-v-2834368f><input type="text" class="form-control rounded-left"${ssrRenderAttr("value", $data.lastName)} placeholder="\u0424\u0430\u043C\u0438\u043B\u0438\u043B\u044F" required data-v-2834368f></div><div class="form-group d-flex" data-v-2834368f><input type="number" class="form-control rounded-left"${ssrRenderAttr("value", $data.phone_number)} placeholder="909174227" required data-v-2834368f></div><span style="${ssrRenderStyle({ "color": "#000", "font-size": "10px" })}" class="phoneError error" data-v-2834368f></span><div class="form-group d-flex" data-v-2834368f><input type="password" class="form-control rounded-left" autocomplete="on"${ssrRenderAttr("value", $data.password)} placeholder="\u041F\u0430\u0440\u043E\u043B" required data-v-2834368f></div><h2 style="${ssrRenderStyle({ "color": "#000", "font-size": "10px" })}" class="passwordError error" data-v-2834368f></h2><div class="form-group" data-v-2834368f><button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3" data-v-2834368f>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</button></div><div class="form-group d-md-flex" data-v-2834368f><span class="reg-to-log" data-v-2834368f>\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?</span><div class="text-md-right" data-v-2834368f><a href="#" data-v-2834368f>\u0412\u043E\u0439\u0442\u0438</a></div></div></form></div></div></div></div></section></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Register.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-2834368f"]]);
const _sfc_main$4 = {
  data() {
    return {
      modalStatus: false,
      store: "",
      phone_number: "",
      password: "",
      response: {
        errors: [],
        data: [],
        statusCode: ""
      }
    };
  },
  computed: {
    ...mapStores(AccountStore),
    ...mapState(AccountStore, ["getLoginStatus", "csrfToken", "resetStatus", "baseUrl"]),
    ...mapActions(AccountStore, ["loginToggleModal"])
  },
  created() {
    this.store = AccountStore();
  },
  methods: {
    LogToReg() {
      this.store.$patch({ loginStatus: false, regStatus: true });
    },
    closeLogin() {
      this.store.$patch({ loginStatus: false });
    },
    LogtoReset() {
      this.store.$patch({ loginStatus: false, resetStatus: true });
    },
    formIsValid() {
      let phone_number = this.phone_number.toString();
      if (phone_number.length < 8 || phone_number.length > 11) {
        this.$refs.phone_error.innerHTML = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043D\u0443\u044E \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430";
        return false;
      }
      this.$refs.password_error.innerHTML = "";
      return true;
    },
    submitLogin() {
      const isValid = this.formIsValid();
      if (isValid) {
        let body = {
          phone_number: this.phone_number,
          password: this.password
        };
        this.postLogin(body);
      }
    },
    postLogin(body) {
      let csrf_token = useCookie("csrftoken").value;
      fetch(`${this.$config.baseUrl}/api/users/login/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "x-csrftoken": csrf_token
        },
        body: JSON.stringify(body)
      }).then((response) => {
        this.statusCode = response.status;
        return response.json();
      }).then((data) => {
        if (this.statusCode == 400) {
          this.$refs.password_error.innerHTML = data.detail;
        } else if (this.statusCode == 200) {
          let store = AccountStore();
          let user_token = useCookie("user_token");
          user_token.value = data.token;
          this.$refs.password_error.innerHTML = "";
          this.$refs.phone_error.innerHTML = "";
          store.getMe();
          store.getAdresses();
          this.closeLogin();
        }
      });
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "login" }, _attrs))} data-v-418937be><section class="ftco-section modal-wrapper" id="login" style="${ssrRenderStyle(_ctx.getLoginStatus ? null : { display: "none" })}" data-v-418937be><div class="container" data-v-418937be><div class="row justify-content-center" data-v-418937be><div class="col-md-7 col-lg-5" data-v-418937be><div class="login-wrap p-4 p-md-5" data-v-418937be><a role="button" class="close" aria-label="close this modal" data-v-418937be><svg viewBox="0 0 24 24" data-v-418937be><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" data-v-418937be></path></svg></a><h3 class="text-center mb-4" data-v-418937be>\u0412\u043E\u0439\u0442\u0438</h3><form action="#" class="login-form" data-v-418937be><div class="form-group d-flex" data-v-418937be><input type="text" class="form-control rounded-left" placeholder="\u0422\u0435\u043B \u041D\u043E\u043C\u0435\u0440"${ssrRenderAttr("value", $data.phone_number)} required data-v-418937be></div><span style="${ssrRenderStyle({ "color": "#000", "font-size": "10px" })}" class="phoneError error" data-v-418937be></span><div class="form-group d-flex" data-v-418937be><input type="password" class="form-control rounded-left" placeholder="\u041F\u0430\u0440\u043E\u043B"${ssrRenderAttr("value", $data.password)} autocomplete="on" required data-v-418937be></div><h2 style="${ssrRenderStyle({ "color": "#000", "font-size": "10px" })}" class="passwordError error" data-v-418937be></h2><div class="form-group" data-v-418937be><button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3" data-v-418937be>\u0412\u043E\u0439\u0442\u0438</button></div><div class="" data-v-418937be><div class="pt-2 text-md-right" data-v-418937be><span class="reg-to-log" data-v-418937be>\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? </span><a href="#" data-v-418937be>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a></div><div class="pt-2 text" data-v-418937be><span class="reg-to-log" data-v-418937be>\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C? </span><a style="${ssrRenderStyle({ "cursor": "pointer" })}" class="text-primary" data-v-418937be>\u0441\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F</a></div></div></form></div></div></div></div></section></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Login.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-418937be"]]);
const _sfc_main$3 = {
  data() {
    return {
      confirmCode: "",
      phoneNumber: "",
      response: {
        errors: [],
        data: [],
        statusCode: ""
      }
    };
  },
  computed: {
    ...mapStores(AccountStore),
    ...mapState(AccountStore, ["getPhoneNumber", "getVerifStatus", "getCsrfToken", "firstConfirm", "phone_number", "password", "baseUrl"]),
    ...mapActions(AccountStore, ["verifToggleModal"])
  },
  methods: {
    CancelRegister() {
      if (this.firstConfirm == false) {
        fetch(
          `${this.$config.baseUrl}/api/users/?delete=${this.phone_number}`,
          {
            method: "GET"
          }
        ).then((response) => response.json()).then((data) => {
          const store = AccountStore();
          store.$patch({ verifStatus: false });
        });
      }
    },
    formIsValid() {
      let confirmCode = this.confirmCode.toString();
      if (confirmCode.length < 5 || confirmCode.length > 6) {
        this.$refs.password_error.innerHTML = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 5-\u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440";
        return false;
      }
      this.$refs.password_error.innerHTML = "";
      return true;
    },
    submitVerif(event) {
      const isValid = this.formIsValid();
      if (isValid) {
        let body = {
          confirm: this.confirmCode,
          phone_number: this.phone_number,
          password: this.password
        };
        this.postRegister(body);
      }
    },
    postRegister(body) {
      fetch(`${this.$config.baseUrl}/api/users/verification/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "x-csrftoken": this.getCsrfToken
        },
        body: JSON.stringify(body)
      }).then((response) => {
        this.statusCode = response.status;
        return response.json();
      }).then((data) => {
        if (this.statusCode == 400) {
          this.response.errors.push(data.Error);
        } else {
          this.response.errors = [];
          const store = AccountStore();
          store.$patch({ verifStatus: false, firstConfirm: true });
        }
      }).catch((error) => error);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "verification" }, _attrs))} data-v-2794b6cd><section class="ftco-section modal-wrapper" style="${ssrRenderStyle(_ctx.getVerifStatus ? null : { display: "none" })}" data-v-2794b6cd><div class="container" data-v-2794b6cd><div class="row justify-content-center" data-v-2794b6cd><div class="col-md-7 col-lg-5" data-v-2794b6cd><div class="login-wrap p-4 p-md-5" data-v-2794b6cd><a role="button" class="close" aria-label="close this modal" data-v-2794b6cd><svg viewBox="0 0 24 24" data-v-2794b6cd><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" data-v-2794b6cd></path></svg></a><h3 class="text-center mb-4" data-v-2794b6cd>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0421\u041C\u0421-\u043A\u043E\u0434</h3><ul class="" data-v-2794b6cd><!--[-->`);
  ssrRenderList($data.response.errors, (error, index) => {
    _push(`<li class="error" data-v-2794b6cd>${ssrInterpolate(error)}</li>`);
  });
  _push(`<!--]--></ul><ul data-v-2794b6cd><!--[-->`);
  ssrRenderList($data.response.data, (data, index) => {
    _push(`<li class="success" data-v-2794b6cd>${ssrInterpolate(data)}</li>`);
  });
  _push(`<!--]--></ul><form action="#" class="login-form" data-v-2794b6cd><div class="form-group d-flex" data-v-2794b6cd><input type="text" class="form-control rounded-left"${ssrRenderAttr("value", $data.confirmCode)} placeholder="\u041A\u043E\u0434" required data-v-2794b6cd></div><h2 style="${ssrRenderStyle({ "color": "#000", "font-size": "10px" })}" class="passwordError error" data-v-2794b6cd></h2><div class="form-group" data-v-2794b6cd><button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3" data-v-2794b6cd>\u0412\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F</button></div></form></div></div></div></div></section></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Verification.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-2794b6cd"]]);
const _sfc_main$2 = {
  data() {
    return {
      phone_number: "",
      response: {
        errors: [],
        data: "",
        statusCode: ""
      },
      confirm_code: ""
    };
  },
  computed: {
    ...mapStores(AccountStore),
    ...mapState(AccountStore, ["resetStatus", "resetConfirmStatus", "username_reset", "baseUrl"]),
    ...mapActions(AccountStore, ["resetToggleModal", "resetConfirmToggle"])
  },
  created() {
    this.store = AccountStore();
  },
  methods: {
    ...mapActions(AccountStore, ["changeResetUsername"]),
    SendToReset() {
      this.store.$patch({ resetStatus: false, resetConfirmStatus: true });
    },
    submitReset() {
      let body = {
        phone_number: this.username_reset,
        confirm_code: this.confirm_code
      };
      let csrf_token = useCookie("csrftoken").value;
      fetch(`${this.$config.baseUrl}/api/users/reset_password/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "x-csrftoken": csrf_token
        },
        body: JSON.stringify(body)
      }).then((response) => {
        this.statusCode = response.status;
        return response.json();
      }).then((data) => {
        if (this.statusCode == 400) {
          this.response.errors.push(data.detail);
        } else if (this.statusCode == 200) {
          this.response.errors = [];
          this.response.data = data.detail;
          this.confirm_code = "";
        }
      });
    },
    submitSend() {
      let body = {
        phone_number: this.phone_number
      };
      let csrf_token = useCookie("csrftoken").value;
      fetch(`${this.$config.baseUrl}/api/users/send_to_reset/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "x-csrftoken": csrf_token
        },
        body: JSON.stringify(body)
      }).then((response) => {
        this.statusCode = response.status;
        return response.json();
      }).then((data) => {
        if (this.statusCode == 400) {
          this.response.errors.push(data.Error);
        } else if (this.statusCode == 200) {
          this.response.errors = [];
          this.changeResetUsername(data.user);
          this.SendToReset();
        }
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "login" }, _attrs))} data-v-6c46da06><section class="ftco-section modal-wrapper" style="${ssrRenderStyle(_ctx.resetStatus ? null : { display: "none" })}" data-v-6c46da06><div class="container" data-v-6c46da06><div class="row justify-content-center" data-v-6c46da06><div class="col-md-7 col-lg-5" data-v-6c46da06><div class="login-wrap p-4 p-md-5" data-v-6c46da06><a role="button" class="close" aria-label="close this modal" data-v-6c46da06><svg viewBox="0 0 24 24" data-v-6c46da06><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" data-v-6c46da06></path></svg></a><h3 class="text-center mb-4" data-v-6c46da06>Send Confirmation Code</h3><form action="#" class="login-form" data-v-6c46da06><div class="form-group d-flex" data-v-6c46da06><input type="text" class="form-control rounded-left" placeholder="\u0422\u0435\u043B \u041D\u043E\u043C\u0435\u0440"${ssrRenderAttr("value", $data.phone_number)} required data-v-6c46da06></div><span style="${ssrRenderStyle({ "color": "#000", "font-size": "10px" })}" class="phoneError error" data-v-6c46da06></span><div class="form-group" data-v-6c46da06><button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3" data-v-6c46da06>send</button></div></form></div></div></div></div></section><section class="ftco-section modal-wrapper" style="${ssrRenderStyle(_ctx.resetConfirmStatus ? null : { display: "none" })}" data-v-6c46da06><div class="container" data-v-6c46da06><div class="row justify-content-center" data-v-6c46da06><div class="col-md-7 col-lg-5" data-v-6c46da06><div class="login-wrap p-4 p-md-5" data-v-6c46da06><a role="button" class="close" aria-label="close this modal" data-v-6c46da06><svg viewBox="0 0 24 24" data-v-6c46da06><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" data-v-6c46da06></path></svg></a><h3 class="text-center mb-4" data-v-6c46da06>Reset Password</h3><form action="#" class="login-form" data-v-6c46da06><div class="form-group d-flex" data-v-6c46da06><input type="text" class="form-control rounded-left" placeholder="Confirmaton code"${ssrRenderAttr("value", $data.confirm_code)} required data-v-6c46da06></div><span style="${ssrRenderStyle({ "color": "#000", "font-size": "15px" })}" class="phoneError pt-2 pb-2 error" data-v-6c46da06>${ssrInterpolate($data.response.errors[0])}</span><span style="${ssrRenderStyle({ "font-size": "15px" })}" class="text-success pt-2 pb-2" data-v-6c46da06>${ssrInterpolate($data.response.data)}</span><div class="form-group" data-v-6c46da06><button type="submit" class="form-control btn-custom btn btn-primary rounded submit px-3" data-v-6c46da06>Reset</button></div></form></div></div></div></div></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResetPassword.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-6c46da06"]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("logo.a217d876.png");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAABgBJREFUSIntlcuPXFcRh7+qc+6re9rt8YzHGb/jV8AYiGNHQnGIUbLBkWCFWDusMRL/Akt2xks27HhkgQQL85LiBAxkYZCCGD8y2J7YjpOJ52H3dPfte+85xaKHyBMyXmaVkkrn1JGuvvrVqboHPrfPyOT/j0zOnr2U9VM/E2qbRimciXigqCFvGjxQNA05kDSQ1w0F4BvIm5o0asxjPZAoS2k7XTxz8UwliD1O8Z+Enjt3MV1d3XIsNvIDU/k6xN1ieBcjEDEBjXGccoioGaJgISJiiAgioULkTmq8pb3y/NzR16/anNWPwzcoPnv2jbyo7Et9734WVA5EyASct0gSjcSMNEayEMliJAv/i+3jeLzHkmAxDzZMol33jX1vbal1/dX5V0efqrhdDXYo2Q+LaAeiSQGI90K77ZmeTMm9kGD4aKQ2XpO4nlQwtGxoFofIaiVJCM6Ztb3xTCJ8f9vU8o+Y5+6ngju1TUfXvJSYZCZIMZGw+8AWjj23nU7L4Z0gZqgZCqjx2N6gMZpezYPL9yjnlpHVkXgo1OQlzE/BJuAJYhFCvTMITr2yf99WTp3ZQ9Mfce3tuwxXSzQEvBnODG9GEsdr6h3d2QlmT+5k8ruHuffzqwyufIgbmZroXu9ca7PmkjzUiuBMjKLI+cqJKWK/5NJPr1CtjdAYSDASYewW8XXEN5F2t2Dm6S7v/2aOPd/6IjtemOWD64s0VS1mLo/B3GZgm2jKcYeKMT3ZotNS7vztJmnvIblF1CJ57unu7LJ1VxdnRvneMtWdFTqTwu5XnmY5Vqy9fZvOsVmKmYz+Sh9TI8rGyd1Q6q4MTEwwIl3fIdOIrKywJazhiLSf6rLv5aNMHdmB9UsEw71yiP7cfR79+Rrv//i32NKAfN8M7quzuMxQaTBAeQK40wxxaiCRDkMSGtqxT6CHzxP2vnyY7q42a5f/wWD+Ps6MzsFZus8eIX/xIA9/8RcY1LjZDkJEXUClxoBoTwBPyyOLJgiBDl1Sq+lYH6c9Wjtn2X5kmrXL/6R84wqurHBmVAu3yKyi8+Jxwp4JRvMfolohElBpcNIQx42zOXiSHsEEJdCyPik1HdbI9RETew7hBj38zWt0q0VUDDWBkaL/eReeO0K2byth4S5OakQiTmqcVkgUYsLm4E7TQxRUalImSajYQo/ICilrJNRM0COyCqJEdZg5REYfg7yOxmDiWLFWGIhnQ1Ojjwe5L8m1b7n0yaTES0MuAwp7SHLvBq6dkRzcQ1pEEh2MvYikh3ehrQzu3cbZENWx4nGpa5zWeMrNFXuG4w+0wskIkYB3I/BDWLqF3Po37sRxzAW4+S5miu1/Bnn2y8Qbc+j923hApBor1gaVGodi3jYHJ0kJ0VAd4aVENUIBtCO4IVz5HZz6JnL6G3DiJGICRQu7dg0u/QlXroJk4MJYgNU4qTEc0YJsCvbUmAacq1CGQIAdU/CRB28w+gD++iu4sRum90JjsLCALNxBV4c4Tce3t62NxAZphmPVoXnyHEOJU0OzAOUDqNbg+dPw0TvQrI1fBamgdxseLsAIGDTgGjQ3KGsouuip52lW+sjSIioNIg32pHHyWYxgFbmkMBDm/w6nvwPfPgc3L0O5AmZjb4DKYGRQGowEzSaRk6exokX8/ZtI/xFKYk5CY2pxc8V5HGByl0z3kwTHyjy882v4wtfg6Aug60NgQATCegLN+jpqkEfLhD/+AebvIiGgolE13Alig83BEpdI/VvkPEVGC9aEB/+CuQXYth3yFBAI62qHcewDg7UAqyV2ZxGWRzBKUApDQqmEN0OwB5uDJ9qLUJ4n0eNkcphMcrKgyEOh6oGu31MF9OMY1ovwaN0fRqQf0OBNRSMSS5X4btDm/IB08XHUhh8IFy5WTE1fpZDXyNwvSblFIhWpQCEwodBRaAnk64+yl3H6bt0VEKsEu6WE18Wq12aK5auHLl6oNhSXT5iB8JMzKXWYoeOn6EiLraJMJNBZL1LZwArQq2GlgR7QWz9baWiGGq3JB40lS0W1d5GLFyoZd8bn9tnbfwHsbv7N3QR7tQAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAABQdJREFUSInllk9sXNUVxn/n/fF4PG7GcUqMIXFKiBRkVFVRVaUsqnbdSHQRFt2w6iLdhAViidSo6Q5aJGDRrLpgF7AEi3rXTRcVqE0LEoljiCgxprFxnLFjz4zH777zsXjj+Z+UdsuVnp7e09X93e+c75574Ns27L/OkOyH10ia12uzgWROprko56jDdxyQ+w7SVyEPKyGNb89m02vXLhDA9H+Dj139ojy9f+RIwE7Lw3l3PytsRvIpycouIXlTri1J6zgfyFjIY1u2ncbm6ovHm/8z+NSiSulm42nDL7g4L+mwpEgCSRy83dX+FgKXe02uBSdcqfhj12+9YK1R60cjqZIld3fPgb/h2PMPg0I3onJFkh0W9jyevHE/v3MOaaS4oZ+nFlVK7zV/jvKXwU67e6UXNggtFNNV3Z1Xd/dlTL87ZLOLg8r7wMeuqjyZNebN/XWwHzwIisRYDCerEU9WY6ZKhiHqmfjnWsZntcBeEJLqcn0k08Vx+VJvzpPe8E79qfndfMwvCDsj9/IoqCQmU/jRTMKvvj/OE9WYyTHDDHb3xZv/qPPl/UAzE5IqgjPu/LpBdBm0euD2To7n376R5qk/JddzcpUeFF5DnKzGvPzMBGcfS5mdjCgnRhpBKYYkKtLuXsx3qSTXc3kIT3HpRjqkuLX76Eya6BeSVSV/oJGqY8ZPHk+YOxQTG+SCT+8FljYD9X3nk3sZreADhqNqUfTsdLm6dA9W+8BJlM5J/PhhUHcxmRpPHymgAJ/VAq/9vc61tX2yXOy0nGYYOGYikvszOckcg2CIvifPZ8VwTiW1bQCJQXW8ewo/reV8vJGxej9vb5AB6MFaPOpkTwB/6wNLPiOojoJ2wcU76jkLtT0/cHDfvB5gETUxhTMzlGOhiqTyqIpkwEQChlFJIe0pO2MRTKZwaMxwGY19J0P4oDldZcwrQ2B3p73hoYo0kcDbz1aZLhtjsTE51pV87tQ4PztRIvfiHP/2r9v85d977LS6qt0L6d5zbfQo9rqImnJVBiuSYRwpG49MxEWYe0JdTo1yYgjYaTkb9ZwsH4AiHJom1YfA5LYutCWpcmCkg1DnDl81nCAYj42JtHigKBqNzMlyuN9ybm8H9vN+n7SVbUmsD4FDzucWa03S44MGaeXiyocNyrHxyETEL+fLnKjGACxtZCzealLby2nsi416TsiHjenSmgd9Pgz25kpspfeBM8Wh7+56L4OFm3u4i9PTMT+dG+uAb25mLCw1WNkOfeHtQAVepPf91FkJbV7Hn1MbW+tG/p5c2ypMObKIdC6Kjjn6z+ugMQuob8vtvWba6oS6A77xm/ks5OGmi3cktR54BfYsShsxZCTvPkItnHdC7je5NJ8NgTFT1PK7CtkVl38oUR9RfVA/F9RvRPV9U5f0LyL9kUbpbm8f1teBrL54vFmx2Y/d7RV3X5Y0AFd/mNuKfcScAurLEq9m01zntf7+K2Fg3HrBWkjvHn39Dsp5SXBGUDowHG1V/ZIPikTHSC2hj+T6fX751LvYcMc5uucy0yGbXZTposNbctW6hhuIdI/ZiuvXa0hvmeliftT+PAo6UnGv8mN/+GKpkdhlF1fJ/byks2aaiSMOuygDJFHUALbcfV3oAylaCJEvsz2+yaXjIzvMh4KhyDnoS66wPr37n08yDyfKaTSXBZ8NuU8CuPtuKU3uuLKVNHC7OXdyjW/Q0H/7xtdkIcfimmpGNAAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAABYFJREFUSIntlk2MHFcVhb9X1T3d7fa422PHY8d/ceLEToIAy0ixQQJFQiASKYmUELEgErtkY5As2JkFQuwSWHiDt4QFyDIoAiyWSEiOAzIWErEzwsg/MzEzxvb0eH56uqveOSyqe6Z7ZhIUtlBSqUpPr+p7977zzr3wv3aF/zjDDkcvUWJ2dlcO+0Jkn/AOi1EASfPR3FHmWzFJbzb3jE1fOkpOCP6vwccvTNYWO9u2pVn3kINetnjGeNzRTTvULGOrLdFCnonivWCfU1KeWI5L96Ze3dv+xOCD511pVOaetnnd9su2t0pObLAMBskU8P47sjVrhXM58Ux5y9L71557vLPR/5MNqXbYUm49L3za+LU+FAMbQPsLsZ1YbLX9Wsg5nd2tPo+9YXDrBg+ed2VLpfUc5pThkOW6BmE90CBUG455EfNB7OpH1cXl89e+PRz5EPj4hclatz36pPBpzGcs1/s/5iMBg2PGYuUpedHyXyPJibSlq1MnV/d8NdV2mJ/ftN3wBuZIH7oS4RrocPQiWJQLWrGgYm7d5kjI8zdU6WwfTPsK+KmzV8qlND1s+xWLinrRDKV5AIrBEiVMDbE1ZDxZj2ymS+jPLe6KzSuk5cNP/eBKuc8rraygsXMc6UUTGpI+Xki9KEdixqebKc/urvDs3u2MVlJ+8uc7/OZWZC4P/fmJRAPCC9O7G1eBqSFwKYR9xsfcU+9GQlIUVcRDI+JzYylf2T/G/tERxqopm8sJXZnlTEPf9rKTSD6OtG8dGPMIZpd7kQ5CE4lmyTwyGvjs2AhHtlU42CyTAg86OaVNKeU0sBzN1IOcTh4KkQ1pJOxMxAHgwhDY8rihUaQSgkUtmMYIjJfFl3ZW+OLDm9hVL1NKAtMLXd69PU+jkrJ7dAQDmczkfE4WS4Wqh4XZtDS+bo9l6pZrRZpF3RnHxlK+trfGM+ObaFZL2GYxE5emF/jllfsc2VHlyweaNKolcpnZdkarY7IIZjhiyTXj+nqw1Hcf1O3yrUNVXnp0C9urJUpJIAlwrdXh7ESLi7eX+PoTDV58okm9XByMLJpbrQ4iXfnPmn0u7rVgm0VM26LupMS5G8tcvdfl2HiVRxtlbsx1+dU/FpDhG4cbfPVAg3o5JemdzE4UN1pdIqFI8RqoTRt5cR0YMWNo2dQhMLWccrcj/nJ/iXpiFjJzvx15YX+FL+zZzFht9VOAbjTXW11yBdYaT0+sLQdm1oFjrhshCdOSd2MQgcWYsJAPnmEx+SDn9nzO5nJKs1paiXg5N1MPMuIGbtdL/bRjuL7iG/2XvJvfUvRFG60aRt97KVQaSrx7R3zvDzOcvXKP++2cLBaAdiY+nM+JsfCAFdcrXFSSLuZ5e3IduJK2ZizekTRX1FXWGj6WyUm52S7x1uUFvvP7m/zpwwWWsshcJ3J9LifvC6nvekaW5hzDO+08WUn1anWyw2O/uL2HJP2+5W9arq2FDheL4pw/XI08vTXl7lLOH/9ZLExiMN1tpJ9HdX/YPvWpKShaotXqFII7qe6S64zsyzKLw1CG3EwOLOSBvz8I/PZGxsUZkzkZmkdRky/LyU/bm5p3+9BhMDD16t522LrrbxZvIk/06unAfvehq+KJTlhWibZK2GEIKjERo95cGuV9Tg73Xxv3XHbY87Opl4h810VtrhRVZr1iB8cQyJZNB+tyzMNb7VOP/3qjjnPjnisEV+eWz8csnpB42/KshNgAOiwky9KsrLeleKLdCL/7qDb3Y9vbPT+erHk0bCPGQ5l67a0Zd3RTpoaNpbZNy2JG9nsOPieSiXb5X/c4+flP3t6uXg5Hz1C6nt/embK830r3yd6h6FEkUJgX3HHMb+V5erP90GPTvE4+KKT/XwD/BpbYGNqERxUlAAAAAElFTkSuQmCC";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAz9JREFUSIntlT1sm1UUhp/33s9OE5vEhJ+SkqpKiCjKQquEDvyzdkBiICpCYmGoxAxsSBlAYkNioR1AgqGITAz8VGSgVAJUhIJS0UyoKVVKUlQldbDz43w+h8E0wXbstJQJ8q733vc559xz7oVd/del27dwMX4mcuTpyFVEDmOGlHFZ3R7k/y74pGfoqQzFpDpM1fKChTTjP/Fc/hqSgYsvyPIDG38PpgFc25SUy4+nlXSKFwtLLYHjHhgt9oRy8rLgeeBeIAFfA83ifCjzeYs8GuBsekf+HEe1fuN4Umf2Iwm/lAZdeiPEzCn7uPwZx7rmUX2ZABie6wilwgtIx3E/gMhs5aJ9LhsgalFwMQ3xG0pLe4BNcKgzmyeDwgBwWLLXg6ov8UlxkJO/deG+VZ0Jj8TeAugV4fu3oJuV6xIaAgaRkmB+mIzqqluf8SoOtgoypEHBa5F4RN13vpueKk4z4WsskbJGllx4SKT7QR0trwOymLmF5FMKhVJr8AzrPJifUSzPu5MDFYCjHqpPRYVz7iufW3f1POIqFrtR++Z0+NVMbzK0Z55Rpa3BnAkwUrWYnFDVXsW5H9EBZFF4UvihoFBErGHeAepsBwYqdIRFRqg2LtSDe/sj2eQBmY3WAt6UgByQk+jbAXZDJvd1ks5igxfQ2Fz3DTkWV4BngD7Cbc35OtIcz1LabirqwWOqQHYW12lgGW+O9Ba06M73245iE7im1aqFt4AvgcV/ztWliM62Wm0Gj8lYvnAF4yukr0Glbc7tpBXh3250VC7ePBic46MbSEu49dPU+TtLzgzE00wXlm8FDEDVmXIPkw5zQBHYYJvubAjZgN9dei9d2zhf/0M1BNfWaOKPe6LxBIFjuB4D9gKxJVQsO7xvCu8w1nWlnXXLjGu6XqomYdbNL1Ob49b7xTUXH1hX7m3oXGjv23h/Hy3kMtneg6bKQRf9gkNuPiyFfUCebSukEu4XCJwwwiSrLDGmppeqPfjuvalWKutufpfgEUfDcvr+ggbAqN11Gek67pccvgvyyRT7mbH8TY9fcwbjHhgin0nKAyaNCH/Y3Q8Q1AOAadHls1KciiFMVzLZy61ep13t6v+lPwHJCUHVcB1idAAAAABJRU5ErkJggg==";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))}><div class="container"><div class="row mobile-footer" style="${ssrRenderStyle({ "justify-content": "space-between" })}"><div class="col-6"><div class="logo"><img${ssrRenderAttr("src", _imports_0)} width="100" alt=""></div></div><div class="col-6" style="${ssrRenderStyle({ "text-align": "right" })}"><div class="footer_info">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "https://www.instagram.com/Jalyuzi.uz/",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://www.facebook.com/Jalyuzi.uz/",
    target: "_blank",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://t.me/jalyuzi",
    target: "_blank",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://twitter.com/Jalyuzi",
    target: "_blank",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="row footer"><div class="col-md-3"><section class=""><div class="logo"><img${ssrRenderAttr("src", _imports_0)} width="200" alt=""></div></section></div><div class="col-md-2"><div class="footer_info"><h4>Information</h4><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "index" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "about" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Portfolio`);
      } else {
        return [
          createTextVNode("Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-md-2"><section class=""><div class="footer_info"><h4>Contact</h4><p>Beruniy, Huvaydo m. 100169 Tashkent, Uzbekistan </p></div></section></div><div class="col-md-2"><div class="footer_info"><h4>Phone</h4><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "tel:90-994-00-00",
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+998 90-994-00-00`);
      } else {
        return [
          createTextVNode("+998 90-994-00-00")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "tel:91-994-00-00",
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+998 91-994-00-00`);
      } else {
        return [
          createTextVNode("+998 91-994-00-00")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "tel:94-994-00-00",
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+998 94-994-00-00`);
      } else {
        return [
          createTextVNode("+998 94-994-00-00")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-md-3"><div class="footer_info ms-5">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: "https://www.instagram.com/Jalyuzi.uz/",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://www.facebook.com/Jalyuzi.uz/",
    target: "_blank",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://t.me/jalyuzi",
    target: "_blank",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "https://twitter.com/Jalyuzi",
    target: "_blank",
    class: "icon-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="row mt-4 ps-2 mobile-footer"><div class="col-4"><section class=""><div class="footer_info"><h4>Contact</h4><p>Beruniy, Huvaydo m. 100169 Tashkent, Uzbekistan </p></div></section></div><div class="col-4"><div class="footer_info"><h4>Phone</h4><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "tel:90-994-00-00",
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+998 90-994-00-00`);
      } else {
        return [
          createTextVNode("+998 90-994-00-00")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "tel:91-994-00-00",
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+998 91-994-00-00`);
      } else {
        return [
          createTextVNode("+998 91-994-00-00")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "tel:94-994-00-00",
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+998 94-994-00-00`);
      } else {
        return [
          createTextVNode("+998 94-994-00-00")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-4"><section class="left-side"><div class="footer_info me-4"><h4>Information</h4><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "index" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "about" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "contact" },
    class: "footer_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Portfolio`);
      } else {
        return [
          createTextVNode("Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></section></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  created() {
    let store = AccountStore();
    let prStore = ProductStore();
    let flStore = FilterStore();
    prStore.inTheCart();
    flStore.fetchCatalogs("catalog");
    flStore.fetchColors();
    prStore.fetchProducts(1);
    flStore.fetchProperties();
    flStore.fetchCategories();
    flStore.fetchSubCategories();
    prStore.getAllProducts();
    store.getMe();
    store.setCsrfToken();
    store.getAdresses();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_Register = __nuxt_component_1;
  const _component_Login = __nuxt_component_2;
  const _component_Verification = __nuxt_component_3;
  const _component_ResetPassword = __nuxt_component_4;
  const _component_Footer = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Register, null, null, _parent));
  _push(ssrRenderComponent(_component_Login, null, null, _parent));
  _push(ssrRenderComponent(_component_Verification, null, null, _parent));
  _push(ssrRenderComponent(_component_ResetPassword, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.eb0aa48b.mjs.map
