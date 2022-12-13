<template>
  <div></div>
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
*@param {integer} id //id =>ricerca
*@param {string} name
*@param {string} origin_country
*@param {string} original_language
*@param {string} original_name
*@param {string} overview // trama
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
