<script setup>
import StudentCard from "../components/CharacterCard.vue";
import { StudentsCharacters } from "../mock";
</script>

<template>
  <main class="wrapper--main">
    <h2>Students</h2>
    <section class="wrapper--grid__characters">
      <student-card
        v-for="item in StudentsCharacters"
        :name="item.name"
        :image="
          item.image
            ? item.image
            : 'https://img.wattpad.com/cover/117689083-256-k260367.jpg'
        "
        :gender="item.gender"
        :house="item.house"
        :actor="item.actor"
        :patronus="item.patronus"
      ></student-card>
    </section>
  </main>
</template>
