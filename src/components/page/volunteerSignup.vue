<template>
    <div>
      <header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>
    </header>

    <section id="volunteer">
      <div class="block">
        <ion-icon name="pulse"></ion-icon>
        <h2>Help Somebody in Need Today</h2>
        <p>We're connecting teenagers with teenagers to make mental<br> health easier and more accessible than ever</p>
        
        <ul id="contact-form">
          <form @submit.prevent="signup()">
            <div id="age-label" class="span-one-of-three"><label for="age">Age</label></div>
            <div class="span-two-of-three"><input type="number" id="age" name="age" placeholder="Age" required v-model="age"></div>
            <br><br>

            <div id="language-label" class="span-one-of-three"><label for="language">Language</label></div>
            <div class="span-two-of-three">
              <select id="language" name="language" required v-model="language">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>  
                <option value="french">French</option>
              </select>
            </div>
            <br><br>

            <div class="span-two-of-three">
              <input type="submit" id="submit" name="submit" class="btn btn-full">
            </div>
          </form>
        </ul>
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
      language: 'english',
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
                    language: this.language,
                    email: firebase.auth().currentUser.email,
                    points: 0,
                    calls: 0,
                    firstName: firebase
                      .auth()
                      .currentUser.displayName.split(" ")[0],
                    lastName: firebase
                      .auth()
                      .currentUser.displayName.split(" ")[1],
                    ready: false
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
