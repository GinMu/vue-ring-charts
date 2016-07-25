<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<form class="form-inline">
				<div class="form-group">
					<span style="margin-right:5px;">文件日期:</span>
					<input type="text" class="form-control" v-model="currentTime" onclick="WdatePicker({lang:'zh-cn'})" readonly="readonly" style="background-color: #fff;">
				</div>
				<div class="form-group">
					<span style="margin-right:5px;margin-left:10px;">UUID:</span>
					<input type="input" class="form-control" name="name" v-model="uuid" style="min-width:350px;">
					<div class="glyphicon glyphicon-remove" style="cursor:pointer;" @click="clearUUID()"></div>
				</div>
				<button class="btn btn-sm btn-primary" type="button" style="margin-left:40px;" @click="query()">查询</button>
			</form>
			<div class="bs-example" data-example-id="simple-ol" style="width:50%;margin-left:25%;margin-top:20px;">
				<ol id="ol_list">
					{{{ol}}}
				</ol>
			</div>
		</div>
	</div>
</template>
<script>
	import vueResource from '../../vue-resource';
	import vueOperation from '../../vue-operation';
	export default {
		data() {
				return {
					route: 'search',
					currentTime: new Date(+new Date() - 16 * 3600 * 1000).toISOString().substring(0, 10),
					uuid: '',
					ol: ''
				}
			},
			methods: {
				query() {
					vueResource.requestUUIDData(this);
				},
				clearUUID() {
					this.uuid = '';
				}
			}
	}
</script>