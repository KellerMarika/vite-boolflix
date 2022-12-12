import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

  //parametri utente
  queryText: "up",
  queryId: null,
  page: null,

  categories: [
    {
      name: "movie",
      url: "/search/movie",
      active: true,/* ____________________________v:model radio button */
      include_adult: true,
      moviesList:[]

    },
    {
      name: "tv",
      url: "/search/tv",
      active: false,
      include_adult: true,
    },
  ],

  language: "it-"
});
