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
    Made by Occian F Diaali -
    <a href="mailto:occiandiaali@gmail.com">occiandiaali@gmail.com</a>
  </footer>
</template>

<style>
footer {
  text-align: center;
  padding: 4px;
  height: 36px;
  font-size: 14px;
  background-color: #333;
  color: white;
}
footer a {
  color: wheat;
}
</style>
