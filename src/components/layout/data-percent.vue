<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example" id="percent" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<span style="margin-right:5px;">百分比类型：</span>
			<dropdown :items.once="items" :selected.sync="selected" @dropdown-notify="requestData"></dropdown>
			<label class="checkbox-inline" style="margin-left:20px;">
        <input type="checkbox" value="data-labels" v-model="dataLabels" @click="seriesUpdate | debounce 100">数据标识
      </label>
		</div>
		<div class="charts-container"></div>
	</div>
</template>
<script>
	import dropdown from '../reusable-components/dropdown';
	import vueResource from '../../vue-resource';
	import vueOperation from '../../vue-operation';
	export default {
		data() {
				return {
					route: 'chart',
					items: [{
						itemName: '设备数量百分比',
						itemFile: 'devices_percent.log'
					}, {
						itemName: '新增彩铃用户百分比',
						itemFile: 'new_vip_user_percent.log'
					}, {
						itemName: '点击设彩铃次数百分比',
						itemFile: 'tap_set_percent.log'
					}, {
						itemName: '短信获取次数百分比',
						itemFile: 'get_sms_percent.log'
					}],
					radios: [{
						type: "line"
					}],
					checked: 0,
					dataType: 'percent',
					selected: 0,
					dataLabels: true
				}
			},
			ready() {
				vueResource.requestChartsData(this);
			},
			methods: {
				requestData() {
					vueResource.requestChartsData(this);
				},
				seriesUpdate() {
					//this.dataLabels = !this.dataLabels;
					vueOperation.seriesUpdate(this.dataLabels);
				}
			},
			components: {
				dropdown
			}
	}
</script>
