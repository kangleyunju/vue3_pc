<template>
	<div class="headerContainer noCopy" :class="{active:collapse,black:night}">
		<div class="left">
			<el-icon :size="20" @click="toCollapse" :class="{active:collapse}">
				<Fold />
			</el-icon>
		</div>
		<div class="right">
			<el-switch @change="changeNight" v-model="night" inline-prompt :active-icon="Moon" :inactive-icon="Sunny" active-color="#333" inactive-color="#bbb"/>
			<el-dropdown @command="handleCommand" popper-class="userBox">
				<div class="userBox">
					<el-image :src="user.face" />
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
	import { ref ,computed} from 'vue'
	import { ElMessage } from 'element-plus'
	import { useStore } from "vuex"
	import { Moon, Sunny } from '@element-plus/icons-vue'
	const store = useStore();
	const collapse = computed(() => store.state.collapse);
	const toCollapse = () => {
		store.commit('toCollapse');
	}
	const night= computed(() => store.state.night)
	const changeNight = (e) => {
		store.commit('changeNight');
	}
	let user = ref({
		face: require("@/assets/home/face.jpg"),
		name: '古天乐'
	})
	const handleCommand = (command: string | number | object) => {
		ElMessage(`click on item ${command}`)
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
