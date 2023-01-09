<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueSlickCarousel from 'vue-slick-carousel'
import Header from '@/components/Header.vue';
import ItemComponent from "./components/ItemComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import Cart from "./components/Cart.vue";
import TopComponent from "./components/TopComponent.vue";
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '@/stores/Cart.js';
import PaymentComponent from "./components/PaymentComponent.vue";
import PaymentProgress from "./components/PaymentProgress.vue";
import Process from "./components/Process.vue";

export default {
  data: () => ({
    settings: {
      "infinite": false,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "speed": 500,
      "dots": true,
    },
    showCart: false,
    showEWallet: false,
    showProgress: false,
    showProcess: false,
  }),
  computed: {
    ...mapState(useCartStore, ['list', 'groupList'])
  },
  components: {
    VueSlickCarousel,
    Header,
    ItemComponent,
    ListComponent,
    TopComponent,
    Cart,
    PaymentComponent,
    PaymentProgress,
    Process
},
  methods: {
    ...mapActions(useCartStore, ['addCart'])
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <TopComponent @toggle="showCart = !showCart" />
    <VueSlickCarousel v-bind="settings">
      <div v-for="group, index in groupList" :key="index">
        <ListComponent>
          <div v-for="item in group" :key="item.name">
            <ItemComponent :image="item.images" :liter="item.liter" :name="item.name" :price="item.price" @addCart="addCart(item)" />
          </div>
        </ListComponent>
      </div>
    </VueSlickCarousel>

    <Cart v-if="showCart" @toggle="showCart = !showCart" @toggleWallet="showEWallet = !showEWallet" />
    <PaymentComponent v-if="showEWallet" @toggle="showEWallet = !showEWallet" @togglePay="showProgress = !showProgress" />
    <PaymentProgress v-if="showProgress" @toggle="showProgress = !showProgress" />
    <Process v-if="showProcess" @toggle="showProcess = !showProcess" />
  </div>
</template>

<style>
@import url("@/assets/lib/fontawesome-free/css/all.min.css");
@import url('@/assets/css/base.css');
@import url('@/assets/css/custom-slick-carousel.css');
</style>