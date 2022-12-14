<template>
  <ul class="flex-fill list-unstyled d-flex align-items-center">

    <!-- @click="(activeCategory === category.name || activeCategory === 'all')?  category.active = true:  category.active = false " -->
    <li class="list-group-item"
        v-for="category in store.categories">

      <label :for="category.name">{{ category.name }}
        <input type="checkbox" :id="category.name" name="category" v-model="category.active" />
      </label>

    </li>

    <li v-for="category in store.categories">
      <label :for="category.name">{{ category.name }}
        <input type="radio" :id="category.name" name="category" v-model="category.active" />
      </label>
    </li>


    <!--  <label for="all"> all
      <input type="radio" id="all" name="category" value="all" v-model="activeCategory" checked>
    </label> -->

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
      activeCategory: "all",
    }
  },
  methods: {

    toActiveCategory() {
      this.$emit("toActiveCategory", this.activeCategory)


    },




  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>
