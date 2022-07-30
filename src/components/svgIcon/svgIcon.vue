<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{width,height,color}">
    <use :href="svgName"></use>
  </svg>
</template>

<script setup>
import {computed} from "vue";
const props = defineProps({
  //图标名称 如 home
  iconName: {
    type: String,
    default: ""
  },
  //对不同区域的 icon 样式调整，如字体大小
  className: {
    type: String,
    default: ""
  },
  width: {
    type: Number,
    default: 16
  },
  height: {
    type: Number,
    default: 16
  },
  color: {
    type: String,
    default: "#888"
  }
})

const svgName=computed(()=>`#icon-${props.iconName}`);
const svgClass=computed(()=>{
  if(props.name){
    return `svg-icon icon-${props.iconName}`
  }
  return `svg-icon`
})
</script>

<style>
.svg-icon {
  width: 16px;
  height: 16px;
  vertical-align: -0.15em;
  fill: currentColor; /*此属性为更改svg颜色属性设置*/
  stroke: currentColor;
  overflow: hidden;
  margin-right: 8px;
}
</style>
