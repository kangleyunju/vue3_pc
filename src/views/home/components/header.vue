<template>
	<div class="headerContainer noCopy" :class="{active:collapse,black:night}">
		<div class="left">
			<el-icon :size="20" @click="collapse=!collapse" :class="{active:collapse}">
				<Fold />
			</el-icon>
		</div>
		<div class="right">
			<div class="circle xzw_center" :class="{dark:night}" @click="night=!night">
				<svg-icon iconClass="sun" v-if="!night"/>
				<svg-icon iconClass="moon" v-if="night"/>
			</div>
			<el-dropdown @command="handleCommand" popper-class="userBox">
				<div class="userBox">
					<svg-icon iconClass="face"/>
					<div class="xie_word1">{{user.name}}</div>
					<el-icon>
						<arrow-down />
					</el-icon>
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="1">个人中心</el-dropdown-item>
						<el-dropdown-item command="2">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>
<script lang="ts" setup>
	import { ElMessage } from 'element-plus'
	import { Moon, Sunny } from '@element-plus/icons-vue'
	import { storeToRefs } from "pinia"
	import { useStore } from '@/store'
	
	const store = useStore()
	const { collapse, night} = storeToRefs(store);

	let user = ref({
		name: '古天乐'
	})
	const handleCommand = (e) => {
		ElMessage(e)
		if(e==1){
			
		}else{
			
		}
	}
</script>
<style lang="scss">
	.headerContainer {
		height: 60px;
		position: fixed;
		z-index: 10;
		left: 200px;
		right: 0;
		top: 0;
		background-color: #fff;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		transition:left 0.3s, background-color var(--el-transition-duration), color var(--el-transition-duration);
		&.black{
			transition:left 0.3s, background-color var(--el-transition-duration), color var(--el-transition-duration);
			background-color: #141414;
			*{
				color:#fff;
			}
		}
		&.active{
			left:65px;
			transition:left 0.3s, background-color var(--el-transition-duration), color var(--el-transition-duration);
		}
		.left {
			cursor: pointer;
			display:flex;
			align-items:center;
			.el-icon {
				&:hover {
					color: var(--el-color-primary);
				}
				&.active{
					transform: rotate(180deg);
				}
			}
		}
		.right{
			display:flex;
			align-items:center;
			justify-content:flex-end;
			.circle{
				height: 30px;
				width: 30px;
				border-radius: 50%;
				background-color: #e5e6eb;
				margin-right: 10px;
				cursor: pointer;
				.svgIcon{
					height: 16px;
					width: 16px;
				}
				&.dark{
					background-color: #3E3E48;
					.svgIcon{
						color: #D3D3D3;
					}
				}
			}
			.userBox {
				display: flex;
				align-items: center;
				padding: 4px 4px;
				cursor: pointer;
				border-radius: 4px;
			
				&:hover {
					.el-icon {
						
					}
				}
			
				.el-image {
					height: 32px;
					width: 32px;
					border-radius: 50%;
				}
				.svgIcon{
					height: 26px;
					width: 26px;
				}
			
				div {
					font-size: 14px;
					font-weight: bold;
					margin: 0 6px;
					max-width: 100px;
				}
			}
		}
	}
</style>
