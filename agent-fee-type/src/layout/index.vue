<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";

export default {
  components: {
    "navbar-component": Navbar,
    "header-component": Header,
  },
};
</script>

<template>
  <main class="layout">
    <navbar-component />
    <section class="content">
      <header-component />
      <div class="content-detail">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>