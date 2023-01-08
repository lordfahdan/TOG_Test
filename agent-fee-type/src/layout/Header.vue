<script>
import Logo from '../components/Logo.vue';

export default {
  name: "header-component",
  data: () => ({
    show: false,
  }),
  methods: {
    toggleToastProfile(){
      this.show = !this.show
    },
  },
  components: { Logo }
}
</script>

<template>
  <header class="header">
    <Logo />
    <div class="profile-info">
      <i class="fa-solid fa-circle-question"></i>
      <div class="notification">
        <i class="fa-regular fa-bell"></i>
        <span class="warn"></span>
      </div>
      <figure class="profile" @click="toggleToastProfile()">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.41hTOXfyC5OAC9_We48NfgAAAA%26pid%3DApi&f=1&ipt=a0a4b4fb28723342d868ab14b340999b4e854dadef32cb5785e84017a6d11445&ipo=images" alt="img-profile">
        <!-- TODO: create animation toast show hidden -->
        <div class="toast-profile" :class="this.show? 'show' : ''" style="--height-element: ">
          <div class="user">
            <figure class="profile">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.41hTOXfyC5OAC9_We48NfgAAAA%26pid%3DApi&f=1&ipt=a0a4b4fb28723342d868ab14b340999b4e854dadef32cb5785e84017a6d11445&ipo=images"
                alt="img-profile">
            </figure>
            <div class="user-profile">
              <span class="username">Patrick Jane</span>
              <span class="job">Administrator</span>
            </div>
          </div>
          <ul class="menu">
            <li>
              <router-link to="/">
                <i class="fa-solid fa-user"></i>
                My Profile
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="fa-solid fa-lock-open"></i>
                Change Password
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out
              </router-link>
            </li>
          </ul>
        </div>
      </figure>
    </div>
  </header>
</template>