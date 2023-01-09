<script>
import { mapState } from 'pinia';
import { useCartStore } from '../stores/Cart';

export default {
  computed: {
    ...mapState(useCartStore, ['cart'])
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
  }
}
</script>

<template>
  <div class="top-shop">
    <h2>Our Drink Product</h2>
    <button class="cart" @click.prevent="toggle()">
      <i class="fa-solid fa-cart-shopping"></i>
      Keranjang
      <span class="circle-notification" v-if="cart.length > 0">{{ cart.length }}</span>
    </button>
  </div>
</template>

<style scoped>
.top-shop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin: 24px 0 18px;
}
h2 {
  font-size: 16px;
}
button.cart {
  background: #1d1dfd;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
}
span.circle-notification {
  width: 20px;
  height: 20px;
  line-height: 17px;
  border: 1.5px solid #1d1dfd;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  z-index: 1;
  background: #ffffff;
  color: #1d1dfd;
  top: -8px;
  right: -8px;
}
</style>