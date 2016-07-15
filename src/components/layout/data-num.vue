<template>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
		<div class="bs-example shown" id="number" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
			<span style="margin-right:5px;">日志类型：</span>
			<div class="btn-group">
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="height:40px;">
                     <span id="number-title" filename="devices.log">设备数量</span>
                     <span class="caret"></span>
                </button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu">
					<li text="设备数量" filename="devices.log" type="number-title"><a href="#">设备数量</a></li>
					<li text="新增彩铃用户" filename="new_vip_user.log" type="number-title"><a href="#">新增彩铃用户</a></li>
					<li text="彩铃设置次数" filename="ring_set.log" type="number-title"><a href="#">彩铃设置次数</a></li>
					<li text="点击设彩铃次数" filename="tap_set.log" type="number-title"><a href="#">点击设彩铃次数</a></li>
					<li text="短信获取次数" filename="get_sms.log" type="number-title"><a href="#">短信获取次数</a></li>
					<li text="我的点击次数" filename="my_click.log" type="number-title"><a href="#">我的点击次数</a></li>
					<li text="推荐点击次数" filename="recommend_click.log" type="number-title"><a href="#">推荐点击次数</a></li>
					<li text="苹果铃声点击次数" filename="apple_click.log" type="number-title"><a href="#">苹果铃声点击次数</a></li>
					<li text="专题点击次数" filename="topic_click.log" type="number-title"><a href="#">专题点击次数</a></li>
					<li text="酷音铃声点击次数" filename="kuyin_click.log" type="number-title"><a href="#">酷音铃声点击次数</a></li>
					<li text="躺倒鸭点击次数" filename="course_click.log" type="number-title"><a href="#">躺倒鸭点击次数</a></li>
				</ul>
			</div>
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
		<div class="charts-container">
	<div>
</template>