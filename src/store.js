import { reactive } from "vue";

export const store = reactive({

  //parametri utente
  queries: {
    text: "up",
    aduntContent: "false"
  },
  rootApi_Url: 'https://api.themoviedb.org/3',
  api_key: 'd45a5c4b7707cf9506c7e8895615d73f',
  queryId: null,
  page: null,

  categories: [
    {
      name: "movie",
      url: "/search/movie",
      active: true,
      include_adult: true,
      list: [],
      genresUrl:"/genre/movie/list",
      genresList:[],
      activeGenres: [],
    },
    {
      name: "tv",
      url: "/search/tv", 
      active: true,
      include_adult: true,
      list: [],
      genresUrl:"/genre/tv/list",
      genresList:[],
      activeGenres: []
    },
  ],

  language: "it-"
});
