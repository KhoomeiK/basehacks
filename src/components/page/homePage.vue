<template>
  <div>
    <header id="main-page">
      <a><h1 id="main-page-company-name"><strong>We & You</strong></h1></a>

      <div id="main-page-nav-bar">
        <ul>
          <li><a class="non-btn" @click.prevent="login()" href="">Sign In</a></li>
          <li><router-link class="non-btn" :to="{name:'donate'}">Donate</router-link></li>
          <li><router-link class="non-btn" :to="{name:'volunteerSignup'}">Volunteer</router-link></li>
          <li><router-link class="non-btn" :to="{name:'about'}">About Us</router-link></li>
          <li><router-link class="non-btn" :to="{name:'homePage'}">Homepage</router-link></li>
        </ul>
      </div>

      <div id="main-page-text-box">
        <h1><strong>No More #WaitingInLine</strong><br>for hotlines</h1>
        <router-link class="btn btn-full" :to="{name:'callRequest'}">Call Now</router-link>
        <router-link class="btn btn-empty" :to="{name:'volunteerSignup'}">Volunteer</router-link>
      </div>
    </header>
    <footerlinks/>
  </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
import footerlinks from "@/components/misc/footerlinks";
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
          console.log(res.user);
          let ref = db.collection("users").doc(res.user.uid);
          ref.get().then(res => {
            if (!res.exists) {
              this.$router.push({ name: "volunteerSignup" });
            } else if (res.data().verified) {
              this.$router.push({ name: "dashboard" });
            } else if (res.exists) {
              this.$router.push({ name: "tutorial" });
            }
          });
          console.log(ref);
        });
    }
  },
  components: {
    footerlinks
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
