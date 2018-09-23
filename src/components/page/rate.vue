<template>
    <div>
      <header id="not-main-page">
        <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>
        <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>

    </header>
      <section id="rate">
      <h2>How would you rate your service?</h2>
      <form>
        <div id="rate-form">
          <span>
            <label class="container">I feel better.
            <input type="radio" name="radio" required value=1 v-model="feeling">
            <span class="checkmark"></span>
          </label>
          <label class="container">I feel the same.
            <input type="radio" name="radio" value=0 v-model="feeling">
            <span class="checkmark"></span>
          </label>
          <label class="container">I feel worse.
            <input type="radio" name="radio" value=-1 v-model="feeling">
            <span class="checkmark"></span>
          </label>
        </span>
        </div>
        <div class="span-two-of-three"><textarea id="message" name="message" placeholder="Message" required v-model="comment"></textarea></div>
        <div class="span-two-of-three"><a class="btn btn-full" @click="submit()">Submit</a></div>
      </form>
    </section>
    <footerlinks/>
    </div>
</template>

<script>
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
import firebase from "firebase";
export default {
  name: "rate",
  methods: {
    async submit() {
      console.log(this.id);
      console.log(this.feeling);
      console.log(this.comment);
      let call = firebase.functions().httpsCallable("sentiment");
      call(this.comment).then(res => {
        let point = Math.round(res.data * 10);
        console.log(point);
        firebase
          .firestore()
          .collection("users")
          .doc(this.id)
          .get()
          .then(res => {
            let points = res.data().points + point + parseInt(this.feeling);
            let calls = res.data().calls + 1;
            if (point > 7) {
              firebase
                .firestore()
                .collection("users")
                .doc(this.id)
                .update({
                  comment: this.comment
                });
            }
            firebase
              .firestore()
              .collection("users")
              .doc(this.id)
              .update({
                points,
                calls
              });
          });
      });
      this.$router.push("/");
    }
  },
  data() {
    return {
      comment: null,
      feeling: null,
      id: this.$route.params.id
    };
  },
  components: {
    footerlinks,
    headerlinks
  }
};
</script>

<style>
form {
  display: inline-block;
}
</style>
