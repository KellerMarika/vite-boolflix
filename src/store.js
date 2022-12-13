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
      active: true,
      include_adult: true,
      list: []
    },
    {
      name: "tv",
      url: "/search/tv",
      active: true,
      include_adult: true,
      list: []
    },
  ],

  language: "it-"
});
