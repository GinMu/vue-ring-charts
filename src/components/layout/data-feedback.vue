<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example" id="region" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<span>日志类型：</span>
			<dropdown :items.once="items" :selected.sync="selected"></dropdown>
			<span style="margin-right:5px;margin-left:20px;">文件日期:</span>
			<datepicker :value.sync="currentTime" :format="format" :show-reset-button="false">
			</datepicker>
			<button class="btn btn-sm btn-primary" type="button" style="margin-left:40px;" @click="query()">查询</button>
		</div>
		<div class="bs-example" data-example-id="simple-ol" style="width:50%;margin-left:25%;margin-top:20px;">
			<div v-for="data in datas">
				<span>电话号码：</span>
				<span v-text="data.tel"></span>
				<span style="margin-left:20px;">意见：</span>
				<span v-if="data.type === 13">{{data.message}}</span>
				<span v-else>{{unescape(data.word)}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import vueResource from '../../vue-resource';
	import dropdown from '../reusable-components/dropdown';
	import vueOperation from '../../vue-operation';
	import vueStrap from 'vue-strap';
	export default {
		data() {
				return {
					route: 'feedback',
					currentTime: new Date().toISOString().substring(0, 10),
					format: 'yyyy-MM-dd',
					items: [{
						itemName: '意见反馈',
						itemType: 12
					}, {
						itemName: '退订原因',
						itemType: 13
					}],
					selected: 0,
					datas: []
				}
			},
			ready() {
				vueResource.requestFeedback(this);
			},
			methods: {
				query() {
					vueResource.requestFeedback(this);
				}
			},
			components: {
				datepicker: vueStrap.datepicker,
				dropdown: dropdown
			}
	}
</script>
