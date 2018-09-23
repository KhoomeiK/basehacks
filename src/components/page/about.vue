<template>
    <div>
      <header id="not-main-page">
      <a href="../index.html"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></a>

      <div id="not-main-page-nav-bar">
        <ul>
          <li><a class="non-btn" href="#">Sign In</a></li>
          <li><a class="non-btn" href="donate.html">Donate</a></li>
          <li><a class="non-btn" href="volunteer.html">Volunteer</a></li>
          <li><a class="non-btn" href="about.html">About Us</a></li>
          <li><a class="non-btn" href="../index.html">Homepage</a></li>
        </ul>
      </div>
    </header>

    <section id="about-us">
      <div class="block">
        <i class="social-icon ion-ios-paperplane"></i>
        <h2>No More Waiting in Line</h2>
        <p>Due to our expansive network of passionate, thoroughly-prepared teenagers,<br> we're able to fulfill calls far faster than typical hotlines.</p>
      </div>
      <div class="block">
        <i class="social-icon ion-chatboxes"></i>
        <h2>Video. Call. Chat.</h2>
        <p>As teenagers, we know how versatile communication is these days.<br> We & You assists your mental health utilizing a variety of media.</p>
      </div>
      <div class="block">
        <i class="social-icon ion-help-buoy"></i>
        <h2>Safety First</h2>
        <p>Our volunteers take a course on psychotherapy & are vetted by call.<br> You remain as anonymous as you choose to be.</p>
      </div>
      <div class="block">
        <i class="social-icon ion-ios-people"></i>
        <h2>By Teens, For Teens</h2>
        <p>We're a team of high schoolers working to connect teens with other<br> teens to improve mental health experiences.</p>
      </div>
    </section>

    <footerlinks/>
    </div>
</template>

<script>
import footerlinks from "@/components/misc/footerlinks";
export default {
  name: "about",
  data() {
    return {};
  },
  components: {
    footerlinks
  }
};
</script>

<style>
</style>
