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
  <BContainer fluid>
    <!-- Modal -->
    <ModalComponent
      :item="selectedItem"
      v-if="isModalOpen"
      @close="closeModal"
    />
    <!-- End Modal -->

    <BRow>
      <BCol
        v-for="user in mockUserData"
        :key="user.id"
        class="col-sm-2 col-md-3 col-6"
      >
        <div class="image-container">
          <BImg fluid :src="user.img" id="img" :alt="user.author" />
          <div id="action-row">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
                @click="openModal(user)"
              >
                <path
                  d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
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

#img {
  width: 80px;
  height: 80px;
}
.image-container {
  display: grid;
  position: relative;
  width: 180px;
  height: 180px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3%;
  margin-bottom: 1%;
  border-radius: 12px;
  background-color: rgb(128, 125, 125);
}

#wrapper {
  height: 100vh;
  width: 100vw;
  background-color: chartreuse;
}
</style>
