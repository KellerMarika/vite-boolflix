
<template>

	<TheHeader @fetchQueryResults="onSearchClick" />

	<TheMain />

</template>

<script>
import axios from "axios";
import { store } from './store';
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"

export default {
	components: { TheHeader, TheMain, },
	data() {
		return {
			store,
		}
	},
	methods: {
		onSearchClick(userQueries) {
			this.store.queries.text = userQueries.text
			this.store.queries.aduntContent = userQueries.aduntContent
			this.fetchLists(store.categories, store.queries)
		},

		/**FUNZIONE CREA ARRAY DEI FILM PER CIASCUNA CATEGORIA IN STORE.CATEGORIES
		 * 
		 * 
		 * 
		 * @param {array} categoriesList 
		 * @param {string} text 
		 */

		fetchLists(categoriesList, queries) {
			if (queries.text) {

				//ciclo sulle categorie
				categoriesList.forEach((category) => {

					category.genresList=[],

					/* axios call 1  liste film*/
					axios.get(`${this.store.rootApi_Url}${category.url}`, {
						params: {
							language: this.store.language,
							api_key: this.store.api_key,
							query: queries.text,
							include_adult: queries.aduntContent
							//  page:integer Specify which page to query.
						}
					})
						.then((resp) => {

							category.list = (resp.data.results)
							console.log(category.name, category.list)
						});

					/* axios call 2 liste genere*/
					this.fetchGenresList(category)
				});
			}
		},

		fetchGenresList(category) {
			let rowgenresArray = []
			

			axios.get(`${this.store.rootApi_Url}${category.genresUrl}`, {
				params: {
					language: this.store.language,
					api_key: this.store.api_key,
				}
			})
				.then((resp) => {
					rowgenresArray = resp.data.genres

					//ciclo in then (TO FIX) 
					rowgenresArray.forEach(gender => {
						category.genresList.push(gender.name);
			
					})
				});
		},
	},
	mounted() {
		this.fetchLists(store.categories, store.queries)

	},
	created() {

	}
}
</script>


<style lang="scss">
@use "./styles/generic.scss";

* {
	border: 1px solid blue;
}
</style>
