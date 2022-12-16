<template>

  <main class="main-container mt-4">

    <!-- ciclo categoria -->
    <template v-for="category in store.categories">

      <section class="mb-2"
          :id="`${category.name}-container`"
          v-if="category.active && store.queries.text">

        <!-- navbar -->
        <nav class="py-3 px-3"
            :class="`${category.name}-nav`">

          <h2 class="text-capitalize fs-1 p-2">{{ category.name }}</h2>
          <!-- emit con  -->
          <GenresNav :category="category" />
        </nav>

        <div :id="category.name"
            class=" cards-container d-flex overflow-auto mb-5">

          <!--ciclo single card -->
          <div class="overflow-auto position-relative"
              :class="`${category.name}_card`" :key="`${category.name}_id:${movie.id}`"
              v-for="(movie) in category.list"
              @click="matchGender(movie, category)">
            <!-- card-body -->
            <div class="card-body position-absolute top-0 bottom-0 w-100">
              <CardInfos :movie="movie" />

              <CardPoster :movie="movie" />
            </div>

          </div>

        </div>
      </section>
      <template v-else></template>
    </template>
  </main>
</template>

<script>

import CardInfos from './CardInfos.vue';
import CardPoster from './CardPoster.vue';
import { store } from '../store';
import GenresNav from './GenresNav.vue';

export default {
  components: { CardPoster, CardInfos, GenresNav },

  data() {
    return {
      store,

    }
  },
  methods: {

    matchGender(movie, category) {
      let idFilterList = []
      let isIncluded

        category.activeGenres.forEach(gender => {
          idFilterList.push(gender.id)
          console.log(idFilterList)
        });
      for (let i = 0; i < movie.genre_ids.length; i++) {
        if (idFilterList.includes(movie.genre_ids[i])) {
          return  isIncluded= true

        } else {
          return  isIncluded= false
        }


      }

    }

  },
  computed: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
@use "../styles/partials/variables" as *;

[id$=-container] {
  box-shadow: -1px -1px 10px 1px $dark_color;

}

.cards-container {

  box-shadow: 0px 0px 5000px 50px inset $dark_color;

  [class$="_card"] {
    min-width: calc(100% /6);
    aspect-ratio: 2/3;

    .card-body {
      transform-style: preserve-3d;
      transition: all 0.8s ease;
    }

    &:hover .card-body {
      transform: rotateY(180deg);

    }
  }
}
</style>
