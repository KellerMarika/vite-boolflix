
<template>

<TheHeader/>

<TheMain/>

</template>

<script>
import axios from "axios";
import { store } from './store';
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"

export default {
	components: {TheHeader,TheMain,},
	data() {
		return {
			store,
		}
	},
	methods: {
		/**FUNZIONE CREA ARRAY
		 * 
		 * @param {array} categoriesList 
		 * @param {string} text 
		 */
		fetchLists(categoriesList, text) {

			const baseApi_Url = 'https://api.themoviedb.org/3';
			const api_key = 'd45a5c4b7707cf9506c7e8895615d73f';

			//ciclo sulle categorie
			categoriesList.forEach((category, i) => {

				if (category.active) {
					axios.get(`${baseApi_Url}${category.url}`, {
						params: {
							api_key: api_key,
							query: text,
							//  page:integer Specify which page to query.
						}
					})
						.then((resp) => {
							/* array*/
							category.moviesList = resp.data.results
							console.log(category.name, category.moviesList)

						});
				}
			});
		}

	},
	mounted() {
		this.fetchLists(store.categories, store.queryText)
	}
}
</script>


<style lang="scss">
@use "./styles/generic.scss";
*{
	border:1px solid blue;
	padding: 5px 0
}
</style>
