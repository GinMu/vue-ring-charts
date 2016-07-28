<template>
  <label class="radio-inline" style="margin-left:20px;" v-for="radio in radios">
      <input type="radio" name="inlineRadioOptions" checked={{radio.radioChecked}} @click="choose($index)">{{radio.radioName}}
  </label>
</template>
<script>
export default{
  props:{
    radios:{
      type:Array
    },
    checked:{
      type:Number,
      default:0
    }
  },
  methods: {
    choose(index) {
      this.checked = index;
      this.$dispatch('radio-notify');
    }
  }
}
</script>
