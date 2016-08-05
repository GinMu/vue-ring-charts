<template>
	<div>
		<smartcar-nav transition="fade" transition-mode="out-in"></smartcar-nav>
		<smartcar-sidebar transition="fade" transition-mode="out-in"></smartcar-sidebar>
	</div>
</template>
<script>
	import nav from './layout/nav';
	import sidebar from './layout/sidebar';
	export default {
		components: {
			'smartcar-nav': nav,
			'smartcar-sidebar': sidebar
		}
	}
</script>
