<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> 

    <div class="wrapper">
    <router-link :to="{name: 'Home'}">
      <span class="px-5 py-2 rounded-lg m-10 bg-indigo-700 duration-300" :class="getLinkClass('/')">Home</span>
    </router-link>

    <router-link :to="{name: 'About'}">
      <span class="px-5 py-2 rounded-lg m-10 bg-indigo-700 duration-300" :class="getLinkClass('/about')">About</span>
    </router-link>
    <router-link :to="{name: 'Jobs'}">
      <span class="px-5 py-2 rounded-lg m-10 bg-indigo-700 duration-300" :class="getLinkClass('/jobs')">Jobs</span>
    </router-link>
    
  </div>
  <!-- <side-bar></side-bar> -->
  </header>
  <button class="bg-slate-600 text-white px-3 py-2 rounded me-5 mt-5" @click="Redirect">Redirect</button>
  <button class="bg-slate-600 text-white px-3 py-2 rounded me-5 mt-5" @click="Goback">go back</button>
  <button class="bg-slate-600 text-white px-3 py-2 rounded me-5 mt-5" @click="Forward">go forward</button>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
export default {
  methods: {
    isLinkActive(route){
      return this.$route.path === route
    },
    getLinkClass(route){
      return this.isLinkActive(route)? 'bg-orange-600' : ''
    },
    Redirect(){
      this.$router.push({name: 'Home'})
    },
    Goback(){
      this.$router.go(-1)
    },
    Forward(){
      this.$router.go(1)
    },
  },
}
</script> 


