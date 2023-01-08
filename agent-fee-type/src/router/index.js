import Vue from "vue";
import VueRouter from "vue-router";
import FeeType from "@/views/FeeType/index.vue";
import All from "@/views/FeeType/All.vue";
import Create from "@/views/FeeType/Create.vue";
import Detail from "@/views/FeeType/Detail.vue";
import Edit from "@/views/FeeType/Edit.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/fee-type",
      component: FeeType,
      children: [
        {
          path: '/',
          name: "fee-type",
          component: All
        },
        {
          path: "create-fee-type",
          component: Create,
        },
        {
          path: ":id/edit-fee-type",
          component: Edit,
        },
        {
          path: ':id',
          component: Detail
        }
      ],
    },
  ],
});

export default router;
