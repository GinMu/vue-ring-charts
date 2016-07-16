<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example" id="percent" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<span style="margin-right:5px;">百分比类型：</span>
			<dropdown>
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="height:40px;">
                    <span id="percent-title" filename="devices_percent.log">设备数量百分比</span>
                    <span class="caret"></span>
                </button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu">
					<li v-for="item in items" @click="choose($index)" text={{item.itemName}} filename={{item.itemFile}}><a href="javascript:void(0)">{{item.itemName}}</a></li>
				</ul>
			</dropdown>
			<label class="checkbox-inline" style="margin-left:20px;">
               <input type="checkbox" id="percent-title-data-labels" value="data-labels" checked>数据标识
            </label>
		</div>
		<div class="charts-container">
		</div>
</template>
<script>
	import vueStrap from 'vue-strap';
	export default {
		data() {
				return {
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
					selected: 0
				}
			},
			methods: {
				choose(index) {
					this.selected = index;
				}
			},
			components: {
				'dropdown': vueStrap.dropdown
			}
	}
</script>