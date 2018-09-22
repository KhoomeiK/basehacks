<template>
    <div>
        <h1>VERIFICATION CALL</h1>
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
    confirm(){

    }
  }
};
</script>

<style>
</style>
