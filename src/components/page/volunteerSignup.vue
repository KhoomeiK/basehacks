<template>
    <div>
        <h1>VOLUNTEER SIGNUP</h1>
        <form @submit.prevent="signup">
          age:
          <input type="number" v-model="age"><br>
          language:
          <input type="text" v-model="language"><br>
          <button @click="signup()">SignUp</button>
        </form>
        <router-link :to="{name:'tutorial'}">tutorial</router-link>
    </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
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
  }
};
</script>

<style>
</style>
