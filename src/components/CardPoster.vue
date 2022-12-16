<template>
  <div class="poster-card w-100 h-100  position-absolute"
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
      const imgSize = "w342"
      if (this.movie.poster_path) {
        return `${rootUrl}${imgSize}${this.movie.poster_path}`
      } else {
        return `'./404.png'`
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.poster-card {
  box-shadow: 0px 0px 5px 2px inset rgba(7, 0, 1, 0.801);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backface-visibility: hidden;

}
</style>
