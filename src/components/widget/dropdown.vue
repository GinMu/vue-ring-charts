<template>
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
</template>
<script>
	import vueStrap from 'vue-strap';
	export default {
  data() {
      return {
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
        selected: 0
      }
    },
    methods: {
      choose(index) {
        if(this.selected === index) {
          return;
        }
        this.selected = index;
      }
    },
		components: {
			dropdown: vueStrap.dropdown
		}
	}
</script>
