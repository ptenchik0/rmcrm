import Vue from 'vue'
import Vuex from 'vuex'

import TasksService from '../TasksService'


Vue.use(Vuex)


export default new Vuex.Store({
	state: {
	  whoIs: true,
		settings: {},
		tasks: [],
	},
	getters: {
    numTasks(state){
      return state.tasks.length
    },
    allTasks(state){
      return state.tasks.filter(function (task) {
        return task.status !== 'trash';
      })
    },
    trashTasks(state){
      return  state.tasks.filter(function (task) {
        return task.status === 'trash';
      })
    },

		/*numTasks: (state) => () => {
			return state.tasks.length
		},*/
		getTask: (state) => (id) => {
			if (state.notesIds[id] === undefined) {
				return null
			}
			return state.notesIds[id]
		},
	},
	mutations: {
	  updateTasks(state, tasks){
	    state.tasks = tasks
    }
	},
  actions: {
	  fetchTasks(context) {
      const tasks  = TasksService.fetchNotes()//[{id:0, title: 'Some title'}]
      context.commit('updateTasks', tasks);
    }
  },
  modules: {
  },
})
