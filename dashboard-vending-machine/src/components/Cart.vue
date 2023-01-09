<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '@/stores/Cart';
import CartItem from '@/components/CartItem.vue';
import pocari from '@/assets/images/pocari.png';
import CartList from '@/components/CartList.vue';

export default {
  data: () => ({
    img: pocari
  }),
  computed: {
    ...mapState(useCartStore, ['cart', 'cartMergeQuantity', 'cartTotalPrice']),
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    toggleWallet() {
      this.$emit('toggleWallet')
    },
    ...mapActions(useCartStore, ['addCart', 'removeCart', 'removeAllCart'])
  },
  filters: {
    formatRupiah: function (value) {
      if(!value) return ''
      let string = '' + value
      return `Rp ${string.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")}`
    }
  },
  components: { CartItem, CartList }
}
</script>

<template>
  <div class="fixed">
    <div class="container-cart">
      <div class="header">
        <h3>Keranjang</h3>
        <i class="fa-solid fa-xmark" @click="toggle()"></i>
      </div>
      <div class="content">
        <div class="head-info">
          <div class="price"> 
            <span>Total Harga</span>
            <h3>{{ cartTotalPrice | formatRupiah }}</h3>
          </div>
          <div class="button-group">
            <button class="outline" @click="removeAllCart()">Kosongkan Keranjang</button>
            <button class="fill" @click="toggleWallet()">Beli Sekarang</button>
          </div>
        </div>
        <CartList>
          <div v-for="product in cartMergeQuantity" :key="product.name">
            <CartItem :image="product.images" :name="product.name" :liter="product.liter" :price="product.price" :quantity="product.quantity" @increment="addCart(product)" @decrement="removeCart(product)" />
          </div>
        </CartList>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 600px;
  margin: auto;
  z-index: 2;
}
.container-cart {
  background: rgb(241, 241, 241);
  height: 85%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  background: #ffffff;
  border-bottom: 1px solid rgb(222, 222, 222);
}
.header h3 {
  font-size: 16px;
  font-weight: 600;
}
.header i {
  font-size: 20px;
  cursor: pointer;
}

.content {
  padding: 16px 32px;
  height: 100%;
  overflow: auto;
}
.head-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.price {
  display: flex;
  align-items: baseline;
}
.price span {
  font-size: 10px;
  margin-right: 8px;
}
.price h3 {
  font-weight: 600;
  color: #1d1dfd;
  font-size: 20px;
}
.button-group {
  display: flex;
  align-items: center;
}
.button-group button {
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 120px;
  border: none;
  cursor: pointer;
}
.button-group .fill {
  background: #1d1dfd;
  color: #ffffff;
}
.button-group .outline {
  background: #ffffff;
  border: 1.8px solid #1d1dfd;
  color: #1d1dfd;
  margin-right: 12px;
}
</style>