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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
