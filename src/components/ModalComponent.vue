<template>
  <div class="modal">
    <div class="modal-content">
      <div class="like-div" @click="handleLikeClick(item?.author)">
        <img
          src="https://th.bing.com/th/id/OIP.84rt8mGHT0Zo31qV7E21wAHaEJ?w=310&h=180&c=7&r=0&o=5&pid=1.7"
          alt="heart"
        />
      </div>
      <img :src="item?.img" :alt="item?.author" />
      <h2>{{ item?.title }}</h2>
      <p>by</p>
      <p>{{ item?.author }}</p>
      <p>
        Lorem Ipsum is a dummy text commonly used in the printing and
        typesetting industry. It has been the industry's standard placeholder
        text since the 1500s, when an unknown printer scrambled a galley of type
        to create a type specimen book.
      </p>

      <figure>
        <figcaption>Listen to {{ item?.author }} speak</figcaption>
        <!-- <audio :src="item?.voice" controls></audio> -->
        <audio controls>
          <source :src="item?.voice" type="audio/mp3" />
        </audio>
      </figure>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps(["item"]);
const show = ref(false);

const handleLikeClick = (user) => {
  alert(`You liked ${user}`);
};
</script>

<style scoped>
button {
  width: 100px;
  height: 40px;
  background-color: blanchedalmond;
  border: 1px solid blueviolet;
  border-radius: 16px;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}
.like-div {
  position: absolute;
  top: 5%;
  right: 5%;
}
.like-div > img {
  width: 54px;
  height: 30px;
}
.like-div:hover {
  cursor: pointer;
  background-color: red;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 72vw;
  height: 68%;
}
</style>
