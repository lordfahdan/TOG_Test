<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: 32% 32% 32%;
  gap: 12px;
  padding: 24px 12px;
}
</style>