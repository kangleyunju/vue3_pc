import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
	state: () => {
		return {
			collapse: true,
			night: true,
			count:0
		}
	},
	//同步,异步
	actions: {
		test(){
			this.count++
		}
	},
	getters: {
	}
})