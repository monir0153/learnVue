<script>
export default {
  methods: {
    isLinkActive(route){
      return this.$route.path === route
    }
  },
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
    <router-link to="/welcome">
      <span class="px-5 py-2 rounded-lg m-10 bg-indigo-700 duration-300" :class="{ 'bg-orange-500 duration-300': isLinkActive('/welcome') }">the welcome</span>
    </router-link>

    <router-link to="/hello">
      <span class="px-5 py-2 rounded-lg m-10 bg-indigo-700 duration-300" :class="{ 'bg-orange-500 duration-300': isLinkActive('/hello') }">hello world comp</span>
    </router-link>
  </div>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>


