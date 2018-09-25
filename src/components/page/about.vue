<template>
    <div>
      <header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>
    </header>

    <section id="about-us">
      <div class="block">
        <ion-icon name="paper-plane"></ion-icon>
        <h2>No More Waiting in Line</h2>
        <p>Due to our expansive network of passionate, thoroughly-prepared teenagers,<br> we're able to fulfill calls far faster than typical hotlines.</p>
      </div>
      <div class="block">
        <ion-icon name="chatboxes"></ion-icon>
        <h2>Video. Call. Chat.</h2>
        <p>As teenagers, we know how versatile communication is these days.<br> We & You assists your mental health utilizing a variety of media.</p>
      </div>
      <div class="block">
        <ion-icon name="help-buoy"></ion-icon>
        <h2>Safety First</h2>
        <p>Our volunteers take a course on psychotherapy & are vetted by call.<br> You remain as anonymous as you choose to be.</p>
      </div>
      <div class="block">
        <ion-icon name="people"></ion-icon>
        <h2>By Teens, For Teens</h2>
        <p>We're a team of high schoolers working to connect teens with other<br> teens to improve mental health experiences.</p> <br>
        <p> Lesha: Frontend Development & UI/UX </p>
        <p> Rohan: Full Stack Development </p>
        <p> Elliot: Web Design </p>
        <p> Evan: Research & Testing </p>
      </div>
    </section>
    <footerlinks/>
    </div>
</template>

<script>
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
export default {
  name: "about",
  data() {
    return {};
  },
  components: {
    footerlinks,
    headerlinks
  }
};
</script>

<style>
</style>
