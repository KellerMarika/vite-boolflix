<template>
  <ul class="flex-fill list-unstyled d-flex align-items-center">

    <!-- GENDERS -->
    <!-- ciclo sulle categorie, creo un input per ogni categoria -->
    <li class="list-group-item " v-for=" gender in category.genresList">
      <label :for="gender">{{ gender }}
        <input type="checkbox" :id="gender" name="Genres" :value="gender" v-model="category.activeGenres"
            :checked="activeAll"
            @change="onChange(category.activeGenres, gender)" />
      </label>
    </li>

    <!-- ALL -->
    <li class="list-group-item">
      <label for="all"> all
        <input type="checkbox" id="all" name="activeAll" v-model="activeAll"
            @change="setAllGenresActive(category.activeGenres)" />
      </label>
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

      /*       this.$emit(genresToActivate) */
      if (this.activeAll === true) {

        this.activeAll = false
        genresToActivate.length = 0
        genresToActivate.push(gender)
      }

      console.log("tutti", this.activeAll)
      console.log("lista", this.category.genresList.length)
      console.log("filter", genresToActivate.length)
    },

    setAllGenresActive(genresToActivate) {
      this.activeIndividually = false

      if (this.activeAll === true) {
        genresToActivate = this.category.genresList
      } else {
        genresToActivate.length = 0
      }
      console.log("tutti", this.activeAll)
      console.log("lista", this.category.genresList.length)
      console.log("filter", genresToActivate.length)
    },
    onRefreshResetGendersFilterToAll() {
      this.store.categories.forEach(category => {
        category.activeGenres = category.genresList
      });

    },

  },

  mounted() {
    this.onRefreshResetGendersFilterToAll()
  }

}
</script>

<style lang="scss">

</style>
