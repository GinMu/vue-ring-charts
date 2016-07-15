<template>
	<div>
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<span class="navbar-brand">{{brandName}}</span>
				</div>
			</div>
		</nav>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3 col-md-2 sidebar">
					<ring-item transition="fade" transition-mode="out-in"></ring-item>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import nav from './layout/nav.vue';
	export default {
		data() {
				return {
					brandName: '铃声大全日志数据'
				}
			},
			components: {
				'ring-item': nav
			}
	}
</script>
