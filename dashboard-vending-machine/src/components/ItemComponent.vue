<script>
import { mapActions } from 'pinia'
import { useCartStore } from '../stores/Cart'

export default {
  props: {
    image: {
      type: String
    },
    name: {
      type: String
    },
    liter: {
      type: String
    },
    price: {
      type: Number
    },
  },
  filters: {
    formatRupiah: function (value) {
      if(!value) return ''
      let string = '' + value
      return `Rp ${string.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")}`
    }
  },
  methods: {
    addToCart() {
      this.$emit('addCart')
    },
    ...mapActions(useCartStore, ['getItemNotif'])
  }
}
</script>

<template>
  <div class="card-item">
    <div class="item-info">
      <img :src="image" :alt="`${name} picture`">
      <p class="text-clamp">{{ name }}</p>
      <p>{{ liter }}</p>
      <span class="circle-notification" v-if="getItemNotif({image, name, liter, price}) > 0">{{ getItemNotif({image, name, liter, price}) }}</span>
    </div>
    <div class="price-info">
      <span>{{ price | formatRupiah }}</span>
      <button class="add-cart" @click="addToCart()">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  border: 1px solid #ededfe;
  border-radius: 8px;
}
.item-info {
  padding: 8px 4px;
  position: relative;
}
.item-info img {
  object-fit: contain;
  object-position: center;
  height: 100px;
  pointer-events: none;
}
.item-info p {
  text-align: center;
  font-size: 12px;
  font-weight: normal;
  margin: 0;
}
.text-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.price-info {
  overflow: hidden;
  display: flex;
  align-items: stretch;
  border-radius: 0 0 8px 8px;
}
.price-info span {
  background: #eeeeeec4;
  padding: 12px 8px;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
}
.price-info button {
  flex-shrink: 0;
  padding: 12px;
  background: #1d1dfd;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
}
.price-info button i {
  font-size: 18px;
}
span.circle-notification {
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  font-size: 12px;
  position: absolute;
  text-align: center;
  z-index: 1;
  background: #1d1dfd;
  color: #ffffff;
  top: -8px;
  right: -8px;
}
</style>