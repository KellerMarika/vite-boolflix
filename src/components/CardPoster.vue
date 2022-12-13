<template>
  <div>
    <h4>{{ movie.name ? movie.name : movie.title }}</h4>
    <h5>{{ movie.original_name ? movie.original_name : movie.original_title }}</h5>
    <h6>{{ movie.original_language }}</h6>

    <div class="d-flex">
      <i v-for="index in 5"
      class="fa-star" :class="index <= Math.ceil(movie.vote_average / 2)? 'fa' : 'fa-regular' "></i>
    </div>

  </div>
</template>

<script>
/* import { store } from './store'; */

export default {
  components: {},
  props: {

/**movie:
*@param {string|null} backdrop_path
*@param {string} first_air_date 
*@param {string} genre_ids
*@param {integer} id 
*@param {string} name|title
*@param {string} origin_country
*@param {string} original_language
*@param {string} original_name|original_title
*@param {string} overview 
*@param {integer} popularity
*@param {string} poster_path
*@param {integer} vote_average
*@param {integer} vote_count

 */    movie: {
      type: Object,
      reqired: true,
    }
  },
  data() {
    return {

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
