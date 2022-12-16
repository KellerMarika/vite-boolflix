<template>

  <ul class="flex-fill list-unstyled d-flex flex-wrap align-items-center justify-content-between pe-3">
    <!-- GENDERS -->
    <!-- ciclo sulle categorie, creo un input per ogni categoria -->

    <li class="list-group-item position-relative"
        v-for=" gender in category.genresList">

      <input class=" position-absolute start-50 opacity-0 "
          type="checkbox" :id="gender.name" name="Genres" :value="gender" v-model="category.activeGenres"
          @change="onChange(category.activeGenres, gender)" />

      <label class="px-3 py-1"
          :for="gender.name">{{ gender.name }}</label>
    </li>

    <!-- ALL -->
    <li class="list-group-item position-relative">

      <input class=" position-absolute opacity-0 "
          type="checkbox" id="all" name="activeAll" v-model="activeAll"
          @change="setAllGenresActive(category.activeGenres)" />

      <label for="all" class="px-3 py-1 text-capitalize"> all</label>
    </li>
  </ul>
  <div>

  </div>
</template>

<script>
import { store } from '../store';

export default {
  props: {
    /**
      *@param {string} name
      *@param {string} url
      *@param {boolean} active
      *@param {boolean} include_adult
      *@param {array} list    
      *@param {array} genresLists  
      */
    category: {
      required: true,
      type: Object
    }
  },
  components: {},
  data() {
    return {
      store,
      activeAll: true,
    }
  },
  methods: {
    
onChange(genresToActivate, gender) {

  this.$emit("fetchGenresResults", genresToActivate, gender)

      if (this.activeAll === true) {

        this.activeAll = false
        genresToActivate.length = 0
        genresToActivate.push(gender)
      }
      console.log(this.category.genresList)
      console.log(genresToActivate)
      console.log("tutti?:", this.activeAll)
      console.log("lista originale:", this.category.genresList.length)
      console.log("filter:", genresToActivate.length)
    },

    setAllGenresActive(genresToActivate) {

      if (this.activeAll === true) {
        genresToActivate = this.category.genresList
      } else {
        genresToActivate.length = 0
      }
      console.log("tutti", this.activeAll)
      console.log("lista", this.category.genresList.length)
      console.log("filter", genresToActivate.length)
    },



  },

  mounted() {
    /* this.onRefreshResetGendersFilterToAll() */
  }

}
</script>

<style lang="scss">
#all {
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%) scale(150%);

}
</style>
