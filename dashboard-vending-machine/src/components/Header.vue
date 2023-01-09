<script>
import { Icon } from '@iconify/vue2';

export default {
  data: () => ({
    steps: [
      {
        icons: 'game-icons:vending-machine',
        title: 'Touch Vending',
        desc: 'Lil Lorem ipsum dolor sit amet.'
      },
      {
        icons: 'fluent:drink-beer-16-filled',
        title: 'Choose Drink',
        desc: 'Lorem pol ipsum dolor sit amet.'
      },
      {
        icons: 'material-symbols:account-balance-wallet',
        title: 'Pay with e-Wallet',
        desc: 'Lorem ipsum hare dolor sit amet.'
      },
      {
        icons: 'fa6-solid:person-chalkboard',
        title: 'Wait for you drink',
        desc: 'Lorem ipsum dolor sit amet dir.'
      },
    ]
  }),
  components: {
    Icon
  }
}
</script>

<template>
  <header>
    <h1>Cara pakai Mesin Vending</h1>
    <div class="steps">
      <div class="item" v-for="step in steps" :key="step.icons">
        <Icon :icon="step.icons" />
        <h2>{{ step.title }}</h2>
        <p>{{ step.desc }}</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 12px 48px;
  background: #ededfe
}
h1 {
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;
}
.steps {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 12px;
}
.item {
  display: flex;
  flex-direction: column;
}
.item svg {
  font-size: 30px;
  margin-bottom: 4px;
}
.item h2 {
  font-size: 10px;
  margin-bottom: 0;
}
.item p {
  font-size: 10px;
  font-weight: lighter;
}
</style>