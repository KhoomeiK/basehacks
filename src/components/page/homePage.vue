<template>
  <div>
    <header id="main-page">
      <a href="index.html"><h1 id="main-page-company-name"><strong>We & You</strong></h1></a>

      <div id="main-page-nav-bar">
        <ul>
          <li><a class="non-btn" href="#">Sign In</a></li>
          <li><a class="non-btn" href="html/donate.html">Donate</a></li>
          <li><a class="non-btn" href="html/volunteer.html">Volunteer</a></li>
          <li><a class="non-btn" href="html/about.html">About Us</a></li>
          <li><a class="non-btn" href="index.html">Homepage</a></li>
        </ul>
      </div>

      <div id="main-page-text-box">
        <h1><strong>No More #WaitingInLine</strong><br>for hotlines</h1>
        <a class="btn btn-full" href="#">Call Now</a>
        <a class="btn btn-empty" href="html/form.html">Volunteer</a>
      </div>
    </header>

    <footer>
      <div id="footer-links">
        <h3 class="footer-info"><a class="non-btn" href="index.html">Homepage</a></h3>
        <h3 class="footer-info"><a class="non-btn" href="html/about.html">About Us</a></h3>
        <h3 class="footer-info"><a class="non-btn" href="html/volunteer.html">Volunteer</a></h3>
        <h3 class="footer-info"><a class="non-btn" href="html/donate.html">Donate</a></h3>
        <h3 class="footer-info">BaseHacks Hackathon Team 8</h3>
      </div>
      <h3 id="copyright">&copy; We & You</h3>
    </footer>
  </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
