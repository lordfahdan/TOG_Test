<script>
import { mapState } from 'pinia';
import { useCartStore } from '../stores/Cart';

export default {
  computed: {
    ...mapState(useCartStore, ['cartTotalPrice', 'cartTotalQuantity'])
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    togglePay() {
      this.$emit('togglePay')
    }
  },
  filters: {
    formatRupiah: function (value) {
      if(!value) return ''
      let string = '' + value
      return `Rp ${string.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")}`
    }
  },
}
</script>

<template>
  <div class="fixed">
    <div class="container-cart">
      <div class="header">
        <h3>Pilih e-Wallet</h3>
        <i class="fa-solid fa-xmark" @click="toggle()"></i>
      </div>
      <div class="content">
        <h3>Product</h3>
        <div class="card">
          <div>
            <h3>Quantity</h3>
            <h3>{{ `${cartTotalQuantity}` }}<i class="fa-solid fa-xmark"></i></h3>
          </div>
          <div>
            <h3>Jumlah Bayar</h3>
            <h3 class="active">{{ cartTotalPrice | formatRupiah }}</h3>
          </div>
        </div>

        <hr />

        <h3>Pilih wallet pembayaran</h3>
        <div class="card-payment">
          <button @click="togglePay()"><img src="@/assets/images/shopee.png" alt=""></button>
          <button @click="togglePay()"><img src="@/assets/images/ovo.png" alt=""></button>
          <button @click="togglePay()"><img src="@/assets/images/linkaja.png" alt=""></button>
          <button @click="togglePay()"><img src="@/assets/images/gopay.png" alt=""></button>
        </div>
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
  overflow: hidden;
}

.container-cart {
  background: rgb(241, 241, 241);
  height: 85%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  animation: show 0.4s ease-out forwards;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  background: #ffffff;
  border-bottom: 1px solid rgb(222, 222, 222);
}

h3 {
  font-size: 16px;
  font-weight: 600;
}

.header i {
  font-size: 20px;
  cursor: pointer;
}

.content {
  padding: 16px 32px;
  height: calc(100% - 47px);
  overflow: auto;
}
.content h3 {
  margin-bottom: 12px;
}

.card {
  padding: 12px;
  border-radius: 8px;
  background: #ffffff;
}
.card h3 {
  margin: 0;
}
.card h3.active {
  color: #1d1dfd;
}
.card h3 {
  margin: 0;
}
.card h3 i {
  font-size: 10px;
  margin-left: 2px;
}
.card > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.card > div:last-of-type {
  margin-bottom: 0;
}
hr {
  border: none;
  border-bottom: 1px solid rgb(210, 210, 210);
  margin: 24px 0;
}
.card-payment {
  background-color:  rgb(241, 241, 241);
}
.card-payment button {
  display: block;
  border: none;
  border-radius: 4px;
  height: 75px;
  width: 100%;
  margin: 20px 0;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px #bdbbbb;
  cursor: pointer;
}
.card-payment button img {
  height: 90%;
  width: auto;
}
@keyframes show {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>