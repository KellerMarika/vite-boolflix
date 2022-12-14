<template>
  <ul class="flex-fill list-unstyled d-flex align-items-center">


    <li class="list-group-item"
        v-for="category in store.categories"
        @change="activeCategory === category.name ? category.active = true : category.active = false">
      <label :for="category.name">{{ category.name }}
        <input type="radio" :id="category.name" name="category" :value="category.name" v-model="activeCategory" />
      </label>

      <!--   </li>
    <label for="all"> all
      <input type="radio" id="all" name="category" value="all" v-model="activeCategory" checked>
    </label>
    <li> -->

    </li>

  </ul>
  <div>

  </div>
</template>

<script>
/* import { all } from 'axios'; */
import { all } from 'axios';
import { store } from '../store';

export default {
  components: {},
  data() {
    return {
      store,
      activeCategory: "movie",
      activeCategorie: "",
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
