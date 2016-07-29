<style scoped>
	.input-reset {
		position: relative;
		display: inline-block;
	}

	input.with-reset-button {
		padding-right: 25px;
    min-width:350px;
	}

	div.input-reset> button.close {
		position: absolute;
		top: calc(50% - 13px);
		right: 10px;
		outline: none;
		z-index: 2;
	}

	div.input-reset> button.close:focus {
		opacity: .2;
	}
</style>
<template>
	<div class="input-reset">
		<input class="form-control with-reset-button" v-model="value" type="text">
		<button type="button" class="close" @click="clearValue" v-if="!value? ok:!ok"><span>&times;</span></button>
	</div>
</template>
<script>
	export default {
		props: {
			value: {
				type: String,
				default: ''
			}
		},
		methods: {
			clearValue() {
				this.value = '';
			}
		}
	}
</script>
