
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
		/**FUNZIONE CREA ARRAY DEI FILM PER CIASCUNA CATEGORIA IN STORE.ATEGORIES
		 * 
		 * @param {array} categoriesList 
		 * @param {string} text 
		 */
		fetchLists(categoriesList, queries) {

			if (queries.text) {
				//ciclo sulle categorie
				categoriesList.forEach((category, i) => {

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
							/* array*/
							/* 	category.moviesList = resp.data.results */

							category.list = (resp.data.results)
							console.log(category.name, category.list)
						});
				});
			}
		},

		
		fetchGenresList(){
		//ciclo sulle categorie
		categoriesList.forEach((category, i) => {

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
		/* array*/
		/* 	category.moviesList = resp.data.results */

		category.list = (resp.data.results)
		console.log(category.name, category.list)
	});
});
			
		}


		},
		mounted() {
			this.fetchLists(store.categories, store.queries)
		},
		created(){
		
		}
	}
</script>


<style lang="scss">
@use "./styles/generic.scss";

* {
	border: 1px solid blue;
}
</style>
