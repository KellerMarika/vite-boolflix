<template>
  <div class="info-card  w-100 h-100  position-absolute ">
    <h4 class="text-center">{{ getTitle }}</h4>
    <h5 v-if="getTitle !== getOriginalTitle">{{ getOriginalTitle }}</h5>
    <template v-else />
    <div class="try">
      <h6 class="text" @click="fetchMovieInfos">
        <span class="cast p-2">cast:</span>
      </h6>

      <h6 class="text" @click="fetchMovieInfos">
        <span class="lang">lingue disponibili:</span>
      </h6>

      <h6 class="text" @click="fetchMovieInfos">
        <span class="genres">generi:</span>
      </h6>
    </div>
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
import axios from "axios";
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
    fetchMovieInfos(e) {
      let rowInfosArray
      let infosList = []

      const rootApi_Url = 'https://api.themoviedb.org/3';
      const movieUrl = "/movie/"
      const api_key = 'd45a5c4b7707cf9506c7e8895615d73f';
      const movieId = this.movie.id

      axios.get(`${rootApi_Url}${movieUrl}${movieId}`, {
        params: {
          api_key: api_key,
          // append_to_response (string) Append requests within the same namespace to the response.
        }
      })
        .then((resp) => {

          if (e.target.classList.contains("lang")) {
            rowInfosArray = resp.data.spoken_languages

          } else if (e.target.classList.contains("cast")) {
            rowInfosArray = resp.data.production_companies
            //max 5 actors
            if (rowInfosArray.length > 5) { rowInfosArray.length = 5 }

          } else if (e.target.classList.contains("genres")) {
            rowInfosArray = resp.data.genres
          }
          rowInfosArray.forEach(info => {
            infosList.push(info.name)
          });
          e.target.closest('.text').append(infosList.toString())
        });
    }

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
    },


  },
  mounted() {
  }
}
</script>

<style lang="scss">
.info-card {
  // retro non trasparente 

  /* _________________________________________
  backface-visibility: hidden;
  background: rgb(122, 100, 156);
  // faccia in giu! 
  transform: rotateY(180deg);
 *___________________________________________/

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
