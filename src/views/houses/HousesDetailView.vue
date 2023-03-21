<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { fetchHousesByName } from "../../services";

const route = useRoute();
const house = ref({});

onMounted(async () => {
  const houseParam = route.params.house;
  house.value = await fetchHousesByName(houseParam);
});
</script>

<template>
  <main class="wrapper--main">
    <h2>{{ String($route.params.house).toUpperCase() }}</h2>
    <img :src="house.image" alt="house image" />
    <section>
      <p>{{ house?.description }}</p>
      <p>{{ house?.animal }}</p>
      <p>{{ house?.ghost }}</p>
    </section>
  </main>
</template>


