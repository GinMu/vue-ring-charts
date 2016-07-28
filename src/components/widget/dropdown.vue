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
		props: {
			items: {
				type: Array
			},
			selected: {
				type: Number,
				default: 0
			}
		},
		methods: {
			choose(index) {
				if(this.selected === index) {
					return;
				}
				this.selected = index;
				this.$dispatch('dropdown-notify');
			}
		},
		components: {
			dropdown: vueStrap.dropdown
		}
	}
</script>
