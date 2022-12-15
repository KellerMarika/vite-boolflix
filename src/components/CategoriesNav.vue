<template>
  <ul class="flex-fill list-unstyled d-flex align-items-center">
    <!-- ciclo sulle categorie, creo un input per ogni categoria -->
    <li class="list-group-item " v-for="category in store.categories">
      <label :for="category.name">{{ category.name }}
        <input type="radio" :id="category.name" name="category" :value="category.name" v-model="activeCategory"
            @change="onChange(activeCategory)" />
        <!-- funzione a cui passo l'elelmento cliccato e il nome della categoria -->
      </label>
    </li>

    <!-- più  l'opzione all. -->
    <li class="list-group-item">
      <label for="all"> all
        <input type="radio" id="all" name="category" value="all" v-model="activeCategory" checked
            @change="onChange(activeCategory)" />
     <!-- funzione a cui passo l'elelmento cliccato e il soggetto del v-model -->
      </label>
    </li>
  </ul>
  <div>

  </div>
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
      console.log("categoryToActivate passed", categoryToActivate);

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
