<template>
    <ul>
        <li v-if="!curentUser"><a class="non-btn" @click.prevent="login()" href="#">Sign In</a></li>
        <li v-if="curentUser"><a class="non-btn" @click.prevent="logout()" href="#">Log Out</a></li>
        <li><router-link class="non-btn" :to="{name:'about'}">About Us</router-link></li>
        <li><router-link class="non-btn" :to="{name:'donate'}">Donate</router-link></li>
        <li v-if="!curentUser"><router-link class="non-btn" :to="{name:'volunteerSignup'}">Volunteer</router-link></li>
        <li v-if="curentUser"><router-link class="non-btn" :to="{name:'dashboard'}">Dashboard</router-link></li>
        <li><router-link class="non-btn" :to="{name:'homePage'}">Homepage</router-link></li>
    </ul>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
export default {
  name: "headerlinks",
  data() {
    return {
      curentUser: null
    };
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
    },logout(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name:'homePage'})
      })
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.curentUser = user;
    });
  }
};
</script>
