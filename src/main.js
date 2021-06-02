import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/styles/index.css";
import router from "./router";
import store from "./store";
import VueClipboard from "vue-clipboard2";

Vue.config.productionTip = false;
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
