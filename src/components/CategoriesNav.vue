<template>
  <ul class="flex-fill list-unstyled d-flex align-items-center">


    <!-- try con funzione this$set non è una funzione -->
    <div class="d-flex p-5">
      <li class="list-group-item " v-for="category in store.categories">
        <label :for="category.name">{{ category.name }}
          <input type="radio" :id="category.name" name="category" :value="category.active"
              @change="onChange(category.name, $event)" />
        </label>
      </li>
    </div>
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
    onChange(categoryName, $event) {
      console.log("categoryName passed", categoryName);

      this.store.categories.forEach(category => {
        if (category.name === categoryName) {
          Vue.set(category, 'active', $event.target.checked);
        } else {
          Vue.set(category, 'active', false)
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
