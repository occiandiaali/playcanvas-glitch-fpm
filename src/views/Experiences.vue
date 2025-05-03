<!-- <script setup></script>

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
</style> -->

<template>
  <section id="bTable">
    <BTable :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <!-- <BButton size="sm" class="mr-2" @click="row.toggleDetails">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </BButton> -->

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <BFormCheckbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Show
        </BFormCheckbox>
      </template>

      <template #row-details="row">
        <BCard>
          <BRow class="mb-2">
            <BCol sm="3" class="text-sm-right"><b>Age:</b></BCol>
            <BCol>{{ row.item.age }}</BCol>
          </BRow>

          <BRow class="mb-2">
            <BCol sm="3" class="text-sm-right"><b>Is Active:</b></BCol>
            <BCol>{{ row.item.isActive }}</BCol>
          </BRow>

          <BButton
            v-if="row.item.isActive"
            variant="outline-success"
            size="sm"
            @click="
              router.push(
                `/experiences/${row.item.first_name.toLocaleLowerCase()}_${row.item.last_name.toLocaleLowerCase()}`
              )
            "
            >Create or Join Room</BButton
          >

          <!-- <BButton size="sm" @click="row.toggleDetails">Hide Details</BButton> -->
        </BCard>
      </template>
    </BTable>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const fields = ["first_name", "last_name", "show_details"];
const items = [
  { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
  { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
  {
    isActive: true,
    age: 89,
    first_name: "Geneva",
    last_name: "Wilson",
    _showDetails: true,
  },
  { isActive: false, age: 38, first_name: "Jami", last_name: "Carney" },
  { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
  { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
  {
    isActive: false,
    age: 89,
    first_name: "Zuricj",
    last_name: "Wilson",
  },
  { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
];
</script>

<style scoped>
#bTable {
  /* width: 100vw; */
  height: 100vh;
}
</style>
