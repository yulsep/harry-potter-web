<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  routeName: {
    type: String,
  },
  routeParam: {
    type: Object,
    defautl: () => ({}),
  },
});

function handleRedirect() {
  if (props.routeName) {
    router.push({ name: props.routeName, params: { ...props.routeParam } });
  }
}
</script>

<template>
  <div class="cards">
    <article
      class="card"
      @click="handleRedirect"
      :style="{ backgroundImage: `url(${logo})` }"
    >
      <div class="card__content">
        <h2 class="card__title">{{ title }}</h2>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  padding: 1rem;
}

.card {
  display: grid;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  max-width: 300px;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-in-out, transform 0.5s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 70%;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border: 2px solid #b69361;
  opacity: 100%;
  transform: translateY(-5px);
}

.card__content {
  z-index: 1;
}

.card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #b69361;
  margin-bottom: 0.5rem;
}

.wrapper--grid {
  display: flex;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
}
</style>
