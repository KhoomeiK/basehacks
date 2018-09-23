<template>
  <div>
    <header id="main-page">
      <a><h1 id="main-page-company-name"><strong>We & You</strong></h1></a>

      <div id="main-page-nav-bar">
        <headerlinks/>
      </div>

      <div id="main-page-text-box">
        <h1><strong>No More #WaitingInLine</strong><br>for hotlines</h1>
        <router-link class="btn btn-full" :to="{name:'callRequest'}">Call Now</router-link>
        <router-link class="btn btn-empty" :to="{name:'volunteerSignup'}">Volunteer</router-link>
        <p>
          We're connecting teenagers with teenagers to make mental<br> health easier and more accessible than ever.
        </p>
      </div>
    </header>
    <footerlinks/>
  </div>
</template>

<script>
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
export default {
  name: "homePage",
  data() {
    return {};
  },
  methods: {},
  components: {
    footerlinks,
    headerlinks
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
