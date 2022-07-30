<template>
	<svg aria-hidden="true" class="svgIcon" :style="{color}">
		<use :xlink:href="iconName"/>
	</svg>
</template>
<script setup lang="ts">
	const props = defineProps({
		iconClass: { type: String, required: true},
		color: { type: String, default: '#333333' }
	})

	const iconName = computed(() => `#icon-${props.iconClass}`);
</script>
<style scoped>
	.svgIcon {
		width: 24px;
		height: 24px;
		overflow: hidden;
	}
</style>
