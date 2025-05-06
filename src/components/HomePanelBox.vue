<script setup></script>

<template>
  <section class="image-container">
    <img src="" alt="" />
    <button class="button"></button>
  </section>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 200px;
  height: 200px;
}
.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
