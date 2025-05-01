<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

import mockUserData from "../data/mockUserData";

const modal = ref(false);
const router = useRouter();

function confirmAction(ok: any) {
  ok();
  router.push({ path: "/room/55", replace: true });
}
</script>

<template>
  <section class="m-2">
    <BModal v-model="modal" title="Example User details modal" centered>
      <p>Are you sure you want to date this User?</p>
      <template #modal-footer="{ ok, cancel }">
        <BButton variant="info" @click="confirmAction(ok)">OK</BButton>
        <BButton variant="danger" @click="cancel()">Cancel</BButton>
      </template>
    </BModal>
    <BContainer class="bv-example-row">
      <BRow>
        <BCol v-for="user in mockUserData" :key="user.id">
          <BCard
            :title="user.title"
            :img-src="user.img"
            :img-alt="user.author"
            img-top
            img-height="120"
            img-width="140"
            tag="article"
            style="max-width: 20rem; padding: 1rem; margin-bottom: 1rem"
            class="card"
          >
            <BCardText>
              Some quick example text to build on the card title for
              {{ user.author }}
            </BCardText>
            <BButton @click="modal = !modal" variant="primary"
              >Go somewhere</BButton
            >
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
/* .card {
  margin: 2px;
  width: 12rem;
} */
#wrapper {
  height: 100vh;
  width: 100vw;
  background-color: chartreuse;
}
</style>
