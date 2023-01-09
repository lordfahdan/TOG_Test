import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";

Vue.use(PiniaVuePlugin);

Vue.filter("t", function (value) {
  if (!value) return "";
  let string = "" + value;
  return `Rp ${string.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")}`;
});

new Vue({
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
