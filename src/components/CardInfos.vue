<template>
  <div class="info-card  w-100 h-100 position-absolute d-flex flex-column p-4"
      :class="(isHovering) ? 'overflow-auto' : ''">

    <!-- titles -->
    <div class="hgroup text-center">
      <h3 class="title text-uppercase">{{ getTitle ? getTitle : "nessun titolo trovato" }}</h3>

      <h4 class="subtitle m-0"
          v-if="getTitle !== getOriginalTitle">( {{ getOriginalTitle }} )</h4>
      <template v-else />
    </div>
    <i class="fs-5 my-2 fi  align-self-center" :class="`fi-${getFlag}`"></i>
    <div class="infos-container flex-fill">
      <p class="text" @click="fetchMovieInfos">
        <i class=" cast">cast: </i><br>
      </p>

      <p class="text" @click="fetchMovieInfos">
        <i class=" lang">lingue disponibili: </i><br>
      </p>

      <p class="text" @click="fetchMovieInfos">
        <i class=" genres">generi: </i><br>
      </p>

      <!-- overview -->
      <div
          @mouseover="isHovering = true"
          @mouseout="isHovering = false"
          :class="(isHovering) ? 'overflow-auto' : 'text-truncate-container'">

        <p class="text"> <i class=" overview">Trama:</i><br>
          {{ movie.overview }}</p>
      </div>
    </div>

    <!-- vote -->
    <div class="vote-container d-flex fs-5">
      <i v-for="index in 5"
          class=" fa-star" :class="index <= getVote ? 'fa' : 'fa-regular'"></i>
    </div>


    <!--    <div>{{ movie.genre_ids }}</div> -->
  </div>

</template>

<script>
import axios from "axios";
import { store } from "../store"
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
      store,
      isHovering: false

    }
  },
  methods: {
    fetchMovieInfos(e) {
      let rowInfosArray
      let infosList = []

      const movieUrl = "/movie/"

      const movieId = this.movie.id

      axios.get(`${this.store.rootApi_Url}${movieUrl}${movieId}`, {
        params: {
          api_key: this.store.api_key,

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
      return Title.toLowerCase()
    },
    getOriginalTitle() {
      let originalTitle = this.movie.original_name ?? this.movie.original_title
      return originalTitle.toLowerCase()
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
@use "../styles/partials/variables" as *;

.info-card {
  // retro non trasparente 
  background-color: rgb(23, 23, 24);
  border: 1px solid rgb(0, 0, 0);
  box-shadow: 0px 0px 4px 1px inset rgba(7, 0, 1, 0.801);

  backface-visibility: hidden;

  // faccia in giu! 
  transform: rotateY(180deg);

  //titles
  .hgroup {
    flex-basis: 100px;
    flex-shrink: 0;
  }

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

  /* card-footer */
  .vote-container {
    .fa-star {
      color: $secondary_color
    }
  }


}
</style>
