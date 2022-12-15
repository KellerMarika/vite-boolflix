<template>
  <div class="poster-card w-100 h-100"
      @mouseover="showCardInfos? showCardInfos=false: showCardInfos=true"
      :style="`background-image: url(${getMovieImgSrc})`">
  </div>
</template>

<script>

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
  computed: {

    getMovieImgSrc() {
      const rootUrl = "https://image.tmdb.org/t/p/"
      const imgSize = "w300"
      return `${rootUrl}${imgSize}${this.movie.poster_path}`
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.poster-card {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
