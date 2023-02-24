import { b as mapStores, A as AccountStore, m as mapState, d as useCookie, a as _export_sfc } from '../server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "my-profile" }, _attrs))}><div class="container"><div class="row myprofile"><div class="col-sm-4"><div class="list-group list-profile"><a style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([$options.myclass(), "list-group-item list-group-item-action"])}"> \u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C </a><a style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([$options.updateclass(), "list-group-item list-group-item-action"])}">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C</a><a style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([$options.logoutclass(), "list-group-item list-group-item-action"])}">\u0412\u044B\u0439\u0442\u0438</a></div></div><div class="col-sm-8">`);
  if ($data.status == "MyProfile") {
    _push(`<div class="card"><div class="card-body"><h4 class="myprofile-title">\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h4><table class="table"><thead><tr><td>\u0418\u043C\u044F</td><td>\u0424\u0430\u043C\u0438\u043B\u0438\u044F</td><td>\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440</td></tr></thead><tbody><tr><td>${ssrInterpolate(_ctx.firstName)}</td><td>${ssrInterpolate(_ctx.lastName)}</td><td>${ssrInterpolate(_ctx.phone_number)}</td></tr></tbody></table></div></div>`);
  } else if ($data.status == "UpdateProfile") {
    _push(`<div class="card"><div class="card-body"><h4 class="myprofile-title">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C</h4><form action="" class="form"><div class="card-inp"><input type="text" class="form-control" placeholder="\u0418\u043C\u044F"><input type="text" class="form-control" placeholder="\u0424\u0430\u043C\u0438\u043B\u0438\u044F"></div><div class="card-inp"><input type="text" class="form-control" placeholder="\u0422\u0435\u043B\u0435\u0444\u043E\u043D"></div><button class="btn btn-outline-danger mt-4">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button></form></div></div>`);
  } else if ($data.status == "Logout") {
    _push(`<div class="card"><div class="card-body"><h4 class="myprofile-title">\u0412\u044B\u0439\u0442\u0438</h4> ${ssrInterpolate($data.logout)} <p>${ssrInterpolate($data.sure)}</p><button class="btn btn-warning w-25">\u0414\u0430</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myprofile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myprofile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { myprofile as default };
//# sourceMappingURL=myprofile.d26c7a3f.mjs.map
