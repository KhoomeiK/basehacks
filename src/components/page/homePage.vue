<template>
  <div>
    <header id="main-page">
      <a href="index.html"><h1 id="company-name"><strong>We & You</strong></h1></a>
      <div id="main-page-nav-bar">
        <ul>
          <li><router-link class="non-btn"  :to="{name:'donate'}">Donate</router-link></li>
          <li><router-link class="non-btn" :to="{name:'volunteerSignup'}">Volunteer</router-link></li>
          <li><router-link class="non-btn" :to="{name:'about'}">About Us</router-link></li>
          <li><router-link class="non-btn" :to="{name:'homePage'}">Homepage</router-link></li>
        </ul>
      </div>

      <div id="main-page-text-box">
        <h1><strong>No More #WaitingInLine</strong><br>for hotlines</h1>
        <a id="call-now-button" class="btn btn-full" href="#">Call Now</a>
        <a class="btn btn-empty" href="#">Volunteer</a>
      </div>
    </header>

    <footer>
      <div id="footer-links">
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'homePage'}">Homepage</router-link></h3>
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'about'}">About Us</router-link></h3>
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'volunterSignup'}">Volunteer</router-link></h3>
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'donate'}">Donate</router-link></h3>
        <h3 class="footer-info">BaseHacks Hackathon Team 8</h3>
      </div>
      <h3 id="copyright">&copy; We & You</h3>
    </footer>

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
