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
        <BCard class="bCardDetails">
          <BRow class="mb-2">
            <BCol sm="3" class="text-sm-right"><b>Age:</b></BCol>
            <BCol>{{ row.item.age }}</BCol>
          </BRow>

          <BRow class="mb-2">
            <BCol sm="3" class="text-sm-right"><b>Is Active:</b></BCol>
            <BCol>{{ row.item.isActive }}</BCol>
          </BRow>

          <!-- <BButton
            v-if="row.item.isActive"
            variant="outline-success"
            size="sm"
            @click="
              router.push(
                `/experiences/${row.item.first_name.toLocaleLowerCase()}_${row.item.last_name.toLocaleLowerCase()}`
              )
            "
            >Create or Join Room</BButton
          > -->
          <BButton
            id="select-btn"
            v-if="row.item.isActive"
            variant="outline-info"
            size="sm"
            @click="modalRef = !modalRef"
            >Select</BButton
          >

          <!-- <BButton size="sm" @click="row.toggleDetails">Hide Details</BButton> -->
        </BCard>
      </template>
    </BTable>
    <BModal
      centered
      ok-only
      ok-variant="outline-success"
      v-model="modalRef"
      title="Create or Join an Experience"
      @ok="handleOkay"
    >
      <h4>Choose the environment</h4>
      <BFormSelect v-model="selectedEnviron" :options="environOptions" />
      <h4 style="margin: 6px">Choose duration of Experience</h4>
      <BFormSelect v-model="selectedTimer" :options="timerOptions" />
      <!-- <BButton
        style="margin: 12px"
        variant="outline-success"
        size="sm"
        @click="
          router.push(`/experiences/${selectedEnviron.toLocaleLowerCase()}`)
        "
        >Create or Join</BButton
      > -->
    </BModal>
  </section>
</template>

<script setup lang="ts">
import { BButton, BFormSelect } from "bootstrap-vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoomStore } from "../stores/roomStore";

const modalRef = ref(false);
const roomStore = useRoomStore();
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
    //  _showDetails: true,
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

const environOptions = [
  { text: "Please, choose an environment", value: null },
  // { text: "Resort Lobby", value: "https://playcanv.as/b/1f209108" },
  { text: "Resort Lobby", value: "https://playcanv.as/p/XkL7IH8y/" },
  { text: "Glitch Served", value: "https://clear-quirky-split.glitch.me/" },
  { text: "Another Glitch", value: "https://sweet-fork-pillow.glitch.me/" },
  {
    text: "CodeSandBox",
    //  value: "https://codesandbox.io/embed/zphhv3?embed=1&view=preview",

    value:
      "https://codesandbox.io/embed/zphhv3?view=preview&module=%2Fsrc%2Findex.html&hidenavigation=1",
  },
  {
    text: "Geometric shapes scenario",
    // value: "https://playcanv.as/p/sertSRJP/",
    value: "https://playcanv.as/p/kKRucDEI/",
  },
  { text: "MiniFlat interior", value: "https://playcanv.as/p/c1o59wX5/" },
  { text: "Colyseus MiniFlat", value: "https://playcanv.as/p/dYSpZWTE/" },
];
const selectedEnviron = ref(null);

const timerOptions = [
  { text: "Please, choose a duration", value: null },
  { text: "5 minutes", value: "300000" },
  { text: "10 minutes", value: "600000" },
  { text: "15 minutes", value: "900000" },
];
const selectedTimer = ref(null);

const handleOkay = () => {
  if (selectedTimer.value === null || selectedEnviron.value === null) {
    alert("You must select an environment and a duration!");
    // return;
    //  router.push(`/experiences/${selectedEnviron.value.toLocaleLowerCase()}`);
  } else {
    console.log(`Setting duration: ${selectedTimer.value}`);
    roomStore.setDuration(selectedTimer.value);

    roomStore.setRoomName(
      `${selectedEnviron.value.toLocaleLowerCase().substring(22)}`
      // `${selectedEnviron.value}`
    );
    // roomStore.setRoomUrl(selectedEnviron.value);
    roomStore.setRoomUrl(selectedEnviron.value.toLocaleLowerCase());
    try {
      router.push({
        name: "experience",
        params: {
          //  id: `${selectedEnviron.value.toLocaleLowerCase().substring(22)}`,
          id: `${selectedEnviron.value.toLocaleLowerCase()}`,
        },
      });
    } catch (error) {
      console.log(`${selectedEnviron.value} = null`);
    }
  }
};
</script>

<style scoped>
.bCardDetails {
  position: relative;
}
#select-btn {
  position: absolute;
  top: 25%;
  right: 40%;
}
#bTable {
  /* width: 100vw; */
  height: 100vh;
}
</style>
