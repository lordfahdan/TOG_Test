<script>
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
    quantity: {
      type: Number
    }
  },
  filters: {
    formatRupiah: function (value) {
      if(!value) return ''
      let string = '' + value
      return `Rp ${string.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1.")}`
    }
  },
  methods: {
    increment() {
      this.$emit('increment')
    },
    decrement() {
      this.$emit('decrement')
    }
  }
}
</script>

<template>
  <div class="container-item">
    <div class="item">
      <div class="card">
        <img :src="image" :alt="name">
        <p>{{ name }}</p>
        <p>{{ liter }}</p>
        <p>{{ price | formatRupiah }}</p>
      </div>
      <div class="item-quantity">
        <button class="btn-decrease-qty" @click="decrement()">
          <i class="fa-solid fa-minus"></i>
        </button>
        <span>{{quantity}}</span>
        <button class="btn-increase-qty" @click="increment()">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container-item {
    padding: 24px 12px;
  }
  .item {
    display: block;
  }
  .card {
    background-color: #ffffff;
    border: 1px solid #ededfe;
    border-radius: 8px;
    padding: 8px;
  }
  .card img {
    object-fit: contain;
    object-position: center;
    height: 130px;
    pointer-events: none;
  }
  .card p {
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    margin: 0;
  }
  .card span {
    background: #eeeeeec4;
    padding: 12px 8px;
    width: 100%;
    font-size: 12px;
    font-weight: 500;
  }
  .item-quantity {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 24px;
  }
  .item-quantity button {
    background-color: #1d1dfd;
    color: #ffffff;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 24px;
    cursor: pointer;
  }
</style>