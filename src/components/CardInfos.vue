<template>
  <div class="info-card  w-100 h-100  position-absolute">
    <h4>{{ getTitle }}</h4>
    <h5 v-if="getTitle !== getOriginalTitle">{{ getOriginalTitle }}</h5>
    <template v-else />

    <div
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
        :class="(isHovering) ? 'overflow-auto' : 'text-truncate-container'">

      <p class="overview">
        {{ movie.overview }}</p>
    </div>

    <i class="fi" :class="`fi-${getFlag}`"></i>
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
      isHovering: false

    }
  },
  methods: {
  },
  computed: {

    getTitle() {
      let Title = this.movie.name ?? this.movie.title
      return Title
    },
    getOriginalTitle() {
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
    },

    getFlag() {
      let movieFlag
      if (this.movie.original_language === "en") {
        movieFlag = "gb"
      } else if (this.movie.original_language === "ja") {
        movieFlag = "jp"
      } else {
        movieFlag = this.movie.original_language
      }

      return movieFlag
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.info-card {
  /* retro non trasparente */
  backface-visibility: hidden;
  background: rgb(122, 100, 156);
  /* faccia in giu! */
  transform: rotateY(180deg);


  /* overview */
  .text-truncate-container {
    width: 250px;


    p {
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .text-truncate-container:hover {
      overflow: auto;
    }
  }
}
</style>
