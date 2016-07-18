<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example shown" id="number" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<span style="margin-right:5px;">日志类型：</span>
			<dropdown>
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="height:40px;">
                     <span>{{items[selected].itemName}}</span>
                     <span class="caret"></span>
                </button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu">
					<li v-for="item in items" @click="choose($index)">
						<a href="javascript:void(0)">{{item.itemName}}</a>
					</li>
				</ul>
			</dropdown>
			<label class="radio-inline" style="margin-left:20px;">
                <input type="radio" name="inlineRadioOptions" id="line" value="line" checked> 折线图
            </label>
			<label class="radio-inline">
               <input type="radio" name="inlineRadioOptions" id="column" value="column"> 柱状图
            </label>
			<label class="checkbox-inline" style="margin-left:20px;">
               <input type="checkbox" id="number-title-data-labels" value="data-labels" checked>数据标识
             </label>
		</div>
		<div class="charts-container"></div>
	</div>
</template>
<script>
	import vueStrap from 'vue-strap';
	import vueResource from '../../vue-resource.js';
	export default {
		data() {
				return {
					el: '.charts-container',
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
					selected: 0
				}
			},
			ready() {
				vueResource.ajax(this);
			},
			methods: {
				choose(index) {
					if(this.selected === index) {
						return;
					}
					this.selected = index;
					vueResource.ajax(this);
				}
			},
			components: {
				'dropdown': vueStrap.dropdown
			}
	}
</script>