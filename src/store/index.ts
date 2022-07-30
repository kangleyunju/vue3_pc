import { createStore } from 'vuex'

export default createStore({
  state: {
	  collapse:false,//菜单是否折叠
	  night:false//是否黑夜
  },
  mutations: {
  	  toCollapse(state){
  		  state.collapse=!state.collapse
  	  },
	  changeNight(state){
		  state.night=!state.night
	  }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
