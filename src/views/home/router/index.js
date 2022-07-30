
const homeRoute = [{
	path: 'index',
	name: 'homeIndex',
	component: () => import('@/views/home/page/index.vue'),
	meta: {
		title: '首页'
	}
}]

export default homeRoute