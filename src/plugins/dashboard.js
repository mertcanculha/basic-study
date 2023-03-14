import Notify from "vue-notifyjs";
import "es6-promise/auto";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/sass/paper-dashboard.scss";

export default {
  install(Vue) {
    Vue.use(Notify);
  }
}