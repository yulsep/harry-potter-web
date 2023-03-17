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
    <section>
      <p>{{ house?.logo }}</p>
      <p>{{ house?.founder }}</p>
      <p>{{ house?.color }}</p>
    </section>
  </main>
</template>
