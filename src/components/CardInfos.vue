<template>
  <div class="info-card">
    <h4>{{getTitle}}</h4>
    <h5>{{ getOriginalTitle}}</h5>
    <h6>{{ movie.original_language }}</h6>
    <div class="d-flex">
      <i v-for="index in 5"
          class="fa-star" :class="index <= getVote ? 'fa' : 'fa-regular'"></i>
    </div>
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

    getTitle(){
      let Title = this.movie.name ?? this.movie.title
      return Title
    },
    getOriginalTitle(){
      let originalTitle = this.movie.original_name ?? this.movie.original_title
      return originalTitle
    },

    getMovieImgSrc() {
      const rootUrl = "https://image.tmdb.org/t/p/"
      const imgSize = "w300"
      return `${rootUrl}${imgSize}${this.movie.poster_path}`
    },
    getVote() {
      return Math.ceil(this.movie.vote_average / 2)
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>
