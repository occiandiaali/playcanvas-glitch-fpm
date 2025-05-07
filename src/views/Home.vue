<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

import ModalComponent from "../components/ModalComponent.vue";

import mockUserData from "../data/mockUserData";
import { BFormInput } from "bootstrap-vue-next";

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
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
</script>

<template>
  <section class="m-2">
    <BContainer fluid class="p-4 bg-dark">
      <!-- Modal -->
      <ModalComponent
        :item="selectedItem"
        v-if="isModalOpen"
        @close="closeModal"
      />
      <!-- End Modal -->

      <BRow>
        <BCol v-for="user in mockUserData" :key="user.id" cols="3">
          <!-- <div id="user-div">
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
          </div> -->
          <div class="image-container mb-3">
            <BImg fluid :src="user.img" id="img" :alt="user.author" />
            <div id="action-row">
              <!-- <BButton class="BButton" variant="outline-warning">
 
              </BButton> -->
              <!-- <label for="start">Start date:</label> -->
              <!-- <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-12-31"
                min=""
                max="2018-12-31"
              /> -->
              <BFormInput min="2025-05-07" type="date" />

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
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 10px 20px;
  cursor: pointer;
}
.BButton {
  margin: 6px;
}
/* label {
  display: block;
  font: 1rem "Fira Sans", sans-serif;
} */
input {
  margin: 0.4rem;
  border-radius: 4px;
  padding: 4px;
}

/* input,
label {
  margin: 0.4rem 0;
} */
/* .card {
  margin: 2px;
  width: 12rem;
} */
#img {
  width: 160px;
  height: 160px;
}
.image-container {
  display: grid;
  position: relative;
  width: 300px;
  height: 280px;
  justify-content: center;
  align-items: center;
  margin: 6.5px;
  background-color: rgb(128, 125, 125);
}
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
