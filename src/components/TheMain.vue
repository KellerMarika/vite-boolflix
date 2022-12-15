<template>

  <main class="main-container">

    <template v-for="category in store.categories">
      <h2>{{ category.name }}</h2>
      <div v-if="category.active && store.queries.text" :id="category.name"
          class=" cards-container d-flex overflow-auto ">


        <div
            :class="`${category.name}_card`" :key="`${category.name}_id:${movie.id}`"
            v-for="(movie, i) in category.list">

          <CardInfos :movie="movie" v-if="showCardInfos" />

          <CardPoster :movie="movie" v-else />
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
      showCardInfos: true
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
    background-color: rgb(25, 156, 231);
  }
}
</style>
