<template>

  <ul class="flex-fill list-unstyled d-flex align-items-center ms-4">

    <!-- ciclo sulle categorie, creo un input per ogni categoria -->
    <li class="list-group-item position-relative"
        v-for="category in store.categories">

      <input class="position-absolute start-50 opacity-0"
          type="radio" :id="category.name" name="category" :value="category.name" v-model="activeCategory"
          @change="onChange(activeCategory)" />

      <label class="fs-4 text-uppercase px-3 "
          :for="category.name">
        {{ category.name }}
      </label>

      <!-- funzione a cui passo l'elelmento cliccato e il nome della categoria -->

    </li>

    <!-- più  l'opzione all. -->
    <li class="list-group-item position-relative">

      <input class="position-absolute start-50 opacity-0"
          type="radio" id="all" name="category" value="all" v-model="activeCategory" checked
          @change="onChange(activeCategory)" />

      <label class="fs-4 text-uppercase px-3" for="all"> all
      </label>
     
      <!-- funzione a cui passo l'elelmento cliccato e il soggetto del v-model -->

    </li>
  </ul>

</template>

<script>
import { store } from '../store';

export default {

  components: {},
  data() {
    return {
      store,
      activeCategory: "all",

    }
  },
  methods: {
    onChange(categoryToActivate) {
      
        this.store.categories.forEach(category => {
        if (category.name === categoryToActivate || categoryToActivate === "all") {
          category.active = true
        } else {
          category.active = false
        }
      })
    },

  },

  mounted() {
  }
}
</script>

<style lang="scss">

</style>
