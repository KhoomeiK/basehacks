<template>
    <div>
      <header id="not-main-page">
      <a href="../index.html"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></a>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>
    </header>

    <section id="donate">
      <div class="block">
        <ion-icon name="cash"></ion-icon>
        <h2>Donate To Our Cause</h2>
        <p>Your donations help fund our efforts to make the world a better place.<br>They also go toward keeping our servers running and our workers happy. ☺</p>
        <a class="btn btn-full" href="#">Donate</a>
      </div>
    </section>

    <footerlinks/>
    </div>
</template>

<script>
import footerlinks from "@/components/misc/footerlinks";
import headerlinks from "@/components/misc/headerlinks";
export default {
  name: "donate",
  data() {
    return {};
  },
  components: {
    headerlinks,
    footerlinks
  }
};
</script>

<style>
</style>
