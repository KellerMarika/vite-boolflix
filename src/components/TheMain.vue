<template>

  <main class="main-container">

    <template v-for="category in store.categories">
      <h2>{{ category.name }}</h2>

      <div v-if="category.active && store.queries.text" :id="category.name"
          class=" cards-container d-flex overflow-auto">


        <div class="overflow-auto position-relative"
            :class="`${category.name}_card`" :key="`${category.name}_id:${movie.id}`"
            v-for="(movie, i) in category.list">

          <div class="card-body position-absolute top-0 bottom-0 w-100">
            <CardInfos :movie="movie" />

       <!--      <CardPoster :movie="movie" /> _____________________________-->
          </div>
        </div>
      </div>

      <template v-else></template>
    </template>
  </main>
</template>

<script>

import CardInfos from './CardInfos.vue';
import CardPoster from './CardPoster.vue';
import { store } from '../store';

export default {
  components: { CardPoster, CardInfos },

  data() {
    return {
      store,

    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style lang="scss">
.cards-container {

  [class$="_card"] {
    min-width: calc(100% /5);
    aspect-ratio: 2/3;

    .card-body {
      transform-style: preserve-3d;
      transition: all 0.8s ease;
    }

    &:hover .card-body {
/*       transform: rotateY(180deg) ;__________________ */

    }
  }
}
</style>
