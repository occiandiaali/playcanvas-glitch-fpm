<script setup>
import Navbar from "./components/Navbar.vue";
// Glitch server: 'https://gold-succulent-scorpio.glitch.me/'
// PlayCanvas: 'https://playcanv.as/p/sertSRJP/'
</script>

<template>
  <Navbar />
  <main id="content">
    <RouterView />
  </main>
  <footer>
    <p>Creator: Occian F Diaali</p>
    <p><a href="mailto:occiandiaali@gmail.com">occiandiaali@gmail.com</a></p>
  </footer>
</template>

<style>
footer {
  text-align: center;
  padding: 4px;
  background-color: #333;
  color: white;
}
footer a {
  color: wheat;
}
</style>
