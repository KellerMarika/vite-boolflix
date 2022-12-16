<template>

  <header class="pt-3">
    <nav class="container-fluid d-flex align-items-center h-100 text-light ">

      <img src="../assets/Logonetflix.png" alt="logo netfix" class="img-fluid h-100">

      <CategoriesNav />

      <form action="" class="d-flex align-items-end" @submit.prevent="">

        <ul class="list-unstyled d-flex">

          <li class="list-group-item">
            <label class="py-1 ps-2"
                for="query-text ">
              <input class="bg-transparent rounded-1"

                  type="text" id="query-text" name="query-text" v-model="queries.text">
            </label>
            <button class="btn btn-dark me-4"
                type="button" @click="onSearchClick(queries)">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          <li class=" position-relative ">
            <input class="position-absolute start-50 opacity-0"
                type="checkbox" id="query-age" name="query-age" v-model="queries.adultContent">

            <label class="py-2 px-2" for="query-age">parental control

            </label>
          </li>

          <li class="py-2 px-2"> <i class="fa-solid fa-bell"></i></li>
          <li class="py-2 px-2">login</li>
        </ul>
      </form>
    </nav>
  </header>

</template>

<script>
/* import { store } from './store'; */

import CategoriesNav from './CategoriesNav.vue';
import { store } from '../store';

export default {
  components: { CategoriesNav },
  data() {
    return {
      store,
      queries: {
        text: "",
        adultContent: false
      }



    }
  },
  methods: {
    onSearchClick(userQueries) {
      this.$emit("fetchQueryResults", userQueries)
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss">
@use "../styles/partials/variables" as *;

header {
  height: 70px;



}
</style>
