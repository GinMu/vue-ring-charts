<template>
	<div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3 col-md-2 sidebar">
					<ul class="nav nav-sidebar">
						<li v-for="tab in tabs" :class="{'active':$index===selected}" @click="choose($index)">
							<a href="javascript:void(0)">{{tab.tabName}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ring-main :is="currentView" transition="fade" transition-mode="out-in"></ring-main>
	</div>
</template>
<script>
	import dataNum from './data-num';
	import dataPercent from './data-percent';
	import dataRegion from './data-region';
	import dataUuid from './data-uuid';
	export default {
		data() {
				return {
					tabs: [{
						tabName: '数据数量'
					}, {
						tabName: '数据占比'
					}, {
						tabName: '各省数据'
					}, {
						tabName: 'UUID查询'
					}],
					selected: 0,
					currentView: 'view_0'
				}
			},
			methods: {
				choose(index) {
					this.selected = index;
					this.currentView = 'view_' + index;
				}
			},
			components: {
				"view_0": dataNum,
				"view_1": dataPercent,
				"view_2": dataRegion,
				"view_3": dataUuid,
			}
	}
</script>