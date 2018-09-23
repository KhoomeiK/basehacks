<template>
    <div>
      <header id="not-main-page">
      <a href="../index.html"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></a>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>
    </header>

    <section id="volunteer">
      <div class="block">
        <ion-icon name="pulse"></ion-icon>
        <h2>Help Somebody in Need Today</h2>
        <p>We're connecting teenagers with teenagers to make mental<br> health easier and more accessible than ever</p>
        <a class="btn btn-full" href="#">Sign Up/Sign In</a>
      </div>
      <div class="block">
        <ion-icon name="heart"></ion-icon>
        <h2>You Make a Difference</h2>
        <p>Learn more about what We & You can do and why here.</p>
        <a class="btn btn-full" href="about.html">Learn More</a>
      </div>
    </section>
    <footerlinks/>
    </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
export default {
  name: "volunteerSignup",
  data() {
    return {
      age: null,
      language: null,
      feedback: null
    };
  },
  methods: {
    signup() {
      if (this.age && this.language) {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(res => {
            let ref = db.collection("users").doc(res.user.uid);
            ref.get().then(res => {
              if (!res.exists) {
                ref
                  .set({
                    verified: false,
                    age: this.age,
                    language: this.language
                  })
                  .then(() => {
                    this.$router.push({ name: "tutorial" });
                  });
              } else if (res.data().verified) {
                this.$router.push({ name: "dashboard" });
              } else if (res.exists) {
                this.$router.push({ name: "tutorial" });
              }
            });
          });
      } else {
        this.feedback = "You must enter an age and language";
      }
    }
  },
  components: {
    headerlinks,
    footerlinks
  }
};
</script>

<style>
</style>
