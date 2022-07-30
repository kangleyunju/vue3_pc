<template>
	<div class="menuContainer" :class="{active:collapse,black:night}">
		<div class="logoBox">
			<img src="@/assets/home/logo.png"/>
			<div>VUE后台</div>
		</div>
		<el-menu class="noCopy" :collapse="collapse">
			<template v-for="item in list" >
				<el-sub-menu v-if="item.children" :index="item.path" :key="item.path">
					<template #title>
						<el-icon><location /></el-icon>
						<span>{{item.title}}</span>
					</template>
					<template v-for="item2 in item.children">
						<el-sub-menu v-if="item2.children" :index="item2.path" :key="item2.path">
							<template #title>
								<span>{{item2.title}}</span>
							</template>
							<el-menu-item v-for="item3 in item2.children" :index="item3.path" :key="item3.path">
								<span>{{item3.title}}</span>
							</el-menu-item>
						</el-sub-menu>
						<el-menu-item v-else :index="item2.path" :key="item2.path">
							<template #title>{{item2.title}}</template>
						</el-menu-item>
					</template>
				</el-sub-menu>
				<el-menu-item v-else :index="item.path" :key="item.path">
					<el-icon><location /></el-icon>
					<template #title>{{item.title}}</template>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script setup>
	import { storeToRefs } from "pinia"
	import { useStore } from '@/store'
	
	const store = useStore()
	const { collapse, night } = storeToRefs(store)
	
	let list=ref([
		{
			title: "首页",
			name:"index",
			path: "/home/index",
			icon: 'el-icon-home'
		},
		{
			title: "功能",
			name:"function",
			path: "/function",
			icon: 'function',
			children: [{
					title: "导入导出",
					name:'excel',
					path: "/excel"
				}
			]
		},
		{
			title: "三级目录",
			name:"operationManage",
			path: "/operate",
			icon: 'el-icon-operate',
			children: [{
					title: "文章管理",
					name:'articleManage',
					path: "/article",
					children: [{
							title: "需求管理",
							name:'demandList',
							path: "/article/needList"
						},
						{
							title: "任务管理",
							name:'taskList',
							path: "/article/mainTaskList",
						},
						{
							title: "文章编辑",
							name:'articleTaskList',
							path: "/article/editTaskList"
						}
					]
				}
			]
		}
	])
</script>

<style lang="scss">
	.menuContainer{
		width: 200px;
		position: fixed;
		z-index: 11;
		left: 0;
		top:0;
		bottom: 0;
		box-sizing: border-box;
		border-right: 1px solid #ddd;
		background-color: #fff;
		overflow: hidden;
		transition: width 0.3s, background-color var(--el-transition-duration), color var(--el-transition-duration);
		&.black{
			background-color: #141414;
			border-right: 1px solid #141414;
			transition:width 0.3s, background-color var(--el-transition-duration), color var(--el-transition-duration);
			*{
				color:#fff;
			}
		}
		&.active{
			width: 65px;
			transition: width 0.3s, background-color var(--el-transition-duration), color var(--el-transition-duration);
		}
		.el-menu{
			background-color:transparent;
			border: none;
			box-sizing: border-box;
			height: 100%;
			&:not(.el-menu--collapse) {
			  width: 200px;
			}
		}
		.logoBox{
			padding: 0 18px;
			display: flex;
			align-items: center;
			height: 60px;
			flex-wrap: nowrap;
			overflow: hidden;
			img{
				height: 29px;
			}
			div{
				font-size: 16px;
				font-weight: 600;
				margin-left: 18px;
				white-space:nowrap;
			}
		}
	}
</style>