<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
  },
  house: {
    type: String,
  },
  actor: {
    type: String,
  },
  patronus: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="characterCards">
    <div class="card">
      <div class="card__image">
        <img class="card__image" :src="image" alt="character image" />
      </div>
      <div class="card__content">
        <h2 class="card__title">{{ name }}</h2>
        <p class="card__text">{{ description }}</p>
        <p class="card__text">{{ gender }}</p>
        <p class="card__text">{{ house }}</p>
        <p class="card__text">{{ actor }}</p>
        <p class="card__text">{{ patronus }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.characterCards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.5s ease-in-out;
}

.card:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border: 2px solid #b69361;
  transform: translateY(-5px);
}

.card__image {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 1rem 1rem 0 0;
}

.card__content {
  padding: 1rem;
  width: 100%;
  text-align: center;
}

.card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #b69361;
  margin-bottom: 0.5rem;
}

.card__text {
  margin-bottom: 0.5rem;
}
</style>
