import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/views/home/page/layout.vue'
import homeRoute from '@/views/home/router/index'

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/home/index"
	},
	{
		path: "/home",
		component: layout,
		children: homeRoute
	}
	//  {
	//         path: '/',
	//         name: 'home',
	//         component: () => import('@/views/home/page/layout.vue'), // 注意这里要带上 文件后缀.vue
	// }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
