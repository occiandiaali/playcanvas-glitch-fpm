<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const myIframe = ref(null);
const loaded = ref(false);

onMounted(() => {
  console.log(`Params: ${route.params.id}`);

  setTimeout(() => {
    loaded.value = true;
  }, 6000);
});
</script>

<template>
  <section>
    <BButton variant="outline-success" id="outline-btn"
      ><RouterLink
        to="/experiences"
        style="text-decoration: none; color: darkgreen"
        >Leave</RouterLink
      ></BButton
    >
    <p id="param-info">Room created by {{ route.params.id }}</p>
    <iframe
      ref="myIframe"
      class="embed-responsive-item"
      src="https://playcanv.as/p/sertSRJP/"
      allow="camera; microphone; xr-spatial-tracking; fullscreen;autoplay"
      allowfullscreen
    ></iframe>
    <p id="placeholder" v-if="!loaded">
      If your Experience doesn't begin shortly, ensure your internet is up!
    </p>
    <p class="w">W to go forward</p>
    <p class="s">S to go backward</p>
    <p id="a-d">A to turn left & D to turn right</p>
  </section>
</template>

<style scoped>
#outline-btn {
  position: absolute;
  top: 4%;
  left: 4%;
  z-index: 999;
}
#param-info {
  position: absolute;
  top: 3%;
  right: 8%;
  color: darkolivegreen;
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
#placeholder {
  position: absolute;
  top: 20%;
  left: 24%;
  font-size: larger;
}
section {
  position: relative;
  width: 100vw;
  height: 90vh;
}

.w {
  position: absolute;
  bottom: 20%;
  left: 2%;
  font-size: small;
  color: white;
  border: 0.6px solid white;
  padding: 0.3rem;
  opacity: 0.3;
}
.s {
  position: absolute;
  bottom: 14%;
  left: 2%;
  font-size: small;
  color: white;
  border: 0.6px solid white;
  padding: 0.3rem;
  opacity: 0.3;
}
#a-d {
  position: absolute;
  bottom: 6%;
  left: 2%;
  font-size: small;
  color: white;
  border: 0.6px solid white;
  padding: 0.3rem;
  opacity: 0.3;
}
</style>
