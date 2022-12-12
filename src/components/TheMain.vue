<template>

  <!-- v-for category in categories -->
  <!-- v-if category.active -->
  <div><!-- @click="showCardInfos? false:true" -->

    <!-- v-if="showCardInfos"  -->
    <CardInfos />
    <!-- v-else -->
    <CardPoster />
  </div>

  <!-- v-else -->
  <div></div>
</template>

<script>
/* import { store } from './store'; */

import CardInfos from './CardInfos.vue';
import CardPoster from './CardPoster.vue';

export default {
  components: { CardPoster, CardInfos },
  data() {
    return {
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
