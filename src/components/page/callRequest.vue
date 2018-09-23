<template>
    <div>
        <h1>CALL REQUEST</h1>
        <router-link :to="{name:'theCall', params:{id}}">Call Request</router-link>
    </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore().collection("users");
export default {
  name: "callRequest",
  async created() {
    // determine id on request call click
    let vols = await db.where("ready", "==", true).where("verified", "==", true).get();
    let id = vols.docs[0].id;
    this.id = id;
    console.log(this.id);
  },
  data() {
    return {
      id: null
    };
  }
};
</script>

<style>
</style>
