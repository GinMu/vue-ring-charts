<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example shown" id="number" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<span style="margin-right:5px;">日志类型：</span>
			<dropdown :items.once="items" :selected.sync="selected" @dropdown-notify="requestData"></dropdown>
			<label class="radio-inline" style="margin-left:20px;" v-for="radio in radios">
			    <input type="radio" name="inlineRadioOptions" checked={{radio.radioChecked}} @click="updateType($index)">{{radio.radioName}}
			</label>
			<label class="checkbox-inline" style="margin-left:20px;">
          <input type="checkbox" value="数据标识" checked={{dataLabels}} @click="seriesUpdate()">数据标识
      </label>
		</div>
		<div class="charts-container"></div>
	</div>
</template>
<script>
	import dropdown from '../widget/dropdown';
	import vueResource from '../../vue-resource';
	import vueOperation from '../../vue-operation';
	export default {
		data() {
				return {
					route: 'chart',
					dataType: 'number',
					items: [{
						itemName: '设备数量',
						itemFile: 'devices.log'
					}, {
						itemName: '新增彩铃用户',
						itemFile: 'new_vip_user.log'
					}, {
						itemName: '彩铃设置次数',
						itemFile: 'ring_set.log'
					}, {
						itemName: '点击设彩铃次数',
						itemFile: 'tap_set.log'
					}, {
						itemName: '短信获取次数',
						itemFile: 'get_sms.log'
					}, {
						itemName: '我的点击次数',
						itemFile: 'my_click.log'
					}, {
						itemName: '推荐点击次数',
						itemFile: 'recommend_click.log'
					}, {
						itemName: '苹果铃声点击次数',
						itemFile: 'apple_click.log'
					}, {
						itemName: '专题点击次数',
						itemFile: 'topic_click.log'
					}, {
						itemName: '酷音铃声点击次数',
						itemFile: 'kuyin_click.log'
					}, {
						itemName: '躺倒鸭点击次数',
						itemFile: 'course_click.log'
					}],
					radios: [{
						radioName: "折线图",
						radioChecked: true,
						type: "line"
					}, {
						radioName: "柱状图",
						radioChecked: false,
						type: "column"
					}],
					selected: 0,
					checked: 0,
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
					this.dataLabels = !this.dataLabels;
					vueOperation.seriesUpdate(this.dataLabels);
				},
				updateType(index) {
					this.checked = index;
					vueOperation.updateType(this.radios[this.checked].type);
				}
			},
			components: {
				dropdown
			}
	}
</script>
