<template>
    <div>
        <h1>VERIFICATION CALL</h1>
        <button @click="confirm()">confirm</button>
        <router-link :to="{name:'dashboard'}">dashboard</router-link>
    </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();
export default {
  name: "verificationCall",
  data() {
    return {};
  },
  methods: {
    confirm() {
      let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
      ref
        .update({
          verified: true
        })
        .then(() => {
          this.$router.push({
            name: "dashboard"
          });
        });
    }
  }
};
</script>

<style>
</style>
