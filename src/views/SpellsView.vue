<script setup>
import SpellsCard from "../components/CharacterCard.vue";
import { Spells } from "../mock";
</script>

<template>
  <main class="wrapper--main">
    <h2>Spells</h2>
    <section class="wrapper--grid__characters">
      <spells-card
        v-for="item in Spells"
        image="https://images.news18.com/ibnlive/uploads/2022/01/shutterstock_1657245322-1.jpg"
        :name="item.name"
        :description="item.description"
      ></spells-card>
    </section>
  </main>
</template>
