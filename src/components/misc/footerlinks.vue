<template>
    <footer>
      <div id="footer-links">
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'homePage'}">Homepage</router-link></h3>
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'about'}">About Us</router-link></h3>
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'volunteerSignup'}">Volunteer</router-link></h3>
        <h3 class="footer-info"><router-link class="non-btn" :to="{name:'donate'}">Donate</router-link></h3>
        <h3 class="footer-info">BaseHacks Hackathon Team 8</h3>
      </div>
      <h3 id="copyright">&copy; We & You</h3>
    </footer>
</template>

