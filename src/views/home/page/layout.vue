<template>
	<div class="layoutContainer" :class="{active:collapse}">
		<Menu />
		<Header />
		<div class="viewBox scrollBar">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Menu from '@/views/home/components/menu'
	import Header from '@/views/home/components/header'
	import { ref ,computed} from 'vue'
	import { useStore } from "vuex"
	const store = useStore();
	const collapse = computed(() => store.state.collapse);

</script>

<style lang="scss">
	.layoutContainer {
		padding: 60px 0 0 200px;
		transition: padding 0.3s;
		&.active{
			padding: 60px 0 0 65px;
			transition: padding 0.3s;
		}
		.viewBox {
			height: calc(100vh - 60px);
			padding: 16px;
			background-color: #f7f7f7;
			box-sizing: border-box;
		}
	}
</style>
