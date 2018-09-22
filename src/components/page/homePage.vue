<template>
  <div>
    <h1>THIS IS HOMEPAGE</h1>
    <router-link :to="{name:'donate'}">Donate</router-link>
    <router-link :to="{name:'about'}">About</router-link>
    <a href="">Volunteer Login Button</a>
    <router-link :to="{name:'volunteerSignup'}">Volunteer Signup</router-link>
    <router-link :to="{name:'callRequest'}">Call Request</router-link>

  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
