import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
	state: () => {
		return {
			collapse: false,
			night: false,
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