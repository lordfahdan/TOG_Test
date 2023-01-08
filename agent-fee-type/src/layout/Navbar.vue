<template>
  <aside class="sidebar">
    <nav>
      <router-link exact-active-class="active-link" to="/" class="text-nowrap"><i class="fa-solid fa-house"></i></router-link>
      <router-link active-class="active-link" to="/management" class="text-nowrap"><i class="fa-solid fa-briefcase me-2"></i></router-link>
    </nav>
    <div class="overlay">
      <nav>
        <router-link exact-active-class="active-link" to="/" class="text-nowrap">
          <i class="fa-solid fa-house me-2"></i>
          <span>Dashboard</span>
        </router-link>
        <router-link active-class="active-link" to="/management" class="text-nowrap">
          <i class="fa-solid fa-briefcase me-2"></i>
          <span>Master Data Management</span>
        </router-link>
      </nav>
      <ul class="nested-route">
        <li><router-link exact-active-class="active-child-link" to="/management">Standard Mark-Up</router-link></li>
        <li><router-link active-class="active-child-link" to="/fee-type">Fee Type</router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "navbar-component",
};
</script>