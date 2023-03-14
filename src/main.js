import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from "./store"
import PaperDashboard from "./plugins/dashboard.js";
import { BootstrapVue } from 'bootstrap-vue'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
Vue.use(PaperDashboard);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
