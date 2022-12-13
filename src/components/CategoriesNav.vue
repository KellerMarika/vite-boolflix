<template>

  <ul class="flex-fill list-unstyled d-flex align-items-center">
    <!-- v-for="catecory in categories" -->
    <li class="list-group-item"
        v-for="category in store.categories">
      <label :for="category.name">{{ category.name }}
        <input type="radio" :id="category.name" name="category" :value="category.name">
      </label>

    </li>
    <label> all
      <input type="radio" id="all" name="category" value="all">
    </label>
    <li>

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
      store
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
