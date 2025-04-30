<script setup></script>

<template>
  <section>
    <button><RouterLink to="/diary">Leave</RouterLink></button>
    <iframe
      class="embed-responsive-item"
      src="https://playcanv.as/p/sertSRJP/"
      allow="camera; microphone; xr-spatial-tracking; fullscreen"
      allowfullscreen
    ></iframe>
  </section>
</template>

<style scoped>
button {
  position: absolute;
  top: 4%;
  left: 4%;
  z-index: 999;
}
iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
  /* position: absolute;
  top: 0;
  left: 0; */
}
section {
  position: relative;
  width: 100vw;
  height: 90vh;
}
</style>
