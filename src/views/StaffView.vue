<script setup>
import StaffCard from "../components/CharacterCard.vue";
import { StaffCharacters } from "../mock";
</script>

<template>
  <main class="wrapper--main">
    <h2>Staff</h2>
    <section class="wrapper--grid__characters">
      <staff-card
        v-for="item in StaffCharacters"
        :name="item.name"
        :image="
          item.image
            ? item.image
            : 'https://img.wattpad.com/cover/117689083-256-k260367.jpg'
        "
        :gender="item.gender"
        :house="item.house"
        :actor="item.actor"
        :species="item.species"
      ></staff-card>
    </section>
  </main>
</template>
