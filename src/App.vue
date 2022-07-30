<template>
  <router-view/>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
	body{
		margin: 0;
		padding: 0;
	}
	.xie_word1{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.xie_word2{
		overflow:hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	//禁止复制
	.noCopy {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		-khtml-user-select: none;
		user-select: none;
	}
	.pageBox{
		background-color: #fff;
		padding: 0 16px 16px;
	}
	.pageBtnLine{
		padding: 16px 0;
		display:flex;
	}
</style>
