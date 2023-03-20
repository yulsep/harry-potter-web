<script setup>
import HomeCard from "../components/Card.vue";
import { HomeSectionsConfig } from "../utils";
</script>

<template>
  <main class="wrapper--main">
    <section class="wrapper--grid">
      <home-card
        v-for="item in HomeSectionsConfig"
        :logo="item.logo"
        :title="item.title"
        :route-name="item.routeName"
      ></home-card>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.wrapper--main {
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
