<template>
<div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-3 col-md-2 sidebar">
				<ul class="nav nav-sidebar">
					<li v-for="tab in tabs" :class="{'active':$index===selected}" @click="choose($index)" type={{tab.tabType}}><a href="javascript:void(0)">{{tab.tabName}}</a></li>
				</ul>
			</div>
		</div>
	</div>
	<ring-main></ring-main>
</div>
</template>
<script>
import main from './data-num.vue'
	export default {
		data() {
				return {
					tabs: [{
						tabName: '数据数量',
						tabType: 'number'
					}, {
						tabName: '数据占比',
						tabType: 'percent'
					}, {
						tabName: '各省数据',
						tabType: 'region'
					}, {
						tabName: 'UUID查询',
						tabType: 'uuid'
					}],
					selected: 0
				}
			},
			methods: {
				choose(index) {
					this.selected = index;
				}
			},
			components:{
			"ring-main":main
			}
	}
</script>
