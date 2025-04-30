<script setup>
import Navbar from "./components/Navbar.vue";
// Glitch server: 'https://gold-succulent-scorpio.glitch.me/'
// PlayCanvas: 'https://playcanv.as/p/sertSRJP/'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
