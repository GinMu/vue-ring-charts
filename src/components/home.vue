<template>
	<div>
		<ring-nav transition="fade" transition-mode="out-in"></ring-nav>
		<ring-sidebar transition="fade" transition-mode="out-in"></ring-sidebar>
	</div>
</template>
<script>
	import nav from './layout/nav.vue';
	import sidebar from './layout/sidebar.vue';
	export default {
		components: {
			'ring-nav': nav,
			'ring-sidebar': sidebar
		}
	}
</script>