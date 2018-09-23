<template>
    <div><header id="not-main-page">
      <a href="../index.html"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></a>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>

    </header>

    <section id="dashboard">
      <h2>Elliot Ha's Dashboard</h2>
      {{ready}}
      <ion-icon id="happy" name="happy"></ion-icon><h3>You've helped 10,000 people!</h3>
      <div class="call-dashboard">
        <div style="text-align:center">
          <ion-icon id="call" name="call"></ion-icon>
          <span id="callp">Call Pending...</span>
        </div>
      </div>
      <div class="rect"></div>
      <h2>Comments</h2>
      <p>"OMG! Elliot Ha has helped me overcome depression and cancer and now I'm a billionaire!"</p>
      <p>&mdash;Anonymous, 18</p>
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
      ready: false
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
