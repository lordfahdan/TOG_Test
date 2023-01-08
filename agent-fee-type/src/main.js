import Vue from "vue";
import { createPinia, PiniaVuePlugin  } from 'pinia'
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "jszip";
import "pdfmake";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-rowreorder-bs5";
import "datatables.net-rowreorder-bs5/css/rowReorder.bootstrap5.min.css";
import "datatables.net-rowreorder-bs5/js/rowReorder.bootstrap5.min.js";
import "datatables.net-select-bs5";
import "datatables.net-select-bs5/css/select.bootstrap5.min.css";
import "datatables.net-select-bs5/js/select.bootstrap5.min.js";


Vue.use(PiniaVuePlugin )
Vue.prototype.$vue = Vue
const pinia = createPinia()

new Vue({
  router,
  render: (h) => h(App),
  pinia,
}).$mount("#app");
