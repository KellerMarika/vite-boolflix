<template>

  <template v-for="category in store.categories">
    <div v-if="category.active" class="d-flex">


      {{ category.name }}
      <!-- @click="showCardInfos? false:true" -->

      <div
          :class="category.name" class="cards-container" 
          v-for="(movie, i) in category.list">

        <!-- v-if="showCardInfos"  -->
        <CardInfos :movie="movie" />
        <!-- v-else -->
        <CardPoster :movie="movie" />
      </div>
    </div>

    <template v-else></template>
  </template>


  <!-- v-else -->

</template>

<script>
/* import { store } from './store'; */

import CardInfos from './CardInfos.vue';
import CardPoster from './CardPoster.vue';
import { store } from '../store';

export default {
  components: { CardPoster, CardInfos },
 
  data() {
    return {
      store,
      showCardInfos: false,
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>
