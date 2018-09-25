<template>
    <div><header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>

    </header>

    <section id="callrequest">
      <h2>Call Request</h2>
      <form>
        <div id="age-label" class="span-one-of-three"><label for="age">Age</label></div>
        <div class="span-two-of-three">
          <select id="number" name="age" required v-model="age">
            <option value="under">Under 18</option>
            <option value="over">18+</option>
          </select>
        </div>
        <br><br>

        <div id="language-label" class="span-one-of-three"><label for="language">Language</label></div>
        <div class="span-two-of-three">
          <select id="language" name="language" required v-model="lang">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>
        <br><br>

        <div class="span-two-of-three">
          <a class="btn btn-full" @click="redirect()">Call</a>
        </div>
      </form>
      <h2>Information</h2>
      <p>After filling out the form above, you will be connected to a counselor through a video call shortly. They will listen to you, understand how your problem is affecting you, provide support, and share resources that may be helpful.</p>
    </section>

    <footerlinks/>
    </div>
</template>

<script>
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
import firebase from "firebase";
let db = firebase.firestore().collection("users");
export default {
  name: "callRequest",
  async created() {
    // determine id on request call click
  },
  data() {
    return {
      id: null,
      lang: null,
      age: null
    };
  },
  methods: {
    redirect() {
      let magic = "";
      if (this.age == "under") magic = "<";
      else magic = ">=";
      db
        .where("ready", "==", true)
        .where("verified", "==", true)
        .where("language", "==", this.lang)
        .where("age", magic, "18")
        .get()
        .then(vols => {
          console.log(this.lang, this.age);
          console.log(vols);
          if (vols.docs[0] == null) {
            alert(
              "No volunteers are currently available to help you out. Please call 1-800-273-8255! :)"
            );
          }
          else {
            let id = vols.docs[0].id;
            console.log(this.id);
            this.$router.push({
              name: "theCall",
              params: { id }
            });
          }
        });
    }
  },
  components: {
    footerlinks,
    headerlinks
  }
};
</script>

<style>
</style>
