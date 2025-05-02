<script setup></script>

<template>
  <section>
    <h1>Diary</h1>
    <BListGroup>
      <BListGroupItem href="#some-link">Awesome link</BListGroupItem>
      <BListGroupItem href="#" active>Link with active state</BListGroupItem>
      <BListGroupItem
        ><RouterLink to="/play" class="link"
          >Let's Play</RouterLink
        ></BListGroupItem
      >
      <BListGroupItem href="#foobar" disabled>Disabled link</BListGroupItem>
    </BListGroup>
  </section>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: rgb(24, 24, 2);
}
.link:hover {
  color: rgb(22, 3, 3);
}
section {
  padding: 1rem;
  width: 100%;
  height: 100vh;
}
</style>
