<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<form class="form-inline">
				<div class="form-group">
					<span style="margin-right:5px;">文件日期:</span>
					<datepicker :value.sync="currentTime" :format="format" :show-reset-button="false" :width="width">
					</datepicker>
				</div>
				<div class="form-group">
					<span style="margin-right:5px;">前一天:</span>
					<datepicker :value.sync="lastTime" :format="format" :show-reset-button="false" :width="width">
					</datepicker>
				</div>
				<div class="form-group">
					<span style="margin-right:5px;margin-left:10px;">搜索关键词:</span>
					<inputreset :value.sync="keyword" @keyup.enter="query"></inputreset>
				</div>
				<button class="btn btn-sm btn-primary" type="button" style="margin-left:40px;" @click="query()">查询</button>
			</form>
			<div style="margin-top:20px;" v-show="success">
        <span>{{currentTime}}搜索{{keyword}}关键词的不同设备数量:</span>
        <span>{{total}}</span>
      </div>
      <div style="margin-top:10px;" v-show="success">
        <span>和{{lastTime}}相比，根据{{keyword}}关键词新增的设备数量:</span>
        <span>{{num}}</span>
      </div>
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
	import vueStrap from 'vue-strap';
	import inputReset from '../reusable-components/input-with-reset';
	export default {
		data() {
				return {
					route: 'device',
					currentTime: new Date(+new Date() - 24 * 3600 * 1000).toISOString().substring(0, 10),
					lastTime: new Date(+new Date() - 48 * 3600 * 1000).toISOString().substring(0, 10),
					keyword: '',
					width: '120px',
					ol: '',
          num: 0,
					format: 'yyyy-MM-dd',
					success: false,
					total: -1
				}
			},
			methods: {
				query() {
          vueResource.requestKeyWord(this);
				}
			},
			components: {
				datepicker: vueStrap.datepicker,
				inputreset: inputReset
			}
	}
</script>
