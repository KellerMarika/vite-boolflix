<template>

  <header>
    <nav class="container d-flex align-items-center">

      <div class="logo">
        <img src="#" alt="LOGO">
      </div>

      <CategoriesNav />

      <form action="" class="d-flex flex-fill" @submit.prevent="">

        <ul class="list-unstyled d-flex align-items-center">

          <li class="list-group-item">

            <label for="query-text">
              <input type="text" id="query-text" name="query-text" v-model="queries.text">
            </label>
          </li>
          <li>
            <button type="button" @click="onSearchClick(queries)">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          <li>
            <label for="query-age">parental control
              <input type="checkbox" id="query-age" name="query-age" v-model="queries.adultContent">
            </label>
          </li>

          <li> <i class="fa-solid fa-bell"></i></li>
          <li>login</li>
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
      queries:{
        text: "",
        adultContent:false
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

</style>
