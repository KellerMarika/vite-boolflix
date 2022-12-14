<template>
  <ul class="flex-fill list-unstyled d-flex align-items-center">

    <!-- @click="(activeCategory === category.name || activeCategory === 'all')?  category.active = true:  category.active = false " -->

    <!-- true o false ok, ma essendo checkbox non deseleziona le altre -->
    <div class="d-flex p-5">
      <li class="list-group-item "
          v-for="category in store.categories">
        <label :for="category.name">{{ category.name }}
          <input type="checkbox" :id="category.name" name="category" v-model="category.active" />
        </label>
      </li>
    </div>

    <!-- applica "on" al checked, ma non applica "off" sulle altre radio (perchè?! è un radio!!!) -->
    <div class="d-flex p-5">
      <li class="list-group-item " v-for="category in store.categories">
        <label :for="category.name">{{ category.name }}
          <input type="radio" :id="category.name" name="category" v-model="category.active" />
        </label>
      </li>
    </div>

    <!-- try con funzione this$set non è una funzione -->
    <div class="d-flex p-5">
      <li class="list-group-item " v-for="category in store.categories">
        <label :for="category.name">{{ category.name }}
          <input type="radio" :id="category.name" name="category" :value="category.active"
              @change="onChange(id, $event)" />
        </label>
      </li>
    </div>

    <!-- try con watch -->
    <div class="d-flex p-5">
      <li class="list-group-item " v-for="category in store.categories">
        <label :for="category.name">{{ category.name }}
          <input type="radio" :id="category.name" name="category" :value="category.active"
              @change2="category.active = $event.target.checked" />
        </label>
      </li>
    </div>

    <!--  <label for="all"> all
      <input type="radio" id="all" name="category" value="all" v-model="activeCategory" checked>
    </label> -->

  </ul>
  <div>

  </div>
</template>

<script>
import { store } from '../store';

export default {
  /*   el:'CategoriesNav', */
  components: {},
  data() {
    return {
      store,
      /*   activeCategory: "all", */

    }
  },
  methods: {

    onChange(id, $event) {
      this.store.categories.forEach(category => {
        if (category.name === id) {
          this.$set(category, 'active', $event.target.checked);
        } else {
          this.$set(category, 'active', false)
        }
      })
    },
  },
  watch: {
    selected(selected) {
      this.store.categories.forEach((category, index) => {
        category.name == selected ? category.active = true : category.active = false;
      });
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>
