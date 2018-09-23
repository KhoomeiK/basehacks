<template>
    <div v-if="mydata">
      <header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>

    </header>

    <section id="dashboard" >
      <h2>{{mydata.firstName}} {{mydata.lastName}} Dashboard</h2>
      <p id="middle">
        <span v-if="mydata.calls>1">You've made {{mydata.calls}} lives better!</span>
        <span v-if="mydata.calls==1">You've a life better!</span>
        <span v-if="mydata.calls==0">Let's make someones day better.</span>
      </p>
      <div id="switch">
      <label class="switch">
        <input type="checkbox" @click="toggleReady()">
        <span class="slider round"></span>
      </label>
      <p id="right"><span v-if="!ready">Not</span> Ready</p>
    </div>
      <div class="rect"></div>
      <p id="quote">"Motivational Quote BTW"</p>
      <h2>Comments</h2>
      <p>"OMG! Elliot Ha has helped me overcome depression and cancer and now I'm a billionaire!"</p>
      <br><br><br>
      <h2>Resources</h2>
      <ul>
        <li><a href="ree">reee</a></li>
      </ul>
    </section>

    <footerlinks/>
    </div>
</template>

<script>
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
import firebase from "firebase";
let db = firebase.firestore();
export default {
  name: "dashboard",
  data() {
    return {
      ready: false,
      mydata: null
    };
  },
  methods: {
    toggleReady() {
      this.setRead(!this.ready);
    },
    setRead(val) {
      let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
      ref.update({
        ready: val
      });
      this.ready = val;
    }
  },
  beforeRouteLeave(to, from, next) {
    let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
    if (this.ready) {
      ref.update({ ready: false }).then(() => {
        next();
      });
    } else next();
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user.email) this.setRead(false);
      let ref = db.collection("users").doc(firebase.auth().currentUser.uid);
      ref.get().then(snapshot => {
        this.mydata = snapshot.data();
        this.mydata.id = firebase.auth().currentUser.uid;
      });
    });
  },
  components: {
    footerlinks,
    headerlinks
  }
};
</script>

<style>
.call-dashboard {
  text-align: center;
}
</style>
