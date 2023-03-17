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
  <article class="home--card" @click="handleRedirect">
    <p class="home--card__title">{{ title }}</p>
    <picture>
      <img :src="logo" alt="logo card" />
    </picture>
  </article>
</template>
<style lang="scss" scoped>
.home--card {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgb(189, 162, 53);
  &__title {
    color: rgb(189, 162, 53);
    margin-bottom: 2rem;
  }
  picture {
    display: block;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
