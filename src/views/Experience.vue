<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRoomStore } from "../stores/roomStore";

const route = useRoute();
const store = useRoomStore();

const iframeSrc = ref(null);
const loaded = ref(false);

const durationOfExperience = ref(0);

onMounted(() => {
  durationOfExperience.value = store.duration / 60000;

  iframeSrc.value = store.roomUrl;

  console.log(`Params: ${route.params.id}`);
  console.log(`Duration: ${store.duration}`);
  console.log(`IFrame src: ${store.roomUrl}`);

  setTimeout(() => {
    loaded.value = true;
  }, 8000);
});
</script>

<template>
  <section id="iframe-section">
    <BButton variant="outline-success" id="outline-btn"
      ><RouterLink
        to="/experiences"
        style="text-decoration: none; color: darkgreen"
        >Leave</RouterLink
      ></BButton
    >
    <!-- <p id="param-info">Duration: {{ route.params.id }} + {{ route.params.duration }}</p> -->
    <p id="param-info">Duration: {{ durationOfExperience }} mins</p>
    <!-- <iframe
      ref="myIframe"
      class="embed-responsive-item"
      src="https://playcanv.as/p/sertSRJP/"
      allow="camera; microphone; xr-spatial-tracking; fullscreen;autoplay"
      allowfullscreen
    ></iframe> -->

    <iframe
      class="embed-responsive-item"
      :src="iframeSrc"
      allow="camera; microphone; xr-spatial-tracking; fullscreen;autoplay"
      allowfullscreen
    ></iframe>

    <p id="placeholder" v-if="!loaded">
      If your Experience doesn't begin shortly, ensure your internet is up!
    </p>
    <p class="w">Use arrow keys to move</p>
    <p class="s">Tap to hide cursor and pan</p>
    <!-- <p id="a-d">ESC to show cursor</p> -->
    <!-- <div id="arrows-png">
      <p>Use arrow keys</p>
      <img
        src="/public/images/arrow-keys.png"
        alt="use arrow keys to move"
        id="arrows"
      />
    </div> -->
  </section>
</template>

<style scoped>
#arrows {
  width: 120px;
  height: 120px;
}
#arrows-png {
  position: absolute;
  bottom: 6%;
  left: 2%;
  padding: 0.3rem;
}
#outline-btn {
  position: absolute;
  top: 4%;
  left: 4%;
  z-index: 9;
}
/* #overlay {
  position: absolute;
  top: 50%;
  right: 50%;
  z-index: 100;
} */
#param-info {
  position: absolute;
  top: 3%;
  right: 8%;
  color: white;
}
iframe {
  display: block;
  width: 100%;
  height: 500px;
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
#iframe-section {
  position: relative;
  width: 100vw;
  height: 500px;
  overflow: hidden;
}

.w {
  position: absolute;
  bottom: 20%;
  left: 2%;
  font-size: small;
  color: white;
  border: 0.6px solid white;
  padding: 0.3rem;
  opacity: 0.5;
}
.s {
  position: absolute;
  bottom: 14%;
  left: 2%;
  font-size: small;
  color: white;
  border: 0.6px solid white;
  padding: 0.3rem;
  opacity: 0.5;
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
