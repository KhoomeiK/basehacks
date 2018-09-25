<template>
    <div>
      <header id="not-main-page">
      <router-link :to="{name:'homePage'}"><h1 id="not-main-page-company-name"><strong>We & You</strong></h1></router-link>

      <div id="not-main-page-nav-bar">
        <headerlinks/>
      </div>
    </header>

    <section id="donate">
      <div class="block">
        <ion-icon name="cash"></ion-icon>
        <h2>Donate To Our Cause</h2>
        <p>Your donations help fund our efforts to make the world a better place.<br>They also go toward keeping our servers running and our workers happy. ☺</p>
        <form name="PrePage" method = "post" action = "https://scotest.authorize.net/payment/CatalogPayment.aspx">
          <input type = "hidden" name = "LinkId" value ="c7be13f9-88fd-4ede-88ce-acf824b5b83b" />
          <input id="donate-button" type = "submit" value = "Donate" class="btn-full"/> 
        </form>
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
