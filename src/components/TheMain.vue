<template>

  <main class="main-container">

    <template v-for="category in store.categories">
      <div v-if="category.active" :id="category.name" class=" cards-container d-flex overflow-auto ">


        <div class=""> {{ category.name }}</div>
        <!--  @mouseover="showCardInfos? showCardInfos=false: showCardInfos=true" -->
        <div
            :class="`${category.name}_card`" class=""
            v-for="(movie, i) in category.list">

          <CardInfos
              v-if="showCardInfos"
              :movie="movie" />

          <CardPoster
              v-else
              :movie="movie" />
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
      showCardInfos: true,
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style lang="scss">

[class$="_card"] {
  min-width: calc(100% /8);
  aspect-ratio: 4/3;
}
</style>
