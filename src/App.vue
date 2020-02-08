<template>
	<Content app-name="rmcrm" :class="{loading: loading.notes}">
		<Navigation @updateStatus="updateStatus" />

		<router-view :tasks="tasks" />

		<Sidebar :show="show" />
	</Content>
</template>

<script>

import { Content } from '@nextcloud/vue/dist/Components/Content'
import Navigation from './components/Navigation.vue'
import Sidebar from './components/Sidebar.vue'

export default {
	name: 'App',
	components: {
		Navigation,
		Content,
		Sidebar,
	},
	data() {
		return {
			loading: {
				notes: true,
				create: false,
			},
			date: Date.now() + 86400000 * 3,
			date2: Date.now() + 86400000 * 3 + Math.floor(Math.random() * 86400000 / 2),
			show: true,
			starred: false,
      tasks: []
		}
	},
  beforeMount(){
	    this.$store.dispatch('fetchTasks');
  },
  mounted(){
      this.tasks = this.$store.getters.allTasks;
  },
	computed: {
      /*tasks(){
          return this.$store.getters.allTasks;
      }*/
	},
  methods: {
      updateStatus(status) {
          this.tasks = this.$store.getters.trashTasks;
          console.log(status);
      }
  }

	/* created() {
		this.$router.push({ name: 'home' })
	}, */
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0 auto;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

</style>
