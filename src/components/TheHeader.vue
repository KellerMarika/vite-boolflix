<template>

  <header>
    <nav class="container d-flex align-items-center">

      <div class="logo">
        <img src="#" alt="LOGO">
      </div>

      <CategoriesNav @setActiveCategory="setActiveCategory" />

      <form action="" class="d-flex flex-fill" @submit.prevent="">

        <ul class="list-unstyled d-flex align-items-center">

          <li class="list-group-item">

            <label for="query-text">
              <input type="text" id="query-text" name="query-text" v-model="text">
            </label>
          </li>
          <li>
            <button type="button" @click="assign()">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          <li>bambini</li>

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
      text: "",
      aaaCategory: "",

    }
  },
  methods:
  {
    setActiveCategory(category) {
      this.aaaCategory=category


    },
    fetchQueriesResults(text) {
      console.log("mi sa che ci vuole un emit!")
      /*  this.$emit(funzione,argomento) */
    },
    assign() {
      this.store.queryText = this.text
    },

    mounted() {
    },
  }
}
</script>

<style lang="scss">

</style>
