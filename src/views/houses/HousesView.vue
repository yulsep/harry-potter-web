<script setup>
import HouseCard from "../../components/Card.vue";
import { HousesConfig } from "../../utils";
</script>

<template>
  <main class="wrapper--main">
    <h2>Houses</h2>
    <section class="wrapper--grid">
      <house-card
        v-for="item in HousesConfig"
        :logo="item.logo"
        :title="item.title"
        :routeName="item.routeName"
        :route-param="item.routeParam"
      ></house-card>
    </section>
  </main>
</template>
