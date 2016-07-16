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
					<li text="设备数量百分比" filename="devices_percent.log" type="percent-title"><a href="#">设备数量百分比</a></li>
					<li text="新增彩铃用户百分比" filename="new_vip_user_percent.log" type="percent-title"><a href="#">新增彩铃用户百分比</a></li>
					<li text="点击设彩铃次数百分比" filename="tap_set_percent.log" type="percent-title"><a href="#">点击设彩铃次数百分比</a></li>
					<li text="短信获取次数百分比" filename="get_sms_percent.log" type="percent-title"><a href="#">短信获取次数百分比</a></li>
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
		components: {
			'dropdown': vueStrap.dropdown
		}
	}
</script>