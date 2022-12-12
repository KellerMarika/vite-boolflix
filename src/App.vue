
<template>
</template>

<script>

import { store, getList} from './store';

export default {
	components: {},
	data() {
		return {
			store,
		}
	},
	methods: {
	},
	mounted(){
		getList()
	}
}
</script>


<style lang="scss">
@use "./styles/generic.scss";
</style>
