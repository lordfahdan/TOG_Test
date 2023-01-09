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
    ...mapState(useCartStore, ['cartTotalPrice'])
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    countdown() {
      this.time = 60
      if(this.t) {
        clearInterval(this.t)
      }
      this.t = setInterval(() => {
        this.loading = (this.time / 60) * 100
        this.time--
        if(this.time < 1) {
          clearInterval(this.t)
        }
      }, 1000)
    },
  },
  filters: {
    formatRupiah: function (value) {
      if(!value) return ''
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
        <div class="countdown">
          <div class="proggress-bar">
            <div class="inner" :style="`width: ${loading}%`"></div>
          </div>
          <span>
            {{ time }}
            <i class="fa-solid fa-stopwatch"></i>
          </span>
        </div>
        <div class="qr">
          <img src="@/assets/images/gopay.png" alt="">
          <img src="@/assets/images/dcd-gopay-qrcode.png" alt="">
          <h3>{{ cartTotalPrice | formatRupiah }}</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, eligendi?</p>
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

.countdown {
  width: 100%;
  padding: 20px 12px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}


.proggress-bar {
  position: relative;
  border-radius: 10px;
  height: 10px;
  background: #dbdee9;
  width: 100%;
}
.proggress-bar .inner{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  background: #1d1dfd;
}
.countdown span {
  text-align: right;
  width: 50px;
  margin-left: 10px;
  flex-shrink: 0;
}
.countdown span i {
  margin-left: 4px;
}

.qr {
  width: 100%;
  padding: 20px 12px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr img {
  width: 30%;
}
.qr h3 {
  margin-top: 24px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 32px;
}
p {
  max-width: 250px;
  font-size: 12px;
  margin: auto;
  text-align: center;
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