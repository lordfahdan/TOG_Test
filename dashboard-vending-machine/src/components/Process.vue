<script>
import { mapState } from 'pinia'
import { useCartStore } from '../stores/Cart'

export default {
  data: () => ({
    loading: 100,
    time: 0,
    t: null
  }),
  computed: {
    ...mapState(useCartStore, ['cartTotalPrice', 'cartMergeQuantity'])
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    countdown() {
      this.time = 60
      if (this.t) {
        clearInterval(this.t)
      }
      this.t = setInterval(() => {
        this.loading = (this.time / 60) * 100
        this.time--
        if (this.time < 1) {
          clearInterval(this.t)
        }
      }, 1000)
    },
  },
  filters: {
    formatRupiah: function (value) {
      if (!value) return ''
      let string = '' + value
      return `Rp ${string.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")}`
    }
  },
  mounted() {
    this.countdown()
  }
}
</script>

<template>
  <div class="fixed">
    <div class="container-cart">
      <div class="header">
        <h3>Pembayaran QR Code</h3>
        <i class="fa-solid fa-xmark" @click="toggle()"></i>
      </div>
      <div class="content">
        <div class="info">
          <h2>
            <i class="fa-solid fa-circle-check"></i>
            Pembayaran diterima
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat ipsum libero vel officia
            praesentium.</p>
        </div>

        <div>
          <div class="card" v-for="item in cartMergeQuantity" :key="item.name">
            <img :src="item.images" :alt="item.name">
            <div class="detail">
              <h3>{{ item.name }} - {{ item.liter }}</h3>
              <h3>{{ item.quantity }}<i class="fa-solid fa-xmark"></i></h3>
            </div>
            <div class="process">
              <span>{{ 0 }}/{{ item.quantity }}</span>
              Proses
            </div>
          </div>
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
  height: 100%;
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
  background: #ffffff;
}

.info {
  max-width: 300px;
  margin: 40px auto 40px;
}

.info h2 {
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info h2 i {
  font-size: 20px;
  margin-right: 8px;
  color: rgb(60, 154, 60);
}

h3 i {
  font-size: 10px;
}

.info p {
  font-size: 12px;
  text-align: center;
}

.card {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.card img {
  width: 100px;
  flex-shrink: 0;
}

.card .detail {
  width: 100%;
}

.process {
  color: #1d1dfd;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.process span {
  margin-right: 10px;
}
</style>