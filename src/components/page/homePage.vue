<template>
  <div>
    <h1>THIS IS HOMEPAGE</h1>
    <router-link :to="{name:'donate'}">Donate</router-link>
    <router-link :to="{name:'about'}">About</router-link>
    <a @click="login()">Volunteer Login Button</a>
    <router-link :to="{name:'volunteerSignup'}">Volunteer Signup</router-link>
    <router-link :to="{name:'callRequest'}">Call Request</router-link>

  </div>
</template>

<script>
import firebase from "firebase";
var provider = new firebase.auth.GoogleAuthProvider();
export default {
  name: "homePage",
  data() {
    return {};
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          console.log(res.user)
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
