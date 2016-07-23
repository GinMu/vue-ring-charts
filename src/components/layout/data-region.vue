<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example" id="region" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<span style="margin-right:5px;">文件日期:</span>
			<div class="btn-group">
				<input type="text" id="time" class="form-control" value={{currentTime}} onclick="WdatePicker({lang:'zh-cn'})" readonly="readonly" style="background-color: #fff;height:40px;">
			</div>
			<button class="btn btn-sm btn-primary" type="button" style="margin-left:40px;" @click="query()">查询</button>
		</div>
		<div class="charts-container">
		</div>
	</div>
</template>
<script>
	import vueResource from '../../vue-resource';
	import vueOperation from '../../vue-operation';
	export default {
		data() {
				return {
					route: 'region',
					currentTime: new Date(+new Date() - 16 * 3600 * 1000).toISOString().substring(0, 10),
					input: ''
				}
			},
			ready() {
				this.input = this.$el.querySelector('input');
				vueResource.requestMapsData(this);
			},
			methods: {
				query() {
					vueResource.requestMapsData(this);
				}
			}
	}
</script>
