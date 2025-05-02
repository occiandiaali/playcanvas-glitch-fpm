<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

import ModalComponent from "../components/ModalComponent.vue";

import mockUserData from "../data/mockUserData";

const selectedItem = ref(null);
const isModalOpen = ref(false);

const openModal = (item) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const router = useRouter();
</script>

<template>
  <section class="m-2">
    <BContainer class="bv-example-row">
      <!-- Modal -->
      <ModalComponent
        :item="selectedItem"
        v-if="isModalOpen"
        @close="closeModal"
      />
      <!-- End Modal -->

      <BRow>
        <BCol v-for="user in mockUserData" :key="user.id">
          <div id="user-div">
            <BAvatar :src="user.img" size="120px" />
            <div id="info-row">
              <span>{{ user.title }}</span> by
              <span>{{ user.author }}</span>
            </div>
            <div id="action-row">
              <BButton class="BButton" variant="outline-success"
                >Calendar</BButton
              >
              <BButton
                class="BButton"
                @click="openModal(user)"
                variant="outline-success"
                >Details</BButton
              >
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
#action-row {
  flex-direction: row;
}
.BButton {
  margin: 6px;
}
/* .card {
  margin: 2px;
  width: 12rem;
} */
#info-row {
  flex-direction: row;
}
#user-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 16rem;
  padding: 2px;

  /* border: 1px solid black; */
}
#wrapper {
  height: 100vh;
  width: 100vw;
  background-color: chartreuse;
}
</style>
