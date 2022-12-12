import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

  baseApi_Url: 'https://api.themoviedb.org/3',
  api_key: 'd45a5c4b7707cf9506c7e8895615d73f',

  //parametri utente
  queryText: "up",
  queryId: null,
  page: null,

  categories: [
    {
      name: "movie",
      url: "/search/movie",
      active: true,/* ____________________________v:model radio button */
    },
    {
      name: "tv",
      url: "/search/tv",
      active: true,
    }
  ],

  language: "it-"
});

/* funzione crea array */
export function getList() {

  //ciclo sulle categorie
  store.categories.forEach((category, i) => {

     if (category.active) {
      axios.get(`${store.baseApi_Url}${category.url}`, {
        params: {
          api_key: store.api_key,
          query: store.queryText,
          //  page:integer Specify which page to query.
        }
      })
        .then((resp) => {
          /* array*/
          console.log(resp.data.results)
        });

    }



  });


}


