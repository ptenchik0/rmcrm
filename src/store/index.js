import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  whoIs: true,
		settings: {},
		tasks: [],
	},
	getters: {
		numTasks: (state) => () => {
			return state.tasks.length
		},
		getTask: (state) => (id) => {
			if (state.notesIds[id] === undefined) {
				return null
			}
			return state.notesIds[id]
		},
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	},
})
